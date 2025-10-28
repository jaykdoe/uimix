import{j as I,a as i}from"./jsx-runtime-862f31f3.js";import{r as s}from"./index-c013ead5.js";import{s as N}from"./emotion-styled.browser.esm-60a14a7a.js";import{I as T}from"./iconify-814ba8dd.js";import{I as $}from"./Input-04bcbbcb.js";import{s as B,M as _,U as g}from"./UnstyledInput-f65502c7.js";import{T as k,a as q}from"./Tooltip-3ebaf484.js";import{c as w}from"./emotion-react.browser.esm-f95a2f55.js";import{T as L}from"./ToggleButton-657b8540.js";import"./_commonjsHelpers-725317a4.js";import"./extends-4c19d496.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-f576544e.js";import"./tw-merge-1166cefb.js";import"./_getTag-6f8a2dc5.js";import"./_isIndex-7d0950bc.js";import"./isObjectLike-3306fff8.js";import"./index-41ad3f98.js";import"./index-169ee69c.js";import"./floating-ui.react-dom-18fb7e86.js";import"./floating-ui.dom-88d30cbe.js";function V(e){var o,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(r=V(e[o]))&&(t&&(t+=" "),t+=r);else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function m(){for(var e,o,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(o=V(e))&&(t&&(t+=" "),t+=o);return t}const p="outline-0 min-w-0 h-7 px-1.5 bg-transparent focus:ring-1 ring-inset ring-macaron-active text-macaron-text text-macaron-base placeholder:text-macaron-disabledText",y=function({title:o,values:r,onChange:t,edgeIcons:h,edgeNames:d={top:"Top",right:"Right",bottom:"Bottom",left:"Left"},toggleIcon:b}){const c=B([r.top,r.right,r.bottom,r.left]),[l,x]=s.useState(c===_),[n,u]=s.useState(void 0);return s.useEffect(()=>{l||u(void 0)},[l]),I(R,{separate:l,children:[l?I("div",{className:"relative bg-macaron-uiBackground rounded grid grid-cols-[repeat(4,1fr)_1.25rem]",children:[i(g,{className:m(p,"rounded-l"),value:r.top,onChangeValue:a=>t("top",a),onFocus:()=>u("top")}),i(g,{className:m(p,"border-l border-macaron-separator"),value:r.right,onChangeValue:a=>t("right",a),onFocus:()=>u("right")}),i(g,{className:m(p,"border-l border-macaron-separator"),value:r.bottom,onChangeValue:a=>t("bottom",a),onFocus:()=>u("bottom")}),i(g,{className:m(p,"border-l border-macaron-separator"),value:r.left,onChangeValue:a=>t("left",a),onFocus:()=>u("left")}),i(k,{text:n?`${d[n]} ${o}`:`Separate ${o}`,children:i("div",{className:"absolute right-1.5 top-0 bottom-0 flex items-center text-macaron-disabledText text-2xs font-bold",children:i(T,{className:"text-xs",icon:h[n??"all"]})})})]}):i($,{icon:h.all,tooltip:o,value:c,onChange:a=>t("all",a)}),i(L,{icon:b,value:l,onChange:a=>x(a)})]})},R=N.div`
  display: grid;
  ${e=>e.separate?w`
          grid-template-columns: 1fr 20px;
        `:w`
          grid-template-columns: 1fr 1fr 1fr;
          > :last-child {
            grid-column: 3/4;
            justify-self: end;
          }
        `}
  gap: 8px;
  align-items: center;
`;try{y.displayName="SeparableInput",y.__docgenInfo={description:"",displayName:"SeparableInput",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"{ top: string | unique symbol; right: string | unique symbol; bottom: string | unique symbol; left: string | unique symbol; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:'(edge: "all" | "right" | "top" | "bottom" | "left", value: string) => boolean'}},edgeIcons:{defaultValue:null,description:"",name:"edgeIcons",required:!0,type:{name:"{ all: IconifyIcon; top: IconifyIcon; right: IconifyIcon; bottom: IconifyIcon; left: IconifyIcon; }"}},edgeNames:{defaultValue:{value:`{\r
    top: "Top",\r
    right: "Right",\r
    bottom: "Bottom",\r
    left: "Left",\r
  }`},description:"",name:"edgeNames",required:!1,type:{name:"{ top: string; right: string; bottom: string; left: string; }"}},toggleIcon:{defaultValue:null,description:"",name:"toggleIcon",required:!0,type:{name:"IconifyIcon"}}}}}catch{}const E={width:24,height:24,body:'<path fill="currentColor" d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/>'},F=`<g fill="none">
<rect x="7" y="3" width="10" height="2" rx="1" fill="currentColor"/>
<rect x="7" y="19" width="10" height="2" rx="1" fill="currentColor"/>
<rect x="3" y="7" width="2" height="10" rx="1" fill="currentColor"/>
<rect x="19" y="7" width="2" height="10" rx="1" fill="currentColor"/>

</g>`,j=24,z=24,H={body:F,width:j,height:z},M=`<g fill="none">
<rect opacity="0.33" x="21" y="7" width="10" height="4" transform="rotate(90 21 7)" fill="currentColor"/>
<rect opacity="0.33" x="21" y="17" width="4" height="18" transform="rotate(90 21 17)" fill="currentColor"/>
<rect opacity="0.33" x="7" y="7" width="10" height="4" transform="rotate(90 7 7)" fill="currentColor"/>
<rect x="21" y="3" width="4" height="18" transform="rotate(90 21 3)" fill="currentColor"/>

</g>`,P=24,W=24,A={body:M,width:P,height:W},O=`<g fill="none">
<rect opacity="0.33" x="17" y="21" width="10" height="4" transform="rotate(-180 17 21)" fill="currentColor"/>
<rect opacity="0.33" x="7" y="21" width="4" height="18" transform="rotate(-180 7 21)" fill="currentColor"/>
<rect opacity="0.33" x="17" y="7" width="10" height="4" transform="rotate(-180 17 7)" fill="currentColor"/>
<rect x="21" y="21" width="4" height="18" transform="rotate(-180 21 21)" fill="currentColor"/>

</g>`,U=24,D=24,G={body:O,width:U,height:D},J=`<g fill="none">
<rect opacity="0.33" x="3" y="17" width="10" height="4" transform="rotate(-90 3 17)" fill="currentColor"/>
<rect opacity="0.33" x="3" y="7" width="4" height="18" transform="rotate(-90 3 7)" fill="currentColor"/>
<rect opacity="0.33" x="17" y="17" width="10" height="4" transform="rotate(-90 17 17)" fill="currentColor"/>
<rect x="3" y="21" width="4" height="18" transform="rotate(-90 3 21)" fill="currentColor"/>

</g>`,K=24,Q=24,X={body:J,width:K,height:Q},Y=`<g fill="none">
<rect opacity="0.33" x="7" y="3" width="10" height="4" fill="currentColor"/>
<rect opacity="0.33" x="17" y="3" width="4" height="18" fill="currentColor"/>
<rect opacity="0.33" x="7" y="17" width="10" height="4" fill="currentColor"/>
<rect x="3" y="3" width="4" height="18" fill="currentColor"/>

</g>`,Z=24,tt=24,et={body:Y,width:Z,height:tt},vt={title:"SeparableInput",component:y},f=()=>{const[e,o]=s.useState(0),[r,t]=s.useState(0),[h,d]=s.useState(0),[b,c]=s.useState(0);return i(q,{children:i("div",{className:"w-[232px]",children:i(y,{title:"Border Width",values:{top:String(e),right:String(r),bottom:String(h),left:String(b)},edgeIcons:{all:E,top:A,right:G,bottom:X,left:et},toggleIcon:H,onChange:(l,x)=>{const n=Number.parseFloat(x);if(isNaN(n))return!1;switch(l){case"top":o(n);break;case"right":t(n);break;case"bottom":d(n);break;case"left":c(n);break;case"all":o(n),t(n),d(n),c(n);break}return!0}})})})};var v,C,S;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  return <TooltipProvider>\r
      <div className="w-[232px]">\r
        <SeparableInput title="Border Width" values={{
        top: String(top),
        right: String(right),
        bottom: String(bottom),
        left: String(left)
      }} edgeIcons={{
        all: icon_line_weight,
        top: edgeTopIcon,
        right: edgeRightIcon,
        bottom: edgeBottomIcon,
        left: edgeLeftIcon
      }} toggleIcon={eachEdgeIcon} onChange={(edge, value) => {
        const numValue = Number.parseFloat(value);
        if (isNaN(numValue)) {
          return false;
        }
        switch (edge) {
          case "top":
            setTop(numValue);
            break;
          case "right":
            setRight(numValue);
            break;
          case "bottom":
            setBottom(numValue);
            break;
          case "left":
            setLeft(numValue);
            break;
          case "all":
            setTop(numValue);
            setRight(numValue);
            setBottom(numValue);
            setLeft(numValue);
            break;
        }
        return true;
      }} />\r
      </div>\r
    </TooltipProvider>;
}`,...(S=(C=f.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Ct=["Basic"];export{f as Basic,Ct as __namedExportsOrder,vt as default};
