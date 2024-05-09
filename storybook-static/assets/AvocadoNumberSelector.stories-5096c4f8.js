import{A as j,j as d}from"./AvocadoThemeContext-396ee3d2.js";import{r as O}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const w=(a,n,e)=>e?!(a&&+e<+a||n&&+e>+n):!0,r=({name:a,id:n,min:e,max:u,step:E,disabled:_,placeholder:q,value:c,onChange:A})=>{const V=O.useContext(j),C=!w(e,u,c);return d.jsx("input",{className:`avocado-number-selector ${V} ${C&&"beyond-min-max"}`,type:"number",name:a,id:n,min:e,max:u,step:E,disabled:_,placeholder:q,"data-testid":"avocado-number-selector",value:c,onChange:A})};try{r.displayName="AvocadoNumberSelector",r.__docgenInfo={description:"",displayName:"AvocadoNumberSelector",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const I={title:"Components/AvocadoNumberSelector",component:r,tags:["autodocs"]},t={render:()=>d.jsx(r,{placeholder:"Enter number here"})},o={render:()=>d.jsx(r,{disabled:!0})},s={render:()=>d.jsx(r,{min:"0",max:"100",value:"101"})},l={args:{min:"0",max:"100",placeholder:"Enter number here"}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <AvocadoNumberSelector placeholder="Enter number here" />
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,f,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <AvocadoNumberSelector disabled={true} />
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AvocadoNumberSelector min="0" max="100" value="101" />
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,N,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    min: '0',
    max: '100',
    placeholder: 'Enter number here'
    //TODO: How to include an onChange function that will let the number selector button change the number. It is not currently working in Storybook.
  }
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const T=["Primary","Disabled","NumberOutsideRange","Playground"];export{o as Disabled,s as NumberOutsideRange,l as Playground,t as Primary,T as __namedExportsOrder,I as default};
//# sourceMappingURL=AvocadoNumberSelector.stories-5096c4f8.js.map