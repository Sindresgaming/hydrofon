!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}({0:function(t,e,r){r("bUC5"),r("pyCd"),t.exports=r("YT72")},"1RMI":function(t,e){var r=document.querySelector(".topbar-impersonation form");r&&r.querySelector("select").addEventListener("change",function(){r.submit()})},"2EVj":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>'},"5dyc":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>'},"5wfY":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>'},"79yS":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path fill-rule=evenodd d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"/></svg>'},"7l0Y":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/></svg>'},"8rd4":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/></svg>'},EJd9:function(t,e,r){var s={"./box.svg":"PR/m","./calendar.svg":"nu0A","./cheveron-left.svg":"5dyc","./cheveron-right.svg":"KEYf","./computer-desktop.svg":"7l0Y","./date-add.svg":"boaE","./download.svg":"2EVj","./folder.svg":"XOeJ","./lock-closed.svg":"pZjJ","./mobile-devices.svg":"bTgt","./search.svg":"5wfY","./stand-by.svg":"79yS","./tag.svg":"xT6C","./trash.svg":"zSjP","./upload.svg":"a80x","./user-group.svg":"8rd4","./view-hide.svg":"f8kd","./view-show.svg":"V+Wz"};function n(t){var e=o(t);return r(e)}function o(t){var e=s[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="EJd9"},Hjbv:function(t,e){var r=document.getElementById("segel");if(null!==r){var s=JSON.parse(r.getAttribute("data-resources")),n=!0,o=!1,i=void 0;try{for(var a,l=s[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var c=a.value;if(Segel.resources.add({id:c.id,name:c.name}),c.bookings.length>0){var v=!0,u=!1,h=void 0;try{for(var d,g=c.bookings[Symbol.iterator]();!(v=(d=g.next()).done);v=!0){var p=d.value;Segel.bookings.add({id:p.id,resource:c.id,start:p.start_time,end:p.end_time})}}catch(t){u=!0,h=t}finally{try{v||null==g.return||g.return()}finally{if(u)throw h}}}}}catch(t){o=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}Segel.time.set(r.getAttribute("data-start"),r.getAttribute("data-end"))}},IjaB:function(t,e){var r=document.getElementById("resourcelist-toggle");r&&r.addEventListener("click",function(t){t.preventDefault(),r.parentElement.classList.toggle("resourcelist__collapsed")})},KEYf:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>'},"PR/m":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0V2zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5zm6 2v2h6V7H7z"/></svg>'},"V+Wz":function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>'},XOeJ:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/></svg>'},Xx5O:function(t,e){var r,s=Array.from(document.getElementsByClassName("alert"));function n(){r=setTimeout(function(){o(s.pop()),s.length>0&&n()},2500)}function o(t){t.addEventListener("transitionend",function(t){"visibility"===t.propertyName&&this.remove()}),t.classList.add("alert-hide")}function i(t){clearTimeout(r),o(this),s=s.filter(function(t){return!1===t.classList.contains("alert-hide")}),n(),t.preventDefault()}s.length>0&&(s.forEach(function(t){t.addEventListener("click",i,!1)}),n())},YT72:function(t,e){},a80x:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z"/></svg>'},bTgt:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>'},bUC5:function(t,e,r){"use strict";r.r(e);r("IjaB"),r("Xx5O"),r("1RMI"),r("Hjbv"),new Vue({el:"#app",components:{"resourcelist-root":r("kc6Z").default}})},boaE:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M15 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z"/></svg>'},f8kd:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"/></svg>'},kc6Z:function(t,e,r){"use strict";r.r(e);function s(t,e,r,s,n,o,i,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),s&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var v=c.render;c.render=function(t,e){return l.call(e),v(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}var n=s({name:"IconComponent",data:()=>({}),props:{icon:{type:String}}},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("div",{domProps:{innerHTML:this._s(r("EJd9")("./"+this.icon+".svg"))}})])},[],!1,null,null,null);n.options.__file="IconComponent.vue";var o=n.exports,i=s({props:{item:Object},data:function(){return{}}},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"resourcelist-resource"},[e("label",[e("input",{attrs:{type:"checkbox",name:"resources[]",value:"item.id"}}),this._v("\n        "+this._s(this.item.name)+"\n    ")])])},[],!1,null,null,null);i.options.__file="ResourceListResource.vue";var a=i.exports,l=s({name:"resourcelist-category",props:{item:Object},data:function(){return{}},computed:{hasChildren:function(){return this.item.categories&&this.item.categories.length>0||this.item.resources&&this.item.resources.length>0}},components:{icon:o,"resourcelist-resource":a}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"resourcelist-category"},[r("span",[r("icon",{staticClass:"w-5",attrs:{icon:"folder"}}),t._v("\n        "+t._s(t.item.name)+"\n    ")],1),t._v(" "),t.hasChildren?r("ul",{staticClass:"list-reset resourcelist-children"},[t._l(t.item.categories,function(t){return r("resourcelist-category",{key:t.id,attrs:{item:t}})}),t._v(" "),t._l(t.item.resource,function(t){return r("resourcelist-resource",{key:t.id,attrs:{item:t}})})],2):t._e()])},[],!1,null,null,null);l.options.__file="ResourceListCategory.vue";var c=l.exports,v=s({props:{date:String,categories:Array,resources:Array},data:function(){return{}},computed:{hasChildren:function(){return this.categories&&this.categories.length>0||this.resources&&this.resources.length>0}},components:{"resourcelist-category":c,"resourcelist-resource":a}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"resourcelist"},[r("section",{staticClass:"resourcelist-date"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"field",attrs:{type:"text"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),r("input",{staticClass:"btn btn-primary screen-reader",attrs:{type:"submit",value:"Show calendar"}})]),t._v(" "),t.hasChildren?r("ul",{staticClass:"list-reset p-4"},[t._l(t.categories,function(t){return r("resourcelist-category",{key:t.id,attrs:{item:t}})}),t._v(" "),t._l(t.resources,function(t){return r("resourcelist-resource",{key:t.id,attrs:{item:t}})})],2):t._e(),t._v(" "),r("a",{staticClass:"resourcelist-toggle",attrs:{href:"#",id:"resourcelist-toggle"}})])},[],!1,null,null,null);v.options.__file="ResourceList.vue";e.default=v.exports},nu0A:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>'},pZjJ:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>'},pyCd:function(t,e){},xT6C:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>'},zSjP:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>'}});