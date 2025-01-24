"use strict";(self.webpackChunkwivi_docs=self.webpackChunkwivi_docs||[]).push([[103],{2282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-status-reporting","title":"Status Reporting in VehicleScape DAQ Standalone Logging","description":"Explore Status Reporting options in VehicleScape DAQ Standalone Logging, including LEDs, neoVI MOTE feedback, and Beep on Wakeup (PLASMA only). Customize how logger status is displayed and controlled.","source":"@site/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-status-reporting.md","sourceDirName":"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab","slug":"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-status-reporting","permalink":"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-status-reporting","draft":false,"unlisted":false,"editUrl":"https://github.com/intrepidcs/wivi-docs/blob/main/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-status-reporting.md","tags":[],"version":"current","lastUpdatedAt":1727081101000,"sidebarPosition":2,"frontMatter":{"title":"Status Reporting in VehicleScape DAQ Standalone Logging","description":"Explore Status Reporting options in VehicleScape DAQ Standalone Logging, including LEDs, neoVI MOTE feedback, and Beep on Wakeup (PLASMA only). Customize how logger status is displayed and controlled.","keywords":["Status Reporting","Standalone Logging","VehicleScape DAQ","LED indicators","neoVI MOTE","Beep on Wakeup","logging feedback","Intrepid hardware"],"sidebar_position":2,"sidebar_label":"Standalone Logging: Status Reporting"},"sidebar":"tutorialSidebar","previous":{"title":"Collections and Methods: Ethernet DAQ Method","permalink":"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-ethernet-daq-method"},"next":{"title":"Standalone Logging: Power Management","permalink":"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-power-management"}}');var s=t(4848),i=t(8453);const a={title:"Status Reporting in VehicleScape DAQ Standalone Logging",description:"Explore Status Reporting options in VehicleScape DAQ Standalone Logging, including LEDs, neoVI MOTE feedback, and Beep on Wakeup (PLASMA only). Customize how logger status is displayed and controlled.",keywords:["Status Reporting","Standalone Logging","VehicleScape DAQ","LED indicators","neoVI MOTE","Beep on Wakeup","logging feedback","Intrepid hardware"],sidebar_position:2,sidebar_label:"Standalone Logging: Status Reporting"},l="Standalone Logging: Status Reporting",r={},d=[{value:"LEDs",id:"leds",level:2},{value:"Use neoVI MOTE",id:"use-neovi-mote",level:2},{value:"Beep on Wakeup (PLASMA Only)",id:"beep-on-wakeup-plasma-only",level:2}];function g(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"standalone-logging-status-reporting",children:"Standalone Logging: Status Reporting"})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.a,{href:"./../../vehiclescape-daq-standalone-logging-tab/",children:"Standalone Logging"})," mode of VehicleScape DAQ, the Status Reporting section contains options that specify how feedback is provided on the state of the logging process. These are universal settings that apply to all collections using any of the four collection methods: ",(0,s.jsx)(n.a,{href:"./../standalone-logging-collections-and-methods/",children:"Message Capture"}),", ",(0,s.jsx)(n.a,{href:"../standalone-logging-collections-and-methods/collections-and-methods-histogram-method/",children:"Histogram"}),", ",(0,s.jsx)(n.a,{href:"../standalone-logging-collections-and-methods/collections-and-methods-bus-query-method/",children:"Bus Query"})," or ",(0,s.jsx)(n.a,{href:"../standalone-logging-collections-and-methods/collections-and-methods-ethernet-daq-method/",children:"Ethernet DAQ"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The default appearance of this subsection of the Standalone Logging screen can be found in Figure 1."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"std-report",src:t(2454).A+"",title:"std-report",width:"800",height:"98"}),"\r\n",(0,s.jsx)("figcaption",{children:"Figure 1: Standalone Logging Status Reporting Options."})]})})}),"\n",(0,s.jsxs)(n.p,{children:["There are three main options here, each of which is enabled with a checkbox: ",(0,s.jsx)(n.strong,{children:"LEDs, Use neoVI MOTE"})," and ",(0,s.jsx)(n.strong,{children:"Beep on Wakeup (PLASMA only)"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"leds",children:"LEDs"}),"\n",(0,s.jsx)(n.p,{children:"Use LEDs to indicate the current logger status:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)("span",{class:"text-red",children:"Red LED"})," Flashing:"]})," Logger is running."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)("span",{class:"text-green",children:"Green LED"})," Flashing Slowly:"]})," Data is being captured to the SD card."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)("span",{class:"text-green",children:"Green LED"})," Flashing Quickly:"]})," Post-trigger data is being captured."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-neovi-mote",children:"Use neoVI MOTE"}),"\n",(0,s.jsx)(n.p,{children:"Use the neoVI MOTE for simple feedback and control features. Enabling this option causes additional options to appear in the right half of the Status Reporting box (Figure 2)."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"std-report-mote",src:t(8092).A+"",title:"std-report-mote",width:"800",height:"98"}),"\r\n",(0,s.jsx)("figcaption",{children:"Figure 2: Standalone Logging Reporting Options including neoVI MOTE options."})]})})}),"\n",(0,s.jsx)(n.p,{children:"Special options for using the neoVI MOTE for reporting:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network:"})," Which network to use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Expressions to Display:"})," Select one or more expressions to be displayed in scrolling text on the neoVI MOTE."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Buzz on Start/Trigger:"})," The neoVI MOTE will make a sound (selectable using the adjacent drop-down box) when the logger is started or triggered."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'Show "Triggered" Message:'})," The neoVI MOTE will display a message when the logger has triggered."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"beep-on-wakeup-plasma-only",children:"Beep on Wakeup (PLASMA Only)"}),"\n",(0,s.jsx)(n.p,{children:"When enabled, the neoVI PLASMA will beep each time it wakes up."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},8092:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/std-report-mote-a7131dbdb7c6da8df7b3a79b3a832882.png"},2454:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/std-report-7c6c0c72ae94aba2d6dee94e9f9373a0.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(6540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);