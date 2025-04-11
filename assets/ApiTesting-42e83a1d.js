import{r as a,j as e}from"./vendor-fce441a0.js";import{P as Re}from"./PageLayout-3a544d84.js";import{C as I,a as C,b as E,c as ee,d as R}from"./card-bc9b570c.js";import{c as ke,a as se,u as re,b as te,d as Me,P as N,e as S,f as ie,g as Oe}from"./index-1cf9b73b.js";import{u as Fe}from"./index-09701c9c.js";import{c as X}from"./utils-3f044a58.js";import{T as M,a as O,b as o,c as b,d as F,e as s}from"./table-f7d3b639.js";import{A as De,a as D,b as L,c as U}from"./accordion-8425a3ed.js";import{c as v}from"./createLucideIcon-581641d9.js";import{L as Le}from"./lightbulb-69d7fcdd.js";import"./Header-60cd834c.js";var W="rovingFocusGroup.onEntryFocus",Ue={bubbles:!1,cancelable:!0},H="RovingFocusGroup",[B,ne,He]=ke(H),[Ge,oe]=se(H,[He]),[_e,ze]=Ge(H),ae=a.forwardRef((r,t)=>e.jsx(B.Provider,{scope:r.__scopeRovingFocusGroup,children:e.jsx(B.Slot,{scope:r.__scopeRovingFocusGroup,children:e.jsx(qe,{...r,ref:t})})}));ae.displayName=H;var qe=a.forwardRef((r,t)=>{const{__scopeRovingFocusGroup:n,orientation:i,loop:h=!1,dir:m,currentTabStopId:l,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:f,onEntryFocus:c,preventScrollOnEntryFocus:x=!1,...d}=r,g=a.useRef(null),k=Fe(t,g),u=re(m),[w=null,G]=te({prop:l,defaultProp:p,onChange:f}),[y,T]=a.useState(!1),_=Me(c),we=ne(n),z=a.useRef(!1),[Ae,Q]=a.useState(0);return a.useEffect(()=>{const j=g.current;if(j)return j.addEventListener(W,_),()=>j.removeEventListener(W,_)},[_]),e.jsx(_e,{scope:n,orientation:i,dir:u,loop:h,currentTabStopId:w,onItemFocus:a.useCallback(j=>G(j),[G]),onItemShiftTab:a.useCallback(()=>T(!0),[]),onFocusableItemAdd:a.useCallback(()=>Q(j=>j+1),[]),onFocusableItemRemove:a.useCallback(()=>Q(j=>j-1),[]),children:e.jsx(N.div,{tabIndex:y||Ae===0?-1:0,"data-orientation":i,...d,ref:k,style:{outline:"none",...r.style},onMouseDown:S(r.onMouseDown,()=>{z.current=!0}),onFocus:S(r.onFocus,j=>{const Ie=!z.current;if(j.target===j.currentTarget&&Ie&&!y){const Z=new CustomEvent(W,Ue);if(j.currentTarget.dispatchEvent(Z),!Z.defaultPrevented){const q=we().filter(A=>A.focusable),Ne=q.find(A=>A.active),Ce=q.find(A=>A.id===w),Ee=[Ne,Ce,...q].filter(Boolean).map(A=>A.ref.current);de(Ee,x)}}z.current=!1}),onBlur:S(r.onBlur,()=>T(!1))})})}),le="RovingFocusGroupItem",ce=a.forwardRef((r,t)=>{const{__scopeRovingFocusGroup:n,focusable:i=!0,active:h=!1,tabStopId:m,...l}=r,p=ie(),f=m||p,c=ze(le,n),x=c.currentTabStopId===f,d=ne(n),{onFocusableItemAdd:g,onFocusableItemRemove:k}=c;return a.useEffect(()=>{if(i)return g(),()=>k()},[i,g,k]),e.jsx(B.ItemSlot,{scope:n,id:f,focusable:i,active:h,children:e.jsx(N.span,{tabIndex:x?0:-1,"data-orientation":c.orientation,...l,ref:t,onMouseDown:S(r.onMouseDown,u=>{i?c.onItemFocus(f):u.preventDefault()}),onFocus:S(r.onFocus,()=>c.onItemFocus(f)),onKeyDown:S(r.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){c.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const w=Be(u,c.orientation,c.dir);if(w!==void 0){if(u.metaKey||u.ctrlKey||u.altKey||u.shiftKey)return;u.preventDefault();let y=d().filter(T=>T.focusable).map(T=>T.ref.current);if(w==="last")y.reverse();else if(w==="prev"||w==="next"){w==="prev"&&y.reverse();const T=y.indexOf(u.currentTarget);y=c.loop?Ke(y,T+1):y.slice(T+1)}setTimeout(()=>de(y))}})})})});ce.displayName=le;var We={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ve(r,t){return t!=="rtl"?r:r==="ArrowLeft"?"ArrowRight":r==="ArrowRight"?"ArrowLeft":r}function Be(r,t,n){const i=Ve(r.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(i))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(i)))return We[i]}function de(r,t=!1){const n=document.activeElement;for(const i of r)if(i===n||(i.focus({preventScroll:t}),document.activeElement!==n))return}function Ke(r,t){return r.map((n,i)=>r[(t+i)%r.length])}var Je=ae,Xe=ce,$="Tabs",[$e,Ts]=se($,[oe]),he=oe(),[Ye,Y]=$e($),xe=a.forwardRef((r,t)=>{const{__scopeTabs:n,value:i,onValueChange:h,defaultValue:m,orientation:l="horizontal",dir:p,activationMode:f="automatic",...c}=r,x=re(p),[d,g]=te({prop:i,onChange:h,defaultProp:m});return e.jsx(Ye,{scope:n,baseId:ie(),value:d,onValueChange:g,orientation:l,dir:x,activationMode:f,children:e.jsx(N.div,{dir:x,"data-orientation":l,...c,ref:t})})});xe.displayName=$;var ue="TabsList",me=a.forwardRef((r,t)=>{const{__scopeTabs:n,loop:i=!0,...h}=r,m=Y(ue,n),l=he(n);return e.jsx(Je,{asChild:!0,...l,orientation:m.orientation,dir:m.dir,loop:i,children:e.jsx(N.div,{role:"tablist","aria-orientation":m.orientation,...h,ref:t})})});me.displayName=ue;var je="TabsTrigger",pe=a.forwardRef((r,t)=>{const{__scopeTabs:n,value:i,disabled:h=!1,...m}=r,l=Y(je,n),p=he(n),f=be(l.baseId,i),c=ye(l.baseId,i),x=i===l.value;return e.jsx(Xe,{asChild:!0,...p,focusable:!h,active:x,children:e.jsx(N.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":c,"data-state":x?"active":"inactive","data-disabled":h?"":void 0,disabled:h,id:f,...m,ref:t,onMouseDown:S(r.onMouseDown,d=>{!h&&d.button===0&&d.ctrlKey===!1?l.onValueChange(i):d.preventDefault()}),onKeyDown:S(r.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(i)}),onFocus:S(r.onFocus,()=>{const d=l.activationMode!=="manual";!x&&!h&&d&&l.onValueChange(i)})})})});pe.displayName=je;var fe="TabsContent",ge=a.forwardRef((r,t)=>{const{__scopeTabs:n,value:i,forceMount:h,children:m,...l}=r,p=Y(fe,n),f=be(p.baseId,i),c=ye(p.baseId,i),x=i===p.value,d=a.useRef(x);return a.useEffect(()=>{const g=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(Oe,{present:h||x,children:({present:g})=>e.jsx(N.div,{"data-state":x?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":f,hidden:!g,id:c,tabIndex:0,...l,ref:t,style:{...r.style,animationDuration:d.current?"0s":void 0},children:g&&m})})});ge.displayName=fe;function be(r,t){return`${r}-trigger-${t}`}function ye(r,t){return`${r}-content-${t}`}var Qe=xe,ve=me,Te=pe,Pe=ge;const Ze=Qe,Se=a.forwardRef(({className:r,...t},n)=>e.jsx(ve,{ref:n,className:X("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",r),...t}));Se.displayName=ve.displayName;const K=a.forwardRef(({className:r,...t},n)=>e.jsx(Te,{ref:n,className:X("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",r),...t}));K.displayName=Te.displayName;const J=a.forwardRef(({className:r,...t},n)=>e.jsx(Pe,{ref:n,className:X("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...t}));J.displayName=Pe.displayName;/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=v("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=v("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=v("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=v("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=v("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=v("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=v("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=v("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=v("TestTubeDiagonal",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=v("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),V=({children:r})=>e.jsx("pre",{className:"bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto my-4",children:e.jsx("code",{children:r})}),P=({title:r,icon:t,children:n,className:i})=>e.jsxs(I,{className:`mb-8 shadow-lg border-l-4 border-blue-500 ${i}`,children:[e.jsx(C,{children:e.jsxs(E,{className:"flex items-center text-2xl font-bold text-gray-800",children:[t&&e.jsx("span",{className:"mr-3 text-blue-600",children:t}),r]})}),e.jsx(R,{className:"prose max-w-none prose-indigo",children:n})]});function Ps(){return e.jsx(Re,{title:"API Testing Fundamentals",subtitle:"Explore the core concepts, types, protocols, and tools of API Testing",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs(P,{title:"What is an API?",icon:e.jsx(ns,{size:24}),children:[e.jsxs("p",{children:["An ",e.jsx("strong",{children:"API (Application Programming Interface)"})," is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information, enabling developers to integrate external functionalities without building them from scratch."]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"Real-life Example (The Restaurant Analogy)"}),e.jsx(I,{className:"bg-gradient-to-r from-blue-50 to-indigo-50 p-4 mb-4 border border-blue-200",children:e.jsxs("ul",{className:"list-none space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Customer (User):"})," You, wanting services/data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menu (API Documentation):"})," Lists available services/data and how to request them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Waiter (API):"})," The intermediary taking your request to the system (kitchen)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kitchen (Server):"})," Processes the request and returns the response (meal)."]})]})}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"Software Examples"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Social Media Integration:"})," Apps using Facebook/Twitter APIs for login or sharing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payment Processing:"})," E-commerce sites using Stripe/PayPal APIs for secure transactions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Weather Data:"})," Apps using OpenWeatherMap API to fetch forecasts."]})]})]}),e.jsx(P,{title:"Importance in Software Development",icon:e.jsx(Le,{size:24}),children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Interoperability:"})," Helps different systems work together seamlessly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efficiency:"})," Saves time with ready-made functions, speeding up development."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automation:"})," Enables automation of repetitive tasks, boosting productivity."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability & Flexibility:"})," Allows apps to grow and adapt easily."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Innovation:"})," Encourages new apps and services by sharing features."]})]})}),e.jsx(P,{title:"Types of APIs",icon:e.jsx(as,{size:24}),children:e.jsxs(De,{type:"single",collapsible:!0,className:"w-full",children:[e.jsxs(D,{value:"web",children:[e.jsx(L,{className:"text-lg font-semibold",children:"1. Web APIs"}),e.jsx(U,{children:"Facilitate communication over the internet (e.g., fetching data from a remote server). Commonly use HTTP/HTTPS."})]}),e.jsxs(D,{value:"library",children:[e.jsx(L,{className:"text-lg font-semibold",children:"2. Library APIs"}),e.jsx(U,{children:"Provide functions within software libraries (e.g., Java Standard Library for file I/O)."})]}),e.jsxs(D,{value:"framework",children:[e.jsx(L,{className:"text-lg font-semibold",children:"3. Framework APIs"}),e.jsx(U,{children:"Part of software frameworks offering predefined classes/functions (e.g., Django APIs for database access)."})]}),e.jsxs(D,{value:"os",children:[e.jsx(L,{className:"text-lg font-semibold",children:"4. Operating System APIs"}),e.jsx(U,{children:"Allow applications to interact with the OS (e.g., Windows API for creating windows)."})]})]})}),e.jsxs(P,{title:"Web Services",icon:e.jsx(os,{size:24}),children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Web Services"})," are services that communicate between machines over a network, typically the internet. They use standardized web protocols (like HTTP) and data formats (like XML or JSON)."]}),e.jsx("p",{className:"mt-2 italic text-gray-600",children:"Key takeaway: All Web Services are APIs, but not all APIs are Web Services (e.g., Library or OS APIs don't necessarily use a network)."}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"Examples of Web Services"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Weather Information Services"}),e.jsx("li",{children:"Payment Gateways (Stripe, PayPal)"}),e.jsx("li",{children:"Social Media Integration Services"})]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"APIs vs. Web Services"}),e.jsx("div",{className:"overflow-x-auto rounded-lg shadow border border-gray-200 my-4",children:e.jsxs(M,{children:[e.jsx(O,{className:"bg-gray-100",children:e.jsxs(o,{children:[e.jsx(b,{className:"font-bold",children:"Aspect"}),e.jsx(b,{className:"font-bold",children:"API"}),e.jsx(b,{className:"font-bold",children:"Web Service"})]})}),e.jsxs(F,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Definition"}),e.jsx(s,{children:"Set of rules for software communication."}),e.jsx(s,{children:"Standardized method for communication over a network."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Communication"}),e.jsx(s,{children:"Various protocols (HTTP, TCP, etc.)"}),e.jsx(s,{children:"Primarily web protocols (HTTP/HTTPS)."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Data Formats"}),e.jsx(s,{children:"Multiple (JSON, XML, etc.)"}),e.jsx(s,{children:"Typically XML or JSON."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Accessibility"}),e.jsx(s,{children:"Local or remote."}),e.jsx(s,{children:"Specifically remote over a network."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Implementation"}),e.jsx(s,{children:"Various styles (REST, SOAP, GraphQL, etc.)"}),e.jsx(s,{children:"Generally SOAP or REST."})]})]})]})})]}),e.jsxs(P,{title:"Web API Architectures",icon:e.jsx(rs,{size:24}),children:[e.jsxs("p",{className:"mb-4",children:["A ",e.jsx("strong",{children:"Web API"})," is an API accessed over the web using HTTP. It's a framework for creating HTTP-based services, often RESTful. It's crucial for distributed systems serving various devices (laptops, mobiles)."]}),e.jsxs(Ze,{defaultValue:"rest",className:"w-full",children:[e.jsxs(Se,{className:"grid w-full grid-cols-2 mb-4",children:[e.jsx(K,{value:"rest",children:"REST (Representational State Transfer)"}),e.jsx(K,{value:"soap",children:"SOAP (Simple Object Access Protocol)"})]}),e.jsx(J,{value:"rest",children:e.jsxs(I,{className:"border-blue-300 border",children:[e.jsxs(C,{children:[e.jsx(E,{children:"REST Architecture"}),e.jsx(ee,{children:"An architectural style using standard HTTP methods, emphasizing statelessness and flexibility. Preferred for web and mobile apps due to simplicity and performance."})]}),e.jsxs(R,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"How it Works:"})," Client sends HTTP request (GET, POST, PUT, DELETE) to a URI. Server responds with a resource representation (often JSON)."]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"REST Request Structure:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HTTP Method:"})," GET, POST, PUT, DELETE, PATCH, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Endpoint/URI:"})," Identifies the resource (e.g., `/users/123`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Headers:"})," Metadata (e.g., `Content-Type: application/json`, `Authorization: Bearer [YOUR_TOKEN_HERE]`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Query Parameters (Optional):"})," Filter/modify request (e.g., `/users?active=true`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Body (Optional):"})," Data payload for POST/PUT/PATCH (usually JSON)."]})]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Example Request:"}),e.jsx(V,{children:`GET /api/users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIU...`})]})]})}),e.jsx(J,{value:"soap",children:e.jsxs(I,{className:"border-purple-300 border",children:[e.jsxs(C,{children:[e.jsx(E,{children:"SOAP Protocol"}),e.jsx(ee,{children:"A protocol designed for exchanging structured information, ensuring interoperability across platforms using XML. More rigid than REST."})]}),e.jsxs(R,{children:[e.jsx("p",{children:"Uses XML format for messages and can operate over various protocols (HTTP, SMTP)."}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"SOAP Protocol Structure:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Envelope:"})," Root element defining the message."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Header (Optional):"})," Application-specific info (e.g., authentication)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Body:"})," Contains the actual message/call."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fault (Optional):"})," Error information."]})]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"WSDL (Web Services Description Language):"}),e.jsx("p",{children:"An XML-based language describing the service's functionalities, acting as a contract."}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Messaging Patterns:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Request-Response"}),e.jsx("li",{children:"One-Way"}),e.jsx("li",{children:"Publish-Subscribe"})]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Example SOAP Message:"}),e.jsx(V,{children:`<?xml version="1.0"?>
<soap:Envelope
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <soap:Body>
    <m:GetUser xmlns:m="http://api.example.com/user">
      <m:UserId>123</m:UserId>
    </m:GetUser>
  </soap:Body>
