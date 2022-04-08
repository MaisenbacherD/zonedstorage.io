---
id: zns-fio
title: ZNS Examples
sidebar_label: ZNS Examples
---

To avoid additional overhead, the *mq-deadline* scheduler may be disabled for the
following *fio* examples.
This is possible because the write workload uses the *psync* ioengine, which
synchronizes the write commands. In addition each write job operates on a
different sets of zones. Therefore, *mq-deadline* can be avoided, and the zone
write pointers are still advanced in order to comply with the sequential write
constraint.

For read workloads the sequential write constraint is not violated and reads can
be issued out of order without *mq-deadline* being enabled.

*fio* runs that enable *psync*, can emulate a *iodepth* like behavior by using the
*numjobs* parameter in combination with `offset_increment == size`. This results
in *numjobs* asynchronous operations that use a dedicated set of zones, which
demonstrates the parallel performance potential.

Since ZNS devices have a sequential write constraint, only sequential writes are
benchmarked. Benchmarking random writes with *fio* is not trivial because the
writes will eventually end up being sequentially written to the ZNS device,
therefore the results will be influenced by *fio*'s scheduling.

:::note
Before issuing writes on a ZNS drive the zones should be reset by calling:
```
# blkzone reset /dev/nvmeXnX
```
:::

## Sequential writes
Assuming that the drive to be benchmarked has `max_open_zones=14` and more than
112 zones (`= offset_increment * max(numjobs)`), a write workload may be issued
like the following example shows:
```
# fio --ioengine=psync --direct=1 --filename=/dev/nvmeXnX --rw=write \
      --bs=64k --group_reporting --zonemode=zbd --name=seqwrite \
      --offset_increment=8z --size=8z --numjobs=14

seqwrite: (g=0): rw=write, bs=(R) 64.0KiB-64.0KiB, (W) 64.0KiB-64.0KiB, (T) 64.0KiB-64.0KiB, ioengine=psync, iodepth=1
...
fio-3.30
Starting 14 processes
Jobs: 2 (f=2): [_(2),W(1),_(1),W(1),_(9)][52.5%][w=1878MiB/s][w=30.1k IOPS][eta 00m:56s]
seqwrite: (groupid=0, jobs=14): err= 0: pid=2965287: Mon Apr 11 13:08:10 2022
  write: IOPS=31.2k, BW=1949MiB/s (2043MB/s)(118GiB/61898msec); 0 zone resets
    clat (usec): min=42, max=26392, avg=446.53, stdev=274.82
     lat (usec): min=43, max=26393, avg=447.17, stdev=274.82
    clat percentiles (usec):
     |  1.00th=[   71],  5.00th=[  102], 10.00th=[  139], 20.00th=[  212],
     | 30.00th=[  285], 40.00th=[  359], 50.00th=[  429], 60.00th=[  494],
     | 70.00th=[  570], 80.00th=[  644], 90.00th=[  758], 95.00th=[  857],
     | 99.00th=[ 1123], 99.50th=[ 1319], 99.90th=[ 2212], 99.95th=[ 2573],
     | 99.99th=[ 6456]
   bw (  MiB/s): min= 1699, max= 2084, per=100.00%, avg=1953.07, stdev= 6.12, samples=1722
   iops        : min=27188, max=33348, avg=31249.04, stdev=97.85, samples=1722
  lat (usec)   : 50=0.01%, 100=4.74%, 250=20.35%, 500=35.55%, 750=29.06%
  lat (usec)   : 1000=8.39%
  lat (msec)   : 2=1.75%, 4=0.14%, 10=0.01%, 20=0.01%, 50=0.01%
  cpu          : usr=0.67%, sys=2.40%, ctx=1930139, majf=0, minf=196
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=0,1929984,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
  WRITE: bw=1949MiB/s (2043MB/s), 1949MiB/s-1949MiB/s (2043MB/s-2043MB/s), io=118GiB (126GB), run=61898-61898msec

Disk stats (read/write):
  nvme4n2: ios=296/1929737, merge=0/0, ticks=49/848309, in_queue=848358, util=99.91%
```
The parameters *bs* and *numjobs* can be variated to benchmark different
workload patterns.

## Random and sequential reads
Assuming that the drive to be benchmarked has `max_open_zones=14` and more than
140 zones (`= offset_increment * max(numjobs)`), the drive must be prepared with
data to read of the device, like the example shows.
:::note
If the drive is not prepared for the read workload's address range, *fio*
reports wrong performance numbers.
:::

