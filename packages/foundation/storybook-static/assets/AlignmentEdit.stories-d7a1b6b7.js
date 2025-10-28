import{a as e,j as a}from"./jsx-runtime-862f31f3.js";import{r as g}from"./index-c013ead5.js";import{s as M}from"./emotion-styled.browser.esm-60a14a7a.js";import{c as t}from"./colors-0c427165.js";import{i as b}from"./_isIterateeCall-694e5646.js";import{t as T,c as B}from"./clamp-3c89e472.js";import"./_commonjsHelpers-725317a4.js";import"./extends-4c19d496.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-f576544e.js";import"./_isIndex-7d0950bc.js";import"./isObjectLike-3306fff8.js";import"./isSymbol-35a4d18b.js";var A=1/0,J=17976931348623157e292;function k(i){if(!i)return i===0?i:0;if(i=T(i),i===A||i===-A){var c=i<0?-1:1;return c*J}return i===i?i:0}var V=Math.ceil,q=Math.max;function Y(i,c,n,r){for(var d=-1,h=q(V((c-i)/(n||1)),0),o=Array(h);h--;)o[r?h:++d]=i,i+=n;return o}function F(i){return function(c,n,r){return r&&typeof r!="number"&&b(c,n,r)&&(n=r=void 0),c=k(c),n===void 0?(n=c,c=0):n=k(n),r=r===void 0?c<n?1:-1:k(r),Y(c,n,r,i)}}var H=F();const j=H,I=M.svg`
  aspect-ratio: 1;
  transform: ${i=>i.direction==="y"?"matrix(0, 1, 1, 0, 0 ,0)":"none"};
  * {
    pointer-events: none;
  }
`,O=M.div`
  background: ${t.uiBackground};
  border-radius: 4px;
  display: flex;
  justify-content: center;
`,f=["start","center","end"],X=({className:i,direction:c,align:n,justify:r,onChange:d})=>{let h;if(n&&r){const l=f.indexOf(n);h=f.indexOf(r)+l*3}else h=-1;const[o,x]=g.useState(-1),u=j(0,9).map(l=>h===l?1:o===l?.3:0),p=l=>{const v=l%3,w=Math.floor(l/3);d(f[w],f[v])},s=l=>{const v=l.nativeEvent.offsetX/l.currentTarget.clientWidth,w=l.nativeEvent.offsetY/l.currentTarget.clientHeight,_=B(Math.floor(v*3),0,2),N=B(Math.floor(w*3),0,2);return _+N*3};return e(O,{className:i,children:a(I,{direction:c,viewBox:"0 0 64 64",onMouseMove:l=>{x(s(l))},onClick:l=>{p(s(l))},onMouseLeave:()=>{x(-1)},children:[a("g",{opacity:u[0],children:[e("rect",{x:"6",y:"6",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"14",y:"6",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"22",y:"6",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[1],children:[e("rect",{x:"22",y:"6",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"30",y:"6",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"38",y:"6",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[2],children:[e("rect",{x:"38",y:"6",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"46",y:"6",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"54",y:"6",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[3],children:[e("rect",{x:"6",y:"24",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"14",y:"27",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"22",y:"24",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[4],children:[e("rect",{x:"22",y:"24",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"30",y:"27",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"38",y:"24",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[5],children:[e("rect",{x:"38",y:"24",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"46",y:"27",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"54",y:"24",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[6],children:[e("rect",{x:"6",y:"42",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"14",y:"48",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"22",y:"42",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[7],children:[e("rect",{x:"22",y:"42",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"30",y:"48",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"38",y:"42",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:u[8],children:[e("rect",{x:"38",y:"42",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"46",y:"48",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"54",y:"42",width:"4",height:"16",rx:"1",fill:t.active})]})]})})},D=({className:i,direction:c,align:n,onChange:r})=>{const d=n?f.indexOf(n):-1,[h,o]=g.useState(-1),x=j(0,3).map(s=>d===s?1:h===s?.3:0),u=s=>{r(f[s])},p=s=>{const l=s.nativeEvent.offsetY/s.currentTarget.clientHeight;return B(Math.floor(l*3),0,2)};return a(I,{direction:c,viewBox:"0 0 64 64",className:i,onMouseMove:s=>{o(p(s))},onClick:s=>{u(p(s))},onMouseLeave:()=>{o(-1)},children:[e("rect",{width:"64",height:"64",rx:"4",fill:t.uiBackground}),a("g",{opacity:x[0],children:[e("rect",{x:"6",y:"6",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"30",y:"6",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"54",y:"6",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:x[1],children:[e("rect",{x:"6",y:"24",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"30",y:"27",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"54",y:"24",width:"4",height:"16",rx:"1",fill:t.active})]}),a("g",{opacity:x[2],children:[e("rect",{x:"6",y:"42",width:"4",height:"16",rx:"1",fill:t.active}),e("rect",{x:"30",y:"48",width:"4",height:"10",rx:"1",fill:t.active}),e("rect",{x:"54",y:"42",width:"4",height:"16",rx:"1",fill:t.active})]})]})},m=({className:i,align:c,direction:n,justify:r,onChange:d})=>r==="spaceBetween"?e(D,{className:i,direction:n,align:c,onChange:h=>d(h,r)}):e(X,{className:i,direction:n,align:c,justify:r,onChange:d});try{m.displayName="AlignmentEdit",m.__docgenInfo={description:"",displayName:"AlignmentEdit",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"spaceBetween"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(align?: StackAlign | undefined, justify?: StackJustify | undefined) => void"}}}}}catch{}const te={title:"AlignmentEdit",component:m},y=()=>{const[i,c]=g.useState("start"),[n,r]=g.useState("start"),[d,h]=g.useState("x");return a("div",{className:"flex flex-col gap-2",children:[e(m,{className:"w-16",direction:d,align:i,justify:n,onChange:(o,x)=>{o&&c(o),x&&r(x)}}),e("p",{children:e("div",{style:{display:"inline-block"},children:a("select",{value:d,onChange:o=>{h(o.currentTarget.value)},children:[e("option",{value:"x",children:"X"}),e("option",{value:"y",children:"Y"})]})})}),e("p",{children:e("div",{style:{display:"inline-block"},children:a("select",{value:n==="spaceBetween"?"spaceBetween":"packed",onChange:o=>{r(o.currentTarget.value==="spaceBetween"?"spaceBetween":"start")},children:[e("option",{value:"packed",children:"Packed"}),e("option",{value:"spaceBetween",children:"Space Between"})]})})}),a("p",{children:["Align: ",i]}),a("p",{children:["Justify: ",n]})]})};var E,S,C;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [align, setAlign] = useState<StackAlign>("start");
  const [justify, setJustify] = useState<StackJustify>("start");
  const [direction, setDirection] = useState<"x" | "y">("x");
  return <div className="flex flex-col gap-2">\r
      <AlignmentEdit className="w-16" direction={direction} align={align} justify={justify} onChange={(align, justify) => {
      if (align) {
        setAlign(align);
      }
      if (justify) {
        setJustify(justify);
      }
    }} />\r
      <p>\r
        <div style={{
        display: "inline-block"
      }}>\r
          <select value={direction} onChange={event => {
          setDirection(event.currentTarget.value as "x" | "y");
        }}>\r
            <option value="x">X</option>\r
            <option value="y">Y</option>\r
          </select>\r
        </div>\r
      </p>\r
      <p>\r
        <div style={{
        display: "inline-block"
      }}>\r
          <select value={justify === "spaceBetween" ? "spaceBetween" : "packed"} onChange={event => {
          setJustify(event.currentTarget.value === "spaceBetween" ? "spaceBetween" : "start");
        }}>\r
            <option value="packed">Packed</option>\r
            <option value="spaceBetween">Space Between</option>\r
          </select>\r
        </div>\r
      </p>\r
      <p>Align: {align}</p>\r
      <p>Justify: {justify}</p>\r
    </div>;
}`,...(C=(S=y.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ie=["Basic"];export{y as Basic,ie as __namedExportsOrder,te as default};
