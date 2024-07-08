import{a as s,c as F,h,W as ee,K as D,X as te,Y as ne,Z,_ as ae,g as G,r as I,d as re,$ as ue,s as T,L as le,l as ie,a0 as se}from"./index.5b5c17c8.js";import{f as N,d as oe,b as ce,u as de,Q,a as fe}from"./dom.44f4c279.js";const ve={size:{type:[String,Number],default:"1em"},color:String};function me(e){return{cSize:s(()=>e.size in N?`${N[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ge=F({name:"QSpinner",props:{...ve,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=me(e);return()=>h("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function be(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function V(e,t,r,n){r.modifiers.stop===!0&&Z(e);const l=r.modifiers.color;let g=r.modifiers.center;g=g===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),S=ae(e),{left:y,top:v,width:L,height:u}=t.getBoundingClientRect(),k=Math.sqrt(L*L+u*u),m=k/2,p=`${(L-k)/2}px`,i=g?p:`${S.left-y-m}px`,b=`${(u-k)/2}px`,B=g?b:`${S.top-v-m}px`;d.className="q-ripple__inner",oe(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${B},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(R)};r.abort.push(P);let R=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,R=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,R=setTimeout(()=>{f.remove(),r.abort.splice(r.abort.indexOf(P),1)},275)},250)},50)}function W(e,{modifiers:t,value:r,arg:n}){const l=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var he=ee({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&V(l,e,n,l.qKeyEvent===!0)},keystart:be(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&D(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&V(l,e,n,!0)},300)};W(n,t),e.__qripple=n,te(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&W(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ne(t,"main"),delete e._qripple)}});const J={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ye=Object.keys(J),ke={align:{type:String,validator:e=>ye.includes(e)}};function pe(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${J[t]}`})}function qe(e){return e.appContext.config.globalProperties.$router!==void 0}function je(e){return e.isUnmounted===!0||e.isDeactivated===!0}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xe(e,t){for(const r in t){const n=t[r],l=e[r];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((g,f)=>g!==l[f]))return!1}return!0}function X(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Le(e,t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function $e(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(Le(e[r],t[r])===!1)return!1;return!0}const Ce={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Ee({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=G(),{props:n,proxy:l,emit:g}=r,f=qe(r),d=s(()=>n.disable!==!0&&n.href!==void 0),S=t===!0?s(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=s(()=>S.value===!0?B(n.to):null),v=s(()=>y.value!==null),L=s(()=>d.value===!0||v.value===!0),u=s(()=>n.type==="a"||L.value===!0?"a":n.tag||e||"div"),k=s(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),m=s(()=>{if(v.value===!1)return-1;const{matched:o}=y.value,{length:q}=o,$=o[q-1];if($===void 0)return-1;const E=l.$route.matched;if(E.length===0)return-1;const w=E.findIndex(U.bind(null,$));if(w!==-1)return w;const z=H(o[q-2]);return q>1&&H($)===z&&E[E.length-1].path!==z?E.findIndex(U.bind(null,o[q-2])):w}),p=s(()=>v.value===!0&&m.value!==-1&&xe(l.$route.params,y.value.params)),i=s(()=>p.value===!0&&m.value===l.$route.matched.length-1&&$e(l.$route.params,y.value.params)),b=s(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function B(o){try{return l.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:q,to:$=n.to,replace:E=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const w=l.$router[E===!0?"replace":"push"]($);return q===!0?w:w.then(()=>{}).catch(()=>{})}function R(o){if(v.value===!0){const q=$=>P(o,$);g("click",o,q),o.defaultPrevented!==!0&&q()}else g("click",o)}return{hasRouterLink:v,hasHrefLink:d,hasLink:L,linkTag:u,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:b,linkAttrs:k,getLink:B,navigateToRouterLink:P,navigateOnClick:R}}const Y={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Se={xs:8,sm:10,md:14,lg:20,xl:24},we=["button","submit","reset"],Pe=/[^\s]\/[^\s]/,Re=["flat","outline","push","unelevated"];function Be(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Te={...ce,...Ce,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Re.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},_e={...Te,round:Boolean};function Ae(e){const t=de(e,Se),r=pe(e),{hasRouterLink:n,hasLink:l,linkTag:g,linkAttrs:f,navigateOnClick:d}=Ee({fallbackTag:"button"}),S=s(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in Y?Y[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),y=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),L=s(()=>v.value===!0?e.tabindex||0:-1),u=s(()=>Be(e,"standard")),k=s(()=>{const i={tabindex:L.value};return l.value===!0?Object.assign(i,f.value):we.includes(e.type)===!0&&(i.type=e.type),g.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Pe.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),m=s(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:S,innerClasses:p,attributes:k,hasLink:l,linkTag:g,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=ie;let _=null,A=null,O=null;var ze=F({name:"QBtn",props:{..._e,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=G(),{classes:l,style:g,innerClasses:f,attributes:d,hasLink:S,linkTag:y,navigateOnClick:v,isActionable:L}=Ae(e),u=I(null),k=I(null);let m=null,p,i=null;const b=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),B=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:S.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=s(()=>({center:e.round})),R=s(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),o=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(L.value===!0){const a={onClick:$,onKeydown:E,onMousedown:z};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=w}return a}return{onClick:T}}),q=s(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:g.value,...d.value,...o.value}));function $(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",K,x),u.value!==null&&u.value.removeEventListener("blur",K,x)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",K,x),u.value.addEventListener("blur",K,x)}}v(a)}}function E(a){u.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&A!==u.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",C,!0),u.value.addEventListener("blur",C,x)),T(a)))}function w(a){u.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(_!==u.value&&(_!==null&&M(),_=u.value,m=a.target,m.addEventListener("touchcancel",C,x),m.addEventListener("touchend",C,x)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function z(a){u.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",C,x)))}function C(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(A===u.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&se(c),a.cancelBubble===!0&&Z(c),u.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const c=k.value;a!==!0&&(_===u.value||O===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===u.value&&(m!==null&&(m.removeEventListener("touchcancel",C,x),m.removeEventListener("touchend",C,x)),_=m=null),O===u.value&&(document.removeEventListener("mouseup",C,x),O=null),A===u.value&&(document.removeEventListener("keyup",C,!0),u.value!==null&&u.value.removeEventListener("blur",C,x),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return re(()=>{M(!0)}),Object.assign(n,{click:a=>{L.value===!0&&$(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(h(Q,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=fe(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(Q,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[h("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(h(le,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(ge)])]:null)),ue(h(y.value,q.value,c),[[he,B.value,void 0,P.value]])}}});export{ze as Q,pe as a,qe as b,ke as u,je as v};