### Write prepare
```
# fio --ioengine=psync --direct=1 --filename=/dev/nvmeXnX --rw=write --bs=128k \
      --group_reporting --zonemode=zbd --name=writeprepare \
      --offset_increment=10z --size=10z --numjobs=14

writeprepare: (g=0): rw=write, bs=(R) 128KiB-128KiB, (W) 128KiB-128KiB, (T) 128KiB-128KiB, ioengine=psync, iodepth=1
...
fio-3.30
Starting 14 processes
Jobs: 14 (f=14): [W(14)][52.3%][w=1958MiB/s][w=15.7k IOPS][eta 01m:11s]
writeprepare: (groupid=0, jobs=14): err= 0: pid=2965349: Mon Apr 11 13:09:33 2022
  write: IOPS=15.4k, BW=1920MiB/s (2013MB/s)(147GiB/78542msec); 0 zone resets
    clat (usec): min=73, max=36732, avg=907.45, stdev=542.99
     lat (usec): min=74, max=36733, avg=908.71, stdev=542.99
    clat percentiles (usec):
     |  1.00th=[  135],  5.00th=[  212], 10.00th=[  293], 20.00th=[  449],
     | 30.00th=[  594], 40.00th=[  725], 50.00th=[  865], 60.00th=[ 1012],
     | 70.00th=[ 1156], 80.00th=[ 1319], 90.00th=[ 1516], 95.00th=[ 1696],
     | 99.00th=[ 2180], 99.50th=[ 2606], 99.90th=[ 3589], 99.95th=[ 4228],
     | 99.99th=[15270]
   bw (  MiB/s): min= 1531, max= 2083, per=100.00%, avg=1923.98, stdev= 6.27, samples=2184
   iops        : min=12254, max=16666, avg=15391.73, stdev=50.17, samples=2184
  lat (usec)   : 100=0.10%, 250=7.20%, 500=16.39%, 750=17.84%, 1000=17.79%
  lat (msec)   : 2=39.03%, 4=1.59%, 10=0.04%, 20=0.02%, 50=0.01%
  cpu          : usr=0.48%, sys=1.57%, ctx=1206371, majf=0, minf=205
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=0,1206240,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
  WRITE: bw=1920MiB/s (2013MB/s), 1920MiB/s-1920MiB/s (2013MB/s-2013MB/s), io=147GiB (158GB), run=78542-78542msec

Disk stats (read/write):
  nvme4n2: ios=198/1205198, merge=0/0, ticks=31/1083107, in_queue=1083138, util=99.93%
```

### Sequential read
```
# fio --ioengine=psync --direct=1 --filename=/dev/nvmeXnX --rw=read \
      --offset_increment=4z --size=4z --group_reporting --zonemode=zbd \
      --bs=128k --name=seqread --numjobs=32

seqread: (g=0): rw=read, bs=(R) 128KiB-128KiB, (W) 128KiB-128KiB, (T) 128KiB-128KiB, ioengine=psync, iodepth=1
...
fio-3.30
Starting 32 processes
Jobs: 18 (f=18): [_(1),R(4),_(1),R(1),_(2),R(5),_(5),R(2),_(2),R(3),_(2),R(3),_(1)][51.7%][r=2904MiB/s][r=23.2k IOPS][eta 00m:43s]
seqread: (groupid=0, jobs=32): err= 0: pid=2965412: Mon Apr 11 13:10:20 2022
  read: IOPS=23.8k, BW=2980MiB/s (3125MB/s)(135GiB/46262msec)
    clat (usec): min=71, max=13472, avg=1326.26, stdev=766.61
     lat (usec): min=72, max=13473, avg=1326.40, stdev=766.62
    clat percentiles (usec):
     |  1.00th=[  490],  5.00th=[  586], 10.00th=[  652], 20.00th=[  766],
     | 30.00th=[  873], 40.00th=[  988], 50.00th=[ 1106], 60.00th=[ 1270],
     | 70.00th=[ 1450], 80.00th=[ 1745], 90.00th=[ 2245], 95.00th=[ 2802],
     | 99.00th=[ 4228], 99.50th=[ 4883], 99.90th=[ 6456], 99.95th=[ 7177],
     | 99.99th=[ 8979]
   bw (  MiB/s): min= 2666, max= 3766, per=100.00%, avg=3004.31, stdev= 5.66, samples=2903
   iops        : min=21330, max=30122, avg=24034.38, stdev=45.28, samples=2903
  lat (usec)   : 100=0.01%, 500=1.27%, 750=17.32%, 1000=22.44%
  lat (msec)   : 2=44.86%, 4=12.85%, 10=1.24%, 20=0.01%
  cpu          : usr=0.21%, sys=1.25%, ctx=1103013, majf=0, minf=1537
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=1102848,0,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
   READ: bw=2980MiB/s (3125MB/s), 2980MiB/s-2980MiB/s (3125MB/s-3125MB/s), io=135GiB (145GB), run=46262-46262msec

Disk stats (read/write):
  nvme4n2: ios=1102019/0, merge=0/0, ticks=1451098/0, in_queue=1451098, util=99.82%
```
The parameters *bs* and *numjobs* can be variated to benchmark different
workload patterns. On read workloads the parameter *numjobs* may exceed the
*max_open_zones* limit since a zone does not need to be opened for reads.

