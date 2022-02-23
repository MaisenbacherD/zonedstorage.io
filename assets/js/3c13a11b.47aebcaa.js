"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[530],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=l(n),h=s,k=m["".concat(d,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),o=["components"],r={id:"smr-disk",title:"Getting Started with SMR Hard-Disks",sidebar_label:"Getting Started with SMR Hard-Disks"},d="Getting Started with SMR Hard-Disks",l={unversionedId:"getting-started/smr-disk",id:"getting-started/smr-disk",title:"Getting Started with SMR Hard-Disks",description:"Hard disk drives that use Shingled Magnetic Recording",source:"@site/docs/getting-started/smr-disk.md",sourceDirName:"getting-started",slug:"/getting-started/smr-disk",permalink:"/docs/getting-started/smr-disk",tags:[],version:"current",frontMatter:{id:"smr-disk",title:"Getting Started with SMR Hard-Disks",sidebar_label:"Getting Started with SMR Hard-Disks"},sidebar:"docs",previous:{title:"Zoned Block Device Emulation with nullblk",permalink:"/docs/getting-started/nullblk"},next:{title:"Getting Started with Emulated SMR Hard-Disks",permalink:"/docs/getting-started/smr-emulation"}},c=[{value:"Serial ATA ZAC Disks and SATA Host Controllers",id:"serial-ata-zac-disks-and-sata-host-controllers",children:[{value:"Verifying The Disk",id:"verifying-the-disk",children:[],level:3},{value:"Checking The Disk Information",id:"checking-the-disk-information",children:[],level:3},{value:"Discovering The Disk Zone Configuration",id:"discovering-the-disk-zone-configuration",children:[],level:3}],level:2},{value:"Using a SAS Host Bus Adapter",id:"using-a-sas-host-bus-adapter",children:[{value:"HBA Compatibility",id:"hba-compatibility",children:[],level:3},{value:"Verifying The Disk",id:"verifying-the-disk-1",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-smr-hard-disks"},"Getting Started with SMR Hard-Disks"),(0,i.kt)("p",null,"Hard disk drives that use ",(0,i.kt)("a",{parentName:"p",href:"../introduction/smr"},"Shingled Magnetic Recording"),"\ntechnology can have different interface implementations. This results in\ndifferent usage models:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Drive Managed Interface:")," SMR disks that implement this interface are seen\nby the host kernel and applications as identical to regular disks and do not\nneed special attention. Most Linux","\xae"," kernels recognize these disks. With\nthis implementation, no LBA space zoning information is available to the\nhost. Drive Managed disks are therefore not considered to be zoned block\ndevices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Zoned Block Interface:")," SMR hard-disk drives that implement ZBC and ZAC\nfeature sets provide commands to the host that allow the host to indentify and\ncontrol the device zones. This interface has two different variations, or\nmodel implementations (See ",(0,i.kt)("a",{parentName:"p",href:"../introduction/smr#smr-implementations"},"SMR Interface Implementations"),"):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Host Aware:"),' While this zone model offers the convenience and\nflexibility of Drive Managed disks (for example, random write\ncapabilities), Host Aware disks support the full set of zone commands\ndefined by ZBC and ZAC standards. Host Aware disks can support both\nthe regular block device abstraction ("regular disk") and the\nzoned block device abstraction.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Host Managed"),' This zone model defines a device type that is\ndifferent from the "regular disk" device type. Host Managed disks can\nbe used only as zoned block devices in order to satisfy the strong\nsequential write constraints defined by the model.'))))),(0,i.kt)("p",null,"In the following sections, Host Aware disk models are considered similar to\nzoned block devices, with characteristics similar to the characteristics of\nHost Managed drives. This means that, for Host Aware disk models, sequential\nwrites are assumed to be a constraint for the correct operation of the disk."),(0,i.kt)("h2",{id:"serial-ata-zac-disks-and-sata-host-controllers"},"Serial ATA ZAC Disks and SATA Host Controllers"),(0,i.kt)("p",null,"Serial ATA (SATA) host adapters, including those that use the Advance Host\nController Interface (AHCI) standard, are able to scan and initialize\nconnections with Host Aware disks. Most AHCI host adapters are known to work\nwith Host Managed disk drives (this is because the adapter usually does not\nreact to the device signature of the connected disk)."),(0,i.kt)("h3",{id:"verifying-the-disk"},"Verifying The Disk"),(0,i.kt)("p",null,"On systems that fulfill all ",(0,i.kt)("a",{parentName:"p",href:"./prerequisites"},"prerequisites"),", SATA Host Aware\nDisks and Host Managed Disks can be connected directly to SATA ports on the\nhost controller."),(0,i.kt)("p",null,"After booting the system, use the ",(0,i.kt)("em",{parentName:"p"},"lsscsi")," utility to list all SCSI devices\nattached to the system and verify the presence of the newly-connected disk:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# lsscsi -g\n[2:0:0:0]    disk    ATA      INTEL SSDSC2CT18 335u  /dev/sda   /dev/sg0\n[5:0:0:0]    zbc     ATA      HGST HSH721415AL T220  /dev/sdb   /dev/sg1\n")),(0,i.kt)("p",null,"In this example, the disk '/dev/sda' is the system boot disk and the disk\n'/dev/sdb' is recognized as a ZBC disk."),(0,i.kt)("p",null,"The second column of ",(0,i.kt)("inlineCode",{parentName:"p"},"lsscsi")," output indicates the device type. The value\n",(0,i.kt)("em",{parentName:"p"},"zbc")," is always used for Host Managed ZBC and ZAC disks. This corresponds\nto the ZBC-defined device type ",(0,i.kt)("em",{parentName:"p"},"0x14")," for SAS disks and corresponds to the\nZAC-defined device signature ",(0,i.kt)("em",{parentName:"p"},"0xabcd")," for SATA disks. Because Host Aware\ndisks have the same device type or device signature as regular disks,\nlsscsi lists host aware disks as ",(0,i.kt)("em",{parentName:"p"},"disk"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("em",{parentName:"p"},"lsscsi")," utility does not list SATA ZAC disks with the type ",(0,i.kt)("em",{parentName:"p"},"zac"),". The type\n",(0,i.kt)("em",{parentName:"p"},"zbc")," is always used, because the kernel internally implements a SCSI-to-ATA\ntranslation layer (SAT), which allows SATA devices to be represented as SCSI\ndevices."))),(0,i.kt)("h3",{id:"checking-the-disk-information"},"Checking The Disk Information"),(0,i.kt)("p",null,"Verify the zone model of the disk by checking the ",(0,i.kt)("em",{parentName:"p"},"zoned")," sysfs attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /sys/block/sdb/queue/zoned\nhost-managed\n")),(0,i.kt)("p",null,"The possible values of the ",(0,i.kt)("em",{parentName:"p"},"zoned")," attribute are shown in the table below."),(0,i.kt)("center",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Regular disk or drive managed ZBC/ZAC disk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"host-aware"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Host aware ZBC/ZAC disk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"host-managed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Host managed ZBC/ZAC disk"))))),(0,i.kt)("p",null,"Kernel messages also contain useful information about the disk:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# dmesg\nahci 0000:00:11.5: version 3.0\nahci 0000:00:11.5: AHCI 0001.0301 32 slots 2 ports 6 Gbps 0x3 impl SATA mode\nahci 0000:00:11.5: flags: 64bit ncq sntf led clo only pio slum part ems deso sadm sds apst\n...\nscsi host5: ahci\nata5: SATA max UDMA/133 abar m524288@0x9d100000 port 0x9d100200 irq 55\nata5: SATA link up 6.0 Gbps (SStatus 133 SControl 300)\nata5.00: ATA-9: HGST HSH721414ALN6M0, L4GMT220, max UDMA/133\nata5.00: 27344764928 sectors, multi 0: LBA48 NCQ (depth 32), AA\nata5.00: configured for UDMA/133\n...\nsd 5:0:0:0: Attached scsi generic sg1 type 20\nsd 5:0:0:0: [sdb] Host-managed zoned block device\nsd 5:0:0:0: [sdb] 3662151680 4096-byte logical blocks: (15.0 TB/13.6 TiB)\nsd 5:0:0:0: [sdb] 55880 zones of 65536 logical blocks\nsd 5:0:0:0: [sdb] Write Protect is off\nsd 5:0:0:0: [sdb] Mode Sense: 00 3a 00 00\nsd 5:0:0:0: [sdb] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA\nsd 5:0:0:0: [sdb] Attached SCSI disk\n...\n")),(0,i.kt)("p",null,'The zone model of the disk is confirmed to be "host managed". The total number\nof zones on the disk is also displayed. In this example, the disk capacity is\n15 TB and the disk has 55880 zones.'),(0,i.kt)("p",null,"The zone size of the disk can be inspected by using sysfs to examine the\nattribute ",(0,i.kt)("em",{parentName:"p"},"chunk_sectors"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /sys/block/sdb/queue/chunk_sectors \n524288\n")),(0,i.kt)("p",null,"The value is displayed as a number of 512B sectors regardless of the actual\nlogical and physical block size of the disk. In this example, the disk zone size\nis ",(0,i.kt)("em",{parentName:"p"},"524288 x 512 = 256 MiB"),"."),(0,i.kt)("p",null,"As of Linux kernel version 4.20.0, the sysfs attribute ",(0,i.kt)("em",{parentName:"p"},"nr_zones"),"\nreports the total number of zones on the disk:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /sys/block/sdb/queue/nr_zones\n55880\n")),(0,i.kt)("h3",{id:"discovering-the-disk-zone-configuration"},"Discovering The Disk Zone Configuration"),(0,i.kt)("p",null,"To obtain detailed information on the disk zone configuration, for instance the\nnumber of conventional zones available, the\n",(0,i.kt)("a",{parentName:"p",href:"../tools/util-linux#blkzone"},(0,i.kt)("em",{parentName:"a"},"blkzone"))," utility can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# blkzone report /dev/sdb\n  start: 0x000000000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 0(nw) [type: 1(CONVENTIONAL)]\n  start: 0x000080000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 0(nw) [type: 1(CONVENTIONAL)]\n  start: 0x000100000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 0(nw) [type: 1(CONVENTIONAL)]\n  ...\n  start: 0x010480000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 0(nw) [type: 1(CONVENTIONAL)]\n  start: 0x010500000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 0(nw) [type: 1(CONVENTIONAL)]\n  start: 0x010580000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 0(nw) [type: 1(CONVENTIONAL)]\n  start: 0x010600000, len 0x080000, wptr 0x000008 reset:0 non-seq:0, zcond: 4(cl) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x010680000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x010700000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  ...\n  start: 0x6d2280000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x6d2300000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x6d2380000, len 0x080000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n")),(0,i.kt)("p",null,"From the output, one can see that the 512B sector range from 0 up to\n0x010600000 is divided into 524 conventional zones. The sector space starting\nfrom 0x010600000 until the last sector of the disk is devided into 55356\nsequential write required zones."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../tools/libzbc#zone-information"},(0,i.kt)("em",{parentName:"a"},"zbc_report_zones"))," of\n",(0,i.kt)("a",{parentName:"p",href:"../tools/libzbc"},(0,i.kt)("em",{parentName:"a"},"libzbc"))," provides more detailed information in a more\nreadable format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# zbc_report_zones /dev/sdb\nDevice /dev/sdb:\n    Vendor ID: ATA HGST HSH721415AL T220\n    Zoned block device interface, Host-managed zone model\n    29297213440 512-bytes sectors\n    3662151680 logical blocks of 4096 B\n    3662151680 physical blocks of 4096 B\n    15000.173 GB capacity\n    Read commands are unrestricted\n    Maximum number of open sequential write required zones: 128\n    55880 zones from 0, reporting option 0x00\n55880 / 55880 zones:\nZone 00000: type 0x1 (Conventional), cond 0x0 (Not-write-pointer), sector 0, 524288 sectors\nZone 00001: type 0x1 (Conventional), cond 0x0 (Not-write-pointer), sector 524288, 524288 sectors\nZone 00002: type 0x1 (Conventional), cond 0x0 (Not-write-pointer), sector 1048576, 524288 sectors\n...\nZone 00521: type 0x1 (Conventional), cond 0x0 (Not-write-pointer), sector 273154048, 524288 sectors\nZone 00522: type 0x1 (Conventional), cond 0x0 (Not-write-pointer), sector 273678336, 524288 sectors\nZone 00523: type 0x1 (Conventional), cond 0x0 (Not-write-pointer), sector 274202624, 524288 sectors\nZone 00524: type 0x2 (Sequential-write-required), cond 0x4 (Closed), reset recommended 0, non_seq 0, sector 274726912, 524288 sectors, wp 274726920\nZone 00525: type 0x2 (Sequential-write-required), cond 0x1 (Empty), reset recommended 0, non_seq 0, sector 275251200, 524288 sectors, wp 275251200\nZone 00526: type 0x2 (Sequential-write-required), cond 0x1 (Empty), reset recommended 0, non_seq 0, sector 275775488, 524288 sectors, wp 275775488\n...\nZone 55877: type 0x2 (Sequential-write-required), cond 0x1 (Empty), reset recommended 0, non_seq 0, sector 29295640576, 524288 sectors, wp 29295640576\nZone 55878: type 0x2 (Sequential-write-required), cond 0x1 (Empty), reset recommended 0, non_seq 0, sector 29296164864, 524288 sectors, wp 29296164864\nZone 55879: type 0x2 (Sequential-write-required), cond 0x1 (Empty), reset recommended 0, non_seq 0, sector 29296689152, 524288 sectors, wp 29296689152\n")),(0,i.kt)("h2",{id:"using-a-sas-host-bus-adapter"},"Using a SAS Host Bus Adapter"),(0,i.kt)("p",null,"AHCI adapters can only accomodate Serial ATA disks and generally only provide a\nlimited number of ports. SAS Host Bus Adapters (HBA) are widely used in\nenterprise applications to overcome AHCI limitations. The SAS transport layer\nused by SAS HBAs can equally accomodate both Serial ATA and SCSI disks."),(0,i.kt)("h3",{id:"hba-compatibility"},"HBA Compatibility"),(0,i.kt)("p",null,"While most AHCI adapters for Serial ATA disks generally do not cause any\nproblem with host managed ZAC disks identification, SAS HBAs on the other\nhand may suffer from a lack of support depending on the HBA model being used."),(0,i.kt)("p",null,"The compatibility of a SAS HBA with host managed disks mainly depends on\nthe following factors."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The HBA must have the ability to recognize the host managed device type\n",(0,i.kt)("em",{parentName:"p"},"0x14")," of host managed SAS disks (ZBC/SCSI).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The HBA must have the ability to recognize the host managed device signature\n",(0,i.kt)("em",{parentName:"p"},"0xabcd")," of SATA host managed ZAC disks and translate this signature into\nthe ZBC defined SCSI device type ",(0,i.kt)("em",{parentName:"p"},"0x14"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generalizing the previous point, the HBA must implement a SCSI-to-ATA\ntranslation (SAT) layer supporting the conversion of host issued ZBC zone\ncommands into ZAC zone commands that can be executed by a SATA ZAC disk\nconnected to the HBA."))),(0,i.kt)("p",null,"Any HBA failing the first requirement will not expose a ZBC host managed disk to\nthe host. Similarly, an HBA failing to comply with the second and third\nrequirement will fail to expose to the host a host managed ZAC disk as a ZBC\nhost managed disk."),(0,i.kt)("p",null,"In the case of a host aware disk model, the device type and device signature\nhandling will not cause any problem (recall that host aware disks use the\nregular disk device type and signatur ",(0,i.kt)("em",{parentName:"p"},"0x00"),"). Host aware disks will thus always\nbe useable as regular disks with any HBA. The execution of ZBC zone commands\nwith a SAS host aware disk may also work most of the time. However, similarly\nto host managed disk, the absence of a ZBC/ZAC compatible SAT layer will prevent\nthe use of a Serial ATA host aware disk as a ZBC host aware disk. The ZBC zone\ncommands sent to the SATA disk will not be translated and result in command\nfailures."),(0,i.kt)("p",null,"The compatibility of an HBA model with the ZBC and ZAC standards should be\nchecked with the HBA vendor. Under some conditions, an HBA compatibility can\nalso be checked using the ",(0,i.kt)("a",{parentName:"p",href:"../tests/zbc-tests"},(0,i.kt)("em",{parentName:"a"},"libzbc")," conformance test suite"),"."),(0,i.kt)("h3",{id:"verifying-the-disk-1"},"Verifying The Disk"),(0,i.kt)("p",null,"If you are using a compatible HBA and you have connected the drive and rebooted\nthe system, verifying the disk identification and checking the disk parameters\nand zone configuration can be done in the exact same manner as with Serial ATA\ndisks as discussed above."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember that most SAS HBAs have plug-and-play features that make it unnecessary\nto reboot the system after connecting or disconnecting a disk to it."))),(0,i.kt)("p",null,"In these examples, ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sdc")," is an SAS disk connected to an SAS HBA and\n",(0,i.kt)("em",{parentName:"p"},"/dev/sdd")," is a SATA disk connected to the same HBA."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# lsscsi -g\n[2:0:0:0]    disk    ATA      INTEL SSDSC2CT18 335u  /dev/sda   /dev/sg0\n[5:0:0:0]    zbc     ATA      HGST HSH721415AL T220  /dev/sdb   /dev/sg1\n[10:0:2:0]   zbc     HGST     HSH721414AL52M0  a220  /dev/sdc   /dev/sg2\n[10:0:3:0]   zbc     ATA      HGST HSH721415AL T220  /dev/sdd   /dev/sg3\n")),(0,i.kt)("p",null,"Inspecting the kernel messages shows no differences between the initialization\nof the SAS drive and the SATA disk."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# dmesg\n...\nscsi 10:0:2:0: Direct-Access-ZBC HGST     HSH721414AL52M0  a220 PQ: 0 ANSI: 7\nscsi 10:0:2:0: SSP: handle(0x001b), sas_addr(0x5000cca0000025c5), phy(1), device_name(0x5000cca0000025c7)\nscsi 10:0:2:0: enclosure logical id (0x500062b200f35d40), slot(2)\nscsi 10:0:2:0: enclosure level(0x0000), connector name(     )\nsd 10:0:2:0: Attached scsi generic sg2 type 20\nsd 10:0:2:0: [sdc] Host-managed zoned block device\nsd 10:0:2:0: [sdc] 27344764928 512-byte logical blocks: (14.0 TB/12.7 TiB)\nsd 10:0:2:0: [sdc] 4096-byte physical blocks\nsd 10:0:2:0: [sdc] 52156 zones of 524288 logical blocks\nsd 10:0:2:0: [sdc] Write Protect is off\nsd 10:0:2:0: [sdc] Mode Sense: f7 00 10 08\nsd 10:0:2:0: [sdc] Write cache: enabled, read cache: enabled, supports DPO and FUA\nsd 10:0:2:0: [sdc] Attached SCSI disk\n...\nscsi 10:0:3:0: Direct-Access-ZBC ATA      HGST HSH721415AL T220 PQ: 0 ANSI: 6\nscsi 10:0:3:0: SATA: handle(0x001c), sas_addr(0x300062b200f35d43), phy(3), device_name(0x5000cca25bc2e26f)\nscsi 10:0:3:0: enclosure logical id (0x500062b200f35d40), slot(1)\nscsi 10:0:3:0: enclosure level(0x0000), connector name(     )\nscsi 10:0:3:0: atapi(n), ncq(y), asyn_notify(n), smart(y), fua(y), sw_preserve(y)\nsd 10:0:3:0: Attached scsi generic sg3 type 20\nsd 10:0:3:0: [sdd] Host-managed zoned block device\nsd 10:0:3:0: [sdd] 3662151680 4096-byte logical blocks: (15.0 TB/13.6 TiB)\nsd 10:0:3:0: [sdd] 55880 zones of 65536 logical blocks\nsd 10:0:3:0: [sdd] Write Protect is off\nsd 10:0:3:0: [sdd] Mode Sense: 9b 00 10 08\nsd 10:0:3:0: [sdd] Write cache: enabled, read cache: enabled, supports DPO and FUA\nsd 10:0:3:0: [sdd] Attached SCSI disk\n...\n")),(0,i.kt)("p",null,"Both disks are identified by the kernel as ",(0,i.kt)("em",{parentName:"p"},"Direct-Access-ZBC")," devices.  This\nindicates that the HBA is correctly translating the ZAC host managed device\nsignature into a ZBC host managed device type."))}m.isMDXComponent=!0}}]);