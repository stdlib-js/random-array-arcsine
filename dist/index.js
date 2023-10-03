"use strict";var y=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var b=y(function(ue,H){H.exports={dtype:"float64"}});var O=y(function(se,G){
var J=require('@stdlib/array-typed-real-float-dtypes/dist'),K=require('@stdlib/assert-is-plain-object/dist'),M=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist'),w=J();w.push("generic");function Q(t,r){return K(r)?M(r,"dtype")&&(t.dtype=r.dtype,w.indexOf(t.dtype)<0)?new TypeError(N('1dv4S',"dtype",w.join('", "'),t.dtype)):null:new TypeError(N('1dv2V',r));}G.exports=Q
});var R=y(function(oe,F){
var S=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,c=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),x=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),U=require('@stdlib/utils-constant-function/dist'),X=require('@stdlib/utils-noop/dist'),p=require('@stdlib/random-base-arcsine/dist'),E=require('@stdlib/array-typed-real-float-ctors/dist'),T=require('@stdlib/array-base-filled-by/dist'),Z=require('@stdlib/strided-base-nullary/dist'),_=require('@stdlib/strided-base-binary/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),$=b(),h=O();function ee(){var t,r,v,e,a,s;if(v={dtype:$.dtype},r=arguments.length,r===0)a=p,e=P;else if(r===1){if(t=arguments[0],a=p.factory(t),s=h(v,t),s)throw s;e=P}else if(r===2)a=p.factory(arguments[0],arguments[1]),e=L;else if(r===3){if(t=arguments[2],a=p.factory(arguments[0],arguments[1],t),s=h(v,t),s)throw s;e=L}return t&&t.prng?(c(e,"seed",null),c(e,"seedLength",null),x(e,"state",U(null),X),c(e,"stateLength",null),c(e,"byteLength",null)):(l(e,"seed",B),l(e,"seedLength",D),x(e,"state",Y,k),l(e,"stateLength",I),l(e,"byteLength",W)),c(e,"PRNG",a.PRNG),e;function L(n,d){var g,f,o,i,u;if(!S(n))throw new TypeError(j('1dv2d',n));if(u={},arguments.length>1&&(o=h(u,d),o))throw o;return i=u.dtype||v.dtype,i==="generic"?T(n,a):(g=E(i),f=new g(n),Z([f],[n],[1],a),f)}function P(n,d,g,f){var o,i,u,m,q;if(!S(n))throw new TypeError(j('1dv2d',n));if(q={},arguments.length>3&&(u=h(q,f),u))throw u;if(m=q.dtype||v.dtype,m==="generic")return T(n,C);return o=E(m),i=new o(n),_([[d],[g],i],[n],[0,0,1],a),i;function C(){return a(d,g)}}function B(){return e.PRNG.seed}function D(){return e.PRNG.seedLength}function I(){return e.PRNG.stateLength}function W(){return e.PRNG.byteLength}function Y(){return e.PRNG.state}function k(n){e.PRNG.state=n}}F.exports=ee
});var A=y(function(ve,V){
var re=R(),te=re();V.exports=te
});var ne=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=A(),ae=R();ne(z,"factory",ae);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map