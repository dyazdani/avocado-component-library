import{A,j as s}from"./AvocadoThemeContext-396ee3d2.js";import{r as V}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const e=({id:t,name:g,min:y,max:v,step:x,disabled:b,value:_,onChange:S})=>{const q=V.useContext(A);return s.jsx("input",{className:`avocado-slider ${q}`,type:"range",id:t,name:g,disabled:b,min:y,max:v,step:x,"data-testid":"avocado-slider",value:_,onChange:S})};try{e.displayName="AvocadoSlider",e.__docgenInfo={description:"",displayName:"AvocadoSlider",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const E={title:"Components/AvocadoSlider",component:e,tags:["autodocs"]},a={render:()=>s.jsx(e,{})},r={render:()=>s.jsx(e,{disabled:!0})},n={args:{}};var o,d,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <AvocadoSlider />
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <AvocadoSlider disabled={true} />
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const P=["Primary","Disabled","Playground"];export{r as Disabled,n as Playground,a as Primary,P as __namedExportsOrder,E as default};
//# sourceMappingURL=AvocadoSlider.stories-81207d8a.js.map
