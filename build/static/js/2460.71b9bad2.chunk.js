"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2460],{13170:(e,t,s)=>{s.d(t,{XS:()=>c,YI:()=>l,Z1:()=>o,o4:()=>i,ob:()=>d});var a=s(42145),r=s(83613);const c=e=>t=>{t({type:"post_create_services_start",payload:e}),r.A.postCreateServices(e).then((e=>{let{data:s}=e;t({type:"post_create_services_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_create_services_error",payload:s})}))},i=(e,t)=>s=>{s({type:"post_edit_services_start",payload:e,params:t}),r.A.postUpdateServices(e,t).then((e=>{let{data:t}=e;s({type:"post_edit_services_success",payload:t}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;s({type:"post_edit_services_error",payload:t})}))},d=e=>t=>{t({type:"post_delete_services_start",payload:e}),r.A.postDeleteServices(e).then((e=>{let{data:s}=e;t({type:"post_delete_services_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_delete_services_error",payload:s})}))},l=e=>t=>{t({type:"fetch_detail_services_start",payload:e}),r.A.getDetailServices(e).then((e=>{let{data:s}=e;t({type:"fetch_detail_services_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_detail_services_error",payload:s})}))},o=e=>t=>{t({type:"fetch_services_start",payload:e}),r.A.getServices(e).then((e=>{let{data:s}=e;t({type:"fetch_services_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_services_error",payload:s})}))}},93270:(e,t,s)=>{s.d(t,{BK:()=>c,XN:()=>o,cr:()=>d,o2:()=>i,yx:()=>l});var a=s(42145),r=s(83613);const c=e=>t=>{t({type:"post_create_tariffs_start",payload:e}),r.A.postCreateTarif(e).then((e=>{let{data:s}=e;t({type:"post_create_tariffs_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_create_tariffs_error",payload:s})}))},i=(e,t)=>s=>{s({type:"post_edit_tariffs_start",payload:e,params:t}),r.A.postUpdateTarif(e,t).then((e=>{let{data:t}=e;s({type:"post_edit_tariffs_success",payload:t}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;s({type:"post_edit_tariffs_error",payload:t})}))},d=e=>t=>{t({type:"post_delete_tariffs_start",payload:e}),r.A.postDeleteTarif(e).then((e=>{let{data:s}=e;t({type:"post_delete_tariffs_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_delete_tariffs_error",payload:s})}))},l=e=>t=>{t({type:"fetch_detail_tariffs_start",payload:e}),r.A.getDetailTarif(e).then((e=>{let{data:s}=e;t({type:"fetch_detail_tariffs_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_detail_tariffs_error",payload:s})}))},o=e=>t=>{t({type:"fetch_tariffs_start",payload:e}),r.A.getTarif(e).then((e=>{let{data:s}=e;t({type:"fetch_tariffs_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_tariffs_error",payload:s})}))}},29962:(e,t,s)=>{s.d(t,{Gn:()=>l,Ht:()=>o,I6:()=>i,PB:()=>c,yO:()=>d});var a=s(42145),r=s(83613);const c=e=>t=>{t({type:"post_create_tariffs_services_start",payload:e}),r.A.postCreateTarifServices(e).then((e=>{let{data:s}=e;t({type:"post_create_tariffs_services_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_create_tariffs_services_error",payload:s})}))},i=(e,t)=>s=>{s({type:"post_edit_tariffs_services_start",payload:e,params:t}),r.A.postUpdateTarifServices(e,t).then((e=>{let{data:t}=e;s({type:"post_edit_tariffs_services_success",payload:t}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;s({type:"post_edit_tariffs_services_error",payload:t})}))},d=e=>t=>{t({type:"post_delete_tariffs_services_start",payload:e}),r.A.postDeleteTarifServices(e).then((e=>{let{data:s}=e;t({type:"post_delete_tariffs_services_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_delete_tariffs_services_error",payload:s})}))},l=e=>t=>{t({type:"fetch_detail_tariffs_services_start",payload:e}),r.A.getDetailTarifServices(e).then((e=>{let{data:s}=e;t({type:"fetch_detail_tariffs_services_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_detail_tariffs_services_error",payload:s})}))},o=e=>t=>{t({type:"fetch_tariffs_services_start",payload:e}),r.A.getTarifServices(e).then((e=>{let{data:s}=e;t({type:"fetch_tariffs_services_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_tariffs_services_error",payload:s})}))}},12460:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var a=s(87476),r=s(56063),c=s(6145),i=s(93946),d=s(65043),l=s(79456),o=s(73216),p=s(35475),_=(s(13170),s(85721)),f=(s(93270),s(29962)),n=s(70579);const y=()=>{const e=(0,l.wA)(),{id:t}=(0,o.g)(),s=(0,o.Zp)(),{data:y}=(0,l.d4)((e=>e.tarifServices));(0,d.useEffect)((()=>{e((0,f.Gn)(t))}),[t]);const{step:h}=(0,l.d4)((e=>e.tarifServices));return(0,d.useEffect)((()=>{!0===h&&s("/tariffs-services")}),[h]),(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("div",{className:"card-body",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-3 col-md-6",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("img",{className:"card-img-top",src:"https://api.madad-service.uz/"+(null===y||void 0===y?void 0:y.photo),alt:""}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:null===y||void 0===y?void 0:y.name_ru}),(0,n.jsx)("p",{className:"card-text",children:(0,_.Ay)(String(null===y||void 0===y?void 0:y.description_ru))}),(0,n.jsxs)(p.N_,{to:"/tariffs-services/update/".concat(null===y||void 0===y?void 0:y._id),className:"btn btn-primary w-100 d-flex align-items-center justify-content-center gap-1 mb-2",children:[(0,n.jsx)(c.A,{icon:a.K}),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"]}),(0,n.jsxs)(i.Q_,{onClick:()=>e((0,f.yO)(null===y||void 0===y?void 0:y._id)),className:"btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1",children:[(0,n.jsx)(c.A,{icon:r.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})]})}),(0,n.jsxs)("div",{className:"col-xl-9",children:[(0,n.jsx)("table",{className:"table table-hover table-striped",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ID"}),(0,n.jsx)("td",{children:null===y||void 0===y?void 0:y._id})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,n.jsx)("td",{children:null===y||void 0===y?void 0:y.name_ru})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,n.jsx)("td",{children:null===y||void 0===y?void 0:y.description_ru})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"\u0414\u0430\u0442\u0430"}),(0,n.jsx)("td",{children:null===y||void 0===y?void 0:y.date})]})]})}),(0,n.jsx)("h6",{className:"mt-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,n.jsx)("div",{className:"border p-3",children:(0,_.Ay)(String(null===y||void 0===y?void 0:y.description_ru))})]})]})})})}},87476:(e,t,s)=>{s.d(t,{K:()=>a});var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=2460.71b9bad2.chunk.js.map