"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6190],{85639:(e,a,s)=>{s.d(a,{Af:()=>l,HV:()=>c,Sw:()=>d,V$:()=>o,VQ:()=>i});var t=s(42145),r=s(83613);const l=e=>a=>{a({type:"post_create_offers_start",payload:e}),r.A.postCreateOffers(e).then((e=>{let{data:s}=e;a({type:"post_create_offers_success",payload:s}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;a({type:"post_create_offers_error",payload:s})}))},c=(e,a)=>s=>{s({type:"post_edit_offers_start",payload:e,params:a}),r.A.postUpdateOffers(e,a).then((e=>{let{data:a}=e;s({type:"post_edit_offers_success",payload:a}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;s({type:"post_edit_offers_error",payload:a})}))},o=e=>a=>{a({type:"post_delete_offers_start",payload:e}),r.A.postDeleteOffers(e).then((e=>{let{data:s}=e;a({type:"post_delete_offers_success",payload:s}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;a({type:"post_delete_offers_error",payload:s})}))},i=e=>a=>{a({type:"fetch_detail_offers_start",payload:e}),r.A.getDetailOffers(e).then((e=>{let{data:s}=e;a({type:"fetch_detail_offers_success",payload:s})})).catch((e=>{let{response:s}=e;a({type:"fetch_detail_offers_error",payload:s})}))},d=e=>a=>{a({type:"fetch_offers_start",payload:e}),r.A.getOffers(e).then((e=>{let{data:s}=e;a({type:"fetch_offers_success",payload:s})})).catch((e=>{let{response:s}=e;a({type:"fetch_offers_error",payload:s})}))}},86190:(e,a,s)=>{s.r(a),s.d(a,{default:()=>f});var t=s(56063),r=s(87476),l=s(6145),c=s(93946),o=s(65043),i=s(79456),d=s(73216),n=s(35475),p=s(85639),h=s(70579);const f=()=>{const e=(0,i.wA)(),a=(0,d.zy)(),{search:s}=a,f=s?parseInt(null===s||void 0===s?void 0:s.match(/\d+/)[0]):1,_=(0,i.d4)((e=>e.offers.offers)),u=(0,i.d4)((e=>e.offers.pagination)),[m,v]=(0,o.useState)({page:f,limit:12});(0,o.useEffect)((()=>{let a={...m,page:f};v(a),e((0,p.Sw)(a))}),[f]);const[y,x]=(0,o.useState)([...Array(null===u||void 0===u?void 0:u.pageCount)]);(0,o.useEffect)((()=>{x([...Array(null===u||void 0===u?void 0:u.pageCount)])}),[u]);const j=null===y||void 0===y?void 0:y.length;return(0,h.jsxs)("div",{className:"card mb-4",children:[(0,h.jsxs)("div",{className:"card-header d-flex flex-wrap align-items-center",children:["\u0421\u041f\u0415\u0426\u0418\u0410\u041b\u042c\u041d\u042b\u0415 \u041f\u0420\u0415\u0414\u041b\u041e\u0416\u0415\u041d\u0418\u042f",(0,h.jsx)(n.N_,{to:"/offers/create",className:"btn btn-success ms-auto text-white",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsxs)("table",{className:"table table-hover table-striped",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",children:"ID"}),(0,h.jsx)("th",{scope:"col",className:"table-photo",children:"\u0424\u043e\u0442\u043e"}),(0,h.jsx)("th",{scope:"col",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,h.jsx)("th",{scope:"col",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),(0,h.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430"}),(0,h.jsx)("th",{scope:"col"})]})}),(0,h.jsx)("tbody",{children:null===_||void 0===_?void 0:_.map(((a,s)=>{var o,i;return(0,h.jsxs)("tr",{children:[(0,h.jsxs)("th",{scope:"row",children:[(0,h.jsx)(n.N_,{to:"/offers/".concat(null===a||void 0===a?void 0:a._id),className:"table-link"}),null===a||void 0===a?void 0:a._id]}),(0,h.jsxs)("td",{children:[" ",(0,h.jsx)("img",{src:"https://api.madad-service.uz/"+(null===a||void 0===a?void 0:a.photo),alt:""})," "]}),(0,h.jsx)("td",{children:null===a||void 0===a?void 0:a.name_ru}),(0,h.jsx)("td",{children:null===a||void 0===a||null===(o=a.category)||void 0===o?void 0:o.name_ru}),(0,h.jsx)("td",{children:null===a||void 0===a||null===(i=a.date)||void 0===i?void 0:i.split(",")[0]}),(0,h.jsx)("td",{className:"table-icons-block",children:(0,h.jsxs)("div",{className:"table-icons",children:[(0,h.jsx)(c.Q_,{onClick:()=>e((0,p.V$)(null===a||void 0===a?void 0:a._id)),color:"danger",className:"text-white",children:(0,h.jsx)(l.A,{icon:t.Z})}),(0,h.jsx)(n.N_,{to:"/offers/update/".concat(null===a||void 0===a?void 0:a._id),children:(0,h.jsx)(c.Q_,{color:"warning",className:"text-white",children:(0,h.jsx)(l.A,{icon:r.K})})})]})})]},s)}))})]}),(0,h.jsx)("nav",{"aria-label":"...",className:"pt-4",children:(0,h.jsxs)("ul",{className:"pagination mt-4",children:[(0,h.jsx)("li",{className:"page-item ".concat(m.page<=1?"disabled":""),children:(0,h.jsx)(n.N_,{to:"?page=".concat(m.page>1&&m.page-1),className:"page-link",children:"Previous"})}),null===y||void 0===y?void 0:y.map(((e,a)=>(0,h.jsx)("li",{className:"page-item ".concat(a+1===m.page?"active":""),children:(0,h.jsx)(n.N_,{to:"?page=".concat(a+1),className:"page-link",children:a+1})},a))),(0,h.jsx)("li",{className:"page-item ".concat(m.page===j?"disabled":""),children:(0,h.jsx)(n.N_,{to:"?page=".concat(m.page!==j&&m.page+1),className:"page-link",children:"Next"})})]})})]})]})}},87476:(e,a,s)=>{s.d(a,{K:()=>t});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},56063:(e,a,s)=>{s.d(a,{Z:()=>t});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=6190.1e8d6738.chunk.js.map