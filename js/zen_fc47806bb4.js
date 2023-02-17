window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://ka-f.fontawesome.com","baseUrlKit":"https://kit.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"id":86856488,"license":"free","method":"css","minify":{"enabled":true},"token":"fc47806bb4","v4FontFaceShim":{"enabled":false},"v4shim":{"enabled":true},"v5FontFaceShim":{"enabled":false},"version":"5.15.4"};
!function(t){"function"==typeof define&amp;&amp;define.amd?define("kit-loader",t):t()}((function(){"use strict";function t(e){return(t="function"==typeof Symbol&amp;&amp;"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;"function"==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&amp;&amp;(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var o=1;o<arguments.length;o++){var r="null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return" t}function="" r(t,e){return="" function(t){if(array.isarray(t))return="" t}(t)||function(t,e){if("undefined"="=typeof" symbol||!(symbol.iterator="" in="" object(t)))return;var="" n="[],o=!0,r=!1,i=void" 0;try{for(var="" c,a="t[Symbol.iterator]();!(o=(c=a.next()).done)&amp;&amp;(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw" i}}return="" n}(t,e)||function(t,e){if(!t)return;if("string"="=typeof" t)return="" i(t,e);var="" array.from(t);if("arguments"="==n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return" i(t,e)}(t,e)||function(){throw="" new="" typeerror("invalid="" attempt="" to="" destructure="" non-iterable="" instance.\nin="" order="" be="" iterable,="" non-array="" objects="" must="" have="" a="" [symbol.iterator]()="" method.")}()}function="" i(t,e){(null="=e||e">t.length)&amp;&amp;(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function="" c(t,e){var="" n="e&amp;&amp;e.addOn||" ",o="e&amp;&amp;e.baseFilename||t.license+n,r=e&amp;&amp;e.minify?&quot;.min&quot;:&quot;&quot;,i=e&amp;&amp;e.fileSuffix||t.method,c=e&amp;&amp;e.subdir||t.method;return&quot;" t.baseurl+"="" releases="" "+("latest"="==t.version?" latest":"v".concat(t.version))+"="" "+c+"="" "+o+r+"."+i}function"="" a(t){return="" t.baseurlkit+"="" "+t.token+"="" "+t.id+"="" kit-upload.css"}function="" u(t,e){var="" o="!e.nextElementSibling||!e.nextElementSibling.classList.contains(" sr-only");if(n&&o){var"="" r="t.createElement(" span");r.innerhtml="n,r.classList.add(&quot;sr-only&quot;),e.parentNode.insertBefore(r,e.nextSibling)}}))}var&quot;" f,s="function(){},d=" undefined"!="typeof&quot;" global&&void="" 0!="=global.process&amp;&amp;" function"="=typeof&quot;" global.process.emit,l="undefined" =="typeof" setimmediate?settimeout:setimmediate,h="[];function" m(){for(var="" t="0;t<h.length;t++)h[t][0](h[t][1]);h=[],f=!1}function" p(t,e){h.push([t,e]),f||(f="!0,l(m,0))}function" v(t){var="" e="t.owner,n=e._state,o=e._data,r=t[n],i=t.then;if(" r){n="fulfilled" ;try{o="r(o)}catch(t){w(i,t)}}y(i,o)||(" fulfilled"="==n&amp;&amp;b(i,o),&quot;rejected&quot;===n&amp;&amp;w(i,o))}function&quot;" y(e,n){var="" o;try{if(e="==n)throw" new="" typeerror("a="" promises="" callback="" cannot="" return="" that="" same="" promise.");if(n&&("function"="=typeof" n||"object"="==t(n))){var" r)return="" r.call(n,(function(t){o||(o="!0,n===t?g(e,t):b(e,t))}),(function(t){o||(o=!0,w(e,t))})),!0}}catch(t){return" o||w(e,t),!0}return!1}function="" b(t,e){t!="=e&amp;&amp;y(t,e)||g(t,e)}function" g(t,e){"pending"="==t._state&amp;&amp;(t._state=" settled",t._data="e,p(S,t))}function&quot;" w(t,e){"pending"="==t._state&amp;&amp;(t._state=" a(t){t._then="t._then.forEach(v)}function" s(t){t._state="fulfilled" ,a(t)}function="" o(t){t._state="rejected" ,a(t),!t._handled&&d&&global.process.emit("unhandledrejection",t._data,t)}function="" j(t){global.process.emit("rejectionhandled",t)}function="" e(t){if("function"!="typeof" t)throw="" typeerror("promise="" resolver="" "+t+"="" is="" not="" a="" function");if(this="" instanceof="" typeerror("failed="" to="" construct="" 'promise':="" please="" use="" the="" 'new'="" operator,="" this="" object="" constructor="" be="" called="" as="" function.");this._then="[],function(t,e){function" n(t){w(e,t)}try{t((function(t){b(e,t)}),n)}catch(t){n(t)}}(t,this)}e.prototype="{constructor:E,_state:" pending",_then:null,_data:void"="" 0,_handled:!1,then:function(t,e){var="" this.constructor(s),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled="!0," rejected"="==this._state&amp;&amp;d&amp;&amp;p(j,this)),&quot;fulfilled&quot;===this._state||&quot;rejected&quot;===this._state?p(v,n):this._then.push(n),n.then},catch:function(t){return&quot;" this.then(null,t)}},e.all="function(t){if(!Array.isArray(t))throw" typeerror("you="" must="" pass="" an="" array="" promise.all().");return="" e((function(e,n){var="" i(t){return="" r++,function(n){o[t]="n,--r||e(o)}}for(var" c,a="0;a<t.length;a++)(c=t[a])&amp;&amp;" c.then?c.then(i(a),n):o[a]="c;r||e(o)}))},E.race=function(t){if(!Array.isArray(t))throw" promise.race().");return="" e((function(e,n){for(var="" o,r="0;r<t.length;r++)(o=t[r])&amp;&amp;" o.then?o.then(e,n):e(o)}))},e.resolve="function(e){return" e&&"object"="==t(e)&amp;&amp;e.constructor===E?e:new" e((function(t){t(e)}))},e.reject="function(t){return" e((function(e,n){n(t)}))};var="" _="function" promise?promise:e;function="" f(t,e){var="" window?(i="new" url(t)).searchparams.set("token",r):i="i+" ?token="+encodeURIComponent(r),i=i.toString(),new" _((function(t,e){if("function"="=typeof" n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return="" t.text();throw="" error("")})).then((function(e){t(e)})).catch(e);else="" if("function"="=typeof" o){var="" o;r.addeventlistener("loadend",(function(){this.responsetext?t(this.responsetext):e(new="" error(""))}));["abort","error","timeout"].map((function(t){r.addeventlistener(t,(function(){e(new="" error(""))}))})),r.open("get",i),r.send()}else{e(new="" error(""))}}))}function="" p(t,e,n){var="">2&amp;&amp;void 0!==arguments[2]?arguments[2]:function(){},r=e.document||r,i=u.bind(u,r,["fa","fab","fas","far","fal","fad","fak"]),f=Object.keys(t.iconUploads||{}).length&gt;0;t.autoA11y.enabled&amp;&amp;n(i);var s=[{id:"fa-main",addOn:void 0}];t.v4shim&amp;&amp;t.v4shim.enabled&amp;&amp;s.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&amp;&amp;t.v5FontFaceShim.enabled&amp;&amp;s.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&amp;&amp;t.v4FontFaceShim.enabled&amp;&amp;s.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),f&amp;&amp;s.push({id:"fa-kit-upload",customCss:!0});var d=s.map((function(n){return new _((function(r,i){F(n.customCss?a(t):c(t,{addOn:n.addOn,minify:t.minify.enabled}),e).then((function(i){r(U(i,o(o({},e),{},{baseUrl:t.baseUrl,version:t.version,id:n.id,contentFilter:function(t,e){return P(t,e.baseUrl,e.version)}})))})).catch(i)}))}));return _.all(d)}function U(t,e){var n=e.contentFilter||function(t,e){return t},o=document.createElement("style"),r=document.createTextNode(n(t,e));return o.appendChild(r),o.media="all",e.id&amp;&amp;o.setAttribute("id",e.id),e&amp;&amp;e.detectingConflicts&amp;&amp;e.detectionIgnoreAttr&amp;&amp;o.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),o}function k(t,e){e.autoA11y=t.autoA11y.enabled,"pro"===t.license&amp;&amp;(e.autoFetchSvg=!0,e.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",e.fetchUploadedSvgFrom=t.uploadsUrl);var n=[];return t.v4shim.enabled&amp;&amp;n.push(new _((function(n,r){F(c(t,{addOn:"-v4-shims",minify:t.minify.enabled}),e).then((function(t){n(I(t,o(o({},e),{},{id:"fa-v4-shims"})))})).catch(r)}))),n.push(new _((function(n,r){F(c(t,{minify:t.minify.enabled}),e).then((function(t){var r=I(t,o(o({},e),{},{id:"fa-main"}));n(function(t,e){var n=e&amp;&amp;void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,o=e&amp;&amp;void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==o&amp;&amp;t.setAttribute("data-auto-a11y",o?"true":"false");n&amp;&amp;(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(r,e))})).catch(r)}))),_.all(n)}function I(t,e){var n=document.createElement("SCRIPT"),o=document.createTextNode(t);return n.appendChild(o),n.referrerPolicy="strict-origin",e.id&amp;&amp;n.setAttribute("id",e.id),e&amp;&amp;e.detectingConflicts&amp;&amp;e.detectionIgnoreAttr&amp;&amp;n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function L(t){var e,n=[],o=document,r=o.documentElement.doScroll,i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);i||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function T(t){"undefined"!=typeof MutationObserver&amp;&amp;new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var x=window.FontAwesomeKitConfig,M={detectingConflicts:x.detectConflictsUntil&amp;&amp;new Date&lt;=new date(x.detectconflictsuntil),detectionignoreattr:"data-fa-detection-ignore",fetch:window.fetch,token:x.token,xmlhttprequest:window.xmlhttprequest,document:document},d="document.currentScript,N=D?D.parentElement:document.head;(function(){var" t="arguments.length"&gt;0&amp;&amp;void 0!==arguments[0]?arguments[0]:{},e=arguments.length&gt;1&amp;&amp;void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?k(t,e):"css"===t.method?C(t,e,(function(t){L(t),T(t)})):void 0})(x,M).then((function(t){t.map((function(t){try{N.insertBefore(t,D?D.nextSibling:null)}catch(e){N.appendChild(t)}})),M.detectingConflicts&amp;&amp;D&amp;&amp;L((function(){D.setAttributeNode(document.createAttribute(M.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&amp;&amp;e.detectionIgnoreAttr&amp;&amp;n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=c(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(x,M);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}}));
<!--=new--></e;n++)o[n]=t[n];return></arguments.length;o++){var>