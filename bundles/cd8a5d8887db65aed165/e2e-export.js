webpackJsonp([0],{196:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(29),o=a(i),s=r(64),l=a(s),u=r(1093),c=a(u),f=r(1),d=a(f),p=r(2),h=a(p),m=r(3),y=r(17),v=n(y),_=r(659),w=n(_),b=r(4),g=a(b),E=1,x=2;t.default=d.default.createClass({displayName:"ExportE2eKeysDialog",propTypes:{matrixClient:h.default.instanceOf(v.MatrixClient).isRequired,onFinished:h.default.func.isRequired},getInitialState:function(){return{phase:E,errStr:null}},componentWillMount:function(){this._unmounted=!1},componentWillUnmount:function(){this._unmounted=!0},_onPassphraseFormSubmit:function(e){e.preventDefault();var t=this.refs.passphrase1.value;return t!==this.refs.passphrase2.value?(this.setState({errStr:(0,m._t)("Passphrases must match")}),!1):t?(this._startExport(t),!1):(this.setState({errStr:(0,m._t)("Passphrase must not be empty")}),!1)},_startExport:function(e){var t=this;l.default.resolve().then(function(){return t.props.matrixClient.exportRoomKeys()}).then(function(t){return w.encryptMegolmKeyFile((0,o.default)(t),e)}).then(function(e){var r=new Blob([e],{type:"text/plain;charset=us-ascii"});c.default.saveAs(r,"riot-keys.txt"),t.props.onFinished(!0)}).catch(function(e){if(console.error("Error exporting e2e keys:",e),!t._unmounted){var r=e.friendlyText||(0,m._t)("Unknown error");t.setState({errStr:r,phase:E})}}),this.setState({errStr:null,phase:x})},_onCancelClick:function(e){return e.preventDefault(),this.props.onFinished(!1),!1},render:function(){var e=g.default.getComponent("views.dialogs.BaseDialog"),t=this.state.phase===x;return d.default.createElement(e,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:(0,m._t)("Export room keys")},d.default.createElement("form",{onSubmit:this._onPassphraseFormSubmit},d.default.createElement("div",{className:"mx_Dialog_content"},d.default.createElement("p",null,(0,m._t)("This process allows you to export the keys for messages you have received in encrypted rooms to a local file. You will then be able to import the file into another Matrix client in the future, so that client will also be able to decrypt these messages.")),d.default.createElement("p",null,(0,m._t)("The exported file will allow anyone who can read it to decrypt any encrypted messages that you can see, so you should be careful to keep it secure. To help with this, you should enter a passphrase below, which will be used to encrypt the exported data. It will only be possible to import the data by using the same passphrase.")),d.default.createElement("div",{className:"error"},this.state.errStr),d.default.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},d.default.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},d.default.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},d.default.createElement("label",{htmlFor:"passphrase1"},(0,m._t)("Enter passphrase"))),d.default.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},d.default.createElement("input",{ref:"passphrase1",id:"passphrase1",autoFocus:!0,size:"64",type:"password",disabled:t}))),d.default.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},d.default.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},d.default.createElement("label",{htmlFor:"passphrase2"},(0,m._t)("Confirm passphrase"))),d.default.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},d.default.createElement("input",{ref:"passphrase2",id:"passphrase2",size:"64",type:"password",disabled:t}))))),d.default.createElement("div",{className:"mx_Dialog_buttons"},d.default.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:(0,m._t)("Export"),disabled:t}),d.default.createElement("button",{onClick:this._onCancelClick,disabled:t},(0,m._t)("Cancel")))))}}),e.exports=t.default},501:function(e,t){"use strict";function r(e,t,r){return t<=e&&e<=r}function n(e){if(void 0===e)return{};if(e===Object(e))return e;throw TypeError("Could not convert argument to dictionary")}function a(e){for(var t=String(e),r=t.length,n=0,a=[];n<r;){var i=t.charCodeAt(n);if(i<55296||i>57343)a.push(i);else if(56320<=i&&i<=57343)a.push(65533);else if(55296<=i&&i<=56319)if(n===r-1)a.push(65533);else{var o=e.charCodeAt(n+1);if(56320<=o&&o<=57343){var s=1023&i,l=1023&o;a.push(65536+(s<<10)+l),n+=1}else a.push(65533)}n+=1}return a}function i(e){for(var t="",r=0;r<e.length;++r){var n=e[r];n<=65535?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode((n>>10)+55296,(1023&n)+56320))}return t}function o(e){this.tokens=[].slice.call(e)}function s(e,t){if(e)throw TypeError("Decoder error");return t||65533}function l(e,t){if(!(this instanceof l))return new l(e,t);if(e=void 0!==e?String(e).toLowerCase():h,e!==h)throw new Error("Encoding not supported. Only utf-8 is supported");t=n(t),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=Boolean(t.fatal),this._ignoreBOM=Boolean(t.ignoreBOM),Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function u(e,t){if(!(this instanceof u))return new u(e,t);if(e=void 0!==e?String(e).toLowerCase():h,e!==h)throw new Error("Encoding not supported. Only utf-8 is supported");t=n(t),this._streaming=!1,this._encoder=null,this._options={fatal:Boolean(t.fatal)},Object.defineProperty(this,"encoding",{value:"utf-8"})}function c(e){var t=e.fatal,n=0,a=0,i=0,o=128,l=191;this.handler=function(e,u){if(u===d&&0!==i)return i=0,s(t);if(u===d)return p;if(0===i){if(r(u,0,127))return u;if(r(u,194,223))i=1,n=u-192;else if(r(u,224,239))224===u&&(o=160),237===u&&(l=159),i=2,n=u-224;else{if(!r(u,240,244))return s(t);240===u&&(o=144),244===u&&(l=143),i=3,n=u-240}return n<<=6*i,null}if(!r(u,o,l))return n=i=a=0,o=128,l=191,e.prepend(u),s(t);if(o=128,l=191,a+=1,n+=u-128<<6*(i-a),a!==i)return null;var c=n;return n=i=a=0,c}}function f(e){e.fatal;this.handler=function(e,t){if(t===d)return p;if(r(t,0,127))return t;var n,a;r(t,128,2047)?(n=1,a=192):r(t,2048,65535)?(n=2,a=224):r(t,65536,1114111)&&(n=3,a=240);for(var i=[(t>>6*n)+a];n>0;){var o=t>>6*(n-1);i.push(128|63&o),n-=1}return i}}var d=-1;o.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():d},prepend:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.unshift(t.pop());else this.tokens.unshift(e)},push:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.push(t.shift());else this.tokens.push(e)}};var p=-1,h="utf-8";l.prototype={decode:function(e,t){var r;r="object"==typeof e&&e instanceof ArrayBuffer?new Uint8Array(e):"object"==typeof e&&"buffer"in e&&e.buffer instanceof ArrayBuffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(0),t=n(t),this._streaming||(this._decoder=new c({fatal:this._fatal}),this._BOMseen=!1),this._streaming=Boolean(t.stream);for(var a,s=new o(r),l=[];!s.endOfStream()&&(a=this._decoder.handler(s,s.read()),a!==p);)null!==a&&(Array.isArray(a)?l.push.apply(l,a):l.push(a));if(!this._streaming){do{if(a=this._decoder.handler(s,s.read()),a===p)break;null!==a&&(Array.isArray(a)?l.push.apply(l,a):l.push(a))}while(!s.endOfStream());this._decoder=null}return l.length&&(["utf-8"].indexOf(this.encoding)===-1||this._ignoreBOM||this._BOMseen||(65279===l[0]?(this._BOMseen=!0,l.shift()):this._BOMseen=!0)),i(l)}},u.prototype={encode:function(e,t){e=e?String(e):"",t=n(t),this._streaming||(this._encoder=new f(this._options)),this._streaming=Boolean(t.stream);for(var r,i=[],s=new o(a(e));!s.endOfStream()&&(r=this._encoder.handler(s,s.read()),r!==p);)Array.isArray(r)?i.push.apply(i,r):i.push(r);if(!this._streaming){for(;;){if(r=this._encoder.handler(s,s.read()),r===p)break;Array.isArray(r)?i.push.apply(i,r):i.push(r)}this._encoder=null}return new Uint8Array(i)}},t.TextEncoder=u,t.TextDecoder=l},634:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return new s.default(function(t,r){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.onerror=r,n.readAsArrayBuffer(e)})}Object.defineProperty(t,"__esModule",{value:!0});var o=r(64),s=a(o),l=r(1),u=a(l),c=r(2),f=a(c),d=r(17),p=n(d),h=r(659),m=n(h),y=r(4),v=a(y),_=r(3),w=1,b=2;t.default=u.default.createClass({displayName:"ImportE2eKeysDialog",propTypes:{matrixClient:f.default.instanceOf(p.MatrixClient).isRequired,onFinished:f.default.func.isRequired},getInitialState:function(){return{enableSubmit:!1,phase:w,errStr:null}},componentWillMount:function(){this._unmounted=!1},componentWillUnmount:function(){this._unmounted=!0},_onFormChange:function(e){var t=this.refs.file.files||[];this.setState({enableSubmit:""!==this.refs.passphrase.value&&t.length>0})},_onFormSubmit:function(e){return e.preventDefault(),this._startImport(this.refs.file.files[0],this.refs.passphrase.value),!1},_startImport:function(e,t){var r=this;return this.setState({errStr:null,phase:b}),i(e).then(function(e){return m.decryptMegolmKeyFile(e,t)}).then(function(e){return r.props.matrixClient.importRoomKeys(JSON.parse(e))}).then(function(){r.props.onFinished(!0)}).catch(function(e){if(console.error("Error importing e2e keys:",e),!r._unmounted){var t=e.friendlyText||(0,_._t)("Unknown error");r.setState({errStr:t,phase:w})}})},_onCancelClick:function(e){return e.preventDefault(),this.props.onFinished(!1),!1},render:function(){var e=v.default.getComponent("views.dialogs.BaseDialog"),t=this.state.phase!==w;return u.default.createElement(e,{className:"mx_importE2eKeysDialog",onFinished:this.props.onFinished,title:(0,_._t)("Import room keys")},u.default.createElement("form",{onSubmit:this._onFormSubmit},u.default.createElement("div",{className:"mx_Dialog_content"},u.default.createElement("p",null,(0,_._t)("This process allows you to import encryption keys that you had previously exported from another Matrix client. You will then be able to decrypt any messages that the other client could decrypt.")),u.default.createElement("p",null,(0,_._t)("The export file will be protected with a passphrase. You should enter the passphrase here, to decrypt the file.")),u.default.createElement("div",{className:"error"},this.state.errStr),u.default.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},u.default.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},u.default.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},u.default.createElement("label",{htmlFor:"importFile"},(0,_._t)("File to import"))),u.default.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},u.default.createElement("input",{ref:"file",id:"importFile",type:"file",autoFocus:!0,onChange:this._onFormChange,disabled:t}))),u.default.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},u.default.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},u.default.createElement("label",{htmlFor:"passphrase"},(0,_._t)("Enter passphrase"))),u.default.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},u.default.createElement("input",{ref:"passphrase",id:"passphrase",size:"64",type:"password",onChange:this._onFormChange,disabled:t}))))),u.default.createElement("div",{className:"mx_Dialog_buttons"},u.default.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:(0,_._t)("Import"),disabled:!this.state.enableSubmit||t}),u.default.createElement("button",{onClick:this._onCancelClick,disabled:t},(0,_._t)("Cancel")))))}}),e.exports=t.default},659:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=new Error(e);return r.friendlyText=t,r}function o(){return(0,g._t)("Your browser does not support the required cryptography extensions")}function s(e){for(var t=(new x).decode(new Uint8Array(e)),r=0;;){var n=t.indexOf("\n",r);if(n<0)throw new Error("Header line not found");var a=t.slice(r,n).trim();if(r=n+1,a===C)break}for(var i=r;;){var o=t.indexOf("\n",r),s=t.slice(r,o<0?void 0:o).trim();if(s===k)break;if(o<0)throw new Error("Trailer line not found");r=o+1}var l=r;return c(t.slice(i,l))}function l(e){var t=96,r=Math.ceil(e.length/t),n=new Array(r+3);n[0]=C;var a=0,i=void 0;for(i=1;i<=r;i++)n[i]=u(e.subarray(a,a+t)),a+=t;return n[i++]=k,n[i]="",(new E).encode(n.join("\n")).buffer}function u(e){var t=String.fromCharCode.apply(null,e);return window.btoa(t)}function c(e){for(var t=window.atob(e),r=new Uint8Array(t.length),n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}Object.defineProperty(t,"__esModule",{value:!0}),t.encryptMegolmKeyFile=t.decryptMegolmKeyFile=void 0;var f=r(64),d=a(f),p=r(22),h=a(p),m=r(175),y=a(m),v=r(9),_=(t.decryptMegolmKeyFile=function(){var e=(0,v.coroutine)(h.default.mark(function e(t,r){var n,a,l,u,c,f,d,p,m,w,b,E,C,k,O;return h.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s(t),!(n.length<1)){e.next=3;break}throw i("Invalid file: too short",(0,g._t)("Not a valid Riot keyfile"));case 3:if(a=n[0],1===a){e.next=6;break}throw i("Unsupported version",(0,g._t)("Not a valid Riot keyfile"));case 6:if(l=n.length-69,!(l<0)){e.next=9;break}throw i("Invalid file: too short",(0,g._t)("Not a valid Riot keyfile"));case 9:return u=n.subarray(1,17),c=n.subarray(17,33),f=n[33]<<24|n[34]<<16|n[35]<<8|n[36],d=n.subarray(37,37+l),p=n.subarray(-32),e.next=16,(0,v.resolve)(_(u,f,r));case 16:return m=e.sent,w=(0,y.default)(m,2),b=w[0],E=w[1],C=n.subarray(0,-32),k=void 0,e.prev=22,e.next=25,(0,v.resolve)(S.verify({name:"HMAC"},E,p,C));case 25:k=e.sent,e.next=31;break;case 28:throw e.prev=28,e.t0=e.catch(22),i("subtleCrypto.verify failed: "+e.t0,o());case 31:if(k){e.next=33;break}throw i("hmac mismatch",(0,g._t)("Authentication check failed: incorrect password?"));case 33:return O=void 0,e.prev=34,e.next=37,(0,v.resolve)(S.decrypt({name:"AES-CTR",counter:c,length:64},b,d));case 37:O=e.sent,e.next=43;break;case 40:throw e.prev=40,e.t1=e.catch(34),i("subtleCrypto.decrypt failed: "+e.t1,o());case 43:return e.abrupt("return",(new x).decode(new Uint8Array(O)));case 44:case"end":return e.stop()}},e,this,[[22,28],[34,40]])}));return function(t,r){return e.apply(this,arguments)}}(),t.encryptMegolmKeyFile=function(){var e=(0,v.coroutine)(h.default.mark(function e(t,r,n){var a,s,u,c,f,d,p,m,w,b,g,x,C,k,O,A;return h.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||{},a=n.kdf_rounds||5e5,s=new Uint8Array(16),window.crypto.getRandomValues(s),u=new Uint8Array(16),window.crypto.getRandomValues(u),u[9]&=127,e.next=9,(0,v.resolve)(_(s,a,r));case 9:return c=e.sent,f=(0,y.default)(c,2),d=f[0],p=f[1],m=(new E).encode(t),w=void 0,e.prev=15,e.next=18,(0,v.resolve)(S.encrypt({name:"AES-CTR",counter:u,length:64},d,m));case 18:w=e.sent,e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(15),i("subtleCrypto.encrypt failed: "+e.t0,o());case 24:return b=new Uint8Array(w),g=1+s.length+u.length+4+b.length+32,x=new Uint8Array(g),C=0,x[C++]=1,x.set(s,C),C+=s.length,x.set(u,C),C+=u.length,x[C++]=a>>24,x[C++]=a>>16&255,x[C++]=a>>8&255,x[C++]=255&a,x.set(b,C),C+=b.length,k=x.subarray(0,C),O=void 0,e.prev=41,e.next=44,(0,v.resolve)(S.sign({name:"HMAC"},p,k));case 44:O=e.sent,e.next=50;break;case 47:throw e.prev=47,e.t1=e.catch(41),i("subtleCrypto.sign failed: "+e.t1,o());case 50:return A=new Uint8Array(O),x.set(A,C),e.abrupt("return",l(x));case 53:case"end":return e.stop()}},e,this,[[15,21],[41,47]])}));return function(t,r,n){return e.apply(this,arguments)}}(),function(){var e=(0,v.coroutine)(h.default.mark(function e(t,r,n){var a,s,l,u,c,f,p,m;return h.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,s=void 0,e.prev=2,e.next=5,(0,v.resolve)(S.importKey("raw",(new E).encode(n),{name:"PBKDF2"},!1,["deriveBits"]));case 5:s=e.sent,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),i("subtleCrypto.importKey failed: "+e.t0,o());case 11:return l=void 0,e.prev=12,e.next=15,(0,v.resolve)(S.deriveBits({name:"PBKDF2",salt:t,iterations:r,hash:"SHA-512"},s,512));case 15:l=e.sent,e.next=21;break;case 18:throw e.prev=18,e.t1=e.catch(12),i("subtleCrypto.deriveBits failed: "+e.t1,o());case 21:return u=new Date,console.log("E2e import/export: deriveKeys took "+(u-a)+"ms"),c=l.slice(0,32),f=l.slice(32),p=S.importKey("raw",c,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch(function(e){throw i("subtleCrypto.importKey failed for AES key: "+e,o())}),m=S.importKey("raw",f,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch(function(e){throw i("subtleCrypto.importKey failed for HMAC key: "+e,o())}),e.next=29,(0,v.resolve)(d.default.all([p,m]));case 29:return e.abrupt("return",e.sent);case 30:case"end":return e.stop()}},e,this,[[2,8],[12,18]])}));return function(t,r,n){return e.apply(this,arguments)}}()),w=r(501),b=n(w),g=r(3),E=window.TextEncoder;E||(E=b.TextEncoder);var x=window.TextDecoder;x||(x=b.TextDecoder);var S=window.crypto.subtle||window.crypto.webkitSubtle,C="-----BEGIN MEGOLM SESSION DATA-----",k="-----END MEGOLM SESSION DATA-----"},1093:function(e,t,r){var n,a=a||function(e){"use strict";if(!("undefined"==typeof e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,r=function(){return e.URL||e.webkitURL||e},n=t.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},o=/constructor/i.test(e.HTMLElement)||e.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},u="application/octet-stream",c=4e4,f=function(e){var t=function(){"string"==typeof e?r().revokeObjectURL(e):e.remove()};setTimeout(t,c)},d=function(e,t,r){t=[].concat(t);for(var n=t.length;n--;){var a=e["on"+t[n]];if("function"==typeof a)try{a.call(e,r||e)}catch(e){l(e)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},h=function(t,l,c){c||(t=p(t));var h,m=this,y=t.type,v=y===u,_=function(){d(m,"writestart progress write writeend".split(" "))},w=function(){if((s||v&&o)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=s?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;"),r=e.open(t,"_blank");r||(e.location.href=t),t=void 0,m.readyState=m.DONE,_()},n.readAsDataURL(t),void(m.readyState=m.INIT)}if(h||(h=r().createObjectURL(t)),v)e.location.href=h;else{var a=e.open(h,"_blank");a||(e.location.href=h)}m.readyState=m.DONE,_(),f(h)};return m.readyState=m.INIT,a?(h=r().createObjectURL(t),void setTimeout(function(){n.href=h,n.download=l,i(n),_(),f(h),m.readyState=m.DONE})):void w()},m=h.prototype,y=function(e,t,r){return new h(e,t||e.name||"download",r)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,r){return t=t||e.name||"download",r||(e=p(e)),navigator.msSaveOrOpenBlob(e,t)}:(m.abort=function(){},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,y)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof e&&e.exports?e.exports.saveAs=a:null!==r(752)&&null!==r(753)&&(n=function(){return a}.call(t,r,t,e),!(void 0!==n&&(e.exports=n)))}});
//# sourceMappingURL=e2e-export.js.map