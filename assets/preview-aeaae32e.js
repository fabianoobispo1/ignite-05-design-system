import{_ as S,s as N}from"./iframe-a700f979.js";import"../sb-preview/runtime.js";var r="storybook/a11y",T=`${r}/result`,w=`${r}/request`,y=`${r}/running`,U=`${r}/error`,d=`${r}/manual`,a={RESULT:T,REQUEST:w,RUNNING:y,ERROR:U,MANUAL:d};const{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:p,window:g}=N,n=f.getChannel(),o=!1,l,A=async e=>{let{manual:t}=await u(e);t||await _(e)},_=async e=>{l=e;try{let t=await u(e);if(!o){o=!0,n.emit(a.RUNNING);let i=(await S(()=>import("./axe-5bd80707.js").then(O=>O.a),["assets/axe-5bd80707.js","assets/_commonjsHelpers-725317a4.js"])).default,{element:E="#storybook-root",config:R,options:c={}}=t,s=p.querySelector(E);if(!s)return;i.reset(),R&&i.configure(R);let m=await i.run(s,c);l===e?n.emit(a.RESULT,m):(o=!1,_(l))}}catch(t){n.emit(a.ERROR,t)}finally{o=!1}},u=async e=>{let{parameters:t}=await g.__STORYBOOK_STORY_STORE__.loadStory({storyId:e})||{};return t.a11y||{config:{},options:{}}};n.on(a.REQUEST,A);n.on(a.MANUAL,_);
//# sourceMappingURL=preview-aeaae32e.js.map