</soap:Envelope>`})]})]})})]}),e.jsx("h3",{className:"text-xl font-semibold mt-8 mb-3",children:"REST vs. SOAP Comparison"}),e.jsx("div",{className:"overflow-x-auto rounded-lg shadow border border-gray-200 my-4",children:e.jsxs(M,{children:[e.jsx(O,{className:"bg-gray-100",children:e.jsxs(o,{children:[e.jsx(b,{className:"font-bold",children:"Aspect"}),e.jsx(b,{className:"font-bold",children:"REST"}),e.jsx(b,{className:"font-bold",children:"SOAP"})]})}),e.jsxs(F,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Protocol Type"}),e.jsx(s,{children:"Architectural Style (uses HTTP)"}),e.jsx(s,{children:"Protocol (uses XML over HTTP, SMTP, etc.)"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Data Format"}),e.jsx(s,{children:"JSON, XML, HTML, Text"}),e.jsx(s,{children:"XML only"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Communication"}),e.jsx(s,{children:"Stateless"}),e.jsx(s,{children:"Can be Stateful or Stateless"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Security"}),e.jsx(s,{children:"Relies on transport (HTTPS), OAuth"}),e.jsx(s,{children:"Built-in WS-Security"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Performance"}),e.jsx(s,{children:"Generally Faster (less overhead, caching)"}),e.jsx(s,{children:"Can be Slower (XML parsing)"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Error Handling"}),e.jsx(s,{children:"HTTP Status Codes"}),e.jsx(s,{children:"SOAP Fault Element"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Use Cases"}),e.jsx(s,{children:"Web/Mobile Apps, Public APIs"}),e.jsx(s,{children:"Enterprise Apps, High Security Needs"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Contract"}),e.jsx(s,{children:"Less Strict (OpenAPI optional)"}),e.jsx(s,{children:"Strict (WSDL required)"})]})]})]})})]}),e.jsxs(P,{title:"API Testing Overview",icon:e.jsx(ls,{size:24}),children:[e.jsxs("p",{children:[e.jsx("strong",{children:"API Testing"})," is a type of software testing that validates APIs directly by sending calls, getting output, and checking the system's response. It focuses on the ",e.jsx("strong",{children:"business logic layer"}),", verifying functionality, reliability, performance, and security, rather than the graphical user interface (GUI)."]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"Types of API Testing"}),e.jsx("div",{className:"overflow-x-auto rounded-lg shadow border border-gray-200 my-4",children:e.jsxs(M,{children:[e.jsx(O,{className:"bg-gray-100",children:e.jsxs(o,{children:[e.jsx(b,{className:"font-bold",children:"Type"}),e.jsx(b,{className:"font-bold",children:"Description"}),e.jsx(b,{className:"font-bold",children:"Example Tool"})]})}),e.jsxs(F,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Functional"}),e.jsx(s,{children:"Validates API works per requirements."}),e.jsx(s,{children:"Postman"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Performance"}),e.jsx(s,{children:"Assesses responsiveness & stability under load."}),e.jsx(s,{children:"JMeter, Merge.dev"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Security"}),e.jsx(s,{children:"Identifies vulnerabilities & protects data."}),e.jsx(s,{children:"OWASP ZAP, Nordic APIs"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Validation"}),e.jsx(s,{children:"Confirms API meets business needs & format."}),e.jsx(s,{children:"Imperva"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Load"}),e.jsx(s,{children:"Evaluates behavior under expected user loads."}),e.jsx(s,{children:"JMeter"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Runtime/Error Detection"}),e.jsx(s,{children:"Monitors for issues during execution."}),e.jsx(s,{children:"Dynatrace"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Interoperability"}),e.jsx(s,{children:"Ensures seamless interaction with other systems."}),e.jsx(s,{children:"Swagger"})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Fuzz"}),e.jsx(s,{children:"Sends random/invalid data to find issues."}),e.jsx(s,{children:"Burp Suite"})]})]})]})})]}),e.jsxs(P,{title:"HTTP Methods & Status Codes",icon:e.jsx(is,{size:24}),children:[e.jsx("p",{children:"HTTP (Hypertext Transfer Protocol) enables client-server communication using a request-response model."}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"Common HTTP Methods"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GET:"})," Retrieve resource information (Safe method - doesn't change state)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"POST:"})," Send data to create or update a resource."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PUT:"})," Update/replace a resource at a specific URI (Idempotent)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DELETE:"})," Delete a resource identified by the URI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PATCH:"})," Partially update a resource."]})]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Example Usage (User Profile):"}),e.jsx(V,{children:`// GET /users/123 - Retrieve user 123's profile
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "posts": [ { "postId": 1, "title": "First Post" } ]
}

