import{b as f,n as h,f as C,d as p,x as P,w as b,aj as k,k as V,s as G,t as _,j as y,y as E,E as O,F as S,A as $}from"./index-5c77cc65.js";import{u as g}from"./use-expose-287cc7e0.js";import{c as A,s as j}from"./index-0dde73ad.js";const[x,w]=f("checkbox-group"),B={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:C(),checkedColor:String},v=Symbol(x);var R=p({name:x,props:B,emits:["change","update:modelValue"],setup(a,{emit:d,slots:s}){const{children:l,linkChildren:i}=P(v),o=e=>d("update:modelValue",e),u=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:t,skipDisabled:r}=e,c=l.filter(n=>n.props.bindGroup?n.props.disabled&&r?n.checked.value:t??!n.checked.value:!1).map(n=>n.name);o(c)};return b(()=>a.modelValue,e=>d("change",e)),g({toggleAll:u}),k(()=>a.modelValue),i({props:a,updateValue:o}),()=>{var e;return V("div",{class:w([a.direction])},[(e=s.default)==null?void 0:e.call(s)])}}});const[F,K]=f("checkbox"),N=G({},A,{bindGroup:_});var z=p({name:F,props:N,emits:["change","update:modelValue"],setup(a,{emit:d,slots:s}){const{parent:l}=y(v),i=e=>{const{name:t}=a,{max:r,modelValue:m}=l.props,c=m.slice();if(e)!(r&&c.length>=r)&&!c.includes(t)&&(c.push(t),a.bindGroup&&l.updateValue(c));else{const n=c.indexOf(t);n!==-1&&(c.splice(n,1),a.bindGroup&&l.updateValue(c))}},o=E(()=>l&&a.bindGroup?l.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),u=(e=!o.value)=>{l&&a.bindGroup?i(e):d("update:modelValue",e)};return b(()=>a.modelValue,e=>d("change",e)),g({toggle:u,props:a,checked:o}),k(()=>a.modelValue),()=>V(j,S({bem:K,role:"checkbox",parent:l,checked:o.value,onToggle:u},a),O(s,["default","icon"]))}});const T=$(z);export{T as C,R as s};
