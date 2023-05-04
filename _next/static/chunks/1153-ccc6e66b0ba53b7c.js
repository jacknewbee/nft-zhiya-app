"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1153],{23222:function(n,e,t){t.d(e,{J:function(){return u},q:function(){return s}});var i=t(92228),r=t(3411),o=t(33080),a=t(32301);function c(){var n=(0,i.Z)(["\n  color: black;\n\n  padding: 24px 8px;\n\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return c=function(){return n},n}function l(){var n=(0,i.Z)(["\n  flex-direction: column;\n  justify-content: center;\n  max-height: 40px;\n  "," {\n    line-height: 1;\n  }\n"]);return l=function(){return n},n}var s=(0,r.ZP)(o.Z).withConfig({componentId:"sc-535993e6-0"})(c()),u=(0,r.ZP)(o.Z).withConfig({componentId:"sc-535993e6-1"})(l(),a.Z)},3245:function(n,e,t){t.d(e,{u:function(){return p}});var i=t(70865),r=t(92228),o=t(52322),a=t(3411),c=t(73921),l=t(21585),s=t(32301),u=t(23222);function d(){var n=(0,r.Z)(["\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1;\n  padding-right: 12px;\n  padding-left: 0px;\n  "," {\n    flex: 0 0 120px;\n    padding-right: 32px;\n    padding-left: 8px;\n  }\n"]);return d=function(){return n},n}function x(){var n=(0,r.Z)(["\n  transform: ",";\n  height: 24px;\n"]);return x=function(){return n},n}var f=(0,a.ZP)(u.q).withConfig({componentId:"sc-bc49cef1-0"})(d(),function(n){return n.theme.mediaQueries.md}),m=(0,a.ZP)(function(n){return(0,o.jsx)(l.Z,(0,i.Z)({},n))}).withConfig({componentId:"sc-bc49cef1-1"})(x(),function(n){return n.toggled?"rotate(180deg)":"rotate(0)"}),p=function(n){var e=n.expanded,t=n.isFullLayout,i=(0,c.$G)().t;return(0,o.jsxs)(f,{role:"cell",children:[t&&(0,o.jsx)(s.Z,{color:"primary",bold:!0,children:i(e?"Hide":"Details")}),(0,o.jsx)(m,{color:"primary",toggled:e})]})}},33047:function(n,e,t){t.d(e,{o:function(){return m}});var i=t(52322),r=t(73921),o=t(32288),a=t(3411),c=t(33080),l=t(87016),s=t(68303),u=t(32301),d=t(40330),x=t(25385),f=t(62620);function m(n){var e=n.formattedBalance,t=n.earningTokenSymbol,m=n.earningsDollarValue,p=n.onDismiss,g=n.handleHarvestConfirm,h=n.pendingTx,Z=(0,r.$G)().t,k=(0,a.Fg)();return(0,i.jsxs)(x.ZP,{title:"".concat(t," ").concat(Z("Harvest")),onDismiss:p,headerBackground:(0,f.Z)(k,"colors.gradientCardHeader"),children:[(0,i.jsx)(c.Z,{justifyContent:"space-between",alignItems:"center",mb:"8px",children:(0,i.jsxs)(u.Z,{children:[Z("Harvesting"),":"]})}),(0,i.jsxs)(c.Z,{flexDirection:"column",mb:"24px",children:[(0,i.jsxs)(l.Z,{children:[e," ",t]}),m>0&&(0,i.jsx)(u.Z,{fontSize:"12px",color:"textSubtle",children:"~".concat((0,o.uf)(m)," USD")})]}),(0,i.jsx)(s.Z,{mt:"8px",onClick:g,isLoading:h,endIcon:h?(0,i.jsx)(d.Z,{spin:!0,color:"currentColor"}):null,children:Z(h?"Confirming":"Confirm")}),(0,i.jsx)(s.Z,{variant:"text",onClick:p,pb:"0px",children:Z("Close Window")})]})}},62778:function(n,e,t){t.d(e,{f:function(){return U}});var i=t(70865),r=t(87394),o=t(92228),a=t(52322),c=t(73921),l=t(6391),s=t.n(l),u=t(2784),d=t(3411),x=t(4709),f=t(32288),m=RegExp(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.[0-9]*?)0*$/,"g"),p=t(68303);function g(){var n=(0,o.Z)(["\n  flex-grow: 1;\n"]);return g=function(){return n},n}var h=(0,d.ZP)(p.Z).withConfig({componentId:"sc-995efa07-0"})(g()),Z=function(n){var e=n.children,t=n.onClick;return(0,a.jsx)(h,{scale:"xs",mx:"2px",p:"4px 16px",variant:"tertiary",onClick:t,children:e})},k=t(62620),j=t(91928),b=t(33080),v=t(32301),C=t(84631),w=t(19372),y=t(10442),S=t(11655),I=t(79221),T=t(46678),P=t(11982),N=t(40330),D=t(25385);function B(){var n=(0,o.Z)(["\n  width: 100%;\n"]);return B=function(){return n},n}function A(){var n=(0,o.Z)(["\n  cursor: pointer;\n"]);return A=function(){return n},n}function E(){var n=(0,o.Z)(["\n  width: 72px;\n  max-width: 72px;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n"]);return E=function(){return n},n}var $=(0,d.ZP)(function(n){return(0,a.jsx)(j.Z,(0,i.Z)({},n))}).withConfig({componentId:"sc-2ae1faa6-0"})(B()),H=(0,d.ZP)(function(n){return(0,a.jsx)(b.Z,(0,i.Z)({},n))}).withConfig({componentId:"sc-2ae1faa6-1"})(A()),L=(0,d.ZP)(function(n){return(0,a.jsx)(v.Z,(0,i.Z)({},n))}).withConfig({componentId:"sc-2ae1faa6-2"})(E()),U=function(n){var e=n.stakingTokenDecimals,t=n.stakingTokenSymbol,i=n.stakingTokenAddress,o=n.stakingTokenBalance,l=n.stakingTokenPrice,g=n.apr,h=n.stakingLimit,j=n.earningTokenPrice,B=n.earningTokenSymbol,A=n.userDataStakedBalance,E=n.userDataStakingTokenBalance,U=n.enableEmergencyWithdraw,W=n.isRemovingStake,z=void 0!==W&&W,F=n.needEnable,G=n.enablePendingTx,J=n.setAmount,M=n.onDismiss,V=n.handleEnableApprove,_=n.account,Q=n.pendingTx,R=n.handleConfirmClick,q=n.imageUrl,O=(0,c.$G)().t,Y=(0,d.Fg)(),K=(0,r.Z)((0,u.useState)(""),2),X=K[0],nn=K[1],ne=(0,r.Z)((0,u.useState)(!1),2),nt=ne[0],ni=ne[1],nr=(0,r.Z)((0,u.useState)(0),2),no=nr[0],na=nr[1],nc=(0,r.Z)((0,u.useState)(!1),2),nl=nc[0],ns=nc[1],nu=(0,u.useCallback)(function(){if(z)return A;if(h.gt(0)){var n=h.minus(A);if(o.gt(n))return n}return o},[A,o,h,z]),nd=(0,f.Qe)(new(s())(X),e),nx=z?A.lt(nd):E.lt(nd),nf=new(s())(X).times(l),nm=!nf.isNaN()&&(0,f.uf)(nf.toNumber()),np=(0,x.A1)({principalInUSD:nf.isNaN()?0:nf.toNumber(),apr:g,earningTokenPrice:j})[3]*j,ng=(0,f.uf)(np,np>1e4?0:2,np>1e4?0:2),nh=i?"/swap?outputCurrency=".concat(i):"/swap";(0,u.useEffect)(function(){h.gt(0)&&!z&&ni(nd.plus(A).gt(h))},[X,h,z,ni,nd,A]);var nZ=(0,u.useCallback)(function(n){if(n>0){var t=nu().dividedBy(100).multipliedBy(n);nn((0,f.NJ)(t,e,e).replace(m,"$1$2$3"))}else nn("");na(n)},[nu,e]);return((0,u.useEffect)(function(){J&&J(Number(X)>0?X:"0")},[J,X]),nl)?(0,a.jsx)(C.Z,{account:_,earningTokenPrice:j,stakingTokenPrice:l,stakingTokenDecimals:e,apr:g,linkLabel:O("Get %symbol%",{symbol:t}),linkHref:nh,stakingTokenBalance:A.plus(o),stakingTokenSymbol:t,earningTokenSymbol:B,onBack:function(){return ns(!1)},initialValue:X}):(0,a.jsxs)(D.ZP,{minWidth:"346px",title:O(z?"Unstake":"Stake in Pool"),onDismiss:M,headerBackground:(0,k.Z)(Y,"colors.gradientCardHeader"),children:[h.gt(0)&&!z&&(0,a.jsx)(v.Z,{color:"secondary",bold:!0,mb:"24px",style:{textAlign:"center"},fontSize:"16px",children:O("Max stake for this pool: %amount% %token%",{amount:(0,f.NJ)(h,e,0),token:t})}),(0,a.jsxs)(b.Z,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[(0,a.jsxs)(v.Z,{bold:!0,children:[O(z?"Unstake":"Stake"),":"]}),(0,a.jsxs)(b.Z,{alignItems:"center",minWidth:"70px",children:[(0,a.jsx)(w.Z,{src:"".concat(void 0===q?"/images/tokens/":q).concat(i,".png"),width:24,height:24,alt:t}),(0,a.jsx)(v.Z,{ml:"4px",bold:!0,children:t})]})]}),(0,a.jsx)(y.Z,{value:X,onUserInput:function(n){n?na(Math.min(Math.floor((0,f.Qe)(new(s())(n),e).dividedBy(nu()).multipliedBy(100).toNumber()),100)):na(0),nn(n)},currencyValue:0!==l&&"~".concat(nm||0," USD"),isWarning:nt||nx,decimals:e}),nt&&(0,a.jsx)(v.Z,{color:"failure",fontSize:"12px",style:{textAlign:"right"},mt:"4px",children:O("Maximum total stake: %amount% %token%",{amount:(0,f.NJ)(new(s())(h),e,0),token:t})}),nx&&(0,a.jsx)(v.Z,{color:"failure",fontSize:"12px",style:{textAlign:"right"},mt:"4px",children:O("Insufficient %symbol% balance",{symbol:t})}),F&&(0,a.jsx)(v.Z,{color:"failure",textAlign:"right",fontSize:"12px",mt:"8px",children:O('Insufficient token allowance. Click "Enable" to approve.')}),(0,a.jsx)(v.Z,{ml:"auto",color:"textSubtle",fontSize:"12px",mb:"8px",children:O("Balance: %balance%",{balance:(0,f.NJ)(z?A:o,e)})}),(0,a.jsx)(S.Z,{min:0,max:100,value:no,onValueChanged:nZ,name:"stake",valueLabel:"".concat(no,"%"),step:1}),(0,a.jsxs)(b.Z,{alignItems:"center",justifyContent:"space-between",mt:"8px",children:[(0,a.jsx)(Z,{onClick:function(){return nZ(25)},children:"25%"}),(0,a.jsx)(Z,{onClick:function(){return nZ(50)},children:"50%"}),(0,a.jsx)(Z,{onClick:function(){return nZ(75)},children:"75%"}),(0,a.jsx)(Z,{onClick:function(){return nZ(100)},children:O("Max")})]}),!z&&(0,a.jsxs)(b.Z,{mt:"24px",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(v.Z,{mr:"8px",color:"textSubtle",children:[O("Annual ROI at current rates"),":"]}),Number.isFinite(np)?(0,a.jsxs)(H,{alignItems:"center",onClick:function(){ns(!0)},children:[(0,a.jsxs)(L,{children:["$",ng]}),(0,a.jsx)(I.Z,{variant:"text",scale:"sm",children:(0,a.jsx)(T.Z,{color:"textSubtle",width:"18px"})})]}):(0,a.jsx)(P.Z,{width:60})]}),z&&U&&(0,a.jsx)(b.Z,{maxWidth:"346px",mt:"24px",children:(0,a.jsx)(v.Z,{textAlign:"center",children:O("This pool was misconfigured. Please unstake your tokens from it, emergencyWithdraw method will be used. Your tokens will be returned to your wallet, however rewards will not be harvested.")})}),F?(0,a.jsx)(p.Z,{isLoading:G,endIcon:G?(0,a.jsx)(N.Z,{spin:!0,color:"currentColor"}):null,onClick:V,mt:"24px",children:O("Enable")}):(0,a.jsx)(p.Z,{isLoading:Q,endIcon:Q?(0,a.jsx)(N.Z,{spin:!0,color:"currentColor"}):null,onClick:function(){return R(X)},disabled:!X||0===parseFloat(X)||nt||nx,mt:"24px",children:O(Q?"Confirming":"Confirm")}),!z&&(0,a.jsx)($,{external:!0,href:nh,children:(0,a.jsx)(p.Z,{width:"100%",mt:"8px",variant:"secondary",children:O("Get %symbol%",{symbol:t})})})]})}}}]);