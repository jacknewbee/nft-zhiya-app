"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5486],{17136:function(n,e,t){t.d(e,{Z:function(){return A}});var r=t(87394),i=t(52322),o=t(2784),s=t(33080),c=t(25385),a=t(43763),u=t(32301),l=t(68303),d=t(73921),h=t(45455),f=t.n(h),p=t(3440),x=t.n(p),m=t(46267),g=t(95625),v=t(11930),Z=t(64332),j=t(517),b=t(21175),w=t(92228),y=t(3411),C=t(78002),k=t(36429),I=t(87094),S=t(51147),P=t(80703);function D(){var n=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ",";\n"]);return D=function(){return n},n}function L(){var n=(0,w.Z)(["\n  color: ",";\n"]);return L=function(){return n},n}var M=y.ZP.div.withConfig({componentId:"sc-a1649361-0"})(D(),function(n){return n.theme.colors.primary}),B=y.ZP.div.withConfig({componentId:"sc-a1649361-1"})(L(),function(n){var e=n.pending,t=n.success,r=n.theme;return e?r.colors.primary:t?r.colors.success:r.colors.failure});function T(n){var e,t,r=n.tx,o=n.chainId,s=null==r?void 0:r.summary,c=!(null==r?void 0:r.receipt),a=!c&&r&&((null===(e=r.receipt)||void 0===e?void 0:e.status)===1||void 0===(null===(t=r.receipt)||void 0===t?void 0:t.status));return o?(0,i.jsxs)(M,{pending:c,success:a,children:[(0,i.jsx)(C.Z,{isBscScan:!0,href:(0,S.C)(r.hash,"transaction",o),children:null!=s?s:r.hash}),(0,i.jsx)(B,{pending:c,success:a,children:c?(0,i.jsx)(P.Z,{}):a?(0,i.jsx)(k.Z,{color:"success"}):(0,i.jsx)(I.Z,{color:"failure"})})]}):null}var F=t(95457);function z(n,e){return(0,i.jsx)(s.Z,{flexDirection:"column",children:n.map(function(n){return(0,i.jsx)(T,{tx:n,chainId:e},n.hash+n.addedTime)})})}var A=function(n){var e=n.onDismiss,t=(0,j.mA)().address,s=(0,g.TL)(),h=(0,m.Fn)(),p=(0,d.$G)().t,w=!f()(h),y=(0,o.useCallback)(function(){s((0,v.fY)())},[s]);return(0,i.jsx)(c.ZP,{title:p("Recent Transactions"),headerBackground:"gradientCardHeader",onDismiss:e,children:t?(0,i.jsx)(a.fe,{children:w?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b.BA,{mb:"1rem",style:{justifyContent:"space-between"},children:[(0,i.jsx)(u.Z,{children:p("Recent Transactions")}),(0,i.jsx)(l.Z,{variant:"tertiary",scale:"xs",onClick:y,children:p("clear all")})]}),Object.entries(h).map(function(n){var e,t,o,s,c=(0,r.Z)(n,2),a=c[0],l=c[1],d=Number(a),h=x()(Object.values(l),function(n){return Boolean(n.receipt)}),f=null!==(t=h.true)&&void 0!==t?t:[],p=null!==(o=h.false)&&void 0!==o?o:[];return(0,i.jsxs)("div",{children:[(0,i.jsx)(u.Z,{fontSize:"12px",color:"textSubtle",mb:"4px",children:null!==(s=null===(e=Z.p5.find(function(n){return n.id===d}))||void 0===e?void 0:e.name)&&void 0!==s?s:"Unknown network"}),z(p,d),z(f,d)]},"transactions#".concat(d))})]}):(0,i.jsx)(u.Z,{children:p("No recent transactions")})}):(0,i.jsx)(F.Z,{})})}},46710:function(n,e,t){t.d(e,{j:function(){return D},t:function(){return k}});var r=t(87394),i=t(92228),o=t(52322),s=t(3411),c=t(33080),a=t(79221),u=t(78861),l=t(87016),d=t(18312),h=t(99293),f=t(32301),p=t(38497),x=t(54793),m=t(39097),g=t.n(m),v=t(61736),Z=t(16727),j=t(17136),b=function(){var n=(0,r.Z)((0,v.Z)((0,o.jsx)(j.Z,{})),1)[0];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{scale:"sm",variant:"text",onClick:n,children:(0,o.jsx)(Z.Z,{color:"textSubtle",width:"24px"})})})},w=t(44239);function y(){var n=(0,i.Z)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ",";\n"]);return y=function(){return n},n}var C=(0,s.ZP)(c.Z).withConfig({componentId:"sc-29d69fc6-0"})(y(),function(n){return n.theme.colors.cardBorder}),k=function(n){var e=n.title,t=n.subtitle,i=n.helper,s=n.backTo,m=n.noConfig,v=(0,r.Z)((0,p.DG)(),1)[0];return(0,o.jsx)(C,{children:(0,o.jsxs)(c.Z,{alignItems:"center",width:"100%",style:{gap:"16px"},children:[s&&("string"==typeof s?(0,o.jsx)(g(),{passHref:!0,href:s,children:(0,o.jsx)(a.Z,{as:"a",scale:"sm",children:(0,o.jsx)(u.Z,{width:"32px"})})}):(0,o.jsx)(a.Z,{scale:"sm",variant:"text",onClick:s,children:(0,o.jsx)(u.Z,{width:"32px"})})),(0,o.jsxs)(c.Z,{flexDirection:"column",width:"100%",children:[(0,o.jsxs)(c.Z,{mb:"8px",alignItems:"center",justifyContent:"space-between",children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(l.Z,{as:"h2",children:e}),i&&(0,o.jsx)(d.s,{text:i,ml:"4px",placement:"top-start"})]}),!(void 0!==m&&m)&&(0,o.jsxs)(c.Z,{alignItems:"center",children:[(0,o.jsx)(h.Z,{show:v,children:(0,o.jsx)(x.Z,{mode:w.a.SWAP_LIQUIDITY})}),(0,o.jsx)(b,{})]})]}),(0,o.jsx)(c.Z,{alignItems:"center",children:(0,o.jsx)(f.Z,{color:"textSubtle",fontSize:"14px",children:t})})]})]})})},I=t(80751);function S(){var n=(0,i.Z)(["\n  border-radius: 24px;\n  max-width: 436px;\n  width: 100%;\n  z-index: 1;\n"]);return S=function(){return n},n}var P=(0,s.ZP)(I.Z).withConfig({componentId:"sc-e8e91a75-0"})(S());function D(n){var e=n.children;return(0,o.jsx)(P,{children:e})}},92085:function(n,e,t){t.d(e,{Tz:function(){return l},lg:function(){return u}});var r=t(92228),i=t(3411);function o(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return o=function(){return n},n}function s(){var n=(0,r.Z)(["\n  width: 100%;\n  align-items: center;\n"]);return s=function(){return n},n}function c(){var n=(0,r.Z)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n"]);return c=function(){return n},n}var a=i.ZP.div.withConfig({componentId:"sc-91e5cc43-0"})(o()),u=(0,i.ZP)(a).withConfig({componentId:"sc-91e5cc43-1"})(s()),l=i.ZP.div.withConfig({componentId:"sc-91e5cc43-2"})(c(),function(n){var e=n.gap;return"sm"===e&&"8px"||"md"===e&&"12px"||"lg"===e&&"24px"||e},function(n){return n.justify});e.ZP=a},21175:function(n,e,t){t.d(e,{BA:function(){return f},DA:function(){return p},m0:function(){return h}});var r=t(92228),i=t(3411),o=t(5406);function s(){var n=(0,r.Z)(["\n  width: ",";\n  display: flex;\n  align-items: ",";\n  justify-content: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"]);return s=function(){return n},n}function c(){var n=(0,r.Z)(["\n  justify-content: space-between;\n"]);return c=function(){return n},n}function a(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  flex-wrap: wrap;\n  margin: ",";\n  justify-content: ",";\n\n  & > * {\n    margin: "," !important;\n  }\n"]);return u=function(){return n},n}function l(){var n=(0,r.Z)(["\n  width: fit-content;\n  margin: ",";\n\n  & > * {\n    margin: "," !important;\n  }\n"]);return l=function(){return n},n}var d=(0,i.ZP)(o.ZP).withConfig({componentId:"sc-a99b64d2-0"})(s(),function(n){var e=n.width;return null!=e?e:"100%"},function(n){var e=n.align;return null!=e?e:"center"},function(n){var e=n.justify;return null!=e?e:"flex-start"},function(n){var e=n.padding;return null!=e?e:"0"},function(n){return n.border},function(n){return n.borderRadius}),h=(0,i.ZP)(d).withConfig({componentId:"sc-a99b64d2-1"})(c());i.ZP.div.withConfig({componentId:"sc-a99b64d2-2"})(a());var f=(0,i.ZP)(d).withConfig({componentId:"sc-a99b64d2-3"})(u(),function(n){var e=n.gap;return e&&"-".concat(e)},function(n){return n.justify},function(n){return n.gap}),p=(0,i.ZP)(d).withConfig({componentId:"sc-a99b64d2-4"})(l(),function(n){var e=n.gap;return e&&"-".concat(e)},function(n){return n.gap});e.ZP=d},80703:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(70865),i=t(96670),o=t(26297),s=t(92228),c=t(52322),a=t(3411);function u(){var n=(0,s.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return u=function(){return n},n}function l(){var n=(0,s.Z)(["\n  animation: 2s "," linear infinite;\n  height: ",";\n  width: ",";\n  path {\n    stroke: ",";\n  }\n"]);return l=function(){return n},n}var d=(0,a.F4)(u()),h=a.ZP.svg.withConfig({componentId:"sc-fa227f0-0"})(l(),d,function(n){return n.size},function(n){return n.size},function(n){var e=n.stroke,t=n.theme;return null!=e?e:t.colors.primary});function f(n){var e=n.size,t=n.stroke,s=(0,o.Z)(n,["size","stroke"]);return(0,c.jsx)(h,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:void 0===e?"16px":e,stroke:t},s),{children:(0,c.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}},69722:function(n,e,t){t.d(e,{Z:function(){return g}});var r=t(92228),i=t(50930),o=t(52322),s=t(72027),c=t(99708),a=t(30670),u=t(2784),l=t(93506),d=t(3411),h=t(92177),f=t(5966),p=t(75583);function x(){var n=(0,r.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"]);return x=function(){return n},n}var m=(0,d.ZP)(c.Z).withConfig({componentId:"sc-b8d1b41-0"})(x(),function(n){return n.size},function(n){return n.size});function g(n){var e,t=n.currency,r=n.size,c=void 0===r?"24px":r,d=n.style,x=(0,h.ai)(t instanceof l.DT?t.logoURI:void 0),g=(0,u.useMemo)(function(){if(null==t?void 0:t.isNative)return[];if(null==t?void 0:t.isToken){var n=(0,p.Z)(t);return t instanceof l.DT?n?(0,i.Z)(x).concat([n]):(0,i.Z)(x):n?[n]:[]}return[]},[t,x]);return(null==t?void 0:t.isNative)?t.chainId===s.a_.BSC?(0,o.jsx)(a.Z,{width:c,style:d}):(0,o.jsx)(m,{badSrcs:f.X,size:c,srcs:["/images/chains/".concat(t.chainId,".png")],width:c,style:d}):(0,o.jsx)(m,{badSrcs:f.X,size:c,srcs:g,alt:"".concat(null!==(e=null==t?void 0:t.symbol)&&void 0!==e?e:"token"," logo"),style:d})}},5966:function(n,e,t){t.d(e,{X:function(){return r}});var r={}},34208:function(n,e,t){t.d(e,{X:function(){return r.Z},g:function(){return a}});var r=t(69722),i=t(92228),o=t(52322);function s(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: ",";\n"]);return s=function(){return n},n}var c=t(3411).ZP.div.withConfig({componentId:"sc-b339c6de-0"})(s(),function(n){return n.margin&&"4px"});function a(n){var e=n.currency0,t=n.currency1,i=n.size,s=void 0===i?20:i,a=n.margin;return(0,o.jsxs)(c,{margin:void 0!==a&&a,children:[e&&(0,o.jsx)(r.Z,{currency:e,size:"".concat(s.toString(),"px"),style:{marginRight:"4px"}}),t&&(0,o.jsx)(r.Z,{currency:t,size:"".concat(s.toString(),"px")})]})}},70756:function(n,e,t){t.d(e,{Z:function(){return G},h:function(){return _}});var r,i,o,s=t(70865),c=t(96670),a=t(26297),u=t(87394),l=t(92228),d=t(52322),h=t(73921),f=t(72027),p=t(33080),x=t(76476),m=t(25385),g=t(32301),v=t(83095),Z=t(18312),j=t(88596),b=t(91928),w=t(5406),y=t(43809),C=t(28931),k=t(15112),I=t(84252),S=t(2784),P=t(97628),D=t(38497),L=t(66760),M=t(4581),B=t(3411),T=t(68303),F=t(50071),z=function(){var n=(0,h.$G)().t,e=(0,u.Z)((0,D.nF)(),2),t=e[0],r=e[1];return(0,d.jsxs)(p.Z,{flexDirection:"column",children:[(0,d.jsxs)(p.Z,{mb:"12px",alignItems:"center",children:[(0,d.jsx)(g.Z,{children:n("Default Transaction Speed (GWEI)")}),(0,d.jsx)(Z.s,{text:(0,d.jsxs)(p.Z,{flexDirection:"column",children:[(0,d.jsx)(g.Z,{children:n("Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees.")}),(0,d.jsx)(g.Z,{mt:"8px",children:n("Choose “Default” to use the settings from your current blockchain RPC node.")})]}),placement:"top-start",ml:"4px"})]}),(0,d.jsxs)(p.Z,{flexWrap:"wrap",children:[(0,d.jsx)(T.Z,{mt:"4px",mr:"4px",scale:"sm",onClick:function(){r(F.j4.rpcDefault)},variant:t===F.j4.rpcDefault?"primary":"tertiary",children:n("Default")}),(0,d.jsx)(T.Z,{mt:"4px",mr:"4px",scale:"sm",onClick:function(){r(F.j4.default)},variant:t===F.j4.default?"primary":"tertiary",children:n("Standard (%gasPrice%)",{gasPrice:F.DB.default})}),(0,d.jsx)(T.Z,{mt:"4px",mr:"4px",scale:"sm",onClick:function(){r(F.j4.fast)},variant:t===F.j4.fast?"primary":"tertiary",children:n("Fast (%gasPrice%)",{gasPrice:F.DB.fast})}),(0,d.jsx)(T.Z,{mr:"4px",mt:"4px",scale:"sm",onClick:function(){r(F.j4.instant)},variant:t===F.j4.instant?"primary":"tertiary",children:n("Instant (%gasPrice%)",{gasPrice:F.DB.instant})})]})]})},A=t(51147),H=t(64170);(r=i||(i={})).InvalidInput="InvalidInput",r.RiskyLow="RiskyLow",r.RiskyHigh="RiskyHigh",(o||(o={})).InvalidInput="InvalidInput";var N=RegExp("^\\d*(?:\\\\[.])?\\d*$"),R=function(){var n,e,t=(0,u.Z)((0,D.$2)(),2),r=t[0],s=t[1],c=(0,u.Z)((0,D.A6)(),2),a=c[0],l=c[1],f=(0,u.Z)((0,S.useState)(""),2),x=f[0],m=f[1],v=(0,u.Z)((0,S.useState)(""),2),j=v[0],b=v[1],y=(0,h.$G)().t,C=""===x||(r/100).toFixed(2)===Number.parseFloat(x).toFixed(2),k=""===j||(a/60).toString()===j;n=""===x||C?C&&r<50?i.RiskyLow:C&&r>500?i.RiskyHigh:void 0:i.InvalidInput,e=""===j||k?void 0:o.InvalidInput;var I=function(n){if(""===n||N.test((0,A.hr)(n))){m(n);try{var e=Number.parseInt((100*Number.parseFloat(n)).toString());!Number.isNaN(e)&&e<5e3&&s(e)}catch(t){console.error(t)}}},P=function(n){b(n);try{var t=60*Number.parseInt(n);!Number.isNaN(t)&&t>60&&t<259200?l(t):e=o.InvalidInput}catch(r){console.error(r)}};return(0,d.jsxs)(p.Z,{flexDirection:"column",children:[(0,d.jsxs)(p.Z,{flexDirection:"column",mb:"24px",children:[(0,d.jsxs)(p.Z,{mb:"12px",children:[(0,d.jsx)(g.Z,{children:y("Slippage Tolerance")}),(0,d.jsx)(Z.s,{text:y("Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."),placement:"top-start",ml:"4px"})]}),(0,d.jsxs)(p.Z,{flexWrap:"wrap",children:[(0,d.jsx)(T.Z,{mt:"4px",mr:"4px",scale:"sm",onClick:function(){m(""),s(10)},variant:10===r?"primary":"tertiary",children:"0.1%"}),(0,d.jsx)(T.Z,{mt:"4px",mr:"4px",scale:"sm",onClick:function(){m(""),s(50)},variant:50===r?"primary":"tertiary",children:"0.5%"}),(0,d.jsx)(T.Z,{mr:"4px",mt:"4px",scale:"sm",onClick:function(){m(""),s(100)},variant:100===r?"primary":"tertiary",children:"1.0%"}),(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(w.ZP,{width:"76px",mt:"4px",children:(0,d.jsx)(H.Z,{scale:"sm",inputMode:"decimal",pattern:"^[0-9]*[.,]?[0-9]{0,2}$",placeholder:(r/100).toFixed(2),value:x,onBlur:function(){I((r/100).toFixed(2))},onChange:function(n){n.currentTarget.validity.valid&&I(n.target.value.replace(/,/g,"."))},isWarning:!C,isSuccess:![10,50,100].includes(r)})}),(0,d.jsx)(g.Z,{color:"primary",bold:!0,ml:"2px",children:"%"})]})]}),!!n&&(0,d.jsx)(g.Z,{fontSize:"14px",color:n===i.InvalidInput?"red":"#F3841E",mt:"8px",children:y(n===i.InvalidInput?"Enter a valid slippage percentage":n===i.RiskyLow?"Your transaction may fail":"Your transaction may be frontrun")})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:y("Tx deadline (mins)")}),(0,d.jsx)(Z.s,{text:y("Your transaction will revert if it is left confirming for longer than this time."),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(p.Z,{children:(0,d.jsx)(w.ZP,{width:"52px",mt:"4px",children:(0,d.jsx)(H.Z,{scale:"sm",inputMode:"numeric",pattern:"^[0-9]+$",isWarning:!!e,onBlur:function(){P((a/60).toString())},placeholder:(a/60).toString(),value:j,onChange:function(n){n.currentTarget.validity.valid&&P(n.target.value)}})})})]})]})},W=t(44239);function O(){var n=(0,l.Z)(["\n  flex-direction: column;\n  height: auto;\n  "," {\n    max-height: 90vh;\n  }\n  "," {\n    max-height: none;\n  }\n"]);return O=function(){return n},n}var U=(0,B.ZP)(p.Z).withConfig({componentId:"sc-79a8aa9b-0"})(O(),function(n){return n.theme.mediaQueries.xs},function(n){return n.theme.mediaQueries.md}),_=function(n){return function(e){var t=e.onDismiss,r=e.customOnDismiss,i=e.mode,o=(0,a.Z)(e,["onDismiss","customOnDismiss","mode"]),u=(0,S.useCallback)(function(){null==t||t(),r&&r()},[r,t]);return(0,d.jsx)(n,(0,c.Z)((0,s.Z)({},o),{mode:i,onDismiss:u}))}},G=function(n){var e=n.onDismiss,t=n.mode,r=(0,u.Z)((0,S.useState)(!1),2),i=r[0],o=r[1],s=(0,u.Z)((0,D.wX)(),2),c=s[0],a=s[1],l=(0,u.Z)((0,D.DG)(),2),B=l[0],T=l[1],F=(0,u.Z)((0,D.RO)(),2),A=F[0],H=F[1],N=(0,u.Z)((0,D.TO)(),2),O=N[0],_=N[1],G=(0,u.Z)((0,D.$f)(),2),$=G[0],E=G[1],Y=(0,u.Z)((0,D.YF)(),2),Q=Y[0],q=Y[1],K=(0,u.Z)((0,D.Pn)(),2),V=K[0],X=K[1],J=(0,P._)().onChangeRecipient,nn=(0,k.g)().chainId,ne=(0,u.Z)((0,M.y)(),2),nt=ne[0],nr=ne[1],ni=(0,u.Z)((0,L.q)(),2),no=ni[0],ns=ni[1],nc=(0,h.$G)().t,na=(0,I.ZP)(),nu=na.isDark,nl=na.setTheme;return i?(0,d.jsx)(x.V,{setShowConfirmExpertModal:o,onDismiss:e,toggleExpertMode:T,setShowExpertModeAcknowledgement:a}):(0,d.jsx)(m.ZP,{title:nc("Settings"),headerBackground:"gradientCardHeader",onDismiss:e,children:(0,d.jsxs)(U,{children:[t===W.a.GLOBAL&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(p.Z,{pb:"24px",flexDirection:"column",children:[(0,d.jsx)(g.Z,{bold:!0,textTransform:"uppercase",fontSize:"18px",color:"secondary",mb:"24px",children:nc("Global")}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",mb:"24px",children:[(0,d.jsx)(g.Z,{children:nc("Dark mode")}),(0,d.jsx)(v.Z,{isDark:nu,toggleTheme:function(){return nl(nu?"light":"dark")}})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Subgraph Health Indicator")}),(0,d.jsx)(Z.s,{text:nc("Turn on subgraph health indicator all the time. Default is to show the indicator only when the network is delayed"),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{id:"toggle-subgraph-health-button",checked:Q,scale:"md",onChange:function(){q(!Q)}})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Show username")}),(0,d.jsx)(Z.s,{text:nc("Shows username of wallet instead of bunnies"),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{id:"toggle-username-visibility",checked:V,scale:"md",onChange:function(){X(!V)}})]}),nn===f.a_.BSC&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Token Risk Scanning")}),(0,d.jsx)(Z.s,{text:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{children:nc("Automatic risk scanning for the selected token")}),(0,d.jsx)(g.Z,{as:"span",children:nc("Risk scan results are provided by a third party")}),(0,d.jsx)(b.Z,{style:{display:"inline"},ml:"4px",external:!0,href:"https://www.avengerdao.org",children:"AvengerDAO"}),(0,d.jsx)(g.Z,{my:"8px",children:nc("It is a tool for indicative purposes only to allow users to check the reference risk level of a BNB Chain Smart Contract. Please do your own research - interactions with any BNB Chain Smart Contract is at your own risk.")})]}),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{id:"toggle-username-visibility",checked:no,scale:"md",onChange:function(){ns(!no)}})]}),(0,d.jsx)(z,{})]})]})}),t===W.a.SWAP_LIQUIDITY&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(p.Z,{pt:"3px",flexDirection:"column",children:[(0,d.jsx)(g.Z,{bold:!0,textTransform:"uppercase",fontSize:"18px",color:"secondary",mb:"24px",children:nc("Swaps & Liquidity")}),(0,d.jsx)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:nn===f.a_.BSC&&(0,d.jsx)(z,{})}),(0,d.jsx)(R,{})]}),C.K.includes(nn)&&(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Zap (Beta)")}),(0,d.jsx)(Z.s,{text:(0,d.jsxs)(w.ZP,{children:[(0,d.jsx)(g.Z,{children:nc("Zap enables simple liquidity provision. Add liquidity with one token and one click, without manual swapping or token balancing.")}),(0,d.jsx)(g.Z,{children:nc("If you experience any issue when adding or removing liquidity, please disable Zap and retry.")})]}),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{checked:$,scale:"md",onChange:function(){E(!$)}})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Expert Mode")}),(0,d.jsx)(Z.s,{text:nc("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{id:"toggle-expert-mode-button",scale:"md",checked:B,onChange:function(){B||!c?(J(null),T()):o(!0)}})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Disable Multihops")}),(0,d.jsx)(Z.s,{text:nc("Restricts swaps to direct pairs only."),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{id:"toggle-disable-multihop-button",checked:A,scale:"md",onChange:function(){H(!A)}})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Flippy sounds")}),(0,d.jsx)(Z.s,{text:nc("Fun sounds to make a truly immersive pancake-flipping trading experience"),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(y.Z,{checked:O,onChange:_,scale:"md"})]}),(0,d.jsxs)(p.Z,{justifyContent:"space-between",alignItems:"center",mb:"24px",children:[(0,d.jsxs)(p.Z,{alignItems:"center",children:[(0,d.jsx)(g.Z,{children:nc("Use StableSwap by default")}),(0,d.jsx)(Z.s,{text:(0,d.jsx)(p.Z,{children:(0,d.jsx)(g.Z,{mr:"5px",children:nc("Stableswap will enable users to save fees on trades. Output cannot be edited for routes that include StableSwap")})}),placement:"top-start",ml:"4px"})]}),(0,d.jsx)(j.Z,{id:"toggle-disable-smartRouter-button",checked:nt,onChange:function(n){return nr(n.target.checked)},scale:"md"})]})]})]})})}},54793:function(n,e,t){var r=t(87394),i=t(52322),o=t(61736),s=t(33080),c=t(79221),a=t(85),u=t(70756);e.Z=function(n){var e=n.color,t=n.mr,l=n.mode,d=(0,r.Z)((0,o.Z)((0,i.jsx)(u.Z,{mode:l})),1)[0];return(0,i.jsx)(s.Z,{children:(0,i.jsx)(c.Z,{onClick:d,variant:"text",scale:"sm",mr:void 0===t?"8px":t,id:"open-settings-dialog-button-".concat(l),children:(0,i.jsx)(a.Z,{height:24,width:24,color:e||"textSubtle"})})})}},44239:function(n,e,t){var r,i;t.d(e,{a:function(){return r}}),(i=r||(r={})).GLOBAL="GLOBAL",i.SWAP_LIQUIDITY="SWAP_LIQUIDITY"},97628:function(n,e,t){t.d(e,{_:function(){return s}});var r=t(2784),i=t(67152),o=t(95625);function s(){var n=(0,o.TL)();return{onSwitchTokens:(0,r.useCallback)(function(){n((0,i.KS)())},[n]),onCurrencySelection:(0,r.useCallback)(function(e,t){n((0,i.j)({field:e,currencyId:(null==t?void 0:t.isToken)?t.address:(null==t?void 0:t.isNative)?t.symbol:""}))},[n]),onUserInput:(0,r.useCallback)(function(e,t){n((0,i.LC)({field:e,typedValue:t}))},[n]),onChangeRecipient:(0,r.useCallback)(function(e){n((0,i.He)({recipient:e}))},[n])}}},66760:function(n,e,t){t.d(e,{q:function(){return o}});var r=t(50154),i=(0,t(83505).ZP)("pcs:user-token-risk",!0);function o(){return(0,r.KO)(i)}},4581:function(n,e,t){t.d(e,{y:function(){return o}});var r=t(50154),i=(0,t(83505).ZP)("pcs:useStableSwap",!0);function o(){return(0,r.KO)(i)}},37346:function(n,e,t){t.d(e,{K5:function(){return g},Z:function(){return x},_h:function(){return v},mM:function(){return m},uD:function(){return Z},v2:function(){return p}});var r=t(72027),i=t(2784),o=t(517),s=t(48070),c=t(20173),a=t(56521),u=t(51147),l=t(34498),d=t.n(l),h=t(19358),f=t(92330);function p(n,e){var t,o=(0,i.useMemo)(function(){return null!==(t=null==e?void 0:e.filter(function(n){return!1!==(0,u.UJ)(null==n?void 0:n.address)}))&&void 0!==t?t:[]},[e]),c=(0,i.useMemo)(function(){return o.map(function(n){return n.address})},[o]),a=(0,f._Y)(c,s.ZP,"balanceOf",(0,i.useMemo)(function(){return[n]},[n])),l=(0,i.useMemo)(function(){return a.some(function(n){return n.loading})},[a]);return[(0,i.useMemo)(function(){return n&&o.length>0?o.reduce(function(n,e,t){var i,o,s=null==a?void 0:null===(i=a[t])||void 0===i?void 0:null===(o=i.result)||void 0===o?void 0:o[0],c=s?r.QA.BigInt(s.toString()):void 0;return c&&(n[e.address]=r.ih.fromRawAmount(e,c)),n},{}):{}},[n,o,a]),l]}function x(n,e){return p(n,e)[0]}function m(n,e){var t=x(n,(0,i.useMemo)(function(){return[e]},[e]));if(e)return t[e.address]}function g(n,e){var t,o,s,c,l,p,m,g,v=x(n,(0,i.useMemo)(function(){return null!==(t=null==e?void 0:e.filter(function(n){return null==n?void 0:n.isToken}))&&void 0!==t?t:[]},[e])),Z=(0,i.useMemo)(function(){return null!==(o=null==e?void 0:e.some(function(n){return null==n?void 0:n.isNative}))&&void 0!==o&&o},[e]),j=(c=(0,i.useMemo)(function(){return Z?[n]:[]},[Z,n]),l=(0,h.Z)(),p=(0,a.gq)(),m=(0,i.useMemo)(function(){return c?d()(c.map(u.UJ).filter(function(n){return!1!==n})):[]},[c]),g=(0,f.es)(p,"getEthBalance",(0,i.useMemo)(function(){return m.map(function(n){return[n]})},[m])),(0,i.useMemo)(function(){return m.reduce(function(n,e,t){var i,o,s=null==g?void 0:null===(i=g[t])||void 0===i?void 0:null===(o=i.result)||void 0===o?void 0:o[0];return s&&(n[e]=r.ih.fromRawAmount(l,r.QA.BigInt(s.toString()))),n},{})},[m,g,l]));return(0,i.useMemo)(function(){return null!==(s=null==e?void 0:e.map(function(e){if(n&&e){if(null==e?void 0:e.isToken)return v[e.address];if(null==e?void 0:e.isNative)return j[n]}}))&&void 0!==s?s:[]},[n,e,j,v])}function v(n,e){return g(n,(0,i.useMemo)(function(){return[e]},[e]))[0]}function Z(){var n=(0,o.mA)().address,e=(0,c.e_)(),t=x(null!=n?n:void 0,(0,i.useMemo)(function(){return Object.values(null!=e?e:{})},[e]));return null!=t?t:{}}},64184:function(n,e,t){function r(n){var e;if(null==n?void 0:n.isNative)return null===(e=n.symbol)||void 0===e?void 0:e.toUpperCase();if(null==n?void 0:n.isToken)return n.address;throw Error("invalid currency")}t.d(e,{H:function(){return r}}),e.Z=r},98159:function(n,e,t){var r=t(70865),i=t(96670),o=t(26297),s=t(52322),c=t(73921),a=t(54618),u=t(72027),l=t(15112),d=t(57535);e.Z=function(n){var e=n.children,t=n.removePadding,h=n.hideFooterOnDesktop,f=n.noMinHeight,p=n.helpUrl,x=void 0===p?d.B4:p,m=(0,o.Z)(n,["children","removePadding","hideFooterOnDesktop","noMinHeight","helpUrl"]),g=(0,c.$G)().t,v=(0,l.g)().chainId===u.a_.BSC,Z=v?g("Bridge assets to BNB Chain"):"";return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.H.Page,(0,i.Z)((0,r.Z)({removePadding:void 0!==t&&t,noMinHeight:void 0!==f&&f,hideFooterOnDesktop:void 0!==h&&h,helpUrl:x,externalText:Z,externalLinkUrl:v?"https://bridge.pancakeswap.finance/":""},m),{children:e}))})}},12628:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(92228),i=t(3411),o={SM:"sm",MD:"md"};function s(){var n=(0,r.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"]);return s=function(){return n},n}var c=function(n){switch(n.scale){case o.SM:return"24px";case o.MD:default:return"32px"}},a=i.ZP.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-11bd21f1-0"})(s(),c,c,function(n){return n.theme.colors.input},function(n){return n.theme.shadows.inset},function(n){return n.theme.shadows.focus},function(n){return n.theme.shadows.focus},function(n){return n.theme.colors.success});a.defaultProps={scale:o.MD};var u=a},437:function(n,e,t){var r=t(70865),i=t(96670),o=t(52322);t(2784);var s=t(6816);e.Z=function(n){return(0,o.jsx)(s.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"})}))}},36429:function(n,e,t){var r=t(70865),i=t(96670),o=t(52322);t(2784);var s=t(6816);e.Z=function(n){return(0,o.jsx)(s.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"})}))}},32404:function(n,e,t){var r=t(70865),i=t(96670),o=t(52322);t(2784);var s=t(6816);e.Z=function(n){return(0,o.jsx)(s.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 19 19"},n),{children:(0,o.jsx)("path",{d:"M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"})}))}},88596:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(70865),i=t(96670),o=t(26297),s=t(52322);t(2784);var c=t(33080),a=t(92228),u=t(3411),l={SM:"sm",MD:"md",LG:"lg"};function d(){var n=(0,a.Z)(["\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ",";\n  left: ",";\n  position: absolute;\n  top: ",";\n  transition: left 200ms ease-in;\n  width: ",";\n  z-index: 1;\n"]);return d=function(){return n},n}function h(){var n=(0,a.Z)(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + "," {\n    left: ",";\n  }\n\n  &:focus + "," {\n    box-shadow: ",";\n  }\n\n  &:hover + ",":not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n"]);return h=function(){return n},n}function f(){var n=(0,a.Z)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 24px;\n  box-shadow: ",";\n  cursor: pointer;\n  display: inline-flex;\n  height: ",";\n  position: relative;\n  transition: background-color 200ms;\n  width: ",";\n"]);return f=function(){return n},n}var p={sm:{handleHeight:"16px",handleWidth:"16px",handleLeft:"2px",handleTop:"2px",checkedLeft:"calc(100% - 18px)",toggleHeight:"20px",toggleWidth:"36px"},md:{handleHeight:"26px",handleWidth:"26px",handleLeft:"3px",handleTop:"3px",checkedLeft:"calc(100% - 30px)",toggleHeight:"32px",toggleWidth:"56px"},lg:{handleHeight:"32px",handleWidth:"32px",handleLeft:"4px",handleTop:"4px",checkedLeft:"calc(100% - 36px)",toggleHeight:"40px",toggleWidth:"72px"}},x=function(n){return function(e){var t=e.scale;return p[void 0===t?l.LG:t][n]}},m=u.ZP.div.withConfig({componentId:"sc-4d215cc-0"})(d(),function(n){return n.theme.toggle.handleBackground},x("handleHeight"),x("handleLeft"),x("handleTop"),x("handleWidth")),g=u.ZP.input.withConfig({componentId:"sc-4d215cc-1"})(h(),m,x("checkedLeft"),m,function(n){return n.theme.shadows.focus},m,function(n){return n.theme.shadows.focus}),v=u.ZP.div.withConfig({componentId:"sc-4d215cc-2"})(f(),function(n){var e=n.theme,t=n.$checked,r=n.$checkedColor,i=n.$defaultColor;return e.colors[t?r:i]},function(n){return n.theme.shadows.inset},x("toggleHeight"),x("toggleWidth")),Z=function(n){var e=n.checked,t=n.defaultColor,a=n.checkedColor,u=n.scale,d=void 0===u?l.LG:u,h=n.startIcon,f=n.endIcon,p=(0,o.Z)(n,["checked","defaultColor","checkedColor","scale","startIcon","endIcon"]);return(0,s.jsxs)(v,{$checked:!!e,$checkedColor:void 0===a?"success":a,$defaultColor:void 0===t?"input":t,scale:d,children:[(0,s.jsx)(g,(0,i.Z)((0,r.Z)({checked:e,scale:d},p),{type:"checkbox"})),h&&f?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{scale:d,children:(0,s.jsx)(c.Z,{height:"100%",alignItems:"center",justifyContent:"center",children:e?f(e):h(!e)})}),(0,s.jsxs)(c.Z,{width:"100%",height:"100%",justifyContent:"space-around",alignItems:"center",children:[h(),f()]})]}):(0,s.jsx)(m,{scale:d})]})}}}]);