// POST /users/123/posts - Create a new post for user 123
{ "title": "New Blog Post", "content": "..." }
// Response might include the new post object with its ID.

// PUT /users/123 - Update user 123's email
{ "email": "new.alice@example.com" }
// Server updates the email field.

// DELETE /users/123/posts/1 - Delete post with ID 1 for user 123
// Server removes the post from the user's posts array.`}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"HTTP Status Codes"}),e.jsx("p",{children:"Three-digit codes indicating the outcome of a request:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"1xx (Informational):"})," Request received, continuing process (e.g., 100 Continue)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"2xx (Successful):"})," Request successfully received, understood, and accepted (e.g., 200 OK, 201 Created)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"3xx (Redirection):"})," Further action needed (e.g., 301 Moved Permanently)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"4xx (Client Error):"})," Error caused by the client (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"5xx (Server Error):"})," Server failed to fulfill a valid request (e.g., 500 Internal Server Error)."]})]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"POST vs. PUT"}),e.jsx("div",{className:"overflow-x-auto rounded-lg shadow border border-gray-200 my-4",children:e.jsxs(M,{children:[e.jsx(O,{className:"bg-gray-100",children:e.jsxs(o,{children:[e.jsx(b,{className:"font-bold",children:"Category"}),e.jsx(b,{className:"font-bold",children:"POST"}),e.jsx(b,{className:"font-bold",children:"PUT"})]})}),e.jsxs(F,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Purpose"}),e.jsx(s,{children:"Create new resource."}),e.jsx(s,{children:"Update/Replace existing resource (or create)."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Idempotency"}),e.jsx(s,{children:"No (multiple requests create multiple resources)."}),e.jsx(s,{children:"Yes (multiple requests have same effect)."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Resource URI"}),e.jsx(s,{children:"Server determines URI."}),e.jsx(s,{children:"Client specifies URI."})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Response Codes"}),e.jsx(s,{children:"Often 201 Created."}),e.jsx(s,{children:"Often 200 OK or 204 No Content."})]})]})]})})]}),e.jsx(P,{title:"API Authentication & Authorization",icon:e.jsx(ts,{size:24}),children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Authentication (Verifying Identity)"}),e.jsx("p",{children:"Confirms who the user or system is."}),e.jsx("h4",{className:"font-semibold mt-3 mb-1",children:"Common Methods:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"API Keys:"})," Simple tokens, less robust."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OAuth 2.0:"}),' Standard for delegated access (e.g., "Login with Google").']}),e.jsxs("li",{children:[e.jsx("strong",{children:"JWT (JSON Web Tokens):"})," Compact tokens for stateless auth."]})]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("strong",{children:"Example:"})," Client sends username/password, server verifies and returns an access token."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Authorization (Verifying Permissions)"}),e.jsx("p",{children:"Determines what an authenticated user can do."}),e.jsx("h4",{className:"font-semibold mt-3 mb-1",children:"Common Methods:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"RBAC (Role-Based):"})," Permissions based on user roles (Admin, Editor, Viewer)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ABAC (Attribute-Based):"})," Access based on attributes (user location, time of day)."]})]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("strong",{children:"Example:"})," Client uses token to request deleting a post. Server checks token's permissions; allows if user is Admin/Owner, denies if Guest."]})]})]})}),e.jsxs(P,{title:"API Testing Tools",icon:e.jsx(cs,{size:24}),children:[e.jsx("p",{children:"Various tools assist in designing, testing, documenting, and managing APIs."}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3",children:"Popular Tools:"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6",children:["Postman","SOAP UI","JMeter","ReadyAPI","Swagger.io","REST-Assured","Katalon Platform","Burp Suite","OWASP ZAP"].map(r=>e.jsx("span",{className:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm text-center border border-gray-300",children:r},r))}),e.jsxs(I,{className:"mb-6 border border-green-300",children:[e.jsx(C,{children:e.jsxs(E,{className:"flex items-center text-xl",children:[e.jsx(ss,{size:20,className:"mr-2 text-green-600"}),"Swagger / OpenAPI"]})}),e.jsxs(R,{children:[e.jsx("p",{children:"A suite of open-source tools based on the OpenAPI Specification for designing, building, documenting, and consuming RESTful APIs. It enables both humans and machines to understand API capabilities without source code access."}),e.jsx("p",{className:"mt-2",children:"Key features include interactive documentation (Swagger UI), code generation (Swagger Codegen), and API design tools."}),e.jsx("a",{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline mt-2 inline-block",children:"Visit Swagger.io"})," | ",e.jsx("a",{href:"https://petstore.swagger.io/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline mt-2 inline-block",children:"Swagger Petstore Example"})]})]}),e.jsxs(I,{className:"border border-orange-300",children:[e.jsx(C,{children:e.jsxs(E,{className:"flex items-center text-xl",children:[e.jsx(es,{size:20,className:"mr-2 text-orange-600"}),"Postman"]})}),e.jsxs(R,{children:[e.jsx("p",{children:"A popular API platform for building, testing, and documenting APIs. It simplifies the API lifecycle and collaboration."}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Key Features:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-4",children:[e.jsx("li",{children:"Intuitive API Client (Request Builder)"}),e.jsx("li",{children:"Automated Testing (Collections, Scripts)"}),e.jsx("li",{children:"Mock Servers"}),e.jsx("li",{children:"Documentation Generation"}),e.jsx("li",{children:"Workspaces for Collaboration"}),e.jsx("li",{children:"Environment Variables"}),e.jsx("li",{children:"Monitoring"})]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Installation:"}),e.jsxs("p",{children:["Download from the ",e.jsx("a",{href:"https://www.postman.com/downloads/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"Postman Downloads page"})," and run the installer for your OS."]}),e.jsx("h4",{className:"font-semibold mt-4 mb-2",children:"Using Postman:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Create requests (select method, enter URL, add headers/body)."}),e.jsx("li",{children:"Organize requests in Collections."}),e.jsx("li",{children:"Use Environments for variables (e.g., base URLs, tokens)."}),e.jsx("li",{children:'Write JavaScript tests in the "Tests" tab to validate responses (e.g., check status code, response time, data fields).'}),e.jsx("li",{children:"Use the Collection Runner to execute multiple requests and tests automatically."})]}),e.jsx("p",{className:"mt-2",children:"Postman allows easy testing of GET, POST, PUT, DELETE methods by configuring the request details in the builder."})]})]})]})]})})}export{Ps as default};
