"use strict";(self.webpackChunkwivi_docs=self.webpackChunkwivi_docs||[]).push([[365],{1825:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"device-configuration","title":"Device Configuration","description":"Comprehensive guide for configuring Linux on neoVI hardware with Wireless neoVI (WiVi) support. Includes step-by-step instructions for hardware setup, Linux installation, firmware updates, WiFi and server configuration, and troubleshooting.","source":"@site/docs/device-configuration.md","sourceDirName":".","slug":"/device-configuration","permalink":"/device-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/intrepidcs/wivi-docs/blob/main/docs/device-configuration.md","tags":[],"version":"current","lastUpdatedAt":1728986435000,"sidebarPosition":3,"frontMatter":{"title":"Device Configuration","description":"Comprehensive guide for configuring Linux on neoVI hardware with Wireless neoVI (WiVi) support. Includes step-by-step instructions for hardware setup, Linux installation, firmware updates, WiFi and server configuration, and troubleshooting.","keywords":["Linux configuration","neoVI hardware","Wireless neoVI","WiVi setup","neoVI Explorer","Linux installation","firmware update","SSH access","WiFi setup","server configuration","troubleshooting","Ethernet connection","Intrepid hardware","Linux on neoVI"],"sidebar_position":3,"sidebar_label":"Device Configuration"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction and Overview","permalink":"/introduction-and-overview"},"next":{"title":"Wireless neoVI","permalink":"/wireless-neovi"}}');var s=n(4848),r=n(8453);const o={title:"Device Configuration",description:"Comprehensive guide for configuring Linux on neoVI hardware with Wireless neoVI (WiVi) support. Includes step-by-step instructions for hardware setup, Linux installation, firmware updates, WiFi and server configuration, and troubleshooting.",keywords:["Linux configuration","neoVI hardware","Wireless neoVI","WiVi setup","neoVI Explorer","Linux installation","firmware update","SSH access","WiFi setup","server configuration","troubleshooting","Ethernet connection","Intrepid hardware","Linux on neoVI"],sidebar_position:3,sidebar_label:"Device Configuration"},c="2. Device Configuration",a={},d=[{value:"2.1 Hardware Setup",id:"hardware-setup",level:2},{value:"2.1.1 Setup Device Connection",id:"setup-device-connection",level:3},{value:"2.1.2 Setup in neoVI Explorer",id:"setup-in-neovi-explorer",level:3},{value:"2.2 Configure Settings",id:"configure-settings",level:2},{value:"2.2.1 Wifi Setup",id:"wifi-setup",level:3},{value:"2.2.2 Server Setup",id:"server-setup",level:3}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"2-device-configuration",children:"2. Device Configuration"})}),"\n",(0,s.jsx)(i.p,{children:"This document serves as a comprehensive guide for configuring Linux on neoVI hardware with native support for Wireless neoVI functionalities. It offers step-by-step instructions for installing the Linux operating system on the designated device, accompanied by detailed guidance on configuring settings tailored specifically for seamless integration with Wireless neoVI or WiVI."}),"\n",(0,s.jsx)(i.h2,{id:"hardware-setup",children:"2.1 Hardware Setup"}),"\n",(0,s.jsxs)(i.p,{children:["This section will explore both ways to get the neoVI ",(0,s.jsx)(i.a,{href:"https://intrepidcs.com/products/data-loggers/ruggedized-ip67-data-logger-neovi-connect/",children:"CONNECT"})," / ",(0,s.jsx)(i.a,{href:"https://intrepidcs.com/products/vehicle-network-adapters/neovi-red-2/",children:"RED2"})," / ",(0,s.jsx)(i.a,{href:"https://intrepidcs.com/products/vehicle-network-adapters/neovi-fire-3-canfd-lin-ethernet-vehicle-interface-wireless-datalogger/",children:"FIRE3"})," hardware setup"]}),"\n",(0,s.jsx)(i.h3,{id:"setup-device-connection",children:"2.1.1 Setup Device Connection"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Connect the included ethernet cable to the \u2018ETH 02\u2019 port on the Intrepid neoVI hardware. Connect the other end of the ethernet cable to your PC."}),"\n"]}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"neoVI RED 2 Device",src:n(4410).A+"",title:"neoVI RED 2 Device",width:"400",height:"600"}),"\r\n",(0,s.jsx)("figcaption",{children:"neoVI RED 2 Device"})]})})}),"\n",(0,s.jsx)(i.h3,{id:"setup-in-neovi-explorer",children:"2.1.2 Setup in neoVI Explorer"}),"\n",(0,s.jsxs)(i.p,{children:["In the Windows Search Bar, search for ",(0,s.jsx)(i.code,{children:"neoVI Explorer"})," and open the program."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In neoVI Explorer, connect to the Intrepid Hardware"}),"\n",(0,s.jsx)(i.li,{children:'Open the "Linux Settings" menu.'}),"\n",(0,s.jsx)(i.li,{children:'In Linux Settings, change the "Configuration Port" to "ETH 01"'}),"\n",(0,s.jsxs)(i.li,{children:['Click "Write Settings." (',(0,s.jsx)(i.strong,{children:"Note"})," - After applying the ",(0,s.jsx)(i.strong,{children:"Write Settings"}),", the respective device requires a reboot)"]}),"\n"]}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"setup-in-neovi-explorer",src:n(3134).A+"",title:"setup-in-neovi-explorer",width:"677",height:"452"}),"\r\n",(0,s.jsx)("figcaption",{children:"Setup in neoVI Explorer"})]})})}),"\n",(0,s.jsx)(i.p,{children:"Once this is done, power cycle the device, and plug into \u2018ETH 01.\u2019 The configuration port is now ready."}),"\n",(0,s.jsxs)("div",{class:"text--center side-img",children:[(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"neoVI RED 2 top-view",src:n(4410).A+"",title:"neoVI RED 2 top-view",width:"400",height:"600"})}),(0,s.jsx)("figcaption",{})]}),(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"neoVI RED 2 back-view",src:n(307).A+"",title:"neoVI RED 2 back-view",width:"400",height:"600"})}),(0,s.jsx)("figcaption",{})]})]}),"\n",(0,s.jsx)(i.h2,{id:"configure-settings",children:"2.2 Configure Settings"}),"\n",(0,s.jsx)(i.p,{children:"Once that is setup and Linux is installed, the hardware can be logged into.  This is using the same configuration above."}),"\n",(0,s.jsx)(i.h3,{id:"wifi-setup",children:"2.2.1 Wifi Setup"}),"\n",(0,s.jsxs)(i.p,{children:["Open a browser and type in the address ",(0,s.jsx)("span",{class:"custom-link",children:(0,s.jsx)(i.code,{children:"http://192.168.200.2"})}),". A login prompt will appear."]}),"\n",(0,s.jsxs)(i.p,{children:["The user name is ",(0,s.jsx)(i.strong,{children:"\u2018root\u2019"})]}),"\n",(0,s.jsx)(i.p,{children:"The password is the serial number of the hardware.  This is just like the password in the command line steps."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"To setup the Wifi\u2026."})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Go to Connectivity -> Wifi Settings"}),"\n",(0,s.jsx)(i.li,{children:"Select Wireless Stations tab"}),"\n",(0,s.jsx)(i.li,{children:"Click Scan"}),"\n",(0,s.jsx)(i.li,{children:"Select wireless network with a strength of at least 30 by clicking on \u201cAdd Uplink\u2026\u201d"}),"\n",(0,s.jsx)(i.li,{children:"In the Add Uplink menu, enter credentials and encryption details."}),"\n",(0,s.jsx)(i.li,{children:"Once the settings are correct, click Save."}),"\n",(0,s.jsx)(i.li,{children:"Click Save & Apply."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This could take up to a minute to connect the first time."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"wifi-setup",src:n(9335).A+"",title:"wifi-setup",width:"975",height:"365"})}),(0,s.jsx)("figcaption",{})]})}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"uplink",src:n(9735).A+"",title:"uplink",width:"957",height:"395"})}),(0,s.jsx)("figcaption",{})]})}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-add-uplink.png",src:n(3501).A+"",title:"image-add-uplink",width:"957",height:"521"})}),(0,s.jsx)("figcaption",{})]})}),"\n",(0,s.jsx)(i.h3,{id:"server-setup",children:"2.2.2 Server Setup"}),"\n",(0,s.jsx)(i.p,{children:"Next is to set up the server connection."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Go to Connectivity \u2192 Wireless neoVI settings"}),"\n",(0,s.jsxs)(i.li,{children:["On the Connection tab, verify and Set the following","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Server URL = (exampleserver).wirelessneovi.com"}),"\n",(0,s.jsx)(i.li,{children:"Control Port: 10102"}),"\n",(0,s.jsx)(i.li,{children:"Upload Port: 10103"}),"\n",(0,s.jsx)(i.li,{children:"Download Port: 10104"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"Click Save and Apply"}),"\n"]}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"server-setup",src:n(6394).A+"",title:"server-setup",width:"975",height:"481"})}),(0,s.jsx)("figcaption",{})]})}),"\n",(0,s.jsx)(i.p,{children:"Once this is done, the Wireless neoVI settings are properly configured, and the server is ready to be connected to."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3501:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-add-uplink-02f66b30f036ca69f4277dd90ae54f28.png"},9735:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-scan-6f7f06c4b294d5549288d45f9a4e4348.png"},6394:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image25-be6852bda0031eba251ae18d4b0df80b.png"},3134:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image3-79b6bead4fe96d433d0c2d3a1ad843ec.png"},9335:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image33-cabfcdb045ee9f945ee8bf103dc859bb.png"},4410:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image44-03c53c7182363be05961bdf3934e2644.webp"},307:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image61-513ea0c814c8301462e4b437a4232914.webp"},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);