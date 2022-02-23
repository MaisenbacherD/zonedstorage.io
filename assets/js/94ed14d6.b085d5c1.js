(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[697],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return f},kt:function(){return d}});var A=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,A,a=function(e,n){if(null==e)return{};var t,A,a={},o=Object.keys(e);for(A=0;A<o.length;A++)t=o[A],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)t=o[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=A.createContext({}),l=function(e){var n=A.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},f=function(e){var n=l(e.components);return A.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},p=A.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,g=p["".concat(i,".").concat(d)]||p[d]||c[d]||o;return t?A.createElement(g,r(r({ref:n},f),{},{components:t})):A.createElement(g,r({ref:n},f))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return A.createElement.apply(null,r)}return A.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7993:function(e,n,t){"use strict";var A=t(7294);n.Z=function(e){var n=e.src,a=e.title;return A.createElement("div",{className:"container text--center"},A.createElement("figure",null,A.createElement("img",{src:t(7356)("./"+n).default,width:"640","max-width":"100%"}),A.createElement("figcaption",null,A.createElement("em",null,a))))}},792:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return f},metadata:function(){return p},toc:function(){return d}});var A=t(7462),a=t(3366),o=t(7294),r=t(3905),s=t(7993);var i=function(e){var n=e.src,A=e.title;return o.createElement("div",{className:"container text--center"},o.createElement("figure",null,o.createElement("video",{controls:!0,width:"640","max-width":"100%"},o.createElement("source",{type:"video/mp4",src:t(7356)("./"+n).default})),o.createElement("figcaption",null,o.createElement("em",null,A))))},l=["components"],f={id:"libzbd",sidebar_label:"libzbd User Library",title:"libzbd User Library"},c="libzbd User Library",p={unversionedId:"tools/libzbd",id:"tools/libzbd",title:"libzbd User Library",description:"libzbd is a user library providing functions for manipulating zoned block",source:"@site/docs/tools/libzbd.md",sourceDirName:"tools",slug:"/tools/libzbd",permalink:"/docs/tools/libzbd",tags:[],version:"current",frontMatter:{id:"libzbd",sidebar_label:"libzbd User Library",title:"libzbd User Library"},sidebar:"docs",previous:{title:"libzbc User Library",permalink:"/docs/tools/libzbc"},next:{title:"libnvme User Library",permalink:"/docs/tools/libnvme"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Library Functions",id:"library-functions",children:[],level:2},{value:"Utilities",id:"utilities",children:[{value:"<em>zbd</em> Tool Examples",id:"zbd-tool-examples",children:[],level:3},{value:"Zone Operations",id:"zone-operations",children:[],level:3},{value:"Graphical Interface",id:"graphical-interface",children:[],level:3}],level:2}],g={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,A.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"libzbd-user-library"},"libzbd User Library"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"libzbd")," is a user library providing functions for manipulating zoned block\ndevices."),(0,r.kt)("p",null,"Unlike the ",(0,r.kt)("a",{parentName:"p",href:"./libzbc"},(0,r.kt)("em",{parentName:"a"},"libzbc"))," library, ",(0,r.kt)("em",{parentName:"p"},"libzbd")," does not implement direct\ncommand access to zoned block devices. Rather, ",(0,r.kt)("em",{parentName:"p"},"libzbd")," uses the kernel provided\nzoned block device interface based on the ",(0,r.kt)("em",{parentName:"p"},"ioctl()")," system call. A direct\nconsequence of this is that ",(0,r.kt)("em",{parentName:"p"},"libzbd")," will only allow access to zoned block\ndevices supported by the kernel running. This includes both physical devices\nsuch as hard-disks supporting the ZBC and ZAC standards, as well as all logical\nblock devices implemented by various device drivers such as\n",(0,r.kt)("a",{parentName:"p",href:"../getting-started/nullblk"},(0,r.kt)("em",{parentName:"a"},"null_blk"))," and ",(0,r.kt)("a",{parentName:"p",href:"../linux/dm"},"device mapper"),"\ndrivers."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"libzbd")," project is hosted on ",(0,r.kt)("a",{href:"https://github.com/westerndigitalcorporation/libzbd",target:"_blank"},"GitHub"),".\nThe project ",(0,r.kt)("a",{href:"https://github.com/westerndigitalcorporation/libzbd/blob/master/README.md",target:"_blank"},(0,r.kt)("em",{parentName:"p"},"README")," file")," provides information on how to compile and\ninstall ",(0,r.kt)("em",{parentName:"p"},"libzbd")," library and its tools."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"libzbd")," provides functions for discovering and managing the state of zones of\nzoned block devices. Read and write accesses to the devices can be done using\nstandard standard I/O system calls."),(0,r.kt)("p",null,"The execution of ",(0,r.kt)("em",{parentName:"p"},"libzbd")," functions as well as of write operations to zones of a\ndevice may result in changes to the condition or attributes of the device zones\n(such as write pointer location in sequential zones). These changes are not\ninternally tracked by ",(0,r.kt)("em",{parentName:"p"},"libzbd"),". In other words, ",(0,r.kt)("em",{parentName:"p"},"libzbd")," is stateless. It is the\nresponsibility of applications to implement tracking of the changes to zones\nconditions such as the increasing write pointer position of a sequential zone\nafter the completion of a write request to the zone."),(0,r.kt)("h2",{id:"library-functions"},"Library Functions"),(0,r.kt)("p",null,"All ",(0,r.kt)("em",{parentName:"p"},"libzbd")," functions use bytes unit for zones information such as the zone\nstart position on the device, a zone size or the zone write pointer location.\nZoned block devices are identified using regular file descriptor numbers that\ncan be used as is with standard I/O system calls."),(0,r.kt)("p",null,"However, application programmers must be careful to always implement read\naccesses aligned to the device logical block size. Furthermore, on host managed\nzoned block devices, write operations to sequential zones must be aligned\nto the device physical block size."),(0,r.kt)("p",null,"The main functions provided by ",(0,r.kt)("em",{parentName:"p"},"libzbd")," are as follows."),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_open()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Open a zoned block device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_close()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Close an open zoned block device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_get_info()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a device information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_report_nr_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get the number of zones of a device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_report_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a device zone information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_list_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a device zone information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_zones_operation()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute an operation on a range of zones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_open_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Explicitly open a range of zone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_close_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Close a range of zones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_reset_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reset the write pointer of a range of zones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_finish_zones()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Finish a range of zone"))))),(0,r.kt)("p",null,"More detailed information about these functions usage and behavior can be found\nin the comments of ",(0,r.kt)("a",{href:"https://github.com/westerndigitalcorporation/libzbd/blob/master/include/libzbd/zbd.h",target:"_blank"},(0,r.kt)("em",{parentName:"p"},"libzbd")," header file"),". This header file is by default\ninstalled as ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/include/libzbd/zbd.h"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"libzbd")," does not implement any mutual exclusion mechanism for multi-thread or\nmulti-process applications. This implies that it is the responsibility of\napplications to synchronize the execution of conflicting operations targeting\nthe same zone. A typical example of such case is concurrent write operations to\nthe same zone by multiple threads which may result in write errors without\nwrite ordering control by the application."),(0,r.kt)("p",null,"The following functions are also provided by ",(0,r.kt)("em",{parentName:"p"},"libzbd")," to facilitate application\ndevelopment and tests."),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_device_is_zoned()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test if a device is a zoned block device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_device_model_str()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a string description of a device model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_zone_type_str()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a string description of a zone type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_zone_cond_str()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a string description of a zone condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd_set_log_level()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the library verbosity level"))))),(0,r.kt)("p",null,"All functions will behave in the same manner regardless of the type of disk\nbeing used."),(0,r.kt)("h2",{id:"utilities"},"Utilities"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"libzbd")," also provides several command line applications to manipulate zoned\nblock devices by calling the library functions. The list of applications\nprovided is shown in the table below."),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Tool"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zbd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command line utility to report, open, close, reset and finish zones of a device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gzbd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Similar to the zbd tool but using a graphical user interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gzbd-viewer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Graphical user interface showing the condition and state of zones of a zoned block device"))))),(0,r.kt)("p",null,"All utilities output a help message when executed without any argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'# zbd\nUsage: zbd <command> [options] <dev>\nCommand:\n  report    : Get zone information\n  reset     : Reset zone(s)\n  open      : Explicitly open zone(s)\n  close     : Close zone(s)\n  finish    : Finish zone(s)\nCommon options:\n  -v           : Verbose mode (for debug)\n  -i           : Display device information\n  -ofst <ofst (B)> : Start offset of the first zone of the\n             target range (default: 0)\n  -len <len (B)>   : Size of the zone range to operate on\n             (default: device capacity)\n  -u <unit (B)>    : Size unit for the ofst and len options\n             and for displaying zone report results.\n             (default: 1)\nReport command options:\n  -csv      : Use csv output format\n  -n        : Only output the number of zones in the report\n  -ro <opt> : Specify zone report filter.\n          * "em": empty zones\n          * "oi": implicitly open zones\n          * "oe": explicitly open zones\n          * "cl": closed zones\n          * "fu": full zones\n          * "ro": read-only zones\n          * "ol": offline zones\n          * "nw": conventional zones\n          * "ns": non-seq write resource zones\n          * "rw": reset-wp recommended zones\n')),(0,r.kt)("p",null,"Manual pages are also provided for each tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# man zbd\n\nZBD(8)                     System Manager's Manual                       ZBD(8)\n\nNAME\n       zbd - manage zoned block devices\n\nSYNOPSIS\n       zbd command [options] device\n\nDESCRIPTION\n       zbd  is  used  to  manipulate  zones of a zoned block device. Zoned block\n       devies are block devices that support the SCSI Zoned Block Commands\n       (ZBC), ATA  Zoned-device  ATA  Commands (ZAC)  or  NVMe  Zoned NameSpace\n       commands (ZNS).  The zones to operate on can be specified using the\n       offset and length options.\n\n       The device argument must be the pathname of the target zoned block\n       device.\n\nCOMMANDS\n   report\n       The command zbd report is used to obtain and display the device zone\n       information.\n\n       By default, the command will report all zones from the start of the\n       device up to the  last zone  of  the  device.  Options may be used to\n       modify this behavior, changing the starting zone or the size of the\n       report.\n...\n")),(0,r.kt)("h3",{id:"zbd-tool-examples"},(0,r.kt)("em",{parentName:"h3"},"zbd")," Tool Examples"),(0,r.kt)("p",null,"The following examples use a null zoned block device with 4 conventional zones\nand 12 sequential zones of 32 MB created using the\n",(0,r.kt)("a",{parentName:"p",href:"../getting-started/nullblk#creating-a-zoned-null-block-device"},(0,r.kt)("em",{parentName:"a"},"nullblk-zoned.sh")),"\nscript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nullblk-zoned.sh 4096 32 4 12\n### Created /dev/nullb0\n")),(0,r.kt)("p",null,"The following command can be used to list the zone information for all zones of\na device, including the device information such as logical block size and\ncapacity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# zbd report -i /dev/nullb0\nDevice /dev/nullb0:\n    Vendor ID: Unknown\n    Zone model: host-managed\n    Capacity: 0.537 GB (1048576 512-bytes sectors)\n    Logical blocks: 131072 blocks of 4096 B\n    Physical blocks: 131072 blocks of 4096 B\n    Zones: 16 zones of 32.0 MB\n    Maximum number of open zones: no limit\n    Maximum number of active zones: no limit\nZone 00000: cnv, ofst 00000000000000, len 00000033554432, cap 00000033554432\nZone 00001: cnv, ofst 00000033554432, len 00000033554432, cap 00000033554432\nZone 00002: cnv, ofst 00000067108864, len 00000033554432, cap 00000033554432\nZone 00003: cnv, ofst 00000100663296, len 00000033554432, cap 00000033554432\nZone 00004: swr, ofst 00000134217728, len 00000033554432, cap 00000033554432, wp 00000134217728, em, non_seq 0, reset 0\nZone 00005: swr, ofst 00000167772160, len 00000033554432, cap 00000033554432, wp 00000167772160, em, non_seq 0, reset 0\nZone 00006: swr, ofst 00000201326592, len 00000033554432, cap 00000033554432, wp 00000201326592, em, non_seq 0, reset 0\nZone 00007: swr, ofst 00000234881024, len 00000033554432, cap 00000033554432, wp 00000234881024, em, non_seq 0, reset 0\nZone 00008: swr, ofst 00000268435456, len 00000033554432, cap 00000033554432, wp 00000268435456, em, non_seq 0, reset 0\nZone 00009: swr, ofst 00000301989888, len 00000033554432, cap 00000033554432, wp 00000301989888, em, non_seq 0, reset 0\nZone 00010: swr, ofst 00000335544320, len 00000033554432, cap 00000033554432, wp 00000335544320, em, non_seq 0, reset 0\nZone 00011: swr, ofst 00000369098752, len 00000033554432, cap 00000033554432, wp 00000369098752, em, non_seq 0, reset 0\nZone 00012: swr, ofst 00000402653184, len 00000033554432, cap 00000033554432, wp 00000402653184, em, non_seq 0, reset 0\nZone 00013: swr, ofst 00000436207616, len 00000033554432, cap 00000033554432, wp 00000436207616, em, non_seq 0, reset 0\nZone 00014: swr, ofst 00000469762048, len 00000033554432, cap 00000033554432, wp 00000469762048, em, non_seq 0, reset 0\nZone 00015: swr, ofst 00000503316480, len 00000033554432, cap 00000033554432, wp 00000503316480, em, non_seq 0, reset 0\n")),(0,r.kt)("p",null,"The same zone information can also be obtained in csv format to facilitate\nparsing using scripting languages, including shell scripts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# zbd report -csv /dev/nullb0\nzone num, type, ofst, len, cap, wp, cond, non_seq, reset\n00000, 1, 00000000000000, 00000033554432, 00000033554432, 00000033554432, 0x0, 0, 0\n00001, 1, 00000033554432, 00000033554432, 00000033554432, 00000067108864, 0x0, 0, 0\n00002, 1, 00000067108864, 00000033554432, 00000033554432, 00000100663296, 0x0, 0, 0\n00003, 1, 00000100663296, 00000033554432, 00000033554432, 00000134217728, 0x0, 0, 0\n00004, 2, 00000134217728, 00000033554432, 00000033554432, 00000134217728, 0x1, 0, 0\n00005, 2, 00000167772160, 00000033554432, 00000033554432, 00000167772160, 0x1, 0, 0\n00006, 2, 00000201326592, 00000033554432, 00000033554432, 00000201326592, 0x1, 0, 0\n00007, 2, 00000234881024, 00000033554432, 00000033554432, 00000234881024, 0x1, 0, 0\n00008, 2, 00000268435456, 00000033554432, 00000033554432, 00000268435456, 0x1, 0, 0\n00009, 2, 00000301989888, 00000033554432, 00000033554432, 00000301989888, 0x1, 0, 0\n00010, 2, 00000335544320, 00000033554432, 00000033554432, 00000335544320, 0x1, 0, 0\n00011, 2, 00000369098752, 00000033554432, 00000033554432, 00000369098752, 0x1, 0, 0\n00012, 2, 00000402653184, 00000033554432, 00000033554432, 00000402653184, 0x1, 0, 0\n00013, 2, 00000436207616, 00000033554432, 00000033554432, 00000436207616, 0x1, 0, 0\n00014, 2, 00000469762048, 00000033554432, 00000033554432, 00000469762048, 0x1, 0, 0\n00015, 2, 00000503316480, 00000033554432, 00000033554432, 00000503316480, 0x1, 0, 0\n")),(0,r.kt)("h3",{id:"zone-operations"},"Zone Operations"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"zbd")," tool also allow executing zone management operations over a range of\nzones. The following example explicitely opens the first 2 sequential zones of\nthe ",(0,r.kt)("em",{parentName:"p"},"null_blk")," device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# zbd open -ofst 134217728 -len 67108864 /dev/nullb0 \n# zbd report /dev/nullb0\nZone 00000: cnv, ofst 00000000000000, len 00000033554432, cap 00000033554432\nZone 00001: cnv, ofst 00000033554432, len 00000033554432, cap 00000033554432\nZone 00002: cnv, ofst 00000067108864, len 00000033554432, cap 00000033554432\nZone 00003: cnv, ofst 00000100663296, len 00000033554432, cap 00000033554432\nZone 00004: swr, ofst 00000134217728, len 00000033554432, cap 00000033554432, wp 00000134217728, {==oe==}, non_seq 0, reset 0\nZone 00005: swr, ofst 00000167772160, len 00000033554432, cap 00000033554432, wp 00000167772160, {==oe==}, non_seq 0, reset 0\nZone 00006: swr, ofst 00000201326592, len 00000033554432, cap 00000033554432, wp 00000201326592, em, non_seq 0, reset 0\nZone 00007: swr, ofst 00000234881024, len 00000033554432, cap 00000033554432, wp 00000234881024, em, non_seq 0, reset 0\nZone 00008: swr, ofst 00000268435456, len 00000033554432, cap 00000033554432, wp 00000268435456, em, non_seq 0, reset 0\nZone 00009: swr, ofst 00000301989888, len 00000033554432, cap 00000033554432, wp 00000301989888, em, non_seq 0, reset 0\nZone 00010: swr, ofst 00000335544320, len 00000033554432, cap 00000033554432, wp 00000335544320, em, non_seq 0, reset 0\nZone 00011: swr, ofst 00000369098752, len 00000033554432, cap 00000033554432, wp 00000369098752, em, non_seq 0, reset 0\nZone 00012: swr, ofst 00000402653184, len 00000033554432, cap 00000033554432, wp 00000402653184, em, non_seq 0, reset 0\nZone 00013: swr, ofst 00000436207616, len 00000033554432, cap 00000033554432, wp 00000436207616, em, non_seq 0, reset 0\nZone 00014: swr, ofst 00000469762048, len 00000033554432, cap 00000033554432, wp 00000469762048, em, non_seq 0, reset 0\nZone 00015: swr, ofst 00000503316480, len 00000033554432, cap 00000033554432, wp 00000503316480, em, non_seq 0, reset 0\n")),(0,r.kt)("p",null,"Writing 32MB to the first zone using dd will transition the zone to full state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# dd if=/dev/zero of=/dev/nullb0 oflag=direct bs=1M count=32 seek=128\n32+0 records in\n32+0 records out\n33554432 bytes (34 MB, 32 MiB) copied, 0.00945045 s, 3.6 GB/s\n# zbd report /dev/nullb0\nZone 00000: cnv, ofst 00000000000000, len 00000033554432, cap 00000033554432\nZone 00001: cnv, ofst 00000033554432, len 00000033554432, cap 00000033554432\nZone 00002: cnv, ofst 00000067108864, len 00000033554432, cap 00000033554432\nZone 00003: cnv, ofst 00000100663296, len 00000033554432, cap 00000033554432\nZone 00004: swr, ofst 00000134217728, len 00000033554432, cap 00000033554432, wp 00000167772160, {==fu==}, non_seq 0, reset 0\nZone 00005: swr, ofst 00000167772160, len 00000033554432, cap 00000033554432, wp 00000167772160, oe, non_seq 0, reset 0\nZone 00006: swr, ofst 00000201326592, len 00000033554432, cap 00000033554432, wp 00000201326592, em, non_seq 0, reset 0\nZone 00007: swr, ofst 00000234881024, len 00000033554432, cap 00000033554432, wp 00000234881024, em, non_seq 0, reset 0\nZone 00008: swr, ofst 00000268435456, len 00000033554432, cap 00000033554432, wp 00000268435456, em, non_seq 0, reset 0\nZone 00009: swr, ofst 00000301989888, len 00000033554432, cap 00000033554432, wp 00000301989888, em, non_seq 0, reset 0\nZone 00010: swr, ofst 00000335544320, len 00000033554432, cap 00000033554432, wp 00000335544320, em, non_seq 0, reset 0\nZone 00011: swr, ofst 00000369098752, len 00000033554432, cap 00000033554432, wp 00000369098752, em, non_seq 0, reset 0\nZone 00012: swr, ofst 00000402653184, len 00000033554432, cap 00000033554432, wp 00000402653184, em, non_seq 0, reset 0\nZone 00013: swr, ofst 00000436207616, len 00000033554432, cap 00000033554432, wp 00000436207616, em, non_seq 0, reset 0\nZone 00014: swr, ofst 00000469762048, len 00000033554432, cap 00000033554432, wp 00000469762048, em, non_seq 0, reset 0\nZone 00015: swr, ofst 00000503316480, len 00000033554432, cap 00000033554432, wp 00000503316480, em, non_seq 0, reset 0\n")),(0,r.kt)("p",null,"Other possible zone operations are ",(0,r.kt)("em",{parentName:"p"},"close"),", ",(0,r.kt)("em",{parentName:"p"},"reset")," and ",(0,r.kt)("em",{parentName:"p"},"finish"),"."),(0,r.kt)("h3",{id:"graphical-interface"},"Graphical Interface"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"gzbd")," provides a graphical user interface showing the zone configuration and\nstate of a zoned block device. ",(0,r.kt)("em",{parentName:"p"},"gzbd")," also  displays  the  write status (write\npointer position) of zones graphically using color coding (red for written\nsectors and green for unwritten sectors). Operations on zones can also be\nexecuted directly from the interface (reset zone write pointer, open zone,\nclose zone, etc)."),(0,r.kt)(s.Z,{src:"tools-libzbd-gzbd.png",title:"gzbd screenshot",mdxType:"Image"}),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"gzbd-viewer")," graphical interface is a simpler tool than ",(0,r.kt)("em",{parentName:"p"},"gzbd")," that only\nallows displaying the current zone condition and state of a zoned block device.\nThe zone state is refreshed by defaul twice per second. This period can be\nadjusted using a command line option."),(0,r.kt)(s.Z,{src:"tools-libzbd-gzbd-viewer.png",title:"gzbd-viewer screenshot",mdxType:"Image"}),(0,r.kt)("p",null,"Using ",(0,r.kt)("em",{parentName:"p"},"gzbd")," enables simple visual cues as to how an application is performaing\nand using the zones of a zoned block device. The following example illustrates\nthis."),(0,r.kt)(i,{src:"tools-libzbd-gzbd-viewer-example.mp4",title:"Application execution observed with gzbd-viewer",mdxType:"Video"}))}m.isMDXComponent=!0},5:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-linux-zbd-f4ba5756b82ac441113bd7f9c9dd1dc6.png"},8477:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-smr-tracks-2277a1473f60e1e862f8bb5916422533.png"},6020:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-smr-zones-6296257d2459f5d1872bc28dcfa36ccd.png"},6525:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zns-128e951b7035733479ad228844c9e7ab.png"},3006:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zone-append-890c07f2624fe7dcf7c5ee61fe2a6f0b.png"},7702:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zoned-storage-82ce755eb4ac58c0b289d5bcb8b8c361.png"},1328:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zonesize-vs-capacity-0f94861db037e13632def2968998b611.png"},26:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-dm-9e8a3c8f8b9a480f921d7d263a9dc113.png"},7690:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-pscsi-e7c9db15cc4aebcf65fb21db3521a144.png"},7876:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-sched-70e55f9f3df2c81df464b476b1c4f636.png"},4659:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-tcm1-7684c969474b143f4f71318501623f6f.png"},6245:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-tcm2-6bbd5067f606b5e32db5520dea899278.png"},2623:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-vhost-21cc5561b882aa8097fb30aa35664908.png"},4959:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-zbd-2e5d1a6b239c372fbd3e44f5e3282ebe.png"},4670:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-zonefs-34a6f41797ebee8de18ee798e45eb6ea.png"},672:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-dm-zoned-7f01ae74923ff02b8d01c92fef2d376d.png"},4791:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-iopath-3ad49009873f1211b8e873f9ba540a38.png"},530:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-versions-da4843f4c91f84aa8ef57f001bb6e8f1.png"},9889:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/percona-server-logo-93e864d0f923e386d855f6a8ea67fc8f.png"},308:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tests-zbc-hba-4a57d56fc6c4d400eadc1692b1907a27.png"},8695:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tests-zbc-kernel-166564aae2e5ad8dc156175fbf8f2e85.png"},6312:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbc-gzbc-5d6b525337b567661f392ef6d06ad83e.png"},8920:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbc-9dc574a0bfec08d195e6e4179d6cd272.png"},6925:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbd-gzbd-viewer-63527beb07ac767d890a1b9616c85add.png"},5922:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbd-gzbd-3a358277b4b4b8a9ea5629ce574afad4.png"},5089:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-tcmu-gzbc-11fb58818ee21d5116da8329d0d479af.png"},6479:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-tcmu-dc8b8095c58f25df749406030dcc1b25.png"},9972:function(e,n,t){"use strict";t.r(n),n.default="data:image/vnd.microsoft.icon;base64,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WP/47uz/0YFb/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9KDXf/9+fj/15V6/9GAWf/RgFnf0YBZ/9GAWf/RgFr/04hm/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26OO//Xp5f/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//br6P/erJn/0YBZ/9GAWf/RgFn/0YBZ/9OIZf/9+/r/0oRf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ShWH/3amX/+vRyf/37er/2qGM/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/8+Tf/+G1pf/RgFn/0YBZ/9GAWf/RgFn/04hk//79/P/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/dqZf/8d7Z//br5//t1c7/4LKi/9KEYP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/y4dz/4bSk/9GAWf/RgFn/0YBZ/9GAWf/RgFn//fn4/9eWev/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/4riq//Xo5P/aoYz/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Hf2v/cp5P/0YBZ/9GAWf/RgFnf0YBZ/9GAWf/26ub/4LCg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/05+T/15V7/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/04hm/9KDXv/RgFn/0YBZ39GAWa7RgFn/0YBZ/+vQyP/s0cn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Xp5v/UjW7/0YBZ/9GAWf/RgFn/0YBZ/9WPcv/htab/0oNf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+fHvP/58O3/2Jh//9GAWf/RgFmu0YBZb9GAWf/RgFn/3KaS//r08v/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/5sO4/+3Wz//ShGH/0YBZ/9GAWf/RgVr/79rU////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"},51:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/zs-logo-178d9855350307325549778e41354d29.png"},6334:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/medias/tools-libzbd-gzbd-viewer-example-b3b4ef97af02e55f8b536f5b1b3c32d0.mp4"},7356:function(e,n,t){var A={"./intro-linux-zbd.png":5,"./intro-smr-tracks.png":8477,"./intro-smr-zones.png":6020,"./intro-zns.png":6525,"./intro-zone-append.png":3006,"./intro-zoned-storage.png":7702,"./intro-zonesize-vs-capacity.png":1328,"./linux-config-dm.png":26,"./linux-config-pscsi.png":7690,"./linux-config-sched.png":7876,"./linux-config-tcm1.png":4659,"./linux-config-tcm2.png":6245,"./linux-config-vhost.png":2623,"./linux-config-zbd.png":4959,"./linux-config-zonefs.png":4670,"./linux-dm-zoned.png":672,"./linux-iopath.png":4791,"./linux-versions.png":530,"./percona-server-logo.png":9889,"./tests-zbc-hba.png":308,"./tests-zbc-kernel.png":8695,"./tools-libzbc-gzbc.png":6312,"./tools-libzbc.png":8920,"./tools-libzbd-gzbd-viewer-example.mp4":6334,"./tools-libzbd-gzbd-viewer.png":6925,"./tools-libzbd-gzbd.png":5922,"./tools-tcmu-gzbc.png":5089,"./tools-tcmu.png":6479,"./zs-logo.ico":9972,"./zs-logo.png":51};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(A,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return A[e]}a.keys=function(){return Object.keys(A)},a.resolve=o,e.exports=a,a.id=7356}}]);