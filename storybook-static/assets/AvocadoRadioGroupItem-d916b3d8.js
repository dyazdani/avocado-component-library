import{A as l,j as a}from"./AvocadoThemeContext-396ee3d2.js";import{A as p}from"./AvocadoLabel-72f90084.js";import{r as s}from"./index-c013ead5.js";const c=({name:e,value:t,checked:o,id:n,disabled:d,required:r})=>{const u=s.useContext(l);return a.jsx("input",{className:`avocado-input-radio ${u}`,type:"radio",name:e,id:n,value:t,checked:o,disabled:d,required:r,"data-testid":"avocado-input-radio"})},i=({id:e,name:t,label:o,value:n,checked:d})=>{const r=s.useContext(l);return a.jsxs("div",{"data-testid":`avocado-radio-group-item-${e}`,className:`avocado-radio-group-item ${r}`,children:[a.jsx(c,{name:t,id:e,value:n,checked:d,"data-testid":"avocado-input-radio"}),a.jsx(p,{htmlFor:e,label:o})]})};try{i.displayName="AvocadoRadioGroupItem",i.__docgenInfo={description:"",displayName:"AvocadoRadioGroupItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}export{i as A};
//# sourceMappingURL=AvocadoRadioGroupItem-d916b3d8.js.map