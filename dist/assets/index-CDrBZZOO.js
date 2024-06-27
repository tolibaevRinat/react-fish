import{R as M,r as jt,n as qt,m as Wt}from"./index-9AYKC4EA.js";var me=e=>e.type==="checkbox",fe=e=>e instanceof Date,q=e=>e==null;const pt=e=>typeof e=="object";var U=e=>!q(e)&&!Array.isArray(e)&&pt(e)&&!fe(e),mt=e=>U(e)&&e.target?me(e.target)?e.target.checked:e.target.value:e,Ht=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,kt=(e,s)=>e.has(Ht(s)),$t=e=>{const s=e.constructor&&e.constructor.prototype;return U(s)&&s.hasOwnProperty("isPrototypeOf")},qe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(qe&&(e instanceof Blob||e instanceof FileList))&&(r||U(e)))if(s=r?[]:{},!r&&!$t(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=$(e[n]));else return e;return s}var ke=e=>Array.isArray(e)?e.filter(Boolean):[],R=e=>e===void 0,c=(e,s,r)=>{if(!s||!U(e))return r;const n=ke(s.split(/[,[\].]+?/)).reduce((t,a)=>q(t)?t:t[a],e);return R(n)||n===e?R(e[s])?r:e[s]:n},te=e=>typeof e=="boolean",We=e=>/^\w*$/.test(e),_t=e=>ke(e.replace(/["|']|\]/g,"").split(/\.|\[/)),O=(e,s,r)=>{let n=-1;const t=We(s)?[s]:_t(s),a=t.length,u=a-1;for(;++n<a;){const h=t[n];let p=r;if(n!==u){const _=e[h];p=U(_)||Array.isArray(_)?_:isNaN(+t[n+1])?{}:[]}if(h==="__proto__")return;e[h]=p,e=e[h]}return e};const Se={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ee={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},zt=M.createContext(null),He=()=>M.useContext(zt);var bt=(e,s,r,n=!0)=>{const t={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(t,a,{get:()=>{const u=a;return s._proxyFormState[u]!==ee.all&&(s._proxyFormState[u]=!n||ee.all),r&&(r[u]=!0),e[u]}});return t},X=e=>U(e)&&!Object.keys(e).length,Vt=(e,s,r,n)=>{r(e);const{name:t,...a}=e;return X(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(u=>s[u]===(!n||ee.all))},Ve=e=>Array.isArray(e)?e:[e],wt=(e,s,r)=>!e||!s||e===s||Ve(e).some(n=>n&&(r?n===s:n.startsWith(s)||s.startsWith(n)));function $e(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Xt(e){const s=He(),{control:r=s.control,disabled:n,name:t,exact:a}=e||{},[u,h]=M.useState(r._formState),p=M.useRef(!0),_=M.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),y=M.useRef(t);return y.current=t,$e({disabled:n,next:m=>p.current&&wt(y.current,m.name,a)&&Vt(m,_.current,r._updateFormState)&&h({...r._formState,...m}),subject:r._subjects.state}),M.useEffect(()=>(p.current=!0,_.current.isValid&&r._updateValid(!0),()=>{p.current=!1}),[r]),bt(u,r,_.current,!1)}var re=e=>typeof e=="string",St=(e,s,r,n,t)=>re(e)?(n&&s.watch.add(e),c(r,e,t)):Array.isArray(e)?e.map(a=>(n&&s.watch.add(a),c(r,a))):(n&&(s.watchAll=!0),r);function Yt(e){const s=He(),{control:r=s.control,name:n,defaultValue:t,disabled:a,exact:u}=e||{},h=M.useRef(n);h.current=n,$e({disabled:a,subject:r._subjects.values,next:y=>{wt(h.current,y.name,u)&&_($(St(h.current,r._names,y.values||r._formValues,!1,t)))}});const[p,_]=M.useState(r._getWatch(n,t));return M.useEffect(()=>r._removeUnmounted()),p}function Kt(e){const s=He(),{name:r,disabled:n,control:t=s.control,shouldUnregister:a}=e,u=kt(t._names.array,r),h=Yt({control:t,name:r,defaultValue:c(t._formValues,r,c(t._defaultValues,r,e.defaultValue)),exact:!0}),p=Xt({control:t,name:r}),_=M.useRef(t.register(r,{...e.rules,value:h,...te(e.disabled)?{disabled:e.disabled}:{}}));return M.useEffect(()=>{const y=t._options.shouldUnregister||a,m=(V,A)=>{const g=c(t._fields,V);g&&g._f&&(g._f.mount=A)};if(m(r,!0),y){const V=$(c(t._options.defaultValues,r));O(t._defaultValues,r,V),R(c(t._formValues,r))&&O(t._formValues,r,V)}return()=>{(u?y&&!t._state.action:y)?t.unregister(r):m(r,!1)}},[r,t,u,a]),M.useEffect(()=>{c(t._fields,r)&&t._updateDisabledField({disabled:n,fields:t._fields,name:r,value:c(t._fields,r)._f.value})},[n,r,t]),{field:{name:r,value:h,...te(n)||p.disabled?{disabled:p.disabled||n}:{},onChange:M.useCallback(y=>_.current.onChange({target:{value:mt(y),name:r},type:Se.CHANGE}),[r]),onBlur:M.useCallback(()=>_.current.onBlur({target:{value:c(t._formValues,r),name:r},type:Se.BLUR}),[r,t]),ref:y=>{const m=c(t._fields,r);m&&y&&(m._f.ref={focus:()=>y.focus(),select:()=>y.select(),setCustomValidity:V=>y.setCustomValidity(V),reportValidity:()=>y.reportValidity()})}},formState:p,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(p.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(p.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(p.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!c(p.validatingFields,r)},error:{enumerable:!0,get:()=>c(p.errors,r)}})}}const Ar=e=>e.render(Kt(e));var Zt=(e,s,r,n,t)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:t||!0}}:{},nt=e=>({isOnSubmit:!e||e===ee.onSubmit,isOnBlur:e===ee.onBlur,isOnChange:e===ee.onChange,isOnAll:e===ee.all,isOnTouch:e===ee.onTouched}),it=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ye=(e,s,r,n)=>{for(const t of r||Object.keys(e)){const a=c(e,t);if(a){const{_f:u,...h}=a;if(u){if(u.refs&&u.refs[0]&&s(u.refs[0],t)&&!n)break;if(u.ref&&s(u.ref,u.name)&&!n)break;ye(h,s)}else U(h)&&ye(h,s)}}};var Gt=(e,s,r)=>{const n=ke(c(e,r));return O(n,"root",s[r]),O(e,r,n),e},ze=e=>e.type==="file",ie=e=>typeof e=="function",Fe=e=>{if(!qe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},we=e=>re(e),Xe=e=>e.type==="radio",De=e=>e instanceof RegExp;const at={value:!1,isValid:!1},ot={value:!0,isValid:!0};var Ft=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!R(e[0].attributes.value)?R(e[0].value)||e[0].value===""?ot:{value:e[0].value,isValid:!0}:ot:at}return at};const lt={isValid:!1,value:null};var Dt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,lt):lt;function ut(e,s,r="validate"){if(we(e)||Array.isArray(e)&&e.every(we)||te(e)&&!e)return{type:r,message:we(e)?e:"",ref:s}}var le=e=>U(e)&&!De(e)?e:{value:e,message:""},ft=async(e,s,r,n,t)=>{const{ref:a,refs:u,required:h,maxLength:p,minLength:_,min:y,max:m,pattern:V,validate:A,name:g,valueAsNumber:F,mount:S,disabled:w}=e._f,b=c(s,g);if(!S||w)return{};const I=u?u[0]:a,L=D=>{n&&I.reportValidity&&(I.setCustomValidity(te(D)?"":D||""),I.reportValidity())},E={},J=Xe(a),N=me(a),W=J||N,K=(F||ze(a))&&R(a.value)&&R(b)||Fe(a)&&a.value===""||b===""||Array.isArray(b)&&!b.length,Z=Zt.bind(null,g,r,E),_e=(D,x,T,j=se.maxLength,Q=se.minLength)=>{const G=D?x:T;E[g]={type:D?j:Q,message:G,ref:a,...Z(D?j:Q,G)}};if(t?!Array.isArray(b)||!b.length:h&&(!W&&(K||q(b))||te(b)&&!b||N&&!Ft(u).isValid||J&&!Dt(u).isValid)){const{value:D,message:x}=we(h)?{value:!!h,message:h}:le(h);if(D&&(E[g]={type:se.required,message:x,ref:I,...Z(se.required,x)},!r))return L(x),E}if(!K&&(!q(y)||!q(m))){let D,x;const T=le(m),j=le(y);if(!q(b)&&!isNaN(b)){const Q=a.valueAsNumber||b&&+b;q(T.value)||(D=Q>T.value),q(j.value)||(x=Q<j.value)}else{const Q=a.valueAsDate||new Date(b),G=he=>new Date(new Date().toDateString()+" "+he),ce=a.type=="time",de=a.type=="week";re(T.value)&&b&&(D=ce?G(b)>G(T.value):de?b>T.value:Q>new Date(T.value)),re(j.value)&&b&&(x=ce?G(b)<G(j.value):de?b<j.value:Q<new Date(j.value))}if((D||x)&&(_e(!!D,T.message,j.message,se.max,se.min),!r))return L(E[g].message),E}if((p||_)&&!K&&(re(b)||t&&Array.isArray(b))){const D=le(p),x=le(_),T=!q(D.value)&&b.length>+D.value,j=!q(x.value)&&b.length<+x.value;if((T||j)&&(_e(T,D.message,x.message),!r))return L(E[g].message),E}if(V&&!K&&re(b)){const{value:D,message:x}=le(V);if(De(D)&&!b.match(D)&&(E[g]={type:se.pattern,message:x,ref:a,...Z(se.pattern,x)},!r))return L(x),E}if(A){if(ie(A)){const D=await A(b,s),x=ut(D,I);if(x&&(E[g]={...x,...Z(se.validate,x.message)},!r))return L(x.message),E}else if(U(A)){let D={};for(const x in A){if(!X(D)&&!r)break;const T=ut(await A[x](b,s),I,x);T&&(D={...T,...Z(x,T.message)},L(T.message),r&&(E[g]=D))}if(!X(D)&&(E[g]={ref:I,...D},!r))return E}}return L(!0),E};function Jt(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=R(e)?n++:e[s[n++]];return e}function Qt(e){for(const s in e)if(e.hasOwnProperty(s)&&!R(e[s]))return!1;return!0}function B(e,s){const r=Array.isArray(s)?s:We(s)?[s]:_t(s),n=r.length===1?e:Jt(e,r),t=r.length-1,a=r[t];return n&&delete n[a],t!==0&&(U(n)&&X(n)||Array.isArray(n)&&Qt(n))&&B(e,r.slice(0,-1)),e}var Le=()=>{let e=[];return{get observers(){return e},next:t=>{for(const a of e)a.next&&a.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(a=>a!==t)}}),unsubscribe:()=>{e=[]}}},xe=e=>q(e)||!pt(e);function ae(e,s){if(xe(e)||xe(s))return e===s;if(fe(e)&&fe(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const t of r){const a=e[t];if(!n.includes(t))return!1;if(t!=="ref"){const u=s[t];if(fe(a)&&fe(u)||U(a)&&U(u)||Array.isArray(a)&&Array.isArray(u)?!ae(a,u):a!==u)return!1}}return!0}var xt=e=>e.type==="select-multiple",er=e=>Xe(e)||me(e),Re=e=>Fe(e)&&e.isConnected,Ct=e=>{for(const s in e)if(ie(e[s]))return!0;return!1};function Ce(e,s={}){const r=Array.isArray(e);if(U(e)||r)for(const n in e)Array.isArray(e[n])||U(e[n])&&!Ct(e[n])?(s[n]=Array.isArray(e[n])?[]:{},Ce(e[n],s[n])):q(e[n])||(s[n]=!0);return s}function At(e,s,r){const n=Array.isArray(e);if(U(e)||n)for(const t in e)Array.isArray(e[t])||U(e[t])&&!Ct(e[t])?R(s)||xe(r[t])?r[t]=Array.isArray(e[t])?Ce(e[t],[]):{...Ce(e[t])}:At(e[t],q(s)?{}:s[t],r[t]):r[t]=!ae(e[t],s[t]);return r}var be=(e,s)=>At(e,s,Ce(s)),Et=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>R(e)?e:s?e===""?NaN:e&&+e:r&&re(e)?new Date(e):n?n(e):e;function Pe(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return ze(s)?s.files:Xe(s)?Dt(e.refs).value:xt(s)?[...s.selectedOptions].map(({value:r})=>r):me(s)?Ft(e.refs).value:Et(R(s.value)?e.ref.value:s.value,e)}var tr=(e,s,r,n)=>{const t={};for(const a of e){const u=c(s,a);u&&O(t,a,u._f)}return{criteriaMode:r,names:[...e],fields:t,shouldUseNativeValidation:n}},ge=e=>R(e)?e:De(e)?e.source:U(e)?De(e.value)?e.value.source:e.value:e,rr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ct(e,s,r){const n=c(e,r);if(n||We(r))return{error:n,name:r};const t=r.split(".");for(;t.length;){const a=t.join("."),u=c(s,a),h=c(e,a);if(u&&!Array.isArray(u)&&r!==a)return{name:r};if(h&&h.type)return{name:a,error:h};t.pop()}return{name:r}}var sr=(e,s,r,n,t)=>t.isOnAll?!1:!r&&t.isOnTouch?!(s||e):(r?n.isOnBlur:t.isOnBlur)?!e:(r?n.isOnChange:t.isOnChange)?e:!0,nr=(e,s)=>!ke(c(e,s)).length&&B(e,s);const ir={mode:ee.onSubmit,reValidateMode:ee.onChange,shouldFocusError:!0};function ar(e={}){let s={...ir,...e},r={submitCount:0,isDirty:!1,isLoading:ie(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},t=U(s.defaultValues)||U(s.values)?$(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:$(t),u={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p,_=0;const y={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Le(),array:Le(),state:Le()},V=nt(s.mode),A=nt(s.reValidateMode),g=s.criteriaMode===ee.all,F=i=>o=>{clearTimeout(_),_=setTimeout(i,o)},S=async i=>{if(y.isValid||i){const o=s.resolver?X((await W()).errors):await Z(n,!0);o!==r.isValid&&m.state.next({isValid:o})}},w=(i,o)=>{(y.isValidating||y.validatingFields)&&((i||Array.from(h.mount)).forEach(l=>{l&&(o?O(r.validatingFields,l,o):B(r.validatingFields,l))}),m.state.next({validatingFields:r.validatingFields,isValidating:!X(r.validatingFields)}))},b=(i,o=[],l,v,d=!0,f=!0)=>{if(v&&l){if(u.action=!0,f&&Array.isArray(c(n,i))){const k=l(c(n,i),v.argA,v.argB);d&&O(n,i,k)}if(f&&Array.isArray(c(r.errors,i))){const k=l(c(r.errors,i),v.argA,v.argB);d&&O(r.errors,i,k),nr(r.errors,i)}if(y.touchedFields&&f&&Array.isArray(c(r.touchedFields,i))){const k=l(c(r.touchedFields,i),v.argA,v.argB);d&&O(r.touchedFields,i,k)}y.dirtyFields&&(r.dirtyFields=be(t,a)),m.state.next({name:i,isDirty:D(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else O(a,i,o)},I=(i,o)=>{O(r.errors,i,o),m.state.next({errors:r.errors})},L=i=>{r.errors=i,m.state.next({errors:r.errors,isValid:!1})},E=(i,o,l,v)=>{const d=c(n,i);if(d){const f=c(a,i,R(l)?c(t,i):l);R(f)||v&&v.defaultChecked||o?O(a,i,o?f:Pe(d._f)):j(i,f),u.mount&&S()}},J=(i,o,l,v,d)=>{let f=!1,k=!1;const C={name:i},P=!!(c(n,i)&&c(n,i)._f&&c(n,i)._f.disabled);if(!l||v){y.isDirty&&(k=r.isDirty,r.isDirty=C.isDirty=D(),f=k!==C.isDirty);const z=P||ae(c(t,i),o);k=!!(!P&&c(r.dirtyFields,i)),z||P?B(r.dirtyFields,i):O(r.dirtyFields,i,!0),C.dirtyFields=r.dirtyFields,f=f||y.dirtyFields&&k!==!z}if(l){const z=c(r.touchedFields,i);z||(O(r.touchedFields,i,l),C.touchedFields=r.touchedFields,f=f||y.touchedFields&&z!==l)}return f&&d&&m.state.next(C),f?C:{}},N=(i,o,l,v)=>{const d=c(r.errors,i),f=y.isValid&&te(o)&&r.isValid!==o;if(e.delayError&&l?(p=F(()=>I(i,l)),p(e.delayError)):(clearTimeout(_),p=null,l?O(r.errors,i,l):B(r.errors,i)),(l?!ae(d,l):d)||!X(v)||f){const k={...v,...f&&te(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...k},m.state.next(k)}},W=async i=>{w(i,!0);const o=await s.resolver(a,s.context,tr(i||h.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return w(i),o},K=async i=>{const{errors:o}=await W(i);if(i)for(const l of i){const v=c(o,l);v?O(r.errors,l,v):B(r.errors,l)}else r.errors=o;return o},Z=async(i,o,l={valid:!0})=>{for(const v in i){const d=i[v];if(d){const{_f:f,...k}=d;if(f){const C=h.array.has(f.name);w([v],!0);const P=await ft(d,a,g,s.shouldUseNativeValidation&&!o,C);if(w([v]),P[f.name]&&(l.valid=!1,o))break;!o&&(c(P,f.name)?C?Gt(r.errors,P,f.name):O(r.errors,f.name,P[f.name]):B(r.errors,f.name))}k&&await Z(k,o,l)}}return l.valid},_e=()=>{for(const i of h.unMount){const o=c(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Re(l)):!Re(o._f.ref))&&Ee(i)}h.unMount=new Set},D=(i,o)=>(i&&o&&O(a,i,o),!ae(Ye(),t)),x=(i,o,l)=>St(i,h,{...u.mount?a:R(o)?t:re(i)?{[i]:o}:o},l,o),T=i=>ke(c(u.mount?a:t,i,e.shouldUnregister?c(t,i,[]):[])),j=(i,o,l={})=>{const v=c(n,i);let d=o;if(v){const f=v._f;f&&(!f.disabled&&O(a,i,Et(o,f)),d=Fe(f.ref)&&q(o)?"":o,xt(f.ref)?[...f.ref.options].forEach(k=>k.selected=d.includes(k.value)):f.refs?me(f.ref)?f.refs.length>1?f.refs.forEach(k=>(!k.defaultChecked||!k.disabled)&&(k.checked=Array.isArray(d)?!!d.find(C=>C===k.value):d===k.value)):f.refs[0]&&(f.refs[0].checked=!!d):f.refs.forEach(k=>k.checked=k.value===d):ze(f.ref)?f.ref.value="":(f.ref.value=d,f.ref.type||m.values.next({name:i,values:{...a}})))}(l.shouldDirty||l.shouldTouch)&&J(i,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&he(i)},Q=(i,o,l)=>{for(const v in o){const d=o[v],f=`${i}.${v}`,k=c(n,f);(h.array.has(i)||!xe(d)||k&&!k._f)&&!fe(d)?Q(f,d,l):j(f,d,l)}},G=(i,o,l={})=>{const v=c(n,i),d=h.array.has(i),f=$(o);O(a,i,f),d?(m.array.next({name:i,values:{...a}}),(y.isDirty||y.dirtyFields)&&l.shouldDirty&&m.state.next({name:i,dirtyFields:be(t,a),isDirty:D(i,f)})):v&&!v._f&&!q(f)?Q(i,f,l):j(i,f,l),it(i,h)&&m.state.next({...r}),m.values.next({name:u.mount?i:void 0,values:{...a}})},ce=async i=>{u.mount=!0;const o=i.target;let l=o.name,v=!0;const d=c(n,l),f=()=>o.type?Pe(d._f):mt(i),k=C=>{v=Number.isNaN(C)||C===c(a,l,C)};if(d){let C,P;const z=f(),oe=i.type===Se.BLUR||i.type===Se.FOCUS_OUT,Bt=!rr(d._f)&&!s.resolver&&!c(r.errors,l)&&!d._f.deps||sr(oe,c(r.touchedFields,l),r.isSubmitted,A,V),Me=it(l,h,oe);O(a,l,z),oe?(d._f.onBlur&&d._f.onBlur(i),p&&p(0)):d._f.onChange&&d._f.onChange(i);const Ie=J(l,z,oe,!1),Ut=!X(Ie)||Me;if(!oe&&m.values.next({name:l,type:i.type,values:{...a}}),Bt)return y.isValid&&S(),Ut&&m.state.next({name:l,...Me?{}:Ie});if(!oe&&Me&&m.state.next({...r}),s.resolver){const{errors:rt}=await W([l]);if(k(z),v){const Nt=ct(r.errors,n,l),st=ct(rt,n,Nt.name||l);C=st.error,l=st.name,P=X(rt)}}else w([l],!0),C=(await ft(d,a,g,s.shouldUseNativeValidation))[l],w([l]),k(z),v&&(C?P=!1:y.isValid&&(P=await Z(n,!0)));v&&(d._f.deps&&he(d._f.deps),N(l,P,C,Ie))}},de=(i,o)=>{if(c(r.errors,o)&&i.focus)return i.focus(),1},he=async(i,o={})=>{let l,v;const d=Ve(i);if(s.resolver){const f=await K(R(i)?i:d);l=X(f),v=i?!d.some(k=>c(f,k)):l}else i?(v=(await Promise.all(d.map(async f=>{const k=c(n,f);return await Z(k&&k._f?{[f]:k}:k)}))).every(Boolean),!(!v&&!r.isValid)&&S()):v=l=await Z(n);return m.state.next({...!re(i)||y.isValid&&l!==r.isValid?{}:{name:i},...s.resolver||!i?{isValid:l}:{},errors:r.errors}),o.shouldFocus&&!v&&ye(n,de,i?d:h.mount),v},Ye=i=>{const o={...u.mount?a:t};return R(i)?o:re(i)?c(o,i):i.map(l=>c(o,l))},Ke=(i,o)=>({invalid:!!c((o||r).errors,i),isDirty:!!c((o||r).dirtyFields,i),error:c((o||r).errors,i),isValidating:!!c(r.validatingFields,i),isTouched:!!c((o||r).touchedFields,i)}),Lt=i=>{i&&Ve(i).forEach(o=>B(r.errors,o)),m.state.next({errors:i?r.errors:{}})},Ze=(i,o,l)=>{const v=(c(n,i,{_f:{}})._f||{}).ref,d=c(r.errors,i)||{},{ref:f,message:k,type:C,...P}=d;O(r.errors,i,{...P,...o,ref:v}),m.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&v&&v.focus&&v.focus()},Rt=(i,o)=>ie(i)?m.values.subscribe({next:l=>i(x(void 0,o),l)}):x(i,o,!0),Ee=(i,o={})=>{for(const l of i?Ve(i):h.mount)h.mount.delete(l),h.array.delete(l),o.keepValue||(B(n,l),B(a,l)),!o.keepError&&B(r.errors,l),!o.keepDirty&&B(r.dirtyFields,l),!o.keepTouched&&B(r.touchedFields,l),!o.keepIsValidating&&B(r.validatingFields,l),!s.shouldUnregister&&!o.keepDefaultValue&&B(t,l);m.values.next({values:{...a}}),m.state.next({...r,...o.keepDirty?{isDirty:D()}:{}}),!o.keepIsValid&&S()},Ge=({disabled:i,name:o,field:l,fields:v,value:d})=>{if(te(i)&&u.mount||i){const f=i?void 0:R(d)?Pe(l?l._f:c(v,o)._f):d;O(a,o,f),J(o,f,!1,!1,!0)}},Oe=(i,o={})=>{let l=c(n,i);const v=te(o.disabled);return O(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),h.mount.add(i),l?Ge({field:l,disabled:o.disabled,name:i,value:o.value}):E(i,!0,o.value),{...v?{disabled:o.disabled}:{},...s.progressive?{required:!!o.required,min:ge(o.min),max:ge(o.max),minLength:ge(o.minLength),maxLength:ge(o.maxLength),pattern:ge(o.pattern)}:{},name:i,onChange:ce,onBlur:ce,ref:d=>{if(d){Oe(i,o),l=c(n,i);const f=R(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,k=er(f),C=l._f.refs||[];if(k?C.find(P=>P===f):f===l._f.ref)return;O(n,i,{_f:{...l._f,...k?{refs:[...C.filter(Re),f,...Array.isArray(c(t,i))?[{}]:[]],ref:{type:f.type,name:i}}:{ref:f}}}),E(i,!1,void 0,f)}else l=c(n,i,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||o.shouldUnregister)&&!(kt(h.array,i)&&u.action)&&h.unMount.add(i)}}},Je=()=>s.shouldFocusError&&ye(n,de,h.mount),Pt=i=>{te(i)&&(m.state.next({disabled:i}),ye(n,(o,l)=>{const v=c(n,l);v&&(o.disabled=v._f.disabled||i,Array.isArray(v._f.refs)&&v._f.refs.forEach(d=>{d.disabled=v._f.disabled||i}))},0,!1))},Qe=(i,o)=>async l=>{let v;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=$(a);if(m.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:k}=await W();r.errors=f,d=k}else await Z(n);if(B(r.errors,"root"),X(r.errors)){m.state.next({errors:{}});try{await i(d,l)}catch(f){v=f}}else o&&await o({...r.errors},l),Je(),setTimeout(Je);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:X(r.errors)&&!v,submitCount:r.submitCount+1,errors:r.errors}),v)throw v},Tt=(i,o={})=>{c(n,i)&&(R(o.defaultValue)?G(i,$(c(t,i))):(G(i,o.defaultValue),O(t,i,$(o.defaultValue))),o.keepTouched||B(r.touchedFields,i),o.keepDirty||(B(r.dirtyFields,i),r.isDirty=o.defaultValue?D(i,$(c(t,i))):D()),o.keepError||(B(r.errors,i),y.isValid&&S()),m.state.next({...r}))},et=(i,o={})=>{const l=i?$(i):t,v=$(l),d=X(i),f=d?t:v;if(o.keepDefaultValues||(t=l),!o.keepValues){if(o.keepDirtyValues)for(const k of h.mount)c(r.dirtyFields,k)?O(f,k,c(a,k)):G(k,c(f,k));else{if(qe&&R(i))for(const k of h.mount){const C=c(n,k);if(C&&C._f){const P=Array.isArray(C._f.refs)?C._f.refs[0]:C._f.ref;if(Fe(P)){const z=P.closest("form");if(z){z.reset();break}}}}n={}}a=e.shouldUnregister?o.keepDefaultValues?$(t):{}:$(f),m.array.next({values:{...f}}),m.values.next({values:{...f}})}h={mount:o.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!y.isValid||!!o.keepIsValid||!!o.keepDirtyValues,u.watch=!!e.shouldUnregister,m.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:d?!1:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!ae(i,t)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?[]:o.keepDirtyValues?o.keepDefaultValues&&a?be(t,a):r.dirtyFields:o.keepDefaultValues&&i?be(t,i):o.keepDirty?r.dirtyFields:{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},tt=(i,o)=>et(ie(i)?i(a):i,o);return{control:{register:Oe,unregister:Ee,getFieldState:Ke,handleSubmit:Qe,setError:Ze,_executeSchema:W,_getWatch:x,_getDirty:D,_updateValid:S,_removeUnmounted:_e,_updateFieldArray:b,_updateDisabledField:Ge,_getFieldArray:T,_reset:et,_resetDefaultValues:()=>ie(s.defaultValues)&&s.defaultValues().then(i=>{tt(i,s.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:Pt,_subjects:m,_proxyFormState:y,_setErrors:L,get _fields(){return n},get _formValues(){return a},get _state(){return u},set _state(i){u=i},get _defaultValues(){return t},get _names(){return h},set _names(i){h=i},get _formState(){return r},set _formState(i){r=i},get _options(){return s},set _options(i){s={...s,...i}}},trigger:he,register:Oe,handleSubmit:Qe,watch:Rt,setValue:G,getValues:Ye,reset:tt,resetField:Tt,clearErrors:Lt,unregister:Ee,setError:Ze,setFocus:(i,o={})=>{const l=c(n,i),v=l&&l._f;if(v){const d=v.refs?v.refs[0]:v.ref;d.focus&&(d.focus(),o.shouldSelect&&d.select())}},getFieldState:Ke}}function Er(e={}){const s=M.useRef(),r=M.useRef(),[n,t]=M.useState({isDirty:!1,isValidating:!1,isLoading:ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ie(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...ar(e),formState:n});const a=s.current.control;return a._options=e,$e({subject:a._subjects.state,next:u=>{Vt(u,a._proxyFormState,a._updateFormState,!0)&&t({...a._formState})}}),M.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),M.useEffect(()=>{if(a._proxyFormState.isDirty){const u=a._getDirty();u!==n.isDirty&&a._subjects.state.next({isDirty:u})}},[a,n.isDirty]),M.useEffect(()=>{e.values&&!ae(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,t(u=>({...u}))):a._resetDefaultValues()},[e.values,a]),M.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),M.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=bt(n,a),s.current}var Ot={exports:{}};function or(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Te=or(jt),lr=qt;function ur(e,s){for(var r=Object.getOwnPropertyNames(s),n=0;n<r.length;n++){var t=r[n],a=Object.getOwnPropertyDescriptor(s,t);a&&a.configurable&&e[t]===void 0&&Object.defineProperty(e,t,a)}return e}function Ne(){return(Ne=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fr(e,s){e.prototype=Object.create(s.prototype),ur(e.prototype.constructor=e,s)}function cr(e,s){if(e==null)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],0<=s.indexOf(r)||(t[r]=e[r]);return t}function ue(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var dr=function(e,s,r,n,t,a,u,h){if(!e){var p;if(s===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var _=[r,n,t,a,u,h],y=0;(p=new Error(s.replace(/%s/g,function(){return _[y++]}))).name="Invariant Violation"}throw p.framesToPop=1,p}},dt=dr;function ht(e,s,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=s,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",s),n.moveEnd("character",r-s),n.select()}}function hr(e){var s=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)s=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(s=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:s,end:r,length:r-s}}var gr={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},vr="_";function gt(e,s,r){var n="",t="",a=null,u=[];if(s===void 0&&(s=vr),r==null&&(r=gr),!e||typeof e!="string")return{maskChar:s,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var h=!1;return e.split("").forEach(function(p){h=!h&&p==="\\"||(h||!r[p]?(u.push(n.length),n.length===u.length-1&&(t+=p)):a=n.length+1,n+=p,!1)}),{maskChar:s,formatChars:r,prefix:t,mask:n,lastEditablePosition:a,permanents:u}}function Y(e,s){return e.permanents.indexOf(s)!==-1}function Ae(e,s,r){var n=e.mask,t=e.formatChars;if(!r)return!1;if(Y(e,s))return n[s]===r;var a=t[n[s]];return new RegExp(a).test(r)}function vt(e,s){return s.split("").every(function(r,n){return Y(e,n)||!Ae(e,n,r)})}function ve(e,s){var r=e.maskChar,n=e.prefix;if(!r){for(;s.length>n.length&&Y(e,s.length-1);)s=s.slice(0,s.length-1);return s.length}for(var t=n.length,a=s.length;a>=n.length;a--){var u=s[a];if(!Y(e,a)&&Ae(e,a,u)){t=a+1;break}}return t}function Mt(e,s){return ve(e,s)===e.mask.length}function ne(e,s){var r=e.maskChar,n=e.mask,t=e.prefix;if(!r){for((s=je(e,"",s,0)).length<t.length&&(s=t);s.length<n.length&&Y(e,s.length);)s+=n[s.length];return s}if(s)return je(e,ne(e,""),s,0);for(var a=0;a<n.length;a++)Y(e,a)?s+=n[a]:s+=r;return s}function yr(e,s,r,n){var t=r+n,a=e.maskChar,u=e.mask,h=e.prefix,p=s.split("");if(a)return p.map(function(y,m){return m<r||t<=m?y:Y(e,m)?u[m]:a}).join("");for(var _=t;_<p.length;_++)Y(e,_)&&(p[_]="");return r=Math.max(h.length,r),p.splice(r,t-r),s=p.join(""),ne(e,s)}function je(e,s,r,n){var t=e.mask,a=e.maskChar,u=e.prefix,h=r.split(""),p=Mt(e,s);return!a&&n>s.length&&(s+=t.slice(s.length,n)),h.every(function(_){for(;A=_,Y(e,V=n)&&A!==t[V];){if(n>=s.length&&(s+=t[n]),y=_,m=n,a&&Y(e,m)&&y===a)return!0;if(++n>=t.length)return!1}var y,m,V,A;return!Ae(e,n,_)&&_!==a||(n<s.length?s=a||p||n<u.length?s.slice(0,n)+_+s.slice(n+1):(s=s.slice(0,n)+_+s.slice(n),ne(e,s)):a||(s+=_),++n<t.length)}),s}function pr(e,s,r,n){var t=e.mask,a=e.maskChar,u=r.split(""),h=n;return u.every(function(p){for(;y=p,Y(e,_=n)&&y!==t[_];)if(++n>=t.length)return!1;var _,y;return(Ae(e,n,p)||p===a)&&n++,n<t.length}),n-h}function mr(e,s){for(var r=s;0<=r;--r)if(!Y(e,r))return r;return null}function pe(e,s){for(var r=e.mask,n=s;n<r.length;++n)if(!Y(e,n))return n;return null}function Be(e){return e||e===0?e+"":""}function kr(e,s,r,n,t){var a=e.mask,u=e.prefix,h=e.lastEditablePosition,p=s,_="",y=0,m=0,V=Math.min(t.start,r.start);return r.end>t.start?m=(y=pr(e,n,_=p.slice(t.start,r.end),V))?t.length:0:p.length<n.length&&(m=n.length-p.length),p=n,m&&(m===1&&!t.length&&(V=t.start===r.start?pe(e,r.start):mr(e,r.start)),p=yr(e,p,V,m)),p=je(e,p,_,V),(V+=y)>=a.length?V=a.length:V<u.length&&!y?V=u.length:V>=u.length&&V<h&&y&&(V=pe(e,V)),_||(_=null),{value:p=ne(e,p),enteredString:_,selection:{start:V,end:V}}}function _r(){var e=new RegExp("windows","i"),s=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&s.test(r)}function H(e){return typeof e=="function"}function br(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function It(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function yt(e){return(It()?br():function(){return setTimeout(e,1e3/60)})(e)}function Ue(e){(It()||clearTimeout)(e)}var Vr=function(e){function s(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=yt(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){t.saveSelectionLoopDeferId===null&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){t.saveSelectionLoopDeferId!==null&&(Ue(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var g=lr.findDOMNode(ue(ue(t))),F=typeof window<"u"&&g instanceof window.Element;if(g&&!F)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},t.getInputValue=function(){var g=t.getInputDOMNode();return g?g.value:null},t.setInputValue=function(g){var F=t.getInputDOMNode();F&&(t.value=g,F.value=g)},t.setCursorToEnd=function(){var g=ve(t.maskOptions,t.value),F=pe(t.maskOptions,g);F!==null&&t.setCursorPosition(F)},t.setSelection=function(g,F,S){S===void 0&&(S={});var w=t.getInputDOMNode(),b=t.isFocused();w&&b&&(S.deferred||ht(w,g,F),t.selectionDeferId!==null&&Ue(t.selectionDeferId),t.selectionDeferId=yt(function(){t.selectionDeferId=null,ht(w,g,F)}),t.previousSelection={start:g,end:F,length:Math.abs(F-g)})},t.getSelection=function(){return hr(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(g){t.setSelection(g,g)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var g=t.maskOptions,F=g.mask,S=g.maskChar,w=g.permanents,b=g.formatChars;return{mask:F,maskChar:S,permanents:w,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:b}},t.isInputAutofilled=function(g,F,S,w){var b=t.getInputDOMNode();try{if(b.matches(":-webkit-autofill"))return!0}catch{}return!t.focused||w.end<S.length&&F.end===g.length},t.onChange=function(g){var F=ue(ue(t)).beforePasteState,S=ue(ue(t)).previousSelection,w=t.props.beforeMaskedValueChange,b=t.getInputValue(),I=t.value,L=t.getSelection();t.isInputAutofilled(b,L,I,S)&&(I=ne(t.maskOptions,""),S={start:0,end:0,length:0}),F&&(S=F.selection,I=F.value,L={start:S.start+b.length,end:S.start+b.length,length:0},b=I.slice(0,S.start)+b+I.slice(S.end),t.beforePasteState=null);var E=kr(t.maskOptions,b,L,I,S),J=E.enteredString,N=E.selection,W=E.value;if(H(w)){var K=w({value:W,selection:N},{value:I,selection:S},J,t.getBeforeMaskedValueChangeConfig());W=K.value,N=K.selection}t.setInputValue(W),H(t.props.onChange)&&t.props.onChange(g),t.isWindowsPhoneBrowser?t.setSelection(N.start,N.end,{deferred:!0}):t.setSelection(N.start,N.end)},t.onFocus=function(g){var F=t.props.beforeMaskedValueChange,S=t.maskOptions,w=S.mask,b=S.prefix;if(t.focused=!0,t.mounted=!0,w){if(t.value)ve(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var I=ne(t.maskOptions,b),L=ne(t.maskOptions,I),E=ve(t.maskOptions,L),J=pe(t.maskOptions,E),N={start:J,end:J};if(H(F)){var W=F({value:L,selection:N},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());L=W.value,N=W.selection}var K=L!==t.getInputValue();K&&t.setInputValue(L),K&&H(t.props.onChange)&&t.props.onChange(g),t.setSelection(N.start,N.end)}t.runSaveSelectionLoop()}H(t.props.onFocus)&&t.props.onFocus(g)},t.onBlur=function(g){var F=t.props.beforeMaskedValueChange,S=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,S&&!t.props.alwaysShowMask&&vt(t.maskOptions,t.value)){var w="";H(F)&&(w=F({value:w,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var b=w!==t.getInputValue();b&&t.setInputValue(w),b&&H(t.props.onChange)&&t.props.onChange(g)}H(t.props.onBlur)&&t.props.onBlur(g)},t.onMouseDown=function(g){if(!t.focused&&document.addEventListener){t.mouseDownX=g.clientX,t.mouseDownY=g.clientY,t.mouseDownTime=new Date().getTime();var F=function S(w){if(document.removeEventListener("mouseup",S),t.focused){var b=Math.abs(w.clientX-t.mouseDownX),I=Math.abs(w.clientY-t.mouseDownY),L=Math.max(b,I),E=new Date().getTime()-t.mouseDownTime;(L<=10&&E<=200||L<=5&&E<=300)&&t.setCursorToEnd()}};document.addEventListener("mouseup",F)}H(t.props.onMouseDown)&&t.props.onMouseDown(g)},t.onPaste=function(g){H(t.props.onPaste)&&t.props.onPaste(g),g.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(g){t.props.children==null&&H(t.props.inputRef)&&t.props.inputRef(g)};var a=n.mask,u=n.maskChar,h=n.formatChars,p=n.alwaysShowMask,_=n.beforeMaskedValueChange,y=n.defaultValue,m=n.value;t.maskOptions=gt(a,u,h),y==null&&(y=""),m==null&&(m=y);var V=Be(m);if(t.maskOptions.mask&&(p||V)&&(V=ne(t.maskOptions,V),H(_))){var A=n.value;n.value==null&&(A=y),V=_({value:V,selection:null},{value:A=Be(A),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=V,t}fr(s,e);var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=_r(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var n=this.previousSelection,t=this.props,a=t.beforeMaskedValueChange,u=t.alwaysShowMask,h=t.mask,p=t.maskChar,_=t.formatChars,y=this.maskOptions,m=u||this.isFocused(),V=this.props.value!=null,A=V?Be(this.props.value):this.value,g=n?n.start:null;if(this.maskOptions=gt(h,p,_),this.maskOptions.mask){!y.mask&&this.isFocused()&&this.runSaveSelectionLoop();var F=this.maskOptions.mask&&this.maskOptions.mask!==y.mask;if(y.mask||V||(A=this.getInputValue()),(F||this.maskOptions.mask&&(A||m))&&(A=ne(this.maskOptions,A)),F){var S=ve(this.maskOptions,A);(g===null||S<g)&&(g=Mt(this.maskOptions,A)?S:pe(this.maskOptions,S))}!this.maskOptions.mask||!vt(this.maskOptions,A)||m||V&&this.props.value||(A="");var w={start:g,end:g};if(H(a)){var b=a({value:A,selection:w},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());A=b.value,w=b.selection}this.value=A;var I=this.getInputValue()!==this.value;I?(this.setInputValue(this.value),this.forceUpdate()):F&&this.forceUpdate();var L=!1;w.start!=null&&w.end!=null&&(L=!n||n.start!==w.start||n.end!==w.end),(L||I)&&this.setSelection(w.start,w.end)}else y.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Ue(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var n,t=this.props,a=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),u=cr(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(a){H(a)||dt(!1);var h=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],p=Ne({},u);h.forEach(function(y){return delete p[y]}),n=a(p),h.filter(function(y){return n.props[y]!=null&&n.props[y]!==u[y]}).length&&dt(!1)}else n=Te.createElement("input",Ne({ref:this.handleRef},u));var _={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(u.disabled||u.readOnly||(_.onChange=this.onChange,_.onPaste=this.onPaste,_.onMouseDown=this.onMouseDown),u.value!=null&&(_.value=this.value)),n=Te.cloneElement(n,_)},s}(Te.Component),wr=Vr;Ot.exports=wr;var Sr=Ot.exports;const Or=Wt(Sr);export{Ar as C,Or as I,Er as u};