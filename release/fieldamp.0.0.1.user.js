// ==UserScript==
// @id             iitc-two-vertex-multiple-field@Draplater
// @name           IITC plugin: Multiple Field Calculator
// @category       Keys
// @version        0.0.0.1
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @description    Calaulate multiple field
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @grant          none
// ==/UserScript==

/******/!function(e){/******/
/******/
// The require function
/******/
function t(r){/******/
/******/
// Check if module is in cache
/******/
if(n[r])/******/
return n[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var o=n[r]={/******/
i:r,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
t.m=e,/******/
/******/
// expose the module cache
/******/
t.c=n,/******/
/******/
// define getter function for harmony exports
/******/
t.d=function(e,n,r){/******/
t.o(e,n)||/******/
Object.defineProperty(e,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:r})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
t.n=function(e){/******/
var n=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return t.d(n,"a",n),n},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******/
/******/
// __webpack_public_path__
/******/
t.p="",t(t.s=16)}([/* 0 */
/***/
function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(d===setTimeout)
//normal enviroments in sane situations
return setTimeout(e,0);
// if setTimeout wasn't available but was latter defined
if((d===r||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return d(e,0)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return d.call(null,e,0)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return d.call(this,e,0)}}}function i(e){if(f===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(e);
// if clearTimeout wasn't available but was latter defined
if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return f(e)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return f.call(null,e)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return f.call(this,e)}}}function l(){g&&h&&(g=!1,h.length?m=h.concat(m):v=-1,m.length&&u())}function u(){if(!g){var e=a(l);g=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,g=!1,i(e)}}
// v8 likes predictible objects
function s(e,t){this.fun=e,this.array=t}function c(){}
// shim for using process in browser
var d,f,p=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:r}catch(e){d=r}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var h,m=[],g=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new s(e,t)),1!==m.length||g||a(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",// empty string to avoid regexp issues
p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},/* 1 */
/***/
function(e,t,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function r(e){return function(){return e}}/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},/* 2 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){"production"===t.env.NODE_ENV?e.exports=n(18):e.exports=n(19)}).call(t,n(0))},/* 3 */
/***/
function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;
// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");if(// eslint-disable-line no-new-wrappers
e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e,t){for(var n,l,u=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)a.call(n,c)&&(u[c]=n[c]);if(o){l=o(n);for(var d=0;d<l.length;d++)i.call(n,l[d])&&(u[l[d]]=n[l[d]])}}return u}},/* 4 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var n={};"production"!==t.env.NODE_ENV&&Object.freeze(n),e.exports=n}).call(t,n(0))},/* 5 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function n(e,t,n,o,a,i,l,u){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,a,i,l,u],d=0;s=new Error(t.replace(/%s/g,function(){return c[d++]})),s.name="Invariant Violation"}// we don't care about invariant's own frame
throw s.framesToPop=1,s}}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},/* 6 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r=n(1),o=r;if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];a.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},/* 7 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function r(e,n,r,s,c){if("production"!==t.env.NODE_ENV)for(var d in e)if(e.hasOwnProperty(d)){var f;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
a("function"==typeof e[d],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",s||"React class",r,d,o(e[d])),f=e[d](n,d,s,r,null,l)}catch(e){f=e}if(i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",r,d,void 0===f?"undefined":o(f)),f instanceof Error&&!(f.message in u)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
u[f.message]=!0;var p=c?c():"";i(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("production"!==t.env.NODE_ENV)var a=n(5),i=n(6),l=n(20),u={};e.exports=r}).call(t,n(0))},/* 8 */
/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=/** @class */function(){function e(e,t){this.x=e,this.y=t}return e.prototype.negative=function(){return new e(-this.x,-this.y)},e.cross=function(e,t){/* cross product */
return e.x*t.y-t.x*e.y},e}();t.Vector2D=o;var a=/** @class */function(){function e(e,t,n){this.lat=t,this.lng=n,this.name=e}return e.prototype.subtract=function(e){return new o(this.lat-e.lat,this.lng-e.lng)},e.theSameSide=function(e,t,n,r){var o=function(n,r){return(r-e.lng)*(t.lat-e.lat)-(n-e.lat)*(t.lng-e.lng)};return o(n.lat,n.lng)*o(r.lat,r.lng)>0},e.calcDistance=function(e,t){return Math.sqrt(Math.pow(e.lat-t.lat,2)+Math.pow(e.lng-t.lng,2))},e.calcRealDistance=function(e,t){var n=[e.lng,e.lat,t.lng,t.lat].map(function(e){return e*Math.PI/180}),r=n[0],o=n[1],a=n[2],i=n[3],l=a-r,u=i-o,s=Math.pow(Math.sin(u/2),2)+Math.cos(o)*Math.cos(i)*Math.pow(Math.sin(l/2),2);return 2*Math.asin(Math.sqrt(s))*6367},e.calcCosine=function(t,n,r){return((t.lat-n.lat)*(r.lat-n.lat)+(t.lng-n.lng)*(r.lng-n.lng))/e.calcDistance(n,t)/e.calcDistance(n,r)},e.checkCross=function(e,t,n,r){var a=n.subtract(e),i=r.subtract(e),l=n.subtract(t),u=r.subtract(t),s=a.negative(),c=l.negative(),d=i.negative(),f=u.negative();return o.cross(a,i)*o.cross(l,u)<0&&o.cross(s,c)*o.cross(d,f)<0},e.isInsideTriangle=function(e,t,n,r){var a=e.subtract(r),i=t.subtract(r),l=n.subtract(r),u=o.cross(a,i),s=o.cross(i,l),c=o.cross(l,a);return u>0&&s>0&&c>0||u<0&&s<0&&c<0},e}();t.Point=a;var i=/** @class */function(){function e(e){var t=this;this.byName=new Map,this.reverseLookup=new r.MyMap,e.forEach(function(e){t.byName.set(e.name,e),t.reverseLookup.set([e.lat,e.lng],e)})}return e.from_string=function(t){return new e(t.split("\n").map(function(e){var t=r.rsplit(e,",",2),n=t[0],o=t[1],i=t[2];return new a(n.slice(1,-1),parseFloat(o),parseFloat(i))}))},e.prototype.get_by_name=function(e){return this.byName.get(e)},e.prototype.get_name_by_loc=function(e,t){return this.reverseLookup.get([e,t])},e.prototype.get_name_by_point=function(e){return this.reverseLookup.get([e.lat,e.lng])},e.prototype.getAll=function(){return Array.from(this.byName.values())},e}();t.PointList=i;var l=/** @class */function(){function e(e){this.list=e}return e.from_string=function(t,n){return new e(t.split("\n").map(function(e){var t=e.trim().split(","),r=t[0],o=t[1],i=t[2],l=t[3];return"E"!==t[4]?null:[n.get_name_by_loc(parseFloat(r),parseFloat(o))||new a("Unknown",parseFloat(r),parseFloat(o)),n.get_name_by_loc(parseFloat(i),parseFloat(l))||new a("Unknown",parseFloat(i),parseFloat(l))]}).filter(function(e){return null!==e}))},e.prototype.checkCrossInList=function(e,t){for(var n=0,r=this.list;n<r.length;n++){var o=r[n],i=o[0],l=o[1];if(a.checkCross(e,t,i,l))return!0}return!1},e}();t.LinkList=l},/* 9 */
/***/
function(e,t,n){"use strict";function r(e,t,n){var r=e.split(t);return n?[r.slice(0,-n).join(t)].concat(r.slice(-n)):r}Object.defineProperty(t,"__esModule",{value:!0}),t.rsplit=r;var o=/** @class */function(){function e(e){this.map=new Map,this.serializeFunc=e||JSON.stringify}return e.prototype.set=function(e,t){return this.map.set(this.serializeFunc(e),t),this},e.prototype.get=function(e){return this.map.get(this.serializeFunc(e))},e.prototype.clear=function(){this.map.clear()},e.prototype.delete=function(e){return this.map.delete(this.serializeFunc(e))},e.prototype.has=function(e){return this.map.has(this.serializeFunc(e))},Object.defineProperty(e.prototype,"size",{get:function(){return this.map.size},enumerable:!0,configurable:!0}),e.prototype.values=function(){return this.map.values()},e}();t.MyMap=o},/* 10 */
/***/
function(e,t,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},/* 11 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var r=n(1),o={/**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},/**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
capture:function(e,n,o){return e.addEventListener?(e.addEventListener(n,o,!0),{remove:function(){e.removeEventListener(n,o,!0)}}):("production"!==t.env.NODE_ENV&&console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:r})},registerDefault:function(){}};e.exports=o}).call(t,n(0))},/* 12 */
/***/
function(e,t,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
/* eslint-disable fb-www/typeof-undefined */
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function r(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}e.exports=r},/* 13 */
/***/
function(e,t,n){"use strict";/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function r(e,t){
// SameValue algorithm
// SameValue algorithm
return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function o(e,t){if(r(e,t))return!0;if("object"!==(void 0===e?"undefined":a(e))||null===e||"object"!==(void 0===t?"undefined":a(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;
// Test for A's keys different from B.
for(var l=0;l<n.length;l++)if(!i.call(t,n[l])||!r(e[n[l]],t[n[l]]))return!1;return!0}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */
/*eslint-disable no-self-compare */
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.prototype.hasOwnProperty;e.exports=o},/* 14 */
/***/
function(e,t,n){"use strict";/*eslint-disable no-bitwise */
/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function r(e,t){return!(!e||!t)&&(e===t||!o(e)&&(o(t)?r(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var o=n(29);e.exports=r},/* 15 */
/***/
function(e,t,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * @param {DOMElement} node input/textarea to focus
 */
function r(e){
// IE8 can throw "Can't move focus to the control because it is invisible,
// not enabled, or of a type that does not accept the focus." for all kinds of
// reasons that are too expensive and fragile to test.
try{e.focus()}catch(e){}}e.exports=r},/* 16 */
/***/
function(e,t,n){"use strict";function r(){"function"!=typeof window.plugin&&(window.plugin=function(){}),window.plugin.multipleFieldCalculator={},window.plugin.multipleFieldCalculator.showDialog=function(){var e=window.dialog({title:"Multiple Field Calculator",html:'<div id="multiple-calculator-dialog"></div>'}).parent();$(".ui-dialog-buttonpane",e).remove(),
// width first, then centre
e.css("width",300).css({top:($(window).height()-e.height())/2,left:($(window).width()-e.width())/2}),l.render(i.createElement(a.Dialog),document.getElementById("multiple-calculator-dialog"))}}function o(){r();
// add controls to toolbox
var e=$('<a onclick="window.plugin.multipleFieldCalculator.showDialog();" title="Calculate multiple field.">Calculate Multiple Field</a>');$("#toolbox").append(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),i=n(2),l=n(27);
// IITC plugin setup
window.iitcLoaded?o():window.bootPlugins?window.bootPlugins.push(o):window.bootPlugins=[o]},/* 17 */
/***/
function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(2),i=n(21),l=n(24),u=n(25);!function(e){e.all=function(e){return!0},e.teamOnly=function(e){return e===window.PLAYER.team[0]},e.no=function(e){return!1}}(o=t.LinkFilter||(t.LinkFilter={}));var s=/** @class */function(e){function t(n){var r=e.call(this,n)||this;return r.state=t.savedState,r}return r(t,e),t.prototype.calculate=function(){var e=this,t=Array.from(this.state.points[0]),n=Array.from(this.state.points[1]),r=l.getPointsAndLinks(this.state.linkFilter),o=r[0],a=r[1];r[2];this.setState({results:[]});var s=new u;s.onmessage=function(t){var n=t.data;n.forEach(function(e){Object.setPrototypeOf(e,i.DPStatus.prototype),e.correctProtoType()}),e.setState({results:n.concat(e.state.results)})},s.postMessage([o.getAll(),t,n,a])},t.prototype.drawItem=function(e){var t=Array.from(this.state.points[0]),n=Array.from(this.state.points[1]);window.plugin.drawTools.drawnItems.clearLayers(),window.plugin.drawTools.import(e.getDrawToolsPath(t,n)),this.setState({selectedResult:e})},t.prototype.render=function(){var e=this;return Object.assign(t.savedState,this.state),a.createElement("div",null,this.state.points.map(function(t,n){return a.createElement("p",null,a.createElement("button",{onClick:function(){var n=l.getPointsAndLinks(),r=(n[0],n[1],n[2]);t.add(r.get(window.selectedPortal)),e.setState({})}}," Set"),"Point ",n+1,": ",Array.from(t).map(function(n){return a.createElement("a",{onClick:function(){t.forEach(function(r){r.name==n.name&&(t.delete(r),e.setState({}))})}}," ",n.name," ")}),a.createElement("button",{onClick:function(){t.clear(),e.setState({})}},"Clear"))}),a.createElement("button",{onClick:this.calculate.bind(this)}," Calculate"),a.createElement("form",null,a.createElement("input",{type:"radio",name:"linkfilter",checked:this.state.linkFilter==o.all,onClick:function(){e.setState({linkFilter:o.all})}})," Consider All Links",a.createElement("input",{type:"radio",name:"linkfilter",checked:this.state.linkFilter==o.teamOnly,onClick:function(){e.setState({linkFilter:o.teamOnly})}})," Consider team Links",a.createElement("input",{type:"radio",name:"linkfilter",checked:this.state.linkFilter==o.no,onClick:function(){e.setState({linkFilter:o.no})}})," Consider No Links"),0!=this.state.results.length&&a.createElement("div",null,a.createElement("textarea",{value:this.state.selectedResult?this.state.selectedResult.getFullPath():"Select one plan to show route",readOnly:!0,style:{width:"100%",height:"75px"}}),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null," Layers"),a.createElement("th",{onClick:function(){e.state.results.sort(function(e,t){return e.distance/e.layerCount-t.distance/t.layerCount}),e.setState({results:e.state.results})}}," Avg. Dist."),a.createElement("th",null," Dest."))),a.createElement("tbody",null,this.state.results.map(function(t){return a.createElement("tr",{key:t.currentPoint.name+"##"+t.layerCount},a.createElement("td",null,t.layerCount),a.createElement("td",null,(t.distance/t.layerCount).toFixed(2)),a.createElement("td",null,a.createElement("a",{onClick:function(){e.drawItem(t)}}," ",t.currentPoint.name," ")))})))))},t}(a.Component);t.Dialog=s,function(e){e.savedState={points:[new Set,new Set],results:[],selectedResult:null,linkFilter:o.teamOnly}}(s=t.Dialog||(t.Dialog={})),t.Dialog=s},/* 18 */
/***/
function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||C}function a(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||C}function i(){}function l(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||C}function u(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:P,type:e,key:a,ref:i,props:o,_owner:E.current}}function s(e){return"object"===(void 0===e?"undefined":y(e))&&null!==e&&e.$$typeof===P}function c(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function d(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function f(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function p(e,t,n,o){var a=void 0===e?"undefined":y(e);if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===N||"object"===a&&e.$$typeof===I)return n(o,e,""===t?"."+h(e,0):t),1;var i=0;if(t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){a=e[l];var u=t+h(a,l);i+=p(a,u,n,o)}else if("function"==typeof(u=O&&e[O]||e["@@iterator"]))for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=t+h(a,l++),i+=p(a,u,n,o);else"object"===a&&(n=""+e,r("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function h(e,t){return"object"===(void 0===e?"undefined":y(e))&&null!==e&&null!=e.key?c(e.key):t.toString(36)}function m(e,t){e.func.call(e.context,t,e.count++)}function g(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?v(e,r,n,k.thatReturnsArgument):null!=e&&(s(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n,e={$$typeof:P,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function v(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),t=d(t,a,r,o),null==e||p(e,"",g,t),f(t)}/** @license React v16.1.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=n(3),w=n(4),k=n(1),C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":y(e))&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var x=a.prototype=new i;x.constructor=a,b(x,o.prototype),x.isPureReactComponent=!0;var T=l.prototype=new i;T.constructor=l,b(T,o.prototype),T.unstable_isAsyncReactComponent=!0,T.render=function(){return this.props.children};var E={current:null},S=Object.prototype.hasOwnProperty,P="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,_={key:!0,ref:!0,__self:!0,__source:!0},O="function"==typeof Symbol&&Symbol.iterator,N="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,I="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,R=/\/+/g,M=[];"function"==typeof Symbol&&Symbol.for&&Symbol.for("react.fragment");var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return v(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=d(null,null,t,n),null==e||p(e,"",m,t),f(t)},count:function(e){return null==e?0:p(e,"",k.thatReturnsNull,null)},toArray:function(e){var t=[];return v(e,t,null,k.thatReturnsArgument),t},only:function(e){return s(e)||r("143"),e}},Component:o,PureComponent:a,unstable_AsyncComponent:l,createElement:u,cloneElement:function(e,t,n){var r=b({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=E.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)S.call(t,u)&&!_.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:P,type:e.type,key:o,ref:a,props:r,_owner:i}},createFactory:function(e){var t=u.bind(null,e);return t.type=e,t},isValidElement:s,version:"16.1.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:E,assign:b}},A=Object.freeze({default:D}),F=A&&D||A;e.exports=F.default?F.default:F},/* 19 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/** @license React v16.1.1
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"production"!==t.env.NODE_ENV&&function(){function t(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;X[o]||(K(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op.\n\nPlease check the code for the %s component.",t,t,r),X[o]=!0)}/**
     * Base class helpers for the updating state of a component.
     */
function o(e,t,n){this.props=e,this.context=t,this.refs=W,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||J}/**
     * Base class helpers for the updating state of a component.
     */
function a(e,t,n){
// Duplicated from Component.
this.props=e,this.context=t,this.refs=W,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||J}function i(){}function l(e,t,n){
// Duplicated from Component.
this.props=e,this.context=t,this.refs=W,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||J}function u(e){if(ie.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function s(e){if(ie.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function c(e,t){var n=function(){re||(re=!0,K(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function d(e,t){var n=function(){oe||(oe=!0,K(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}/**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */
function f(e,t,n){var r,o={},a=null,i=null,l=null,f=null;if(null!=t){u(t)&&(i=t.ref),s(t)&&(a=""+t.key),l=void 0===t.__self?null:t.__self,f=void 0===t.__source?null:t.__source;
// Remaining properties are added to a new props object
for(r in t)ie.call(t,r)&&!ue.hasOwnProperty(r)&&(o[r]=t[r])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var p=arguments.length-2;if(1===p)o.children=n;else if(p>1){for(var h=Array(p),m=0;m<p;m++)h[m]=arguments[m+2];Object.freeze&&Object.freeze(h),o.children=h}
// Resolve default props
if(e&&e.defaultProps){var g=e.defaultProps;for(r in g)void 0===o[r]&&(o[r]=g[r])}if((a||i)&&(void 0===o.$$typeof||o.$$typeof!==le)){var v="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&c(o,v),i&&d(o,v)}return se(e,a,i,l,f,ae.current,o)}/**
     * Return a function that produces ReactElements of a given type.
     * See https://reactjs.org/docs/react-api.html#createfactory
     */
function p(e,t){return se(e.type,t,e.ref,e._self,e._source,e._owner,e.props)}/**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */
function h(e,t,n){var r,o=V({},e.props),a=e.key,i=e.ref,l=e._self,c=e._source,d=e._owner;if(null!=t){u(t)&&(
// Silently steal the ref from the parent.
i=t.ref,d=ae.current),s(t)&&(a=""+t.key);
// Remaining properties override existing props
var f;e.type&&e.type.defaultProps&&(f=e.type.defaultProps);for(r in t)ie.call(t,r)&&!ue.hasOwnProperty(r)&&(void 0===t[r]&&void 0!==f?
// Resolve default props
o[r]=f[r]:o[r]=t[r])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var p=arguments.length-2;if(1===p)o.children=n;else if(p>1){for(var h=Array(p),m=0;m<p;m++)h[m]=arguments[m+2];o.children=h}return se(e.type,a,i,l,c,d,o)}/**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a valid component.
     * @final
     */
function m(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e&&e.$$typeof===le}/**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
function g(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function v(e){return(""+e).replace(ye,"$&/")}function y(e,t,n,r){if(we.length){var o=we.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function b(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,we.length<be&&we.push(e)}/**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */
function w(e,t,n,o){var a=void 0===e?"undefined":r(e);if("undefined"!==a&&"boolean"!==a||(
// All of the above are perceived as null.
e=null),null===e||"string"===a||"number"===a||
// The following is inlined from ReactElement. This means we can optimize
// some checks. React Fiber also inlines this logic for similar purposes.
"object"===a&&e.$$typeof===pe||"object"===a&&e.$$typeof===he)
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
return n(o,e,""===t?me+C(e,0):t),1;var i,l,u=0,s=""===t?me:t+ge;if(Array.isArray(e))for(var c=0;c<e.length;c++)i=e[c],l=s+C(i,c),u+=w(i,l,n,o);else{var d=de&&e[de]||e[fe];if("function"==typeof d){
// Warn about using Maps as children
d===e.entries&&(K(ve,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.%s",ce.getStackAddendum()),ve=!0);for(var f,p=d.call(e),h=0;!(f=p.next()).done;)i=f.value,l=s+C(i,h++),u+=w(i,l,n,o)}else if("object"===a){var m="";m=" If you meant to render a collection of children, use an array instead."+ce.getStackAddendum();var g=""+e;B(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(e).join(", ")+"}":g,m)}}return u}/**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */
function k(e,t,n){return null==e?0:w(e,"",t,n)}/**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */
function C(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return"object"===(void 0===e?"undefined":r(e))&&null!==e&&null!=e.key?g(e.key):t.toString(36)}function x(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}/**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.foreach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
function T(e,t,n){if(null==e)return e;var r=y(null,null,t,n);k(e,x,r),b(r)}function E(e,t,n){var r=e.result,o=e.keyPrefix,a=e.func,i=e.context,l=a.call(i,t,e.count++);Array.isArray(l)?S(l,r,n,q.thatReturnsArgument):null!=l&&(m(l)&&(l=p(l,
// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
o+(!l.key||t&&t.key===l.key?"":v(l.key)+"/")+n)),r.push(l))}function S(e,t,n,r,o){var a="";null!=n&&(a=v(n)+"/");var i=y(t,a,r,o);k(e,E,i),b(i)}/**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.map
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
function P(e,t,n){if(null==e)return e;var r=[];return S(e,r,null,t,n),r}/**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.count
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */
function _(e,t){return k(e,q.thatReturnsNull,null)}/**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.toarray
     */
function O(e){var t=[];return S(e,t,null,q.thatReturnsArgument),t}/**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.only
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */
function N(e){return m(e)||B(!1,"React.Children.only expected to receive a single React element child."),e}function I(e){var t=e.type;return"string"==typeof t?t:"function"==typeof t?t.displayName||t.name:null}// Before Symbol spec.
function R(){if(ae.current){var e=I(ae.current);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function M(e){if(null!==e&&void 0!==e&&void 0!==e.__source){var t=e.__source;return"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}function D(e){var t=R();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}/**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
function A(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=D(t);if(!Oe[n]){Oe[n]=!0;
// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==ae.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+I(e._owner)+"."),Ce=e,K(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',n,r,Te()),Ce=null}}}/**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */
function F(e,t){if("object"===(void 0===e?"undefined":r(e)))if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n];m(o)&&A(o,t)}else if(m(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var a=Pe&&e[Pe]||e[_e];if("function"==typeof a&&a!==e.entries)for(var i,l=a.call(e);!(i=l.next()).done;)m(i.value)&&A(i.value,t)}}/**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */
function L(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name,r=t.propTypes;r&&(Ce=e,$(r,e.props,"prop",n,Te),Ce=null),"function"==typeof t.getDefaultProps&&K(t.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}/**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */
function U(e){Ce=e;var t=!0,n=!1,r=void 0;try{for(var o,a=Object.keys(e.props)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;if(!Se.has(i)){K(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.%s",i,Te());break}}}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}null!==e.ref&&K(!1,"Invalid attribute `ref` supplied to `React.Fragment`.%s",Te()),Ce=null}function j(e,t,n){var o="string"==typeof e||"function"==typeof e||"symbol"===(void 0===e?"undefined":r(e))||"number"==typeof e;
// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!o){var a="";(void 0===e||"object"===(void 0===e?"undefined":r(e))&&null!==e&&0===Object.keys(e).length)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i=M(t);a+=i||R(),a+=Te()||"",K(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:void 0===e?"undefined":r(e),a)}var l=f.apply(this,arguments);
// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==l)return l;
// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(o)for(var u=2;u<arguments.length;u++)F(arguments[u],e);return"symbol"===(void 0===e?"undefined":r(e))&&e===Ee?U(l):L(l),l}function H(e){var t=j.bind(null,e);
// Legacy hook TODO: Warn if this is accessed
return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return G(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t}function z(e,t,n){for(var r=h.apply(this,arguments),o=2;o<arguments.length;o++)F(arguments[o],r.type);return L(r),r}var V=n(3),B=n(5),W=n(4),K=n(6),q=n(1),$=n(7),Q=function(){},Y=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};Q=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];Y.apply(void 0,[t].concat(r))}};var G=Q,X={},J={/**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
isMounted:function(e){return!1},/**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
enqueueForceUpdate:function(e,n,r){t(e,"forceUpdate")},/**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
enqueueReplaceState:function(e,n,r,o){t(e,"replaceState")},/**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
enqueueSetState:function(e,n,r,o){t(e,"setState")}};o.prototype.isReactComponent={},/**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */
o.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":r(e))&&"function"!=typeof e&&null!=e&&B(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e,t,"setState")},/**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */
o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var Z={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(var ee in Z)Z.hasOwnProperty(ee)&&function(e,t){Object.defineProperty(o.prototype,e,{get:function(){G(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})}(ee,Z[ee]);i.prototype=o.prototype;var te=a.prototype=new i;te.constructor=a,
// Avoid an extra prototype jump for these methods.
V(te,o.prototype),te.isPureReactComponent=!0;var ne=l.prototype=new i;ne.constructor=l,
// Avoid an extra prototype jump for these methods.
V(ne,o.prototype),ne.unstable_isAsyncReactComponent=!0,ne.render=function(){return this.props.children};/**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
var re,oe,ae={/**
       * @internal
       * @type {ReactComponent}
       */
current:null},ie=Object.prototype.hasOwnProperty,le="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ue={key:!0,ref:!0,__self:!0,__source:!0},se=function(e,t,n,r,o,a,i){var l={
// This tag allow us to uniquely identify this as a React Element
$$typeof:le,
// Built-in properties that belong on the element
type:e,key:t,ref:n,props:i,
// Record the component responsible for creating this element.
_owner:a};
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
// self and source are DEV only properties.
// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l},ce={};
// Component that is being worked on
ce.getCurrentStack=null,ce.getStackAddendum=function(){var e=ce.getCurrentStack;return e?e():null};var de="function"==typeof Symbol&&Symbol.iterator,fe="@@iterator",pe="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,he="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,me=".",ge=":",ve=!1,ye=/\/+/g,be=10,we=[],ke=function(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")},Ce=null,xe=function(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type===Ee?"React.Fragment":e.type.displayName||e.type.name||"Unknown"},Te=function(){var e="";if(Ce){var t=xe(Ce),n=Ce._owner;e+=ke(t,Ce._source,n&&I(n))}return e+=ce.getStackAddendum()||""},Ee="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.fragment")||60107,Se=new Map([["children",!0],["key",!0]]),Pe="function"==typeof Symbol&&Symbol.iterator,_e="@@iterator",Oe={},Ne=("function"==typeof Symbol&&Symbol.for&&Symbol.for("react.fragment"),{Children:{map:P,forEach:T,count:_,toArray:O,only:N},Component:o,PureComponent:a,unstable_AsyncComponent:l,createElement:j,cloneElement:z,createFactory:H,isValidElement:m,version:"16.1.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:ae,
// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:V}});V(Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,{
// These should not be included in production.
ReactDebugCurrentFrame:ce,
// Shim for React DOM 16.0.0 which still destructured (but not used) this.
// TODO: remove in React 17.0.
ReactComponentTreeHook:{}});var Ie=Object.freeze({default:Ne}),Re=Ie&&Ne||Ie,Me=Re.default?Re.default:Re;e.exports=Me}()}).call(t,n(0))},/* 20 */
/***/
function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},/* 21 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e,r){function o(e,t,n,r){return e.map(function(e){return[e,t[0]]}).concat(t.map(function(t){return[e[0],t]})).every(function(e){var t=e[0],o=e[1];return l.Point.theSameSide(t,o,n,r)&&l.Point.calcCosine(n,t,o)>l.Point.calcCosine(r,t,o)&&l.Point.calcCosine(n,o,t)>l.Point.calcCosine(r,o,t)})}function a(e,t,n,r,a){console.log(e),console.log(r);for(var i=[new u.MyMap(function(e){return JSON.stringify([e.lat,e.lng])})],s=new u.MyMap(function(e){var t=e[0],n=e[1];return JSON.stringify([t.lat,t.lng,n.lat,n.lng])}),d=0,f=e;d<f.length;d++)for(var p=f[d],h=0,m=e;h<m.length;h++){var g=m[h],v=l.Point.calcRealDistance(p,g);s.set([p,g],v),s.set([g,p],v)}for(var y=e.filter(function(e){return!t.some(function(t){return r.checkCrossInList(e,t)})&&!n.some(function(t){return r.checkCrossInList(e,t)})}),b=[],w=0,k=y;w<k.length;w++)for(var C=k[w],x=0,T=y;x<T.length;x++){var E=T[x];!r.checkCrossInList(E,C)&&o(t,n,E,C)&&b.push([E,C])}
// the first field
for(var S=0,P=e;S<P.length;S++){var _=P[S];!function(e){if(t.indexOf(e)>=0||n.indexOf(e)>=0)return"continue";if(!t.some(function(t){return r.checkCrossInList(e,t)})&&!n.some(function(t){return r.checkCrossInList(e,t)})){var o=new c(null,e,Math.min.apply(Math,t.concat(n).map(function(t){return s.get([e,t])})),new Set,new Set,1);i[0].set(e,o)}}(_)}void 0!==a&&a(Array.from(i[0].values()));for(var O=!1,N=1;!O;N+=1){O=!0;var I=new u.MyMap(function(e){return JSON.stringify([e.lat,e.lng])}),R=i.slice(-1)[0];i.push(I);for(var M=0,D=b;M<D.length;M++){var A=D[M],F=A[0],_=A[1];if(!(t.indexOf(F)>=0||n.indexOf(F)>=0||F==_)){var L=R.get(F);if(void 0!==L){var U=I.get(_),v=L.distance+s.get([F,_]);if(void 0===U||v<U.distance){var j=new c(L,_,v,new Set,new Set,L.layerCount+1);I.set(_,j),O=!1}}}}if(void 0!==a){var H=i.slice(-1)[0];a(Array.from(H.values()))}}return[i,N]}function i(e,t,n,r){var o=n.map(function(t){return e.get_by_name(t)}),i=r.map(function(t){return e.get_by_name(t)}),l=a(e.getAll(),o,i,t),u=l[0];l[1];u.forEach(function(e,t){console.log(t+1);for(var n=0,r=Array.from(e.values());n<r.length;n++){var a=r[n];console.log(a.getFullPath()),console.log(JSON.stringify(a.getDrawToolsPath(o,i)))}})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),u=n(9),s=n(23),c=/** @class */function(){function e(e,t,n,r,o,a){this.backPoint=e,this.currentPoint=t,this.distance=n,this.layerCount=a}return e.prototype.correctProtoType=function(){null!==this.backPoint&&(Object.setPrototypeOf(this.backPoint,e.prototype),this.backPoint.correctProtoType()),Object.setPrototypeOf(this.currentPoint,l.Point.prototype)},e.prototype.getStackPath=function(){return null===this.backPoint?[this]:[this].concat(this.backPoint.getStackPath())},e.pointsToPolyLine=function(e,t){return{type:"polyline",latLngs:e.map(function(e){return{lat:e.lat,lng:e.lng}}),color:t||"#a24ac3"}},e.prototype.getDrawToolsPath=function(t,n){var r=this.getStackPath();return[e.pointsToPolyLine(r.map(function(e){return e.currentPoint})),e.pointsToPolyLine([t[0],n[0],this.currentPoint,t[0]])].concat(r.slice(1).map(function(n){return e.pointsToPolyLine([n.currentPoint,t[0]],"#d9d6c3")}),r.slice(1).map(function(t){return e.pointsToPolyLine([t.currentPoint,n[0]],"#d9d6c3")}))},e.prototype.getFullPath=function(){for(var e=this.getStackPath(),t="("+e[0].distance.toFixed(2)+", "+(e[0].distance/e.length).toFixed(2)+")";e.length>0;){var n=e.pop();null!==n.backPoint?t+=n.distance.toFixed(2)+"--\x3e "+n.currentPoint.name:t+=""+n.currentPoint.name}return t},e}();if(t.DPStatus=c,t.calc=a,t.main=i,n.c[n.s]==e){var d=l.PointList.from_string(s.readFileSync(r.argv[2],"utf-8"));i(d,l.LinkList.from_string(s.readFileSync(r.argv[3],"utf-8"),d),[r.argv[4]],[r.argv[5]])}}).call(t,n(22)(e),n(0))},/* 22 */
/***/
function(e,t,n){"use strict";e.exports=function(e){
// module.parent = undefined by default
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},/* 23 */
/***/
function(e,t,n){"use strict"},/* 24 */
/***/
function(e,t,n){"use strict";function r(e){var t=window.map.getBounds(),n=[],r=new Map;for(var a in window.portals){var i=window.portals[a];if(!(i._latlng.lat<t._southWest.lat||i._latlng.lng<t._southWest.lng||i._latlng.lat>t._northEast.lat||i._latlng.lng>t._northEast.lng)){var l=new o.Point(i.options.data.title,i._latlng.lat,i._latlng.lng);n.push(l),r.set(a,l)}}var u=new o.PointList(n),s=[];for(var a in window.links){var i=window.links[a];if(!e||e(i.options.data.team)){
// skip if not currently visible
/*        let visible = false;
                for (const i in p._latlngsinit) {
                    if (p._latlngsinit[i].lat > b._southWest.lat && p._latlngsinit[i].lat < b._northEast.lat &&
                        p._latlngsinit[i].lng > b._southWest.lng && p._latlngsinit[i].lng < b._northEast.lng)
                        visible = true;
                }
                if (!visible)
                    continue;*/
var c=r.get(i.options.data.oGuid);void 0===c&&(c=new o.Point("Unknown",i._latlngsinit[0].lat,i._latlngsinit[0].lng),r.set(i.options.data.oGuid,c));var d=r.get(i.options.data.dGuid);void 0===d&&(d=new o.Point("Unknown",i._latlngsinit[1].lat,i._latlngsinit[1].lng),r.set(i.options.data.dGuid,d)),s.push([c,d])}}return[u,new o.LinkList(s),r]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8);t.getPointsAndLinks=r},/* 25 */
/***/
function(e,t,n){e.exports=function(){return n(26)('// ==UserScript==\n// @id             iitc-two-vertex-multiple-field@Draplater\n// @name           IITC plugin: Multiple Field Calculator\n// @category       Keys\n// @version        0.0.0.1\n// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion\n// @description    Calaulate multiple field\n// @include        https://www.ingress.com/intel*\n// @include        http://www.ingress.com/intel*\n// @match          https://www.ingress.com/intel*\n// @match          http://www.ingress.com/intel*\n// @grant          none\n// ==/UserScript==\n\n/******/!function(t){/******/\n/******/\n// The require function\n/******/\nfunction n(r){/******/\n/******/\n// Check if module is in cache\n/******/\nif(e[r])/******/\nreturn e[r].exports;/******/\n// Create a new module (and put it into the cache)\n/******/\nvar o=e[r]={/******/\ni:r,/******/\nl:!1,/******/\nexports:{}};/******/\n/******/\n// Return the exports of the module\n/******/\n/******/\n/******/\n// Execute the module function\n/******/\n/******/\n/******/\n// Flag the module as loaded\n/******/\nreturn t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}// webpackBootstrap\n/******/\n// The module cache\n/******/\nvar e={};/******/\n/******/\n// Load entry module and return exports\n/******/\n/******/\n/******/\n/******/\n// expose the modules object (__webpack_modules__)\n/******/\nn.m=t,/******/\n/******/\n// expose the module cache\n/******/\nn.c=e,/******/\n/******/\n// define getter function for harmony exports\n/******/\nn.d=function(t,e,r){/******/\nn.o(t,e)||/******/\nObject.defineProperty(t,e,{/******/\nconfigurable:!1,/******/\nenumerable:!0,/******/\nget:r})},/******/\n/******/\n// getDefaultExport function for compatibility with non-harmony modules\n/******/\nn.n=function(t){/******/\nvar e=t&&t.__esModule?/******/\nfunction(){return t.default}:/******/\nfunction(){return t};/******/\n/******/\nreturn n.d(e,"a",e),e},/******/\n/******/\n// Object.prototype.hasOwnProperty.call\n/******/\nn.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},/******/\n/******/\n// __webpack_public_path__\n/******/\nn.p="",n(n.s=2)}([/* 0 */\n/***/\nfunction(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),o=/** @class */function(){function t(t,n){this.x=t,this.y=n}return t.prototype.negative=function(){return new t(-this.x,-this.y)},t.cross=function(t,n){/* cross product */\nreturn t.x*n.y-n.x*t.y},t}();n.Vector2D=o;var i=/** @class */function(){function t(t,n,e){this.lat=n,this.lng=e,this.name=t}return t.prototype.subtract=function(t){return new o(this.lat-t.lat,this.lng-t.lng)},t.theSameSide=function(t,n,e,r){var o=function(e,r){return(r-t.lng)*(n.lat-t.lat)-(e-t.lat)*(n.lng-t.lng)};return o(e.lat,e.lng)*o(r.lat,r.lng)>0},t.calcDistance=function(t,n){return Math.sqrt(Math.pow(t.lat-n.lat,2)+Math.pow(t.lng-n.lng,2))},t.calcRealDistance=function(t,n){var e=[t.lng,t.lat,n.lng,n.lat].map(function(t){return t*Math.PI/180}),r=e[0],o=e[1],i=e[2],c=e[3],a=i-r,u=c-o,s=Math.pow(Math.sin(u/2),2)+Math.cos(o)*Math.cos(c)*Math.pow(Math.sin(a/2),2);return 2*Math.asin(Math.sqrt(s))*6367},t.calcCosine=function(n,e,r){return((n.lat-e.lat)*(r.lat-e.lat)+(n.lng-e.lng)*(r.lng-e.lng))/t.calcDistance(e,n)/t.calcDistance(e,r)},t.checkCross=function(t,n,e,r){var i=e.subtract(t),c=r.subtract(t),a=e.subtract(n),u=r.subtract(n),s=i.negative(),l=a.negative(),f=c.negative(),p=u.negative();return o.cross(i,c)*o.cross(a,u)<0&&o.cross(s,l)*o.cross(f,p)<0},t.isInsideTriangle=function(t,n,e,r){var i=t.subtract(r),c=n.subtract(r),a=e.subtract(r),u=o.cross(i,c),s=o.cross(c,a),l=o.cross(a,i);return u>0&&s>0&&l>0||u<0&&s<0&&l<0},t}();n.Point=i;var c=/** @class */function(){function t(t){var n=this;this.byName=new Map,this.reverseLookup=new r.MyMap,t.forEach(function(t){n.byName.set(t.name,t),n.reverseLookup.set([t.lat,t.lng],t)})}return t.from_string=function(n){return new t(n.split("\\n").map(function(t){var n=r.rsplit(t,",",2),e=n[0],o=n[1],c=n[2];return new i(e.slice(1,-1),parseFloat(o),parseFloat(c))}))},t.prototype.get_by_name=function(t){return this.byName.get(t)},t.prototype.get_name_by_loc=function(t,n){return this.reverseLookup.get([t,n])},t.prototype.get_name_by_point=function(t){return this.reverseLookup.get([t.lat,t.lng])},t.prototype.getAll=function(){return Array.from(this.byName.values())},t}();n.PointList=c;var a=/** @class */function(){function t(t){this.list=t}return t.from_string=function(n,e){return new t(n.split("\\n").map(function(t){var n=t.trim().split(","),r=n[0],o=n[1],c=n[2],a=n[3];return"E"!==n[4]?null:[e.get_name_by_loc(parseFloat(r),parseFloat(o))||new i("Unknown",parseFloat(r),parseFloat(o)),e.get_name_by_loc(parseFloat(c),parseFloat(a))||new i("Unknown",parseFloat(c),parseFloat(a))]}).filter(function(t){return null!==t}))},t.prototype.checkCrossInList=function(t,n){for(var e=0,r=this.list;e<r.length;e++){var o=r[e],c=o[0],a=o[1];if(i.checkCross(t,n,c,a))return!0}return!1},t}();n.LinkList=a},/* 1 */\n/***/\nfunction(t,n,e){"use strict";function r(t,n,e){var r=t.split(n);return e?[r.slice(0,-e).join(n)].concat(r.slice(-e)):r}Object.defineProperty(n,"__esModule",{value:!0}),n.rsplit=r;var o=/** @class */function(){function t(t){this.map=new Map,this.serializeFunc=t||JSON.stringify}return t.prototype.set=function(t,n){return this.map.set(this.serializeFunc(t),n),this},t.prototype.get=function(t){return this.map.get(this.serializeFunc(t))},t.prototype.clear=function(){this.map.clear()},t.prototype.delete=function(t){return this.map.delete(this.serializeFunc(t))},t.prototype.has=function(t){return this.map.has(this.serializeFunc(t))},Object.defineProperty(t.prototype,"size",{get:function(){return this.map.size},enumerable:!0,configurable:!0}),t.prototype.values=function(){return this.map.values()},t}();n.MyMap=o},/* 2 */\n/***/\nfunction(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(3),o=e(0);self.onmessage=function(t){var n=t.data,e=n[0],i=n[1],c=n[2],a=n[3];e.forEach(function(t){Object.setPrototypeOf(t,o.Point.prototype)}),i.forEach(function(t){Object.setPrototypeOf(t,o.Point.prototype)}),c.forEach(function(t){Object.setPrototypeOf(t,o.Point.prototype)}),Object.setPrototypeOf(a,o.LinkList.prototype),a.list.forEach(function(t){Object.setPrototypeOf(t[0],o.Point.prototype),Object.setPrototypeOf(t[1],o.Point.prototype)}),r.calc(e,i,c,a,function(t){return postMessage(t)}),self.close()}},/* 3 */\n/***/\nfunction(t,n,e){"use strict";/* WEBPACK VAR INJECTION */\n(function(t,r){function o(t,n,e,r){return t.map(function(t){return[t,n[0]]}).concat(n.map(function(n){return[t[0],n]})).every(function(t){var n=t[0],o=t[1];return a.Point.theSameSide(n,o,e,r)&&a.Point.calcCosine(e,n,o)>a.Point.calcCosine(r,n,o)&&a.Point.calcCosine(e,o,n)>a.Point.calcCosine(r,o,n)})}function i(t,n,e,r,i){console.log(t),console.log(r);for(var c=[new u.MyMap(function(t){return JSON.stringify([t.lat,t.lng])})],s=new u.MyMap(function(t){var n=t[0],e=t[1];return JSON.stringify([n.lat,n.lng,e.lat,e.lng])}),f=0,p=t;f<p.length;f++)for(var h=p[f],g=0,y=t;g<y.length;g++){var v=y[g],m=a.Point.calcRealDistance(h,v);s.set([h,v],m),s.set([v,h],m)}for(var d=t.filter(function(t){return!n.some(function(n){return r.checkCrossInList(t,n)})&&!e.some(function(n){return r.checkCrossInList(t,n)})}),P=[],b=0,w=d;b<w.length;b++)for(var O=w[b],k=0,M=d;k<M.length;k++){var _=M[k];!r.checkCrossInList(_,O)&&o(n,e,_,O)&&P.push([_,O])}\n// the first field\nfor(var L=0,T=t;L<T.length;L++){var F=T[L];!function(t){if(n.indexOf(t)>=0||e.indexOf(t)>=0)return"continue";if(!n.some(function(n){return r.checkCrossInList(t,n)})&&!e.some(function(n){return r.checkCrossInList(t,n)})){var o=new l(null,t,Math.min.apply(Math,n.concat(e).map(function(n){return s.get([t,n])})),new Set,new Set,1);c[0].set(t,o)}}(F)}void 0!==i&&i(Array.from(c[0].values()));for(var x=!1,S=1;!x;S+=1){x=!0;var j=new u.MyMap(function(t){return JSON.stringify([t.lat,t.lng])}),C=c.slice(-1)[0];c.push(j);for(var E=0,D=P;E<D.length;E++){var N=D[E],A=N[0],F=N[1];if(!(n.indexOf(A)>=0||e.indexOf(A)>=0||A==F)){var I=C.get(A);if(void 0!==I){var z=j.get(F),m=I.distance+s.get([A,F]);if(void 0===z||m<z.distance){var J=new l(I,F,m,new Set,new Set,I.layerCount+1);j.set(F,J),x=!1}}}}if(void 0!==i){var q=c.slice(-1)[0];i(Array.from(q.values()))}}return[c,S]}function c(t,n,e,r){var o=e.map(function(n){return t.get_by_name(n)}),c=r.map(function(n){return t.get_by_name(n)}),a=i(t.getAll(),o,c,n),u=a[0];a[1];u.forEach(function(t,n){console.log(n+1);for(var e=0,r=Array.from(t.values());e<r.length;e++){var i=r[e];console.log(i.getFullPath()),console.log(JSON.stringify(i.getDrawToolsPath(o,c)))}})}Object.defineProperty(n,"__esModule",{value:!0});var a=e(0),u=e(1),s=e(6),l=/** @class */function(){function t(t,n,e,r,o,i){this.backPoint=t,this.currentPoint=n,this.distance=e,this.layerCount=i}return t.prototype.correctProtoType=function(){null!==this.backPoint&&(Object.setPrototypeOf(this.backPoint,t.prototype),this.backPoint.correctProtoType()),Object.setPrototypeOf(this.currentPoint,a.Point.prototype)},t.prototype.getStackPath=function(){return null===this.backPoint?[this]:[this].concat(this.backPoint.getStackPath())},t.pointsToPolyLine=function(t,n){return{type:"polyline",latLngs:t.map(function(t){return{lat:t.lat,lng:t.lng}}),color:n||"#a24ac3"}},t.prototype.getDrawToolsPath=function(n,e){var r=this.getStackPath();return[t.pointsToPolyLine(r.map(function(t){return t.currentPoint})),t.pointsToPolyLine([n[0],e[0],this.currentPoint,n[0]])].concat(r.slice(1).map(function(e){return t.pointsToPolyLine([e.currentPoint,n[0]],"#d9d6c3")}),r.slice(1).map(function(n){return t.pointsToPolyLine([n.currentPoint,e[0]],"#d9d6c3")}))},t.prototype.getFullPath=function(){for(var t=this.getStackPath(),n="("+t[0].distance.toFixed(2)+", "+(t[0].distance/t.length).toFixed(2)+")";t.length>0;){var e=t.pop();null!==e.backPoint?n+=e.distance.toFixed(2)+"--\\x3e "+e.currentPoint.name:n+=""+e.currentPoint.name}return n},t}();if(n.DPStatus=l,n.calc=i,n.main=c,e.c[e.s]==t){var f=a.PointList.from_string(s.readFileSync(r.argv[2],"utf-8"));c(f,a.LinkList.from_string(s.readFileSync(r.argv[3],"utf-8"),f),[r.argv[4]],[r.argv[5]])}}).call(n,e(4)(t),e(5))},/* 4 */\n/***/\nfunction(t,n,e){"use strict";t.exports=function(t){\n// module.parent = undefined by default\nreturn t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},/* 5 */\n/***/\nfunction(t,n,e){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)\n//normal enviroments in sane situations\nreturn setTimeout(t,0);\n// if setTimeout wasn\'t available but was latter defined\nif((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{\n// when when somebody has screwed with setTimeout but no I.E. maddness\nreturn f(t,0)}catch(n){try{\n// When we are in I.E. but the script has been evaled so I.E. doesn\'t trust the global object when called normally\nreturn f.call(null,t,0)}catch(n){\n// same as above but when it\'s a version of I.E. that must have the global object for \'this\', hopfully our context correct otherwise it will throw a global error\nreturn f.call(this,t,0)}}}function c(t){if(p===clearTimeout)\n//normal enviroments in sane situations\nreturn clearTimeout(t);\n// if clearTimeout wasn\'t available but was latter defined\nif((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{\n// when when somebody has screwed with setTimeout but no I.E. maddness\nreturn p(t)}catch(n){try{\n// When we are in I.E. but the script has been evaled so I.E. doesn\'t  trust the global object when called normally\nreturn p.call(null,t)}catch(n){\n// same as above but when it\'s a version of I.E. that must have the global object for \'this\', hopfully our context correct otherwise it will throw a global error.\n// Some versions of I.E. have different rules for clearTimeout vs setTimeout\nreturn p.call(this,t)}}}function a(){v&&g&&(v=!1,g.length?y=g.concat(y):m=-1,y.length&&u())}function u(){if(!v){var t=i(a);v=!0;for(var n=y.length;n;){for(g=y,y=[];++m<n;)g&&g[m].run();m=-1,n=y.length}g=null,v=!1,c(t)}}\n// v8 likes predictible objects\nfunction s(t,n){this.fun=t,this.array=n}function l(){}\n// shim for using process in browser\nvar f,p,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(t){p=o}}();var g,y=[],v=!1,m=-1;h.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];y.push(new s(t,n)),1!==y.length||v||i(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",// empty string to avoid regexp issues\nh.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.prependListener=l,h.prependOnceListener=l,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},/* 6 */\n/***/\nfunction(t,n,e){"use strict"}]);\n//# sourceMappingURL=worker.js.map',n.p+"worker.js")}},/* 26 */
/***/
function(e,t,n){"use strict";
// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string
var r=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var n;try{
// BlobBuilder = Deprecated, but widely implemented
var o=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;n=new o,n.append(e),n=n.getBlob()}catch(t){
// The proposed API
n=new Blob([e])}return new Worker(r.createObjectURL(n))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}},/* 27 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function r(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){if("production"!==t.env.NODE_ENV)
// This branch is unreachable because this function is only called
// in production, but the condition is true only in development.
// Therefore if the branch is still here, dead code elimination wasn't
// properly applied.
// Don't change the message. React DevTools relies on it. Also make sure
// this message doesn't occur elsewhere in this function, or it will cause
// a false positive.
throw new Error("^_^");try{
// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){
// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}}"production"===t.env.NODE_ENV?(
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
r(),e.exports=n(28)):e.exports=n(31)}).call(t,n(0))},/* 28 */
/***/
function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t){return(e&t)===t}function a(e,t){if(On.hasOwnProperty(e)||2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))return!1;if(null===t)return!0;switch(void 0===t?"undefined":yn(t)){case"boolean":return On.hasOwnProperty(e)?e=!0:(t=i(e))?e=t.hasBooleanValue||t.hasStringBooleanValue||t.hasOverloadedBooleanValue:(e=e.toLowerCase().slice(0,5),e="data-"===e||"aria-"===e),e;case"undefined":case"number":case"string":case"object":return!0;default:return!1}}function i(e){return In.hasOwnProperty(e)?In[e]:null}function l(e){return e[1].toUpperCase()}function u(e,t,n,r,o,a,i,l,u){Wn._hasCaughtError=!1,Wn._caughtError=null;var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){Wn._caughtError=e,Wn._hasCaughtError=!0}}function s(){if(Wn._hasRethrowError){var e=Wn._rethrowError;throw Wn._rethrowError=null,Wn._hasRethrowError=!1,e}}function c(){if(Kn)for(var e in qn){var t=qn[e],n=Kn.indexOf(e);if(-1<n||r("96",e),!$n[n]){t.extractEvents||r("97",e),$n[n]=t,n=t.eventTypes;for(var o in n){var a=void 0,i=n[o],l=t,u=o;Qn.hasOwnProperty(u)&&r("99",u),Qn[u]=i;var s=i.phasedRegistrationNames;if(s){for(a in s)s.hasOwnProperty(a)&&d(s[a],l,u);a=!0}else i.registrationName?(d(i.registrationName,l,u),a=!0):a=!1;a||r("98",o,e)}}}}function d(e,t,n){Yn[e]&&r("100",e),Yn[e]=t,Gn[e]=t.eventTypes[n].dependencies}function f(e){Kn&&r("101"),Kn=Array.prototype.slice.call(e),c()}function p(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var o=e[t];qn.hasOwnProperty(t)&&qn[t]===o||(qn[t]&&r("102",t),qn[t]=o,n=!0)}n&&c()}function h(e,t,n,r){t=e.type||"unknown-event",e.currentTarget=er(r),Wn.invokeGuardedCallbackAndCatchFirstError(t,n,void 0,e),e.currentTarget=null}function m(e,t){return null==t&&r("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function g(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function v(e,t){if(e){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)h(e,t,n[o],r[o]);else n&&h(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function y(e){return v(e,!0)}function b(e){return v(e,!1)}function w(e,t){var n=e.stateNode;if(!n)return null;var o=Jn(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(o=!o.disabled)||(e=e.type,o=!("button"===e||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&r("231",t,void 0===n?"undefined":yn(n)),n)}function k(e,t,n,r){for(var o,a=0;a<$n.length;a++){var i=$n[a];i&&(i=i.extractEvents(e,t,n,r))&&(o=m(o,i))}return o}function C(e){e&&(tr=m(tr,e))}function x(e){var t=tr;tr=null,e?g(t,y):g(t,b),tr&&r("95"),Wn.rethrowCaughtError()}function T(e){if(e[ar])return e[ar];for(var t=[];!e[ar];){if(t.push(e),!e.parentNode)return null;e=e.parentNode}var n=void 0,r=e[ar];if(5===r.tag||6===r.tag)return r;for(;e&&(r=e[ar]);e=t.pop())n=r;return n}function E(e){if(5===e.tag||6===e.tag)return e.stateNode;r("33")}function S(e){return e[ir]||null}function P(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function _(e,t,n){for(var r=[];e;)r.push(e),e=P(e);for(e=r.length;0<e--;)t(r[e],"captured",n);for(e=0;e<r.length;e++)t(r[e],"bubbled",n)}function O(e,t,n){(t=w(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=m(n._dispatchListeners,t),n._dispatchInstances=m(n._dispatchInstances,e))}function N(e){e&&e.dispatchConfig.phasedRegistrationNames&&_(e._targetInst,O,e)}function I(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst;t=t?P(t):null,_(t,O,e)}}function R(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=w(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=m(n._dispatchListeners,t),n._dispatchInstances=m(n._dispatchInstances,e))}function M(e){e&&e.dispatchConfig.registrationName&&R(e._targetInst,null,e)}function D(e){g(e,N)}function A(e,t,n,r){if(n&&r)e:{for(var o=n,a=r,i=0,l=o;l;l=P(l))i++;l=0;for(var u=a;u;u=P(u))l++;for(;0<i-l;)o=P(o),i--;for(;0<l-i;)a=P(a),l--;for(;i--;){if(o===a||o===a.alternate)break e;o=P(o),a=P(a)}o=null}else o=null;for(a=o,o=[];n&&n!==a&&(null===(i=n.alternate)||i!==a);)o.push(n),n=P(n);for(n=[];r&&r!==a&&(null===(i=r.alternate)||i!==a);)n.push(r),r=P(r);for(r=0;r<o.length;r++)R(o[r],"bubbled",e);for(e=n.length;0<e--;)R(n[e],"captured",t)}function F(){return!sr&&wn.canUseDOM&&(sr="textContent"in document.documentElement?"textContent":"innerText"),sr}function L(){if(cr._fallbackText)return cr._fallbackText;var e,t,n=cr._startText,r=n.length,o=U(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return cr._fallbackText=o.slice(e,1<t?1-t:void 0),cr._fallbackText}function U(){return"value"in cr._root?cr._root.value:cr._root[F()]}function j(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):"target"===o?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Cn.thatReturnsTrue:Cn.thatReturnsFalse,this.isPropagationStopped=Cn.thatReturnsFalse,this}function H(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function z(e){e instanceof this||r("223"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function V(e){e.eventPool=[],e.getPooled=H,e.release=z}function B(e,t,n,r){return j.call(this,e,t,n,r)}function W(e,t,n,r){return j.call(this,e,t,n,r)}function K(e,t){switch(e){case"topKeyUp":return-1!==pr.indexOf(t.keyCode);case"topKeyDown":return 229!==t.keyCode;case"topKeyPress":case"topMouseDown":case"topBlur":return!0;default:return!1}}function q(e){return e=e.detail,"object"===(void 0===e?"undefined":yn(e))&&"data"in e?e.data:null}function $(e,t){switch(e){case"topCompositionEnd":return q(t);case"topKeyPress":return 32!==t.which?null:(xr=!0,kr);case"topTextInput":return e=t.data,e===kr&&xr?null:e;default:return null}}function Q(e,t){if(Tr)return"topCompositionEnd"===e||!hr&&K(e,t)?(e=L(),cr._root=null,cr._startText=null,cr._fallbackText=null,Tr=!1,e):null;switch(e){case"topPaste":return null;case"topKeyPress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"topCompositionEnd":return wr?null:t.data;default:return null}}function Y(e){if(e=Zn(e)){Sr&&"function"==typeof Sr.restoreControlledState||r("194");var t=Jn(e.stateNode);Sr.restoreControlledState(e.stateNode,e.type,t)}}function G(e){Pr?_r?_r.push(e):_r=[e]:Pr=e}function X(){if(Pr){var e=Pr,t=_r;if(_r=Pr=null,Y(e),t)for(e=0;e<t.length;e++)Y(t[e])}}function J(e,t){return e(t)}function Z(e,t){if(Ir)return J(e,t);Ir=!0;try{return J(e,t)}finally{Ir=!1,X()}}function ee(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rr[e.type]:"textarea"===t}function te(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ne(e,t){if(!wn.canUseDOM||t&&!("addEventListener"in document))return!1;t="on"+e;var n=t in document;return n||(n=document.createElement("div"),n.setAttribute(t,"return;"),n="function"==typeof n[t]),!n&&yr&&"wheel"===e&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}function re(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function oe(e){var t=re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"function"==typeof n.get&&"function"==typeof n.set)return Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:!0,get:function(){return n.get.call(this)},set:function(e){r=""+e,n.set.call(this,e)}}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}function ae(e){e._valueTracker||(e._valueTracker=oe(e))}function ie(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=re(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function le(e,t,n){return e=j.getPooled(Mr.change,e,t,n),e.type="change",G(n),D(e),e}function ue(e){C(e),x(!1)}function se(e){if(ie(E(e)))return e}function ce(e,t){if("topChange"===e)return t}function de(){Dr&&(Dr.detachEvent("onpropertychange",fe),Ar=Dr=null)}function fe(e){"value"===e.propertyName&&se(Ar)&&(e=le(Ar,e,te(e)),Z(ue,e))}function pe(e,t,n){"topFocus"===e?(de(),Dr=t,Ar=n,Dr.attachEvent("onpropertychange",fe)):"topBlur"===e&&de()}function he(e){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)return se(Ar)}function me(e,t){if("topClick"===e)return se(t)}function ge(e,t){if("topInput"===e||"topChange"===e)return se(t)}function ve(e,t,n,r){return j.call(this,e,t,n,r)}function ye(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Ur[e])&&!!t[e]}function be(){return ye}function we(e,t,n,r){return j.call(this,e,t,n,r)}function ke(e){return e=e.type,"string"==typeof e?e:"function"==typeof e?e.displayName||e.name:null}function Ce(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(t=t.return,0!=(2&t.effectTag))return 1}return 3===t.tag?2:3}function xe(e){return!!(e=e._reactInternalFiber)&&2===Ce(e)}function Te(e){2!==Ce(e)&&r("188")}function Ee(e){var t=e.alternate;if(!t)return t=Ce(e),3===t&&r("188"),1===t?null:e;for(var n=e,o=t;;){var a=n.return,i=a?a.alternate:null;if(!a||!i)break;if(a.child===i.child){for(var l=a.child;l;){if(l===n)return Te(a),e;if(l===o)return Te(a),t;l=l.sibling}r("188")}if(n.return!==o.return)n=a,o=i;else{l=!1;for(var u=a.child;u;){if(u===n){l=!0,n=a,o=i;break}if(u===o){l=!0,o=a,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,o=a;break}if(u===o){l=!0,o=i,n=a;break}u=u.sibling}l||r("189")}}n.alternate!==o&&r("190")}return 3!==n.tag&&r("188"),n.stateNode.current===n?e:t}function Se(e){if(!(e=Ee(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Pe(e){if(!(e=Ee(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child&&4!==t.tag)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function _e(e){var t=e.targetInst;do{if(!t){e.ancestors.push(t);break}var n;for(n=t;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;e.ancestors.push(t),t=T(n)}while(t);for(n=0;n<e.ancestors.length;n++)t=e.ancestors[n],Wr(e.topLevelType,t,e.nativeEvent,te(e.nativeEvent))}function Oe(e){Br=!!e}function Ne(e,t,n){return n?xn.listen(n,t,Re.bind(null,e)):null}function Ie(e,t,n){return n?xn.capture(n,t,Re.bind(null,e)):null}function Re(e,t){if(Br){var n=te(t);if(n=T(n),null===n||"number"!=typeof n.tag||2===Ce(n)||(n=null),Vr.length){var r=Vr.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{Z(_e,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Vr.length&&Vr.push(e)}}}function Me(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function De(e){if($r[e])return $r[e];if(!qr[e])return e;var t,n=qr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Qr)return $r[e]=n[t];return""}function Ae(e){return Object.prototype.hasOwnProperty.call(e,Jr)||(e[Jr]=Xr++,Gr[e[Jr]]={}),Gr[e[Jr]]}function Fe(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Le(e,t){var n=Fe(e);e=0;for(var r;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fe(n)}}function Ue(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)}function je(e,t){if(oo||null==to||to!==Tn())return null;var n=to;return"selectionStart"in n&&Ue(n)?n={start:n.selectionStart,end:n.selectionEnd}:window.getSelection?(n=window.getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}):n=void 0,ro&&En(ro,n)?null:(ro=n,e=j.getPooled(eo.select,no,e,t),e.type="select",e.target=to,D(e),e)}function He(e,t,n,r){return j.call(this,e,t,n,r)}function ze(e,t,n,r){return j.call(this,e,t,n,r)}function Ve(e,t,n,r){return j.call(this,e,t,n,r)}function Be(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,32<=e||13===e?e:0}function We(e,t,n,r){return j.call(this,e,t,n,r)}function Ke(e,t,n,r){return j.call(this,e,t,n,r)}function qe(e,t,n,r){return j.call(this,e,t,n,r)}function $e(e,t,n,r){return j.call(this,e,t,n,r)}function Qe(e,t,n,r){return j.call(this,e,t,n,r)}function Ye(e){0>po||(e.current=fo[po],fo[po]=null,po--)}function Ge(e,t){po++,fo[po]=e.current,e.current=t}function Xe(e){return Ze(e)?wo:yo.current}function Je(e,t){var n=e.type.contextTypes;if(!n)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return 2===e.tag&&null!=e.type.childContextTypes}function et(e){Ze(e)&&(Ye(bo,e),Ye(yo,e))}function tt(e,t,n){null!=yo.cursor&&r("168"),Ge(yo,t,e),Ge(bo,n,e)}function nt(e,t){var n=e.stateNode,o=e.type.childContextTypes;if("function"!=typeof n.getChildContext)return t;n=n.getChildContext();for(var a in n)a in o||r("108",ke(e)||"Unknown",a);return kn({},t,n)}function rt(e){if(!Ze(e))return!1;var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||_n,wo=yo.current,Ge(yo,t,e),Ge(bo,bo.current,e),!0}function ot(e,t){var n=e.stateNode;if(n||r("169"),t){var o=nt(e,wo);n.__reactInternalMemoizedMergedChildContext=o,Ye(bo,e),Ye(yo,e),Ge(yo,o,e)}else Ye(bo,e);Ge(bo,t,e)}function at(e,t,n){this.tag=e,this.key=t,this.stateNode=this.type=null,this.sibling=this.child=this.return=null,this.index=0,this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null,this.internalContextTag=n,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.expirationTime=0,this.alternate=null}function it(e,t,n){var r=e.alternate;return null===r?(r=new at(e.tag,e.key,e.internalContextTag),r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.expirationTime=n,r.pendingProps=t,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lt(e,t,n){var o=void 0,a=e.type,i=e.key;return"function"==typeof a?(o=a.prototype&&a.prototype.isReactComponent?new at(2,i,t):new at(0,i,t),o.type=a,o.pendingProps=e.props):"string"==typeof a?(o=new at(5,i,t),o.type=a,o.pendingProps=e.props):"object"===(void 0===a?"undefined":yn(a))&&null!==a&&"number"==typeof a.tag?(o=a,o.pendingProps=e.props):r("130",null==a?a:void 0===a?"undefined":yn(a),""),o.expirationTime=n,o}function ut(e,t,n,r){return t=new at(10,r,t),t.pendingProps=e,t.expirationTime=n,t}function st(e,t,n){return t=new at(6,null,t),t.pendingProps=e,t.expirationTime=n,t}function ct(e,t,n){return t=new at(7,e.key,t),t.type=e.handler,t.pendingProps=e,t.expirationTime=n,t}function dt(e,t,n){return e=new at(9,null,t),e.expirationTime=n,e}function ft(e,t,n){return t=new at(4,e.key,t),t.pendingProps=e.children||[],t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pt(e){return function(t){try{return e(t)}catch(e){}}}function ht(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);ko=pt(function(e){return t.onCommitFiberRoot(n,e)}),Co=pt(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}return!0}function mt(e){"function"==typeof ko&&ko(e)}function gt(e){"function"==typeof Co&&Co(e)}function vt(e){return{baseState:e,expirationTime:0,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1}}function yt(e,t){null===e.last?e.first=e.last=t:(e.last.next=t,e.last=t),(0===e.expirationTime||e.expirationTime>t.expirationTime)&&(e.expirationTime=t.expirationTime)}function bt(e,t){var n=e.alternate,r=e.updateQueue;null===r&&(r=e.updateQueue=vt(null)),null!==n?null===(e=n.updateQueue)&&(e=n.updateQueue=vt(null)):e=null,e=e!==r?e:null,null===e?yt(r,t):null===r.last||null===e.last?(yt(r,t),yt(e,t)):(yt(r,t),e.last=t)}function wt(e,t,n,r){return e=e.partialState,"function"==typeof e?e.call(t,n,r):e}function kt(e,t,n,r,o,a){null!==e&&e.updateQueue===n&&(n=t.updateQueue={baseState:n.baseState,expirationTime:n.expirationTime,first:n.first,last:n.last,isInitialized:n.isInitialized,callbackList:null,hasForceUpdate:!1}),n.expirationTime=0,n.isInitialized?e=n.baseState:(e=n.baseState=t.memoizedState,n.isInitialized=!0);for(var i=!0,l=n.first,u=!1;null!==l;){var s=l.expirationTime;if(s>a){var c=n.expirationTime;(0===c||c>s)&&(n.expirationTime=s),u||(u=!0,n.baseState=e)}else u||(n.first=l.next,null===n.first&&(n.last=null)),l.isReplace?(e=wt(l,r,e,o),i=!0):(s=wt(l,r,e,o))&&(e=i?kn({},e,s):kn(e,s),i=!1),l.isForced&&(n.hasForceUpdate=!0),null!==l.callback&&(s=n.callbackList,null===s&&(s=n.callbackList=[]),s.push(l));l=l.next}return null!==n.callbackList?t.effectTag|=32:null!==n.first||n.hasForceUpdate||(t.updateQueue=null),u||(n.baseState=e),e}function Ct(e,t){var n=e.callbackList;if(null!==n)for(e.callbackList=null,e=0;e<n.length;e++){var o=n[e],a=o.callback;o.callback=null,"function"!=typeof a&&r("191",a),a.call(t)}}function xt(e,t,n,o){function a(e,t){t.updater=i,e.stateNode=t,t._reactInternalFiber=e}var i={isMounted:xe,enqueueSetState:function(n,r,o){n=n._reactInternalFiber,o=void 0===o?null:o;var a=t(n);bt(n,{expirationTime:a,partialState:r,callback:o,isReplace:!1,isForced:!1,nextCallback:null,next:null}),e(n,a)},enqueueReplaceState:function(n,r,o){n=n._reactInternalFiber,o=void 0===o?null:o;var a=t(n);bt(n,{expirationTime:a,partialState:r,callback:o,isReplace:!0,isForced:!1,nextCallback:null,next:null}),e(n,a)},enqueueForceUpdate:function(n,r){n=n._reactInternalFiber,r=void 0===r?null:r;var o=t(n);bt(n,{expirationTime:o,partialState:null,callback:r,isReplace:!1,isForced:!0,nextCallback:null,next:null}),e(n,o)}};return{adoptClassInstance:a,constructClassInstance:function(e,t){var n=e.type,r=Xe(e),o=2===e.tag&&null!=e.type.contextTypes,i=o?Je(e,r):_n;return t=new n(t,i),a(e,t),o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t},mountClassInstance:function(e,t){var n=e.alternate,o=e.stateNode,a=o.state||null,l=e.pendingProps;l||r("158");var u=Xe(e);o.props=l,o.state=e.memoizedState=a,o.refs=_n,o.context=Je(e,u),null!=e.type&&null!=e.type.prototype&&!0===e.type.prototype.unstable_isAsyncReactComponent&&(e.internalContextTag|=1),"function"==typeof o.componentWillMount&&(a=o.state,o.componentWillMount(),a!==o.state&&i.enqueueReplaceState(o,o.state,null),null!==(a=e.updateQueue)&&(o.state=kt(n,e,a,o,l,t))),"function"==typeof o.componentDidMount&&(e.effectTag|=4)},updateClassInstance:function(e,t,a){var l=t.stateNode;l.props=t.memoizedProps,l.state=t.memoizedState;var u=t.memoizedProps,s=t.pendingProps;s||null==(s=u)&&r("159");var c=l.context,d=Xe(t);if(d=Je(t,d),"function"!=typeof l.componentWillReceiveProps||u===s&&c===d||(c=l.state,l.componentWillReceiveProps(s,d),l.state!==c&&i.enqueueReplaceState(l,l.state,null)),c=t.memoizedState,a=null!==t.updateQueue?kt(e,t,t.updateQueue,l,s,a):c,!(u!==s||c!==a||bo.current||null!==t.updateQueue&&t.updateQueue.hasForceUpdate))return"function"!=typeof l.componentDidUpdate||u===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),!1;var f=s;if(null===u||null!==t.updateQueue&&t.updateQueue.hasForceUpdate)f=!0;else{var p=t.stateNode,h=t.type;f="function"==typeof p.shouldComponentUpdate?p.shouldComponentUpdate(f,a,d):!h.prototype||!h.prototype.isPureReactComponent||(!En(u,f)||!En(c,a))}return f?("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(s,a,d),"function"==typeof l.componentDidUpdate&&(t.effectTag|=4)):("function"!=typeof l.componentDidUpdate||u===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),n(t,s),o(t,a)),l.props=s,l.state=a,l.context=d,f}}}function Tt(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:xo,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Et(e){return null===e||void 0===e?null:(e=Eo&&e[Eo]||e["@@iterator"],"function"==typeof e?e:null)}function St(e,t){var n=t.ref;if(null!==n&&"function"!=typeof n){if(t._owner){t=t._owner;var o=void 0;t&&(2!==t.tag&&r("110"),o=t.stateNode),o||r("147",n);var a=""+n;return null!==e&&null!==e.ref&&e.ref._stringRef===a?e.ref:(e=function(e){var t=o.refs===_n?o.refs={}:o.refs;null===e?delete t[a]:t[a]=e},e._stringRef=a,e)}"string"!=typeof n&&r("148"),t._owner||r("149",n)}return n}function Pt(e,t){"textarea"!==e.type&&r("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function _t(e,t){function n(n,r){if(t){if(!e){if(null===r.alternate)return;r=r.alternate}var o=n.lastEffect;null!==o?(o.nextEffect=r,n.lastEffect=r):n.firstEffect=n.lastEffect=r,r.nextEffect=null,r.effectTag=8}}function o(e,r){if(!t)return null;for(;null!==r;)n(e,r),r=r.sibling;return null}function a(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(t,n,r){return e?(t=it(t,n,r),t.index=0,t.sibling=null,t):(t.expirationTime=r,t.effectTag=0,t.index=0,t.sibling=null,t.pendingProps=n,t)}function l(e,n,r){return e.index=r,t?null!==(r=e.alternate)?(r=r.index,r<n?(e.effectTag=2,n):r):(e.effectTag=2,n):n}function u(e){return t&&null===e.alternate&&(e.effectTag=2),e}function s(e,t,n,r){return null===t||6!==t.tag?(t=st(n,e.internalContextTag,r),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function c(e,t,n,r){return null!==t&&t.type===n.type?(r=i(t,n.props,r),r.ref=St(t,n),r.return=e,r):(r=lt(n,e.internalContextTag,r),r.ref=St(t,n),r.return=e,r)}function d(e,t,n,r){return null===t||7!==t.tag?(t=ct(n,e.internalContextTag,r),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function f(e,t,n,r){return null===t||9!==t.tag?(t=dt(n,e.internalContextTag,r),t.type=n.value,t.return=e,t):(t=i(t,null,r),t.type=n.value,t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ft(n,e.internalContextTag,r),t.return=e,t):(t=i(t,n.children||[],r),t.return=e,t)}function h(e,t,n,r,o){return null===t||10!==t.tag?(t=ut(n,e.internalContextTag,r,o),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function m(e,t,n){if("string"==typeof t||"number"==typeof t)return t=st(""+t,e.internalContextTag,n),t.return=e,t;if("object"===(void 0===t?"undefined":yn(t))&&null!==t){switch(t.$$typeof){case ho:return t.type===vo?(t=ut(t.props.children,e.internalContextTag,n,t.key),t.return=e,t):(n=lt(t,e.internalContextTag,n),n.ref=St(null,t),n.return=e,n);case mo:return t=ct(t,e.internalContextTag,n),t.return=e,t;case go:return n=dt(t,e.internalContextTag,n),n.type=t.value,n.return=e,n;case xo:return t=ft(t,e.internalContextTag,n),t.return=e,t}if(To(t)||Et(t))return t=ut(t,e.internalContextTag,n,null),t.return=e,t;Pt(e,t)}return null}function g(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===(void 0===n?"undefined":yn(n))&&null!==n){switch(n.$$typeof){case ho:return n.key===o?n.type===vo?h(e,t,n.props.children,r,o):c(e,t,n,r):null;case mo:return n.key===o?d(e,t,n,r):null;case go:return null===o?f(e,t,n,r):null;case xo:return n.key===o?p(e,t,n,r):null}if(To(n)||Et(n))return null!==o?null:h(e,t,n,r,null);Pt(e,n)}return null}function v(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return e=e.get(n)||null,s(t,e,""+r,o);if("object"===(void 0===r?"undefined":yn(r))&&null!==r){switch(r.$$typeof){case ho:return e=e.get(null===r.key?n:r.key)||null,r.type===vo?h(t,e,r.props.children,o,r.key):c(t,e,r,o);case mo:return e=e.get(null===r.key?n:r.key)||null,d(t,e,r,o);case go:return e=e.get(n)||null,f(t,e,r,o);case xo:return e=e.get(null===r.key?n:r.key)||null,p(t,e,r,o)}if(To(r)||Et(r))return e=e.get(n)||null,h(t,e,r,o,null);Pt(t,r)}return null}function y(e,r,i,u){for(var s=null,c=null,d=r,f=r=0,p=null;null!==d&&f<i.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var h=g(e,d,i[f],u);if(null===h){null===d&&(d=p);break}t&&d&&null===h.alternate&&n(e,d),r=l(h,r,f),null===c?s=h:c.sibling=h,c=h,d=p}if(f===i.length)return o(e,d),s;if(null===d){for(;f<i.length;f++)(d=m(e,i[f],u))&&(r=l(d,r,f),null===c?s=d:c.sibling=d,c=d);return s}for(d=a(e,d);f<i.length;f++)(p=v(d,e,f,i[f],u))&&(t&&null!==p.alternate&&d.delete(null===p.key?f:p.key),r=l(p,r,f),null===c?s=p:c.sibling=p,c=p);return t&&d.forEach(function(t){return n(e,t)}),s}function b(e,i,u,s){var c=Et(u);"function"!=typeof c&&r("150"),null==(u=c.call(u))&&r("151");for(var d=c=null,f=i,p=i=0,h=null,y=u.next();null!==f&&!y.done;p++,y=u.next()){f.index>p?(h=f,f=null):h=f.sibling;var b=g(e,f,y.value,s);if(null===b){f||(f=h);break}t&&f&&null===b.alternate&&n(e,f),i=l(b,i,p),null===d?c=b:d.sibling=b,d=b,f=h}if(y.done)return o(e,f),c;if(null===f){for(;!y.done;p++,y=u.next())null!==(y=m(e,y.value,s))&&(i=l(y,i,p),null===d?c=y:d.sibling=y,d=y);return c}for(f=a(e,f);!y.done;p++,y=u.next())null!==(y=v(f,e,p,y.value,s))&&(t&&null!==y.alternate&&f.delete(null===y.key?p:y.key),i=l(y,i,p),null===d?c=y:d.sibling=y,d=y);return t&&f.forEach(function(t){return n(e,t)}),c}return function(e,t,a,l){var s="object"===(void 0===a?"undefined":yn(a))&&null!==a;if(s)switch(a.$$typeof){case ho:e:{var c=a.key;for(s=t;null!==s;){if(s.key===c){if(10===s.tag?a.type===vo:s.type===a.type){o(e,s.sibling),t=i(s,a.type===vo?a.props.children:a.props,l),t.ref=St(s,a),t.return=e,e=t;break e}o(e,s);break}n(e,s),s=s.sibling}a.type===vo?(a=ut(a.props.children,e.internalContextTag,l,a.key),a.return=e,e=a):(l=lt(a,e.internalContextTag,l),l.ref=St(t,a),l.return=e,e=l)}return u(e);case mo:e:{for(s=a.key;null!==t;){if(t.key===s){if(7===t.tag){o(e,t.sibling),a=i(t,a,l),a.return=e,e=a;break e}o(e,t);break}n(e,t),t=t.sibling}a=ct(a,e.internalContextTag,l),a.return=e,e=a}return u(e);case go:e:{if(null!==t){if(9===t.tag){o(e,t.sibling),t=i(t,null,l),t.type=a.value,t.return=e,e=t;break e}o(e,t)}t=dt(a,e.internalContextTag,l),t.type=a.value,t.return=e,e=t}return u(e);case xo:e:{for(s=a.key;null!==t;){if(t.key===s){if(4===t.tag&&t.stateNode.containerInfo===a.containerInfo&&t.stateNode.implementation===a.implementation){o(e,t.sibling),a=i(t,a.children||[],l),a.return=e,e=a;break e}o(e,t);break}n(e,t),t=t.sibling}a=ft(a,e.internalContextTag,l),a.return=e,e=a}return u(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==t&&6===t.tag?(o(e,t.sibling),a=i(t,a,l)):(o(e,t),a=st(a,e.internalContextTag,l)),a.return=e,e=a,u(e);if(To(a))return y(e,t,a,l);if(Et(a))return b(e,t,a,l);if(s&&Pt(e,a),void 0===a)switch(e.tag){case 2:case 1:a=e.type,r("152",a.displayName||a.name||"Component")}return o(e,t)}}function Ot(e,t,n,o,a){function i(e,t,n){l(e,t,n,t.expirationTime)}function l(e,t,n,r){t.child=null===e?_o(t,t.child,n,r):e.child===t.child?So(t,t.child,n,r):Po(t,t.child,n,r)}function u(e,t){var n=t.ref;null===n||e&&e.ref===n||(t.effectTag|=128)}function s(e,t,n,r){if(u(e,t),!n)return r&&ot(t,!1),d(e,t);n=t.stateNode,zr.current=t;var o=n.render();return t.effectTag|=1,i(e,t,o),t.memoizedState=n.state,t.memoizedProps=n.props,r&&ot(t,!0),t.child}function c(e){var t=e.stateNode;t.pendingContext?tt(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tt(e,t.context,!1),v(e,t.containerInfo)}function d(e,t){if(null!==e&&t.child!==e.child&&r("153"),null!==t.child){e=t.child;var n=it(e,e.pendingProps,e.expirationTime);for(t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,n=n.sibling=it(e,e.pendingProps,e.expirationTime),n.return=t;n.sibling=null}return t.child}function f(e,t){switch(t.tag){case 3:c(t);break;case 2:rt(t);break;case 4:v(t,t.stateNode.containerInfo)}return null}var p=e.shouldSetTextContent,h=e.useSyncScheduling,m=e.shouldDeprioritizeSubtree,g=t.pushHostContext,v=t.pushHostContainer,y=n.enterHydrationState,b=n.resetHydrationState,w=n.tryToClaimNextHydratableInstance;e=xt(o,a,function(e,t){e.memoizedProps=t},function(e,t){e.memoizedState=t});var k=e.adoptClassInstance,C=e.constructClassInstance,x=e.mountClassInstance,T=e.updateClassInstance;return{beginWork:function(e,t,n){if(0===t.expirationTime||t.expirationTime>n)return f(e,t);switch(t.tag){case 0:null!==e&&r("155");var o=t.type,a=t.pendingProps,l=Xe(t);return l=Je(t,l),o=o(a,l),t.effectTag|=1,"object"===(void 0===o?"undefined":yn(o))&&null!==o&&"function"==typeof o.render?(t.tag=2,a=rt(t),k(t,o),x(t,n),t=s(e,t,!0,a)):(t.tag=1,i(e,t,o),t.memoizedProps=a,t=t.child),t;case 1:e:{if(a=t.type,n=t.pendingProps,o=t.memoizedProps,bo.current)null===n&&(n=o);else if(null===n||o===n){t=d(e,t);break e}o=Xe(t),o=Je(t,o),a=a(n,o),t.effectTag|=1,i(e,t,a),t.memoizedProps=n,t=t.child}return t;case 2:return a=rt(t),o=void 0,null===e?t.stateNode?r("153"):(C(t,t.pendingProps),x(t,n),o=!0):o=T(e,t,n),s(e,t,o,a);case 3:return c(t),a=t.updateQueue,null!==a?(o=t.memoizedState,a=kt(e,t,a,null,null,n),o===a?(b(),t=d(e,t)):(o=a.element,l=t.stateNode,(null===e||null===e.child)&&l.hydrate&&y(t)?(t.effectTag|=2,t.child=_o(t,t.child,o,n)):(b(),i(e,t,o)),t.memoizedState=a,t=t.child)):(b(),t=d(e,t)),t;case 5:g(t),null===e&&w(t),a=t.type;var E=t.memoizedProps;return o=t.pendingProps,null===o&&null===(o=E)&&r("154"),l=null!==e?e.memoizedProps:null,bo.current||null!==o&&E!==o?(E=o.children,p(a,o)?E=null:l&&p(a,l)&&(t.effectTag|=16),u(e,t),2147483647!==n&&!h&&m(a,o)?(t.expirationTime=2147483647,t=null):(i(e,t,E),t.memoizedProps=o,t=t.child)):t=d(e,t),t;case 6:return null===e&&w(t),e=t.pendingProps,null===e&&(e=t.memoizedProps),t.memoizedProps=e,null;case 8:t.tag=7;case 7:return a=t.pendingProps,bo.current?null===a&&null===(a=e&&e.memoizedProps)&&r("154"):null!==a&&t.memoizedProps!==a||(a=t.memoizedProps),o=a.children,t.stateNode=null===e?_o(t,t.stateNode,o,n):e.child===t.child?So(t,t.stateNode,o,n):Po(t,t.stateNode,o,n),t.memoizedProps=a,t.stateNode;case 9:return null;case 4:e:{if(v(t,t.stateNode.containerInfo),a=t.pendingProps,bo.current)null===a&&null==(a=e&&e.memoizedProps)&&r("154");else if(null===a||t.memoizedProps===a){t=d(e,t);break e}null===e?t.child=Po(t,t.child,a,n):i(e,t,a),t.memoizedProps=a,t=t.child}return t;case 10:e:{if(n=t.pendingProps,bo.current)null===n&&(n=t.memoizedProps);else if(null===n||t.memoizedProps===n){t=d(e,t);break e}i(e,t,n),t.memoizedProps=n,t=t.child}return t;default:r("156")}},beginFailedWork:function(e,t,n){switch(t.tag){case 2:rt(t);break;case 3:c(t);break;default:r("157")}return t.effectTag|=64,null===e?t.child=null:t.child!==e.child&&(t.child=e.child),0===t.expirationTime||t.expirationTime>n?f(e,t):(t.firstEffect=null,t.lastEffect=null,l(e,t,null,n),2===t.tag&&(e=t.stateNode,t.memoizedProps=e.props,t.memoizedState=e.state),t.child)}}}function Nt(e,t,n){function o(e){e.effectTag|=4}var a=e.createInstance,i=e.createTextInstance,l=e.appendInitialChild,u=e.finalizeInitialChildren,s=e.prepareUpdate,c=e.persistence,d=t.getRootHostContainer,f=t.popHostContext,p=t.getHostContext,h=t.popHostContainer,m=n.prepareToHydrateHostInstance,g=n.prepareToHydrateHostTextInstance,v=n.popHydrationState,y=void 0,b=void 0,w=void 0;return e.mutation?(y=function(){},b=function(e,t,n){(t.updateQueue=n)&&o(t)},w=function(e,t,n,r){n!==r&&o(t)}):r(c?"235":"236"),{completeWork:function(e,t,n){var c=t.pendingProps;switch(null===c?c=t.memoizedProps:2147483647===t.expirationTime&&2147483647!==n||(t.pendingProps=null),t.tag){case 1:return null;case 2:return et(t),null;case 3:return h(t),Ye(bo,t),Ye(yo,t),c=t.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==e&&null!==e.child||(v(t),t.effectTag&=-3),y(t),null;case 5:f(t),n=d();var k=t.type;if(null!==e&&null!=t.stateNode){var C=e.memoizedProps,x=t.stateNode,T=p();x=s(x,k,C,c,n,T),b(e,t,x,k,C,c,n),e.ref!==t.ref&&(t.effectTag|=128)}else{if(!c)return null===t.stateNode&&r("166"),null;if(e=p(),v(t))m(t,n,e)&&o(t);else{e=a(k,c,n,e,t);e:for(C=t.child;null!==C;){if(5===C.tag||6===C.tag)l(e,C.stateNode);else if(4!==C.tag&&null!==C.child){C.child.return=C,C=C.child;continue}if(C===t)break;for(;null===C.sibling;){if(null===C.return||C.return===t)break e;C=C.return}C.sibling.return=C.return,C=C.sibling}u(e,k,c,n)&&o(t),t.stateNode=e}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)w(e,t,e.memoizedProps,c);else{if("string"!=typeof c)return null===t.stateNode&&r("166"),null;e=d(),n=p(),v(t)?g(t)&&o(t):t.stateNode=i(c,e,n,t)}return null;case 7:(c=t.memoizedProps)||r("165"),t.tag=8,k=[];e:for((C=t.stateNode)&&(C.return=t);null!==C;){if(5===C.tag||6===C.tag||4===C.tag)r("247");else if(9===C.tag)k.push(C.type);else if(null!==C.child){C.child.return=C,C=C.child;continue}for(;null===C.sibling;){if(null===C.return||C.return===t)break e;C=C.return}C.sibling.return=C.return,C=C.sibling}return C=c.handler,c=C(c.props,k),t.child=So(t,null!==e?e.child:null,c,n),t.child;case 8:return t.tag=7,null;case 9:case 10:return null;case 4:return h(t),y(t),null;case 0:r("167");default:r("156")}}}}function It(e,t){function n(e){var n=e.ref;if(null!==n)try{n(null)}catch(n){t(e,n)}}function o(e){switch("function"==typeof gt&&gt(e),e.tag){case 2:n(e);var r=e.stateNode;if("function"==typeof r.componentWillUnmount)try{r.props=e.memoizedProps,r.state=e.memoizedState,r.componentWillUnmount()}catch(n){t(e,n)}break;case 5:n(e);break;case 7:a(e.stateNode);break;case 4:s&&l(e)}}function a(e){for(var t=e;;)if(o(t),null===t.child||s&&4===t.tag){if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}else t.child.return=t,t=t.child}function i(e){return 5===e.tag||3===e.tag||4===e.tag}function l(e){for(var t=e,n=!1,i=void 0,l=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&r("160"),n.tag){case 5:i=n.stateNode,l=!1;break e;case 3:case 4:i=n.stateNode.containerInfo,l=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag)a(t),l?b(i,t.stateNode):y(i,t.stateNode);else if(4===t.tag?i=t.stateNode.containerInfo:o(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return,4===t.tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}var u=e.getPublicInstance,s=e.mutation;e=e.persistence,s||r(e?"235":"236");var c=s.commitMount,d=s.commitUpdate,f=s.resetTextContent,p=s.commitTextUpdate,h=s.appendChild,m=s.appendChildToContainer,g=s.insertBefore,v=s.insertInContainerBefore,y=s.removeChild,b=s.removeChildFromContainer;return{commitResetTextContent:function(e){f(e.stateNode)},commitPlacement:function(e){e:{for(var t=e.return;null!==t;){if(i(t)){var n=t;break e}t=t.return}r("160"),n=void 0}var o=t=void 0;switch(n.tag){case 5:t=n.stateNode,o=!1;break;case 3:case 4:t=n.stateNode.containerInfo,o=!0;break;default:r("161")}16&n.effectTag&&(f(t),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||i(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var a=e;;){if(5===a.tag||6===a.tag)n?o?v(t,a.stateNode,n):g(t,a.stateNode,n):o?m(t,a.stateNode):h(t,a.stateNode);else if(4!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},commitDeletion:function(e){l(e),e.return=null,e.child=null,e.alternate&&(e.alternate.child=null,e.alternate.return=null)},commitWork:function(e,t){switch(t.tag){case 2:break;case 5:var n=t.stateNode;if(null!=n){var o=t.memoizedProps;e=null!==e?e.memoizedProps:o;var a=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&d(n,i,a,e,o,t)}break;case 6:null===t.stateNode&&r("162"),n=t.memoizedProps,p(t.stateNode,null!==e?e.memoizedProps:n,n);break;case 3:break;default:r("163")}},commitLifeCycles:function(e,t){switch(t.tag){case 2:var n=t.stateNode;if(4&t.effectTag)if(null===e)n.props=t.memoizedProps,n.state=t.memoizedState,n.componentDidMount();else{var o=e.memoizedProps;e=e.memoizedState,n.props=t.memoizedProps,n.state=t.memoizedState,n.componentDidUpdate(o,e)}t=t.updateQueue,null!==t&&Ct(t,n);break;case 3:n=t.updateQueue,null!==n&&Ct(n,null!==t.child?t.child.stateNode:null);break;case 5:n=t.stateNode,null===e&&4&t.effectTag&&c(n,t.type,t.memoizedProps,t);break;case 6:case 4:break;default:r("163")}},commitAttachRef:function(e){var t=e.ref;if(null!==t){var n=e.stateNode;switch(e.tag){case 5:t(u(n));break;default:t(n)}}},commitDetachRef:function(e){null!==(e=e.ref)&&e(null)}}}function Rt(e){function t(e){return e===Oo&&r("174"),e}var n=e.getChildHostContext,o=e.getRootHostContext,a={current:Oo},i={current:Oo},l={current:Oo};return{getHostContext:function(){return t(a.current)},getRootHostContainer:function(){return t(l.current)},popHostContainer:function(e){Ye(a,e),Ye(i,e),Ye(l,e)},popHostContext:function(e){i.current===e&&(Ye(a,e),Ye(i,e))},pushHostContainer:function(e,t){Ge(l,t,e),t=o(t),Ge(i,e,e),Ge(a,t,e)},pushHostContext:function(e){var r=t(l.current),o=t(a.current);r=n(o,e.type,r),o!==r&&(Ge(i,e,e),Ge(a,r,e))},resetHostContainer:function(){a.current=Oo,l.current=Oo}}}function Mt(e){function t(e,t){var n=new at(5,null,0);n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function n(e,t){switch(e.tag){case 5:return null!==(t=i(t,e.type,e.pendingProps))&&(e.stateNode=t,!0);case 6:return null!==(t=l(t,e.pendingProps))&&(e.stateNode=t,!0);default:return!1}}function o(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag;)e=e.return;f=e}var a=e.shouldSetTextContent;if(!(e=e.hydration))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){r("175")},prepareToHydrateHostTextInstance:function(){r("176")},popHydrationState:function(){return!1}};var i=e.canHydrateInstance,l=e.canHydrateTextInstance,u=e.getNextHydratableSibling,s=e.getFirstHydratableChild,c=e.hydrateInstance,d=e.hydrateTextInstance,f=null,p=null,h=!1;return{enterHydrationState:function(e){return p=s(e.stateNode.containerInfo),f=e,h=!0},resetHydrationState:function(){p=f=null,h=!1},tryToClaimNextHydratableInstance:function(e){if(h){var r=p;if(r){if(!n(e,r)){if(!(r=u(r))||!n(e,r))return e.effectTag|=2,h=!1,void(f=e);t(f,p)}f=e,p=s(r)}else e.effectTag|=2,h=!1,f=e}},prepareToHydrateHostInstance:function(e,t,n){return t=c(e.stateNode,e.type,e.memoizedProps,t,n,e),e.updateQueue=t,null!==t},prepareToHydrateHostTextInstance:function(e){return d(e.stateNode,e.memoizedProps,e)},popHydrationState:function(e){if(e!==f)return!1;if(!h)return o(e),h=!0,!1;var n=e.type;if(5!==e.tag||"head"!==n&&"body"!==n&&!a(n,e.memoizedProps))for(n=p;n;)t(e,n),n=u(n);return o(e),p=f?u(e.stateNode):null,!0}}}function Dt(e){function t(e){re=$=!0;var t=e.stateNode;if(t.current===e&&r("177"),t.isReadyForCommit=!1,zr.current=null,1<e.effectTag)if(null!==e.lastEffect){e.lastEffect.nextEffect=e;var n=e.firstEffect}else n=e;else n=e.firstEffect;for(V(),X=n;null!==X;){var o=!1,a=void 0;try{for(;null!==X;){var i=X.effectTag;if(16&i&&R(X),128&i){var l=X.alternate;null!==l&&U(l)}switch(-242&i){case 2:M(X),X.effectTag&=-3;break;case 6:M(X),X.effectTag&=-3,A(X.alternate,X);break;case 4:A(X.alternate,X);break;case 8:oe=!0,D(X),oe=!1}X=X.nextEffect}}catch(e){o=!0,a=e}o&&(null===X&&r("178"),u(X,a),null!==X&&(X=X.nextEffect))}for(B(),t.current=e,X=n;null!==X;){n=!1,o=void 0;try{for(;null!==X;){var s=X.effectTag;if(36&s&&F(X.alternate,X),128&s&&L(X),64&s)switch(a=X,i=void 0,null!==J&&(i=J.get(a),J.delete(a),null==i&&null!==a.alternate&&(a=a.alternate,i=J.get(a),J.delete(a))),null==i&&r("184"),a.tag){case 2:a.stateNode.componentDidCatch(i.error,{componentStack:i.componentStack});break;case 3:null===te&&(te=i.error);break;default:r("157")}var c=X.nextEffect;X.nextEffect=null,X=c}}catch(e){n=!0,o=e}n&&(null===X&&r("178"),u(X,o),null!==X&&(X=X.nextEffect))}return $=re=!1,"function"==typeof mt&&mt(e.stateNode),ee&&(ee.forEach(m),ee=null),null!==te&&(e=te,te=null,C(e)),t=t.current.expirationTime,0===t&&(Z=J=null),t}function n(e){for(;;){var t=I(e.alternate,e,G),n=e.return,r=e.sibling,o=e;if(2147483647===G||2147483647!==o.expirationTime){if(2!==o.tag&&3!==o.tag)var a=0;else a=o.updateQueue,a=null===a?0:a.expirationTime;for(var i=o.child;null!==i;)0!==i.expirationTime&&(0===a||a>i.expirationTime)&&(a=i.expirationTime),i=i.sibling;o.expirationTime=a}if(null!==t)return t;if(null!==n&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e)),null!==r)return r;if(null===n){e.stateNode.isReadyForCommit=!0;break}e=n}return null}function o(e){var t=O(e.alternate,e,G);return null===t&&(t=n(e)),zr.current=null,t}function a(e){var t=N(e.alternate,e,G);return null===t&&(t=n(e)),zr.current=null,t}function i(e){if(null!==J){if(!(0===G||G>e))if(G<=K)for(;null!==Q;)Q=s(Q)?a(Q):o(Q);else for(;null!==Q&&!k();)Q=s(Q)?a(Q):o(Q)}else if(!(0===G||G>e))if(G<=K)for(;null!==Q;)Q=o(Q);else for(;null!==Q&&!k();)Q=o(Q)}function l(e,t){if($&&r("243"),$=!0,e.isReadyForCommit=!1,e!==Y||t!==G||null===Q){for(;-1<po;)fo[po]=null,po--;wo=_n,yo.current=_n,bo.current=!1,P(),Y=e,G=t,Q=it(Y.current,null,t)}var n=!1,o=null;try{i(t)}catch(e){n=!0,o=e}for(;n;){if(ne){te=o;break}var l=Q;if(null===l)ne=!0;else{var s=u(l,o);if(null===s&&r("183"),!ne){try{for(n=s,o=t,s=n;null!==l;){switch(l.tag){case 2:et(l);break;case 5:S(l);break;case 3:E(l);break;case 4:E(l)}if(l===s||l.alternate===s)break;l=l.return}Q=a(n),i(o)}catch(e){n=!0,o=e;continue}break}}}return t=te,ne=$=!1,te=null,null!==t&&C(t),e.isReadyForCommit?e.current.alternate:null}function u(e,t){var n=zr.current=null,r=!1,o=!1,a=null;if(3===e.tag)n=e,c(e)&&(ne=!0);else for(var i=e.return;null!==i&&null===n;){if(2===i.tag?"function"==typeof i.stateNode.componentDidCatch&&(r=!0,a=ke(i),n=i,o=!0):3===i.tag&&(n=i),c(i)){if(oe||null!==ee&&(ee.has(i)||null!==i.alternate&&ee.has(i.alternate)))return null;n=null,o=!1}i=i.return}if(null!==n){null===Z&&(Z=new Set),Z.add(n);var l="";i=e;do{e:switch(i.tag){case 0:case 1:case 2:case 5:var u=i._debugOwner,s=i._debugSource,d=ke(i),f=null;u&&(f=ke(u)),u=s,d="\n    in "+(d||"Unknown")+(u?" (at "+u.fileName.replace(/^.*[\\\/]/,"")+":"+u.lineNumber+")":f?" (created by "+f+")":"");break e;default:d=""}l+=d,i=i.return}while(i);i=l,e=ke(e),null===J&&(J=new Map),t={componentName:e,componentStack:i,error:t,errorBoundary:r?n.stateNode:null,errorBoundaryFound:r,errorBoundaryName:a,willRetry:o},J.set(n,t);try{console.error(t.error)}catch(e){console.error(e)}return re?(null===ee&&(ee=new Set),ee.add(n)):m(n),n}return null===te&&(te=t),null}function s(e){return null!==J&&(J.has(e)||null!==e.alternate&&J.has(e.alternate))}function c(e){return null!==Z&&(Z.has(e)||null!==e.alternate&&Z.has(e.alternate))}function d(){return 20*(1+((g()+100)/20|0))}function f(e){return 0!==q?q:$?re?1:G:!z||1&e.internalContextTag?d():1}function p(e,t){return h(e,t,!1)}function h(e,t){for(;null!==e;){if((0===e.expirationTime||e.expirationTime>t)&&(e.expirationTime=t),null!==e.alternate&&(0===e.alternate.expirationTime||e.alternate.expirationTime>t)&&(e.alternate.expirationTime=t),null===e.return){if(3!==e.tag)break;var n=e.stateNode;!$&&n===Y&&t<=G&&(Q=Y=null,G=0);var o=t;if(ye>ve&&r("185"),null===n.nextScheduledRoot)n.remainingExpirationTime=o,null===ie?(ae=ie=n,n.nextScheduledRoot=n):(ie=ie.nextScheduledRoot=n,ie.nextScheduledRoot=ae);else{var a=n.remainingExpirationTime;(0===a||o<a)&&(n.remainingExpirationTime=o)}ue||(me?ge&&w(n,1):1===o?b(1,null):le||(le=!0,H(y)))}e=e.return}}function m(e){h(e,1,!0)}function g(){return K=2+((j()-W)/10|0)}function v(){var e=0,t=null;if(null!==ie)for(var n=ie,o=ae;null!==o;){var a=o.remainingExpirationTime;if(0===a){if((null===n||null===ie)&&r("244"),o===o.nextScheduledRoot){ae=ie=o.nextScheduledRoot=null;break}if(o===ae)ae=a=o.nextScheduledRoot,ie.nextScheduledRoot=a,o.nextScheduledRoot=null;else{if(o===ie){ie=n,ie.nextScheduledRoot=ae,o.nextScheduledRoot=null;break}n.nextScheduledRoot=o.nextScheduledRoot,o.nextScheduledRoot=null}o=n.nextScheduledRoot}else{if((0===e||a<e)&&(e=a,t=o),o===ie)break;n=o,o=o.nextScheduledRoot}}n=se,null!==n&&n===t?ye++:ye=0,se=t,ce=e}function y(e){b(0,e)}function b(e,t){for(he=t,v();null!==se&&0!==ce&&(0===e||ce<=e)&&!de;)w(se,ce),v();if(null!==he&&(le=!1),null===se||le||(le=!0,H(y)),he=null,de=!1,ye=0,fe)throw e=pe,pe=null,fe=!1,e}function w(e,n){if(ue&&r("245"),ue=!0,n<=g()){var o=e.finishedWork;null!==o?(e.finishedWork=null,e.remainingExpirationTime=t(o)):(e.finishedWork=null,null!==(o=l(e,n))&&(e.remainingExpirationTime=t(o)))}else o=e.finishedWork,null!==o?(e.finishedWork=null,e.remainingExpirationTime=t(o)):(e.finishedWork=null,null!==(o=l(e,n))&&(k()?e.finishedWork=o:e.remainingExpirationTime=t(o)));ue=!1}function k(){return!(null===he||he.timeRemaining()>be)&&(de=!0)}function C(e){null===se&&r("246"),se.remainingExpirationTime=0,fe||(fe=!0,pe=e)}var x=Rt(e),T=Mt(e),E=x.popHostContainer,S=x.popHostContext,P=x.resetHostContainer,_=Ot(e,x,T,p,f),O=_.beginWork,N=_.beginFailedWork,I=Nt(e,x,T).completeWork;x=It(e,u);var R=x.commitResetTextContent,M=x.commitPlacement,D=x.commitDeletion,A=x.commitWork,F=x.commitLifeCycles,L=x.commitAttachRef,U=x.commitDetachRef,j=e.now,H=e.scheduleDeferredCallback,z=e.useSyncScheduling,V=e.prepareForCommit,B=e.resetAfterCommit,W=j(),K=2,q=0,$=!1,Q=null,Y=null,G=0,X=null,J=null,Z=null,ee=null,te=null,ne=!1,re=!1,oe=!1,ae=null,ie=null,le=!1,ue=!1,se=null,ce=0,de=!1,fe=!1,pe=null,he=null,me=!1,ge=!1,ve=1e3,ye=0,be=1;return{computeAsyncExpiration:d,computeExpirationForFiber:f,scheduleWork:p,batchedUpdates:function(e,t){var n=me;me=!0;try{return e(t)}finally{(me=n)||ue||b(1,null)}},unbatchedUpdates:function(e){if(me&&!ge){ge=!0;try{return e()}finally{ge=!1}}return e()},flushSync:function(e){var t=me;me=!0;try{e:{var n=q;q=1;try{var o=e();break e}finally{q=n}o=void 0}return o}finally{me=t,ue&&r("187"),b(1,null)}},deferredUpdates:function(e){var t=q;q=d();try{return e()}finally{q=t}}}}function At(e){function t(e){return e=Se(e),null===e?null:e.stateNode}var n=e.getPublicInstance;e=Dt(e);var o=e.computeAsyncExpiration,a=e.computeExpirationForFiber,i=e.scheduleWork;return{createContainer:function(e,t){var n=new at(3,null,0);return e={current:n,containerInfo:e,pendingChildren:null,remainingExpirationTime:0,isReadyForCommit:!1,finishedWork:null,context:null,pendingContext:null,hydrate:t,nextScheduledRoot:null},n.stateNode=e},updateContainer:function(e,t,n,l){var u=t.current;if(n){n=n._reactInternalFiber;var s;e:{for(2===Ce(n)&&2===n.tag||r("170"),s=n;3!==s.tag;){if(Ze(s)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}(s=s.return)||r("171")}s=s.stateNode.context}n=Ze(n)?nt(n,s):s}else n=_n;null===t.context?t.context=n:t.pendingContext=n,t=l,t=void 0===t?null:t,l=null!=e&&null!=e.type&&null!=e.type.prototype&&!0===e.type.prototype.unstable_isAsyncReactComponent?o():a(u),bt(u,{expirationTime:l,partialState:{element:e},callback:t,isReplace:!1,isForced:!1,nextCallback:null,next:null}),i(u,l)},batchedUpdates:e.batchedUpdates,unbatchedUpdates:e.unbatchedUpdates,deferredUpdates:e.deferredUpdates,flushSync:e.flushSync,getPublicRootInstance:function(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return n(e.child.stateNode);default:return e.child.stateNode}},findHostInstance:t,findHostInstanceWithNoPortals:function(e){return e=Pe(e),null===e?null:e.stateNode},injectIntoDevTools:function(e){var n=e.findFiberByHostInstance;return ht(kn({},e,{findHostInstanceByFiber:function(e){return t(e)},findFiberByHostInstance:function(e){return n?n(e):null}}))}}}function Ft(e){return!!$o.hasOwnProperty(e)||!qo.hasOwnProperty(e)&&(Ko.test(e)?$o[e]=!0:(qo[e]=!0,!1))}function Lt(e,t,n){var r=i(t);if(r&&a(t,n)){var o=r.mutationMethod;o?o(e,n):null==n||r.hasBooleanValue&&!n||r.hasNumericValue&&isNaN(n)||r.hasPositiveNumericValue&&1>n||r.hasOverloadedBooleanValue&&!1===n?jt(e,t):r.mustUseProperty?e[r.propertyName]=n:(t=r.attributeName,(o=r.attributeNamespace)?e.setAttributeNS(o,t,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&!0===n?e.setAttribute(t,""):e.setAttribute(t,""+n))}else Ut(e,t,a(t,n)?n:null)}function Ut(e,t,n){Ft(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))}function jt(e,t){var n=i(t);n?(t=n.mutationMethod)?t(e,void 0):n.mustUseProperty?e[n.propertyName]=!n.hasBooleanValue&&"":e.removeAttribute(n.attributeName):e.removeAttribute(t)}function Ht(e,t){var n=t.value,r=t.checked;return kn({type:void 0,step:void 0,min:void 0,max:void 0},t,{defaultChecked:void 0,defaultValue:void 0,value:null!=n?n:e._wrapperState.initialValue,checked:null!=r?r:e._wrapperState.initialChecked})}function zt(e,t){var n=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Vt(e,t){var n=t.checked;null!=n&&Lt(e,"checked",n||!1),n=t.value,null!=n?0===n&&""===e.value?e.value="0":"number"===t.type?(t=parseFloat(e.value)||0,(n!=t||n==t&&e.value!=n)&&(e.value=""+n)):e.value!==""+n&&(e.value=""+n):(null==t.value&&null!=t.defaultValue&&e.defaultValue!==""+t.defaultValue&&(e.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked))}function Bt(e,t){switch(t.type){case"submit":case"reset":break;case"color":case"date":case"datetime":case"datetime-local":case"month":case"time":case"week":e.value="",e.value=e.defaultValue;break;default:e.value=e.value}t=e.name,""!==t&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!e.defaultChecked,""!==t&&(e.name=t)}function Wt(e){var t="";return bn.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}function Kt(e,t){return e=kn({children:void 0},t),(t=Wt(t.children))&&(e.children=t),e}function qt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+n,t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function $t(e,t){var n=t.value;e._wrapperState={initialValue:null!=n?n:t.defaultValue,wasMultiple:!!t.multiple}}function Qt(e,t){return null!=t.dangerouslySetInnerHTML&&r("91"),kn({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yt(e,t){var n=t.value,o=n;null==n&&(n=t.defaultValue,t=t.children,null!=t&&(null!=n&&r("92"),Array.isArray(t)&&(1>=t.length||r("93"),t=t[0]),n=""+t),null==n&&(n=""),o=n),e._wrapperState={initialValue:""+o}}function Gt(e,t){var n=t.value;null!=n&&(n=""+n,n!==e.value&&(e.value=n),null==t.defaultValue&&(e.defaultValue=n)),null!=t.defaultValue&&(e.defaultValue=t.defaultValue)}function Xt(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}function Jt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zt(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Jt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function tn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=n,a=t[n];o=null==a||"boolean"==typeof a||""===a?"":r||"number"!=typeof a||0===a||Zo.hasOwnProperty(o)&&Zo[o]?(""+a).trim():a+"px","float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function nn(e,t,n){t&&(ta[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&r("137",e,n()),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&r("60"),"object"===yn(t.dangerouslySetInnerHTML)&&"__html"in t.dangerouslySetInnerHTML||r("61")),null!=t.style&&"object"!==yn(t.style)&&r("62",n()))}function rn(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function on(e,t){e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument;var n=Ae(e);t=Gn[t];for(var r=0;r<t.length;r++){var o=t[r];n.hasOwnProperty(o)&&n[o]||("topWheel"===o?ne("wheel")?Ne("topWheel","wheel",e):ne("mousewheel")?Ne("topWheel","mousewheel",e):Ne("topWheel","DOMMouseScroll",e):"topScroll"===o?Ie("topScroll","scroll",e):"topFocus"===o||"topBlur"===o?(Ie("topFocus","focus",e),Ie("topBlur","blur",e),n.topBlur=!0,n.topFocus=!0):"topCancel"===o?(ne("cancel",!0)&&Ie("topCancel","cancel",e),n.topCancel=!0):"topClose"===o?(ne("close",!0)&&Ie("topClose","close",e),n.topClose=!0):Yr.hasOwnProperty(o)&&Ne(o,Yr[o],e),n[o]=!0)}}function an(e,t,n,r){return n=9===n.nodeType?n:n.ownerDocument,r===na&&(r=Jt(e)),r===na?"script"===e?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):e="string"==typeof t.is?n.createElement(e,{is:t.is}):n.createElement(e):e=n.createElementNS(r,e),e}function ln(e,t){return(9===t.nodeType?t:t.ownerDocument).createTextNode(e)}function un(e,t,n,r){var o=rn(t,n);switch(t){case"iframe":case"object":Ne("topLoad","load",e);var a=n;break;case"video":case"audio":for(a in oa)oa.hasOwnProperty(a)&&Ne(a,oa[a],e);a=n;break;case"source":Ne("topError","error",e),a=n;break;case"img":case"image":Ne("topError","error",e),Ne("topLoad","load",e),a=n;break;case"form":Ne("topReset","reset",e),Ne("topSubmit","submit",e),a=n;break;case"details":Ne("topToggle","toggle",e),a=n;break;case"input":zt(e,n),a=Ht(e,n),Ne("topInvalid","invalid",e),on(r,"onChange");break;case"option":a=Kt(e,n);break;case"select":$t(e,n),a=kn({},n,{value:void 0}),Ne("topInvalid","invalid",e),on(r,"onChange");break;case"textarea":Yt(e,n),a=Qt(e,n),Ne("topInvalid","invalid",e),on(r,"onChange");break;default:a=n}nn(t,a,ra);var i,l=a;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];"style"===i?tn(e,u,ra):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&Go(e,u):"children"===i?"string"==typeof u?("textarea"!==t||""!==u)&&Jo(e,u):"number"==typeof u&&Jo(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(Yn.hasOwnProperty(i)?null!=u&&on(r,i):o?Ut(e,i,u):null!=u&&Lt(e,i,u))}switch(t){case"input":ae(e),Bt(e,n);break;case"textarea":ae(e),Xt(e,n);break;case"option":null!=n.value&&e.setAttribute("value",n.value);break;case"select":e.multiple=!!n.multiple,t=n.value,null!=t?qt(e,!!n.multiple,t,!1):null!=n.defaultValue&&qt(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=Cn)}}function sn(e,t,n,r,o){var a=null;switch(t){case"input":n=Ht(e,n),r=Ht(e,r),a=[];break;case"option":n=Kt(e,n),r=Kt(e,r),a=[];break;case"select":n=kn({},n,{value:void 0}),r=kn({},r,{value:void 0}),a=[];break;case"textarea":n=Qt(e,n),r=Qt(e,r),a=[];break;default:"function"!=typeof n.onClick&&"function"==typeof r.onClick&&(e.onclick=Cn)}nn(t,r,ra);var i,l;e=null;for(i in n)if(!r.hasOwnProperty(i)&&n.hasOwnProperty(i)&&null!=n[i])if("style"===i)for(l in t=n[i])t.hasOwnProperty(l)&&(e||(e={}),e[l]="");else"dangerouslySetInnerHTML"!==i&&"children"!==i&&"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(Yn.hasOwnProperty(i)?a||(a=[]):(a=a||[]).push(i,null));for(i in r){var u=r[i];if(t=null!=n?n[i]:void 0,r.hasOwnProperty(i)&&u!==t&&(null!=u||null!=t))if("style"===i)if(t){for(l in t)!t.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(e||(e={}),e[l]="");for(l in u)u.hasOwnProperty(l)&&t[l]!==u[l]&&(e||(e={}),e[l]=u[l])}else e||(a||(a=[]),a.push(i,e)),e=u;else"dangerouslySetInnerHTML"===i?(u=u?u.__html:void 0,t=t?t.__html:void 0,null!=u&&t!==u&&(a=a||[]).push(i,""+u)):"children"===i?t===u||"string"!=typeof u&&"number"!=typeof u||(a=a||[]).push(i,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&(Yn.hasOwnProperty(i)?(null!=u&&on(o,i),a||t===u||(a=[])):(a=a||[]).push(i,u))}return e&&(a=a||[]).push("style",e),a}function cn(e,t,n,r,o){rn(n,r),r=rn(n,o);for(var a=0;a<t.length;a+=2){var i=t[a],l=t[a+1];"style"===i?tn(e,l,ra):"dangerouslySetInnerHTML"===i?Go(e,l):"children"===i?Jo(e,l):r?null!=l?Ut(e,i,l):e.removeAttribute(i):null!=l?Lt(e,i,l):jt(e,i)}switch(n){case"input":Vt(e,o),ie(e);break;case"textarea":Gt(e,o);break;case"select":e._wrapperState.initialValue=void 0,t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!o.multiple,n=o.value,null!=n?qt(e,!!o.multiple,n,!1):t!==!!o.multiple&&(null!=o.defaultValue?qt(e,!!o.multiple,o.defaultValue,!0):qt(e,!!o.multiple,o.multiple?[]:"",!1))}}function dn(e,t,n,r,o){switch(t){case"iframe":case"object":Ne("topLoad","load",e);break;case"video":case"audio":for(var a in oa)oa.hasOwnProperty(a)&&Ne(a,oa[a],e);break;case"source":Ne("topError","error",e);break;case"img":case"image":Ne("topError","error",e),Ne("topLoad","load",e);break;case"form":Ne("topReset","reset",e),Ne("topSubmit","submit",e);break;case"details":Ne("topToggle","toggle",e);break;case"input":zt(e,n),Ne("topInvalid","invalid",e),on(o,"onChange");break;case"select":$t(e,n),Ne("topInvalid","invalid",e),on(o,"onChange");break;case"textarea":Yt(e,n),Ne("topInvalid","invalid",e),on(o,"onChange")}nn(t,n,ra),r=null;for(var i in n)n.hasOwnProperty(i)&&(a=n[i],"children"===i?"string"==typeof a?e.textContent!==a&&(r=["children",a]):"number"==typeof a&&e.textContent!==""+a&&(r=["children",""+a]):Yn.hasOwnProperty(i)&&null!=a&&on(o,i));switch(t){case"input":ae(e),Bt(e,n);break;case"textarea":ae(e),Xt(e,n);break;case"select":case"option":break;default:"function"==typeof n.onClick&&(e.onclick=Cn)}return r}function fn(e,t){return e.nodeValue!==t}function pn(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function hn(e){return!(!(e=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==e.nodeType||!e.hasAttribute("data-reactroot"))}function mn(e,t,n,o,a){pn(n)||r("200");var i=n._reactRootContainer;if(i)ua.updateContainer(t,i,e,a);else{if(!(o=o||hn(n)))for(i=void 0;i=n.lastChild;)n.removeChild(i);var l=ua.createContainer(n,o);i=n._reactRootContainer=l,ua.unbatchedUpdates(function(){ua.updateContainer(t,l,e,a)})}return ua.getPublicRootInstance(i)}function gn(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return pn(t)||r("200"),Tt(e,t,null,n)}function vn(e,t){this._reactRootContainer=ua.createContainer(e,t)}/** @license React v16.1.1
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var yn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bn=n(2),wn=n(10),kn=n(3),Cn=n(1),xn=n(11),Tn=n(12),En=n(13),Sn=n(14),Pn=n(15),_n=n(4);bn||r("227");var On={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0},Nn={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=Nn,n=e.Properties||{},a=e.DOMAttributeNamespaces||{},i=e.DOMAttributeNames||{};e=e.DOMMutationMethods||{};for(var l in n){In.hasOwnProperty(l)&&r("48",l);var u=l.toLowerCase(),s=n[l];u={attributeName:u,attributeNamespace:null,propertyName:l,mutationMethod:null,mustUseProperty:o(s,t.MUST_USE_PROPERTY),hasBooleanValue:o(s,t.HAS_BOOLEAN_VALUE),hasNumericValue:o(s,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:o(s,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:o(s,t.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:o(s,t.HAS_STRING_BOOLEAN_VALUE)},1>=u.hasBooleanValue+u.hasNumericValue+u.hasOverloadedBooleanValue||r("50",l),i.hasOwnProperty(l)&&(u.attributeName=i[l]),a.hasOwnProperty(l)&&(u.attributeNamespace=a[l]),e.hasOwnProperty(l)&&(u.mutationMethod=e[l]),In[l]=u}}},In={},Rn=Nn,Mn=Rn.MUST_USE_PROPERTY,Dn=Rn.HAS_BOOLEAN_VALUE,An=Rn.HAS_NUMERIC_VALUE,Fn=Rn.HAS_POSITIVE_NUMERIC_VALUE,Ln=Rn.HAS_OVERLOADED_BOOLEAN_VALUE,Un=Rn.HAS_STRING_BOOLEAN_VALUE,jn={Properties:{allowFullScreen:Dn,async:Dn,autoFocus:Dn,autoPlay:Dn,capture:Ln,checked:Mn|Dn,cols:Fn,contentEditable:Un,controls:Dn,default:Dn,defer:Dn,disabled:Dn,download:Ln,draggable:Un,formNoValidate:Dn,hidden:Dn,loop:Dn,multiple:Mn|Dn,muted:Mn|Dn,noValidate:Dn,open:Dn,playsInline:Dn,readOnly:Dn,required:Dn,reversed:Dn,rows:Fn,rowSpan:An,scoped:Dn,seamless:Dn,selected:Mn|Dn,size:Fn,start:An,span:Fn,spellCheck:Un,style:0,tabIndex:0,itemScope:Dn,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:Un},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t)}}},Hn=Rn.HAS_STRING_BOOLEAN_VALUE,zn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Vn={Properties:{autoReverse:Hn,externalResourcesRequired:Hn,preserveAlpha:Hn},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:zn.xlink,xlinkArcrole:zn.xlink,xlinkHref:zn.xlink,xlinkRole:zn.xlink,xlinkShow:zn.xlink,xlinkTitle:zn.xlink,xlinkType:zn.xlink,xmlBase:zn.xml,xmlLang:zn.xml,xmlSpace:zn.xml}},Bn=/[\-\:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(e){var t=e.replace(Bn,l);Vn.Properties[t]=0,Vn.DOMAttributeNames[t]=e}),Rn.injectDOMPropertyConfig(jn),Rn.injectDOMPropertyConfig(Vn);var Wn={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(e){"function"!=typeof e.invokeGuardedCallback&&r("197"),u=e.invokeGuardedCallback}},invokeGuardedCallback:function(e,t,n,r,o,a,i,l,s){u.apply(Wn,arguments)},invokeGuardedCallbackAndCatchFirstError:function(e,t,n,r,o,a,i,l,u){if(Wn.invokeGuardedCallback.apply(this,arguments),Wn.hasCaughtError()){var s=Wn.clearCaughtError();Wn._hasRethrowError||(Wn._hasRethrowError=!0,Wn._rethrowError=s)}},rethrowCaughtError:function(){return s.apply(Wn,arguments)},hasCaughtError:function(){return Wn._hasCaughtError},clearCaughtError:function(){if(Wn._hasCaughtError){var e=Wn._caughtError;return Wn._caughtError=null,Wn._hasCaughtError=!1,e}r("198")}},Kn=null,qn={},$n=[],Qn={},Yn={},Gn={},Xn=Object.freeze({plugins:$n,eventNameDispatchConfigs:Qn,registrationNameModules:Yn,registrationNameDependencies:Gn,possibleRegistrationNames:null,injectEventPluginOrder:f,injectEventPluginsByName:p}),Jn=null,Zn=null,er=null,tr=null,nr={injectEventPluginOrder:f,injectEventPluginsByName:p},rr=Object.freeze({injection:nr,getListener:w,extractEvents:k,enqueueEvents:C,processEventQueue:x}),or=Math.random().toString(36).slice(2),ar="__reactInternalInstance$"+or,ir="__reactEventHandlers$"+or,lr=Object.freeze({precacheFiberNode:function(e,t){t[ar]=e},getClosestInstanceFromNode:T,getInstanceFromNode:function(e){return e=e[ar],!e||5!==e.tag&&6!==e.tag?null:e},getNodeFromInstance:E,getFiberCurrentPropsFromNode:S,updateFiberProps:function(e,t){e[ir]=t}}),ur=Object.freeze({accumulateTwoPhaseDispatches:D,accumulateTwoPhaseDispatchesSkipTarget:function(e){g(e,I)},accumulateEnterLeaveDispatches:A,accumulateDirectDispatches:function(e){g(e,M)}}),sr=null,cr={_root:null,_startText:null,_fallbackText:null},dr="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),fr={type:null,target:null,currentTarget:Cn.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};kn(j.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Cn.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Cn.thatReturnsTrue)},persist:function(){this.isPersistent=Cn.thatReturnsTrue},isPersistent:Cn.thatReturnsFalse,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;for(t=0;t<dr.length;t++)this[dr[t]]=null}}),j.Interface=fr,j.augmentClass=function(e,t){function n(){}n.prototype=this.prototype;var r=new n;kn(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=kn({},this.Interface,t),e.augmentClass=this.augmentClass,V(e)},V(j),j.augmentClass(B,{data:null}),j.augmentClass(W,{data:null});var pr=[9,13,27,32],hr=wn.canUseDOM&&"CompositionEvent"in window,mr=null;wn.canUseDOM&&"documentMode"in document&&(mr=document.documentMode);var gr;if(gr=wn.canUseDOM&&"TextEvent"in window&&!mr){var vr=window.opera;gr=!("object"===(void 0===vr?"undefined":yn(vr))&&"function"==typeof vr.version&&12>=parseInt(vr.version(),10))}var yr,br=gr,wr=wn.canUseDOM&&(!hr||mr&&8<mr&&11>=mr),kr=String.fromCharCode(32),Cr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},xr=!1,Tr=!1,Er={eventTypes:Cr,extractEvents:function(e,t,n,r){var o;if(hr)e:{switch(e){case"topCompositionStart":var a=Cr.compositionStart;break e;case"topCompositionEnd":a=Cr.compositionEnd;break e;case"topCompositionUpdate":a=Cr.compositionUpdate;break e}a=void 0}else Tr?K(e,n)&&(a=Cr.compositionEnd):"topKeyDown"===e&&229===n.keyCode&&(a=Cr.compositionStart);return a?(wr&&(Tr||a!==Cr.compositionStart?a===Cr.compositionEnd&&Tr&&(o=L()):(cr._root=r,cr._startText=U(),Tr=!0)),a=B.getPooled(a,t,n,r),o?a.data=o:null!==(o=q(n))&&(a.data=o),D(a),o=a):o=null,(e=br?$(e,n):Q(e,n))?(t=W.getPooled(Cr.beforeInput,t,n,r),t.data=e,D(t)):t=null,[o,t]}},Sr=null,Pr=null,_r=null,Or={injectFiberControlledHostComponent:function(e){Sr=e}},Nr=Object.freeze({injection:Or,enqueueStateRestore:G,restoreStateIfNeeded:X}),Ir=!1,Rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};wn.canUseDOM&&(yr=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var Mr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}},Dr=null,Ar=null,Fr=!1;wn.canUseDOM&&(Fr=ne("input")&&(!document.documentMode||9<document.documentMode));var Lr={eventTypes:Mr,_isInputEventSupported:Fr,extractEvents:function(e,t,n,r){var o=t?E(t):window,a=o.nodeName&&o.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===o.type)var i=ce;else if(ee(o))if(Fr)i=ge;else{i=he;var l=pe}else!(a=o.nodeName)||"input"!==a.toLowerCase()||"checkbox"!==o.type&&"radio"!==o.type||(i=me);if(i&&(i=i(e,t)))return le(i,n,r);l&&l(e,o,t),"topBlur"===e&&null!=t&&(e=t._wrapperState||o._wrapperState)&&e.controlled&&"number"===o.type&&(e=""+o.value,o.getAttribute("value")!==e&&o.setAttribute("value",e))}};j.augmentClass(ve,{view:null,detail:null});var Ur={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};ve.augmentClass(we,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:be,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)}});var jr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Hr={eventTypes:jr,extractEvents:function(e,t,n,r){if("topMouseOver"===e&&(n.relatedTarget||n.fromElement)||"topMouseOut"!==e&&"topMouseOver"!==e)return null;var o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window;if("topMouseOut"===e?(e=t,t=(t=n.relatedTarget||n.toElement)?T(t):null):e=null,e===t)return null;var a=null==e?o:E(e);o=null==t?o:E(t);var i=we.getPooled(jr.mouseLeave,e,n,r);return i.type="mouseleave",i.target=a,i.relatedTarget=o,n=we.getPooled(jr.mouseEnter,t,n,r),n.type="mouseenter",n.target=o,n.relatedTarget=a,A(i,n,e,t),[i,n]}},zr=bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vr=[],Br=!0,Wr=void 0,Kr=Object.freeze({get _enabled(){return Br},get _handleTopLevel(){return Wr},setHandleTopLevel:function(e){Wr=e},setEnabled:Oe,isEnabled:function(){return Br},trapBubbledEvent:Ne,trapCapturedEvent:Ie,dispatchEvent:Re}),qr={animationend:Me("Animation","AnimationEnd"),animationiteration:Me("Animation","AnimationIteration"),animationstart:Me("Animation","AnimationStart"),transitionend:Me("Transition","TransitionEnd")},$r={},Qr={};wn.canUseDOM&&(Qr=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);var Yr={topAbort:"abort",topAnimationEnd:De("animationend")||"animationend",topAnimationIteration:De("animationiteration")||"animationiteration",topAnimationStart:De("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:De("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Gr={},Xr=0,Jr="_reactListenersID"+(""+Math.random()).slice(2),Zr=wn.canUseDOM&&"documentMode"in document&&11>=document.documentMode,eo={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},to=null,no=null,ro=null,oo=!1,ao={eventTypes:eo,extractEvents:function(e,t,n,r){var o,a=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(o=!a)){e:{a=Ae(a),o=Gn.onSelect;for(var i=0;i<o.length;i++){var l=o[i];if(!a.hasOwnProperty(l)||!a[l]){a=!1;break e}}a=!0}o=!a}if(o)return null;switch(a=t?E(t):window,e){case"topFocus":(ee(a)||"true"===a.contentEditable)&&(to=a,no=t,ro=null);break;case"topBlur":ro=no=to=null;break;case"topMouseDown":oo=!0;break;case"topContextMenu":case"topMouseUp":return oo=!1,je(n,r);case"topSelectionChange":if(Zr)break;case"topKeyDown":case"topKeyUp":return je(n,r)}return null}};j.augmentClass(He,{animationName:null,elapsedTime:null,pseudoElement:null}),j.augmentClass(ze,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ve.augmentClass(Ve,{relatedTarget:null});var io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};ve.augmentClass(We,{key:function(e){if(e.key){var t=io[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?(e=Be(e),13===e?"Enter":String.fromCharCode(e)):"keydown"===e.type||"keyup"===e.type?lo[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:be,charCode:function(e){return"keypress"===e.type?Be(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Be(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),we.augmentClass(Ke,{dataTransfer:null}),ve.augmentClass(qe,{touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:be}),j.augmentClass($e,{propertyName:null,elapsedTime:null,pseudoElement:null}),we.augmentClass(Qe,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null});var uo={},so={};"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(e){var t=e[0].toUpperCase()+e.slice(1),n="on"+t;t="top"+t,n={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[t]},uo[e]=n,so[t]=n});var co={eventTypes:uo,extractEvents:function(e,t,n,r){var o=so[e];if(!o)return null;switch(e){case"topKeyPress":if(0===Be(n))return null;case"topKeyDown":case"topKeyUp":e=We;break;case"topBlur":case"topFocus":e=Ve;break;case"topClick":if(2===n.button)return null;case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":case"topMouseOut":case"topMouseOver":case"topContextMenu":e=we;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":e=Ke;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":e=qe;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":e=He;break;case"topTransitionEnd":e=$e;break;case"topScroll":e=ve;break;case"topWheel":e=Qe;break;case"topCopy":case"topCut":case"topPaste":e=ze;break;default:e=j}return t=e.getPooled(o,t,n,r),D(t),t}};Wr=function(e,t,n,r){e=k(e,t,n,r),C(e),x(!1)},nr.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),Jn=lr.getFiberCurrentPropsFromNode,Zn=lr.getInstanceFromNode,er=lr.getNodeFromInstance,nr.injectEventPluginsByName({SimpleEventPlugin:co,EnterLeaveEventPlugin:Hr,ChangeEventPlugin:Lr,SelectEventPlugin:ao,BeforeInputEventPlugin:Er});var fo=[],po=-1;new Set;var ho,mo,go,vo,yo={current:_n},bo={current:!1},wo=_n,ko=null,Co=null,xo="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,To=Array.isArray,Eo="function"==typeof Symbol&&Symbol.iterator;"function"==typeof Symbol&&Symbol.for?(ho=Symbol.for("react.element"),mo=Symbol.for("react.call"),go=Symbol.for("react.return"),vo=Symbol.for("react.fragment")):(ho=60103,mo=60104,go=60105,vo=60107);var So=_t(!0,!0),Po=_t(!1,!0),_o=_t(!1,!1),Oo={},No=Object.freeze({default:At}),Io=No&&At||No,Ro=Io.default?Io.default:Io,Mo="object"===("undefined"==typeof performance?"undefined":yn(performance))&&"function"==typeof performance.now,Do=void 0;Do=Mo?function(){return performance.now()}:function(){return Date.now()};var Ao=void 0;if(wn.canUseDOM)if("function"!=typeof requestIdleCallback){var Fo,Lo=null,Uo=!1,jo=!1,Ho=0,zo=33,Vo=33;Fo=Mo?{timeRemaining:function(){return Ho-performance.now()}}:{timeRemaining:function(){return Ho-Date.now()}};var Bo="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){e.source===window&&e.data===Bo&&(Uo=!1,e=Lo,Lo=null,null!==e&&e(Fo))},!1);var Wo=function(e){jo=!1;var t=e-Ho+Vo;t<Vo&&zo<Vo?(8>t&&(t=8),Vo=t<zo?zo:t):zo=t,Ho=e+Vo,Uo||(Uo=!0,window.postMessage(Bo,"*"))};Ao=function(e){return Lo=e,jo||(jo=!0,requestAnimationFrame(Wo)),0}}else Ao=requestIdleCallback;else Ao=function(e){return setTimeout(function(){e({timeRemaining:function(){return 1/0}})}),0};var Ko=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qo={},$o={},Qo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},Yo=void 0,Go=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if(e.namespaceURI!==Qo.svg||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}),Xo=/["'&<>]/;wn.canUseDOM&&("textContent"in document.documentElement||(en=function(e,t){if(3===e.nodeType)e.nodeValue=t;else{if("boolean"==typeof t||"number"==typeof t)t=""+t;else{t=""+t;var n=Xo.exec(t);if(n){var r,o="",a=0;for(r=n.index;r<t.length;r++){switch(t.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==r&&(o+=t.substring(a,r)),a=r+1,o+=n}t=a!==r?o+t.substring(a,r):o}}Go(e,t)}}));var Jo=en,Zo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ea=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(e){ea.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zo[t]=Zo[e]})});var ta=kn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),na=Qo.html,ra=Cn.thatReturns(""),oa={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},aa=Object.freeze({createElement:an,createTextNode:ln,setInitialProperties:un,diffProperties:sn,updateProperties:cn,diffHydratedProperties:dn,diffHydratedText:fn,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(e,t,n){switch(t){case"input":if(Vt(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=S(o);a||r("90"),Vt(o,a)}}}break;case"textarea":Gt(e,n);break;case"select":null!=(t=n.value)&&qt(e,!!n.multiple,t,!1)}}});Or.injectFiberControlledHostComponent(aa);var ia=null,la=null,ua=Ro({getRootHostContext:function(e){var t=e.nodeType;switch(t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zt(null,"");break;default:t=8===t?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zt(e,t)}return e},getChildHostContext:function(e,t){return Zt(e,t)},getPublicInstance:function(e){return e},prepareForCommit:function(){ia=Br;var e=Tn();if(Ue(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=window.getSelection&&window.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{t.nodeType,o.nodeType}catch(e){t=null;break e}var a=0,i=-1,l=-1,u=0,s=0,c=e,d=null;t:for(;;){for(var f;c!==t||0!==r&&3!==c.nodeType||(i=a+r),c!==o||0!==n&&3!==c.nodeType||(l=a+n),3===c.nodeType&&(a+=c.nodeValue.length),null!==(f=c.firstChild);)d=c,c=f;for(;;){if(c===e)break t;if(d===t&&++u===r&&(i=a),d===o&&++s===n&&(l=a),null!==(f=c.nextSibling))break;c=d,d=c.parentNode}c=f}t=-1===i||-1===l?null:{start:i,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;la={focusedElem:e,selectionRange:t},Oe(!1)},resetAfterCommit:function(){var e=la,t=Tn(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&Sn(document.documentElement,n)){if(Ue(n))if(t=r.start,e=r.end,void 0===e&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(window.getSelection){t=window.getSelection();var o=n[F()].length;e=Math.min(r.start,o),r=void 0===r.end?e:Math.min(r.end,o),!t.extend&&e>r&&(o=r,r=e,e=o),o=Le(n,e);var a=Le(n,r);if(o&&a&&(1!==t.rangeCount||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)){var i=document.createRange();i.setStart(o.node,o.offset),t.removeAllRanges(),e>r?(t.addRange(i),t.extend(a.node,a.offset)):(i.setEnd(a.node,a.offset),t.addRange(i))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(Pn(n),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}la=null,Oe(ia),ia=null},createInstance:function(e,t,n,r,o){return e=an(e,t,n,r),e[ar]=o,e[ir]=t,e},appendInitialChild:function(e,t){e.appendChild(t)},finalizeInitialChildren:function(e,t,n,r){un(e,t,n,r);e:{switch(t){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e}e=!1}return e},prepareUpdate:function(e,t,n,r,o){return sn(e,t,n,r,o)},shouldSetTextContent:function(e,t){return"textarea"===e||"string"==typeof t.children||"number"==typeof t.children||"object"===yn(t.dangerouslySetInnerHTML)&&null!==t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(e,t){return!!t.hidden},createTextInstance:function(e,t,n,r){return e=ln(e,t),e[ar]=r,e},now:Do,mutation:{commitMount:function(e){e.focus()},commitUpdate:function(e,t,n,r,o){e[ir]=o,cn(e,t,n,r,o)},resetTextContent:function(e){e.textContent=""},commitTextUpdate:function(e,t,n){e.nodeValue=n},appendChild:function(e,t){e.appendChild(t)},appendChildToContainer:function(e,t){8===e.nodeType?e.parentNode.insertBefore(t,e):e.appendChild(t)},insertBefore:function(e,t,n){e.insertBefore(t,n)},insertInContainerBefore:function(e,t,n){8===e.nodeType?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},removeChildFromContainer:function(e,t){8===e.nodeType?e.parentNode.removeChild(t):e.removeChild(t)}},hydration:{canHydrateInstance:function(e,t){return 1!==e.nodeType||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e},canHydrateTextInstance:function(e,t){return""===t||3!==e.nodeType?null:e},getNextHydratableSibling:function(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e},getFirstHydratableChild:function(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e},hydrateInstance:function(e,t,n,r,o,a){return e[ar]=a,e[ir]=n,dn(e,t,n,o,r)},hydrateTextInstance:function(e,t,n){return e[ar]=n,fn(e,t)},didNotMatchHydratedContainerTextInstance:function(){},didNotMatchHydratedTextInstance:function(){},didNotHydrateContainerInstance:function(){},didNotHydrateInstance:function(){},didNotFindHydratableContainerInstance:function(){},didNotFindHydratableContainerTextInstance:function(){},didNotFindHydratableInstance:function(){},didNotFindHydratableTextInstance:function(){}},scheduleDeferredCallback:Ao,useSyncScheduling:!0});J=ua.batchedUpdates,vn.prototype.render=function(e,t){ua.updateContainer(e,this._reactRootContainer,null,t)},vn.prototype.unmount=function(e){ua.updateContainer(null,this._reactRootContainer,null,e)};var sa={createPortal:gn,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(t)return ua.findHostInstance(t);"function"==typeof e.render?r("188"):r("213",Object.keys(e))},hydrate:function(e,t,n){return mn(null,e,t,!0,n)},render:function(e,t,n){return mn(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,o){return(null==e||void 0===e._reactInternalFiber)&&r("38"),mn(e,t,n,!1,o)},unmountComponentAtNode:function(e){return pn(e)||r("40"),!!e._reactRootContainer&&(ua.unbatchedUpdates(function(){mn(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:gn,unstable_batchedUpdates:Z,unstable_deferredUpdates:ua.deferredUpdates,flushSync:ua.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:rr,EventPluginRegistry:Xn,EventPropagators:ur,ReactControlledComponent:Nr,ReactDOMComponentTree:lr,ReactDOMEventListener:Kr}};ua.injectIntoDevTools({findFiberByHostInstance:T,bundleType:0,version:"16.1.1",rendererPackageName:"react-dom"});var ca=Object.freeze({default:sa}),da=ca&&sa||ca;e.exports=da.default?da.default:da},/* 29 */
/***/
function(e,t,n){"use strict";/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function r(e){return o(e)&&3==e.nodeType}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var o=n(30);e.exports=r},/* 30 */
/***/
function(e,t,n){"use strict";function r(e){var t=e?e.ownerDocument||e:document,n=t.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"===(void 0===e?"undefined":o(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=r},/* 31 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/** @license React v16.1.1
 * react-dom.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"production"!==t.env.NODE_ENV&&function(){function t(e,t){return(e&t)===t}/**
 * Checks whether a property name is a writeable attribute.
 * @method
 */
function o(e,t){if(l(e))return!1;if(e.length>2&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))return!1;if(null===t)return!0;switch(void 0===t?"undefined":r(t)){case"boolean":return i(e);case"undefined":case"number":case"string":case"object":return!0;default:// function, symbol
return!1}}function a(e){return ta.hasOwnProperty(e)?ta[e]:null}function i(e){if(l(e))return!0;var t=a(e);if(t)return t.hasBooleanValue||t.hasStringBooleanValue||t.hasOverloadedBooleanValue;var n=e.toLowerCase().slice(0,5);return"data-"===n||"aria-"===n}/**
 * Checks to see if a property name is within the list of properties
 * reserved for internal React operations. These properties should
 * not be set on an HTML element.
 *
 * @private
 * @param {string} name
 * @return {boolean} If the name is within reserved props
 */
function l(e){return Go.hasOwnProperty(e)}/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function u(){if(ka)for(var e in Ca){var t=Ca[e],n=ka.indexOf(e);if(n>-1||Fo(!1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e),!xa[n]){t.extractEvents||Fo(!1,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e),xa[n]=t;var r=t.eventTypes;for(var o in r)s(r[o],t,o)||Fo(!1,"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",o,e)}}}/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function s(e,t,n){Ta.hasOwnProperty(n)&&Fo(!1,"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",n),Ta[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];c(a,t,n)}return!0}return!!e.registrationName&&(c(e.registrationName,t,n),!0)}/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function c(e,t,n){Ea[e]&&Fo(!1,"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e),Ea[e]=t,Sa[e]=t.eventTypes[n].dependencies;var r=e.toLowerCase();Pa[r]=e,"onDoubleClick"===e&&(Pa.ondblclick=e)}// Trust the developer to only use possibleRegistrationNames in true
/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */
function d(e){ka&&Fo(!1,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."),// Clone the ordering so it cannot be dynamically mutated.
ka=Array.prototype.slice.call(e),u()}/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */
function f(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];Ca.hasOwnProperty(n)&&Ca[n]===r||(Ca[n]&&Fo(!1,"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",n),Ca[n]=r,t=!0)}t&&u()}/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function p(e,t,n,r){var o=e.type||"unknown-event";e.currentTarget=Ia(r),ga.invokeGuardedCallbackAndCatchFirstError(o,n,void 0,e),e.currentTarget=null}/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function h(e,t){var n=e._dispatchListeners,r=e._dispatchInstances;if(ba(e),Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)// Listeners and Instances are two parallel arrays that are always in sync.
p(e,t,n[o],r[o]);else n&&p(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null}/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */
function m(e,t){// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
return null==t&&Fo(!1,"accumulateInto(...): Accumulated items must not be null or undefined."),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */
function g(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function v(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function y(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":return!(!n.disabled||!v(t));default:return!1}}/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */
function b(e,t){var n,o=e.stateNode;if(!o)// Work in progress (ex: onload events in incremental mode).
return null;var a=Oa(o);return a?(n=a[t],y(t,e.type,a)?null:(n&&"function"!=typeof n&&Fo(!1,"Expected `%s` listener to be a function, instead got a value of `%s` type.",t,void 0===n?"undefined":r(n)),n)):null}/**
 * Allows registered plugins an opportunity to extract events from top-level
 * native browser events.
 *
 * @return {*} An accumulation of synthetic events.
 * @internal
 */
function w(e,t,n,r){for(var o,a=0;a<xa.length;a++){// Not every plugin in the ordering may be loaded at runtime.
var i=xa[a];if(i){var l=i.extractEvents(e,t,n,r);l&&(o=m(o,l))}}return o}/**
 * Enqueues a synthetic event that should be dispatched when
 * `processEventQueue` is invoked.
 *
 * @param {*} events An accumulation of synthetic events.
 * @internal
 */
function k(e){e&&(Ma=m(Ma,e))}/**
 * Dispatches all synthetic events on the event queue.
 *
 * @internal
 */
function C(e){// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var t=Ma;Ma=null,e?g(t,Aa):g(t,Fa),Ma&&Fo(!1,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."),// This would be a good time to rethrow if any of the event handlers threw.
ga.rethrowCaughtError()}function x(e,t){t[Xa]=e}/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function T(e){if(e[Xa])return e[Xa];for(// Walk up the tree until we find an ancestor whose instance we have cached.
var t=[];!e[Xa];){if(t.push(e),!e.parentNode)// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;e=e.parentNode}var n=void 0,r=e[Xa];if(r.tag===Wa||r.tag===Ka)// In Fiber, this will always be the deepest root.
return r;for(;e&&(r=e[Xa]);e=t.pop())n=r;return n}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function E(e){var t=e[Xa];return t&&(t.tag===Wa||t.tag===Ka)?t:null}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function S(e){if(e.tag===Wa||e.tag===Ka)// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return e.stateNode;// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
Fo(!1,"getNodeFromInstance: Invalid argument.")}function P(e){return e[Ja]||null}function _(e,t){e[Ja]=t}function O(e){do{e=e.return}while(e&&e.tag!==Wa);return e||null}/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function N(e,t){for(var n=0,r=e;r;r=O(r))n++;for(var o=0,a=t;a;a=O(a))o++;// If A is deeper, crawl up.
for(;n-o>0;)e=O(e),n--;// If B is deeper, crawl up.
for(;o-n>0;)t=O(t),o--;for(// Walk in lockstep until we find a match.
var i=n;i--;){if(e===t||e===t.alternate)return e;e=O(e),t=O(t)}return null}/**
 * Return if A is an ancestor of B.
 */
/**
 * Return the parent instance of the passed-in instance.
 */
function I(e){return O(e)}/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function R(e,t,n){for(var r=[];e;)r.push(e),e=O(e);var o;for(o=r.length;o-- >0;)t(r[o],"captured",n);for(o=0;o<r.length;o++)t(r[o],"bubbled",n)}/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function M(e,t,n,r,o){for(var a=e&&t?N(e,t):null,i=[];;){if(!e)break;if(e===a)break;var l=e.alternate;if(null!==l&&l===a)break;i.push(e),e=O(e)}for(var u=[];;){if(!t)break;if(t===a)break;var s=t.alternate;if(null!==s&&s===a)break;u.push(t),t=O(t)}for(var c=0;c<i.length;c++)n(i[c],"bubbled",r);for(var d=u.length;d-- >0;)n(u[d],"captured",o)}/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function D(e,t,n){return b(e,t.dispatchConfig.phasedRegistrationNames[n])}/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 */
/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function A(e,t,n){Lo(e,"Dispatching inst must not be null");var r=D(e,n,t);r&&(n._dispatchListeners=m(n._dispatchListeners,r),n._dispatchInstances=m(n._dispatchInstances,e))}/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function F(e){e&&e.dispatchConfig.phasedRegistrationNames&&R(e._targetInst,A,e)}/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function L(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst;R(t?I(t):null,A,e)}}/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function U(e,t,n){if(e&&n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=b(e,r);o&&(n._dispatchListeners=m(n._dispatchListeners,o),n._dispatchInstances=m(n._dispatchInstances,e))}}/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function j(e){e&&e.dispatchConfig.registrationName&&U(e._targetInst,null,e)}function H(e){g(e,F)}function z(e){g(e,L)}function V(e,t,n,r){M(n,r,U,e,t)}function B(e){g(e,j)}/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function W(){// Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
return!ti&&Uo.canUseDOM&&(ti="textContent"in document.documentElement?"textContent":"innerText"),ti}function K(e){return ni._root=e,ni._startText=Q(),!0}function q(){ni._root=null,ni._startText=null,ni._fallbackText=null}function $(){if(ni._fallbackText)return ni._fallbackText;var e,t,n=ni._startText,r=n.length,o=Q(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);var l=t>1?1-t:void 0;return ni._fallbackText=o.slice(e,l),ni._fallbackText}function Q(){return"value"in ni._root?ni._root.value:ni._root[W()]}/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function Y(e,t,n,r){// these have a getter/setter for warnings
delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation,this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var a in o)if(o.hasOwnProperty(a)){delete this[a];var i=o[a];i?this[a]=i(n):"target"===a?this.target=r:this[a]=n[a]}var l=null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue;return this.isDefaultPrevented=l?Ho.thatReturnsTrue:Ho.thatReturnsFalse,this.isPropagationStopped=Ho.thatReturnsFalse,this}/**
 * Helper to nullify syntheticEvent instance properties when destructing
 *
 * @param {String} propName
 * @param {?object} getVal
 * @return {object} defineProperty object
 */
function G(e,t){function n(e){return o(a?"setting the method":"setting the property","This is effectively a no-op"),e}function r(){return o(a?"accessing the method":"accessing the property",a?"This is a no-op function":"This is set to null"),t}function o(t,n){Lo(!1,"This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",t,e,n)}var a="function"==typeof t;return{configurable:!0,set:n,get:r}}function X(e,t,n,r){var o=this;if(o.eventPool.length){var a=o.eventPool.pop();return o.call(a,e,t,n,r),a}return new o(e,t,n,r)}function J(e){var t=this;e instanceof t||Fo(!1,"Trying to release an event instance  into a pool of a different type."),e.destructor(),t.eventPool.length<ai&&t.eventPool.push(e)}function Z(e){e.eventPool=[],e.getPooled=X,e.release=J}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function ee(e,t,n,r){return ui.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function te(e,t,n,r){return ui.call(this,e,t,n,r)}/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function ne(e){// ctrlKey && altKey is equivalent to AltGr, and is not a command.
return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function re(e){switch(e){case"topCompositionStart":return wi.compositionStart;case"topCompositionEnd":return wi.compositionEnd;case"topCompositionUpdate":return wi.compositionUpdate}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function oe(e,t){return"topKeyDown"===e&&t.keyCode===fi}/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function ae(e,t){switch(e){case"topKeyUp":// Command keys insert or clear IME input.
return-1!==di.indexOf(t.keyCode);case"topKeyDown":// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return t.keyCode!==fi;case"topKeyPress":case"topMouseDown":case"topBlur":// Events are not possible without cancelling IME.
return!0;default:return!1}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function ie(e){var t=e.detail;return"object"===(void 0===t?"undefined":r(t))&&"data"in t?t.data:null}/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function le(e,t,n,r){var o,a;if(pi?o=re(e):Ci?ae(e,n)&&(o=wi.compositionEnd):oe(e,n)&&(o=wi.compositionStart),!o)return null;vi&&(// The current composition is stored statically and must not be
// overwritten while composition continues.
Ci||o!==wi.compositionStart?o===wi.compositionEnd&&Ci&&(a=$()):Ci=K(r));var i=ee.getPooled(o,t,n,r);if(a)// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
i.data=a;else{var l=ie(n);null!==l&&(i.data=l)}return H(i),i}/**
 * @param {TopLevelTypes} topLevelType Record from `BrowserEventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function ue(e,t){switch(e){case"topCompositionEnd":return ie(t);case"topKeyPress":return t.which!==yi?null:(ki=!0,bi);case"topTextInput":// Record the characters to be added to the DOM.
var n=t.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
return n===bi&&ki?null:n;default:// For other native event types, do nothing.
return null}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function se(e,t){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(Ci){if("topCompositionEnd"===e||!pi&&ae(e,t)){var n=$();return q(),Ci=!1,n}return null}switch(e){case"topPaste":// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case"topKeyPress":/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
if(!ne(t)){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"topCompositionEnd":return vi?null:t.data;default:return null}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */
function ce(e,t,n,r){var o;// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(o=gi?ue(e,n):se(e,n)))return null;var a=te.getPooled(wi.beforeInput,t,n,r);return a.data=o,H(a),a}function de(e){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var t=Na(e);if(t){Ti&&"function"==typeof Ti.restoreControlledState||Fo(!1,"Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=Oa(t.stateNode);Ti.restoreControlledState(t.stateNode,t.type,n)}}function fe(e){Si?Pi?Pi.push(e):Pi=[e]:Si=e}function pe(){if(Si){var e=Si,t=Pi;if(Si=null,Pi=null,de(e),t)for(var n=0;n<t.length;n++)de(t[n])}}function he(e,t){if(Ii)// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state. Therefore, we add the target to
// a queue of work.
return Ni(e,t);Ii=!0;try{return Ni(e,t)}finally{// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
Ii=!1,pe()}}function me(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Di[e.type]:"textarea"===t}/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function ge(e){var t=e.target||e.srcElement||window;// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
// Normalize SVG <use> element events #4963
return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===Fi?t.parentNode:t}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function ve(e,t){if(!Uo.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var o=document.createElement("div");o.setAttribute(n,"return;"),r="function"==typeof o[n]}// This is the only way to test support for the `wheel` event in IE9+.
return!r&&mi&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}function ye(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function be(e){return e._valueTracker}function we(e){e._valueTracker=null}function ke(e){var t="";return e?t=ye(e)?e.checked?"true":"false":e.value:t}function Ce(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!e.hasOwnProperty(t)&&"function"==typeof n.get&&"function"==typeof n.set){Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:!0,get:function(){return n.get.call(this)},set:function(e){r=""+e,n.set.call(this,e)}});return{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){we(e),delete e[t]}}}}function xe(e){be(e)||(// TODO: Once it's just Fiber we can move this to node._wrapperState
e._valueTracker=Ce(e))}function Te(e){if(!e)return!1;var t=be(e);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!t)return!0;var n=t.getValue(),r=ke(e);return r!==n&&(t.setValue(r),!0)}function Ee(e,t,n){var r=ui.getPooled(Hi.change,e,t,n);// Flag this event loop as needing state restore.
return r.type="change",fe(n),H(r),r}/**
 * SECTION: handle `change` event
 */
function Se(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function Pe(e){// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
he(_e,Ee(Vi,e,ge(e)))}function _e(e){k(e),C(!1)}function Oe(e){if(Te(S(e)))return e}function Ne(e,t){if("topChange"===e)return t}/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function Ie(e,t){zi=e,Vi=t,zi.attachEvent("onpropertychange",Me)}/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function Re(){zi&&(zi.detachEvent("onpropertychange",Me),zi=null,Vi=null)}/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function Me(e){"value"===e.propertyName&&Oe(Vi)&&Pe(e)}function De(e,t,n){"topFocus"===e?(// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
Re(),Ie(t,n)):"topBlur"===e&&Re()}// For IE8 and IE9.
function Ae(e,t){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return Oe(Vi)}/**
 * SECTION: handle `click` event
 */
function Fe(e){// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function Le(e,t){if("topClick"===e)return Oe(t)}function Ue(e,t){if("topInput"===e||"topChange"===e)return Oe(t)}function je(e,t){// TODO: In IE, inst is occasionally null. Why?
if(null!=e){// Fiber and ReactDOM keep wrapper state in separate places
var n=e._wrapperState||t._wrapperState;if(n&&n.controlled&&"number"===t.type){// If controlled, assign the value attribute to the current value on blur
var r=""+t.value;t.getAttribute("value")!==r&&t.setAttribute("value",r)}}}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function He(e,t,n,r){return ui.call(this,e,t,n,r)}// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function ze(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=$i[e];return!!r&&!!n[r]}function Ve(e){return ze}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function Be(e,t,n,r){return He.call(this,e,t,n,r)}/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */
/**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */
function We(e){return e._reactInternalFiber}function Ke(e){return void 0!==e._reactInternalFiber}function qe(e,t){e._reactInternalFiber=t}function $e(e){var t=e.type;return"string"==typeof t?t:"function"==typeof t?t.displayName||t.name:null}function Qe(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
if((t.effectTag&nl)!==el)return cl;for(;t.return;)if(t=t.return,(t.effectTag&nl)!==el)return cl}return t.tag===Va?dl:fl}function Ye(e){return Qe(e)===dl}function Ge(e){var t=Ji.current;if(null!==t&&t.tag===za){var n=t,r=n.stateNode;Lo(r._warnedAboutRefsInRender,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",$e(n)||"A component"),r._warnedAboutRefsInRender=!0}var o=We(e);return!!o&&Qe(o)===dl}function Xe(e){Qe(e)!==dl&&Fo(!1,"Unable to find node on an unmounted component.")}function Je(e){var t=e.alternate;if(!t){// If there is no alternate, then we only need to check if it is mounted.
var n=Qe(e);return n===fl&&Fo(!1,"Unable to find node on an unmounted component."),n===cl?null:e}for(// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var r=e,o=t;;){var a=r.return,i=a?a.alternate:null;if(!a||!i)// We're at the root.
break;// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(a.child===i.child){for(var l=a.child;l;){if(l===r)// We've determined that A is the current branch.
return Xe(a),e;if(l===o)// We've determined that B is the current branch.
return Xe(a),t;l=l.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
Fo(!1,"Unable to find node on an unmounted component.")}if(r.return!==o.return)// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
r=a,o=i;else{for(// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var u=!1,s=a.child;s;){if(s===r){u=!0,r=a,o=i;break}if(s===o){u=!0,o=a,r=i;break}s=s.sibling}if(!u){for(// Search parent B's child set
s=i.child;s;){if(s===r){u=!0,r=i,o=a;break}if(s===o){u=!0,o=i,r=a;break}s=s.sibling}u||Fo(!1,"Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}r.alternate!==o&&Fo(!1,"Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
return r.tag!==Va&&Fo(!1,"Unable to find node on an unmounted component."),r.stateNode.current===r?e:t}function Ze(e){var t=Je(e);if(!t)return null;for(// Next we'll drill down this component to find the first HostComponent/Text.
var n=t;;){if(n.tag===Wa||n.tag===Ka)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}function et(e){var t=Je(e);if(!t)return null;for(// Next we'll drill down this component to find the first HostComponent/Text.
var n=t;;){if(n.tag===Wa||n.tag===Ka)return n;if(n.child&&n.tag!==Ba)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function tt(e){// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
for(;e.return;)e=e.return;return e.tag!==Va?null:e.stateNode.containerInfo}// Used to store ancestor hierarchy in top level callback
function nt(e,t,n){if(hl.length){var r=hl.pop();return r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,r}return{topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]}}function rt(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,hl.length<pl&&hl.push(e)}function ot(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=tt(n);if(!r)break;e.ancestors.push(n),n=T(r)}while(n);for(var o=0;o<e.ancestors.length;o++)t=e.ancestors[o],gl(e.topLevelType,t,e.nativeEvent,ge(e.nativeEvent))}function at(e){gl=e}function it(e){ml=!!e}function lt(){return ml}/**
 * Traps top-level events by using event bubbling.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {string} handlerBaseName Event name (e.g. "click").
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */
function ut(e,t,n){return n?zo.listen(n,t,ct.bind(null,e)):null}/**
 * Traps a top-level event by using event capturing.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {string} handlerBaseName Event name (e.g. "click").
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */
function st(e,t,n){return n?zo.capture(n,t,ct.bind(null,e)):null}function ct(e,t){if(ml){var n=ge(t),r=T(n);null===r||"number"!=typeof r.tag||Ye(r)||(// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
r=null);var o=nt(e,t,r);try{// Event queue being processed in the same cycle allows
// `preventDefault`.
he(ot,o)}finally{rt(o)}}}/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function dt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function ft(e){if(bl[e])return bl[e];if(!yl[e])return e;var t=yl[e];for(var n in t)if(t.hasOwnProperty(n)&&n in wl)return bl[e]=t[n];return""}function pt(e){k(e),C(!1)}/**
 * Streams a fired top-level event to `EventPluginHub` where plugins have the
 * opportunity to create `ReactEvent`s to be dispatched.
 */
function ht(e,t,n,r){pt(w(e,t,n,r))}function mt(e){// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
return Object.prototype.hasOwnProperty.call(e,Sl)||(e[Sl]=El++,Tl[e[Sl]]={}),Tl[e[Sl]]}/**
 * We listen for bubbled touch events on the document object.
 *
 * Firefox v8.01 (and possibly others) exhibited strange behavior when
 * mounting `onmousemove` events at some node that was not the document
 * element. The symptoms were that if your mouse is not moving over something
 * contained within that mount point (for example on the background) the
 * top-level listeners for `onmousemove` won't be called. However, if you
 * register the `mousemove` on the document object, then it will of course
 * catch all `mousemove`s. This along with iOS quirks, justifies restricting
 * top-level listeners to the document object only, at least for these
 * movement types of events and possibly all events.
 *
 * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
 *
 * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
 * they bubble to document.
 *
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @param {object} contentDocumentHandle Document which owns the container
 */
function gt(e,t){for(var n=t,r=mt(n),o=Sa[e],a=0;a<o.length;a++){var i=o[a];r.hasOwnProperty(i)&&r[i]||("topWheel"===i?ve("wheel")?ut("topWheel","wheel",n):ve("mousewheel")?ut("topWheel","mousewheel",n):// Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ut("topWheel","DOMMouseScroll",n):"topScroll"===i?st("topScroll","scroll",n):"topFocus"===i||"topBlur"===i?(st("topFocus","focus",n),st("topBlur","blur",n),// to make sure blur and focus event listeners are only attached once
r.topBlur=!0,r.topFocus=!0):"topCancel"===i?(ve("cancel",!0)&&st("topCancel","cancel",n),r.topCancel=!0):"topClose"===i?(ve("close",!0)&&st("topClose","close",n),r.topClose=!0):xl.hasOwnProperty(i)&&ut(i,xl[i],n),r[i]=!0)}}function vt(e,t){for(var n=mt(t),r=Sa[e],o=0;o<r.length;o++){var a=r[o];if(!n.hasOwnProperty(a)||!n[a])return!1}return!0}/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function yt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function bt(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function wt(e,t){for(var n=yt(e),r=0,o=0;n;){if(n.nodeType===Fi){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=yt(bt(n))}}/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */
function kt(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,r=t.anchorOffset,o=t.focusNode,a=t.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */n.nodeType,o.nodeType}catch(e){return null}return Ct(e,n,r,o,a)}/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */
function Ct(e,t,n,r,o){var a=0,i=-1,l=-1,u=0,s=0,c=e,d=null;e:for(;;){for(var f=null;;){if(c!==t||0!==n&&c.nodeType!==Fi||(i=a+n),c!==r||0!==o&&c.nodeType!==Fi||(l=a+o),c.nodeType===Fi&&(a+=c.nodeValue.length),null===(f=c.firstChild))break;// Moving from `node` to its first child `next`.
d=c,c=f}for(;;){if(c===e)// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break e;if(d===t&&++u===n&&(i=a),d===r&&++s===o&&(l=a),null!==(f=c.nextSibling))break;c=d,d=c.parentNode}// Moving from `node` to its next sibling `next`.
c=f}return-1===i||-1===l?null:{start:i,end:l}}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function xt(e,t){if(window.getSelection){var n=window.getSelection(),r=e[W()].length,o=Math.min(t.start,r),a=void 0===t.end?o:Math.min(t.end,r);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!n.extend&&o>a){var i=a;a=o,o=i}var l=wt(e,o),u=wt(e,a);if(l&&u){if(1===n.rangeCount&&n.anchorNode===l.node&&n.anchorOffset===l.offset&&n.focusNode===u.node&&n.focusOffset===u.offset)return;var s=document.createRange();s.setStart(l.node,l.offset),n.removeAllRanges(),o>a?(n.addRange(s),n.extend(u.node,u.offset)):(s.setEnd(u.node,u.offset),n.addRange(s))}}}function Tt(e){return Wo(document.documentElement,e)}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
function Et(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)}function St(){var e=Vo();return{focusedElem:e,selectionRange:Et(e)?_t(e):null}}/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */
function Pt(e){var t=Vo(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&Tt(n)){Et(n)&&Ot(n,r);for(// Focusing a node can change the scroll position, which is undesirable
var o=[],a=n;a=a.parentNode;)a.nodeType===Ai&&o.push({element:a,left:a.scrollLeft,top:a.scrollTop});Ko(n);for(var i=0;i<o.length;i++){var l=o[i];l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}}/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */
function _t(e){return("selectionStart"in e?{start:e.selectionStart,end:e.selectionEnd}:kt(e))||{start:0,end:0}}/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */
function Ot(e,t){var n=t.start,r=t.end;void 0===r&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):xt(e,t)}/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function Nt(e){if("selectionStart"in e&&Et(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function It(e,t){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(Rl||null==Ol||Ol!==Vo())return null;// Only fire when selection has actually changed.
var n=Nt(Ol);if(!Il||!Bo(Il,n)){Il=n;var r=ui.getPooled(_l.select,Nl,e,t);return r.type="select",r.target=Ol,H(r),r}return null}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function Rt(e,t,n,r){return ui.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function Mt(e,t,n,r){return ui.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function Dt(e,t,n,r){return He.call(this,e,t,n,r)}/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function At(e){var t,n=e.keyCode;// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
// FF does not set `charCode` for the Enter-key, check against `keyCode`.
// IE8 does not implement `charCode`, but `keyCode` has the correct value.
// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in e?0===(t=e.charCode)&&13===n&&(t=13):t=n,t>=32||13===t?t:0}/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function Ft(e){if(e.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var t=Ll[e.key]||e.key;if("Unidentified"!==t)return t}// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=At(e);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?Ul[e.keyCode]||"Unidentified":""}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function Lt(e,t,n,r){return He.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function Ut(e,t,n,r){return Be.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function jt(e,t,n,r){return He.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function Ht(e,t,n,r){return ui.call(this,e,t,n,r)}/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function zt(e,t,n,r){return Be.call(this,e,t,n,r)}function Vt(e){return{current:e}}function Bt(e,t){if(tu<0)return void Lo(!1,"Unexpected pop.");t!==eu[tu]&&Lo(!1,"Unexpected Fiber popped."),e.current=Zl[tu],Zl[tu]=null,eu[tu]=null,tu--}function Wt(e,t,n){tu++,Zl[tu]=e.current,eu[tu]=n,e.current=t}function Kt(){for(;tu>-1;)Zl[tu]=null,eu[tu]=null,tu--}function qt(e){switch(e.tag){case ja:case Ha:case za:case Wa:var t=e._debugOwner,n=e._debugSource,r=$e(e),o=null;return t&&(o=$e(t)),nu(r,n,o);default:return""}}// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function $t(e){var t="",n=e;do{t+=qt(n),// Otherwise this return pointer might point to the wrong tree:
n=n.return}while(n);return t}function Qt(){var e=ru.current;if(null===e)return null;var t=e._debugOwner;return null!==t&&void 0!==t?$e(t):null}function Yt(){var e=ru.current;return null===e?null:$t(e)}function Gt(){Zi.getCurrentStack=null,ru.current=null,ru.phase=null}function Xt(e){Zi.getCurrentStack=Yt,ru.current=e,ru.phase=null}function Jt(e){ru.phase=e}function Zt(){Gl&&fu++}function en(){Gl&&(uu&&(su=!0),null!==iu&&"componentWillMount"!==iu&&"componentWillReceiveProps"!==iu&&(cu=!0))}function tn(){Gl&&ou&&!pu&&(pu=!0,vu("(Waiting for async callback...)"))}function nn(e){if(Gl&&ou){pu=!1;bu("(Waiting for async callback...)","(Waiting for async callback...)",e?"React was blocked by main thread":null)}}function rn(e){if(Gl){if(!ou||Eu(e))return;if(// If we pause, this is the fiber to unwind from.
au=e,!Cu(e,null))return;e._debugIsCurrentlyTiming=!0}}function on(e){if(Gl){if(!ou||Eu(e))return;// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
e._debugIsCurrentlyTiming=!1,xu(e,null)}}function an(e){if(Gl){if(!ou||Eu(e))return;if(// If we pause, its parent is the fiber to unwind from.
au=e.return,!e._debugIsCurrentlyTiming)return;e._debugIsCurrentlyTiming=!1,Tu(e,null,null)}}function ln(e){if(Gl){if(!ou||Eu(e))return;if(// If we pause, its parent is the fiber to unwind from.
au=e.return,!e._debugIsCurrentlyTiming)return;e._debugIsCurrentlyTiming=!1;Tu(e,null,"An error was thrown inside this error boundary")}}function un(e,t){if(Gl){if(!ou)return;if(Su(),!Cu(e,t))return;lu=e,iu=t}}function sn(){if(Gl){if(!ou)return;if(null!==iu&&null!==lu){Tu(lu,iu,cu?"Scheduled a cascading update":null)}iu=null,lu=null}}function cn(e){if(Gl){if(au=e,!ou)return;du=0,// This is top level call.
// Any other measurements are performed within.
vu("(React Tree Reconciliation)"),// Resume any measurements that were in progress during the last loop.
Ou()}}function dn(e){if(Gl){if(!ou)return;var t=null;if(null!==e)if(e.tag===Va)t="A top-level update interrupted the previous render";else{var n=$e(e)||"Unknown";t="An update to "+n+" interrupted the previous render"}else du>1&&(t="There were cascading updates");du=0,// Pause any measurements until the next loop.
Pu(),bu("(React Tree Reconciliation)","(React Tree Reconciliation)",t)}}function fn(){if(Gl){if(!ou)return;uu=!0,su=!1,hu.clear(),vu("(Committing Changes)")}}function pn(){if(Gl){if(!ou)return;var e=null;su?e="Lifecycle hook scheduled a cascading update":du>0&&(e="Caused by a cascading update in earlier commit"),su=!1,du++,uu=!1,hu.clear(),bu("(Committing Changes)","(Committing Changes)",e)}}function hn(){if(Gl){if(!ou)return;fu=0,vu("(Committing Host Effects)")}}function mn(){if(Gl){if(!ou)return;var e=fu;fu=0,bu("(Committing Host Effects: "+e+" Total)","(Committing Host Effects)",null)}}function gn(){if(Gl){if(!ou)return;fu=0,vu("(Calling Lifecycle Methods)")}}function vn(){if(Gl){if(!ou)return;var e=fu;fu=0,bu("(Calling Lifecycle Methods: "+e+" Total)","(Calling Lifecycle Methods)",null)}}function yn(e){return xn(e)?Mu:Iu.current}function bn(e,t,n){var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}function wn(e,t){var n=e.type,r=n.contextTypes;if(!r)return qo;// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={};for(var i in r)a[i]=t[i];var l=$e(e)||"Unknown";// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
return $o(r,a,"context",l,ru.getCurrentFiberStackAddendum),o&&bn(e,t,a),a}function kn(){return Ru.current}function Cn(e){return e.tag===za&&null!=e.type.contextTypes}function xn(e){return e.tag===za&&null!=e.type.childContextTypes}function Tn(e){xn(e)&&(Bt(Ru,e),Bt(Iu,e))}function En(e){Bt(Ru,e),Bt(Iu,e)}function Sn(e,t,n){null!=Iu.cursor&&Fo(!1,"Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."),Wt(Iu,t,e),Wt(Ru,n,e)}function Pn(e,t){var n=e.stateNode,r=e.type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!=typeof n.getChildContext){var o=$e(e)||"Unknown";return Nu[o]||(Nu[o]=!0,Lo(!1,"%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",o,o)),t}var a=void 0;ru.setCurrentPhase("getChildContext"),un(e,"getChildContext"),a=n.getChildContext(),sn(),ru.setCurrentPhase(null);for(var i in a)i in r||Fo(!1,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',$e(e)||"Unknown",i);var l=$e(e)||"Unknown";// In practice, there is one case in which we won't get a stack. It's when
// somebody calls unstable_renderSubtreeIntoContainer() and we process
// context from the parent component instance. The stack will be missing
// because it's outside of the reconciliation, and so the pointer has not
// been set. This is rare and doesn't matter. We'll also remove that API.
return $o(r,a,"child context",l,ru.getCurrentFiberStackAddendum),jo({},t,a)}function _n(e){if(!xn(e))return!1;var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||qo;// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
return Mu=Iu.current,Wt(Iu,n,e),Wt(Ru,Ru.current,e),!0}function On(e,t){var n=e.stateNode;if(n||Fo(!1,"Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."),t){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var r=Pn(e,Mu);n.__reactInternalMemoizedMergedChildContext=r,// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
Bt(Ru,e),Bt(Iu,e),// Now push the new context and mark that it has changed.
Wt(Iu,r,e),Wt(Ru,t,e)}else Bt(Ru,e),Wt(Ru,t,e)}function Nn(){Mu=qo,Iu.current=qo,Ru.current=!1}function In(e){// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
Ye(e)&&e.tag===za||Fo(!1,"Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");for(var t=e;t.tag!==Va;){if(xn(t))return t.stateNode.__reactInternalMemoizedMergedChildContext;var n=t.return;n||Fo(!1,"Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."),t=n}return t.stateNode.context}// 1 unit of expiration time represents 10ms.
function Rn(e){// Always add an offset so that we don't clash with the magic number for NoWork.
return(e/Lu|0)+Uu}function Mn(e,t){return(1+(e/t|0))*t}function Dn(e,t,n){return Mn(e+t/Lu,n/Lu)}function An(e,t,n){// Instance
this.tag=e,this.key=t,this.type=null,this.stateNode=null,// Fiber
this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=null,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.internalContextTag=n,// Effects
this.effectTag=el,this.nextEffect=null,this.firstEffect=null,this.lastEffect=null,this.expirationTime=Du,this.alternate=null,this._debugID=Bu++,this._debugSource=null,this._debugOwner=null,this._debugIsCurrentlyTiming=!1,zu||"function"!=typeof Object.preventExtensions||Object.preventExtensions(this)}function Fn(e){return!(!e.prototype||!e.prototype.isReactComponent)}// This is used to create an alternate fiber to do work on.
function Ln(e,t,n){var r=e.alternate;// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
// DEV-only fields
// We already have an alternate.
// Reset the effect tag.
// The effect list is no longer valid.
// These will be overridden during the parent's reconciliation
return null===r?(r=Wu(e.tag,e.key,e.internalContextTag),r.type=e.type,r.stateNode=e.stateNode,r._debugID=e._debugID,r._debugSource=e._debugSource,r._debugOwner=e._debugOwner,r.alternate=e,e.alternate=r):(r.effectTag=el,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.expirationTime=n,r.pendingProps=t,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Un(){return Wu(Va,null,ju)}function jn(e,t,n){var o=null;o=e._owner;var a=void 0,i=e.type,l=e.key;if("function"==typeof i)a=Fn(i)?Wu(za,l,t):Wu(ja,l,t),a.type=i,a.pendingProps=e.props;else if("string"==typeof i)a=Wu(Wa,l,t),a.type=i,a.pendingProps=e.props;else if("object"===(void 0===i?"undefined":r(i))&&null!==i&&"number"==typeof i.tag)// Currently assumed to be a continuation and therefore is a fiber already.
// TODO: The yield system is currently broken for updates in some cases.
// The reified yield stores a fiber, but we don't know which fiber that is;
// the current or a workInProgress? When the continuation gets rendered here
// we don't know if we can reuse that fiber or if we need to clone it.
// There is probably a clever way to restructure this.
a=i,a.pendingProps=e.props;else{var u="";(void 0===i||"object"===(void 0===i?"undefined":r(i))&&null!==i&&0===Object.keys(i).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var s=o?$e(o):null;s&&(u+="\n\nCheck the render method of `"+s+"`."),Fo(!1,"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==i?i:void 0===i?"undefined":r(i),u)}return a._debugSource=e._source,a._debugOwner=e._owner,a.expirationTime=n,a}function Hn(e,t,n,r){var o=Wu(Ya,r,t);return o.pendingProps=e,o.expirationTime=n,o}function zn(e,t,n){var r=Wu(Ka,null,t);return r.pendingProps=e,r.expirationTime=n,r}function Vn(){var e=Wu(Wa,null,ju);return e.type="DELETED",e}function Bn(e,t,n){var r=Wu(qa,e.key,t);return r.type=e.handler,r.pendingProps=e,r.expirationTime=n,r}function Wn(e,t,n){var r=Wu(Qa,null,t);return r.expirationTime=n,r}function Kn(e,t,n){var r=Wu(Ba,e.key,t);return r.pendingProps=e.children||[],r.expirationTime=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:e.implementation},r}function qn(e,t){// Cyclic construction. This cheats the type system right now because
// stateNode is any.
var n=Un(),r={current:n,containerInfo:e,pendingChildren:null,remainingExpirationTime:Du,isReadyForCommit:!1,finishedWork:null,context:null,pendingContext:null,hydrate:t,nextScheduledRoot:null};return n.stateNode=r,r}function $n(e){return function(t){try{return e(t)}catch(e){$u||($u=!0,Lo(!1,"React DevTools encountered an error: %s",e))}}}function Qn(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)// No DevTools
return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!t.supportsFiber)// DevTools exists, even though it doesn't support Fiber.
return Lo(!1,"The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"),!0;try{var n=t.inject(e);// We have successfully injected, so now it is safe to set up hooks.
Ku=$n(function(e){return t.onCommitFiberRoot(n,e)}),qu=$n(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){Lo(!1,"React DevTools encountered an error: %s.",e)}// DevTools exists
return!0}function Yn(e){"function"==typeof Ku&&Ku(e)}function Gn(e){"function"==typeof qu&&qu(e)}// Callbacks are not validated until invocation
// Singly linked-list of updates. When an update is scheduled, it is added to
// the queue of the current fiber and the work-in-progress fiber. The two queues
// are separate but they share a persistent structure.
//
// During reconciliation, updates are removed from the work-in-progress fiber,
// but they remain on the current fiber. That ensures that if a work-in-progress
// is aborted, the aborted updates are recovered by cloning from current.
//
// The work-in-progress queue is always a subset of the current queue.
//
// When the tree is committed, the work-in-progress becomes the current.
function Xn(e){var t={baseState:e,expirationTime:Du,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1};return t.isProcessing=!1,t}function Jn(e,t){// Append the update to the end of the list.
null===e.last?// Queue is empty
e.first=e.last=t:(e.last.next=t,e.last=t),(e.expirationTime===Du||e.expirationTime>t.expirationTime)&&(e.expirationTime=t.expirationTime)}function Zn(e,t){// We'll have at least one and at most two distinct update queues.
var n=e.alternate,r=e.updateQueue;null===r&&(// TODO: We don't know what the base state will be until we begin work.
// It depends on which fiber is the next current. Initialize with an empty
// base state, then set to the memoizedState when rendering. Not super
// happy with this approach.
r=e.updateQueue=Xn(null));var o=void 0;// If there's only one queue, add the update to that queue and exit.
// If there's only one queue, add the update to that queue and exit.
// If either queue is empty, we need to add to both queues.
// If both lists are not empty, the last update is the same for both lists
// because of structural sharing. So, we should only append to one of
// the lists.
// But we still need to update the `last` pointer of queue2.
return null!==n?null===(o=n.updateQueue)&&(o=n.updateQueue=Xn(null)):o=null,o=o!==r?o:null,(r.isProcessing||null!==o&&o.isProcessing)&&!Qu&&(Lo(!1,"An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),Qu=!0),null===o?void Jn(r,t):null===r.last||null===o.last?(Jn(r,t),void Jn(o,t)):(Jn(r,t),void(o.last=t))}function er(e){if(e.tag!==za&&e.tag!==Va)return Du;var t=e.updateQueue;return null===t?Du:t.expirationTime}function tr(e,t,n,r){var o=e.partialState;if("function"==typeof o){return o.call(t,n,r)}return o}function nr(e,t,n,r,o,a){if(null!==e&&e.updateQueue===n){// We need to create a work-in-progress queue, by cloning the current queue.
var i=n;n=t.updateQueue={baseState:i.baseState,expirationTime:i.expirationTime,first:i.first,last:i.last,isInitialized:i.isInitialized,// These fields are no longer valid because they were already committed.
// Reset them.
callbackList:null,hasForceUpdate:!1}}// Set this flag so we can warn if setState is called inside the update
// function of another setState.
n.isProcessing=!0,// Reset the remaining expiration time. If we skip over any updates, we'll
// increase this accordingly.
n.expirationTime=Du;// TODO: We don't know what the base state will be until we begin work.
// It depends on which fiber is the next current. Initialize with an empty
// base state, then set to the memoizedState when rendering. Not super
// happy with this approach.
var l=void 0;n.isInitialized?l=n.baseState:(l=n.baseState=t.memoizedState,n.isInitialized=!0);for(var u=!0,s=n.first,c=!1;null!==s;){var d=s.expirationTime;if(d>a){// This update does not have sufficient priority. Skip it.
var f=n.expirationTime;(f===Du||f>d)&&(// Update the remaining expiration time.
n.expirationTime=d),c||(c=!0,n.baseState=l),// Continue to the next update.
s=s.next}else{// This update does have sufficient priority.
// If no previous updates were skipped, drop this update from the queue by
// advancing the head of the list.
c||(n.first=s.next,null===n.first&&(n.last=null));// Process the update
var p=void 0;if(s.isReplace?(l=tr(s,r,l,o),u=!0):(p=tr(s,r,l,o))&&(// $FlowFixMe: Idk how to type this properly.
l=u?jo({},l,p):jo(l,p),u=!1),s.isForced&&(n.hasForceUpdate=!0),null!==s.callback){// Append to list of callbacks.
var h=n.callbackList;null===h&&(h=n.callbackList=[]),h.push(s)}s=s.next}}// The queue is empty. We can reset it.
// No longer processing.
return null!==n.callbackList?t.effectTag|=ll:null!==n.first||n.hasForceUpdate||(t.updateQueue=null),c||(c=!0,n.baseState=l),n.isProcessing=!1,l}function rr(e,t){var n=e.callbackList;if(null!==n){// Set the list to null to make sure they don't get called more than once.
e.callbackList=null;for(var r=0;r<n.length;r++){var o=n[r],a=o.callback;// This update might be processed again. Clear the callback so it's only
// called once.
o.callback=null,"function"!=typeof a&&Fo(!1,"Invalid argument passed as callback. Expected a function. Instead received: %s",a),a.call(t)}}}function or(e,t,// TODO: figure out the API for cross-renderer implementation.
n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{// This tag allow us to uniquely identify this as a React Portal
$$typeof:os,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function ar(e){if(null===e||void 0===e)return null;var t=ds&&e[ds]||e[fs];return"function"==typeof t?t:null}function ir(e,t){var n=t.ref;if(null!==n&&"function"!=typeof n){if(t._owner){var r=t._owner,o=void 0;if(r){var a=r;a.tag!==za&&Fo(!1,"Stateless function components cannot have refs."),o=a.stateNode}o||Fo(!1,"Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.",n);var i=""+n;// Check if previous string ref matches new string ref
if(null!==e&&null!==e.ref&&e.ref._stringRef===i)return e.ref;var l=function(e){var t=o.refs===qo?o.refs={}:o.refs;null===e?delete t[i]:t[i]=e};return l._stringRef=i,l}"string"!=typeof n&&Fo(!1,"Expected ref to be a function or a string."),t._owner||Fo(!1,"Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).",n)}return n}function lr(e,t){if("textarea"!==e.type){var n="";n=" If you meant to render a collection of children, use an array instead."+(as()||""),Fo(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,n)}}function ur(){var e="Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."+(as()||"");us[e]||(us[e]=!0,Lo(!1,"Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.%s",as()||""))}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function sr(e,t){function n(n,r){if(t){if(!e){// When we're reconciling in place we have a work in progress copy. We
// actually want the current copy. If there is no current copy, then we
// don't need to track deletion side-effects.
if(null===r.alternate)return;r=r.alternate}// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var o=n.lastEffect;null!==o?(o.nextEffect=r,n.lastEffect=r):n.firstEffect=n.lastEffect=r,r.nextEffect=null,r.effectTag=al}}function o(e,r){if(!t)// Noop.
return null;for(// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var o=r;null!==o;)n(e,o),o=o.sibling;return null}function a(e,t){for(// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
var n=new Map,r=t;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling;return n}function i(t,n,r){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
if(e){var o=Ln(t,n,r);return o.index=0,o.sibling=null,o}// We override the expiration time even if it is earlier, because if
// we're reconciling at a later time that means that this was
// down-prioritized.
return t.expirationTime=r,t.effectTag=el,t.index=0,t.sibling=null,t.pendingProps=n,t}function l(e,n,r){if(e.index=r,!t)// Noop.
return n;var o=e.alternate;if(null!==o){var a=o.index;// This is a move.
return a<n?(e.effectTag=nl,n):a}// This is an insertion.
return e.effectTag=nl,n}function u(e){// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
return t&&null===e.alternate&&(e.effectTag=nl),e}function s(e,t,n,r){if(null===t||t.tag!==Ka){// Insert
var o=zn(n,e.internalContextTag,r);return o.return=e,o}// Update
var a=i(t,n,r);return a.return=e,a}function c(e,t,n,r){if(null!==t&&t.type===n.type){// Move based on index
var o=i(t,n.props,r);return o.ref=ir(t,n),o.return=e,o._debugSource=n._source,o._debugOwner=n._owner,o}// Insert
var a=jn(n,e.internalContextTag,r);return a.ref=ir(t,n),a.return=e,a}function d(e,t,n,r){// TODO: Should this also compare handler to determine whether to reuse?
if(null===t||t.tag!==qa){// Insert
var o=Bn(n,e.internalContextTag,r);return o.return=e,o}// Move based on index
var a=i(t,n,r);return a.return=e,a}function f(e,t,n,r){if(null===t||t.tag!==Qa){// Insert
var o=Wn(n,e.internalContextTag,r);return o.type=n.value,o.return=e,o}// Move based on index
var a=i(t,null,r);return a.type=n.value,a.return=e,a}function p(e,t,n,r){if(null===t||t.tag!==Ba||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation){// Insert
var o=Kn(n,e.internalContextTag,r);return o.return=e,o}// Update
var a=i(t,n.children||[],r);return a.return=e,a}function h(e,t,n,r,o){if(null===t||t.tag!==Ya){// Insert
var a=Hn(n,e.internalContextTag,r,o);return a.return=e,a}// Update
var l=i(t,n,r);return l.return=e,l}function m(e,t,n){if("string"==typeof t||"number"==typeof t){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var o=zn(""+t,e.internalContextTag,n);return o.return=e,o}if("object"===(void 0===t?"undefined":r(t))&&null!==t){switch(t.$$typeof){case Zu:if(t.type===ns){var a=Hn(t.props.children,e.internalContextTag,n,t.key);return a.return=e,a}var i=jn(t,e.internalContextTag,n);return i.ref=ir(null,t),i.return=e,i;case es:var l=Bn(t,e.internalContextTag,n);return l.return=e,l;case ts:var u=Wn(t,e.internalContextTag,n);return u.type=t.value,u.return=e,u;case os:var s=Kn(t,e.internalContextTag,n);return s.return=e,s}if(cs(t)||ar(t)){var c=Hn(t,e.internalContextTag,n,null);return c.return=e,c}lr(e,t)}return"function"==typeof t&&ur(),null}function g(e,t,n,o){// Update the fiber if the keys match, otherwise return null.
var a=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
return null!==a?null:s(e,t,""+n,o);if("object"===(void 0===n?"undefined":r(n))&&null!==n){switch(n.$$typeof){case Zu:return n.key===a?n.type===ns?h(e,t,n.props.children,o,a):c(e,t,n,o):null;case es:return n.key===a?d(e,t,n,o):null;case ts:// Returns don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a
// yield.
// Returns don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a
// yield.
return null===a?f(e,t,n,o):null;case os:return n.key===a?p(e,t,n,o):null}if(cs(n)||ar(n))return null!==a?null:h(e,t,n,o,null);lr(e,n)}return"function"==typeof n&&ur(),null}function v(e,t,n,o,a){if("string"==typeof o||"number"==typeof o){return s(t,e.get(n)||null,""+o,a)}if("object"===(void 0===o?"undefined":r(o))&&null!==o){switch(o.$$typeof){case Zu:var i=e.get(null===o.key?n:o.key)||null;return o.type===ns?h(t,i,o.props.children,a,o.key):c(t,i,o,a);case es:return d(t,e.get(null===o.key?n:o.key)||null,o,a);case ts:return f(t,e.get(n)||null,o,a);case os:return p(t,e.get(null===o.key?n:o.key)||null,o,a)}if(cs(o)||ar(o)){return h(t,e.get(n)||null,o,a,null)}lr(t,o)}return"function"==typeof o&&ur(),null}/**
   * Warns if there is a duplicate or missing key
   */
function y(e,t){if("object"!==(void 0===e?"undefined":r(e))||null===e)return t;switch(e.$$typeof){case Zu:case es:case os:ss(e);var n=e.key;if("string"!=typeof n)break;if(null===t){t=new Set,t.add(n);break}if(!t.has(n)){t.add(n);break}Lo(!1,"Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s",n,as())}return t}function b(e,r,i,u){for(var s=null,c=0;c<i.length;c++){s=y(i[c],s)}for(var d=null,f=null,p=r,h=0,b=0,w=null;null!==p&&b<i.length;b++){p.index>b?(w=p,p=null):w=p.sibling;var k=g(e,p,i[b],u);if(null===k){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===p&&(p=w);break}t&&p&&null===k.alternate&&// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
n(e,p),h=l(k,h,b),null===f?// TODO: Move out of the loop. This only happens for the first run.
d=k:// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
f.sibling=k,f=k,p=w}if(b===i.length)// We've reached the end of the new children. We can delete the rest.
return o(e,p),d;if(null===p){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;b<i.length;b++){var C=m(e,i[b],u);C&&(h=l(C,h,b),null===f?// TODO: Move out of the loop. This only happens for the first run.
d=C:f.sibling=C,f=C)}return d}// Keep scanning and use the map to restore deleted items as moves.
for(// Add all children to a key map for quick lookups.
var x=a(e,p);b<i.length;b++){var T=v(x,e,b,i[b],u);T&&(t&&null!==T.alternate&&// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
x.delete(null===T.key?b:T.key),h=l(T,h,b),null===f?d=T:f.sibling=T,f=T)}// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
return t&&x.forEach(function(t){return n(e,t)}),d}function w(e,r,i,u){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var s=ar(i);// Warn about using Maps as children
if("function"!=typeof s&&Fo(!1,"An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."),"function"==typeof i.entries){i.entries===s&&(Lo(is,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.%s",as()),is=!0)}// First, validate keys.
// We'll get a different iterator later for the main pass.
var c=s.call(i);if(c)for(var d=null,f=c.next();!f.done;f=c.next()){var p=f.value;d=y(p,d)}var h=s.call(i);null==h&&Fo(!1,"An iterable object provided no iterator.");for(var b=null,w=null,k=r,C=0,x=0,T=null,E=h.next();null!==k&&!E.done;x++,E=h.next()){k.index>x?(T=k,k=null):T=k.sibling;var S=g(e,k,E.value,u);if(null===S){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
k||(k=T);break}t&&k&&null===S.alternate&&// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
n(e,k),C=l(S,C,x),null===w?// TODO: Move out of the loop. This only happens for the first run.
b=S:// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
w.sibling=S,w=S,k=T}if(E.done)// We've reached the end of the new children. We can delete the rest.
return o(e,k),b;if(null===k){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!E.done;x++,E=h.next()){var P=m(e,E.value,u);null!==P&&(C=l(P,C,x),null===w?// TODO: Move out of the loop. This only happens for the first run.
b=P:w.sibling=P,w=P)}return b}// Keep scanning and use the map to restore deleted items as moves.
for(// Add all children to a key map for quick lookups.
var _=a(e,k);!E.done;x++,E=h.next()){var O=v(_,e,x,E.value,u);null!==O&&(t&&null!==O.alternate&&// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
_.delete(null===O.key?x:O.key),C=l(O,C,x),null===w?b=O:w.sibling=O,w=O)}// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
return t&&_.forEach(function(t){return n(e,t)}),b}function k(e,t,n,r){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==t&&t.tag===Ka){// We already have an existing node so let's just update it and delete
// the rest.
o(e,t.sibling);var a=i(t,n,r);return a.return=e,a}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
o(e,t);var l=zn(n,e.internalContextTag,r);return l.return=e,l}function C(e,t,r,a){for(var l=r.key,u=t;null!==u;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){if(u.tag===Ya?r.type===ns:u.type===r.type){o(e,u.sibling);var s=i(u,r.type===ns?r.props.children:r.props,a);return s.ref=ir(u,r),s.return=e,s._debugSource=r._source,s._debugOwner=r._owner,s}o(e,u);break}n(e,u),u=u.sibling}if(r.type===ns){var c=Hn(r.props.children,e.internalContextTag,a,r.key);return c.return=e,c}var d=jn(r,e.internalContextTag,a);return d.ref=ir(t,r),d.return=e,d}function x(e,t,r,a){for(var l=r.key,u=t;null!==u;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){if(u.tag===qa){o(e,u.sibling);var s=i(u,r,a);return s.return=e,s}o(e,u);break}n(e,u),u=u.sibling}var c=Bn(r,e.internalContextTag,a);return c.return=e,c}function T(e,t,n,r){// There's no need to check for keys on yields since they're stateless.
var a=t;if(null!==a){if(a.tag===Qa){o(e,a.sibling);var l=i(a,null,r);return l.type=n.value,l.return=e,l}o(e,a)}var u=Wn(n,e.internalContextTag,r);return u.type=n.value,u.return=e,u}function E(e,t,r,a){for(var l=r.key,u=t;null!==u;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){if(u.tag===Ba&&u.stateNode.containerInfo===r.containerInfo&&u.stateNode.implementation===r.implementation){o(e,u.sibling);var s=i(u,r.children||[],a);return s.return=e,s}o(e,u);break}n(e,u),u=u.sibling}var c=Kn(r,e.internalContextTag,a);return c.return=e,c}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function S(e,t,n,a){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
Yl&&"object"===(void 0===n?"undefined":r(n))&&null!==n&&n.type===ns&&null===n.key&&(n=n.props.children);// Handle object types
var i="object"===(void 0===n?"undefined":r(n))&&null!==n;if(i)switch(n.$$typeof){case Zu:return u(C(e,t,n,a));case es:return u(x(e,t,n,a));case ts:return u(T(e,t,n,a));case os:return u(E(e,t,n,a))}if("string"==typeof n||"number"==typeof n)return u(k(e,t,""+n,a));if(cs(n))return b(e,t,n,a);if(ar(n))return w(e,t,n,a);if(i&&lr(e,n),"function"==typeof n&&ur(),void 0===n)// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(e.tag){case za:if(e.stateNode.render._isMockFunction)// We allow auto-mocks to proceed as if they're returning null.
break;// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case Ha:var l=e.type;Fo(!1,"%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.",l.displayName||l.name||"Component")}// Remaining cases are all treated as empty.
return o(e,t)}return S}function cr(e,t){if(null!==e&&t.child!==e.child&&Fo(!1,"Resuming work not yet implemented."),null!==t.child){var n=t.child,r=Ln(n,n.pendingProps,n.expirationTime);for(t.child=r,r.return=t;null!==n.sibling;)n=n.sibling,r=r.sibling=Ln(n,n.pendingProps,n.expirationTime),r.return=t;r.sibling=null}}function dr(e){// Allow injected showDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(!1!==Os(e)){var t=e.componentName,n=e.componentStack,r=e.errorBoundaryName,o=e.errorBoundaryFound,a=e.willRetry,i=t?"The above error occurred in the <"+t+"> component:":"The above error occurred in one of your React components:",l=void 0;// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
l=o&&r?a?"React will try to recreate this component tree from scratch using the error boundary you provided, "+r+".":"This error was initially handled by the error boundary "+r+".\nRecreating the tree from scratch failed so React will unmount the tree.":"Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://fb.me/react-error-boundaries to learn more about error boundaries.";var u=""+i+n+"\n\n"+l;// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(u)}}// 0 is PROD, 1 is DEV.
// Might add PROFILE later.
function fr(e){if(!e)return qo;var t=We(e),n=In(t);return xn(t)?Pn(t,n):n}function pr(e){return!!uc.hasOwnProperty(e)||!lc.hasOwnProperty(e)&&(ic.test(e)?(uc[e]=!0,!0):(lc[e]=!0,Lo(!1,"Invalid attribute name: `%s`",e),!1))}// shouldIgnoreValue() is currently duplicated in DOMMarkupOperations.
// TODO: Find a better place for this.
function hr(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&t<1||e.hasOverloadedBooleanValue&&!1===t}/**
 * Operations for dealing with DOM properties.
 */
/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */
function mr(e,t,n){var r=a(t);if(r){if(r.mutationMethod||r.mustUseProperty)return e[r.propertyName];var o=r.attributeName,i=null;if(r.hasOverloadedBooleanValue){if(e.hasAttribute(o)){var l=e.getAttribute(o);return""===l||(hr(r,n)?l:l===""+n?n:l)}}else if(e.hasAttribute(o)){if(hr(r,n))// We had an attribute but shouldn't have had one, so read it
// for the error message.
return e.getAttribute(o);if(r.hasBooleanValue)// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return n;// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
i=e.getAttribute(o)}return hr(r,n)?null===i?n:i:i===""+n?n:i}}/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */
function gr(e,t,n){if(pr(t)){if(!e.hasAttribute(t))return void 0===n?void 0:null;var r=e.getAttribute(t);return r===""+n?n:r}}/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */
function vr(e,t,n){var r=a(t);if(!r||!o(t,n))return void yr(e,t,o(t,n)?n:null);var i=r.mutationMethod;if(i)i(e,n);else{if(hr(r,n))return void wr(e,t);if(r.mustUseProperty)// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[r.propertyName]=n;else{var l=r.attributeName,u=r.attributeNamespace;// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
u?e.setAttributeNS(u,l,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&!0===n?e.setAttribute(l,""):e.setAttribute(l,""+n)}}}function yr(e,t,n){pr(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))}/**
 * Deletes an attributes from a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 */
function br(e,t){e.removeAttribute(t)}/**
 * Deletes the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 */
function wr(e,t){var n=a(t);if(n){var r=n.mutationMethod;if(r)r(e,void 0);else if(n.mustUseProperty){var o=n.propertyName;n.hasBooleanValue?e[o]=!1:e[o]=""}else e.removeAttribute(n.attributeName)}else e.removeAttribute(t)}function kr(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
function Cr(e,t){var n=e,r=t.value,o=t.checked;return jo({// Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:void 0,// Make sure we set .step before .value (setting .value before .step
// means .value is rounded on mount, based upon step precision)
step:void 0,// Make sure we set .min & .max before .value (to ensure proper order
// in corner cases such as min or max deriving from value, e.g. Issue #7170)
min:void 0,max:void 0},t,{defaultChecked:void 0,defaultValue:void 0,value:null!=r?r:n._wrapperState.initialValue,checked:null!=o?o:n._wrapperState.initialChecked})}function xr(e,t){sc.checkPropTypes("input",t,pc),void 0===t.checked||void 0===t.defaultChecked||mc||(Lo(!1,"%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",fc()||"A component",t.type),mc=!0),void 0===t.value||void 0===t.defaultValue||hc||(Lo(!1,"%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",fc()||"A component",t.type),hc=!0);var n=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:n,controlled:kr(t)}}function Tr(e,t){var n=e,r=kr(t);n._wrapperState.controlled||!r||vc||(Lo(!1,"A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s",t.type,pc()),vc=!0),!n._wrapperState.controlled||r||gc||(Lo(!1,"A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s",t.type,pc()),gc=!0);var o=t.checked;null!=o&&vr(n,"checked",o||!1);var a=t.value;if(null!=a)if(0===a&&""===n.value)n.value="0";else if("number"===t.type){// Simulate `input.valueAsNumber`. IE9 does not support it
var i=parseFloat(n.value)||0;(// eslint-disable-next-line
a!=i||// eslint-disable-next-line
a==i&&n.value!=a)&&(// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
n.value=""+a)}else n.value!==""+a&&(// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
n.value=""+a);else null==t.value&&null!=t.defaultValue&&n.defaultValue!==""+t.defaultValue&&(n.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(n.defaultChecked=!!t.defaultChecked)}function Er(e,t){var n=e;// Detach value from defaultValue. We won't do anything if we're working on
// submit or reset inputs as those values & defaultValues are linked. They
// are not resetable nodes so this operation doesn't matter and actually
// removes browser-default values (eg "Submit Query") when no value is
// provided.
switch(t.type){case"submit":case"reset":break;case"color":case"date":case"datetime":case"datetime-local":case"month":case"time":case"week":// This fixes the no-show issue on iOS Safari and Android Chrome:
// https://github.com/facebook/react/issues/7233
n.value="",n.value=n.defaultValue;break;default:n.value=n.value}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var r=n.name;""!==r&&(n.name=""),n.defaultChecked=!n.defaultChecked,n.defaultChecked=!n.defaultChecked,""!==r&&(n.name=r)}function Sr(e,t){var n=e;Tr(n,t),Pr(n,t)}function Pr(e,t){var n=t.name;if("radio"===t.type&&null!=n){for(var r=e;r.parentNode;)r=r.parentNode;for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),a=0;a<o.length;a++){var i=o[a];if(i!==e&&i.form===e.form){// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var l=P(i);l||Fo(!1,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."),// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
Tr(i,l)}}}}function _r(e){var t="";// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
// We can silently skip them because invalid DOM nesting warning
// catches these cases in Fiber.
return Ao.Children.forEach(e,function(e){null!=e&&("string"!=typeof e&&"number"!=typeof e||(t+=e))}),t}/**
 * Implements an <option> host component that warns when `selected` is set.
 */
function Or(e,t){Lo(null==t.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.")}function Nr(e,t){// value="" should make a value attribute (#6219)
null!=t.value&&e.setAttribute("value",t.value)}function Ir(e,t){var n=jo({children:void 0},t),r=_r(t.children);return r&&(n.children=r),n}function Rr(){var e=yc();return e?"\n\nCheck the render method of `"+e+"`.":""}/**
 * Validation function for `value` and `defaultValue`.
 */
function Mr(e){sc.checkPropTypes("select",e,bc);for(var t=0;t<kc.length;t++){var n=kc[t];if(null!=e[n]){var r=Array.isArray(e[n]);e.multiple&&!r?Lo(!1,"The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,Rr()):!e.multiple&&r&&Lo(!1,"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,Rr())}}}function Dr(e,t,n,r){var o=e.options;if(t){for(var a=n,i={},l=0;l<a.length;l++)// Prefix to avoid chaos with special keys.
i["$"+a[l]]=!0;for(var u=0;u<o.length;u++){var s=i.hasOwnProperty("$"+o[u].value);o[u].selected!==s&&(o[u].selected=s),s&&r&&(o[u].defaultSelected=!0)}}else{for(var c=""+n,d=null,f=0;f<o.length;f++){if(o[f].value===c)return o[f].selected=!0,void(r&&(o[f].defaultSelected=!0));null!==d||o[f].disabled||(d=o[f])}null!==d&&(d.selected=!0)}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
function Ar(e,t){return jo({},t,{value:void 0})}function Fr(e,t){var n=e;Mr(t);var r=t.value;n._wrapperState={initialValue:null!=r?r:t.defaultValue,wasMultiple:!!t.multiple},void 0===t.value||void 0===t.defaultValue||wc||(Lo(!1,"Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),wc=!0)}function Lr(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;null!=r?Dr(n,!!t.multiple,r,!1):null!=t.defaultValue&&Dr(n,!!t.multiple,t.defaultValue,!0)}function Ur(e,t){var n=e;// After the initial mount, we control selected-ness manually so don't pass
// this value down
n._wrapperState.initialValue=void 0;var r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;null!=o?Dr(n,!!t.multiple,o,!1):r!==!!t.multiple&&(// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=t.defaultValue?Dr(n,!!t.multiple,t.defaultValue,!0):// Revert the select back to its default unselected state.
Dr(n,!!t.multiple,t.multiple?[]:"",!1))}function jr(e,t){var n=e,r=t.value;null!=r&&Dr(n,!!t.multiple,r,!1)}/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
function Hr(e,t){var n=e;return null!=t.dangerouslySetInnerHTML&&Fo(!1,"`dangerouslySetInnerHTML` does not make sense on <textarea>."),jo({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zr(e,t){var n=e;sc.checkPropTypes("textarea",t,Cc),void 0===t.value||void 0===t.defaultValue||xc||(Lo(!1,"Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components"),xc=!0);var r=t.value,o=r;// Only bother fetching default value if we're going to use it
if(null==r){var a=t.defaultValue,i=t.children;null!=i&&(Lo(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=a&&Fo(!1,"If you supply `defaultValue` on a <textarea>, do not pass children."),Array.isArray(i)&&(i.length<=1||Fo(!1,"<textarea> can only have at most one child."),i=i[0]),a=""+i),null==a&&(a=""),o=a}n._wrapperState={initialValue:""+o}}function Vr(e,t){var n=e,r=t.value;if(null!=r){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var o=""+r;// To avoid side effects (such as losing text selection), only set value if changed
o!==n.value&&(n.value=o),null==t.defaultValue&&(n.defaultValue=o)}null!=t.defaultValue&&(n.defaultValue=t.defaultValue)}function Br(e,t){var n=e,r=n.textContent;// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
r===n._wrapperState.initialValue&&(n.value=r)}function Wr(e,t){// DOM component is still mounted; update
Vr(e,t)}// Assumes there is no parent namespace.
function Kr(e){switch(e){case"svg":return Sc;case"math":return Ec;default:return Tc}}function qr(e,t){return null==e||e===Tc?Kr(t):e===Sc&&"foreignObject"===t?Tc:e}/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */
function $r(e){var t=""+e,n=Nc.exec(t);if(!n)return t;var r,o="",a=0,i=0;for(a=n.index;a<t.length;a++){switch(t.charCodeAt(a)){case 34:// "
r="&quot;";break;case 38:// &
r="&amp;";break;case 39:// '
r="&#x27;";// modified from escape-html; used to be '&#39'
break;case 60:// <
r="&lt;";break;case 62:// >
r="&gt;";break;default:continue}i!==a&&(o+=t.substring(i,a)),i=a+1,o+=r}return i!==a?o+t.substring(i,a):o}// end code copied and modified from escape-html
/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function Qr(e){return"boolean"==typeof e||"number"==typeof e?""+e:$r(e)}/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function Yr(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function Gr(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Mc.hasOwnProperty(e)&&Mc[e]?(""+t).trim():t+"px"}/**
 * Operations for dealing with CSS properties.
 */
/**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */
function Xr(e){var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(null!=o){var a=0===r.indexOf("--");t+=n+Qo(r)+":",t+=Gr(r,o,a),n=";"}}return t||null}/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */
function Jr(e,t,n){var r=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=0===o.indexOf("--");a||$c(o,t[o],n);var i=Gr(o,t[o],a);"float"===o&&(o="cssFloat"),a?r.setProperty(o,i):r[o]=i}}function Zr(e,t,n){t&&(// Note the use of `==` which checks for null or undefined.
Yc[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&Fo(!1,"%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s",e,n()),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&Fo(!1,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."),"object"===r(t.dangerouslySetInnerHTML)&&Gc in t.dangerouslySetInnerHTML||Fo(!1,"`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")),Lo(t.suppressContentEditableWarning||!t.contentEditable||null==t.children,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.%s",n()),null!=t.style&&"object"!==r(t.style)&&Fo(!1,"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",n()))}function eo(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){// These are reserved SVG and MathML elements.
// We don't mind this whitelist too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function to(){var e=Zi.getStackAddendum();return null!=e?e:""}function no(e,t){if(td.call(Jc,t)&&Jc[t])return!0;if(ed.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=Xc.hasOwnProperty(n)?n:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return Lo(!1,"Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s",t,to()),Jc[t]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return Lo(!1,"Invalid ARIA attribute `%s`. Did you mean `%s`?%s",t,r,to()),Jc[t]=!0,!0}if(Zc.test(t)){var o=t.toLowerCase(),a=Xc.hasOwnProperty(o)?o:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==a)return Jc[t]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==a)return Lo(!1,"Unknown ARIA attribute `%s`. Did you mean `%s`?%s",t,a,to()),Jc[t]=!0,!0}return!0}function ro(e,t){var n=[];for(var r in t){no(e,r)||n.push(r)}var o=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?Lo(!1,"Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop%s",o,e,to()):n.length>1&&Lo(!1,"Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop%s",o,e,to())}function oo(e,t){eo(e,t)||ro(e,t)}function ao(){var e=Zi.getStackAddendum();return null!=e?e:""}function io(e,t){"input"!==e&&"textarea"!==e&&"select"!==e||null==t||null!==t.value||nd||(nd=!0,"select"===e&&t.multiple?Lo(!1,"`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.%s",e,ao()):Lo(!1,"`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.%s",e,ao()))}function lo(){var e=Zi.getStackAddendum();return null!=e?e:""}function uo(e,t){eo(e,t)||cd(e,t)}function so(e,t){gt(t,e.nodeType===Ui||e.nodeType===ji?e:e.ownerDocument)}function co(e){return e.nodeType===Ui?e:e.ownerDocument}function fo(e){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
e.onclick=Ho}function po(e,t,n,r,o){for(var a in r)if(r.hasOwnProperty(a)){var i=r[a];if(a===wd)i&&// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(i),// Relies on `updateStylesByID` not mutating `styleUpdates`.
Jr(t,i,xd);else if(a===md){var l=i?i[kd]:void 0;null!=l&&Oc(t,l)}else if(a===bd)if("string"==typeof i){// Avoid setting initial textContent when the text is empty. In IE11 setting
// textContent on a <textarea> will cause the placeholder to not
// show within the <textarea> until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
var u="textarea"!==e||""!==i;u&&Rc(t,i)}else"number"==typeof i&&Rc(t,""+i);else a===gd||a===vd||a===yd||(Ea.hasOwnProperty(a)?null!=i&&("function"!=typeof i&&Rd(a,i),so(n,a)):o?yr(t,a,i):null!=i&&// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
vr(t,a,i))}}function ho(e,t,n,r){// TODO: Handle wasCustomComponentTag
for(var o=0;o<t.length;o+=2){var a=t[o],i=t[o+1];a===wd?Jr(e,i,xd):a===md?Oc(e,i):a===bd?Rc(e,i):r?null!=i?yr(e,a,i):br(e,a):null!=i?vr(e,a,i):// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
wr(e,a)}}function mo(e,t,n,r){// We create tags in the namespace of their parent container, except HTML
var o,a=co(n),i=r;if(i===Cd&&(i=Kr(e)),i===Cd){var l=eo(e,t);if(// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
Lo(l||e===e.toLowerCase(),"<%s /> is using uppercase HTML. Always use lowercase HTML tags in React.",e),"script"===e){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var u=a.createElement("div");u.innerHTML="<script><\/script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var s=u.firstChild;o=u.removeChild(s)}else// $FlowIssue `createElement` should be updated for Web Components
o="string"==typeof t.is?a.createElement(e,{is:t.is}):a.createElement(e)}else o=a.createElementNS(i,e);return i===Cd&&(l||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(o)||Object.prototype.hasOwnProperty.call(Td,e)||(Td[e]=!0,Lo(!1,"The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e))),o}function go(e,t){return co(t).createTextNode(e)}function vo(e,t,n,r){var o=eo(t,n);Ed(t,n),o&&!hd&&e.shadyRoot&&(Lo(!1,"%s is using shady DOM. Using shady DOM with React can cause things to break subtly.",dd()||"A component"),hd=!0);// TODO: Make sure that we check isMounted before firing any of these events.
var a;switch(t){case"iframe":case"object":ut("topLoad","load",e),a=n;break;case"video":case"audio":// Create listener for each media event
for(var i in Dd)Dd.hasOwnProperty(i)&&ut(i,Dd[i],e);a=n;break;case"source":ut("topError","error",e),a=n;break;case"img":case"image":ut("topError","error",e),ut("topLoad","load",e),a=n;break;case"form":ut("topReset","reset",e),ut("topSubmit","submit",e),a=n;break;case"details":ut("topToggle","toggle",e),a=n;break;case"input":xr(e,n),a=Cr(e,n),ut("topInvalid","invalid",e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
so(r,"onChange");break;case"option":Or(e,n),a=Ir(e,n);break;case"select":Fr(e,n),a=Ar(e,n),ut("topInvalid","invalid",e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
so(r,"onChange");break;case"textarea":zr(e,n),a=Hr(e,n),ut("topInvalid","invalid",e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
so(r,"onChange");break;default:a=n}switch(Zr(t,a,xd),po(t,e,r,a,o),t){case"input":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
xe(e),Er(e,n);break;case"textarea":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
xe(e),Br(e,n);break;case"option":Nr(e,n);break;case"select":Lr(e,n);break;default:"function"==typeof a.onClick&&// TODO: This cast may not be sound for SVG, MathML or custom elements.
fo(e)}}// Calculate the diff between the two objects.
function yo(e,t,n,r,o){Ed(t,r);var a,i,l=null;switch(t){case"input":a=Cr(e,n),i=Cr(e,r),l=[];break;case"option":a=Ir(e,n),i=Ir(e,r),l=[];break;case"select":a=Ar(e,n),i=Ar(e,r),l=[];break;case"textarea":a=Hr(e,n),i=Hr(e,r),l=[];break;default:a=n,i=r,"function"!=typeof a.onClick&&"function"==typeof i.onClick&&// TODO: This cast may not be sound for SVG, MathML or custom elements.
fo(e)}Zr(t,i,xd);var u,s,c=null;for(u in a)if(!i.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if(u===wd){var d=a[u];for(s in d)d.hasOwnProperty(s)&&(c||(c={}),c[s]="")}else u===md||u===bd||u===gd||u===vd||u===yd||(Ea.hasOwnProperty(u)?// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
l||(l=[]):// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
(l=l||[]).push(u,null));for(u in i){var f=i[u],p=null!=a?a[u]:void 0;if(i.hasOwnProperty(u)&&f!==p&&(null!=f||null!=p))if(u===wd)if(f&&// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(f),p){// Unset styles on `lastProp` but not on `nextProp`.
for(s in p)!p.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(c||(c={}),c[s]="");// Update styles that changed since `lastProp`.
for(s in f)f.hasOwnProperty(s)&&p[s]!==f[s]&&(c||(c={}),c[s]=f[s])}else// Relies on `updateStylesByID` not mutating `styleUpdates`.
c||(l||(l=[]),l.push(u,c)),c=f;else if(u===md){var h=f?f[kd]:void 0,m=p?p[kd]:void 0;null!=h&&m!==h&&(l=l||[]).push(u,""+h)}else u===bd?p===f||"string"!=typeof f&&"number"!=typeof f||(l=l||[]).push(u,""+f):u===gd||u===vd||(Ea.hasOwnProperty(u)?(null!=f&&(// We eagerly listen to this even though we haven't committed yet.
"function"!=typeof f&&Rd(u,f),so(o,u)),l||p===f||(// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
l=[])):// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
(l=l||[]).push(u,f))}return c&&(l=l||[]).push(wd,c),l}// Apply the diff.
function bo(e,t,n,r,o){// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(// Apply the diff.
ho(e,t,eo(n,r),eo(n,o)),n){case"input":// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
Tr(e,o),// We also check that we haven't missed a value update, such as a
// Radio group shifting the checked value to another named radio input.
Te(e);break;case"textarea":Vr(e,o);break;case"select":// <select> value update needs to occur after <option> children
// reconciliation
Ur(e,o)}}function wo(e,t,n,r,i){var l=!0===n[vd],u=eo(t,n);// TODO: Make sure that we check isMounted before firing any of these events.
switch(Ed(t,n),u&&!hd&&e.shadyRoot&&(Lo(!1,"%s is using shady DOM. Using shady DOM with React can cause things to break subtly.",dd()||"A component"),hd=!0),t){case"iframe":case"object":ut("topLoad","load",e);break;case"video":case"audio":// Create listener for each media event
for(var s in Dd)Dd.hasOwnProperty(s)&&ut(s,Dd[s],e);break;case"source":ut("topError","error",e);break;case"img":case"image":ut("topError","error",e),ut("topLoad","load",e);break;case"form":ut("topReset","reset",e),ut("topSubmit","submit",e);break;case"details":ut("topToggle","toggle",e);break;case"input":xr(e,n),ut("topInvalid","invalid",e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
so(i,"onChange");break;case"option":Or(e,n);break;case"select":Fr(e,n),ut("topInvalid","invalid",e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
so(i,"onChange");break;case"textarea":zr(e,n),ut("topInvalid","invalid",e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
so(i,"onChange")}Zr(t,n,xd);for(var c=new Set,d=e.attributes,f=0;f<d.length;f++){switch(d[f].name.toLowerCase()){// Built-in SSR attribute is whitelisted
case"data-reactroot":// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":case"checked":case"selected":break;default:// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
c.add(d[f].name)}}var p=null;for(var h in n)if(n.hasOwnProperty(h)){var m=n[h];if(h===bd)// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
"string"==typeof m?e.textContent!==m&&(l||Od(e.textContent,m),p=[bd,m]):"number"==typeof m&&e.textContent!==""+m&&(l||Od(e.textContent,m),p=[bd,""+m]);else if(Ea.hasOwnProperty(h))null!=m&&("function"!=typeof m&&Rd(h,m),so(i,h));else{// Validate that the properties correspond to their expected values.
var g,v;if(l);else if(h===gd||h===vd||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===h||"checked"===h||"selected"===h);else if(h===md){var y=m?m[kd]||"":"",b=e.innerHTML,w=Md(e,y);w!==b&&Nd(h,b,w)}else if(h===wd){// $FlowFixMe - Should be inferred as not undefined.
c.delete(h);var k=Xr(m);g=e.getAttribute("style"),k!==g&&Nd(h,g,k)}else if(u)// $FlowFixMe - Should be inferred as not undefined.
c.delete(h.toLowerCase()),g=gr(e,h,m),m!==g&&Nd(h,g,m);else if(o(h,m)){if(v=a(h))// $FlowFixMe - Should be inferred as not undefined.
c.delete(v.attributeName),g=mr(e,h,m);else{var C=r;C===Cd&&(C=Kr(t)),C===Cd?// $FlowFixMe - Should be inferred as not undefined.
c.delete(h.toLowerCase()):// $FlowFixMe - Should be inferred as not undefined.
c.delete(h),g=gr(e,h,m)}m!==g&&Nd(h,g,m)}}}switch(// $FlowFixMe - Should be inferred as not undefined.
c.size>0&&!l&&// $FlowFixMe - Should be inferred as not undefined.
Id(c),t){case"input":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
xe(e),Er(e,n);break;case"textarea":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
xe(e),Br(e,n);break;case"select":case"option":// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:"function"==typeof n.onClick&&// TODO: This cast may not be sound for SVG, MathML or custom elements.
fo(e)}return p}function ko(e,t){return e.nodeValue!==t}function Co(e,t){Od(e.nodeValue,t)}function xo(e,t){pd||(pd=!0,Lo(!1,"Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase()))}function To(e,t){pd||(pd=!0,Lo(!1,'Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase()))}function Eo(e,t,n){pd||(pd=!0,Lo(!1,"Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase()))}function So(e,t){""!==t&&(pd||(pd=!0,Lo(!1,'Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())))}function Po(e,t,n){switch(t){case"input":return void Sr(e,n);case"textarea":return void Wr(e,n);case"select":return void jr(e,n)}}/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */
function _o(e){return!(!e||e.nodeType!==Ai&&e.nodeType!==Ui&&e.nodeType!==ji&&(e.nodeType!==Li||" react-mount-point-unstable "!==e.nodeValue))}function Oo(e){return e?e.nodeType===Ui?e.documentElement:e.firstChild:null}function No(e){var t=Oo(e);return!(!t||t.nodeType!==Ai||!t.hasAttribute(ea))}function Io(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Ro(e,t,n,r,o){if(_o(n)||Fo(!1,"Target container is not a DOM element."),n._reactRootContainer&&n.nodeType!==Li){var a=ff.findHostInstanceWithNoPortals(n._reactRootContainer.current);a&&Lo(a.parentNode===n,"render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var i=!!n._reactRootContainer,l=Oo(n),u=!(!l||!E(l));Lo(!u||i,"render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),Lo(n.nodeType!==Ai||!n.tagName||"BODY"!==n.tagName.toUpperCase(),"render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");var s=n._reactRootContainer;if(s)ff.updateContainer(t,s,e,o);else{var c=r||No(n);// First clear any existing content.
if(!c)for(var d=!1,f=void 0;f=n.lastChild;)!d&&f.nodeType===Ai&&f.hasAttribute(ea)&&(d=!0,Lo(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")),n.removeChild(f);!c||r||pf||(pf=!0,ac(!1,"render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML."));var p=ff.createContainer(n,c);s=n._reactRootContainer=p,// Initial mount should not be batched.
ff.unbatchedUpdates(function(){ff.updateContainer(t,p,e,o)})}return ff.getPublicRootInstance(s)}function Mo(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;// TODO: pass ReactDOM portal implementation as third argument
return _o(t)||Fo(!1,"Target container is not a DOM element."),or(e,t,null,n)}function Do(e,t){var n=ff.createContainer(e,t);this._reactRootContainer=n}var Ao=n(2),Fo=n(5),Lo=n(6),Uo=n(10),jo=n(3),Ho=n(1),zo=n(11),Vo=n(12),Bo=n(13),Wo=n(14),Ko=n(15),qo=n(4),$o=n(7),Qo=n(32),Yo=n(34);/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */
Ao||Fo(!1,"ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");// These attributes should be all lowercase to allow for
// case insensitive checks
var Go={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0},Xo={/**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,/**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
injectDOMPropertyConfig:function(e){var n=Xo,r=e.Properties||{},o=e.DOMAttributeNamespaces||{},a=e.DOMAttributeNames||{},i=e.DOMMutationMethods||{};for(var l in r){ta.hasOwnProperty(l)&&Fo(!1,"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",l);var u=l.toLowerCase(),s=r[l],c={attributeName:u,attributeNamespace:null,propertyName:l,mutationMethod:null,mustUseProperty:t(s,n.MUST_USE_PROPERTY),hasBooleanValue:t(s,n.HAS_BOOLEAN_VALUE),hasNumericValue:t(s,n.HAS_NUMERIC_VALUE),hasPositiveNumericValue:t(s,n.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:t(s,n.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:t(s,n.HAS_STRING_BOOLEAN_VALUE)};if(c.hasBooleanValue+c.hasNumericValue+c.hasOverloadedBooleanValue<=1||Fo(!1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",l),a.hasOwnProperty(l)){var d=a[l];c.attributeName=d}o.hasOwnProperty(l)&&(c.attributeNamespace=o[l]),i.hasOwnProperty(l)&&(c.mutationMethod=i[l]),// Downcase references to whitelist properties to check for membership
// without case-sensitivity. This allows the whitelist to pick up
// `allowfullscreen`, which should be written using the property configuration
// for `allowFullscreen`
ta[l]=c}}},Jo=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Zo=Jo+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",ea="data-reactroot",ta={},na=Xo,ra=na.MUST_USE_PROPERTY,oa=na.HAS_BOOLEAN_VALUE,aa=na.HAS_NUMERIC_VALUE,ia=na.HAS_POSITIVE_NUMERIC_VALUE,la=na.HAS_OVERLOADED_BOOLEAN_VALUE,ua=na.HAS_STRING_BOOLEAN_VALUE,sa={// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
Properties:{allowFullScreen:oa,// specifies target context for links with `preload` type
async:oa,// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
autoFocus:oa,autoPlay:oa,capture:la,checked:ra|oa,cols:ia,contentEditable:ua,controls:oa,default:oa,defer:oa,disabled:oa,download:la,draggable:ua,formNoValidate:oa,hidden:oa,loop:oa,// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:ra|oa,muted:ra|oa,noValidate:oa,open:oa,playsInline:oa,readOnly:oa,required:oa,reversed:oa,rows:ia,rowSpan:aa,scoped:oa,seamless:oa,selected:ra|oa,size:ia,start:aa,// support for projecting regular DOM Elements via V1 named slots ( shadow dom )
span:ia,spellCheck:ua,// Style must be explicitly set in the attribute list. React components
// expect a style object
style:0,// Keep it in the whitelist because it is case-sensitive for SVG.
tabIndex:0,// itemScope is for for Microdata support.
// See http://schema.org/docs/gs.html
itemScope:oa,// These attributes must stay in the white-list because they have
// different attribute names (see DOMAttributeNames below)
acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,// Attributes with mutation methods must be specified in the whitelist
// Set the string boolean flag to allow the behavior
value:ua},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");// Number inputs get special treatment due to some edge cases in
// Chrome. Let everything else assign the value attribute as normal.
// https://github.com/facebook/react/issues/7253#issuecomment-236074326
"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&// Don't assign an attribute if validation reports bad
// input. Chrome will clear the value. Additionally, don't
// operate on inputs that have focus, otherwise Chrome might
// strip off trailing decimal places and cause the user's
// cursor position to jump to the beginning of the input.
//
// In ReactDOMInput, we have an onBlur event that will trigger
// this function again when focus is lost.
e.setAttribute("value",""+t)}}},ca=na.HAS_STRING_BOOLEAN_VALUE,da={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},fa=["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","x-height","xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xmlns:xlink","xml:lang","xml:space"],pa={Properties:{autoReverse:ca,externalResourcesRequired:ca,preserveAlpha:ca},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:da.xlink,xlinkArcrole:da.xlink,xlinkHref:da.xlink,xlinkRole:da.xlink,xlinkShow:da.xlink,xlinkTitle:da.xlink,xlinkType:da.xlink,xmlBase:da.xml,xmlLang:da.xml,xmlSpace:da.xml}},ha=/[\-\:]([a-z])/g,ma=function(e){return e[1].toUpperCase()};fa.forEach(function(e){var t=e.replace(ha,ma);pa.Properties[t]=0,pa.DOMAttributeNames[t]=e}),na.injectDOMPropertyConfig(sa),na.injectDOMPropertyConfig(pa);var ga={// Used by Fiber to simulate a try-catch.
_caughtError:null,_hasCaughtError:!1,// Used by event system to capture/rethrow the first error.
_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(e){"function"!=typeof e.invokeGuardedCallback&&Fo(!1,"Injected invokeGuardedCallback() must be a function."),va=e.invokeGuardedCallback}},/**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
invokeGuardedCallback:function(e,t,n,r,o,a,i,l,u){va.apply(ga,arguments)},/**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if _caughtError and _rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
invokeGuardedCallbackAndCatchFirstError:function(e,t,n,r,o,a,i,l,u){if(ga.invokeGuardedCallback.apply(this,arguments),ga.hasCaughtError()){var s=ga.clearCaughtError();ga._hasRethrowError||(ga._hasRethrowError=!0,ga._rethrowError=s)}},/**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
rethrowCaughtError:function(){return wa.apply(ga,arguments)},hasCaughtError:function(){return ga._hasCaughtError},clearCaughtError:function(){if(ga._hasCaughtError){var e=ga._caughtError;return ga._caughtError=null,ga._hasCaughtError=!1,e}Fo(!1,"clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}},va=function(e,t,n,r,o,a,i,l,u){ga._hasCaughtError=!1,ga._caughtError=null;var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){ga._caughtError=e,ga._hasCaughtError=!0}};// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// untintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if("undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var ya=document.createElement("react");va=function(e,t,n,r,o,a,i,l,u){function s(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
ya.removeEventListener(g,s,!1),t.apply(n,f),d=!1}function c(e){p=e.error,h=!0,null===p&&0===e.colno&&0===e.lineno&&(m=!0)}// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
var d=!0,f=Array.prototype.slice.call(arguments,3),p=void 0,h=!1,m=!1,g="react-"+(e||"invokeguardedcallback");// Attach our event handlers
window.addEventListener("error",c),ya.addEventListener(g,s,!1);// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
var v=document.createEvent("Event");v.initEvent(g,!1,!1),ya.dispatchEvent(v),d?(h?m&&(p=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")):// The callback errored, but the error event never fired.
p=new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),ga._hasCaughtError=!0,ga._caughtError=p):(ga._hasCaughtError=!1,ga._caughtError=null),// Remove our event listeners
window.removeEventListener("error",c)}}var ba,wa=function(){if(ga._hasRethrowError){var e=ga._rethrowError;throw ga._rethrowError=null,ga._hasRethrowError=!1,e}},ka=null,Ca={},xa=[],Ta={},Ea={},Sa={},Pa={},_a=Object.freeze({plugins:xa,eventNameDispatchConfigs:Ta,registrationNameModules:Ea,registrationNameDependencies:Sa,possibleRegistrationNames:Pa,injectEventPluginOrder:d,injectEventPluginsByName:f}),Oa=null,Na=null,Ia=null,Ra={injectComponentTree:function(e){Oa=e.getFiberCurrentPropsFromNode,Na=e.getInstanceFromNode,Ia=e.getNodeFromInstance,Lo(Ia&&Na,"EventPluginUtils.injection.injectComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")}};ba=function(e){var t=e._dispatchListeners,n=e._dispatchInstances,r=Array.isArray(t),o=r?t.length:t?1:0,a=Array.isArray(n),i=a?n.length:n?1:0;Lo(a===r&&i===o,"EventPluginUtils: Invalid `event`.")};/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var Ma=null,Da=function(e,t){e&&(h(e,t),e.isPersistent()||e.constructor.release(e))},Aa=function(e){return Da(e,!0)},Fa=function(e){return Da(e,!1)},La={/**
   * @param {array} InjectedEventPluginOrder
   * @public
   */
injectEventPluginOrder:d,/**
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   */
injectEventPluginsByName:f},Ua=Object.freeze({injection:La,getListener:b,extractEvents:w,enqueueEvents:k,processEventQueue:C}),ja=0,Ha=1,za=2,Va=3,Ba=4,Wa=5,Ka=6,qa=7,$a=8,Qa=9,Ya=10,Ga=Math.random().toString(36).slice(2),Xa="__reactInternalInstance$"+Ga,Ja="__reactEventHandlers$"+Ga,Za=Object.freeze({precacheFiberNode:x,getClosestInstanceFromNode:T,getInstanceFromNode:E,getNodeFromInstance:S,getFiberCurrentPropsFromNode:P,updateFiberProps:_}),ei=Object.freeze({accumulateTwoPhaseDispatches:H,accumulateTwoPhaseDispatchesSkipTarget:z,accumulateEnterLeaveDispatches:V,accumulateDirectDispatches:B}),ti=null,ni={_root:null,_startText:null,_fallbackText:null},ri=!1,oi="function"==typeof Proxy,ai=10,ii=["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"],li={type:null,target:null,// currentTarget is set when dispatching; no use in copying it here
currentTarget:Ho.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};jo(Y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ho.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
e.cancelBubble=!0),this.isPropagationStopped=Ho.thatReturnsTrue)},/**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
persist:function(){this.isPersistent=Ho.thatReturnsTrue},/**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
isPersistent:Ho.thatReturnsFalse,/**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
destructor:function(){var e=this.constructor.Interface;for(var t in e)Object.defineProperty(this,t,G(t,e[t]));for(var n=0;n<ii.length;n++)this[ii[n]]=null;Object.defineProperty(this,"nativeEvent",G("nativeEvent",null)),Object.defineProperty(this,"preventDefault",G("preventDefault",Ho)),Object.defineProperty(this,"stopPropagation",G("stopPropagation",Ho))}}),Y.Interface=li,/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
Y.augmentClass=function(e,t){var n=this,r=function(){};r.prototype=n.prototype;var o=new r;jo(o,e.prototype),e.prototype=o,e.prototype.constructor=e,e.Interface=jo({},n.Interface,t),e.augmentClass=n.augmentClass,Z(e)},oi&&(/*eslint-disable no-func-assign */Y=new Proxy(Y,{construct:function(e,t){return this.apply(e,Object.create(e.prototype),t)},apply:function(e,t,n){return new Proxy(e.apply(t,n),{set:function(e,t,n){return"isPersistent"===t||e.constructor.Interface.hasOwnProperty(t)||-1!==ii.indexOf(t)||(Lo(ri||e.isPersistent(),"This synthetic event is reused for performance reasons. If you're seeing this, you're adding a new property in the synthetic event object. The property is never released. See https://fb.me/react-event-pooling for more information."),ri=!0),e[t]=n,!0}})}})),Z(Y);var ui=Y,si={data:null};ui.augmentClass(ee,si);/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var ci={data:null};ui.augmentClass(te,ci);var di=[9,13,27,32],fi=229,pi=Uo.canUseDOM&&"CompositionEvent"in window,hi=null;Uo.canUseDOM&&"documentMode"in document&&(hi=document.documentMode);// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var mi,gi=Uo.canUseDOM&&"TextEvent"in window&&!hi&&!/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function(){var e=window.opera;return"object"===(void 0===e?"undefined":r(e))&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}(),vi=Uo.canUseDOM&&(!pi||hi&&hi>8&&hi<=11),yi=32,bi=String.fromCharCode(yi),wi={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:["topBlur","topCompositionEnd","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:["topBlur","topCompositionStart","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:["topBlur","topCompositionUpdate","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]}},ki=!1,Ci=!1,xi={eventTypes:wi,extractEvents:function(e,t,n,r){return[le(e,t,n,r),ce(e,t,n,r)]}},Ti=null,Ei={injectFiberControlledHostComponent:function(e){// The fiber implementation doesn't use dynamic dispatch so we need to
// inject the implementation.
Ti=e}},Si=null,Pi=null,_i=Ei,Oi=Object.freeze({injection:_i,enqueueStateRestore:fe,restoreStateIfNeeded:pe}),Ni=function(e,t){return e(t)},Ii=!1,Ri={injectFiberBatchedUpdates:function(e){Ni=e}},Mi=Ri,Di={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ai=1,Fi=3,Li=8,Ui=9,ji=11;Uo.canUseDOM&&(mi=document.implementation&&document.implementation.hasFeature&&// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
!0!==document.implementation.hasFeature("",""));var Hi={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:["topBlur","topChange","topClick","topFocus","topInput","topKeyDown","topKeyUp","topSelectionChange"]}},zi=null,Vi=null,Bi=!1;Uo.canUseDOM&&(// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
Bi=ve("input")&&(!document.documentMode||document.documentMode>9));/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var Wi={eventTypes:Hi,_isInputEventSupported:Bi,extractEvents:function(e,t,n,r){var o,a,i=t?S(t):window;if(Se(i)?o=Ne:me(i)?Bi?o=Ue:(o=Ae,a=De):Fe(i)&&(o=Le),o){var l=o(e,t);if(l){return Ee(l,n,r)}}a&&a(e,i,t),// When blurring, set the value attribute for number inputs
"topBlur"===e&&je(t,i)}},Ki=["ResponderEventPlugin","SimpleEventPlugin","TapEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"],qi={view:null,detail:null};ui.augmentClass(He,qi);/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */
var $i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Qi={screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ve,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)}};He.augmentClass(Be,Qi);var Yi={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Gi={eventTypes:Yi,/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
extractEvents:function(e,t,n,r){if("topMouseOver"===e&&(n.relatedTarget||n.fromElement))return null;if("topMouseOut"!==e&&"topMouseOver"!==e)// Must not be a mouse in or mouse out - ignoring.
return null;var o;if(r.window===r)// `nativeEventTarget` is probably a window object.
o=r;else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var a=r.ownerDocument;o=a?a.defaultView||a.parentWindow:window}var i,l;if("topMouseOut"===e){i=t;var u=n.relatedTarget||n.toElement;l=u?T(u):null}else// Moving to a node from outside the window.
i=null,l=t;if(i===l)// Nothing pertains to our managed components.
return null;var s=null==i?o:S(i),c=null==l?o:S(l),d=Be.getPooled(Yi.mouseLeave,i,n,r);d.type="mouseleave",d.target=s,d.relatedTarget=c;var f=Be.getPooled(Yi.mouseEnter,l,n,r);return f.type="mouseenter",f.target=c,f.relatedTarget=s,V(d,f,i,l),[d,f]}},Xi=Ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Xi.ReactCurrentOwner,Zi=Xi.ReactDebugCurrentFrame,el=0,tl=1,nl=2,rl=4,ol=6,al=8,il=16,ll=32,ul=64,sl=128,cl=1,dl=2,fl=3,pl=10,hl=[],ml=!0,gl=void 0,vl=Object.freeze({get _enabled(){return ml},get _handleTopLevel(){return gl},setHandleTopLevel:at,setEnabled:it,isEnabled:lt,trapBubbledEvent:ut,trapCapturedEvent:st,dispatchEvent:ct}),yl={animationend:dt("Animation","AnimationEnd"),animationiteration:dt("Animation","AnimationIteration"),animationstart:dt("Animation","AnimationStart"),transitionend:dt("Transition","TransitionEnd")},bl={},wl={};/**
 * Bootstrap if a DOM exists.
 */
Uo.canUseDOM&&(wl=document.createElement("div").style,// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete yl.animationend.animation,delete yl.animationiteration.animation,delete yl.animationstart.animation),// Same as above
"TransitionEvent"in window||delete yl.transitionend.transition);/**
 * Types of raw signals from the browser caught at the top level.
 *
 * For events like 'submit' which don't consistently bubble (which we
 * trap at a lower node than `document`), binding at `document` would
 * cause duplicate events so we don't include them here.
 */
var kl={topAbort:"abort",topAnimationEnd:ft("animationend")||"animationend",topAnimationIteration:ft("animationiteration")||"animationiteration",topAnimationStart:ft("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:ft("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Cl={topLevelTypes:kl},xl=Cl.topLevelTypes,Tl={},El=0,Sl="_reactListenersID"+(""+Math.random()).slice(2),Pl=Uo.canUseDOM&&"documentMode"in document&&document.documentMode<=11,_l={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:["topBlur","topContextMenu","topFocus","topKeyDown","topKeyUp","topMouseDown","topMouseUp","topSelectionChange"]}},Ol=null,Nl=null,Il=null,Rl=!1,Ml={eventTypes:_l,extractEvents:function(e,t,n,r){var o=r.window===r?r.document:r.nodeType===Ui?r:r.ownerDocument;// Track whether all listeners exists for this plugin. If none exist, we do
// not extract events. See #3639.
if(!o||!vt("onSelect",o))return null;var a=t?S(t):window;switch(e){// Track the input node that has focus.
case"topFocus":(me(a)||"true"===a.contentEditable)&&(Ol=a,Nl=t,Il=null);break;case"topBlur":Ol=null,Nl=null,Il=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case"topMouseDown":Rl=!0;break;case"topContextMenu":case"topMouseUp":return Rl=!1,It(n,r);// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case"topSelectionChange":if(Pl)break;// falls through
case"topKeyDown":case"topKeyUp":return It(n,r)}return null}},Dl={animationName:null,elapsedTime:null,pseudoElement:null};ui.augmentClass(Rt,Dl);/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var Al={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};ui.augmentClass(Mt,Al);/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var Fl={relatedTarget:null};He.augmentClass(Dt,Fl);/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var Ll={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ul={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jl={key:Ft,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ve,// Legacy Interface
charCode:function(e){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===e.type?At(e):0},keyCode:function(e){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===e.type?At(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};He.augmentClass(Lt,jl);/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var Hl={dataTransfer:null};Be.augmentClass(Ut,Hl);/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var zl={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ve};He.augmentClass(jt,zl);/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */
var Vl={propertyName:null,elapsedTime:null,pseudoElement:null};ui.augmentClass(Ht,Vl);/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var Bl={deltaX:function(e){// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null};Be.augmentClass(zt,Bl);/**
 * Turns
 * ['abort', ...]
 * into
 * eventTypes = {
 *   'abort': {
 *     phasedRegistrationNames: {
 *       bubbled: 'onAbort',
 *       captured: 'onAbortCapture',
 *     },
 *     dependencies: ['topAbort'],
 *   },
 *   ...
 * };
 * topLevelEventsToDispatchConfig = {
 *   'topAbort': { sameConfig }
 * };
 */
var Wl={},Kl={};["abort","animationEnd","animationIteration","animationStart","blur","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","doubleClick","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","focus","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","progress","rateChange","reset","scroll","seeked","seeking","stalled","submit","suspend","timeUpdate","toggle","touchCancel","touchEnd","touchMove","touchStart","transitionEnd","volumeChange","waiting","wheel"].forEach(function(e){var t=e[0].toUpperCase()+e.slice(1),n="on"+t,r="top"+t,o={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[r]};Wl[e]=o,Kl[r]=o});// Only used in DEV for exhaustiveness validation.
var ql=["topAbort","topCancel","topCanPlay","topCanPlayThrough","topClose","topDurationChange","topEmptied","topEncrypted","topEnded","topError","topInput","topInvalid","topLoad","topLoadedData","topLoadedMetadata","topLoadStart","topPause","topPlay","topPlaying","topProgress","topRateChange","topReset","topSeeked","topSeeking","topStalled","topSubmit","topSuspend","topTimeUpdate","topToggle","topVolumeChange","topWaiting"],$l={eventTypes:Wl,extractEvents:function(e,t,n,r){var o=Kl[e];if(!o)return null;var a;switch(e){case"topKeyPress":// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===At(n))return null;/* falls through */case"topKeyDown":case"topKeyUp":a=Lt;break;case"topBlur":case"topFocus":a=Dt;break;case"topClick":// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===n.button)return null;/* falls through */case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":// TODO: Disabled elements should not respond to mouse events
/* falls through */
case"topMouseOut":case"topMouseOver":case"topContextMenu":a=Be;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":a=Ut;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":a=jt;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":a=Rt;break;case"topTransitionEnd":a=Ht;break;case"topScroll":a=He;break;case"topWheel":a=zt;break;case"topCopy":case"topCut":case"topPaste":a=Mt;break;default:-1===ql.indexOf(e)&&Lo(!1,"SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.",e),// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
a=ui}var i=a.getPooled(o,t,n,r);return H(i),i}};at(ht),/**
 * Inject modules for resolving DOM hierarchy and plugin ordering.
 */
La.injectEventPluginOrder(Ki),Ra.injectComponentTree(Za),/**
 * Some important event plugins included by default (without having to require
 * them).
 */
La.injectEventPluginsByName({SimpleEventPlugin:$l,EnterLeaveEventPlugin:Gi,ChangeEventPlugin:Wi,SelectEventPlugin:Ml,BeforeInputEventPlugin:xi});var Ql=!0,Yl=!1,Gl=!0,Xl=!0,Jl=!1,Zl=[],eu=[],tu=-1,nu=function(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")},ru={current:null,phase:null,resetCurrentFiber:Gt,setCurrentFiber:Xt,setCurrentPhase:Jt,getCurrentFiberOwnerName:Qt,getCurrentFiberStackAddendum:Yt},ou="undefined"!=typeof performance&&"function"==typeof performance.mark&&"function"==typeof performance.clearMarks&&"function"==typeof performance.measure&&"function"==typeof performance.clearMeasures,au=null,iu=null,lu=null,uu=!1,su=!1,cu=!1,du=0,fu=0,pu=!1,hu=new Set,mu=function(e){return"⚛ "+e},gu=function(e,t){return(t?"⛔ ":"⚛ ")+e+(t?" Warning: "+t:"")},vu=function(e){performance.mark(mu(e))},yu=function(e){performance.clearMarks(mu(e))},bu=function(e,t,n){var r=mu(t),o=gu(e,n);try{performance.measure(o,r)}catch(e){}// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(r),performance.clearMeasures(o)},wu=function(e,t){return e+" (#"+t+")"},ku=function(e,t,n){return null===n?e+" ["+(t?"update":"mount")+"]":e+"."+n},Cu=function(e,t){var n=$e(e)||"Unknown",r=e._debugID,o=null!==e.alternate,a=ku(n,o,t);if(uu&&hu.has(a))// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return!1;hu.add(a);var i=wu(a,r);return vu(i),!0},xu=function(e,t){var n=$e(e)||"Unknown",r=e._debugID,o=null!==e.alternate,a=ku(n,o,t),i=wu(a,r);yu(i)},Tu=function(e,t,n){var r=$e(e)||"Unknown",o=e._debugID,a=null!==e.alternate,i=ku(r,a,t),l=wu(i,o);bu(i,l,n)},Eu=function(e){// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(e.tag){case Va:case Wa:case Ka:case Ba:case Qa:case Ya:return!0;default:return!1}},Su=function(){null!==iu&&null!==lu&&xu(lu,iu),lu=null,iu=null,cu=!1},Pu=function(){for(// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var e=au;e;)e._debugIsCurrentlyTiming&&Tu(e,null,null),e=e.return},_u=function e(t){null!==t.return&&e(t.return),t._debugIsCurrentlyTiming&&Cu(t,null)},Ou=function(){// Resumes all measurements that were active during the last deferred loop.
null!==au&&_u(au)},Nu={},Iu=Vt(qo),Ru=Vt(!1),Mu=qo,Du=0,Au=1,Fu=2147483647,Lu=10,Uu=2,ju=0,Hu=1,zu=!1;try{var Vu=Object.preventExtensions({});/* eslint-disable no-new */new Map([[Vu,null]]),new Set([Vu])}catch(e){// TODO: Consider warning about bad polyfills
zu=!0}var Bu=1,Wu=function(e,t,n){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new An(e,t,n)},Ku=null,qu=null,$u=!1,Qu=!1,Yu={},Gu=Array.isArray,Xu={},Ju=function(e,t){Lo(null===e||"function"==typeof e,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)};// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(Yu,"_processChildContext",{enumerable:!1,value:function(){Fo(!1,"_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(Yu);var Zu,es,ts,ns,rs=function(e,t,n,o){function a(e,t,n,r,o,a){if(null===t||null!==e.updateQueue&&e.updateQueue.hasForceUpdate)// If the workInProgress already has an Update effect, return true
return!0;var i=e.stateNode,l=e.type;if("function"==typeof i.shouldComponentUpdate){un(e,"shouldComponentUpdate");var u=i.shouldComponentUpdate(n,o,a);return sn(),Lo(void 0!==u,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",$e(e)||"Unknown"),u}return!l.prototype||!l.prototype.isPureReactComponent||(!Bo(t,n)||!Bo(r,o))}function i(e){var t=e.stateNode,n=e.type,o=$e(e);t.render||(n.prototype&&"function"==typeof n.prototype.render?Lo(!1,"%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):Lo(!1,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o));var a=!t.getInitialState||t.getInitialState.isReactClassApproved||t.state;Lo(a,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o);var i=!t.getDefaultProps||t.getDefaultProps.isReactClassApproved;Lo(i,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o);var l=!t.propTypes;Lo(l,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o);var u=!t.contextTypes;Lo(u,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o);var s="function"!=typeof t.componentShouldUpdate;Lo(s,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),n.prototype&&n.prototype.isPureReactComponent&&void 0!==t.shouldComponentUpdate&&Lo(!1,"%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",$e(e)||"A pure component");var c="function"!=typeof t.componentDidUnmount;Lo(c,"%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o);var d="function"!=typeof t.componentDidReceiveProps;Lo(d,"%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o);var f="function"!=typeof t.componentWillRecieveProps;Lo(f,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o);var p=t.props!==e.pendingProps;Lo(void 0===t.props||!p,"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o);var h=!t.defaultProps;Lo(h,"Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o);var m=t.state;m&&("object"!==(void 0===m?"undefined":r(m))||Gu(m))&&Fo(!1,"%s.state: must be set to an object or null",$e(e)),"function"==typeof t.getChildContext&&"object"!==r(e.type.childContextTypes)&&Fo(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",$e(e))}function l(e,t){t.props=e.memoizedProps,t.state=e.memoizedState}function u(e,t){t.updater=h,e.stateNode=t,// The instance needs access to the fiber so that it can schedule updates
qe(t,e),t._reactInternalInstance=Yu}function s(e,t){var n=e.type,r=yn(e),o=Cn(e),a=o?wn(e,r):qo,i=new n(t,a);// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
return u(e,i),o&&bn(e,r,a),i}function c(e,t){un(e,"componentWillMount");var n=t.state;t.componentWillMount(),sn(),n!==t.state&&(Lo(!1,"%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",$e(e)),h.enqueueReplaceState(t,t.state,null))}function d(e,t,n,r){un(e,"componentWillReceiveProps");var o=t.state;if(t.componentWillReceiveProps(n,r),sn(),t.state!==o){var a=$e(e)||"Component";Xu[a]||(Lo(!1,"%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",a),Xu[a]=!0),h.enqueueReplaceState(t,t.state,null)}}// Invokes the mount life-cycles on a previously never rendered instance.
function f(e,t){var n=e.alternate;i(e);var r=e.stateNode,o=r.state||null,a=e.pendingProps;a||Fo(!1,"There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.");var l=yn(e);if(r.props=a,r.state=e.memoizedState=o,r.refs=qo,r.context=wn(e,l),Ql&&null!=e.type&&null!=e.type.prototype&&!0===e.type.prototype.unstable_isAsyncReactComponent&&(e.internalContextTag|=Hu),"function"==typeof r.componentWillMount){c(e,r);// If we had additional state updates during this life-cycle, let's
// process them now.
var u=e.updateQueue;null!==u&&(r.state=nr(n,e,u,r,a,t))}"function"==typeof r.componentDidMount&&(e.effectTag|=rl)}// Called on a preexisting class instance. Returns false if a resumed render
// could be reused.
// function resumeMountClassInstance(
//   workInProgress: Fiber,
//   priorityLevel: PriorityLevel,
// ): boolean {
//   const instance = workInProgress.stateNode;
//   resetInputPointers(workInProgress, instance);
//   let newState = workInProgress.memoizedState;
//   let newProps = workInProgress.pendingProps;
//   if (!newProps) {
//     // If there isn't any new props, then we'll reuse the memoized props.
//     // This could be from already completed work.
//     newProps = workInProgress.memoizedProps;
//     invariant(
//       newProps != null,
//       'There should always be pending or memoized props. This error is ' +
//         'likely caused by a bug in React. Please file an issue.',
//     );
//   }
//   const newUnmaskedContext = getUnmaskedContext(workInProgress);
//   const newContext = getMaskedContext(workInProgress, newUnmaskedContext);
//   const oldContext = instance.context;
//   const oldProps = workInProgress.memoizedProps;
//   if (
//     typeof instance.componentWillReceiveProps === 'function' &&
//     (oldProps !== newProps || oldContext !== newContext)
//   ) {
//     callComponentWillReceiveProps(
//       workInProgress,
//       instance,
//       newProps,
//       newContext,
//     );
//   }
//   // Process the update queue before calling shouldComponentUpdate
//   const updateQueue = workInProgress.updateQueue;
//   if (updateQueue !== null) {
//     newState = processUpdateQueue(
//       workInProgress,
//       updateQueue,
//       instance,
//       newState,
//       newProps,
//       priorityLevel,
//     );
//   }
//   // TODO: Should we deal with a setState that happened after the last
//   // componentWillMount and before this componentWillMount? Probably
//   // unsupported anyway.
//   if (
//     !checkShouldComponentUpdate(
//       workInProgress,
//       workInProgress.memoizedProps,
//       newProps,
//       workInProgress.memoizedState,
//       newState,
//       newContext,
//     )
//   ) {
//     // Update the existing instance's state, props, and context pointers even
//     // though we're bailing out.
//     instance.props = newProps;
//     instance.state = newState;
//     instance.context = newContext;
//     return false;
//   }
//   // Update the input pointers now so that they are correct when we call
//   // componentWillMount
//   instance.props = newProps;
//   instance.state = newState;
//   instance.context = newContext;
//   if (typeof instance.componentWillMount === 'function') {
//     callComponentWillMount(workInProgress, instance);
//     // componentWillMount may have called setState. Process the update queue.
//     const newUpdateQueue = workInProgress.updateQueue;
//     if (newUpdateQueue !== null) {
//       newState = processUpdateQueue(
//         workInProgress,
//         newUpdateQueue,
//         instance,
//         newState,
//         newProps,
//         priorityLevel,
//       );
//     }
//   }
//   if (typeof instance.componentDidMount === 'function') {
//     workInProgress.effectTag |= Update;
//   }
//   instance.state = newState;
//   return true;
// }
// Invokes the update life-cycles and returns false if it shouldn't rerender.
function p(e,t,r){var i=t.stateNode;l(t,i);var u=t.memoizedProps,s=t.pendingProps;s||null==(// If there aren't any new props, then we'll reuse the memoized props.
// This could be from already completed work.
s=u)&&Fo(!1,"There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.");var c=i.context,f=yn(t),p=wn(t,f);// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
"function"!=typeof i.componentWillReceiveProps||u===s&&c===p||d(t,i,s,p);// Compute the next state using the memoized state and the update queue.
var h=t.memoizedState,m=void 0;if(m=null!==t.updateQueue?nr(e,t,t.updateQueue,i,s,r):h,!(u!==s||h!==m||kn()||null!==t.updateQueue&&t.updateQueue.hasForceUpdate))// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"==typeof i.componentDidUpdate&&(u===e.memoizedProps&&h===e.memoizedState||(t.effectTag|=rl)),!1;var g=a(t,u,s,h,m,p);// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
return g?("function"==typeof i.componentWillUpdate&&(un(t,"componentWillUpdate"),i.componentWillUpdate(s,m,p),sn()),"function"==typeof i.componentDidUpdate&&(t.effectTag|=rl)):("function"==typeof i.componentDidUpdate&&(u===e.memoizedProps&&h===e.memoizedState||(t.effectTag|=rl)),n(t,s),o(t,m)),i.props=s,i.state=m,i.context=p,g}// Class component state updater
var h={isMounted:Ge,enqueueSetState:function(n,r,o){var a=We(n);o=void 0===o?null:o,Ju(o,"setState");var i=t(a);Zn(a,{expirationTime:i,partialState:r,callback:o,isReplace:!1,isForced:!1,nextCallback:null,next:null}),e(a,i)},enqueueReplaceState:function(n,r,o){var a=We(n);o=void 0===o?null:o,Ju(o,"replaceState");var i=t(a);Zn(a,{expirationTime:i,partialState:r,callback:o,isReplace:!0,isForced:!1,nextCallback:null,next:null}),e(a,i)},enqueueForceUpdate:function(n,r){var o=We(n);r=void 0===r?null:r,Ju(r,"forceUpdate");var a=t(o);Zn(o,{expirationTime:a,partialState:null,callback:r,isReplace:!1,isForced:!0,nextCallback:null,next:null}),e(o,a)}};return{adoptClassInstance:u,constructClassInstance:s,mountClassInstance:f,// resumeMountClassInstance,
updateClassInstance:p}},os="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,as=ru.getCurrentFiberStackAddendum,is=!1,ls={},us={},ss=function(e){if(null!==e&&"object"===(void 0===e?"undefined":r(e))&&e._store&&!e._store.validated&&null==e.key){"object"!==r(e._store)&&Fo(!1,"React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."),e._store.validated=!0;var t='Each child in an array or iterator should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'+(as()||"");ls[t]||(ls[t]=!0,Lo(!1,'Each child in an array or iterator should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.%s',as()))}},cs=Array.isArray,ds="function"==typeof Symbol&&Symbol.iterator,fs="@@iterator";"function"==typeof Symbol&&Symbol.for?(Zu=Symbol.for("react.element"),es=Symbol.for("react.call"),ts=Symbol.for("react.return"),ns=Symbol.for("react.fragment")):(Zu=60103,es=60104,ts=60105,ns=60107);var ps=sr(!0,!0),hs=sr(!1,!0),ms=sr(!1,!1),gs={},vs=function(e,t,n,o,a){// TODO: Remove this and use reconcileChildrenAtExpirationTime directly.
function i(e,t,n){l(e,t,n,t.expirationTime)}function l(e,t,n,r){null===e?// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
t.child=ms(t,t.child,n,r):e.child===t.child?// If the current child is the same as the work in progress, it means that
// we haven't yet started any work on these children. Therefore, we use
// the clone algorithm to create a copy of all the current children.
// If we had any progressed work already, that is invalid at this point so
// let's throw it out.
t.child=ps(t,t.child,n,r):// If, on the other hand, it is already using a clone, that means we've
// already begun some work on this tree and we can continue where we left
// off by reconciling against the existing children.
t.child=hs(t,t.child,n,r)}function u(e,t){var n=t.pendingProps;if(kn())// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
null===n&&(n=t.memoizedProps);else if(null===n||t.memoizedProps===n)return w(e,t);return i(e,t,n),C(t,n),t.child}function s(e,t){var n=t.ref;null===n||e&&e.ref===n||(// Schedule a Ref effect
t.effectTag|=sl)}function c(e,t){var n=t.type,r=t.pendingProps,o=t.memoizedProps;if(kn())// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
null===r&&(r=o);else if(null===r||o===r)return w(e,t);var a,l=yn(t),u=wn(t,l);// React DevTools reads this flag.
return Ji.current=t,ru.setCurrentPhase("render"),a=n(r,u),ru.setCurrentPhase(null),t.effectTag|=tl,i(e,t,a),C(t,r),t.child}function d(e,t,n){// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var r=_n(t),o=void 0;// In the initial pass we might need to construct the instance.
return null===e?t.stateNode?Fo(!1,"Resuming work not yet implemented."):(F(t,t.pendingProps),L(t,n),o=!0):o=U(e,t,n),f(e,t,o,r)}function f(e,t,n,r){if(// Refs should update even if shouldComponentUpdate returns false
s(e,t),!n)// Context providers should defer to sCU for rendering
return r&&On(t,!1),w(e,t);var o=t.stateNode;// Rerender
Ji.current=t;var a=void 0;// React DevTools reads this flag.
// Memoize props and state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
// The context might have changed so we need to recalculate it.
return ru.setCurrentPhase("render"),a=o.render(),ru.setCurrentPhase(null),t.effectTag|=tl,i(e,t,a),x(t,o.state),C(t,o.props),r&&On(t,!0),t.child}function p(e){var t=e.stateNode;t.pendingContext?Sn(e,t.pendingContext,t.pendingContext!==t.context):t.context&&// Should always be set
Sn(e,t.context,!1),N(e,t.containerInfo)}function h(e,t,n){p(t);var r=t.updateQueue;if(null!==r){var o=t.memoizedState,a=nr(e,t,r,null,null,n);if(o===a)// If the state is the same as before, that's a bailout because we had
// no work that expires at this time.
return R(),w(e,t);var l=a.element,u=t.stateNode;// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
// This is a bit of a hack. We track the host root as a placement to
// know that we're currently in a mounting state. That way isMounted
// works as expected. We must reset this before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
// Ensure that children mount into this root without tracking
// side-effects. This ensures that we don't store Placement effects on
// nodes that will be hydrated.
// Otherwise reset hydration state in case we aborted and resumed another
// root.
return(null===e||null===e.child)&&u.hydrate&&I(t)?(t.effectTag|=nl,t.child=ms(t,t.child,l,n)):(R(),i(e,t,l)),x(t,a),t.child}// If there is no update queue, that's a bailout because the root has no props.
return R(),w(e,t)}function m(e,t,n){O(t),null===e&&M(t);var r=t.type,o=t.memoizedProps,a=t.pendingProps;null===a&&null===(a=o)&&Fo(!1,"We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.");var l=null!==e?e.memoizedProps:null;if(kn());else if(null===a||o===a)return w(e,t);var u=a.children;// Check the host config to see if the children are offscreen/hidden.
// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also have access to this prop. That
// avoids allocating another HostText fiber and traversing it.
// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
// Check the host config to see if the children are offscreen/hidden.
// Down-prioritize the children.
return S(r,a)?u=null:l&&S(r,l)&&(t.effectTag|=il),s(e,t),n!==Fu&&!P&&_(r,a)?(t.expirationTime=Fu,null):(i(e,t,u),C(t,a),t.child)}function g(e,t){null===e&&M(t);var n=t.pendingProps;// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null===n&&(n=t.memoizedProps),C(t,n),null}function v(e,t,n){null!==e&&Fo(!1,"An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.");var o,a=t.type,l=t.pendingProps,u=yn(t),s=wn(t,u);if(a.prototype&&"function"==typeof a.prototype.render){var c=$e(t);Lo(!1,"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",c,c)}if(Ji.current=t,o=a(l,s),// React DevTools reads this flag.
t.effectTag|=tl,"object"===(void 0===o?"undefined":r(o))&&null!==o&&"function"==typeof o.render){// Proceed under the assumption that this is a class instance
t.tag=za;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var d=_n(t);return A(t,o),L(t,n),f(e,t,!0,d)}// Proceed under the assumption that this is a functional component
t.tag=Ha;var p=t.type;if(p&&Lo(!p.childContextTypes,"%s(...): childContextTypes cannot be defined on a functional component.",p.displayName||p.name||"Component"),null!==t.ref){var h="",m=ru.getCurrentFiberOwnerName();m&&(h+="\n\nCheck the render method of `"+m+"`.");var g=m||t._debugID||"",v=t._debugSource;v&&(g=v.fileName+":"+v.lineNumber),gs[g]||(gs[g]=!0,Lo(!1,"Stateless function components cannot be given refs. Attempts to access this ref will fail.%s%s",h,ru.getCurrentFiberStackAddendum()))}return i(e,t,o),C(t,l),t.child}function y(e,t,n){var r=t.pendingProps;kn()?// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
null===r&&null===(r=e&&e.memoizedProps)&&Fo(!1,"We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue."):null!==r&&t.memoizedProps!==r||(r=t.memoizedProps);var o=r.children;// This doesn't take arbitrary time so we could synchronously just begin
// eagerly do the work of workInProgress.child as an optimization.
// The following is a fork of reconcileChildrenAtExpirationTime but using
// stateNode to store the child.
return null===e?t.stateNode=ms(t,t.stateNode,o,n):e.child===t.child?t.stateNode=ps(t,t.stateNode,o,n):t.stateNode=hs(t,t.stateNode,o,n),C(t,r),t.stateNode}function b(e,t,n){N(t,t.stateNode.containerInfo);var r=t.pendingProps;if(kn())// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
null===r&&null==(r=e&&e.memoizedProps)&&Fo(!1,"We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.");else if(null===r||t.memoizedProps===r)return w(e,t);// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
return null===e?(t.child=hs(t,t.child,r,n),C(t,r)):(i(e,t,r),C(t,r)),t.child}/*
  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
    let child = firstChild;
    do {
      // Ensure that the first and last effect of the parent corresponds
      // to the children's first and last effect.
      if (!returnFiber.firstEffect) {
        returnFiber.firstEffect = child.firstEffect;
      }
      if (child.lastEffect) {
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = child.firstEffect;
        }
        returnFiber.lastEffect = child.lastEffect;
      }
    } while (child = child.sibling);
  }
  */
function w(e,t){// TODO: We should ideally be able to bail out early if the children have no
// more work to do. However, since we don't have a separation of this
// Fiber's priority and its children yet - we don't know without doing lots
// of the same work we do anyway. Once we have that separation we can just
// bail out here if the children has no more work at this priority level.
// if (workInProgress.priorityOfChildren <= priorityLevel) {
//   // If there are side-effects in these children that have not yet been
//   // committed we need to ensure that they get properly transferred up.
//   if (current && current.child !== workInProgress.child) {
//     reuseChildrenEffects(workInProgress, child);
//   }
//   return null;
// }
return on(t),cr(e,t),t.child}function k(e,t){// TODO: Handle HostComponent tags here as well and call pushHostContext()?
// See PR 8590 discussion for context
switch(on(t),t.tag){case Va:p(t);break;case za:_n(t);break;case Ba:N(t,t.stateNode.containerInfo)}// TODO: What if this is currently in progress?
// How can that happen? How is this not being cloned?
return null}// TODO: Delete memoizeProps/State and move to reconcile/bailout instead
function C(e,t){e.memoizedProps=t}function x(e,t){e.memoizedState=t}function T(e,t,n){if(t.expirationTime===Du||t.expirationTime>n)return k(e,t);switch(t.tag){case ja:return v(e,t,n);case Ha:return c(e,t);case za:return d(e,t,n);case Va:return h(e,t,n);case Wa:return m(e,t,n);case Ka:return g(e,t);case $a:// This is a restart. Reset the tag to the initial phase.
t.tag=qa;// Intentionally fall through since this is now the same.
case qa:return y(e,t,n);case Qa:// A return component is just a placeholder, we can just run through the
// next one immediately.
return null;case Ba:return b(e,t,n);case Ya:return u(e,t);default:Fo(!1,"Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.")}}function E(e,t,n){// Push context providers here to avoid a push/pop context mismatch.
switch(t.tag){case za:_n(t);break;case Va:p(t);break;default:Fo(!1,"Invalid type of work. This error is likely caused by a bug in React. Please file an issue.")}if(// Add an error effect so we can handle the error during the commit phase
t.effectTag|=ul,// This is a weird case where we do "resume" work — work that failed on
// our first attempt. Because we no longer have a notion of "progressed
// deletions," reset the child to the current child to make sure we delete
// it again. TODO: Find a better way to handle this, perhaps during a more
// general overhaul of error handling.
null===e?t.child=null:t.child!==e.child&&(t.child=e.child),t.expirationTime===Du||t.expirationTime>n)return k(e,t);// If we don't bail out, we're going be recomputing our children so we need
// to drop our effect list.
t.firstEffect=null,t.lastEffect=null;if(l(e,t,null,n),t.tag===za){var r=t.stateNode;t.memoizedProps=r.props,t.memoizedState=r.state}return t.child}var S=e.shouldSetTextContent,P=e.useSyncScheduling,_=e.shouldDeprioritizeSubtree,O=t.pushHostContext,N=t.pushHostContainer,I=n.enterHydrationState,R=n.resetHydrationState,M=n.tryToClaimNextHydratableInstance,D=rs(o,a,C,x),A=D.adoptClassInstance,F=D.constructClassInstance,L=D.mountClassInstance,U=D.updateClassInstance;return{beginWork:T,beginFailedWork:E}},ys=function(e,t,n){function r(e){// Tag the fiber with an update effect. This turns a Placement into
// an UpdateAndPlacement.
e.effectTag|=rl}function o(e){e.effectTag|=sl}function a(e,t){var n=t.stateNode;for(n&&(n.return=t);null!==n;){if(n.tag===Wa||n.tag===Ka||n.tag===Ba)Fo(!1,"A call cannot have host component children.");else if(n.tag===Qa)e.push(n.type);else if(null!==n.child){n.child.return=n,n=n.child;continue}for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function i(e,t,n){var r=t.memoizedProps;r||Fo(!1,"Should be resolved by now. This error is likely caused by a bug in React. Please file an issue."),// First step of the call has completed. Now we need to do the second.
// TODO: It would be nice to have a multi stage call represented by a
// single component, or at least tail call optimize nested ones. Currently
// that requires additional fields that we don't want to add to the fiber.
// So this requires nested handlers.
// Note: This doesn't mutate the alternate node. I don't think it needs to
// since this stage is reset for every pass.
t.tag=$a;// Build up the returns.
// TODO: Compare this to a generator or opaque helpers like Children.
var o=[];a(o,t);var i=r.handler,l=r.props,u=i(l,o),s=null!==e?e.child:null;return t.child=ps(t,s,u,n),t.child}function l(e,t){for(// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var n=t.child;null!==n;){if(n.tag===Wa||n.tag===Ka)d(e,n.stateNode);else if(n.tag===Ba);else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)return;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function u(e,t,n){// Get the latest props.
var a=t.pendingProps;switch(null===a?a=t.memoizedProps:t.expirationTime===Fu&&n!==Fu||(// Reset the pending props, unless this was a down-prioritization.
t.pendingProps=null),t.tag){case Ha:return null;case za:// We are leaving this subtree, so pop context if any.
return Tn(t),null;case Va:b(t),En(t);var u=t.stateNode;// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
// This resets the hacky state to fix isMounted before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
return u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),null!==e&&null!==e.child||(C(t),t.effectTag&=~nl),x(t),null;case Wa:v(t);var d=g(),h=t.type;if(null!==e&&null!=t.stateNode){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var m=e.memoizedProps,S=t.stateNode,P=y(),_=p(S,h,m,a,d,P);T(e,t,_,h,m,a,d),e.ref!==t.ref&&o(t)}else{if(!a)// This can happen when we abort work.
return null===t.stateNode&&Fo(!1,"We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."),null;var O=y();if(C(t))// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
w(t,d,O)&&// If changes to the hydrated node needs to be applied at the
// commit-phase we mark this as such.
r(t);else{var N=s(h,a,d,O,t);l(N,t),// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
f(N,h,a,d)&&r(t),t.stateNode=N}null!==t.ref&&// If there is a ref on a host node we need to schedule a callback
o(t)}return null;case Ka:var I=a;if(e&&null!=t.stateNode){var R=e.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
E(e,t,R,I)}else{if("string"!=typeof I)// This can happen when we abort work.
return null===t.stateNode&&Fo(!1,"We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."),null;var M=g(),D=y();C(t)?k(t)&&r(t):t.stateNode=c(I,M,D,t)}return null;case qa:return i(e,t,n);case $a:// Reset the tag to now be a first phase call.
return t.tag=qa,null;case Qa:case Ya:return null;case Ba:return b(t),x(t),null;// Error cases
case ja:Fo(!1,"An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.");// eslint-disable-next-line no-fallthrough
default:Fo(!1,"Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.")}}var s=e.createInstance,c=e.createTextInstance,d=e.appendInitialChild,f=e.finalizeInitialChildren,p=e.prepareUpdate,h=e.mutation,m=e.persistence,g=t.getRootHostContainer,v=t.popHostContext,y=t.getHostContext,b=t.popHostContainer,w=n.prepareToHydrateHostInstance,k=n.prepareToHydrateHostTextInstance,C=n.popHydrationState,x=void 0,T=void 0,E=void 0;if(h)Xl?(// Mutation mode
x=function(e){},T=function(e,t,n,o,a,i,l){// TODO: Type this specific to this type of component.
t.updateQueue=n,// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
n&&r(t)},E=function(e,t,n,o){// If the text differs, mark it as an update. All the work in done in commitWork.
n!==o&&r(t)}):Fo(!1,"Mutating reconciler is disabled.");else if(m)if(Jl){// Persistent host tree mode
var S=m.cloneInstance,P=m.createContainerChildSet,_=m.appendChildToContainerChildSet,O=m.finalizeContainerChildren,N=function(e,t){for(// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var n=t.child;null!==n;){if(n.tag===Wa||n.tag===Ka)_(e,n.stateNode);else if(n.tag===Ba);else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)return;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};x=function(e){var t=e.stateNode;if(null===e.firstEffect);else{var n=t.containerInfo,o=P(n);O(n,o)&&r(e),t.pendingChildren=o,// If children might have changed, we have to add them all to the set.
N(o,e),// Schedule an update on the container to swap out the container.
r(e)}},T=function(e,t,n,o,a,i,u){// If there are no effects associated with this node, then none of our children had any updates.
// This guarantees that we can reuse all of them.
var s=null===t.firstEffect,c=e.stateNode;if(s&&null===n)// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
t.stateNode=c;else{var d=t.stateNode,p=S(c,n,o,a,i,t,s,d);f(p,o,i,u)&&r(t),t.stateNode=p,s?// If there are no other effects in this tree, we need to flag this node as having one.
// Even though we're not going to use it for anything.
// Otherwise parents won't know that there are new children to propagate upwards.
r(t):// If children might have changed, we have to add them all to the set.
l(p,t)}},E=function(e,t,n,o){if(n!==o){// If the text content differs, we'll create a new text instance for it.
var a=g(),i=y();t.stateNode=c(o,a,i,t),// We'll have to mark it as having an effect, even though we won't use the effect for anything.
// This lets the parents know that at least one of their children has changed.
r(t)}}}else Fo(!1,"Persistent reconciler is disabled.");else Fo(!1,"Noop reconciler is disabled.");return{completeWork:u}},bs=ga.invokeGuardedCallback,ws=ga.hasCaughtError,ks=ga.clearCaughtError,Cs=function(e,t){// Capture errors so they don't interrupt unmounting.
function n(e,n){if(bs(null,k,null,e,n),ws()){var r=ks();t(e,r)}}function r(e){var n=e.ref;if(null!==n&&(bs(null,n,null,null),ws())){var r=ks();t(e,r)}}function o(e,t){switch(t.tag){case za:var n=t.stateNode;if(t.effectTag&rl)if(null===e)un(t,"componentDidMount"),n.props=t.memoizedProps,n.state=t.memoizedState,n.componentDidMount(),sn();else{var r=e.memoizedProps,o=e.memoizedState;un(t,"componentDidUpdate"),n.props=t.memoizedProps,n.state=t.memoizedState,n.componentDidUpdate(r,o),sn()}var a=t.updateQueue;return void(null!==a&&rr(a,n));case Va:var i=t.updateQueue;if(null!==i){rr(i,null!==t.child?t.child.stateNode:null)}return;case Wa:var l=t.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(null===e&&t.effectTag&rl){var u=t.type,s=t.memoizedProps;S(l,u,s,t)}return;case Ka:case Ba:// We have no life-cycles associated with portals.
return;default:Fo(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function a(e){var t=e.ref;if(null!==t){var n=e.stateNode;switch(e.tag){case Wa:t(y(n));break;default:t(n)}}}function i(e){var t=e.ref;null!==t&&t(null)}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function l(e){switch("function"==typeof Gn&&Gn(e),e.tag){case za:r(e);var t=e.stateNode;return void("function"==typeof t.componentWillUnmount&&n(e,t));case Wa:return void r(e);case qa:return void u(e.stateNode);case Ba:// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
return void(Xl&&b?h(e):Jl&&w&&E(e))}}function u(e){for(// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
var t=e;;)// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(l(t),null===t.child||b&&t.tag===Ba){if(t===e)return;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}else t.child.return=t,t=t.child}function s(e){// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
e.return=null,e.child=null,e.alternate&&(e.alternate.child=null,e.alternate.return=null)}function c(e){for(var t=e.return;null!==t;){if(d(t))return t;t=t.return}Fo(!1,"Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function d(e){return e.tag===Wa||e.tag===Va||e.tag===Ba}function f(e){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
var t=e;e:for(;;){// If we didn't find anything, let's try the next sibling.
for(;null===t.sibling;){if(null===t.return||d(t.return))// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==Wa&&t.tag!==Ka;){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(t.effectTag&nl)// If we don't have a child, try the siblings instead.
continue e;// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(null===t.child||t.tag===Ba)continue e;t.child.return=t,t=t.child}// Check if this host node is stable or about to be placed.
if(!(t.effectTag&nl))// Found it!
return t.stateNode}}function p(e){// Recursively insert all host nodes into the parent.
var t=c(e),n=void 0,r=void 0;switch(t.tag){case Wa:n=t.stateNode,r=!1;break;case Va:case Ba:n=t.stateNode.containerInfo,r=!0;break;default:Fo(!1,"Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}t.effectTag&il&&(// Reset the text content of the parent before doing any insertions
_(n),// Clear ContentReset from the effect tag
t.effectTag&=~il);for(var o=f(e),a=e;;){if(a.tag===Wa||a.tag===Ka)o?r?M(n,a.stateNode,o):R(n,a.stateNode,o):r?I(n,a.stateNode):N(n,a.stateNode);else if(a.tag===Ba);else if(null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)return;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function h(e){for(// We only have the top Fiber that was inserted but we need recurse down its
var t=e,n=!1,r=void 0,o=void 0;;){if(!n){var a=t.return;e:for(;;){switch(null===a&&Fo(!1,"Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."),a.tag){case Wa:r=a.stateNode,o=!1;break e;case Va:case Ba:r=a.stateNode.containerInfo,o=!0;break e}a=a.return}n=!0}if(t.tag===Wa||t.tag===Ka)u(t),// After all the children have unmounted, it is now safe to remove the
// node from the tree.
o?A(r,t.stateNode):D(r,t.stateNode);else if(t.tag===Ba){// Visit children because portals might contain host components.
if(// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
r=t.stateNode.containerInfo,null!==t.child){t.child.return=t,t=t.child;continue}}else// Visit children because we may find more host components below.
if(l(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)return;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return,t.tag===Ba&&(// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
n=!1)}t.sibling.return=t.return,t=t.sibling}}function m(e){// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
h(e),s(e)}function g(e,t){switch(t.tag){case za:return;case Wa:var n=t.stateNode;if(null!=n){// Commit the work prepared earlier.
var r=t.memoizedProps,o=null!==e?e.memoizedProps:r,a=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&P(n,i,a,o,r,t)}return;case Ka:null===t.stateNode&&Fo(!1,"This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var l=t.stateNode,u=t.memoizedProps,s=null!==e?e.memoizedProps:u;return void O(l,s,u);case Va:return;default:Fo(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function v(e){_(e.stateNode)}var y=e.getPublicInstance,b=e.mutation,w=e.persistence,k=function(e,t){un(e,"componentWillUnmount"),t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount(),sn()};if(!b){var C=void 0;if(w){var x=w.replaceContainerChildren,T=w.createContainerChildSet,E=function(e){var t=e.stateNode,n=t.containerInfo,r=T(n);x(n,r)};C=function(e){switch(e.tag){case za:case Wa:case Ka:return;case Va:case Ba:var t=e.stateNode,n=t.containerInfo,r=t.pendingChildren;return void x(n,r);default:Fo(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}}else C=function(e){};if(Jl)return{commitResetTextContent:function(e){},commitPlacement:function(e){},commitDeletion:function(e){// Detach refs and call componentWillUnmount() on the whole subtree.
u(e),s(e)},commitWork:function(e,t){C(t)},commitLifeCycles:o,commitAttachRef:a,commitDetachRef:i};w?Fo(!1,"Persistent reconciler is disabled."):Fo(!1,"Noop reconciler is disabled.")}var S=b.commitMount,P=b.commitUpdate,_=b.resetTextContent,O=b.commitTextUpdate,N=b.appendChild,I=b.appendChildToContainer,R=b.insertBefore,M=b.insertInContainerBefore,D=b.removeChild,A=b.removeChildFromContainer;if(Xl)return{commitResetTextContent:v,commitPlacement:p,commitDeletion:m,commitWork:g,commitLifeCycles:o,commitAttachRef:a,commitDetachRef:i};Fo(!1,"Mutating reconciler is disabled.")},xs={},Ts=function(e){function t(e){return e===xs&&Fo(!1,"Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),e}function n(){return t(p.current)}function r(e,t){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
Wt(p,t,e);var n=c(t);// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
Wt(f,e,e),Wt(d,n,e)}function o(e){Bt(d,e),Bt(f,e),Bt(p,e)}function a(){return t(d.current)}function i(e){var n=t(p.current),r=t(d.current),o=s(r,e.type,n);// Don't push this Fiber's context unless it's unique.
r!==o&&(// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
Wt(f,e,e),Wt(d,o,e))}function l(e){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
f.current===e&&(Bt(d,e),Bt(f,e))}function u(){d.current=xs,p.current=xs}var s=e.getChildHostContext,c=e.getRootHostContext,d=Vt(xs),f=Vt(xs),p=Vt(xs);return{getHostContext:a,getRootHostContainer:n,popHostContainer:o,popHostContext:l,pushHostContainer:r,pushHostContext:i,resetHostContainer:u}},Es=function(e){function t(e){var t=e.stateNode.containerInfo;return _=g(t),P=e,O=!0,!0}function n(e,t){switch(e.tag){case Va:k(e.stateNode.containerInfo,t);break;case Wa:C(e.type,e.memoizedProps,e.stateNode,t)}var n=Vn();n.stateNode=t,n.return=e,n.effectTag=al,// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function r(e,t){switch(t.effectTag|=nl,e.tag){case Va:var n=e.stateNode.containerInfo;switch(t.tag){case Wa:var r=t.type,o=t.pendingProps;x(n,r,o);break;case Ka:var a=t.pendingProps;T(n,a)}break;case Wa:var i=e.type,l=e.memoizedProps,u=e.stateNode;switch(t.tag){case Wa:var s=t.type,c=t.pendingProps;E(i,l,u,s,c);break;case Ka:var d=t.pendingProps;S(i,l,u,d)}break;default:return}}function o(e,t){switch(e.tag){case Wa:var n=e.type,r=e.pendingProps,o=p(t,n,r);return null!==o&&(e.stateNode=o,!0);case Ka:var a=e.pendingProps,i=h(t,a);return null!==i&&(e.stateNode=i,!0);default:return!1}}function a(e){if(O){var t=_;if(!t)// Nothing to hydrate. Make it an insertion.
return r(P,e),O=!1,void(P=e);if(!o(e,t)){if(!(// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
t=m(t))||!o(e,t))// Nothing to hydrate. Make it an insertion.
return r(P,e),O=!1,void(P=e);// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
n(P,_)}P=e,_=g(t)}}function i(e,t,n){var r=e.stateNode,o=v(r,e.type,e.memoizedProps,t,n,e);// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
// TODO: Type this specific to this type of component.
return e.updateQueue=o,null!==o}function l(e){var t=e.stateNode,n=e.memoizedProps,r=y(t,n,e);if(r){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var o=P;if(null!==o)switch(o.tag){case Va:var a=o.stateNode.containerInfo;b(a,t,n);break;case Wa:var i=o.type,l=o.memoizedProps,u=o.stateNode;w(i,l,u,t,n)}}return r}function u(e){for(var t=e.return;null!==t&&t.tag!==Wa&&t.tag!==Va;)t=t.return;P=t}function s(e){if(e!==P)// We're deeper than the current hydration context, inside an inserted
// tree.
return!1;if(!O)// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
return u(e),O=!0,!1;var t=e.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(e.tag!==Wa||"head"!==t&&"body"!==t&&!d(t,e.memoizedProps))for(var r=_;r;)n(e,r),r=m(r);return u(e),_=P?m(e.stateNode):null,!0}function c(){P=null,_=null,O=!1}var d=e.shouldSetTextContent,f=e.hydration;// If this doesn't have hydration mode.
if(!f)return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){Fo(!1,"Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.")},prepareToHydrateHostTextInstance:function(){Fo(!1,"Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.")},popHydrationState:function(e){return!1}};var p=f.canHydrateInstance,h=f.canHydrateTextInstance,m=f.getNextHydratableSibling,g=f.getFirstHydratableChild,v=f.hydrateInstance,y=f.hydrateTextInstance,b=f.didNotMatchHydratedContainerTextInstance,w=f.didNotMatchHydratedTextInstance,k=f.didNotHydrateContainerInstance,C=f.didNotHydrateInstance,x=f.didNotFindHydratableContainerInstance,T=f.didNotFindHydratableContainerTextInstance,E=f.didNotFindHydratableInstance,S=f.didNotFindHydratableTextInstance,P=null,_=null,O=!1;return{enterHydrationState:t,resetHydrationState:c,tryToClaimNextHydratableInstance:a,prepareToHydrateHostInstance:i,prepareToHydrateHostTextInstance:l,popHydrationState:s}},Ss={debugTool:null},Ps=Ss,_s=function(e){return!0},Os=_s,Ns=ga.invokeGuardedCallback,Is=ga.hasCaughtError,Rs=ga.clearCaughtError,Ms=!1,Ds=!1,As={},Fs=function(e){var t=$e(e)||"ReactClass";As[t]||(Lo(!1,"Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.\n\nPlease check the code for the %s component.",t),As[t]=!0)},Ls=function(e){switch(ru.phase){case"getChildContext":if(Ds)return;Lo(!1,"setState(...): Cannot call setState() inside getChildContext()"),Ds=!0;break;case"render":if(Ms)return;Lo(!1,"Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`."),Ms=!0}},Us=function(e){function t(){// Reset the stack
Kt(),// Reset the cursors
Nn(),H()}function n(){for(;null!==fe;){ru.setCurrentFiber(fe),Zt();var e=fe.effectTag;if(e&il&&$(fe),e&sl){var t=fe.alternate;null!==t&&Z(t)}switch(e&~(ll|ul|il|sl|tl)){case nl:Q(fe),// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted
// does and isMounted is deprecated anyway so we should be able
// to kill this.
fe.effectTag&=~nl;break;case ol:// Placement
Q(fe),// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
fe.effectTag&=~nl;// Update
var n=fe.alternate;G(n,fe);break;case rl:var r=fe.alternate;G(r,fe);break;case al:be=!0,Y(fe),be=!1}fe=fe.nextEffect}ru.resetCurrentFiber()}function r(){for(;null!==fe;){var e=fe.effectTag;if(e&(rl|ll)){Zt();var t=fe.alternate;X(t,fe)}e&sl&&(Zt(),J(fe)),e&ul&&(Zt(),g(fe));var n=fe.nextEffect;// Ensure that we clean these up so that we don't accidentally keep them.
// I'm not actually sure this matters because we can't reset firstEffect
// and lastEffect since they're on every node, not just the effectful
// ones. So we have to clean everything as we reuse nodes anyway.
fe.nextEffect=null,// Ensure that we reset the effectTag here so that we can rely on effect
// tags to reason about the current life-cycle.
fe=n}}function o(e){// We keep track of this so that captureError can collect any boundaries
// that capture an error during the commit phase. The reason these aren't
// local to this function is because errors that occur during cWU are
// captured elsewhere, to prevent the unmount from being interrupted.
ue=!0,ye=!0,fn();var t=e.stateNode;t.current===e&&Fo(!1,"Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue."),t.isReadyForCommit=!1,// Reset this to null before calling lifecycles
Ji.current=null;var o=void 0;for(e.effectTag>tl?// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if
// it had one; that is, all the effects in the tree including the root.
null!==e.lastEffect?(e.lastEffect.nextEffect=e,o=e.firstEffect):o=e:// There is no effect on the root.
o=e.firstEffect,re(),// Commit all the side-effects within a tree. We'll do this in two passes.
// The first pass performs all the host insertions, updates, deletions and
// ref unmounts.
fe=o,hn();null!==fe;){var a=!1,i=void 0;Ns(null,n,null),Is()&&(a=!0,i=Rs()),a&&(null===fe&&Fo(!1,"Should have next effect. This error is likely caused by a bug in React. Please file an issue."),p(fe,i),// Clean-up
null!==fe&&(fe=fe.nextEffect))}for(mn(),oe(),// The work-in-progress tree is now the current tree. This must come after
// the first pass of the commit phase, so that the previous tree is still
// current during componentWillUnmount, but before the second pass, so that
// the finished work is current during componentDidMount/Update.
t.current=e,// In the second pass we'll perform all life-cycles and ref callbacks.
// Life-cycles happen as a separate pass so that all placements, updates,
// and deletions in the entire tree have already been invoked.
// This pass also triggers any renderer-specific initial effects.
fe=o,gn();null!==fe;){var l=!1,u=void 0;Ns(null,r,null),Is()&&(l=!0,u=Rs()),l&&(null===fe&&Fo(!1,"Should have next effect. This error is likely caused by a bug in React. Please file an issue."),p(fe,u),null!==fe&&(fe=fe.nextEffect))}if(ye=!1,ue=!1,vn(),pn(),"function"==typeof Yn&&Yn(e.stateNode),Ps.debugTool&&Ps.debugTool.onCommitWork(e),// If we caught any errors during this commit, schedule their boundaries
// to update.
me&&(me.forEach(C),me=null),null!==ge){var s=ge;ge=null,R(s)}var c=t.current.expirationTime;return c===Du&&(pe=null,he=null),c}function a(e,t){if(t===Fu||e.expirationTime!==Fu){for(// Check for pending updates.
var n=er(e),r=e.child;null!==r;)r.expirationTime!==Du&&(n===Du||n>r.expirationTime)&&(n=r.expirationTime),r=r.sibling;e.expirationTime=n}}function i(e){for(;;){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var t=e.alternate;ru.setCurrentFiber(e);var n=K(t,e,de);ru.resetCurrentFiber();var r=e.return,o=e.sibling;if(a(e,de),null!==n)// If completing this work spawned new work, do that next. We'll come
// back here again.
return an(e),Ps.debugTool&&Ps.debugTool.onCompleteWork(e),n;if(null!==r){// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
null===r.firstEffect&&(r.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==r.lastEffect&&(r.lastEffect.nextEffect=e.firstEffect),r.lastEffect=e.lastEffect);// Skip both NoWork and PerformedWork tags when creating the effect list.
// PerformedWork effect is read by React DevTools but shouldn't be committed.
e.effectTag>tl&&(null!==r.lastEffect?r.lastEffect.nextEffect=e:r.firstEffect=e,r.lastEffect=e)}if(an(e),Ps.debugTool&&Ps.debugTool.onCompleteWork(e),null!==o)// If there is more work to do in this returnFiber, do that next.
return o;if(null===r){return e.stateNode.isReadyForCommit=!0,null}// If there's no more work in this returnFiber. Complete the returnFiber.
e=r}// Without this explicit null return Flow complains of invalid return type
// TODO Remove the above while(true) loop
// eslint-disable-next-line no-unreachable
return null}function l(e){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var t=e.alternate;// See if beginning this work spawns more work.
rn(e),ru.setCurrentFiber(e);var n=V(t,e,de);// If this doesn't spawn new work, complete the current work.
return ru.resetCurrentFiber(),Ps.debugTool&&Ps.debugTool.onBeginWork(e),null===n&&(n=i(e)),Ji.current=null,n}function u(e){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var t=e.alternate;// See if beginning this work spawns more work.
rn(e),ru.setCurrentFiber(e);var n=B(t,e,de);// If this doesn't spawn new work, complete the current work.
return ru.resetCurrentFiber(),Ps.debugTool&&Ps.debugTool.onBeginWork(e),null===n&&(n=i(e)),Ji.current=null,n}function s(e){if(null!==pe)// If there are unhandled errors, switch to the slow work loop.
// TODO: How to avoid this check in the fast path? Maybe the renderer
// could keep track of which roots have unhandled errors and call a
// forked version of renderRoot.
return void c(e);if(!(de===Du||de>e))if(de<=ie)// Flush all expired work.
for(;null!==se;)se=l(se);else// Flush asynchronous work until the deadline runs out of time.
for(;null!==se&&!I();)se=l(se)}function c(e){if(!(de===Du||de>e))if(de<=ie)// Flush all expired work.
for(;null!==se;)// Use a forked version of performUnitOfWork
se=h(se)?u(se):l(se);else// Flush asynchronous work until the deadline runs out of time.
for(;null!==se&&!I();)// Use a forked version of performUnitOfWork
se=h(se)?u(se):l(se)}function d(e,t,n,r){// We're going to restart the error boundary that captured the error.
// Conceptually, we're unwinding the stack. We need to unwind the
// context stack, too.
v(t,n),// Restart the error boundary using a forked version of
// performUnitOfWork that deletes the boundary's children. The entire
// failed subree will be unmounted. During the commit phase, a special
// lifecycle method is called on the error boundary, which triggers
// a re-render.
se=u(n),// Continue working.
s(r)}function f(e,n){ue&&Fo(!1,"renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue."),ue=!0,// We're about to mutate the work-in-progress tree. If the root was pending
// commit, it no longer is: we'll need to complete it again.
e.isReadyForCommit=!1,// Check if we're starting from a fresh stack, or if we're resuming from
// previously yielded work.
e===ce&&n===de&&null!==se||(// Reset the stack and start working from the root.
t(),ce=e,de=n,se=Ln(ce.current,null,n)),cn(se);var r=!1,o=null;// An error was thrown during the render phase.
for(Ns(null,s,null,n),Is()&&(r=!0,o=Rs());r;){if(ve){// This was a fatal error. Don't attempt to recover from it.
ge=o;break}var a=se;if(null!==a){// "Capture" the error by finding the nearest boundary. If there is no
// error boundary, we use the root.
var i=p(a,o);if(null===i&&Fo(!1,"Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue."),!ve){if(r=!1,o=null,Ns(null,d,null,e,a,i,n),!Is())// We're finished working. Exit the error loop.
break;r=!0,o=Rs()}}else// An error was thrown but there's no current unit of work. This can
// happen during the commit phase if there's a bug in the renderer.
ve=!0}var l=ge;// We're done performing work. Time to clean up.
return dn(we),we=null,ue=!1,ve=!1,ge=null,null!==l&&R(l),e.isReadyForCommit?e.current.alternate:null}// Returns the boundary that captured the error, or null if the error is ignored
function p(e,t){// It is no longer valid because we exited the user code.
Ji.current=null,ru.resetCurrentFiber();// Search for the nearest error boundary.
var n=null,r=!1,o=!1,a=null;// Host containers are a special case. If the failed work itself is a host
// container, then it acts as its own boundary. In all other cases, we
// ignore the work itself and only search through the parents.
if(e.tag===Va)n=e,m(e)&&(// If this root already failed, there must have been an error when
// attempting to unmount it. This is a worst-case scenario and
// should only be possible if there's a bug in the renderer.
ve=!0);else for(var i=e.return;null!==i&&null===n;){if(i.tag===za){var l=i.stateNode;"function"==typeof l.componentDidCatch&&(r=!0,a=$e(i),// Found an error boundary!
n=i,o=!0)}else i.tag===Va&&(// Treat the root like a no-op error boundary
n=i);if(m(i)){// This boundary is already in a failed state.
// If we're currently unmounting, that means this error was
// thrown while unmounting a failed subtree. We should ignore
// the error.
if(be)return null;// If we're in the commit phase, we should check to see if
// this boundary already captured an error during this commit.
// This case exists because multiple errors can be thrown during
// a single commit without interruption.
if(null!==me&&(me.has(i)||null!==i.alternate&&me.has(i.alternate)))// If so, we should ignore this error.
return null;// The error should propagate to the next boundary -— we keep looking.
n=null,o=!1}i=i.return}if(null!==n){// Add to the collection of failed boundaries. This lets us know that
// subsequent errors in this subtree should propagate to the next boundary.
null===he&&(he=new Set),he.add(n);// This method is unsafe outside of the begin and complete phases.
// We might be in the commit phase when an error is captured.
// The risk is that the return path from this Fiber may not be accurate.
// That risk is acceptable given the benefit of providing users more context.
var u=$t(e),s=$e(e);// Add to the collection of captured errors. This is stored as a global
// map of errors and their component stack location keyed by the boundaries
// that capture them. We mostly use this Map as a Set; it's a Map only to
// avoid adding a field to Fiber to store the error.
null===pe&&(pe=new Map);var c={componentName:s,componentStack:u,error:t,errorBoundary:r?n.stateNode:null,errorBoundaryFound:r,errorBoundaryName:a,willRetry:o};pe.set(n,c);try{dr(c)}catch(e){// Prevent cycle if logCapturedError() throws.
// A cycle may still occur if logCapturedError renders a component that throws.
console.error(e)}// If we're in the commit phase, defer scheduling an update on the
// boundary until after the commit is complete
// Otherwise, schedule an update now.
// TODO: Is this actually necessary during the render phase? Is it
// possible to unwind and continue rendering at the same priority,
// without corrupting internal state?
return ye?(null===me&&(me=new Set),me.add(n)):C(n),n}// If no boundary is found, we'll need to throw the error
return null===ge&&(ge=t),null}function h(e){// TODO: capturedErrors should store the boundary instance, to avoid needing
// to check the alternate.
return null!==pe&&(pe.has(e)||null!==e.alternate&&pe.has(e.alternate))}function m(e){// TODO: failedBoundaries should store the boundary instance, to avoid
// needing to check the alternate.
return null!==he&&(he.has(e)||null!==e.alternate&&he.has(e.alternate))}function g(e){var t=void 0;switch(null!==pe&&(t=pe.get(e),pe.delete(e),null==t&&null!==e.alternate&&(e=e.alternate,t=pe.get(e),pe.delete(e))),null==t&&Fo(!1,"No error for given unit of work. This error is likely caused by a bug in React. Please file an issue."),e.tag){case za:var n=e.stateNode,r={componentStack:t.componentStack};// Allow the boundary to handle the error, usually by scheduling
// an update to itself
return void n.componentDidCatch(t.error,r);case Va:return void(null===ge&&(ge=t.error));default:Fo(!1,"Invalid type of work. This error is likely caused by a bug in React. Please file an issue.")}}function v(e,t){for(var n=e;null!==n;){switch(n.tag){case za:Tn(n);break;case Wa:j(n);break;case Va:case Ba:U(n)}if(n===t||n.alternate===t){ln(n);break}an(n),n=n.return}}function y(){return Dn(x(),1e3,200)}function b(e){// No explicit expiration context was set, and we're not currently
// performing work. Calculate a new expiration time.
return le!==Du?le:ue?ye?Au:de:!ne||e.internalContextTag&Hu?y():Au}function w(e,t){return k(e,t,!1)}function k(e,t,n){if(en(),!n&&e.tag===za){var r=e.stateNode;Ls(r)}for(var o=e;null!==o;){if(// Walk the parent path to the root and update each node's
// expiration time.
(o.expirationTime===Du||o.expirationTime>t)&&(o.expirationTime=t),null!==o.alternate&&(o.alternate.expirationTime===Du||o.alternate.expirationTime>t)&&(o.alternate.expirationTime=t),null===o.return){if(o.tag!==Va)return void(n||e.tag!==za||Fs(e));var a=o.stateNode;!ue&&a===ce&&t<=de&&(// Restart the root from the top.
null!==se&&(// This is an interruption. (Used for performance tracking.)
we=e),ce=null,se=null,de=Du),S(a,t)}o=o.return}}function C(e){k(e,Au,!0)}function x(){// Subtract initial time so it fits inside 32bits
var e=ee()-ae;return ie=Rn(e)}function T(e){var t=le;le=y();try{return e()}finally{le=t}}function E(e){var t=le;le=Au;try{return e()}finally{le=t}}// requestWork is called by the scheduler whenever a root receives an update.
// It's up to the renderer to call renderRoot at some point in the future.
function S(e,t){// Add the root to the schedule.
// Check if this root is already part of the schedule.
if(De>Me&&Fo(!1,"Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."),null===e.nextScheduledRoot)// This root is not already scheduled. Add it.
e.remainingExpirationTime=t,null===Ce?(ke=Ce=e,e.nextScheduledRoot=e):(Ce.nextScheduledRoot=e,Ce=e,Ce.nextScheduledRoot=ke);else{// This root is already scheduled, but its priority may have increased.
var n=e.remainingExpirationTime;(n===Du||t<n)&&(// Update the priority.
e.remainingExpirationTime=t)}if(!Te)// Flush work at the end of the batch.
// ...unless we're inside unbatchedUpdates, in which case we should
// flush it now.
// TODO: Get rid of Sync and use current time?
return Ie?void(Re&&N(e,Au)):void(t===Au?O(Au,null):xe||(xe=!0,tn(),te(_)))}function P(){var e=Du,t=null;if(null!==Ce)for(var n=Ce,r=ke;null!==r;){var o=r.remainingExpirationTime;if(o===Du){if(// This root no longer has work. Remove it from the scheduler.
// TODO: This check is redudant, but Flow is confused by the branch
// below where we set lastScheduledRoot to null, even though we break
// from the loop right after.
(null===n||null===Ce)&&Fo(!1,"Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue."),r===r.nextScheduledRoot){// This is the only root in the list.
r.nextScheduledRoot=null,ke=Ce=null;break}if(r===ke){// This is the first root in the list.
var a=r.nextScheduledRoot;ke=a,Ce.nextScheduledRoot=a,r.nextScheduledRoot=null}else{if(r===Ce){// This is the last root in the list.
Ce=n,Ce.nextScheduledRoot=ke,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if((e===Du||o<e)&&(// Update the priority, if it's higher
e=o,t=r),r===Ce)break;n=r,r=r.nextScheduledRoot}}// If the next root is the same as the previous root, this is a nested
// update. To prevent an infinite loop, increment the nested update count.
var i=Ee;null!==i&&i===t?De++:// Reset whenever we switch roots.
De=0,Ee=t,Se=e}function _(e){O(Du,e)}function O(e,t){if(Ne=t,// Keep working on roots until there's no more work, or until the we reach
// the deadline.
P(),Gl&&null!==Ne){nn(Se<x())}for(;null!==Ee&&Se!==Du&&(e===Du||Se<=e)&&!Pe;)N(Ee,Se),// Find the next highest priority work.
P();if(// We're done flushing work. Either we ran out of time in this callback,
// or there's no more work left with sufficient priority.
// If we're inside a callback, set this to false since we just completed it.
null!==Ne&&(xe=!1),// If there's work left over, schedule a new callback.
null===Ee||xe||(xe=!0,tn(),te(_)),// Clean-up.
Ne=null,Pe=!1,De=0,_e){var n=Oe;throw Oe=null,_e=!1,n}}function N(e,t){// Check if this is async work or sync/expired work.
// TODO: Pass current time as argument to renderRoot, commitRoot
if(Te&&Fo(!1,"performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue."),Te=!0,t<=x()){// Flush sync work.
var n=e.finishedWork;null!==n?(// This root is already complete. We can commit it.
e.finishedWork=null,e.remainingExpirationTime=o(n)):(e.finishedWork=null,null!==(n=f(e,t))&&(// We've completed the root. Commit it.
e.remainingExpirationTime=o(n)))}else{// Flush async work.
var r=e.finishedWork;null!==r?(// This root is already complete. We can commit it.
e.finishedWork=null,e.remainingExpirationTime=o(r)):(e.finishedWork=null,null!==(r=f(e,t))&&(// We've completed the root. Check the deadline one more time
// before committing.
I()?// There's no time left. Mark this root as complete. We'll come
// back and commit it later.
e.finishedWork=r:// Still time left. Commit the root.
e.remainingExpirationTime=o(r)))}Te=!1}// When working on async work, the reconciler asks the renderer if it should
// yield execution. For DOM, we implement this with requestIdleCallback.
function I(){return null!==Ne&&(!(Ne.timeRemaining()>Ae)&&(Pe=!0,!0))}// TODO: Not happy about this hook. Conceptually, renderRoot should return a
// tuple of (isReadyForCommit, didError, error)
function R(e){null===Ee&&Fo(!1,"Should be working on a root. This error is likely caused by a bug in React. Please file an issue."),// Unschedule this root so we don't work on it again until there's
// another update.
Ee.remainingExpirationTime=Du,_e||(_e=!0,Oe=e)}// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function M(e,t){var n=Ie;Ie=!0;try{return e(t)}finally{Ie=n,Ie||Te||O(Au,null)}}// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function D(e){if(Ie&&!Re){Re=!0;try{return e()}finally{Re=!1}}return e()}// TODO: Batching should be implemented at the renderer level, not within
// the reconciler.
function A(e){var t=Ie;Ie=!0;try{return E(e)}finally{Ie=t,Te&&Fo(!1,"flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering."),O(Au,null)}}var F=Ts(e),L=Es(e),U=F.popHostContainer,j=F.popHostContext,H=F.resetHostContainer,z=vs(e,F,L,w,b),V=z.beginWork,B=z.beginFailedWork,W=ys(e,F,L),K=W.completeWork,q=Cs(e,p),$=q.commitResetTextContent,Q=q.commitPlacement,Y=q.commitDeletion,G=q.commitWork,X=q.commitLifeCycles,J=q.commitAttachRef,Z=q.commitDetachRef,ee=e.now,te=e.scheduleDeferredCallback,ne=e.useSyncScheduling,re=e.prepareForCommit,oe=e.resetAfterCommit,ae=ee(),ie=Rn(0),le=Du,ue=!1,se=null,ce=null,de=Du,fe=null,pe=null,he=null,me=null,ge=null,ve=!1,ye=!1,be=!1,we=null,ke=null,Ce=null,xe=!1,Te=!1,Ee=null,Se=Du,Pe=!1,_e=!1,Oe=null,Ne=null,Ie=!1,Re=!1,Me=1e3,De=0,Ae=1;return{computeAsyncExpiration:y,computeExpirationForFiber:b,scheduleWork:w,batchedUpdates:M,unbatchedUpdates:D,flushSync:A,deferredUpdates:T}},js=!1,Hs=function(e){function t(e,t,n){"render"!==ru.phase||null===ru.current||js||(js=!0,Lo(!1,"Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",$e(ru.current)||"Unknown")),n=void 0===n?null:n,Lo(null===n||"function"==typeof n,"render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",n);var r=void 0;// Check if the top-level element is an async wrapper component. If so,
// treat updates to the root as async. This is a bit weird but lets us
// avoid a separate `renderAsync` API.
r=Ql&&null!=t&&null!=t.type&&null!=t.type.prototype&&!0===t.type.prototype.unstable_isAsyncReactComponent?a():i(e),Zn(e,{expirationTime:r,partialState:{element:t},callback:n,isReplace:!1,isForced:!1,nextCallback:null,next:null}),l(e,r)}function n(e){var t=Ze(e);return null===t?null:t.stateNode}var r=e.getPublicInstance,o=Us(e),a=o.computeAsyncExpiration,i=o.computeExpirationForFiber,l=o.scheduleWork,u=o.batchedUpdates,s=o.unbatchedUpdates,c=o.flushSync,d=o.deferredUpdates;return{createContainer:function(e,t){return qn(e,t)},updateContainer:function(e,n,r,o){// TODO: If this is a nested container, this won't be the root.
var a=n.current;Ps.debugTool&&(null===a.alternate?Ps.debugTool.onMountContainer(n):null===e?Ps.debugTool.onUnmountContainer(n):Ps.debugTool.onUpdateContainer(n));var i=fr(r);null===n.context?n.context=i:n.pendingContext=i,t(a,e,o)},batchedUpdates:u,unbatchedUpdates:s,deferredUpdates:d,flushSync:c,getPublicRootInstance:function(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case Wa:return r(t.child.stateNode);default:return t.child.stateNode}},findHostInstance:n,findHostInstanceWithNoPortals:function(e){var t=et(e);return null===t?null:t.stateNode},injectIntoDevTools:function(e){var t=e.findFiberByHostInstance;return Qn(jo({},e,{findHostInstanceByFiber:function(e){return n(e)},findFiberByHostInstance:function(e){return t?t(e):null}}))}}},zs=Object.freeze({default:Hs}),Vs=zs&&Hs||zs,Bs=Vs.default?Vs.default:Vs;Uo.canUseDOM&&"function"!=typeof requestAnimationFrame&&Lo(!1,"React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills");var Ws="object"===("undefined"==typeof performance?"undefined":r(performance))&&"function"==typeof performance.now,Ks=void 0;Ks=Ws?function(){return performance.now()}:function(){return Date.now()};// TODO: There's no way to cancel, because Fiber doesn't atm.
var qs=void 0;if(Uo.canUseDOM)if("function"!=typeof requestIdleCallback){// Polyfill requestIdleCallback.
var $s,Qs=null,Ys=!1,Gs=!1,Xs=0,Js=33,Zs=33;$s=Ws?{timeRemaining:function(){// We assume that if we have a performance timer that the rAF callback
// gets a performance timer value. Not sure if this is always true.
return Xs-performance.now()}}:{timeRemaining:function(){// Fallback to Date.now()
return Xs-Date.now()}};// We use the postMessage trick to defer idle work until after the repaint.
var ec="__reactIdleCallback$"+Math.random().toString(36).slice(2),tc=function(e){if(e.source===window&&e.data===ec){Ys=!1;var t=Qs;Qs=null,null!==t&&t($s)}};// Assumes that we have addEventListener in this environment. Might need
// something better for old IE.
window.addEventListener("message",tc,!1);var nc=function(e){Gs=!1;var t=e-Xs+Zs;t<Zs&&Js<Zs?(t<8&&(// Defensive coding. We don't support higher frame rates than 120hz.
// If we get lower than that, it is probably a bug.
t=8),// If one frame goes long, then the next one can be short to catch up.
// If two frames are short in a row, then that's an indication that we
// actually have a higher frame rate than what we're currently optimizing.
// We adjust our heuristic dynamically accordingly. For example, if we're
// running on 120hz display or 90hz VR display.
// Take the max of the two in case one of them was an anomaly due to
// missed frame deadlines.
Zs=t<Js?Js:t):Js=t,Xs=e+Zs,Ys||(Ys=!0,window.postMessage(ec,"*"))};qs=function(e){// This assumes that we only schedule one callback at a time because that's
// how Fiber uses it.
// If rAF didn't already schedule one, we need to schedule a frame.
// TODO: If this rAF doesn't materialize because the browser throttles, we
// might want to still have setTimeout trigger rIC as a backup to ensure
// that we keep performing work.
return Qs=e,Gs||(Gs=!0,requestAnimationFrame(nc)),0}}else qs=requestIdleCallback;else qs=function(e){return setTimeout(function(){e({timeRemaining:function(){return 1/0}})}),0};/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var rc=function(){},oc=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(a);try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};rc=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];oc.apply(void 0,[t].concat(r))}};var ac=rc,ic=new RegExp("^["+Jo+"]["+Zo+"]*$"),lc={},uc={},sc={checkPropTypes:null},cc={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},dc={value:function(e,t,n){return!e[t]||cc[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}};/**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
sc.checkPropTypes=function(e,t,n){$o(dc,t,"prop",e,n)};// TODO: direct imports like some-package/src/* are bad. Fix me.
var fc=ru.getCurrentFiberOwnerName,pc=ru.getCurrentFiberStackAddendum,hc=!1,mc=!1,gc=!1,vc=!1,yc=ru.getCurrentFiberOwnerName,bc=ru.getCurrentFiberStackAddendum,wc=!1,kc=["value","defaultValue"],Cc=ru.getCurrentFiberStackAddendum,xc=!1,Tc="http://www.w3.org/1999/xhtml",Ec="http://www.w3.org/1998/Math/MathML",Sc="http://www.w3.org/2000/svg",Pc={html:Tc,mathml:Ec,svg:Sc},_c=void 0,Oc=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(e.namespaceURI!==Pc.svg||"innerHTML"in e)e.innerHTML=t;else{_c=_c||document.createElement("div"),_c.innerHTML="<svg>"+t+"</svg>";for(var n=_c.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}}),Nc=/["'&<>]/,Ic=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===Fi)return void(n.nodeValue=t)}e.textContent=t};Uo.canUseDOM&&("textContent"in document.documentElement||(Ic=function(e,t){if(e.nodeType===Fi)return void(e.nodeValue=t);Oc(e,Qr(t))}));var Rc=Ic,Mc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(Mc).forEach(function(e){Dc.forEach(function(t){Mc[Yr(t,e)]=Mc[e]})});var Ac=Ho,Fc=/^(?:webkit|moz|o)[A-Z]/,Lc=/;\s*$/,Uc={},jc={},Hc=!1,zc=!1,Vc=function(e,t){Uc.hasOwnProperty(e)&&Uc[e]||(Uc[e]=!0,Lo(!1,"Unsupported style property %s. Did you mean %s?%s",e,Yo(e),t()))},Bc=function(e,t){Uc.hasOwnProperty(e)&&Uc[e]||(Uc[e]=!0,Lo(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?%s",e,e.charAt(0).toUpperCase()+e.slice(1),t()))},Wc=function(e,t,n){jc.hasOwnProperty(t)&&jc[t]||(jc[t]=!0,Lo(!1,'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.%s',e,t.replace(Lc,""),n()))},Kc=function(e,t,n){Hc||(Hc=!0,Lo(!1,"`NaN` is an invalid value for the `%s` css style property.%s",e,n()))},qc=function(e,t,n){zc||(zc=!0,Lo(!1,"`Infinity` is an invalid value for the `%s` css style property.%s",e,n()))};Ac=function(e,t,n){e.indexOf("-")>-1?Vc(e,n):Fc.test(e)?Bc(e,n):Lc.test(t)&&Wc(e,t,n),"number"==typeof t&&(isNaN(t)?Kc(e,0,n):isFinite(t)||qc(e,0,n))};var $c=Ac,Qc={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Yc=jo({menuitem:!0},Qc),Gc="__html",Xc={"aria-current":0,// state
"aria-details":0,"aria-disabled":0,// state
"aria-hidden":0,// state
"aria-invalid":0,// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Jc={},Zc=new RegExp("^(aria)-["+Zo+"]*$"),ed=new RegExp("^(aria)[A-Z]["+Zo+"]*$"),td=Object.prototype.hasOwnProperty,nd=!1,rd={// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},od={},ad=Object.prototype.hasOwnProperty,id=/^on[A-Z]/,ld=new RegExp("^(aria)-["+Zo+"]*$"),ud=new RegExp("^(aria)[A-Z]["+Zo+"]*$"),sd=function(e,t,n){if(ad.call(od,t)&&od[t])return!0;if(Ea.hasOwnProperty(t))return!0;if(0===xa.length&&id.test(t))// If no event plugins have been injected, we might be in a server environment.
// Don't check events in this case.
return!0;var a=t.toLowerCase(),u=Pa.hasOwnProperty(a)?Pa[a]:null;if(null!=u)return Lo(!1,"Invalid event handler property `%s`. Did you mean `%s`?%s",t,u,lo()),od[t]=!0,!0;if(0===a.indexOf("on")&&a.length>2)return Lo(!1,"Unknown event handler property `%s`. It will be ignored.%s",t,lo()),od[t]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(ld.test(t)||ud.test(t))return!0;if("onfocusin"===a||"onfocusout"===a)return Lo(!1,"React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),od[t]=!0,!0;if("innerhtml"===a)return Lo(!1,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),od[t]=!0,!0;if("aria"===a)return Lo(!1,"The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),od[t]=!0,!0;if("is"===a&&null!==n&&void 0!==n&&"string"!=typeof n)return Lo(!1,"Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.%s",void 0===n?"undefined":r(n),lo()),od[t]=!0,!0;if("number"==typeof n&&isNaN(n))return Lo(!1,"Received NaN for the `%s` attribute. If this is expected, cast the value to a string.%s",t,lo()),od[t]=!0,!0;var s=l(t);// Known attributes should match the casing specified in the property config.
if(rd.hasOwnProperty(a)){var c=rd[a];if(c!==t)return Lo(!1,"Invalid DOM property `%s`. Did you mean `%s`?%s",t,c,lo()),od[t]=!0,!0}else if(!s&&t!==a)// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
return Lo(!1,"React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s",t,a,lo()),od[t]=!0,!0;// Now that we've validated casing, do not validate
// data types for reserved props
// Warn when a known attribute is a bad type
return"boolean"!=typeof n||i(t)?!!s||(!!o(t,n)||(od[t]=!0,!1)):(n?Lo(!1,'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.%s',n,t,t,n,t,lo()):Lo(!1,'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.%s',n,t,t,n,t,t,t,lo()),od[t]=!0,!0)},cd=function(e,t){var n=[];for(var r in t){sd(0,r,t[r])||n.push(r)}var o=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?Lo(!1,"Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior%s",o,e,lo()):n.length>1&&Lo(!1,"Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior%s",o,e,lo())},dd=ru.getCurrentFiberOwnerName,fd=ru.getCurrentFiberStackAddendum,pd=!1,hd=!1,md="dangerouslySetInnerHTML",gd="suppressContentEditableWarning",vd="suppressHydrationWarning",yd="autoFocus",bd="children",wd="style",kd="__html",Cd=Pc.html,xd=Ho.thatReturns("");xd=fd;var Td={// Chrome is the only major browser not shipping <time>. But as of July
// 2017 it intends to ship it due to widespread usage. We intentionally
// *don't* warn for <time> even if it's unrecognized by Chrome because
// it soon will be, and many apps have been using it anyway.
time:!0,// There are working polyfills for <dialog>. Let people use it.
dialog:!0},Ed=function(e,t){oo(e,t),io(e,t),uo(e,t)},Sd=/\r\n?/g,Pd=/\u0000|\uFFFD/g,_d=function(e){return("string"==typeof e?e:""+e).replace(Sd,"\n").replace(Pd,"")},Od=function(e,t){if(!pd){var n=_d(t),r=_d(e);r!==n&&(pd=!0,Lo(!1,'Text content did not match. Server: "%s" Client: "%s"',r,n))}},Nd=function(e,t,n){if(!pd){var r=_d(n),o=_d(t);o!==r&&(pd=!0,Lo(!1,"Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},Id=function(e){if(!pd){pd=!0;var t=[];e.forEach(function(e){t.push(e)}),Lo(!1,"Extra attributes from the server: %s",t)}},Rd=function(e,t){!1===t?Lo(!1,"Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.%s",e,e,e,fd()):Lo(!1,"Expected `%s` listener to be a function, instead got a value of `%s` type.%s",e,void 0===t?"undefined":r(t),fd())},Md=function(e,t){// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var n=e.namespaceURI===Cd?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML},Dd={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},Ad=Object.freeze({createElement:mo,createTextNode:go,setInitialProperties:vo,diffProperties:yo,updateProperties:bo,diffHydratedProperties:wo,diffHydratedText:ko,warnForUnmatchedText:Co,warnForDeletedHydratableElement:xo,warnForDeletedHydratableText:To,warnForInsertedHydratedElement:Eo,warnForInsertedHydratedText:So,restoreControlledState:Po}),Fd=ru.getCurrentFiberStackAddendum,Ld=Ho,Ud=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],jd=["applet","caption","html","table","td","th","marquee","object","template",// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],Hd=jd.concat(["button"]),zd=["dd","dt","li","option","optgroup","p","rp","rt"],Vd={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null},Bd=function(e,t,n){var r=jo({},e||Vd),o={tag:t,instance:n};// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
return-1!==jd.indexOf(t)&&(r.aTagInScope=null,r.buttonTagInScope=null,r.nobrTagInScope=null),-1!==Hd.indexOf(t)&&(r.pTagInButtonScope=null),-1!==Ud.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(r.listItemTagAutoclosing=null,r.dlItemTagAutoclosing=null),r.current=o,"form"===t&&(r.formTag=o),"a"===t&&(r.aTagInScope=o),"button"===t&&(r.buttonTagInScope=o),"nobr"===t&&(r.nobrTagInScope=o),"p"===t&&(r.pTagInButtonScope=o),"li"===t&&(r.listItemTagAutoclosing=o),"dd"!==t&&"dt"!==t||(r.dlItemTagAutoclosing=o),r},Wd=function(e,t){// First, let's check if we're in an unusual parsing mode...
switch(t){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case"select":return"option"===e||"optgroup"===e||"#text"===e;case"optgroup":return"option"===e||"#text"===e;// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case"option":return"#text"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case"tr":return"th"===e||"td"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case"tbody":case"thead":case"tfoot":return"tr"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case"colgroup":return"col"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case"table":return"caption"===e||"colgroup"===e||"tbody"===e||"tfoot"===e||"thead"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case"head":return"base"===e||"basefont"===e||"bgsound"===e||"link"===e||"meta"===e||"title"===e||"noscript"===e||"noframes"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case"html":return"head"===e||"body"===e;case"#document":return"html"===e}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return-1===zd.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0},Kd=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},qd={};Ld=function(e,t,n){n=n||Vd;var r=n.current,o=r&&r.tag;null!=t&&(Lo(null==e,"validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var a=Wd(e,o)?null:r,i=a?null:Kd(e,n),l=a||i;if(l){var u=l.tag,s=Fd(),c=!!a+"|"+e+"|"+u+"|"+s;if(!qd[c]){qd[c]=!0;var d=e,f="";if("#text"===e?/\S/.test(t)?d="Text nodes":(d="Whitespace text nodes",f=" Make sure you don't have any extra whitespace between tags on each line of your source code."):d="<"+e+">",a){var p="";"table"===u&&"tr"===e&&(p+=" Add a <tbody> to your code to match the DOM tree generated by the browser."),Lo(!1,"validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s",d,u,f,p,s)}else Lo(!1,"validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s",d,u,s)}}},// TODO: turn this into a named export
Ld.updatedAncestorInfo=Bd,// For testing
Ld.isTagValidInContext=function(e,t){t=t||Vd;var n=t.current,r=n&&n.tag;return Wd(e,r)&&!Kd(e,t)};var $d=Ld,Qd=mo,Yd=go,Gd=vo,Xd=yo,Jd=bo,Zd=wo,ef=ko,tf=Co,nf=xo,rf=To,of=Eo,af=So,lf=$d.updatedAncestorInfo,uf=x,sf=_;"function"==typeof Map&&null!=Map.prototype&&"function"==typeof Map.prototype.forEach&&"function"==typeof Set&&null!=Set.prototype&&"function"==typeof Set.prototype.clear&&"function"==typeof Set.prototype.forEach||Lo(!1,"React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills"),_i.injectFiberControlledHostComponent(Ad);var cf=null,df=null,ff=Bs({getRootHostContext:function(e){var t=void 0,n=void 0,r=e.nodeType;switch(r){case Ui:case ji:t=r===Ui?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:qr(null,"");break;default:var a=r===Li?e.parentNode:e,i=a.namespaceURI||null;t=a.tagName,n=qr(i,t)}var l=t.toLowerCase();return{namespace:n,ancestorInfo:lf(null,l,null)}},getChildHostContext:function(e,t){var n=e;return{namespace:qr(n.namespace,t),ancestorInfo:lf(n.ancestorInfo,t,null)}},getPublicInstance:function(e){return e},prepareForCommit:function(){cf=lt(),df=St(),it(!1)},resetAfterCommit:function(){Pt(df),df=null,it(cf),cf=null},createInstance:function(e,t,n,r,o){var a=void 0,i=r;if($d(e,null,i.ancestorInfo),"string"==typeof t.children||"number"==typeof t.children){var l=""+t.children,u=lf(i.ancestorInfo,e,null);$d(null,l,u)}a=i.namespace;var s=Qd(e,t,n,a);return uf(o,s),sf(s,t),s},appendInitialChild:function(e,t){e.appendChild(t)},finalizeInitialChildren:function(e,t,n,r){return Gd(e,t,n,r),Io(t,n)},prepareUpdate:function(e,t,n,o,a,i){var l=i;if(r(o.children)!==r(n.children)&&("string"==typeof o.children||"number"==typeof o.children)){var u=""+o.children,s=lf(l.ancestorInfo,t,null);$d(null,u,s)}return Xd(e,t,n,o,a)},shouldSetTextContent:function(e,t){return"textarea"===e||"string"==typeof t.children||"number"==typeof t.children||"object"===r(t.dangerouslySetInnerHTML)&&null!==t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(e,t){return!!t.hidden},createTextInstance:function(e,t,n,r){$d(null,e,n.ancestorInfo);var o=Yd(e,t);return uf(r,o),o},now:Ks,mutation:{commitMount:function(e,t,n,r){e.focus()},commitUpdate:function(e,t,n,r,o,a){// Update the props handle so that we know which props are the ones with
// with current event handlers.
sf(e,o),// Apply the diff to the DOM node.
Jd(e,t,n,r,o)},resetTextContent:function(e){e.textContent=""},commitTextUpdate:function(e,t,n){e.nodeValue=n},appendChild:function(e,t){e.appendChild(t)},appendChildToContainer:function(e,t){e.nodeType===Li?e.parentNode.insertBefore(t,e):e.appendChild(t)},insertBefore:function(e,t,n){e.insertBefore(t,n)},insertInContainerBefore:function(e,t,n){e.nodeType===Li?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},removeChildFromContainer:function(e,t){e.nodeType===Li?e.parentNode.removeChild(t):e.removeChild(t)}},hydration:{canHydrateInstance:function(e,t,n){return e.nodeType!==Ai||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e},canHydrateTextInstance:function(e,t){return""===t||e.nodeType!==Fi?null:e},getNextHydratableSibling:function(e){// Skip non-hydratable nodes.
for(var t=e.nextSibling;t&&t.nodeType!==Ai&&t.nodeType!==Fi;)t=t.nextSibling;return t},getFirstHydratableChild:function(e){// Skip non-hydratable nodes.
for(var t=e.firstChild;t&&t.nodeType!==Ai&&t.nodeType!==Fi;)t=t.nextSibling;return t},hydrateInstance:function(e,t,n,r,o,a){uf(a,e),// TODO: Possibly defer this until the commit phase where all the events
// get attached.
sf(e,n);var i=void 0;return i=o.namespace,Zd(e,t,n,i,r)},hydrateTextInstance:function(e,t,n){return uf(n,e),ef(e,t)},didNotMatchHydratedContainerTextInstance:function(e,t,n){tf(t,n)},didNotMatchHydratedTextInstance:function(e,t,n,r,o){!0!==t.suppressHydrationWarning&&tf(r,o)},didNotHydrateContainerInstance:function(e,t){1===t.nodeType?nf(e,t):rf(e,t)},didNotHydrateInstance:function(e,t,n,r){!0!==t.suppressHydrationWarning&&(1===r.nodeType?nf(n,r):rf(n,r))},didNotFindHydratableContainerInstance:function(e,t,n){of(e,t,n)},didNotFindHydratableContainerTextInstance:function(e,t){af(e,t)},didNotFindHydratableInstance:function(e,t,n,r,o){!0!==t.suppressHydrationWarning&&of(n,r,o)},didNotFindHydratableTextInstance:function(e,t,n,r){!0!==t.suppressHydrationWarning&&af(n,r)}},scheduleDeferredCallback:qs,useSyncScheduling:!0});Mi.injectFiberBatchedUpdates(ff.batchedUpdates);var pf=!1;Do.prototype.render=function(e,t){var n=this._reactRootContainer;ff.updateContainer(e,n,null,t)},Do.prototype.unmount=function(e){var t=this._reactRootContainer;ff.updateContainer(null,t,null,e)};var hf={createPortal:Mo,findDOMNode:function(e){var t=Ji.current;if(null!==t){var n=t.stateNode._warnedAboutRefsInRender;Lo(n,"%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",$e(t)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}if(null==e)return null;if(e.nodeType===Ai)return e;var r=We(e);if(r)return ff.findHostInstance(r);"function"==typeof e.render?Fo(!1,"Unable to find node on an unmounted component."):Fo(!1,"Element appears to be neither ReactComponent nor DOMNode. Keys: %s",Object.keys(e))},hydrate:function(e,t,n){// TODO: throw or warn if we couldn't hydrate?
return Ro(null,e,t,!0,n)},render:function(e,t,n){return Ro(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return null!=e&&Ke(e)||Fo(!1,"parentComponent must be a valid React Component"),Ro(e,t,n,!1,r)},unmountComponentAtNode:function(e){if(_o(e)||Fo(!1,"unmountComponentAtNode(...): Target container is not a DOM element."),e._reactRootContainer){var t=Oo(e),n=t&&!E(t);// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
// Unmount should not be batched.
return Lo(!n,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),ff.unbatchedUpdates(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null})}),!0}var r=Oo(e),o=!(!r||!E(r)),a=1===e.nodeType&&_o(e.parentNode)&&!!e.parentNode._reactRootContainer;return Lo(!o,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",a?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1},// Temporary alias since we already shipped React 16 RC with it.
// TODO: remove in React 17.
unstable_createPortal:Mo,unstable_batchedUpdates:he,unstable_deferredUpdates:ff.deferredUpdates,flushSync:ff.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{// For TapEventPlugin which is popular in open source
EventPluginHub:Ua,// Used by test-utils
EventPluginRegistry:_a,EventPropagators:ei,ReactControlledComponent:Oi,ReactDOMComponentTree:Za,ReactDOMEventListener:vl}};if(!ff.injectIntoDevTools({findFiberByHostInstance:T,bundleType:1,version:"16.1.1",rendererPackageName:"react-dom"})&&Uo.canUseDOM&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){var mf=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
/^(https?|file):$/.test(mf)&&console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools"+("file:"===mf?"\nYou might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq":""),"font-weight:bold")}var gf=Object.freeze({default:hf}),vf=gf&&hf||gf,yf=vf.default?vf.default:vf;e.exports=yf}()}).call(t,n(0))},/* 32 */
/***/
function(e,t,n){"use strict";/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function r(e){return o(e).replace(a,"-ms-")}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var o=n(33),a=/^ms-/;e.exports=r},/* 33 */
/***/
function(e,t,n){"use strict";/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function r(e){return e.replace(o,"-$1").toLowerCase()}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var o=/([A-Z])/g;e.exports=r},/* 34 */
/***/
function(e,t,n){"use strict";/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function r(e){return o(e.replace(a,"ms-"))}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var o=n(35),a=/^-ms-/;e.exports=r},/* 35 */
/***/
function(e,t,n){"use strict";/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var o=/-(.)/g;e.exports=r}]);
//# sourceMappingURL=fieldamp.user.js.map