import{c as w,a as N}from"./index-498bb32d.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{N as h}from"./index-f0590db4.js";import{P as B}from"./index-8b00a7b6.js";import{C as F,S as q}from"./index-1081212d.js";import{g as s,o as E,a$ as I,k as o,aI as l,aY as r,G as L,aZ as $,S as D}from"./index-5c77cc65.js";import{a as G,F as u}from"./index-0aa34a5f.js";import{a as C}from"./index-bae722f2.js";import{B as P}from"./index-2507f749.js";import"./use-placeholder-b9738b46.js";import"./use-expose-287cc7e0.js";import"./use-touch-38e3a584.js";import"./on-popup-reopen-e5c081b4.js";import"./interceptor-b6b597e5.js";import"./index-53e0e9c6.js";import"./index-ceb5fe59.js";import"./use-id-ae6cda1c.js";import"./use-route-7932d44a.js";import"./index-a5da3e41.js";import"./use-refs-988793b1.js";const T=()=>w({method:"GET",url:"/city_list"}),A=i=>w({method:"POST",url:"/address/edit",data:i});const j={style:{margin:"16px"}},z={__name:"index",props:{cartId:String},setup(i){const{cartId:V}=i,d=N(),m=s(""),p=s(""),y=s(""),f=s(""),v=s(!1),n=s(!1),c=s(""),g=s([]),_={text:"n",value:"v",children:"c"};let b={};const k=({selectedOptions:a})=>{n.value=!1,c.value=a.map(e=>e.n).join("/"),b={province:a[0].n,city:a[1].n,city_id:a[1].v,district:a[2].n}};(async()=>{const{data:a}=await T();a.status===200&&(g.value=x(a.data))})();const x=a=>(a.forEach(e=>{e.c.length===0?delete e.c:x(e.c)}),a),S=async()=>{const{data:a}=await A({id:0,real_name:m.value,phone:p.value,isDefault:v.value,detail:f.value,address:b});a.status===200&&(V?d.push({name:"order-confirm",params:{cartId:V}}):d.push("/user"))};return(a,e)=>(E(),I(L,null,[o(l(h),{onClickLeft:e[0]||(e[0]=t=>l(d).go(-1)),title:"新增收货地址","left-text":"返回","left-arrow":""}),o(l(G),{onSubmit:a.onSubmit},{default:r(()=>[o(l(C),{inset:""},{default:r(()=>[o(l(u),{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=t=>m.value=t),name:"姓名",label:"姓名",placeholder:"姓名",rules:[{required:!0,message:"请填写姓名"}]},null,8,["modelValue"]),o(l(u),{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),name:"电话",label:"电话",placeholder:"收货人手机号",rules:[{required:!0,message:"请填写电话号"}]},null,8,["modelValue"]),o(l(u),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=t=>c.value=t),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:e[4]||(e[4]=t=>n.value=!0)},null,8,["modelValue"]),o(l(B),{show:n.value,"onUpdate:show":e[7]||(e[7]=t=>n.value=t),round:"",position:"bottom"},{default:r(()=>[o(l(F),{modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=t=>y.value=t),title:"请选择所在地区","field-names":_,options:g.value,onClose:e[6]||(e[6]=t=>n.value=!1),onFinish:k},null,8,["modelValue","options"])]),_:1},8,["show"]),o(l(u),{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=t=>f.value=t),name:"详细地址",label:"详细地址",placeholder:"详细地址",rules:[{required:!0,message:"请填写详细地址"}]},null,8,["modelValue"])]),_:1}),o(l(C),{inset:""},{default:r(()=>[o(l(u),{name:"switch",label:"设为默认地址","input-align":"right"},{input:r(()=>[o(l(q),{modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=t=>v.value=t),size:"20"},null,8,["modelValue"])]),_:1})]),_:1}),$("div",j,[o(l(P),{round:"",block:"",type:"primary","native-type":"submit",onClick:S},{default:r(()=>[D(" 提交 ")]),_:1})])]),_:1},8,["onSubmit"])],64))}},de=U(z,[["__scopeId","data-v-867238c4"]]);export{de as default};
