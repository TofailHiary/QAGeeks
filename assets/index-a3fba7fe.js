import{q as ye,r as p,u as oe,j as R,P as Q,s as U,bc as Kt,bd as Zt,a3 as Oe,o as at,v as Jt,be as Qt}from"./vendor-e5427b02.js";import{a as en,u as tn}from"./index-6bcc8ae5.js";function nn(e,t=globalThis==null?void 0:globalThis.document){const n=ye(e);p.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var on="DismissableLayer",Se="dismissableLayer.update",rn="dismissableLayer.pointerDownOutside",sn="dismissableLayer.focusOutside",Je,lt=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ft=p.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:i,onInteractOutside:s,onDismiss:a,...c}=e,l=p.useContext(lt),[f,d]=p.useState(null),h=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,u]=p.useState({}),m=oe(t,b=>d(b)),g=Array.from(l.layers),[x]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(x),w=f?g.indexOf(f):-1,E=l.layersWithOutsidePointerEventsDisabled.size>0,v=w>=y,C=ln(b=>{const T=b.target,M=[...l.branches].some(O=>O.contains(T));!v||M||(r==null||r(b),s==null||s(b),b.defaultPrevented||a==null||a())},h),A=fn(b=>{const T=b.target;[...l.branches].some(O=>O.contains(T))||(i==null||i(b),s==null||s(b),b.defaultPrevented||a==null||a())},h);return nn(b=>{w===l.layers.size-1&&(o==null||o(b),!b.defaultPrevented&&a&&(b.preventDefault(),a()))},h),p.useEffect(()=>{if(f)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(Je=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(f)),l.layers.add(f),Qe(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Je)}},[f,h,n,l]),p.useEffect(()=>()=>{f&&(l.layers.delete(f),l.layersWithOutsidePointerEventsDisabled.delete(f),Qe())},[f,l]),p.useEffect(()=>{const b=()=>u({});return document.addEventListener(Se,b),()=>document.removeEventListener(Se,b)},[]),R.jsx(Q.div,{...c,ref:m,style:{pointerEvents:E?v?"auto":"none":void 0,...e.style},onFocusCapture:U(e.onFocusCapture,A.onFocusCapture),onBlurCapture:U(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:U(e.onPointerDownCapture,C.onPointerDownCapture)})});ft.displayName=on;var cn="DismissableLayerBranch",an=p.forwardRef((e,t)=>{const n=p.useContext(lt),o=p.useRef(null),r=oe(t,o);return p.useEffect(()=>{const i=o.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),R.jsx(Q.div,{...e,ref:r})});an.displayName=cn;function ln(e,t=globalThis==null?void 0:globalThis.document){const n=ye(e),o=p.useRef(!1),r=p.useRef(()=>{});return p.useEffect(()=>{const i=a=>{if(a.target&&!o.current){let c=function(){ut(rn,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=c,t.addEventListener("click",r.current,{once:!0})):c()}else t.removeEventListener("click",r.current);o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function fn(e,t=globalThis==null?void 0:globalThis.document){const n=ye(e),o=p.useRef(!1);return p.useEffect(()=>{const r=i=>{i.target&&!o.current&&ut(sn,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Qe(){const e=new CustomEvent(Se);document.dispatchEvent(e)}function ut(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?Kt(r,i):r.dispatchEvent(i)}const un=["top","right","bottom","left"],q=Math.min,F=Math.max,he=Math.round,de=Math.floor,z=e=>({x:e,y:e}),dn={left:"right",right:"left",bottom:"top",top:"bottom"},pn={start:"end",end:"start"};function De(e,t,n){return F(e,q(t,n))}function X(e,t){return typeof e=="function"?e(t):e}function G(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function Ne(e){return e==="x"?"y":"x"}function He(e){return e==="y"?"height":"width"}function K(e){return["top","bottom"].includes(G(e))?"y":"x"}function Fe(e){return Ne(K(e))}function hn(e,t,n){n===void 0&&(n=!1);const o=re(e),r=Fe(e),i=He(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=me(s)),[s,me(s)]}function mn(e){const t=me(e);return[Le(e),t,Le(t)]}function Le(e){return e.replace(/start|end/g,t=>pn[t])}function gn(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function xn(e,t,n,o){const r=re(e);let i=gn(G(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Le)))),i}function me(e){return e.replace(/left|right|bottom|top/g,t=>dn[t])}function yn(e){return{top:0,right:0,bottom:0,left:0,...e}}function dt(e){return typeof e!="number"?yn(e):{top:e,right:e,bottom:e,left:e}}function ge(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function et(e,t,n){let{reference:o,floating:r}=e;const i=K(t),s=Fe(t),a=He(s),c=G(t),l=i==="y",f=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,h=o[a]/2-r[a]/2;let u;switch(c){case"top":u={x:f,y:o.y-r.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-r.width,y:d};break;default:u={x:o.x,y:o.y}}switch(re(t)){case"start":u[s]-=h*(n&&l?-1:1);break;case"end":u[s]+=h*(n&&l?-1:1);break}return u}const wn=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:d}=et(l,o,c),h=o,u={},m=0;for(let g=0;g<a.length;g++){const{name:x,fn:y}=a[g],{x:w,y:E,data:v,reset:C}=await y({x:f,y:d,initialPlacement:o,placement:h,strategy:r,middlewareData:u,rects:l,platform:s,elements:{reference:e,floating:t}});f=w??f,d=E??d,u={...u,[x]:{...u[x],...v}},C&&m<=50&&(m++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(l=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):C.rects),{x:f,y:d}=et(l,h,c)),g=-1)}return{x:f,y:d,placement:h,strategy:r,middlewareData:u}};async function ce(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:h=!1,padding:u=0}=X(t,e),m=dt(u),x=a[h?d==="floating"?"reference":"floating":d],y=ge(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:l,rootBoundary:f,strategy:c})),w=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,E=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),v=await(i.isElement==null?void 0:i.isElement(E))?await(i.getScale==null?void 0:i.getScale(E))||{x:1,y:1}:{x:1,y:1},C=ge(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:E,strategy:c}):w);return{top:(y.top-C.top+m.top)/v.y,bottom:(C.bottom-y.bottom+m.bottom)/v.y,left:(y.left-C.left+m.left)/v.x,right:(C.right-y.right+m.right)/v.x}}const vn=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:a,middlewareData:c}=t,{element:l,padding:f=0}=X(e,t)||{};if(l==null)return{};const d=dt(f),h={x:n,y:o},u=Fe(r),m=He(u),g=await s.getDimensions(l),x=u==="y",y=x?"top":"left",w=x?"bottom":"right",E=x?"clientHeight":"clientWidth",v=i.reference[m]+i.reference[u]-h[u]-i.floating[m],C=h[u]-i.reference[u],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let b=A?A[E]:0;(!b||!await(s.isElement==null?void 0:s.isElement(A)))&&(b=a.floating[E]||i.floating[m]);const T=v/2-C/2,M=b/2-g[m]/2-1,O=q(d[y],M),N=q(d[w],M),H=O,D=b-g[m]-N,S=b/2-g[m]/2+T,W=De(H,S,D),L=!c.arrow&&re(r)!=null&&S!==W&&i.reference[m]/2-(S<H?O:N)-g[m]/2<0,k=L?S<H?S-H:S-D:0;return{[u]:h[u]+k,data:{[u]:W,centerOffset:S-W-k,...L&&{alignmentOffset:k}},reset:L}}}),bn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...x}=X(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const y=G(r),w=K(a),E=G(a)===a,v=await(c.isRTL==null?void 0:c.isRTL(l.floating)),C=h||(E||!g?[me(a)]:mn(a)),A=m!=="none";!h&&A&&C.push(...xn(a,g,m,v));const b=[a,...C],T=await ce(t,x),M=[];let O=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&M.push(T[y]),d){const S=hn(r,s,v);M.push(T[S[0]],T[S[1]])}if(O=[...O,{placement:r,overflows:M}],!M.every(S=>S<=0)){var N,H;const S=(((N=i.flip)==null?void 0:N.index)||0)+1,W=b[S];if(W)return{data:{index:S,overflows:O},reset:{placement:W}};let L=(H=O.filter(k=>k.overflows[0]<=0).sort((k,P)=>k.overflows[1]-P.overflows[1])[0])==null?void 0:H.placement;if(!L)switch(u){case"bestFit":{var D;const k=(D=O.filter(P=>{if(A){const _=K(P.placement);return _===w||_==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(_=>_>0).reduce((_,I)=>_+I,0)]).sort((P,_)=>P[1]-_[1])[0])==null?void 0:D[0];k&&(L=k);break}case"initialPlacement":L=a;break}if(r!==L)return{reset:{placement:L}}}return{}}}};function tt(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function nt(e){return un.some(t=>e[t]>=0)}const Cn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=X(e,t);switch(o){case"referenceHidden":{const i=await ce(t,{...r,elementContext:"reference"}),s=tt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:nt(s)}}}case"escaped":{const i=await ce(t,{...r,altBoundary:!0}),s=tt(i,n.floating);return{data:{escapedOffsets:s,escaped:nt(s)}}}default:return{}}}}};async function En(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=G(n),a=re(n),c=K(n)==="y",l=["left","top"].includes(s)?-1:1,f=i&&c?-1:1,d=X(t,e);let{mainAxis:h,crossAxis:u,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof m=="number"&&(u=a==="end"?m*-1:m),c?{x:u*f,y:h*l}:{x:h*l,y:u*f}}const An=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:a}=t,c=await En(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:s}}}}},Pn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:x=>{let{x:y,y:w}=x;return{x:y,y:w}}},...c}=X(e,t),l={x:n,y:o},f=await ce(t,c),d=K(G(r)),h=Ne(d);let u=l[h],m=l[d];if(i){const x=h==="y"?"top":"left",y=h==="y"?"bottom":"right",w=u+f[x],E=u-f[y];u=De(w,u,E)}if(s){const x=d==="y"?"top":"left",y=d==="y"?"bottom":"right",w=m+f[x],E=m-f[y];m=De(w,m,E)}const g=a.fn({...t,[h]:u,[d]:m});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[h]:i,[d]:s}}}}}},Rn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:c=!0,crossAxis:l=!0}=X(e,t),f={x:n,y:o},d=K(r),h=Ne(d);let u=f[h],m=f[d];const g=X(a,t),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const E=h==="y"?"height":"width",v=i.reference[h]-i.floating[E]+x.mainAxis,C=i.reference[h]+i.reference[E]-x.mainAxis;u<v?u=v:u>C&&(u=C)}if(l){var y,w;const E=h==="y"?"width":"height",v=["top","left"].includes(G(r)),C=i.reference[d]-i.floating[E]+(v&&((y=s.offset)==null?void 0:y[d])||0)+(v?0:x.crossAxis),A=i.reference[d]+i.reference[E]+(v?0:((w=s.offset)==null?void 0:w[d])||0)-(v?x.crossAxis:0);m<C?m=C:m>A&&(m=A)}return{[h]:u,[d]:m}}}},Tn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:i,platform:s,elements:a}=t,{apply:c=()=>{},...l}=X(e,t),f=await ce(t,l),d=G(r),h=re(r),u=K(r)==="y",{width:m,height:g}=i.floating;let x,y;d==="top"||d==="bottom"?(x=d,y=h===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,x=h==="end"?"top":"bottom");const w=g-f.top-f.bottom,E=m-f.left-f.right,v=q(g-f[x],w),C=q(m-f[y],E),A=!t.middlewareData.shift;let b=v,T=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(T=E),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(b=w),A&&!h){const O=F(f.left,0),N=F(f.right,0),H=F(f.top,0),D=F(f.bottom,0);u?T=m-2*(O!==0||N!==0?O+N:F(f.left,f.right)):b=g-2*(H!==0||D!==0?H+D:F(f.top,f.bottom))}await c({...t,availableWidth:T,availableHeight:b});const M=await s.getDimensions(a.floating);return m!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function we(){return typeof window<"u"}function ie(e){return pt(e)?(e.nodeName||"").toLowerCase():"#document"}function B(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(pt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function pt(e){return we()?e instanceof Node||e instanceof B(e).Node:!1}function $(e){return we()?e instanceof Element||e instanceof B(e).Element:!1}function V(e){return we()?e instanceof HTMLElement||e instanceof B(e).HTMLElement:!1}function ot(e){return!we()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof B(e).ShadowRoot}function le(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=j(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function On(e){return["table","td","th"].includes(ie(e))}function ve(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Be(e){const t=We(),n=$(e)?j(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Sn(e){let t=Z(e);for(;V(t)&&!te(t);){if(Be(t))return t;if(ve(t))return null;t=Z(t)}return null}function We(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function te(e){return["html","body","#document"].includes(ie(e))}function j(e){return B(e).getComputedStyle(e)}function be(e){return $(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Z(e){if(ie(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ot(e)&&e.host||Y(e);return ot(t)?t.host:t}function ht(e){const t=Z(e);return te(t)?e.ownerDocument?e.ownerDocument.body:e.body:V(t)&&le(t)?t:ht(t)}function ae(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=ht(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=B(r);if(i){const a=ke(s);return t.concat(s,s.visualViewport||[],le(r)?r:[],a&&n?ae(a):[])}return t.concat(r,ae(r,[],n))}function ke(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mt(e){const t=j(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=V(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,a=he(n)!==i||he(o)!==s;return a&&(n=i,o=s),{width:n,height:o,$:a}}function $e(e){return $(e)?e:e.contextElement}function ee(e){const t=$e(e);if(!V(t))return z(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=mt(t);let s=(i?he(n.width):n.width)/o,a=(i?he(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Dn=z(0);function gt(e){const t=B(e);return!We()||!t.visualViewport?Dn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ln(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==B(e)?!1:t}function J(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=$e(e);let s=z(1);t&&(o?$(o)&&(s=ee(o)):s=ee(e));const a=Ln(i,n,o)?gt(i):z(0);let c=(r.left+a.x)/s.x,l=(r.top+a.y)/s.y,f=r.width/s.x,d=r.height/s.y;if(i){const h=B(i),u=o&&$(o)?B(o):o;let m=h,g=ke(m);for(;g&&o&&u!==m;){const x=ee(g),y=g.getBoundingClientRect(),w=j(g),E=y.left+(g.clientLeft+parseFloat(w.paddingLeft))*x.x,v=y.top+(g.clientTop+parseFloat(w.paddingTop))*x.y;c*=x.x,l*=x.y,f*=x.x,d*=x.y,c+=E,l+=v,m=B(g),g=ke(m)}}return ge({width:f,height:d,x:c,y:l})}function je(e,t){const n=be(e).scrollLeft;return t?t.left+n:J(Y(e)).left+n}function xt(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:je(e,o)),i=o.top+t.scrollTop;return{x:r,y:i}}function kn(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=Y(o),a=t?ve(t.floating):!1;if(o===s||a&&i)return n;let c={scrollLeft:0,scrollTop:0},l=z(1);const f=z(0),d=V(o);if((d||!d&&!i)&&((ie(o)!=="body"||le(s))&&(c=be(o)),V(o))){const u=J(o);l=ee(o),f.x=u.x+o.clientLeft,f.y=u.y+o.clientTop}const h=s&&!d&&!i?xt(s,c,!0):z(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+f.x+h.x,y:n.y*l.y-c.scrollTop*l.y+f.y+h.y}}function Mn(e){return Array.from(e.getClientRects())}function _n(e){const t=Y(e),n=be(e),o=e.ownerDocument.body,r=F(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=F(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+je(e);const a=-n.scrollTop;return j(o).direction==="rtl"&&(s+=F(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:a}}function Nn(e,t){const n=B(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,a=0,c=0;if(r){i=r.width,s=r.height;const l=We();(!l||l&&t==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:a,y:c}}function Hn(e,t){const n=J(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=V(e)?ee(e):z(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,c=r*i.x,l=o*i.y;return{width:s,height:a,x:c,y:l}}function rt(e,t,n){let o;if(t==="viewport")o=Nn(e,n);else if(t==="document")o=_n(Y(e));else if($(t))o=Hn(t,n);else{const r=gt(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return ge(o)}function yt(e,t){const n=Z(e);return n===t||!$(n)||te(n)?!1:j(n).position==="fixed"||yt(n,t)}function Fn(e,t){const n=t.get(e);if(n)return n;let o=ae(e,[],!1).filter(a=>$(a)&&ie(a)!=="body"),r=null;const i=j(e).position==="fixed";let s=i?Z(e):e;for(;$(s)&&!te(s);){const a=j(s),c=Be(s);!c&&a.position==="fixed"&&(r=null),(i?!c&&!r:!c&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||le(s)&&!c&&yt(e,s))?o=o.filter(f=>f!==s):r=a,s=Z(s)}return t.set(e,o),o}function Bn(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?ve(t)?[]:Fn(t,this._c):[].concat(n),o],a=s[0],c=s.reduce((l,f)=>{const d=rt(t,f,r);return l.top=F(d.top,l.top),l.right=q(d.right,l.right),l.bottom=q(d.bottom,l.bottom),l.left=F(d.left,l.left),l},rt(t,a,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Wn(e){const{width:t,height:n}=mt(e);return{width:t,height:n}}function $n(e,t,n){const o=V(t),r=Y(t),i=n==="fixed",s=J(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const c=z(0);if(o||!o&&!i)if((ie(t)!=="body"||le(r))&&(a=be(t)),o){const h=J(t,!0,i,t);c.x=h.x+t.clientLeft,c.y=h.y+t.clientTop}else r&&(c.x=je(r));const l=r&&!o&&!i?xt(r,a):z(0),f=s.left+a.scrollLeft-c.x-l.x,d=s.top+a.scrollTop-c.y-l.y;return{x:f,y:d,width:s.width,height:s.height}}function Re(e){return j(e).position==="static"}function it(e,t){if(!V(e)||j(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Y(e)===n&&(n=n.ownerDocument.body),n}function wt(e,t){const n=B(e);if(ve(e))return n;if(!V(e)){let r=Z(e);for(;r&&!te(r);){if($(r)&&!Re(r))return r;r=Z(r)}return n}let o=it(e,t);for(;o&&On(o)&&Re(o);)o=it(o,t);return o&&te(o)&&Re(o)&&!Be(o)?n:o||Sn(e)||n}const jn=async function(e){const t=this.getOffsetParent||wt,n=this.getDimensions,o=await n(e.floating);return{reference:$n(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function In(e){return j(e).direction==="rtl"}const zn={convertOffsetParentRelativeRectToViewportRelativeRect:kn,getDocumentElement:Y,getClippingRect:Bn,getOffsetParent:wt,getElementRects:jn,getClientRects:Mn,getDimensions:Wn,getScale:ee,isElement:$,isRTL:In};function vt(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Vn(e,t){let n=null,o;const r=Y(e);function i(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),i();const l=e.getBoundingClientRect(),{left:f,top:d,width:h,height:u}=l;if(a||t(),!h||!u)return;const m=de(d),g=de(r.clientWidth-(f+h)),x=de(r.clientHeight-(d+u)),y=de(f),E={rootMargin:-m+"px "+-g+"px "+-x+"px "+-y+"px",threshold:F(0,q(1,c))||1};let v=!0;function C(A){const b=A[0].intersectionRatio;if(b!==c){if(!v)return s();b?s(!1,b):o=setTimeout(()=>{s(!1,1e-7)},1e3)}b===1&&!vt(l,e.getBoundingClientRect())&&s(),v=!1}try{n=new IntersectionObserver(C,{...E,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,E)}n.observe(e)}return s(!0),i}function Yn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,l=$e(e),f=r||i?[...l?ae(l):[],...ae(t)]:[];f.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const d=l&&a?Vn(l,n):null;let h=-1,u=null;s&&(u=new ResizeObserver(y=>{let[w]=y;w&&w.target===l&&u&&(u.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var E;(E=u)==null||E.observe(t)})),n()}),l&&!c&&u.observe(l),u.observe(t));let m,g=c?J(e):null;c&&x();function x(){const y=J(e);g&&!vt(g,y)&&n(),g=y,m=requestAnimationFrame(x)}return n(),()=>{var y;f.forEach(w=>{r&&w.removeEventListener("scroll",n),i&&w.removeEventListener("resize",n)}),d==null||d(),(y=u)==null||y.disconnect(),u=null,c&&cancelAnimationFrame(m)}}const Un=An,Xn=Pn,Gn=bn,qn=Tn,Kn=Cn,st=vn,Zn=Rn,Jn=(e,t,n)=>{const o=new Map,r={platform:zn,...n},i={...r.platform,_c:o};return wn(e,t,{...r,platform:i})};var pe=typeof document<"u"?p.useLayoutEffect:p.useEffect;function xe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!xe(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!xe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function bt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ct(e,t){const n=bt(e);return Math.round(t*n)/n}function Te(e){const t=p.useRef(e);return pe(()=>{t.current=e}),t}function Qn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:c,open:l}=e,[f,d]=p.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,u]=p.useState(o);xe(h,o)||u(o);const[m,g]=p.useState(null),[x,y]=p.useState(null),w=p.useCallback(P=>{P!==A.current&&(A.current=P,g(P))},[]),E=p.useCallback(P=>{P!==b.current&&(b.current=P,y(P))},[]),v=i||m,C=s||x,A=p.useRef(null),b=p.useRef(null),T=p.useRef(f),M=c!=null,O=Te(c),N=Te(r),H=Te(l),D=p.useCallback(()=>{if(!A.current||!b.current)return;const P={placement:t,strategy:n,middleware:h};N.current&&(P.platform=N.current),Jn(A.current,b.current,P).then(_=>{const I={..._,isPositioned:H.current!==!1};S.current&&!xe(T.current,I)&&(T.current=I,Zt.flushSync(()=>{d(I)}))})},[h,t,n,N,H]);pe(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[l]);const S=p.useRef(!1);pe(()=>(S.current=!0,()=>{S.current=!1}),[]),pe(()=>{if(v&&(A.current=v),C&&(b.current=C),v&&C){if(O.current)return O.current(v,C,D);D()}},[v,C,D,O,M]);const W=p.useMemo(()=>({reference:A,floating:b,setReference:w,setFloating:E}),[w,E]),L=p.useMemo(()=>({reference:v,floating:C}),[v,C]),k=p.useMemo(()=>{const P={position:n,left:0,top:0};if(!L.floating)return P;const _=ct(L.floating,f.x),I=ct(L.floating,f.y);return a?{...P,transform:"translate("+_+"px, "+I+"px)",...bt(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:I}},[n,a,L.floating,f.x,f.y]);return p.useMemo(()=>({...f,update:D,refs:W,elements:L,floatingStyles:k}),[f,D,W,L,k])}const eo=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?st({element:o.current,padding:r}).fn(n):{}:o?st({element:o,padding:r}).fn(n):{}}}},to=(e,t)=>({...Un(e),options:[e,t]}),no=(e,t)=>({...Xn(e),options:[e,t]}),oo=(e,t)=>({...Zn(e),options:[e,t]}),ro=(e,t)=>({...Gn(e),options:[e,t]}),io=(e,t)=>({...qn(e),options:[e,t]}),so=(e,t)=>({...Kn(e),options:[e,t]}),co=(e,t)=>({...eo(e),options:[e,t]});var ao="Arrow",Ct=p.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return R.jsx(Q.svg,{...i,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:R.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ct.displayName=ao;var lo=Ct;function fo(e){const[t,n]=p.useState(void 0);return Oe(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,a;if("borderBoxSize"in i){const c=i.borderBoxSize,l=Array.isArray(c)?c[0]:c;s=l.inlineSize,a=l.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var Ie="Popper",[Et,At]=at(Ie),[uo,Pt]=Et(Ie),Rt=e=>{const{__scopePopper:t,children:n}=e,[o,r]=p.useState(null);return R.jsx(uo,{scope:t,anchor:o,onAnchorChange:r,children:n})};Rt.displayName=Ie;var Tt="PopperAnchor",Ot=p.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=Pt(Tt,n),s=p.useRef(null),a=oe(t,s);return p.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:R.jsx(Q.div,{...r,ref:a})});Ot.displayName=Tt;var ze="PopperContent",[po,ho]=Et(ze),St=p.forwardRef((e,t)=>{var Ye,Ue,Xe,Ge,qe,Ke;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:c=!0,collisionBoundary:l=[],collisionPadding:f=0,sticky:d="partial",hideWhenDetached:h=!1,updatePositionStrategy:u="optimized",onPlaced:m,...g}=e,x=Pt(ze,n),[y,w]=p.useState(null),E=oe(t,se=>w(se)),[v,C]=p.useState(null),A=fo(v),b=(A==null?void 0:A.width)??0,T=(A==null?void 0:A.height)??0,M=o+(i!=="center"?"-"+i:""),O=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},N=Array.isArray(l)?l:[l],H=N.length>0,D={padding:O,boundary:N.filter(go),altBoundary:H},{refs:S,floatingStyles:W,placement:L,isPositioned:k,middlewareData:P}=Qn({strategy:"fixed",placement:M,whileElementsMounted:(...se)=>Yn(...se,{animationFrame:u==="always"}),elements:{reference:x.anchor},middleware:[to({mainAxis:r+T,alignmentAxis:s}),c&&no({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?oo():void 0,...D}),c&&ro({...D}),io({...D,apply:({elements:se,rects:Ze,availableWidth:Ut,availableHeight:Xt})=>{const{width:Gt,height:qt}=Ze.reference,ue=se.floating.style;ue.setProperty("--radix-popper-available-width",`${Ut}px`),ue.setProperty("--radix-popper-available-height",`${Xt}px`),ue.setProperty("--radix-popper-anchor-width",`${Gt}px`),ue.setProperty("--radix-popper-anchor-height",`${qt}px`)}}),v&&co({element:v,padding:a}),xo({arrowWidth:b,arrowHeight:T}),h&&so({strategy:"referenceHidden",...D})]}),[_,I]=kt(L),fe=ye(m);Oe(()=>{k&&(fe==null||fe())},[k,fe]);const jt=(Ye=P.arrow)==null?void 0:Ye.x,It=(Ue=P.arrow)==null?void 0:Ue.y,zt=((Xe=P.arrow)==null?void 0:Xe.centerOffset)!==0,[Vt,Yt]=p.useState();return Oe(()=>{y&&Yt(window.getComputedStyle(y).zIndex)},[y]),R.jsx("div",{ref:S.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:k?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Vt,"--radix-popper-transform-origin":[(Ge=P.transformOrigin)==null?void 0:Ge.x,(qe=P.transformOrigin)==null?void 0:qe.y].join(" "),...((Ke=P.hide)==null?void 0:Ke.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:R.jsx(po,{scope:n,placedSide:_,onArrowChange:C,arrowX:jt,arrowY:It,shouldHideArrow:zt,children:R.jsx(Q.div,{"data-side":_,"data-align":I,...g,ref:E,style:{...g.style,animation:k?void 0:"none"}})})})});St.displayName=ze;var Dt="PopperArrow",mo={top:"bottom",right:"left",bottom:"top",left:"right"},Lt=p.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=ho(Dt,o),s=mo[i.placedSide];return R.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:R.jsx(lo,{...r,ref:n,style:{...r.style,display:"block"}})})});Lt.displayName=Dt;function go(e){return e!==null}var xo=e=>({name:"transformOrigin",options:e,fn(t){var x,y,w;const{placement:n,rects:o,middlewareData:r}=t,s=((x=r.arrow)==null?void 0:x.centerOffset)!==0,a=s?0:e.arrowWidth,c=s?0:e.arrowHeight,[l,f]=kt(n),d={start:"0%",center:"50%",end:"100%"}[f],h=(((y=r.arrow)==null?void 0:y.x)??0)+a/2,u=(((w=r.arrow)==null?void 0:w.y)??0)+c/2;let m="",g="";return l==="bottom"?(m=s?d:`${h}px`,g=`${-c}px`):l==="top"?(m=s?d:`${h}px`,g=`${o.floating.height+c}px`):l==="right"?(m=`${-c}px`,g=s?d:`${u}px`):l==="left"&&(m=`${o.floating.width+c}px`,g=s?d:`${u}px`),{data:{x:m,y:g}}}});function kt(e){const[t,n="center"]=e.split("-");return[t,n]}var yo=Rt,wo=Ot,vo=St,bo=Lt,Co="VisuallyHidden",Mt=p.forwardRef((e,t)=>R.jsx(Q.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Mt.displayName=Co;var Eo=Mt,[Ce,Io]=at("Tooltip",[At]),Ee=At(),_t="TooltipProvider",Ao=700,Me="tooltip.open",[Po,Ve]=Ce(_t),Nt=e=>{const{__scopeTooltip:t,delayDuration:n=Ao,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=e,s=p.useRef(!0),a=p.useRef(!1),c=p.useRef(0);return p.useEffect(()=>{const l=c.current;return()=>window.clearTimeout(l)},[]),R.jsx(Po,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:p.useCallback(()=>{window.clearTimeout(c.current),s.current=!1},[]),onClose:p.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s.current=!0,o)},[o]),isPointerInTransitRef:a,onPointerInTransitChange:p.useCallback(l=>{a.current=l},[]),disableHoverableContent:r,children:i})};Nt.displayName=_t;var Ae="Tooltip",[Ro,Pe]=Ce(Ae),Ht=e=>{const{__scopeTooltip:t,children:n,open:o,defaultOpen:r=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:a}=e,c=Ve(Ae,e.__scopeTooltip),l=Ee(t),[f,d]=p.useState(null),h=en(),u=p.useRef(0),m=s??c.disableHoverableContent,g=a??c.delayDuration,x=p.useRef(!1),[y=!1,w]=tn({prop:o,defaultProp:r,onChange:b=>{b?(c.onOpen(),document.dispatchEvent(new CustomEvent(Me))):c.onClose(),i==null||i(b)}}),E=p.useMemo(()=>y?x.current?"delayed-open":"instant-open":"closed",[y]),v=p.useCallback(()=>{window.clearTimeout(u.current),u.current=0,x.current=!1,w(!0)},[w]),C=p.useCallback(()=>{window.clearTimeout(u.current),u.current=0,w(!1)},[w]),A=p.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>{x.current=!0,w(!0),u.current=0},g)},[g,w]);return p.useEffect(()=>()=>{u.current&&(window.clearTimeout(u.current),u.current=0)},[]),R.jsx(yo,{...l,children:R.jsx(Ro,{scope:t,contentId:h,open:y,stateAttribute:E,trigger:f,onTriggerChange:d,onTriggerEnter:p.useCallback(()=>{c.isOpenDelayedRef.current?A():v()},[c.isOpenDelayedRef,A,v]),onTriggerLeave:p.useCallback(()=>{m?C():(window.clearTimeout(u.current),u.current=0)},[C,m]),onOpen:v,onClose:C,disableHoverableContent:m,children:n})})};Ht.displayName=Ae;var _e="TooltipTrigger",Ft=p.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=Pe(_e,n),i=Ve(_e,n),s=Ee(n),a=p.useRef(null),c=oe(t,a,r.onTriggerChange),l=p.useRef(!1),f=p.useRef(!1),d=p.useCallback(()=>l.current=!1,[]);return p.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),R.jsx(wo,{asChild:!0,...s,children:R.jsx(Q.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:c,onPointerMove:U(e.onPointerMove,h=>{h.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),f.current=!0)}),onPointerLeave:U(e.onPointerLeave,()=>{r.onTriggerLeave(),f.current=!1}),onPointerDown:U(e.onPointerDown,()=>{r.open&&r.onClose(),l.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:U(e.onFocus,()=>{l.current||r.onOpen()}),onBlur:U(e.onBlur,r.onClose),onClick:U(e.onClick,r.onClose)})})});Ft.displayName=_e;var To="TooltipPortal",[zo,Oo]=Ce(To,{forceMount:void 0}),ne="TooltipContent",Bt=p.forwardRef((e,t)=>{const n=Oo(ne,e.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=e,s=Pe(ne,e.__scopeTooltip);return R.jsx(Jt,{present:o||s.open,children:s.disableHoverableContent?R.jsx(Wt,{side:r,...i,ref:t}):R.jsx(So,{side:r,...i,ref:t})})}),So=p.forwardRef((e,t)=>{const n=Pe(ne,e.__scopeTooltip),o=Ve(ne,e.__scopeTooltip),r=p.useRef(null),i=oe(t,r),[s,a]=p.useState(null),{trigger:c,onClose:l}=n,f=r.current,{onPointerInTransitChange:d}=o,h=p.useCallback(()=>{a(null),d(!1)},[d]),u=p.useCallback((m,g)=>{const x=m.currentTarget,y={x:m.clientX,y:m.clientY},w=_o(y,x.getBoundingClientRect()),E=No(y,w),v=Ho(g.getBoundingClientRect()),C=Bo([...E,...v]);a(C),d(!0)},[d]);return p.useEffect(()=>()=>h(),[h]),p.useEffect(()=>{if(c&&f){const m=x=>u(x,f),g=x=>u(x,c);return c.addEventListener("pointerleave",m),f.addEventListener("pointerleave",g),()=>{c.removeEventListener("pointerleave",m),f.removeEventListener("pointerleave",g)}}},[c,f,u,h]),p.useEffect(()=>{if(s){const m=g=>{const x=g.target,y={x:g.clientX,y:g.clientY},w=(c==null?void 0:c.contains(x))||(f==null?void 0:f.contains(x)),E=!Fo(y,s);w?h():E&&(h(),l())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[c,f,s,l,h]),R.jsx(Wt,{...e,ref:i})}),[Do,Lo]=Ce(Ae,{isInside:!1}),ko=Qt("TooltipContent"),Wt=p.forwardRef((e,t)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...a}=e,c=Pe(ne,n),l=Ee(n),{onClose:f}=c;return p.useEffect(()=>(document.addEventListener(Me,f),()=>document.removeEventListener(Me,f)),[f]),p.useEffect(()=>{if(c.trigger){const d=h=>{const u=h.target;u!=null&&u.contains(c.trigger)&&f()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[c.trigger,f]),R.jsx(ft,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:f,children:R.jsxs(vo,{"data-state":c.stateAttribute,...l,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[R.jsx(ko,{children:o}),R.jsx(Do,{scope:n,isInside:!0,children:R.jsx(Eo,{id:c.contentId,role:"tooltip",children:r||o})})]})})});Bt.displayName=ne;var $t="TooltipArrow",Mo=p.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=Ee(n);return Lo($t,n).isInside?null:R.jsx(bo,{...r,...o,ref:t})});Mo.displayName=$t;function _o(e,t){const n=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function No(e,t,n=5){const o=[];switch(t){case"top":o.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":o.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":o.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":o.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return o}function Ho(e){const{top:t,right:n,bottom:o,left:r}=e;return[{x:r,y:t},{x:n,y:t},{x:n,y:o},{x:r,y:o}]}function Fo(e,t){const{x:n,y:o}=e;let r=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const a=t[i].x,c=t[i].y,l=t[s].x,f=t[s].y;c>o!=f>o&&n<(l-a)*(o-c)/(f-c)+a&&(r=!r)}return r}function Bo(e){const t=e.slice();return t.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Wo(t)}function Wo(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const r=e[o];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}t.pop();const n=[];for(let o=e.length-1;o>=0;o--){const r=e[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Vo=Nt,Yo=Ht,Uo=Ft,Xo=Bt;export{Xo as C,Vo as P,Yo as R,Uo as T};
