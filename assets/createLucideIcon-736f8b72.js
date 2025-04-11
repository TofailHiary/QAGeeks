import{j as a,u as g,r as o}from"./vendor-e3c5af8b.js";import{H as h}from"./Header-50c99371.js";const p=()=>{const t=g();return o.useEffect(()=>{const e=sessionStorage.getItem("redirect");if(e){sessionStorage.removeItem("redirect");const r="/QAGeeks/",s=e.startsWith(r)?e.substring(r.length-1):e,n=s===""?"/":s.startsWith("/")?s:`/${s}`;console.log(`Redirecting to: ${n} (Original: ${e})`),t(n,{replace:!0})}},[t]),null},b=({children:t,title:e,subtitle:r,transparentHeader:s=!1})=>a.jsxs("div",{className:"min-h-screen pt-16",children:[a.jsx(p,{})," ",a.jsx(h,{transparent:s}),a.jsxs("main",{className:"container mx-auto px-4 py-12",children:[a.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-center mb-4",children:e}),r&&a.jsx("p",{className:"text-center text-xl text-gray-600 mb-12",children:r}),t]}),a.jsx("footer",{className:"bg-gray-800 text-white py-8 mt-auto",children:a.jsx("div",{className:"container mx-auto px-4 text-center",children:a.jsxs("p",{children:["© ",new Date().getFullYear()," Al-Tofail Al-Hiary. All rights reserved."]})})})]});/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...t)=>t.filter((e,r,s)=>!!e&&s.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=o.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:c,iconNode:l,...m},x)=>o.createElement("svg",{ref:x,...j,width:e,height:e,stroke:t,strokeWidth:s?Number(r)*24/Number(e):r,className:i("lucide",n),...m},[...l.map(([d,u])=>o.createElement(d,u)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(t,e)=>{const r=o.forwardRef(({className:s,...n},c)=>o.createElement(w,{ref:c,iconNode:e,className:i(`lucide-${f(t)}`,s),...n}));return r.displayName=`${t}`,r};export{b as P,y as c};
