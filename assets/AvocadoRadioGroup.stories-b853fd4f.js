import{A as C,j as e}from"./AvocadoThemeContext-396ee3d2.js";import{r as E,R as p}from"./index-c013ead5.js";import{A as i}from"./AvocadoRadioGroupItem-d916b3d8.js";import"./_commonjsHelpers-725317a4.js";import"./AvocadoLabel-72f90084.js";const a=({name:o,legend:c,disabled:L,children:S})=>{const l=E.useContext(C),m=p.Children.map(S,q=>p.cloneElement(q,{name:o}));return c?e.jsxs("fieldset",{"data-testid":"avocado-radio-group",className:`avocado-radio-group ${l}`,children:[e.jsx("legend",{"data-testid":"radio-legend",children:c}),m]}):e.jsx("fieldset",{"data-testid":"avocado-radio-group",className:`avocado-radio-group ${l}`,children:m})};try{a.displayName="AvocadoRadioGroup",a.__docgenInfo={description:"",displayName:"AvocadoRadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/AvocadoRadioGroup",component:a,tags:["autodocs"]},r={render:()=>e.jsx(a,{legend:"Avocado Radio Group",name:"avocado-radio-group"})},d={render:()=>e.jsx(a,{disabled:!0,legend:"Avocado Radio Group",name:"avocado-radio-group"})},s={args:{name:"radio-group",legend:"Legend text here"}},n={args:{name:"radio-group",legend:"Legend text here"},render:o=>e.jsx(a,{...o,children:e.jsx(i,{id:"",name:"",label:""})})},t={render:o=>e.jsxs(a,{...o,children:[e.jsx(i,{id:"",name:"",label:""}),e.jsx(i,{id:"",name:"",label:""}),e.jsx(i,{id:"",name:"",label:""})]})};var u,g,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AvocadoRadioGroup legend="Avocado Radio Group" name="avocado-radio-group" />
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,A,R;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AvocadoRadioGroup disabled={true} legend="Avocado Radio Group" name="avocado-radio-group" />
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var G,b,h;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: "radio-group",
    legend: "Legend text here"
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,y,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: "radio-group",
    legend: "Legend text here"
  },
  render: args => <AvocadoRadioGroup {...args}>
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
      </AvocadoRadioGroup>
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,_,N;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <AvocadoRadioGroup {...args}>
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
      </AvocadoRadioGroup>
}`,...(N=(_=t.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const T=["Primary","Disabled","Playground","OneItem","ManyItems"];export{d as Disabled,t as ManyItems,n as OneItem,s as Playground,r as Primary,T as __namedExportsOrder,$ as default};
//# sourceMappingURL=AvocadoRadioGroup.stories-b853fd4f.js.map
