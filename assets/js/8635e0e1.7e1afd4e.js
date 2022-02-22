"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[226],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3770:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],r={id:"sg3utils",title:"SCSI Generic Utilities",sidebar_label:"SCSI Generic Utilities"},l={unversionedId:"tools/sg3utils",id:"tools/sg3utils",isDocsHomePage:!1,title:"SCSI Generic Utilities",description:"Various open source projects provide tools that support the direct manipulation",source:"@site/docs/tools/sg3utils.md",sourceDirName:"tools",slug:"/tools/sg3utils",permalink:"/docs/tools/sg3utils",version:"current",sidebar_label:"SCSI Generic Utilities",frontMatter:{id:"sg3utils",title:"SCSI Generic Utilities",sidebar_label:"SCSI Generic Utilities"},sidebar:"docs",previous:{title:"ZNS Tools",permalink:"/docs/tools/zns"},next:{title:"libzbc User Library",permalink:"/docs/tools/libzbc"}},p=[{value:"lsscsi",id:"lsscsi",children:[{value:"Identifying Host Managed Disks",id:"identifying-host-managed-disks",children:[]},{value:"Disks Interface and Transport",id:"disks-interface-and-transport",children:[]}]},{value:"sg3_utils",id:"sg3_utils",children:[{value:"sg_rep_zone",id:"sg_rep_zone",children:[]},{value:"sg_reset_wp",id:"sg_reset_wp",children:[]},{value:"sg_zone",id:"sg_zone",children:[]}]}],d={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Various open source projects provide tools that support the direct manipulation\nof SCSI devices. The ",(0,s.kt)("em",{parentName:"p"},"lsscsi")," command line tool and the ",(0,s.kt)("em",{parentName:"p"},"sg3_utils")," library and\nutilities collection are among the tools most widely used for SCSI device\nmanipulation. They are available as pre-compiled packages with most Linux","\xae","\ndistributions."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"lsscsi")," has the capability to indicate if a device is a ZBC host managed zoned\nblock device. ",(0,s.kt)("em",{parentName:"p"},"sg3_utils")," added support for ZBC in version 1.42."),(0,s.kt)("h2",{id:"lsscsi"},"lsscsi"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{href:"http://sg.danny.cz/scsi/lsscsi.html",target:"_blank"},(0,s.kt)("em",{parentName:"p"},"lsscsi")),"\ncommand lists information about the SCSI devices that are connected to a Linux\nsystem. ",(0,s.kt)("em",{parentName:"p"},"lsscsi")," is available as a package in most Linux distributions. For\nexample, in ",(0,s.kt)("a",{parentName:"p",href:"/docs/distributions/linux#fedora-linux"},"Fedora","\xae")," Linux,\n",(0,s.kt)("em",{parentName:"p"},"lssci")," can be installed using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# dnf install lsscsi\n")),(0,s.kt)("p",null,"The name of the package may differ from distribution to distribution. Refer to\nthe documentation of the given distribution to discover the name of the package\nthat provides ",(0,s.kt)("em",{parentName:"p"},"lssci"),"."),(0,s.kt)("h3",{id:"identifying-host-managed-disks"},"Identifying Host Managed Disks"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"lsscsi")," lists the disks that are managed using the kernel SCSI subsystem. This\nalways includes SATA disks that are directly connected (1) to a SATA port on\nthe system mainboard or (2) to a SATA PCIe adapter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# lsscsi\n[2:0:0:0]    disk    ATA      INTEL SSDSC2CT18 335u  /dev/sda\n[4:0:0:0]    zbc     ATA      HGST HSH721414AL T220  /dev/sdb\n[10:0:1:0]   zbc     HGST     HSH721414AL52M0  a220  /dev/sdc\n[10:0:3:0]   zbc     ATA      HGST HSH721415AL T220  /dev/sdd\n")),(0,s.kt)("p",null,"The second column of the default output indicates the device type. For host\nmanaged disks, the type name is ",(0,s.kt)("inlineCode",{parentName:"p"},"zbc"),". For regular disks, the type name is\n",(0,s.kt)("inlineCode",{parentName:"p"},"disk"),". Older versions of ",(0,s.kt)("em",{parentName:"p"},"lsscsi")," may directly list the numerical value of the\ndevice type. In the case of host managed disks, ",(0,s.kt)("inlineCode",{parentName:"p"},"0x14")," is displayed."),(0,s.kt)("p",null,"Adding the option ",(0,s.kt)("inlineCode",{parentName:"p"},"-g")," to the ",(0,s.kt)("em",{parentName:"p"},"lssci")," command returns the SCSI Generic node\nfile path associated with a device. This can be useful in combination with\n",(0,s.kt)("a",{parentName:"p",href:"/docs/tools/libzbc"},"libzbc")," or any of the ",(0,s.kt)("em",{parentName:"p"},"sg3_utils")," command line tools."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# lsscsi -g\n[2:0:0:0]    disk    ATA      INTEL SSDSC2CT18 335u  /dev/sda   /dev/sg0\n[4:0:0:0]    zbc     ATA      HGST HSH721414AL T220  /dev/sdb   /dev/sg1\n[10:0:1:0]   zbc     HGST     HSH721414AL52M0  a220  /dev/sdc   /dev/sg2\n[10:0:3:0]   zbc     ATA      HGST HSH721415AL T220  /dev/sdd   /dev/sg3\n\n")),(0,s.kt)("h3",{id:"disks-interface-and-transport"},"Disks Interface and Transport"),(0,s.kt)("p",null,"The third column of the output is the disk vendor ID. For ATA disks, this is\nalways ",(0,s.kt)("inlineCode",{parentName:"p"},"ATA")," even for ATA disks connected to a SAS host-bus-adapter (HBA). The\n",(0,s.kt)("em",{parentName:"p"},"transport")," that is used to communicate with the disk can be more precisely\ndiscovered using the ",(0,s.kt)("inlineCode",{parentName:"p"},"-t")," option."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# lsscsi -t\n[2:0:0:0]    disk    sata:55cd2e4000111f9b           /dev/sda\n[4:0:0:0]    zbc     sata:5000cca25bc03731           /dev/sdb\n[10:0:1:0]   zbc     sas:0x5000cca0000025c5          /dev/sdc\n[10:0:3:0]   zbc     sas:0x300062b200f35d43          /dev/sdd\n")),(0,s.kt)("h2",{id:"sg3_utils"},"sg3_utils"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{href:"http://sg.danny.cz/sg/sg3_utils.html",target:"_blank"},(0,s.kt)("em",{parentName:"p"},"sg3_utils"))," project provides a library and a collection of\ncommand line tools that directly send SCSI commands to SCSI devices using the\nkernel SCSI generic driver."),(0,s.kt)("p",null,"The SCSI generic driver (",(0,s.kt)("em",{parentName:"p"},"sg")," driver) is enabled by default on most\ndistributions. Use the following command to check whether the ",(0,s.kt)("em",{parentName:"p"},"sg")," driver\nmodule is loaded:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /proc/modules | grep sg\n")),(0,s.kt)("p",null,"If the output of this command is empty, the ",(0,s.kt)("em",{parentName:"p"},"sg")," driver is loaded:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# modprobe sg\n")),(0,s.kt)("p",null,"These commands work only if the ",(0,s.kt)("em",{parentName:"p"},"sg")," driver was compiled as a loadable kernel\nmodule. If you experience errors (as shown below), use the command (the ",(0,s.kt)("inlineCode",{parentName:"p"},"cat"),"\ncommand after the error message) to verify that the ",(0,s.kt)("em",{parentName:"p"},"sg")," driver was compiled as\npart of the kernel: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# modprobe sg\nmodinfo: ERROR: Module sg not found.\n\n# cat /lib/modules/`uname -r`/modules.builtin | grep sg\nkernel/drivers/scsi/sg.ko\n")),(0,s.kt)("p",null,"Because all disks in Linux are exposed as SCSI devices (including all ATA\ndrives), these utilities can be used to manage both (1) SCSI ZBC disks and (2)\nSATA ZAC disks. For cases in which SATA disks are connected to SATA ports (e.g.\nan AHCI adapter), the kernel SCSI subsystem translates SCSI commands to ATA\ncommands."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"sg3_utils")," includes three command line tools that are specific to ZBC disks:"),(0,s.kt)("center",null,(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Utility Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Main SCSI Command Invoked"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"sg_rep_zones")),(0,s.kt)("td",{parentName:"tr",align:"left"},"REPORT ZONES"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Get a ZBC disk zone information")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"sg_reset_wp")),(0,s.kt)("td",{parentName:"tr",align:"left"},"RESET WRITE POINTER"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Reset one or all zones of a ZBC disk")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"sg_zone")),(0,s.kt)("td",{parentName:"tr",align:"left"},"CLOSE ZONE, FINISH ZONE, OPEN ZONE"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Sends one of these commands to the given ZBC device"))))),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'The help output of the commands below uses the term "LBA". In this context,\n"LBA" refers to a 512-byte sector size regardless of the logical and physical\nblock size of the disk.'))),(0,s.kt)("h3",{id:"sg_rep_zone"},"sg_rep_zone"),(0,s.kt)("p",null,"Running the command ",(0,s.kt)("inlineCode",{parentName:"p"},"sg_rep_zone")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--help")," option returns a simple\nusage explanation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_rep_zones --help\nUsage: sg_rep_zones  [--help] [--hex] [--maxlen=LEN] [--partial]\n                     [--raw] [--readonly] [--report=OPT] [--start=LBA]\n                     [--verbose] [--version] DEVICE\n  where:\n    --help|-h          print out usage message\n    --hex|-H           output response in hexadecimal; used twice\n                       shows decoded values in hex\n    --maxlen=LEN|-m LEN    max response length (allocation length in cdb)\n                           (def: 0 -> 8192 bytes)\n    --partial|-p       sets PARTIAL bit in cdb\n    --raw|-r           output response in binary\n    --readonly|-R      open DEVICE read-only (def: read-write)\n    --report=OPT|-o OP    reporting options (def: 0: all zones)\n    --start=LBA|-s LBA    report zones from the LBA (def: 0)\n                          need not be a zone starting LBA\n    --verbose|-v       increase verbosity\n    --version|-V       print version string and exit\n\nPerforms a SCSI REPORT ZONES command.\n")),(0,s.kt)("p",null,"Below is an example of the ",(0,s.kt)("inlineCode",{parentName:"p"},"sg_rep_zone")," utility output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_rep_zone /dev/sdd\nReport zones response:\n  Same=1: zone type and length same in each descriptor\n\n  Maximum LBA: 0xda47ffff\n Zone descriptor: 0\n   Zone type: Conventional\n   Zone condition: Not write pointer\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x0\n   Write pointer LBA: 0xffffffffffff\n Zone descriptor: 1\n   Zone type: Conventional\n   Zone condition: Not write pointer\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x10000\n   Write pointer LBA: 0xffffffffffff\n Zone descriptor: 2\n   Zone type: Conventional\n   Zone condition: Not write pointer\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20000\n   Write pointer LBA: 0xffffffffffff\n ...\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Either (1) the block device file path or (2) the device SCSI Generic node file\npath can be used to specify a disk."))),(0,s.kt)("p",null,"It is possible to start a zone report at a specific zone by using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"--start")," option. For example, to obtain the zone information starting at the\nfirst sequential zone of the disk (LBA 34340864), use the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_rep_zones --start=34340864 /dev/sdd\nReport zones response:\n  Same=1: zone type and length same in each descriptor\n\n  Maximum LBA: 0xda47ffff\n Zone descriptor: 0\n   Zone type: Sequential write required\n   Zone condition: Empty\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20c0000\n   Write pointer LBA: 0x20c0000\n Zone descriptor: 1\n   Zone type: Sequential write required\n   Zone condition: Empty\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20d0000\n   Write pointer LBA: 0x20d0000\n ...\n")),(0,s.kt)("h3",{id:"sg_reset_wp"},"sg_reset_wp"),(0,s.kt)("p",null,"Running the command ",(0,s.kt)("inlineCode",{parentName:"p"},"sg_reset_wp")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--help")," option returns a simple\nusage explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_reset_wp --help\nUsage: sg_reset_wp  [--all] [--help] [--verbose] [--version]\n                    [--zone=ID] DEVICE\n  where:\n    --all|-a           sets the ALL flag in the cdb\n    --help|-h          print out usage message\n    --verbose|-v       increase verbosity\n    --version|-V       print version string and exit\n\n    --zone=ID|-z ID    ID is the starting LBA of the zone whose\n                       write pointer is to be reset\nPerforms a SCSI RESET WRITE POINTER command. ID is decimal by default,\nfor hex use a leading '0x' or a trailing 'h'. Either the --zone=ID\nor --all option needs to be given.\n")),(0,s.kt)("p",null,"Reset all sequential write zones on the disk by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--all")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_reset_wp --all /dev/sdd\n")),(0,s.kt)("p",null,"Reset a single sequential zone write pointer by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--zone")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_reset_wp --zone=34340864 /dev/sdd\n")),(0,s.kt)("p",null,"Specifying the zone ID (zone start LBA) of a conventional zone results in\nan error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_reset_wp --zone=0 /dev/sdd\nReset write pointer command: Illegal request\n")),(0,s.kt)("p",null,"Reseting the write pointer of an empty sequential write zone has no effect\nand does not result in an error."),(0,s.kt)("h3",{id:"sg_zone"},"sg_zone"),(0,s.kt)("p",null,"Running the command ",(0,s.kt)("inlineCode",{parentName:"p"},"sg_zone")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--help")," option returns a simple usage\nexplanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_zone --help\nUsage: sg_zone  [--all] [--close] [--finish] [--help] [--open]\n                [--verbose] [--version] [--zone=ID] DEVICE\n  where:\n    --all|-a           sets the ALL flag in the cdb\n    --close|-c         issue CLOSE ZONE command\n    --finish|-f        issue FINISH ZONE command\n    --help|-h          print out usage message\n    --open|-o          issue OPEN ZONE command\n    --verbose|-v       increase verbosity\n    --version|-V       print version string and exit\n    --zone=ID|-z ID    ID is the starting LBA of the zone\n\n*sg_zone* can perform OPEN ZONE, CLOSE ZONE or FINISH ZONE SCSI commands. ID is\ndecimal by default. To enter a hexadecimal value, use a leading '0x' or a\ntrailing 'h'. One of the following options must be provided: (1) `--close`, (2)\n`--finish`, or (3) `--open`.\n\nThere is no `--reset` option. Such an option would duplicate the function of\nthe *sg_reset_wp* utility.\n")),(0,s.kt)("p",null,"The following example shows a sequence of commands that illustrate the effects\nthat the ",(0,s.kt)("em",{parentName:"p"},"sg_zone")," and ",(0,s.kt)("em",{parentName:"p"},"sg_reset_wp")," commands have on the condition of a zone,\nas reported with ",(0,s.kt)("em",{parentName:"p"},"sg_rep_zone"),'. At the beginning of this sequence of commands,\nthe sequential zone on the disk is explicitly opened from an empty condition.\nThen the zone is transitioned to a full condition by using the "zone finish"\ncommand. Finally, the zone is again reset to an empty condition.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"# sg_rep_zones --start=34340864 /dev/sdd\nReport zones response:\n  Same=1: zone type and length same in each descriptor\n\n  Maximum LBA: 0xda47ffff\n Zone descriptor: 0\n   Zone type: Sequential write required\n   Zone condition: {==Empty==}\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20c0000\n   Write pointer LBA: 0x20c0000\n ...\n# sg_zone --open --zone=34340864 /dev/sdd\n# sg_rep_zones --start=34340864 /dev/sdd\nReport zones response:\n  Same=1: zone type and length same in each descriptor\n\n  Maximum LBA: 0xda47ffff\n Zone descriptor: 0\n   Zone type: Sequential write required\n   Zone condition: {==Explicitly opened==}\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20c0000\n   Write pointer LBA: 0x20c0000\n ...\n# sg_zone --finish --zone=34340864 /dev/sdd\n# sg_rep_zones --start=34340864 /dev/sdd\nReport zones response:\n  Same=1: zone type and length same in each descriptor\n\n  Maximum LBA: 0xda47ffff\n Zone descriptor: 0\n   Zone type: Sequential write required\n   Zone condition: {==Full==}\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20c0000\n   Write pointer LBA: 0xffffffffffff\n ...\n# sg_reset_wp --zone=34340864 /dev/sdd\n# sg_rep_zones --start=34340864 /dev/sdd\nReport zones response:\n  Same=1: zone type and length same in each descriptor\n\n  Maximum LBA: 0xda47ffff\n Zone descriptor: 0\n   Zone type: Sequential write required\n   Zone condition: {==Empty==}\n   Non_seq: 0\n   Reset: 0\n   Zone Length: 0x10000\n   Zone start LBA: 0x20c0000\n   Write pointer LBA: 0x20c0000\n ...\n")))}c.isMDXComponent=!0}}]);