(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7385],{83308:function(n,t,r){"use strict";function e(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,e)}return r}function i(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,i;e=n,i=r[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}r.d(t,{u:function(){return u}});var o=(n,t,r)=>{for(var e of Object.keys(n)){var i;if(n[e]!==(null!==(i=t[e])&&void 0!==i?i:r[e]))return!1}return!0},u=n=>t=>{var r=n.defaultClassName,e=i(i({},n.defaultVariants),t);for(var u in e){var c,a=null!==(c=e[u])&&void 0!==c?c:n.defaultVariants[u];if(null!=a){var l=a;"boolean"==typeof l&&(l=!0===l?"true":"false");var s=n.variantClassNames[u][l];s&&(r+=" "+s)}}for(var[f,d]of n.compoundVariants)o(f,e,n.defaultVariants)&&(r+=" "+d);return r}},42765:function(n,t,r){"use strict";function e(n){if(null===n||!0===n||!1===n)return NaN;var t=Number(n);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,{Z:function(){return e}})},63761:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(42765),i=r(66700),o=r(19785);function u(n,t){(0,o.Z)(2,arguments);var r=(0,i.Z)(n),u=(0,e.Z)(t);return isNaN(u)?new Date(NaN):(u&&r.setDate(r.getDate()+u),r)}},17381:function(n,t,r){"use strict";r.d(t,{Z:function(){return o}});var e=r(66700),i=r(19785);function o(n){return(0,i.Z)(1,arguments),Math.floor(function(n){return(0,i.Z)(1,arguments),(0,e.Z)(n).getTime()}(n)/1e3)}},96913:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(63761),i=r(19785),o=r(42765);function u(n,t){(0,i.Z)(2,arguments);var r=(0,o.Z)(t);return(0,e.Z)(n,-r)}},55634:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidity",function(){return r(52474)}])},52474:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var e=r(52322),i=r(64332),o=r(87394),u=r(92228),c=r(50930),a=r(2784),l=r(3411),s=r(40125),f=r(32301),d=r(33080),v=r(68303),Z=r(28506),p=r(1551),h=r(39097),b=r.n(h),j=r(517),x=r(73921),m=r(96521),y=r(58900),g=r(37346),O=r(74463),w=r(38497),k=r(17790),N=r(46710),D=r(98159);function P(){var n=(0,u.Z)(["\n  background-color: ",";\n"]);return P=function(){return n},n}var _=(0,l.ZP)(s.Z).withConfig({componentId:"sc-7f311bde-0"})(P(),function(n){return n.theme.colors.dropdownDeep});function q(){var n=(0,j.mA)().address,t=(0,x.$G)().t,r=(0,w.B3)(),i=(0,a.useMemo)(function(){return r.map(function(n){return{liquidityToken:(0,w.Ce)(n),tokens:n}})},[r]),u=(0,a.useMemo)(function(){return i.map(function(n){return n.liquidityToken})},[i]),l=(0,o.Z)((0,g.v2)(null!=n?n:void 0,u),2),s=l[0],h=l[1],P=(0,m.f8)(n),q=(0,a.useMemo)(function(){return i.filter(function(n){var t;return null===(t=s[n.liquidityToken.address])||void 0===t?void 0:t.greaterThan("0")})},[i,s]),T=(0,O.z$)(q.map(function(n){return n.tokens})),C=h||(null==T?void 0:T.length)<q.length||(null==T?void 0:T.length)&&T.every(function(n){return(0,o.Z)(n,1)[0]===O._G.LOADING}),E=null==T?void 0:T.filter(function(n){var t=(0,o.Z)(n,2),r=t[0],e=t[1];return r===O._G.EXISTS&&Boolean(e)}).map(function(n){return(0,o.Z)(n,2)[1]});return(0,e.jsx)(D.Z,{children:(0,e.jsxs)(N.j,{children:[(0,e.jsx)(N.t,{title:t("Your Liquidity"),subtitle:t("Remove liquidity to receive tokens back")}),(0,e.jsxs)(_,{children:[function(){if(!n)return(0,e.jsx)(f.Z,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")});if(C)return(0,e.jsx)(f.Z,{color:"textSubtle",textAlign:"center",children:(0,e.jsx)(k.Z,{children:t("Loading")})});var r=[];return((null==E?void 0:E.length)>0&&(r=E.map(function(n,t){return(0,e.jsx)(y.ZP,{pair:n,mb:Boolean(null==P?void 0:P.length)||t<E.length-1?"16px":0},n.liquidityToken.address)})),(null==P?void 0:P.length)>0&&(r=(0,c.Z)(r).concat((0,c.Z)(null==P?void 0:P.map(function(n,t){return(0,e.jsx)(y.uK,{pair:n,mb:t<P.length-1?"16px":0},"stable-".concat(n.liquidityToken.address))})))),(null==r?void 0:r.length)>0)?r:(0,e.jsx)(f.Z,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")})}(),n&&!C&&(0,e.jsxs)(d.Z,{flexDirection:"column",alignItems:"center",mt:"24px",children:[(0,e.jsx)(f.Z,{color:"textSubtle",mb:"8px",children:t("Don't see a pair you joined?")}),(0,e.jsx)(b(),{href:"/find",passHref:!0,children:(0,e.jsx)(v.Z,{id:"import-pool-link",variant:"secondary",scale:"sm",as:"a",children:t("Find other LP tokens")})})]})]}),(0,e.jsx)(Z.Z,{style:{textAlign:"center"},children:(0,e.jsx)(b(),{href:"/add",passHref:!0,children:(0,e.jsx)(v.Z,{id:"join-pool-button",width:"100%",startIcon:(0,e.jsx)(p.Z,{color:"invertedContrast"}),children:t("Add Liquidity")})})})]})})}var T=function(){return(0,e.jsx)(q,{})};T.chains=i.vo;var C=T},8244:function(n,t,r){"use strict";r.d(t,{T:function(){return i}});var e=r(27867),i=function(n,t,r){var i=(0,e.D)(n,t),o=(0,e.D)(t,r),u=(0,e.Y)(i,o);return[i,u]}},14966:function(n,t,r){"use strict";r.d(t,{z:function(){return c}});var e=r(17381),i=r(93035),o=r(96913),u=r(65034),c=function(){var n=1e3*(0,e.Z)(new Date);return[(0,e.Z)((0,i.Z)((0,o.Z)(n,1))),(0,e.Z)((0,i.Z)((0,o.Z)(n,2))),(0,e.Z)((0,i.Z)((0,u.Z)(n,1))),(0,e.Z)((0,i.Z)((0,u.Z)(n,2)))]}},27867:function(n,t,r){"use strict";r.d(t,{D:function(){return e},Y:function(){return i}});var e=function(n,t){return n&&t?n-t:n||0},i=function(n,t){return n&&t?(n-t)/t*100:0}},28506:function(n,t,r){"use strict";var e=r(92228),i=r(3411),o=r(78545);function u(){var n=(0,e.Z)(["\n  border-top: 1px solid ",";\n  ","\n"]);return u=function(){return n},n}var c=i.ZP.div.withConfig({componentId:"sc-5ed8a823-0"})(u(),function(n){return n.theme.colors.cardBorder},o.Dh);c.defaultProps={p:"24px"},t.Z=c}},function(n){n.O(0,[1246,9179,9831,4281,4618,1708,5486,6453,9774,2888,179],function(){return n(n.s=55634)}),_N_E=n.O()}]);