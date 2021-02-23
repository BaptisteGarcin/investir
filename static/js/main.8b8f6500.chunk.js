(this.webpackJsonpinvestir=this.webpackJsonpinvestir||[]).push([[0],{109:function(e,n,r){var t=r(5),o=r(42),i=r(41),a=r(111)("yahoo-finance:yahooCrumb"),s=r(59),l=r(60),u=/^root.App.main = (\{.*\});$/m;function c(e){var n,r,t=u.exec(e);if(!t)throw new Error("Could not match root.App.main line.  If this happens consistently, Yahoo output has changed and you should open a bug report.");try{n=JSON.parse(t[1])}catch(a){throw console.error(a),new Error("root.App.main line (or regexp) did not capture valid JSON.  If this happens consistently, please open a bug report.")}if(!n.context)throw new Error("root.Api.main JSON structure has changed.  If this happens consistently, please open a bug report.");var o=n.context.dispatcher;if(!(r=o&&o.stores&&o.stores.CrumbStore&&o.stores.CrumbStore.crumb)){console.warn("root.Api.main context.dispatcher.stores.CrumbStore.crumb structure no longer exists, please open an issue.");var i=n.context.plugins;if(!(r=i&&i.ServicePlugin&&i.ServicePlugin.xhrContext&&i.ServicePlugin.xhrContext.crumb))throw new Error("root.Api.main context.plugins.ServicePlugin.xhrContext.crumbstructure no longer exists, please open an issue.")}return r}var m=null,d={resolveWithFullResponse:!0};n.getCrumb=function(e){if(m){var n=l.cookiejar.getCookies(s.HISTORICAL_CRUMB_URL);i.find(n,{key:"B"})||(a("No valid cookies, invalidating crumb"),m=null)}return m?(a("Returning cached crumb"),o.resolve(m)):(a("Fetching a new cookie & crumb"),function(e){var n=s.HISTORICAL_CRUMB_URL.replace(/\$SYMBOL/,e);return l.download(n,"",d).then((function(e){return m=c(e.body)})).catch((function(e){throw new Error(t.format("Failed to get crumb (%s)",e.message))}))}(e).then((function(e){return e})))},n.parseAndGetCrumb=c},195:function(e,n,r){var t=r(57),o=r(5),i=r(41),a=r(42),s=r(59),l=r(60),u=r(109).getCrumb,c=["summaryProfile","financialData","recommendationTrend","upgradeDowngradeHistory","earnings","price","summaryDetail","defaultKeyStatistics","calendarEvents"],m={summaryDetail:["exDividendDate"],calendarEvents:["exDividendDate","dividendDate"],upgradeDowngradeHistory:["history.epochGradeDate"],price:["preMarketTime","postMarketTime","regularMarketTime"],defaultKeyStatistics:["lastFiscalYearEnd","nextFiscalYearEnd","mostRecentQuarter","lastSplitDate"]};function d(e){if(!i.isPlainObject(e))throw new Error('"options" must be a plain object.');if(i.isUndefined(e.symbol)&&i.isUndefined(e.symbols))throw new Error('Either "options.symbol" or "options.symbols" must be defined.');if(!i.isUndefined(e.symbol)&&!i.isUndefined(e.symbols))throw new Error('Either "options.symbol" or "options.symbols" must be undefined.');if(i.isUndefined(e.symbol)){if(!i.isArray(e.symbols)||i.isEmpty(e.symbols))throw new Error('"options.symbols" must be a non-empty string array.')}else if(!i.isString(e.symbol)||i.isEmpty(e.symbol))throw new Error('"options.symbol" must be a non-empty string.');if(e.modules){if(!i.isArray(e.modules))throw new Error('"options.modules" must be a non-empty string array or undefined.')}else e.modules=["price","summaryDetail"];var n=i.difference(e.modules,c);if(n.length){var r=i.difference(c,e.modules);throw new Error("[yahoo-finance] quote(): The following requested modules do not exist: "+JSON.stringify(n)+".  Did you mean one of: "+JSON.stringify(r)+"?")}}function f(e){return i.each(i.keys(e),(function(n){i.each(m[n],(function(r){if(-1===r.indexOf("."))e[n][r]&&(e[n][r]=new Date(1e3*e[n][r]));else{var t=r.split("."),o=t[0],a=t[1];e[n][o]&&i.each(e[n][o],(function(e){e[a]&&(e[a]=new Date(1e3*e[a]))}))}}))})),e}n.__esModule=!0,n.default=function(e,n,r){i.isString(e)&&(e={symbol:e},i.isArray(n)&&(e.modules=n,n=void 0));var c=e.symbols||i.flatten([e.symbol]);return d(e=i.clone(e)),n&&"function"==typeof n?(r=n,n={}):n||(n={}),n.json=!0,u(c[0]).then((function(u){return a.map(c,(function(r){var t=s.SNAPSHOT_URL.replace(/\$SYMBOL/,r);return l.download(t,{formatted:"false",crumb:u,modules:e.modules.join(","),corsDomain:"finance.yahoo.com"},n).then((function(e){var n=e.quoteSummary;if(!n||n.error)throw new Error(n.error);e=n.result;if(!i.isArray(e)||e.length>1)throw new Error("quoteSummary format has changed, please report this.");return e[0]})).then(f)}),{concurrency:e.maxConcurrentSymbols||t.cpus().length}).then((function(n){return e.symbols?i.zipObject(c,n):n[0]})).catch((function(e){throw new Error(o.format("Failed to download data (%s)",e.message))})).nodeify(r)}))},n.dateFields=m,n._sanitizeQuoteOptions=d},197:function(e,n,r){e.exports=r(204)},202:function(e,n,r){},203:function(e,n,r){},204:function(e,n,r){n.historical=r(205),n.snapshot=r(445).default,n.quote=r(195).default},205:function(e,n,r){var t=r(57),o=r(5),i=r(41),a=(r(71),r(58)),s=r(42),l=r(59),u=r(60),c=r(109).getCrumb;e.exports=function(e,n,r){!function(e){if(!i.isPlainObject(e))throw new Error('"options" must be a plain object.');if(i.isUndefined(e.symbol)&&i.isUndefined(e.symbols))throw new Error('Either "options.symbol" or "options.symbols" must be defined.');if(!i.isUndefined(e.symbol)&&!i.isUndefined(e.symbols))throw new Error('Either "options.symbol" or "options.symbols" must be undefined.');if(!i.isUndefined(e.error)&&!i.isBoolean(e.error))throw new Error('"options.error" must be a boolean value');if(i.isUndefined(e.symbol)){if(!i.isArray(e.symbols)||i.isEmpty(e.symbols))throw new Error('"options.symbols" must be a non-empty string array.')}else if(!i.isString(e.symbol)||i.isEmpty(e.symbol))throw new Error('"options.symbol" must be a non-empty string.');if(i.isString(e.from)&&!i.isEmpty(e.from)){if(e.from=a(e.from),!e.from.isValid())throw new Error('"options.from" must be a valid date string.')}else{if(!i.isDate(e.from)&&!i.isUndefined(e.from)&&!i.isNull(e.from))throw new Error('"options.from" must be a date or undefined/null.');i.isDate(e.from)&&(e.from=a(e.from))}if(i.isString(e.to)&&!i.isEmpty(e.to)){if(e.to=a(e.to),!e.to.isValid())throw new Error('"options.to" must be a valid date string.')}else{if(!i.isDate(e.to)&&!i.isUndefined(e.to)&&!i.isNull(e.to))throw new Error('"options.to" must be a date or undefined/null.');i.isDate(e.to)&&(e.to=a(e.to))}if(i.isString(e.period)){if(!i.includes(["d","w","m","v"],e.period))throw new Error('"options.period" must be "d", "w", "m", or "v".')}else if(!i.isUndefined(e.period)&&!i.isNull(e.period))throw new Error('"options.period" must be a string or undefined/null.');switch(e.from||(e.from=a("1900-01-01")),e.to||(e.to=a({hour:0})),e.period||(e.period="1d"),e.events="history",e.period){case"d":e.period="1d";break;case"w":e.period="1wk";break;case"m":e.period="1mo";break;case"v":e.period="1d",e.events="div"}if((e.from||e.to)&&e.from.isAfter(e.to))throw new Error('"options.to" must be be greater than or equal to "options.from".')}(e=i.clone(e));var m=e.symbols||i.flatten([e.symbol]);return n&&"function"===typeof n&&(r=n,n=void 0),c(m[0]).then((function(c){return s.map(m,(function(r){var t=l.HISTORICAL_DOWNLOAD_URL.replace(/\$SYMBOL/,r);return u.download(t,{period1:e.from.format("X"),period2:e.to.format("X"),interval:e.period,events:e.events,crumb:c},n).then(u.parseCSV).then((function(e){return function(e,n){var r=n.shift();return i(n).reverse().map((function(n){var t={};return r.forEach((function(e,r){var o=n[r];i.includes(["Volume"],e)?o=u.toInt(o,null):i.includes(["Open","High","Low","Close","Adj Close","Dividends"],e)?o=u.toFloat(o,null):i.includes(["Date"],e)&&(o=u.toDate(o,null))&&!a(o).isValid()&&(o=null),t[u.camelize(e)]=o})),t.symbol=e,t})).value()}(r,e)})).catch((function(n){if(e.error)throw n;return[]}))}),{concurrency:e.maxConcurrentSymbols||t.cpus().length}).then((function(n){return e.symbols?i.zipObject(m,n):n[0]})).catch((function(e){throw new Error(o.format("Failed to download data (%s)",e.message))})).nodeify(r)}))}},238:function(e,n){},240:function(e,n){},249:function(e,n){},251:function(e,n){},276:function(e,n){},277:function(e,n){},282:function(e,n){},284:function(e,n){},291:function(e,n){},310:function(e,n){},349:function(e,n){},445:function(e,n,r){var t=r(57),o=r(5),i=r(41),a=(r(71),r(58),r(42)),s=r(59),l=r(446),u=r(60),c=r(109).getCrumb,m=r(195).dateFields,d="https://github.com/pilwon/node-yahoo-finance/blob/master/lib/snapshotFields.js#L111",f=i.filter(i.keys(l._map),(function(e){return!!l._map[e]})),p={};i.each(f,(function(e){p[e]=l._map[e].split(".")[0]}));var h=!1;function y(e){if(!i.isPlainObject(e))throw new Error('"options" must be a plain object.');if(i.isUndefined(e.symbol)&&i.isUndefined(e.symbols))throw new Error('Either "options.symbol" or "options.symbols" must be defined.');if(!i.isUndefined(e.symbol)&&!i.isUndefined(e.symbols))throw new Error('Either "options.symbol" or "options.symbols" must be undefined.');if(i.isUndefined(e.symbol)){if(!i.isArray(e.symbols)||i.isEmpty(e.symbols))throw new Error('"options.symbols" must be a non-empty string array.')}else if(!i.isString(e.symbol)||i.isEmpty(e.symbol))throw new Error('"options.symbol" must be a non-empty string.');if((!i.isArray(e.fields)||i.isEmpty(e.fields))&&!i.isUndefined(e.fields))throw new Error('"options.fields" must be a non-empty string array or undefined.');if(e.fields){var n=i.difference(e.fields,f);if(n.length)throw new Error("[yahoo-finance] snapshot(): The following fields are no longer available in Yahoo's new API: "+JSON.stringify(n)+".  See if you can find something similar in the new quote() API, otherwise unfortunately, you are out of luck.  Yahoo ended support for their developer API some time ago and made no guarantees to maintain that API.  You may want to also check our mapping function at "+d);h||(console.warn("[yahoo-finance] snapshot() has been deprecated.  The Yahoo Finance API has fundamentally changed recently.  We will attempt to map the requested fields from the new API according to "+d+".  Please double check this map and your results to ensure consistency.  This warning will only be shown once."),h=!0)}else{if(!e.ignoreAllFieldsWarning)throw new Error("[yahoo-finance] snapshot(): No `fields` property was given.  This used to return all fields available, but not all these fields are available in Yahoo's new API.  We suggest you update your code to use the new quote() API instead.  However, you can simply specify the exact fields you need, and they'll be fetched if available.  Alternative, pass { ignoreAllFieldsWarning: true } and all available fields (from the new API) will be returned.  You can see the full list of available mappings at "+d);e.fields=f}e.modules=function(e){var n=[];return i.each(e,(function(e){var r=p[e];-1===n.indexOf(r)&&n.push(r)})),n}(e.fields)}n.__esModule=!0,n.default=function(e,n,r){var d=e.symbols||i.flatten([e.symbol]);return y(e=i.clone(e)),n&&"function"==typeof n?(r=n,n={}):n||(n={}),n.json=!0,c(d[0]).then((function(c){return a.map(d,(function(r){var t=s.SNAPSHOT_URL.replace(/\$SYMBOL/,r);return u.download(t,{formatted:"false",crumb:c,modules:e.modules.join(","),corsDomain:"finance.yahoo.com"},n).then((function(n){return function(e,n,r){var t=r.quoteSummary;if(!t||t.error)throw new Error(t.error);var o=t.result;if(!i.isArray(o)||o.length>1)throw new Error("quoteSummary format has changed, please report this.");o=o[0];var a={};return i.each(e,(function(e){if(l._map[e].indexOf(",")>0){var n=a[u.camelize(l[e])]=[];i.map(l._map[e].split(","),(function(e){e=e.split("."),n.push(o[e[0]][e[1]])}))}else{var r=l._map[e].split("."),t=o[r[0]][r[1]];m[r[0]]&&-1!==m[r[0]].indexOf(r[1])&&(t=new Date(1e3*t)),a[u.camelize(l[e])]=t}})),a}(e.fields,0,n)}))}),{concurrency:e.maxConcurrentSymbols||t.cpus().length}).then((function(n){return e.symbols?i.zipObject(d,n):n[0]})).catch((function(e){throw new Error(o.format("Failed to download data (%s)",e.message))})).nodeify(r)}))},n.mappedFields=f},446:function(e,n){e.exports={s:"Symbol",a:"Ask",b:"Bid",b2:"Ask (Realtime)",b3:"Bid (Realtime)",p:"Previous Close",o:"Open",y:"Dividend Yield",d:"Dividend Per Share",r1:"Dividend Pay Date",q:"Ex-Dividend Date",c1:"Change",c:"Change And Percent Change",c6:"Change (Realtime)",k2:"Change Percent (Realtime)",p2:"Change in Percent",d1:"Last Trade Date",d2:"Trade Date",t1:"Last Trade Time",c8:"After Hours Change (Realtime)",c3:"Commission",g:"Day\u2019s Low",h:"Day\u2019s High",k1:"Last Trade (Realtime) With Time",l:"Last Trade (With Time)",l1:"Last Trade (Price Only)",t8:"1 yr Target Price",m5:"Change From 200-day Moving Average",m6:"Percent Change From 200-day Moving Average",m7:"Change From 50-day Moving Average",m8:"Percent Change From 50-day Moving Average",m3:"50-day Moving Average",m4:"200-day Moving Average",w1:"Day\u2019s Value Change",w4:"Day\u2019s Value Change (Realtime)",p1:"Price Paid",m:"Day\u2019s Range",m2:"Day\u2019s Range (Realtime)",g1:"Holdings Gain Percent",g3:"Annualized Gain",g4:"Holdings Gain",g5:"Holdings Gain Percent (Realtime)",g6:"Holdings Gain (Realtime)",k:"52-week High",j:"52-week Low",j5:"Change From 52-week Low",k4:"Change From 52-week High",j6:"Percent Change From 52-week Low",k5:"Percebt Change From 52-week High",w:"52-week Range",i:"More Info",j1:"Market Capitalization",j3:"Market Cap (Realtime)",f6:"Float Shares",n:"Name",n4:"Notes",s1:"Shares Owned",x:"Stock Exchange",j2:"Shares Outstanding",v:"Volume",a5:"Ask Size",b6:"Bid Size",k3:"Last Trade Size",a2:"Average Daily Volume",e:"Earnings Per Share",e7:"EPS Estimate Current Year",e8:"EPS Estimate Next Year",e9:"EPS Estimate Next Quarter",b4:"Book Value",j4:"EBITDA",p5:"Price per Sales",p6:"Price per Book",r:"PE Ratio",r2:"PE Ratio (Realtime)",r5:"PEG Ratio",r6:"Price Per EPS Estimate Current Year",r7:"Price Per EPS Estimate Next Year",s7:"Short Ratio",t7:"Ticker Trend",t6:"Trade Links",i5:"Order Book (Realtime)",l2:"High Limit",l3:"Low Limit",v1:"Holdings Value",v7:"Holdings Value (Realtime)",s6:"Revenue",e1:"Error Indication (returned for symbol changed or invalid)",_map:{s:"price.symbol",a:"summaryDetail.ask",b:"summaryDetail.bid",b2:"summaryDetail.ask",b3:"summaryDetail.bid",p:"summaryDetail.previousClose",o:"summaryDetail.open",y:"summaryDetail.dividendYield",d:null,r1:null,q:"summaryDetail.exDividendDate",c1:"price.regularMarketChange",c:"price.regularMarketChange,price.regularMarketChangePercent",c6:"price.postMarketChange",k2:"price.postMarketChange",p2:"price.regularMarketChangePercent",d1:null,d2:null,t1:null,c8:null,c3:null,g:"summaryDetail.dayLow",h:"summaryDetail.dayHigh",k1:null,l:null,l1:null,t8:null,m5:null,m6:null,m7:null,m8:null,m3:"summaryDetail.fiftyDayAverage",m4:"summaryDetail.twoHundredDayAverage",w1:null,w4:null,p1:null,m:null,m2:null,g1:null,g3:null,g4:null,g5:null,g6:null,k:"summaryDetail.fiftyTwoWeekHigh",j:"summaryDetail.fiftyTwoWeekLow",j5:null,k4:null,j6:null,k5:null,w:null,i:null,j1:null,j3:null,f6:null,n:"price.longName",n4:null,s1:null,x:"price.exchange",j2:null,v:"summaryDetail.volume",a5:"summaryDetail.askSize",b6:"summaryDetail.bidSize",k3:null,a2:"summaryDetail.averageDailyVolume10Day",e:"defaultKeyStatistics.forwardEps",e7:null,e8:null,e9:null,b4:"defaultKeyStatistics.bookValue",j4:"financialData.ebitda",p5:null,p6:null,r:"summaryDetail.trailingPE",r2:"summaryDetail.forwardPE",r5:"defaultKeyStatistics.pegRatio",r6:null,r7:null,s7:"defaultKeyStatistics.shortRatio",t7:null,t6:null,i5:null,l2:null,l3:null,v1:null,v7:null,s6:null,e1:null}}},448:function(e,n,r){"use strict";r.r(n);var t=r(21),o=r.n(t),i=r(196),a=r.n(i),s=(r(202),r(110)),l=(r(203),r(197)),u=r.n(l),c=r(22),m=function(){var e=Object(t.useRef)(!0),n=Object(t.useState)(""),r=Object(s.a)(n,2),o=r[0],i=r[1],a=Object(t.useState)(),l=Object(s.a)(a,2),m=l[0],d=l[1],f=function(e,n){return(n-e)/e*100};return Object(t.useEffect)((function(){e.current?e.current=!1:u.a.quote({symbol:"".concat(o,".PA"),modules:["price","earnings"]},(function(e,n){if(n){console.log(n.earnings.financialsChart.yearly);var r=n.earnings.financialsChart.yearly.map((function(e,r){return 0===r?{annee:e.date,chiffre_affaires:e.revenue,benefice_net:e.earnings,pctChange:0}:{annee:e.date,chiffre_affaires:e.revenue,chiffre_affaires_pctChange:f(n.earnings.financialsChart.yearly[r-1].revenue,e.revenue),benefice_net:e.earnings,benefice_net_pctChange:f(n.earnings.financialsChart.yearly[r-1].earnings,e.earnings)}}));d(JSON.stringify(r,null,2))}return e})).catch((function(){}))}),[o]),Object(c.jsx)("div",{style:{margin:"20px"},children:Object(c.jsxs)("header",{children:[Object(c.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},value:o}),Object(c.jsx)("pre",{children:m})]})})},d=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,449)).then((function(n){var r=n.getCLS,t=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;r(e),t(e),o(e),i(e),a(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),d()},59:function(e,n){n.HISTORICAL_CRUMB_URL="https://cors.bridged.cc/https://finance.yahoo.com/quote/$SYMBOL/history",n.HISTORICAL_DOWNLOAD_URL="https://cors.bridged.cc/https://query1.finance.yahoo.com/v7/finance/download/$SYMBOL",n.SNAPSHOT_URL="https://cors.bridged.cc/https://query2.finance.yahoo.com/v10/finance/quoteSummary/$SYMBOL"},60:function(e,n,r){var t=r(16),o=(r(5),r(41)),i=r(71),a=r(111)("yahoo-finance:utils"),s=r(217),l=r(442),u=r(76).Cookie,c=["YYYY-MM-DD","MM/DD/YYYY"],m=new s.jar;n.cookiejar=m,n.camelize=function(e){return i(e).slugify().camelize().s},n.download=function(e,n,r){var i=function(e){if(e&&e.jar)throw new Error("node-yahoo-finance does not support 'jar' key in optionalHttpRequestOptions, since we need to use our own cookiejar.");return o.assign({},e,{resolveWithFullResponse:!0,jar:m})}(r);return a(t.format({pathname:e,query:n})),s(o.extend({uri:e,qs:n},i)).then((function(n){return function(e,n,r){var t;if("undefined"===typeof e||(e instanceof Array?t=e.map(u.parse):"string"===typeof e&&(t=[u.parse(e)])),t)for(var o=0;o<t.length;o++)r.setCookie(""+t[o],n)}(n.headers["set-cookie"],e,m),r&&r.resolveWithFullResponse?n:n.body}))},n.parseCSV=function(e){return i(e).trim().s.split("\n").map((function(e){return i(e).trim().parseCSV()}))},n.toDate=function(e,n){try{var r=l.tz(e,c,"America/New_York").toDate();return r.getFullYear()<1400?null:r}catch(t){return o.isUndefined(n)?null:n}},n.toFloat=function(e,n){var r=parseFloat(e);return isNaN(r)?o.isUndefined(n)?null:n:r},n.toInt=function(e,n){var r=parseInt(e,10);return isNaN(r)?o.isUndefined(n)?null:n:r}}},[[448,1,2]]]);
//# sourceMappingURL=main.8b8f6500.chunk.js.map