import{a as t,j as b}from"./jsx-runtime-862f31f3.js";import{r as p}from"./index-c013ead5.js";import{s as h}from"./emotion-styled.browser.esm-60a14a7a.js";import{c as i}from"./colors-0c427165.js";import{C as g}from"./Color-e0cabd82.js";import"./_commonjsHelpers-725317a4.js";import"./extends-4c19d496.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-f576544e.js";import"./index-0f742701.js";var m;const S=(m=g.from(i.active))==null?void 0:m.withAlpha(.2).toString();var f;const l=(f=g.from(i.text))==null?void 0:f.withAlpha(.1).toString(),V=h.svg`
  aspect-ratio: 1;
`,w=h.div`
  background: ${i.uiBackground};
  border-radius: 4px;
  display: flex;
  justify-content: center;
`,c=h.rect`
  rx: 4;
  fill: transparent;
  cursor: pointer;
  :hover {
    fill: ${S};
  }
`,u=({className:n,xValue:e,yValue:r,onXChange:o,onYChange:s})=>t(w,{className:n,children:b(V,{className:n,viewBox:"0 0 64 64",children:[t("rect",{x:"30",y:"4",width:"4",height:"12",rx:"1",fill:r==="start"||r==="both"?i.active:l}),t(c,{x:"26",y:"0",width:"12",height:"20",onClick:a=>{if(a.shiftKey&&r==="end"){s("both");return}s("start")}}),t("rect",{x:"30",y:"48",width:"4",height:"12",rx:"1",fill:r==="end"||r==="both"?i.active:l}),t(c,{x:"26",y:"44",width:"12",height:"20",onClick:a=>{if(a.shiftKey&&r==="start"){s("both");return}s("end")}}),t("rect",{x:"4",y:"30",width:"12",height:"4",rx:"1",fill:e==="start"||e==="both"?i.active:l}),t(c,{x:"0",y:"26",width:"20",height:"12",onClick:a=>{if(a.shiftKey&&e==="end"){o("both");return}o("start")}}),t("rect",{x:"48",y:"30",width:"12",height:"4",rx:"1",fill:e==="end"||e==="both"?i.active:l}),t(c,{x:"44",y:"26",width:"20",height:"12",onClick:a=>{if(a.shiftKey&&e==="start"){o("both");return}o("end")}})]})});try{u.displayName="SimpleAnchorEdit",u.__docgenInfo={description:"",displayName:"SimpleAnchorEdit",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},xValue:{defaultValue:null,description:"",name:"xValue",required:!0,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"both"'}]}},yValue:{defaultValue:null,description:"",name:"yValue",required:!0,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"both"'}]}},onXChange:{defaultValue:null,description:"",name:"onXChange",required:!0,type:{name:'(value: "start" | "end" | "both") => void'}},onYChange:{defaultValue:null,description:"",name:"onYChange",required:!0,type:{name:'(value: "start" | "end" | "both") => void'}}}}}catch{}const K={title:"SimpleAnchorEdit",component:u},d=()=>{const[n,e]=p.useState("start"),[r,o]=p.useState("start");return t(u,{className:"w-16",xValue:n,yValue:r,onXChange:e,onYChange:o})};var y,x,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [xValue, setXValue] = useState<"start" | "end" | "both">("start");
  const [yValue, setYValue] = useState<"start" | "end" | "both">("start");
  return <SimpleAnchorEdit className="w-16" xValue={xValue} yValue={yValue} onXChange={setXValue} onYChange={setYValue} />;
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const X=["Basic"];export{d as Basic,X as __namedExportsOrder,K as default};
