const Pa=()=>{};var qs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Oa=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[t++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[t++],h=i[t++],g=i[t++],y=((o&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,g=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,S=c>>2,b=(c&3)<<4|g>>4;let A=(g&15)<<2|v>>6,M=v&63;y||(M=64,h||(A=64)),s.push(t[S],t[b],t[A],t[M])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Gr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Oa(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const c=t[i.charAt(o++)],g=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const b=o<i.length?t[i.charAt(o)]:64;if(++o,c==null||g==null||v==null||b==null)throw new Na;const A=c<<2|g>>4;if(s.push(A),v!==64){const M=g<<4&240|v>>2;if(s.push(M),b!==64){const D=v<<6&192|b;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Na extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Da=function(i){const e=Gr(i);return zr.encodeByteArray(e,!0)},En=function(i){return Da(i).replace(/\./g,"")},qr=function(i){try{return zr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=()=>La().__FIREBASE_DEFAULTS__,Ua=()=>{if(typeof process>"u"||typeof qs>"u")return;const i=qs.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},xa=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qr(i[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Pa()||Ma()||Ua()||xa()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Kr=i=>Ci()?.emulatorHosts?.[i],Jr=i=>{const e=Kr(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Xr=()=>Ci()?.config,Yr=i=>Ci()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ki(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[En(JSON.stringify(t)),En(JSON.stringify(h)),""].join(".")}const xt={};function Va(){const i={prod:[],emulator:[]};for(const e of Object.keys(xt))xt[e]?i.emulator.push(e):i.prod.push(e);return i}function ja(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Ks=!1;function Pi(i,e){if(typeof window>"u"||typeof document>"u"||!_t(window.location.host)||xt[i]===e||xt[i]||Ks)return;xt[i]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",c=Va().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function g(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function y(A,M){A.setAttribute("width","24"),A.setAttribute("id",M),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function v(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ks=!0,h()},A}function S(A,M){A.setAttribute("id",M),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function b(){const A=ja(s),M=t("text"),D=document.getElementById(M)||document.createElement("span"),U=t("learnmore"),k=document.getElementById(U)||document.createElement("a"),W=t("preprendIcon"),K=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const H=A.element;g(H),S(k,U);const j=v();y(K,W),H.append(K,D,k,j),document.body.appendChild(H)}c?(D.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ba(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function Ha(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $a(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Wa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ga(){const i=Q();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function za(){try{return typeof indexedDB=="object"}catch{return!1}}function qa(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="FirebaseError";class _e extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ka,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?Ja(c,s):"Error",g=`${this.serviceName}: ${h} (${o}).`;return new _e(o,g,s)}}function Ja(i,e){return i.replace(Xa,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Xa=/\{\$([^}]+)}/g;function Ya(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ze(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const c=i[o],h=e[o];if(Js(c)&&Js(h)){if(!Ze(c,h))return!1}else if(c!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Js(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Ut(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Qa(i,e){const t=new Za(i,e);return t.subscribe.bind(t)}class Za{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ec(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ci),o.error===void 0&&(o.error=ci),o.complete===void 0&&(o.complete=ci);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ec(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function ci(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(i){return i&&i._delegate?i._delegate:i}class je{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Fa;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ic(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nc(i){return i===Ke?void 0:i}function ic(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(L||(L={}));const rc={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},oc=L.INFO,ac={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},cc=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=ac[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oi{constructor(e){this.name=e,this._logLevel=oc,this._logHandler=cc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const hc=(i,e)=>e.some(t=>i instanceof t);let Xs,Ys;function lc(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uc(){return Ys||(Ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zr=new WeakMap,yi=new WeakMap,eo=new WeakMap,hi=new WeakMap,Ni=new WeakMap;function dc(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{t(Fe(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zr.set(t,i)}).catch(()=>{}),Ni.set(e,i),e}function fc(i){if(yi.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});yi.set(i,e)}let Ii={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return yi.get(i);if(e==="objectStoreNames")return i.objectStoreNames||eo.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fe(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function pc(i){Ii=i(Ii)}function gc(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(li(this),e,...t);return eo.set(s,e.sort?e.sort():[e]),Fe(s)}:uc().includes(i)?function(...e){return i.apply(li(this),e),Fe(Zr.get(this))}:function(...e){return Fe(i.apply(li(this),e))}}function mc(i){return typeof i=="function"?gc(i):(i instanceof IDBTransaction&&fc(i),hc(i,lc())?new Proxy(i,Ii):i)}function Fe(i){if(i instanceof IDBRequest)return dc(i);if(hi.has(i))return hi.get(i);const e=mc(i);return e!==i&&(hi.set(i,e),Ni.set(e,i)),e}const li=i=>Ni.get(i);function _c(i,e,{blocked:t,upgrade:s,blocking:o,terminated:c}={}){const h=indexedDB.open(i,e),g=Fe(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Fe(h.result),y.oldVersion,y.newVersion,Fe(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}const yc=["get","getKey","getAll","getAllKeys","count"],Ic=["put","add","delete","clear"],ui=new Map;function Qs(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ui.get(e))return ui.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Ic.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||yc.includes(t)))return;const c=async function(h,...g){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(g.shift())),(await Promise.all([v[t](...g),o&&y.done]))[0]};return ui.set(e,c),c}pc(i=>({...i,get:(e,t,s)=>Qs(e,t)||i.get(e,t,s),has:(e,t)=>!!Qs(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ec(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ec(i){return i.getComponent()?.type==="VERSION"}const wi="@firebase/app",Zs="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Oi("@firebase/app"),vc="@firebase/app-compat",Tc="@firebase/analytics-compat",Ac="@firebase/analytics",Sc="@firebase/app-check-compat",bc="@firebase/app-check",Rc="@firebase/auth",Cc="@firebase/auth-compat",kc="@firebase/database",Pc="@firebase/data-connect",Oc="@firebase/database-compat",Nc="@firebase/functions",Dc="@firebase/functions-compat",Lc="@firebase/installations",Mc="@firebase/installations-compat",Uc="@firebase/messaging",xc="@firebase/messaging-compat",Fc="@firebase/performance",Vc="@firebase/performance-compat",jc="@firebase/remote-config",Bc="@firebase/remote-config-compat",Hc="@firebase/storage",$c="@firebase/storage-compat",Wc="@firebase/firestore",Gc="@firebase/ai",zc="@firebase/firestore-compat",qc="firebase",Kc="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]",Jc={[wi]:"fire-core",[vc]:"fire-core-compat",[Ac]:"fire-analytics",[Tc]:"fire-analytics-compat",[bc]:"fire-app-check",[Sc]:"fire-app-check-compat",[Rc]:"fire-auth",[Cc]:"fire-auth-compat",[kc]:"fire-rtdb",[Pc]:"fire-data-connect",[Oc]:"fire-rtdb-compat",[Nc]:"fire-fn",[Dc]:"fire-fn-compat",[Lc]:"fire-iid",[Mc]:"fire-iid-compat",[Uc]:"fire-fcm",[xc]:"fire-fcm-compat",[Fc]:"fire-perf",[Vc]:"fire-perf-compat",[jc]:"fire-rc",[Bc]:"fire-rc-compat",[Hc]:"fire-gcs",[$c]:"fire-gcs-compat",[Wc]:"fire-fst",[zc]:"fire-fst-compat",[Gc]:"fire-vertex","fire-js":"fire-js",[qc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Map,Xc=new Map,vi=new Map;function er(i,e){try{i.container.addComponent(e)}catch(t){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function et(i){const e=i.name;if(vi.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,i);for(const t of vn.values())er(t,i);for(const t of Xc.values())er(t,i);return!0}function Nn(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function te(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Gt("app","Firebase",Yc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=Kc;function to(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Ei,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ve.create("bad-app-name",{appName:String(o)});if(t||(t=Xr()),!t)throw Ve.create("no-options");const c=vn.get(o);if(c){if(Ze(t,c.options)&&Ze(s,c.config))return c;throw Ve.create("duplicate-app",{appName:o})}const h=new sc(o);for(const y of vi.values())h.addComponent(y);const g=new Qc(t,s,h);return vn.set(o,g),g}function Di(i=Ei){const e=vn.get(i);if(!e&&i===Ei&&Xr())return to();if(!e)throw Ve.create("no-app",{appName:i});return e}function fe(i,e,t){let s=Jc[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(h.join(" "));return}et(new je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="firebase-heartbeat-database",eh=1,Ht="firebase-heartbeat-store";let di=null;function no(){return di||(di=_c(Zc,eh,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ht)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ve.create("idb-open",{originalErrorMessage:i.message})})),di}async function th(i){try{const t=(await no()).transaction(Ht),s=await t.objectStore(Ht).get(io(i));return await t.done,s}catch(e){if(e instanceof _e)Te.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e?.message});Te.warn(t.message)}}}async function tr(i,e){try{const s=(await no()).transaction(Ht,"readwrite");await s.objectStore(Ht).put(e,io(i)),await s.done}catch(t){if(t instanceof _e)Te.warn(t.message);else{const s=Ve.create("idb-set",{originalErrorMessage:t?.message});Te.warn(s.message)}}}function io(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=1024,ih=30;class sh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>ih){const o=ah(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Te.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nr(),{heartbeatsToSend:t,unsentEntries:s}=rh(this._heartbeatsCache.heartbeats),o=En(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Te.warn(e),""}}}function nr(){return new Date().toISOString().substring(0,10)}function rh(i,e=nh){const t=[];let s=i.slice();for(const o of i){const c=t.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),ir(t)>e){c.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ir(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class oh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return za()?qa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await th(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ir(i){return En(JSON.stringify({version:2,heartbeats:i})).length}function ah(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(i){et(new je("platform-logger",e=>new wc(e),"PRIVATE")),et(new je("heartbeat",e=>new sh(e),"PRIVATE")),fe(wi,Zs,i),fe(wi,Zs,"esm2020"),fe("fire-js","")}ch("");function so(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hh=so,ro=new Gt("auth","Firebase",so());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Oi("@firebase/auth");function lh(i,...e){Tn.logLevel<=L.WARN&&Tn.warn(`Auth (${st}): ${i}`,...e)}function mn(i,...e){Tn.logLevel<=L.ERROR&&Tn.error(`Auth (${st}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(i,...e){throw Li(i,...e)}function pe(i,...e){return Li(i,...e)}function oo(i,e,t){const s={...hh(),[e]:t};return new Gt("auth","Firebase",s).create(e,{appName:i.name})}function ve(i){return oo(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Li(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return ro.create(i,...e)}function R(i,e,...t){if(!i)throw Li(e,...t)}function we(i){const e="INTERNAL ASSERTION FAILED: "+i;throw mn(e),new Error(e)}function Ae(i,e){i||we(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){return typeof self<"u"&&self.location?.href||""}function uh(){return sr()==="http:"||sr()==="https:"}function sr(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uh()||$a()||"connection"in navigator)?navigator.onLine:!0}function fh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ae(t>e,"Short delay should be less than long delay!"),this.isMobile=Ba()||Wa()}get(){return dh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(i,e){Ae(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mh=new qt(3e4,6e4);function He(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function be(i,e,t,s,o={}){return co(i,o,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const g=zt({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...c};return Ha()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&_t(i.emulatorConfig.host)&&(v.credentials="include"),ao.fetch()(await ho(i,i.config.apiHost,t,g),v)})}async function co(i,e,t){i._canInitEmulator=!1;const s={...ph,...e};try{const o=new yh(i),c=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw dn(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[y,v]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw dn(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw dn(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw dn(i,"user-disabled",h);const S=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw oo(i,S,v);ae(i,S)}}catch(o){if(o instanceof _e)throw o;ae(i,"network-request-failed",{message:String(o)})}}async function Kt(i,e,t,s,o={}){const c=await be(i,e,t,s,o);return"mfaPendingCredential"in c&&ae(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function ho(i,e,t,s){const o=`${e}${t}?${s}`,c=i,h=c.config.emulator?Mi(i.config,o):`${i.config.apiScheme}://${o}`;return gh.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function _h(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pe(this.auth,"network-request-failed")),mh.get())})}}function dn(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=pe(i,e,s);return o.customData._tokenResponse=t,o}function rr(i){return i!==void 0&&i.enterprise!==void 0}class Ih{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _h(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wh(i,e){return be(i,"GET","/v2/recaptchaConfig",He(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(i,e){return be(i,"POST","/v1/accounts:delete",e)}async function An(i,e){return be(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vh(i,e=!1){const t=Se(i),s=await t.getIdToken(e),o=Ui(s);R(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:s,authTime:Ft(fi(o.auth_time)),issuedAtTime:Ft(fi(o.iat)),expirationTime:Ft(fi(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function fi(i){return Number(i)*1e3}function Ui(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return mn("JWT malformed, contained fewer than 3 sections"),null;try{const o=qr(t);return o?JSON.parse(o):(mn("Failed to decode base64 JWT payload"),null)}catch(o){return mn("Caught error parsing JWT payload as JSON",o?.toString()),null}}function or(i){const e=Ui(i);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof _e&&Th(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Th({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ft(this.lastLoginAt),this.creationTime=Ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(i){const e=i.auth,t=await i.getIdToken(),s=await gt(i,An(e,{idToken:t}));R(s?.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const c=o.providerUserInfo?.length?lo(o.providerUserInfo):[],h=bh(i.providerData,c),g=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!h?.length,v=g?y:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Ai(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,S)}async function Sh(i){const e=Se(i);await Sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bh(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function lo(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(i,e){const t=await co(i,{},async()=>{const s=zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=await ho(i,o,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:s};return i.emulatorConfig&&_t(i.emulatorConfig.host)&&(y.credentials="include"),ao.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ch(i,e){return be(i,"POST","/v2/accounts:revokeToken",He(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):or(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=or(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:c}=await Rh(e,t);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:c}=t,h=new ut;return s&&(R(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(R(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(R(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(i,e){R(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class se{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Ah(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ai(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await gt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vh(this,e)}reload(){return Sh(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new se({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Sn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(ve(this.auth));const e=await this.getIdToken();return await gt(this,Eh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,g=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,S=t.lastLoginAt??void 0,{uid:b,emailVerified:A,isAnonymous:M,providerData:D,stsTokenManager:U}=t;R(b&&U,e,"internal-error");const k=ut.fromJSON(this.name,U);R(typeof b=="string",e,"internal-error"),De(s,e.name),De(o,e.name),R(typeof A=="boolean",e,"internal-error"),R(typeof M=="boolean",e,"internal-error"),De(c,e.name),De(h,e.name),De(g,e.name),De(y,e.name),De(v,e.name),De(S,e.name);const W=new se({uid:b,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:M,photoURL:h,phoneNumber:c,tenantId:g,stsTokenManager:k,createdAt:v,lastLoginAt:S});return D&&Array.isArray(D)&&(W.providerData=D.map(K=>({...K}))),y&&(W._redirectEventId=y),W}static async _fromIdTokenResponse(e,t,s=!1){const o=new ut;o.updateFromServerResponse(t);const c=new se({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Sn(c),c}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];R(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?lo(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,g=new ut;g.updateFromIdToken(s);const y=new se({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ai(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Map;function Ee(i){Ae(i instanceof Function,"Expected a class definition");let e=ar.get(i);return e?(Ae(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ar.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uo.type="NONE";const cr=uo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(i,e,t){return`firebase:${i}:${e}:${t}`}class dt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=_n(this.userKey,o.apiKey,c),this.fullPersistenceKey=_n("persistence",o.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await An(this.auth,{idToken:e}).catch(()=>{});return t?se._fromGetAccountInfoResponse(this.auth,t,e):null}return se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new dt(Ee(cr),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=o[0]||Ee(cr);const h=_n(s,e.config.apiKey,e.name);let g=null;for(const v of t)try{const S=await v._get(h);if(S){let b;if(typeof S=="string"){const A=await An(e,{idToken:S}).catch(()=>{});if(!A)break;b=await se._fromGetAccountInfoResponse(e,A,S)}else b=se._fromJSON(e,S);v!==c&&(g=b),c=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new dt(c,e,s):(c=y[0],g&&await c._set(h,g.toJSON()),await Promise.all(t.map(async v=>{if(v!==c)try{await v._remove(h)}catch{}})),new dt(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yo(e))return"Blackberry";if(Io(e))return"Webos";if(po(e))return"Safari";if((e.includes("chrome/")||go(e))&&!e.includes("edge/"))return"Chrome";if(_o(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function fo(i=Q()){return/firefox\//i.test(i)}function po(i=Q()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function go(i=Q()){return/crios\//i.test(i)}function mo(i=Q()){return/iemobile/i.test(i)}function _o(i=Q()){return/android/i.test(i)}function yo(i=Q()){return/blackberry/i.test(i)}function Io(i=Q()){return/webos/i.test(i)}function xi(i=Q()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function kh(i=Q()){return xi(i)&&!!window.navigator?.standalone}function Ph(){return Ga()&&document.documentMode===10}function wo(i=Q()){return xi(i)||_o(i)||Io(i)||yo(i)||/windows phone/i.test(i)||mo(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(i,e=[]){let t;switch(i){case"Browser":t=hr(Q());break;case"Worker":t=`${hr(Q())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${st}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,g)=>{try{const y=e(c);h(y)}catch(y){g(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(i,e={}){return be(i,"GET","/v2/passwordPolicy",He(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=6;class Lh{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Dh,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lr(this),this.idTokenSubscription=new lr(this),this.beforeStateQueue=new Oh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ro,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ee(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await An(this,{idToken:e}),s=await se._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(te(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===h)&&g?.user&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(ve(this));const t=e?Se(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(ve(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(ve(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nh(this),t=new Lh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ch(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ee(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&lh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function rt(i){return Se(i)}class lr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qa(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uh(i){Dn=i}function vo(i){return Dn.loadJS(i)}function xh(){return Dn.recaptchaEnterpriseScript}function Fh(){return Dn.gapiScript}function Vh(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class jh{constructor(){this.enterprise=new Bh}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bh{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Hh="recaptcha-enterprise",To="NO_RECAPTCHA";class $h{constructor(e){this.type=Hh,this.auth=rt(e)}async verify(e="verify",t=!1){async function s(c){if(!t){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,g)=>{wh(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const v=new Ih(y);return c.tenantId==null?c._agentRecaptchaConfig=v:c._tenantRecaptchaConfigs[c.tenantId]=v,h(v.siteKey)}}).catch(y=>{g(y)})})}function o(c,h,g){const y=window.grecaptcha;rr(y)?y.enterprise.ready(()=>{y.enterprise.execute(c,{action:e}).then(v=>{h(v)}).catch(()=>{h(To)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jh().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(g=>{if(!t&&rr(window.grecaptcha))o(g,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=xh();y.length!==0&&(y+=g),vo(y).then(()=>{o(g,c,h)}).catch(v=>{h(v)})}}).catch(g=>{h(g)})})}}async function ur(i,e,t,s=!1,o=!1){const c=new $h(i);let h;if(o)h=To;else try{h=await c.verify(t)}catch{h=await c.verify(t,!0)}const g={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const y=g.phoneEnrollmentInfo.phoneNumber,v=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const y=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return s?Object.assign(g,{captchaResp:h}):Object.assign(g,{captchaResponse:h}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function Si(i,e,t,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ur(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ur(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(i,e){const t=Nn(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),c=t.getOptions();if(Ze(c,e??{}))return o;ae(o,"already-initialized")}return t.initialize({options:e})}function Gh(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ee);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function zh(i,e,t){const s=rt(i);R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=Ao(e),{host:h,port:g}=qh(e),y=g===null?"":`:${g}`,v={url:`${c}//${h}${y}/`},S=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){R(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),R(Ze(v,s.config.emulator)&&Ze(S,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=S,s.settings.appVerificationDisabledForTesting=!0,_t(h)?(ki(`${c}//${h}${y}`),Pi("Auth",!0)):Kh()}function Ao(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function qh(i){const e=Ao(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:dr(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:dr(h)}}}function dr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Kh(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,t){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}async function Jh(i,e){return be(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(i,e){return Kt(i,"POST","/v1/accounts:signInWithPassword",He(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(i,e){return Kt(i,"POST","/v1/accounts:signInWithEmailLink",He(i,e))}async function Qh(i,e){return Kt(i,"POST","/v1/accounts:signInWithEmailLink",He(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Fi{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $t(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new $t(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,t,"signInWithPassword",Xh);case"emailLink":return Yh(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,s,"signUpPassword",Jh);case"emailLink":return Qh(e,{idToken:t,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(i,e){return Kt(i,"POST","/v1/accounts:signInWithIdp",He(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="http://localhost";class tt extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=t;if(!s||!o)return null;const h=new tt(s,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ft(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:Zh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tl(i){const e=Mt(Ut(i)).link,t=e?Mt(Ut(e)).deep_link_id:null,s=Mt(Ut(i)).deep_link_id;return(s?Mt(Ut(s)).link:null)||s||t||e||i}class Vi{constructor(e){const t=Mt(Ut(e)),s=t.apiKey??null,o=t.oobCode??null,c=el(t.mode??null);R(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=tl(e);try{return new Vi(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return $t._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Vi.parseLink(t);return R(s,"argument-error"),$t._fromEmailAndCode(e,s.code,s.tenantId)}}yt.PROVIDER_ID="password";yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends So{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Jt{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com";Le.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Jt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Me.credential(t,s)}catch{return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com";Me.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Jt{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Jt{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return xe.credential(t,s)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(i,e){return Kt(i,"POST","/v1/accounts:signUp",He(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const c=await se._fromIdTokenResponse(e,s,o),h=fr(s);return new nt({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=fr(s);return new nt({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function fr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends _e{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,bn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new bn(e,t,s,o)}}function bo(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?bn._fromErrorAndOperation(i,c,e,s):c})}async function il(i,e,t=!1){const s=await gt(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return nt._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(i,e,t=!1){const{auth:s}=i;if(te(s.app))return Promise.reject(ve(s));const o="reauthenticate";try{const c=await gt(i,bo(s,o,e,i),t);R(c.idToken,s,"internal-error");const h=Ui(c.idToken);R(h,s,"internal-error");const{sub:g}=h;return R(i.uid===g,s,"user-mismatch"),nt._forOperation(i,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ae(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(i,e,t=!1){if(te(i.app))return Promise.reject(ve(i));const s="signIn",o=await bo(i,s,e),c=await nt._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(c.user),c}async function rl(i,e){return Ro(rt(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(i){const e=rt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Od(i,e,t){if(te(i.app))return Promise.reject(ve(i));const s=rt(i),h=await Si(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nl).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Co(i),y}),g=await nt._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(g.user),g}function Nd(i,e,t){return te(i.app)?Promise.reject(ve(i)):rl(Se(i),yt.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Co(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(i,e){return be(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Se(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await gt(s,ol(s.auth,c));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const g=s.providerData.find(({providerId:y})=>y==="password");g&&(g.displayName=s.displayName,g.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function al(i,e,t,s){return Se(i).onIdTokenChanged(e,t,s)}function cl(i,e,t){return Se(i).beforeAuthStateChanged(e,t)}const Rn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rn,"1"),this.storage.removeItem(Rn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=1e3,ll=10;class Po extends ko{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,g,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);Ph()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ll):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},hl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Po.type="LOCAL";const ul=Po;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends ko{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oo.type="SESSION";const No=Oo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ln(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:c}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(h).map(async v=>v(t.origin,c)),y=await dl(g);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ln.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((g,y)=>{const v=ji("",20);o.port1.start();const S=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(b){const A=b;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(A.data.response);break;default:clearTimeout(S),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function pl(i){ge().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function gl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ml(){return navigator?.serviceWorker?.controller||null}function _l(){return Do()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="firebaseLocalStorageDb",yl=1,Cn="firebaseLocalStorage",Mo="fbase_key";class Xt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mn(i,e){return i.transaction([Cn],e?"readwrite":"readonly").objectStore(Cn)}function Il(){const i=indexedDB.deleteDatabase(Lo);return new Xt(i).toPromise()}function bi(){const i=indexedDB.open(Lo,yl);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cn,{keyPath:Mo})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cn)?e(s):(s.close(),await Il(),e(await bi()))})})}async function pr(i,e,t){const s=Mn(i,!0).put({[Mo]:e,value:t});return new Xt(s).toPromise()}async function wl(i,e){const t=Mn(i,!1).get(e),s=await new Xt(t).toPromise();return s===void 0?null:s.value}function gr(i,e){const t=Mn(i,!0).delete(e);return new Xt(t).toPromise()}const El=800,vl=3;class Uo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>vl)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Do()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(_l()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await gl(),!this.activeServiceWorker)return;this.sender=new fl(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ml()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bi();return await pr(e,Rn,"1"),await gr(e,Rn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pr(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>wl(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Mn(o,!1).getAll();return new Xt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),El)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uo.type="LOCAL";const Tl=Uo;new qt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(i,e){return e?Ee(e):(R(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sl(i){return Ro(i.auth,new Bi(i),i.bypassAuthState)}function bl(i){const{auth:e,user:t}=i;return R(t,e,"internal-error"),sl(t,new Bi(i),i.bypassAuthState)}async function Rl(i){const{auth:e,user:t}=i;return R(t,e,"internal-error"),il(t,new Bi(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sl;case"linkViaPopup":case"linkViaRedirect":return Rl;case"reauthViaPopup":case"reauthViaRedirect":return bl;default:ae(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new qt(2e3,1e4);class lt extends xo{constructor(e,t,s,o,c){super(e,t,o,c),this.provider=s,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cl.get())};e()}}lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="pendingRedirect",yn=new Map;class Pl extends xo{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=yn.get(this.auth._key());if(!e){try{const s=await Ol(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ol(i,e){const t=Ll(e),s=Dl(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Nl(i,e){yn.set(i._key(),e)}function Dl(i){return Ee(i._redirectPersistence)}function Ll(i){return _n(kl,i.config.apiKey,i.name)}async function Ml(i,e,t=!1){if(te(i.app))return Promise.reject(ve(i));const s=rt(i),o=Al(s,e),h=await new Pl(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=10*60*1e3;class xl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Fo(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(pe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ul&&this.cachedEventUids.clear(),this.cachedEventUids.has(mr(e))}saveEventToCache(e){this.cachedEventUids.add(mr(e)),this.lastProcessedEventTime=Date.now()}}function mr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Fo({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function Fl(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fo(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(i,e={}){return be(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bl=/^https?/;async function Hl(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Vl(i);for(const t of e)try{if($l(t))return}catch{}ae(i,"unauthorized-domain")}function $l(i){const e=Ti(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!Bl.test(t))return!1;if(jl.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new qt(3e4,6e4);function _r(){const i=ge().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Gl(i){return new Promise((e,t)=>{function s(){_r(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_r(),t(pe(i,"network-request-failed"))},timeout:Wl.get()})}if(ge().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ge().gapi?.load)s();else{const o=Vh("iframefcb");return ge()[o]=()=>{gapi.load?s():t(pe(i,"network-request-failed"))},vo(`${Fh()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw In=null,e})}let In=null;function zl(i){return In=In||Gl(i),In}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new qt(5e3,15e3),Kl="__/auth/iframe",Jl="emulator/auth/iframe",Xl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ql(i){const e=i.config;R(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Mi(e,Jl):`https://${i.config.authDomain}/${Kl}`,s={apiKey:e.apiKey,appName:i.name,v:st},o=Yl.get(i.config.apiHost);o&&(s.eid=o);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${zt(s).slice(1)}`}async function Zl(i){const e=await zl(i),t=ge().gapi;return R(t,i,"internal-error"),e.open({where:document.body,url:Ql(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xl,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const h=pe(i,"network-request-failed"),g=ge().setTimeout(()=>{c(h)},ql.get());function y(){ge().clearTimeout(g),o(s)}s.ping(y).then(y,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tu=500,nu=600,iu="_blank",su="http://localhost";class yr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ru(i,e,t,s=tu,o=nu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y={...eu,width:s.toString(),height:o.toString(),top:c,left:h},v=Q().toLowerCase();t&&(g=go(v)?iu:t),fo(v)&&(e=e||su,y.scrollbars="yes");const S=Object.entries(y).reduce((A,[M,D])=>`${A}${M}=${D},`,"");if(kh(v)&&g!=="_self")return ou(e||"",g),new yr(null);const b=window.open(e||"",g,S);R(b,i,"popup-blocked");try{b.focus()}catch{}return new yr(b)}function ou(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="__/auth/handler",cu="emulator/auth/handler",hu=encodeURIComponent("fac");async function Ir(i,e,t,s,o,c){R(i.config.authDomain,i,"auth-domain-config-required"),R(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:st,eventId:o};if(e instanceof So){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Ya(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,b]of Object.entries({}))h[S]=b}if(e instanceof Jt){const S=e.getScopes().filter(b=>b!=="");S.length>0&&(h.scopes=S.join(","))}i.tenantId&&(h.tid=i.tenantId);const g=h;for(const S of Object.keys(g))g[S]===void 0&&delete g[S];const y=await i._getAppCheckToken(),v=y?`#${hu}=${encodeURIComponent(y)}`:"";return`${lu(i)}?${zt(g).slice(1)}${v}`}function lu({config:i}){return i.emulator?Mi(i,cu):`https://${i.authDomain}/${au}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="webStorageSupport";class uu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=No,this._completeRedirectFn=Ml,this._overrideRedirectResult=Nl}async _openPopup(e,t,s,o){Ae(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Ir(e,t,s,Ti(),o);return ru(e,c,ji())}async _openRedirect(e,t,s,o){await this._originValidation(e);const c=await Ir(e,t,s,Ti(),o);return pl(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:c}=this.eventManagers[t];return o?Promise.resolve(o):(Ae(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Zl(e),s=new xl(e);return t.register("authEvent",o=>(R(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pi,{type:pi},o=>{const c=o?.[0]?.[pi];c!==void 0&&t(!!c),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wo()||po()||xi()}}const du=uu;var wr="@firebase/auth",Er="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gu(i){et(new je("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=s.options;R(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eo(i)},v=new Mh(s,o,c,y);return Gh(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),et(new je("auth-internal",e=>{const t=rt(e.getProvider("auth").getImmediate());return(s=>new fu(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(wr,Er,pu(i)),fe(wr,Er,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=5*60,_u=Yr("authIdTokenMaxAge")||mu;let vr=null;const yu=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>_u)return;const o=t?.token;vr!==o&&(vr=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Iu(i=Di()){const e=Nn(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Wh(i,{popupRedirectResolver:du,persistence:[Tl,ul,No]}),s=Yr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=yu(c.toString());cl(t,h,()=>h(t.currentUser)),al(t,g=>h(g))}}const o=Kr("auth");return o&&zh(t,`http://${o}`),t}function wu(){return document.getElementsByTagName("head")?.[0]??document}Uh({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const c=pe("internal-error");c.customData=o,t(c)},s.type="text/javascript",s.charset="UTF-8",wu().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gu("Browser");var Eu="firebase",vu="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe(Eu,vu,"app");var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.F=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.D=function(_,p,w){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(_,d)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,u,f){f||(f=0);const _=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)_[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)_[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],p=m.g[2];let w=m.g[3],d;d=u+(w^f&(p^w))+_[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[2]+606105819&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+_[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[6]+2821735955&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+_[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[10]+4294925233&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+_[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[14]+2792965006&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^w&(f^p))+_[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[11]+643717713&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+_[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[15]+3634488961&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+_[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[3]+4107603335&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+_[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[7]+1735328473&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^w)+_[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[11]+1839030562&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+_[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[7]+4139469664&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+_[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[3]+3572445317&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+_[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[15]+530742520&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~w))+_[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[14]+2878612391&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+_[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[10]+4293915773&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+_[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[6]+2734768916&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+_[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[2]+718787259&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+w&4294967295}s.prototype.v=function(m,u){u===void 0&&(u=m.length);const f=u-this.blockSize,_=this.C;let p=this.h,w=0;for(;w<u;){if(p==0)for(;w<=f;)o(this,m,w),w+=this.blockSize;if(typeof m=="string"){for(;w<u;)if(_[p++]=m.charCodeAt(w++),p==this.blockSize){o(this,_),p=0;break}}else for(;w<u;)if(_[p++]=m[w++],p==this.blockSize){o(this,_),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;u=this.o*8;for(var f=m.length-8;f<m.length;++f)m[f]=u&255,u/=256;for(this.v(m),m=Array(16),u=0,f=0;f<4;++f)for(let _=0;_<32;_+=8)m[u++]=this.g[f]>>>_&255;return m};function c(m,u){var f=g;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function h(m,u){this.h=u;const f=[];let _=!0;for(let p=m.length-1;p>=0;p--){const w=m[p]|0;_&&w==u||(f[p]=w,_=!1)}this.g=f}var g={};function y(m){return-128<=m&&m<128?c(m,function(u){return new h([u|0],u<0?-1:0)}):new h([m|0],m<0?-1:0)}function v(m){if(isNaN(m)||!isFinite(m))return b;if(m<0)return k(v(-m));const u=[];let f=1;for(let _=0;m>=f;_++)u[_]=m/f|0,f*=4294967296;return new h(u,0)}function S(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return k(S(m.substring(1),u));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=v(Math.pow(u,8));let _=b;for(let w=0;w<m.length;w+=8){var p=Math.min(8,m.length-w);const d=parseInt(m.substring(w,w+p),u);p<8?(p=v(Math.pow(u,p)),_=_.j(p).add(v(d))):(_=_.j(f),_=_.add(v(d)))}return _}var b=y(0),A=y(1),M=y(16777216);i=h.prototype,i.m=function(){if(U(this))return-k(this).m();let m=0,u=1;for(let f=0;f<this.g.length;f++){const _=this.i(f);m+=(_>=0?_:4294967296+_)*u,u*=4294967296}return m},i.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(D(this))return"0";if(U(this))return"-"+k(this).toString(m);const u=v(Math.pow(m,6));var f=this;let _="";for(;;){const p=j(f,u).g;f=W(f,p.j(u));let w=((f.g.length>0?f.g[0]:f.h)>>>0).toString(m);if(f=p,D(f))return w+_;for(;w.length<6;)w="0"+w;_=w+_}},i.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function D(m){if(m.h!=0)return!1;for(let u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function U(m){return m.h==-1}i.l=function(m){return m=W(this,m),U(m)?-1:D(m)?0:1};function k(m){const u=m.g.length,f=[];for(let _=0;_<u;_++)f[_]=~m.g[_];return new h(f,~m.h).add(A)}i.abs=function(){return U(this)?k(this):this},i.add=function(m){const u=Math.max(this.g.length,m.g.length),f=[];let _=0;for(let p=0;p<=u;p++){let w=_+(this.i(p)&65535)+(m.i(p)&65535),d=(w>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);_=d>>>16,w&=65535,d&=65535,f[p]=d<<16|w}return new h(f,f[f.length-1]&-2147483648?-1:0)};function W(m,u){return m.add(k(u))}i.j=function(m){if(D(this)||D(m))return b;if(U(this))return U(m)?k(this).j(k(m)):k(k(this).j(m));if(U(m))return k(this.j(k(m)));if(this.l(M)<0&&m.l(M)<0)return v(this.m()*m.m());const u=this.g.length+m.g.length,f=[];for(var _=0;_<2*u;_++)f[_]=0;for(_=0;_<this.g.length;_++)for(let p=0;p<m.g.length;p++){const w=this.i(_)>>>16,d=this.i(_)&65535,Z=m.i(p)>>>16,$e=m.i(p)&65535;f[2*_+2*p]+=d*$e,K(f,2*_+2*p),f[2*_+2*p+1]+=w*$e,K(f,2*_+2*p+1),f[2*_+2*p+1]+=d*Z,K(f,2*_+2*p+1),f[2*_+2*p+2]+=w*Z,K(f,2*_+2*p+2)}for(m=0;m<u;m++)f[m]=f[2*m+1]<<16|f[2*m];for(m=u;m<2*u;m++)f[m]=0;return new h(f,0)};function K(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function H(m,u){this.g=m,this.h=u}function j(m,u){if(D(u))throw Error("division by zero");if(D(m))return new H(b,b);if(U(m))return u=j(k(m),u),new H(k(u.g),k(u.h));if(U(u))return u=j(m,k(u)),new H(k(u.g),u.h);if(m.g.length>30){if(U(m)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,_=u;_.l(m)<=0;)f=ee(f),_=ee(_);var p=z(f,1),w=z(_,1);for(_=z(_,2),f=z(f,2);!D(_);){var d=w.add(_);d.l(m)<=0&&(p=p.add(f),w=d),_=z(_,1),f=z(f,1)}return u=W(m,p.j(u)),new H(p,u)}for(p=b;m.l(u)>=0;){for(f=Math.max(1,Math.floor(m.m()/u.m())),_=Math.ceil(Math.log(f)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),w=v(f),d=w.j(u);U(d)||d.l(m)>0;)f-=_,w=v(f),d=w.j(u);D(w)&&(w=A),p=p.add(w),m=W(m,d)}return new H(p,m)}i.B=function(m){return j(this,m).h},i.and=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let _=0;_<u;_++)f[_]=this.i(_)&m.i(_);return new h(f,this.h&m.h)},i.or=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let _=0;_<u;_++)f[_]=this.i(_)|m.i(_);return new h(f,this.h|m.h)},i.xor=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let _=0;_<u;_++)f[_]=this.i(_)^m.i(_);return new h(f,this.h^m.h)};function ee(m){const u=m.g.length+1,f=[];for(let _=0;_<u;_++)f[_]=m.i(_)<<1|m.i(_-1)>>>31;return new h(f,m.h)}function z(m,u){const f=u>>5;u%=32;const _=m.g.length-f,p=[];for(let w=0;w<_;w++)p[w]=u>0?m.i(w+f)>>>u|m.i(w+f+1)<<32-u:m.i(w+f);return new h(p,m.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=S,Hi=h}).apply(typeof Tr<"u"?Tr:typeof self<"u"?self:typeof window<"u"?window:{});var fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof fn=="object"&&fn];for(var r=0;r<n.length;++r){var a=n[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=t(this);function o(n,r){if(r)e:{var a=s;n=n.split(".");for(var l=0;l<n.length-1;l++){var I=n[l];if(!(I in a))break e;a=a[I]}n=n[n.length-1],l=a[n],r=r(l),r!=l&&r!=null&&e(a,n,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(n){return n||function(r){var a=[],l;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.push([l,r[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function g(n){var r=typeof n;return r=="object"&&n!=null||r=="function"}function y(n,r,a){return n.call.apply(n.bind,arguments)}function v(n,r,a){return v=y,v.apply(null,arguments)}function S(n,r){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),n.apply(this,l)}}function b(n,r){function a(){}a.prototype=r.prototype,n.Z=r.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(l,I,E){for(var T=Array(arguments.length-2),C=2;C<arguments.length;C++)T[C-2]=arguments[C];return r.prototype[I].apply(l,T)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function M(n){const r=n.length;if(r>0){const a=Array(r);for(let l=0;l<r;l++)a[l]=n[l];return a}return[]}function D(n,r){for(let l=1;l<arguments.length;l++){const I=arguments[l];var a=typeof I;if(a=a!="object"?a:I?Array.isArray(I)?"array":a:"null",a=="array"||a=="object"&&typeof I.length=="number"){a=n.length||0;const E=I.length||0;n.length=a+E;for(let T=0;T<E;T++)n[a+T]=I[T]}else n.push(I)}}class U{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function k(n){h.setTimeout(()=>{throw n},0)}function W(){var n=m;let r=null;return n.g&&(r=n.g,n.g=n.g.next,n.g||(n.h=null),r.next=null),r}class K{constructor(){this.h=this.g=null}add(r,a){const l=H.get();l.set(r,a),this.h?this.h.next=l:this.g=l,this.h=l}}var H=new U(()=>new j,n=>n.reset());class j{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,z=!1,m=new K,u=()=>{const n=Promise.resolve(void 0);ee=()=>{n.then(f)}};function f(){for(var n;n=W();){try{n.h.call(n.g)}catch(a){k(a)}var r=H;r.j(n),r.h<100&&(r.h++,n.next=r.g,r.g=n)}z=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(n,r){this.type=n,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var n=!1,r=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};h.addEventListener("test",a,r),h.removeEventListener("test",a,r)}catch{}return n}();function d(n){return/^[\s\xa0]*$/.test(n)}function Z(n,r){p.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,r)}b(Z,p),Z.prototype.init=function(n,r){const a=this.type=n.type,l=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=r,r=n.relatedTarget,r||(a=="mouseover"?r=n.fromElement:a=="mouseout"&&(r=n.toElement)),this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),Xo=0;function Yo(n,r,a,l,I){this.listener=n,this.proxy=null,this.src=r,this.type=a,this.capture=!!l,this.ha=I,this.key=++Xo,this.da=this.fa=!1}function Zt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function en(n,r,a){for(const l in n)r.call(a,n[l],l,n)}function Qo(n,r){for(const a in n)r.call(void 0,n[a],a,n)}function Ki(n){const r={};for(const a in n)r[a]=n[a];return r}const Ji="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xi(n,r){let a,l;for(let I=1;I<arguments.length;I++){l=arguments[I];for(a in l)n[a]=l[a];for(let E=0;E<Ji.length;E++)a=Ji[E],Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a])}}function tn(n){this.src=n,this.g={},this.h=0}tn.prototype.add=function(n,r,a,l,I){const E=n.toString();n=this.g[E],n||(n=this.g[E]=[],this.h++);const T=xn(n,r,l,I);return T>-1?(r=n[T],a||(r.fa=!1)):(r=new Yo(r,this.src,E,!!l,I),r.fa=a,n.push(r)),r};function Un(n,r){const a=r.type;if(a in n.g){var l=n.g[a],I=Array.prototype.indexOf.call(l,r,void 0),E;(E=I>=0)&&Array.prototype.splice.call(l,I,1),E&&(Zt(r),n.g[a].length==0&&(delete n.g[a],n.h--))}}function xn(n,r,a,l){for(let I=0;I<n.length;++I){const E=n[I];if(!E.da&&E.listener==r&&E.capture==!!a&&E.ha==l)return I}return-1}var Fn="closure_lm_"+(Math.random()*1e6|0),Vn={};function Yi(n,r,a,l,I){if(Array.isArray(r)){for(let E=0;E<r.length;E++)Yi(n,r[E],a,l,I);return null}return a=es(a),n&&n[$e]?n.J(r,a,g(l)?!!l.capture:!1,I):Zo(n,r,a,!1,l,I)}function Zo(n,r,a,l,I,E){if(!r)throw Error("Invalid event type");const T=g(I)?!!I.capture:!!I;let C=Bn(n);if(C||(n[Fn]=C=new tn(n)),a=C.add(r,a,l,T,E),a.proxy)return a;if(l=ea(),a.proxy=l,l.src=n,l.listener=a,n.addEventListener)w||(I=T),I===void 0&&(I=!1),n.addEventListener(r.toString(),l,I);else if(n.attachEvent)n.attachEvent(Zi(r.toString()),l);else if(n.addListener&&n.removeListener)n.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function ea(){function n(a){return r.call(n.src,n.listener,a)}const r=ta;return n}function Qi(n,r,a,l,I){if(Array.isArray(r))for(var E=0;E<r.length;E++)Qi(n,r[E],a,l,I);else l=g(l)?!!l.capture:!!l,a=es(a),n&&n[$e]?(n=n.i,E=String(r).toString(),E in n.g&&(r=n.g[E],a=xn(r,a,l,I),a>-1&&(Zt(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete n.g[E],n.h--)))):n&&(n=Bn(n))&&(r=n.g[r.toString()],n=-1,r&&(n=xn(r,a,l,I)),(a=n>-1?r[n]:null)&&jn(a))}function jn(n){if(typeof n!="number"&&n&&!n.da){var r=n.src;if(r&&r[$e])Un(r.i,n);else{var a=n.type,l=n.proxy;r.removeEventListener?r.removeEventListener(a,l,n.capture):r.detachEvent?r.detachEvent(Zi(a),l):r.addListener&&r.removeListener&&r.removeListener(l),(a=Bn(r))?(Un(a,n),a.h==0&&(a.src=null,r[Fn]=null)):Zt(n)}}}function Zi(n){return n in Vn?Vn[n]:Vn[n]="on"+n}function ta(n,r){if(n.da)n=!0;else{r=new Z(r,this);const a=n.listener,l=n.ha||n.src;n.fa&&jn(n),n=a.call(l,r)}return n}function Bn(n){return n=n[Fn],n instanceof tn?n:null}var Hn="__closure_events_fn_"+(Math.random()*1e9>>>0);function es(n){return typeof n=="function"?n:(n[Hn]||(n[Hn]=function(r){return n.handleEvent(r)}),n[Hn])}function q(){_.call(this),this.i=new tn(this),this.M=this,this.G=null}b(q,_),q.prototype[$e]=!0,q.prototype.removeEventListener=function(n,r,a,l){Qi(this,n,r,a,l)};function J(n,r){var a,l=n.G;if(l)for(a=[];l;l=l.G)a.push(l);if(n=n.M,l=r.type||r,typeof r=="string")r=new p(r,n);else if(r instanceof p)r.target=r.target||n;else{var I=r;r=new p(l,n),Xi(r,I)}I=!0;let E,T;if(a)for(T=a.length-1;T>=0;T--)E=r.g=a[T],I=nn(E,l,!0,r)&&I;if(E=r.g=n,I=nn(E,l,!0,r)&&I,I=nn(E,l,!1,r)&&I,a)for(T=0;T<a.length;T++)E=r.g=a[T],I=nn(E,l,!1,r)&&I}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var n=this.i;for(const r in n.g){const a=n.g[r];for(let l=0;l<a.length;l++)Zt(a[l]);delete n.g[r],n.h--}}this.G=null},q.prototype.J=function(n,r,a,l){return this.i.add(String(n),r,!1,a,l)},q.prototype.K=function(n,r,a,l){return this.i.add(String(n),r,!0,a,l)};function nn(n,r,a,l){if(r=n.i.g[String(r)],!r)return!0;r=r.concat();let I=!0;for(let E=0;E<r.length;++E){const T=r[E];if(T&&!T.da&&T.capture==a){const C=T.listener,$=T.ha||T.src;T.fa&&Un(n.i,T),I=C.call($,l)!==!1&&I}}return I&&!l.defaultPrevented}function na(n,r){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=v(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:h.setTimeout(n,r||0)}function ts(n){n.g=na(()=>{n.g=null,n.i&&(n.i=!1,ts(n))},n.l);const r=n.h;n.h=null,n.m.apply(null,r)}class ia extends _{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:ts(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(n){_.call(this),this.h=n,this.g={}}b(It,_);var ns=[];function is(n){en(n.g,function(r,a){this.g.hasOwnProperty(a)&&jn(r)},n),n.g={}}It.prototype.N=function(){It.Z.N.call(this),is(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $n=h.JSON.stringify,sa=h.JSON.parse,ra=class{stringify(n){return h.JSON.stringify(n,void 0)}parse(n){return h.JSON.parse(n,void 0)}};function ss(){}function oa(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wn(){p.call(this,"d")}b(Wn,p);function Gn(){p.call(this,"c")}b(Gn,p);var ot={},rs=null;function zn(){return rs=rs||new q}ot.Ia="serverreachability";function os(n){p.call(this,ot.Ia,n)}b(os,p);function Et(n){const r=zn();J(r,new os(r))}ot.STAT_EVENT="statevent";function as(n,r){p.call(this,ot.STAT_EVENT,n),this.stat=r}b(as,p);function X(n){const r=zn();J(r,new as(r,n))}ot.Ja="timingevent";function cs(n,r){p.call(this,ot.Ja,n),this.size=r}b(cs,p);function vt(n,r){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){n()},r)}function Tt(){this.g=!0}Tt.prototype.ua=function(){this.g=!1};function aa(n,r,a,l,I,E){n.info(function(){if(n.g)if(E){var T="",C=E.split("&");for(let x=0;x<C.length;x++){var $=C[x].split("=");if($.length>1){const G=$[0];$=$[1];const he=G.split("_");T=he.length>=2&&he[1]=="type"?T+(G+"="+$+"&"):T+(G+"=redacted&")}}}else T=null;else T=E;return"XMLHTTP REQ ("+l+") [attempt "+I+"]: "+r+`
`+a+`
`+T})}function ca(n,r,a,l,I,E,T){n.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+I+"]: "+r+`
`+a+`
`+E+" "+T})}function at(n,r,a,l){n.info(function(){return"XMLHTTP TEXT ("+r+"): "+la(n,a)+(l?" "+l:"")})}function ha(n,r){n.info(function(){return"TIMEOUT: "+r})}Tt.prototype.info=function(){};function la(n,r){if(!n.g)return r;if(!r)return null;try{const E=JSON.parse(r);if(E){for(n=0;n<E.length;n++)if(Array.isArray(E[n])){var a=E[n];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var I=l[0];if(I!="noop"&&I!="stop"&&I!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return $n(E)}catch{return r}}var qn={NO_ERROR:0,TIMEOUT:8},ua={},hs;function Kn(){}b(Kn,ss),Kn.prototype.g=function(){return new XMLHttpRequest},hs=new Kn;function At(n){return encodeURIComponent(String(n))}function da(n){var r=1;n=n.split(":");const a=[];for(;r>0&&n.length;)a.push(n.shift()),r--;return n.length&&a.push(n.join(":")),a}function Re(n,r,a,l){this.j=n,this.i=r,this.l=a,this.S=l||1,this.V=new It(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ls}function ls(){this.i=null,this.g="",this.h=!1}var us={},Jn={};function Xn(n,r,a){n.M=1,n.A=rn(ce(r)),n.u=a,n.R=!0,ds(n,null)}function ds(n,r){n.F=Date.now(),sn(n),n.B=ce(n.A);var a=n.B,l=n.S;Array.isArray(l)||(l=[String(l)]),Ss(a.i,"t",l),n.C=0,a=n.j.L,n.h=new ls,n.g=$s(n.j,a?r:null,!n.u),n.P>0&&(n.O=new ia(v(n.Y,n,n.g),n.P)),r=n.V,a=n.g,l=n.ba;var I="readystatechange";Array.isArray(I)||(I&&(ns[0]=I.toString()),I=ns);for(let E=0;E<I.length;E++){const T=Yi(a,I[E],l||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=n.J?Ki(n.J):{},n.u?(n.v||(n.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,r)):(n.v="GET",n.g.ea(n.B,n.v,null,r)),Et(),aa(n.i,n.v,n.B,n.l,n.S,n.u)}Re.prototype.ba=function(n){n=n.target;const r=this.O;r&&Pe(n)==3?r.j():this.Y(n)},Re.prototype.Y=function(n){try{if(n==this.g)e:{const C=Pe(this.g),$=this.g.ya(),x=this.g.ca();if(!(C<3)&&(C!=3||this.g&&(this.h.h||this.g.la()||Ns(this.g)))){this.K||C!=4||$==7||($==8||x<=0?Et(3):Et(2)),Yn(this);var r=this.g.ca();this.X=r;var a=fa(this);if(this.o=r==200,ca(this.i,this.v,this.B,this.l,this.S,C,r),this.o){if(this.U&&!this.L){t:{if(this.g){var l,I=this.g;if((l=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var E=l;break t}}E=null}if(n=E)at(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qn(this,n);else{this.o=!1,this.m=3,X(12),We(this),St(this);break e}}if(this.R){n=!0;let G;for(;!this.K&&this.C<a.length;)if(G=pa(this,a),G==Jn){C==4&&(this.m=4,X(14),n=!1),at(this.i,this.l,null,"[Incomplete Response]");break}else if(G==us){this.m=4,X(15),at(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else at(this.i,this.l,G,null),Qn(this,G);if(fs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),C!=4||a.length!=0||this.h.h||(this.m=1,X(16),n=!1),this.o=this.o&&n,!n)at(this.i,this.l,a,"[Invalid Chunked Response]"),We(this),St(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),oi(T),T.P=!0,X(11))}}else at(this.i,this.l,a,null),Qn(this,a);C==4&&We(this),this.o&&!this.K&&(C==4?Vs(this.j,this):(this.o=!1,sn(this)))}else Ca(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,X(12)):(this.m=0,X(13)),We(this),St(this)}}}catch{}finally{}};function fa(n){if(!fs(n))return n.g.la();const r=Ns(n.g);if(r==="")return"";let a="";const l=r.length,I=Pe(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return We(n),St(n),"";n.h.i=new h.TextDecoder}for(let E=0;E<l;E++)n.h.h=!0,a+=n.h.i.decode(r[E],{stream:!(I&&E==l-1)});return r.length=0,n.h.g+=a,n.C=0,n.h.g}function fs(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function pa(n,r){var a=n.C,l=r.indexOf(`
`,a);return l==-1?Jn:(a=Number(r.substring(a,l)),isNaN(a)?us:(l+=1,l+a>r.length?Jn:(r=r.slice(l,l+a),n.C=l+a,r)))}Re.prototype.cancel=function(){this.K=!0,We(this)};function sn(n){n.T=Date.now()+n.H,ps(n,n.H)}function ps(n,r){if(n.D!=null)throw Error("WatchDog timer not null");n.D=vt(v(n.aa,n),r)}function Yn(n){n.D&&(h.clearTimeout(n.D),n.D=null)}Re.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(ha(this.i,this.B),this.M!=2&&(Et(),X(17)),We(this),this.m=2,St(this)):ps(this,this.T-n)};function St(n){n.j.I==0||n.K||Vs(n.j,n)}function We(n){Yn(n);var r=n.O;r&&typeof r.dispose=="function"&&r.dispose(),n.O=null,is(n.V),n.g&&(r=n.g,n.g=null,r.abort(),r.dispose())}function Qn(n,r){try{var a=n.j;if(a.I!=0&&(a.g==n||Zn(a.h,n))){if(!n.L&&Zn(a.h,n)&&a.I==3){try{var l=a.Ba.g.parse(r)}catch{l=null}if(Array.isArray(l)&&l.length==3){var I=l;if(I[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)ln(a),cn(a);else break e;ri(a),X(18)}}else a.xa=I[1],0<a.xa-a.K&&I[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=vt(v(a.Va,a),6e3));_s(a.h)<=1&&a.ta&&(a.ta=void 0)}else ze(a,11)}else if((n.L||a.g==n)&&ln(a),!d(r))for(I=a.Ba.g.parse(r),r=0;r<I.length;r++){let x=I[r];const G=x[0];if(!(G<=a.K))if(a.K=G,x=x[1],a.I==2)if(x[0]=="c"){a.M=x[1],a.ba=x[2];const he=x[3];he!=null&&(a.ka=he,a.j.info("VER="+a.ka));const qe=x[4];qe!=null&&(a.za=qe,a.j.info("SVER="+a.za));const Oe=x[5];Oe!=null&&typeof Oe=="number"&&Oe>0&&(l=1.5*Oe,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const Ne=n.g;if(Ne){const un=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(un){var E=l.h;E.g||un.indexOf("spdy")==-1&&un.indexOf("quic")==-1&&un.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(ei(E,E.h),E.h=null))}if(l.G){const ai=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;ai&&(l.wa=ai,F(l.J,l.G,ai))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=n;if(l.na=Hs(l,l.L?l.ba:null,l.W),T.L){ys(l.h,T);var C=T,$=l.O;$&&(C.H=$),C.D&&(Yn(C),sn(C)),l.g=T}else xs(l);a.i.length>0&&hn(a)}else x[0]!="stop"&&x[0]!="close"||ze(a,7);else a.I==3&&(x[0]=="stop"||x[0]=="close"?x[0]=="stop"?ze(a,7):si(a):x[0]!="noop"&&a.l&&a.l.qa(x),a.A=0)}}Et(4)}catch{}}var ga=class{constructor(n,r){this.g=n,this.map=r}};function gs(n){this.l=n||10,h.PerformanceNavigationTiming?(n=h.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ms(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function _s(n){return n.h?1:n.g?n.g.size:0}function Zn(n,r){return n.h?n.h==r:n.g?n.g.has(r):!1}function ei(n,r){n.g?n.g.add(r):n.h=r}function ys(n,r){n.h&&n.h==r?n.h=null:n.g&&n.g.has(r)&&n.g.delete(r)}gs.prototype.cancel=function(){if(this.i=Is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Is(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let r=n.i;for(const a of n.g.values())r=r.concat(a.G);return r}return M(n.i)}var ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ma(n,r){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const l=n[a].indexOf("=");let I,E=null;l>=0?(I=n[a].substring(0,l),E=n[a].substring(l+1)):I=n[a],r(I,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Ce(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;n instanceof Ce?(this.l=n.l,bt(this,n.j),this.o=n.o,this.g=n.g,Rt(this,n.u),this.h=n.h,ti(this,bs(n.i)),this.m=n.m):n&&(r=String(n).match(ws))?(this.l=!1,bt(this,r[1]||"",!0),this.o=Ct(r[2]||""),this.g=Ct(r[3]||"",!0),Rt(this,r[4]),this.h=Ct(r[5]||"",!0),ti(this,r[6]||"",!0),this.m=Ct(r[7]||"")):(this.l=!1,this.i=new Pt(null,this.l))}Ce.prototype.toString=function(){const n=[];var r=this.j;r&&n.push(kt(r,Es,!0),":");var a=this.g;return(a||r=="file")&&(n.push("//"),(r=this.o)&&n.push(kt(r,Es,!0),"@"),n.push(At(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(kt(a,a.charAt(0)=="/"?Ia:ya,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",kt(a,Ea)),n.join("")},Ce.prototype.resolve=function(n){const r=ce(this);let a=!!n.j;a?bt(r,n.j):a=!!n.o,a?r.o=n.o:a=!!n.g,a?r.g=n.g:a=n.u!=null;var l=n.h;if(a)Rt(r,n.u);else if(a=!!n.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var I=r.h.lastIndexOf("/");I!=-1&&(l=r.h.slice(0,I+1)+l)}if(I=l,I==".."||I==".")l="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){l=I.lastIndexOf("/",0)==0,I=I.split("/");const E=[];for(let T=0;T<I.length;){const C=I[T++];C=="."?l&&T==I.length&&E.push(""):C==".."?((E.length>1||E.length==1&&E[0]!="")&&E.pop(),l&&T==I.length&&E.push("")):(E.push(C),l=!0)}l=E.join("/")}else l=I}return a?r.h=l:a=n.i.toString()!=="",a?ti(r,bs(n.i)):a=!!n.m,a&&(r.m=n.m),r};function ce(n){return new Ce(n)}function bt(n,r,a){n.j=a?Ct(r,!0):r,n.j&&(n.j=n.j.replace(/:$/,""))}function Rt(n,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);n.u=r}else n.u=null}function ti(n,r,a){r instanceof Pt?(n.i=r,va(n.i,n.l)):(a||(r=kt(r,wa)),n.i=new Pt(r,n.l))}function F(n,r,a){n.i.set(r,a)}function rn(n){return F(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function Ct(n,r){return n?r?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function kt(n,r,a){return typeof n=="string"?(n=encodeURI(n).replace(r,_a),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function _a(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Es=/[#\/\?@]/g,ya=/[#\?:]/g,Ia=/[#\?]/g,wa=/[#\?@]/g,Ea=/#/g;function Pt(n,r){this.h=this.g=null,this.i=n||null,this.j=!!r}function Ge(n){n.g||(n.g=new Map,n.h=0,n.i&&ma(n.i,function(r,a){n.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=Pt.prototype,i.add=function(n,r){Ge(this),this.i=null,n=ct(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(r),this.h+=1,this};function vs(n,r){Ge(n),r=ct(n,r),n.g.has(r)&&(n.i=null,n.h-=n.g.get(r).length,n.g.delete(r))}function Ts(n,r){return Ge(n),r=ct(n,r),n.g.has(r)}i.forEach=function(n,r){Ge(this),this.g.forEach(function(a,l){a.forEach(function(I){n.call(r,I,l,this)},this)},this)};function As(n,r){Ge(n);let a=[];if(typeof r=="string")Ts(n,r)&&(a=a.concat(n.g.get(ct(n,r))));else for(n=Array.from(n.g.values()),r=0;r<n.length;r++)a=a.concat(n[r]);return a}i.set=function(n,r){return Ge(this),this.i=null,n=ct(this,n),Ts(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[r]),this.h+=1,this},i.get=function(n,r){return n?(n=As(this,n),n.length>0?String(n[0]):r):r};function Ss(n,r,a){vs(n,r),a.length>0&&(n.i=null,n.g.set(ct(n,r),M(a)),n.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],r=Array.from(this.g.keys());for(let l=0;l<r.length;l++){var a=r[l];const I=At(a);a=As(this,a);for(let E=0;E<a.length;E++){let T=I;a[E]!==""&&(T+="="+At(a[E])),n.push(T)}}return this.i=n.join("&")};function bs(n){const r=new Pt;return r.i=n.i,n.g&&(r.g=new Map(n.g),r.h=n.h),r}function ct(n,r){return r=String(r),n.j&&(r=r.toLowerCase()),r}function va(n,r){r&&!n.j&&(Ge(n),n.i=null,n.g.forEach(function(a,l){const I=l.toLowerCase();l!=I&&(vs(this,l),Ss(this,I,a))},n)),n.j=r}function Ta(n,r){const a=new Tt;if(h.Image){const l=new Image;l.onload=S(ke,a,"TestLoadImage: loaded",!0,r,l),l.onerror=S(ke,a,"TestLoadImage: error",!1,r,l),l.onabort=S(ke,a,"TestLoadImage: abort",!1,r,l),l.ontimeout=S(ke,a,"TestLoadImage: timeout",!1,r,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=n}else r(!1)}function Aa(n,r){const a=new Tt,l=new AbortController,I=setTimeout(()=>{l.abort(),ke(a,"TestPingServer: timeout",!1,r)},1e4);fetch(n,{signal:l.signal}).then(E=>{clearTimeout(I),E.ok?ke(a,"TestPingServer: ok",!0,r):ke(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(I),ke(a,"TestPingServer: error",!1,r)})}function ke(n,r,a,l,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),l(a)}catch{}}function Sa(){this.g=new ra}function ni(n){this.i=n.Sb||null,this.h=n.ab||!1}b(ni,ss),ni.prototype.g=function(){return new on(this.i,this.h)};function on(n,r){q.call(this),this.H=n,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(on,q),i=on.prototype,i.open=function(n,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=r,this.readyState=1,Nt(this)},i.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(r.body=n),(this.H||h).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ot(this)),this.readyState=0},i.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rs(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rs(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}i.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var r=n.value?n.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!n.done}))&&(this.response=this.responseText+=r)}n.done?Ot(this):Nt(this),this.readyState==3&&Rs(this)}},i.Oa=function(n){this.g&&(this.response=this.responseText=n,Ot(this))},i.Na=function(n){this.g&&(this.response=n,Ot(this))},i.ga=function(){this.g&&Ot(this)};function Ot(n){n.readyState=4,n.l=null,n.j=null,n.B=null,Nt(n)}i.setRequestHeader=function(n,r){this.A.append(n,r)},i.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=r.next();return n.join(`\r
`)};function Nt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(on.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Cs(n){let r="";return en(n,function(a,l){r+=l,r+=":",r+=a,r+=`\r
`}),r}function ii(n,r,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Cs(a),typeof n=="string"?a!=null&&At(a):F(n,r,a))}function V(n){q.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(V,q);var ba=/^https?$/i,Ra=["POST","PUT"];i=V.prototype,i.Fa=function(n){this.H=n},i.ea=function(n,r,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);r=r?r.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hs.g(),this.g.onreadystatechange=A(v(this.Ca,this));try{this.B=!0,this.g.open(r,String(n),!0),this.B=!1}catch(E){ks(this,E);return}if(n=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var I in l)a.set(I,l[I]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const E of l.keys())a.set(E,l.get(E));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(E=>E.toLowerCase()=="content-type"),I=h.FormData&&n instanceof h.FormData,!(Array.prototype.indexOf.call(Ra,r,void 0)>=0)||l||I||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of a)this.g.setRequestHeader(E,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(E){ks(this,E)}};function ks(n,r){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=r,n.o=5,Ps(n),an(n)}function Ps(n){n.A||(n.A=!0,J(n,"complete"),J(n,"error"))}i.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,J(this,"complete"),J(this,"abort"),an(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),V.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Os(this):this.Xa())},i.Xa=function(){Os(this)};function Os(n){if(n.h&&typeof c<"u"){if(n.v&&Pe(n)==4)setTimeout(n.Ca.bind(n),0);else if(J(n,"readystatechange"),Pe(n)==4){n.h=!1;try{const E=n.ca();e:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var a;if(!(a=r)){var l;if(l=E===0){let T=String(n.D).match(ws)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!ba.test(T?T.toLowerCase():"")}a=l}if(a)J(n,"complete"),J(n,"success");else{n.o=6;try{var I=Pe(n)>2?n.g.statusText:""}catch{I=""}n.l=I+" ["+n.ca()+"]",Ps(n)}}finally{an(n)}}}}function an(n,r){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,r||J(n,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Pe(n){return n.g?n.g.readyState:0}i.ca=function(){try{return Pe(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(n){if(this.g){var r=this.g.responseText;return n&&r.indexOf(n)==0&&(r=r.substring(n.length)),sa(r)}};function Ns(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ca(n){const r={};n=(n.g&&Pe(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<n.length;l++){if(d(n[l]))continue;var a=da(n[l]);const I=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const E=r[I]||[];r[I]=E,E.push(a)}Qo(r,function(l){return l.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dt(n,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||r}function Ds(n){this.za=0,this.i=[],this.j=new Tt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Dt("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Dt("baseRetryDelayMs",5e3,n),this.Za=Dt("retryDelaySeedMs",1e4,n),this.Ta=Dt("forwardChannelMaxRetries",2,n),this.va=Dt("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new gs(n&&n.concurrentRequestLimit),this.Ba=new Sa,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ds.prototype,i.ka=8,i.I=1,i.connect=function(n,r,a,l){X(0),this.W=n,this.H=r||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Hs(this,null,this.W),hn(this)};function si(n){if(Ls(n),n.I==3){var r=n.V++,a=ce(n.J);if(F(a,"SID",n.M),F(a,"RID",r),F(a,"TYPE","terminate"),Lt(n,a),r=new Re(n,n.j,r),r.M=2,r.A=rn(ce(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=r.A,a=!0),a||(r.g=$s(r.j,null),r.g.ea(r.A)),r.F=Date.now(),sn(r)}Bs(n)}function cn(n){n.g&&(oi(n),n.g.cancel(),n.g=null)}function Ls(n){cn(n),n.v&&(h.clearTimeout(n.v),n.v=null),ln(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&h.clearTimeout(n.m),n.m=null)}function hn(n){if(!ms(n.h)&&!n.m){n.m=!0;var r=n.Ea;ee||u(),z||(ee(),z=!0),m.add(r,n),n.D=0}}function ka(n,r){return _s(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=r.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=vt(v(n.Ea,n,r),js(n,n.D)),n.D++,!0)}i.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const I=new Re(this,this.j,n);let E=this.o;if(this.U&&(E?(E=Ki(E),Xi(E,this.U)):E=this.U),this.u!==null||this.R||(I.J=E,E=null),this.S)e:{for(var r=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(r+=l,r>4096){r=a;break e}if(r===4096||a===this.i.length-1){r=a+1;break e}}r=1e3}else r=1e3;r=Us(this,I,r),a=ce(this.J),F(a,"RID",n),F(a,"CVER",22),this.G&&F(a,"X-HTTP-Session-Id",this.G),Lt(this,a),E&&(this.R?r="headers="+At(Cs(E))+"&"+r:this.u&&ii(a,this.u,E)),ei(this.h,I),this.Ra&&F(a,"TYPE","init"),this.S?(F(a,"$req",r),F(a,"SID","null"),I.U=!0,Xn(I,a,null)):Xn(I,a,r),this.I=2}}else this.I==3&&(n?Ms(this,n):this.i.length==0||ms(this.h)||Ms(this))};function Ms(n,r){var a;r?a=r.l:a=n.V++;const l=ce(n.J);F(l,"SID",n.M),F(l,"RID",a),F(l,"AID",n.K),Lt(n,l),n.u&&n.o&&ii(l,n.u,n.o),a=new Re(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),r&&(n.i=r.G.concat(n.i)),r=Us(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),ei(n.h,a),Xn(a,l,r)}function Lt(n,r){n.H&&en(n.H,function(a,l){F(r,l,a)}),n.l&&en({},function(a,l){F(r,l,a)})}function Us(n,r,a){a=Math.min(n.i.length,a);const l=n.l?v(n.l.Ka,n.l,n):null;e:{var I=n.i;let C=-1;for(;;){const $=["count="+a];C==-1?a>0?(C=I[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let x=!0;for(let G=0;G<a;G++){var E=I[G].g;const he=I[G].map;if(E-=C,E<0)C=Math.max(0,I[G].g-100),x=!1;else try{E="req"+E+"_"||"";try{var T=he instanceof Map?he:Object.entries(he);for(const[qe,Oe]of T){let Ne=Oe;g(Oe)&&(Ne=$n(Oe)),$.push(E+qe+"="+encodeURIComponent(Ne))}}catch(qe){throw $.push(E+"type="+encodeURIComponent("_badmap")),qe}}catch{l&&l(he)}}if(x){T=$.join("&");break e}}T=void 0}return n=n.i.splice(0,a),r.G=n,T}function xs(n){if(!n.g&&!n.v){n.Y=1;var r=n.Da;ee||u(),z||(ee(),z=!0),m.add(r,n),n.A=0}}function ri(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=vt(v(n.Da,n),js(n,n.A)),n.A++,!0)}i.Da=function(){if(this.v=null,Fs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=vt(v(this.Wa,this),n)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,X(10),cn(this),Fs(this))};function oi(n){n.B!=null&&(h.clearTimeout(n.B),n.B=null)}function Fs(n){n.g=new Re(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var r=ce(n.na);F(r,"RID","rpc"),F(r,"SID",n.M),F(r,"AID",n.K),F(r,"CI",n.F?"0":"1"),!n.F&&n.ia&&F(r,"TO",n.ia),F(r,"TYPE","xmlhttp"),Lt(n,r),n.u&&n.o&&ii(r,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=rn(ce(r)),a.u=null,a.R=!0,ds(a,n)}i.Va=function(){this.C!=null&&(this.C=null,cn(this),ri(this),X(19))};function ln(n){n.C!=null&&(h.clearTimeout(n.C),n.C=null)}function Vs(n,r){var a=null;if(n.g==r){ln(n),oi(n),n.g=null;var l=2}else if(Zn(n.h,r))a=r.G,ys(n.h,r),l=1;else return;if(n.I!=0){if(r.o)if(l==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var I=n.D;l=zn(),J(l,new cs(l,a)),hn(n)}else xs(n);else if(I=r.m,I==3||I==0&&r.X>0||!(l==1&&ka(n,r)||l==2&&ri(n)))switch(a&&a.length>0&&(r=n.h,r.i=r.i.concat(a)),I){case 1:ze(n,5);break;case 4:ze(n,10);break;case 3:ze(n,6);break;default:ze(n,2)}}}function js(n,r){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*r}function ze(n,r){if(n.j.info("Error code "+r),r==2){var a=v(n.bb,n),l=n.Ua;const I=!l;l=new Ce(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||bt(l,"https"),rn(l),I?Ta(l.toString(),a):Aa(l.toString(),a)}else X(2);n.I=0,n.l&&n.l.pa(r),Bs(n),Ls(n)}i.bb=function(n){n?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function Bs(n){if(n.I=0,n.ja=[],n.l){const r=Is(n.h);(r.length!=0||n.i.length!=0)&&(D(n.ja,r),D(n.ja,n.i),n.h.i.length=0,M(n.i),n.i.length=0),n.l.oa()}}function Hs(n,r,a){var l=a instanceof Ce?ce(a):new Ce(a);if(l.g!="")r&&(l.g=r+"."+l.g),Rt(l,l.u);else{var I=h.location;l=I.protocol,r=r?r+"."+I.hostname:I.hostname,I=+I.port;const E=new Ce(null);l&&bt(E,l),r&&(E.g=r),I&&Rt(E,I),a&&(E.h=a),l=E}return a=n.G,r=n.wa,a&&r&&F(l,a,r),F(l,"VER",n.ka),Lt(n,l),l}function $s(n,r,a){if(r&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=n.Aa&&!n.ma?new V(new ni({ab:a})):new V(n.ma),r.Fa(n.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ws(){}i=Ws.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function ne(n,r){q.call(this),this.g=new Ds(r),this.l=n,this.h=r&&r.messageUrlParams||null,n=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(n?n["X-WebChannel-Content-Type"]=r.messageContentType:n={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(n?n["X-WebChannel-Client-Profile"]=r.sa:n={"X-WebChannel-Client-Profile":r.sa}),this.g.U=n,(n=r&&r.Qb)&&!d(n)&&(this.g.u=n),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,n=this.h,n!==null&&r in n&&(n=this.h,r in n&&delete n[r])),this.j=new ht(this)}b(ne,q),ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){si(this.g)},ne.prototype.o=function(n){var r=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=$n(n),n=a);r.i.push(new ga(r.Ya++,n)),r.I==3&&hn(r)},ne.prototype.N=function(){this.g.l=null,delete this.j,si(this.g),delete this.g,ne.Z.N.call(this)};function Gs(n){Wn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var r=n.__sm__;if(r){e:{for(const a in r){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,r=r!==null&&n in r?r[n]:void 0),this.data=r}else this.data=n}b(Gs,Wn);function zs(){Gn.call(this),this.status=1}b(zs,Gn);function ht(n){this.g=n}b(ht,Ws),ht.prototype.ra=function(){J(this.g,"a")},ht.prototype.qa=function(n){J(this.g,new Gs(n))},ht.prototype.pa=function(n){J(this.g,new zs)},ht.prototype.oa=function(){J(this.g,"b")},ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,ua.COMPLETE="complete",oa.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",q.prototype.listen=q.prototype.J,V.prototype.listenOnce=V.prototype.K,V.prototype.getLastError=V.prototype.Ha,V.prototype.getLastErrorCode=V.prototype.ya,V.prototype.getStatus=V.prototype.ca,V.prototype.getResponseJson=V.prototype.La,V.prototype.getResponseText=V.prototype.la,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Fa}).apply(typeof fn<"u"?fn:typeof self<"u"?self:typeof window<"u"?window:{});const Ar="@firebase/firestore",Sr="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Oi("@firebase/firestore");function re(i,...e){if(mt.logLevel<=L.DEBUG){const t=e.map($i);mt.debug(`Firestore (${Yt}): ${i}`,...t)}}function Vo(i,...e){if(mt.logLevel<=L.ERROR){const t=e.map($i);mt.error(`Firestore (${Yt}): ${i}`,...t)}}function Tu(i,...e){if(mt.logLevel<=L.WARN){const t=e.map($i);mt.warn(`Firestore (${Yt}): ${i}`,...t)}}function $i(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,jo(i,s,t)}function jo(i,e,t){let s=`FIRESTORE (${Yt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vo(s),new Error(s)}function Vt(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||jo(e,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class N extends _e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Au{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Y.UNAUTHENTICATED))}shutdown(){}}class Su{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bu{constructor(e){this.t=e,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Vt(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let c=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new jt,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},g=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>g(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new jt)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Vt(typeof s.accessToken=="string",31837,{l:s}),new Bo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Vt(e===null||typeof e=="string",2055,{h:e}),new Y(e)}}class Ru{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cu{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Ru(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class br{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ku{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Vt(this.o===void 0,3512);const s=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new br(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Vt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new br(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Pu(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<t&&(s+=e.charAt(o[c]%62))}return s}}function Be(i,e){return i<e?-1:i>e?1:0}function Nu(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),c=e.charAt(s);if(o!==c)return gi(o)===gi(c)?Be(o,c):gi(o)?1:-1}return Be(i.length,e.length)}const Du=55296,Lu=57343;function gi(i){const e=i.charCodeAt(0);return e>=Du&&e<=Lu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="__name__";class le{constructor(e,t,s){t===void 0?t=0:t>e.length&&Wt(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Wt(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof le?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const c=le.compareSegments(e.get(o),t.get(o));if(c!==0)return c}return Be(e.length,t.length)}static compareSegments(e,t){const s=le.isNumericId(e),o=le.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?le.extractNumericId(e).compare(le.extractNumericId(t)):Nu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hi.fromString(e.substring(4,e.length-2))}}class ie extends le{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const Mu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends le{construct(e,t,s){return new Je(e,t,s)}static isValidIdentifier(e){return Mu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rr}static keyField(){return new Je([Rr])}static fromServerFormat(e){const t=[];let s="",o=0;const c=()=>{if(s.length===0)throw new N(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const g=e[o];if(g==="\\"){if(o+1===e.length)throw new N(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new N(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else g==="`"?(h=!h,o++):g!=="."||h?(s+=g,o++):(c(),o++)}if(c(),h)throw new N(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(t)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.path=e}static fromPath(e){return new Xe(ie.fromString(e))}static fromName(e){return new Xe(ie.fromString(e).popFirst(5))}static empty(){return new Xe(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Xe(new ie(e.slice()))}}function Uu(i,e,t,s){if(e===!0&&s===!0)throw new N(O.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xu(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Fu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Wt(12329,{type:typeof i})}function Vu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new N(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fu(i);throw new N(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(i,e){const t={typeString:i};return e&&(t.value=e),t}function Qt(i,e){if(!xu(i))throw new N(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new N(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=-62135596800,kr=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kr);return new ue(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cr)throw new N(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kr}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qt(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:B("string",ue._jsonSchemaVersion),seconds:B("number"),nanoseconds:B("number")};function ju(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Bu("Invalid base64 string: "+c):c}}(e);return new it(t)}static fromUint8Array(e){const t=function(o){let c="";for(let h=0;h<o.length;++h)c+=String.fromCharCode(o[h]);return c}(e);return new it(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const Ri="(default)";class kn{constructor(e,t){this.projectId=e,this.database=t||Ri}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database===Ri}isEqual(e){return e instanceof kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t=null,s=[],o=[],c=null,h="F",g=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=h,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function $u(i){return new Hu(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr,P;(P=Pr||(Pr={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Hi([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=1048576;function mi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,s,o,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,c){const h=Date.now()+s,g=new Wi(e,t,h,o,c);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Or,Nr;(Nr=Or||(Or={})).Ma="default",Nr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="firestore.googleapis.com",Lr=!0;class Mr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ho,this.ssl=Lr}else this.host=e.host,this.ssl=e.ssl??Lr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gu)throw new N(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qu(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $o{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Au;switch(s.type){case"firstParty":return new Cu(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new N(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Dr.get(t);s&&(re("ComponentProvider","Removing Datastore"),Dr.delete(t),s.terminate())}(this),Promise.resolve()}}function Ku(i,e,t,s={}){i=Vu(i,$o);const o=_t(e),c=i._getSettings(),h={...c,emulatorOptions:i._getEmulatorOptions()},g=`${e}:${t}`;o&&(ki(`https://${g}`),Pi("Firestore",!0)),c.host!==Ho&&c.host!==g&&Tu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:g,ssl:o,emulatorOptions:s};if(!Ze(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,S;if(typeof s.mockUserToken=="string")v=s.mockUserToken,S=Y.MOCK_USER;else{v=Qr(s.mockUserToken,i._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new N(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Y(b)}i._authCredentials=new Su(new Bo(v,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gi(this.firestore,e,this._query)}}class de{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qt(t,de._jsonSchema))return new de(e,s||null,new Xe(ie.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:B("string",de._jsonSchemaVersion),referencePath:B("string")};class zi extends Gi{constructor(e,t,s){super(e,t,$u(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new Xe(e))}withConverter(e){return new zi(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="AsyncQueue";class xr{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zu(this,"async_queue_retry"),this._c=()=>{const s=mi();s&&re(Ur,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new jt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ju(e))throw e;re(Ur,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Vo("INTERNAL UNHANDLED ERROR: ",Fr(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Wi.createAndSchedule(this,e,t,s,c=>this.hc(c));return this.tc.push(o),o}uc(){this.nc&&Wt(47125,{Pc:Fr(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Fr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Ju extends $o{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new xr,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xr(e),this._firestoreClient=void 0,await e}}}function Xu(i,e){const t=typeof i=="object"?i:Di(),s=typeof i=="string"?i:Ri,o=Nn(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=Jr("firestore");c&&Ku(o,...c)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ie(it.fromBase64String(e))}catch(t){throw new N(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ie(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ie._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qt(e,Ie._jsonSchema))return Ie.fromBase64String(e.bytes)}}Ie._jsonSchemaVersion="firestore/bytes/1.0",Ie._jsonSchema={type:B("string",Ie._jsonSchemaVersion),bytes:B("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(Qt(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:B("string",Ye._jsonSchemaVersion),latitude:B("number"),longitude:B("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qt(e,Qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Qe(e.vectorValues);throw new N(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qe._jsonSchemaVersion="firestore/vectorValue/1.0",Qe._jsonSchema={type:B("string",Qe._jsonSchemaVersion),vectorValues:B("object")};const Yu=new RegExp("[~\\*/\\[\\]]");function Qu(i,e,t){if(e.search(Yu)>=0)throw Vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Wo(...e.split("."))._internalPath}catch{throw Vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Vr(i,e,t,s,o){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new N(O.INVALID_ARGUMENT,c+i+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,s,o,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Zu extends Go{data(){return super.data()}}function zo(i,e){return typeof e=="string"?Qu(i,e):e instanceof Wo?e._internalPath:e._delegate._internalPath}class pn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pt extends Go{constructor(e,t,s,o,c,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(zo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",pt._jsonSchema={type:B("string",pt._jsonSchemaVersion),bundleSource:B("string","DocumentSnapshot"),bundleName:B("string"),bundle:B("string")};class wn extends pt{data(e={}){return super.data(e)}}class Bt{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new pn(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new wn(this._firestore,this._userDataWriter,s.key,s,new pn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(g=>{const y=new wn(o._firestore,o._userDataWriter,g.doc.key,g.doc,new pn(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const y=new wn(o._firestore,o._userDataWriter,g.doc.key,g.doc,new pn(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,S=-1;return g.type!==0&&(v=h.indexOf(g.doc.key),h=h.delete(g.doc.key)),g.type!==1&&(h=h.add(g.doc),S=h.indexOf(g.doc.key)),{type:ed(g.type),doc:y,oldIndex:v,newIndex:S}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ou.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ed(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Wt(61501,{type:i})}}Bt._jsonSchemaVersion="firestore/querySnapshot/1.0",Bt._jsonSchema={type:B("string",Bt._jsonSchemaVersion),bundleSource:B("string","QuerySnapshot"),bundleName:B("string"),bundle:B("string")};(function(e,t=!0){(function(o){Yt=o})(st),et(new je("firestore",(s,{instanceIdentifier:o,options:c})=>{const h=s.getProvider("app").getImmediate(),g=new Ju(new bu(s.getProvider("auth-internal")),new ku(h,s.getProvider("app-check-internal")),function(v,S){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new N(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(v.options.projectId,S)}(h,o),h);return c={useFetchStreams:t,...c},g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),fe(Ar,Sr,e),fe(Ar,Sr,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="firebasestorage.googleapis.com",td="storageBucket",nd=2*60*1e3,id=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends _e{constructor(e,t,s=0){super(_i(e),`Firebase Storage: ${t} (${_i(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _i(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function _i(i){return"storage/"+i}function sd(){const i="An unknown error occurred, please check the error payload for server response.";return new ye(me.UNKNOWN,i)}function rd(){return new ye(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function od(){return new ye(me.CANCELED,"User canceled the upload/download.")}function ad(i){return new ye(me.INVALID_URL,"Invalid URL '"+i+"'.")}function cd(i){return new ye(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function jr(i){return new ye(me.INVALID_ARGUMENT,i)}function Ko(){return new ye(me.APP_DELETED,"The Firebase app was deleted.")}function hd(i){return new ye(me.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=oe.makeFromUrl(e,t)}catch{return new oe(e,"")}if(s.path==="")return s;throw cd(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function c(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const h="(/(.*))?$",g=new RegExp("^gs://"+o+h,"i"),y={bucket:1,path:3};function v(j){j.path_=decodeURIComponent(j.path)}const S="v[A-Za-z0-9_]+",b=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",M=new RegExp(`^https?://${b}/${S}/b/${o}/o${A}`,"i"),D={bucket:1,path:3},U=t===qo?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",W=new RegExp(`^https?://${U}/${o}/${k}`,"i"),H=[{regex:g,indices:y,postModify:c},{regex:M,indices:D,postModify:v},{regex:W,indices:{bucket:1,path:2},postModify:v}];for(let j=0;j<H.length;j++){const ee=H[j],z=ee.regex.exec(e);if(z){const m=z[ee.indices.bucket];let u=z[ee.indices.path];u||(u=""),s=new oe(m,u),ee.postModify(s);break}}if(s==null)throw ad(e);return s}}class ld{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(i,e,t){let s=1,o=null,c=null,h=!1,g=0;function y(){return g===2}let v=!1;function S(...k){v||(v=!0,e.apply(null,k))}function b(k){o=setTimeout(()=>{o=null,i(M,y())},k)}function A(){c&&clearTimeout(c)}function M(k,...W){if(v){A();return}if(k){A(),S.call(null,k,...W);return}if(y()||h){A(),S.call(null,k,...W);return}s<64&&(s*=2);let H;g===1?(g=2,H=0):H=(s+Math.random())*1e3,b(H)}let D=!1;function U(k){D||(D=!0,A(),!v&&(o!==null?(k||(g=2),clearTimeout(o),b(0)):k||(g=1)))}return b(0),c=setTimeout(()=>{h=!0,U(!0)},t),U}function dd(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(i){return i!==void 0}function Br(i,e,t,s){if(s<e)throw jr(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw jr(`Invalid value for '${i}'. Expected ${t} or less.`)}function pd(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Pn;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Pn||(Pn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,c=e.indexOf(i)!==-1;return t||o||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,s,o,c,h,g,y,v,S,b,A=!0,M=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=g,this.errorCallback_=y,this.timeout_=v,this.progressCallback_=S,this.connectionFactory_=b,this.retry=A,this.isUsingEmulator=M,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,U)=>{this.resolve_=D,this.reject_=U,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new gn(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=g=>{const y=g.loaded,v=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,v)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const g=c.getErrorCode()===Pn.NO_ERROR,y=c.getStatus();if(!g||gd(y,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===Pn.ABORT;s(!1,new gn(!1,null,S));return}const v=this.successCodes_.indexOf(y)!==-1;s(!0,new gn(v,c))})},t=(s,o)=>{const c=this.resolve_,h=this.reject_,g=o.connection;if(o.wasSuccessCode)try{const y=this.callback_(g,g.getResponse());fd(y)?c(y):c()}catch(y){h(y)}else if(g!==null){const y=sd();y.serverResponse=g.getErrorText(),this.errorCallback_?h(this.errorCallback_(g,y)):h(y)}else if(o.canceled){const y=this.appDelete_?Ko():od();h(y)}else{const y=rd();h(y)}};this.canceled_?t(!1,new gn(!1,null,!0)):this.backoffId_=ud(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gn{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function _d(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function yd(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Id(i,e){e&&(i["X-Firebase-GMPID"]=e)}function wd(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function Ed(i,e,t,s,o,c,h=!0,g=!1){const y=pd(i.urlParams),v=i.url+y,S=Object.assign({},i.headers);return Id(S,e),_d(S,t),yd(S,c),wd(S,s),new md(v,i.method,S,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,h,g)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function Td(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this._service=e,t instanceof oe?this._location=t:this._location=oe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new On(e,t)}get root(){const e=new oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Td(this._location.path)}get storage(){return this._service}get parent(){const e=vd(this._location.path);if(e===null)return null;const t=new oe(this._location.bucket,e);return new On(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hd(e)}}function Hr(i,e){const t=e?.[td];return t==null?null:oe.makeFromBucketSpec(t,i)}function Ad(i,e,t,s={}){i.host=`${e}:${t}`;const o=_t(e);o&&(ki(`https://${i.host}/b`),Pi("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:c}=s;c&&(i._overrideAuthToken=typeof c=="string"?c:Qr(c,i.app.options.projectId))}class Sd{constructor(e,t,s,o,c,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=qo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nd,this._maxUploadRetryTime=id,this._requests=new Set,o!=null?this._bucket=oe.makeFromBucketSpec(o,this._host):this._bucket=Hr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=oe.makeFromBucketSpec(this._url,e):this._bucket=Hr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Br("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Br("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new On(this,e)}_makeRequest(e,t,s,o,c=!0){if(this._deleted)return new ld(Ko());{const h=Ed(e,this._appId,s,o,t,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const $r="@firebase/storage",Wr="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="storage";function bd(i=Di(),e){i=Se(i);const s=Nn(i,Jo).getImmediate({identifier:e}),o=Jr("storage");return o&&Rd(s,...o),s}function Rd(i,e,t,s={}){Ad(i,e,t,s)}function Cd(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Sd(t,s,o,e,st)}function kd(){et(new je(Jo,Cd,"PUBLIC").setMultipleInstances(!0)),fe($r,Wr,""),fe($r,Wr,"esm2020")}kd();const Pd={apiKey:"AIzaSyBINIxrJKYMryeNEqE34MqoEQpnZGY5U_k",authDomain:"my-react-app-392a2.firebaseapp.com",projectId:"my-react-app-392a2",storageBucket:"my-react-app-392a2.firebasestorage.app",messagingSenderId:"807599911562",appId:"1:807599911562:web:ff9287927136c8db423373"},qi=to(Pd),Ld=Iu(qi);Xu(qi);bd(qi);export{Ld as a,Od as c,Nd as s,Dd as u};
