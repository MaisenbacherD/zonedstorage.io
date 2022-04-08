---
id: myrocks
title: MyRocks - ZenFS Example
sidebar_label: MyRocks - ZenFS Example
---

> [MyRocks](http://myrocks.io/) is a storage engine for
> [MySQL](https://www.mysql.com/) based on [RocksDB](http://rocksdb.org/), an
> embeddable, persistent key-value store.
> Percona MyRocks is an implementation for
> [Percona Server for MySQL](https://www.percona.com/software/mysql-database/percona-server).
>
> -- <cite>[Percona](https://www.percona.com/doc/percona-server/8.0/myrocks/index.html)</cite>

> ZenFS is a file system plugin that utilizes
> [RocksDB](https://github.com/facebook/rocksdb)'s FileSystem interface to place
> files into zones on a raw zoned block device.
>
> -- <cite>[ZenFS](https://github.com/westerndigitalcorporation/zenfs)</cite>

## Setup
The benchmarking tool [sysbench](https://github.com/akopytov/sysbench) can be
used to report the performance of MyRocks backed by ZNS drives.

> sysbench is a scriptable multi-threaded benchmark tool based on LuaJIT. It is
> most frequently used for database benchmarks, but can also be used to create
> arbitrarily complex workloads that do not involve a database server.
> -- <cite>[sysbench](https://github.com/akopytov/sysbench)</cite>

Follow the sysbench [Building and Installing From Source
instructions](https://github.com/akopytov/sysbench#building-and-installing-from-source). 

Percona MyRocks comes with ZNS support through ZenFS. The 'Installation' and
'Configuration' sections of [this
document](https://github.com/percona/percona-server/blob/8.0/doc/source/myrocks/zenfs.rst)
must be followed to install and prepare Percona MyRocks for the sysbench
benchmarks below.

### Modifying Linux Open File Limits 
After a successful installation the number of open files descriptors for the
root user and the MySQL application need to be increased by following the steps
below. The limits may need to be modified to meet your workload goals and
objectives, and hardware specification.

1.Edit the limit configuration file `/etc/security/limits.conf` and add entries
with the item parameter `nofile` for the MySQL user `root`:
```plaintext
root       hard  nofile    500000 
root       soft  nofile    500000 
```

2.Edit the common-session file `/etc/pam.d/common-session` and add the statement
below:
```plaintext
session required        pam_limits.so 
```

3.Edit the system control configuration file `/etc/sysctl.conf`, adding the max
file value:
```plaintext
fs.file-max = 2097152
```

4.Edit system control file and set the number file limit to higher value: 
```plaintext
# systemctl edit --full mysql
LimitNOFILE = 500000 
```

5.Reload the daemon and check if changes have been applied:
```plaintext
# systemctl daemon-reload
# service mysql restart
# sysctl -p 
# cat /proc/$(pgrep -x mysqld)/limits
# cat /proc/sys/fs/file-max
```

## Benchmarking
Finally the test database can be created:
```plaintext
# mysql -u root -p
mysql> create database sbtest;
mysql> quit
```

### Sysbench Prepare
Prepare the database tables using the bulk load feature of the Percona Server
which saves data on load time by setting the bulkload flag and disabling
binlogging in `/etc/mysql/mysql.conf.d/mysqld.cnf`: 
```plaintext
$ service mysql stop
$ mv /etc/mysql/mysql.conf.d/mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf-bkup
$ cp <path-to>/bulkload-mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
$ service mysql restart
# <path-to-sysbench-luas>/oltp_write_only.lua --db-driver=mysql --mysql-user=root --time=0 --create_secondary=off --mysql-password=<password> --mysql-host=localhost --mysql-db=sbtest --mysql-storage-engine=rocksdb --table-size=1000000000 --tables=20 --threads=64 --report-interval=5 prepare

```
MySQL first searches the configuration file at `/etc/my.cnf` which should
reference to `/etc/mysql/mysql.conf.d/mysqld.cnf` ([MySQL
documentation](https://dev.mysql.com/doc/refman/8.0/en/option-files.html)).

`bulkload-mysqld.cnf`:
```plaintext
[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
log-error       = /var/log/mysql/error.log
loose-rocksdb-fs-uri=zenfs://dev:nvme0n2

default-storage-engine=rocksdb
plugin-load-add=rocksdb=ha_rocksdb.so
default-tmp-storage-engine=MyISAM

# binary log
disable-log-bin

# general
table_open_cache=256K
table_open_cache_instances=64
rocksdb_bulk_load=1
rocksdb_block_cache_size=256G

# connections
ssl=0
connect_timeout=120
back_log=4K
max_connections=4K
max_prepared_stmt_count=4M

# RocksDB
rocksdb_max_open_files=-1
rocksdb_max_background_jobs=8
rocksdb_max_total_wal_size=4G
rocksdb_block_size=16K
rocksdb_table_cache_numshardbits=6

# triggering compaction if there are many sequential deletes
rocksdb_compaction_sequential_deletes_count_sd=1
rocksdb_compaction_sequential_deletes=199999
rocksdb_compaction_sequential_deletes_window=200000

rocksdb_default_cf_options="write_buffer_size=512M;target_file_size_base=1G;max_bytes_for_level_base=512M;level0_file_num_compaction_trigger=4;level0_slowdown_writes_trigger=10;max_write_buffer_number=8;compression=kLZ4Compression;bottommost_compression=kLZ4Compression;compression_opts=-14:4:0;block_based_table_factory={cache_index_and_filter_blocks=1;filter_policy=bloomfilter:10:false;whole_key_filtering=0};level_compaction_dynamic_level_bytes=true;optimize_filters_for_hits=true;memtable_prefix_bloom_size_ratio=0.05;prefix_extractor=capped:12;compaction_pri=kMinOverlappingRatio"

rocksdb_max_subcompactions=4
rocksdb_use_direct_reads=ON
rocksdb_use_direct_io_for_flush_and_compaction=ON
```

### Run sysbench workloads
Before starting the benchmarking workloads the bulkload must be disabled and
binlogging should be enabled:
```plaintext
$ service mysql stop
$ mv /etc/mysql/mysql.conf.d/mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf-bulkload-bkup
$ cp <path-to>/workload-mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
$ service mysql restart
# <path-to-sysbench-luas>/oltp_update_index.lua --db-driver=mysql --mysql-user=root --time=3600 --create_secondary=off --mysql-password=<password> --mysql-host=localhost --mysql-db=sbtest --mysql-storage-engine=rocksdb --table-size=1000000000 --tables=20 --threads=64 --report-interval=5 run
```

Depending on the desired workload `oltp_update_index.lua` might be replaced
along with different sysbench parameters like `--table-size`.
For read workloads the database should contain the specified table dimensions.
ZNS shines at the point when conventional SSDs are in their [steady
state](https://www.snia.org/sites/default/files/UnderstandingSSDPerformance.Jan12.web*.pdf).
Therefore, filling the drive with a sequential workload and overwriting it with a
random workload afterwards should be considered.

`workload-mysqld.cnf`:
```plaintext
[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
log-error       = /var/log/mysql/error.log
loose-rocksdb-fs-uri=zenfs://dev:nvme0n2

default-storage-engine=rocksdb
plugin-load-add=rocksdb=ha_rocksdb.so
default-tmp-storage-engine=MyISAM

# binary log
binlog_space_limit=4G
sync_binlog=1K

# general
table_open_cache=256K
table_open_cache_instances=64
rocksdb_bulk_load=0
rocksdb_block_cache_size=256G

# connections
ssl=0
connect_timeout=120
back_log=4K
max_connections=4K
max_prepared_stmt_count=4M

# RocksDB
rocksdb_max_open_files=-1
rocksdb_max_background_jobs=8
rocksdb_max_total_wal_size=4G
rocksdb_block_size=16K
rocksdb_table_cache_numshardbits=6

# triggering compaction if there are many sequential deletes
rocksdb_compaction_sequential_deletes_count_sd=1
rocksdb_compaction_sequential_deletes=199999
rocksdb_compaction_sequential_deletes_window=200000

rocksdb_default_cf_options="write_buffer_size=512M;target_file_size_base=1G;max_bytes_for_level_base=512M;level0_file_num_compaction_trigger=4;level0_slowdown_writes_trigger=10;max_write_buffer_number=8;compression=kLZ4Compression;bottommost_compression=kLZ4Compression;compression_opts=-14:4:0;block_based_table_factory={cache_index_and_filter_blocks=1;filter_policy=bloomfilter:10:false;whole_key_filtering=0};level_compaction_dynamic_level_bytes=true;optimize_filters_for_hits=true;memtable_prefix_bloom_size_ratio=0.05;prefix_extractor=capped:12;compaction_pri=kMinOverlappingRatio"

rocksdb_max_subcompactions=4
rocksdb_use_direct_reads=ON
rocksdb_use_direct_io_for_flush_and_compaction=ON
```

TODO: Percona-server installation instructions are not completely correct. Also remove nvme0n2 from the configuration files.
TODO: Example outputs
TODO: Mention preping with fio workload
