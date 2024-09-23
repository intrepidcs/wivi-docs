"use strict";(self.webpackChunkwivi_docs=self.webpackChunkwivi_docs||[]).push([[158],{6707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(4848),s=t(8453);const i={title:"Power Management in VehicleScape DAQ Standalone Logging",description:"Learn how to configure Power Management settings in VehicleScape DAQ Standalone Logging. Control sleep and wake behavior of loggers like neoVI PLASMA and FIRE to conserve vehicle battery power.",keywords:["Power Management","Standalone Logging","VehicleScape DAQ","sleep mode","wake settings","ICS hardware","neoVI PLASMA","neoVI FIRE","battery conservation","logger power management","wireless neoVI"],sidebar_position:3,sidebar_label:"Standalone Logging: Power Management"},a="Standalone Logging: Power Management",r={id:"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-power-management",title:"Power Management in VehicleScape DAQ Standalone Logging",description:"Learn how to configure Power Management settings in VehicleScape DAQ Standalone Logging. Control sleep and wake behavior of loggers like neoVI PLASMA and FIRE to conserve vehicle battery power.",source:"@site/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-power-management.md",sourceDirName:"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab",slug:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-power-management",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-power-management",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/wivi-docs/blob/main/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-power-management.md",tags:[],version:"current",lastUpdatedAt:1727081101e3,sidebarPosition:3,frontMatter:{title:"Power Management in VehicleScape DAQ Standalone Logging",description:"Learn how to configure Power Management settings in VehicleScape DAQ Standalone Logging. Control sleep and wake behavior of loggers like neoVI PLASMA and FIRE to conserve vehicle battery power.",keywords:["Power Management","Standalone Logging","VehicleScape DAQ","sleep mode","wake settings","ICS hardware","neoVI PLASMA","neoVI FIRE","battery conservation","logger power management","wireless neoVI"],sidebar_position:3,sidebar_label:"Standalone Logging: Power Management"},sidebar:"tutorialSidebar",previous:{title:"Standalone Logging: Status Reporting",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-status-reporting"},next:{title:"Standalone Logging: Generation Options",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-generation-options"}},l={},d=[{value:"Sleep Options",id:"sleep-options",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Wake Options",id:"wake-options",level:2},{value:"Enable Remote Wake Up (Wireless Devices Only)",id:"enable-remote-wake-up-wireless-devices-only",level:2},{value:"Start a New File When Waking Up",id:"start-a-new-file-when-waking-up",level:2},{value:"Wireless neoVI",id:"wireless-neovi",level:2},{value:"Disable all VehicleScape Transmissions on Expression",id:"disable-all-vehiclescape-transmissions-on-expression",level:2}];function g(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"standalone-logging-power-management",children:"Standalone Logging: Power Management"})}),"\n",(0,o.jsxs)(n.p,{children:["Standalone Logging's Power Management features control when the logger goes to sleep to conserve power, and when it wakes up again. These are universal settings that apply to all collections using any of the four collection methods: ",(0,o.jsx)(n.a,{href:"./../standalone-logging-collections-and-methods/",children:"Message Capture"}),", ",(0,o.jsx)(n.a,{href:"../standalone-logging-collections-and-methods/collections-and-methods-histogram-method/",children:"Histogram"}),", ",(0,o.jsx)(n.a,{href:"../standalone-logging-collections-and-methods/collections-and-methods-bus-query-method/",children:"Bus Query"})," or ",(0,o.jsx)(n.a,{href:"../standalone-logging-collections-and-methods/collections-and-methods-ethernet-daq-method/",children:"Ethernet DAQ"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," ICS loggers, such as the neoVI FIRE, PLASMA and ION, are designed to be always on (they do not have power on/off switches). Sleep and wake settings are provided to minimize power consumption while logging is taking place. It is ",(0,o.jsx)(n.strong,{children:"CRITICAL"})," to set these configuration parameters correctly to avoid draining the battery of the car to which a logger is connected!"]}),"\n",(0,o.jsx)(n.p,{children:"The Power Management section of the Standalone Logging screen can be found in Figure 1. There are three subsections containing related options, plus an additional option at the bottom of the box, all of which are explained below."}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("figure",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"pwr-mgmt",src:t(2735).A+"",title:"pwr-mgmt",width:"800",height:"138"}),"\r\n",(0,o.jsx)("figcaption",{children:"Figure 1: Standalone Logging Power Management Options."})]})})}),"\n",(0,o.jsx)(n.h2,{id:"sleep-options",children:"Sleep Options"}),"\n",(0,o.jsx)(n.p,{children:"Choose one of the two options to determine whether or not the logger enters sleep mode:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Never go to sleep:"})," Use the default firmware settings configured in the hardware using neoVI 3G Explorer."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Sleep when there's no bus activity for # sec:"})," Enter sleep mode when all selected networks for this logging task are quiet for the specified time period. Networks are chosen in the ",(0,o.jsx)(n.a,{href:"../standalone-logging-generation-options/",children:"Generation Options"})," section."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["As mentioned above, ICS hardware by default has sleep mode disabled. If you choose ",(0,o.jsx)(n.strong,{children:"Never"}),", the device will never enter sleep mode. ",(0,o.jsx)("span",{class:"text-red",children:"Choosing this option can drain the car's battery if used incorrectly"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"advanced-options",children:"Advanced Options"}),"\n",(0,o.jsxs)(n.p,{children:["Clicking the ",(0,o.jsx)(n.strong,{children:"Advanced"})," button launches a dialog box that gives you even more control over the logger's behavior when it goes to sleep or wakes up. There are two tabs here with options to choose from (both are shown in Figure 2):"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Advanced (Networks to Ignore):"})," Select which networks, if any, to be ignored in the expression that is generated to put the logger to sleep."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Sleep User Function Blocks:"})," Specify function blocks to stop running when the logger enters sleep mode, and to begin running when the device wakes up."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," These settings are also found under ",(0,o.jsx)(n.strong,{children:"Advanced Options"})," in the ",(0,o.jsx)(n.a,{href:"../standalone-logging-generation-options/",children:"Generation Options"})," area."]}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("figure",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"pwr-mgmt-adv",src:t(7624).A+"",title:"pwr-mgmt-adv",width:"800",height:"297"}),"\r\n",(0,o.jsx)("figcaption",{children:"Figure 2: Standalone Logging Power Management Advanced Options. Left, the Advanced tab, right, the Sleep User Function Blocks tab."})]})})}),"\n",(0,o.jsx)(n.h2,{id:"wake-options",children:"Wake Options"}),"\n",(0,o.jsx)(n.p,{children:'This setting controls how "deeply" the logger sleeps and how quickly it wakes up. The choice here represents a trade-off between power consumption and responsiveness to the resumption of bus activity; the options and their impacts are explained in Table 1.'}),"\n",(0,o.jsx)(n.p,{children:"In both modes, any activity on any network connected to the logger will trigger a wakeup and keep the logger awake until sleep conditions are met again."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Table 1: Wake Up Options for Standalone Logging Sleep Mode"})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Wake Up Mode"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Sleep Behavior"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Wake Up Behavior"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Relative Power Consumption"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Typical Current Draw at 12V"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Normal"}),(0,o.jsx)(n.td,{children:"Everything runs"}),(0,o.jsx)(n.td,{children:"Might not log the first few messages upon wakeup"}),(0,o.jsx)(n.td,{children:"Lowest while asleep"}),(0,o.jsx)(n.td,{children:"PLASMA: ~5 mA FIRE: ~5 mA"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Instant (HS/MS)"}),(0,o.jsx)(n.td,{children:"Everything runs"}),(0,o.jsx)(n.td,{children:"Wakeup triggered from HS or MS CAN allows the message that caused the wakeup to be logged"}),(0,o.jsx)(n.td,{children:"Higher than Normal mode"}),(0,o.jsx)(n.td,{children:"PLASMA: ~27 mA FIRE: ~50 mA"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"enable-remote-wake-up-wireless-devices-only",children:"Enable Remote Wake Up (Wireless Devices Only)"}),"\n",(0,o.jsx)(n.p,{children:"This option allows a sleeping neoVI PLASMA to be woken remotely by an SMS text message."}),"\n",(0,o.jsx)(n.h2,{id:"start-a-new-file-when-waking-up",children:"Start a New File When Waking Up"}),"\n",(0,o.jsx)(n.p,{children:"Enable this option to start a new log file each time the logger wakes up, rather than appending to the previous log"}),"\n",(0,o.jsx)(n.h2,{id:"wireless-neovi",children:"Wireless neoVI"}),"\n",(0,o.jsx)(n.p,{children:"These settings limit attempts to upload logs wirelessly to Wireless neoVI in order to prevent excessive power use that might drain the car's battery:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Overall Timeout:"})," The maximum amount of time (in minutes) to try a wireless upload."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Connection Timeout:"})," How long to attempt to make a connection before giving up."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Voltage Cutoff:"})," The lowest voltage at which the logger will attempt to upload data."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Exceeding any of these limits will force the logger into sleep mode."}),"\n",(0,o.jsx)(n.h2,{id:"disable-all-vehiclescape-transmissions-on-expression",children:"Disable all VehicleScape Transmissions on Expression"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},7624:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/pwr-mgmt-adv-4a2439705b7ac45a91a1f3ffec16289e.png"},2735:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/pwr-mgmt-a5e079f33a69b888c1a0bbe690e23363.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);