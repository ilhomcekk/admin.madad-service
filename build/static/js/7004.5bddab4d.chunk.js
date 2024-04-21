"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7004],{98022:(e,a,t)=>{t.d(a,{Ie:()=>c,Xu:()=>s,p7:()=>n,q2:()=>l});var o=t(42145),r=t(83613);const s=e=>a=>{a({type:"post_create_category_start",payload:e}),r.A.postCreateCategory(e).then((e=>{let{data:t}=e;a({type:"post_create_category_success",payload:t}),o.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_create_category_error",payload:t})}))},c=(e,a)=>t=>{t({type:"post_edit_category_start",payload:e,params:a}),r.A.postUpdateCategory(e,a).then((e=>{let{data:a}=e;t({type:"post_edit_category_success",payload:a}),o.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_edit_category_error",payload:a})}))},l=e=>a=>{a({type:"post_delete_category_start",payload:e}),r.A.postDeleteCategory(e).then((e=>{let{data:t}=e;a({type:"post_delete_category_success",payload:t}),o.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_delete_category_error",payload:t})}))},n=e=>a=>{a({type:"fetch_category_start",payload:e}),r.A.getCategory(e).then((e=>{let{data:t}=e;a({type:"fetch_category_success",payload:t})})).catch((e=>{let{response:t}=e;a({type:"fetch_category_error",payload:t})}))}},37004:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var o=t(56063),r=t(64731),s=t(6145),c=t(93946),l=t(65043),n=t(79456),i=t(98022),d=t(70579);const m="https://api.madad-service.uz/",p=()=>{var e,a,t,p;const h=(0,n.wA)(),u=(0,n.d4)((e=>e.category.category)),g=(new Date).toLocaleString("ru-RU",{timeZone:"Asia/Tashkent"});(0,l.useEffect)((()=>{h((0,i.p7)())}),[]);const[y,_]=(0,l.useState)({show:!1,category:""}),[v,x]=(0,l.useState)({name_ru:"",name_uz:"",name_en:"",photo:"",date:g}),[j,f]=(0,l.useState)({name_ru:null===(e=y.category)||void 0===e?void 0:e.name_ru,name_uz:null===(a=y.category)||void 0===a?void 0:a.name_uz,name_en:null===(t=y.category)||void 0===t?void 0:t.name_en,photo:null===(p=y.category)||void 0===p?void 0:p.photo,date:g});(0,l.useEffect)((()=>{var e,a,t,o;f({name_ru:null===(e=y.category)||void 0===e?void 0:e.name_ru,name_uz:null===(a=y.category)||void 0===a?void 0:a.name_uz,name_en:null===(t=y.category)||void 0===t?void 0:t.name_en,photo:null===(o=y.category)||void 0===o?void 0:o.photo,date:g})}),[y.show]);const N=e=>{const{name:a,value:t}=e.target;f((e=>({...e,[a]:t})))},C=e=>{const{name:a,value:t}=e.target;x((e=>({...e,[a]:t})))},{step:w}=(0,n.d4)((e=>e.category));return(0,l.useEffect)((()=>{!0===w&&(h((0,i.p7)()),_({show:!1,category:""}))}),[w]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.zS,{backdrop:"static",visible:y.show,onClose:()=>_({show:!1,category:""}),children:[(0,d.jsx)(c.E4,{children:(0,d.jsx)(c.lb,{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})}),(0,d.jsx)(c.Tc,{children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("div",{className:"drop-image",children:[!(null!==j&&void 0!==j&&j.photo)&&(0,d.jsxs)(d.Fragment,{children:["+ ",(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]}),(0,d.jsx)("input",{type:"file",id:"drop-category-photo-input",multiple:!1,onChange:e=>((e,a)=>{if(window.FileReader){let t={...j,photo:e.target.files[0]};f(t);const o=e.target.files[0],r=new FileReader;o&&o.type.match("image.*")&&r.readAsDataURL(o),r.onload=function(e){a.src=e.target.result}}})(e,document.querySelector("#categoryUpdateImage"))}),(0,d.jsx)("label",{htmlFor:"drop-category-photo-input",children:(0,d.jsx)("img",{className:"card-img-top",src:m+(null===j||void 0===j?void 0:j.photo),alt:"",id:"categoryUpdateImage"})})]}),(null===j||void 0===j?void 0:j.photo)&&(0,d.jsxs)(c.Q_,{className:"btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1 mt-2",onClick:()=>{let e={...j,photo:""};f(e)},children:[(0,d.jsx)(s.A,{icon:o.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"]}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (RU)"}),(0,d.jsx)("input",{value:null===j||void 0===j?void 0:j.name_ru,name:"name_ru",onChange:N,className:"form-control"}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (UZ)"}),(0,d.jsx)("input",{value:null===j||void 0===j?void 0:j.name_uz,name:"name_uz",onChange:N,className:"form-control"}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (EN)"}),(0,d.jsx)("input",{value:null===j||void 0===j?void 0:j.name_en,name:"name_en",onChange:N,className:"form-control"})]})})}),(0,d.jsxs)(c.If,{children:[(0,d.jsx)(c.Q_,{color:"secondary",onClick:()=>_({show:!1,category:""}),children:"Close"}),(0,d.jsx)(c.Q_,{onClick:()=>{var e;return h((0,i.Ie)(null===(e=y.category)||void 0===e?void 0:e._id,j))},color:"primary",children:"Save changes"})]})]}),(0,d.jsx)("div",{className:"card",children:(0,d.jsx)("div",{className:"card-body",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-xl-8",children:[(0,d.jsx)("h6",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),(0,d.jsx)("div",{className:"list-group gap-1",children:null===u||void 0===u?void 0:u.map(((e,a)=>(0,d.jsxs)(c.ji,{color:"info",children:[(0,d.jsx)(c.VH,{color:"light",className:"d-flex align-items-center justify-content-between",children:(0,d.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[(0,d.jsx)("img",{style:{width:"20px",height:"20px",objectFit:"contain"},src:m+(null===e||void 0===e?void 0:e.photo),alt:""}),null===e||void 0===e?void 0:e.name_ru]})}),(0,d.jsxs)(c.QR,{children:[(0,d.jsx)(c.kd,{style:{cursor:"pointer"},onClick:()=>_({show:!0,category:e}),children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),(0,d.jsx)(c.kd,{onClick:()=>h((0,i.q2)(null===e||void 0===e?void 0:e._id)),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},a)))})]}),(0,d.jsxs)("div",{className:"col-xl-4",children:[(0,d.jsx)("h6",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("div",{className:"drop-image",children:[!v.photo&&(0,d.jsxs)(d.Fragment,{children:["+ ",(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]}),(0,d.jsx)("input",{type:"file",id:"drop-photo-input",accept:"image/png, image/gif, image/jpeg",multiple:!1,onChange:e=>((e,a)=>{if(window.FileReader){let t={...v,photo:e.target.files[0]};x(t);const o=e.target.files[0],r=new FileReader;o&&o.type.match("image.*")&&r.readAsDataURL(o),r.onload=function(e){a.src=e.target.result}}})(e,document.querySelector("#newsCreateImage"))}),(0,d.jsx)("label",{htmlFor:"drop-photo-input",children:(0,d.jsx)("img",{className:"card-img-top",src:v.photo,alt:"",id:"newsCreateImage"})})]}),v.photo&&(0,d.jsxs)(c.Q_,{className:"btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1 mt-2",onClick:()=>{let e={...v,photo:""};x(e)},children:[(0,d.jsx)(s.A,{icon:o.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"]}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (RU)"}),(0,d.jsx)("input",{value:v.name_ru,name:"name_ru",onChange:C,className:"form-control"}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (UZ)"}),(0,d.jsx)("input",{value:v.name_uz,name:"name_uz",onChange:C,className:"form-control"}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (EN)"}),(0,d.jsx)("input",{value:v.name_en,name:"name_en",onChange:C,className:"form-control"}),(0,d.jsxs)(c.Q_,{onClick:()=>{h((0,i.Xu)(v)),x((e=>({...e,name_ru:"",name_uz:"",name_en:"",photo:""})))},color:"primary",className:"float-end ms-auto mt-4",children:[(0,d.jsx)(s.A,{icon:r.s,className:"me-1"}),"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"]})]})})]})]})})})]})}},64731:(e,a,t)=>{t.d(a,{s:()=>o});var o=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/>"]},56063:(e,a,t)=>{t.d(a,{Z:()=>o});var o=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=7004.5bddab4d.chunk.js.map