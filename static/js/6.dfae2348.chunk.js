(window["webpackJsonpmy-portfolio"]=window["webpackJsonpmy-portfolio"]||[]).push([[6],{110:function(e,t,n){"use strict";n.r(t);var i=n(9),r=n(0),a=n.n(r),o=n(7),s=n.n(o),l=n(86),c=n.n(l),u=n(83),f=n(5),m=n.n(f);var d=function(e){return a.a.createElement("div",{className:"mi-smalltitle"},a.a.createElement("span",{className:"mi-smalltitle-icon"},a.a.createElement(m.a,{name:e.icon})),a.a.createElement("h4",null,e.title))},p=n(18);var v=function(e){return a.a.createElement("div",{className:"mi-progress"},a.a.createElement("h6",{className:"mi-progress-title"},e.title),a.a.createElement("div",{className:"mi-progress-inner"},a.a.createElement("div",{className:"mi-progress-percentage"},"".concat(e.percentage,"%")),a.a.createElement("div",{className:"mi-progress-container"},a.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}))))};var h=function(e){var t=e.resumeData,n=t.year,i=t.position,r=t.graduation,o=t.university,s=t.company,l=t.details;return a.a.createElement("div",{className:"mi-resume mt-30"},a.a.createElement("div",{className:"mi-resume-summary"},a.a.createElement("h6",{className:"mi-resume-year"},n)),a.a.createElement("div",{className:"mi-resume-details"},a.a.createElement("h5",null,i||r),a.a.createElement("h6",{className:"mi-resume-company"},s||o),a.a.createElement("p",null,l)))};t.default=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(r.useState)([]),f=Object(i.a)(l,2),m=f[0],b=f[1];return Object(r.useEffect)((function(){s.a.get("/api/skills").then((function(e){o(e.data)})),s.a.get("/api/experience").then((function(e){b(e.data.workingExperience)}))}),[]),a.a.createElement(p.a,null,a.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},a.a.createElement("div",{className:"container"},a.a.createElement(u.a,{title:"My Skills"}),a.a.createElement("div",{className:"mi-skills"},a.a.createElement("div",{className:"row mt-30-reverse"},n.map((function(e){return a.a.createElement(c.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},a.a.createElement(v,{title:e.title,percentage:e.value}))})))))),a.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},a.a.createElement("div",{className:"container"},a.a.createElement(u.a,{title:"Resume"}),a.a.createElement(d,{title:"Working Experience",icon:"briefcase"}),a.a.createElement("div",{className:"mi-resume-wrapper"},m.map((function(e){return a.a.createElement(h,{key:e.id,resumeData:e})}))),a.a.createElement("div",{className:"mt-30"}))))}},83:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){return r.a.createElement("div",{className:"mi-sectiontitle"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,e.title))}},86:function(e,t,n){"use strict";var i;t.__esModule=!0,t.default=void 0;var r=((i=n(87))&&i.__esModule?i:{default:i}).default;t.default=r},87:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(0)),r=s(n(12)),a=s(n(88)),o=s(n(89));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var c=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,i){var r=e.top,a=e.left,o=e.bottom,s=e.right,l=e.width,c=e.height,u=n.props,f=u.offset,m=u.partialVisibility;if(r+s+o+a===0)return!1;var d=0-f,p=0-f,v=t+f,h=i+f;return m?r+c>=d&&a+l>=p&&o-c<=h&&s-l<=v:r>=d&&a>=p&&o<=h&&s<=v},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,i=n.nodeRef.getBoundingClientRect(),r=window.innerWidth||e.clientWidth,a=window.innerHeight||e.clientHeight,o=n.isVisible(i,r,a);o&&t&&n.removeListener(),n.setState({isVisible:o})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(r.propTypes),n.state={isVisible:!1},n.throttleCb=(0,a.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=r.prototype;return s.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},s.componentDidUpdate=function(e){(0,o.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},s.componentWillUnmount=function(){this.removeListener()},s.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},s.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},s.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(i){-1===t.ownProps.indexOf(i)&&(n[i]=e[i])})),n},s.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):i.default.Children.map(this.props.children,(function(t){return i.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},s.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeRef,a=e.tag,o=l({},t&&{className:t},n&&{style:n});return i.default.createElement(a,l({ref:!r&&this.setNodeRef},o),this.getChildren())},r}(i.PureComponent);t.default=c,c.propTypes={once:r.default.bool,throttleInterval:function(e,t,n){var i=e[t];return!Number.isInteger(i)||i<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:r.default.oneOfType([r.default.func,r.default.element,r.default.arrayOf(r.default.element)]),style:r.default.object,className:r.default.string,offset:r.default.number,partialVisibility:r.default.bool,nodeRef:r.default.object,tag:r.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},88:function(e,t,n){(function(t){var n="Expected a function",i=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,m=u||f||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,h=function(){return m.Date.now()};function b(e,t,i){var r,a,o,s,l,c,u=0,f=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=r,i=a;return r=a=void 0,u=t,s=e.apply(i,n)}function E(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-u>=o}function w(){var e=h();if(E(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-c);return m?v(n,o-(e-u)):n}(e))}function O(e){return l=void 0,d&&r?b(e):(r=a=void 0,s)}function j(){var e=h(),n=E(e);if(r=arguments,a=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),f?b(e):s}(c);if(m)return l=setTimeout(w,t),b(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=y(t)||0,g(i)&&(f=!!i.leading,o=(m="maxWait"in i)?p(y(i.maxWait)||0,t):o,d="trailing"in i?!!i.trailing:d),j.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=a=l=void 0},j.flush=function(){return void 0===l?s:O(h())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==r}(e))return i;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):o.test(e)?i:+e}e.exports=function(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return g(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),b(e,t,{leading:r,maxWait:t,trailing:a})}}).call(this,n(37))},89:function(e,t){e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],f=t[c];if(!1===(r=n?n.call(i,u,f,c):void 0)||void 0===r&&u!==f)return!1}return!0}}}]);
//# sourceMappingURL=6.dfae2348.chunk.js.map