"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9483],{59913:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const r={},o="Process",a={type:"api",id:"process-1",title:"Process",description:"",slug:"/process-1",frontMatter:{},api:{tags:["Base"],description:"Endpoint to process an input with a given flow_id.",operationId:"process_api_v1_predict__flow_id__post",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{type:"null",title:"Response Process Api V1 Predict  Flow Id  Post"}}}}},security:[{"API key query":[]},{"API key header":[]}],method:"post",path:"/api/v1/predict/{flow_id}",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Process",description:{content:"Endpoint to process an input with a given flow_id.",type:"text/plain"},url:{path:["api","v1","predict",":flow_id"],host:["{{baseUrl}}"],query:[],variable:[]},method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/process-1",previous:{title:"Process",permalink:"/api/process"},next:{title:"Get Task Status",permalink:"/api/get-task-status"}},l=[];function p(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"process",children:"Process"})}),"\n",(0,n.jsx)(t.p,{children:"Endpoint to process an input with a given flow_id."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)("span",{style:{opacity:"0.6"},children:" null"})})})})]})})]})})})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);