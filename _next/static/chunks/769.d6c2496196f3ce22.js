"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{33132:function(n,i,e){e.d(i,{N:function(){return r}});var t,r,o=e(92228),c=e(52322),u=e(3411),d=e(68303),s=e(82743),a=e(21585),l=e(40330),f=e(5406),h=e(33080),m=e(73921);function p(){var n=(0,o.Z)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"]);return p=function(){return n},n}function g(){var n=(0,o.Z)(["\n  width: 100%;\n\n  "," {\n    ","\n  }\n"]);return g=function(){return n},n}function C(){var n=(0,o.Z)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return C=function(){return n},n}function v(){var n=(0,o.Z)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"]);return v=function(){return n},n}(t=r||(r={})).ROW="row",t.SEQUENTIAL="sequential";var b=u.ZP.div.withConfig({componentId:"sc-fc3c7c2-0"})(p(),function(n){return n.theme.mediaQueries.md}),Z=(0,u.ZP)(d.Z).withConfig({componentId:"sc-fc3c7c2-1"})(g(),function(n){return n.theme.mediaQueries.md},function(n){return n.useMinWidth&&"  \n    min-width: 160px;\n  "}),x={width:"24px",color:"textDisabled"},j=(0,u.ZP)(s.Z).attrs(x).withConfig({componentId:"sc-fc3c7c2-2"})(C(),function(n){return n.theme.mediaQueries.md}),E=(0,u.ZP)(a.Z).attrs(x).withConfig({componentId:"sc-fc3c7c2-3"})(v(),function(n){return n.theme.mediaQueries.md}),k=(0,c.jsx)(l.Z,{spin:!0,color:"currentColor"});i.Z=function(n){var i=n.isApproveDisabled,e=n.isApproving,t=n.isConfirming,o=n.isConfirmDisabled,u=n.onApprove,d=n.onConfirm,s=n.buttonArrangement,a=void 0===s?r.ROW:s,l=n.confirmLabel,p=n.confirmId,g=n.useMinWidth,C=void 0===g||g,v=(0,m.$G)().t,x=null!=l?l:v("Confirm");return a===r.ROW?(0,c.jsxs)(b,{children:[(0,c.jsx)(f.ZP,{children:(0,c.jsx)(Z,{disabled:i,onClick:u,endIcon:e?k:void 0,isLoading:e,useMinWidth:C,children:v(e?"Enabling":"Enable")})}),(0,c.jsxs)(h.Z,{justifyContent:"center",children:[(0,c.jsx)(j,{}),(0,c.jsx)(E,{})]}),(0,c.jsx)(f.ZP,{children:(0,c.jsx)(Z,{id:p,onClick:d,disabled:o,isLoading:t,endIcon:t?k:void 0,useMinWidth:C,children:t?v("Confirming"):x})})]}):(0,c.jsx)(c.Fragment,{children:i?(0,c.jsx)(f.ZP,{children:(0,c.jsx)(Z,{id:p,onClick:d,disabled:o,isLoading:t,endIcon:t?k:void 0,children:t?v("Confirming"):x})}):(0,c.jsx)(f.ZP,{children:(0,c.jsx)(Z,{onClick:u,endIcon:e?k:void 0,isLoading:e,children:v(e?"Enabling":"Enable")})})})}},19671:function(n,i,e){e.d(i,{z:function(){return C}});var t=e(87394),r=e(2784),o=e(46267),c=e(32288),u=e(95625),d=e(97124),s=e(72027),a=e(8160),l=e(99743),f=e(7384),h=e(76631),m=e(90327),p=e(86891),g=e(57535),C=function(n){var i=(0,m.Z)(),e=i.account,C=i.chainId,v=(0,u.TL)(),b=(0,t.Z)((0,r.useState)(!1),2),Z=b[0],x=b[1],j=(0,t.Z)((0,r.useState)(),2),E=j[0],k=j[1],I=(0,o.ub)(E),w=(0,r.useMemo)(function(){return(0,c.NJ)(n)},[n]),A=(0,l.Z)(w,a.cr[C]),y=(0,f.in)(s._r.onChain(s.a_.BSC),A),L=(0,p.R)(y,g.gv,null),P=(0,h.o)(y,g.gv,null,L).callback;return(0,r.useEffect)(function(){Z&&E&&!I&&(v((0,d.yi)({sousId:0,account:e})),x(I))},[e,v,E,Z,I]),{handleEnable:(0,r.useCallback)(function(){P&&(x(!0),P().then(function(n){k(n)}).catch(function(){x(!1)}))},[P]),pendingEnableTx:Z}}},90769:function(n,i,e){e.r(i);var t=e(87394),r=e(52322),o=e(2784),c=e(33132),u=e(19671),d=e(97384);i.default=function(n){var i=n.hasEnoughCake,e=n.handleConfirmClick,s=n.pendingConfirmTx,a=n.isValidAmount,l=n.isValidDuration,f=(0,u.z)(d.iL),h=f.handleEnable,m=f.pendingEnableTx,p=(0,t.Z)((0,o.useState)(m),2),g=p[0],C=p[1];return(0,o.useEffect)(function(){m?C(!0):i&&C(!1)},[i,m]),(0,r.jsx)(c.Z,{isApproveDisabled:!(a&&l)||i,isApproving:g,isConfirmDisabled:!(a&&l)||!i,isConfirming:s,onApprove:h,onConfirm:e,useMinWidth:!1})}}}]);