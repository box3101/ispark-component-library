import{d as $e,j as g,k as B,w as N,l as Ie,m as Be,b as n,e as C,g as i,t as d,n as U,F as P,p as q,v as G,q as Y,o as l}from"./vue.esm-bundler-X6O22w2E.js";const Ne={key:0,class:"custom-date-picker__label"},Ue={class:"custom-date-picker__wrapper"},je=["disabled"],He={class:"custom-date-picker__selected-date"},qe={key:0,class:"custom-date-picker__date-text"},Ge={key:1,class:"custom-date-picker__placeholder"},Je={key:0,class:"custom-date-picker__date-text"},Qe={key:1,class:"custom-date-picker__date-text"},Xe={key:2,class:"custom-date-picker__placeholder"},Ze={key:0,class:"custom-date-picker__calendar"},et={class:"custom-date-picker__header"},tt={class:"custom-date-picker__month-year-selector"},at={key:0,class:"custom-date-picker__selector-dropdown"},rt={class:"custom-date-picker__selector-row"},st=["value"],ot=["value"],nt={class:"custom-date-picker__weekdays"},lt={class:"custom-date-picker__days"},it=["disabled","onClick"],mt={key:1,class:"custom-date-picker__help"},dt={key:2,class:"custom-date-picker__error"},D=$e({__name:"CustomDatePicker",props:{modelValue:{default:void 0},startDate:{default:void 0},endDate:{default:void 0},mode:{default:"single"},label:{default:""},placeholder:{default:"날짜 선택"},help:{default:""},error:{default:""},disabled:{type:Boolean,default:!1},size:{default:"md"},minDate:{default:void 0},maxDate:{default:void 0},yearRange:{default:()=>{const o=new Date().getFullYear();return Array.from({length:21},(h,r)=>o-10+r)}}},emits:["update:modelValue","update:startDate","update:endDate"],setup(o,{emit:h}){const r=o,p=h,S=g(null),k=g(!1),s=g(new Date().getMonth()),m=g(new Date().getFullYear()),x=g(r.modelValue||null),u=g(r.startDate||null),b=g(r.endDate||null),$=g(!1),v=g(!1),j=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Pe=B(()=>{if(Array.isArray(r.yearRange)&&r.yearRange.length>0)return r.yearRange;const e=new Date().getFullYear();return Array.from({length:21},(t,a)=>e-10+a)});N(()=>r.modelValue,e=>{r.mode==="single"&&e&&(x.value=e)}),N(()=>r.startDate,e=>{r.mode==="range"&&e&&(u.value=e)}),N(()=>r.endDate,e=>{r.mode==="range"&&e&&(b.value=e)});const z=e=>{const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),f=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${f}`},Se=()=>{r.disabled||(k.value=!k.value,v.value=!1,k.value&&(r.mode==="single"&&x.value?(s.value=x.value.getMonth(),m.value=x.value.getFullYear()):r.mode==="range"&&u.value&&(s.value=u.value.getMonth(),m.value=u.value.getFullYear())))},ze=()=>{v.value=!v.value},H=e=>{S.value&&!S.value.contains(e.target)&&(k.value=!1,v.value=!1)},Me=()=>{s.value===0?(s.value=11,m.value--):s.value--,v.value=!1},Ye=()=>{s.value===11?(s.value=0,m.value++):s.value++,v.value=!1},Re=e=>{if(!e.isCurrentMonth||e.disabled)return;const t=new Date(e.year,e.month,e.day);r.mode==="single"?(p("update:modelValue",t),k.value=!1):r.mode==="range"&&(!u.value||$.value?(u.value&&t<u.value?(p("update:endDate",u.value),p("update:startDate",t)):p("update:endDate",t),$.value=!1,k.value=!1):(p("update:startDate",t),p("update:endDate",null),$.value=!0))},Ve=e=>{const t=[];if(e.isCurrentMonth||t.push("custom-date-picker__day--other-month"),e.isToday&&t.push("custom-date-picker__day--today"),r.mode==="single"&&x.value){const a=x.value;e.year===a.getFullYear()&&e.month===a.getMonth()&&e.day===a.getDate()&&t.push("custom-date-picker__day--selected")}else if(r.mode==="range"&&(u.value&&e.year===u.value.getFullYear()&&e.month===u.value.getMonth()&&e.day===u.value.getDate()&&t.push("custom-date-picker__day--range-start"),b.value&&e.year===b.value.getFullYear()&&e.month===b.value.getMonth()&&e.day===b.value.getDate()&&t.push("custom-date-picker__day--range-end"),u.value&&b.value)){const a=new Date(e.year,e.month,e.day);a>u.value&&a<b.value&&t.push("custom-date-picker__day--in-range")}return t},Le=B(()=>{const e=[],t=new Date,f=new Date(m.value,s.value,1).getDay(),Oe=new Date(m.value,s.value+1,0).getDate(),Ae=new Date(m.value,s.value,0).getDate();for(let c=f-1;c>=0;c--){const y=s.value===0?11:s.value-1,_=s.value===0?m.value-1:m.value,w=Ae-c,M=new Date(_,y,w),Te=I(M);e.push({date:M,day:w,month:y,year:_,isCurrentMonth:!1,isToday:!1,disabled:Te})}for(let c=1;c<=Oe;c++){const y=new Date(m.value,s.value,c),_=c===t.getDate()&&s.value===t.getMonth()&&m.value===t.getFullYear(),w=I(y);e.push({date:y,day:c,month:s.value,year:m.value,isCurrentMonth:!0,isToday:_,disabled:w})}const Ke=42-e.length;for(let c=1;c<=Ke;c++){const y=s.value===11?0:s.value+1,_=s.value===11?m.value+1:m.value,w=new Date(_,y,c),M=I(w);e.push({date:w,day:c,month:y,year:_,isCurrentMonth:!1,isToday:!1,disabled:M})}return e}),I=e=>!!(r.minDate&&e<r.minDate||r.maxDate&&e>r.maxDate),Fe=B(()=>j[s.value]),Ee=["일","월","화","수","목","금","토"];return Ie(()=>{document.addEventListener("click",H)}),Be(()=>{document.removeEventListener("click",H)}),(e,t)=>(l(),n("div",{class:U(["custom-date-picker",{"is-disabled":e.disabled}]),ref_key:"datePickerRef",ref:S},[e.label?(l(),n("label",Ne,d(e.label),1)):C("",!0),i("div",Ue,[i("div",{class:U(["custom-date-picker__input",[`custom-date-picker__input--${e.size}`,{"custom-date-picker__input--error":e.error}]]),disabled:e.disabled,onClick:Se},[i("div",He,[e.mode==="single"?(l(),n(P,{key:0},[e.modelValue?(l(),n("span",qe,d(z(e.modelValue)),1)):(l(),n("span",Ge,d(e.placeholder),1))],64)):e.mode==="range"?(l(),n(P,{key:1},[e.startDate&&e.endDate?(l(),n("span",Je,d(z(e.startDate))+" - "+d(z(e.endDate)),1)):e.startDate?(l(),n("span",Qe,d(z(e.startDate))+" - "+d(e.placeholder),1)):(l(),n("span",Xe,d(e.placeholder),1))],64)):C("",!0)]),t[4]||(t[4]=i("i",{class:"custom-date-picker__icon icon icon--md icon--calendar"},null,-1))],10,je),k.value?(l(),n("div",Ze,[i("div",et,[i("button",{type:"button",class:"custom-date-picker__nav-button",onClick:Me},t[5]||(t[5]=[i("i",{class:"icon icon--md icon--chevron-left"},null,-1)])),i("div",tt,[i("button",{type:"button",class:"custom-date-picker__month-year",onClick:ze},d(Fe.value)+" "+d(m.value),1),v.value?(l(),n("div",at,[i("div",rt,[q(i("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),class:"custom-date-picker__selector",onChange:t[1]||(t[1]=a=>v.value=!1)},[(l(),n(P,null,Y(j,(a,f)=>i("option",{key:f,value:f},d(a),9,st)),64))],544),[[G,s.value]]),q(i("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>m.value=a),class:"custom-date-picker__selector",onChange:t[3]||(t[3]=a=>v.value=!1)},[(l(!0),n(P,null,Y(Pe.value,a=>(l(),n("option",{key:a,value:a},d(a),9,ot))),128))],544),[[G,m.value]])])])):C("",!0)]),i("button",{type:"button",class:"custom-date-picker__nav-button",onClick:Ye},t[6]||(t[6]=[i("i",{class:"icon icon--md icon--chevron-right"},null,-1)]))]),i("div",nt,[(l(),n(P,null,Y(Ee,a=>i("span",{key:a,class:"custom-date-picker__weekday"},d(a),1)),64))]),i("div",lt,[(l(!0),n(P,null,Y(Le.value,(a,f)=>(l(),n("button",{key:f,type:"button",class:U(["custom-date-picker__day",Ve(a)]),disabled:!a.isCurrentMonth||a.disabled,onClick:We=>Re(a)},d(a.day),11,it))),128))])])):C("",!0)]),e.help?(l(),n("span",mt,d(e.help),1)):C("",!0),e.error?(l(),n("span",dt,d(e.error),1)):C("",!0)],2))}}),ct={title:"Components/CustomDatePicker",component:D,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev"}},argTypes:{modelValue:{control:"date",description:"선택된 날짜 (단일 선택 모드)",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},startDate:{control:"date",description:"시작 날짜 (범위 선택 모드)",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},endDate:{control:"date",description:"종료 날짜 (범위 선택 모드)",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},mode:{control:"select",options:["single","range"],description:"날짜 선택 모드 (단일 또는 범위)",table:{type:{summary:"string"},defaultValue:{summary:"single"}}},label:{control:"text",description:"입력 필드 레이블",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",description:"입력 필드 플레이스홀더",table:{type:{summary:"string"},defaultValue:{summary:"날짜 선택"}}},help:{control:"text",description:"도움말 텍스트",table:{type:{summary:"string"},defaultValue:{summary:""}}},error:{control:"text",description:"오류 메시지",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",description:"비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"입력 필드 크기",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},minDate:{control:"date",description:"선택 가능한 최소 날짜",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},maxDate:{control:"date",description:"선택 가능한 최대 날짜",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},yearRange:{control:"object",description:"선택 가능한 년도 범위",table:{type:{summary:"number[]"},defaultValue:{summary:"현재 년도 기준 ±10년"}}}}},R={args:{label:"날짜 선택",placeholder:"날짜를 선택하세요",mode:"single"},render:o=>({components:{CustomDatePicker:D},setup(){return{args:o}},template:`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `})},V={args:{label:"기간 선택",placeholder:"기간을 선택하세요",mode:"range"},render:o=>({components:{CustomDatePicker:D},setup(){return{args:o}},template:`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `})},L={args:{label:"날짜 선택",placeholder:"날짜를 선택하세요",error:"유효한 날짜를 선택해주세요"},render:o=>({components:{CustomDatePicker:D},setup(){return{args:o}},template:`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `})},F={args:{label:"날짜 선택",placeholder:"날짜를 선택하세요",help:"오늘 이후의 날짜만 선택 가능합니다"},render:o=>({components:{CustomDatePicker:D},setup(){return{args:o}},template:`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `})},E={args:{label:"날짜 선택",placeholder:"날짜를 선택하세요",disabled:!0},render:o=>({components:{CustomDatePicker:D},setup(){return{args:o}},template:`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `})},W={render:()=>({components:{CustomDatePicker:D},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="max-width: 300px;">
          <CustomDatePicker label="Extra Small" size="xs" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Small" size="sm" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Medium (Default)" size="md" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Large" size="lg" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Extra Large" size="xl" />
        </div>
      </div>
    `})},O={args:{label:"날짜 선택 (제한 있음)",placeholder:"날짜를 선택하세요",minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),maxDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},render:o=>({components:{CustomDatePicker:D},setup(){return{args:o}},template:`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `})},A={render:()=>({components:{CustomDatePicker:D},setup(){return{selectedDate:g(new Date),formatDate:r=>r?r.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):"선택된 날짜 없음"}},template:`
      <div style="max-width: 500px;">
        <CustomDatePicker
          v-model="selectedDate"
          mode="single"
          label="날짜 선택"
          placeholder="날짜를 선택하세요"
        />
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 날짜 (v-model):</h3>
          <pre style="margin: 0; font-family: monospace;">{{ formatDate(selectedDate) }}</pre>
          <pre style="margin-top: 0.5rem; font-family: monospace;">{{ selectedDate ? selectedDate.toISOString() : '없음' }}</pre>
        </div>
      </div>
    `})},K={render:()=>({components:{CustomDatePicker:D},setup(){const o=g(new Date),h=g(new Date(new Date().setDate(new Date().getDate()+7)));return{startDate:o,endDate:h,formatDate:p=>p?p.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):"선택된 날짜 없음"}},template:`
      <div style="max-width: 500px;">
        <CustomDatePicker
          v-model:startDate="startDate"
          v-model:endDate="endDate"
          mode="range"
          label="기간 선택"
          placeholder="기간을 선택하세요"
        />
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 기간 (v-model:startDate, v-model:endDate):</h3>
          <div style="display: flex; gap: 1rem;">
            <div style="flex: 1;">
              <h4 style="margin-top: 0; margin-bottom: 0.25rem; font-size: 0.875rem;">시작일:</h4>
              <pre style="margin: 0; font-family: monospace;">{{ formatDate(startDate) }}</pre>
              <pre style="margin-top: 0.25rem; font-size: 0.75rem; font-family: monospace;">{{ startDate ? startDate.toISOString() : '없음' }}</pre>
            </div>
            <div style="flex: 1;">
              <h4 style="margin-top: 0; margin-bottom: 0.25rem; font-size: 0.875rem;">종료일:</h4>
              <pre style="margin: 0; font-family: monospace;">{{ formatDate(endDate) }}</pre>
              <pre style="margin-top: 0.25rem; font-size: 0.75rem; font-family: monospace;">{{ endDate ? endDate.toISOString() : '없음' }}</pre>
            </div>
          </div>
        </div>
      </div>
    `})},T={render:()=>({components:{CustomDatePicker:D},setup(){const o=g(new Date),h=Array.from({length:10},(p,S)=>2020+S);return{selectedDate:o,formatDate:p=>p?p.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):"선택된 날짜 없음",customYearRange:h}},template:`
      <div style="max-width: 500px;">
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">기본 월/년도 선택기</h3>
        <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
          달력 헤더의 "월 년도" 텍스트를 클릭하면 월과 년도를 선택할 수 있는 드롭다운이 표시됩니다.
        </p>
        <div style="max-width: 300px; margin-bottom: 2rem;">
          <CustomDatePicker
            v-model="selectedDate"
            mode="single"
            label="날짜 선택"
            placeholder="날짜를 선택하세요"
          />
        </div>

        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">사용자 정의 년도 범위</h3>
        <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
          yearRange 속성을 사용하여 선택 가능한 년도 범위를 지정할 수 있습니다. (이 예시: 2020-2029년)
        </p>
        <div style="max-width: 300px;">
          <CustomDatePicker
            v-model="selectedDate"
            mode="single"
            label="날짜 선택 (사용자 정의 년도 범위)"
            placeholder="날짜를 선택하세요"
            :yearRange="customYearRange"
          />
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 날짜:</h3>
          <pre style="margin: 0; font-family: monospace;">{{ formatDate(selectedDate) }}</pre>
        </div>
      </div>
    `})};var J,Q,X;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    mode: 'single'
  },
  render: args => ({
    components: {
      CustomDatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    \`
  })
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: '기간 선택',
    placeholder: '기간을 선택하세요',
    mode: 'range'
  },
  render: args => ({
    components: {
      CustomDatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    \`
  })
}`,...(te=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    error: '유효한 날짜를 선택해주세요'
  },
  render: args => ({
    components: {
      CustomDatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    \`
  })
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ne,le;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    help: '오늘 이후의 날짜만 선택 가능합니다'
  },
  render: args => ({
    components: {
      CustomDatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    \`
  })
}`,...(le=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ie,me,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    disabled: true
  },
  render: args => ({
    components: {
      CustomDatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    \`
  })
}`,...(de=(me=E.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ue,ce,pe;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomDatePicker
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="max-width: 300px;">
          <CustomDatePicker label="Extra Small" size="xs" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Small" size="sm" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Medium (Default)" size="md" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Large" size="lg" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Extra Large" size="xl" />
        </div>
      </div>
    \`
  })
}`,...(pe=(ce=W.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ge,De,ve;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: '날짜 선택 (제한 있음)',
    placeholder: '날짜를 선택하세요',
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    // 이번 달 1일
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) // 이번 달 마지막 날
  },
  render: args => ({
    components: {
      CustomDatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    \`
  })
}`,...(ve=(De=O.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};var fe,ye,he;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomDatePicker
    },
    setup() {
      const selectedDate = ref(new Date());
      const formatDate = (date: Date | null) => {
        if (!date) return '선택된 날짜 없음';
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };
      return {
        selectedDate,
        formatDate
      };
    },
    template: \`
      <div style="max-width: 500px;">
        <CustomDatePicker
          v-model="selectedDate"
          mode="single"
          label="날짜 선택"
          placeholder="날짜를 선택하세요"
        />
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 날짜 (v-model):</h3>
          <pre style="margin: 0; font-family: monospace;">{{ formatDate(selectedDate) }}</pre>
          <pre style="margin-top: 0.5rem; font-family: monospace;">{{ selectedDate ? selectedDate.toISOString() : '없음' }}</pre>
        </div>
      </div>
    \`
  })
}`,...(he=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ke,be,_e;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomDatePicker
    },
    setup() {
      const startDate = ref(new Date());
      const endDate = ref(new Date(new Date().setDate(new Date().getDate() + 7))); // 오늘로부터 7일 후

      const formatDate = (date: Date | null) => {
        if (!date) return '선택된 날짜 없음';
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };
      return {
        startDate,
        endDate,
        formatDate
      };
    },
    template: \`
      <div style="max-width: 500px;">
        <CustomDatePicker
          v-model:startDate="startDate"
          v-model:endDate="endDate"
          mode="range"
          label="기간 선택"
          placeholder="기간을 선택하세요"
        />
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 기간 (v-model:startDate, v-model:endDate):</h3>
          <div style="display: flex; gap: 1rem;">
            <div style="flex: 1;">
              <h4 style="margin-top: 0; margin-bottom: 0.25rem; font-size: 0.875rem;">시작일:</h4>
              <pre style="margin: 0; font-family: monospace;">{{ formatDate(startDate) }}</pre>
              <pre style="margin-top: 0.25rem; font-size: 0.75rem; font-family: monospace;">{{ startDate ? startDate.toISOString() : '없음' }}</pre>
            </div>
            <div style="flex: 1;">
              <h4 style="margin-top: 0; margin-bottom: 0.25rem; font-size: 0.875rem;">종료일:</h4>
              <pre style="margin: 0; font-family: monospace;">{{ formatDate(endDate) }}</pre>
              <pre style="margin-top: 0.25rem; font-size: 0.75rem; font-family: monospace;">{{ endDate ? endDate.toISOString() : '없음' }}</pre>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(_e=(be=K.parameters)==null?void 0:be.docs)==null?void 0:_e.source}}};var we,xe,Ce;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomDatePicker
    },
    setup() {
      const selectedDate = ref(new Date());
      const customYearRange = Array.from({
        length: 10
      }, (_, i) => 2020 + i); // 2020-2029년

      const formatDate = (date: Date | null) => {
        if (!date) return '선택된 날짜 없음';
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };
      return {
        selectedDate,
        formatDate,
        customYearRange
      };
    },
    template: \`
      <div style="max-width: 500px;">
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">기본 월/년도 선택기</h3>
        <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
          달력 헤더의 "월 년도" 텍스트를 클릭하면 월과 년도를 선택할 수 있는 드롭다운이 표시됩니다.
        </p>
        <div style="max-width: 300px; margin-bottom: 2rem;">
          <CustomDatePicker
            v-model="selectedDate"
            mode="single"
            label="날짜 선택"
            placeholder="날짜를 선택하세요"
          />
        </div>

        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">사용자 정의 년도 범위</h3>
        <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
          yearRange 속성을 사용하여 선택 가능한 년도 범위를 지정할 수 있습니다. (이 예시: 2020-2029년)
        </p>
        <div style="max-width: 300px;">
          <CustomDatePicker
            v-model="selectedDate"
            mode="single"
            label="날짜 선택 (사용자 정의 년도 범위)"
            placeholder="날짜를 선택하세요"
            :yearRange="customYearRange"
          />
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 날짜:</h3>
          <pre style="margin: 0; font-family: monospace;">{{ formatDate(selectedDate) }}</pre>
        </div>
      </div>
    \`
  })
}`,...(Ce=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};const pt=["Default","DateRange","WithError","WithHelp","Disabled","Sizes","WithDateLimits","SingleDateWithValue","DateRangeWithValues","MonthYearSelector"];export{V as DateRange,K as DateRangeWithValues,R as Default,E as Disabled,T as MonthYearSelector,A as SingleDateWithValue,W as Sizes,O as WithDateLimits,L as WithError,F as WithHelp,pt as __namedExportsOrder,ct as default};