### Random read
```
# fio --ioengine=io_uring --direct=1 --filename=/dev/nvmeXnX --rw=randread \
      --size=128z --zonemode=zbd --bs=128k --name=randread --iodepth=32

randread: (g=0): rw=randread, bs=(R) 128KiB-128KiB, (W) 128KiB-128KiB, (T) 128KiB-128KiB, ioengine=io_uring, iodepth=32
fio-3.30
Starting 1 process
Jobs: 1 (f=1): [r(1)][100.0%][r=2996MiB/s][r=24.0k IOPS][eta 00m:00s]
randread: (groupid=0, jobs=1): err= 0: pid=2965487: Mon Apr 11 13:11:47 2022
  read: IOPS=24.0k, BW=3000MiB/s (3146MB/s)(256GiB/87382msec)
    slat (usec): min=5, max=508, avg= 7.70, stdev= 1.43
    clat (usec): min=172, max=17241, avg=1324.78, stdev=777.99
     lat (usec): min=343, max=17249, avg=1332.57, stdev=777.98
    clat percentiles (usec):
     |  1.00th=[  486],  5.00th=[  578], 10.00th=[  652], 20.00th=[  766],
     | 30.00th=[  873], 40.00th=[  988], 50.00th=[ 1106], 60.00th=[ 1254],
     | 70.00th=[ 1450], 80.00th=[ 1745], 90.00th=[ 2245], 95.00th=[ 2802],
     | 99.00th=[ 4293], 99.50th=[ 4948], 99.90th=[ 6652], 99.95th=[ 7439],
     | 99.99th=[ 9503]
   bw (  MiB/s): min= 2968, max= 3031, per=100.00%, avg=3001.77, stdev=11.72, samples=174
   iops        : min=23748, max=24252, avg=24014.14, stdev=93.78, samples=174
  lat (usec)   : 250=0.01%, 500=1.39%, 750=17.48%, 1000=22.49%
  lat (msec)   : 2=44.65%, 4=12.68%, 10=1.30%, 20=0.01%
  cpu          : usr=3.42%, sys=22.65%, ctx=1544823, majf=0, minf=1036
  IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=100.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.1%, 64=0.0%, >=64=0.0%
     issued rwts: total=2097152,0,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=32

Run status group 0 (all jobs):
   READ: bw=3000MiB/s (3146MB/s), 3000MiB/s-3000MiB/s (3146MB/s-3146MB/s), io=256GiB (275GB), run=87382-87382msec

Disk stats (read/write):
  nvme4n2: ios=2097016/0, merge=0/0, ticks=2779197/0, in_queue=2779197, util=99.95%
```
The parameters *bs* and `iodepth` can be variated to benchmark different
workload patterns.

