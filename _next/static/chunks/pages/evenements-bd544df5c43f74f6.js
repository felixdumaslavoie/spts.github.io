(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{4936:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/evenements",function(){return r(9256)}])},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,l,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(a){s=!0,l=a}finally{try{i||null==r.return||r.return()}finally{if(s)throw l}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},s=r(6273),a=r(387),c=r(7190);var u={};function f(e,n,r,t){if(e&&s.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var l=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(l?"%"+l:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,t=a.useRouter(),o=i.default.useMemo((function(){var n=l(s.resolveHref(t,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?s.resolveHref(t,e.as):o||r}}),[t,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,v=e.shallow,_=e.scroll,j=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var x=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,y=l(c.useIntersection({rootMargin:"200px"}),2),b=y[0],g=y[1],w=i.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);i.default.useEffect((function(){var e=g&&r&&s.isLocalURL(d),n="undefined"!==typeof j?j:t&&t.locale,l=u[d+"%"+h+(n?"%"+n:"")];e&&!l&&f(t,d,h,{locale:n})}),[h,d,g,j,r,t]);var N={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,l,o,i,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),n[l?"replace":"push"](r,t,{shallow:o,locale:a,scroll:i}))}(e,t,d,h,m,v,_,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof j?j:t&&t.locale,A=t&&t.isLocaleDomain&&s.getDomainLocale(h,k,t&&t.locales,t&&t.domainLocales);N.href=A||s.addBasePath(s.addLocale(h,k,t&&t.defaultLocale))}return i.default.cloneElement(n,N)};n.default=d},7190:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,l,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(a){s=!0,l=a}finally{try{i||null==r.return||r.return()}finally{if(s)throw l}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!s,u=o.useRef(),f=l(o.useState(!1),2),d=f[0],h=f[1],p=l(o.useState(n?n.current:null),2),m=p[0],v=p[1],_=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||d||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=a.get(t):(n=a.get(r),c.push(r));if(n)return n;var l=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(r,n={id:r,observer:o,elements:l}),n}(r),l=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(l);var n=c.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:r}))}),[t,m,r,d]);return o.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&v(n.current)}),[n]),[_,d]};var o=r(7294),i=r(9311),s="undefined"!==typeof IntersectionObserver;var a=new Map,c=[]},9256:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r(5893),l=r(9008),o=r(5882),i=r.n(o),s=r(1664);function a(){return(0,t.jsxs)("div",{className:i().container,children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"Collectif SPTS: Les \xe9venements organis\xe9s par le collectif"}),(0,t.jsx)("meta",{name:"description",content:"Collectif un salaire pour toustes les stagiaires"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("main",{className:i().main,children:[(0,t.jsx)("div",{className:"mainMenu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"detail_color",children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:"Accueil"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(s.default,{href:"/materiel",children:(0,t.jsx)("a",{children:"Mat\xe9riel"})})}),(0,t.jsx)("li",{className:"nice_color",children:(0,t.jsx)(s.default,{href:"/historique",children:(0,t.jsx)("a",{children:"Historique"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(s.default,{href:"/evenements",children:(0,t.jsx)("a",{className:"selected",children:"\xc9venements"})})}),(0,t.jsx)("li",{className:"nice_color",children:(0,t.jsx)(s.default,{href:"/archives",children:(0,t.jsx)("a",{children:"Archives"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(s.default,{href:"/appuis",children:(0,t.jsx)("a",{children:"Appuis"})})}),(0,t.jsx)("li",{className:"detail_color",children:(0,t.jsx)(s.default,{href:"/contact",children:(0,t.jsx)("a",{children:"Contact"})})})]})}),(0,t.jsxs)("header",{className:"header_subsections_center",children:[(0,t.jsx)("h1",{className:"headerh1blue",children:(0,t.jsxs)("div",{className:"header_underline",children:[(0,t.jsx)("span",{children:"\xc9"}),(0,t.jsx)("span",{children:"v"}),(0,t.jsx)("span",{children:"e"}),(0,t.jsx)("span",{children:"n"}),(0,t.jsx)("span",{children:"e"}),(0,t.jsx)("span",{children:"m"}),(0,t.jsx)("span",{children:"e"}),(0,t.jsx)("span",{children:"n"}),(0,t.jsx)("span",{children:"t"}),(0,t.jsx)("span",{children:"s"})]})}),(0,t.jsxs)("h5",{children:["en cours d'",(0,t.jsx)("div",{className:"header_underline",children:"organisation!"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h6",{className:"hidden",children:"Work in progress"}),(0,t.jsx)("p",{children:"Api en d\xe9veloppement... :)"})]})]}),(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.facebook.com/collectif.spts",target:"_blank",rel:"noopener noreferrer",children:"Collectif SPTS"})}),(0,t.jsx)("li",{children:"-"}),(0,t.jsx)("li",{children:"2022"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Site web r\xe9alis\xe9 par"}),(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"-"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/felixdumaslavoie",target:"_blank",rel:"noopener noreferrer",children:"F\xe9lix D-L"})})]})]})]})}},5882:function(e){e.exports={base_color:"evenements_base_color__8Stte",detail_color:"evenements_detail_color__Kj_FC",important_color:"evenements_important_color__6tLed",nice_color:"evenements_nice_color__4mGO5",sub1_color:"evenements_sub1_color__4uwfq",container:"evenements_container__0IVgL",main:"evenements_main__xkPY_",title:"evenements_title__qZsP5",description:"evenements_description__GocqI",logo:"evenements_logo__FkAii",footer:"evenements_footer__fHs9O",grid:"evenements_grid__MkUMT"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=4936,e(e.s=n);var n}));var n=e.O();_N_E=n}]);