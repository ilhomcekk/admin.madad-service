"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7775],{28446:(e,a,t)=>{t.d(a,{Q8:()=>l,W2:()=>i,XL:()=>o,dE:()=>c,i$:()=>d});var r=t(42145),s=t(83613);const c=e=>a=>{a({type:"post_create_faq_start",payload:e}),s.A.postCreateFaq(e).then((e=>{let{data:t}=e;a({type:"post_create_faq_success",payload:t}),r.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_create_faq_error",payload:t})}))},l=(e,a)=>t=>{t({type:"post_edit_faq_start",payload:e,params:a}),s.A.postUpdateFaq(e,a).then((e=>{let{data:a}=e;t({type:"post_edit_faq_success",payload:a}),r.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_edit_faq_error",payload:a})}))},i=e=>a=>{a({type:"post_delete_faq_start",payload:e}),s.A.postDeleteFaq(e).then((e=>{let{data:t}=e;a({type:"post_delete_faq_success",payload:t}),r.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_delete_faq_error",payload:t})}))},d=e=>a=>{a({type:"fetch_detail_faq_start",payload:e}),s.A.getDetailFaq(e).then((e=>{let{data:t}=e;a({type:"fetch_detail_faq_success",payload:t})})).catch((e=>{let{response:t}=e;a({type:"fetch_detail_faq_error",payload:t})}))},o=e=>a=>{a({type:"fetch_faq_start",payload:e}),s.A.getFaq(e).then((e=>{let{data:t}=e;a({type:"fetch_faq_success",payload:t})})).catch((e=>{let{response:t}=e;a({type:"fetch_faq_error",payload:t})}))}},47775:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var r=t(87476),s=t(56063),c=t(6145),l=t(93946),i=t(65043),d=t(79456),o=t(73216),p=t(35475),n=t(28446),_=t(70579);const h=()=>{const e=(0,d.wA)(),{id:a}=(0,o.g)(),t=(0,o.Zp)(),{data:h}=(0,d.d4)((e=>e.faq));(0,i.useEffect)((()=>{e((0,n.i$)(a))}),[a]);const{step:y}=(0,d.d4)((e=>e.faq));return(0,i.useEffect)((()=>{!0===y&&t("/faq")}),[y]),(0,_.jsxs)("div",{className:"card",children:[(0,_.jsxs)("div",{className:"card-header d-flex flex-wrap align-items-center",children:["\u0412\u043e\u043f\u0440\u043e\u0441 \u0438 \u043e\u0442\u0432\u0435\u0442",(0,_.jsxs)(p.N_,{to:"/faq/update/".concat(null===h||void 0===h?void 0:h._id),className:"btn btn-primary d-flex align-items-center justify-content-center gap-1 ms-auto me-2",children:[(0,_.jsx)(c.A,{icon:r.K}),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"]}),(0,_.jsxs)(l.Q_,{onClick:()=>e((0,n.W2)(null===h||void 0===h?void 0:h._id)),className:"btn btn-danger text-white d-flex align-items-center justify-content-center gap-1",children:[(0,_.jsx)(c.A,{icon:s.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]}),(0,_.jsx)("div",{className:"card-body",children:(0,_.jsx)("div",{className:"row",children:(0,_.jsxs)("div",{className:"col-12",children:[(0,_.jsx)("h6",{children:"\u0412\u043e\u043f\u0440\u043e\u0441 (RU)"}),(0,_.jsx)("div",{className:"border p-3",children:null===h||void 0===h?void 0:h.question_ru}),(0,_.jsx)("h6",{className:"mt-4",children:"\u041e\u0442\u0432\u0435\u0442 (RU)"}),(0,_.jsx)("div",{className:"border p-3",children:null===h||void 0===h?void 0:h.answer_ru}),(0,_.jsx)("h6",{className:"mt-4",children:"\u0412\u043e\u043f\u0440\u043e\u0441 (UZ)"}),(0,_.jsx)("div",{className:"border p-3",children:null===h||void 0===h?void 0:h.question_uz}),(0,_.jsx)("h6",{className:"mt-4",children:"\u041e\u0442\u0432\u0435\u0442 (UZ)"}),(0,_.jsx)("div",{className:"border p-3",children:null===h||void 0===h?void 0:h.answer_uz}),(0,_.jsx)("h6",{className:"mt-4",children:"\u0412\u043e\u043f\u0440\u043e\u0441 (EN)"}),(0,_.jsx)("div",{className:"border p-3",children:null===h||void 0===h?void 0:h.question_en}),(0,_.jsx)("h6",{className:"mt-4",children:"\u041e\u0442\u0432\u0435\u0442 (EN)"}),(0,_.jsx)("div",{className:"border p-3",children:null===h||void 0===h?void 0:h.answer_en})]})})})]})}},87476:(e,a,t)=>{t.d(a,{K:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},56063:(e,a,t)=>{t.d(a,{Z:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=7775.f5381c17.chunk.js.map