(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9207],{1443:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var r=a(65043),s=a(9266),l=a.n(s),n=(a(23475),a(70579));const o=e=>{let{onChangeValue:t,name:a,defaultValue:s}=e;const[o,c]=(0,r.useState)({value:s||"",name:a});return(0,r.useEffect)((()=>{if(s){let e={...o,value:s};c(e)}}),[s]),(0,n.jsx)("div",{children:(0,n.jsx)(l(),{lang:"ru",setContents:o.value,onChange:e=>{let a={...o,value:e};c(a),t(a)},name:a,setDefaultStyle:"font-family: arial; font-size: 16px;",setOptions:{buttonList:[["undo","redo"],["font","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor"],["align","list","lineHeight"],["outdent","indent"],["table","horizontalRule","link"],["preview","print"],["removeFormat"]],defaultTag:"div",minHeight:"300px",showPathLabel:!1}})})}},60079:(e,t,a)=>{"use strict";a.d(t,{Ar:()=>l,Df:()=>n,Up:()=>i,lW:()=>c,ne:()=>o});var r=a(42145),s=a(83613);const l=e=>t=>{t({type:"post_create_partners_start",payload:e}),s.A.postCreatePartners(e).then((e=>{let{data:a}=e;t({type:"post_create_partners_success",payload:a}),r.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_create_partners_error",payload:a})}))},n=(e,t)=>a=>{a({type:"post_edit_partners_start",payload:e,params:t}),s.A.postUpdatePartners(e,t).then((e=>{let{data:t}=e;a({type:"post_edit_partners_success",payload:t}),r.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e")})).catch((e=>{let{response:t}=e;a({type:"post_edit_partners_error",payload:t})}))},o=e=>t=>{t({type:"post_delete_partners_start",payload:e}),s.A.postDeletePartners(e).then((e=>{let{data:a}=e;t({type:"post_delete_partners_success",payload:a}),r.oR.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")})).catch((e=>{let{response:a}=e;t({type:"post_delete_partners_error",payload:a})}))},c=e=>t=>{t({type:"fetch_detail_partners_start",payload:e}),s.A.getDetailPartners(e).then((e=>{let{data:a}=e;t({type:"fetch_detail_partners_success",payload:a})})).catch((e=>{let{response:a}=e;t({type:"fetch_detail_partners_error",payload:a})}))},i=e=>t=>{t({type:"fetch_partners_start",payload:e}),s.A.getPartners(e).then((e=>{let{data:a}=e;t({type:"fetch_partners_success",payload:a})})).catch((e=>{let{response:a}=e;t({type:"fetch_partners_error",payload:a})}))}},82070:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var r=a(56063),s=a(64731),l=a(6145),n=a(93946),o=a(65043),c=a(79456),i=a(73216),p=(a(1443),a(60079)),d=a(70579);const h=()=>{const e=(0,c.wA)(),t=(0,i.Zp)(),a=(new Date).toLocaleString("ru-RU",{timeZone:"Asia/Tashkent"}),[h,u]=(0,o.useState)({name:"",link:"",photo:"",date:a}),m=e=>{const{name:t,value:a}=e.target;u((e=>({...e,[t]:a})))},{step:_}=(0,c.d4)((e=>e.partners));return(0,o.useEffect)((()=>{!0===_&&t("/partners")}),[_]),(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("div",{className:"card-header",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-xl-3 col-md-6",children:[(0,d.jsx)("h6",{children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u0444\u043e\u0442\u043e"}),(0,d.jsx)("div",{className:"card",children:(0,d.jsx)("div",{className:"card-body",children:(0,d.jsxs)("div",{className:"drop-image",children:[!h.photo&&(0,d.jsxs)(d.Fragment,{children:["+ ",(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]}),(0,d.jsx)("input",{type:"file",id:"drop-photo-input",accept:"image/png, image/gif, image/jpeg",multiple:!1,onChange:e=>((e,t)=>{let a={...h,photo:e.target.files[0]};if(u(a),window.FileReader){const a=e.target.files[0],r=new FileReader;a&&a.type.match("image.*")&&r.readAsDataURL(a),r.onload=function(e){t.src=e.target.result}}})(e,document.querySelector("#newsCreateImage"))}),(0,d.jsx)("label",{htmlFor:"drop-photo-input",children:(0,d.jsx)("img",{className:"card-img-top",src:h.photo,alt:"",id:"newsCreateImage"})})]})})}),h.photo&&(0,d.jsxs)(n.Q_,{className:"btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1 mt-2",onClick:()=>{let e={...h,photo:""};u(e)},children:[(0,d.jsx)(l.A,{icon:r.Z}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]}),(0,d.jsxs)("div",{className:"col-xl-9",children:[(0,d.jsx)("h6",{className:"",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,d.jsx)("input",{value:h.name,name:"name",onChange:m,className:"form-control"}),(0,d.jsx)("h6",{className:"mt-4",children:"\u041b\u0438\u043d\u043a"}),(0,d.jsx)("input",{value:h.link,name:"link",onChange:m,className:"form-control"}),(0,d.jsxs)(n.Q_,{onClick:()=>e((0,p.Ar)(h)),color:"primary",className:"float-end ms-auto mt-4",children:[(0,d.jsx)(l.A,{icon:s.s,className:"me-1"}),"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"]})]})]})})]})}},56063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]},32224:(e,t,a)=>{var r={"./ckb.js":23743,"./da.js":11664,"./de.js":30844,"./en.js":5460,"./es.js":6151,"./fa.js":96062,"./fr.js":27755,"./he.js":3296,"./index.js":70559,"./it.js":54762,"./ja.js":80074,"./ko.js":20665,"./lv.js":90749,"./nl.js":66449,"./pl.js":48599,"./pt_br.js":48366,"./ro.js":73100,"./ru.js":34638,"./se.js":55111,"./tr.js":10057,"./ua.js":79657,"./ur.js":64640,"./zh_cn.js":25277};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=l,e.exports=s,s.id=32224}}]);
//# sourceMappingURL=9207.97f04556.chunk.js.map