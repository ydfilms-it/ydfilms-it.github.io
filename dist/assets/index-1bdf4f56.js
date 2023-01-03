(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Tt(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?mo(r):Tt(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(J(e))return e}}const fo=/;(?![^(]*\))/g,co=/:([^]+)/,uo=/\/\*.*?\*\//gs;function mo(e){const t={};return e.replace(uo,"").split(fo).forEach(n=>{if(n){const r=n.split(co);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ht(e){let t="";if(te(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=ht(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",po=Ur(ho);function Ii(e){return!!e||e===""}const gr=e=>te(e)?e:e==null?"":L(e)||J(e)&&(e.toString===Ri||!j(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!L(t)&&!Li(t)?String(t):t,G={},_t=[],Se=()=>{},go=()=>!1,vo=/^on[^a-z]/,Hn=e=>vo.test(e),Wr=e=>e.startsWith("onUpdate:"),ce=Object.assign,Yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bo=Object.prototype.hasOwnProperty,B=(e,t)=>bo.call(e,t),L=Array.isArray,kt=e=>Un(e)==="[object Map]",Mi=e=>Un(e)==="[object Set]",j=e=>typeof e=="function",te=e=>typeof e=="string",Kr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Fi=e=>J(e)&&j(e.then)&&j(e.catch),Ri=Object.prototype.toString,Un=e=>Ri.call(e),yo=e=>Un(e).slice(8,-1),Li=e=>Un(e)==="[object Object]",Vr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xo=/-(\w)/g,je=Wn(e=>e.replace(xo,(t,n)=>n?n.toUpperCase():"")),wo=/\B([A-Z])/g,It=Wn(e=>e.replace(wo,"-$1").toLowerCase()),Yn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Wn(e=>e?`on${Yn(e)}`:""),Mn=(e,t)=>!Object.is(e,t),sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},zi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const _o=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Fe;class ko{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Ao(e,t=Fe){t&&t.active&&t.effects.push(e)}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&Ze)>0,$i=e=>(e.n&Ze)>0,Oo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Eo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ji(a)&&!$i(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},vr=new WeakMap;let jt=0,Ze=1;const br=30;let ke;const dt=Symbol(""),yr=Symbol("");class Xr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ao(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,Je=!0,Ze=1<<++jt,jt<=br?Oo(this):Na(this),this.fn()}finally{jt<=br&&Eo(this),Ze=1<<--jt,ke=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Di=[];function Nt(){Di.push(Je),Je=!1}function Mt(){const e=Di.pop();Je=e===void 0?!0:e}function pe(e,t,n){if(Je&&ke){let r=vr.get(e);r||vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Bi(a)}}function Bi(e,t){let n=!1;jt<=br?$i(e)||(e.n|=Ze,n=!ji(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function He(e,t,n,r,a,i){const s=vr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&L(e)){const l=zi(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":L(e)?Vr(n)&&o.push(s.get("length")):(o.push(s.get(dt)),kt(e)&&o.push(s.get(yr)));break;case"delete":L(e)||(o.push(s.get(dt)),kt(e)&&o.push(s.get(yr)));break;case"set":kt(e)&&o.push(s.get(dt));break}if(o.length===1)o[0]&&xr(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);xr(qr(l))}}function xr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Co=Ur("__proto__,__v_isRef,__isVue"),Hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kr)),So=Gr(),Po=Gr(!1,!0),To=Gr(!0),Fa=Io();function Io(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,s=this.length;i<s;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=Y(this)[t].apply(this,n);return Mt(),r}}),e}function Gr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Vo:Vi:t?Ki:Yi).get(r))return r;const s=L(r);if(!e&&s&&B(Fa,a))return Reflect.get(Fa,a,i);const o=Reflect.get(r,a,i);return(Kr(a)?Hi.has(a):Co(a))||(e||pe(r,"get",a),t)?o:fe(o)?s&&Vr(a)?o:o.value:J(o)?e?qi(o):Zr(o):o}}const No=Ui(),Mo=Ui(!0);function Ui(e=!1){return function(n,r,a,i){let s=n[r];if(Yt(s)&&fe(s)&&!fe(a))return!1;if(!e&&(!wr(a)&&!Yt(a)&&(s=Y(s),a=Y(a)),!L(n)&&fe(s)&&!fe(a)))return s.value=a,!0;const o=L(n)&&Vr(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(o?Mn(a,s)&&He(n,"set",r,a):He(n,"add",r,a)),l}}function Fo(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&He(e,"delete",t,void 0),r}function Ro(e,t){const n=Reflect.has(e,t);return(!Kr(t)||!Hi.has(t))&&pe(e,"has",t),n}function Lo(e){return pe(e,"iterate",L(e)?"length":dt),Reflect.ownKeys(e)}const Wi={get:So,set:No,deleteProperty:Fo,has:Ro,ownKeys:Lo},zo={get:To,set(e,t){return!0},deleteProperty(e,t){return!0}},jo=ce({},Wi,{get:Po,set:Mo}),Jr=e=>e,Kn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:s}=Kn(a),o=r?Jr:n?na:ta;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&pe(Y(e),"iterate",dt),Reflect.get(e,"size",e)}function Ra(e){e=Y(e);const t=Y(this);return Kn(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function La(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=Kn(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Mn(t,s)&&He(n,"set",e,t):He(n,"add",e,t),this}function za(e){const t=Y(this),{has:n,get:r}=Kn(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function ja(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=Y(s),l=t?Jr:e?na:ta;return!e&&pe(o,"iterate",dt),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),s=kt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?Jr:t?na:ta;return!t&&pe(i,"iterate",l?yr:dt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:o?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function $o(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Ra,set:La,delete:za,clear:ja,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Ra,set:La,delete:za,clear:ja,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[Do,Bo,Ho,Uo]=$o();function Qr(e,t){const n=t?e?Uo:Ho:e?Bo:Do;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Wo={get:Qr(!1,!1)},Yo={get:Qr(!1,!0)},Ko={get:Qr(!0,!1)},Yi=new WeakMap,Ki=new WeakMap,Vi=new WeakMap,Vo=new WeakMap;function qo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xo(e){return e.__v_skip||!Object.isExtensible(e)?0:qo(yo(e))}function Zr(e){return Yt(e)?e:ea(e,!1,Wi,Wo,Yi)}function Go(e){return ea(e,!1,jo,Yo,Ki)}function qi(e){return ea(e,!0,zo,Ko,Vi)}function ea(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Xo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function At(e){return Yt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Xi(e){return At(e)||Yt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Gi(e){return Fn(e,"__v_skip",!0),e}const ta=e=>J(e)?Zr(e):e,na=e=>J(e)?qi(e):e;function Jo(e){Je&&ke&&(e=Y(e),Bi(e.dep||(e.dep=qr())))}function Qo(e,t){e=Y(e),e.dep&&xr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Zo(e){return fe(e)?e.value:e}const el={get:(e,t,n)=>Zo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ji(e){return At(e)?e:new Proxy(e,el)}var Qi;class tl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qi]=!1,this._dirty=!0,this.effect=new Xr(t,()=>{this._dirty||(this._dirty=!0,Qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Qi="__v_isReadonly";function nl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Se):(r=e.get,a=e.set),new tl(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Vn(i,t,n)}return a}function Pe(e,t,n,r){if(j(e)){const i=Qe(e,t,n,r);return i&&Fi(i)&&i.catch(s=>{Vn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,s,o]);return}}rl(e,n,a,r)}function rl(e,t,n,r=!0){console.error(e)}let Kt=!1,_r=!1;const se=[];let Le=0;const Ot=[];let Be=null,lt=0;const Zi=Promise.resolve();let ra=null;function al(e){const t=ra||Zi;return e?t.then(this?e.bind(this):e):t}function il(e){let t=Le+1,n=se.length;for(;t<n;){const r=t+n>>>1;Vt(se[r])<e?t=r+1:n=r}return t}function aa(e){(!se.length||!se.includes(e,Kt&&e.allowRecurse?Le+1:Le))&&(e.id==null?se.push(e):se.splice(il(e.id),0,e),es())}function es(){!Kt&&!_r&&(_r=!0,ra=Zi.then(ns))}function sl(e){const t=se.indexOf(e);t>Le&&se.splice(t,1)}function ol(e){L(e)?Ot.push(...e):(!Be||!Be.includes(e,e.allowRecurse?lt+1:lt))&&Ot.push(e),es()}function $a(e,t=Kt?Le+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function ts(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>Vt(n)-Vt(r)),lt=0;lt<Be.length;lt++)Be[lt]();Be=null,lt=0}}const Vt=e=>e.id==null?1/0:e.id,ll=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ns(e){_r=!1,Kt=!0,se.sort(ll);const t=Se;try{for(Le=0;Le<se.length;Le++){const n=se[Le];n&&n.active!==!1&&Qe(n,null,14)}}finally{Le=0,se.length=0,ts(),Kt=!1,ra=null,(se.length||Ot.length)&&ns()}}function fl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:v}=r[d]||G;v&&(a=n.map(k=>te(k)?k.trim():k)),m&&(a=n.map(zi))}let o,l=r[o=ir(t)]||r[o=ir(je(t))];!l&&i&&(l=r[o=ir(It(t))]),l&&Pe(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Pe(c,e,6,a)}}function rs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!j(e)){const l=c=>{const d=rs(c,t,!0);d&&(o=!0,ce(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(J(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>s[l]=null):ce(s,i),J(e)&&r.set(e,s),s)}function qn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,It(t))||B(e,t))}let Oe=null,as=null;function Rn(e){const t=Oe;return Oe=e,as=e&&e.type.__scopeId||null,t}function cl(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&qa(-1);const i=Rn(t);let s;try{s=e(...a)}finally{Rn(i),r._d&&qa(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:M}=e;let H,w;const S=Rn(e);try{if(n.shapeFlag&4){const $=a||r;H=Re(d.call($,$,m,i,k,v,R)),w=l}else{const $=t;H=Re($.length>1?$(i,{attrs:l,slots:o,emit:c}):$(i,null)),w=t.props?l:ul(l)}}catch($){Bt.length=0,Vn($,e,1),H=z(qt)}let C=H;if(w&&M!==!1){const $=Object.keys(w),{shapeFlag:U}=C;$.length&&U&7&&(s&&$.some(Wr)&&(w=dl(w,s)),C=Ct(C,w))}return n.dirs&&(C=Ct(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),H=C,Rn(S),H}const ul=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},dl=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ml(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(s[v]!==r[v]&&!qn(c,v))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Da(r,s,c):!0:!!s;return!1}function Da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!qn(n,i))return!0}return!1}function hl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pl=e=>e.__isSuspense;function gl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):ol(e)}function vl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){const r=re||Oe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const pn={};function Cn(e,t,n){return is(e,t,n)}function is(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=G){const o=re;let l,c=!1,d=!1;if(fe(e)?(l=()=>e.value,c=wr(e)):At(e)?(l=()=>e,r=!0):L(e)?(d=!0,c=e.some(C=>At(C)||wr(C)),l=()=>e.map(C=>{if(fe(C))return C.value;if(At(C))return yt(C);if(j(C))return Qe(C,o,2)})):j(e)?t?l=()=>Qe(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return m&&m(),Pe(e,o,3,[v])}:l=Se,t&&r){const C=l;l=()=>yt(C())}let m,v=C=>{m=w.onStop=()=>{Qe(C,o,4)}},k;if(Gt)if(v=Se,t?n&&Pe(t,o,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const C=df();k=C.__watcherHandles||(C.__watcherHandles=[])}else return Se;let R=d?new Array(e.length).fill(pn):pn;const M=()=>{if(w.active)if(t){const C=w.run();(r||c||(d?C.some(($,U)=>Mn($,R[U])):Mn(C,R)))&&(m&&m(),Pe(t,o,3,[C,R===pn?void 0:d&&R[0]===pn?[]:R,v]),R=C)}else w.run()};M.allowRecurse=!!t;let H;a==="sync"?H=M:a==="post"?H=()=>me(M,o&&o.suspense):(M.pre=!0,o&&(M.id=o.uid),H=()=>aa(M));const w=new Xr(l,H);t?n?M():R=w.run():a==="post"?me(w.run.bind(w),o&&o.suspense):w.run();const S=()=>{w.stop(),o&&o.scope&&Yr(o.scope.effects,w)};return k&&k.push(S),S}function bl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const s=re;St(this);const o=is(a,i.bind(r),n);return s?St(s):mt(),o}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))yt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Mi(e)||kt(e))e.forEach(n=>{yt(n,t)});else if(Li(e))for(const n in e)yt(e[n],t);return e}function ia(e){return j(e)?{setup:e,name:e.name}:e}const Sn=e=>!!e.type.__asyncLoader,os=e=>e.type.__isKeepAlive;function yl(e,t){ls(e,"a",t)}function xl(e,t){ls(e,"da",t)}function ls(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Xn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)os(a.parent.vnode)&&wl(r,t,n,a),a=a.parent}}function wl(e,t,n,r){const a=Xn(t,e,r,!0);fs(()=>{Yr(r[t],a)},n)}function Xn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Nt(),St(n);const o=Pe(t,n,e,s);return mt(),Mt(),o});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=re)=>(!Gt||e==="sp")&&Xn(e,(...r)=>t(...r),n),_l=Ke("bm"),kl=Ke("m"),Al=Ke("bu"),Ol=Ke("u"),El=Ke("bum"),fs=Ke("um"),Cl=Ke("sp"),Sl=Ke("rtg"),Pl=Ke("rtc");function Tl(e,t=re){Xn("ec",e,t)}function it(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Nt(),Pe(l,n,8,[e.el,o,e,t]),Mt())}}const sa="components";function cs(e,t){return ds(sa,e,!0,t)||e}const us=Symbol();function Il(e){return te(e)?ds(sa,e,!1)||e:e||us}function ds(e,t,n=!0,r=!1){const a=Oe||re;if(a){const i=a.type;if(e===sa){const o=ff(i,!1);if(o&&(o===t||o===je(t)||o===Yn(je(t))))return i}const s=Ba(a[e]||i[e],t)||Ba(a.appContext[e],t);return!s&&r?i:s}}function Ba(e,t){return e&&(e[t]||e[je(t)]||e[Yn(je(t))])}function Nl(e,t,n,r){let a;const i=n&&n[r];if(L(e)||te(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const kr=e=>e?Os(e)?ca(e)||e.proxy:kr(e.parent):null,Dt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=al.bind(e.proxy)),$watch:e=>bl.bind(e)}),lr=(e,t)=>e!==G&&!e.__isScriptSetup&&B(e,t),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(lr(r,t))return s[t]=1,r[t];if(a!==G&&B(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return s[t]=3,i[t];if(n!==G&&B(n,t))return s[t]=4,n[t];Ar&&(s[t]=0)}}const d=Dt[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==G&&B(n,t))return s[t]=4,n[t];if(v=l.config.globalProperties,B(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return lr(a,t)?(a[t]=n,!0):r!==G&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==G&&B(e,s)||lr(t,s)||(o=i[0])&&B(o,s)||B(r,s)||B(Dt,s)||B(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ar=!0;function Fl(e){const t=oa(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ha(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:M,deactivated:H,beforeDestroy:w,beforeUnmount:S,destroyed:C,unmounted:$,render:U,renderTracked:ue,renderTriggered:ae,errorCaptured:we,serverPrefetch:ve,expose:$e,inheritAttrs:Rt,components:sn,directives:on,filters:nr}=t;if(c&&Rl(c,r,null,e.appContext.config.unwrapInjectedRef),s)for(const Q in s){const K=s[Q];j(K)&&(r[Q]=K.bind(n))}if(a){const Q=a.call(n,n);J(Q)&&(e.data=Zr(Q))}if(Ar=!0,i)for(const Q in i){const K=i[Q],rt=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Se,ln=!j(K)&&j(K.set)?K.set.bind(n):Se,at=ye({get:rt,set:ln});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ie=>at.value=Ie})}if(o)for(const Q in o)ms(o[Q],r,n,Q);if(l){const Q=j(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{vl(K,Q[K])})}d&&Ha(d,e,"c");function oe(Q,K){L(K)?K.forEach(rt=>Q(rt.bind(n))):K&&Q(K.bind(n))}if(oe(_l,m),oe(kl,v),oe(Al,k),oe(Ol,R),oe(yl,M),oe(xl,H),oe(Tl,we),oe(Pl,ue),oe(Sl,ae),oe(El,S),oe(fs,$),oe(Cl,ve),L($e))if($e.length){const Q=e.exposed||(e.exposed={});$e.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:rt=>n[K]=rt})})}else e.exposed||(e.exposed={});U&&e.render===Se&&(e.render=U),Rt!=null&&(e.inheritAttrs=Rt),sn&&(e.components=sn),on&&(e.directives=on)}function Rl(e,t,n=Se,r=!1){L(e)&&(e=Or(e));for(const a in e){const i=e[a];let s;J(i)?"default"in i?s=En(i.from||a,i.default,!0):s=En(i.from||a):s=En(i),fe(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function Ha(e,t,n){Pe(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const a=r.includes(".")?ss(n,r):()=>n[r];if(te(e)){const i=t[e];j(i)&&Cn(a,i)}else if(j(e))Cn(a,e.bind(n));else if(J(e))if(L(e))e.forEach(i=>ms(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Cn(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,s,!0)),Ln(l,t,s)),J(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(s=>Ln(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Ll[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Ll={data:Ua,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ot,directives:ot,watch:jl,provide:Ua,inject:zl};function Ua(e,t){return t?e?function(){return ce(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function zl(e,t){return ot(Or(e),Or(t))}function Or(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?ce(ce(Object.create(null),e),t):t}function jl(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function $l(e,t,n,r=!1){const a={},i={};Fn(i,Jn,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Go(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Dl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=Y(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(qn(e.emitsOptions,v))continue;const k=t[v];if(l)if(B(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=je(v);a[R]=Er(l,o,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{hs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!B(t,m)&&((d=It(m))===m||!B(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Er(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!B(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&B(a,d=je(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:qn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=Y(n),c=o||G;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Er(a,l,m,c[m],e,!B(c,m))}}return s}function Er(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=B(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(St(a),r=c[n]=l.call(null,t),mt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===It(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,k]=ps(m,t,!0);ce(s,v),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,_t),_t;if(L(i))for(let d=0;d<i.length;d++){const m=je(i[d]);Wa(m)&&(s[m]=G)}else if(i)for(const d in i){const m=je(d);if(Wa(m)){const v=i[d],k=s[m]=L(v)||j(v)?{type:v}:Object.assign({},v);if(k){const R=Va(Boolean,k.type),M=Va(String,k.type);k[0]=R>-1,k[1]=M<0||R<M,(R>-1||B(k,"default"))&&o.push(m)}}}const c=[s,o];return J(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ya(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ka(e,t){return Ya(e)===Ya(t)}function Va(e,t){return L(t)?t.findIndex(n=>Ka(n,e)):j(t)&&Ka(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",la=e=>L(e)?e.map(Re):[Re(e)],Bl=(e,t,n)=>{if(t._n)return t;const r=cl((...a)=>la(t(...a)),n);return r._c=!1,r},vs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(j(i))t[a]=Bl(a,i,r);else if(i!=null){const s=la(i);t[a]=()=>s}}},bs=(e,t)=>{const n=la(t);e.slots.default=()=>n},Hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Fn(t,"_",n)):vs(t,e.slots={})}else e.slots={},t&&bs(e,t);Fn(e.slots,Jn,1)},Ul=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=G;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ce(a,t),!n&&o===1&&delete a._):(i=!t.$stable,vs(t,a)),s=t}else t&&(bs(e,t),s={default:1});if(i)for(const o in a)!gs(o)&&!(o in s)&&delete a[o]};function ys(){return{app:null,config:{isNativeTag:go,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Yl(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=ys(),s=new Set;let o=!1;const l=i.app={_uid:Wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&j(c.install)?(s.add(c),c.install(l,...d)):j(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const v=z(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),o=!0,l._container=c,c.__vue_app__=l,ca(v.component)||v.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Cr(e,t,n,r,a=!1){if(L(e)){e.forEach((v,k)=>Cr(v,t&&(L(t)?t[k]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===G?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,B(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),j(l))Qe(l,o,12,[s,d]);else{const v=te(l),k=fe(l);if(v||k){const R=()=>{if(e.f){const M=v?B(m,l)?m[l]:d[l]:l.value;a?L(M)&&Yr(M,i):L(M)?M.includes(i)||M.push(i):v?(d[l]=[i],B(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=s,B(m,l)&&(m[l]=s)):k&&(l.value=s,e.k&&(d[e.k]=s))};s?(R.id=-1,me(R,n)):R()}}}const me=gl;function Kl(e){return Vl(e)}function Vl(e,t){const n=_o();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Se,insertStaticContent:R}=e,M=(f,u,h,g=null,p=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=fn(f),Ie(f,p,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case Gn:H(f,u,h,g);break;case qt:w(f,u,h,g);break;case Pn:f==null&&S(u,h,g,A);break;case be:sn(f,u,h,g,p,x,A,y,_);break;default:P&1?U(f,u,h,g,p,x,A,y,_):P&6?on(f,u,h,g,p,x,A,y,_):(P&64||P&128)&&b.process(f,u,h,g,p,x,A,y,_,vt)}I!=null&&p&&Cr(I,f&&f.ref,x,u||f,!u)},H=(f,u,h,g)=>{if(f==null)r(u.el=o(u.children),h,g);else{const p=u.el=f.el;u.children!==f.children&&c(p,u.children)}},w=(f,u,h,g)=>{f==null?r(u.el=l(u.children||""),h,g):u.el=f.el},S=(f,u,h,g)=>{[f.el,f.anchor]=R(f.children,u,h,g,f.el,f.anchor)},C=({el:f,anchor:u},h,g)=>{let p;for(;f&&f!==u;)p=v(f),r(f,h,g),f=p;r(u,h,g)},$=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=v(f),a(f),f=h;a(u)},U=(f,u,h,g,p,x,A,y,_)=>{A=A||u.type==="svg",f==null?ue(u,h,g,p,x,A,y,_):ve(f,u,p,x,A,y,_)},ue=(f,u,h,g,p,x,A,y)=>{let _,b;const{type:I,props:P,shapeFlag:N,transition:F,dirs:D}=f;if(_=f.el=s(f.type,x,P&&P.is,P),N&8?d(_,f.children):N&16&&we(f.children,_,null,g,p,x&&I!=="foreignObject",A,y),D&&it(f,null,g,"created"),P){for(const W in P)W!=="value"&&!On(W)&&i(_,W,null,P[W],x,f.children,g,p,De);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Me(b,g,f)}ae(_,f,f.scopeId,A,g),D&&it(f,null,g,"beforeMount");const V=(!p||p&&!p.pendingBranch)&&F&&!F.persisted;V&&F.beforeEnter(_),r(_,u,h),((b=P&&P.onVnodeMounted)||V||D)&&me(()=>{b&&Me(b,g,f),V&&F.enter(_),D&&it(f,null,g,"mounted")},p)},ae=(f,u,h,g,p)=>{if(h&&k(f,h),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(p){let x=p.subTree;if(u===x){const A=p.vnode;ae(f,A,A.scopeId,A.slotScopeIds,p.parent)}}},we=(f,u,h,g,p,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?Ge(f[b]):Re(f[b]);M(null,I,u,h,g,p,x,A,y)}},ve=(f,u,h,g,p,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=u;_|=f.patchFlag&16;const P=f.props||G,N=u.props||G;let F;h&&st(h,!1),(F=N.onVnodeBeforeUpdate)&&Me(F,h,u,f),I&&it(u,f,h,"beforeUpdate"),h&&st(h,!0);const D=p&&u.type!=="foreignObject";if(b?$e(f.dynamicChildren,b,y,h,g,D,x):A||K(f,u,y,null,h,g,D,x,!1),_>0){if(_&16)Rt(y,u,P,N,h,g,p);else if(_&2&&P.class!==N.class&&i(y,"class",null,N.class,p),_&4&&i(y,"style",P.style,N.style,p),_&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const ee=V[W],_e=P[ee],bt=N[ee];(bt!==_e||ee==="value")&&i(y,ee,_e,bt,p,f.children,h,g,De)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Rt(y,u,P,N,h,g,p);((F=N.onVnodeUpdated)||I)&&me(()=>{F&&Me(F,h,u,f),I&&it(u,f,h,"updated")},g)},$e=(f,u,h,g,p,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],I=_.el&&(_.type===be||!zt(_,b)||_.shapeFlag&70)?m(_.el):h;M(_,b,I,null,g,p,x,A,!0)}},Rt=(f,u,h,g,p,x,A)=>{if(h!==g){if(h!==G)for(const y in h)!On(y)&&!(y in g)&&i(f,y,h[y],null,A,u.children,p,x,De);for(const y in g){if(On(y))continue;const _=g[y],b=h[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,p,x,De)}"value"in g&&i(f,"value",h.value,g.value)}},sn=(f,u,h,g,p,x,A,y,_)=>{const b=u.el=f?f.el:o(""),I=u.anchor=f?f.anchor:o("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,h,g),r(I,h,g),we(u.children,h,I,p,x,A,y,_)):P>0&&P&64&&N&&f.dynamicChildren?($e(f.dynamicChildren,N,h,p,x,A,y),(u.key!=null||p&&u===p.subTree)&&xs(f,u,!0)):K(f,u,h,I,p,x,A,y,_)},on=(f,u,h,g,p,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?p.ctx.activate(u,h,g,A,_):nr(u,h,g,p,x,A,_):Oa(f,u,_)},nr=(f,u,h,g,p,x,A)=>{const y=f.component=rf(f,g,p);if(os(f)&&(y.ctx.renderer=vt),af(y),y.asyncDep){if(p&&p.registerDep(y,oe),!f.el){const _=y.subTree=z(qt);w(null,_,u,h)}return}oe(y,f,u,h,p,x,A)},Oa=(f,u,h)=>{const g=u.component=f.component;if(ml(f,u,h))if(g.asyncDep&&!g.asyncResolved){Q(g,u,h);return}else g.next=u,sl(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,h,g,p,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:N,parent:F,vnode:D}=f,V=I,W;st(f,!1),I?(I.el=D.el,Q(f,I,A)):I=D,P&&sr(P),(W=I.props&&I.props.onVnodeBeforeUpdate)&&Me(W,F,I,D),st(f,!0);const ee=or(f),_e=f.subTree;f.subTree=ee,M(_e,ee,m(_e.el),fn(_e),f,p,x),I.el=ee.el,V===null&&hl(f,ee.el),N&&me(N,p),(W=I.props&&I.props.onVnodeUpdated)&&me(()=>Me(W,F,I,D),p)}else{let I;const{el:P,props:N}=u,{bm:F,m:D,parent:V}=f,W=Sn(u);if(st(f,!1),F&&sr(F),!W&&(I=N&&N.onVnodeBeforeMount)&&Me(I,V,u),st(f,!0),P&&ar){const ee=()=>{f.subTree=or(f),ar(P,f.subTree,f,p,null)};W?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=or(f);M(null,ee,h,g,f,p,x),u.el=ee.el}if(D&&me(D,p),!W&&(I=N&&N.onVnodeMounted)){const ee=u;me(()=>Me(I,V,ee),p)}(u.shapeFlag&256||V&&Sn(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&me(f.a,p),f.isMounted=!0,u=h=g=null}},_=f.effect=new Xr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,st(f,!0),b()},Q=(f,u,h)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Dl(f,u.props,g,h),Ul(f,u.children,h),Nt(),$a(),Mt()},K=(f,u,h,g,p,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:F}=u;if(N>0){if(N&128){ln(b,P,h,g,p,x,A,y,_);return}else if(N&256){rt(b,P,h,g,p,x,A,y,_);return}}F&8?(I&16&&De(b,p,x),P!==b&&d(h,P)):I&16?F&16?ln(b,P,h,g,p,x,A,y,_):De(b,p,x,!0):(I&8&&d(h,""),F&16&&we(P,h,g,p,x,A,y,_))},rt=(f,u,h,g,p,x,A,y,_)=>{f=f||_t,u=u||_t;const b=f.length,I=u.length,P=Math.min(b,I);let N;for(N=0;N<P;N++){const F=u[N]=_?Ge(u[N]):Re(u[N]);M(f[N],F,h,null,p,x,A,y,_)}b>I?De(f,p,x,!0,!1,P):we(u,h,g,p,x,A,y,_,P)},ln=(f,u,h,g,p,x,A,y,_)=>{let b=0;const I=u.length;let P=f.length-1,N=I-1;for(;b<=P&&b<=N;){const F=f[b],D=u[b]=_?Ge(u[b]):Re(u[b]);if(zt(F,D))M(F,D,h,null,p,x,A,y,_);else break;b++}for(;b<=P&&b<=N;){const F=f[P],D=u[N]=_?Ge(u[N]):Re(u[N]);if(zt(F,D))M(F,D,h,null,p,x,A,y,_);else break;P--,N--}if(b>P){if(b<=N){const F=N+1,D=F<I?u[F].el:g;for(;b<=N;)M(null,u[b]=_?Ge(u[b]):Re(u[b]),h,D,p,x,A,y,_),b++}}else if(b>N)for(;b<=P;)Ie(f[b],p,x,!0),b++;else{const F=b,D=b,V=new Map;for(b=D;b<=N;b++){const he=u[b]=_?Ge(u[b]):Re(u[b]);he.key!=null&&V.set(he.key,b)}let W,ee=0;const _e=N-D+1;let bt=!1,Sa=0;const Lt=new Array(_e);for(b=0;b<_e;b++)Lt[b]=0;for(b=F;b<=P;b++){const he=f[b];if(ee>=_e){Ie(he,p,x,!0);continue}let Ne;if(he.key!=null)Ne=V.get(he.key);else for(W=D;W<=N;W++)if(Lt[W-D]===0&&zt(he,u[W])){Ne=W;break}Ne===void 0?Ie(he,p,x,!0):(Lt[Ne-D]=b+1,Ne>=Sa?Sa=Ne:bt=!0,M(he,u[Ne],h,null,p,x,A,y,_),ee++)}const Pa=bt?ql(Lt):_t;for(W=Pa.length-1,b=_e-1;b>=0;b--){const he=D+b,Ne=u[he],Ta=he+1<I?u[he+1].el:g;Lt[b]===0?M(null,Ne,h,Ta,p,x,A,y,_):bt&&(W<0||b!==Pa[W]?at(Ne,h,Ta,2):W--)}}},at=(f,u,h,g,p=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){at(f.component.subTree,u,h,g);return}if(b&128){f.suspense.move(u,h,g);return}if(b&64){A.move(f,u,h,vt);return}if(A===be){r(x,u,h);for(let P=0;P<_.length;P++)at(_[P],u,h,g);r(f.anchor,u,h);return}if(A===Pn){C(f,u,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,h),me(()=>y.enter(x),p);else{const{leave:P,delayLeave:N,afterLeave:F}=y,D=()=>r(x,u,h),V=()=>{P(x,()=>{D(),F&&F()})};N?N(x,D,V):V()}else r(x,u,h)},Ie=(f,u,h,g=!1,p=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:N}=f;if(y!=null&&Cr(y,null,h,f,!0),I&256){u.ctx.deactivate(f);return}const F=I&1&&N,D=!Sn(f);let V;if(D&&(V=A&&A.onVnodeBeforeUnmount)&&Me(V,u,f),I&6)lo(f.component,h,g);else{if(I&128){f.suspense.unmount(h,g);return}F&&it(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,h,p,vt,g):b&&(x!==be||P>0&&P&64)?De(b,u,h,!1,!0):(x===be&&P&384||!p&&I&16)&&De(_,u,h),g&&Ea(f)}(D&&(V=A&&A.onVnodeUnmounted)||F)&&me(()=>{V&&Me(V,u,f),F&&it(f,null,u,"unmounted")},h)},Ea=f=>{const{type:u,el:h,anchor:g,transition:p}=f;if(u===be){oo(h,g);return}if(u===Pn){$(f);return}const x=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:A,delayLeave:y}=p,_=()=>A(h,x);y?y(f.el,x,_):_()}else x()},oo=(f,u)=>{let h;for(;f!==u;)h=v(f),a(f),f=h;a(u)},lo=(f,u,h)=>{const{bum:g,scope:p,update:x,subTree:A,um:y}=f;g&&sr(g),p.stop(),x&&(x.active=!1,Ie(A,f,u,h)),y&&me(y,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},De=(f,u,h,g=!1,p=!1,x=0)=>{for(let A=x;A<f.length;A++)Ie(f[A],u,h,g,p)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ca=(f,u,h)=>{f==null?u._vnode&&Ie(u._vnode,null,null,!0):M(u._vnode||null,f,u,null,null,null,h),$a(),ts(),u._vnode=f},vt={p:M,um:Ie,m:at,r:Ea,mt:nr,mc:we,pc:K,pbc:$e,n:fn,o:e};let rr,ar;return t&&([rr,ar]=t(vt)),{render:Ca,hydrate:rr,createApp:Yl(Ca,rr)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xs(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ge(a[i]),o.el=s.el),n||xs(s,o)),o.type===Gn&&(o.el=s.el)}}function ql(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Xl=e=>e.__isTeleport,be=Symbol(void 0),Gn=Symbol(void 0),qt=Symbol(void 0),Pn=Symbol(void 0),Bt=[];let Ee=null;function xe(e=!1){Bt.push(Ee=e?null:[])}function Gl(){Bt.pop(),Ee=Bt[Bt.length-1]||null}let Xt=1;function qa(e){Xt+=e}function ws(e){return e.dynamicChildren=Xt>0?Ee||_t:null,Gl(),Xt>0&&Ee&&Ee.push(e),e}function Te(e,t,n,r,a,i){return ws(O(e,t,n,r,a,i,!0))}function Jl(e,t,n,r,a){return ws(z(e,t,n,r,a,!0))}function Sr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",_s=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||fe(e)||j(e)?{i:Oe,r:e,k:t,f:!!n}:e:null;function O(e,t=null,n=null,r=0,a=null,i=e===be?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&Tn(t),scopeId:as,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Oe};return o?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Xt>0&&!s&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const z=Ql;function Ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===us)&&(e=qt),Sr(e)){const o=Ct(e,t,!0);return n&&fa(o,n),Xt>0&&!i&&Ee&&(o.shapeFlag&6?Ee[Ee.indexOf(e)]=o:Ee.push(o)),o.patchFlag|=-2,o}if(cf(e)&&(e=e.__vccOpts),t){t=Zl(t);let{class:o,style:l}=t;o&&!te(o)&&(t.class=ht(o)),J(l)&&(Xi(l)&&!L(l)&&(l=ce({},l)),t.style=Tt(l))}const s=te(e)?1:pl(e)?128:Xl(e)?64:J(e)?4:j(e)?2:0;return O(e,t,n,r,a,s,i,!0)}function Zl(e){return e?Xi(e)||Jn in e?ce({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?ef(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&_s(o),ref:t&&t.ref?n&&a?L(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ks(e=" ",t=0){return z(Gn,null,e,t)}function As(e,t){const n=z(Pn,null,e);return n.staticCount=t,n}function Re(e){return e==null||typeof e=="boolean"?z(qt):L(e)?z(be,null,e.slice()):typeof e=="object"?Ge(e):z(Gn,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[ks(t)]):n=8);e.children=t,e.shapeFlag|=n}function ef(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ht([t.class,r.class]));else if(a==="style")t.style=Tt([t.style,r.style]);else if(Hn(a)){const i=t[a],s=r[a];s&&i!==s&&!(L(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Pe(e,t,7,[n,r])}const tf=ys();let nf=0;function rf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||tf,i={uid:nf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ko(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,a),emitsOptions:rs(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fl.bind(null,i),e.ce&&e.ce(i),i}let re=null;const St=e=>{re=e,e.scope.on()},mt=()=>{re&&re.scope.off(),re=null};function Os(e){return e.vnode.shapeFlag&4}let Gt=!1;function af(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=Os(e);$l(e,n,a,t),Hl(e,r);const i=a?sf(e,t):void 0;return Gt=!1,i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gi(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lf(e):null;St(e),Nt();const i=Qe(r,e,0,[e.props,a]);if(Mt(),mt(),Fi(i)){if(i.then(mt,mt),t)return i.then(s=>{Xa(e,s,t)}).catch(s=>{Vn(s,e,0)});e.asyncDep=i}else Xa(e,i,t)}else Es(e,t)}function Xa(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Ji(t)),Es(e,n)}let Ga;function Es(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:o},s),l);r.render=Ga(a,c)}}e.render=r.render||Se}St(e),Nt(),Fl(e),Mt(),mt()}function of(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function lf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=of(e))},slots:e.slots,emit:e.emit,expose:t}}function ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function ff(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return j(e)&&"__vccOpts"in e}const ye=(e,t)=>nl(e,t,Gt);function Cs(e,t,n){const r=arguments.length;return r===2?J(t)&&!L(t)?Sr(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),z(e,t,n))}const uf=Symbol(""),df=()=>En(uf),mf="3.2.45",hf="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,Ja=ft&&ft.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(hf,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ja.innerHTML=r?`<svg>${e}</svg>`:e;const o=Ja.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vf(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)Pr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&Pr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Qa=/\s*!important$/;function Pr(e,t,n){if(L(n))n.forEach(r=>Pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bf(e,t);Qa.test(n)?e.setProperty(It(r),n.replace(Qa,""),"important"):e[r]=n}}const Za=["Webkit","Moz","ms"],fr={};function bf(e,t){const n=fr[t];if(n)return n;let r=je(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Yn(r);for(let a=0;a<Za.length;a++){const i=Za[a]+r;if(i in e)return fr[t]=i}return t}const ei="http://www.w3.org/1999/xlink";function yf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ei,t.slice(6,t.length)):e.setAttributeNS(ei,t,n);else{const i=po(t);n==null||i&&!Ii(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ii(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function wf(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}function kf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Af(t);if(r){const c=i[t]=Cf(r,a);wf(e,o,c,l)}else s&&(_f(e,o,s,l),i[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(ti.test(e)){t={};let r;for(;r=e.match(ti);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let cr=0;const Of=Promise.resolve(),Ef=()=>cr||(Of.then(()=>cr=0),cr=Date.now());function Cf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Sf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Sf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ni=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?gf(e,r,a):t==="style"?vf(e,n,r):Hn(t)?Wr(t)||kf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,a))?xf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yf(e,t,r,a))};function Tf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ni.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ni.test(t)&&te(n)?!1:t in e}const If=ce({patchProp:Pf},pf);let ri;function Nf(){return ri||(ri=Kl(If))}const Mf=(...e)=>{const t=Nf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Ff(e){return te(e)?document.querySelector(e):e}const Ss=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Rf={props:{isVideo:{type:Boolean,default:!1},videoSrc:{type:String,default:""},imageSrc:{type:String,default:""}},created(){window.addEventListener("resize",this.adaptiveSize)},destroyed(){window.removeEventListener("resize",this.adaptiveSize)},mounted(){this.adaptiveSize(null)},data(){return{isWFull:!1,isHFull:!1}},methods:{adaptiveSize(e){const t=document.querySelector(".adaptive-bg"),n=t.getBoundingClientRect().width/t.getBoundingClientRect().height,r=window.innerWidth/window.innerHeight;console.log(n,r),n>r?(this.isWFull=!1,this.isHFull=!0):(this.isWFull=!0,this.isHFull=!1)}}},Lf={class:"sticky top-0 -z-50 min-w-[375px] w-full h-screen bg-[#7D7871]/30 pointer-events-none adaptive-bg-root"},zf={class:"-z-50 adaptive-bg-container flex items-center justify-center w-full h-full overflow-hidden"},jf=["src"],$f=["src"];function Df(e,t,n,r,a,i){return xe(),Te("div",Lf,[O("div",zf,[n.isVideo?(xe(),Te("iframe",{key:0,class:ht(["-z-50 adaptive-bg aspect-video max-w-none",{"w-full":a.isWFull,"h-full":a.isHFull}]),src:n.videoSrc,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",title:"Acts of Adventure | Elopement Videographers","data-ready":"true"},null,10,jf)):(xe(),Te("img",{key:1,class:ht(["-z-50 adaptive-bg aspect-video max-w-none",{"w-full":a.isWFull,"h-full":a.isHFull}]),src:require("../../assets/"+n.imageSrc)},null,10,$f))])])}const Ps=Ss(Rf,[["render",Df]]),Bf={props:{title:String,links:String,showunderline:{type:Boolean,default:!1},showborder:{type:Boolean,default:!1}}},Hf=["href"];function Uf(e,t,n,r,a,i){return xe(),Te("a",{href:n.links,class:ht(["no-underline hover:bg-transparent active:bg-transparent focus:bg-transparent",{"hover:color-transparent":n.showunderline,"hover:underline":n.showunderline,"hover:underline-offset-8":n.showunderline,"active:color-transparent":n.showunderline,"active:underline":n.showunderline,"active:underline-offset-8":n.showunderline,"focus:color-transparent":n.showunderline,"focus:underline":n.showunderline,"focus:underline-offset-8":n.showunderline}])},[O("span",{class:ht({border:n.showborder,"px-8":n.showborder})},gr(n.title),3)],10,Hf)}const ie=Ss(Bf,[["render",Uf]]),Wf={class:"my-0 mx-auto p-8 max-w-7xl"},Yf={class:"navbar text-white"},Kf=O("div",{class:"flex-1"},[O("a",{herf:"#"},[O("span",{class:"font-['Great_Vibes'] font-bold text-5xl"},"YD"),O("span",{class:"font-['Great_Vibes'] font-bold text-2xl text-white"},"Films")])],-1),Vf={class:"flex-none"},qf={class:"menu menu-horizontal rounded-none px-1 hidden lg:flex text-2xl"},Xf={for:"my-modal-3",tabindex:"0",class:"btn btn-ghost lg:hidden"},Gf=O("input",{type:"checkbox",id:"my-modal-3",class:"modal-toggle"},null,-1),Jf={class:"modal"},Qf={class:"relative min-h-screen min-w-full rounded-none bg-black text-white"},Zf={for:"my-modal-3",class:"absolute top-8 right-8"},ec=O("h1",{class:"py-8"},[O("span",{class:"font-['Great_Vibes'] font-bold text-5xl"},"YD"),O("span",{class:"font-['Great_Vibes'] font-bold text-2xl"},"Films")],-1),tc={class:"menu text-2xl"},nc={created(){window.addEventListener("resize",this.adaptiveSize)},destroyed(){window.removeEventListener("resize",this.adaptiveSize)},mounted(){this.adaptiveSize(null)},data(){return{dropmenuwidth:0}},methods:{adaptiveSize(e){const t=document.querySelector("header");this.dropmenuwidth=t.getBoundingClientRect().width-80}}},rc=Object.assign(nc,{__name:"Navbar",setup(e){return(t,n)=>{const r=cs("font-awesome-icon");return xe(),Te(be,null,[O("header",Wf,[O("div",Yf,[Kf,O("div",Vf,[O("ul",qf,[O("li",null,[z(ie,{title:"WEDDING",links:"#/",showunderline:""})]),O("li",null,[z(ie,{title:"PORTFOLIO",links:"#/portfolio",showunderline:""})]),O("li",null,[z(ie,{title:"INVESTMENT",links:"#/investment",showunderline:""})]),O("li",null,[z(ie,{title:"CONTACT",links:"#/contact",showunderline:""})]),O("li",null,[z(ie,{class:"font-bold",title:"MEET US",links:"#/contact",showborder:""})])]),O("label",Xf,[z(r,{class:"w-12 h-12",icon:"fa-solid fa-bars"})])])])]),Gf,O("div",Jf,[O("div",Qf,[O("label",Zf,[z(r,{class:"w-12 h-12",icon:"fa-solid fa-xmark"})]),ec,O("ul",tc,[O("li",null,[z(ie,{class:"mx-auto",title:"WEDDING",links:"#",showunderline:""})]),O("li",null,[z(ie,{class:"mx-auto",title:"PORTFOLIO",links:"#",showunderline:""})]),O("li",null,[z(ie,{class:"mx-auto",title:"INVESTMENT",links:"#",showunderline:""})]),O("li",null,[z(ie,{class:"mx-auto",title:"CONTACT",links:"#",showunderline:""})]),O("li",null,[z(ie,{class:"mx-auto font-bold",title:"MEET US",links:"#",showborder:""})])])])])],64)}}}),ac={class:"my-0 mx-auto footer footer-center p-10 bg-white text-black rounded"},ic={class:"max-w-7xl grid grid-flow-row sm:grid-flow-col md:grid-flow-col lg:grid-flow-col gap-8 text-xl"},sc={class:"max-w-7xl grid grid-flow-row sm:grid-flow-col md:grid-flow-col lg:grid-flow-col gap-8"},oc=O("div",{class:"max-w-7xl text-xl"},[O("p",null,[ks("Copyright © 2023 - All right reserved by "),O("span",{class:"font-['Great_Vibes'] font-bold"},"YD Films")])],-1),lc={__name:"Bottom",setup(e){return(t,n)=>{const r=cs("font-awesome-icon");return xe(),Te("footer",ac,[O("div",ic,[z(ie,{title:"WEDDING",links:"#",showunderline:""}),z(ie,{title:"PORTFOLIO",links:"#",showunderline:""}),z(ie,{title:"INVESTMENT",links:"#",showunderline:""}),z(ie,{title:"CONTACT",links:"#",showunderline:""})]),O("div",sc,[O("a",null,[z(r,{class:"w-6 h-6",icon:"fa-brands fa-facebook"})]),O("a",null,[z(r,{class:"w-6 h-6",icon:"fa-brands fa-instagram"})]),O("a",null,[z(r,{class:"w-6 h-6",icon:"fa-brands fa-youtube"})]),O("a",null,[z(r,{class:"w-6 h-6",icon:"fa-brands fa-bilibili"})])]),oc])}}},fc={class:"card w-72 glass !p-0"},cc={class:"w-72 h-40"},uc=["src","art"],dc={class:"card-body"},mc={class:"card-title font-bold text-xl"},hc={class:"text-left text-sm"},pc={class:"card-actions justify-end text-left text-sm"},gc={props:{imagesrc:String,links:String,linkdec:String,title:String,describe:String}},vc=Object.assign(gc,{__name:"Card",setup(e){return(t,n)=>(xe(),Te("div",fc,[O("figure",cc,[O("img",{class:"w-full",src:e.imagesrc,art:e.links},null,8,uc)]),O("div",dc,[O("h2",mc,gr(e.title),1),O("p",hc,gr(e.describe),1),O("div",pc,[O("p",null,[z(ie,{title:e.linkdec,links:e.links,showunderline:""},null,8,["title","links"])])])])]))}}),bc={class:"min-h-screen"},yc={class:"m-0 p-0 w-full"},xc=As('<div class="hero min-h-screen bg-base-200/0 text-white"><div class="hero-content flex-col lg:flex-row"><div class="max-w-sm text-center"><div class="flex items-center justify-center"><img src="https://actsofadventure.com/wp-content/uploads/2020/11/Acts-of-adventure-Final_Full-Logo-White-Mobile-2-1.png"></div><p class="text-xl">North Carolina Wedding</p><p class="text-xl">&amp; Elopement Videographer</p></div><div class="max-w-sm"><div class="flex items-center justify-center"><h1 class="pt-10 text-5xl font-bold font-[&#39;Great_Vibes&#39;]">Capture YOUR Perfect Day</h1></div><p class="py-2 text-xl">We document all of the laughters and every tears so you can relive your perfect day again and again.</p></div></div></div>',1),wc={class:"hero min-h-fit h-[60vh] bg-[#E5DAD5] text-[#4F3D20]"},_c={class:"hero-content"},kc={class:"grid grid-flow-row gap-8"},Ac=O("div",null,[O("h1",{class:"pt-10 text-5xl font-bold font-['Great_Vibes']"},"Your once in a lifetime moments matter the most to you!"),O("p",{class:"py-6 text-2xl font-['Averia_Serif_Libre']"}," In 50 years, you won’t care if every detail was perfect, but you will want to remember the way you felt. So, let us help you capture all sights and sounds of your big and small moments, and you have a stress-free wedding day! ")],-1),Oc={class:"grid grid-flow-col gap-8"},Ec=O("div",null,[O("h1",{class:"text-5xl font-bold"},"WHO ARE YOUR VIDEOGRAPHERS")],-1),Cc=O("h1",{class:"py-6"},"We’re Xirui+Wenbo",-1),Sc=O("p",null,"Married Marriage Videographers//Storytellers//Outdoorsy//",-1),Pc={class:"hero min-h-fit text-black bg-white/40"},Tc={class:"hero-content"},Ic={class:"grid grid-flow-row gap-8"},Nc=O("h1",{class:"pt-10 text-5xl font-bold"},"OUR VIDEOS FEATURE",-1),Mc={class:"grid grid-flow-row lg:grid-flow-col gap-12"},Ts=[{imagesrc:"https://placeimg.com/200/280/arch",links:"#",linkdec:"LEARN MORE",title:"4K Cinema Quality",describe:"Your wedding film has the same quality as movies!"},{imagesrc:"https://placeimg.com/200/280/arch",links:"#",linkdec:"LEARN MORE",title:"Multiple Choices",describe:"Wedding highlight, short film, and documentary."},{imagesrc:"https://placeimg.com/200/280/arch",links:"#",linkdec:"LEARN MORE",title:"Customized Video",describe:"Match your style of music, storytelling, and more"}],Fc={created(){window.addEventListener("resize",this.adaptiveSize)},destroyed(){window.removeEventListener("resize",this.adaptiveSize)},mounted(){this.adaptiveSize(null)},data(){return{adaptiveBgHeight:0,videoFeatures:Ts}},methods:{adaptiveSize(e){const t=document.querySelector(".adaptive-bg-root");this.adaptiveBgHeight=t.getBoundingClientRect().height}}},ur=Object.assign(Fc,{__name:"Home",setup(e){return(t,n)=>(xe(),Te("div",bc,[z(Ps,{isVideo:"","video-src":"https://player.vimeo.com/video/494857354?h=4019cf6ec8&title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"}),O("div",{class:"w-full left-0",style:Tt({marginTop:-t.adaptiveBgHeight+"px"})},[O("section",yc,[xc,O("div",wc,[O("div",_c,[O("div",kc,[Ac,O("div",Oc,[Ec,O("div",null,[Cc,Sc,z(ie,{title:"LEARN MORE ABOUT US",links:"#",showunderline:""})])])])])]),O("div",Pc,[O("div",Tc,[O("div",Ic,[Nc,O("div",Mc,[(xe(),Te(be,null,Nl(Ts,r=>z(vc,{key:r.title,imagesrc:r.imagesrc,links:r.links,linkdec:r.linkdec,title:r.title,describe:r.describe},null,8,["imagesrc","links","linkdec","title","describe"])),64))])])])])])],4)]))}}),Rc={class:"min-h-screen"},Lc=As('<section class="m-0 p-0 w-full"><div class="hero min-h-screen bg-base-200/0 text-white"><div class="hero-content flex-col lg:flex-row"><div class="max-w-sm text-center"><div class="flex items-center justify-center"><img src="https://actsofadventure.com/wp-content/uploads/2020/11/Acts-of-adventure-Final_Full-Logo-White-Mobile-2-1.png"></div><p class="text-xl">North Carolina Wedding</p><p class="text-xl">&amp; Elopement Videographer</p></div><div class="max-w-sm"><div class="flex items-center justify-center"><h1 class="pt-10 text-5xl font-bold font-[&#39;Great_Vibes&#39;]">Capture YOUR Perfect Day</h1></div><p class="py-2 text-xl">We document all of the laughters and every tears so you can relive your perfect day again and again.</p></div></div></div></section>',1),zc=[Lc],jc={created(){window.addEventListener("resize",this.adaptiveSize)},destroyed(){window.removeEventListener("resize",this.adaptiveSize)},mounted(){this.adaptiveSize(null)},data(){return{adaptiveBgHeight:0}},methods:{adaptiveSize(e){const t=document.querySelector(".adaptive-bg-root");this.adaptiveBgHeight=t.getBoundingClientRect().height}}},$c=Object.assign(jc,{__name:"Contact",setup(e){return(t,n)=>(xe(),Te("div",Rc,[z(Ps,{"image-src":"header_bg.png"}),O("div",{class:"w-full left-0",style:Tt({marginTop:-t.adaptiveBgHeight+"px"})},zc,4)]))}}),Dc={"/":ur,"/portfolio":ur,"/investment":ur,"/contact":$c},Bc={created(){window.addEventListener("resize",this.adaptiveSize)},destroyed(){window.removeEventListener("resize",this.adaptiveSize)},mounted(){this.adaptiveSize(null),window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash,console.log(this.currentPath)},!1)},data(){return{headerheight:0,currentPath:window.location.hash}},computed:{currentView(){return Dc[this.currentPath.slice(1)||"/"]||NotFound}},methods:{adaptiveSize(e){const t=document.querySelector(".adaptive-bg-root");this.adaptiveBgHeight=t.getBoundingClientRect().height;const n=document.querySelector("header");this.headerheight=n.getBoundingClientRect().height}}},Hc=Object.assign(Bc,{__name:"App",setup(e){return(t,n)=>(xe(),Te(be,null,[z(rc),O("main",{class:"my-0 mx-auto",style:Tt({marginTop:-t.headerheight+"px"})},[(xe(),Jl(Il(t.currentView)))],4),z(lc)],64))}});function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ai(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Uc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wc(e,t,n){return t&&ii(e.prototype,t),n&&ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return Kc(e)||qc(e,t)||Is(e,t)||Gc()}function nn(e){return Yc(e)||Vc(e)||Is(e)||Xc()}function Yc(e){if(Array.isArray(e))return Tr(e)}function Kc(e){if(Array.isArray(e))return e}function Vc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Is(e,t){if(e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},da={},Ns={},Ms=null,Fs={mark:si,measure:si};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Ns=document),typeof MutationObserver<"u"&&(Ms=MutationObserver),typeof performance<"u"&&(Fs=performance)}catch{}var Jc=da.navigator||{},oi=Jc.userAgent,li=oi===void 0?"":oi,et=da,X=Ns,fi=Ms,gn=Fs;et.document;var Ve=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Rs=~li.indexOf("MSIE")||~li.indexOf("Trident/"),vn,bn,yn,xn,wn,Ue="___FONT_AWESOME___",Ir=16,Ls="fa",zs="svg-inline--fa",pt="data-fa-i2svg",Nr="data-fa-pseudo-element",Qc="data-fa-pseudo-element-pending",ma="data-prefix",ha="data-icon",ci="fontawesome-i2svg",Zc="async",eu=["HTML","HEAD","STYLE","SCRIPT"],js=function(){try{return!0}catch{return!1}}(),q="classic",Z="sharp",pa=[q,Z];function rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Jt=rn((vn={},ne(vn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(vn,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),vn)),Qt=rn((bn={},ne(bn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(bn,Z,{solid:"fass"}),bn)),Zt=rn((yn={},ne(yn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(yn,Z,{fass:"fa-solid"}),yn)),tu=rn((xn={},ne(xn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(xn,Z,{"fa-solid":"fass"}),xn)),nu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,$s="fa-layers-text",ru=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,au=rn((wn={},ne(wn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(wn,Z,{900:"fass"}),wn)),Ds=[1,2,3,4,5,6,7,8,9,10],iu=Ds.concat([11,12,13,14,15,16,17,18,19,20]),su=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Qt[q]).map(en.add.bind(en));Object.keys(Qt[Z]).map(en.add.bind(en));var ou=[].concat(pa,nn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Ds.map(function(e){return"".concat(e,"x")})).concat(iu.map(function(e){return"w-".concat(e)})),Ht=et.FontAwesomeConfig||{};function lu(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var cu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cu.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=fu(lu(n));a!=null&&(Ht[r]=a)})}var Bs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ls,replacementClass:zs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);var Pt=E(E({},Bs),Ht);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var T={};Object.keys(Bs).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Pt[e]=n,Ut.forEach(function(r){return r(T)})},get:function(){return Pt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Ut.forEach(function(n){return n(T)})},get:function(){return Pt.cssPrefix}});et.FontAwesomeConfig=T;var Ut=[];function uu(e){return Ut.push(e),function(){Ut.splice(Ut.indexOf(e),1)}}var Xe=Ir,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function du(e){if(!(!e||!Ve)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=mu[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hs(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function pu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function gu(e){var t=e.transform,n=e.width,r=n===void 0?Ir:n,a=e.height,i=a===void 0?Ir:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Rs?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Us(){var e=Ls,t=zs,n=T.cssPrefix,r=T.replacementClass,a=vu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ui=!1;function dr(){T.autoAddCss&&!ui&&(du(Us()),ui=!0)}var bu={mixout:function(){return{dom:{css:Us,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},We=et||{};We[Ue]||(We[Ue]={});We[Ue].styles||(We[Ue].styles={});We[Ue].hooks||(We[Ue].hooks={});We[Ue].shims||(We[Ue].shims=[]);var Ce=We[Ue],Ws=[],yu=function e(){X.removeEventListener("DOMContentLoaded",e),jn=1,Ws.map(function(t){return t()})},jn=!1;Ve&&(jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),jn||X.addEventListener("DOMContentLoaded",yu));function xu(e){Ve&&(jn?setTimeout(e,0):Ws.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Hs(e):"<".concat(t," ").concat(hu(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wu=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},mr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?wu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function _u(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Mr(e){var t=_u(e);return t.length===1?t[0].toString(16):null}function ku(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mi(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,mi(t)):Ce.styles[e]=E(E({},Ce.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var _n,kn,An,xt=Ce.styles,Au=Ce.shims,Ou=(_n={},ne(_n,q,Object.values(Zt[q])),ne(_n,Z,Object.values(Zt[Z])),_n),ba=null,Ys={},Ks={},Vs={},qs={},Xs={},Eu=(kn={},ne(kn,q,Object.keys(Jt[q])),ne(kn,Z,Object.keys(Jt[Z])),kn);function Cu(e){return~ou.indexOf(e)}function Su(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Cu(a)?a:null}var Gs=function(){var t=function(i){return mr(xt,function(s,o,l){return s[l]=mr(o,i,{}),s},{})};Ys=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Ks=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Xs=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in xt||T.autoFetchSvg,r=mr(Au,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Vs=r.names,qs=r.unicodes,ba=Zn(T.styleDefault,{family:T.familyDefault})};uu(function(e){ba=Zn(e.styleDefault,{family:T.familyDefault})});Gs();function ya(e,t){return(Ys[e]||{})[t]}function Pu(e,t){return(Ks[e]||{})[t]}function ut(e,t){return(Xs[e]||{})[t]}function Js(e){return Vs[e]||{prefix:null,iconName:null}}function Tu(e){var t=qs[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Jt[r][e],i=Qt[r][e]||Qt[r][a],s=e in Ce.styles?e:null;return i||s||null}var hi=(An={},ne(An,q,Object.keys(Zt[q])),ne(An,Z,Object.keys(Zt[Z])),An);function er(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,q,"".concat(T.cssPrefix,"-").concat(q)),ne(t,Z,"".concat(T.cssPrefix,"-").concat(Z)),t),s=null,o=q;(e.includes(i[q])||e.some(function(c){return hi[q].includes(c)}))&&(o=q),(e.includes(i[Z])||e.some(function(c){return hi[Z].includes(c)}))&&(o=Z);var l=e.reduce(function(c,d){var m=Su(T.cssPrefix,d);if(xt[d]?(d=Ou[o].includes(d)?tu[o][d]:d,s=d,c.prefix=d):Eu[o].indexOf(d)>-1?(s=d,c.prefix=Zn(d,{family:o})):m?c.iconName=m:d!==T.replacementClass&&d!==i[q]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=s==="fa"?Js(c.iconName):{},k=ut(c.prefix,c.iconName);v.prefix&&(s=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Z&&(xt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=tt()||"fas"),l}var Iu=function(){function e(){Uc(this,e),this.definitions={}}return Wc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Fr(o,s[o]);var l=Zt[q][o];l&&Fr(l,s[o]),Gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),pi=[],wt={},Et={},Nu=Object.keys(Et);function Mu(e,t){var n=t.mixoutsTo;return pi=e,wt={},Object.keys(Et).forEach(function(r){Nu.indexOf(r)===-1&&delete Et[r]}),pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),zn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){wt[s]||(wt[s]=[]),wt[s].push(i[s])})}r.provides&&r.provides(Et)}),n}function Rr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Lr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(t)return t=ut(n,t)||t,di(Qs.definitions,n,t)||di(Ce.styles,n,t)}var Qs=new Iu,Fu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,gt("noAuto")},Ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve?(gt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,xu(function(){zu({autoReplaceSvgRoot:n}),gt("watch",t)})}},Lu={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zn(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(nu))){var a=er(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:ut(i,t)||t}}}},ge={noAuto:Fu,config:T,dom:Ru,parse:Lu,library:Qs,findIconDefinition:Lr,toHtml:an},zu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ce.styles).length>0||T.autoFetchSvg)&&Ve&&T.autoReplaceSvg&&ge.dom.i2svg({node:r})};function tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ve){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ju(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(va(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Qn(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function $u(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,M=R.width,H=R.height,w=a==="fak",S=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),C={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(H)})},$=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/H*16*.0625,"em")}:{};k&&(C.attributes[pt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete C.attributes.title);var U=E(E({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},$),m.styles)}),ue=r.found&&n.found?Ye("generateAbstractMask",U)||{children:[],attributes:{}}:Ye("generateAbstractIcon",U)||{children:[],attributes:{}},ae=ue.children,we=ue.attributes;return U.children=ae,U.attributes=we,o?$u(U):ju(U)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[pt]="");var d=E({},s.styles);va(a)&&(d.transform=gu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Qn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Du(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var hr=Ce.styles;function zr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Bu={found:!1,width:512,height:512};function Hu(e,t){!js&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=Js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var s=hr[t][e];return r(zr(s))}Hu(e,t),r(E(E({},Bu),{},{icon:T.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var vi=function(){},$r=T.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:vi,measure:vi},$t='FA "6.2.1"',Uu=function(t){return $r.mark("".concat($t," ").concat(t," begins")),function(){return Zs(t)}},Zs=function(t){$r.mark("".concat($t," ").concat(t," ends")),$r.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},_a={begin:Uu,end:Zs},In=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Wu(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function Yu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Ku(){if(T.autoReplaceSvg===!0)return Nn.replace;var e=Nn[T.autoReplaceSvg];return e||Nn.replace}function Vu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function qu(e){return X.createElement(e)}function eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vu:qu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(eo(s,{ceFn:r}))}),a}function Xu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(eo(a),n)}),n.getAttribute(pt)===null&&T.keepOriginalSource){var r=X.createComment(Xu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(T.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===T.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return an(o)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=s}};function yi(e){e()}function to(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=yi;T.mutateApproach===Zc&&(r=et.requestAnimationFrame||yi),r(function(){var a=Ku(),i=_a.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function no(){ka=!0}function Dr(){ka=!1}var $n=null;function xi(e){if(fi&&T.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,s=i===void 0?In:i,o=e.observeMutationsRoot,l=o===void 0?X:o;$n=new fi(function(c){if(!ka){var d=tt();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(T.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~su.indexOf(m.attributeName))if(m.attributeName==="class"&&Wu(m.target)){var v=er(ga(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(ma,k||d),R&&m.target.setAttribute(ha,R)}else Yu(m.target)&&a(m.target)})}}),Ve&&$n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gu(){$n&&$n.disconnect()}function Ju(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Qu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=er(ga(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Pu(a.prefix,e.innerText)||ya(a.prefix,Mr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Zu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ed(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qu(e),r=n.iconName,a=n.prefix,i=n.rest,s=Zu(e),o=Rr("parseNodeAttributes",{},e),l=t.styleParser?Ju(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var td=Ce.styles;function ro(e){var t=T.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf($s)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var nt=new Set;pa.map(function(e){nt.add("fa-".concat(e))});Object.keys(Jt[q]).map(nt.add.bind(nt));Object.keys(Jt[Z]).map(nt.add.bind(nt));nt=nn(nt);function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ve)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ci,"-").concat(m))},a=function(m){return n.remove("".concat(ci,"-").concat(m))},i=T.autoFetchSvg?nt:pa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(td));i.includes("fa")||i.push("fa");var s=[".".concat($s,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ft(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=_a.begin("onTree"),c=o.reduce(function(d,m){try{var v=ro(m);v&&d.push(v)}catch(k){js||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){to(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ro(e).then(function(n){n&&to([n],t)})}function rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Lr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ze:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,M=n.classes,H=M===void 0?[]:M,w=n.attributes,S=w===void 0?{}:w,C=n.styles,$=C===void 0?{}:C;if(t){var U=t.prefix,ue=t.iconName,ae=t.icon;return tr(E({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?S["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(R||tn()):(S["aria-hidden"]="true",S.focusable="false")),wa({icons:{main:zr(ae),mask:l?zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ue,transform:E(E({},ze),a),symbol:s,title:v,maskId:d,titleId:R,extra:{attributes:S,styles:$,classes:H}})})}},id={mixout:function(){return{icon:rd(ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_i,n.nodeCallback=nd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,s=i===void 0?function(){}:i;return _i(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([jr(a,o),d.iconName?jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var H=ua(M,2),w=H[0],S=H[1];k([n,wa({icons:{main:w,mask:S},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Qn(o);l.length>0&&(a.style=l);var c;return va(s)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},sd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return tr({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:s}]})}}}},od={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return tr({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Du({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(nn(o))}})})}}}},ld={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ze:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return tr({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:E(E({},ze),i),title:o,extra:{attributes:m,styles:k,classes:["".concat(T.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Rs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},fd=new RegExp('"',"ug"),ki=[1105920,1112319];function cd(e){var t=e.replace(fd,""),n=ku(t,0),r=n>=ki[0]&&n<=ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Mr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(Qc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),s=i.filter(function(ae){return ae.getAttribute(Nr)===t})[0],o=et.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(ru),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[v][l[2].toLowerCase()]:au[v][c],R=cd(m),M=R.value,H=R.isSecondary,w=l[0].startsWith("FontAwesome"),S=ya(k,M),C=S;if(w){var $=Tu(M);$.iconName&&$.prefix&&(S=$.iconName,k=$.prefix)}if(S&&!H&&(!s||s.getAttribute(ma)!==k||s.getAttribute(ha)!==C)){e.setAttribute(n,C),s&&e.removeChild(s);var U=ed(),ue=U.extra;ue.attributes[Nr]=t,jr(S,k).then(function(ae){var we=wa(E(E({},U),{},{icons:{main:ae,mask:xa()},prefix:k,iconName:C,extra:ue,watchable:!0})),ve=X.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=we.map(function($e){return an($e)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ud(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function dd(e){return e.parentNode!==document.head&&!~eu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oi(e){if(Ve)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(dd).map(ud),a=_a.begin("searchPseudoElements");no(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&Oi(a)}}},Ei=!1,hd={mixout:function(){return{dom:{unwatch:function(){no(),Ei=!0}}}},hooks:function(){return{bootstrap:function(){xi(Rr("mutationObserverCallbacks",{}))},noAuto:function(){Gu()},watch:function(n){var r=n.observeMutationsRoot;Ei?Dr():xi(Rr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ci=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},pd={mixout:function(){return{parse:{transform:function(n){return Ci(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ci(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:m,path:v};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gd(e){return e.tag==="g"?e.children:[e]}var vd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?er(a.split(" ").map(function(s){return s.trim()})):xa();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,v=s.icon,k=pu({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:E(E({},pr),{},{fill:"white"})},M=d.children?{children:d.children.map(Si)}:{},H={tag:"g",attributes:E({},k.inner),children:[Si(E({tag:d.tag,attributes:E(E({},d.attributes),k.path)},M))]},w={tag:"g",attributes:E({},k.outer),children:[H]},S="mask-".concat(o||tn()),C="clip-".concat(o||tn()),$={tag:"mask",attributes:E(E({},pr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:gd(v)},$]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(S,")")},pr)}),{children:r,attributes:a}}}},bd={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},xd=[bu,id,sd,od,ld,md,hd,pd,vd,bd,yd];Mu(xd,{mixoutsTo:ge});ge.noAuto;var ao=ge.config,wd=ge.library;ge.dom;var Dn=ge.parse;ge.findIconDefinition;ge.toHtml;var _d=ge.icon;ge.layer;var kd=ge.text;ge.counter;function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ad(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Od(e,t){if(e==null)return{};var n=Ad(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Br(e){return Ed(e)||Cd(e)||Sd(e)||Pd()}function Ed(e){if(Array.isArray(e))return Hr(e)}function Cd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sd(e,t){if(e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},io={exports:{}};(function(e){(function(t){var n=function(w,S,C){if(!c(S)||m(S)||v(S)||k(S)||l(S))return S;var $,U=0,ue=0;if(d(S))for($=[],ue=S.length;U<ue;U++)$.push(n(w,S[U],C));else{$={};for(var ae in S)Object.prototype.hasOwnProperty.call(S,ae)&&($[w(ae,C)]=n(w,S[ae],C))}return $},r=function(w,S){S=S||{};var C=S.separator||"_",$=S.split||/(?=[A-Z])/;return w.split($).join(C)},a=function(w){return R(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,C){return C?C.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var S=a(w);return S.substr(0,1).toUpperCase()+S.substr(1)},s=function(w,S){return r(w,S).toLowerCase()},o=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return o.call(w)=="[object Array]"},m=function(w){return o.call(w)=="[object Date]"},v=function(w){return o.call(w)=="[object RegExp]"},k=function(w){return o.call(w)=="[object Boolean]"},R=function(w){return w=w-0,w===w},M=function(w,S){var C=S&&"process"in S?S.process:S;return typeof C!="function"?w:function($,U){return C($,w,U)}},H={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(w,S){return n(M(a,S),w)},decamelizeKeys:function(w,S){return n(M(s,S),w,S)},pascalizeKeys:function(w,S){return n(M(i,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(Td)})(io);var Id=io.exports,Nd=["class","style"];function Md(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Id.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Aa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Fd(d);break;case"style":l.style=Md(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Od(n,Nd);return Cs(e.tag,Ae(Ae(Ae({},t),{},{class:a.class,style:Ae(Ae({},a.style),s)},a.attrs),o),r)}var so=!1;try{so=!0}catch{}function Rd(){if(!so&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function Ld(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ti(e){if(e&&Bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dn.icon)return Dn.icon(e);if(e===null)return null;if(Bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zd=ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return Ti(t.icon)}),i=ye(function(){return Wt("classes",Ld(t))}),s=ye(function(){return Wt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),o=ye(function(){return Wt("mask",Ti(t.mask))}),l=ye(function(){return _d(a.value,Ae(Ae(Ae(Ae({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(d){if(!d)return Rd("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=ye(function(){return l.value?Aa(l.value.abstract[0],{},r):null});return function(){return c.value}}});ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ao.familyPrefix,i=ye(function(){return["".concat(a,"-layers")].concat(Br(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cs("div",{class:i.value},r.default?r.default():[])}}});ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ao.familyPrefix,i=ye(function(){return Wt("classes",[].concat(Br(t.counter?["".concat(a,"-layers-counter")]:[]),Br(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),s=ye(function(){return Wt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),o=ye(function(){var c=kd(t.value.toString(),Ae(Ae({},s.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ye(function(){return Aa(o.value,{},r)});return function(){return l.value}}});var jd={prefix:"fab",iconName:"bilibili",icon:[512,512,[],"e3d9","M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"]},$d={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Dd={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Bd={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Hd={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ud={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};wd.add([jd,Bd,Dd,$d,Hd,Ud]);Mf(Hc).component("font-awesome-icon",zd).mount("#app");
