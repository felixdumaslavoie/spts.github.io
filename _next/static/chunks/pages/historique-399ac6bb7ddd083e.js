(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{2197:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/historique",function(){return t(5588)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,l=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(l.push(n.value),!r||l.length!==r);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var l,i=(l=t(7294))&&l.__esModule?l:{default:l},a=t(6273),s=t(387),c=t(7190);var u={};function f(e,r,t,n){if(e&&a.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=s.useRouter(),l=i.default.useMemo((function(){var r=o(a.resolveHref(n,e.href,!0),2),t=r[0],l=r[1];return{href:t,as:e.as?a.resolveHref(n,e.as):l||t}}),[n,e.href,e.as]),d=l.href,h=l.as,p=e.children,m=e.replace,j=e.shallow,_=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var v=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,y=o(c.useIntersection({rootMargin:"200px"}),2),g=y[0],b=y[1],w=i.default.useCallback((function(e){g(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,g]);i.default.useEffect((function(){var e=b&&t&&a.isLocalURL(d),r="undefined"!==typeof x?x:n&&n.locale,o=u[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,d,h,{locale:r})}),[h,d,b,x,t,n]);var N={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,l,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:l,locale:s,scroll:i}))}(e,n,d,h,m,j,_,x)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof x?x:n&&n.locale,S=n&&n.isLocaleDomain&&a.getDomainLocale(h,E,n&&n.locales,n&&n.domainLocales);N.href=S||a.addBasePath(a.addLocale(h,E,n&&n.defaultLocale))}return i.default.cloneElement(r,N)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,l=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(l.push(n.value),!r||l.length!==r);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!a,u=l.useRef(),f=o(l.useState(!1),2),d=f[0],h=f[1],p=o(l.useState(r?r.current:null),2),m=p[0],j=p[1],_=l.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=s.get(n):(r=s.get(t),c.push(t));if(r)return r;var o=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(t,r={id:t,observer:l,elements:o}),r}(t),o=n.id,l=n.observer,i=n.elements;return i.set(e,r),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),s.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:t}))}),[n,m,t,d]);return l.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),l.useEffect((function(){r&&j(r.current)}),[r]),[_,d]};var l=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},5588:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(5893),o=t(9008),l=t(226),i=t.n(l),a=t(1664),s=t(7294);function c(){var e=void 0,r=void 0,t=void 0;return(0,s.useEffect)((function(){void 0!==e&&void 0!==r&&void 0!==t||(e=document.getElementById("logo"),r=150,t=0),window.onscroll=function(){var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;0==t&&n>r?(e.className="smallLogo",t=1):1==t&&n<=r&&(e.className="largeLogo",t=0)}}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Collectif SPTS: Historique de la lutte en cours..."}),(0,n.jsx)("meta",{property:"og:title",content:"Collectif SPTS: \xc9venements"}),(0,n.jsx)("meta",{property:"og:url",content:"https://collectifspts.org/historique"}),(0,n.jsx)("meta",{property:"og:image",content:"/thumbnails/historique.jpg"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:description",content:"Historique de la lutte pour la salarisation des stages"}),(0,n.jsx)("meta",{name:"description",content:"Historique de la lutte pour la salarisation des stages"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:i().main,children:[(0,n.jsx)("div",{className:"mainMenu",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{id:"logo"})})})}),(0,n.jsx)("li",{className:"detail_color",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:"Accueil"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(a.default,{href:"/materiel",children:(0,n.jsx)("a",{children:"Mat\xe9riel"})})}),(0,n.jsx)("li",{className:"nice_color",children:(0,n.jsx)(a.default,{href:"/historique",children:(0,n.jsx)("a",{className:"selected",children:"Historique"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(a.default,{href:"/evenements",children:(0,n.jsx)("a",{children:"\xc9venements"})})}),(0,n.jsx)("li",{className:"nice_color",children:(0,n.jsx)(a.default,{href:"/archives",children:(0,n.jsx)("a",{children:"Archives"})})}),(0,n.jsx)("li",{className:"sub1_color",children:(0,n.jsx)(a.default,{href:"/appuis",children:(0,n.jsx)("a",{children:"Appuis"})})}),(0,n.jsx)("li",{className:"detail_color",children:(0,n.jsx)(a.default,{href:"/contact",children:(0,n.jsx)("a",{children:"Contact"})})})]})}),(0,n.jsxs)("header",{className:"header_subsections_right",children:[(0,n.jsx)("h1",{className:"headerh1blue",children:(0,n.jsxs)("div",{className:"header_underline",children:[(0,n.jsx)("span",{children:"H"}),(0,n.jsx)("span",{children:"i"}),(0,n.jsx)("span",{children:"s"}),(0,n.jsx)("span",{children:"t"}),(0,n.jsx)("span",{children:"o"}),(0,n.jsx)("span",{children:"r"}),(0,n.jsx)("span",{children:"i"}),(0,n.jsx)("span",{children:"q"}),(0,n.jsx)("span",{children:"u"}),(0,n.jsx)("span",{children:"e"})]})}),(0,n.jsxs)("h5",{children:["...de ce qui s'est d\xe9j\xe0 ",(0,n.jsx)("div",{className:"header_underline",children:"organis\xe9"})]})]})]}),(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/collectif.spts",target:"_blank",rel:"noopener noreferrer",children:"Collectif SPTS"})}),(0,n.jsx)("li",{children:"-"}),(0,n.jsx)("li",{children:"2022"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Site web r\xe9alis\xe9 par"}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"-"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/felixdumaslavoie",target:"_blank",rel:"noopener noreferrer",children:"F\xe9lix D-L"})})]})]})]})})}},226:function(e){e.exports={base_color:"materiel_base_color__9Do1D",detail_color:"materiel_detail_color__s3P0Y",important_color:"materiel_important_color__l7tNT",nice_color:"materiel_nice_color__6X_gq",sub1_color:"materiel_sub1_color__TO9aH",container:"materiel_container__TBqy6",main:"materiel_main__5KfXy",title:"materiel_title__FRMYo",description:"materiel_description__A6Ets",logo:"materiel_logo__Us8lw",footer:"materiel_footer__XbI5L",grid:"materiel_grid__8r3f1"}},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=2197,e(e.s=r);var r}));var r=e.O();_N_E=r}]);