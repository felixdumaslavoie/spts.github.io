(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(s){o=!0,a=s}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},o=n(6273),s=n(387),c=n(7190);var u={};function f(e,r,n,t){if(e&&o.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=s.useRouter(),i=l.default.useMemo((function(){var r=a(o.resolveHref(t,e.href,!0),2),n=r[0],i=r[1];return{href:n,as:e.as?o.resolveHref(t,e.as):i||n}}),[t,e.href,e.as]),d=i.href,p=i.as,h=e.children,m=e.replace,_=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var x=(r=l.default.Children.only(h))&&"object"===typeof r&&r.ref,y=a(c.useIntersection({rootMargin:"200px"}),2),g=y[0],b=y[1],N=l.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);l.default.useEffect((function(){var e=b&&n&&o.isLocalURL(d),r="undefined"!==typeof j?j:t&&t.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(t,d,p,{locale:r})}),[p,d,b,j,n,t]);var w={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,i,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),r[a?"replace":"push"](n,t,{shallow:i,locale:s,scroll:l}))}(e,t,d,p,m,_,v,j)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),o.isLocalURL(d)&&f(t,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var S="undefined"!==typeof j?j:t&&t.locale,E=t&&t.isLocaleDomain&&o.getDomainLocale(p,S,t&&t.locales,t&&t.domainLocales);w.href=E||o.addBasePath(o.addLocale(p,S,t&&t.defaultLocale))}return l.default.cloneElement(r,w)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(s){o=!0,a=s}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!o,u=i.useRef(),f=a(i.useState(!1),2),d=f[0],p=f[1],h=a(i.useState(r?r.current:null),2),m=h[0],_=h[1],v=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||d||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=s.get(t):(r=s.get(n),c.push(n));if(r)return r;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return s.set(n,r={id:n,observer:i,elements:a}),r}(n),a=t.id,i=t.observer,l=t.elements;return l.set(e,r),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),s.delete(a);var r=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[t,m,n,d]);return i.useEffect((function(){if(!o&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){r&&_(r.current)}),[r]),[v,d]};var i=n(7294),l=n(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},3678:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return s}});var t=n(5893),a=n(9008),i=n(9598),l=n.n(i),o=n(1664);function s(){return(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"Collectif SPTS: un salaire pour toustes les stagiaires!"}),(0,t.jsx)("meta",{name:"description",content:"Collectif SPTS: un salaire pour toustes les stagiaires"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("main",{className:l().main,children:[(0,t.jsx)("div",{className:"mainMenu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"detail_color",children:(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("a",{className:"selected",children:"Accueil"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(o.default,{href:"/materiel",children:(0,t.jsx)("a",{children:"Mat\xe9riel"})})}),(0,t.jsx)("li",{className:"nice_color",children:(0,t.jsx)(o.default,{href:"/historique",children:(0,t.jsx)("a",{children:"Historique"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(o.default,{href:"/evenements",children:(0,t.jsx)("a",{children:"\xc9venements"})})}),(0,t.jsx)("li",{className:"nice_color",children:(0,t.jsx)(o.default,{href:"/archives",children:(0,t.jsx)("a",{children:"Archives"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(o.default,{href:"/appuis",children:(0,t.jsx)("a",{children:"Appuis"})})}),(0,t.jsx)("li",{className:"detail_color",children:(0,t.jsx)(o.default,{href:"/contact",children:(0,t.jsx)("a",{children:"Contact"})})})]})}),(0,t.jsxs)("header",{className:"header",children:[(0,t.jsxs)("h1",{className:l().title,children:[(0,t.jsxs)("div",{className:"header_underline",children:[(0,t.jsx)("span",{children:"C"}),(0,t.jsx)("span",{children:"o"}),(0,t.jsx)("span",{children:"l"}),(0,t.jsx)("span",{children:"l"}),(0,t.jsx)("span",{children:"e"}),(0,t.jsx)("span",{children:"c"}),(0,t.jsx)("span",{children:"t"}),(0,t.jsx)("span",{children:"i"}),(0,t.jsx)("span",{children:"f"})]}),(0,t.jsxs)("div",{className:"header_mauve",children:[(0,t.jsx)("span",{children:" "}),(0,t.jsx)("span",{children:"S"}),(0,t.jsx)("span",{children:"P"}),(0,t.jsx)("span",{children:"T"}),(0,t.jsx)("span",{children:"S"}),(0,t.jsx)("span",{children:" "})]})]}),(0,t.jsxs)("h3",{children:["Un ",(0,t.jsx)("span",{className:"detail_color",children:"s"}),"alaire ",(0,t.jsx)("span",{className:"nice_color",children:"p"}),"our ",(0,t.jsx)("span",{className:"base_color",children:"t"}),"oustes les ",(0,t.jsxs)("div",{className:"header_underline",children:[(0,t.jsx)("span",{className:"detail_color",children:"s"}),"tagiaires!"]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h6",{className:"hidden",children:"Intro"}),(0,t.jsx)("p",{children:"Le collectif SPTS est un regroupement interr\xe9gional d\u2019\xe9tudiant.e.s qui militent pour combattre les in\xe9galit\xe9s et les oppressions v\xe9cues par la classe \xe9tudiante, sp\xe9cifiquement en lien avec le travail gratuit effectu\xe9 en stage non salari\xe9."})]})]}),(0,t.jsx)("footer",{className:l().footer,children:(0,t.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,t.jsx)("span",{className:l().logo})]})})]})}},9598:function(e){e.exports={base_color:"principale_base_color__brhyr",detail_color:"principale_detail_color__J0Z7K",important_color:"principale_important_color__nuwy1",nice_color:"principale_nice_color__p37l4",sub1_color:"principale_sub1_color__WfAa8",container:"principale_container__4QXIk",main:"principale_main__XGmrU",title:"principale_title__vteOr",description:"principale_description__oDwoY",logo:"principale_logo__JWq5G",footer:"principale_footer__5Tol8",grid:"principale_grid__Pt9Mf"}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);