(()=>{"use strict";var e,r={15:(e,r,n)=>{var t=n(356),o=n(182);const a=function(){var e=document.createElement("img");e.alt=o,e.width=300,e.src=t,document.querySelector("body").appendChild(e)};function i(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const l=function(){function e(){var r,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),n="my-button",(r="buttonCssClass")in this?Object.defineProperty(this,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[r]=n}var r,n;return r=e,(n=[{key:"render",value:function(){var e=document.querySelector("body"),r=document.createElement("br"),n=document.createElement("button");n.innerHTML="Help",n.classList.add(this.buttonCssClass),n.addEventListener("click",(function(){var r=document.createElement("p");r.innerHTML="Hello I am printed",r.classList.add("my-paragraph"),e.appendChild(r)})),e.appendChild(r),e.appendChild(n)}}])&&i(r.prototype,n),e}();function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const u=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n;return r=e,(n=[{key:"render",value:function(e){var r=document.createElement("h1");r.innerHTML="Webpack Tutorials. This is a "+e+"page",document.querySelector("body").appendChild(r)}}])&&c(r.prototype,n),e}();var s=n(486),d=n.n(s);console.log("Hello world"),a(),a(),a(),a(),a(),(new u).render(d().upperFirst("Hello world-1")),(new u).render(d().upperFirst("Hello world-2")),(new l).render(),console.log("Production Mode")},182:e=>{e.exports="Kiwi alt text"},356:(e,r,n)=>{e.exports=n.p+"52ea11a99b61e43740e7.jpg"}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=r,e=[],t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(l=!1,a<i&&(i=a));l&&(e.splice(u--,1),r=o())}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/static/",(()=>{var e={689:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,l,c]=n,u=0;for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(c)var s=c(t);for(r&&r(n);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return t.O(s)},n=self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[486],(()=>t(15)));o=t.O(o)})();