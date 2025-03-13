import{d as A,b as l,e as p,f as E,n as g,o as c}from"./vue.esm-bundler-HL1VQ31G.js";const o=A({__name:"CustomBadge",props:{color:{default:"blue"},size:{default:"md"},variant:{default:"solid"},icon:{default:""},iconPosition:{default:"leading"}},setup(a){return(e,F)=>(c(),l("span",{class:g(["custom-badge",[`custom-badge--${e.color}`,`custom-badge--${e.size}`,{"custom-badge--outline":e.variant==="outline"}]])},[e.icon&&e.iconPosition==="leading"?(c(),l("i",{key:0,class:g(["custom-badge__icon","icon",`icon--${e.size}`,e.icon])},null,2)):p("",!0),E(e.$slots,"default"),e.icon&&e.iconPosition==="trailing"?(c(),l("i",{key:1,class:g(["custom-badge__icon","custom-badge__icon--trailing","icon",`icon--${e.size}`,e.icon])},null,2)):p("",!0)],2))}}),N={title:"Components/CustomBadge",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:["blue","green","red","purple","orange","gray"],description:"뱃지의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"blue"}}},variant:{control:"select",options:["solid","outline"],description:"뱃지의 스타일 변형을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},size:{control:"select",options:["sm","md","lg"],description:"뱃지의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},icon:{control:"select",options:["","icon--check","icon--close","icon--info","icon--warning","icon--bell","icon--star"],description:"뱃지에 표시할 아이콘 클래스를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},iconPosition:{control:"select",options:["leading","trailing"],description:"아이콘의 위치를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"leading"}}},default:{description:"뱃지에 표시될 내용을 지정합니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}}},s={render:a=>({components:{CustomBadge:o},setup(){return{args:a}},template:'<CustomBadge v-bind="args">기본</CustomBadge>'}),args:{color:"blue",variant:"solid",size:"md",icon:""}},t={render:()=>({components:{CustomBadge:o},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge color="blue">Blue</CustomBadge>
        <CustomBadge color="green">Green</CustomBadge>
        <CustomBadge color="red">Red</CustomBadge>
        <CustomBadge color="purple">Purple</CustomBadge>
        <CustomBadge color="orange">Orange</CustomBadge>
        <CustomBadge color="gray">Gray</CustomBadge>
      </div>
    `})},r={render:()=>({components:{CustomBadge:o},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge variant="solid">Solid</CustomBadge>
        <CustomBadge variant="outline">Outline</CustomBadge>
      </div>
    `})},n={render:()=>({components:{CustomBadge:o},template:`
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <CustomBadge size="sm">SM</CustomBadge>
        <CustomBadge size="md">MD</CustomBadge>
        <CustomBadge size="lg">LG</CustomBadge>
      </div>
    `})},d={render:a=>({components:{CustomBadge:o},setup(){return{args:a}},template:'<CustomBadge v-bind="args">99+</CustomBadge>'}),args:{size:"md",icon:""}},i={render:a=>({components:{CustomBadge:o},setup(){return{args:a}},template:'<CustomBadge v-bind="args">알림</CustomBadge>'}),args:{color:"blue",variant:"solid",size:"md",icon:"icon--bell"}},m={render:a=>({components:{CustomBadge:o},setup(){return{args:a}},template:'<CustomBadge v-bind="args">알림</CustomBadge>'}),args:{color:"purple",variant:"solid",size:"md",icon:"icon--bell",iconPosition:"trailing"}},u={render:()=>({components:{CustomBadge:o},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge color="green" variant="outline">Active</CustomBadge>
        <CustomBadge color="orange" variant="outline" >Pending</CustomBadge>
        <CustomBadge color="red" variant="outline">Failed</CustomBadge>
        <CustomBadge color="gray" variant="outline">Inactive</CustomBadge>
      </div>
    `})};var C,B,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomBadge v-bind="args">기본</CustomBadge>'
  }),
  args: {
    color: 'blue',
    variant: 'solid',
    size: 'md',
    icon: ''
  }
}`,...(v=(B=s.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,b,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomBadge
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge color="blue">Blue</CustomBadge>
        <CustomBadge color="green">Green</CustomBadge>
        <CustomBadge color="red">Red</CustomBadge>
        <CustomBadge color="purple">Purple</CustomBadge>
        <CustomBadge color="orange">Orange</CustomBadge>
        <CustomBadge color="gray">Gray</CustomBadge>
      </div>
    \`
  })
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var z,S,w;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomBadge
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge variant="solid">Solid</CustomBadge>
        <CustomBadge variant="outline">Outline</CustomBadge>
      </div>
    \`
  })
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var P,V,h;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomBadge
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <CustomBadge size="sm">SM</CustomBadge>
        <CustomBadge size="md">MD</CustomBadge>
        <CustomBadge size="lg">LG</CustomBadge>
      </div>
    \`
  })
}`,...(h=(V=n.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var x,G,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomBadge v-bind="args">99+</CustomBadge>'
  }),
  args: {
    size: 'md',
    icon: ''
  }
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var k,O,$;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomBadge v-bind="args">알림</CustomBadge>'
  }),
  args: {
    color: 'blue',
    variant: 'solid',
    size: 'md',
    icon: 'icon--bell'
  }
}`,...($=(O=i.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var D,M,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomBadge v-bind="args">알림</CustomBadge>'
  }),
  args: {
    color: 'purple',
    variant: 'solid',
    size: 'md',
    icon: 'icon--bell',
    iconPosition: 'trailing'
  }
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var W,_,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomBadge
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge color="green" variant="outline">Active</CustomBadge>
        <CustomBadge color="orange" variant="outline" >Pending</CustomBadge>
        <CustomBadge color="red" variant="outline">Failed</CustomBadge>
        <CustomBadge color="gray" variant="outline">Inactive</CustomBadge>
      </div>
    \`
  })
}`,...(T=(_=u.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const j=["Default","Colors","Variants","Sizes","Rounded","WithIcon","WithTrailingIcon","Status"];export{t as Colors,s as Default,d as Rounded,n as Sizes,u as Status,r as Variants,i as WithIcon,m as WithTrailingIcon,j as __namedExportsOrder,N as default};
