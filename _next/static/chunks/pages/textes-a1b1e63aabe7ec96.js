(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{1133:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/textes",function(){return r(7371)}])},2073:function(e,t,r){"use strict";var n=r(5893);r(1664);t.Z=function(){return(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/collectif.spts",target:"_blank",rel:"noopener noreferrer",children:"Collectif SPTS"})}),(0,n.jsx)("li",{children:"-"}),(0,n.jsx)("li",{children:"2022"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Site web r\xe9alis\xe9 par"}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"-"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/felixdumaslavoie",target:"_blank",rel:"noopener noreferrer",children:"F\xe9lix D-L"})})]})]})}},5612:function(e,t,r){"use strict";var n=r(5893),o=r(1664);t.Z=function(){return(0,n.jsx)("nav",{className:"mainMenu",id:"navbar",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{id:"logo"})})})}),(0,n.jsx)("li",{className:"detail_color",children:(0,n.jsx)(o.default,{href:"/textes",children:(0,n.jsx)("a",{id:"id_textes",children:"Textes"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(o.default,{href:"/materiel",children:(0,n.jsx)("a",{id:"id_materiel",children:"Mat\xe9riel"})})}),(0,n.jsx)("li",{className:"nice_color",children:(0,n.jsx)(o.default,{href:"/historique",children:(0,n.jsx)("a",{id:"id_historique",children:"Historique"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(o.default,{href:"/evenements",children:(0,n.jsx)("a",{id:"id_events",children:"\xc9venements"})})}),(0,n.jsx)("li",{className:"nice_color",children:(0,n.jsx)(o.default,{href:"/archives",children:(0,n.jsx)("a",{id:"id_archives",children:"Archives"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(o.default,{href:"/appuis",children:(0,n.jsx)("a",{id:"id_appuis",children:"Appuis"})})}),(0,n.jsx)("li",{className:"detail_color",children:(0,n.jsx)(o.default,{href:"/contact",children:(0,n.jsx)("a",{id:"id_contact",children:"Contact"})})})]})})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(s){a=!0,o=s}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,l=(i=r(7294))&&i.__esModule?i:{default:i},a=r(6273),s=r(387),c=r(7190);var u={};function f(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),i=l.default.useMemo((function(){var t=o(a.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?a.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,h=i.as,p=e.children,x=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var _=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,y=o(c.useIntersection({rootMargin:"200px"}),2),g=y[0],b=y[1],w=l.default.useCallback((function(e){g(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,g]);l.default.useEffect((function(){var e=b&&r&&a.isLocalURL(d),t="undefined"!==typeof j?j:n&&n.locale,o=u[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,b,j,r,n]);var T={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:l}))}(e,n,d,h,x,m,v,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof j?j:n&&n.locale,E=n&&n.isLocaleDomain&&a.getDomainLocale(h,N,n&&n.locales,n&&n.domainLocales);T.href=E||a.addBasePath(a.addLocale(h,N,n&&n.defaultLocale))}return l.default.cloneElement(t,T)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(s){a=!0,o=s}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!a,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(t?t.current:null),2),x=p[0],m=p[1],v=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,l=n.elements;return l.set(e,t),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:x,rootMargin:r}))}),[n,x,r,d]);return i.useEffect((function(){if(!a&&!d){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&m(t.current)}),[t]),[v,d]};var i=r(7294),l=r(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},7371:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(4051),o=r.n(n),i=r(5893),l=r(9008),a=r(7851),s=r.n(a),c=r(5612),u=r(2073),f=r(7294);function d(e,t,r,n,o,i,l){try{var a=e[i](l),s=a.value}catch(c){return void r(c)}a.done?t(s):Promise.resolve(s).then(n,o)}function h(){var e,t=void 0,n=void 0,a=void 0,h=(0,f.useCallback)((e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://collectifspts.org/dynamicDataSPTS/textes/index/index.json").then((function(e){if(!e.ok)throw new Error("HTTP error "+e.status);return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function l(e){d(i,n,o,l,a,"next",e)}function a(e){d(i,n,o,l,a,"throw",e)}l(void 0)}))}),[]);return(0,f.useEffect)((function(){window.$=window.jQuery=r(9755),void 0!==t&&void 0!==n&&void 0!==a||(t=document.getElementById("logo"),n=0,a=0),document.getElementById("id_textes").classList.add("selected"),h().catch(console.error).then((function(e){for(var t=0;t<e.id.length;t++)$(".listeTxts").append("<li><a href=textes/"+e.url[t]+">"+e.titre[t]+"</a></li>")})),window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;0==a&&e>n?(t.className="smallLogo",a=1):1==a&&e<=n&&(t.className="largeLogo",a=0)}}),[h]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:s().container,children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("title",{children:"Collectif SPTS: Textes"}),(0,i.jsx)("meta",{property:"og:title",content:"Collectif SPTS: Textes"}),(0,i.jsx)("meta",{property:"og:url",content:"https://collectifspts.org/textes/"}),(0,i.jsx)("meta",{property:"og:image",content:"/thumbnails/appuis.jpg"}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:description",content:"Organismes qui appuient la salarisation"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{name:"description",content:"Collectif un salaire pour toustes les stagiaires"})]}),(0,i.jsxs)("main",{className:s().main,children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)("header",{className:"header_subsections_center",children:(0,i.jsx)("h1",{id:"txtTitre",className:s().headerTitre,children:(0,i.jsx)("span",{className:"detail_color",children:"Index des textes"})})}),(0,i.jsx)("section",{id:"listeTextes",className:s().listeTextes,children:(0,i.jsx)("ul",{className:"listeTxts"})})]}),(0,i.jsx)(u.Z,{})]})})}},7851:function(e){e.exports={base_color:"indexTextes_base_color__a2H0N",detail_color:"indexTextes_detail_color__oBgRI",important_color:"indexTextes_important_color__NLOTH",nice_color:"indexTextes_nice_color__lPb1O",sub1_color:"indexTextes_sub1_color__NybnZ",main:"indexTextes_main__yMq7_",listeTextes:"indexTextes_listeTextes__ejpMB"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[571,774,888,179],(function(){return t=1133,e(e.s=t);var t}));var t=e.O();_N_E=t}]);