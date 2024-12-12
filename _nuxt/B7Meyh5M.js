import{b as $,u as j}from"./Dnyz8t2s.js";import{_ as O,o as z,c as I,p as h,a as i,C as m,m as w,W as P,a0 as y,q as u,s as c,l as U,n as V,d as q,t as C,x as D,y as b,i as a,B as l}from"./CFhrp1Et.js";const E={wrapper:"w-full flex flex-col gap-2",indicator:{container:"min-w-fit transition-all",text:"text-gray-400 dark:text-gray-500 text-end",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},meter:{base:"appearance-none block w-full bg-none overflow-y-hidden",background:"bg-gray-200 dark:bg-gray-700",color:"text-{color}-500 dark:text-{color}-400",ring:"",rounded:"rounded-full",shadow:"",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},appearance:{inner:"[&::-webkit-meter-inner-element]:block [&::-webkit-meter-inner-element]:relative [&::-webkit-meter-inner-element]:border-none [&::-webkit-meter-inner-element]:bg-none [&::-webkit-meter-inner-element]:bg-transparent",meter:"[&::-webkit-meter-bar]:border-none [&::-webkit-meter-bar]:bg-none [&::-webkit-meter-bar]:bg-transparent",bar:"[&::-webkit-meter-optimum-value]:border-none [&::-webkit-meter-optimum-value]:bg-none [&::-webkit-meter-optimum-value]:bg-current",value:"[&::-moz-meter-bar]:border-none [&::-moz-meter-bar]:bg-none [&::-moz-meter-bar]:bg-current"},bar:{transition:"[&::-webkit-meter-optimum-value]:transition-all [&::-moz-meter-bar]:transition-all",ring:"",rounded:"[&::-webkit-meter-optimum-value]:rounded-full [&::-moz-meter-bar]:rounded-full",size:{"2xs":"[&::-webkit-meter-optimum-value]:h-px [&::-moz-meter-bar]:h-px",xs:"[&::-webkit-meter-optimum-value]:h-0.5 [&::-moz-meter-bar]:h-0.5",sm:"[&::-webkit-meter-optimum-value]:h-1 [&::-moz-meter-bar]:h-1",md:"[&::-webkit-meter-optimum-value]:h-2 [&::-moz-meter-bar]:h-2",lg:"[&::-webkit-meter-optimum-value]:h-3 [&::-moz-meter-bar]:h-3",xl:"[&::-webkit-meter-optimum-value]:h-4 [&::-moz-meter-bar]:h-4","2xl":"[&::-webkit-meter-optimum-value]:h-5 [&::-moz-meter-bar]:h-5"}}},label:{base:"flex gap-2 items-center",text:"truncate",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},color:{white:"text-white dark:text-black",black:"text-black dark:text-white",gray:"text-gray-500 dark:text-gray-400"},default:{size:"md",color:"primary"}},o=D(b.ui.strategy,b.ui.meter,E),J=q({components:{UIcon:$},inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>o.default.size,validator(e){return Object.keys(o.meter.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...b.ui.colors,...Object.keys(o.color)].includes(e)}},icon:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:d}=j("meter",C(e,"ui"),o,C(e,"class"));function v(f,r,n){if(r==n)return f<r?0:100;r>n&&(n=[r,r=n][0]);const A=(f-r)/(n-r)*100;return Math.max(0,Math.min(100,A))}const p=a(()=>l(t.value.indicator.container)),x=a(()=>l(t.value.indicator.text,t.value.indicator.size[e.size])),s=a(()=>l(t.value.meter.base,t.value.meter.background,t.value.meter.ring,t.value.meter.rounded,t.value.meter.shadow,t.value.color[e.color]??t.value.meter.color.replaceAll("{color}",e.color),t.value.meter.size[e.size])),B=a(()=>l(t.value.meter.appearance.inner,t.value.meter.appearance.meter,t.value.meter.appearance.bar,t.value.meter.appearance.value)),S=a(()=>l(t.value.meter.bar.transition,t.value.meter.bar.ring,t.value.meter.bar.rounded,t.value.meter.bar.size[e.size])),M=a(()=>l(t.value.label.base,t.value.label.text,t.value.color[e.color]??t.value.label.color.replaceAll("{color}",e.color),t.value.label.size[e.size])),g=a(()=>e.min>e.max?e.max:e.min),k=a(()=>e.max<e.min?e.min:e.max),N=a(()=>v(Number(e.value),g.value,k.value));return{ui:t,attrs:d,indicatorContainerClass:p,indicatorClass:x,meterClass:s,meterAppearanceClass:B,meterBarClass:S,labelClass:M,normalizedMin:g,normalizedMax:k,percent:N}}}),R=["value","min","max"];function T(e,t,d,v,p,x){const s=$;return z(),I("div",u({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?h(e.$slots,"indicator",y(u({key:0},{percent:e.percent,value:e.value})),()=>[i("div",{class:m(e.indicatorContainerClass),style:P({width:`${e.percent}%`})},[i("div",{class:m(e.indicatorClass)},w(Math.round(e.percent))+"% ",3)],6)]):c("",!0),i("meter",{value:e.value,min:e.normalizedMin,max:e.normalizedMax,class:m([e.meterClass,e.meterAppearanceClass,e.meterBarClass])},null,10,R),e.label||e.$slots.label?h(e.$slots,"label",y(u({key:1},{percent:e.percent,value:e.value})),()=>[i("div",{class:m(e.labelClass)},[e.icon?(z(),U(s,{key:0,name:e.icon},null,8,["name"])):c("",!0),V(" "+w(e.label),1)],2)]):c("",!0)],16)}const G=O(J,[["render",T]]);export{G as _};
