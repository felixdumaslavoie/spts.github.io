(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,l,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);o=!0);}catch(s){a=!0,l=s}finally{try{o||null==n.return||n.return()}finally{if(a)throw l}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),s=n(387),c=n(7190);var u={};function d(e,r,n,t){if(e&&a.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var l=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(l?"%"+l:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,t=s.useRouter(),i=o.default.useMemo((function(){var r=l(a.resolveHref(t,e.href,!0),2),n=r[0],i=r[1];return{href:n,as:e.as?a.resolveHref(t,e.as):i||n}}),[t,e.href,e.as]),f=i.href,p=i.as,h=e.children,m=e.replace,j=e.shallow,x=e.scroll,v=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var _=(r=o.default.Children.only(h))&&"object"===typeof r&&r.ref,g=l(c.useIntersection({rootMargin:"200px"}),2),y=g[0],b=g[1],w=o.default.useCallback((function(e){y(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,y]);o.default.useEffect((function(){var e=b&&n&&a.isLocalURL(f),r="undefined"!==typeof v?v:t&&t.locale,l=u[f+"%"+p+(r?"%"+r:"")];e&&!l&&d(t,f,p,{locale:r})}),[p,f,b,v,n,t]);var N={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,l,i,o,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),r[l?"replace":"push"](n,t,{shallow:i,locale:s,scroll:o}))}(e,t,f,p,m,j,x,v)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(f)&&d(t,f,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var S="undefined"!==typeof v?v:t&&t.locale,E=t&&t.isLocaleDomain&&a.getDomainLocale(p,S,t&&t.locales,t&&t.domainLocales);N.href=E||a.addBasePath(a.addLocale(p,S,t&&t.defaultLocale))}return o.default.cloneElement(r,N)};r.default=f},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,l,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);o=!0);}catch(s){a=!0,l=s}finally{try{o||null==n.return||n.return()}finally{if(a)throw l}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!a,u=i.useRef(),d=l(i.useState(!1),2),f=d[0],p=d[1],h=l(i.useState(r?r.current:null),2),m=h[0],j=h[1],x=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=s.get(t):(r=s.get(n),c.push(n));if(r)return r;var l=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return s.set(n,r={id:n,observer:i,elements:l}),r}(n),l=t.id,i=t.observer,o=t.elements;return o.set(e,r),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(l);var r=c.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[t,m,n,f]);return i.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){r&&j(r.current)}),[r]),[x,f]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},3678:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n(5893),l=n(9008),i=n(9598),o=n.n(i),a=n(1664),s=n(7294);function c(){var e=void 0,r=void 0,n=void 0;return(0,s.useEffect)((function(){void 0!==e&&void 0!==r&&void 0!==n||(e=document.getElementById("logo"),r=150,n=0),window.onscroll=function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;0==n&&t>r?(e.className="smallLogo",n=1):1==n&&t<=r&&(e.className="largeLogo",n=0)}}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"Collectif SPTS: Un salaire pour toustes les stagiaires!"}),(0,t.jsx)("meta",{property:"og:title",content:"Collectif SPTS: Un salaire pour toustes les stagiaires!"}),(0,t.jsx)("meta",{property:"og:url",content:"https://collectifspts.org"}),(0,t.jsx)("meta",{property:"og:image",content:"/thumbnails/main.jpg"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{name:"description",content:"Collectif SPTS: un salaire pour toustes les stagiaires!"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("main",{className:o().main,children:[(0,t.jsx)("div",{className:"mainMenu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{id:"logo"})})})}),(0,t.jsx)("li",{className:"detail_color",children:(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{className:"selected",children:"Accueil"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(a.default,{href:"/materiel",children:(0,t.jsx)("a",{children:"Mat\xe9riel"})})}),(0,t.jsx)("li",{className:"nice_color",children:(0,t.jsx)(a.default,{href:"/historique",children:(0,t.jsx)("a",{children:"Historique"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(a.default,{href:"/evenements",children:(0,t.jsx)("a",{children:"\xc9venements"})})}),(0,t.jsx)("li",{className:"nice_color",children:(0,t.jsx)(a.default,{href:"/archives",children:(0,t.jsx)("a",{children:"Archives"})})}),(0,t.jsx)("li",{className:"sub1_color",children:(0,t.jsx)(a.default,{href:"/appuis",children:(0,t.jsx)("a",{children:"Appuis"})})}),(0,t.jsx)("li",{className:"detail_color",children:(0,t.jsx)(a.default,{href:"/contact",children:(0,t.jsx)("a",{children:"Contact"})})})]})}),(0,t.jsxs)("header",{className:"header",children:[(0,t.jsxs)("h1",{className:o().title,children:[(0,t.jsxs)("div",{className:"header_underline",children:[(0,t.jsx)("span",{children:"C"}),(0,t.jsx)("span",{children:"o"}),(0,t.jsx)("span",{children:"l"}),(0,t.jsx)("span",{children:"l"}),(0,t.jsx)("span",{children:"e"}),(0,t.jsx)("span",{children:"c"}),(0,t.jsx)("span",{children:"t"}),(0,t.jsx)("span",{children:"i"}),(0,t.jsx)("span",{children:"f"})]}),(0,t.jsxs)("div",{className:"header_mauve",children:[(0,t.jsx)("span",{children:" "}),(0,t.jsx)("span",{children:"S"}),(0,t.jsx)("span",{children:"P"}),(0,t.jsx)("span",{children:"T"}),(0,t.jsx)("span",{children:"S"}),(0,t.jsx)("span",{children:" "})]})]}),(0,t.jsxs)("h3",{children:["Un ",(0,t.jsx)("span",{className:"detail_color",children:"s"}),"alaire ",(0,t.jsx)("span",{className:"nice_color",children:"p"}),"our ",(0,t.jsx)("span",{className:"base_color",children:"t"}),"oustes les ",(0,t.jsxs)("div",{className:"header_underline",children:[(0,t.jsx)("span",{className:"detail_color",children:"s"}),"tagiaires!"]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h6",{className:"hidden",children:"Intro"}),(0,t.jsx)("p",{children:"Le collectif SPTS est un regroupement interr\xe9gional d\u2019\xe9tudiant.e.s qui militent pour combattre les in\xe9galit\xe9s et les oppressions v\xe9cues par la classe \xe9tudiante, sp\xe9cifiquement en lien avec le travail gratuit effectu\xe9 en stage non salari\xe9."})]})]}),(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.facebook.com/collectif.spts",target:"_blank",rel:"noopener noreferrer",children:"Collectif SPTS"})}),(0,t.jsx)("li",{children:"-"}),(0,t.jsx)("li",{children:"2022"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Site web r\xe9alis\xe9 par"}),(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"-"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/felixdumaslavoie",target:"_blank",rel:"noopener noreferrer",children:"F\xe9lix D-L"})})]})]})]})})}},9598:function(e){e.exports={base_color:"principale_base_color__brhyr",detail_color:"principale_detail_color__J0Z7K",important_color:"principale_important_color__nuwy1",nice_color:"principale_nice_color__p37l4",sub1_color:"principale_sub1_color__WfAa8",container:"principale_container__4QXIk",main:"principale_main__XGmrU",title:"principale_title__vteOr",description:"principale_description__oDwoY",logo:"principale_logo__JWq5G",footer:"principale_footer__5Tol8",grid:"principale_grid__Pt9Mf"}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);