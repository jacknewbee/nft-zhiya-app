(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1246],{1246:function(e,r,t){var n,i;void 0!==(n="function"==typeof(i=function(){var e,r,t,n,i,o={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function s(e,r){this._input=e,this._value=r}return(n=function(e){var r,t,a,l;if(n.isNumeral(e))r=e.value();else if(0===e||void 0===e)r=0;else if(null===e||i.isNaN(e))r=null;else if("string"==typeof e){if(u.zeroFormat&&e===u.zeroFormat)r=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in o)if((l="function"==typeof o[t].regexps.unformat?o[t].regexps.unformat():o[t].regexps.unformat)&&e.match(l)){a=o[t].unformat;break}r=(a=a||n._.stringToNumber)(e)}}else r=Number(e)||null;return new s(e,r)}).version="2.0.6",n.isNumeral=function(e){return e instanceof s},n._=i={numberToFormat:function(e,r,t){var i,o,l,u,s,c,f,m=a[n.options.currentLocale],h=!1,b=!1,d=0,p="",g="",v=!1;if(o=Math.abs(e=e||0),n._.includes(r,"(")?(h=!0,r=r.replace(/[\(|\)]/g,"")):(n._.includes(r,"+")||n._.includes(r,"-"))&&(s=n._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),n._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],n._.includes(r," a")&&(p=" "),r=r.replace(RegExp(p+"a[kmbt]?"),""),o>=1e12&&!i||"t"===i?(p+=m.abbreviations.trillion,e/=1e12):o<1e12&&o>=1e9&&!i||"b"===i?(p+=m.abbreviations.billion,e/=1e9):o<1e9&&o>=1e6&&!i||"m"===i?(p+=m.abbreviations.million,e/=1e6):(o<1e6&&o>=1e3&&!i||"k"===i)&&(p+=m.abbreviations.thousand,e/=1e3)),n._.includes(r,"[.]")&&(b=!0,r=r.replace("[.]",".")),l=e.toString().split(".")[0],u=r.split(".")[1],c=r.indexOf(","),d=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(n._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),g=n._.toFixed(e,u[0].length+u[1].length,t,u[1].length)):g=n._.toFixed(e,u.length,t),l=g.split(".")[0],g=n._.includes(g,".")?m.delimiters.decimal+g.split(".")[1]:"",b&&0===Number(g.slice(1))&&(g="")):l=n._.toFixed(e,0,t),p&&!i&&Number(l)>=1e3&&p!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}if(n._.includes(l,"-")&&(l=l.slice(1),v=!0),l.length<d)for(var _=d-l.length;_>0;_--)l="0"+l;return c>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(l=""),f=l+g+(p||""),h?f=(h&&v?"(":"")+f+(h&&v?")":""):s>=0?f=0===s?(v?"-":"+")+f:f+(v?"-":"+"):v&&(f="-"+f),f},stringToNumber:function(e){var r,t,n,i=a[u.currentLocale],o=e,l={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)t=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in t=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),l)if(n=RegExp("[^a-zA-Z]"+i.abbreviations[r]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),o.match(n)){t*=Math.pow(10,l[r]);break}t*=((e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1)*Number(e=e.replace(/[^0-9\.]+/g,""))}return t},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,r){return -1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(this===null)throw TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw TypeError(r+" is not a function");var t,n=Object(e),i=n.length>>>0,o=0;if(3==arguments.length)t=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw TypeError("Reduce of empty array with no initial value");t=n[o++]}for(;o<i;o++)o in n&&(t=r(t,n[o],o,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,r){var t=i.multiplier(r);return e>t?e:t},1)},toFixed:function(e,r,t,n){var i,o,a,l,u=e.toString().split("."),s=r-(n||0);return a=Math.pow(10,i=2===u.length?Math.min(Math.max(u[1].length,s),r):s),l=(t(e+"e+"+i)/a).toFixed(i),n>r-i&&(o=RegExp("\\.?0{1,"+(n-(r-i))+"}$"),l=l.replace(o,"")),l}},n.options=u,n.formats=o,n.locales=a,n.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},n.localeData=function(e){if(!e)return a[u.currentLocale];if(!a[e=e.toLowerCase()])throw Error("Unknown locale : "+e);return a[e]},n.reset=function(){for(var e in l)u[e]=l[e]},n.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},n.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},n.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},n.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},n.validate=function(e,r){var t,i,o,a,l,u,s,c;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{s=n.localeData(r)}catch(f){s=n.localeData(n.locale())}return o=s.currency.symbol,l=s.abbreviations,t=s.delimiters.decimal,i="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(c=e.match(/^[^\d]+/))||(e=e.substr(1),c[0]===o))&&(null===(c=e.match(/[^\d]+$/))||(e=e.slice(0,-1),c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(u=RegExp(i+"{2}"),!e.match(/[^\d.,]/g)&&!((a=e.split(t)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/)))},n.fn=s.prototype={clone:function(){return n(this)},format:function(e,r){var t,i,a,l=this._value,s=e||u.defaultFormat;if(r=r||Math.round,0===l&&null!==u.zeroFormat)i=u.zeroFormat;else if(null===l&&null!==u.nullFormat)i=u.nullFormat;else{for(t in o)if(s.match(o[t].regexps.format)){a=o[t].format;break}i=(a=a||n._.numberToFormat)(l,s,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=i.correctionFactor.call(null,this._value,e);return this._value=i.reduce([this._value,e],function(e,t,n,i){return e+Math.round(r*t)},0)/r,this},subtract:function(e){var r=i.correctionFactor.call(null,this._value,e);return this._value=i.reduce([e],function(e,t,n,i){return e-Math.round(r*t)},Math.round(this._value*r))/r,this},multiply:function(e){return this._value=i.reduce([this._value,e],function(e,r,t,n){var o=i.correctionFactor(e,r);return Math.round(e*o)*Math.round(r*o)/Math.round(o*o)},1),this},divide:function(e){return this._value=i.reduce([this._value,e],function(e,r,t,n){var o=i.correctionFactor(e,r);return Math.round(e*o)/Math.round(r*o)}),this},difference:function(e){return Math.abs(n(this._value).subtract(e).value())}},n.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1==~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),n.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,t){var i,o=n._.includes(r," BPS")?" ":"";return e*=1e4,r=r.replace(/\s?BPS/,""),i=n._.numberToFormat(e,r,t),n._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(e){return+(1e-4*n._.stringToNumber(e)).toFixed(15)}}),r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},t="("+(t=(e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(r.suffixes.filter(function(r){return 0>e.suffixes.indexOf(r)})).join("|")).replace("B","B(?!PS)")+")",n.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:RegExp(t)},format:function(t,i,o){var a,l,u,s=n._.includes(i,"ib")?r:e,c=n._.includes(i," b")||n._.includes(i," ib")?" ":"";for(a=0,i=i.replace(/\s?i?b/,"");a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),u=Math.pow(s.base,a+1),null===t||0===t||t>=l&&t<u){c+=s.suffixes[a],l>0&&(t/=l);break}return n._.numberToFormat(t,i,o)+c},unformat:function(t){var i,o,a=n._.stringToNumber(t);if(a){for(i=e.suffixes.length-1;i>=0;i--){if(n._.includes(t,e.suffixes[i])){o=Math.pow(e.base,i);break}if(n._.includes(t,r.suffixes[i])){o=Math.pow(r.base,i);break}}a*=o||1}return a}}),n.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,t){var i,o,a=n.locales[n.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=n._.numberToFormat(e,r,t),e>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):!(e<0)||n._.includes(l.before,"-")||n._.includes(l.before,"(")||(l.before="-"+l.before),o=0;o<l.before.length;o++)switch(l.before[o]){case"$":i=n._.insert(i,a.currency.symbol,o);break;case" ":i=n._.insert(i," ",o+a.currency.symbol.length-1)}for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":i=o===l.after.length-1?i+a.currency.symbol:n._.insert(i,a.currency.symbol,-(l.after.length-(1+o)));break;case" ":i=o===l.after.length-1?i+" ":n._.insert(i," ",-(l.after.length-(1+o)+a.currency.symbol.length-1))}return i}}),n.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,t){var i=("number"!=typeof e||n._.isNaN(e)?"0e+0":e.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),n._.numberToFormat(Number(i[0]),r,t)+"e"+i[1]},unformat:function(e){var r=n._.includes(e,"e+")?e.split("e+"):e.split("e-"),t=Number(r[0]),i=Number(r[1]);return i=n._.includes(e,"e-")?i*=-1:i,n._.reduce([t,Math.pow(10,i)],function(e,r,t,i){var o=n._.correctionFactor(e,r);return e*o*(r*o)/(o*o)},1)}}),n.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,t){var i=n.locales[n.options.currentLocale],o=n._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=i.ordinal(e),n._.numberToFormat(e,r,t)+o}}),n.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,t){var i,o=n._.includes(r," %")?" ":"";return n.options.scalePercentBy100&&(e*=100),r=r.replace(/\s?\%/,""),i=n._.numberToFormat(e,r,t),n._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(e){var r=n._.stringToNumber(e);return n.options.scalePercentBy100?.01*r:r}}),n.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),i=Math.floor((e-3600*n)/60),o=Math.round(e-3600*n-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?t+=3600*Number(r[0])+60*Number(r[1])+Number(r[2]):2===r.length&&(t+=60*Number(r[0])+Number(r[1])),Number(t)}}),n})?i.call(r,t,r,e):i)&&(e.exports=n)}}]);