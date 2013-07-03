/**
 * almond 0.2.4 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

var requirejs,require,define;(function(e){function c(e,t){return f.call(e,t)}function h(e,t){var n,r,i,s,o,a,f,l,c,h,p=t&&t.split("/"),d=u.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(l=0;l<e.length;l+=1){h=e[l];if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))break;l>0&&(e.splice(l-1,2),l-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(l=n.length;l>0;l-=1){r=n.slice(0,l).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=l;break}}}if(s)break;!a&&v&&v[r]&&(a=v[r],f=l)}!s&&a&&(s=a,o=f),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function p(t,r){return function(){return n.apply(e,l.call(arguments,0).concat([t,r]))}}function d(e){return function(t){return h(t,e)}}function v(e){return function(t){s[e]=t}}function m(n){if(c(o,n)){var r=o[n];delete o[n],a[n]=!0,t.apply(e,r)}if(!c(s,n)&&!c(a,n))throw new Error("No "+n);return s[n]}function g(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function y(e){return function(){return u&&u.config&&u.config[e]||{}}}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice;r=function(e,t){var n,r=g(e),i=r[0];return e=r[1],i&&(i=h(i,t),n=m(i),e||(e=t)),i?n&&n.normalize?e=n.normalize(e,d(t)):e=h(e,t):(e=h(e,t),r=g(e),i=r[0],e=r[1],i&&(n=m(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},i={require:function(e){return p(e)},exports:function(e){var t=s[e];return typeof t!="undefined"?t:s[e]={}},module:function(e){return{id:e,uri:"",exports:s[e],config:y(e)}}},t=function(t,n,u,f){var l,h,d,g,y,b=[],w;f=f||t;if(typeof u=="function"){n=!n.length&&u.length?["require","exports","module"]:n;for(y=0;y<n.length;y+=1){g=r(n[y],f),h=g.f;if(h==="require")b[y]=i.require(t);else if(h==="exports")b[y]=i.exports(t),w=!0;else if(h==="module")l=b[y]=i.module(t);else if(c(s,h)||c(o,h)||c(a,h))b[y]=m(h);else{if(!g.p)throw new Error(t+" missing "+h);g.p.load(g.n,p(f,!0),v(h),{}),b[y]=s[h]}}d=u.apply(s[t],b);if(t)if(l&&l.exports!==e&&l.exports!==s[t])s[t]=l.exports;else if(d!==e||!w)s[t]=d}else t&&(s[t]=u)},requirejs=require=n=function(s,o,a,f,l){return typeof s=="string"?i[s]?i[s](o):m(r(s,o).f):(s.splice||(u=s,o.splice?(s=o,o=a,a=null):s=e),o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)},4),n)},n.config=function(e){return u=e,n},define=function(e,t,n){t.splice||(n=t,t=[]),!c(s,e)&&!c(o,e)&&(o[e]=[e,t,n])},define.amd={jQuery:!0}})(),define("../vendor/cell/src/almond",function(){}),define("cell/util/type",{isA:Array.isArray||function(e){return e instanceof Array},isS:function(e){return typeof e=="string"},isF:function(e){return typeof e=="function"}}),define("cell/util/ev",{rm:function(e,t,n){var r,i,s;i=-1,s=typeof n=="number";while(r=e[++i])(s?r[n]===t:r[0]===t&&r[1]===n)&&e.splice(i--,1)}}),define("cell/util/extend",[],function(){var e,t;return e="constructor",t="prototype",function(n){var r,i,s,o,u,a,f;s=this,r=function(){return this instanceof r?((u||s).apply(this,arguments),this):r.apply(new i,arguments)},r.extend=s.extend,o=function(){},o[t]=s[t],i=function(){},a=i[t]=r[t]=new o;if(n){n.hasOwnProperty(e)&&(u=n[e]);for(f in n)a[f]=n[f];u&&(a[e]=u)}return r}}),define("cell/util/hash",[],function(){var e;return e=0,function(t){var n;return(n=typeof t)==="object"&&t!==null?t.$$hashkey||(t.$$hashkey=""+ ++e):n+":"+t}}),define("cell/util/fn",{b:function(e,t){return function(){return e.apply(t,arguments)}},b0:function(e,t){return function(){return e.call(t)}},b1:function(e,t){return function(n){return e.call(t,n)}},b2:function(e,t){return function(n,r){return e.call(t,n,r)}}}),define("cell/dom/browser",{msie:+(/msie (\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1]}),define("cell/util/defer",["cell/dom/browser"],function(e){var t,n,r;return window.setImmediate?setImmediate:e.msie<9?setTimeout:(t=0,r={},n=function(e){r[e=e.data]&&(r[e](),delete r[e])},window.attachEvent?attachEvent("onmessage",n):window.addEventListener("message",n),function(e){var n;r[n=t++]=e,postMessage(n,"*")})}),define("cell/util/spy",["cell/util/hash","cell/util/fn","cell/util/type","cell/util/defer"],function(e,t,n,r){var i,s,o,u,a,f,l,c,h,p;return u=[],f=!1,l=c=void 0,s={},h={},p=function(){var e,t;f=!1,e=s,s={};for(t in e)o(e[t])},a=function(){s[this.$$hashkey||e(this)]=this,this.scope.imm?o(this):f||(f=!0,r(p))},i=function(e){this.imm=e,this.sig="",this.log={},this.col={}},{_eam:o=function(e){var t,n,r,s,o;s=c,l=e.scope,c=new i(l.imm),o=e.e();if(c.sig!==l.sig){r=l.log,n=c.log;for(t in c.col)n["add"+t]={o:c.col[t],e:"add"},n["remove"+t]={o:c.col[t],e:"remove"};for(t in n)r[t]?delete r[t]:n[t].o.on(n[t].e,a,e);for(t in r)r[t].o.off(r[t].e,void 0,e);e.scope=c}c=s,e.f(o)},addResStatus:function(){var e;c&&!c.log[e="status"+this.$$hashkey]&&(c.sig+=e,c.log[e]={o:this,e:e})},addParent:function(e){var t;c&&!c.log[t="parent"+e.$$hashkey]&&(c.sig+=t,c.log[t]={o:e,e:t})},addCol:function(){var e;c&&!c.col[e=this.$$hashkey]&&(c.sig+=e,c.col[e]=this)},addModel:function(e){var t,n,r;c&&(t=e+((r=this.parent())&&c.col[n=r.$$hashkey]?n:(r=this).$$hashkey),c.log[t]||(c.sig+=t,c.log[t]={o:r,e:e}))},suspendWatch:function(e){var t;t=c,c=void 0;try{e()}catch(n){}c=t},unwatch:function(t){var n,r,i;if(i=h[t=e(t)]){delete h[t],r=0;while(n=i[r++])for(t in n.scope.log)n.scope.log[t].o.off(void 0,void 0,n)}},watch:function(r,s,u,a,f){var l,c;a||(a=r);if(!!n.isF(s))return(h[c=e(r)]||(h[c]=[])).push(l={e:t.b0(s,r),f:t.b1(u,a),scope:new i(f)}),o(l),l;u.call(a,s)}}});var __slice=[].slice;define("cell/Events",["cell/util/ev","cell/util/extend","cell/util/hash","cell/util/spy","cell/util/type"],function(e,t,n,r,i){var s,o;return o=function(e,t,n){var r;while(r=e.pop())r[0].apply(r[1],[t].concat(n))},s=function(){n(this),this._e={all:[]}},s.extend=t,s.prototype={constructor:s,on:function(e,t,n){var r;if(this._e&&i.isS(e)&&i.isF(t))return((r=this._e)[e]||(r[e]=[])).push([t,n]),!0},off:function(t,n,r){var i,s;if(this._e){s=t!=null?{type:this._e[t]}:this._e;if(n!=null)r==null&&(r=0);else{if(r==null)return;n=r,r=1}for(t in s)(i=s[t])&&e.rm(i,n,r)}},parent:function(){return r.addParent(this),this._parent},_setParent:function(e){this._parent!==e&&(this._parent=e,this.trigger("parent"+this.$$hashkey))},trigger:function(){var e,t,n;t=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[],this._e&&(o(this._e.all.concat(this._e[t]||[]),t,e),(n=this._parent)&&n.trigger.apply(n,[t].concat(e)))},destroy:function(){var e;if(e=this._e)delete this._e,o(e.all.concat(e.destroy||[]),"destroy",this)}},s}),define("cell/Model",["cell/util/type","cell/Events","cell/util/spy"],function(e,t,n){var r;return r=t.extend({constructor:function(e){var n,r,i;this._a=e!=null?e:{},t.call(this),i=this._a;for(n in i)r=i[n],r instanceof t&&r._setParent(this)},attributes:function(){var e,t;this._s("all"),t={};for(e in this._a)t[e]=this._a[e];return t},get:function(e){return this._s("change:"+e),this._a[e]},set:function(n,r){var i;i=this._a[n];if(e.isS(n)&&i!==r)return i instanceof t&&i._setParent(void 0),r instanceof t&&r._setParent(this),this.trigger("change:"+n,this,this._a[n]=r,i),!0},destroy:function(){var e;t.prototype.destroy.call(this),this._parent&&(e=this._parent)!=null&&typeof e.remove=="function"&&e.remove([this]),delete this._a,this.destroy=this.attributes=this.get=this.set=function(){}},_s:n.addModel}),r}),define("cell/Collection",["cell/Events","cell/util/type","cell/Model","cell/util/spy"],function(e,t,n,r){var i,s;return s=function(e,t,n){return Function.call(void 0,"f","c","d","if(this._i){this._s();if(f==null)return;"+("var i=-1,t=this,l=t.length(),e"+(t||"")+";")+"while(++i<l){"+"e=t._i[i];"+e+("}"+(n||"")+"}"))},i=e.extend({constructor:function(t){e.call(this),this._i=[],this.add(t)},Model:n,at:function(e){if(this._i)return this._s(),this._i[e]},length:function(){if(this._i)return this._s(),this._i.length},indexOf:Array.prototype.indexOf?function(e){if(this._i)return this._s(),this._i.indexOf(e)}:s("if(e===f){return i}","","return -1"),toArray:function(){if(this._i)return this._s(),this._i.slice()},each:s("if(f.call(c,e,i,t)===!1)i=l"),map:s("r.push(f.call(c,e,i,t))",",r=[]","return r"),reduce:s("f=c.call(d,f,e,i,t)","","return f"),filterBy:s('for(k in f)if((v=f[k])==null||v===(x=e.get(k))||(typeof v=="function"&&v(x)))r.push(e)',",k,v,x,r=[]","return r"),pipe:function(e){var n,r,s,o;if(this._i){n=this;for(s=0,o=e.length;s<o;s++)r=e[s],t.isA(n=r.run(n))&&(n=new i(n));return n}},add:function(e,n){var r,i;if(this._i&&e){e=t.isA(e)?e.slice():[e],r=-1,i=e.length,n==null&&(n=this.length());while(++r<i)this._i.splice(n++,0,e[r]=this._toM(e[r]));this.trigger("add",e,this,n-i)}},remove:function(e){var n,r,i,s,o,u;if(this._i&&e){t.isA(e)||(e=[e]),n=-1,s=e.length,u=[],i=[];while(++n<s)o=e[n],(r=this.indexOf(o))>-1&&(o._setParent(void 0),u.push(o),i.push(r),this._i.splice(r,1));i.length&&this.trigger("remove",u,this,i)}},destroy:function(){this._i&&(e.prototype.destroy.call(this),delete this._i)},_toM:function(e){return e=e instanceof this.Model?e:new this.Model(e),e._setParent(this),e},_s:r.addCol})}),define("cell/util/http",[],function(){var e,t,n;return t=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"],e=/^file:\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,n=function(t,r){var i,s,o,u,a,f;i=function(n,i){return e.test(t.url)?n=i?200:404:n===1223&&(n=204),r(n,i,200<=n&&n<300)},a=new n.XHR,a.open(t.method,t.url,!0),f=t.headers;for(s in f)u=f[s],u&&a.setRequestHeader(s,u);o=void 0,a.onreadystatechange=function(){if(a.readyState===4)return i(o||a.status,a.responseType?a.response:a.responseText)},t.withCredentials&&(a.withCredentials=!0),t.responseType&&(a.responseType=t.responseType),a.send(t.data||"");if(t.timeout>0)return setTimeout(function(){return o=-1,a.abort()},t.timeout)},n.XHR=window.XMLHttpRequest||function(){var e,t,n;t=function(){return new ActiveXObject(e)},n=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"];while(e=n.pop())try{return t(),t}catch(r){}throw new Error("XMLHttpRequest not supported")}(),n}),define("cell/Resource",["cell/Model","cell/Collection","cell/util/http","cell/util/extend","cell/util/spy","cell/util/type"],function(e,t,n,r,i,s){var o,u,a,f,l,c;return l=function(e){return e},a=function(n){var r,i,s;this.url=n.url,this._params=n.params,i=n.model,r=n.collection,s=n.transform,this.transform=s||l,this.Model=(i||e).extend(u),this.Collection=(r||t).extend(o(this.Model))},a.extend=r,a.prototype.parseModelResponse=function(e,t){var n,r,i;n=JSON.parse(e),n=this.transform(n);for(r in n)i=n[r],t.set(r,i)},a.prototype.parseCollectionResponse=function(e,t){var n,r;t.remove(t.toArray()),n=JSON.parse(e),t.add(function(){var e,t,i;i=[];for(e=0,t=n.length;e<t;e++)r=n[e],i.push(this.transform(r));return i}.call(this))},a.prototype.defaultParams=function(e){var t;for(t in this._params)e[t]==null&&(e[t]=this._params[t])},a.prototype.create=function(e){return new this.Model(this,e,!0)},a.prototype.get=function(e,t,r){var i,s=this;return i=new this.Model(this,void 0,!1),n({method:"GET",url:this.genUrl(e,!1)},function(e,n,o){o?(s.parseModelResponse(n,i),i._setStatus("ok"),typeof t=="function"&&t()):(i._setStatus("error"),typeof r=="function"&&r())}),i},a.prototype.query=function(e,t,r,i){var s=this;return i==null&&(i=new this.Collection(this)),n({method:"GET",url:this.genUrl(e,!1)},function(e,n,o){o?(s.parseCollectionResponse(n,i),i._setStatus("ok"),typeof t=="function"&&t()):(i._setStatus("error"),typeof r=="function"&&r())}),i},a.prototype.genUrl=function(e){var t,n,r,i,s;r={};for(n in e)r[n]=e[n];this.defaultParams(r),i=(i=this.url).replace(/{([A-z0-9]+)}/g,function(e,t,n){var i;return i=r[t],delete r[t],encodeURIComponent(i)}),t="?";for(n in r){s=r[n];if(!s)continue;i+=""+t+encodeURIComponent(n)+"="+encodeURIComponent(s),t="&"}return i},f=function(){return i.addResStatus.call(this),this._status},c=function(e){this.trigger("status"+this.$$hashkey,this,this._status=e)},u={constructor:function(t,n,r){this._res=t,e.call(this,n),this._status=r?"new":"loading"},_setStatus:c,status:f,$delete:function(e,t,r){var i=this;this._status!=="new"&&(n({method:"DELETE",url:this._res.genUrl(e,!1)},function(e,n,s){s?(i._setStatus("deleted"),i.destroy(),typeof t=="function"&&t()):(i._setStatus("error"),typeof r=="function"&&r())}),this._setStatus("deleting"))},$save:function(e,t,r){var i=this;n({method:this._status==="new"?"POST":"PUT",url:this._res.genUrl(e,!1),data:JSON.stringify(this._a),headers:{"Content-Type":"application/json"}},function(e,n,s){s?(i._res.parseModelResponse(n,i),i._setStatus("ok"),typeof t=="function"&&t()):(i._setStatus("error"),typeof r=="function"&&r())}),this._setStatus("saving")}},o=function(e){return{constructor:function(e){this._res=e,t.call(this),this._status="loading"},Model:e,_setStatus:c,status:f,requery:function(e){return this._res.query(e,void 0,void 0,this),this},_toM:function(e){return e=e instanceof this.Model?e:new this.Model(this._res,e,!1),e._setParent(this),e}}},a}),define("resources/Polls",["require","cell/Resource","cell/Collection"],function(e){var t,n;return n=e("cell/Resource"),t=e("cell/Collection"),new n({url:"https://api.mongolab.com/api/1/databases/testpeterwmwong/collections/polls/{id}?apiKey=4cIC7N8HM4TTAeOHVNrR3CstB1eGJQ7z",params:{id:""},transform:function(e){return e.choices=new t(e.choices),e}})}),define("cell/defineView",["cell/View"],function(e){var t;return t=window.__installedViews||{},{pluginBuilder:"cell/defineView-builder-plugin",load:function(n,r,i,s){var o;t[n]||(t[n]=!0,o=document.createElement("link"),o.href=r.toUrl(n+".css"),o.rel="stylesheet",o.type="text/css",(document.head||document.getElementsByTagName("head")[0]).appendChild(o)),i(function(t){return t||(t={}),t.className=t._cellName=/(.*\/)?(.*)$/.exec(n)[2],e.extend(t)})}}}),define("cell/Ext",["cell/util/extend","cell/util/spy"],function(e,t){var n;return n=function(e){this.options=e!=null?e:{}},n.prototype.watch=function(e,n){t.watch(this.view,e,n,this)},n.prototype.run=function(e,t){this.el=e,this.view=t,this.render()},n.extend=e,n}),define("cell/dom/data",[],function(){var e,t,n;return n=1,e={},t="dom-"+(new Date).getTime(),{get:function(r,i){var s,o,u;u=i==null,(s=r[t])?o=e[s]:u&&(e[r[t]=n++]=o={});if(o)return u?o:o[i]},set:function(r,i,s){var o,u;(o=r[t])?e[o][i]=s:(e[r[t]=n++]=u={},u[i]=s)},remove:function(n,r){var i,s;if((i=n[t])&&(s=e[i]))if(r!=null)delete s[r];else{delete e[i];if((r=s.cellRef)&&r.destroy)try{r.destroy()}catch(o){}if((r=s.handle)&&r.destroy)try{r.destroy()}catch(o){}n[t]=void 0}}}}),define("cell/dom/events",["cell/util/ev","cell/dom/browser","cell/dom/data"],function(e,t,n){var r,i,s,o,u,a;return i=window.document.addEventListener?function(e,t,n){e.addEventListener(t,n,!1)}:function(e,t,n){e.attachEvent("on"+t,n)},a=window.document.removeEventListener?function(e,t,n){e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent("on"+t,n)},o=function(){r(this.elem,this.events)},s=function(e,n){var r;return r=function(r,i){var s,o,u,a,f;r.preventDefault||(r.preventDefault=function(){r.returnValue=!1}),r.stopPropagation||(r.stopPropagation=function(){r.cancelBubble=!0}),r.target||(r.target=r.srcElement||document),r.defaultPrevented==null&&(u=r.preventDefault,r.preventDefault=function(){r.defaultPrevented=!0,u.call(r)},r.defaultPrevented=!1),r.isDefaultPrevented=function(){return r.defaultPrevented};if(s=n[i||r.type])for(a=0,f=s.length;a<f;a++)o=s[a],o[0].call(o[1]||e,r);t.msie<=8?(r.preventDefault=null,r.stopPropagation=null,r.isDefaultPrevented=null):(delete r.preventDefault,delete r.stopPropagation,delete r.isDefaultPrevented)},r.elem=e,r.events=n,r.destroy=o,r},r=function(e,t){var n;for(n in t)a(e,n,t[n]),delete t[n]},{on:u=function(e,t,r,o){var a,f,l,c;(l=n.get(e,"events"))||n.set(e,"events",l={}),(c=n.get(e,"handle"))||n.set(e,"handle",c=s(e,l)),(f=l[t])||(t==="mouseenter"||t==="mouseleave"?(a=0,l.mouseenter=[],l.mouseleave=[],u(e,"mouseover",function(e){a++;if(a===1)return c(e,"mouseenter")}),u(e,"mouseout",function(e){a--;if(a===0)return c(e,"mouseleave")})):(i(e,t,c),l[t]=[]),f=l[t]),f.push([r,o])},off:function(t,i,s){var o;if(o=n.get(t,"events"))i!=null?s!=null?e.rm(o[i],s,0):(a(t,i,o[i]),delete o[i]):r(t,o)}}}),define("cell/dom/mutate",["cell/dom/data","cell/dom/browser"],function(e,t){var n,r;return r=t.msie<9?function(){var e,t,n,r;r=[];for(t=0,n=this.length;t<n;t++)e=this[t],r.push(e);return r}:Array.prototype.slice,n=function(t){var i,s,o;if(t.nodeType!==3){e.remove(t),i=r.call(t.children),o=i.length,s=-1;while(++s<o)n(i[s])}},{remove:function(e){var t;n(e),(t=e.parentNode)&&t.removeChild(e)}}}),define("cell/View",["cell/Collection","cell/Ext","cell/Model","cell/util/spy","cell/dom/data","cell/dom/events","cell/dom/mutate","cell/util/fn","cell/util/hash","cell/util/type"],function(e,t,n,r,i,s,o,u,a,f){var l,c,h,p,d,v,m,g,y,b,w,E,S;return w=r.watch,b=r.unwatch,y=r.suspendWatch,m="prototype",v=function(){},d=document,g=function(e){var t,n,r;t=0,n=e.length;while(t<n)r=e[t++],f.isA(r)?g(r):o.remove(r)},h=function(){this.h={}},h[m]={push:function(e,t){var n;((n=this.h)[e]||(n[e]=[])).push(t)},shift:function(e){var t;if(t=this.h[e])return t.lengh===1?(delete this.h[e],t[0]):t.shift()}},l=function(e,t,n){this.view=e,this.expr=t,this.renderer=n,this.hq=new h,this.parent=void 0},l[m].install=function(t){var n;this.parent=t,this.expr instanceof e?(n=this.expr,this.view.watch(function(){return n.toArray()},function(){c.call(this,this.expr)},this)):this.view.watch(this.expr,c,this)},c=function(t){var n,r,i,s,o,u;n=t instanceof e?t.toArray():t||[],u=new h,r=-1,o=n.length;while(++r<o)i=n[r],s=a(i),u.push(s,this.view._rcs(this.hq.shift(s)||this.renderer.call(this.view,i,r,t),this.parent));for(s in this.hq.h)g(this.hq.h[s]);this.hq=u},S=function(e,t){if(e)return new l(this.view,e,t)},E=function(e,n){var r,i,o,u,a,l,c,h,v,g,b,w=this;r=[].slice.call(arguments,1),u=-1,l=r.length;while(++u<l)if(!(r[u]instanceof t))break;o=r.splice(0,u),v=r.length&&r[0]&&r[0].constructor===Object?r.shift():{};if(f.isS(e)){if(c=/^(\w+)?(#([\w\-]+))?(\.[\w\.\-]+)?$/.exec(e)){g=d.createElement(c[1]||"div"),c[3]&&g.setAttribute("id",c[3]),c[4]&&(i=c[4].slice(1).replace(/\./g," "),v["class"]=v["class"]?i+(" "+v["class"]):i);for(a in v)b=v[a],(h=/^on(\w+)/.exec(a))?s.on(g,h[1],b,this):this.watch(b,function(e){this.k==="innerHTML"?g.innerHTML=e:g.setAttribute(this.k,e)},{k:a})}}else e&&e[m]instanceof p&&y(function(){var t,n;t={};for(a in v){b=v[a];if(!(h=/^on(\w+)/.exec(a)))continue;delete v[a],t[h[1]]=b}n=new e(v);for(a in t)b=t[a],n.on(a,b,w);return g=n.el});if(g){this._rcs(r,g),u=o.length;while(u--)o[u].run(g,this);return g}},p=n.extend({constructor:function(e){var t,r,s,o;n.call(this),o=this,o.options=e?(o.model=e.model,o.collection=e.collection,delete e.model,delete e.collection,e):{},o._=u.b(E,this),o._.view=this,o._.map=S,o.beforeRender(),o.el=s=o.renderEl(o._),t=o._cellName,s.className=(r=s.className)?r+" "+t:t,i.set(s,"cellRef",o),s.setAttribute("cell",t),o._rcs(o.render(o._),s),o.afterRender()},beforeRender:v,renderEl:function(){return d.createElement("div")},render:v,afterRender:v,watch:function(e,t,n){w(this,e,t,n)},destroy:function(){this.el&&(n[m].destroy.call(this),b(this),o.remove(this.el),delete this.el)},_rc:function(e,t,n,r){var i,s;e instanceof l?e.install(t):f.isF(e)?(i=[],this.watch(e,function(e){var n;if(e==null||e.length===0)e=[d.createTextNode("")];n=i.slice(),i.length=0,this._rcs(e,t,n[0],i),g(n)}),r.push(i)):(s=e.nodeType)===1||s===3?r.push(t.insertBefore(e,n)):f.isA(e)?this._rcs(e,t,n,r):r.push(t.insertBefore(d.createTextNode(e),n))},_rcs:function(e,t,n,r){var i,s,o;n==null&&(n=null),r==null&&(r=[]),f.isA(e)||(e=[e]);for(s=0,o=e.length;s<o;s++)i=e[s],i!=null&&this._rc(i,t,n,r);return r}})}),define("views/Polls",["require","resources/Polls","cell/defineView!"],function(e){var t;return t=e("resources/Polls"),e("cell/defineView!")({beforeRender:function(){return this.polls=t.query()},render:function(e){return[e("h1","Polls"),e(".content",e.map(this.polls,function(t){return e("a.title",{href:"#/"+t.get("_id").$oid},t.get("title"))}))]}})}),define("resources/PollResults",["cell/Resource"],function(e){return new e({url:"https://api.mongolab.com/api/1/databases/testpeterwmwong/collections/poll-results/{id}?apiKey=4cIC7N8HM4TTAeOHVNrR3CstB1eGJQ7z&q={q}",params:{id:"",q:""}})}),define("views/PollResult",["require","resources/PollResults","cell/defineView!"],function(e){var t;return t=e("resources/PollResults"),e("cell/defineView!")({beforeRender:function(){return this.pollResults=t.query({q:JSON.stringify({pollId:this.options.pollId})}),this.watch(function(){return this.pollResults.status()},function(e){var t,n,r;if(e==="ok"){r={},this.pollResults.map(function(e){var t;return t=e.get("choice").text,r[t]==null&&(r[t]={count:0}),++r[t].count});for(n in r)t=r[n].count,r[n].pct=100*(t/this.pollResults.length());return this.set("resultMap",r)}})},render:function(e){return[e("h2","Results"),e(".content",e(".results",function(){var t,n,r,i,s,o;if(i=this.get("resultMap")){o=[];for(t in i)s=i[t],n=s.count,r=s.pct,o.push(e(".result",t,e(".count",n),e(".bar",{style:"width:"+r+"%"})));return o}}),e("a.done",{href:"#/"},"Go back to polls..."))]}})}),define("views/Poll",["require","resources/Polls","resources/PollResults","views/PollResult","cell/defineView!"],function(e){var t,n,r;return r=e("resources/Polls"),n=e("resources/PollResults"),t=e("views/PollResult"),e("cell/defineView!")({beforeRender:function(){return this.poll=r.get({id:this.options.pollId})},render:function(e){return[e("h1",function(){return this.poll.get("title")}),function(){if(this.get("showResults"))return e(t,{pollId:this.options.pollId});if(this.poll.status()==="ok")return e(".content",e.map(this.poll.get("choices"),function(t,n){var r;return r="choice"+n,e(".choice",e("input#"+r,{type:"radio",name:"pollGroup",onclick:function(){return this.set("choice",n)}}),e("label",{"for":r},t.get("text")))}),e("button",{type:"submit",onclick:this.onsubmit},"Submit"))}]},onsubmit:function(){var e,t,r=this;(e=this.get("choice"))!=null&&(t=n.create({pollId:this.poll.get("_id").$oid,choice:this.poll.get("choices").at(e).attributes()}),t.$save(void 0,function(){return r.set("showResults",!0)}))}})}),window.__installedViews={"views/Polls":1,"views/PollResult":1,"views/Poll":1,"views/App":1},define("views/App",["require","views/Polls","views/Poll","cell/dom/events","cell/defineView!"],function(e){var t,n,r,i;return r=e("views/Polls"),n=e("views/Poll"),i=e("cell/dom/events"),t=e("cell/defineView!")({beforeRender:function(){return this.set("selectedPoll",""),i.on(window,"hashchange",this.updatedSelectedPoll,this),this.updatedSelectedPoll()},renderEl:function(){return document.body},render:function(e){return[function(){var t;return(t=this.get("selectedPoll"))?e(n,{pollId:t}):e(r)}]},updatedSelectedPoll:function(){var e;this.set("selectedPoll",(e=/^\/?#\/(.*)/.exec(window.location.hash))!=null?e[1]:void 0)}}),new t}),require("views/App");