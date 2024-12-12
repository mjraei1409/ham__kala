import{e as le,a7 as Q,K as ie,j as I,a8 as ue,k as H,i as v,M as J,I as K,z as oe,H as se,N as F,_ as re,o as E,c as W,a as ce,q as de,p as $,C as B,b as q,s as R,d as fe,t as U,x as ve,y as O,X as ge,A as me,B as p,$ as ye}from"./CFhrp1Et.js";import{b as X,u as be,i as he,a as Ie}from"./Dnyz8t2s.js";function T(e){return Q()?(ie(e),!0):!1}function C(e){return typeof e=="function"?e():le(e)}const we=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ze=e=>e!=null,z=()=>{};function Ce(e,t){function i(...a){return new Promise((n,u)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(n).catch(u)})}return i}function Se(e,t={}){let i,a,n=z;const u=l=>{clearTimeout(l),n(),n=z};return l=>{const s=C(e),r=C(t.maxWait);return i&&u(i),s<=0||r!==void 0&&r<=0?(a&&(u(a),a=null),Promise.resolve(l())):new Promise((o,c)=>{n=t.rejectOnCancel?c:o,r&&!a&&(a=setTimeout(()=>{i&&u(i),a=null,o(l())},r)),i=setTimeout(()=>{a&&u(a),a=null,o(l())},s)})}}function Be(e,t=200,i={}){return Ce(Se(t,i),e)}function Ee(e,t,i){let a;oe(i)?a={evaluating:i}:a=i||{};const{lazy:n=!1,evaluating:u=void 0,shallow:d=!0,onError:l=z}=a,s=I(!n),r=d?se(t):I(t);let o=0;return J(async c=>{if(!s.value)return;o++;const m=o;let y=!1;u&&Promise.resolve().then(()=>{u.value=!0});try{const g=await e(w=>{c(()=>{u&&(u.value=!1),y||w()})});m===o&&(r.value=g)}catch(g){l(g)}finally{u&&m===o&&(u.value=!1),y=!0}}),n?v(()=>(s.value=!0,r.value)):r}const V=we?window:void 0;function A(e){var t;const i=C(e);return(t=i==null?void 0:i.$el)!=null?t:i}function pe(){const e=I(!1),t=ue();return t&&H(()=>{e.value=!0},t),e}function L(e){const t=pe();return v(()=>(t.value,!!e()))}function We(e,t={}){const{window:i=V}=t,a=L(()=>i&&"matchMedia"in i&&typeof i.matchMedia=="function");let n;const u=I(!1),d=r=>{u.value=r.matches},l=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",d):n.removeListener(d))},s=J(()=>{a.value&&(l(),n=i.matchMedia(C(e)),"addEventListener"in n?n.addEventListener("change",d):n.addListener(d),u.value=n.matches)});return T(()=>{s(),l(),n=void 0}),u}function $e(e,t,i={}){const{window:a=V,...n}=i;let u;const d=L(()=>a&&"ResizeObserver"in a),l=()=>{u&&(u.disconnect(),u=void 0)},s=v(()=>{const c=C(e);return Array.isArray(c)?c.map(m=>A(m)):[A(c)]}),r=K(s,c=>{if(l(),d.value&&a){u=new ResizeObserver(t);for(const m of c)m&&u.observe(m,n)}},{immediate:!0,flush:"post"}),o=()=>{l(),r()};return T(o),{isSupported:d,stop:o}}function Te(e,t,i={}){const{root:a,rootMargin:n="0px",threshold:u=0,window:d=V,immediate:l=!0}=i,s=L(()=>d&&"IntersectionObserver"in d),r=v(()=>{const g=C(e);return(Array.isArray(g)?g:[g]).map(A).filter(ze)});let o=z;const c=I(l),m=s.value?K(()=>[r.value,A(a),c.value],([g,w])=>{if(o(),!c.value||!g.length)return;const N=new IntersectionObserver(t,{root:A(w),rootMargin:n,threshold:u});g.forEach(S=>S&&N.observe(S)),o=()=>{N.disconnect(),o=z}},{immediate:l,flush:"post"}):z,y=()=>{o(),m(),c.value=!1};return T(y),{isSupported:s,isActive:c,pause(){o(),c.value=!1},resume(){c.value=!0},stop:y}}const M=new Map;function Ve(e){const t=Q();function i(l){var s;const r=M.get(e)||new Set;r.add(l),M.set(e,r);const o=()=>n(l);return(s=t==null?void 0:t.cleanups)==null||s.push(o),o}function a(l){function s(...r){n(s),l(...r)}return i(s)}function n(l){const s=M.get(e);s&&(s.delete(l),s.size||u())}function u(){M.delete(e)}function d(l,s){var r;(r=M.get(e))==null||r.forEach(o=>o(l,s))}return{on:i,once:a,off:n,emit:d,reset:u}}const Me=(e,t,i=!0)=>{const a=F("form-events",void 0),n=F("form-group",void 0),u=F("form-inputs",void 0);n&&(!i||e!=null&&e.legend?n.inputId.value=void 0:e!=null&&e.id&&(n.inputId.value=e==null?void 0:e.id),u&&(u.value[n.name.value]=n.inputId.value));const d=I(!1);function l(c,m){a&&a.emit({type:c,path:m})}function s(){l("blur",n==null?void 0:n.name.value),d.value=!0}function r(){l("change",n==null?void 0:n.name.value)}const o=Be(()=>{(d.value||n!=null&&n.eagerValidation.value)&&l("input",n==null?void 0:n.name.value)},300);return{inputId:v(()=>(e==null?void 0:e.id)??(n==null?void 0:n.inputId.value)),name:v(()=>(e==null?void 0:e.name)??(n==null?void 0:n.name.value)),size:v(()=>{var m;const c=t.size[n==null?void 0:n.size.value]?n==null?void 0:n.size.value:null;return(e==null?void 0:e.size)??c??((m=t.default)==null?void 0:m.size)}),color:v(()=>{var c;return(c=n==null?void 0:n.error)!=null&&c.value?"red":e==null?void 0:e.color}),emitFormBlur:s,emitFormInput:o,emitFormChange:r}},b=ve(O.ui.strategy,O.ui.input,he),Oe=fe({components:{UIcon:X},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>b.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(b.size).includes(e)}},color:{type:String,default:()=>b.default.color,validator(e){return[...O.ui.colors,...Object.keys(b.color)].includes(e)}},variant:{type:String,default:()=>b.default.variant,validator(e){return[...Object.keys(b.variant),...Object.values(b.color).flatMap(t=>Object.keys(t))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t,slots:i}){const{ui:a,attrs:n}=be("input",U(e,"ui"),b,U(e,"class")),{size:u,rounded:d}=Ie({ui:a,props:e}),{emitFormBlur:l,emitFormInput:s,size:r,color:o,inputId:c,name:m}=Me(e,b),y=v(()=>u.value??r.value),g=I(ge({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),w=I(null),N=()=>{var f;e.autofocus&&((f=w.value)==null||f.focus())},S=f=>{g.value.trim&&(f=f.trim()),(g.value.number||e.type==="number")&&(f=ye(f)),g.value.nullify&&(f||(f=null)),t("update:modelValue",f),s()},Y=f=>{g.value.lazy||S(f.target.value)},Z=f=>{if(e.type==="file"){const h=f.target.files;t("change",h)}else{const h=f.target.value;t("change",h),g.value.lazy&&S(h),g.value.trim&&(f.target.value=h.trim())}},G=f=>{l(),t("blur",f)};H(()=>{setTimeout(()=>{N()},e.autofocusDelay)});const _=v(()=>{var h,k;const f=((k=(h=a.value.color)==null?void 0:h[o.value])==null?void 0:k[e.variant])||a.value.variant[e.variant];return me(p(a.value.base,a.value.form,d.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[y.value],e.padded?a.value.padding[y.value]:"p-0",f==null?void 0:f.replaceAll("{color}",o.value),(j.value||i.leading)&&a.value.leading.padding[y.value],(D.value||i.trailing)&&a.value.trailing.padding[y.value]),e.inputClass)}),j=v(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),D=v(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),x=v(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),P=v(()=>e.loading&&!j.value?e.loadingIcon:e.trailingIcon||e.icon),ee=v(()=>p(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[y.value])),ne=v(()=>p(a.value.icon.base,o.value&&O.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[y.value],e.loading&&a.value.icon.loading)),ae=v(()=>p(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[y.value])),te=v(()=>p(a.value.icon.base,o.value&&O.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[y.value],e.loading&&!j.value&&a.value.icon.loading));return{ui:a,attrs:n,name:m,inputId:c,input:w,isLeading:j,isTrailing:D,inputClass:_,leadingIconName:x,leadingIconClass:ne,leadingWrapperIconClass:ee,trailingIconName:P,trailingIconClass:te,trailingWrapperIconClass:ae,onInput:Y,onChange:Z,onBlur:G}}}),Ae=["id","name","type","required","placeholder","disabled"];function Ne(e,t,i,a,n,u){const d=X;return E(),W("div",{class:B(e.type==="hidden"?"hidden":e.ui.wrapper)},[ce("input",de({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:t[0]||(t[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:t[1]||(t[1]=(...l)=>e.onBlur&&e.onBlur(...l)),onChange:t[2]||(t[2]=(...l)=>e.onChange&&e.onChange(...l))}),null,16,Ae),$(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(E(),W("span",{key:0,class:B(e.leadingWrapperIconClass)},[$(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[q(d,{name:e.leadingIconName,class:B(e.leadingIconClass)},null,8,["name","class"])])],2)):R("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(E(),W("span",{key:1,class:B(e.trailingWrapperIconClass)},[$(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[q(d,{name:e.trailingIconName,class:B(e.trailingIconClass)},null,8,["name","class"])])],2)):R("",!0)],2)}const Le=re(Oe,[["render",Ne]]);export{Le as _,Me as a,Be as b,Ee as c,Ve as d,$e as e,We as f,Te as g,A as u};
