!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js"),require("ds-in-code-assets/dist/assets/icons/bullet")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js","ds-in-code-assets/dist/assets/icons/bullet"],t):"object"==typeof exports?exports["ds-in-code-design-system"]=t(require("lit"),require("lit/directives/class-map.js"),require("ds-in-code-assets/dist/assets/icons/bullet")):e["ds-in-code-design-system"]=t(e.lit,e["lit/directives/class-map.js"],e["ds-in-code-assets/dist/assets/icons/bullet"])}(self,((e,t,n)=>(()=>{"use strict";var r={899:(e,t,n)=>{var r,o=n(870),i=n(536),c=n(848);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(y,e);var t,n,s,p,h,b=(p=y,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(p);if(h){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=b.call(this)).size="",e.icon="",e}return t=y,s=[{key:"styles",get:function(){return(0,o.unsafeCSS)(".dscIcon{color:var(--neutral-elements-03)}.dscIcon--sm{width:16px;height:16px}.dscIcon--md{width:24px;height:24px}.dscIcon--lg{width:32px;height:32px}.dscIcon svg{width:inherit;height:inherit}.dscIcon svg path{fill:currentColor}")}},{key:"properties",get:function(){return{size:{type:String},icon:{type:String}}}}],(n=[{key:"currentSize",get:function(){return["sm","md","lg"].includes(this.size)?this.size:"md"}},{key:"render",value:function(){var e,t,n;return(0,o.html)(r||(t=['\n      <div part="icon"\n        class="','">\n        ',"\n      </div>\n    "],n||(n=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),(0,i.classMap)((a(e={},"dscIcon",!0),a(e,"dscIcon--".concat(this.currentSize),!0),e)),(0,c.u)(this.icon))}}])&&u(t.prototype,n),s&&u(t,s),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.LitElement);customElements.get("dsc-icon")||customElements.define("dsc-icon",p)},848:(e,t,n)=>{function r(e){return document.createRange().createContextualFragment("".concat(e))}n.d(t,{u:()=>r})},671:e=>{e.exports=n},870:t=>{t.exports=e},536:e=>{e.exports=t}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{i.r(c),i.d(c,{default:()=>y});var e,t,n=i(870),r=i(536),o=i(671),s=i.n(o);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i(899);var y=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(g,o);var i,c,a,y,v,m=(y=g,v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(y);if(v){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function g(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),b(p(e=m.call(this)),"_handleDispatchEvent",(function(){e.dispatchEvent(new CustomEvent("dsc-change",{detail:{checked:e.checked,index:e.index,value:e.value},bubbles:!0,composed:!0}))})),e.index=0,e.value="",e.id="dsc-radio",e.name="dsc-radio",e.label="",e.checked=!1,e.required=!1,e.disabled=!1,e}return i=g,a=[{key:"styles",get:function(){return(0,n.unsafeCSS)(".dscRadio{display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--font-family-01);font-size:var(--font-size-xs);font-weight:var(--font-weight-regular);line-height:var(--line-height-default);color:var(--neutral-elements-03)}.dscRadio input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.dscRadio .dscRadio__checkmark{width:16px;height:16px;border:var(--border-width-thin) solid var(--neutral-elements-03);border-radius:var(--border-radius-circular);margin-right:var(--spacing-size-nano);transition-duration:.275s;transition-timing-function:cubic-bezier(0.48, 0, 0.48, 1)}.dscRadio:hover:not(.dscRadio--disabled):not(.dscRadio--checked) .dscRadio__checkmark{background-color:var(--neutral-surface-02)}.dscRadio input:checked:not(:disabled)~.dscRadio__checkmark{background-color:var(--brand-color-pure);border-color:var(--brand-color-pure)}.dscRadio input:checked:not(:disabled)~.dscRadio__checkmark dsc-icon::part(icon){color:var(--contrast-color-brand)}.dscRadio input:focus-visible~.dscRadio__checkmark{outline-color:var(--highlight-color-pure);outline-width:var(--border-width-thin);outline-style:solid}.dscRadio input:disabled~.dscRadio__checkmark{border-color:var(--neutral-elements-01);color:var(--neutral-elements-01)}.dscRadio input:disabled~.dscRadio__checkmark dsc-icon::part(icon){color:var(--neutral-elements-01)}.dscRadio--disabled{color:var(--neutral-elements-01)}")}},{key:"properties",get:function(){return{id:{type:String},name:{type:String},label:{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},value:{type:String},index:{type:Number}}}}],(c=[{key:"hiddenInput",get:function(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input")}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"checked"===n&&void 0!==e&&(t.hiddenInput.checked=t.checked)}))}},{key:"_handleClick",value:function(){this.checked=!0,this._handleDispatchEvent()}},{key:"render",value:function(){var o;return(0,n.html)(e||(e=u(['\n      <label\n        class="','"\n        for="','"\n      >\n        <input\n          type="radio"\n          .id="','"\n          .name="','"\n          .value="','"\n          ?disabled=',"\n          ?checked=","\n          ?required=","\n          aria-checked=",'\n          @click="','"\n        >\n        <span class="dscRadio__checkmark">\n          ',"\n        </span>\n        ","\n      </label>\n    "])),(0,r.classMap)((b(o={},"dscRadio",!0),b(o,"dscRadio--checked",this.checked),b(o,"dscRadio--disabled",this.disabled),o)),this.name,this.id,this.name,this.value,this.disabled,this.checked,this.required,this.checked,this._handleClick,this.checked?(0,n.html)(t||(t=u(['<dsc-icon .icon="','" size="sm"></dsc-icon>'])),s()):null,this.label)}}])&&l(i.prototype,c),a&&l(i,a),Object.defineProperty(i,"prototype",{writable:!1}),g}(n.LitElement);customElements.get("dsc-radio")||customElements.define("dsc-radio",y)})(),c})()));