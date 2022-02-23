"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[798],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"zns-emulation",title:"Getting Started with Emulated NVMe ZNS Devices",sidebar_label:"Getting Started with Emulated NVMe ZNS Devices"},l="Getting Started with Emulated NVMe ZNS Devices",d={unversionedId:"getting-started/zns-emulation",id:"getting-started/zns-emulation",title:"Getting Started with Emulated NVMe ZNS Devices",description:"Emulated NVMe ZNS devices make it possible to do application development and",source:"@site/docs/getting-started/zns-emulation.md",sourceDirName:"getting-started",slug:"/getting-started/zns-emulation",permalink:"/docs/getting-started/zns-emulation",tags:[],version:"current",frontMatter:{id:"zns-emulation",title:"Getting Started with Emulated NVMe ZNS Devices",sidebar_label:"Getting Started with Emulated NVMe ZNS Devices"},sidebar:"docs",previous:{title:"Getting Started with Emulated SMR Hard-Disks",permalink:"/docs/getting-started/smr-emulation"},next:{title:"Overview",permalink:"/docs/linux"}},c=[{value:"<em>QEMU</em>",id:"qemu",children:[{value:"Creating an Emulated Zoned Namespace",id:"creating-an-emulated-zoned-namespace",children:[{value:"Creating the Backstore",id:"creating-the-backstore",children:[{value:"Using truncate to create an Emulated Zone Namespace Backstore",id:"using-truncate-to-create-an-emulated-zone-namespace-backstore",children:[],level:5},{value:"Using dd to create an Emulated Zone Namespace Backstore",id:"using-dd-to-create-an-emulated-zone-namespace-backstore",children:[],level:5}],level:4},{value:"Creating a ZNS and using the Backstore File",id:"creating-a-zns-and-using-the-backstore-file",children:[],level:4}],level:3},{value:"Verifying an Emulated Zoned Namespace",id:"verifying-an-emulated-zoned-namespace",children:[],level:3},{value:"Using an Emulated Zoned Namespace",id:"using-an-emulated-zoned-namespace",children:[],level:3},{value:"Emulated Zoned Namespace Options",id:"emulated-zoned-namespace-options",children:[],level:3}],level:2},{value:"<em>QEMU</em> Execution Example",id:"qemu-execution-example",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-emulated-nvme-zns-devices"},"Getting Started with Emulated NVMe ZNS Devices"),(0,r.kt)("p",null,"Emulated NVMe ZNS devices make it possible to do application development and\nkernel tests even if you do not have access to physical NVMe ZNS devices. There\nare two ways to emulate NVMe ZNS devices."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"null_blk")),": The null_blk kernel driver is equipped to emulate zoned block\ndevices with a zone configuration that is compatible with real NVMe ZNS\ndevices. This method is discussed in more detail in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/nullblk"},"Zoned Block Device Emulation with null_blk")," chapter of the\nGetting Started Guide.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"QEMU")),": This open source machine emulator and virtualizer is equipped to\ncreate emulated NVMe devices that use regular files on the host as a\nbackstores. Recent versions of QEMU support the emulation of Zoned\nNamespaces."))),(0,r.kt)("h2",{id:"qemu"},(0,r.kt)("em",{parentName:"h2"},"QEMU")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{href:"https://www.qemu.org/",target:"_blank"},"QEMU"))," has supported the\nemulation of NVMe namespaces since version 1.6. But the emulation of zoned\nnamespaces has been supported only since version 6.0 of ",(0,r.kt)("em",{parentName:"p"},"QEMU"),". If the host\nLinux distribution does not provide ",(0,r.kt)("em",{parentName:"p"},"QEMU")," version 6.0 or above, ",(0,r.kt)("em",{parentName:"p"},"QEMU")," has\nto be compiled from source. Detailed information on how to compile and install\n",(0,r.kt)("em",{parentName:"p"},"QEMU")," from source can be found ",(0,r.kt)("a",{href:"https://www.qemu.org/download/#source",target:"_blank"},"on the QEMU download page"),"."),(0,r.kt)("h3",{id:"creating-an-emulated-zoned-namespace"},"Creating an Emulated Zoned Namespace"),(0,r.kt)("p",null,"To create an emulated zoned namespace, you must first have a backing-store file\nthat the namespace can use. The size of the file determines the capacity of the\nnamespace that will be seen from the guest OS running in the ",(0,r.kt)("em",{parentName:"p"},"QEMU")," virtual\nmachine."),(0,r.kt)("p",null,"For example: to create a 32GiB zoned namespace, you must first create a 32 GiB\nfile on the host. This can be done by using the ",(0,r.kt)("em",{parentName:"p"},"truncate")," command to\ncreate a sparse file or by using the ",(0,r.kt)("em",{parentName:"p"},"dd")," command to create a fully allocated file."),(0,r.kt)("h4",{id:"creating-the-backstore"},"Creating the Backstore"),(0,r.kt)("p",null,"This guide provides instructions for two methods of creating the backstore file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using truncate"),(0,r.kt)("li",{parentName:"ol"},"Using dd")),(0,r.kt)("h5",{id:"using-truncate-to-create-an-emulated-zone-namespace-backstore"},"Using truncate to create an Emulated Zone Namespace Backstore"),(0,r.kt)("p",null,"Run the following command to use ",(0,r.kt)("inlineCode",{parentName:"p"},"truncate")," to create a backstore file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# truncate -s 32G /var/lib/qemu/images/zns.raw\n\n# ls -l /var/lib/qemu/images/zns.raw\n-rw-r--r-- 1 root root 34359738368 Jun 21 15:13 /var/lib/qemu/images/zns.raw\n")),(0,r.kt)("h5",{id:"using-dd-to-create-an-emulated-zone-namespace-backstore"},"Using dd to create an Emulated Zone Namespace Backstore"),(0,r.kt)("p",null,"Run the following command to use ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," to create a backstore file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# dd if=/dev/zero of=/var/lib/qemu/images/zns.raw bs=1M count=32768\n32768+0 records in\n32768+0 records out\n34359738368 bytes (34 GB, 32 GiB) copied, 11.4072 s, 3.0 GB/s\n\n# ls -l /var/lib/qemu/images/zns.raw\n-rw-r--r-- 1 root root 34359738368 Jun 22 11:22 /var/lib/qemu/images/zns.raw\n")),(0,r.kt)("h4",{id:"creating-a-zns-and-using-the-backstore-file"},"Creating a ZNS and using the Backstore File"),(0,r.kt)("p",null,"Execute ",(0,r.kt)("em",{parentName:"p"},"QEMU")," with command line options and arguments to create a zoned\nnamespace that uses the backstore file as storage. In the following example,\nthe backstore file is used to emulate a zoned namespace that has zones of 64\nMiB and a zone capacity of 62 MiB. The namespace block size is 4096 B.  The\nnamespace is set to allow at most 16 open zones and 32 active zones."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# /usr/local/bin/qemu-system-x86_64 \\\n...\n-device nvme,id=nvme0,serial=deadbeef,zoned.zasl=5 \\\n-drive file=${znsimg},id=nvmezns0,format=raw,if=none \\\n-device nvme-ns,drive=nvmezns0,bus=nvme0,nsid=1,logical_block_size=4096,\\\nphysical_block_size=4096,zoned=true,zoned.zone_size=64M,zoned.\\\nzone_capacity=62M,zoned.max_open=16,zoned.max_active=32,\\\nuuid=5e40ec5f-eeb6-4317-bc5e-c919796a5f79\n...\n")),(0,r.kt)("h3",{id:"verifying-an-emulated-zoned-namespace"},"Verifying an Emulated Zoned Namespace"),(0,r.kt)("p",null,"If your guest operating system is a Linux distribution and the Linux\ndistribution's kernel version is higher than 5.9.0, the emulated NVMe ZNS\ndevice can be checked using the ",(0,r.kt)("em",{parentName:"p"},"nvme")," command (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/zns"},"Linux Tools for\nZNS"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# nvme list\nNode             SN                   Model                                    Namespace Usage                      Format           FW Rev\n---------------- -------------------- ---------------------------------------- --------- -------------------------- ---------------- --------\n/dev/nvme0n1     deadbeef             QEMU NVMe Ctrl                           1          34.36  GB /  34.36  GB      4 KiB +  0 B   1.0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"lsscsi")," utility shows the emulated NVMe device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# lsscsi -g\n[2:0:0:0]    cd/dvd  QEMU     QEMU DVD-ROM     2.5+  /dev/sr0   /dev/sg0\n[N:0:0:1]    disk    QEMU NVMe Ctrl__1                          /dev/nvme0n1  -\n")),(0,r.kt)("p",null,"Using the ",(0,r.kt)("em",{parentName:"p"},"blkzone")," utility, the namespace zone configuration can be inspected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# blkzone report /dev/nvme0n1 | less\n  start: 0x000000000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x000020000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x000040000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x000060000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x000080000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n...\n  start: 0x003f80000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x003fa0000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x003fc0000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n  start: 0x003fe0000, len 0x020000, cap 0x01f000, wptr 0x000000 reset:0 non-seq:0, zcond: 1(em) [type: 2(SEQ_WRITE_REQUIRED)]\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The total number of zones of the namespace directly depends on the size of the\nbackstore file used and on the zone size configured. In the above example, the\nemulated namespace has 512 zones (32 GiB / 64 MiB)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# cat /sys/block/nvme0n1/queue/nr_zones \n512\n")),(0,r.kt)("p",null,"If the emulated namespace is configured with a zone capacity smaller than the\nzone size, the total capacity defined by the backstore file will not be\nusable. The effective usable capacity can be reported using ",(0,r.kt)("em",{parentName:"p"},"blkzone")," with the\n",(0,r.kt)("em",{parentName:"p"},"capacity")," command, as shown here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# blkzone capacity /dev/nvme0n1\n0x003e00000\n")),(0,r.kt)("p",null,"In this case, the namespace's effective storage capacity is 0x003e00000\n(65011712) 512-Byte sectors, which is equivalent to 512 zones of 62 MiB\ncapacity."),(0,r.kt)("h3",{id:"using-an-emulated-zoned-namespace"},"Using an Emulated Zoned Namespace"),(0,r.kt)("p",null,"The behavior of a ",(0,r.kt)("em",{parentName:"p"},"QEMU"),"-emulated NVMe ZNS device is fully compliant with the\nNVMe ZNS specifications, with one exception: the state of namespace zones is\nnot persistent across restarts of the ",(0,r.kt)("em",{parentName:"p"},"QEMU")," emulation. The state of zones is\npreserved only as long as ",(0,r.kt)("em",{parentName:"p"},"QEMU")," is running, even if the guest operating system\nis rebooted. If ",(0,r.kt)("em",{parentName:"p"},"QEMU")," is restarted and the same backstore file is used, then\nthe guest operating system will see the namespace with all zones in the empty\nstate."),(0,r.kt)("h3",{id:"emulated-zoned-namespace-options"},"Emulated Zoned Namespace Options"),(0,r.kt)("p",null,"The implementation of NVMe device emulation and ZNS namespace emulation in\n",(0,r.kt)("em",{parentName:"p"},"QEMU")," provides several configuration options to control the characteristics of\nthe device. The full list of options and parameters is\ndocumented ",(0,r.kt)("a",{href:"https://qemu-project.gitlab.io/qemu/system/nvme.html",target:"_blank"},"here"),"."),(0,r.kt)("p",null,"The options and parameters related to Zoned Namespaces are as follows."),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.zasl=UINT32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Zone Append Size Limit. If left at the default (0), the zone append size limit will be equal to the maximum data transfer size (MDTS). Otherwise, the zone append size limit is equal to 2 to the power of zasl multiplied by the minimum memory page size (4096 B), but cannot exceed the maximum data transfer size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.zone_size=",(0,r.kt)("em",{parentName:"td"},"SIZE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"128MiB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the zone size (ZSZE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.zone_capacity=",(0,r.kt)("em",{parentName:"td"},"SIZE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the zone capacity (ZCAP). If left at the default (0), the zone capacity will equal the zone size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.descr_ext_size=",(0,r.kt)("em",{parentName:"td"},"UINT32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the Zone Descriptor Extension Size (ZDES). Must be a multiple of 64 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.cross_read=",(0,r.kt)("em",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"left"},"off"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Set to "on" to allow reads to cross zone boundaries.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.max_active=",(0,r.kt)("em",{parentName:"td"},"UINT32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the maximum number of active resources (MAR). The default (0) allows all zones to be active.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zoned.max_open=",(0,r.kt)("em",{parentName:"td"},"UINT32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the maximum number of open resources (MOR).  The default (0) allows all zones to be open. If ",(0,r.kt)("inlineCode",{parentName:"td"},"zoned.max_active")," is specified, this value must be less than or equal to that."))))),(0,r.kt)("h2",{id:"qemu-execution-example"},(0,r.kt)("em",{parentName:"h2"},"QEMU")," Execution Example"),(0,r.kt)("p",null,"The following script uses ",(0,r.kt)("em",{parentName:"p"},"QEMU")," to run a virtual machine with 8 CPU cores,\n16 GiB of memory, and bridged networking. The bridge device ",(0,r.kt)("em",{parentName:"p"},"virbr0")," is assumed\nto already exist. The last device added to the virtual machine on the ",(0,r.kt)("em",{parentName:"p"},"QEMU"),"\ncommand line is a 32 GiB NVMe ZNS device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\n#\n# Some variables\n#\nbridge="virbr0"\nvmimg="/var/lib/qemu/boot-disk.qcow2"\nznsimg="/var/lib/qemu/zns.raw"\n\n#\n# Run QEMU\n#\nsudo /usr/local/bin/qemu-system-x86_64 \\\n-name guest=FedoraServer34 \\\n-machine pc-q35-5.2,accel=kvm \\\n-m 16384 \\\n-smp 8,sockets=8,cores=1,threads=1 \\\n-rtc base=utc,driftfix=slew \\\n-nographic \\\n-no-hpet \\\n-global ICH9-LPC.disable_s3=1 \\\n-global ICH9-LPC.disable_s4=1 \\\n-boot strict=on \\\n-audiodev none,id=noaudio \\\n-object rng-random,id=objrng0,filename=/dev/urandom \\\n-msg timestamp=on \\\n-device pcie-root-port,port=0x10,chassis=1,id=pci.1,bus=pcie.0,multifunction=on,addr=0x2 \\\n-netdev bridge,id=hostnet0,br=${bridge} \\\n-device virtio-net-pci,netdev=hostnet0,id=net0,mac=52:54:00:fa:2d:b9,bus=pci.1,addr=0x0 \\\n-device pcie-root-port,port=0x11,chassis=2,id=pci.2,bus=pcie.0,addr=0x2.0x1 \\\n-blockdev node-name="vmstorage",driver=qcow2,file.driver=file,file.filename="${vmimg}",file.node-name="vmstorage.qcow2",file.discard=unmap \\\n-device virtio-blk-pci,bus=pci.2,addr=0x0,drive="vmstorage",id=virtio-disk0,bootindex=1 \\\n-device pcie-root-port,port=0x12,chassis=3,id=pci.3,bus=pcie.0,addr=0x2.0x2 \\\n-device virtio-balloon-pci,id=balloon0,bus=pci.3,addr=0x0 \\\n-device pcie-root-port,port=0x13,chassis=4,id=pci.4,bus=pcie.0,addr=0x2.0x3 \\\n-device virtio-rng-pci,rng=objrng0,id=rng0,bus=pci.4,addr=0x0 \\\n-device pcie-root-port,port=0x14,chassis=5,id=pci.5,bus=pcie.0,addr=0x2.0x4 \\\n-device nvme,id=nvme0,serial=deadbeef,zoned.zasl=5,bus=pci.5 \\\n-drive file=${znsimg},id=nvmezns0,format=raw,if=none \\\n-device nvme-ns,drive=nvmezns0,bus=nvme0,nsid=1,logical_block_size=4096,physical_block_size=4096,zoned=true,zoned.zone_size=64M,zoned.zone_capacity=62M,zoned.max_open=16,zoned.max_active=32,uuid=5e40ec5f-eeb6-4317-bc5e-c919796a5f79\n')))}p.isMDXComponent=!0}}]);