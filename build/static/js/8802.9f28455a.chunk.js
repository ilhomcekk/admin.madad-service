(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8802],{1443:(e,a,s)=>{"use strict";s.d(a,{A:()=>l});var t=s(65043),n=s(9266),o=s.n(n),r=(s(23475),s(70579));const l=e=>{let{onChangeValue:a,name:s,defaultValue:n}=e;const[l,i]=(0,t.useState)({value:n||"",name:s});return(0,t.useEffect)((()=>{if(n){let e={...l,value:n};i(e)}}),[n]),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{lang:"ru",setContents:l.value,onChange:e=>{let s={...l,value:e};i(s),a(s)},name:s,setDefaultStyle:"font-family: arial; font-size: 16px;",setOptions:{buttonList:[["undo","redo"],["font","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor"],["align","list","lineHeight"],["outdent","indent"],["table","horizontalRule","link"],["preview","print"],["removeFormat"]],defaultTag:"div",minHeight:"300px",showPathLabel:!1}})})}},28446:(e,a,s)=>{"use strict";s.d(a,{Q8:()=>r,W2:()=>l,XL:()=>u,dE:()=>o,i$:()=>i});var t=s(42145),n=s(83613);const o=e=>a=>{a({type:"post_create_faq_start",payload:e}),n.A.postCreateFaq(e).then((e=>{let{data:s}=e;a({type:"post_create_faq_success",payload:s}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;a({type:"post_create_faq_error",payload:s})}))},r=(e,a)=>s=>{s({type:"post_edit_faq_start",payload:e,params:a}),n.A.postUpdateFaq(e,a).then((e=>{let{data:a}=e;s({type:"post_edit_faq_success",payload:a}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;s({type:"post_edit_faq_error",payload:a})}))},l=e=>a=>{a({type:"post_delete_faq_start",payload:e}),n.A.postDeleteFaq(e).then((e=>{let{data:s}=e;a({type:"post_delete_faq_success",payload:s}),t.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:s}=e;a({type:"post_delete_faq_error",payload:s})}))},i=e=>a=>{a({type:"fetch_detail_faq_start",payload:e}),n.A.getDetailFaq(e).then((e=>{let{data:s}=e;a({type:"fetch_detail_faq_success",payload:s})})).catch((e=>{let{response:s}=e;a({type:"fetch_detail_faq_error",payload:s})}))},u=e=>a=>{a({type:"fetch_faq_start",payload:e}),n.A.getFaq(e).then((e=>{let{data:s}=e;a({type:"fetch_faq_success",payload:s})})).catch((e=>{let{response:s}=e;a({type:"fetch_faq_error",payload:s})}))}},77439:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>d});var t=s(64731),n=s(6145),o=s(93946),r=s(65043),l=s(79456),i=s(73216),u=(s(1443),s(28446)),c=s(70579);const d=()=>{const e=(0,i.Zp)(),a=(0,l.wA)(),{id:s}=(0,i.g)(),{data:d}=(0,l.d4)((e=>e.faq)),{loading:_}=(0,l.d4)((e=>e.faq)),p=(new Date).toLocaleString("ru-RU",{timeZone:"Asia/Tashkent"}),[f,h]=(0,r.useState)({question_ru:null===d||void 0===d?void 0:d.question_ru,question_uz:null===d||void 0===d?void 0:d.question_uz,question_en:null===d||void 0===d?void 0:d.question_en,answer_ru:null===d||void 0===d?void 0:d.answer_ru,answer_uz:null===d||void 0===d?void 0:d.answer_uz,answer_en:null===d||void 0===d?void 0:d.answer_en,photo:"",date:p}),m=e=>{const{name:a,value:s}=e.target;h((e=>({...e,[a]:s})))},[v,j]=(0,r.useState)("https://picsum.photos/200/200");(0,r.useEffect)((()=>{h({question_ru:null===d||void 0===d?void 0:d.question_ru,question_uz:null===d||void 0===d?void 0:d.question_uz,question_en:null===d||void 0===d?void 0:d.question_en,answer_ru:null===d||void 0===d?void 0:d.answer_ru,answer_uz:null===d||void 0===d?void 0:d.answer_uz,answer_en:null===d||void 0===d?void 0:d.answer_en,photo:"",date:p})}),[s,d]),(0,r.useEffect)((()=>{a((0,u.i$)(s))}),[s]);const{step:q}=(0,l.d4)((e=>e.faq));return(0,r.useEffect)((()=>{!0===q&&e("/faq")}),[q]),(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-header",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("h6",{className:"",children:"\u0412\u043e\u043f\u0440\u043e\u0441 (RU)"}),(0,c.jsx)("input",{value:f.question_ru,name:"question_ru",onChange:m,className:"form-control"}),(0,c.jsx)("h6",{className:"mt-4",children:"\u041e\u0442\u0432\u0435\u0442 (RU)"}),(0,c.jsx)("input",{value:f.answer_ru,name:"answer_ru",onChange:m,className:"form-control"}),(0,c.jsx)("h6",{className:"mt-4",children:"\u0412\u043e\u043f\u0440\u043e\u0441 (UZ)"}),(0,c.jsx)("input",{value:f.question_uz,name:"question_uz",onChange:m,className:"form-control"}),(0,c.jsx)("h6",{className:"mt-4",children:"\u041e\u0442\u0432\u0435\u0442 (UZ)"}),(0,c.jsx)("input",{value:f.answer_uz,name:"answer_uz",onChange:m,className:"form-control"}),(0,c.jsx)("h6",{className:"mt-4",children:"\u0412\u043e\u043f\u0440\u043e\u0441 (EN)"}),(0,c.jsx)("input",{value:f.question_en,name:"question_en",onChange:m,className:"form-control"}),(0,c.jsx)("h6",{className:"mt-4",children:"\u041e\u0442\u0432\u0435\u0442 (EN)"}),(0,c.jsx)("input",{value:f.answer_en,name:"answer_en",onChange:m,className:"form-control"}),(0,c.jsxs)(o.Q_,{onClick:()=>a((0,u.Q8)(s,f)),color:"primary",className:"float-end ms-auto mt-4",children:[(0,c.jsx)(n.A,{icon:t.s,className:"me-1"}),"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"]})]})})})]})}},32224:(e,a,s)=>{var t={"./ckb.js":23743,"./da.js":11664,"./de.js":30844,"./en.js":5460,"./es.js":6151,"./fa.js":96062,"./fr.js":27755,"./he.js":3296,"./index.js":70559,"./it.js":54762,"./ja.js":80074,"./ko.js":20665,"./lv.js":90749,"./nl.js":66449,"./pl.js":48599,"./pt_br.js":48366,"./ro.js":73100,"./ru.js":34638,"./se.js":55111,"./tr.js":10057,"./ua.js":79657,"./ur.js":64640,"./zh_cn.js":25277};function n(e){var a=o(e);return s(a)}function o(e){if(!s.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=o,e.exports=n,n.id=32224}}]);
//# sourceMappingURL=8802.9f28455a.chunk.js.map