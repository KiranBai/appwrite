import"./530.BHcsWRLo.js";import{a as l}from"./animate.es.epCd8imq.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d02ff08f-aa32-49b2-9b7f-1ebea8872b83",n._sentryDebugIdIdentifier="sentry-dbid-d02ff08f-aa32-49b2-9b7f-1ebea8872b83")}catch{}})();function b(n,e,t){return{play:()=>l(n,e,t),reverse:()=>{const r=Object.fromEntries(Object.entries(e).map(([c,o])=>[c,Array.isArray(o)?[...o].reverse():o]));return l(n,r,t)}}}const g=(n,e,t)=>{try{return l(n,e,t)}catch{}};function w(n){const e=n.map(()=>({executedCount:0})),t=function(s){n.forEach((i,r)=>{const{percentage:a,whenAfter:c}=i,{previous:o,unsubscribe:d,executedCount:u}=e[r];s>=a&&o!=="after"?(e[r].unsubscribe=(c==null?void 0:c({previous:o,executedCount:u}))??void 0,e[r].previous="after",c&&e[r].executedCount++):s<a&&o==="after"&&(d==null||d(),e[r].unsubscribe=void 0,e[r].previous="before")})};return t.reset=()=>{e.forEach(s=>{s.unsubscribe=void 0,s.previous=void 0,s.executedCount=0})},t}const y=n=>{function e(){const{top:r,height:a}=n.getBoundingClientRect(),{innerHeight:c}=window,o=a-c,d=-1*r/o,u=d*o,f=o-u;return{percentage:d,traversed:u,remaning:f}}const t=r=>()=>{n.dispatchEvent(new CustomEvent(r,{detail:e()}))},s=t("web-scroll"),i=t("web-resize");return s(),i(),window.addEventListener("scroll",s),window.addEventListener("resize",i),{destroy(){window.removeEventListener("scroll",s),window.removeEventListener("resize",i)}}};function m(n,e,t=500){const s=t/n.length;let i=0;return new Promise(r=>{const a=setInterval(()=>{e(n.slice(0,++i)),i===n.length&&(clearInterval(a),r(void 0))},s)})}function h(n){return new Promise(e=>{setTimeout(e,n)})}function E(n){return n.split(" ").map(e=>{var t;return((t=e==null?void 0:e[0])==null?void 0:t.toUpperCase())??""}).join("").slice(0,2)}export{h as a,b,w as c,g as d,E as g,y as s,m as w};
//# sourceMappingURL=index.Wz89smI_.js.map
