"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5878],{85807:(e,a,s)=>{s.d(a,{aE:()=>d,du:()=>o,tP:()=>i,xw:()=>r,y_:()=>c});var t=s(42145),l=s(83613);const c=e=>a=>{a({type:"post_create_news_start",payload:e}),l.A.postCreateNews(e).then((e=>{let{data:s}=e;a({type:"post_create_news_success",payload:s}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;a({type:"post_create_news_error",payload:s})}))},r=(e,a)=>s=>{s({type:"post_edit_news_start",payload:e,params:a}),l.A.postUpdateNews(e,a).then((e=>{let{data:a}=e;s({type:"post_edit_news_success",payload:a}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;s({type:"post_edit_news_error",payload:a})}))},i=e=>a=>{a({type:"post_delete_news_start",payload:e}),l.A.postDeleteNews(e).then((e=>{let{data:s}=e;a({type:"post_delete_news_success",payload:s}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;a({type:"post_delete_news_error",payload:s})}))},o=e=>a=>{a({type:"fetch_detail_news_start",payload:e}),l.A.getDetailNews(e).then((e=>{let{data:s}=e;a({type:"fetch_detail_news_success",payload:s})})).catch((e=>{let{response:s}=e;a({type:"fetch_detail_news_error",payload:s})}))},d=e=>a=>{a({type:"fetch_news_start",payload:e}),l.A.getNews(e).then((e=>{let{data:s}=e;a({type:"fetch_news_success",payload:s})})).catch((e=>{let{response:s}=e;a({type:"fetch_news_error",payload:s})}))}},85878:(e,a,s)=>{s.r(a),s.d(a,{default:()=>_});var t=s(56063),l=s(87476),c=s(6145),r=s(93946),i=s(65043),o=s(79456),d=s(73216),n=s(35475),p=s(85807),h=s(70579);const _=()=>{const e=(0,o.wA)(),a=(0,d.zy)(),{search:s}=a,_=s?parseInt(null===s||void 0===s?void 0:s.match(/\d+/)[0]):1,m=(0,o.d4)((e=>e.news.news)),u=(0,o.d4)((e=>e.news.pagination)),[y,v]=(0,i.useState)({page:_,limit:12});(0,i.useEffect)((()=>{let a={...y,page:_};v(a),e((0,p.aE)(a))}),[_]);const[x,w]=(0,i.useState)([...Array(null===u||void 0===u?void 0:u.pageCount)]);(0,i.useEffect)((()=>{w([...Array(null===u||void 0===u?void 0:u.pageCount)])}),[u]);const j=null===x||void 0===x?void 0:x.length;return(0,h.jsxs)("div",{className:"card mb-4",children:[(0,h.jsxs)("div",{className:"card-header d-flex flex-wrap align-items-center",children:["\u041d\u043e\u0432\u043e\u0441\u0442\u0438",(0,h.jsx)(n.N_,{to:"/news/create",className:"btn btn-success ms-auto text-white",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u0438"})]}),(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsxs)("table",{className:"table table-hover table-striped",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",children:"ID"}),(0,h.jsx)("th",{scope:"col",className:"table-photo",children:"\u0424\u043e\u0442\u043e"}),(0,h.jsx)("th",{scope:"col",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,h.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430"}),(0,h.jsx)("th",{scope:"col"})]})}),(0,h.jsx)("tbody",{children:null===m||void 0===m?void 0:m.map(((a,s)=>{var i;return(0,h.jsxs)("tr",{children:[(0,h.jsxs)("th",{scope:"row",children:[(0,h.jsx)(n.N_,{to:"/news/".concat(null===a||void 0===a?void 0:a._id),className:"table-link"}),null===a||void 0===a?void 0:a._id]}),(0,h.jsxs)("td",{children:[" ",(0,h.jsx)("img",{src:"https://api.madad-service.uz/"+(null===a||void 0===a?void 0:a.photo),alt:""})," "]}),(0,h.jsx)("td",{children:null===a||void 0===a?void 0:a.name_ru}),(0,h.jsx)("td",{children:null===a||void 0===a||null===(i=a.date)||void 0===i?void 0:i.split(",")[0]}),(0,h.jsx)("td",{className:"table-icons-block",children:(0,h.jsxs)("div",{className:"table-icons",children:[(0,h.jsx)(r.Q_,{onClick:()=>e((0,p.tP)(a._id)),color:"danger",className:"text-white",children:(0,h.jsx)(c.A,{icon:t.Z})}),(0,h.jsx)(n.N_,{to:"/news/update/".concat(null===a||void 0===a?void 0:a._id),children:(0,h.jsx)(r.Q_,{color:"warning",className:"text-white",children:(0,h.jsx)(c.A,{icon:l.K})})})]})})]},s)}))})]}),(0,h.jsx)("nav",{"aria-label":"...",className:"pt-4",children:(0,h.jsxs)("ul",{className:"pagination mt-4",children:[(0,h.jsx)("li",{className:"page-item ".concat(y.page<=1?"disabled":""),children:(0,h.jsx)(n.N_,{to:"?page=".concat(y.page>1&&y.page-1),className:"page-link",children:"Previous"})}),null===x||void 0===x?void 0:x.map(((e,a)=>(0,h.jsx)("li",{className:"page-item ".concat(a+1===y.page?"active":""),children:(0,h.jsx)(n.N_,{to:"?page=".concat(a+1),className:"page-link",children:a+1})},a))),(0,h.jsx)("li",{className:"page-item ".concat(y.page===j?"disabled":""),children:(0,h.jsx)(n.N_,{to:"?page=".concat(y.page!==j&&y.page+1),className:"page-link",children:"Next"})})]})})]})]})}},87476:(e,a,s)=>{s.d(a,{K:()=>t});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},56063:(e,a,s)=>{s.d(a,{Z:()=>t});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=5878.2dd90d95.chunk.js.map