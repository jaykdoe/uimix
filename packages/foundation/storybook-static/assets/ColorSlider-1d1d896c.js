import{j as v,a as g}from"./jsx-runtime-862f31f3.js";import{s as c}from"./emotion-styled.browser.esm-60a14a7a.js";import{u as _}from"./usePointerStroke-dbf75631.js";import{c as w}from"./emotion-react.browser.esm-f95a2f55.js";import{c as $}from"./clamp-3c89e472.js";function q(r,e,t,i="0px",n="0px"){return w`
    background-color: ${r};
    background-image: linear-gradient(
        45deg,
        ${e} 25%,
        transparent 25%,
        transparent 75%,
        ${e} 75%,
        ${e}
      ),
      linear-gradient(
        45deg,
        ${e} 25%,
        transparent 25%,
        transparent 75%,
        ${e} 75%,
        ${e}
      );
    background-position: ${i} ${n},
      calc(${t} / 2 + ${i}) calc(${t} / 2 + ${n});
    background-size: ${t} ${t};
  `}const b=c.div`
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 0 1px inset rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  &::before {
    content: "";
    background-color: currentColor;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    box-shadow: 0 0 0 1px inset rgba(0, 0, 0, 0.15);
  }
`,V=c.div`
  display: grid;
  place-items: center;
  position: relative;
  z-index: 0; /* Create stacking context */
`,k=c.div`
  box-shadow: 0 0 0 1px inset rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";

    z-index: -1;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    ${q("white","#aaa","8px")}
  }
`,j=c.div`
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;function C(r,e,t,i){const n=t/2/e,d=(e-t)/e,s=i.map(([o,l])=>`${o} ${(l*d+n)*100}%`);return`linear-gradient(${r==="right"?"to right":"to top"}, ${s.join(",")})`}const y=({direction:r,length:e,handleSize:t,railWidth:i,color:n,colorStops:d,value:s,onChange:o,onChangeEnd:l})=>{const x=C(r,e,t,d.map((a,p)=>[a,p/(d.length-1)])),u=e-t,h=_({onBegin:a=>{o==null||o(m(a))},onMove:a=>{o==null||o(m(a))},onEnd:a=>{l==null||l(m(a))}}),m=a=>{const p=a.currentTarget.getBoundingClientRect();if(r==="right"){const f=a.clientX-p.left-t/2;return $(f/u,0,1)}else{const f=a.clientY-p.top-t/2;return $(1-f/u,0,1)}};return v(V,{tabIndex:0,style:r==="right"?{width:`${e}px`,height:`${t}px`}:{height:`${e}px`,width:`${t}px`},...h,children:[g(k,{style:{borderRadius:`${i/2}px`,...r==="right"?{width:e,height:i}:{height:e,width:i}},children:g(j,{style:{background:x}})}),g(b,{style:{position:"absolute",width:`${t}px`,height:`${t}px`,color:n,...r==="right"?{left:`${u*s}px`,top:0}:{left:0,top:`${u*(1-s)}px`}}})]})};try{b.displayName="ColorHandle",b.__docgenInfo={description:"",displayName:"ColorHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{y.displayName="ColorSlider",y.__docgenInfo={description:"",displayName:"ColorSlider",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"top"'}]}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},handleSize:{defaultValue:null,description:"",name:"handleSize",required:!0,type:{name:"number"}},railWidth:{defaultValue:null,description:"",name:"railWidth",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},colorStops:{defaultValue:null,description:"",name:"colorStops",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},onChangeEnd:{defaultValue:null,description:"",name:"onChangeEnd",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}export{y as C,b as a,q as c};
