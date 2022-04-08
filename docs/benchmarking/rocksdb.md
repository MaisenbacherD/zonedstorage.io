---
id: rocksdb
title: RocksDB - ZenFS Example
sidebar_label: RocksDB - ZenFS Example
---

> ZenFS is a file system plugin that utilizes
> [RocksDB](https://github.com/facebook/rocksdb)'s FileSystem interface to place
> files into zones on a raw zoned block device.
>
> -- <cite>[ZenFS](https://github.com/westerndigitalcorporation/zenfs)</cite>

To setup ZenFS on a ZNS device follow the instructions
[here](https://github.com/westerndigitalcorporation/zenfs#getting-started).
Basic `db_bench` performance testing can be done by following the instructions
[here](https://github.com/westerndigitalcorporation/zenfs#performance-testing).

The results from '[ZNS: Avoiding the Block Interface Tax for Flash-based
SSDs](https://www.pdl.cmu.edu/PDL-FTP/Storage/USENIX_ATC_2021_ZNS.pdf)' section
5.2 can be replicated by using
[ZBDBench](https://github.com/westerndigitalcorporation/zbdbench)'s `rocksdb`
benchmark calling the following line after satisfying the prerequisites of
ZBDBench:
```plaintext
# python3 ./run.py -d /dev/nvmeXnX -b rocksdb
```
TODO: This test does not replicate the results of the paper (targets 2TB drive 

with 256MB file size for the conventional file systems-> read in paper if correct).
