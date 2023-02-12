import{u as h,v as S,n as B,d as x,s as p,m as y,t as C,g as I,y as k,k as t,Y as P,L as T,b as A,q as L,A as z}from"./index-5c77cc65.js";import{B as _}from"./index-2507f749.js";const N={name:h,shape:S("round"),disabled:Boolean,iconSize:B,modelValue:h,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var V=x({props:p({},N,{bem:y(Function),role:String,parent:Object,checked:Boolean,bindGroup:C}),emits:["click","toggle"],setup(e,{emit:m,slots:a}){const f=I(),u=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},c=k(()=>u("disabled")||e.disabled),v=k(()=>u("direction")),i=k(()=>{const n=e.checkedColor||u("checkedColor");if(n&&e.checked&&!c.value)return{borderColor:n,backgroundColor:n}}),l=n=>{const{target:d}=n,r=f.value,b=r===d||(r==null?void 0:r.contains(d));!c.value&&(b||!e.labelDisabled)&&m("toggle"),m("click",n)},s=()=>{const{bem:n,shape:d,checked:r}=e,b=e.iconSize||u("iconSize");return t("div",{ref:f,class:n("icon",[d,{disabled:c.value,checked:r}]),style:{fontSize:T(b)}},[a.icon?a.icon({checked:r,disabled:c.value}):t(P,{name:"success",style:i.value},null)])},g=()=>{if(a.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:c.value}])},[a.default()])};return()=>{const n=e.labelPosition==="left"?[g(),s()]:[s(),g()];return t("div",{role:e.role,class:e.bem([{disabled:c.value,"label-disabled":e.labelDisabled},v.value]),tabindex:c.value?void 0:0,"aria-checked":e.checked,onClick:l},[n])}}});const[D,o,q]=A("submit-bar"),w={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:S("¥"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:S("danger"),buttonColor:String,suffixLabel:String,decimalLength:L(2),safeAreaInsetBottom:C};var F=x({name:D,props:w,emits:["submit"],setup(e,{emit:m,slots:a}){const f=()=>{const{price:i,label:l,currency:s,textAlign:g,suffixLabel:n,decimalLength:d}=e;if(typeof i=="number"){const r=(i/100).toFixed(+d).split("."),b=d?`.${r[1]}`:"";return t("div",{class:o("text"),style:{textAlign:g}},[t("span",null,[l||q("label")]),t("span",{class:o("price")},[s,t("span",{class:o("price-integer")},[r[0]]),b]),n&&t("span",{class:o("suffix-label")},[n])])}},u=()=>{var i;const{tip:l,tipIcon:s}=e;if(a.tip||l)return t("div",{class:o("tip")},[s&&t(P,{class:o("tip-icon"),name:s},null),l&&t("span",{class:o("tip-text")},[l]),(i=a.tip)==null?void 0:i.call(a)])},c=()=>m("submit"),v=()=>a.button?a.button():t(_,{round:!0,type:e.buttonType,text:e.buttonText,class:o("button",e.buttonType),color:e.buttonColor,loading:e.loading,disabled:e.disabled,onClick:c},null);return()=>{var i,l;return t("div",{class:[o(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(i=a.top)==null?void 0:i.call(a),u(),t("div",{class:o("bar")},[(l=a.default)==null?void 0:l.call(a),f(),v()])])}}});const $=z(F);export{$ as S,N as c,V as s};
