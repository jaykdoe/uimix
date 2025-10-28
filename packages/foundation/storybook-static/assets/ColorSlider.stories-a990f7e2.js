import{j as c,a as F}from"./jsx-runtime-862f31f3.js";import{r as s}from"./index-c013ead5.js";import{C as l}from"./Color-e0cabd82.js";import{C as n}from"./ColorSlider-1d1d896c.js";import"./_commonjsHelpers-725317a4.js";import"./index-0f742701.js";import"./emotion-styled.browser.esm-60a14a7a.js";import"./extends-4c19d496.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-f576544e.js";import"./usePointerStroke-dbf75631.js";import"./emotion-react.browser.esm-f95a2f55.js";import"./clamp-3c89e472.js";import"./isObjectLike-3306fff8.js";import"./isSymbol-35a4d18b.js";const _={component:n},t=()=>{const[r,a]=s.useState(new l({h:0,s:1,v:1})),[e,i]=s.useState(new l({h:0,s:1,v:1}));return c("div",{className:"flex flex-col gap-4",children:[F(n,{direction:"right",length:160,handleSize:12,railWidth:8,color:r.toHex(),colorStops:["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],value:r.h,onChange:o=>{a(new l({...r,h:o}))}}),F(n,{direction:"right",length:160,handleSize:12,railWidth:8,color:e.toHex(),colorStops:["#FF000000","#FF0000FF"],value:e.a,onChange:o=>{i(new l({...e,a:o}))}}),c("div",{className:"flex gap-4",children:[F(n,{direction:"top",length:160,handleSize:12,railWidth:8,color:r.toHex(),colorStops:["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],value:r.h,onChange:o=>{a(new l({...r,h:o}))}}),F(n,{direction:"top",length:160,handleSize:12,railWidth:8,color:e.toHex(),colorStops:["#FF000000","#FF0000FF"],value:e.a,onChange:o=>{i(new l({...e,a:o}))}})]})]})};var h,d,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [color0, setColor0] = useState(new Color({
    h: 0,
    s: 1,
    v: 1
  }));
  const [color1, setColor1] = useState(new Color({
    h: 0,
    s: 1,
    v: 1
  }));
  return <div className="flex flex-col gap-4">\r
      <ColorSlider direction="right" length={160} handleSize={12} railWidth={8} color={color0.toHex()} colorStops={["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FF0000"]} value={color0.h} onChange={h => {
      setColor0(new Color({
        ...color0,
        h
      }));
    }} />\r
      <ColorSlider direction="right" length={160} handleSize={12} railWidth={8} color={color1.toHex()} colorStops={["#FF000000", "#FF0000FF"]} value={color1.a} onChange={a => {
      setColor1(new Color({
        ...color1,
        a
      }));
    }} />\r
      <div className="flex gap-4">\r
        <ColorSlider direction="top" length={160} handleSize={12} railWidth={8} color={color0.toHex()} colorStops={["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FF0000"]} value={color0.h} onChange={h => {
        setColor0(new Color({
          ...color0,
          h
        }));
      }} />\r
        <ColorSlider direction="top" length={160} handleSize={12} railWidth={8} color={color1.toHex()} colorStops={["#FF000000", "#FF0000FF"]} value={color1.a} onChange={a => {
        setColor1(new Color({
          ...color1,
          a
        }));
      }} />\r
      </div>\r
    </div>;
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const B=["Basic"];export{t as Basic,B as __namedExportsOrder,_ as default};
