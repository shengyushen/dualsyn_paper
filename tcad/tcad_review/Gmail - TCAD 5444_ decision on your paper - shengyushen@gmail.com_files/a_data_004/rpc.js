var gadgets=gadgets||{};
gadgets.config=function(){var A=[];
return{register:function(D,C,B){var E=A[D];
if(!E){E=[];
A[D]=E
}E.push({validators:C||{},callback:B})
},get:function(B){if(B){return configuration[B]||{}
}return configuration
},init:function(D,K){configuration=D;
for(var B in A){if(A.hasOwnProperty(B)){var C=A[B],H=D[B];
for(var G=0,F=C.length;
G<F;
++G){var I=C[G];
if(H&&!K){var E=I.validators;
for(var J in E){if(E.hasOwnProperty(J)){if(!E[J](H[J])){throw new Error('Invalid config value "'+H[J]+'" for parameter "'+J+'" in component "'+B+'"')
}}}}if(I.callback){I.callback(D)
}}}}},EnumValidator:function(E){var D=[];
if(arguments.length>1){for(var C=0,B;
(B=arguments[C]);
++C){D.push(B)
}}else{D=E
}return function(G){for(var F=0,H;
(H=D[F]);
++F){if(G===D[F]){return true
}}}
},RegExValidator:function(B){return function(C){return B.test(C)
}
},ExistsValidator:function(B){return typeof B!=="undefined"
},NonEmptyStringValidator:function(B){return typeof B==="string"&&B.length>0
},BooleanValidator:function(B){return typeof B==="boolean"
},LikeValidator:function(B){return function(D){for(var E in B){if(B.hasOwnProperty(E)){var C=B[E];
if(!C(D[E])){return false
}}}return true
}
}}
}();;
var gadgets=gadgets||{};
gadgets.log=function(A){gadgets.log.logAtLevel(gadgets.log.INFO,A)
};
gadgets.warn=function(A){gadgets.log.logAtLevel(gadgets.log.WARNING,A)
};
gadgets.error=function(A){gadgets.log.logAtLevel(gadgets.log.ERROR,A)
};
gadgets.setLogLevel=function(A){gadgets.log.logLevelThreshold_=A
};
gadgets.log.logAtLevel=function(D,C){if(D<gadgets.log.logLevelThreshold_||!gadgets.log._console){return 
}var B;
var A=gadgets.log._console;
if(D==gadgets.log.WARNING&&A.warn){A.warn(C)
}else{if(D==gadgets.log.ERROR&&A.error){A.error(C)
}else{if(A.log){A.log(C)
}}}};
gadgets.log.INFO=1;
gadgets.log.WARNING=2;
gadgets.log.NONE=4;
gadgets.log.logLevelThreshold_=gadgets.log.INFO;
gadgets.log._console=window.console?window.console:window.opera?window.opera.postError:undefined;;
var tamings___=tamings___||[];
tamings___.push(function(A){___.grantRead(gadgets.log,"INFO");
___.grantRead(gadgets.log,"WARNING");
___.grantRead(gadgets.log,"ERROR");
___.grantRead(gadgets.log,"NONE");
caja___.whitelistFuncs([[gadgets,"log"],[gadgets,"warn"],[gadgets,"error"],[gadgets,"setLogLevel"],[gadgets.log,"logAtLevel"],])
});;
var gadgets=gadgets||{};
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json={parse:function(B){try{return window.JSON.parse(B)
}catch(A){return false
}},stringify:function(B){try{return window.JSON.stringify(B)
}catch(A){return null
}}}
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.json,"parse"],[gadgets.json,"stringify"]])
});;
var gadgets=gadgets||{};
gadgets.util=function(){function G(L){var M;
var K=L;
var I=K.indexOf("?");
var J=K.indexOf("#");
if(J===-1){M=K.substr(I+1)
}else{M=[K.substr(I+1,J-I-1),"&",K.substr(J+1)].join("")
}return M.split("&")
}var E=null;
var D={};
var C={};
var F=[];
var A={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function B(I,J){return String.fromCharCode(J)
}function H(I){D=I["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,H)
}return{getUrlParameters:function(Q){if(E!==null&&typeof Q==="undefined"){return E
}var M={};
E={};
var J=G(Q||document.location.href);
var O=window.decodeURIComponent?decodeURIComponent:unescape;
for(var L=0,K=J.length;
L<K;
++L){var N=J[L].indexOf("=");
if(N===-1){continue
}var I=J[L].substring(0,N);
var P=J[L].substring(N+1);
P=P.replace(/\+/g," ");
M[I]=O(P)
}if(typeof Q==="undefined"){E=M
}return M
},makeClosure:function(L,N,M){var K=[];
for(var J=2,I=arguments.length;
J<I;
++J){K.push(arguments[J])
}return function(){var O=K.slice();
for(var Q=0,P=arguments.length;
Q<P;
++Q){O.push(arguments[Q])
}return N.apply(L,O)
}
},makeEnum:function(J){var L={};
for(var K=0,I;
(I=J[K]);
++K){L[I]=I
}return L
},getFeatureParameters:function(I){return typeof D[I]==="undefined"?null:D[I]
},hasFeature:function(I){return typeof D[I]!=="undefined"
},getServices:function(){return C
},registerOnLoadHandler:function(I){F.push(I)
},runOnLoadHandlers:function(){for(var J=0,I=F.length;
J<I;
++J){F[J]()
}},escape:function(I,M){if(!I){return I
}else{if(typeof I==="string"){return gadgets.util.escapeString(I)
}else{if(typeof I==="array"){for(var L=0,J=I.length;
L<J;
++L){I[L]=gadgets.util.escape(I[L])
}}else{if(typeof I==="object"&&M){var K={};
for(var N in I){if(I.hasOwnProperty(N)){K[gadgets.util.escapeString(N)]=gadgets.util.escape(I[N],true)
}}return K
}}}}return I
},escapeString:function(M){if(!M){return M
}var J=[],L,N;
for(var K=0,I=M.length;
K<I;
++K){L=M.charCodeAt(K);
N=A[L];
if(N===true){J.push("&#",L,";")
}else{if(N!==false){J.push(M.charAt(K))
}}}return J.join("")
},unescapeString:function(I){if(!I){return I
}return I.replace(/&#([0-9]+);/g,B)
}}
}();
gadgets.util.getUrlParameters();;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.util,"escapeString"],[gadgets.util,"getFeatureParameters"],[gadgets.util,"hasFeature"],[gadgets.util,"registerOnLoadHandler"],[gadgets.util,"unescapeString"]])
});;
var gadgets=gadgets||{};
gadgets.rpc=function(){function l(a){if(a&&typeof a.s==="string"&&typeof a.f==="string"&&a.a instanceof Array){if(j[a.f])if(j[a.f]!==a.t)throw new Error("Invalid auth token. "+j[a.f]+" vs "+a.t);if(a.c)a.callback=function(b){gadgets.rpc.call(a.f,"__cb",null,a.c,b)};var c=(k[a.s]||k[""]).apply(a,a.a);a.c&&typeof c!=="undefined"&&gadgets.rpc.call(a.f,"__cb",null,a.c,c)}}function A(){if(h==="dpm"||h==="wpm")window.addEventListener("message",function(b){l(gadgets.json.parse(b.data))},false);if(h==="nix")if(typeof window.GRPC____NIXVBS_get_wrapper!==
"unknown"){window.GRPC____NIXVBS_handle_message=function(b){window.setTimeout(function(){l(gadgets.json.parse(b))},0)};window.GRPC____NIXVBS_create_channel=function(b,d,f){if(j[b]===f)m[b]=d};var a="Class GRPC____NIXVBS_wrapper\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n GRPC____NIXVBS_handle_message(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call GRPC____NIXVBS_create_channel(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction GRPC____NIXVBS_get_wrapper(name, auth)\nDim wrap\nSet wrap = New GRPC____NIXVBS_wrapper\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet GRPC____NIXVBS_get_wrapper = wrap\nEnd Function";
try{window.execScript(a,"vbscript")}catch(c){h="ifpc"}}}function B(a,c){var b;if(!x[a]){if(h==="fe")try{b=document.getElementById(a);b.__g2c_rpc=function(g){l(gadgets.json.parse(g))}}catch(d){}if(h==="nix")try{b=document.getElementById(a);var f=window.GRPC____NIXVBS_get_wrapper(a,c);b.contentWindow.opener=f}catch(e){}x[a]=true}}function y(a){for(var c=gadgets.json.stringify,b=[],d=0,f=a.length;d<f;++d)b.push(encodeURIComponent(c(a[d])));return b.join("&")}function C(a){for(var c,b=n.length-1;b>=0;--b){var d=
n[b];try{if(d&&(d.recyclable||d.readyState==="complete")){d.parentNode.removeChild(d);if(window.ActiveXObject){n[b]=d=null;n.splice(b,1)}else{d.recyclable=false;c=d;break}}}catch(f){}}if(!c){c=document.createElement("iframe");c.style.border=c.style.width=c.style.height="0px";c.style.visibility="hidden";c.style.position="absolute";c.onload=function(){this.recyclable=true};n.push(c)}c.src=a;setTimeout(function(){document.body.appendChild(c)},0)}function u(a,c,b,d,f){var e=gadgets.rpc.getRelayUrl(a);
e||window.console&&window.console.log&&window.console.log("No relay file assigned for IFPC");var g=null;g=s[a]?[e,"#",y([b,o,1,0,y([b,c,"","",b].concat(f))])].join(""):[e,"#",a,"&",b,"@",o,"&1&0&",encodeURIComponent(d)].join("");C(g)}function D(a,c,b,d,f){try{if(b!==".."){var e=window.frameElement;if(typeof e.__g2c_rpc==="function"){if(typeof e.__g2c_rpc.__c2g_rpc!=="function")e.__g2c_rpc.__c2g_rpc=function(z){l(gadgets.json.parse(z))};e.__g2c_rpc(d);return}}else{var g=document.getElementById(a);
if(typeof g.__g2c_rpc==="function"&&typeof g.__g2c_rpc.__c2g_rpc==="function"){g.__g2c_rpc.__c2g_rpc(d);return}}}catch(v){}u(a,c,b,d,f)}var m={},k={},n=[],t={},s={},j={},o=0,w={},x={},p={},q={},h;if(gadgets.util)q=gadgets.util.getUrlParameters();j[".."]=q.rpctoken||q.ifpctok||0;h=typeof window.postMessage==="function"?"wpm":typeof document.postMessage==="function"?"dpm":window.ActiveXObject?"nix":navigator.product==="Gecko"?"fe":"ifpc";A();k[""]=function(){window.console&&window.console.log&&window.console.log("Unknown RPC service: "+
this.s)};k.__cb=function(a,c){var b=w[a];if(b){delete w[a];b(c)}};if(gadgets.config){function E(a){if(a.rpc.parentRelayUrl.substring(0,7)==="http://")t[".."]=a.rpc.parentRelayUrl;else{for(var c=document.location.search.substring(0).split("&"),b="",d=0,f;f=c[d];++d)if(f.indexOf("parent=")===0){b=decodeURIComponent(f.substring(7));break}if(b!=="")t[".."]=b+a.rpc.parentRelayUrl}s[".."]=!!a.rpc.useLegacyProtocol}q={parentRelayUrl:gadgets.config.NonEmptyStringValidator};gadgets.config.register("rpc",q,
E)}return{register:function(a,c){if(a==="__cb")throw new Error("Cannot overwrite callback service");if(a==="")throw new Error("Cannot overwrite default service: use registerDefault");k[a]=c},unregister:function(a){if(a==="__cb")throw new Error("Cannot delete callback service");if(a==="")throw new Error("Cannot delete default service: use unregisterDefault");delete k[a]},registerDefault:function(a){k[""]=a},unregisterDefault:function(){delete k[""]},forceParentVerifiable:function(){if(h!=="wpm")h=
"ifpc"},call:function(a,c,b){++o;a=a||"..";if(b)w[o]=b;var d="..";if(a==="..")d=window.name;var f={s:c,f:d,c:b?o:0,a:Array.prototype.slice.call(arguments,3),t:j[a]},e;e=a;var g=f;if(typeof p[e]==="undefined"){p[e]=false;var v=null;v=e===".."?parent:frames[e];try{p[e]=v.gadgets.rpc.receiveSameDomain}catch(z){}}if(typeof p[e]==="function"){p[e](g);e=true}else e=false;if(!e){e=gadgets.json.stringify(f);g=h;if(s[a])g="ifpc";switch(g){case "dpm":var i=a===".."?parent.document:frames[a].document;i.postMessage(e);
break;case "wpm":i=a===".."?parent:frames[a];var r=gadgets.rpc.getRelayUrl(a);r&&i.postMessage(e,r);break;case "nix":a:{f=a;g=c;d=d;e=e;try{if(d!==".."){i=m[".."];if(!i&&window.opener&&"GetAuthToken"in window.opener){i=window.opener;if(i.GetAuthToken()===j[".."]){r=j[".."];i.CreateChannel(window.GRPC____NIXVBS_get_wrapper("..",r),r);m[".."]=i;window.opener=null}}if(i){i.SendMessage(e);break a}}else if(m[f]){m[f].SendMessage(e);break a}}catch(F){}u(f,g,d,e)}break;case "fe":D(a,c,d,e,f.a);break;default:u(a,
c,d,e,f.a);break}}},getRelayUrl:function(a){a=t[a];if(a.indexOf("//")==0)a=document.location.protocol+a;return a},setRelayUrl:function(a,c,b){t[a]=c;s[a]=!!b},setAuthToken:function(a,c){c=c||"";j[a]=String(c);B(a,c)},getRelayChannel:function(){return h},receive:function(a){a.length>4&&l(gadgets.json.parse(decodeURIComponent(a[a.length-1])))},receiveSameDomain:function(a){a.a=Array.prototype.slice.call(a.a);window.setTimeout(function(){l(a)},0)}}}();
;
