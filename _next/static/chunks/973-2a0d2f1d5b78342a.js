(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{79085:function(t,e,n){var r=n(66188);t.exports=function(t){return r(t).toUpperCase()}},70811:function(t,e,n){"use strict";n.d(e,{A:function(){return u},Z:function(){return i}});var r=n(52322),o=n(2784),a=n(43997),u=(0,o.createContext)(null);function i(t){var e=t.children,n=t.store;return(0,r.jsx)(a.zt,{store:n,context:u,children:e})}},42459:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(2784),o=n(34291),a=n.n(o),u=n(70811);function i(){var t,e=(0,r.useContext)(u.A),n=(0,r.useCallback)(a(),[]);return(null==e?void 0:null===(t=e.store)||void 0===t?void 0:t.dispatch)||n}},79824:function(t,e,n){"use strict";n.d(e,{Ck:function(){return o},ND:function(){return i},eQ:function(){return s},fq:function(){return a},v9:function(){return u},yg:function(){return c}});var r=n(16816),o=.97,a=3*r.hJ,u=5,i=2,c=200,s=10},11241:function(t,e,n){"use strict";n.d(e,{ub:function(){return Q},x4:function(){return h},oO:function(){return tf},t$:function(){return td},Fr:function(){return V},jG:function(){return tn},fq:function(){return W},HJ:function(){return X},Tq:function(){return z},n:function(){return tr},s9:function(){return te},D:function(){return tt},yz:function(){return J},$8:function(){return to},CM:function(){return ta},a8:function(){return tc},D5:function(){return tu},zN:function(){return tl},WB:function(){return ts},ld:function(){return M},r3:function(){return j}});var r,o,a,u,i,c,s,l,d,f,h,p=n(98788),m=n(47842),B=n(70865),b=n(96670),g=n(87394),v=n(92228),Z=n(45680),A=n(6647),k=n(80173),y=n(10528),N=n(50071),C=n(60242),S=n(22572),w=n(45883),E=n(90711),P=function(t){return"CAKE"===t?"\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalCAKE\n  totalCAKEBull\n  totalCAKEBear\n  totalBetsClaimed\n  totalCAKEClaimed\n  winRate\n  averageCAKE\n  netCAKE\n":"\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalBNB\n  totalBNBBull\n  totalBNBBear\n  totalBetsClaimed\n  totalBNBClaimed\n  winRate\n  averageBNB\n  netBNB\n"},F=n(79824),O=function(t){if(null===t)return null;var e=Number(t);return Number.isNaN(e)?null:e},H=function(t,e){var n=t.id,r=t.epoch,o=t.failed,a=t.position,u=t.startAt,i=t.startBlock,c=t.startHash,s=t.lockAt,l=t.lockBlock,d=t.lockHash,f=t.lockPrice,h=t.lockRoundId,p=t.closeAt,m=t.closeBlock,B=t.closeHash,b=t.closePrice,g=t.closeRoundId,v=t.totalBets,Z=t.totalAmount,A=t.bullBets,k=t.bullAmount,y=t.bearBets,C=t.bearAmount,S=t.bets;return{id:n,failed:o,startHash:c,lockHash:d,lockRoundId:h,closeRoundId:g,closeHash:B,position:"Bull"===a?N.Tu.BULL:"Bear"===a?N.Tu.BEAR:"House"===a?N.Tu.HOUSE:null,epoch:O(r),startAt:O(u),startBlock:O(i),lockAt:O(s),lockBlock:O(l),lockPrice:f?parseFloat(f):0,closeAt:O(p),closeBlock:O(m),closePrice:b?parseFloat(b):0,totalBets:O(v),totalAmount:Z?parseFloat(Z):0,bullBets:O(A),bullAmount:k?parseFloat(k):0,bearBets:O(y),bearAmount:C?parseFloat(C):0,bets:(void 0===S?[]:S).map(e)}},x=function(t){return{id:t.id,hash:t.hash,block:O(t.block),amount:t.amount?parseFloat(t.amount):0,position:"Bull"===t.position?N.Tu.BULL:N.Tu.BEAR,claimed:t.claimed,claimedAt:O(t.claimedAt),claimedBlock:O(t.claimedBlock),claimedHash:t.claimedHash,createdAt:O(t.createdAt),updatedAt:O(t.updatedAt),claimedNetBNB:0,claimedBNB:0}},L=function(t){var e=t||{},n=e.id,r=e.createdAt,o=e.updatedAt,a=e.block,u=e.totalBets,i=e.totalBetsBull,c=e.totalBetsBear,s=e.totalBetsClaimed,l=e.winRate;return{id:n,createdAt:O(r),updatedAt:O(o),block:O(a),totalBets:O(u),totalBetsBull:O(i),totalBetsBear:O(c),totalBetsClaimed:O(s),winRate:l?parseFloat(l):0,totalBNB:0,totalBNBBull:0,totalBNBBear:0,totalBNBClaimed:0,averageBNB:0,netBNB:0}},_=function(t){var e=x(t),n=(0,b.Z)((0,B.Z)({},e),{claimedBNB:t.claimedCAKE?parseFloat(t.claimedCAKE):0,claimedNetBNB:t.claimedNetCAKE?parseFloat(t.claimedNetCAKE):0});return t.user&&(n.user=T(t.user)),t.round&&(n.round=H(t.round,_)),n},T=function(t){var e=L(t),n=t||{},r=n.totalCAKE,o=n.totalCAKEBull,a=n.totalCAKEBear,u=n.totalCAKEClaimed,i=n.averageCAKE,c=n.netCAKE;return(0,b.Z)((0,B.Z)({},e),{totalBNB:r?parseFloat(r):0,totalBNBBull:o?parseFloat(o):0,totalBNBBear:a?parseFloat(a):0,totalBNBClaimed:u?parseFloat(u):0,averageBNB:i?parseFloat(i):0,netBNB:c?parseFloat(c):0})},I=function(t){var e=x(t),n=(0,b.Z)((0,B.Z)({},e),{claimedBNB:t.claimedBNB?parseFloat(t.claimedBNB):0,claimedNetBNB:t.claimedNetBNB?parseFloat(t.claimedNetBNB):0});return t.user&&(n.user=D(t.user)),t.round&&(n.round=H(t.round,I)),n},D=function(t){var e=L(t),n=t||{},r=n.totalBNB,o=n.totalBNBBull,a=n.totalBNBBear,u=n.totalBNBClaimed,i=n.averageBNB,c=n.netBNB;return(0,b.Z)((0,B.Z)({},e),{totalBNB:r?parseFloat(r):0,totalBNBBull:o?parseFloat(o):0,totalBNBBear:a?parseFloat(a):0,totalBNBClaimed:u?parseFloat(u):0,averageBNB:i?parseFloat(i):0,netBNB:c?parseFloat(c):0})};function R(){var t=(0,v.Z)(["\n        query getTotalWonData {\n          market(id: 1) {\n            totalBNB\n            totalBNBTreasury\n          }\n        }\n      "]);return R=function(){return t},t}function K(){var t=(0,v.Z)(["\n        query getTotalWonData {\n          market(id: 1) {\n            totalCAKE\n            totalCAKETreasury\n          }\n        }\n      "]);return K=function(){return t},t}function q(){var t=(0,v.Z)(["\n      query getBetHistory($first: Int!, $skip: Int!, $where: Bet_filter) {\n        bets(first: $first, skip: $skip, where: $where, orderBy: createdAt, orderDirection: desc) {\n          ","\n          round {\n            ","\n          }\n          user {\n            ","\n          }\n        }\n      }\n    "]);return q=function(){return t},t}function U(){var t=(0,v.Z)(["\n      query getUsers($first: Int!, $skip: Int!, $where: User_filter, $orderBy: User_orderBy, $orderDir: OrderDirection) {\n        users(first: $first, skip: $skip, where: $where, orderBy: $orderBy, orderDirection: $orderDir) {\n          ","\n        }\n      }\n    "]);return U=function(){return t},t}function $(){var t=(0,v.Z)(["\n      query getUser($id: ID!) {\n        user(id: $id) {\n          ","\n        }\n      }\n  "]);return $=function(){return t},t}(r=h||(h={})).WIN="win",r.LOSE="lose",r.CANCELED="canceled",r.HOUSE="house",r.LIVE="live";var M=function(t){return"CAKE"===t?_:I},j=function(t){return"CAKE"===t?T:D},J=function(t,e){var n=t.round;if(n.failed)return h.CANCELED;if(n.epoch>=e-1)return h.LIVE;if(t.round.position===N.Tu.HOUSE)return h.HOUSE;var r=n.closePrice>n.lockPrice?N.Tu.BULL:N.Tu.BEAR;return t.position===r?h.WIN:h.LOSE},W=function(t,e){switch(e){case N.dZ.COLLECTED:return t.filter(function(t){return!0===t.claimed});case N.dZ.UNCOLLECTED:return t.filter(function(t){return!t.claimed&&(t.position===t.round.position||!0===t.round.failed)});case N.dZ.ALL:default:return t}},G=function(t,e){return Math.max((t["total".concat(e)]?parseFloat(t["total".concat(e)]):0)-(t["total".concat(e,"Treasury")]?parseFloat(t["total".concat(e,"Treasury")]):0),0)};(0,p.Z)(function(){var t,e,n;return(0,Z.__generator)(this,function(r){switch(r.label){case 0:return[4,Promise.all([(0,A.request)(k.GZ,(0,A.gql)(R())),(0,A.request)(k.fO,(0,A.gql)(K()))])];case 1:return e=(t=g.Z.apply(void 0,[r.sent(),1])[0]).market,n=t.market,[2,{totalWonBNB:G(e,"BNB"),totalWonCAKE:G(n,"CAKE")}]}})});var V=(o=(0,p.Z)(function(){var t,e,n,r,o,a=arguments;return(0,Z.__generator)(this,function(u){switch(u.label){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e=a.length>1&&void 0!==a[1]?a[1]:1e3,n=a.length>2&&void 0!==a[2]?a[2]:0,r=a.length>3?a[3]:void 0,o=a.length>4?a[4]:void 0,[4,(0,A.request)(r,(0,A.gql)(q(),"CAKE"===o?"\n id\n hash  \n amount\n position\n claimed\n claimedAt\n claimedHash\n claimedBlock\n claimedCAKE\n claimedNetCAKE\n createdAt\n updatedAt\n":"\n id\n hash  \n amount\n position\n claimed\n claimedAt\n claimedHash\n claimedBlock\n claimedBNB\n claimedNetBNB\n createdAt\n updatedAt\n","\n  id\n  epoch\n  position\n  failed\n  startAt\n  startBlock\n  startHash\n  lockAt\n  lockBlock\n  lockHash\n  lockPrice\n  lockRoundId\n  closeAt\n  closeBlock\n  closeHash\n  closePrice\n  closeRoundId\n  totalBets\n  totalAmount\n  bullBets\n  bullAmount\n  bearBets\n  bearAmount\n",P(o)),{first:e,skip:n,where:t})];case 1:return[2,u.sent().bets]}})}),function(){return o.apply(this,arguments)}),z=(a=(0,p.Z)(function(t,e,n){var r;return(0,Z.__generator)(this,function(o){switch(o.label){case 0:return r=e.map(function(e){return{address:n,name:"ledger",params:[e,t]}}),[4,(0,C.vf)({abi:w,calls:r})];case 1:return[2,o.sent()]}})}),function(t,e,n){return a.apply(this,arguments)}),Q=20,Y={skip:0,first:20,orderBy:"createdAt",orderDir:"desc"},X=function(t,e,n){if(!t){var r=(e+n)*1e3;if(Number.isFinite(r))return Date.now()>r}return!1},tt=(u=(0,p.Z)(function(){var t,e,n,r,o,a,u,i,c,s=arguments;return(0,Z.__generator)(this,function(l){switch(l.label){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},e=s.length>1?s[1]:void 0,n=s.length>2?s[2]:void 0,o=(r=(0,B.Z)({},Y,t)).first,a=r.skip,u=r.where,i=r.orderBy,c=r.orderDir,[4,(0,A.request)(e,(0,A.gql)(U(),P(n)),{first:o,skip:a,where:u,orderBy:i,orderDir:c})];case 1:return[2,l.sent().users]}})}),function(){return u.apply(this,arguments)}),te=(i=(0,p.Z)(function(t,e,n){return(0,Z.__generator)(this,function(r){switch(r.label){case 0:return[4,(0,A.request)(e,(0,A.gql)($(),P(n)),{id:t.toLowerCase()})];case 1:return[2,r.sent().user]}})}),function(t,e,n){return i.apply(this,arguments)}),tn=(c=(0,p.Z)(function(t,e,n){var r;return(0,Z.__generator)(this,function(o){switch(o.label){case 0:return r=e.map(function(e){return{address:n,name:"claimable",params:[e,t]}}),[4,(0,C.vf)({abi:w,calls:r})];case 1:return[2,o.sent().reduce(function(t,n,r){var o=e[r],a=(0,g.Z)(n,1)[0];return(0,b.Z)((0,B.Z)({},t),(0,m.Z)({},o,a))},{})]}})}),function(t,e,n){return c.apply(this,arguments)}),tr=(s=(0,p.Z)(function(t){var e,n,r,o,a;return(0,Z.__generator)(this,function(u){switch(u.label){case 0:return e=["currentEpoch","intervalSeconds","minBetAmount","paused"].map(function(e){return{address:t,name:e}}),[4,(0,C.vf)({abi:w,calls:e})];case 1:return n=g.Z.apply(void 0,[u.sent(),4]),r=(0,g.Z)(n[0],1)[0],o=(0,g.Z)(n[1],1)[0],a=(0,g.Z)(n[2],1)[0],[2,{status:(0,g.Z)(n[3],1)[0]?N.Gw.PAUSED:N.Gw.LIVE,currentEpoch:r.toNumber(),intervalSeconds:o.toNumber(),minBetAmount:a.toString()}]}})}),function(t){return s.apply(this,arguments)}),to=(l=(0,p.Z)(function(t,e){var n;return(0,Z.__generator)(this,function(r){switch(r.label){case 0:return n=t.map(function(t){return{address:e,name:"rounds",params:[t]}}),[4,(0,C.vf)({abi:w,calls:n})];case 1:return[2,r.sent()]}})}),function(t,e){return l.apply(this,arguments)}),ta=function(t,e){return{epoch:t,startTimestamp:e,lockTimestamp:null,closeTimestamp:null,lockPrice:null,closePrice:null,totalAmount:E._Y.toJSON(),bullAmount:E._Y.toJSON(),bearAmount:E._Y.toJSON(),rewardBaseCalAmount:E._Y.toJSON(),rewardAmount:E._Y.toJSON(),oracleCalled:!1,lockOracleId:null,closeOracleId:null}},tu=function(t){return t.reduce(function(t,e){return(0,b.Z)((0,B.Z)({},t),(0,m.Z)({},e.epoch.toString(),e))},{})},ti=function(t){return{position:0===t.position?N.Tu.BULL:N.Tu.BEAR,amount:t.amount.toJSON(),claimed:t.claimed}},tc=function(t,e,n){return e.reduce(function(e,r,o){if(!r||r.amount.eq(0))return e;var a=n[o].toString();return(0,b.Z)((0,B.Z)({},e),(0,m.Z)({},t,(0,b.Z)((0,B.Z)({},e[t]),(0,m.Z)({},a,ti(r)))))},{})},ts=function(t){var e=t.epoch,n=t.startTimestamp,r=t.lockTimestamp,o=t.closeTimestamp,a=t.lockPrice,u=t.closePrice,i=t.totalAmount,c=t.bullAmount,s=t.bearAmount,l=t.rewardBaseCalAmount,d=t.rewardAmount,f=t.oracleCalled,h=t.lockOracleId,p=t.closeOracleId;return{oracleCalled:f,epoch:e.toNumber(),startTimestamp:n.eq(0)?null:n.toNumber(),lockTimestamp:r.eq(0)?null:r.toNumber(),closeTimestamp:o.eq(0)?null:o.toNumber(),lockPrice:a.eq(0)?null:a.toJSON(),closePrice:u.eq(0)?null:u.toJSON(),totalAmount:i.toJSON(),bullAmount:c.toJSON(),bearAmount:s.toJSON(),rewardBaseCalAmount:l.toJSON(),rewardAmount:d.toJSON(),lockOracleId:h.toString(),closeOracleId:p.toString()}},tl=function(t){return Object.keys(t).reduce(function(e,n){var r=t[n];return r&&(null==r?void 0:r.type)==="BigNumber"?(0,b.Z)((0,B.Z)({},e),(0,m.Z)({},n,y.O$.from(r))):(0,b.Z)((0,B.Z)({},e),(0,m.Z)({},n,r))},{})},td=(d=(0,p.Z)(function(t,e){return(0,Z.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,S.qi)(e).getUserRoundsLength(t)];case 1:return[2,n.sent()];case 2:return n.sent(),[2,E._Y];case 3:return[2]}})}),function(t,e){return d.apply(this,arguments)}),tf=(f=(0,p.Z)(function(t){var e,n,r,o,a,u,i,c=arguments;return(0,Z.__generator)(this,function(s){switch(s.label){case 0:e=c.length>1&&void 0!==c[1]?c[1]:0,n=c.length>2&&void 0!==c[2]?c[2]:F.yg,r=c.length>3?c[3]:void 0,o=(0,S.qi)(r),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,o.getUserRounds(t,e,n)];case 2:return u=(a=g.Z.apply(void 0,[s.sent(),2]))[0],i=a[1],[2,u.reduce(function(t,e,n){return(0,b.Z)((0,B.Z)({},t),(0,m.Z)({},e.toString(),ti(i[n])))},{})];case 3:return s.sent(),[2,null];case 4:return[2]}})}),function(t){return f.apply(this,arguments)})},78943:function(t,e,n){"use strict";n.d(e,{WR:function(){return _},Dh:function(){return X},n3:function(){return O},XM:function(){return U},dJ:function(){return T},Gc:function(){return K},ds:function(){return j},sz:function(){return R},pw:function(){return M},J7:function(){return D},Wx:function(){return H},dW:function(){return $},YY:function(){return G},Gy:function(){return z},AC:function(){return J},HF:function(){return W},Ok:function(){return V},eI:function(){return q},nB:function(){return Q},hU:function(){return I},Z_:function(){return E},dm:function(){return P},Aq:function(){return F},YF:function(){return L},e:function(){return x},b1:function(){return Y}});var r=n(2784),o=n(51147),a=n(42459),u=n(43997),i=n(70811),c=(0,u.gR)(i.A),s=n(81427),l=n(47842),d=n(70865),f=n(96670),h=n(10528),p=n(34498),m=n.n(p),B=n(5994),b=n(11241),g=function(t){return t.currentEpoch},v=function(t){return t.rounds},Z=function(t){return t.ledgers},A=function(t){return t.claimableStatuses},k=(0,B.P1)([v],function(t){return Object.keys(t).reduce(function(e,n){var r=(0,b.zN)(t[n]);return(0,f.Z)((0,d.Z)({},e),(0,l.Z)({},r.closeOracleId,r))},{})}),y=(0,B.P1)([v],function(t){return Object.keys(t).reduce(function(e,n){return(0,f.Z)((0,d.Z)({},e),(0,l.Z)({},n,(0,b.zN)(t[n])))},{})}),N=(0,B.P1)([y],function(t){return m()(Object.values(t),["epoch"],["asc"])}),C=(0,B.P1)([g,N],function(t,e){return{currentEpoch:t,rounds:e}}),S=(0,B.P1)([function(t){return t.minBetAmount}],h.O$.from),w=(0,B.P1)([g,y,function(t){return t.intervalSeconds}],function(t,e,n){if(t){var r=e[t-1];return r?r.closeTimestamp?r.closeTimestamp:r.lockTimestamp+n:void 0}}),E=function(){return c(k)},P=function(){return c(N)},F=function(){return c(C)},O=function(t,e){return c((0,r.useMemo)(function(){return(0,B.P1)([Z],function(n){return n[t]&&n[t][e]?(0,b.zN)(n[t][e]):null})},[t,e]))},H=function(t){return c((0,r.useMemo)(function(){return(0,B.P1)([A],function(e){return e[t]||!1})},[t]))},x=function(){return c(function(t){return t.isHistoryPaneOpen})},L=function(){return c(function(t){return t.isChartPaneOpen})},_=function(){return c(function(t){return t.chartView})},T=function(){return c(function(t){return t.currentEpoch})},I=function(){return c(function(t){return t.status})},D=function(){return c(function(t){return t.historyFilter})},R=function(){return c(function(t){return t.hasHistoryLoaded})},K=function(){return c(function(t){return t.currentHistoryPage})},q=function(){return c(S)},U=function(){return c(function(t){return t.bufferSeconds})},$=function(){return c(function(t){return t.isFetchingHistory})},M=function(){return c(function(t){return t.history})},j=function(){return c(w)},J=function(){return c(function(t){return t.leaderboard.loadingState})},W=function(){return c(function(t){return t.leaderboard.results})},G=function(){return c(function(t){return t.leaderboard.filters})},V=function(){return c(function(t){return t.leaderboard.skip})},z=function(){return c(function(t){return t.leaderboard.hasMoreResults})},Q=function(t){var e=c(function(e){return e.leaderboard.addressResults[t]}),n=(0,a.Z)();return(0,r.useEffect)(function(){var r=(0,o.UJ)(t);!e&&null!==e&&r&&n((0,s.nI)(t))},[n,t,e]),e},Y=function(t){var e=c(function(t){return t.leaderboard.selectedAddress}),n=t||e,r=Q(n);return{address:n,result:r,leaderboardLoadingState:J()}},X=function(){return{isLoadingHistory:$(),history:M()}}},81427:function(t,e,n){"use strict";n.d(e,{E3:function(){return P},G$:function(){return $},Mk:function(){return _},S9:function(){return F},Ub:function(){return O},WB:function(){return U},Yq:function(){return K},bq:function(){return R},dG:function(){return x},l3:function(){return M},nI:function(){return L},nQ:function(){return D},uP:function(){return H},vR:function(){return q}});var r,o,a,u,i,c=n(98788),s=n(47842),l=n(70865),d=n(96670),f=n(87394),h=n(50930),p=n(45680),m=n(58125),B=n(10528),b=n(59656),g=n(98537),v=n.n(g),Z=n(2689),A=n.n(Z),k=n(42208),y=n.n(k),N=n(50071),C=n(57647),S=n(79824),w=n(11241),E=n(60485),P={status:N.Gw.INITIAL,chartView:N.RU.Chainlink,isLoading:!1,isHistoryPaneOpen:!1,isChartPaneOpen:!1,isFetchingHistory:!1,historyFilter:N.dZ.ALL,currentEpoch:0,intervalSeconds:300,minBetAmount:"10000000000000",bufferSeconds:60,rounds:{},history:[],totalHistory:0,currentHistoryPage:1,hasHistoryLoaded:!1,ledgers:{},claimableStatuses:{},leaderboard:{selectedAddress:null,loadingState:C.iF.Idle,filters:{address:null,orderBy:"totalBets",timePeriod:"all"},skip:0,hasMoreResults:!0,addressResults:{},results:[]}},F=(0,m.hg)("predictions/fetchPredictionData",(0,c.Z)(function(){var t,e,n,r,o,a,u,i,c,h=arguments;return(0,p.__generator)(this,function(p){switch(p.label){case 0:return t=h.length>0&&void 0!==h[0]?h[0]:null,e=(h.length>1?h[1]:void 0).extra,[4,(0,w.n)(e.address)];case 1:return r=(n=p.sent()).currentEpoch>S.v9?A()(n.currentEpoch,n.currentEpoch-S.v9):[n.currentEpoch],[4,(0,w.$8)(r,e.address)];case 2:if(o=p.sent().reduce(function(t,e){var n=(0,w.WB)(e);return(0,d.Z)((0,l.Z)({},t),(0,s.Z)({},n.epoch.toString(),n))},{}),a=(0,d.Z)((0,l.Z)({},n),{rounds:o,ledgers:{},claimableStatuses:{}}),!t)return[2,a];return[4,Promise.all([(0,w.Tq)(t,r,e.address),(0,w.jG)(t,r,e.address)])];case 3:return i=(u=f.Z.apply(void 0,[p.sent(),2]))[0],c=u[1],[2,v()({},a,{ledgers:(0,w.a8)(t,i,r),claimableStatuses:c})]}})})),O=(0,m.hg)("predictions/fetchLedgerData",(r=(0,c.Z)(function(t,e){var n,r,o,a;return(0,p.__generator)(this,function(u){switch(u.label){case 0:return n=t.account,r=t.epochs,o=e.extra,[4,(0,w.Tq)(n,r,o.address)];case 1:return a=u.sent(),[2,(0,w.a8)(n,a,r)]}})}),function(t,e){return r.apply(this,arguments)})),H=(0,m.hg)("predictions/fetchNodeHistory",(o=(0,c.Z)(function(t,e){var n,r,o,a,u,i,c,s,l,d,m,g,v,Z,A,k;return(0,p.__generator)(this,function(p){switch(p.label){case 0:return n=t.account,o=void 0===(r=t.page)?1:r,a=e.getState,u=e.extra,[4,(0,w.t$)(n,u.address)];case 1:if(c={bets:[],claimableStatuses:{},totalHistory:(i=p.sent()).toNumber()},s=i.lte(S.yg)?1:Math.ceil(i.toNumber()/S.yg),i.eq(0)||o>s)return[2,c];return l=i.sub(S.yg*o),d=s===o?i.sub(S.yg*(o-1)).toNumber():S.yg,[4,(0,w.oO)(n,l.lt(0)?0:l.toNumber(),d,u.address)];case 2:if(!(m=p.sent()))return[2,c];return g=Object.keys(m).map(function(t){return Number(t)}),[4,Promise.all([(0,w.$8)(g,u.address),(0,w.jG)(n,g,u.address)])];case 3:return Z=(v=f.Z.apply(void 0,[p.sent(),2]))[0],A=v[1],k=a().bufferSeconds,[2,{bets:Z.reduce(function(t,e){var n=m[e.epoch.toNumber()],r=B.O$.from(n.amount),o=e.closePrice?parseFloat((0,b.formatUnits)(e.closePrice,8)):null,a=e.lockPrice?parseFloat((0,b.formatUnits)(e.lockPrice,8)):null;return(0,h.Z)(t).concat([{id:null,hash:null,amount:parseFloat((0,b.formatUnits)(r)),position:n.position,claimed:n.claimed,claimedAt:null,claimedHash:null,claimedBNB:0,claimedNetBNB:0,createdAt:null,updatedAt:null,block:0,round:{id:null,epoch:e.epoch.toNumber(),failed:(0,w.HJ)(e.oracleCalled,e.closeTimestamp.eq(0)?null:e.closeTimestamp.toNumber(),k),startBlock:null,startAt:e.startTimestamp?e.startTimestamp.toNumber():null,startHash:null,lockAt:e.lockTimestamp?e.lockTimestamp.toNumber():null,lockBlock:null,lockPrice:a,lockHash:null,lockRoundId:e.lockOracleId?e.lockOracleId.toString():null,closeRoundId:e.closeOracleId?e.closeOracleId.toString():null,closeHash:null,closeAt:null,closePrice:o,closeBlock:null,totalBets:0,totalAmount:parseFloat((0,b.formatUnits)(e.totalAmount)),bullBets:0,bullAmount:parseFloat((0,b.formatUnits)(e.bullAmount)),bearBets:0,bearAmount:parseFloat((0,b.formatUnits)(e.bearAmount)),position:o?e.closePrice.eq(e.lockPrice)?N.Tu.HOUSE:e.closePrice.gt(e.lockPrice)?N.Tu.BULL:N.Tu.BEAR:null}}])},[]),claimableStatuses:A,page:o,totalHistory:i.toNumber()}]}})}),function(t,e){return o.apply(this,arguments)})),x=(0,m.hg)("predictions/filterLeaderboard",(a=(0,c.Z)(function(t,e){var n,r,o,a;return(0,p.__generator)(this,function(u){switch(u.label){case 0:return n=t.filters,r=e.extra,[4,(0,w.D)({skip:0,orderBy:n.orderBy,where:(0,s.Z)({totalBets_gte:S.eQ},"".concat(n.orderBy,"_gt"),0)},r.api,r.token.symbol)];case 1:return o=u.sent(),a=(0,w.r3)(r.token.symbol),[2,{results:o.map(a)}]}})}),function(t,e){return a.apply(this,arguments)})),L=(0,m.hg)("predictions/fetchAddressResult",(u=(0,c.Z)(function(t,e){var n,r,o;return(0,p.__generator)(this,function(a){switch(a.label){case 0:return n=e.rejectWithValue,r=e.extra,[4,(0,w.s9)(t,r.api,r.token.symbol)];case 1:if(!(o=a.sent()))return[2,n(t)];return[2,{account:t,data:(0,w.r3)(r.token.symbol)(o)}]}})}),function(t,e){return u.apply(this,arguments)})),_=(0,m.hg)("predictions/filterNextPageLeaderboard",(i=(0,c.Z)(function(t,e){var n,r,o,a,u;return(0,p.__generator)(this,function(i){switch(i.label){case 0:return n=e.getState,r=e.extra,o=n(),[4,(0,w.D)({skip:t,orderBy:o.leaderboard.filters.orderBy,where:(0,s.Z)({totalBets_gte:S.eQ},"".concat(o.leaderboard.filters.orderBy,"_gt"),0)},r.api,r.token.symbol)];case 1:return a=i.sent(),u=(0,w.r3)(r.token.symbol),[2,{results:a.map(u),skip:t}]}})}),function(t,e){return i.apply(this,arguments)})),T=(0,m.oM)({name:"predictions",initialState:P,reducers:{setLeaderboardFilter:function(t,e){t.leaderboard.filters=(0,l.Z)({},t.leaderboard.filters,e.payload),t.leaderboard.skip=0,t.leaderboard.hasMoreResults=!0},setHistoryPaneState:function(t,e){t.isHistoryPaneOpen=e.payload,t.historyFilter=N.dZ.ALL},setChartPaneState:function(t,e){t.isChartPaneOpen=e.payload},setChartView:function(t,e){t.chartView=e.payload},setHistoryFilter:function(t,e){t.historyFilter=e.payload},markAsCollected:function(t,e){t.claimableStatuses=(0,l.Z)({},t.claimableStatuses,e.payload)},setSelectedAddress:function(t,e){t.leaderboard.selectedAddress=e.payload}},extraReducers:function(t){t.addCase(E.tZ,function(t){t.claimableStatuses={},t.ledgers={},t.isFetchingHistory=!1,t.history=[],t.hasHistoryLoaded=!1,t.totalHistory=0,t.currentHistoryPage=1}),t.addCase(x.pending,function(t){t.leaderboard.loadingState===C.iF.Fetched&&(t.leaderboard.loadingState=C.iF.Fetching)}),t.addCase(x.fulfilled,function(t,e){var n=e.payload.results;t.leaderboard.loadingState=C.iF.Fetched,t.leaderboard.results=n,n.length<w.ub&&(t.leaderboard.hasMoreResults=!1),t.leaderboard.addressResults=(0,l.Z)({},t.leaderboard.addressResults,n.reduce(function(t,e){return(0,d.Z)((0,l.Z)({},t),(0,s.Z)({},e.id,e))},{}))}),t.addCase(L.pending,function(t){t.leaderboard.loadingState=C.iF.Fetching}),t.addCase(L.fulfilled,function(t,e){var n=e.payload,r=n.account,o=n.data;t.leaderboard.loadingState=C.iF.Fetched,t.leaderboard.addressResults[r]=o}),t.addCase(L.rejected,function(t,e){t.leaderboard.loadingState=C.iF.Fetched,t.leaderboard.addressResults[e.payload]=null}),t.addCase(_.pending,function(t){t.leaderboard.loadingState=C.iF.Fetching}),t.addCase(_.fulfilled,function(t,e){var n=e.payload,r=n.results,o=n.skip;t.leaderboard.loadingState=C.iF.Fetched,t.leaderboard.results=(0,h.Z)(t.leaderboard.results).concat((0,h.Z)(r)),t.leaderboard.skip=o,r.length<w.ub&&(t.leaderboard.hasMoreResults=!1)}),t.addCase(O.fulfilled,function(t,e){t.ledgers=v()({},t.ledgers,e.payload)}),t.addCase(F.fulfilled,function(t,e){for(var n=e.payload,r=n.status,o=n.currentEpoch,a=n.intervalSeconds,u=n.minBetAmount,i=n.rounds,c=n.claimableStatuses,s=n.ledgers,d=v()({},t.rounds,i),f=y()(d,function(e,n){return Number(n)>t.currentEpoch-S.v9}),h=[],p=i[o],m=1;m<=S.ND;m++)h.push((0,w.CM)(o+m,p.startTimestamp+a*m));f=(0,l.Z)({},f,(0,w.D5)(h)),t.status=r,t.currentEpoch=o,t.intervalSeconds=a,t.minBetAmount=u,t.claimableStatuses=v()({},t.claimableStatuses,c),t.ledgers=v()({},t.ledgers,s),t.rounds=f}),t.addCase(H.pending,function(t){t.isFetchingHistory=!0}),t.addCase(H.rejected,function(t){t.isFetchingHistory=!1}),t.addCase(H.fulfilled,function(t,e){var n=e.payload,r=n.bets,o=n.claimableStatuses,a=n.page,u=n.totalHistory;t.isFetchingHistory=!1,t.history=1===a?r:(0,h.Z)(t.history).concat((0,h.Z)(r)),t.claimableStatuses=(0,l.Z)({},t.claimableStatuses,o),t.hasHistoryLoaded=t.history.length===u||0===r.length,t.totalHistory=u,t.currentHistoryPage=a})}}),I=T.actions,D=I.setChartPaneState,R=I.setChartView,K=I.setHistoryFilter,q=I.setHistoryPaneState,U=I.markAsCollected,$=I.setLeaderboardFilter,M=I.setSelectedAddress;e.ZP=T.reducer},56418:function(t,e,n){"use strict";n.d(e,{ZP:function(){return i},ZR:function(){return u}});var r=n(52322),o=n(2784),a=(0,o.createContext)(null);function u(){return(0,o.useContext)(a)}function i(t){var e=t.children,n=t.config;return(0,r.jsx)(a.Provider,{value:n,children:e})}},24172:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var r=n(87394),o=n(52322),a=n(2784),u=n(70811),i=n(58125),c=n(50071),s=n(81427),l=n(5632),d=n(79085),f=n.n(d),h=n(56418),p=n(76275),m=n(80173),B=n(81254),b=n(47609),g={BNB:{address:(0,B.Kn)(p.Z.predictionsBNB),api:m.GZ,chainlinkOracleAddress:(0,B.Kn)(p.Z.chainlinkOracleBNB),displayedDecimals:4,token:b.d.bnb},CAKE:{address:(0,B.Kn)(p.Z.predictionsCAKE),api:m.fO,chainlinkOracleAddress:(0,B.Kn)(p.Z.chainlinkOracleCAKE),displayedDecimals:4,token:b.d.cake}},v="prediction-token",Z=function(t){var e=t.children,n=(0,l.useRouter)().query.token,d=(0,r.Z)((0,a.useState)(function(){var t=null==localStorage?void 0:localStorage.getItem(v);return[c.ru.BNB,c.ru.CAKE].includes(t)?t:c.ru.CAKE}),2),p=d[0],m=d[1];(0,a.useEffect)(function(){var t=f()(n);[c.ru.BNB,c.ru.CAKE].includes(t)&&(m(t),null==localStorage||localStorage.setItem(v,t))},[n]);var B=(0,a.useMemo)(function(){return g[p]},[p]),b=(0,a.useMemo)(function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return(0,i.xC)({reducer:t,middleware:function(t){return t({thunk:{extraArgument:n}})},preloadedState:e})}(s.ZP,s.E3,B)},[B]);return(0,o.jsx)(h.ZP,{config:B,children:(0,o.jsx)(u.Z,{store:b,children:e})})}},80751:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(70865),o=n(96670),a=n(26297),u=n(52322);n(2784);var i=n(92228),c=n(3411),s=n(78545),l=n(26074),d=n(5406);function f(){var t=(0,i.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return f=function(){return t},t}function h(){var t=(0,i.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return h=function(){return t},t}function p(){var t=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return p=function(){return t},t}var m=c.ZP.div.withConfig({componentId:"sc-69ac18f9-0"})(h(),function(t){var e=t.isActive,n=t.isSuccess,r=t.isWarning,o=t.borderBackground,a=t.theme;return o||(r?a.colors.warning:n?a.colors.success:e?"linear-gradient(180deg, ".concat(a.colors.primaryBright,", ").concat(a.colors.secondary,")"):a.colors.cardBorder)},function(t){return t.theme.radii.card},function(t){var e=t.theme,n=t.isDisabled;return e.colors[n?"textDisabled":"text"]},function(t){return t.isActive&&(0,c.iv)(f(),l.DS)},s.Dh),B=(0,c.ZP)(d.ZP).withConfig({componentId:"sc-69ac18f9-1"})(p(),function(t){return t.hasCustomBorder?"initial":"inherit"},function(t){var e=t.theme,n=t.background;return null!=n?n:e.card.background},function(t){return t.theme.radii.card});m.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var b=function(t){var e=t.ribbon,n=t.children,i=t.background,c=(0,a.Z)(t,["ribbon","children","background"]);return(0,u.jsx)(m,(0,o.Z)((0,r.Z)({},c),{children:(0,u.jsxs)(B,{background:i,hasCustomBorder:!!c.borderBackground,children:[e,n]})}))}},40125:function(t,e,n){"use strict";var r=n(92228),o=n(3411),a=n(78545);function u(){var t=(0,r.Z)(["\n  ","\n"]);return u=function(){return t},t}var i=o.ZP.div.withConfig({componentId:"sc-df4f0a61-0"})(u(),a.Dh);i.defaultProps={p:"24px"},e.Z=i},64170:function(t,e,n){"use strict";var r=n(92228),o=n(3411),a=n(29708);function u(){var t=(0,r.Z)(["\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",";\n  }\n"]);return u=function(){return t},t}var i=o.ZP.input.withConfig({componentId:"sc-c22a9310-0"})(u(),function(t){return t.theme.colors.input},function(t){var e=t.isSuccess,n=t.isWarning,r=t.theme;return void 0!==n&&n?r.shadows.warning:void 0!==e&&e?r.shadows.success:r.shadows.inset},function(t){return t.theme.colors.text},function(t){var e=t.scale;switch(void 0===e?a.Q.MD:e){case a.Q.SM:return"32px";case a.Q.LG:return"48px";case a.Q.MD:default:return"40px"}},function(t){return t.theme.colors.inputSecondary},function(t){return t.theme.colors.textSubtle},function(t){return t.theme.colors.backgroundDisabled},function(t){return t.theme.colors.textDisabled},function(t){var e=t.theme,n=t.isWarning,r=t.isSuccess;return n?e.shadows.warning:r?e.shadows.success:e.shadows.focus});i.defaultProps={scale:a.Q.MD,isSuccess:!1,isWarning:!1},e.Z=i},29708:function(t,e,n){"use strict";n.d(e,{Q:function(){return r}});var r={SM:"sm",MD:"md",LG:"lg"}},43435:function(t,e,n){"use strict";var r=n(52322);n(2784);var o=n(5406),a=n(19372);e.Z=function(t){var e=t.size,n=void 0===e?128:e;return(0,r.jsx)(o.ZP,{width:n,height:1.197*n,position:"relative",children:(0,r.jsx)(a.Z,{width:n,height:1.197*n,src:"https://pancakeswap.finance/images/pancake-3d-spinner-v2.gif",alt:"pancake-3d-spinner"})})}},437:function(t,e,n){"use strict";var r=n(70865),o=n(96670),a=n(52322);n(2784);var u=n(6816);e.Z=function(t){return(0,a.jsx)(u.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},t),{children:(0,a.jsx)("path",{d:"M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"})}))}},52571:function(t,e,n){"use strict";var r=n(70865),o=n(96670),a=n(52322);n(2784);var u=n(6816);e.Z=function(t){return(0,a.jsx)(u.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},t),{children:(0,a.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))}}}]);