(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(t,e,n){"use strict";var i=n(42);n.n(i).a},109:function(t,e,n){"use strict";var i=n(43);n.n(i).a},110:function(t,e,n){"use strict";var i=n(44);n.n(i).a},111:function(t,e,n){"use strict";var i=n(45);n.n(i).a},115:function(t,e,n){"use strict";var i=n(46);n.n(i).a},116:function(t,e,n){"use strict";var i=n(47);n.n(i).a},117:function(t,e,n){"use strict";var i=n(48);n.n(i).a},118:function(t,e,n){"use strict";var i=n(49);n.n(i).a},119:function(t,e,n){"use strict";var i=n(50);n.n(i).a},120:function(t,e,n){"use strict";var i=n(51);n.n(i).a},121:function(t,e,n){"use strict";var i=n(52);n.n(i).a},122:function(t,e,n){"use strict";var i=n(53);n.n(i).a},123:function(t,e,n){"use strict";var i=n(54);n.n(i).a},157:function(t,e,n){"use strict";n.r(e);n(73),n(77),n(63),n(80);var i=n(0),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._m(0),t._v(" "),n("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("li",[n("router-link",{attrs:{to:"/privacy-policy/"}},[t._v("Privacy Policy")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/terms-of-use/"}},[t._v("Terms of Use")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/cookie-policy/"}},[t._v("Cookie Policy")])],1),t._v(" "),t._m(4)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[t._v("\n    Artwork by "),n("a",{attrs:{href:"https://impermanence.co",target:"_blank"}},[t._v("Lili Feyerabend")]),t._v(" feat. "),n("a",{attrs:{href:"https://ilankatin.com",target:"_blank"}},[t._v("ilan katin")]),t._v(", "),n("a",{attrs:{href:"https://linktr.ee/mattiacprodukt",target:"_blank"}},[t._v("Mattia Cuttini")]),t._v(", "),n("a",{attrs:{href:"https://oficinastk.github.io",target:"_blank"}},[t._v("Oficinas TK")]),t._v(", "),n("a",{attrs:{href:"https://xcopyart.com",target:"_blank"}},[t._v("XCOPY")]),t._v(".\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://github.com/smilofoundation",target:"_blank"}},[this._v("GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://twitter.com/smiloplatform",target:"_blank"}},[this._v("Twitter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://blog.smilo.foundation/"}},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"mailto:info@smilo.foundation"}},[this._v("Contact")])])}],!1,null,"ca550d00",null).exports,r=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/smilofoundation/smilo-foundation-website",target:"_blank",title:"Fork This Page (Github)"}},[e("img",{staticClass:"hide-dark",attrs:{alt:"Github",src:n(84)}}),this._v(" "),e("img",{staticClass:"show-dark",attrs:{alt:"Github",src:n(85)}})])}],a=(n(26),n(66),n(87),n(33),n(98),n(70),n(104),n(71),/#.*$/),o=/\.(md|html)$/,l=/\/$/,u=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(a,"").replace(o,"")}function h(t){return u.test(t)}function p(t){if(h(t))return t;var e=t.match(a),n=e?e[0]:"",i=c(t);return l.test(i)?t:i+".html"+n}function d(t,e){var n=t.hash,i=function(t){var e=t.match(a);if(e)return e[0]}(e);return(!i||n===i)&&c(t.path)===c(e)}function f(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=c(e),s=0;s<t.length;s++)if(c(t[s].path)===i)return Object.assign({},t[s],{type:"page",path:p(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function g(t,e,n,i){var s=n.pages,r=n.themeConfig,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t.path,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return c?c.map((function(t){return function t(e,n,i,s){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var r=e.children||[];return{type:"group",title:e.title,children:r.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable}}(t,s,u)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var _=n(41),b=(n(72),n(27),n(106),{props:{item:{required:!0}},computed:{link:function(){return p(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:h,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}}),k=(n(108),Object(i.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports),w={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},x=(n(109),Object(i.a)(w,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),C={components:{NavLink:k,DropdownTransition:x},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},y=(n(110),Object(i.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports),$={components:{DropdownLink:y},computed:{languages:function(){var t=this,e=this.$site.locales,n=this.$page.path,i=this.$router.options.routes;return{text:"Languages",items:Object.keys(e).map((function(s){var r,a=e[s],o=a.label;return a.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===r}))||(r=s)),{text:o,link:r}}))}}}},S=Object(i.a)($,(function(){var t=this.$createElement;return(this._self._c||t)("DropdownLink",{attrs:{item:this.languages}})}),[],!1,null,null,null).exports,L={components:{NavLink:k,DropdownLink:y,LanguageDropdown:S},props:["isSidebar"],computed:{nav:function(){var t=Object(_.translate)("path",this.$lang);return this.$site.locales[t].nav||[]},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(v(t),{items:(t.items||[]).map(v)})}))}},methods:{isActive:d}},M=(n(111),Object(i.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length?e("nav",{staticClass:"nav-links"},[e("ul",{staticClass:"nav-ul"},[this._l(this.userLinks,(function(t){return e("li",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),this._v(" "),this.isSidebar?e("LanguageDropdown",{staticClass:"nav-item"}):this._e()],2)]):this._e()}),[],!1,null,null,null).exports),O=(n(112),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,s=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],o=0;o<n.length&&!(a.length>=i);o++){var l=n[o];if(this.getPageLocalePath(l)===s)if(r(l))a.push(l);else if(l.headers)for(var u=0;u<l.headers.length&&!(a.length>=i);u++){var c=l.headers[u];r(c)&&a.push(Object.assign({},l,{path:l.path+"#"+c.slug,header:c}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),I=(n(115),Object(i.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),j=(n(116),{components:{NavLinks:M,SearchBox:I,SidebarButton:Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button"},[n("svg",{staticClass:"icon",attrs:{width:"25px",height:"20px",viewBox:"0 0 25 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("title",[t._v("Hamburger menu button")]),t._v(" "),n("g",{attrs:{transform:"translate(-22.000000, -2.000000)"}},[n("g",{attrs:{transform:"translate(22.000000, 2.545974)"}},[n("path",{attrs:{d:"M24.7714844,0.5 L0,0.5"}}),t._v(" "),n("path",{attrs:{d:"M24.7714844,9.72701303 L0,9.72701303"}}),t._v(" "),n("path",{attrs:{d:"M24.7714844,18.9540261 L0,18.9540261"}})])])]),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()])],1)}),[],!1,null,null,null).exports,LanguageDropdown:S}}),E=(n(117),Object(i.a)(j,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header-right flex"},[i("div",{staticClass:"flex"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"header-logo sm-hide",attrs:{src:n(81),alt:"Smilo Logo"}})]),t._v(" "),i("NavLinks",{staticClass:"sm-hide"})],1),t._v(" "),i("div",{staticClass:"menu inline flex flex-center"},[!1!==t.$site.themeConfig.search?i("SearchBox"):t._e(),t._v(" "),t._m(0),t._v(" "),i("span",{staticClass:"pointer view-mode",on:{click:function(e){return t.$emit("toggle-mode")}}},[i("img",{staticClass:"hide-dark",attrs:{alt:"Switch to Dark Mode",src:n(82)}}),t._v(" "),i("img",{staticClass:"show-dark",attrs:{alt:"Switch to Light Mode",src:n(83)}})]),t._v(" "),i("LanguageDropdown",{staticClass:"sm-hide"})],1)])}),r,!1,null,"6f1c53dc",null).exports);var D={data:function(){return{playing:!0,words:["Smilo","以太坊","イーサリアム","Etérium","이더리움","Αιθέριο","Eterijum","إثيريوم","อีเธอเรียม","Эфириум","इथीरियम","אתריום","Ξ"]}},props:["dark"],computed:{videoSrc:function(){return this.dark?"https://res.cloudinary.com/dtqk9d1xc/video/upload/v1565083119/Comp_1_3_yikcia.mp4":"https://ucarecdn.com/b33f5c86-2d0b-4063-99e1-0acfc6d15a00/ethwhiteoptimized2.mp4"}},mounted:function(){var t=this;this.initializeMorph();var e=this.$refs.vid.play();void 0!==e&&e.then((function(e){t.playing=!0})).catch((function(e){t.playing=!1})),this.$refs.vid.addEventListener("play",(function(){t.playing=!0}));var n=setInterval((function(){t.$refs.vid.paused||(t.playing=!0,clearInterval(n))}),500)},methods:{playVid:function(){this.playing=!0,this.$refs.vid.play()},initializeMorph:function(){var t=this,e=0;setInterval((function(){var n=t.$refs.morph;!function(t,e,n){var i=["a","b","c","d","x","y","z","0","1","2","3","4","5","6","7","{","}","%","$","?","!"],s=15,r=e.split(""),a=n.split(""),o=r.length,l=a.length,u=new Date,c=u.getTime(),h=0,p=0,d=105/Math.max(o,l);!function e(){u=new Date,p+=u.getTime()-c;for(var n=h;n<Math.max(o,l);n++){var f=Math.floor(Math.random()*(i.length-1));r[n]=i[f]}if(p>=d){h+=Math.floor(p/d);for(var g=0;g<h;g++)r[g]=a[g]||null;p=0}t.textContent=r.join(""),c=u.getTime(),h<Math.max(o,l)&&setTimeout((function(){window.requestAnimationFrame(e)}),1e3/s)}()}(n,n.textContent,t.words[e]),e<t.words.length-1?e++:e=0}),3e3)}}},T=(n(118),Object(i.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero relative content-block center"},[n("video",{ref:"vid",staticClass:"mx-auto inline-block",attrs:{id:"hero-video",alt:"smilo.foundation - Light",width:"380",height:"380",src:t.videoSrc,playsinline:"",autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),t._v(" "),t.playing?t._e():n("svg",{attrs:{id:"play-button",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60 60","xml:space":"preserve"},on:{click:t.playVid}},[n("g",[n("path",{attrs:{d:"M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30\n          c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15\n          C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"}}),t._v(" "),n("path",{attrs:{d:"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n          S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"}})])]),t._v(" "),n("div",{ref:"morph",attrs:{id:"morph"}},[t._v("Ξ")])])}),[],!1,null,"ef7634fc",null).exports);function P(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function G(t,e,n,i,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var a=d(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[P(t,n+"#"+e.slug,e.title,a),G(t,e.children,n,i,s,r+1)])})))}var N={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,s=n.$site,r=n.$route,o=e.props.item,l=d(r,o.path),u="auto"===o.type?l||o.children.some((function(t){return d(r,o.basePath+"#"+t.slug)})):l,c=P(t,o.path,o.title||o.path,u),h=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:s.themeConfig.sidebarDepth,p=null==h?1:h,f=!!s.themeConfig.displayAllHeaders;return"auto"===o.type?[c,G(t,o.children,o.basePath,r,p)]:(u||f)&&o.headers&&!a.test(o.path)?[c,G(t,m(o.headers),o.path,r,p)]:c}},A=(n(119),Object(i.a)(N,void 0,void 0,!1,null,null,null).exports),H={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:A,DropdownTransition:x}};n(120);var q={components:{SidebarGroup:Object(i.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports,SidebarLink:A,NavLinks:M},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex(),this.$emit("close-sidebar")}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return d(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return d(this.$route,t.path)}}},U=(n(121),{data:function(){return{isSidebarOpen:!1,darkMode:!1}},components:{Footer:s,Header:E,Hero:T,Sidebar:Object(i.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks",{attrs:{isSidebar:!0}}),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports},beforeMount:function(){localStorage&&null!==localStorage.getItem("dark-mode")&&(this.darkMode="true"===localStorage.getItem("dark-mode"))},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),localStorage&&null===localStorage.getItem("dark-mode")&&(this.darkMode=window.matchMedia("(prefers-color-scheme: dark)").matches),window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var n=e.matches;localStorage&&null===localStorage.getItem("dark-mode")&&(t.darkMode=n)}))},computed:{isLanding:function(){return this.$page.frontmatter&&"home"===this.$page.frontmatter.layout},isRelaunch:function(){return"/relaunch.html"===this.$page.path},posts:function(){var t=this;return this.$site.pages.filter((function(e){return e.path.endsWith(".html")&&e.path.startsWith(t.$page.path)}))},showSidebar:function(){return this.$page.frontmatter.sidebar},sidebarItems:function(){return g(this.$page,this.$route,this.$site,this.$localePath)},contentClasses:function(){return{"content-block":this.isLanding,page:!this.isLanding}},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{home:this.isLanding,"has-sidebar":this.showSidebar,"sidebar-open":this.isSidebarOpen,"dark-mode":this.darkMode},t]},linkText:function(){return Object(_.translate)("link-text-artwork",this.$lang)},linkTextMore:function(){return Object(_.translate)("link-text-more",this.$lang)}},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},closeSidebar:function(){this.isSidebarOpen=!1},toggleMode:function(){this.darkMode=!this.darkMode,localStorage&&localStorage.setItem("dark-mode",this.darkMode)}},watch:{$route:function(){this.closeSidebar()}}}),z=(n(122),n(123),Object(i.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageClasses,attrs:{id:"wrapper"}},[n("Header",{class:{home:t.isLanding},on:{"toggle-sidebar":t.toggleSidebar,"toggle-mode":t.toggleMode}}),t._v(" "),t.isLanding?n("Hero",{attrs:{dark:t.darkMode}}):t._e(),t._v(" "),n("main",{class:t.contentClasses},[n("Content")],1),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"close-sidebar":t.closeSidebar}}),t._v(" "),n("Footer",{class:{home:t.isLanding}}),t._v(" "),n("a",{attrs:{href:"https://hackernoon.com/rethinking-the-identity-of-ethereumorg-l718w347l",target:"_blank"}},[t.isRelaunch?t._e():n("button",{staticClass:"announcement"},[t._v("\n      "+t._s(t.linkText)+" "),n("span",{staticClass:"accent"},[t._v(t._s(t.linkTextMore))])])])],1)}),[],!1,null,"586e078c",null));e.default=z.exports},31:function(t,e,n){},41:function(t,e){var n={"en-US":{path:"/",ethereum:"Smilo","link-text-artwork":"Read about the new artwork!","link-text-more":"→  More","page-home":"Smilo","page-beginners":"Beginners","page-use":"Use","page-learn":"Learn","page-developers":"Developers"},"ko-KR":{path:"/ko/",ethereum:"이더리움","link-text-artwork":"새로운 미디어 아트에 대해 읽어보세요!","link-text-more":"→  더 알아보기","page-home":"이더리움이란","page-beginners":"입문자","page-use":"사용법","page-learn":"배우기","page-developers":"개발자 가이드"}};t.exports={translate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",i=n[e][t];return void 0===i&&console.error("No translation for: ".concat(t," on lang: ").concat(e)),i||""}}},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},80:function(t,e,n){"use strict";var i=n(31);n.n(i).a},81:function(t,e,n){t.exports=n.p+"assets/img/ethereum-logo-wireframe.8c2f2894.png"},82:function(t,e,n){t.exports=n.p+"assets/img/icon-sun.f0087fa4.svg"},83:function(t,e,n){t.exports=n.p+"assets/img/icon-moon.0d522939.svg"},84:function(t,e,n){t.exports=n.p+"assets/img/icon-github.3720c649.svg"},85:function(t,e,n){t.exports=n.p+"assets/img/icon-github-white.e05d488b.svg"}}]);