More ZNS benchmarking examples and scripts can be found in the
[ZBDBench](https://github.com/westerndigitalcorporation/zbdbench) repository.
After satisfying the prerequisites of ZBDBench, the benchmarks above are
executed when calling:
```
# python3 ./run.py -d /dev/nvmeXnX -b fio_zone_throughput_avg_lat --none-scheduler
```

## Read random while writing sequentially
The following job file shows an example for a mixed workload with 30% of writes
and 70% of reads. It expects the first 32 zones to be prepared (see [Write
prepare](#write-prepare)) as the reads are issued in this range.
The writer is offset by 256 zones, thus the drive to be benchmarked needs to have
then 264 zones  (`= write_offset + write_size`).

`zbd-read-while-write.fio`:
```
[global]
bs=32k
direct=1
zonemode=zbd
name=readwhilewriting
time_based
runtime=30
numjobs=1

[write]
ioengine=psync
rw=write
iodepth=1
offset=256z
offset_increment=8z
size=8z
flow=-3

[randread]
ioengine=io_uring
rw=randread
iodepth=32
size=32z
offset=0
flow=7
```

```
# fio --filename=/dev/nvmeXnX <path_to>/zbd-read-while-write.fio

write: (g=0): rw=write, bs=(R) 32.0KiB-32.0KiB, (W) 32.0KiB-32.0KiB, (T) 32.0KiB-32.0KiB, ioengine=psync, iodepth=1
randread: (g=0): rw=randread, bs=(R) 32.0KiB-32.0KiB, (W) 32.0KiB-32.0KiB, (T) 32.0KiB-32.0KiB, ioengine=io_uring, iodepth=32
fio-3.30
Starting 2 processes
Jobs: 2 (f=2): [W(1),r(1)][100.0%][r=2282MiB/s,w=654MiB/s][r=73.0k,w=20.9k IOPS][eta 00m:00s]
write: (groupid=0, jobs=1): err= 0: pid=2965540: Mon Apr 11 13:12:18 2022
  write: IOPS=20.9k, BW=655MiB/s (686MB/s)(19.2GiB/30001msec); 11 zone resets
    clat (usec): min=30, max=2052, avg=46.50, stdev=11.41
     lat (usec): min=30, max=2053, avg=46.76, stdev=11.42
    clat percentiles (usec):
     |  1.00th=[   34],  5.00th=[   35], 10.00th=[   37], 20.00th=[   39],
     | 30.00th=[   41], 40.00th=[   43], 50.00th=[   45], 60.00th=[   47],
     | 70.00th=[   50], 80.00th=[   53], 90.00th=[   60], 95.00th=[   67],
     | 99.00th=[   84], 99.50th=[   91], 99.90th=[  109], 99.95th=[  117],
     | 99.99th=[  139]
   bw (  KiB/s): min=632256, max=681792, per=100.00%, avg=670854.51, stdev=10692.34, samples=59
   iops        : min=19758, max=21306, avg=20964.17, stdev=334.18, samples=59
  lat (usec)   : 50=71.79%, 100=28.00%, 250=0.20%, 500=0.01%, 750=0.01%
  lat (usec)   : 1000=0.01%
  lat (msec)   : 2=0.01%, 4=0.01%
  cpu          : usr=4.66%, sys=13.32%, ctx=628419, majf=0, minf=16
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=0,628364,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1
randread: (groupid=0, jobs=1): err= 0: pid=2965541: Mon Apr 11 13:12:18 2022
  read: IOPS=72.4k, BW=2263MiB/s (2373MB/s)(66.3GiB/30001msec)
    slat (nsec): min=2485, max=66236, avg=4324.13, stdev=1422.03
    clat (usec): min=127, max=3564, avg=436.49, stdev=225.70
     lat (usec): min=131, max=3570, avg=440.90, stdev=225.69
    clat percentiles (usec):
     |  1.00th=[  184],  5.00th=[  206], 10.00th=[  225], 20.00th=[  262],
     | 30.00th=[  297], 40.00th=[  334], 50.00th=[  379], 60.00th=[  424],
     | 70.00th=[  486], 80.00th=[  570], 90.00th=[  725], 95.00th=[  881],
     | 99.00th=[ 1254], 99.50th=[ 1418], 99.90th=[ 1778], 99.95th=[ 1958],
     | 99.99th=[ 2376]
   bw (  MiB/s): min= 2216, max= 2316, per=100.00%, avg=2265.05, stdev=30.28, samples=59
   iops        : min=70940, max=74142, avg=72481.66, stdev=968.82, samples=59
  lat (usec)   : 250=17.07%, 500=54.97%, 750=19.17%, 1000=5.84%
  lat (msec)   : 2=2.92%, 4=0.04%
  cpu          : usr=11.95%, sys=37.42%, ctx=1039473, majf=0, minf=269
  IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=100.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.1%, 64=0.0%, >=64=0.0%
     issued rwts: total=2173025,0,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=32

Run status group 0 (all jobs):
   READ: bw=2263MiB/s (2373MB/s), 2263MiB/s-2263MiB/s (2373MB/s-2373MB/s), io=66.3GiB (71.2GB), run=30001-30001msec
  WRITE: bw=655MiB/s (686MB/s), 655MiB/s-655MiB/s (686MB/s-686MB/s), io=19.2GiB (20.6GB), run=30001-30001msec

Disk stats (read/write):
  nvme4n2: ios=2163861/625703, merge=0/0, ticks=938602/26464, in_queue=965065, util=99.75%
```

The parameters *bs*, *flow* and *numjobs* can be variated to benchmark different
workload patterns.

