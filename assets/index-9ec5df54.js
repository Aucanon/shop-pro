import{g as V}from"./index-4b32bb87.js";import{l as k,a as C,g as S,b as v}from"./user-e4dc0206.js";import{h as B,y as i,o as d,c as u,aY as n,aI as s,aZ as c,k as l,S as m,a_ as _,_ as T}from"./index-5c77cc65.js";import{u as U,a as D,b as P}from"./index-498bb32d.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{a as F,F as p}from"./index-0aa34a5f.js";import{T as r}from"./function-call-6e103baf.js";import{B as f}from"./index-2507f749.js";import{a as M}from"./index-bae722f2.js";import"./use-expose-287cc7e0.js";import"./use-id-ae6cda1c.js";import"./index-8b00a7b6.js";import"./use-touch-38e3a584.js";import"./on-popup-reopen-e5c081b4.js";import"./interceptor-b6b597e5.js";import"./index-53e0e9c6.js";import"./use-route-7932d44a.js";const L=["src"],N={style:{margin:"16px"}},I=["textContent"],R={__name:"index",setup(z){const g=U(),w=D(),y=P(),e=B({loginMode:"password",username:"17201234567",password:"qwer1234",captcha:"",isPassword:i(()=>e.loginMode==="password"),changeText:i(()=>e.isPassword?"快速登录":"密码登录"),isSend:!1,countDown:null,currentText:i(()=>e.isSend?e.countDown.seconds:"发送验证码"),logoUrl:""});(async()=>{const{data:o}=await V();e.logoUrl=o.data.logo_url})();const h=async()=>{const o=e.username.trim();if(o==="")return r("请检查用户名");let t="";if(e.isPassword){const a=e.password.trim();if(a==="")return r("请检查密码");({data:t}=await k({account:o,password:a}))}else{const a=e.captcha.trim();if(a==="")return r("请检查验证码");({data:t}=await C({phone:o,captcha:a}))}if(t.status!==200)return r("用户名或密码错误");g.commit("user/setUser",t.data.token),w.push(y.query.redirect??"/user")},x=()=>{e.loginMode=e.isPassword?"captcha":"password",e.password="",e.captcha=""},b=async()=>{if(!/^1\d{10}$/.test(e.username))return r("请检查用户名");const{data:o}=await S();if(o.status!==200)return;const{data:t}=await v({type:"login",phone:e.username,key:o.data.key});t.status!==200&&r("网络开小差了，请稍后再试");const a=T({time:60*1e3,onFinish(){e.isSend=!1}});a.start(),e.countDown=a.current,e.isSend=!0};return(o,t)=>(d(),u(s(F),{onSubmit:h},{default:n(()=>[c("img",{class:"logo",src:e.logoUrl},null,8,L),l(s(M),{inset:""},{default:n(()=>[l(s(p),{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=a=>e.username=a),clearable:"",name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),e.isPassword?(d(),u(s(p),{key:0,modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=a=>e.password=a),clearable:"",type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])):(d(),u(s(p),{key:1,modelValue:e.captcha,"onUpdate:modelValue":t[2]||(t[2]=a=>e.captcha=a),center:"",clearable:"",name:"短信验证码",label:"验证码",placeholder:"短信验证码"},{button:n(()=>[l(s(f),{size:"small",type:"primary",onClick:b,disabled:e.isSend},{default:n(()=>[m(_(e.currentText),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"]))]),_:1}),c("div",N,[l(s(f),{round:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[m(" 登录 ")]),_:1}),c("span",{class:"changeBtn",onClick:x,textContent:_(e.changeText)},null,8,I)])]),_:1}))}},se=q(R,[["__scopeId","data-v-91d91458"]]);export{se as default};
