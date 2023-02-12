import{b as x,n as B,u as S,d as H,aj as D,k as o,L as E,A as N,f as F,t as T,v as U,g as p,s as Y,w as P,D as O,Y as _,H as q}from"./index-5c77cc65.js";import{L as G}from"./index-53e0e9c6.js";import{T as J,a as M}from"./index-ceb5fe59.js";const[Q,y]=x("switch"),R={size:B,loading:Boolean,disabled:Boolean,modelValue:S,activeColor:String,inactiveColor:String,activeValue:{type:S,default:!0},inactiveValue:{type:S,default:!1}};var W=H({name:Q,props:R,emits:["change","update:modelValue"],setup(l,{emit:i}){const u=()=>l.modelValue===l.activeValue,s=()=>{if(!l.disabled&&!l.loading){const r=u()?l.inactiveValue:l.activeValue;i("update:modelValue",r),i("change",r)}},h=()=>{if(l.loading){const r=u()?l.activeColor:l.inactiveColor;return o(G,{class:y("loading"),color:r},null)}};return D(()=>l.modelValue),()=>{const{size:r,loading:d,disabled:v,activeColor:k,inactiveColor:b}=l,C=u(),w={fontSize:E(r),backgroundColor:C?k:b};return o("div",{role:"switch",class:y({on:C,loading:d,disabled:v}),style:w,tabindex:v?void 0:0,"aria-checked":C,onClick:s},[o("div",{class:y("node")},[h()])])}}});const ne=N(W),[X,m,Z]=x("cascader"),I={title:String,options:F(),closeable:T,swipeable:T,closeIcon:U("cross"),showHeader:T,modelValue:B,fieldNames:Object,placeholder:String,activeColor:String};var ee=H({name:X,props:I,emits:["close","change","finish","click-tab","update:modelValue"],setup(l,{slots:i,emit:u}){const s=p([]),h=p(0),{text:r,value:d,children:v}=Y({text:"text",value:"value",children:"children"},l.fieldNames),k=(e,t)=>{for(const n of e){if(n[d]===t)return[n];if(n[v]){const a=k(n[v],t);if(a)return[n,...a]}}},b=()=>{const{options:e,modelValue:t}=l;if(t!==void 0){const n=k(e,t);if(n){let a=e;s.value=n.map(c=>{const g={options:a,selected:c},f=a.find(V=>V[d]===c[d]);return f&&(a=f[v]),g}),a&&s.value.push({options:a,selected:null}),O(()=>{h.value=s.value.length-1});return}}s.value=[{options:e,selected:null}]},C=(e,t)=>{if(e.disabled)return;if(s.value[t].selected=e,s.value.length>t+1&&(s.value=s.value.slice(0,t+1)),e[v]){const c={options:e[v],selected:null};s.value[t+1]?s.value[t+1]=c:s.value.push(c),O(()=>{h.value++})}const n=s.value.map(c=>c.selected).filter(Boolean);u("update:modelValue",e[d]);const a={value:e[d],tabIndex:t,selectedOptions:n};u("change",a),e[v]||u("finish",a)},w=()=>u("close"),A=({name:e,title:t})=>u("click-tab",e,t),K=()=>l.showHeader?o("div",{class:m("header")},[o("h2",{class:m("title")},[i.title?i.title():l.title]),l.closeable?o(_,{name:l.closeIcon,class:[m("close-icon"),q],onClick:w},null):null]):null,L=(e,t,n)=>{const{disabled:a}=e,c=!!(t&&e[d]===t[d]),g=e.color||(c?l.activeColor:void 0),f=i.option?i.option({option:e,selected:c}):o("span",null,[e[r]]);return o("li",{role:"menuitemradio",class:[m("option",{selected:c,disabled:a}),e.className],style:{color:g},tabindex:a?void 0:c?0:-1,"aria-checked":c,"aria-disabled":a||void 0,onClick:()=>C(e,n)},[f,c?o(_,{name:"success",class:m("selected-icon")},null):null])},z=(e,t,n)=>o("ul",{role:"menu",class:m("options")},[e.map(a=>L(a,t,n))]),$=(e,t)=>{const{options:n,selected:a}=e,c=l.placeholder||Z("select"),g=a?a[r]:c;return o(M,{title:g,titleClass:m("tab",{unselected:!a})},{default:()=>{var f,V;return[(f=i["options-top"])==null?void 0:f.call(i,{tabIndex:t}),z(n,a,t),(V=i["options-bottom"])==null?void 0:V.call(i,{tabIndex:t})]}})},j=()=>o(J,{active:h.value,"onUpdate:active":e=>h.value=e,shrink:!0,animated:!0,class:m("tabs"),color:l.activeColor,swipeable:l.swipeable,"onClick-tab":A},{default:()=>[s.value.map($)]});return b(),P(()=>l.options,b,{deep:!0}),P(()=>l.modelValue,e=>{e!==void 0&&s.value.map(n=>{var a;return(a=n.selected)==null?void 0:a[d]}).includes(e)||b()}),()=>o("div",{class:m()},[K(),j()])}});const se=N(ee);export{se as C,ne as S};
