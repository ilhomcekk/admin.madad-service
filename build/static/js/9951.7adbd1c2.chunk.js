(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9951],{1443:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(65043),r=a(9266),o=a.n(r),c=(a(23475),a(70579));const l=e=>{let{onChangeValue:t,name:a,defaultValue:r}=e;const[l,n]=(0,s.useState)({value:r||"",name:a});return(0,s.useEffect)((()=>{if(r){let e={...l,value:r};n(e)}}),[r]),(0,c.jsx)("div",{children:(0,c.jsx)(o(),{lang:"ru",setContents:l.value,onChange:e=>{let a={...l,value:e};n(a),t(a)},name:a,setDefaultStyle:"font-family: arial; font-size: 16px;",setOptions:{buttonList:[["undo","redo"],["font","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor"],["align","list","lineHeight"],["outdent","indent"],["table","horizontalRule","link"],["preview","print"],["removeFormat"]],defaultTag:"div",minHeight:"300px",showPathLabel:!1}})})}},98022:(e,t,a)=>{"use strict";a.d(t,{Ie:()=>c,Xu:()=>o,p7:()=>n,q2:()=>l});var s=a(42145),r=a(83613);const o=e=>t=>{t({type:"post_create_category_start",payload:e}),r.A.postCreateCategory(e).then((e=>{let{data:a}=e;t({type:"post_create_category_success",payload:a}),s.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_create_category_error",payload:a})}))},c=(e,t)=>a=>{a({type:"post_edit_category_start",payload:e,params:t}),r.A.postUpdateCategory(e,t).then((e=>{let{data:t}=e;a({type:"post_edit_category_success",payload:t}),s.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_edit_category_error",payload:t})}))},l=e=>t=>{t({type:"post_delete_category_start",payload:e}),r.A.postDeleteCategory(e).then((e=>{let{data:a}=e;t({type:"post_delete_category_success",payload:a}),s.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_delete_category_error",payload:a})}))},n=e=>t=>{t({type:"fetch_category_start",payload:e}),r.A.getCategory(e).then((e=>{let{data:a}=e;t({type:"fetch_category_success",payload:a})})).catch((e=>{let{response:a}=e;t({type:"fetch_category_error",payload:a})}))}},85639:(e,t,a)=>{"use strict";a.d(t,{Af:()=>o,HV:()=>c,Sw:()=>i,V$:()=>l,VQ:()=>n});var s=a(42145),r=a(83613);const o=e=>t=>{t({type:"post_create_offers_start",payload:e}),r.A.postCreateOffers(e).then((e=>{let{data:a}=e;t({type:"post_create_offers_success",payload:a}),s.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_create_offers_error",payload:a})}))},c=(e,t)=>a=>{a({type:"post_edit_offers_start",payload:e,params:t}),r.A.postUpdateOffers(e,t).then((e=>{let{data:t}=e;a({type:"post_edit_offers_success",payload:t}),s.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_edit_offers_error",payload:t})}))},l=e=>t=>{t({type:"post_delete_offers_start",payload:e}),r.A.postDeleteOffers(e).then((e=>{let{data:a}=e;t({type:"post_delete_offers_success",payload:a}),s.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_delete_offers_error",payload:a})}))},n=e=>t=>{t({type:"fetch_detail_offers_start",payload:e}),r.A.getDetailOffers(e).then((e=>{let{data:a}=e;t({type:"fetch_detail_offers_success",payload:a})})).catch((e=>{let{response:a}=e;t({type:"fetch_detail_offers_error",payload:a})}))},i=e=>t=>{t({type:"fetch_offers_start",payload:e}),r.A.getOffers(e).then((e=>{let{data:a}=e;t({type:"fetch_offers_success",payload:a})})).catch((e=>{let{response:a}=e;t({type:"fetch_offers_error",payload:a})}))}},39454:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var s=a(56063),r=a(64731),o=a(6145),c=a(93946),l=a(65043),n=a(79456),i=a(73216),d=a(1443),p=a(98022),_=a(85639),h=a(70579);const u=()=>{const e=(0,n.wA)(),t=(0,i.Zp)(),a=(new Date).toLocaleString("ru-RU",{timeZone:"Asia/Tashkent"}),[u,f]=(0,l.useState)({name_ru:"",name_uz:"",name_en:"",description_ru:"",description_uz:"",description_en:"",photo:"",date:a}),m=e=>{const{name:t,value:a}=e.target;f((e=>({...e,[t]:a})))},y=e=>{const{name:t,value:a}=e;f((e=>({...e,[t]:a})))};(0,l.useEffect)((()=>{e((0,p.p7)())}),[]);const j=(0,n.d4)((e=>e.category.category)),{step:g}=(0,n.d4)((e=>e.offers));return(0,l.useEffect)((()=>{!0===g&&t("/offers")}),[g]),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),(0,h.jsx)("div",{className:"card-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-xl-3 col-md-6",children:[(0,h.jsx)("h6",{children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u0444\u043e\u0442\u043e"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("div",{className:"card-body",children:(0,h.jsxs)("div",{className:"drop-image",children:[!u.photo&&(0,h.jsxs)(h.Fragment,{children:["+ ",(0,h.jsx)("br",{}),(0,h.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]}),(0,h.jsx)("input",{type:"file",id:"drop-photo-input",accept:"image/png, image/gif, image/jpeg",multiple:!1,onChange:e=>((e,t)=>{let a={...u,photo:e.target.files[0]};if(f(a),window.FileReader){const a=e.target.files[0],s=new FileReader;a&&a.type.match("image.*")&&s.readAsDataURL(a),s.onload=function(e){t.src=e.target.result}}})(e,document.querySelector("#newsCreateImage"))}),(0,h.jsx)("label",{htmlFor:"drop-photo-input",children:(0,h.jsx)("img",{className:"card-img-top",src:u.photo,alt:"",id:"newsCreateImage"})})]})})}),u.photo&&(0,h.jsxs)(c.Q_,{className:"btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1 mt-2",onClick:()=>{let e={...u,photo:""};f(e)},children:[(0,h.jsx)(o.A,{icon:s.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]}),(0,h.jsxs)("div",{className:"col-xl-9",children:[(0,h.jsx)("h6",{className:"",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (RU)"}),(0,h.jsx)("input",{value:u.name_ru,name:"name_ru",onChange:m,className:"form-control"}),(0,h.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (UZ)"}),(0,h.jsx)("input",{value:u.name_uz,name:"name_uz",onChange:m,className:"form-control"}),(0,h.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (EN)"}),(0,h.jsx)("input",{value:u.name_en,name:"name_en",onChange:m,className:"form-control"}),(0,h.jsx)("h6",{className:"mt-4",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),(0,h.jsxs)("select",{name:"category_id",onChange:m,className:"form-select",children:[(0,h.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),null===j||void 0===j?void 0:j.map(((e,t)=>(0,h.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name_ru},t)))]}),(0,h.jsx)("h6",{className:"mt-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 (RU)"}),(0,h.jsx)(d.A,{name:"description_ru",onChangeValue:y}),(0,h.jsx)("h6",{className:"mt-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 (UZ)"}),(0,h.jsx)(d.A,{name:"description_uz",onChangeValue:y}),(0,h.jsx)("h6",{className:"mt-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 (EN)"}),(0,h.jsx)(d.A,{name:"description_en",onChangeValue:y}),(0,h.jsxs)(c.Q_,{onClick:()=>e((0,_.Af)(u)),color:"primary",className:"float-end ms-auto mt-4",children:[(0,h.jsx)(o.A,{icon:r.s,className:"me-1"}),"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"]})]})]})})]})}},56063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]},32224:(e,t,a)=>{var s={"./ckb.js":23743,"./da.js":11664,"./de.js":30844,"./en.js":5460,"./es.js":6151,"./fa.js":96062,"./fr.js":27755,"./he.js":3296,"./index.js":70559,"./it.js":54762,"./ja.js":80074,"./ko.js":20665,"./lv.js":90749,"./nl.js":66449,"./pl.js":48599,"./pt_br.js":48366,"./ro.js":73100,"./ru.js":34638,"./se.js":55111,"./tr.js":10057,"./ua.js":79657,"./ur.js":64640,"./zh_cn.js":25277};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=32224}}]);
//# sourceMappingURL=9951.7adbd1c2.chunk.js.map