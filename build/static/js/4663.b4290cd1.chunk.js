"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4663],{49736:(e,t,s)=>{s.d(t,{AP:()=>r,Jz:()=>n,Vd:()=>i,Wy:()=>c,ev:()=>l});var a=s(42145),d=s(83613);const i=e=>t=>{t({type:"post_create_advertising_start",payload:e}),d.A.postCreateAdvertising(e).then((e=>{let{data:s}=e;t({type:"post_create_advertising_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_create_advertising_error",payload:s})}))},r=(e,t)=>s=>{s({type:"post_edit_advertising_start",payload:e,params:t}),d.A.postUpdateAdvertising(e,t).then((e=>{let{data:t}=e;s({type:"post_edit_advertising_success",payload:t}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;s({type:"post_edit_advertising_error",payload:t})}))},l=e=>t=>{t({type:"post_delete_advertising_start",payload:e}),d.A.postDeleteAdvertising(e).then((e=>{let{data:s}=e;t({type:"post_delete_advertising_success",payload:s}),a.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;t({type:"post_delete_advertising_error",payload:s})}))},c=e=>t=>{t({type:"fetch_detail_advertising_start",payload:e}),d.A.getDetailAdvertising(e).then((e=>{let{data:s}=e;t({type:"fetch_detail_advertising_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_detail_advertising_error",payload:s})}))},n=e=>t=>{t({type:"fetch_advertising_start",payload:e}),d.A.getAdvertising(e).then((e=>{let{data:s}=e;t({type:"fetch_advertising_success",payload:s})})).catch((e=>{let{response:s}=e;t({type:"fetch_advertising_error",payload:s})}))}},24663:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(87476),d=s(56063),i=s(6145),r=s(93946),l=s(65043),c=s(79456),n=s(73216),o=s(35475),p=s(49736),_=s(85721),v=s(70579);const h=()=>{const e=(0,c.wA)(),{id:t}=(0,n.g)(),s=(0,n.Zp)(),{data:h}=(0,c.d4)((e=>e.advertising));(0,l.useEffect)((()=>{e((0,p.Wy)(t))}),[t]);const{step:y}=(0,c.d4)((e=>e.news));return(0,l.useEffect)((()=>{!0===y&&s("/advertising")}),[y]),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)("div",{className:"card-body",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-xl-3 col-md-6",children:(0,v.jsxs)("div",{className:"card",children:[(0,v.jsx)("img",{className:"card-img-top",src:null===h||void 0===h?void 0:h.photo,alt:""}),(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h5",{className:"card-title",children:null===h||void 0===h?void 0:h.name_ru}),(0,v.jsx)("p",{className:"card-text",children:(0,_.Ay)(String(null===h||void 0===h?void 0:h.description_ru))}),(0,v.jsxs)(o.N_,{to:"/advertising/update/".concat(null===h||void 0===h?void 0:h._id),className:"btn btn-primary w-100 d-flex align-items-center justify-content-center gap-1 mb-2",children:[(0,v.jsx)(i.A,{icon:a.K}),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"]}),(0,v.jsxs)(r.Q_,{onClick:()=>e((0,p.ev)(null===h||void 0===h?void 0:h._id)),className:"btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1",children:[(0,v.jsx)(i.A,{icon:d.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})]})}),(0,v.jsxs)("div",{className:"col-xl-9",children:[(0,v.jsx)("table",{className:"table table-hover table-striped",children:(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"ID"}),(0,v.jsx)("td",{children:null===h||void 0===h?void 0:h._id})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,v.jsx)("td",{children:null===h||void 0===h?void 0:h.name_ru})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"\u041b\u0438\u043d\u043a"}),(0,v.jsx)("td",{children:(0,v.jsx)("a",{href:null===h||void 0===h?void 0:h.link,children:null===h||void 0===h?void 0:h.link})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"\u0414\u0430\u0442\u0430"}),(0,v.jsx)("td",{children:null===h||void 0===h?void 0:h.date})]})]})}),(0,v.jsx)("h6",{className:"mt-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,v.jsx)("div",{className:"border p-3",children:(0,_.Ay)(String(null===h||void 0===h?void 0:h.description_ru))})]})]})})})}},87476:(e,t,s)=>{s.d(t,{K:()=>a});var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=4663.b4290cd1.chunk.js.map