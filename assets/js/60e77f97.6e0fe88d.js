"use strict";(self.webpackChunkwivi_docs=self.webpackChunkwivi_docs||[]).push([[734],{2343:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=a(4848),i=a(8453);const o={title:"VehicleScape DAQ: Standalone Logging Setup Guide",description:"Learn how to configure standalone logging in VehicleScape DAQ for ICS hardware. Set up signal logging, manage power, and retrieve data from SD cards or Wireless neoVI.",keywords:["VehicleScape DAQ","standalone logging","ICS hardware","SD card logging","CoreMini scripting","Wireless neoVI","neoVI PLASMA","data logging","power management","script generation"],sidebar_position:1,sidebar_label:"VehicleScape DAQ: Standalone Logging Tab"},s="VehicleScape DAQ: Standalone Logging Tab",r={id:"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/vehiclescape-daq-standalone-logging-tab",title:"VehicleScape DAQ: Standalone Logging Setup Guide",description:"Learn how to configure standalone logging in VehicleScape DAQ for ICS hardware. Set up signal logging, manage power, and retrieve data from SD cards or Wireless neoVI.",source:"@site/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/vehiclescape-daq-standalone-logging-tab.md",sourceDirName:"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab",slug:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/wivi-docs/blob/main/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/vehiclescape-daq-standalone-logging-tab.md",tags:[],version:"current",lastUpdatedAt:1727081101e3,sidebarPosition:1,frontMatter:{title:"VehicleScape DAQ: Standalone Logging Setup Guide",description:"Learn how to configure standalone logging in VehicleScape DAQ for ICS hardware. Set up signal logging, manage power, and retrieve data from SD cards or Wireless neoVI.",keywords:["VehicleScape DAQ","standalone logging","ICS hardware","SD card logging","CoreMini scripting","Wireless neoVI","neoVI PLASMA","data logging","power management","script generation"],sidebar_position:1,sidebar_label:"VehicleScape DAQ: Standalone Logging Tab"},sidebar:"tutorialSidebar",previous:{title:"Creating a VS3ZIP Script for Wireless neoVI",permalink:"/vs3-neoVI-script/"},next:{title:"Standalone Logging: Collections and Methods",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/"}},l={},d=[{value:"Creating a Standalone Logger",id:"creating-a-standalone-logger",level:2},{value:"Standalone Logging Page Layout",id:"standalone-logging-page-layout",level:2}];function g(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vehiclescape-daq-standalone-logging-tab",children:"VehicleScape DAQ: Standalone Logging Tab"})}),"\n",(0,t.jsx)(n.p,{children:"Standalone Logging in VehicleScape DAQ generates a script to allow ICS hardware to collect data independently (while disconnected from a computer). This requires that the ICS hardware support an SD card and CoreMini scripting. This application note contains a walkthrough of setting up a standalone logger."}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-standalone-logger",children:"Creating a Standalone Logger"}),"\n",(0,t.jsx)(n.p,{children:"Follow these general steps to create a standalone logger using VehicleScape DAQ:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verify that the Databases & Hardware Setup are correct."}),"\n",(0,t.jsx)(n.li,{children:"Select signals to log on the Channels Tab."}),"\n",(0,t.jsxs)(n.li,{children:["Configure all Standalone Logging settings and click ",(0,t.jsx)(n.strong,{children:"Generate"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Send the Standalone Logging script to ICS hardware."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After the hardware has finished logging, the data can be retrieved from its SD card using the Extract/Export feature. If using a neoVI PLASMA, the data can also be retrieved from just about anywhere using the WirelessNeoVI website."}),"\n",(0,t.jsx)(n.h2,{id:"standalone-logging-page-layout",children:"Standalone Logging Page Layout"}),"\n",(0,t.jsx)(n.p,{children:"The Standalone Logging page is divided into two main areas (Figure 1):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Upper Area:"})," This is where ",(0,t.jsx)(n.a,{href:"./standalone-logging-collections-and-methods/",children:"Collections and Methods"})," are defined; the region includes a list of currently-defined collection sets on the left, collection-specific parameters on the right, and a set of collection method buttons on top. The options in this area change depending on which method is selected for a DAQ setup."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Lower Area:"})," Three sets of options that affect all DAQ setups regardless of the collection method used, though again these can change depending on your selections. These are described further in Table 1, with links to pages containing more information."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Table 1: Standalone Logging Universal Option Areas"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option Area"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./standalone-logging-status-reporting/",children:"Status Reporting"})}),(0,t.jsx)(n.td,{children:"Options for physical logger feedback and live data reporting to a Wireless NeoVI website."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./standalone-logging-power-management/",children:"Power Management"})}),(0,t.jsx)(n.td,{children:"Logger power management, sleep and wakeup selections."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./standalone-logging-generation-options/",children:"Generation Options"})}),(0,t.jsx)(n.td,{children:"Generates the final script and opens a dialog to send it to ICS hardware capable of standalone logging."})]})]})]}),"\n",(0,t.jsx)("div",{class:"text--center",children:(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"std-logging-tab",src:a(9095).A+"",title:"std-logging-tab",width:"800",height:"600"}),"\r\n",(0,t.jsx)("figcaption",{children:"Figure 1: The VehicleScape DAQ Standalone Logging Tab is logically divided into an upper area that lists collections and shows options that vary depending on the selected collection method, and a lower area with universal options applicable to all methods."})]})})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},9095:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/std-logging-tab-492d73d09097fb5ca2636339abc3eac1.png"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);