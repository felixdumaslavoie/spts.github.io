(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{2073:function(e,r,t){"use strict";var n=t(5893);t(1664);r.Z=function(){return(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/collectif.spts",target:"_blank",rel:"noopener noreferrer",children:"Collectif SPTS"})}),(0,n.jsx)("li",{children:"-"}),(0,n.jsx)("li",{children:"2022"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Site web r\xe9alis\xe9 par"}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"-"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/felixdumaslavoie",target:"_blank",rel:"noopener noreferrer",children:"F\xe9lix D-L"})})]})]})}},5612:function(e,r,t){"use strict";var n=t(5893),o=t(1664);r.Z=function(){return(0,n.jsx)("nav",{className:"mainMenu",id:"navbar",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{id:"logo"})})})}),(0,n.jsx)("li",{className:"detail_color",children:(0,n.jsx)(o.default,{href:"/textes",children:(0,n.jsx)("a",{id:"id_textes",children:"Textes"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(o.default,{href:"/materiel",children:(0,n.jsx)("a",{id:"id_materiel",children:"Mat\xe9riel"})})}),(0,n.jsx)("li",{className:"nice_color",children:(0,n.jsx)(o.default,{href:"/historique",children:(0,n.jsx)("a",{id:"id_historique",children:"Historique"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(o.default,{href:"/evenements",children:(0,n.jsx)("a",{id:"id_events",children:"\xc9venements"})})}),(0,n.jsx)("li",{className:"nice_color",children:(0,n.jsx)(o.default,{href:"/archives",children:(0,n.jsx)("a",{id:"id_archives",children:"Archives"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(o.default,{href:"/appuis",children:(0,n.jsx)("a",{id:"id_appuis",children:"Appuis"})})}),(0,n.jsx)("li",{className:"detail_color",children:(0,n.jsx)(o.default,{href:"/contact",children:(0,n.jsx)("a",{id:"id_contact",children:"Contact"})})})]})})}},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);l=!0);}catch(c){a=!0,o=c}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,l=(i=t(7294))&&i.__esModule?i:{default:i},a=t(6273),c=t(387),s=t(7190);var u={};function f(e,r,t,n){if(e&&a.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),i=l.default.useMemo((function(){var r=o(a.resolveHref(n,e.href,!0),2),t=r[0],i=r[1];return{href:t,as:e.as?a.resolveHref(n,e.as):i||t}}),[n,e.href,e.as]),d=i.href,h=i.as,p=e.children,_=e.replace,m=e.shallow,v=e.scroll,y=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var x=(r=l.default.Children.only(p))&&"object"===typeof r&&r.ref,b=o(s.useIntersection({rootMargin:"200px"}),2),j=b[0],g=b[1],w=l.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);l.default.useEffect((function(){var e=g&&t&&a.isLocalURL(d),r="undefined"!==typeof y?y:n&&n.locale,o=u[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,d,h,{locale:r})}),[h,d,g,y,t,n]);var M={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,i,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:i,locale:c,scroll:l}))}(e,n,d,h,_,m,v,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var A="undefined"!==typeof y?y:n&&n.locale,E=n&&n.isLocaleDomain&&a.getDomainLocale(h,A,n&&n.locales,n&&n.domainLocales);M.href=E||a.addBasePath(a.addLocale(h,A,n&&n.defaultLocale))}return l.default.cloneElement(r,M)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);l=!0);}catch(c){a=!0,o=c}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!a,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(r?r.current:null),2),_=p[0],m=p[1],v=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),s.push(t));if(r)return r;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:i,elements:o}),r}(t),o=n.id,i=n.observer,l=n.elements;return l.set(e,r),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),c.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:_,rootMargin:t}))}),[n,_,t,d]);return i.useEffect((function(){if(!a&&!d){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){r&&m(r.current)}),[r]),[v,d]};var i=t(7294),l=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},226:function(e){e.exports={base_color:"materiel_base_color__9Do1D",detail_color:"materiel_detail_color__s3P0Y",important_color:"materiel_important_color__l7tNT",nice_color:"materiel_nice_color__6X_gq",sub1_color:"materiel_sub1_color__TO9aH",container:"materiel_container__TBqy6",main:"materiel_main__5KfXy",title:"materiel_title__FRMYo",description:"materiel_description__A6Ets",logo:"materiel_logo__Us8lw",footer:"materiel_footer__XbI5L",grid:"materiel_grid__8r3f1"}},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}}]);