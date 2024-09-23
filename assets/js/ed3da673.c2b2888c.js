"use strict";(self.webpackChunkwivi_docs=self.webpackChunkwivi_docs||[]).push([[238],{9818:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>g});var n=i(4848),t=i(8453);const a={title:"Histogram Collection Method in VehicleScape DAQ",description:"Explore the Histogram Method in VehicleScape DAQ for logging data frequency over value ranges. Configure 1D, 2D, or 3D histograms, set sample intervals, trigger expressions, and customize bucket spacing.",keywords:["Histogram Method","VehicleScape DAQ","Standalone Logging","data collection","frequency logging","value range","sample options","trigger expression","bucket spacing","ICS"],sidebar_position:7,sidebar_label:"Collections and Methods: Histogram Method"},o="Collections and Methods: Histogram Method",r={id:"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-histogram-method",title:"Histogram Collection Method in VehicleScape DAQ",description:"Explore the Histogram Method in VehicleScape DAQ for logging data frequency over value ranges. Configure 1D, 2D, or 3D histograms, set sample intervals, trigger expressions, and customize bucket spacing.",source:"@site/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-histogram-method.md",sourceDirName:"vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods",slug:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-histogram-method",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-histogram-method",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/wivi-docs/blob/main/docs/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-histogram-method.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Histogram Collection Method in VehicleScape DAQ",description:"Explore the Histogram Method in VehicleScape DAQ for logging data frequency over value ranges. Configure 1D, 2D, or 3D histograms, set sample intervals, trigger expressions, and customize bucket spacing.",keywords:["Histogram Method","VehicleScape DAQ","Standalone Logging","data collection","frequency logging","value range","sample options","trigger expression","bucket spacing","ICS"],sidebar_position:7,sidebar_label:"Collections and Methods: Histogram Method"},sidebar:"tutorialSidebar",previous:{title:"Collections and Methods: Bus Query Method",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-bus-query-method"},next:{title:"Collections and Methods: Ethernet DAQ Method",permalink:"/vs3-neoVI-script/vehiclescape-daq-standalone-logging-tab/standalone-logging-collections-and-methods/collections-and-methods-ethernet-daq-method"}},l={},g=[{value:"Histogram Axis Configuration",id:"histogram-axis-configuration",level:2},{value:"Histogram Dimension Selection",id:"histogram-dimension-selection",level:2},{value:"Histogram Axis Expression and Options",id:"histogram-axis-expression-and-options",level:2},{value:"Axis Tabs",id:"axis-tabs",level:2},{value:"Expression Selection",id:"expression-selection",level:2},{value:"Minimum Value / Maximum Value / Number of Buckets",id:"minimum-value--maximum-value--number-of-buckets",level:2},{value:"Underflow and Overflow Handling",id:"underflow-and-overflow-handling",level:2},{value:"Boundary Value Handling",id:"boundary-value-handling",level:2},{value:"Sample Options",id:"sample-options",level:2},{value:"Sample Every # Seconds",id:"sample-every--seconds",level:2},{value:"Start Using Trigger Expression",id:"start-using-trigger-expression",level:2},{value:"Selecting a Trigger",id:"selecting-a-trigger",level:2},{value:"Determining a Trigger Event",id:"determining-a-trigger-event",level:2},{value:"Always DAQ Option",id:"always-daq-option",level:2}];function h(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"collections-and-methods-histogram-method",children:"Collections and Methods: Histogram Method"})}),"\n",(0,n.jsxs)(s.p,{children:["The Histogram Method of data collection in VehicleScape DAQ ",(0,n.jsx)(s.a,{href:"./../../../vehiclescape-daq-standalone-logging-tab/",children:"Standalone Logging"})," records the frequency of data points across a value range over a period of time. The settings in this area are broken into two main subsections, ",(0,n.jsx)(s.strong,{children:"Histogram Axis Configuration"})," and ",(0,n.jsx)(s.strong,{children:"Sample Options"}),", which are described below."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"./../../standalone-logging-status-reporting/",children:"Status Reporting"}),", ",(0,n.jsx)(s.a,{href:"./../../standalone-logging-power-management/",children:"Power Management"})," and ",(0,n.jsx)(s.a,{href:"./../../standalone-logging-generation-options/",children:"Generation Options"})," sections in the bottom half of the Standalone Logging Tab apply to all method types, including the Histogram, ",(0,n.jsx)(s.a,{href:"./../collections-and-methods-message-capture-method/",children:"Message Capture"}),", ",(0,n.jsx)(s.a,{href:"./../collections-and-methods-bus-query-method/",children:"Bus Query"})," and ",(0,n.jsx)(s.a,{href:"./../collections-and-methods-ethernet-daq-method/",children:"Ethernet DAQ"})," methods."]}),"\n",(0,n.jsx)(s.h2,{id:"histogram-axis-configuration",children:"Histogram Axis Configuration"}),"\n",(0,n.jsx)(s.p,{children:"This is the main part of the Histogram Method view, where you define the characteristics of the histogram you want to generate."}),"\n",(0,n.jsx)(s.h2,{id:"histogram-dimension-selection",children:"Histogram Dimension Selection"}),"\n",(0,n.jsx)(s.p,{children:"Begin by defining the dimensions of the histogram; that is, choosing the number of axes in the configuration. Choices are as follows (Figure 1):"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"1 Dimensional (X axis only)"}),"\n",(0,n.jsx)(s.li,{children:"2 Dimensional (X and Y axes)"}),"\n",(0,n.jsx)(s.li,{children:"3 Dimensional (X, Y and Z axes)"}),"\n"]}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"histogram-dimension",src:i(855).A+"",title:"histogram-dimension",width:"490",height:"46"}),"\r\n",(0,n.jsx)("figcaption",{children:"Figure 1: Selecting the number of axes for histogram data collection."})]})})}),"\n",(0,n.jsx)(s.h2,{id:"histogram-axis-expression-and-options",children:"Histogram Axis Expression and Options"}),"\n",(0,n.jsx)(s.p,{children:"You must choose an expression and make appropriate settings for each of the axes selected in the preceding step. This is accomplished using the main expression selection and settings area shown in Figure 2."}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"histogram-axis",src:i(160).A+"",title:"histogram-axis",width:"662",height:"314"}),"\r\n",(0,n.jsx)("figcaption",{children:"Figure 2: Histogram axis tabs."})]})})}),"\n",(0,n.jsx)(s.h2,{id:"axis-tabs",children:"Axis Tabs"}),"\n",(0,n.jsx)(s.p,{children:"Each axis has its own settings, and you can swap among them by clicking on the axis tabs found on the left side of the Histogram Axis Configuration area."}),"\n",(0,n.jsxs)(s.p,{children:["Changing the dimension of the histogram will add or remove tabs from the list; (Figure 2: ",(0,n.jsx)("img",{src:"../../../../assets/images/one-digit.jpg",alt:"one-digit",class:"inline-image"}),") shows the tabs for a ",(0,n.jsx)(s.strong,{children:"3 Dimensional"})," histogram setup."]}),"\n",(0,n.jsx)(s.h2,{id:"expression-selection",children:"Expression Selection"}),"\n",(0,n.jsxs)(s.p,{children:["Press the ",(0,n.jsx)("img",{src:"../../../../assets/images/fx.gif",alt:"fx",class:"inline-image"})," button to define an expression for the current axis using the Expression Editor (Figure 2: ",(0,n.jsx)("img",{src:"../../../../assets/images/two-digit.jpg",alt:"two-digit",class:"inline-image"}),")."]}),"\n",(0,n.jsxs)(s.p,{children:["Just below the expression box is a checkbox option: ",(0,n.jsx)(s.strong,{children:'Value is calculated based on "Time" while expression is non-zero (in seconds)'}),". When selected, this means the collection will count the length of time (in seconds) that the axis expression is non-zero. Use this to count how often an event of varying duration has occurred."]}),"\n",(0,n.jsx)(s.h2,{id:"minimum-value--maximum-value--number-of-buckets",children:"Minimum Value / Maximum Value / Number of Buckets"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Minimum Value"})," is the lowest value that will be logged for the current channel for this axis, and the ",(0,n.jsx)(s.strong,{children:"Maximum Value"})," is the highest figure. The ",(0,n.jsx)(s.strong,{children:"Number of Buckets"})," determines how many categories into which the full range of values is split to create the histogram."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, the default settings shown in (Figure 2: ",(0,n.jsx)("img",{src:"../../../../assets/images/three-digit.jpg",alt:"three-digit",class:"inline-image"}),") define a histogram where the lowest possible value is 0, the highest is 10,000 and the number of buckets is 10. This means that each bucket will have a size of 1,000. Remember that these values, which are summarized at the bottom of Figure 2, are set on a per-axis basis."]}),"\n",(0,n.jsxs)(s.p,{children:["By default, all buckets are the same size, split evenly across the defined value range between ",(0,n.jsx)(s.strong,{children:"Minimum Value"})," and ",(0,n.jsx)(s.strong,{children:"Maximum Value"}),". If you check ",(0,n.jsx)(s.strong,{children:"Use Non-Linear Bucket Spacing"}),", you can then click the ",(0,n.jsx)(s.strong,{children:"Setup Buckets"}),"... button to bring up the ",(0,n.jsx)(s.strong,{children:"Setup Histogram Buckets"})," dialog box (Figure 3). Here you can set customized buckets of variable size. Choose from defining the setup based on the boundary values between adjacent buckets, or specifying each bucket's minimum value and width."]}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"histogram-axis-tab",src:i(5370).A+"",title:"histogram-axis",width:"634",height:"336"}),"\r\n",(0,n.jsx)("figcaption",{children:"Figure 2: Histogram axis tabs."})]})})}),"\n",(0,n.jsx)(s.h2,{id:"underflow-and-overflow-handling",children:"Underflow and Overflow Handling"}),"\n",(0,n.jsxs)(s.p,{children:["This selection determines how to handle values that fall outside the defined range: ",(0,n.jsx)(s.em,{children:"underflow"})," (values below the defined ",(0,n.jsx)(s.strong,{children:"Minimum Value"})," parameter) and overflow (values above ",(0,n.jsx)(s.strong,{children:"Maximum Value"}),"). The choices (Figure 2: ",(0,n.jsx)("img",{src:"../../../../assets/images/four-digit.jpg",alt:"four-digit",class:"inline-image"}),") are as follows:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Add to closest bucket"}),": Values that don't fall within range of any of the defined buckets are put in the one that is closest."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Created dedicated underflow/overflow buckets:"})," Create special underflow and overflow buckets for those values."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:'Increment an "invalid" counter:'})," Count the number of times a value appears that doesn't fit in a defined bucket."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"boundary-value-handling",children:"Boundary Value Handling"}),"\n",(0,n.jsxs)(s.p,{children:["This option specifies how to handle values that exactly equal a boundary between buckets (Figure 2: ",(0,n.jsx)("img",{src:"../../../../assets/images/five-digit.jpg",alt:"five-digit",class:"inline-image"}),"):"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Increment bucket above:"})," Count the boundary value as part of the bucket above the boundary."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Increment bucket below:"})," Count the boundary value as part of the bucket below the boundary."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"sample-options",children:"Sample Options"}),"\n",(0,n.jsx)(s.p,{children:"The settings in this part of the Histogram Method setup control when and how samples for the histogram are taken. There are two basic choices:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Every # seconds:"})," Sample periodically using the specified time interval."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Start using trigger"})," expression: Sample when a trigger event occurs."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The available options change based on which of these selections is made."}),"\n",(0,n.jsx)(s.h2,{id:"sample-every--seconds",children:"Sample Every # Seconds"}),"\n",(0,n.jsx)(s.p,{children:"The default setting is to sample periodically using the specified time interval (default is every 1 second). Figure 3 shows the settings available in this mode."}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"histogram-sample",src:i(5509).A+"",title:"histogram-sample",width:"684",height:"129"}),"\r\n",(0,n.jsx)("figcaption",{children:"Figure 3: Histogram Sample Options for periodic sampling."})]})})}),"\n",(0,n.jsxs)(s.p,{children:["Checking the ",(0,n.jsx)(s.strong,{children:"Only when expression is true"})," box causes data to be logged periodically only when the specified expression is true. Press the ",(0,n.jsx)("img",{src:"../../../../assets/images/fx.gif",alt:"fx",class:"inline-image"})," button to select the expression; you can also check boxes to enable any of the following events as triggers for sampling:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"neoVI MIC button press"}),"\n",(0,n.jsx)(s.li,{children:"neoVI MOTE using HS CAN3"}),"\n",(0,n.jsx)(s.li,{children:"Push Button Pendant / MISC 5 Trigger"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"start-using-trigger-expression",children:"Start Using Trigger Expression"}),"\n",(0,n.jsx)(s.p,{children:"When this option is selected, the settings in this area appear as in Figure 4."}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"sample-option",src:i(9286).A+"",title:"sample-option",width:"684",height:"268"}),"\r\n",(0,n.jsx)("figcaption",{children:"Figure 4: Sample Options for sampling based on a trigger expression."})]})})}),"\n",(0,n.jsx)(s.h2,{id:"selecting-a-trigger",children:"Selecting a Trigger"}),"\n",(0,n.jsxs)(s.p,{children:["Press the ",(0,n.jsx)("img",{src:"../../../../assets/images/fx.gif",alt:"fx",class:"inline-image"})," button to select the expression, and optionally check boxes to enable any of the following events as triggers:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"neoVI MIC button press"}),"\n",(0,n.jsx)(s.li,{children:"neoVI MOTE using HS CAN3"}),"\n",(0,n.jsx)(s.li,{children:"Push Button Pendant / MISC 5 Trigger"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"determining-a-trigger-event",children:"Determining a Trigger Event"}),"\n",(0,n.jsx)(s.p,{children:"There are three options for determining when a trigger event has occurred:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Trigger when expression is true:"})," Sample when the expression is true, optionally for a set period of time."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Trigger when expression changes:"})," Sample when the expression changes from its current value."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Trigger when expression increases / decreases / changes / exceeds constant and then decreases:"})," Sample when the selected event occurs."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"always-daq-option",children:"Always DAQ Option"}),"\n",(0,n.jsx)(s.p,{children:"When enabled, always request DAQ items even if they are not being logged. Requested DAQ items are diagnostic signals that get polled from ECUs like DTCs, PIDs, ISO 14229 IDs, and MEP A2L file data items. This must be enabled if the trigger is a DAQ item."})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5370:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/histogram-axis-tab-5dfaf2321571e5f192189e82daca7e05.png"},160:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/histogram-axis-7573ad1b724bc7143b579c988b08f3bb.png"},855:(e,s,i)=>{i.d(s,{A:()=>n});const n="data:image/png;base64,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"},5509:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/histogram-sample-9c491d9c9b39468d8adca70fd03af68d.png"},9286:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/sample-option-0101526c8e7e665da06c707d25a8590c.png"},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>r});var n=i(6540);const t={},a=n.createContext(t);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);