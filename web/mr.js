(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ph=0,Bl=1,Lh=2;var xr=1,Dh=2,As=3,vi=0,jt=1,Ot=2,Gn=0,Rs=1,kl=2,zl=3,Vl=4,Nh=5;var ki=100,Uh=101,Fh=102,Oh=103,Bh=104,kh=200,zh=201,Vh=202,Hh=203,Hl=204,Gl=205,Gh=206,Wh=207,Xh=208,qh=209,Yh=210,Zh=211,Jh=212,$h=213,Kh=214,fa=0,pa=1,ma=2,ms=3,ga=4,_a=5,xa=6,ya=7,Wl=0,jh=1,Qh=2,An=0,Xl=1,ql=2,Yl=3,Zl=4,Jl=5,$l=6,Kl=7;var jl=300,Mi=301,zi=302,Wa=303,Xa=304,yr=306,gs=1e3,On=1001,va=1002,Lt=1003,eu=1004;var vr=1005;var Tt=1006,qa=1007;var Wn=1008;var rn=1009,Ql=1010,ec=1011,Cs=1012,Ya=1013,Rn=1014,mn=1015,Cn=1016,Za=1017,Ja=1018,Is=1020,tc=35902,nc=35899,ic=1021,sc=1022,gn=1023,Bn=1026,Si=1027,$a=1028,Ka=1029,bi=1030,ja=1031;var Qa=1033,Mr=33776,Sr=33777,br=33778,Er=33779,eo=35840,to=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37488,lo=37489,Tr=37490,co=37491,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,xo=37815,yo=37816,vo=37817,Mo=37818,So=37819,bo=37820,Eo=37821,To=36492,wo=36494,Ao=36495,Ro=36283,Co=36284,wr=36285,Io=36286;var $s=2300,Ma=2301,ua=2302,Il=2303,Pl=2400,Ll=2401,Dl=2402;var tu=3200;var rc=0,nu=1,ti="",bt="srgb",Ks="srgb-linear",js="linear",et="srgb";var da=7680;var iu=519,su=512,ru=513,au=514,Po=515,ou=516,lu=517,Lo=518,cu=519,hu=35044,Ps=35048;var ac="300 es",bn=2e3,_s=2001;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){let i=Qs("canvas");return i.style.display="block",i}var th={},xs=null;function oc(...i){let e="THREE."+i.shift();xs?xs("log",e,...i):console.log(e,...i)}function du(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=du(i);let e="THREE."+i.shift();if(xs)xs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=du(i);let e="THREE."+i.shift();if(xs)xs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ni(...i){let e=i.join(" ");e in th||(th[e]=!0,Ae(...i))}function fu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pu={[fa]:pa,[ma]:xa,[ga]:ya,[ms]:_a,[pa]:fa,[xa]:ma,[ya]:ga,[_a]:ms},En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nh=1234567,Zs=Math.PI/180,ys=180/Math.PI;function Ls(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function Gd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wd(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function Xd(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function qd(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function Yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $d(i,e){return i+Math.random()*(e-i)}function Kd(i){return i*(.5-Math.random())}function jd(i){i!==void 0&&(nh=i);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(i){return i*Zs}function ef(i){return i*ys}function tf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rf(i,e,t,n,s){let r=Math.cos,a=Math.sin,l=r(t/2),c=a(t/2),u=r((e+n)/2),o=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(l*o,c*d,c*h,l*u);break;case"YZY":i.set(c*h,l*o,c*d,l*u);break;case"ZXZ":i.set(c*d,c*h,l*o,l*u);break;case"XZX":i.set(l*o,c*m,c*f,l*u);break;case"YXY":i.set(c*f,l*o,c*m,l*u);break;case"ZYZ":i.set(c*m,c*f,l*o,l*u);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ds={DEG2RAD:Zs,RAD2DEG:ys,generateUUID:Ls,clamp:ze,euclideanModulo:lc,mapLinear:Gd,inverseLerp:Wd,lerp:Js,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:Zd,randInt:Jd,randFloat:$d,randFloatSpread:Kd,seededRandom:jd,degToRad:Qd,radToDeg:ef,isPowerOfTwo:tf,ceilPowerOfTwo:nf,floorPowerOfTwo:sf,setQuaternionFromProperEuler:rf,normalize:Zt,denormalize:fs},Ce=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let c=n[s+0],u=n[s+1],o=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||c!==h||u!==f||o!==m){let g=c*h+u*f+o*m+d*x;g<0&&(h=-h,f=-f,m=-m,x=-x,g=-g);let p=1-l;if(g<.9995){let E=Math.acos(g),R=Math.sin(E);p=Math.sin(p*E)/R,l=Math.sin(l*E)/R,c=c*p+h*l,u=u*p+f*l,o=o*p+m*l,d=d*p+x*l}else{c=c*p+h*l,u=u*p+f*l,o=o*p+m*l,d=d*p+x*l;let E=1/Math.sqrt(c*c+u*u+o*o+d*d);c*=E,u*=E,o*=E,d*=E}}e[t]=c,e[t+1]=u,e[t+2]=o,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],c=n[s+1],u=n[s+2],o=n[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return e[t]=l*m+o*d+c*f-u*h,e[t+1]=c*m+o*h+u*d-l*f,e[t+2]=u*m+o*f+l*h-c*d,e[t+3]=o*m-l*d-c*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),o=l(s/2),d=l(r/2),h=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=h*o*d+u*f*m,this._y=u*f*d-h*o*m,this._z=u*o*m+h*f*d,this._w=u*o*d-h*f*m;break;case"YXZ":this._x=h*o*d+u*f*m,this._y=u*f*d-h*o*m,this._z=u*o*m-h*f*d,this._w=u*o*d+h*f*m;break;case"ZXY":this._x=h*o*d-u*f*m,this._y=u*f*d+h*o*m,this._z=u*o*m+h*f*d,this._w=u*o*d-h*f*m;break;case"ZYX":this._x=h*o*d-u*f*m,this._y=u*f*d+h*o*m,this._z=u*o*m-h*f*d,this._w=u*o*d+h*f*m;break;case"YZX":this._x=h*o*d+u*f*m,this._y=u*f*d+h*o*m,this._z=u*o*m-h*f*d,this._w=u*o*d-h*f*m;break;case"XZY":this._x=h*o*d-u*f*m,this._y=u*f*d-h*o*m,this._z=u*o*m+h*f*d,this._w=u*o*d+h*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],u=t[2],o=t[6],d=t[10],h=n+l+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(o-c)*f,this._y=(r-u)*f,this._z=(a-s)*f}else if(n>l&&n>d){let f=2*Math.sqrt(1+n-l-d);this._w=(o-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+u)/f}else if(l>d){let f=2*Math.sqrt(1+l-n-d);this._w=(r-u)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+o)/f}else{let f=2*Math.sqrt(1+d-n-l);this._w=(a-s)/f,this._x=(r+u)/f,this._y=(c+o)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,u=t._z,o=t._w;return this._x=n*o+a*l+s*u-r*c,this._y=s*o+a*c+r*l-n*u,this._z=r*o+a*u+n*c-s*l,this._w=a*o-n*l-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let u=Math.acos(l),o=Math.sin(u);c=Math.sin(c*u)/o,t=Math.sin(t*u)/o,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*s-l*n),o=2*(l*t-r*s),d=2*(r*n-a*t);return this.x=t+c*u+a*d-l*o,this.y=n+c*o+l*u-r*d,this.z=s+c*d+r*o-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new C,ih=new wt,De=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,u)}set(e,t,n,s,r,a,l,c,u){let o=this.elements;return o[0]=e,o[1]=s,o[2]=l,o[3]=t,o[4]=r,o[5]=c,o[6]=n,o[7]=a,o[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],o=n[4],d=n[7],h=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],E=s[1],R=s[4],M=s[7],b=s[2],S=s[5],A=s[8];return r[0]=a*x+l*E+c*b,r[3]=a*g+l*R+c*S,r[6]=a*p+l*M+c*A,r[1]=u*x+o*E+d*b,r[4]=u*g+o*R+d*S,r[7]=u*p+o*M+d*A,r[2]=h*x+f*E+m*b,r[5]=h*g+f*R+m*S,r[8]=h*p+f*M+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8];return t*a*o-t*l*u-n*r*o+n*l*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8],d=o*a-l*u,h=l*c-o*r,f=u*r-a*c,m=t*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*u-o*n)*x,e[2]=(l*n-s*a)*x,e[3]=h*x,e[4]=(o*t-s*c)*x,e[5]=(s*r-l*t)*x,e[6]=f*x,e[7]=(n*c-u*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-s*u,s*c,-s*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(e,t)),this}rotate(e){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new De,sh=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:e,whitePoint:n,transfer:js,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var We=af();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=Qs("canvas")),Qi.width=e.width,Qi.height=e.height;let s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},of=0,vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var lf=0,ul=new C,Kt=class i extends En{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=On,s=On,r=Tt,a=Wn,l=gn,c=rn,u=i.DEFAULT_ANISOTROPY,o=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ls(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=jl;Kt.DEFAULT_ANISOTROPY=1;var pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],o=c[4],d=c[8],h=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(o-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(o+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,M=(f+1)/2,b=(p+1)/2,S=(o+h)/4,A=(d+x)/4,y=(m+g)/4;return R>M&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=S/n,r=A/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=y/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(h-o)*(h-o));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(d-x)/E,this.z=(h-o)/E,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ba=class extends En{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Kt(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},er=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,l,c,u,o,d,h,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,u,o,d,h,f,m,x,g)}set(e,t,n,s,r,a,l,c,u,o,d,h,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=o,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s),o=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*o,f=a*d,m=l*o,x=l*d;t[0]=c*o,t[4]=-c*d,t[8]=u,t[1]=f+m*u,t[5]=h-x*u,t[9]=-l*c,t[2]=x-h*u,t[6]=m+f*u,t[10]=a*c}else if(e.order==="YXZ"){let h=c*o,f=c*d,m=u*o,x=u*d;t[0]=h+x*l,t[4]=m*l-f,t[8]=a*u,t[1]=a*d,t[5]=a*o,t[9]=-l,t[2]=f*l-m,t[6]=x+h*l,t[10]=a*c}else if(e.order==="ZXY"){let h=c*o,f=c*d,m=u*o,x=u*d;t[0]=h-x*l,t[4]=-a*d,t[8]=m+f*l,t[1]=f+m*l,t[5]=a*o,t[9]=x-h*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let h=a*o,f=a*d,m=l*o,x=l*d;t[0]=c*o,t[4]=m*u-f,t[8]=h*u+x,t[1]=c*d,t[5]=x*u+h,t[9]=f*u-m,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*u,m=l*c,x=l*u;t[0]=c*o,t[4]=x-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*o,t[9]=-l*o,t[2]=-u*o,t[6]=f*d+m,t[10]=h-x*d}else if(e.order==="XZY"){let h=a*c,f=a*u,m=l*c,x=l*u;t[0]=c*o,t[4]=-d,t[8]=u*o,t[1]=h*d+x,t[5]=a*o,t[9]=f*d-m,t[2]=m*d-f,t[6]=l*o,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,hf)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),oi.crossVectors(n,on),oi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),oi.crossVectors(n,on)),oi.normalize(),Gr.crossVectors(on,oi),s[0]=oi.x,s[4]=Gr.x,s[8]=on.x,s[1]=oi.y,s[5]=Gr.y,s[9]=on.y,s[2]=oi.z,s[6]=Gr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],o=n[1],d=n[5],h=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],E=n[3],R=n[7],M=n[11],b=n[15],S=s[0],A=s[4],y=s[8],T=s[12],I=s[1],U=s[5],F=s[9],V=s[13],D=s[2],H=s[6],Z=s[10],J=s[14],ne=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=a*S+l*I+c*D+u*ne,r[4]=a*A+l*U+c*H+u*X,r[8]=a*y+l*F+c*Z+u*Q,r[12]=a*T+l*V+c*J+u*te,r[1]=o*S+d*I+h*D+f*ne,r[5]=o*A+d*U+h*H+f*X,r[9]=o*y+d*F+h*Z+f*Q,r[13]=o*T+d*V+h*J+f*te,r[2]=m*S+x*I+g*D+p*ne,r[6]=m*A+x*U+g*H+p*X,r[10]=m*y+x*F+g*Z+p*Q,r[14]=m*T+x*V+g*J+p*te,r[3]=E*S+R*I+M*D+b*ne,r[7]=E*A+R*U+M*H+b*X,r[11]=E*y+R*F+M*Z+b*Q,r[15]=E*T+R*V+M*J+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],u=e[13],o=e[2],d=e[6],h=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],E=c*f-u*h,R=l*f-u*d,M=l*h-c*d,b=a*f-u*o,S=a*h-c*o,A=a*d-l*o;return t*(x*E-g*R+p*M)-n*(m*E-g*b+p*S)+s*(m*R-x*b+p*A)-r*(m*M-x*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],o=e[10];return t*(a*o-l*u)-n*(r*o-l*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8],d=e[9],h=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],E=t*l-n*a,R=t*c-s*a,M=t*u-r*a,b=n*c-s*l,S=n*u-r*l,A=s*u-r*c,y=o*x-d*m,T=o*g-h*m,I=o*p-f*m,U=d*g-h*x,F=d*p-f*x,V=h*p-f*g,D=E*V-R*F+M*U+b*I-S*T+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return e[0]=(l*V-c*F+u*U)*H,e[1]=(s*F-n*V-r*U)*H,e[2]=(x*A-g*S+p*b)*H,e[3]=(h*S-d*A-f*b)*H,e[4]=(c*I-a*V-u*T)*H,e[5]=(t*V-s*I+r*T)*H,e[6]=(g*M-m*A-p*R)*H,e[7]=(o*A-h*M+f*R)*H,e[8]=(a*F-l*I+u*y)*H,e[9]=(n*I-t*F-r*y)*H,e[10]=(m*S-x*M+p*E)*H,e[11]=(d*M-o*S-f*E)*H,e[12]=(l*T-a*U-c*y)*H,e[13]=(t*U-n*T+s*y)*H,e[14]=(x*R-m*b-g*E)*H,e[15]=(o*b-d*R+h*E)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,c=e.z,u=r*a,o=r*l;return this.set(u*a+n,u*l-s*c,u*c+s*l,0,u*l+s*c,o*l+n,o*c-s*a,0,u*c-s*l,o*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,u=r+r,o=a+a,d=l+l,h=r*u,f=r*o,m=r*d,x=a*o,g=a*d,p=l*d,E=c*u,R=c*o,M=c*d,b=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+M)*b,s[2]=(m-R)*b,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(h+p))*S,s[6]=(g+E)*S,s[7]=0,s[8]=(m+R)*A,s[9]=(g-E)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=es.set(s[0],s[1],s[2]).length(),l=es.set(s[4],s[5],s[6]).length(),c=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let u=1/a,o=1/l,d=1/c;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=o,vn.elements[5]*=o,vn.elements[6]*=o,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,a,l=bn,c=!1){let u=this.elements,o=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(l===bn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===_s)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=o,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=d,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=bn,c=!1){let u=this.elements,o=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(l===bn)m=-2/(a-r),x=-(a+r)/(a-r);else if(l===_s)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=o,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=d,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},es=new C,vn=new Xe,cf=new C(0,0,0),hf=new C(1,1,1),oi=new C,Gr=new C,on=new C,ah=new Xe,oh=new wt,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],u=s[5],o=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-o,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-o,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-o,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uf=0,lh=new C,ts=new wt,Zn=new Xe,Wr=new C,Vs=new C,df=new C,ff=new wt,ch=new C(1,0,0),hh=new C(0,1,0),uh=new C(0,0,1),dh={type:"added"},pf={type:"removed"},ns={type:"childadded",child:null},dl={type:"childremoved",child:null},Ft=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new sn,n=new wt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new De}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Vs,Wr,this.up):Zn.lookAt(Wr,Vs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Zn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),ns.child=e,this.dispatchEvent(ns),ns.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,o=c.length;u<o;u++){let d=c[u];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),u=a(e.textures),o=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),o.length>0&&(n.images=o),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(l){let c=[];for(let u in l){let o=l[u];delete o.metadata,c.push(o)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new C(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},mf={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(u,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let o=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=o.position.distanceTo(d.position),f=.02,m=.005;u.inputState.pinching&&h>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=lc(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fl(a,r,e+1/3),this.g=fl(a,r,e),this.b=fl(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return We.workingToColorSpace(Gt.copy(this),e),Math.round(ze(Gt.r*255,0,255))*65536+Math.round(ze(Gt.g*255,0,255))*256+Math.round(ze(Gt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Gt.copy(this),t);let n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,u,o=(l+a)/2;if(l===a)c=0,u=0;else{let d=a-l;switch(u=o<=.5?d/(a+l):d/(2-a-l),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=o,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=bt){We.workingToColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,s=Gt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Xr);let n=Js(li.h,Xr.h,t),s=Js(li.s,Xr.s,t),r=Js(li.l,Xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ne;Ne.NAMES=mu;var tr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mn=new C,Jn=new C,pl=new C,$n=new C,is=new C,ss=new C,fh=new C,ml=new C,gl=new C,_l=new C,xl=new pt,yl=new pt,vl=new pt,di=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),Jn.subVectors(n,t),pl.subVectors(e,t);let a=Mn.dot(Mn),l=Mn.dot(Jn),c=Mn.dot(pl),u=Jn.dot(Jn),o=Jn.dot(pl),d=a*u-l*l;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(u*c-l*o)*h,m=(a*o-l*c)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,a,l,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(l,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return xl.setScalar(0),yl.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xl,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),Jn.subVectors(e,t),Mn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Mn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;is.subVectors(s,n),ss.subVectors(r,n),ml.subVectors(e,n);let c=is.dot(ml),u=ss.dot(ml);if(c<=0&&u<=0)return t.copy(n);gl.subVectors(e,s);let o=is.dot(gl),d=ss.dot(gl);if(o>=0&&d<=o)return t.copy(s);let h=c*d-o*u;if(h<=0&&c>=0&&o<=0)return a=c/(c-o),t.copy(n).addScaledVector(is,a);_l.subVectors(e,r);let f=is.dot(_l),m=ss.dot(_l);if(m>=0&&f<=m)return t.copy(r);let x=f*u-c*m;if(x<=0&&u>=0&&m<=0)return l=u/(u-m),t.copy(n).addScaledVector(ss,l);let g=o*m-f*d;if(g<=0&&d-o>=0&&f-m>=0)return fh.subVectors(r,s),l=(d-o)/(d-o+(f-m)),t.copy(s).addScaledVector(fh,l);let p=1/(g+x+h);return a=x*p,l=h*p,t.copy(n).addScaledVector(is,a).addScaledVector(ss,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Yr.subVectors(this.max,Hs),rs.subVectors(e.a,Hs),as.subVectors(e.b,Hs),os.subVectors(e.c,Hs),ci.subVectors(as,rs),hi.subVectors(os,as),Ii.subVectors(rs,os);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ii.y,Ii.x,0];return!Ml(t,rs,as,os,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,rs,as,os,Yr))?!1:(Zr.crossVectors(ci,hi),t=[Zr.x,Zr.y,Zr.z],Ml(t,rs,as,os,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,qr=new kn,rs=new C,as=new C,os=new C,ci=new C,hi=new C,Ii=new C,Hs=new C,Yr=new C,Zr=new C,Pi=new C;function Ml(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let l=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),u=t.dot(Pi),o=n.dot(Pi);if(Math.max(-Math.max(c,u,o),Math.min(c,u,o))>l)return!1}return!0}var St=new C,Jr=new Ce,gf=0,$t=class extends En{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var nr=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ir=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},_f=new kn,Gs=new C,Sl=new C,Tn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_f.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Sl)),this.expandByPoint(Gs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xf=0,pn=new Xe,bl=new Ft,ls=new C,ln=new kn,Ws=new kn,Pt=new C,_t=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?ir:nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Ws.setFromBufferAttribute(l),this.morphTargetsRelative?(Pt.addVectors(ln.min,Ws.min),ln.expandByPoint(Pt),Pt.addVectors(ln.max,Ws.max),ln.expandByPoint(Pt)):(ln.expandByPoint(Ws.min),ln.expandByPoint(Ws.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let u=0,o=l.count;u<o;u++)Pt.fromBufferAttribute(l,u),c&&(ls.fromBufferAttribute(e,u),Pt.add(ls)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let y=0;y<n.count;y++)l[y]=new C,c[y]=new C;let u=new C,o=new C,d=new C,h=new Ce,f=new Ce,m=new Ce,x=new C,g=new C;function p(y,T,I){u.fromBufferAttribute(n,y),o.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),o.sub(u),d.sub(u),f.sub(h),m.sub(h);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(x.copy(o).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(o,-m.x).multiplyScalar(U),l[y].add(x),l[T].add(x),l[I].add(x),c[y].add(g),c[T].add(g),c[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let y=0,T=E.length;y<T;++y){let I=E[y],U=I.start,F=I.count;for(let V=U,D=U+F;V<D;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let R=new C,M=new C,b=new C,S=new C;function A(y){b.fromBufferAttribute(s,y),S.copy(b);let T=l[y];R.copy(T),R.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(S,T);let U=M.dot(c[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,U)}for(let y=0,T=E.length;y<T;++y){let I=E[y],U=I.start,F=I.count;for(let V=U,D=U+F;V<D;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,l=new C,c=new C,u=new C,o=new C,d=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),o.subVectors(a,r),d.subVectors(s,r),o.cross(d),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),l.add(o),c.add(o),u.add(o),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),o.subVectors(a,r),d.subVectors(s,r),o.cross(d),n.setXYZ(h+0,o.x,o.y,o.z),n.setXYZ(h+1,o.x,o.y,o.z),n.setXYZ(h+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(l,c){let u=l.array,o=l.itemSize,d=l.normalized,h=new u.constructor(c.length*o),f=0,m=0;for(let x=0,g=c.length;x<g;x++){l.isInterleavedBufferAttribute?f=c[x]*l.data.stride+l.offset:f=c[x]*o;for(let p=0;p<o;p++)h[m++]=u[f++]}return new $t(h,o,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],u=e(c,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let c=[],u=r[l];for(let o=0,d=u.length;o<d;o++){let h=u[o],f=e(h,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],o=[];for(let d=0,h=u.length;d<h;d++){let f=u[d];o.push(f.toJSON(e.data))}o.length>0&&(s[c]=o,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let o=s[u];this.setAttribute(u,o.clone(t))}let r=e.morphAttributes;for(let u in r){let o=[],d=r[u];for(let h=0,f=d.length;h<f;h++)o.push(d[h].clone(t));this.morphAttributes[u]=o}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,o=a.length;u<o;u++){let d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var El=new C,yf=new C,vf=new De,Jt=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=El.subVectors(n,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(El),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vf.getNormalMatrix(e),s=this.coplanarPoint(El).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mf=0,fi=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Rs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Gl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var jn=new C,Tl=new C,$r=new C,Kr=new C,zn=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tl.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot($r),l=Kr.dot(this.direction),c=-Kr.dot($r),u=Kr.lengthSq(),o=Math.abs(1-a*a),d,h,f,m;if(o>0)if(d=a*c-l,h=a*l-c,m=r*o,d>=0)if(h>=-m)if(h<=m){let x=1/o;d*=x,h*=x,f=d*(d+a*h+2*l)+h*(a*d+h+2*c)+u}else h=r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+u;else h=-r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+u;else h<=-m?(d=Math.max(0,-(-a*r+l)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+u):h<=m?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+u):(d=Math.max(0,-(a*r+l)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+u);else h=a>0?-r:r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tl).addScaledVector($r,h),f}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,c,u=1/this.direction.x,o=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),o>=0?(r=(e.min.y-h.y)*o,a=(e.max.y-h.y)*o):(r=(e.max.y-h.y)*o,a=(e.min.y-h.y)*o),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(l=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(l=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,c=l.x,u=l.y,o=l.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,E=n.y-a.y,R=n.z-a.z,M=Math.abs(c),b=Math.abs(u),S=Math.abs(o),A,y,T,I,U,F,V,D,H,Z,J,ne;if(M>=b&&M>=S?(T=c,F=d,H=m,ne=p,c>=0?(A=u,y=o,I=h,U=f,V=x,D=g,Z=E,J=R):(A=o,y=u,I=f,U=h,V=g,D=x,Z=R,J=E)):b>=S?(T=u,F=h,H=x,ne=E,u>=0?(A=o,y=c,I=f,U=d,V=g,D=m,Z=R,J=p):(A=c,y=o,I=d,U=f,V=m,D=g,Z=p,J=R)):(T=o,F=f,H=g,ne=R,o>=0?(A=c,y=u,I=d,U=h,V=m,D=x,Z=p,J=E):(A=u,y=c,I=h,U=d,V=x,D=m,Z=E,J=p)),T===0)return null;let X=A/T,Q=y/T,te=1/T,we=I-X*F,Ee=U-Q*F,ot=V-X*H,qe=D-Q*H,Ke=Z-X*ne,q=J-Q*ne,j=Ke*qe-q*ot,_e=we*q-Ee*Ke,Ue=ot*Ee-qe*we;if(s){if(j<0||_e<0||Ue<0)return null}else if((j<0||_e<0||Ue<0)&&(j>0||_e>0||Ue>0))return null;let me=j+_e+Ue;if(me===0)return null;let ke=te*(j*F+_e*H+Ue*ne);return(me>0?ke<0:ke>0)?null:this.at(ke/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ph=new Xe,Li=new zn,jr=new Tn,mh=new C,Qr=new C,ea=new C,ta=new C,wl=new C,na=new C,gh=new C,ia=new C,xt=class extends Ft{constructor(e=new _t,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){na.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let o=l[c],d=r[c];o!==0&&(wl.fromBufferAttribute(d,e),a?na.addScaledVector(wl,o):na.addScaledVector(wl.sub(t),o))}t.add(na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(jr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(jr,mh)===null||Li.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Li.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,u=r.attributes.uv,o=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=E,b=R;M<b;M+=3){let S=l.getX(M),A=l.getX(M+1),y=l.getX(M+2);s=sa(this,p,e,n,u,o,d,S,A,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let E=l.getX(g),R=l.getX(g+1),M=l.getX(g+2);s=sa(this,a,e,n,u,o,d,E,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),R=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=E,b=R;M<b;M+=3){let S=M,A=M+1,y=M+2;s=sa(this,p,e,n,u,o,d,S,A,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let E=g,R=g+1,M=g+2;s=sa(this,a,e,n,u,o,d,E,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Sf(i,e,t,n,s,r,a,l){let c;if(e.side===jt?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,e.side===vi,l),c===null)return null;ia.copy(l),ia.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(ia);return u<t.near||u>t.far?null:{distance:u,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,a,l,c,u){i.getVertexPosition(l,Qr),i.getVertexPosition(c,ea),i.getVertexPosition(u,ta);let o=Sf(i,e,t,n,Qr,ea,ta,gh);if(o){let d=new C;di.getBarycoord(gh,Qr,ea,ta,d),s&&(o.uv=di.getInterpolatedAttribute(s,l,c,u,d,new Ce)),r&&(o.uv1=di.getInterpolatedAttribute(r,l,c,u,d,new Ce)),a&&(o.normal=di.getInterpolatedAttribute(a,l,c,u,d,new C),o.normal.dot(n.direction)>0&&o.normal.multiplyScalar(-1));let h={a:l,b:c,c:u,normal:new C,materialIndex:0};di.getNormal(Qr,ea,ta,h.normal),o.face=h,o.barycoord=d}return o}var Ui=class extends Kt{constructor(e=null,t=1,n=1,s,r,a,l,c,u=Lt,o=Lt,d,h){super(null,a,l,c,u,o,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cs=new Xe,_h=new Xe,ra=[],xh=new kn,bf=new Xe,Xs=new xt,qs=new Tn,Oi=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),xh.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(xh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),qs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),_h.multiplyMatrices(n,cs),Xs.matrixWorld=_h,Xs.raycast(e,ra);for(let a=0,l=ra.length;a<l;a++){let c=ra[a];c.instanceId=r,c.object=this,t.push(c)}ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(s*this.count),s,this.count,$a,mn));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new Tn,Ef=new Ce(.5,.5),aa=new C,bs=class{constructor(e=new Jt,t=new Jt,n=new Jt,s=new Jt,r=new Jt,a=new Jt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],u=r[3],o=r[4],d=r[5],h=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],E=r[12],R=r[13],M=r[14],b=r[15];if(s[0].setComponents(u-a,f-o,p-m,b-E).normalize(),s[1].setComponents(u+a,f+o,p+m,b+E).normalize(),s[2].setComponents(u+l,f+d,p+x,b+R).normalize(),s[3].setComponents(u-l,f-d,p-x,b-R).normalize(),n)s[4].setComponents(c,h,g,M).normalize(),s[5].setComponents(u-c,f-h,p-g,b-M).normalize();else if(s[4].setComponents(u-c,f-h,p-g,b-M).normalize(),t===bn)s[5].setComponents(u+c,f+h,p+g,b+M).normalize();else if(t===_s)s[5].setComponents(c,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=Ef.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new C,wa=new C,yh=new Xe,Ys=new zn,oa=new Tn,Al=new C,vh=new C,mi=class extends Ft{constructor(e=new _t,t=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(wa);e.setAttribute("lineDistance",new Ze(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;yh.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(yh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,o=n.index,h=n.attributes.position;if(o!==null){let f=Math.max(0,a.start),m=Math.min(o.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=u){let p=o.getX(x),E=o.getX(x+1),R=la(this,e,Ys,c,p,E,x);R&&t.push(R)}if(this.isLineLoop){let x=o.getX(m-1),g=o.getX(f),p=la(this,e,Ys,c,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=u){let p=la(this,e,Ys,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=la(this,e,Ys,c,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function la(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(Ta.fromBufferAttribute(l,s),wa.fromBufferAttribute(l,r),t.distanceSqToSegment(Ta,wa,Al,vh)>n)return;Al.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Al);if(!(u<e.near||u>e.far))return{distance:u,point:vh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Mh=new C,Sh=new C,sr=class extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Mh.fromBufferAttribute(t,s),Sh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mh.distanceTo(Sh);e.setAttribute("lineDistance",new Ze(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rr=class extends Kt{constructor(e=[],t=Mi,n,s,r,a,l,c,u,o){super(e,t,n,s,r,a,l,c,u,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends Kt{constructor(e,t,n,s,r,a,l,c,u){super(e,t,n,s,r,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends Kt{constructor(e,t,n=Rn,s,r,a,l=Lt,c=Lt,u,o=Bn,d=1){if(o!==Bn&&o!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,l,c,o,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Aa=class extends gi{constructor(e,t=Rn,n=Mi,s,r,a=Lt,l=Lt,c,u=Bn){let o={width:e,height:e,depth:1},d=[o,o,o,o,o,o];super(e,e,t,n,s,r,a,l,c,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ar=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vn=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],o=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(d,2));function m(x,g,p,E,R,M,b,S,A,y,T){let I=M/A,U=b/y,F=M/2,V=b/2,D=S/2,H=A+1,Z=y+1,J=0,ne=0,X=new C;for(let Q=0;Q<Z;Q++){let te=Q*U-V;for(let we=0;we<H;we++){let Ee=we*I-F;X[x]=Ee*E,X[g]=te*R,X[p]=D,u.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=S>0?1:-1,o.push(X.x,X.y,X.z),d.push(we/A),d.push(1-Q/y),J+=1}}for(let Q=0;Q<y;Q++)for(let te=0;te<A;te++){let we=h+te+H*Q,Ee=h+te+H*(Q+1),ot=h+(te+1)+H*(Q+1),qe=h+(te+1)+H*Q;c.push(we,Ee,qe),c.push(Ee,ot,qe),ne+=6}l.addGroup(f,ne,T),f+=ne,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Es=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let o=[],d=[],h=[],f=[],m=0,x=[],g=n/2,p=0;E(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(o),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function E(){let M=new C,b=new C,S=0,A=(t-e)/n;for(let y=0;y<=r;y++){let T=[],I=y/r,U=I*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,D=V*c+l,H=Math.sin(D),Z=Math.cos(D);b.x=U*H,b.y=-I*n+g,b.z=U*Z,d.push(b.x,b.y,b.z),M.set(H,A,Z).normalize(),h.push(M.x,M.y,M.z),f.push(V,1-I),T.push(m++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let I=x[T][y],U=x[T+1][y],F=x[T+1][y+1],V=x[T][y+1];(e>0||T!==0)&&(o.push(I,U,V),S+=3),(t>0||T!==r-1)&&(o.push(U,F,V),S+=3)}u.addGroup(p,S,0),p+=S}function R(M){let b=m,S=new Ce,A=new C,y=0,T=M===!0?e:t,I=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*I,0),h.push(0,I,0),f.push(.5,.5),m++;let U=m;for(let F=0;F<=s;F++){let D=F/s*c+l,H=Math.cos(D),Z=Math.sin(D);A.x=T*Z,A.y=g*I,A.z=T*H,d.push(A.x,A.y,A.z),h.push(0,I,0),S.x=H*.5+.5,S.y=Z*.5*I+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let V=b+F,D=U+F;M===!0?o.push(D,D+1,V):o.push(D+1,D,V),y+=3}u.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class i extends Es{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ei=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),u=l+1,o=c+1,d=e/l,h=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<o;p++){let E=p*h-a;for(let R=0;R<u;R++){let M=R*d-r;m.push(M,-E,0),x.push(0,0,1),g.push(R/l),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<l;E++){let R=E+u*p,M=E+u*(p+1),b=E+1+u*(p+1),S=E+1+u*p;f.push(R,M,S),f.push(M,b,S)}this.setIndex(f),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},lr=class i extends _t{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],c=[],u=[],o=[],d=e,h=(t-e)/s,f=new C,m=new Ce;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,o.push(m.x,m.y)}d+=h}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let E=p+g,R=E,M=E+n+1,b=E+n+2,S=E+1;l.push(R,M,S),l.push(M,b,S)}}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var cr=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+l,Math.PI),u=0,o=[],d=new C,h=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let E=[],R=p/n,M=a+R*l,b=e*Math.cos(M),S=Math.sqrt(e*e-b*b),A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let T=y/t,I=s+T*r;d.x=-S*Math.cos(I),d.y=b,d.z=S*Math.sin(I),m.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(T+A,1-R),E.push(u++)}o.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let R=o[p][E+1],M=o[p][E],b=o[p+1][E],S=o[p+1][E+1];(p!==0||a>0)&&f.push(R,M,S),(p!==n-1||c<Math.PI)&&f.push(M,b,S)}this.setIndex(f),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bh(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Xt(i){let e={};for(let t=0;t<i.length;t++){let n=Vi(i[t]);for(let s in n)e[s]=n[s]}return e}function bh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var gu={clone:Vi,merge:Xt},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ra=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ca=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ia=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var hr=class extends pi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pa=class extends _i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ll:r=e,l=2*t-n;break;case Dl:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:a=e,c=2*n-t;break;case Dl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,o=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=r*o,this._offsetNext=a*o}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,E=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,R=(-1-f)*g+(1.5+f)*x+.5*m,M=f*g-f*x;for(let b=0;b!==l;++b)r[b]=p*a[o+b]+E*a[u+b]+R*a[c+b]+M*a[d+b];return r}},La=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=(n-t)/(s-t),d=1-o;for(let h=0;h!==l;++h)r[h]=a[u+h]*d+a[c+h]*o;return r}},Da=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Na=class extends _i{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=this.inTangents,d=this.outTangents;if(!o||!d){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==l;++g)r[g]=a[u+g]*x+a[c+g]*m;return r}let h=l*2,f=e-1;for(let m=0;m!==l;++m){let x=a[u+m],g=a[c+m],p=f*h+m*2,E=d[p],R=d[p+1],M=e*h+m*2,b=o[M],S=o[M+1],A=Cf(n,t,E,b,s);r[m]=_u(A,x,R,S,g)}return r}};function _u(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Rf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Cf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=_u(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Rf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Rl(e.settings)&&(n.settings={inTangents:hs(e.settings.inTangents,Array),outTangents:hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Na(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break;case Il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Rl(this.settings)&&(Eh(this.settings.inTangents,e),Eh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Ie("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Hd(s))for(let l=0,c=s.length;l!==c;++l){let u=s[l];if(isNaN(u)){Ie("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ua,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,u=e[l],o=e[l+1];if(u!==o&&(l!==1||u!==e[0]))if(s)c=!0;else{let d=l*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[h+m]||x!==t[f+m]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let d=l*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Ma;var xi=class extends un{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=$s;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="color";var Fa=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Fa.prototype.ValueTypeName="number";var Oa=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),u=e*l;for(let o=u+l;u!==o;u+=4)wt.slerpFlat(r,0,a,u-l,a,u,c);return r}},ur=class extends un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends un{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=$s;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="vector";var ka=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(o){l++,r===!1&&s.onStart!==void 0&&s.onStart(o,a,l),r=!0},this.itemEnd=function(o){a++,s.onProgress!==void 0&&s.onProgress(o,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(o){s.onError!==void 0&&s.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),c?c(o):o},this.setURLModifier=function(o){return c=o,this},this.addHandler=function(o,d){return u.push(o,d),this},this.removeHandler=function(o){let d=u.indexOf(o);return d!==-1&&u.splice(d,2),this},this.getHandler=function(o){for(let d=0,h=u.length;d<h;d+=2){let f=u[d],m=u[d+1];if(f.global&&(f.lastIndex=0),f.test(o))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xu=new ka,za=class{constructor(e){this.manager=e!==void 0?e:xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fr=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cl=new Xe,Th=new C,wh=new C,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Th.setFromMatrixPosition(e.matrixWorld),t.position.copy(Th),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===_s||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ca=new C,ha=new wt,Fn=new C,pr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,ha,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ca,ha,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ui=new C,Ah=new Ce,Rh=new Ce,Wt=class extends pr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Rh),t.subVectors(Rh,Ah)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ts=class extends pr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=o*this.view.offsetY,c=l-o*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nl=class extends Va{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Nl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var us=-90,ds=1,Ha=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(us,ds,e,t);s.layers=this.layers,this.add(s);let r=new Wt(us,ds,e,t);r.layers=this.layers,this.add(r);let a=new Wt(us,ds,e,t);a.layers=this.layers,this.add(a);let l=new Wt(us,ds,e,t);l.layers=this.layers,this.add(l);let c=new Wt(us,ds,e,t);c.layers=this.layers,this.add(c);let u=new Wt(us,ds,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,c]=t;for(let u of t)this.remove(u);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,u,o]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ga=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hc="\\[\\]\\.:\\/",If=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",Pf="[^"+hc.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",uc),Df=/(WCOD+)?/.source.replace("WCOD",Pf),Nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),Uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),Ff=new RegExp("^"+Lf+Df+Nf+Uf+"$"),Of=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(If,"")}static parseTrackName(e){let t=Ff.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Of.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===u){u=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Ul;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ix=new Float32Array(1);var Ch=new Xe,gr=class{constructor(e,t,n=0,s=1/0){this.ray=new zn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ch.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,n,t);return n.sort(Ih),n}};function Ih(i,e){return i.distance-e.distance}function Fl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Fl(r[a],e,t,!0)}}var ws=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ol=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var _r=class extends En{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function dc(i,e,t,n){let s=Bf(n);switch(t){case ic:return i*e;case $a:return i*e/s.components*s.byteLength;case Ka:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case ja:return i*e*2/s.components*s.byteLength;case sc:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Qa:return i*e*4/s.components*s.byteLength;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case so:case ro:case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:case Tr:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case wo:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wr:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(i){switch(i){case rn:case Ql:return{byteLength:1,components:1};case Cs:case ec:case Cn:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case Rn:case Ya:case mn:return{byteLength:4,components:1};case tc:case nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zf(i){let e=new WeakMap;function t(l,c){let u=l.array,o=l.usage,d=u.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,u,o),l.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,u){let o=c.array,d=c.updateRanges;if(i.bindBuffer(u,l),d.length===0)i.bufferSubData(u,0,o);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(u,x.start*o.BYTES_PER_ELEMENT,o,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let o=e.get(l);(!o||o.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:s,remove:r,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Vf,alphahash_pars_fragment:Hf,alphamap_fragment:Gf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:$f,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:Qf,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:dp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:vp,envmap_pars_fragment:Mp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Dp,envmap_vertex:bp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:wp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Pp,lights_pars_begin:Lp,lights_toon_fragment:Np,lights_toon_pars_fragment:Up,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:Bp,lights_physical_pars_fragment:kp,lights_fragment_begin:zp,lights_fragment_maps:Vp,lights_fragment_end:Hp,lightprobes_pars_fragment:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:$p,map_particle_pars_fragment:Kp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:a0,normal_pars_fragment:o0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:y0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:I0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:k0,worldpos_vertex:z0,background_vert:V0,background_frag:H0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:Z0,distance_vert:J0,distance_frag:$0,equirect_vert:K0,equirect_frag:j0,linedashed_vert:Q0,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:xm,sprite_vert:ym,sprite_frag:vm},he={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},qn={basic:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Xt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Xt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Xt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Xt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Xt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Xt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Xt([he.common,he.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Xt([he.lights,he.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qn.physical={uniforms:Xt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Do={r:0,b:0,g:0},Mm=new Xe,Vu=new De;Vu.set(-1,0,0,0,1,0,0,0,1);function Sm(i,e,t,n,s,r){let a=new Ne(0),l=s===!0?0:1,c,u,o=null,d=0,h=null;function f(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let M=E.backgroundBlurriness>0;R=e.get(R,M)}return R}function m(E){let R=!1,M=f(E);M===null?g(a,l):M&&M.isColor&&(g(M,1),R=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===yr)?(u===void 0&&(u=new xt(new Vn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Vi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Vu),u.material.toneMapped=We.getTransfer(M.colorSpace)!==et,(o!==M||d!==M.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,o=M,d=M.version,h=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xt(new ei(2,2),new hn({name:"BackgroundMaterial",uniforms:Vi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=We.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(o!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,o=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,R){E.getRGB(Do,cc(i)),t.buffers.color.setClear(Do.r,Do.g,Do.b,R,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),l=R,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,g(a,l)},render:m,addToRenderList:x,dispose:p}}function bm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function l(U,F,V,D,H){let Z=!1,J=d(U,D,V,F);r!==J&&(r=J,u(r.object)),Z=f(U,D,V,H),Z&&m(U,D,V,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(U,F,V,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function u(U){return i.bindVertexArray(U)}function o(U){return i.deleteVertexArray(U)}function d(U,F,V,D){let H=D.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let J=U.isInstancedMesh===!0?U.id:0,ne=Z[J];ne===void 0&&(ne={},Z[J]=ne);let X=ne[V.id];X===void 0&&(X={},ne[V.id]=X);let Q=X[H];return Q===void 0&&(Q=h(c()),X[H]=Q),Q}function h(U){let F=[],V=[],D=[];for(let H=0;H<t;H++)F[H]=0,V[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,F,V,D){let H=r.attributes,Z=F.attributes,J=0,ne=V.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=H[X],we=Z[X];if(we===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(we=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(we=U.instanceColor)),te===void 0||te.attribute!==we||we&&te.data!==we.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function m(U,F,V,D){let H={},Z=F.attributes,J=0,ne=V.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=Z[X];te===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let we={};we.attribute=te,te&&te.data&&(we.data=te.data),H[X]=we,J++}r.attributes=H,r.attributesNum=J,r.index=D}function x(){let U=r.newAttributes;for(let F=0,V=U.length;F<V;F++)U[F]=0}function g(U){p(U,0)}function p(U,F){let V=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;V[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),H[U]!==F&&(i.vertexAttribDivisor(U,F),H[U]=F)}function E(){let U=r.newAttributes,F=r.enabledAttributes;for(let V=0,D=F.length;V<D;V++)F[V]!==U[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function R(U,F,V,D,H,Z,J){J===!0?i.vertexAttribIPointer(U,F,V,H,Z):i.vertexAttribPointer(U,F,V,D,H,Z)}function M(U,F,V,D){x();let H=D.attributes,Z=V.getAttributes(),J=F.defaultAttributeValues;for(let ne in Z){let X=Z[ne];if(X.location>=0){let Q=H[ne];if(Q===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let te=Q.normalized,we=Q.itemSize,Ee=e.get(Q);if(Ee===void 0)continue;let ot=Ee.buffer,qe=Ee.type,Ke=Ee.bytesPerElement,q=qe===i.INT||qe===i.UNSIGNED_INT||Q.gpuType===Ya;if(Q.isInterleavedBufferAttribute){let j=Q.data,_e=j.stride,Ue=Q.offset;if(j.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)p(X.location+me,j.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<X.locationSize;me++)g(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let me=0;me<X.locationSize;me++)R(X.location+me,we/X.locationSize,qe,te,_e*Ke,(Ue+we/X.locationSize*me)*Ke,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let j=0;j<X.locationSize;j++)R(X.location+j,we/X.locationSize,qe,te,we*Ke,we/X.locationSize*j*Ke,q)}}else if(J!==void 0){let te=J[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}E()}function b(){T();for(let U in n){let F=n[U];for(let V in F){let D=F[V];for(let H in D){let Z=D[H];for(let J in Z)o(Z[J].object),delete Z[J];delete D[H]}}delete n[U]}}function S(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let V in F){let D=F[V];for(let H in D){let Z=D[H];for(let J in Z)o(Z[J].object),delete Z[J];delete D[H]}}delete n[U.id]}function A(U){for(let F in n){let V=n[F];for(let D in V){let H=V[D];if(H[U.id]===void 0)continue;let Z=H[U.id];for(let J in Z)o(Z[J].object),delete Z[J];delete H[U.id]}}}function y(U){for(let F in n){let V=n[F],D=U.isInstancedMesh===!0?U.id:0,H=V[D];if(H!==void 0){for(let Z in H){let J=H[Z];for(let ne in J)o(J[ne].object),delete J[ne];delete H[Z]}delete V[D],Object.keys(V).length===0&&delete n[F]}}}function T(){I(),a=!0,r!==s&&(r=s,u(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function Em(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,o){o!==0&&(i.drawArraysInstanced(n,c,u,o),t.update(u,n,o))}function l(c,u,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,o);let h=0;for(let f=0;f<o;f++)h+=u[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Tm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){let y=A===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&A!==mn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",o=c(u);o!==u&&(Ae("WebGLRenderer:",u,"not supported, using",o,"instead."),u=o);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:M,maxSamples:b,samples:S}}function wm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Jt,l=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,o(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=o(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?o(null):u();else{let E=r?0:n,R=E*4,M=p.clippingState||null;c.value=M,M=o(m,h,R,f);for(let b=0;b!==R;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function o(d,h,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,E=h.matrixWorldInverse;l.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,M=f;R!==x;++R,M+=4)a.copy(d[R]).applyMatrix4(E,l),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Us=4,Am=6,Rm=20,Cm=256,Ar=new Ts,yu=new Ne,fc=null,pc=0,mc=0,gc=!1,Im=new C,Hi=new C,Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=Im}=r;fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Cn,format:gn,colorSpace:Ks,depthBuffer:!1},s=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pm(r)),this._blurMaterial=Dm(r,e,t),this._ggxMaterial=Lm(r,e,t)}return s}_compileMaterial(e){let t=new xt(new _t,e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,n,s,r){let c=new Wt(90,1,t,n),u=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(yu),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Vn,new Dt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,p=!0):(g.color.copy(yu),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(c.up.set(0,u[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+o[R],r.y,r.z)):M===1?(c.up.set(0,0,u[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+o[R],r.z)):(c.up.set(0,u[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+o[R]));let b=this._cubeSize;Ns(s,M*b,R>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Mi||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Ns(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ar)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-o*o),h=u*1.25,f=d*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Us?n-m+Us:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Ns(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(l,Ar),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Ns(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(l,Ar)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let o=this._sizeLods[s],d=3*o*(s>this._lodMax-Us?s-this._lodMax+Us:0),h=4*(this._cubeSize-o);Ns(t,d,h,3*o,2*o),a.setRenderTarget(t),a.render(c,Ar)}};function Pm(i){let e=[],t=[],n=i,s=i-Us+1+Am;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),c=-l,u=1+l,o=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,h=6,f=3,m=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,R=p>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];m.set(M,f*h*p);for(let b=0;b<h;b++){let S=o[b*2]*2-1,A=o[b*2+1]*2-1;p===0?Hi.set(1,A,S):p===1?Hi.set(-S,1,-A):p===2?Hi.set(-S,A,1):p===3?Hi.set(-1,A,-S):p===4?Hi.set(-S,-1,A):Hi.set(S,A,-1),Hi.toArray(x,(p*h+b)*f)}}let g=new _t;g.setAttribute("position",new $t(m,f)),g.setAttribute("outputDirection",new $t(x,f)),t.push(new xt(g,null)),n>Us&&n--}return{lodMeshes:t,sizeLods:e}}function vu(i,e,t){let n=new nn(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lm(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Dm(i,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Mu(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Su(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fo=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Gn});r.uniforms.tEquirect.value=t;let a=new xt(s,r),l=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Tt),new Ha(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Nm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Wa||f===Xa)if(e.has(h)){let m=e.get(h).texture;return l(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let x=new Fo(m.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",u),l(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,m=f===Wa||f===Xa,x=f===Mi||f===zi;if(m||x){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Uo(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let E=h.image;return m&&E&&E.height>0||x&&E&&c(E)?(n===null&&(n=new Uo(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",o),g.texture):null}}}return h}function l(h,f){return f===Wa?h.mapping=Mi:f===Xa&&(h.mapping=zi),h}function c(h){let f=0,m=6;for(let x=0;x<m;x++)h[x]!==void 0&&f++;return f===m}function u(h){let f=h.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function o(h){let f=h.target;f.removeEventListener("dispose",o);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Um(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ni("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function u(d){let h=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let E=f.array;x=f.version;for(let R=0,M=E.length;R<M;R+=3){let b=E[R+0],S=E[R+1],A=E[R+2];h.push(b,S,S,A,A,b)}}else{let E=m.array;x=m.version;for(let R=0,M=E.length/3-1;R<M;R+=3){let b=R+0,S=R+1,A=R+2;h.push(b,S,S,A,A,b)}}let g=new(m.count>=65535?ir:nr)(h,1);g.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function o(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&u(d)}else u(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:o}}function Om(i,e,t){let n;function s(d){n=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function u(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function o(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=h[g];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=o}function Bm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function km(i,e,t){let n=new WeakMap,s=new pt;function r(a,l,c){let u=a.morphTargetInfluences,o=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=o!==void 0?o.length:0,h=n.get(l);if(h===void 0||h.count!==d){let T=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=l.morphAttributes.position!==void 0,m=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],E=l.morphAttributes.color||[],R=0;f===!0&&(R=1),m===!0&&(R=2),x===!0&&(R=3);let M=l.attributes.position.count*R,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*b*4*d),A=new er(S,M,b,d);A.type=mn,A.needsUpdate=!0;let y=R*4;for(let I=0;I<d;I++){let U=g[I],F=p[I],V=E[I],D=M*b*4*I;for(let H=0;H<U.count;H++){let Z=H*y;f===!0&&(s.fromBufferAttribute(U,H),S[D+Z+0]=s.x,S[D+Z+1]=s.y,S[D+Z+2]=s.z,S[D+Z+3]=0),m===!0&&(s.fromBufferAttribute(F,H),S[D+Z+4]=s.x,S[D+Z+5]=s.y,S[D+Z+6]=s.z,S[D+Z+7]=0),x===!0&&(s.fromBufferAttribute(V,H),S[D+Z+8]=s.x,S[D+Z+9]=s.y,S[D+Z+10]=s.z,S[D+Z+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new Ce(M,b)},n.set(l,h),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<u.length;x++)f+=u[x];let m=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function zm(i,e,t,n,s){let r=new WeakMap;function a(u){let o=s.render.frame,d=u.geometry,h=e.get(u,d);if(r.get(h)!==o&&(e.update(h),r.set(h,o)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==o&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,o))),u.isSkinnedMesh){let f=u.skeleton;r.get(f)!==o&&(f.update(),r.set(f,o))}return h}function l(){r=new WeakMap}function c(u){let o=u.target;o.removeEventListener("dispose",c),n.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:a,dispose:l}}var Vm={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function Hm(i,e,t,n,s,r){let a=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,u=new _t;u.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let o=new Ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(u,o),h=new Ts(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,E=[],R=!1;this.setSize=function(M,b){a.setSize(M,b),l!==null&&l.setSize(M,b),c!==null&&c.setSize(M,b);for(let S=0;S<E.length;S++){let A=E[S];A.setSize&&A.setSize(M,b)}},this.setEffects=function(M){E=M,R=E.length>0&&E[0].isRenderPass===!0;let b=a.width,S=a.height;E.length>0&&l===null&&(l=new nn(b,S,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(b,S,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<E.length;A++){let y=E[A];y.setSize&&y.setSize(b,S)}},this.begin=function(M,b){if(x||M.toneMapping===An&&E.length===0)return!1;if(p=b,b!==null){let S=b.width,A=b.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return R===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=An,!0},this.hasRenderPass=function(){return R},this.end=function(M,b){M.toneMapping=g,x=!0;let S=a,A=l;for(let y=0;y<E.length;y++){let T=E[y];T.enabled!==!1&&(T.render(M,A,S,b),T.needsSwap!==!1&&(S=A,A=A===l?c:l))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,o.defines={},We.getTransfer(f)===et&&(o.defines.SRGB_TRANSFER="");let y=Vm[m];y&&(o.defines[y]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(p),M.render(d,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),o.dispose()}}var Hu=new Kt,yc=new gi(1,1),Gu=new er,Wu=new Ea,Xu=new rr,bu=[],Eu=[],Tu=new Float32Array(16),wu=new Float32Array(9),Au=new Float32Array(4);function Os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Rt(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),Rt(t,n)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),Rt(t,n)}}function $m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=t.isReversedDepthBuffer()?Lo:Po,r=yc):r=Hu,t.setTexture2D(e||r,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wu,s)}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xu,s)}function og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gu,s)}function lg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,e){i.uniform1fv(this.addr,e)}function hg(i,e){let t=Os(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){let t=Os(e,this.size,3);i.uniform3fv(this.addr,t)}function dg(i,e){let t=Os(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=Os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pg(i,e){let t=Os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mg(i,e){let t=Os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gg(i,e){i.uniform1iv(this.addr,e)}function _g(i,e){i.uniform2iv(this.addr,e)}function xg(i,e){i.uniform3iv(this.addr,e)}function yg(i,e){i.uniform4iv(this.addr,e)}function vg(i,e){i.uniform1uiv(this.addr,e)}function Mg(i,e){i.uniform2uiv(this.addr,e)}function Sg(i,e){i.uniform3uiv(this.addr,e)}function bg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yc:a=Hu;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function Tg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wu,r[a])}function wg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xu,r[a])}function Ag(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gu,r[a])}function Rg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}},Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rg(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Ru(i,e){i.seq.push(e),i.map[e.id]=e}function Cg(i,e,t){let n=i.name,s=n.length;for(_c.lastIndex=0;;){let r=_c.exec(n),a=_c.lastIndex,l=r[1],c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===s){Ru(t,u===void 0?new vc(l,i,e):new Mc(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new Sc(l),Ru(t,d)),t=d}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Cg(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Cu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ig=37297,Pg=0;function Lg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Iu=new De;function Dg(i){We._getMatrix(Iu,We.workingColorSpace,i);let e=`mat3( ${Iu.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case js:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lg(i.getShaderSource(e),l)}else return r}function Ng(i,e){let t=Dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ug={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[Zl]:"ACESFilmic",[$l]:"AgX",[Kl]:"Neutral",[Jl]:"Custom"};function Fg(i,e){let t=Ug[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var No=new C;function Og(){We.getLuminanceCoefficients(No);let i=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function kg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Cr(i){return i!==""}function Lu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(Vg,Gg)}var Hg=new Map;function Gg(i,e){let t=Be[e];if(t===void 0){let n=Hg.get(e);if(n!==void 0)t=Be[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bc(t)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(i){return i.replace(Wg,Xg)}function Xg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qg={[xr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[Mi]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[zi]:"ENVMAP_MODE_REFRACTION"};function Kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jg={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function Qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jg[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=Yg(t),u=Jg(t),o=Kg(t),d=Qg(t),h=e_(t),f=Bg(t),m=kg(r),x=s.createProgram(),g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(g=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+o:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Be.tonemapping_pars_fragment:"",t.toneMapping!==An?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),Og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=bc(a),a=Lu(a,t),a=Du(a,t),l=bc(l),l=Lu(l,t),l=Du(l,t),a=Nu(a),l=Nu(l),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=E+g+a,M=E+p+l,b=Cu(s,s.VERTEX_SHADER,R),S=Cu(s,s.FRAGMENT_SHADER,M);s.attachShader(x,b),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(U){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(S)||"",H=F.trim(),Z=V.trim(),J=D.trim(),ne=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let Q=Pu(s,b,"vertex"),te=Pu(s,S,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Q+`
`+te)}else H!==""?Ae("WebGLProgram: Program Info Log:",H):(Z===""||J==="")&&(X=!1);X&&(U.diagnostics={runnable:ne,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(S),y=new Fs(s,x),T=zg(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,Ig)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var n_=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tc(e),t.set(e,n)),n}},Tc=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};function i_(i){return i===bi||i===Tr||i===wr}function s_(i,e,t,n,s,r){let a=new Ms,l=new Ec,c=new Set,u=[],o=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,T,I,U,F,V){let D=U.fog,H=F.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||Z,J),X=ne&&ne.mapping===yr?ne.image.height:null,Q=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Ae("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=te!==void 0?te.length:0,Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let ot,qe,Ke,q;if(Q){let ct=qn[Q];ot=ct.vertexShader,qe=ct.fragmentShader}else{ot=y.vertexShader,qe=y.fragmentShader;let ct=l.getVertexShaderStage(y),je=l.getFragmentShaderStage(y);l.update(y,ct,je),Ke=ct.id,q=je.id}let j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,ke=!!y.map,Et=!!y.matcap,Ve=!!ne,Je=!!y.aoMap,lt=!!y.lightMap,Ge=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,It=!!y.displacementMap,tn=!!y.emissiveMap,gt=!!y.metalnessMap,vt=!!y.roughnessMap,N=y.anisotropy>0,zt=y.clearcoat>0,tt=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,O=y.sheen>0,z=y.transmission>0,W=N&&!!y.anisotropyMap,ie=zt&&!!y.clearcoatMap,se=zt&&!!y.clearcoatNormalMap,Y=zt&&!!y.clearcoatRoughnessMap,K=_&&!!y.iridescenceMap,re=_&&!!y.iridescenceThicknessMap,Se=O&&!!y.sheenColorMap,ce=O&&!!y.sheenRoughnessMap,ae=!!y.specularMap,be=!!y.specularColorMap,Re=!!y.specularIntensityMap,Fe=z&&!!y.transmissionMap,L=z&&!!y.thicknessMap,oe=!!y.gradientMap,$=!!y.alphaMap,le=y.alphaTest>0,fe=!!y.alphaHash,ee=!!y.extensions,Te=An;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ve={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:qe,defines:y.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:me,batchingColor:me&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:Et,envMap:Ve,envMapMode:Ve&&ne.mapping,envMapCubeUVHeight:X,aoMap:Je,lightMap:lt,bumpMap:Ge,normalMap:ft,displacementMap:It,emissiveMap:tn,normalMapObjectSpace:ft&&y.normalMapType===nu,normalMapTangentSpace:ft&&y.normalMapType===rc,packedNormalMap:ft&&y.normalMapType===rc&&i_(y.normalMap.format),metalnessMap:gt,roughnessMap:vt,anisotropy:N,anisotropyMap:W,clearcoat:zt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:Y,dispersion:tt,retroreflection:w,iridescence:_,iridescenceMap:K,iridescenceThicknessMap:re,sheen:O,sheenColorMap:Se,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:be,specularIntensityMap:Re,transmission:z,transmissionMap:Fe,thicknessMap:L,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Rs&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:fe,combine:y.combine,mapUv:ke&&m(y.map.channel),aoMapUv:Je&&m(y.aoMap.channel),lightMapUv:lt&&m(y.lightMap.channel),bumpMapUv:Ge&&m(y.bumpMap.channel),normalMapUv:ft&&m(y.normalMap.channel),displacementMapUv:It&&m(y.displacementMap.channel),emissiveMapUv:tn&&m(y.emissiveMap.channel),metalnessMapUv:gt&&m(y.metalnessMap.channel),roughnessMapUv:vt&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:ie&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&m(y.sheenRoughnessMap.channel),specularMapUv:ae&&m(y.specularMap.channel),specularColorMapUv:be&&m(y.specularColorMap.channel),specularIntensityMapUv:Re&&m(y.specularIntensityMap.channel),transmissionMapUv:Fe&&m(y.transmissionMap.channel),thicknessMapUv:L&&m(y.thicknessMap.channel),alphaMapUv:$&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ft||N),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(ke||$),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:tn&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&y.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(T,y),E(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){let T=f[y.type],I;if(T){let U=qn[T];I=gu.clone(U.uniforms)}else I=y.uniforms;return I}function M(y,T){let I=o.get(T);return I!==void 0?++I.usedTimes:(I=new t_(i,T,y,s),u.push(I),o.set(T,I)),I}function b(y){if(--y.usedTimes===0){let T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),o.delete(y.cacheKey),y.destroy()}}function S(y){l.remove(y)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:b,releaseShaderCache:S,programs:u,dispose:A}}function r_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function a_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function l(h,f,m,x,g,p){let E=i[e];return E===void 0?(E={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},i[e]=E):(E.id=h.id,E.object=h,E.geometry=f,E.material=m,E.materialVariant=a(h),E.groupOrder=x,E.renderOrder=h.renderOrder,E.z=g,E.group=p),e++,E}function c(h,f,m,x,g,p,E){E.reversedDepth===!0&&(g=-g);let R=l(h,f,m,x,g,p);m.transmission>0?n.push(R):m.transparent===!0?s.push(R):t.push(R)}function u(h,f,m,x,g,p){let E=l(h,f,m,x,g,p);m.transmission>0?n.unshift(E):m.transparent===!0?s.unshift(E):t.unshift(E)}function o(h,f){t.length>1&&t.sort(h||a_),n.length>1&&n.sort(f||Fu),s.length>1&&s.sort(f||Fu)}function d(){for(let h=e,f=i.length;h<f;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:d,sort:o}}function o_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ou,i.set(n,[a])):s>=r.length?(a=new Ou,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ne};break;case"SpotLight":t={position:new C,direction:new C,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function c_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var h_=0;function u_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d_(i){let e=new l_,t=c_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new C);let s=new C,r=new Xe,a=new Xe;function l(u){let o=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,E=0,R=0,M=0,b=0,S=0,A=0,y=0,T=0,I=0;u.sort(u_);for(let F=0,V=u.length;F<V;F++){let D=u[F],H=D.color,Z=D.intensity,J=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===bi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)o+=H.r*Z,d+=H.g*Z,h+=H.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],Z);I++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=te,n.sunShadowMap[m]=ne;let we=Q.getViewportCount();for(let Ee=0;Ee<we;Ee++)n.sunShadowMatrix[x+Ee]=Q.getMatrix(Ee),n.sunShadowCascade[x+Ee]=Q._cascadeData[Ee];x+=we,m++}n.sun[f]=X,f++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=X,g++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[E]=X;let Q=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,Q.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[E]=Q.matrix,D.castShadow){let te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[E]=te,n.spotShadowMap[E]=ne,A++}E++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=X,R++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[M]=X,M++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=o,n.ambient[1]=d,n.ambient[2]=h;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==E||U.rectAreaLength!==R||U.hemiLength!==M||U.numSunShadows!==m||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==A||U.numSpotMaps!==y||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=E,n.rectArea.length=R,n.point.length=p,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=E,U.rectAreaLength=R,U.hemiLength=M,U.numSunShadows=m,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=A,U.numSpotMaps=y,U.numLightProbes=I,n.version=h_++)}function c(u,o){let d=0,h=0,f=0,m=0,x=0,g=0,p=o.matrixWorldInverse;for(let E=0,R=u.length;E<R;E++){let M=u[E];if(M.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:n}}function Bu(i){let e=new d_(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function l(h){n.push(h)}function c(h){s.push(h)}function u(){e.setup(t)}function o(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:u,setupLightsView:o,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function f_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Bu(i),e.set(s,[l])):r>=a.length?(l=new Bu(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],__=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],ku=new Xe,Rr=new C,xc=new C;function x_(i,e,t){let n=new bs,s=new Ce,r=new Ce,a=new pt,l=new Ca,c=new Ia,u={},o=t.maxTextureSize,d={[vi]:jt,[jt]:vi,[Ot]:Ot},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let p=this.type;this.render=function(S,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Dh&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==this.type;V&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=S.length;D<H;D++){let Z=S[D],J=Z.shadow;if(J===void 0){Ae("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ne=J.getFrameExtents();s.multiply(ne),r.copy(J.mapSize),(s.x>o||s.y>o)&&(s.x>o&&(r.x=Math.floor(o/ne.x),s.x=r.x*ne.x,J.mapSize.x=r.x),s.y>o&&(r.y=Math.floor(o/ne.y),s.y=r.y*ne.y,J.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===As){if(Z.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new nn(s.x,s.y,{format:bi,type:Cn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new gi(s.x,s.y,mn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=Bn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Lt,J.map.depthTexture.magFilter=Lt}else Z.isPointLight?(J.map=new Fo(s.x),J.map.depthTexture=new Aa(s.x,Rn)):(J.map=new nn(s.x,s.y),J.map.depthTexture=new gi(s.x,s.y,Rn)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=Bn,this.type===xr?(J.map.depthTexture.compareFunction=X?Lo:Po,J.map.depthTexture.minFilter=Tt,J.map.depthTexture.magFilter=Tt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Lt,J.map.depthTexture.magFilter=Lt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,y);for(let te=0;te<Q;te++){let we=J.getCamera(te);if(Z.isPointLight){let Ee=J.camera,ot=J.matrix,qe=Z.distance||Ee.far;qe!==Ee.far&&(Ee.far=qe,Ee.updateProjectionMatrix()),Rr.setFromMatrixPosition(Z.matrixWorld),Ee.position.copy(Rr),xc.copy(Ee.position),xc.add(g_[te]),Ee.up.copy(__[te]),Ee.lookAt(xc),Ee.updateMatrixWorld(),ot.makeTranslation(-Rr.x,-Rr.y,-Rr.z),ku.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ku,Ee.coordinateSystem,Ee.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,te),i.clear();else{te===0&&(i.setRenderTarget(J.map),i.clear());let Ee=J.getViewport(te);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),F.viewport(a)}n=J.getFrustum(te),M(A,y,we,Z,this.type)}J.isPointLightShadow!==!0&&this.type===As&&E(J,y),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,I,U)};function E(S,A){let y=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new nn(s.x,s.y,{format:bi,type:Cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,h,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function R(S,A,y,T){let I=null,U=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)I=U;else if(I=y.isPointLight===!0?c:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=I.uuid,V=A.uuid,D=u[F];D===void 0&&(D={},u[F]=D);let H=D[V];H===void 0&&(H=I.clone(),D[V]=H,A.addEventListener("dispose",b)),I=H}if(I.visible=A.visible,I.wireframe=A.wireframe,T===As?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=y}return I}function M(S,A,y,T,I){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===As)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let V=e.update(S),D=S.material;if(Array.isArray(D)){let H=V.groups;for(let Z=0,J=H.length;Z<J;Z++){let ne=H[Z],X=D[ne.materialIndex];if(X&&X.visible){let Q=R(S,X,T,I);S.onBeforeShadow(i,S,A,y,V,Q,ne),i.renderBufferDirect(y,null,V,Q,S,ne),S.onAfterShadow(i,S,A,y,V,Q,ne)}}}else if(D.visible){let H=R(S,D,T,I);S.onBeforeShadow(i,S,A,y,V,H,null),i.renderBufferDirect(y,null,V,H,S,null),S.onAfterShadow(i,S,A,y,V,H,null)}}let F=S.children;for(let V=0,D=F.length;V<D;V++)M(F[V],A,y,T,I)}function b(S){S.target.removeEventListener("dispose",b);for(let y in u){let T=u[y],I=S.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function y_(i,e){function t(){let L=!1,oe=new pt,$=null,le=new pt(0,0,0,0);return{setMask:function(fe){$!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ee,Te,ve,ct){ct===!0&&(fe*=ve,ee*=ve,Te*=ve),oe.set(fe,ee,Te,ve),le.equals(oe)===!1&&(i.clearColor(fe,ee,Te,ve),le.copy(oe))},reset:function(){L=!1,$=null,le.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,$=null,le=null,fe=null;return{setReversed:function(ee){if(oe!==ee){let Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;let ve=fe;fe=null,this.setClear(ve)}},getReversed:function(){return oe},setTest:function(ee){ee?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ee){$!==ee&&!L&&(i.depthMask(ee),$=ee)},setFunc:function(ee){if(oe&&(ee=pu[ee]),le!==ee){switch(ee){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){L=ee},setClear:function(ee){fe!==ee&&(fe=ee,oe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){L=!1,$=null,le=null,fe=null,oe=!1}}}function s(){let L=!1,oe=null,$=null,le=null,fe=null,ee=null,Te=null,ve=null,ct=null;return{setTest:function(je){L||(je?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(je){oe!==je&&!L&&(i.stencilMask(je),oe=je)},setFunc:function(je,yn,Nn){($!==je||le!==yn||fe!==Nn)&&(i.stencilFunc(je,yn,Nn),$=je,le=yn,fe=Nn)},setOp:function(je,yn,Nn){(ee!==je||Te!==yn||ve!==Nn)&&(i.stencilOp(je,yn,Nn),ee=je,Te=yn,ve=Nn)},setLocked:function(je){L=je},setClear:function(je){ct!==je&&(i.clearStencil(je),ct=je)},reset:function(){L=!1,oe=null,$=null,le=null,fe=null,ee=null,Te=null,ve=null,ct=null}}}let r=new t,a=new n,l=new s,c=new WeakMap,u=new WeakMap,o={},d={},h={},f=new WeakMap,m=[],x=null,g=!1,p=null,E=null,R=null,M=null,b=null,S=null,A=null,y=new Ne(0,0,0),T=0,I=!1,U=null,F=null,V=null,D=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=ne>=2);let Q=null,te={},we=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ot=new pt().fromArray(we),qe=new pt().fromArray(Ee);function Ke(L,oe,$,le){let fe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<$;Te++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ee}let q={};q[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),j(i.DEPTH_TEST),a.setFunc(ms),Ge(!1),ft(Bl),j(i.CULL_FACE),Je(Gn);function j(L){o[L]!==!0&&(i.enable(L),o[L]=!0)}function _e(L){o[L]!==!1&&(i.disable(L),o[L]=!1)}function Ue(L,oe){return h[L]!==oe?(i.bindFramebuffer(L,oe),h[L]=oe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(L,oe){let $=m,le=!1;if(L){$=f.get(oe),$===void 0&&($=[],f.set(oe,$));let fe=L.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=fe.length;ee<Te;ee++)$[ee]=i.COLOR_ATTACHMENT0+ee;$.length=fe.length,le=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,le=!0);le&&i.drawBuffers($)}function ke(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let Et={[ki]:i.FUNC_ADD,[Uh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};Et[Oh]=i.MIN,Et[Bh]=i.MAX;let Ve={[kh]:i.ZERO,[zh]:i.ONE,[Vh]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Gl]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[$h]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(L,oe,$,le,fe,ee,Te,ve,ct,je){if(L===Gn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),L!==Nh){if(L!==p||je!==I){if((E!==ki||b!==ki)&&(i.blendEquation(i.FUNC_ADD),E=ki,b=ki),je)switch(L){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",L);break}else switch(L){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",L);break}R=null,M=null,S=null,A=null,y.set(0,0,0),T=0,p=L,I=je}return}fe=fe||oe,ee=ee||$,Te=Te||le,(oe!==E||fe!==b)&&(i.blendEquationSeparate(Et[oe],Et[fe]),E=oe,b=fe),($!==R||le!==M||ee!==S||Te!==A)&&(i.blendFuncSeparate(Ve[$],Ve[le],Ve[ee],Ve[Te]),R=$,M=le,S=ee,A=Te),(ve.equals(y)===!1||ct!==T)&&(i.blendColor(ve.r,ve.g,ve.b,ct),y.copy(ve),T=ct),p=L,I=!1}function lt(L,oe){L.side===Ot?_e(i.CULL_FACE):j(i.CULL_FACE);let $=L.side===jt;oe&&($=!$),Ge($),L.blending===Rs&&L.transparent===!1?Je(Gn):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;l.setTest(le),le&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),tn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function ft(L){L!==Ph?(j(i.CULL_FACE),L!==F&&(L===Bl?i.cullFace(i.BACK):L===Lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),F=L}function It(L){L!==V&&(J&&i.lineWidth(L),V=L)}function tn(L,oe,$){L?(j(i.POLYGON_OFFSET_FILL),(D!==oe||H!==$)&&(D=oe,H=$,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,$))):_e(i.POLYGON_OFFSET_FILL)}function gt(L){L?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function vt(L){L===void 0&&(L=i.TEXTURE0+Z-1),Q!==L&&(i.activeTexture(L),Q=L)}function N(L,oe,$){$===void 0&&(Q===null?$=i.TEXTURE0+Z-1:$=Q);let le=te[$];le===void 0&&(le={type:void 0,texture:void 0},te[$]=le),(le.type!==L||le.texture!==oe)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(L,oe||q[L]),le.type=L,le.texture=oe)}function zt(){let L=te[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function _(){try{i.texSubImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function O(){try{i.texSubImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function se(){try{i.texStorage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function K(){try{i.texImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function re(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function Se(L,oe){d[L]!==oe&&(i.pixelStorei(L,oe),d[L]=oe)}function ce(L){ot.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function ae(L){qe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),qe.copy(L))}function be(L,oe){let $=u.get(oe);$===void 0&&($=new WeakMap,u.set(oe,$));let le=$.get(L);le===void 0&&(le=i.getUniformBlockIndex(oe,L.name),$.set(L,le))}function Re(L,oe){let le=u.get(oe).get(L);c.get(oe)!==le&&(i.uniformBlockBinding(oe,le,L.__bindingPointIndex),c.set(oe,le))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),o={},d={},Q=null,te={},h={},f=new WeakMap,m=[],x=null,g=!1,p=null,E=null,R=null,M=null,b=null,S=null,A=null,y=new Ne(0,0,0),T=0,I=!1,U=null,F=null,V=null,D=null,H=null,ot.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:j,disable:_e,bindFramebuffer:Ue,drawBuffers:me,useProgram:ke,setBlending:Je,setMaterial:lt,setFlipSided:Ge,setCullFace:ft,setLineWidth:It,setPolygonOffset:tn,setScissorTest:gt,activeTexture:vt,bindTexture:N,unbindTexture:zt,compressedTexImage2D:tt,compressedTexImage3D:w,texImage2D:Y,texImage3D:K,pixelStorei:Se,getParameter:re,updateUBOMapping:be,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:se,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ce,viewport:ae,reset:Fe}}function v_(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ce,o=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return m?new OffscreenCanvas(w,_):Qs("canvas")}function g(w,_,O){let z=1,W=tt(w);if((W.width>O||W.height>O)&&(z=O/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ie=Math.floor(z*W.width),se=Math.floor(z*W.height);h===void 0&&(h=x(ie,se));let Y=_?x(ie,se):h;return Y.width=ie,Y.height=se,Y.getContext("2d").drawImage(w,0,0,ie,se),Ae("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ie+"x"+se+")."),Y}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,_,O,z,W,ie=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&se&&(Y=se.R16_EXT),O===i.SHORT&&se&&(Y=se.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&se&&(Y=se.RG16_EXT),O===i.SHORT&&se&&(Y=se.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&se&&(Y=se.RGB16_EXT),O===i.SHORT&&se&&(Y=se.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let K=ie?js:We.getTransfer(W);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=K===et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&se&&(Y=se.RGBA16_EXT),O===i.SHORT&&se&&(Y=se.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(w,_){let O;return w?_===null||_===Rn||_===Is?O=i.DEPTH24_STENCIL8:_===mn?O=i.DEPTH32F_STENCIL8:_===Cs&&(O=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===Is?O=i.DEPTH_COMPONENT24:_===mn?O=i.DEPTH_COMPONENT32F:_===Cs&&(O=i.DEPTH_COMPONENT16),O}function S(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Tt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){let _=w.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&o.delete(_),_.isHTMLTexture&&d.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),U(_)}function T(w){let _=n.get(w);if(_.__webglInit===void 0)return;let O=w.source,z=f.get(O);if(z){let W=z[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(w),Object.keys(z).length===0&&f.delete(O)}n.remove(w)}function I(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let O=w.source,z=f.get(O);delete z[_.__cacheKey],a.memory.textures--}function U(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let W=0;W<_.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[z][W]);else i.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)i.deleteFramebuffer(_.__webglFramebuffer[z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=w.textures;for(let z=0,W=O.length;z<W;z++){let ie=n.get(O[z]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(O[z])}n.remove(w)}let F=0;function V(){F=0}function D(){return F}function H(w){F=w}function Z(){let w=F;return w>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ne(w,_){let O=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let z=w.image;if(z===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_e(O,w,_);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_e(O,w,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function te(w,_){let O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Ue(O,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let we={[gs]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},Ee={[Lt]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},ot={[su]:i.NEVER,[cu]:i.ALWAYS,[ru]:i.LESS,[Po]:i.LEQUAL,[au]:i.EQUAL,[Lo]:i.GEQUAL,[ou]:i.GREATER,[lu]:i.NOTEQUAL};function qe(w,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Tt||_.magFilter===qa||_.magFilter===vr||_.magFilter===Wn||_.minFilter===Tt||_.minFilter===qa||_.minFilter===vr||_.minFilter===Wn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,we[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,we[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,we[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ee[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ot[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Lt||_.minFilter!==vr&&_.minFilter!==Wn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));let z=_.source,W=f.get(z);W===void 0&&(W={},f.set(z,W));let ie=J(_);if(ie!==w.__cacheKey){W[ie]===void 0&&(W[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),W[ie].usedTimes++;let se=W[w.__cacheKey];se!==void 0&&(W[w.__cacheKey].usedTimes--,se.usedTimes===0&&I(_)),w.__cacheKey=ie,w.__webglTexture=W[ie].texture}return O}function q(w,_,O){return Math.floor(Math.floor(w/O)/_)}function j(w,_,O,z){let ie=w.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,z,_.data);else{ie.sort((Se,ce)=>Se.start-ce.start);let se=0;for(let Se=1;Se<ie.length;Se++){let ce=ie[se],ae=ie[Se],be=ce.start+ce.count,Re=q(ae.start,_.width,4),Fe=q(ce.start,_.width,4);ae.start<=be+1&&Re===Fe&&q(ae.start+ae.count-1,_.width,4)===Re?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Se=0,ce=ie.length;Se<ce;Se++){let ae=ie[Se],be=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Fe=be%_.width,L=Math.floor(be/_.width),oe=Re,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Fe,L,oe,$,O,z,_.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function _e(w,_,O){let z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=i.TEXTURE_3D);let W=Ke(w,_),ie=_.source;t.bindTexture(z,w.__webglTexture,i.TEXTURE0+O);let se=n.get(ie);if(ie.version!==se.__version||W===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=We.getPrimaries(We.workingColorSpace),le=_.colorSpace===ti?null:We.getPrimaries(_.colorSpace),fe=_.colorSpace===ti||$===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let K=g(_.image,!1,s.maxTextureSize);K=zt(_,K);let re=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),ce=M(_.internalFormat,re,Se,_.normalized,_.colorSpace,_.isVideoTexture);qe(z,_);let ae,be=_.mipmaps,Re=_.isVideoTexture!==!0,Fe=se.__version===void 0||W===!0,L=ie.dataReady,oe=S(_,K);if(_.isDepthTexture)ce=b(_.format===Si,_.type),Fe&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ce,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ce,K.width,K.height,0,re,Se,null));else if(_.isDataTexture)if(be.length>0){Re&&Fe&&t.texStorage2D(i.TEXTURE_2D,oe,ce,be[0].width,be[0].height);for(let $=0,le=be.length;$<le;$++)ae=be[$],Re?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,Se,ae.data):t.texImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,re,Se,ae.data);_.generateMipmaps=!1}else Re?(Fe&&t.texStorage2D(i.TEXTURE_2D,oe,ce,K.width,K.height),L&&j(_,K,re,Se)):t.texImage2D(i.TEXTURE_2D,0,ce,K.width,K.height,0,re,Se,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,be[0].width,be[0].height,K.depth);for(let $=0,le=be.length;$<le;$++)if(ae=be[$],_.format!==gn)if(re!==null)if(Re){if(L)if(_.layerUpdates.size>0){let fe=dc(ae.width,ae.height,_.format,_.type);for(let ee of _.layerUpdates){let Te=ae.data.subarray(ee*fe/ae.data.BYTES_PER_ELEMENT,(ee+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ee,ae.width,ae.height,1,re,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,K.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ce,ae.width,ae.height,K.depth,0,ae.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,K.depth,re,Se,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ce,ae.width,ae.height,K.depth,0,re,Se,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Re&&Fe&&t.texStorage2D(i.TEXTURE_2D,oe,ce,be[0].width,be[0].height);for(let $=0,le=be.length;$<le;$++)ae=be[$],_.format!==gn?re!==null?Re?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,ae.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,Se,ae.data):t.texImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,re,Se,ae.data)}else if(_.isDataArrayTexture)if(Re){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,K.width,K.height,K.depth),L)if(_.layerUpdates.size>0){let $=dc(K.width,K.height,_.format,_.type);for(let le of _.layerUpdates){let fe=K.data.subarray(le*$/K.data.BYTES_PER_ELEMENT,(le+1)*$/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,K.width,K.height,1,re,Se,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,re,Se,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,K.width,K.height,K.depth,0,re,Se,K.data);else if(_.isData3DTexture)Re?(Fe&&t.texStorage3D(i.TEXTURE_3D,oe,ce,K.width,K.height,K.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,re,Se,K.data)):t.texImage3D(i.TEXTURE_3D,0,ce,K.width,K.height,K.depth,0,re,Se,K.data);else if(_.isFramebufferTexture){if(Fe)if(Re)t.texStorage2D(i.TEXTURE_2D,oe,ce,K.width,K.height);else{let $=K.width,le=K.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,ce,$,le,0,re,Se,null),$>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(_),$.onpaint=le=>{let fe=le.changedElements;for(let ee of d)fe.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let fe=i.RGBA,ee=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ee,Te,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(Re&&Fe){let $=tt(be[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,$.width,$.height)}for(let $=0,le=be.length;$<le;$++)ae=be[$],Re?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,re,Se,ae):t.texImage2D(i.TEXTURE_2D,$,ce,re,Se,ae);_.generateMipmaps=!1}else if(Re){if(Fe){let $=tt(K);t.texStorage2D(i.TEXTURE_2D,oe,ce,$.width,$.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Se,K)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,Se,K);p(_)&&E(z),se.__version=ie.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ue(w,_,O){if(_.image.length!==6)return;let z=Ke(w,_),W=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let ie=n.get(W);if(W.version!==ie.__version||z===!0){t.activeTexture(i.TEXTURE0+O);let se=We.getPrimaries(We.workingColorSpace),Y=_.colorSpace===ti?null:We.getPrimaries(_.colorSpace),K=_.colorSpace===ti||se===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,Se=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!re&&!Se?ce[ee]=g(_.image[ee],!0,s.maxCubemapSize):ce[ee]=Se?_.image[ee].image:_.image[ee],ce[ee]=zt(_,ce[ee]);let ae=ce[0],be=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),Fe=M(_.internalFormat,be,Re,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,oe=ie.__version===void 0||z===!0,$=W.dataReady,le=S(_,ae);qe(i.TEXTURE_CUBE_MAP,_);let fe;if(re){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Fe,ae.width,ae.height);for(let ee=0;ee<6;ee++){fe=ce[ee].mipmaps;for(let Te=0;Te<fe.length;Te++){let ve=fe[Te];_.format!==gn?be!==null?L?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Fe,ve.width,ve.height,0,ve.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ve.width,ve.height,be,Re,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Fe,ve.width,ve.height,0,be,Re,ve.data)}}}else{if(fe=_.mipmaps,L&&oe){fe.length>0&&le++;let ee=tt(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,be,Re,ce[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,ce[ee].width,ce[ee].height,0,be,Re,ce[ee].data);for(let Te=0;Te<fe.length;Te++){let ct=fe[Te].image[ee].image;L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ct.width,ct.height,be,Re,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Fe,ct.width,ct.height,0,be,Re,ct.data)}}else{L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be,Re,ce[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,be,Re,ce[ee]);for(let Te=0;Te<fe.length;Te++){let ve=fe[Te];L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,be,Re,ve.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Fe,be,Re,ve.image[ee])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),ie.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function me(w,_,O,z,W,ie){let se=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),K=M(O.internalFormat,se,Y,O.normalized,O.colorSpace),re=n.get(_),Se=n.get(O);if(Se.__renderTarget=_,!re.__hasExternalTextures){let ce=Math.max(1,_.width>>ie),ae=Math.max(1,_.height>>ie);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ie,K,ce,ae,_.depth,0,se,Y,null):t.texImage2D(W,ie,K,ce,ae,0,se,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),vt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,Se.__webglTexture,0,gt(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,Se.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let z=_.depthTexture,W=z&&z.isDepthTexture?z.type:null,ie=b(_.stencilBuffer,W),se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),ie,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,w)}else{let z=_.textures;for(let W=0;W<z.length;W++){let ie=z[W],se=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),K=M(ie.internalFormat,se,Y,ie.normalized,ie.colorSpace);vt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),K,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(w,_,O){let z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),qe(i.TEXTURE_CUBE_MAP,_.depthTexture);let re=r.convert(_.depthTexture.format),Se=r.convert(_.depthTexture.type),ce;_.depthTexture.format===Bn?ce=i.DEPTH_COMPONENT24:_.depthTexture.format===Si&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,_.width,_.height,0,re,Se,null)}}else ne(_.depthTexture,0);let ie=W.__webglTexture,se=gt(_),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,K=_.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bn)vt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,ie,0);else if(_.depthTexture.format===Si)vt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(w){let _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Et(_.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Et(_.__webglFramebuffer[0],w,0):Et(_.__webglFramebuffer,w,0)}else if(O){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=i.createRenderbuffer(),ke(_.__webglDepthbuffer[z],w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ke(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(w,_,O){let z=n.get(w);_!==void 0&&me(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ve(w)}function lt(w){let _=w.texture,O=n.get(w),z=n.get(_);w.addEventListener("dispose",y);let W=w.textures,ie=w.isWebGLCubeRenderTarget===!0,se=W.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=_.version,a.memory.textures++),ie){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let K=0;K<_.mipmaps.length;K++)O.__webglFramebuffer[Y][K]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(se)for(let Y=0,K=W.length;Y<K;Y++){let re=n.get(W[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let K=W[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let re=r.convert(K.format,K.colorSpace),Se=r.convert(K.type),ce=M(K.internalFormat,re,Se,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),ae=gt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),qe(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)me(O.__webglFramebuffer[Y][K],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else me(O.__webglFramebuffer[Y],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Y=0,K=W.length;Y<K;Y++){let re=W[Y],Se=n.get(re),ce=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Se.__webglTexture),qe(ce,re),me(O.__webglFramebuffer,w,re,i.COLOR_ATTACHMENT0+Y,ce,0),p(re)&&E(ce)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),qe(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)me(O.__webglFramebuffer[K],w,_,i.COLOR_ATTACHMENT0,Y,K);else me(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&E(Y),t.unbindTexture()}w.depthBuffer&&Ve(w)}function Ge(w){let _=w.textures;for(let O=0,z=_.length;O<z;O++){let W=_[O];if(p(W)){let ie=R(w),se=n.get(W).__webglTexture;t.bindTexture(ie,se),E(ie),t.unbindTexture()}}}let ft=[],It=[];function tn(w){if(w.samples>0){if(vt(w)===!1){let _=w.textures,O=w.width,z=w.height,W=i.COLOR_BUFFER_BIT,ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(w),Y=_.length>1;if(Y)for(let re=0;re<_.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let K=w.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<_.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Se=n.get(_[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,W,i.NEAREST),c===!0&&(ft.length=0,It.length=0,ft.push(i.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ft.push(ie),It.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<_.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Se=n.get(_[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function gt(w){return Math.min(s.maxSamples,w.samples)}function vt(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(w){let _=a.render.frame;o.get(w)!==_&&(o.set(w,_),w.update())}function zt(w,_){let O=w.colorSpace,z=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ks&&O!==ti&&(We.getTransfer(O)===et?(z!==gn||W!==rn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",O)),_}function tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Je,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=me,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function M_(i,e){function t(n,s=ti){let r,a=We.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===ec)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===sc)return i.RGB;if(n===gn)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Mr||n===Sr||n===br||n===Er)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===Tr||n===co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return r.COMPRESSED_R11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Tr)return r.COMPRESSED_RG11_EAC;if(n===co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===yo||n===vo||n===Mo||n===So||n===bo||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===wo||n===Ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Co||n===wr||n===Io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:S_,fragmentShader:b_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends En{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,u=null,o=null,d=null,h=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new wc,p={},E=t.getContextAttributes(),R=null,M=null,b=[],S=[],A=new Ce,y=null,T=null,I=new Wt;I.viewport=new pt;let U=new Wt;U.viewport=new pt;let F=[I,U],V=new Ga,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=b[q];return j===void 0&&(j=new Ss,b[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=b[q];return j===void 0&&(j=new Ss,b[q]=j),j.getGripSpace()},this.getHand=function(q){let j=b[q];return j===void 0&&(j=new Ss,b[q]=j),j.getHandSpace()};function Z(q){let j=S.indexOf(q.inputSource);if(j===-1)return;let _e=b[j];_e!==void 0&&(_e.update(q.inputSource,q.frame,u||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<b.length;q++){let j=S[q];j!==null&&(S[q]=null,b[q].disconnect(j))}D=null,H=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(R),f=null,h=null,d=null,s=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ne),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?Si:Bn,Ue=E.stencil?Is:Rn);let ke={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new nn(h.textureWidth,h.textureHeight,{format:gn,type:rn,depthTexture:new gi(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new nn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(l),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(q){for(let j=0;j<q.removed.length;j++){let _e=q.removed[j],Ue=S.indexOf(_e);Ue>=0&&(S[Ue]=null,b[Ue].disconnect(_e))}for(let j=0;j<q.added.length;j++){let _e=q.added[j],Ue=S.indexOf(_e);if(Ue===-1){for(let ke=0;ke<b.length;ke++)if(ke>=S.length){S.push(_e),Ue=ke;break}else if(S[ke]===null){S[ke]=_e,Ue=ke;break}if(Ue===-1)break}let me=b[Ue];me&&me.connect(_e)}}let X=new C,Q=new C;function te(q,j,_e){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);let Ue=X.distanceTo(Q),me=j.projectionMatrix.elements,ke=_e.projectionMatrix.elements,Et=me[14]/(me[10]-1),Ve=me[14]/(me[10]+1),Je=(me[9]+1)/me[5],lt=(me[9]-1)/me[5],Ge=(me[8]-1)/me[0],ft=(ke[8]+1)/ke[0],It=Et*Ge,tn=Et*ft,gt=Ue/(-Ge+ft),vt=gt*-Ge;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(vt),q.translateZ(gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let N=Et+gt,zt=Ve+gt,tt=It-vt,w=tn+(Ue-vt),_=Je*Ve/zt*N,O=lt*Ve/zt*N;q.projectionMatrix.makePerspective(tt,w,_,O,N,zt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function we(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,_e=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),V.near=U.near=I.near=j,V.far=U.far=I.far=_e,(D!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,H=V.far),V.layers.mask=q.layers.mask|6,I.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Ue=q.parent,me=V.cameras;we(V,Ue);for(let ke=0;ke<me.length;ke++)we(me[ke],Ue);me.length===2?te(V,I,U):V.projectionMatrix.copy(I.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),Ee(q,V,Ue)};function Ee(q,j,_e){_e===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(q){return p[q]};let ot=null;function qe(q,j){if(o=j.getViewerPose(u||a),m=j,o!==null){let _e=o.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ue=!1;_e.length!==V.cameras.length&&(V.cameras.length=0,Ue=!0);for(let Ve=0;Ve<_e.length;Ve++){let Je=_e[Ve],lt=null;if(f!==null)lt=f.getViewport(Je);else{let ft=d.getViewSubImage(h,Je);lt=ft.viewport,Ve===0&&(e.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(M))}let Ge=F[Ve];Ge===void 0&&(Ge=new Wt,Ge.layers.enable(Ve),Ge.viewport=new pt,F[Ve]=Ge),Ge.matrix.fromArray(Je.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Je.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(lt.x,lt.y,lt.width,lt.height),Ve===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ue===!0&&V.cameras.push(Ge)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ve=d.getDepthInformation(_e[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<_e.length;Ve++){let Je=_e[Ve].camera;if(Je){let lt=p[Je];lt||(lt=new ar,p[Je]=lt);let Ge=d.getCameraImage(Je);lt.sourceTexture=Ge}}}}for(let _e=0;_e<b.length;_e++){let Ue=S[_e],me=b[_e];Ue!==null&&me!==void 0&&me.update(Ue,j,u||a)}ot&&ot(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let Ke=new zu;Ke.setAnimationLoop(qe),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}},E_=new Xe,qu=new De;qu.set(-1,0,0,0,1,0,0,0,1);function T_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?c(g,p,E,R):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=e.get(p),R=E.envMap,M=E.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function o(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let S=b.program;n.uniformBlockBinding(M,S)}function u(M,b){let S=s[M.id];S===void 0&&(g(M),S=o(M),s[M.id]=S,M.addEventListener("dispose",E));let A=b.program;n.updateUBOMapping(M,A);let y=e.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function o(M){let b=d();M.__bindingPointIndex=b;let S=i.createBuffer(),A=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],S=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,T=S.length;y<T;y++){let I=S[y];if(Array.isArray(I))for(let U=0,F=I.length;U<F;U++)f(I[U],y,U,A);else f(I,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,S,A){if(x(M,b,S,A)===!0){let y=M.__offset,T=M.value;if(Array.isArray(T)){let I=0;for(let U=0;U<T.length;U++){let F=T[U],V=p(F);m(F,M.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function m(M,b,S){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,S)}function x(M,b,S,A){let y=M.value,T=b+"_"+S;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let I=A[T];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(M){let b=M.uniforms,S=0,A=16;for(let T=0,I=b.length;T<I;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,V=U.length;F<V;F++){let D=U[F],H=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,J=H.length;Z<J;Z++){let ne=H[Z],X=p(ne),Q=S%A,te=Q%X.boundary,we=Q+te;S+=te,we!==0&&A-we<X.storage&&(S+=A-we),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=X.storage}}}let y=S%A;return y>0&&(S+=A-y),M.__size=S,M.__cache={},this}function p(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",M),b}function E(M){let b=M.target;b.removeEventListener("dispose",E);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:u,dispose:R}}var A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function R_(){return Xn===null&&(Xn=new Ui(A_,16,16,bi,Cn),Xn.name="DFG_LUT",Xn.minFilter=Tt,Xn.magFilter=Tt,Xn.wrapS=On,Xn.wrapT=On,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var Oo=class{constructor(e={}){let{canvas:t=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([Qa,ja,Ka]),p=new Set([rn,Rn,Cs,Is,Za,Ja]),E=new Uint32Array(4),R=new Int32Array(4),M=new C,b=null,S=null,A=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,V=null,D=null,H=null;this._outputColorSpace=bt;let Z=0,J=0,ne=null,X=-1,Q=null,te=new pt,we=new pt,Ee=null,ot=new Ne(0),qe=0,Ke=t.width,q=t.height,j=1,_e=null,Ue=null,me=new pt(0,0,Ke,q),ke=new pt(0,0,Ke,q),Et=!1,Ve=new bs,Je=!1,lt=!1,Ge=new Xe,ft=new C,It=new pt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function vt(){return ne===null?j:1}let N=n;function zt(v,P){return t.getContext(v,P)}let tt,w,_,O,z,W,ie,se,Y,K,re,Se,ce,ae,be,Re,Fe,L,oe,$,le,fe,ee;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:o,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",yn,!1),N===null){let P="webgl2";if(N=zt(P,v),N===null)throw zt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(v){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),Ie("WebGLRenderer: "+v.message),v}function Te(){tt=new Um(N),tt.init(),le=new M_(N,tt),w=new Tm(N,tt,e,le),_=new y_(N,tt),w.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),D=N.createFramebuffer(),H=N.createFramebuffer(),O=new Bm(N),z=new r_,W=new v_(N,tt,_,z,w,le,O),ie=new Nm(I),se=new zf(N),fe=new bm(N,se),Y=new Fm(N,se,O,fe),K=new zm(N,Y,se,fe,O),L=new km(N,w,W),be=new wm(z),re=new s_(I,ie,tt,w,fe,be),Se=new T_(I,z),ce=new o_,ae=new f_(tt),Fe=new Sm(I,ie,_,K,m,c),Re=new x_(I,K,w),ee=new w_(N,O,w,_),oe=new Em(N,tt,O),$=new Om(N,tt,O),O.programs=re.programs,I.capabilities=w,I.extensions=tt,I.properties=z,I.renderLists=ce,I.shadowMap=Re,I.state=_,I.info=O}x!==rn&&(T=new Hm(x,t.width,t.height,l,s,r));let ve=new Ac(I,N);this.xr=ve,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(Ke,q,!1))},this.getSize=function(v){return v.set(Ke,q)},this.setSize=function(v,P,G=!0){if(ve.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=v,q=P,t.width=Math.floor(v*j),t.height=Math.floor(P*j),G===!0&&(t.style.width=v+"px",t.style.height=P+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(Ke*j,q*j).floor()},this.setDrawingBufferSize=function(v,P,G){Ke=v,q=P,j=G,t.width=Math.floor(v*G),t.height=Math.floor(P*G),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(x===rn){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,P,G,B){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,P,G,B),_.viewport(te.copy(me).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(ke)},this.setScissor=function(v,P,G,B){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,P,G,B),_.scissor(we.copy(ke).multiplyScalar(j).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(v){_.setScissorTest(Et=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){Ue=v},this.getClearColor=function(v){return v.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,G=!0){let B=0;if(v){let k=!1;if(ne!==null){let de=ne.texture.format;k=g.has(de)}if(k){let de=ne.texture.type,ge=p.has(de),ue=Fe.getClearColor(),xe=Fe.getClearAlpha(),Me=ue.r,Oe=ue.g,He=ue.b;ge?(E[0]=Me,E[1]=Oe,E[2]=He,E[3]=xe,N.clearBufferuiv(N.COLOR,0,E)):(R[0]=Me,R[1]=Oe,R[2]=He,R[3]=xe,N.clearBufferiv(N.COLOR,0,R))}else B|=N.COLOR_BUFFER_BIT}P&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),Fe.dispose(),ce.dispose(),ae.dispose(),z.dispose(),ie.dispose(),K.dispose(),fe.dispose(),ee.dispose(),re.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",qc),ve.removeEventListener("sessionend",Yc),Ci.stop()};function ct(v){v.preventDefault(),oc("WebGLRenderer: Context Lost."),U=!0}function je(){oc("WebGLRenderer: Context Restored."),U=!1;let v=O.autoReset,P=Re.enabled,G=Re.autoUpdate,B=Re.needsUpdate,k=Re.type;Te(),O.autoReset=v,Re.enabled=P,Re.autoUpdate=G,Re.needsUpdate=B,Re.type=k}function yn(v){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nn(v){let P=v.target;P.removeEventListener("dispose",Nn),Nd(P)}function Nd(v){Ud(v),z.remove(v)}function Ud(v){let P=z.get(v).programs;P!==void 0&&(P.forEach(function(G){re.releaseProgram(G)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,G,B,k,de){P===null&&(P=tn);let ge=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=Bd(v,P,G,B,k);_.setMaterial(B,ge);let xe=G.index,Me=1;if(B.wireframe===!0){if(xe=Y.getWireframeAttribute(G),xe===void 0)return;Me=2}let Oe=G.drawRange,He=G.attributes.position,ye=Oe.start*Me,Qe=(Oe.start+Oe.count)*Me;de!==null&&(ye=Math.max(ye,de.start*Me),Qe=Math.min(Qe,(de.start+de.count)*Me)),xe!==null?(ye=Math.max(ye,0),Qe=Math.min(Qe,xe.count)):He!=null&&(ye=Math.max(ye,0),Qe=Math.min(Qe,He.count));let Mt=Qe-ye;if(Mt<0||Mt===1/0)return;fe.setup(k,B,ue,G,xe);let ut,at=oe;if(xe!==null&&(ut=se.get(xe),at=$,at.setIndex(ut)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*vt()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(k.isLine){let Vt=B.linewidth;Vt===void 0&&(Vt=1),_.setLineWidth(Vt*vt()),k.isLineSegments?at.setMode(N.LINES):k.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else k.isPoints?at.setMode(N.POINTS):k.isSprite&&at.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Vt=k._multiDrawStarts,pe=k._multiDrawCounts,Yt=k._multiDrawCount,Ye=xe?se.get(xe).bytesPerElement:1,fn=z.get(B).currentProgram.getUniforms();for(let Un=0;Un<Yt;Un++)fn.setValue(N,"_gl_DrawID",Un),at.render(Vt[Un]/Ye,pe[Un])}else if(k.isInstancedMesh)at.renderInstances(ye,Mt,k.count);else if(G.isInstancedBufferGeometry){let Vt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pe=Math.min(G.instanceCount,Vt);at.renderInstances(ye,Mt,pe)}else at.render(ye,Mt)};function Xc(v,P,G,B){F!==null&&v.isNodeMaterial&&F.setObject(B,v),Je===!0&&be.setState(v,G,!1),v.transparent===!0&&v.side===Ot&&v.forceSinglePass===!1?(v.side=jt,v.needsUpdate=!0,Hr(v,P,B),v.side=vi,v.needsUpdate=!0,Hr(v,P,B),v.side=Ot):Hr(v,P,B)}this.compile=function(v,P,G=null){G===null&&(G=v),F!==null&&F.renderStart(v,P,G),S=ae.get(G),S.init(P),y.push(S),G.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),v!==G&&v.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),lt=this.localClippingEnabled,Je=be.init(this.clippingPlanes,lt),Je===!0&&be.setGlobalState(this.clippingPlanes,P),F!==null&&Re.render(S.state.shadowsArray,G,P);let B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){let ue=de[ge];Xc(ue,G,P,k),B.add(ue)}else Xc(de,G,P,k),B.add(de)}),S=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(v,P,G=null){let B=this.compile(v,P,G);return new Promise(k=>{function de(){if(B.forEach(function(ge){let xe=z.get(ge).currentProgram;(xe===void 0||xe.isReady())&&B.delete(ge)}),B.size===0){k(v);return}setTimeout(de,10)}tt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let al=null;function Fd(v){al&&al(v)}function qc(){Ci.stop()}function Yc(){Ci.start()}let Ci=new zu;Ci.setAnimationLoop(Fd),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(v){al=v,ve.setAnimationLoop(v),v===null?Ci.stop():Ci.start()},ve.addEventListener("sessionstart",qc),ve.addEventListener("sessionend",Yc),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(v,P);let G=ve.enabled===!0&&ve.isPresenting===!0,B=T!==null&&(ne===null||G)&&T.begin(I,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(P),P=ve.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,P,ne),S=ae.get(v,y.length),S.init(P),S.state.textureUnits=W.getTextureUnits(),y.push(S),Ge.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ve.setFromProjectionMatrix(Ge,bn,P.reversedDepth),lt=this.localClippingEnabled,Je=be.init(this.clippingPlanes,lt),b=ce.get(v,A.length),b.init(),A.push(b),ve.enabled===!0&&ve.isPresenting===!0){let ge=I.xr.getDepthSensingMesh();ge!==null&&ol(ge,P,-1/0,I.sortObjects)}ol(v,P,0,I.sortObjects),b.finish(),F!==null&&F.updateLights(S.state.lightsArray),I.sortObjects===!0&&b.sort(_e,Ue),gt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,gt&&Fe.addToRenderList(b,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&be.beginShadows();let k=S.state.shadowsArray;if(Re.render(k,v,P),Je===!0&&be.endShadows(),(B&&T.hasRenderPass())===!1){let ge=b.opaque,ue=b.transmissive;if(S.setupLights(),P.isArrayCamera){let xe=P.cameras;if(ue.length>0)for(let Me=0,Oe=xe.length;Me<Oe;Me++){let He=xe[Me];Jc(ge,ue,v,He)}gt&&Fe.render(v);for(let Me=0,Oe=xe.length;Me<Oe;Me++){let He=xe[Me];Zc(b,v,He,He.viewport)}}else ue.length>0&&Jc(ge,ue,v,P),gt&&Fe.render(v),Zc(b,v,P)}ne!==null&&J===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),B&&T.end(I),v.isScene===!0&&v.onAfterRender(I,v,P),fe.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(S=y[y.length-1],W.setTextureUnits(S.state.textureUnits),Je===!0&&be.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,F!==null&&F.renderEnd()};function ol(v,P,G,B){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ve)){B&&It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ge);let ge=K.update(v),ue=v.material;ue.visible&&b.push(v,ge,ue,G,It.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ve))){let ge=K.update(v),ue=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),It.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),It.copy(ge.boundingSphere.center)),It.applyMatrix4(v.matrixWorld).applyMatrix4(Ge)),Array.isArray(ue)){let xe=ge.groups;for(let Me=0,Oe=xe.length;Me<Oe;Me++){let He=xe[Me],ye=ue[He.materialIndex];ye&&ye.visible&&b.push(v,ge,ye,G,It.z,He,P)}}else ue.visible&&b.push(v,ge,ue,G,It.z,null,P)}}let de=v.children;for(let ge=0,ue=de.length;ge<ue;ge++)ol(de[ge],P,G,B)}function Zc(v,P,G,B){let{opaque:k,transmissive:de,transparent:ge}=v;S.setupLightsView(G),Je===!0&&be.setGlobalState(I.clippingPlanes,G),B&&_.viewport(te.copy(B)),k.length>0&&Vr(k,P,G),de.length>0&&Vr(de,P,G),ge.length>0&&Vr(ge,P,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Jc(v,P,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let ye=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new nn(1,1,{generateMipmaps:!0,type:ye?Cn:rn,minFilter:Wn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let de=S.state.transmissionRenderTarget[B.id],ge=B.viewport||te;de.setSize(ge.z*I.transmissionResolutionScale,ge.w*I.transmissionResolutionScale);let ue=I.getRenderTarget(),xe=I.getActiveCubeFace(),Me=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(ot),qe=I.getClearAlpha(),qe<1&&I.setClearColor(16777215,.5),I.clear(),gt&&Fe.render(G);let Oe=I.toneMapping;I.toneMapping=An;let He=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),Je===!0&&be.setGlobalState(I.clippingPlanes,B),Vr(v,G,B),W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Qe=0,Mt=P.length;Qe<Mt;Qe++){let ut=P[Qe],{object:at,geometry:Vt,material:pe,group:Yt}=ut;if(pe.side===Ot&&at.layers.test(B.layers)){let Ye=pe.side;pe.side=jt,pe.needsUpdate=!0,$c(at,G,B,Vt,pe,Yt),pe.side=Ye,pe.needsUpdate=!0,ye=!0}}ye===!0&&(W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de))}I.setRenderTarget(ue,xe,Me),I.setClearColor(ot,qe),He!==void 0&&(B.viewport=He),I.toneMapping=Oe}function Vr(v,P,G){let B=P.isScene===!0?P.overrideMaterial:null;for(let k=0,de=v.length;k<de;k++){let ge=v[k],{object:ue,geometry:xe,group:Me}=ge,Oe=ge.material;Oe.allowOverride===!0&&B!==null&&(Oe=B),ue.layers.test(G.layers)&&$c(ue,P,G,xe,Oe,Me)}}function $c(v,P,G,B,k,de){F!==null&&k.isNodeMaterial&&F.setObject(v,k),v.onBeforeRender(I,P,G,B,k,de),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(I,P,G,B,v,de),k.transparent===!0&&k.side===Ot&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,v,de),k.side=vi,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,v,de),k.side=Ot):I.renderBufferDirect(G,P,B,k,v,de),v.onAfterRender(I,P,G,B,k,de)}function Hr(v,P,G){P.isScene!==!0&&(P=tn);let B=z.get(v),k=S.state.lights,de=S.state.shadowsArray,ge=k.state.version,ue=re.getParameters(v,k.state,de,P,G,S.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue),Me=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Oe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=ie.get(v.envMap||B.environment,Oe),B.envMapRotation=B.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Me===void 0&&(v.addEventListener("dispose",Nn),Me=new Map,B.programs=Me);let He=Me.get(xe);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===ge)return jc(v,ue),He}else ue.uniforms=re.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,G,ue),v.onBeforeCompile(ue,I),He=re.acquireProgram(ue,xe),Me.set(xe,He),B.uniforms=ue.uniforms;let ye=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=be.uniform),jc(v,ue),B.needsLights=zd(v),B.lightsStateVersion=ge,B.needsLights&&(ye.ambientLightColor.value=k.state.ambient,ye.lightProbe.value=k.state.probe,ye.sunLights.value=k.state.sun,ye.sunLightShadows.value=k.state.sunShadow,ye.directionalLights.value=k.state.directional,ye.directionalLightShadows.value=k.state.directionalShadow,ye.spotLights.value=k.state.spot,ye.spotLightShadows.value=k.state.spotShadow,ye.rectAreaLights.value=k.state.rectArea,ye.ltc_1.value=k.state.rectAreaLTC1,ye.ltc_2.value=k.state.rectAreaLTC2,ye.pointLights.value=k.state.point,ye.pointLightShadows.value=k.state.pointShadow,ye.hemisphereLights.value=k.state.hemi,ye.sunShadowMatrix.value=k.state.sunShadowMatrix,ye.sunShadowCascade.value=k.state.sunShadowCascade,ye.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ye.spotLightMatrix.value=k.state.spotLightMatrix,ye.spotLightMap.value=k.state.spotLightMap,ye.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=He,B.uniformsList=null,He}function Kc(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Fs.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function jc(v,P){let G=z.get(v);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Od(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let G=0,B=v.length;G<B;G++){let k=v[G];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Bd(v,P,G,B,k){P.isScene!==!0&&(P=tn),W.resetTextureUnits();let de=P.fog,ge=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ue=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:We.workingColorSpace,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Me=ie.get(B.envMap||ge,xe),Oe=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,Mt=!!G.morphAttributes.color,ut=An;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ut=I.toneMapping);let at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Vt=at!==void 0?at.length:0,pe=z.get(B),Yt=S.state.lights;if(Je===!0&&(lt===!0||v!==Q)){let ht=v===Q&&B.id===X;be.setState(B,v,ht)}let Ye=!1;B.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Yt.state.version||pe.outputColorSpace!==ue||k.isBatchedMesh&&pe.batching===!1||!k.isBatchedMesh&&pe.batching===!0||k.isBatchedMesh&&pe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&pe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&pe.instancing===!1||!k.isInstancedMesh&&pe.instancing===!0||k.isSkinnedMesh&&pe.skinning===!1||!k.isSkinnedMesh&&pe.skinning===!0||k.isInstancedMesh&&pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&pe.instancingMorph===!1&&k.morphTexture!==null||pe.envMap!==Me||B.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==be.numPlanes||pe.numIntersection!==be.numIntersection)||pe.vertexAlphas!==Oe||pe.vertexTangents!==He||pe.morphTargets!==ye||pe.morphNormals!==Qe||pe.morphColors!==Mt||pe.toneMapping!==ut||pe.morphTargetsCount!==Vt||!!pe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,pe.__version=B.version);let fn=pe.currentProgram;Ye===!0&&(fn=Hr(B,P,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,fn,pe));let Un=!1,si=!1,Ki=!1,st=fn.getUniforms(),yt=pe.uniforms;if(_.useProgram(fn.program)&&(Un=!0,si=!0,Ki=!0),B.id!==X&&(X=B.id,si=!0),pe.needsLights){let ht=Od(S.state.lightProbeGridArray,k);pe.lightProbeGrid!==ht&&(pe.lightProbeGrid=ht,si=!0)}if(Un||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",v.projectionMatrix),st.setValue(N,"viewMatrix",v.matrixWorldInverse);let ai=st.map.cameraPosition;ai!==void 0&&ai.setValue(N,ft.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,si=!0,Ki=!0)}if(pe.needsLights&&(Yt.state.sunShadowMap.length>0&&st.setValue(N,"sunShadowMap",Yt.state.sunShadowMap,W),Yt.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",Yt.state.directionalShadowMap,W),Yt.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",Yt.state.spotShadowMap,W),Yt.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",Yt.state.pointShadowMap,W)),k.isSkinnedMesh){st.setOptional(N,k,"bindMatrix"),st.setOptional(N,k,"bindMatrixInverse");let ht=k.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),st.setValue(N,"boneTexture",ht.boneTexture,W))}k.isBatchedMesh&&(st.setOptional(N,k,"batchingTexture"),st.setValue(N,"batchingTexture",k._matricesTexture,W),st.setOptional(N,k,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",k._indirectTexture,W),st.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",k._colorsTexture,W));let ri=G.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&L.update(k,G,fn),(si||pe.receiveShadow!==k.receiveShadow)&&(pe.receiveShadow=k.receiveShadow,st.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(yt.envMapIntensity.value=P.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=R_()),si){if(st.setValue(N,"toneMappingExposure",I.toneMappingExposure),pe.needsLights&&kd(yt,Ki),de&&B.fog===!0&&Se.refreshFogUniforms(yt,de),Se.refreshMaterialUniforms(yt,B,j,q,S.state.transmissionRenderTarget[v.id]),pe.needsLights&&pe.lightProbeGrid){let ht=pe.lightProbeGrid;yt.probesSH.value=ht.texture,yt.probesMin.value.copy(ht.boundingBox.min),yt.probesMax.value.copy(ht.boundingBox.max),yt.probesResolution.value.copy(ht.resolution)}Fs.upload(N,Kc(pe),yt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fs.upload(N,Kc(pe),yt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(N,"center",k.center),st.setValue(N,"modelViewMatrix",k.modelViewMatrix),st.setValue(N,"normalMatrix",k.normalMatrix),st.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let ht=B.uniformsGroups;for(let ai=0,ji=ht.length;ai<ji;ai++){let eh=ht[ai];ee.update(eh,fn),ee.bind(eh,fn)}}return fn}function kd(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function zd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,P,G){let B=z.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(v.texture).__webglTexture=P,z.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let G=z.get(v);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,G=0){ne=v,Z=P,J=G;let B=null,k=!1,de=!1;if(v){let ue=z.get(v);if(ue.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(v.viewport),we.copy(v.scissor),Ee=v.scissorTest,_.viewport(te),_.scissor(we),_.setScissorTest(Ee),X=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(ue.__hasExternalTextures)W.rebindTextures(v,z.get(v.texture).__webglTexture,z.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Oe=v.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&z.has(Oe)&&(v.width!==Oe.image.width||v.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);let Me=z.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Me[P])?B=Me[P][G]:B=Me[P],k=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?B=z.get(v).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[G]:B=Me,te.copy(v.viewport),we.copy(v.scissor),Ee=v.scissorTest}else te.copy(me).multiplyScalar(j).floor(),we.copy(ke).multiplyScalar(j).floor(),Ee=Et;if(G!==0&&(B=V),_.bindFramebuffer(N.FRAMEBUFFER,B)&&_.drawBuffers(v,B),_.viewport(te),_.scissor(we),_.setScissorTest(Ee),k){let ue=z.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,G)}else if(de){let ue=P;for(let xe=0;xe<v.textures.length;xe++){let Me=z.get(v.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Me.__webglTexture,G,ue)}}else if(v!==null&&G!==0){let ue=z.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,G)}X=-1};function Qc(v){let P=z.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=w.textureFormatReadable(v.format),P.__typeReadable=w.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,G,B,k,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){_.bindFramebuffer(N.FRAMEBUFFER,xe);try{let Me=v.textures[ue],Oe=Me.format,He=Me.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let ye=Qc(Me);if(ye.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-B&&G>=0&&G<=v.height-k&&N.readPixels(P,G,B,k,le.convert(Oe),le.convert(He),de)}finally{let Me=ne!==null?z.get(ne).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,P,G,B,k,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(P>=0&&P<=v.width-B&&G>=0&&G<=v.height-k){_.bindFramebuffer(N.FRAMEBUFFER,xe);let Me=v.textures[ue],Oe=Me.format,He=Me.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let ye=Qc(Me);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(P,G,B,k,le.convert(Oe),le.convert(He),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Mt=ne!==null?z.get(ne).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Mt);let ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await fu(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qe),N.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,G=0){let B=Math.pow(2,-G),k=Math.floor(v.image.width*B),de=Math.floor(v.image.height*B),ge=P!==null?P.x:0,ue=P!==null?P.y:0;W.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ge,ue,k,de),_.unbindTexture()},this.copyTextureToTexture=function(v,P,G=null,B=null,k=0,de=0){let ge,ue,xe,Me,Oe,He,ye,Qe,Mt,ut=v.isCompressedTexture?v.mipmaps[de]:v.image;if(G!==null)ge=G.max.x-G.min.x,ue=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,Oe=G.min.y,He=G.isBox3?G.min.z:0;else{let yt=Math.pow(2,-k);ge=Math.floor(ut.width*yt),ue=Math.floor(ut.height*yt),v.isDataArrayTexture?xe=ut.depth:v.isData3DTexture?xe=Math.floor(ut.depth*yt):xe=1,Me=0,Oe=0,He=0}B!==null?(ye=B.x,Qe=B.y,Mt=B.z):(ye=0,Qe=0,Mt=0);let at=le.convert(P.format),Vt=le.convert(P.type),pe;P.isData3DTexture?(W.setTexture3D(P,0),pe=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),pe=N.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),pe=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Yt=_.getParameter(N.UNPACK_ROW_LENGTH),Ye=_.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=_.getParameter(N.UNPACK_SKIP_PIXELS),Un=_.getParameter(N.UNPACK_SKIP_ROWS),si=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),_.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(N.UNPACK_SKIP_IMAGES,He);let Ki=v.isDataArrayTexture||v.isData3DTexture,st=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let yt=z.get(v),ri=z.get(P),ht=z.get(yt.__renderTarget),ai=z.get(ri.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,ht.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ji=0;ji<xe;ji++)Ki&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(v).__webglTexture,k,He+ji),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(P).__webglTexture,de,Mt+ji)),N.blitFramebuffer(Me,Oe,ge,ue,ye,Qe,ge,ue,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||z.has(v)){let yt=z.get(v),ri=z.get(P);_.bindFramebuffer(N.READ_FRAMEBUFFER,D),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let ht=0;ht<xe;ht++)Ki?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,k,He+ht):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,k),st?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ri.__webglTexture,de,Mt+ht):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ri.__webglTexture,de),k!==0?N.blitFramebuffer(Me,Oe,ge,ue,ye,Qe,ge,ue,N.COLOR_BUFFER_BIT,N.NEAREST):st?N.copyTexSubImage3D(pe,de,ye,Qe,Mt+ht,Me,Oe,ge,ue):N.copyTexSubImage2D(pe,de,ye,Qe,Me,Oe,ge,ue);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(pe,de,ye,Qe,Mt,ge,ue,xe,at,Vt,ut.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(pe,de,ye,Qe,Mt,ge,ue,xe,at,ut.data):N.texSubImage3D(pe,de,ye,Qe,Mt,ge,ue,xe,at,Vt,ut):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,ye,Qe,ge,ue,at,Vt,ut.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,ye,Qe,ut.width,ut.height,at,ut.data):N.texSubImage2D(N.TEXTURE_2D,de,ye,Qe,ge,ue,at,Vt,ut);_.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),_.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Un),_.pixelStorei(N.UNPACK_SKIP_IMAGES,si),de===0&&P.generateMipmaps&&N.generateMipmap(pe),_.unbindTexture()},this.initRenderTarget=function(v){z.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){Z=0,J=0,ne=null,_.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var rt=[{name:"Stone Age",evolveXP:400,baseHp:500,baseStyle:"cave",theme:{bg:"39 35% 90%",fg:"25 15% 20%",accent:"18 60% 55%"},special:{name:"Meteor Shower",cooldown:60,duration:4,type:"meteor"},units:[{name:"Clubman",desc:"Cheap melee screen. Takes half damage from siege shots.",cost:15,hp:30,dmg:8,range:40,speed:50,type:"melee",size:45,attackSpeed:1.2,killXp:5,killGold:10},{name:"Slinger",desc:"Basic ranged support.",cost:25,hp:20,dmg:5,range:250,speed:45,type:"ranged",size:40,attackSpeed:1.5,projType:"arc",projSpeed:400,killXp:8,killGold:15},{name:"Dino Rider",desc:"Heavy pushing power.",cost:100,hp:150,dmg:35,range:50,speed:70,type:"heavy",size:80,attackSpeed:2,killXp:30,killGold:50}],turrets:[{name:"Rock Thrower",desc:"A simple defensive rock flinger.",cost:100,dmg:10,range:350,attackSpeed:1.5,projType:"arc",projSpeed:350},{name:"Egg Slingshot",desc:"Fires volatile dino eggs.",cost:200,dmg:25,range:400,attackSpeed:2,projType:"arc",projSpeed:400},{name:"Fire Beryl",desc:"Spits concentrated fireballs.",cost:400,dmg:50,range:450,attackSpeed:2.5,projType:"arc",projSpeed:450}]},{name:"Castle Age",evolveXP:1400,baseHp:1500,baseStyle:"castle",theme:{bg:"45 25% 85%",fg:"220 20% 25%",accent:"200 60% 45%"},special:{name:"Arrow Volley",cooldown:60,duration:3,type:"arrows"},units:[{name:"Swordsman",desc:"Armored infantry. Takes half damage from siege shots.",cost:50,hp:120,dmg:25,range:45,speed:55,type:"melee",size:50,attackSpeed:1,killXp:15,killGold:25},{name:"Archer",desc:"Sharp-eyed ranged combatant.",cost:75,hp:70,dmg:20,range:300,speed:50,type:"ranged",size:45,attackSpeed:1.2,projType:"arc",projSpeed:500,killXp:20,killGold:35},{name:"Knight",desc:"Mounted terror of the battlefield.",cost:250,hp:400,dmg:55,range:60,speed:80,type:"heavy",size:90,attackSpeed:1.5,killXp:70,killGold:100}],turrets:[{name:"Catapult",desc:"Lobs heavy stones at attackers.",cost:500,dmg:40,range:450,attackSpeed:1.5,projType:"arc",projSpeed:400},{name:"Ballista",desc:"Fires massive piercing bolts.",cost:750,dmg:80,range:500,attackSpeed:2.5,projType:"straight",projSpeed:800},{name:"Hot Oil",desc:"Boiling defense for close range.",cost:1e3,dmg:150,range:300,attackSpeed:3,projType:"arc",projSpeed:300}]},{name:"Renaissance",evolveXP:4500,baseHp:4e3,baseStyle:"fort",theme:{bg:"30 20% 88%",fg:"10 30% 25%",accent:"0 50% 50%"},special:{name:"Cannon Barrage",cooldown:60,duration:4,type:"cannons"},units:[{name:"Halberdier",desc:"Long-reaching infantry. Takes half damage from siege shots.",cost:200,hp:400,dmg:80,range:65,speed:50,type:"melee",size:50,attackSpeed:1.2,killXp:40,killGold:60},{name:"Musketeer",desc:"Deadly black powder marksman.",cost:300,hp:250,dmg:100,range:400,speed:45,type:"ranged",size:45,attackSpeed:2,projType:"straight",projSpeed:1200,killXp:50,killGold:80},{name:"Field Cannon",splashRadius:65,siegeMultiplier:2,desc:"Siege gun: 2x base damage; splashes two nearby troops at 35%.",cost:900,hp:1e3,dmg:250,range:450,speed:30,type:"ranged",size:75,attackSpeed:3,projType:"arc",projSpeed:600,killXp:150,killGold:300}],turrets:[{name:"Swivel Gun",desc:"Fast firing anti-infantry gun.",cost:1500,dmg:100,range:450,attackSpeed:1,projType:"straight",projSpeed:1200},{name:"Heavy Cannon",desc:"Slow firing massive damage.",cost:2500,dmg:250,range:500,attackSpeed:2.5,projType:"arc",projSpeed:700},{name:"Mortar",desc:"Extreme range plunging fire.",cost:4e3,dmg:500,range:600,attackSpeed:4,projType:"arc",projSpeed:500}]},{name:"Modern Age",evolveXP:15e3,baseHp:12e3,baseStyle:"bunker",theme:{bg:"120 10% 85%",fg:"120 20% 20%",accent:"30 70% 50%"},special:{name:"Airstrike",cooldown:60,duration:5,type:"airstrike"},units:[{name:"Infantry",desc:"Trench fighter. Takes half damage from siege shots.",cost:1500,hp:1200,dmg:250,range:50,speed:60,type:"melee",size:50,attackSpeed:.8,killXp:200,killGold:300},{name:"Marine",desc:"Rapid-fire assault troops.",cost:2e3,hp:800,dmg:130,range:400,speed:55,type:"ranged",size:45,attackSpeed:.65,projType:"straight",projSpeed:1800,killXp:250,killGold:400},{name:"Tank",splashRadius:80,siegeMultiplier:2,desc:"Armored siege: 2x base damage; splashes two nearby troops at 35%.",cost:6500,hp:4500,dmg:800,range:350,speed:40,type:"heavy",size:110,attackSpeed:2.5,projType:"straight",projSpeed:1e3,killXp:800,killGold:1200}],turrets:[{name:"Machine Gun",desc:"Shreds lightly armored units.",cost:6e3,dmg:80,range:500,attackSpeed:.15,projType:"straight",projSpeed:2e3},{name:"Rocket Pod",desc:"Fires armor piercing missiles.",cost:9e3,dmg:600,range:550,attackSpeed:2,projType:"straight",projSpeed:800},{name:"Artillery",desc:"Long range explosive barrage.",cost:15e3,dmg:1500,range:700,attackSpeed:3.5,projType:"arc",projSpeed:800}]},{name:"Future Age",evolveXP:5e4,baseHp:4e4,baseStyle:"dome",theme:{bg:"210 30% 25%",fg:"210 60% 85%",accent:"180 80% 60%"},special:{name:"Orbital Laser",cooldown:60,duration:4,type:"laser"},units:[{name:"Energy Blade",desc:"Cyber swordsman. Takes half damage from siege shots.",cost:5e3,hp:5e3,dmg:1e3,range:60,speed:70,type:"melee",size:55,attackSpeed:1,killXp:800,killGold:1e3},{name:"Blaster",desc:"Fires concentrated energy beams.",cost:7e3,hp:3e3,dmg:600,range:420,speed:60,type:"ranged",size:50,attackSpeed:.8,projType:"laser",projSpeed:3e3,killXp:1e3,killGold:1500},{name:"War Mech",splashRadius:90,siegeMultiplier:2,desc:"Siege beams: 2x base damage; splashes two nearby troops at 35%.",cost:2e4,hp:15e3,dmg:3e3,range:400,speed:45,type:"heavy",size:130,attackSpeed:2,projType:"laser",projSpeed:3e3,killXp:3e3,killGold:4e3}],turrets:[{name:"Laser Gatling",desc:"Unending beam of light.",cost:2e4,dmg:300,range:550,attackSpeed:.2,projType:"laser",projSpeed:3e3},{name:"Ion Cannon",desc:"Heavy anti-armor blasts.",cost:4e4,dmg:2500,range:600,attackSpeed:2,projType:"laser",projSpeed:3e3},{name:"Plasma Ray",desc:"Melts organic matter.",cost:8e4,dmg:6e3,range:800,attackSpeed:3,projType:"arc",projSpeed:1200}]},{name:"Cosmic Age",evolveXP:9999999,baseHp:15e4,baseStyle:"portal",theme:{bg:"260 40% 10%",fg:"280 50% 80%",accent:"300 80% 60%"},special:{name:"Void Rift",cooldown:70,duration:5,type:"orbital"},units:[{name:"Hover Drone",desc:"Swift hunter. Takes half damage from siege shots.",cost:15e3,hp:14e3,dmg:2400,range:70,speed:85,type:"melee",size:60,attackSpeed:1,killXp:2e3,killGold:3e3},{name:"Void Ray",desc:"Channels antimatter.",cost:2e4,hp:8e3,dmg:2400,range:500,speed:70,type:"ranged",size:55,attackSpeed:1,projType:"laser",projSpeed:4e3,killXp:3e3,killGold:4500},{name:"Mothership",splashRadius:140,siegeMultiplier:2,desc:"Siege orbs: 2x base damage; splashes two nearby troops at 35%.",cost:65e3,hp:5e4,dmg:8e3,range:550,speed:35,type:"heavy",size:160,attackSpeed:3,projType:"orb",projSpeed:600,killXp:1e4,killGold:15e3}],turrets:[{name:"Plasma Rep.",cost:5e4,dmg:1200,range:600,attackSpeed:.3,projType:"laser",projSpeed:4e3},{name:"Black Hole",cost:1e5,dmg:6e3,range:650,attackSpeed:2.5,projType:"orb",projSpeed:500},{name:"Antimatter",cost:2e5,dmg:2e4,range:900,attackSpeed:4,projType:"laser",projSpeed:5e3}]}];function Yu(i){i&&typeof i=="object"&&(Object.values(i).forEach(Yu),Object.freeze(i))}Yu(rt);var Ir="2.0.0";var Nt=.016666666666666666,Ut=1280;var Gi=600,mt=180,Zu=80,Ti=[500,1500,3500,8e3,18e3,35e3,75e3,15e4,35e4,75e4],Ju=[5,12,35,200,700,1800],_n=Object.freeze({normal:{name:"Normal",color:"hsl(var(--diff-normal))",hpMult:1,dmgMult:1,econMult:1,xpMult:1,baseGold:175,baseHpMult:1,thinkRate:1.8,aiAggression:.35},hard:{name:"Hard",color:"hsl(var(--diff-hard))",hpMult:1.2,dmgMult:1.1,econMult:1.4,xpMult:1.2,baseGold:250,baseHpMult:1.2,thinkRate:1.15,aiAggression:.58},harder:{name:"Harder",color:"hsl(var(--diff-harder))",hpMult:1.5,dmgMult:1.3,econMult:2,xpMult:1.5,baseGold:500,baseHpMult:1.5,thinkRate:.65,aiAggression:.82},impossible:{name:"Impossible",color:"hsl(var(--diff-impossible))",hpMult:2,dmgMult:1.5,econMult:4,xpMult:2.5,baseGold:1500,baseHpMult:2,thinkRate:.28,aiAggression:1}});function Bt(i,e){return e===1?i.player:i.enemy}function Wi(i,e,t){return(1+Bt(i,e).upgrades[t]*{dmg:.15,hp:.25,econ:.2}[t])*(e===-1?_n[i.difficulty][`${t}Mult`]:1)}function $u(i,e){return Ju[Bt(i,e).age]*Wi(i,e,"econ")}function Ku(i){let e=i.rng>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,i.rng=e>>>0,i.rng/4294967296}function Pn(i,e,t={}){i.events.push({tick:i.tick,type:e,...t})}function ju({seed:i=1,difficulty:e="normal",startAge:t=0,opponent:n=!0}={}){if(!Number.isInteger(i)||i<0||i>4294967295)throw new Error("seed must be a uint32");if(!Object.hasOwn(_n,e))throw new Error("Unknown difficulty");if(!Number.isInteger(t)||t<0||t>=rt.length)throw new Error("Invalid startAge");if(typeof n!="boolean")throw new Error("opponent must be boolean");let s=_n[e],r=a=>{let l=rt[t].baseHp*(a===-1?s.baseHpMult:1);return{hp:l,maxHp:l,age:t,gold:(a===-1?s.baseGold:175)*rt[t].units[0].cost/15,xp:t?rt[t-1].evolveXP:0,upgrades:{dmg:0,hp:0,econ:0},turrets:[null,null,null,null],turretProgress:[1,1,1,1],turretTimers:[0,0,0,0],unlockedSlots:1,specialTimer:0,drawProgress:1,deployTimer:0,rng:(i||1)>>>0}};return{version:Ir,seed:i,difficulty:e,tick:0,nextId:1,running:!0,paused:!1,winner:null,player:r(1),enemy:r(-1),units:[],projectiles:[],specials:[],events:[],agreements:{noSpecials:!1,noTurrets:!1,meleeOnly:!1},restraintUntil:0,opponent:{enabled:n,nextTick:Math.round(.8*60),order:"balanced",lastAction:"",emotion:"Centered"},metrics:{firstContactTick:null,kills:{1:0,"-1":0},spent:{1:0,"-1":0},damage:{1:0,"-1":0},spawned:{1:0,"-1":0},peakUnits:0,evolutions:[]}}}function wi(i,e,t){if(e!==1&&e!==-1)return"invalid-team";if(!t||typeof t!="object"||Array.isArray(t))return"invalid-command";if(!i.running)return"match-ended";if(i.paused)return"paused";let n=Bt(i,e),s=rt[n.age],r=e===-1?i.agreements:{};if(n.drawProgress<1)return"base-drawing";switch(t.type){case"unit":return!Number.isInteger(t.index)||!s.units[t.index]?"invalid-unit":r.meleeOnly&&s.units[t.index].type==="ranged"?"pact":e===-1&&i.tick<i.restraintUntil?"truce":n.deployTimer>0?"deploying":i.units.some(a=>a.team===e&&a.range<=s.units[t.index].range&&Math.abs(a.x-(e===1?mt:Ut-mt))<(a.size+s.units[t.index].size)/2+10)?"deployment-blocked":i.units.filter(a=>a.team===e).length>=Zu?"unit-cap":n.gold<s.units[t.index].cost?"gold":null;case"turret":return!Number.isInteger(t.index)||!s.turrets[t.index]?"invalid-turret":r.noTurrets?"pact":n.turrets.slice(0,n.unlockedSlots).includes(null)?n.gold<s.turrets[t.index].cost?"gold":null:"slots-full";case"sell":return n.turrets.some(a=>a!==null)?null:"no-turret";case"slot":return n.unlockedSlots>=4?"slots-full":n.gold<n.unlockedSlots*500?"gold":null;case"upgrade":return["hp","dmg","econ"].includes(t.stat)?n.upgrades[t.stat]>=Ti.length?"max-upgrade":n.gold<Ti[n.upgrades[t.stat]]?"gold":null:"invalid-upgrade";case"evolve":return n.age>=rt.length-1?"max-age":n.xp<s.evolveXP?"xp":null;case"special":return r.noSpecials?"pact":e===-1&&i.tick<i.restraintUntil?"truce":n.specialTimer>0?"cooldown":null;default:return"unknown-command"}}function Pr(i,e,t){let n=wi(i,e,t);if(n)return{ok:!1,error:n};let s=Bt(i,e),r=rt[s.age],a=l=>{s.gold-=l,i.metrics.spent[e]+=l};switch(t.type){case"unit":{let l=r.units[t.index],c=l.hp*Wi(i,e,"hp");a(l.cost),s.deployTimer=.4;let u={...l,id:i.nextId++,team:e,age:s.age,uType:t.index,x:e===1?mt:Ut-mt,y:Gi,hp:c,maxHp:c,attackCooldown:0,drawProgress:0,active:!0,isAttacking:!1,moving:!0,animTimer:0,animOffset:i.nextId*17%100};i.units.push(u),i.metrics.spawned[e]++,Pn(i,"spawn",{team:e,id:u.id,index:t.index,x:u.x,y:u.y,size:u.size});break}case"turret":{let l=s.turrets.findIndex((c,u)=>c===null&&u<s.unlockedSlots);a(r.turrets[t.index].cost),s.turrets[l]=t.index,s.turretProgress[l]=0,s.turretTimers[l]=0;break}case"sell":{let l=s.turrets.findLastIndex(c=>c!==null);s.gold+=r.turrets[s.turrets[l]].cost*.5,s.turrets[l]=null,s.turretTimers[l]=0;break}case"slot":a(s.unlockedSlots*500),s.unlockedSlots++;break;case"upgrade":{a(Ti[s.upgrades[t.stat]]),s.upgrades[t.stat]++,t.stat==="hp"&&Qu(i,e);break}case"evolve":s.age++,s.drawProgress=0,Qu(i,e),s.gold+=s.turrets.reduce((l,c)=>l+(c===null?0:r.turrets[c].cost*.5),0),s.turrets.fill(null),s.turretTimers.fill(0),s.turretProgress.fill(1),i.metrics.evolutions.push({tick:i.tick,team:e,age:s.age}),Pn(i,"evolve",{team:e,age:s.age});break;case"special":{s.specialTimer=r.special.cooldown;let l=i.units.filter(d=>d.team!==e),c=s.age===4?150:300,o=l.map(d=>({x:d.x,value:l.filter(h=>Math.abs(h.x-d.x)<c).reduce((h,f)=>h+f.cost,0)})).sort((d,h)=>h.value-d.value||(d.x-h.x)*e)[0]?.x??(e===1?Ut-300:300);i.specials.push({id:i.nextId++,team:e,age:s.age,x:o,remaining:Math.round(r.special.duration*60),nextPulse:0}),Pn(i,"special",{team:e,age:s.age});break}}return Pn(i,"command",{team:e,command:{...t}}),{ok:!0}}function Qu(i,e){let t=Bt(i,e),n=rt[t.age].baseHp*Wi(i,e,"hp")*(e===-1?_n[i.difficulty].baseHpMult:1);t.hp+=n-t.maxHp,t.maxHp=n}var Dr=i=>i===1?mt:Ut-mt,Lr=(i,e)=>Math.round(Math.abs(i-e)*1e6)/1e6,C_=(i,e)=>Math.max(0,(e.x-i.x)*i.team-(i.size+e.size)/2);function ed(i){let e=[],t=[],n=[];for(let r of[1,-1]){let a=i.units.filter(o=>o.team===r).sort((o,d)=>(d.x-o.x)*r||o.id-d.id),l=i.units.filter(o=>o.team!==r&&o.drawProgress>=.8).sort((o,d)=>(o.x-d.x)*r||o.id-d.id),c=null;for(let o of a){if(o.attackCooldown=Math.max(0,o.attackCooldown-Nt),o.animTimer=Math.max(0,o.animTimer-Nt),o.drawProgress<1){o.drawProgress=Math.min(1,o.drawProgress+Nt*2),c=o;continue}let d=l.find(m=>(m.x-o.x)*r>=-(o.size+m.size)/2),h=!d,f=d?C_(o,d):Math.max(0,(Dr(-r)-o.x)*r-o.size/2);if(o.isAttacking=f<=o.range+1e-6,o.moving=!o.isAttacking,o.isAttacking){if(o.siegeMultiplier&&!h){let m=Math.min(o.speed*Nt*.35,Math.max(0,f-20));m>0&&(t.push([o,o.x+r*m]),o.moving=!0)}if(i.metrics.firstContactTick===null&&(i.metrics.firstContactTick=i.tick),o.attackCooldown<=1e-9){o.attackCooldown=o.attackSpeed,o.animTimer=.3;let m=o.dmg*Wi(i,r,"dmg");o.projType?n.push({x:o.x,y:o.y-o.size*.7,targetX:d?d.x:Dr(-r),targetY:d?d.y-d.size/2:Gi-40,type:o.projType,speed:o.projSpeed,dmg:m*(h&&o.siegeMultiplier||1),team:r,targetId:d?.id??null,targetIsBase:h,splashRadius:o.splashRadius||0}):(e.push({team:r,targetId:d?.id??null,dmg:m}),Pn(i,"melee",{team:r,x:o.x+r*o.size/2,y:o.y-o.size/2}))}}else{let m=Math.min(o.speed*Nt,Math.max(0,f-o.range));c&&c.range<=o.range&&(m=Math.min(m,Math.max(0,(c.x-o.x)*r-(c.size+o.size)/2-10))),t.push([o,Math.max(mt,Math.min(Ut-mt,o.x+r*m))]),o.moving=m>0}c=o}let u=Bt(i,r);for(let o=0;o<u.unlockedSlots;o++){if(u.turretTimers[o]=Math.max(0,u.turretTimers[o]-Nt),u.turrets[o]===null||u.turretProgress[o]<1||u.turretTimers[o]>1e-9)continue;let d=rt[u.age].turrets[u.turrets[o]],h=Dr(r)-r*10,f=l.find(m=>Math.abs(m.x-h)<=d.range+1e-6);f&&(n.push({x:h,y:Gi-150-o*90,targetX:f.x,targetY:f.y-f.size/2,type:d.projType,speed:d.projSpeed,dmg:d.dmg*Wi(i,r,"dmg"),team:r,targetId:f.id,targetIsBase:!1}),u.turretTimers[o]=d.attackSpeed)}}for(let[r,a]of t)r.x=Math.round(a*1e6)/1e6;for(let r of n)td(i,r);P_(i,e),I_(i,e);for(let r of e){let a=r.targetId===null?Bt(i,-r.team):i.units.find(l=>l.id===r.targetId);a&&(i.metrics.damage[r.team]+=Math.min(Math.max(0,a.hp),r.dmg),a.hp-=r.dmg,Pn(i,"damage",{team:r.team,targetId:r.targetId,amount:r.dmg,x:a.x??Dr(-r.team),y:a.y?a.y-a.size/2:Gi-100}))}let s=_n[i.difficulty];for(let r of i.units){if(r.hp>0)continue;let a=Bt(i,-r.team),l=Bt(i,r.team);a.gold+=r.killGold*(r.team===1?s.econMult:1),a.xp+=r.killXp*(r.team===1?s.xpMult:1),l.xp+=r.killXp*.5*(r.team===-1?s.xpMult:1),i.metrics.kills[-r.team]++,Pn(i,"death",{team:r.team,id:r.id,x:r.x,y:r.y,size:r.size,gold:r.killGold,xp:r.killXp})}i.units=i.units.filter(r=>r.hp>0),i.metrics.peakUnits=Math.max(i.metrics.peakUnits,i.units.length),(i.player.hp<=0||i.enemy.hp<=0)&&(i.player.hp=Math.max(0,i.player.hp),i.enemy.hp=Math.max(0,i.enemy.hp),i.winner=i.player.hp===0&&i.enemy.hp===0?0:i.enemy.hp===0?1:-1,i.running=!1,Pn(i,"end",{winner:i.winner}))}function td(i,e){let t=e.targetX-e.x,n=e.targetY-e.y,s=e.type==="laser",r=["arc","meteor","arrow","cannonball"].includes(e.type),a=s?Nt:Math.max(Nt,(r?Math.abs(t):Math.hypot(t,n))/e.speed),l=Math.max(1,Math.ceil(a*60-1e-8));i.projectiles.push({...e,id:i.nextId++,startX:e.x,startY:e.y,flightTicks:l,elapsed:0,vx:t/a,vy:n/a-(r?400*a:0),arc:r,active:!0,isSpecial:!!e.isSpecial,hit:!1,life:s?.25:0,trailX:[],trailY:[],trailCount:0})}function I_(i,e){for(let t of i.projectiles){if(t.elapsed++,t.hit){t.life-=Nt,t.active=t.life>0;continue}t.trailX.unshift(t.x),t.trailY.unshift(t.y),t.trailX.length=Math.min(10,t.trailX.length),t.trailY.length=t.trailX.length,t.trailCount=t.trailX.length;let n=Math.min(1,t.elapsed/t.flightTicks),s=t.flightTicks/60;if(t.x=t.startX+(t.targetX-t.startX)*n,t.y=t.startY+(t.targetY-t.startY)*n-(t.arc?400*s*s*n*(1-n):0),!(n<1)){if(t.isSpecial){for(let r of i.units)r.team!==t.team&&Math.abs(r.x-t.x)<t.radius&&e.push({team:t.team,targetId:r.id,dmg:t.dmg});Pn(i,"impact",{x:t.x,y:t.y,type:t.type})}else if(t.targetIsBase)e.push({team:t.team,targetId:null,dmg:t.dmg});else{let r=i.units.find(a=>a.id===t.targetId);if(r&&Lr(r.x,t.targetX)<=r.size+20){let a=t.splashRadius&&r.uType===0?t.dmg*.5:t.dmg;if(e.push({team:t.team,targetId:r.id,dmg:a}),t.splashRadius){let l=i.units.filter(c=>c.team!==t.team&&c.id!==r.id&&Lr(c.x,r.x)<t.splashRadius).sort((c,u)=>Lr(c.x,r.x)-Lr(u.x,r.x)||c.id-u.id).slice(0,2);for(let c of l)e.push({team:t.team,targetId:c.id,dmg:t.dmg*.35*(c.uType===0?.5:1)});Lr(Dr(-t.team),r.x)<t.splashRadius&&e.push({team:t.team,targetId:null,dmg:t.dmg*.35})}}}t.hit=!0,t.active=t.type==="laser"}}i.projectiles=i.projectiles.filter(t=>t.active)}function P_(i,e){for(let t of i.specials){let n=rt[t.age].special,s=Bt(i,t.team),r=t.x;if(n.type==="laser"||n.type==="orbital"){let a=n.type==="laser"?150:300,l=(n.type==="laser"?800:2500)*Nt;for(let c of i.units)c.team!==t.team&&Math.abs(c.x-r)<a&&e.push({team:t.team,targetId:c.id,dmg:l})}else if(t.nextPulse--,t.nextPulse<=0){let a={meteor:[8,150,150,"meteor",800],arrows:[30,40,60,"arrow",1e3],cannons:[6,300,120,"cannonball",1200],airstrike:[8,400,120,"bombDrop",800]},[l,c,u,o,d]=a[n.type];t.nextPulse+=60/l;let h=mt+50+Ku(s)*(Ut-mt-50),f=t.team===1?h:Ut-h;td(i,{x:o==="bombDrop"?f:f-t.team*200,y:-50,targetX:f,targetY:Gi,team:t.team,type:o,speed:d,dmg:c,radius:u,targetId:null,targetIsBase:!1,isSpecial:!0})}t.remaining--}i.specials=i.specials.filter(t=>t.remaining>0)}function Rc(i,e=-1,t="adaptive"){let n=Bt(i,e),s=Bt(i,-e),r=rt[n.age],a=i.units.filter(S=>S.team===e),l=i.units.filter(S=>S.team!==e),c=e===1?mt:Ut-mt,u=l.filter(S=>Math.abs(S.x-c)<500),o=l.filter(S=>Math.abs(S.x-c)<320),d=S=>!wi(i,e,S),h={type:"evolve"};if(d(h))return h;let f={type:"special"};if(t!=="passive"&&d(f)&&(l.length>=3||o.length>0&&n.hp<n.maxHp*.4))return f;if(t==="passive")return null;let m=[],x=(S,A)=>{d(S)?m.push({command:S,score:A}):S.type==="unit"&&S.index>0&&wi(i,e,S)==="gold"&&o.length===0&&a.length>=1&&m.push({command:null,score:A})},g=a.filter(S=>S.type!=="ranged").length,p=a.filter(S=>S.type==="ranged").length,E=l.filter(S=>S.type==="ranged").length,R=e===-1?i.opponent.emotion.toLowerCase():"centered",M=/angry|furious|brave|confident|excited|eager/.test(R),b=/afraid|anxious|worried|scared|tense|sad|weary/.test(R);for(let S=0;S<r.units.length;S++){let A=r.units[S],y=2;t==="melee"?y+=S===0?10:-10:t==="ranged"?y+=S===1?10:-10:t==="heavy"?y+=S===2?10:-10:t==="mixed"?y+=S===i.metrics.spawned[e]%3?5:0:(A.type==="ranged"?y+=g>0?3:-.5:y+=g===0?3:0,S===2&&(y+=E>1?2:.5),S===2&&s.turrets.some(T=>T!==null)&&(y+=3),S===2&&l.length>=3&&a.filter(T=>T.uType===2).length<2&&(y+=3),M&&S===2&&(y+=.5),b&&S===0&&(y+=.5),A.type==="ranged"&&p>=Math.max(2,g*2)&&(y-=3),S===0&&g>Math.max(2,p)&&(y-=2),y+=Math.min(1,A.hp*A.dmg/A.attackSpeed/(A.cost*A.cost))),!(t==="heavy"&&S!==2&&u.length<2)&&(t==="melee"&&S!==0||t==="ranged"&&S!==1||x({type:"unit",index:S},y))}if(t==="adaptive"||t==="turtle"||t==="mixed"){if(o.length>=2||t==="turtle"){for(let S=0;S<r.turrets.length;S++)x({type:"turret",index:S},3+u.length*.7+(t==="turtle"?5:0)+S*.1);n.turrets.every((S,A)=>A>=n.unlockedSlots||S!==null)&&x({type:"slot"},t==="turtle"?6:u.length>4?4:0)}if(a.length>=1||n.gold>=r.units[2].cost*2)for(let S of["econ","dmg","hp"]){let A=n.upgrades[S],y=Ti[A];n.gold>=y+r.units[0].cost*.25&&x({type:"upgrade",stat:S},S==="econ"?u.length<2?5:2:5.5)}}return m.sort((S,A)=>A.score-S.score),m[0]?.command??null}function nd(i){if(!i.opponent.enabled||i.tick<i.opponent.nextTick)return;let e=_n[i.difficulty];i.opponent.nextTick=i.tick+Math.max(1,Math.round(e.thinkRate*60));let t=Rc(i);t&&Pr(i,-1,t).ok?(i.opponent.lastAction=t.type,i.opponent.order=t.type==="turret"?"defend":t.type==="evolve"?"tech":t.type==="special"?"special":"counter"):i.opponent.order="hold"}function id(i){if(!i.running||i.paused)return!1;i.tick++;for(let e of[1,-1]){let t=Bt(i,e);if(t.gold+=$u(i,e)*Nt,t.age<rt.length-1){let n=t.age?rt[t.age-1].evolveXP:0;t.xp+=(rt[t.age].evolveXP-n)/110*Nt*(e===-1?_n[i.difficulty].xpMult:1)}t.specialTimer=Math.max(0,t.specialTimer-Nt),t.deployTimer=Math.max(0,t.deployTimer-Nt),t.drawProgress=Math.min(1,t.drawProgress+Nt*.3);for(let n=0;n<4;n++)t.turretProgress[n]=Math.min(1,t.turretProgress[n]+Nt*.5)}return nd(i),ed(i),!0}function zo(i,e,t,n){if(!Number.isSafeInteger(i)||i<e||i>t)throw new Error(`Invalid ${n}`)}function sd(i){if(!i||typeof i!="object"||Array.isArray(i))throw new Error("Invalid command");let e={unit:["index"],turret:["index"],upgrade:["stat"],sell:[],slot:[],evolve:[],special:[]};if(!Object.hasOwn(e,i.type))throw new Error("Unknown command type");if(Object.keys(i).some(t=>t!=="type"&&!e[i.type].includes(t)))throw new Error("Unknown command field");return structuredClone(i)}function Vo(i){return Array.isArray(i)?`[${i.map(Vo).join(",")}]`:i&&typeof i=="object"?`{${Object.keys(i).sort().map(e=>`${JSON.stringify(e)}:${Vo(i[e])}`).join(",")}}`:JSON.stringify(i)}function L_(i){let e=2166136261;for(let t of Vo(i))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0).toString(16).padStart(8,"0")}var Xi=class i{#e;#i;#s=[];#t=new Map;constructor(e={}){if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Invalid options");if(Object.keys(e).some(t=>!["seed","difficulty","startAge","opponent"].includes(t)))throw new Error("Unknown option");this.#e=ju(e),this.#i={seed:this.#e.seed,difficulty:this.#e.difficulty,startAge:this.#e.player.age,opponent:this.#e.opponent.enabled}}observe(){let e=structuredClone(this.#e);return e.events=[],e}get tick(){return this.#e.tick}get running(){return this.#e.running}get paused(){return this.#e.paused}get winner(){return this.#e.winner}legal(e,t){return!wi(this.#e,e,sd(t))}decide(e=1,t="adaptive"){if(![1,-1].includes(e)||!["adaptive","mixed","melee","ranged","heavy","turtle","passive"].includes(t))throw new Error("Invalid policy");return Rc(this.#e,e,t)}command(e,t,n){let s=sd(t);return this.#r(n,{team:e,command:s},()=>{let r=Pr(this.#e,e,s);return r.ok&&this.#n("command",{team:e,command:s}),r})}client(e){if(e!==1&&e!==-1)throw new Error("Invalid team");return Object.freeze({observe:()=>this.observe(),command:(t,n)=>this.command(e,t,n),legal:t=>this.legal(e,t)})}advance(e,{events:t=!0}={}){zo(e,0,36e3,"tick count");let n=t?this.#e.events.splice(0):[];this.#e.events.length=0;for(let s=0;s<e&&id(this.#e);s++)t&&n.push(...this.#e.events),this.#e.events.length=0;return{tick:this.tick,events:n,running:this.running}}advanceOnce(e,t){return this.#r(e,{advance:t},()=>this.advance(t))}pause(e){if(typeof e!="boolean")throw new Error("Invalid pause");this.#e.paused=e,this.#n("pause",{paused:e})}agreements(e){if(!e||typeof e!="object"||Array.isArray(e)||Object.keys(e).some(t=>!["noSpecials","noTurrets","meleeOnly"].includes(t)||typeof e[t]!="boolean"))throw new Error("Invalid agreements");Object.assign(this.#e.agreements,e),this.#n("agreements",{value:structuredClone(e)})}truce(e){zo(e,0,300,"truce"),this.#e.restraintUntil=e?Math.max(this.#e.restraintUntil,this.tick+e*60):0,this.#n("truce",{seconds:e})}emotion(e){if(typeof e!="string"||!e.trim()||e.length>80)throw new Error("Invalid emotion");this.#e.opponent.emotion=e.trim(),this.#n("emotion",{word:e.trim()})}#n(e,t){this.#s.push({tick:this.tick,type:e,...t})}#r(e,t,n){if(e===void 0)return n();if(typeof e!="string"||!e||e.length>128)throw new Error("Invalid request id");let s=Vo(t),r=this.#t.get(e);if(r){if(r.fingerprint!==s)throw new Error("Request id conflict");return structuredClone(r.result)}if(this.#t.size>=1e4)throw new Error("Request receipt limit reached; start a new session");let a=n();return this.#t.set(e,{fingerprint:s,result:structuredClone(a)}),a}digest(){return L_(this.observe())}replay(){return{version:Ir,options:structuredClone(this.#i),ticks:this.tick,entries:structuredClone(this.#s),digest:this.digest()}}checkpoint(){return{replay:this.replay(),receipts:structuredClone([...this.#t])}}static restore(e){if(!e||!Array.isArray(e.receipts)||e.receipts.length>1e4)throw new Error("Invalid checkpoint");let t=i.fromReplay(e.replay);return t.#t=new Map(structuredClone(e.receipts)),t}static fromReplay(e){if(!e||e.version!==Ir||!Array.isArray(e.entries)||e.entries.length>25e4)throw new Error("Unsupported replay");zo(e.ticks,0,5184e3,"replay duration");let t=new i(e.options),n=s=>{for(zo(s,t.tick,e.ticks,"entry tick");t.tick<s;){let r=t.tick;if(t.advance(Math.min(36e3,s-r),{events:!1}),t.tick===r)throw new Error("Replay advances a paused or ended match")}};for(let s of e.entries)switch(n(s.tick),s.type){case"command":if(!t.command(s.team,s.command).ok)throw new Error("Illegal replay command");break;case"pause":t.pause(s.paused);break;case"agreements":t.agreements(s.value);break;case"truce":t.truce(s.seconds);break;case"emotion":t.emotion(s.word);break;default:throw new Error("Unknown replay entry")}if(n(e.ticks),t.digest()!==e.digest)throw new Error("Replay digest mismatch");return t}};var dn=Object.freeze({width:2.4,depth:1.35,lane:.45,minScale:.2,maxScale:1.6}),rd=Object.freeze([["club","sling","dinosaur"],["sword","bow","horse"],["halberd","musket","cannon"],["soldier","rifle","tank"],["blade","blaster","mech"],["drone","ray","mothership"]].map(Object.freeze)),Cc=["normal","hard","harder","impossible"];function ad(i){if(!i||!i.running)return Cc.map((n,s)=>({id:`start-${n}`,kind:"seal",label:n[0].toUpperCase()+n.slice(1),detail:"Drop on the page to begin",action:"start",difficulty:n,price:0,x:-.72+s*.48,z:.89}));let e=rt[i.player.age],t=[];e.units.forEach((n,s)=>t.push({id:`unit-${s}`,kind:"unit",label:n.name,detail:"Drop in the green rally area",price:n.cost,command:{type:"unit",index:s},x:-1.02+s*.34,z:.86})),e.turrets.forEach((n,s)=>t.push({id:`turret-${s}`,kind:"turret",label:n.name,detail:"Drop at your base",price:n.cost,command:{type:"turret",index:s},x:.12+s*.34,z:.86}));for(let[n,s]of["dmg","hp","econ"].entries())t.push({id:`upgrade-${s}`,kind:"potion",label:{dmg:"Sharpened",hp:"Thick Paper",econ:"Fast Ink"}[s],detail:"Toss onto the battlefield",price:Ti[i.player.upgrades[s]]??1/0,command:{type:"upgrade",stat:s},x:-1.04+n*.27,z:1.16});return t.push({id:"evolve",kind:"evolve",label:"Next age",detail:"Pour onto the page",price:e.evolveXP,currency:"XP",command:{type:"evolve"},x:-.21,z:1.16},{id:"special",kind:"special",label:e.special.name,detail:"Toss onto the battlefield",price:0,command:{type:"special"},x:.08,z:1.16},{id:"slot",kind:"slot",label:"Cannon dock",detail:"Drop at your base",price:i.player.unlockedSlots*500,command:{type:"slot"},x:.37,z:1.16},{id:"sell",kind:"eraser",label:"Sell last cannon",detail:"Drop at your base \xB7 50% refund",price:0,command:{type:"sell"},x:.66,z:1.16}),t}var od=Object.freeze([{id:"pause",action:"pause",kind:"hourglass",label:"Pause / resume",detail:"Lift and return to the page",x:1.05,z:.83},{id:"speed",action:"speed",kind:"clock",label:"Battle speed",detail:"Lift and return \xB7 1\xD7 / 2\xD7 / 3\xD7",x:1.05,z:1.13},{id:"quality",action:"quality",kind:"feather",label:"Mist & detail",detail:"Lift and return to change",x:-1.05,z:-.48},{id:"new",action:"new",kind:"page",label:"New canvas",detail:"Pause first, then drop on the page",x:-.69,z:-.48},{id:"music",action:"music",kind:"music",label:"Music box",detail:"Lift and return to toggle music",x:.69,z:-.48},{id:"exit",action:"exit",kind:"compass",label:"Leave the table",detail:"Lift and return to leave MR",x:1.05,z:-.48}]);function ld(i,e){return!e||!["x","y","z"].every(t=>Number.isFinite(e[t]))?"invalid-position":Math.abs(e.x)>dn.width/2||Math.abs(e.z)>dn.depth/2||Math.abs(e.y)>.12?"off-table":i.kind==="unit"&&!(e.x>=-.88&&e.x<=-.44&&e.z>=.14&&e.z<=.65)?"rally-area":["turret","slot","eraser"].includes(i.kind)&&!(e.x<-.86&&e.z>=-.38&&e.z<=.64)?"your-base":null}var Ic=Object.freeze({gold:"More gold is needed. The piece returns to the shop.",xp:"More XP is needed for the next age.",paused:"Drop the hourglass onto the page to resume first.",deploying:"Your last troop is still deploying.","deployment-blocked":"Make room at your rally point.","unit-cap":"Your army is full.","slots-full":"Add a cannon dock or sell a cannon first.","no-turret":"There is no cannon to sell.",cooldown:"The special is still recharging.","base-drawing":"Your new base is still being drawn.","max-upgrade":"This potion is already at its strongest.","max-age":"You have reached the final age.","off-table":"Missed the page. Nothing was spent.","rally-area":"Drop troops in the green rally area.","your-base":"Place this at your own base on the left.","stale-age":"The age changed. Choose a new piece.","pause-first":"Pause before starting a new canvas.","match-ended":"Choose a difficulty to start the next battle.","tracking-lost":"Tracking lost. Held pieces returned safely.","not-started":"Drop a difficulty seal onto the page.","invalid-position":"The drop could not be tracked.","already-holding":"Release the piece in this hand first.","unknown-offer":"That piece is no longer on sale."});var Ho=class{constructor({session:e=null,onEvent:t=()=>{}}={}){this.session=e,this.onEvent=t,this.speed=1,this.quality="mist",this.holds=new Map,this.sequence=0,this.accumulator=0,this.drops=[]}observe(){return this.session?.observe()??null}offers(e=this.observe()){return[...ad(e),...od]}offer(e){return this.offers().find(t=>t.id===e)}reason(e,t=this.observe()){return e?e.action==="new"&&t?.running&&!t.paused?"pause-first":e.action?null:t?wi(t,1,e.command):"not-started":"unknown-offer"}say(e,t={}){this.onEvent({type:e,...t})}fail(e){return this.say("message",{text:Ic[e]||e,error:e}),{ok:!1,error:e}}start(e="normal",t={}){return Cc.includes(e)?(this.cancelAll(),this.session=new Xi({...t,difficulty:e}),this.accumulator=0,this.speed=1,this.say("start",{difficulty:e}),{ok:!0}):this.fail("unknown-offer")}grab(e,t){if(this.holds.has(e))return this.fail("already-holding");let n=this.offer(t),s=this.reason(n);if(s)return this.fail(s);let r={id:++this.sequence,owner:e,offer:structuredClone(n),age:this.observe()?.player.age??null};return this.holds.set(e,r),this.say("grab",{token:r}),{ok:!0,token:r}}cancel(e){let t=this.holds.get(e);this.holds.delete(e),t&&this.say("cancel",{token:t})}cancelAll(){for(let e of[...this.holds.keys()])this.cancel(e)}drop(e,t){let n=this.holds.get(e);if(!n)return{ok:!1,error:"not-held"};this.holds.delete(e);let{offer:s}=n,r=ld(s,t),a;if(r)a=this.fail(r);else if(n.age!==(this.observe()?.player.age??null))a=this.fail("stale-age");else{let l=this.reason(s);l?a=this.fail(l):s.action?a=this.tool(s):a=this.session.command(1,s.command)}return!a.ok&&!r&&this.say("message",{text:Ic[a.error]||a.error,error:a.error}),this.drops.push({offer:s.id,tick:this.session?.tick??0,point:{...t},...a}),this.drops.length>256&&this.drops.shift(),this.say("drop",{token:n,point:t,result:a}),a}tool(e){switch(e.action){case"start":return this.start(e.difficulty);case"pause":if(!this.session?.running)return this.fail("not-started");this.session.pause(!this.session.paused),this.accumulator=0,this.say("message",{text:this.session.paused?"Paused. Drop the hourglass onto the page to resume.":"The battle continues."});break;case"speed":this.speed=this.speed%3+1,this.say("message",{text:`Battle speed: ${this.speed}\xD7`});break;case"quality":this.quality=this.quality==="mist"?"clear":this.quality==="clear"?"comfort":"mist",this.say("quality",{quality:this.quality});break;case"music":this.say("music");break;case"new":this.cancelAll(),this.session=null,this.accumulator=0,this.say("menu");break;case"exit":this.pauseForInterruption(),this.say("exit");break;default:return this.fail("unknown-offer")}return{ok:!0}}pauseForInterruption(){this.cancelAll(),this.accumulator=0,this.session?.running&&!this.session.paused&&this.session.pause(!0)}update(e){if(!Number.isFinite(e)||e<0)throw new Error("Invalid elapsed time");if(e>=5){this.pauseForInterruption();return}if(!this.session?.running||this.session.paused)return;this.accumulator+=e*this.speed*60;let t=Math.floor(this.accumulator);t&&(this.accumulator-=t,this.advance(t))}advance(e){if(!this.session)return;let t=this.session.running,n=this.session.advance(e);return n.events.length&&this.say("combat",{events:n.events}),t&&!this.session.running&&(this.cancelAll(),this.say("finish",{winner:this.session.winner})),n}};var cd={type:"change"},Lc={type:"start"},ud={type:"end"},Go=new zn,hd=new Jt,D_=Math.cos(70*Ds.DEG2RAD),Ct=new C,an=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pc=1e-6,Wo=class extends _r{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new wt,this._lastTargetPosition=new C,this._quat=new wt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new C,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new C,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=F_.bind(this),this._onContextMenu=G_.bind(this),this._onMouseWheel=k_.bind(this),this._onKeyDown=z_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=H_.bind(this),this._onMouseDown=O_.bind(this),this._onMouseMove=B_.bind(this),this._interceptControlDown=W_.bind(this),this._interceptControlUp=X_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=nt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let l=Ct.length();a=this._clampDistance(l*this._scale);let c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let u=new C(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),a=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<D_?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pc||this._lastTargetPosition.distanceToSquared(this.target)>Pc?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function N_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function U_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function F_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function O_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case wn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case wn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Lc)}function B_(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function k_(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Lc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ud))}function z_(i){this.enabled!==!1&&this._handleKeyDown(i)}function V_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case Hn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Hn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Lc)}function H_(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function G_(i){this.enabled!==!1&&i.preventDefault()}function W_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ni(i,e=.018){let t=[],n=[],s=[],r=[],a=new C,l=new C,c=new C,u=new C(0,1,0);for(let[d,h]of i.entries()){let f=[];for(let m=0;m<h.length;m++){let x=h[m],g=h[Math.max(0,m-1)],p=h[Math.min(h.length-1,m+1)];a.set(p[0]-g[0],p[1]-g[1],p[2]-g[2]).normalize(),l.crossVectors(a,Math.abs(a.y)>.9?new C(1,0,0):u).normalize(),c.crossVectors(a,l).normalize();let E=.76+Math.sin(m*2.3+d*4.1)*.16,R=m===0||m===h.length-1?.55:1;f.push(Array.from({length:3},(M,b)=>{let S=b*Math.PI*2/3,A=x.map((y,T)=>E*R*(l.getComponent(T)*Math.cos(S)+c.getComponent(T)*Math.sin(S)));return{position:x.map((y,T)=>y+e*A[T]),center:x,offset:A}}))}for(let m=1;m<f.length;m++){let x=.75+.22*Math.sin(m*1.7+d)**2;for(let g=0;g<3;g++){let p=(g+1)%3;for(let E of[f[m-1][g],f[m][g],f[m][p],f[m-1][g],f[m][p],f[m-1][p]])t.push(...E.position),s.push(...E.center),r.push(...E.offset),n.push(x,x,x)}}}let o=new _t;return o.setAttribute("position",new Ze(t,3)),o.setAttribute("color",new Ze(n,3)),o.setAttribute("pencilCenter",new Ze(s,3)),o.setAttribute("pencilOffset",new Ze(r,3)),o.computeBoundingSphere(),o.userData.pencil=!0,o.userData.paths=i.length,o}var Bs=(i,e=1,t=0,n=12)=>Array.from({length:n+1},(s,r)=>{let a=r/n*Math.PI*2,l=e*(1+Math.sin(a*3+i)*.014);return i===0?[Math.cos(a)*l,Math.sin(a)*l,t]:i===1?[Math.cos(a)*l,t,Math.sin(a)*l]:[t,Math.cos(a)*l,Math.sin(a)*l]});function Xo(){let i=[Bs(0),Bs(2)];for(let s=0;s<4;s++){let r=-.65+s*.24,a=Math.sqrt(1-r*r);i.push(Array.from({length:4},(l,c)=>{let u=.2+c*.25;return[Math.cos(u)*a,r+c*.025,Math.sin(u)*a]}))}let e=[];for(let s of[-.5,.5])for(let r of[-.5,.5])e.push([[-.5,s,r],[.5,s+.006,r]]),e.push([[s,-.5,r],[s,.5,r+.006]]),e.push([[s,r,-.5],[s+.006,r,.5]]);for(let s=0;s<4;s++){let r=-.4+s*.2;e.push([[r,-.48,.505],[r+.1,-.12,.505]]),e.push([[.505,-.4+s*.2,-.4],[.505,-.3+s*.2,.15]])}let t=[Bs(1,1,-.5,10),Bs(1,1,.5,10)],n=[Bs(1,1,-.5)];for(let s of[0,Math.PI/2,Math.PI,Math.PI*1.5])t.push([[Math.cos(s),-.5,Math.sin(s)],[Math.cos(s),.5,Math.sin(s)]]),n.push([[Math.cos(s),-.5,Math.sin(s)],[0,.5,0]]);return{stroke:ni([[[0,-.5,0],[.11,-.18,.06],[-.06,.2,-.04],[0,.5,0]]],.75),sphere:ni(i,.06),box:ni(e,.029),rod:ni(t,.055),cone:ni(n,.055),ring:ni([Bs(0,1,0,12)],.045),shadow:ni(Array.from({length:7},(s,r)=>{let a=-.75+r*.25,l=Math.sqrt(1-a*a);return[[-l,a,0],[0,a+.025,0],[l,a+.08,0]]}),.014)}}var $e=Object.freeze({paper:"#fff0d2",wood:"#c89d65",leaf:"#8fb882",leather:"#bd865c",ink:"#342d2b",graphite:"#514b45",soft:"#756b5c",player:"#2b8d88",enemy:"#b64f42",damage:"#d37768",health:"#70b392",income:"#d7b750",evolution:"#859ac1",special:"#ce8260"});var Dc=new Map;function qi(i){if(Dc.has(i))return Dc.get(i);let e=rt[i].theme,t=new Ne(`hsl(${e.bg.split(" ").join(",")})`),n=new Ne(`hsl(${e.accent.split(" ").join(",")})`),s=t.clone().lerp(new Ne("#fff6df"),.76),r=t.clone().lerp(n,.42).lerp(s,.2),a={paper:s.getStyle(),accent:n.getStyle(),body:r.getStyle()};return Dc.set(i,a),a}function Nc(i=71){return()=>(i=Math.imul(1664525,i)+1013904223>>>0,i/4294967296)}var Ln;function Uc(){if(Ln)return Ln;let i=128,e=new Uint8Array(i*i*4),t=Nc();for(let n=0;n<i;n++)for(let s=0;s<i;s++){let r=Math.sin((s+n*.37)*.9),a=Math.sin(s*.095)*Math.cos(n*.072),l=Math.round(229+a*12+r*5+t()*9),c=(n*i+s)*4;e[c]=e[c+1]=e[c+2]=l,e[c+3]=255}return Ln=new Ui(e,i,i),Ln.colorSpace=bt,Ln.wrapS=Ln.wrapT=gs,Ln.magFilter=Tt,Ln.minFilter=Wn,Ln.generateMipmaps=!0,Ln.needsUpdate=!0,Ln}function dd(){return new Dt({map:Uc(),vertexColors:!0,side:Ot,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}function fd(){let i=new _t;i.setAttribute("position",new Ze([0,0,0,1,0,0,0,1,0],3)),i.setAttribute("uv",new Ze([0,0,1,0,0,1],2)),i.computeVertexNormals();let e={fill_sphere:new cr(.985,12,5),fill_box:new Vn(.994,.994,.994),fill_rod:new Es(.985,.985,.994,10),fill_cone:new or(.985,.994,12),fill_triangle:i},t=new C(-.3,.8,.5).normalize(),n=new C;for(let s of Object.values(e)){let r=s.attributes.normal,a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){n.fromBufferAttribute(r,l);let c=.88+Math.max(0,n.dot(t))*.12;a.set([c,c,c],l*3)}s.setAttribute("color",new $t(a,3))}return e}var Fc=new Map,pd=i=>(Fc.has(i)||Fc.set(i,new Ne(i)),Fc.get(i)),Yi=class{constructor(e,{capacity:t=12e3}={}){this.material=new Dt({vertexColors:!0}),this.material.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 pencilCenter;
attribute vec3 pencilOffset;
attribute vec3 pencilRadius;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>","vec3 transformed = pencilCenter + pencilOffset * pencilRadius;")},this.material.customProgramCacheKey=()=>"spatial-pencil-width-v1",this.fillMaterial=dd(),this.meshes={},this.counts={},this.overflow=0,this.triangles=0;for(let[n,s]of Object.entries({...Xo(),...fd()})){let r=n.startsWith("fill_");r||s.setAttribute("pencilRadius",new Fi(new Float32Array(t*3),3).setUsage(Ps));let a=new Oi(s,r?this.fillMaterial:this.material,t);a.name=`pencil-${n}`,a.instanceMatrix.setUsage(Ps),a.frustumCulled=!1,a.count=0,e.add(a),this.meshes[n]=a}this.m=new Xe,this.p=new C,this.s=new C,this.q=new wt,this.euler=new sn,this.direction=new C,this.up=new C(0,1,0),this.context={x:0,y:0,z:0,scale:1,face:1,paint:$e.paper},this.begin()}begin(){for(let e of Object.keys(this.meshes))this.counts[e]=0;this.overflow=0}model(e,t,n,s=1,r=1){this.context={x:e,y:t,z:n,scale:s,face:r,paint:$e.paper}}paint(e){this.context.paint=e}point([e,t,n=0]){let s=this.context;return[s.x+e*s.scale*s.face,s.y+t*s.scale,s.z+n*s.scale]}write(e,t,n,s,r,a=.0015*this.context.scale){let l=this.meshes[e],c=this.counts[e];if(c>=l.instanceMatrix.count){this.overflow++;return}this.p.set(...t),this.s.set(...n),this.m.compose(this.p,r,this.s),l.setMatrixAt(c,this.m),l.setColorAt(c,pd(s)),l.geometry.attributes.pencilRadius?.setXYZ(c,...n.map(u=>a/Math.max(Math.abs(u),1e-8))),this.counts[e]++}part(e,t,n,s=$e.graphite,r=[0,0,0],a){let l=this.context.scale;this.q.setFromEuler(this.euler.set(...r)),this.write(e,this.point(t),n.map(c=>c*l),s,this.q),this.meshes[`fill_${e}`]&&this.fill(e,t,n,a||(s===$e.graphite?this.context.paint:s),r)}fill(e,t,n,s,r=[0,0,0]){this.q.setFromEuler(this.euler.set(...r)),this.write(`fill_${e}`,this.point(t),n.map(a=>a*this.context.scale),s,this.q)}panel(e,t){let n=this.meshes.fill_triangle,s=new C(...this.point(e[0]));for(let r=2;r<e.length;r++){let a=this.counts.fill_triangle;if(a>=n.instanceMatrix.count){this.overflow++;return}let l=new C(...this.point(e[r-1])).sub(s),c=new C(...this.point(e[r])).sub(s),u=new C().crossVectors(l,c);u.lengthSq()!==0&&(u.normalize(),this.m.makeBasis(l,c,u).setPosition(s),n.setMatrixAt(a,this.m),n.setColorAt(a,pd(t)),this.counts.fill_triangle++)}}line(e,t,n=.004,s="#342d2b"){let r=this.point(e),a=this.point(t);this.direction.set(a[0]-r[0],a[1]-r[1],a[2]-r[2]);let l=this.direction.length();if(l<1e-6)return;this.q.setFromUnitVectors(this.up,this.direction.multiplyScalar(1/l));let c=Math.min(n,.006)*.82*this.context.scale;this.write("stroke",r.map((u,o)=>(u+a[o])/2),[c,l,c],s,this.q,c*.75)}path(e,t=.004,n="#342d2b"){for(let s=1;s<e.length;s++)this.line(e[s-1],e[s],t,n)}ellipse(e,t,n="xy",s="#342d2b",r=16){this.path(Array.from({length:r+1},(a,l)=>{let c=l/r*Math.PI*2,u=Math.cos(c)*t[0],o=Math.sin(c)*t[1];return(n==="xz"?[u,0,o]:n==="yz"?[0,u,o]:[u,o,0]).map((h,f)=>h+e[f])}),.003,s)}sphere(e,t,n){this.part("sphere",e,[t,t,t],n)}outlineBall(e,t,n=$e.graphite){this.part("sphere",e,[t,t,t],n,[0,0,0],n===$e.graphite?$e.paper:n)}box(e,t,n=$e.graphite){this.part("box",e,t,n)}end(){this.triangles=0;for(let[e,t]of Object.entries(this.meshes))t.count=this.counts[e],t.instanceMatrix.needsUpdate=!0,t.geometry.attributes.pencilRadius&&(t.geometry.attributes.pencilRadius.needsUpdate=!0),t.instanceColor&&(t.instanceColor.needsUpdate=!0),this.triangles+=t.count*(t.geometry.index?.count??t.geometry.attributes.position.count)/3}dispose(){for(let e of Object.values(this.meshes))e.removeFromParent(),e.geometry.dispose();this.material.dispose(),this.fillMaterial.dispose()}};var q_=Object.freeze({dmg:[[[-.7,-.7],[.75,.85]],[[-.7,-.25],[-.2,-.75]],[[.45,.85],[.8,.88],[.75,.5]]],hp:[[[0,-.8],[-.85,.1],[-.7,.65],[-.3,.8],[0,.4],[.3,.8],[.7,.65],[.85,.1],[0,-.8]]],econ:[[[-.8,-.4],[-.3,-.6],[.6,-.4],[.65,.2],[-.25,.05],[-.8,.2],[-.8,-.4]],[[-.8,.2],[-.3,.4],[.6,.2]],[[-.5,.6],[.15,.75],[.65,.6]]],evolve:[[[-.6,-.7],[-.6,-.1],[0,-.1],[0,.5],[.65,.5]],[[.3,.1],[.7,.55],[.3,.95]]],special:[[[.1,.9],[-.5,0],[.1,0],[-.2,-.9],[.65,.2],[.1,.2],[.1,.9]]],music:[[[-.35,-.35],[-.35,.6],[.5,.8],[.5,-.15]],[[-.35,-.35],[-.6,-.5],[-.65,-.25],[-.35,-.2]],[[.5,-.15],[.2,-.35],[.15,-.1],[.5,0]]],compass:[[[0,.95],[.3,0],[0,-.9],[-.3,0],[0,.95]],[[-.8,0],[.8,0]]],pause:[[[-.35,-.6],[-.35,.6]],[[.35,-.6],[.35,.6]]],page:[[[-.65,-.8],[-.65,.8],[.4,.8],[.7,.5],[.7,-.8],[-.65,-.8]],[[.4,.8],[.4,.5],[.7,.5]],[[-.3,0],[.4,0]],[[-.3,-.4],[.4,-.4]]]});function Nr(i,e,t=0,n=.05,s=.033,r=.022,a="#342d2b"){for(let l of q_[e]||[])i.path(l.map(([c,u])=>[t+c*r,n+u*r,s]),.0035,a)}var Qt=$e.ink,Pe=$e.graphite,Ai={1:$e.player,"-1":$e.enemy};function Y_(i,e,t,n,s,r,a,l){let c=r&&!l?Math.sin(s*10)*.026:.002,u=a?Math.sin(s*18)*.045:0,o=[0,.071,0],d=[0,.13,0];i.line(o,d,.0045),i.part("box",[0,.103,0],[.021,.041,.025],Pe,[0,0,0],n),i.outlineBall([0,.158,0],.025),i.line([.021,.16,-.012],[.023,.163,-.012],.0035,Qt),i.line([.021,.16,.012],[.023,.163,.012],.0035,Qt);for(let f of[-1,1]){let m=[f*c,.006,f*.02],x=[-f*c*.5,.038,f*.013];i.line(o,x),i.line(x,m),i.line(m,[m[0]+.014,.004,m[2]],.005)}let h=l?[.018,.226,.02]:[.061+u,.099+u*.3,.02];i.line(d,[.02,l?.17:.1,.019]),i.line([.02,l?.17:.1,.019],h),i.line(d,[-.024,.097,-.018]),i.line([-.024,.097,-.018],[.016,.079,-.025]),i.line([-.01,.127,-.017],[.017,.119,.024],.009,n),i.panel([[-.012,.126,.023],[-.036,.119,.024],[-.028,.108,.025]],n),i.path([[-.012,.126,.023],[-.036,.119,.024],[-.028,.108,.025]],.004,n),["sword","halberd","blade"].includes(e)?(i.line(h,[h[0]+.028,h[1]+.09,h[2]],.005,n),i.line([h[0]-.016,h[1]+.016,h[2]],[h[0]+.018,h[1]+.007,h[2]],.004),e==="halberd"&&i.box([h[0]+.025,h[1]+.071,h[2]],[.027,.028,.007],Pe)):["rifle","soldier","musket","blaster"].includes(e)?(i.box([h[0]-.006,h[1],h[2]],[.035,.012,.012],Pe),i.line(h,[h[0]+.06,h[1]+.012,h[2]],.0048,e==="blaster"?n:Qt)):e==="bow"?(i.line([.071,.145,.021],[.085,.103,.021],.003),i.line([.085,.103,.021],[.07,.058,.021],.003),i.line([.071,.145,.021],[.07,.058,.021],.0014,Pe)):e==="sling"?(i.path([h,[h[0]+.033,h[1]+.02,.023],[h[0]+.023,h[1]+.065,.021],[h[0]-.01,h[1]+.028,.021],h],.0023),i.outlineBall([h[0]+.023,h[1]+.047,.021],.006)):(i.path([h,[h[0]+.006,h[1]+.061,.022],[h[0]+.021,h[1]+.071,.022],[h[0]+.034,h[1]+.057,.022],[h[0]+.01,h[1],.022]],.004),i.line([h[0]+.014,h[1]+.018,.024],[h[0]+.023,h[1]+.055,.024],.002)),e==="sword"&&(i.panel([[-.027,.12,-.031],[.008,.119,-.034],[.009,.08,-.034],[-.009,.063,-.034],[-.029,.082,-.031]],n),i.path([[-.027,.12,-.03],[.008,.119,-.033],[.009,.08,-.033],[-.009,.063,-.033],[-.029,.082,-.03],[-.027,.12,-.03]],.0038,n),i.line([-.009,.111,-.034],[-.009,.08,-.034],.0025)),e==="musket"&&(i.line([h[0]+.045,h[1]+.012,h[2]],[h[0]+.093,h[1]+.012,h[2]],.003),i.path([[-.026,.179,0],[0,.199,-.027],[.033,.181,.008],[-.026,.179,0]],.003)),e==="rifle"&&(i.box([.042,.117,.024],[.029,.009,.008]),i.line([.024,.119,.024],[.058,.119,.024],.002)),e==="soldier"&&i.box([-.018,.105,-.014],[.02,.035,.034]),e==="blade"&&i.path([[h[0],h[1]+.03,h[2]],[h[0]+.009,h[1]+.11,h[2]],[h[0]+.029,h[1]+.09,h[2]],[h[0],h[1]+.03,h[2]]],.003,n),e==="blaster"&&i.part("ring",[h[0]+.047,h[1]+.011,h[2]],[.013,.013,.013],n,[0,Math.PI/2,0]),t===1&&i.part("cone",[0,.183,0],[.028,.025,.028],Pe),t===2&&i.part("cone",[0,.185,0],[.031,.025,.024],Pe),t===3&&i.part("sphere",[0,.175,0],[.028,.012,.028],Pe),t===4&&(i.box([0,.11,0],[.023,.033,.029],Pe),i.line([.024,.166,-.017],[.024,.166,.017],.004,Pe))}function Z_(i,e,t,n,s,r){i.paint(e?$e.leaf:$e.leather),i.part("sphere",[-.012,.061,0],[.062,.035,.034],Pe),i.line([.024,.077,0],[.065,.116,0],.017,Pe),i.sphere([.073,.125,0],.024,Pe),i.line([-.063,.072,0],[-.113,.09,0],.007);for(let a of[-.045,.03])for(let l of[-.025,.025]){let c=s?Math.sin(n*9+a*30+l*30)*.02:0;i.line([a,.064,l],[a+c,.006,l],.005)}if(i.outlineBall([-.005,.163,0],.019),i.line([-.005,.144,0],[-.014,.089,0]),i.part("box",[-.009,.119,0],[.02,.037,.026],Pe,[0,0,0],t),i.line([-.014,.099,0],[-.009,.042,.039]),i.line([-.012,.129,.012],r?[.018,.226,.02]:[.048,.116,.02]),i.line([-.01,.137,-.015],[.002,.13,.016],.008,t),e||i.line([.033,.109,.024],[.117,.2,.024],.0025),e){for(let a=0;a<4;a++){let l=-.06+a*.022;i.path([[l,.083,0],[l+.004,.116,0],[l+.019,.085,0]],.003)}i.line([.078,.117,.02],[.097,.12,.02],.003)}else i.path([[.061,.14,0],[.058,.165,-.008],[.071,.143,0]],.003),i.path([[.048,.1,-.014],[.036,.079,-.02],[.053,.122,-.016]],.003),i.line([.073,.123,.026],[.005,.12,.028],.002)}function qo(i,e=0,t=0,n=$e.player,s=!1){if(i.paint(qi(e).body),i.box([0,.024,0],[.085,.022,.072]),i.part("box",[0,.026,.038],[.066,.014,.005],Pe,[0,0,0],n),e<3||s)for(let a of[-.042,.042])i.part("ring",[-.016,.025,a],[.023,.023,.023],Qt),i.line([-.039,.025,a],[.007,.025,a],.0025),i.line([-.016,.002,a],[-.016,.048,a],.0025);else for(let a of[-.035,.035])i.path([[-.043,.002,a*1.4],[0,.05,a],[.043,.002,a*1.4]],.003);let r=(a,l,c,u=.12,o=0,d=.01)=>{i.fill("rod",[a+c/2,l+u*c/2,o],[d,c*Math.sqrt(1+u*u),d],qi(e).body,[0,0,(-Math.PI/2+Math.atan(u))*i.context.face]);for(let h of[-1,1])i.path([[a,l+h*d,o-d],[a+c,l+u*c+h*d,o-d],[a+c,l+u*c+h*d,o+d],[a,l+h*d,o+d]],.0038);i.part("ring",[a+c,l+u*c,o],[d*1.25,d*1.25,d*1.25],n,[0,Math.PI/2,0])};if(e===0&&t===0||e===1&&t===0)i.path([[-.034,.034,0],[-.02,.076,0],[.058,.151,0]],.004),i.outlineBall([.058,.151,0],.023),i.path([[-.02,.076,-.034],[-.047,.03,-.034],[.022,.03,-.034],[-.02,.076,-.034]],.003),e===1&&i.box([-.052,.056,0],[.032,.044,.036]);else if(e===0&&t===1)i.path([[-.02,.026,0],[-.01,.075,0],[0,.131,-.045]],.004),i.line([-.01,.075,0],[0,.131,.045],.004),i.path([[0,.131,-.045],[-.048,.091,0],[0,.131,.045]],.002),i.part("sphere",[-.048,.097,0],[.016,.024,.016]);else if(e===0&&t===2){i.part("rod",[0,.073,0],[.034,.065,.034]);for(let a=0;a<3;a++)i.path([[-.024+a*.023,.103,0],[-.009+a*.018,.153+a%2*.02,0],[.014+a*.015,.109,0]],.0035,n)}else if(e===1&&t===1)i.path([[-.035,.047,0],[.025,.081,0],[.105,.084,0]],.004),i.path([[.018,.081,-.066],[.053,.081,0],[.018,.081,.066]],.004),i.path([[.018,.081,-.066],[-.022,.075,0],[.018,.081,.066]],.002),i.path([[.088,.084,-.012],[.112,.084,0],[.088,.084,.012]],.003);else if(e===1&&t===2){for(let a of[-.04,.04])i.path([[-.04,.02,a],[-.022,.139,a],[.014,.139,a],[.042,.02,a]],.0035);i.part("sphere",[.02,.103,0],[.045,.032,.034]),i.part("ring",[.02,.125,0],[.043,.043,.043],n,[Math.PI/2,0,0])}else if(e===2)r(-.03,.066,t===2?.075:.13,t===2?1.2:.12,0,t===1?.018:.012),t===0&&i.line([-.01,.027,0],[-.01,.064,0],.005),t===1&&i.box([-.02,.044,0],[.071,.025,.051]);else if(e===3)if(t===1){i.box([0,.089,0],[.09,.069,.07]);for(let a of[.072,.1])for(let l of[-.018,.018])i.part("ring",[.047,a,l],[.011,.011,.011],n,[0,Math.PI/2,0])}else r(-.025,.072,t===0?.12:.17,t===0?.03:.4,0,t===0?.006:.012),t===0?i.box([-.024,.059,.031],[.039,.036,.019]):i.box([.006,.065,0],[.015,.085,.094]);else if(e===4)if(i.part("sphere",[0,.057,0],[.036,.022,.033]),t===0)for(let a of[-.02,0,.02])r(-.005,.091,.094,.1,a,.005);else if(t===1){r(-.025,.086,.14,.13,0,.015);for(let a=0;a<3;a++)i.part("ring",[.015+a*.027,.094,0],[.025,.025,.025],n,[0,Math.PI/2,0])}else{for(let a of[-.036,.036])i.path([[-.02,.05,0],[.015,.11,a],[.1,.123,a]],.004,n);i.outlineBall([.078,.115,0],.025,n)}else if(i.part("cone",[0,.065,0],[.027,.07,.027]),t===0)i.part("sphere",[.01,.119,0],[.049,.025,.025]),r(.025,.119,.065,0,0,.009);else if(t===1)i.part("ring",[.012,.126,0],[.047,.047,.047],n,[0,Math.PI/2,.2]),i.part("ring",[.012,.126,0],[.029,.029,.029],Qt,[.5,Math.PI/2,0]);else{for(let a of[-.036,.036])i.path([[-.025,.08,a],[0,.148,a],[.036,.113,a],[.07,.164,a]],.004,n);i.part("sphere",[.025,.137,0],[.026,.031,.026],n)}i.line([-.041,.023,.039],[.038,.023,.039],.004,n)}function Oc(i,e,t,{x:n=0,y:s=0,z:r=0,scale:a=1,team:l=1,time:c=0,walking:u=!1,attacking:o=!1,held:d=!1}={}){i.model(n,s,r,a,l),i.paint(qi(e).body);let h=rd[e]?.[t]||"club",f=Ai[l];if(h==="dinosaur"||h==="horse")Z_(i,h==="dinosaur",f,c,u,d);else if(h==="cannon")qo(i,e,1,f,!0);else if(h==="tank"){i.box([0,.053,0],[.14,.049,.091],Pe),i.box([0,.091,0],[.072,.036,.065],f);for(let m of[-.054,.054]){i.box([0,.026,m],[.16,.034,.024],Pe);for(let x of[-.052,-.017,.019,.055])i.part("ring",[x,.026,m*1.2],[.016,.016,.014],Pe)}i.line([.018,.096,0],[.15,.105,0],.008)}else if(h==="mech"){let m=u?Math.sin(c*8)*.025:0;i.box([0,.133,0],[.074,.065,.062],Pe),i.outlineBall([.025,.175,0],.023,Pe);for(let x of[-1,1])i.line([0,.112,x*.027],[-m*x,.056,x*.04],.009),i.line([-m*x,.056,x*.04],[m*x,.006,x*.05],.008),i.line([0,.147,x*.049],[.096,.138,x*.049],.011,f)}else if(["drone","ray","mothership"].includes(h)){let m=h==="mothership"?.077:.041,x=.095+Math.sin(c*2)*.006;i.part("sphere",[0,x,0],[m,m*.45,m*.75],Pe),i.part("ring",[0,x,0],[m*1.3,m*1.3,m*.8],Qt,[Math.PI/2,0,.1]),i.outlineBall([.035,x+.008,0],.013,f);for(let g of[-1,1])if(h==="drone")for(let p of[-.04,.04])i.line([0,x,0],[p,x,g*.067],.003),i.part("ring",[p,x,g*.067],[.024,.024,.024],Qt,[Math.PI/2,0,0]);else h==="ray"?(i.panel([[.04,x,g*.015],[-.015,x+.015,g*.13],[-.064,x,g*.047],[-.04,x,0]],f),i.path([[.04,x,g*.015],[-.015,x+.015,g*.13],[-.064,x,g*.047],[-.04,x,0]],.004,f),i.line([0,x,0],[-.015,x+.015,g*.13],.0025)):i.path([[-.025,x,g*.06],[-.072,x-.035,g*.094],[-.052,x-.045,g*.116]],.004);if(h==="ray"&&i.path([[-.03,x,0],[-.11,x+.009,0],[-.14,x+.039,0]],.003),h==="drone"){for(let g of[-1,1])i.path([[-.02,x-.009,g*.02],[-.03,x-.038,g*.024],[.025,x-.038,g*.024]],.003);i.line([0,x+.013,0],[.008,x+.039,0],.003)}h==="mothership"&&(i.part("cone",[0,x+.045,0],[.029,.054,.029],f),i.line([0,x+.071,0],[0,x+.12,0],.003))}else Y_(i,h,e,f,c,u,o,d)}function md(i,e,t,n,s=1){let r=Ai[n],a=-.3*(1-s);if(i.model(t,a,.14,1,n),i.paint(qi(e).body),i.box([0,.025,0],[.27,.05,.48],Pe),e===0){i.part("sphere",[0,.07,0],[.14,.145,.15],Pe),i.part("sphere",[.11,.066,.02],[.013,.068,.05],Qt);for(let l=0;l<8;l++)i.line([-.1+l*.028,.05,.13],[-.06+l*.02,.18-Math.abs(l-3.5)*.016,-.09],.0018,Pe)}else if(e===1){i.box([0,.111,0],[.21,.17,.3],Pe);for(let l of[-.12,.12]){i.box([0,.175,l],[.15,.24,.065],Pe);for(let c of[-.06,0,.06])i.box([c,.31,l],[.037,.044,.065],Pe)}i.box([.109,.089,.01],[.008,.105,.07],Qt)}else if(e===2){i.box([0,.09,0],[.2,.12,.29],Pe);for(let l of[-.14,.14])i.path([[-.11,.04,l],[-.13,.15,l],[-.045,.19,l],[.09,.14,l],[.13,.04,l]],.004),i.path([[-.13,.15,l],[-.13,.15,l+Math.sign(l)*.07],[-.045,.19,l+Math.sign(l)*.1],[.09,.14,l]],.004);i.part("cone",[-.045,.227,0],[.065,.09,.075],Pe);for(let l of[-.07,0,.07])i.box([.103,.09,l],[.005,.026,.022])}else if(e===3){i.box([0,.07,0],[.22,.1,.31],Pe),i.part("sphere",[0,.12,0],[.15,.04,.18],Pe),i.box([.117,.077,0],[.012,.024,.19],Qt);for(let l of[-.11,0,.11])i.box([.114,.032,l],[.045,.035,.08]);i.line([-.08,.13,-.12],[-.08,.32,-.12],.003),i.line([-.12,.28,-.12],[-.035,.28,-.12],.003)}else{i.part("sphere",[0,.064,0],[.145,.12,.18],Pe);for(let l of[-.15,.15])i.part("cone",[0,.175,l],[.047,.3,.047],r),i.sphere([0,.333,l],.022,Pe);e===5&&i.part("ring",[.11,.16,0],[.12,.12,.12],Pe,[0,Math.PI/2,0]),e===4&&(i.part("ring",[0,.15,0],[.17,.17,.17],r,[Math.PI/2,0,0]),i.path([[-.05,.17,0],[-.11,.23,0],[-.16,.25,0]],.004),i.part("ring",[-.16,.25,0],[.05,.05,.05],Qt,[0,Math.PI/2,.3]))}i.line([0,.17,-.2],[0,.4,-.2],.004),i.box([.043,.369,-.2],[.083,.045,.004],r)}function Bc(i,e,t,n={}){let{x:s=0,y:r=0,z:a=0,scale:l=1,time:c=0,held:u=!1}=n;if(e.kind==="unit")return Oc(i,t,e.command.index,{...n,team:1});if(i.model(s,r,a,l),i.paint($e.wood),e.kind==="turret")return qo(i,t,e.command.index,Ai[1]);let o={dmg:$e.damage,hp:$e.health,econ:$e.income}[e.command?.stat]||(e.kind==="special"?$e.special:$e.evolution);if(["potion","evolve","special"].includes(e.kind)){let d=e.command?.stat||e.kind,f={dmg:[[-.011,.095],[-.011,.073],[-.034,.042],[-.026,.014],[.026,.014],[.034,.042],[.011,.073],[.011,.095]],hp:[[-.013,.093],[-.013,.076],[-.036,.064],[-.039,.035],[-.023,.012],[.022,.012],[.039,.035],[.036,.064],[.013,.076],[.013,.093]],econ:[[-.025,.084],[-.033,.072],[-.033,.015],[.033,.015],[.033,.072],[.025,.084]],evolve:[[-.012,.12],[-.012,.081],[-.036,.023],[-.031,.013],[.031,.013],[.036,.023],[.012,.081],[.012,.12]],special:[[-.017,.098],[-.017,.081],[-.041,.045],[-.026,.009],[0,.003],[.026,.009],[.041,.045],[.017,.081],[.017,.098]]}[d],m=Math.floor(f.length/2);for(let p=0;p<m-(f.length%2?0:1);p++){let[E,R]=f[p],[M,b]=f[p+1],S=b>.07?$e.paper:o;for(let A of[-.0205,.0205])i.panel([[E,R,A],[M,b,A],[-M,b,A],[-E,R,A]],S);for(let A of[-1,1])i.panel([[E*A,R,-.0205],[M*A,b,-.0205],[M*A,b,.0205],[E*A,R,.0205]],S)}let x=f[m-1];i.panel([[x[0],x[1],-.0205],[-x[0],x[1],-.0205],[-x[0],x[1],.0205],[x[0],x[1],.0205]],o);for(let p of[-.021,.021])i.path(f.map(([E,R])=>[E,R,p]),.0037);for(let p of[0,Math.floor(f.length/2),f.length-1])i.line([...f[p],-.021],[...f[p],.021],.003);let g=f[0][1];i.box([0,g+.004,0],[Math.abs(f[0][0])*2.3,.012,.047]);for(let p=0;p<5;p++)i.line([-.025+p*.01,.018,.022],[-.019+p*.01,.04,.022],.0028,o);Nr(i,d,0,.055,.024,.017,Qt)}else if(e.kind==="hourglass"){for(let d of[.013,.122])i.box([0,d,0],[.08,.013,.055],Pe);i.part("cone",[0,.044,0],[.03,.056,.025],Pe,[0,0,0],$e.income),i.part("cone",[0,.088,0],[.03,.056,.025],Pe,[Math.PI,0,0]);for(let d of[-.034,.034])i.line([d,.018,0],[d,.115,0],.003)}else if(e.kind==="clock"||e.kind==="compass")if(i.paint($e.paper),i.part("ring",[0,.063,0],[.046,.046,.015],Pe),i.part("sphere",[0,.063,0],[.043,.043,.007],Pe),e.kind==="compass")Nr(i,"compass",0,.063,.015,.031);else{i.line([0,.063,.012],[.018,.083,.012],.0025),i.line([0,.063,.012],[-.025,.049,.012],.0025);for(let d=0;d<12;d++){let h=d*Math.PI/6;i.line([Math.cos(h)*.035,.063+Math.sin(h)*.035,.013],[Math.cos(h)*.04,.063+Math.sin(h)*.04,.013],.0025)}}else if(e.kind==="music")i.box([0,.033,0],[.09,.066,.066],Pe),i.part("ring",[0,.04,.035],[.023,.023,.012],Qt),i.line([.04,.07,0],[.065,.12,0],.003),i.line([.065,.12,0],[.092,.127,0],.003),i.sphere([.092,.12,0],.009,Qt),Nr(i,"music",0,.041,.035,.019);else if(e.kind==="feather"){i.line([-.021,.012,0],[.031,.135,0],.002);for(let d=0;d<7;d++)i.line([-.015+d*.006,.025+d*.014,0],[.025+d*.006,.037+d*.014,.003],.004,Pe)}else if(e.kind==="slot")i.box([0,.018,0],[.115,.035,.075],Pe),i.part("ring",[0,.038,0],[.03,.03,.03],Qt,[Math.PI/2,0,0]);else if(e.kind==="eraser"){i.paint($e.damage),i.box([0,.022,0],[.085,.039,.048],Pe);for(let d=0;d<4;d++)i.line([-.04+d*.008,.004,.025],[-.035+d*.008,.039,.025],.002)}else if(e.kind==="seal"){i.paint({normal:$e.health,hard:$e.income,harder:$e.special,impossible:$e.damage}[e.difficulty]),i.part("rod",[0,.018,0],[.058,.022,.058],Pe),i.part("ring",[0,.034,0],[.043,.043,.043],Pe,[Math.PI/2,0,0]),i.part("cone",[0,.064,0],[.024,.06,.024],Pe);let d=["normal","hard","harder","impossible"].indexOf(e.difficulty)+1;for(let h=0;h<d;h++)i.path([[-.018,.004+h*.011,.06],[0,.012+h*.011,.06],[.018,.004+h*.011,.06]],.003)}else{i.paint($e.paper),i.box([0,.025,0],[.1,.04,.08],Pe),Nr(i,"page",0,.05,.042,.03);for(let d=0;d<3;d++)i.line([-.046,.015+d*.007,.042],[.046,.015+d*.007,.042],.002)}u&&i.part("ring",[0,.15+Math.sin(c*4)*.003,0],[.019,.019,.019],Pe,[Math.PI/2,0,0])}function gd(i,e,t,n=0){let s=Ai[t];e==="arc"&&n===1?(i.line([-.03*t,0,0],[.025*t,0,0],.0028),i.path([[.012*t,.009,0],[.028*t,0,0],[.012*t,-.009,0]],.0025)):e==="laser"?(i.line([-.03*t,-.003,0],[.03*t,-.003,0],.0028,s),i.line([-.026*t,.003,0],[.035*t,.003,0],.0028,s)):e==="straight"?i.line([-.015*t,0,0],[.014*t,0,0],.003,s):(i.part("sphere",[0,0,0],[.012,.012,.01],s),e==="orb"&&i.part("ring",[0,0,0],[.02,.02,.02],s,[Math.PI/2,0,0]))}function _d(i,e,t,n,s=!0){let r=Ai[n],a=e===4?.28:.5;if(i.part("ring",[0,0,0],[a,a,.025],r,[Math.PI/2,0,0]),!!s)if(e===4){i.part("ring",[0,.55,0],[.09,.09,.09],r,[Math.PI/2,0,0]);for(let l of[-.022,0,.023])i.path([[l*2,.54,0],[l,.28,.009],[l*.3,0,0]],.003,r)}else if(e===5){for(let l of[-1,1])i.path([[l*.07,.025,0],[l*.035,.13,.01],[l*.065,.2,0],[l*.023,.3,-.01],[0,.38,0]],.004,r);i.part("ring",[0,.16,0],[.14,.14,.14],r,[.3,t*.3,0])}else{for(let l=0;l<6;l++){let c=Math.sin(l*4.7)*a,u=Math.cos(l*2.3)*.075,o=.03+((.4-t*.25+l*.061)%.4+.4)%.4;e===1?i.path([[c-.012,o+.06,u],[c,o,u],[c-.008,o+.012,u]],.0028):(i.outlineBall([c,o,u],e===0?.02:.012,r),i.line([c,o+.023,u],[c-.025,o+.08,u],.0025,r))}if(e===3){let l=Math.sin(t*2)*.4;i.path([[l-.13,.45,0],[l+.12,.45,0],[l+.02,.45,-.11],[l-.01,.45,.11],[l+.12,.45,0]],.0035)}}}var xd=Object.freeze([{title:"I \xB7 FIRST MARKS",motif:"fern, volcano, fossil",base:"bone cave"},{title:"II \xB7 BANNERS & BOWS",motif:"oak, hills, masonry",base:"crenellated keep"},{title:"III \xB7 POWDER & SAIL",motif:"cypress, windmill, navigation",base:"star bastion"},{title:"IV \xB7 IRON & STATIC",motif:"birch, wire, radio",base:"sandbag bunker"},{title:"V \xB7 TOMORROW IN PENCIL",motif:"crystal, circuit, observatory",base:"orbital laboratory"},{title:"VI \xB7 MARGINS OF SPACE",motif:"orbit, comet, constellation",base:"celestial gate"}].map(Object.freeze));function yd(){let i=[];return{paths:i,path:(...e)=>i.push(e),ellipse(e,t,n,s,r,a=!1){i.push(Array.from({length:25},(l,c)=>{let u=c/24*Math.PI*2;return[e+s*Math.cos(u),t+(a?r*Math.sin(u):0),n+(a?0:r*Math.sin(u))]}))}}}function vd(){let i=yd();for(let e of[-1,1]){for(let t=0;t<8;t++){let n=-.012-t*.009,s=e*(1.22+t*.002);for(let r of[-.72,1.4])i.path([0,n-.016,r],[e*.13,n+.003,r],[e*.7,n+.012,r+e*.005],[s,n+.008,r]);i.path([s,n+.008,-.72],[s+e*.008,n+.004,.3],[s,n+.008,1.4])}i.path([0,-.108,-.76],[e*1.28,-.087,-.76],[e*1.3,-.091,1.45],[e*.09,-.104,1.45],[0,-.128,1.43]),i.path([e*.035,-.024,-.7],[e*.035,-.018,.35],[e*.035,-.024,1.4]);for(let t=0;t<42;t++){let n=-.69+t*.049;i.path([e*1.235,-.075,n],[e*1.252,-.025,n+.018])}for(let t=0;t<20;t++){let n=e*(.08+t*.057);i.path([n,-.079,1.402],[n+e*.024,-.027,1.405])}}for(let e=0;e<7;e++){let t=-.55+e*.29;i.path([-.035,-.023,t],[0,-.035,t+.035],[.035,-.024,t])}i.path([.075,-.09,1.36],[.09,-.12,1.61],[.12,-.12,1.57],[.15,-.12,1.61],[.135,-.09,1.36]);for(let e=0;e<6;e++)i.path([.096,-.116,1.4+e*.027],[.134,-.116,1.42+e*.027]);return i.path([-1.18,.001,.7],[-.45,.003,.697],[0,-.013,.7],[.6,.003,.702],[1.18,.001,.7]),i.paths}function Md(i){let e=yd();for(let t=0;t<3;t++){let n=.37+t*.074;e.path(...Array.from({length:30},(s,r)=>[-.92+r*.064,.001,n+Math.sin(r*1.7+t)*.006]))}for(let t=0;t<20;t++){let n=-.9+t*.093,s=.55+Math.sin(t*4.3)*.026;e.path([n,.001,s],[n+.04,.001,s+.018])}for(let t of[-1,1]){let n=t*.54;if(i===0){e.path([n-.23,0,.04],[n-.04,0,-.35],[n+.01,0,-.28],[n+.2,0,.08]);for(let s=0;s<8;s++)e.path([n-.06+s*.024,.002,-.12+s*.02],[n-.15+s*.03,.002,.06]);e.path([n,0,.16],[n+.04,.19,.12],[n+.01,.28,.1]);for(let s=0;s<5;s++)for(let r of[-1,1])e.path([n+.035,.055+s*.034,.12],[n+r*(.1-s*.011),.11+s*.034,.11]);e.ellipse(n+.25,.002,.04,.055,.039)}else if(i===1){e.path([n-.24,0,-.08],[n-.07,0,-.27],[n+.09,0,-.3],[n+.28,0,-.05]),e.path([n,0,.13],[n+.008,.2,.13],[n-.034,.28,.14]),e.path([n+.004,.14,.13],[n+.065,.23,.1]);for(let[s,r]of[[-.055,.26],[.03,.31],[.085,.26]])e.ellipse(n+s,r,.12,.073,.055,!0);for(let s=0;s<6;s++)e.path([n-.14+s*.044,.002,-.08],[n-.08+s*.043,.002,-.17])}else if(i===2){e.path([n-.055,0,.12],[n-.034,.23,.12],[n+.034,.23,.12],[n+.055,0,.12]);for(let s=0;s<4;s++){let r=s*Math.PI/2+.3;e.path([n,.2,.15],[n+Math.cos(r)*.16,.2+Math.sin(r)*.16,.15],[n+Math.cos(r+.18)*.16,.2+Math.sin(r+.18)*.16,.15])}for(let s=0;s<5;s++)e.path([n-.2,0,-.1-s*.027],[n+.17,0,-.13-s*.027])}else if(i===3){e.path([n-.075,0,.13],[n,.34,.13],[n+.075,0,.13]);for(let s=0;s<4;s++)e.path([n-.065+s*.012,s*.06,.13],[n+.05-s*.01,.08+s*.06,.13]);e.ellipse(n,.3,.13,.055,.036,!0);for(let s=0;s<6;s++)e.path([n-.2+s*.07,0,-.1],[n-.2+s*.07,.04,-.1]);e.path([n-.2,.024,-.1],[n+.15,.027,-.1])}else if(i===4){for(let s=0;s<3;s++){let r=n+(s-1)*.095,a=.15+s*.055;e.path([r-.045,0,.12],[r-.038,a,.12],[r,a+.06,.08],[r+.041,a,.1],[r+.045,0,.12]),e.path([r,0,.08],[r,a+.06,.08])}for(let s=0;s<4;s++)e.path([n-.2,0,-.06-s*.04],[n-.04,0,-.06-s*.04],[n+.04,0,-.12-s*.04],[n+.2,0,-.12-s*.04])}else{e.ellipse(n,.14,.1,.1,.1,!0),e.ellipse(n,.14,.1,.17,.045);let s=[[n-.23,0,-.2],[n-.09,0,-.31],[n+.14,0,-.19],[n+.2,0,-.04]];e.path(...s);for(let[r,a,l]of s)e.path([r-.022,a,l],[r+.022,a,l]),e.path([r,a,l-.022],[r,a,l+.022])}}return e.paths}function Ur(i,e="#635b51",t=.0011){let n=new xt(ni(i,t),new Dt({color:e,vertexColors:!0}));return n.name="spatial-pencil-drawing",n}function Sd(){return Array.from({length:16},(i,e)=>Array.from({length:21},(t,n)=>[-1.06+n*.105,.018+e%3*.009,-.28+e*.052+Math.sin(n*.4+e)*.014]))}function J_(i,e){let t=i.getContext("2d"),n=i.width,s=i.height,r=qi(e),a=Nc(130+e);t.globalAlpha=1,t.fillStyle=r.paper,t.fillRect(0,0,n,s);let l=(o,d,h,f,m,x)=>{t.fillStyle=m,t.globalAlpha=x;let g=Array.from({length:28},(R,M)=>{let b=M/28*Math.PI*2,S=.86+a()*.18,A=(o+Math.cos(b)*h*S)*n,y=(d+Math.sin(b)*f*S)*s;return[A,y]});t.beginPath();let p=g[g.length-1],E=g[0];t.moveTo((p[0]+E[0])/2,(p[1]+E[1])/2),g.forEach((R,M)=>{let b=g[(M+1)%g.length];t.quadraticCurveTo(R[0],R[1],(R[0]+b[0])/2,(R[1]+b[1])/2)}),t.closePath(),t.fill()};for(let o=0;o<42;o++){let d=a(),h=a()*.5;l(d,h,.055+a()*.15,.025+a()*.055,o%4===0?r.body:r.accent,.055)}for(let o of[.055,.945])for(let d=0;d<12;d++)l(o,.06+d*.076,.04+a()*.05,.055,r.accent,.07);for(let o=0;o<16;o++)l(.07+o*.056,.55,.057,.06,"#ba9660",.06);l(.229,.526,.09,.11,"#319788",.13),l(.067,.401,.045,.225,"#c49737",.16),t.globalAlpha=1;let c=t.createLinearGradient(n*.476,0,n*.524,0);c.addColorStop(0,"#6d4d2b00"),c.addColorStop(.47,"#6d4d2b28"),c.addColorStop(.5,"#6d4d2b54"),c.addColorStop(.56,"#fff9e988"),c.addColorStop(1,"#fff9e900"),t.fillStyle=c,t.fillRect(n*.476,0,n*.048,s);let u=t.getImageData(0,0,n,s);for(let o=0;o<u.data.length;o+=4){let d=(a()-.5)*9;for(let h=0;h<3;h++)u.data[o+h]+=d;u.data[o+3]=255}t.putImageData(u,0,0)}function $_(){let i=new ei(2.44,2.12,24,1);i.rotateX(-Math.PI/2).translate(0,-.004,.34);let e=i.attributes.position;for(let t=0;t<e.count;t++){let n=Math.abs(e.getX(t));e.setY(t,-.004-.024*Math.max(0,1-n/.14)**2)}return i.computeVertexNormals(),i}var Yo=class extends cn{constructor(){super(),this.name="watercolor-paper-book",this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=1024,this.texture=new Bi(this.canvas),this.texture.colorSpace=bt,this.page=new xt($_(),new Dt({map:this.texture,side:Ot})),this.page.name="opaque-painted-pages",this.add(this.page);let e=(t,n,s)=>{let r=new xt(new Vn(...t),new Dt({color:s,map:Uc()}));r.position.set(...n),this.add(r)};e([2.57,.03,2.21],[0,-.107,.345],"#73534e"),e([2.46,.07,2.12],[0,-.059,.34],"#e8d8b3"),e([.064,.008,.25],[.113,-.115,1.475],"#c39950")}setAge(e){J_(this.canvas,e),this.texture.needsUpdate=!0}dispose(){this.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()}),this.texture.dispose(),this.removeFromParent()}};var kc=[-1,1].flatMap(i=>[-.65,1.34].map(e=>({id:`handle-${i}-${e}`,x:i*1.28,y:.035,z:e}))),bd="#342d2b",ks=class{constructor(e,t,n,{flat:s=!0,backing:r=!1}={}){this.backing=r,this.canvas=document.createElement("canvas"),this.canvas.width=768,this.canvas.height=Math.round(768*n/t),this.ctx=this.canvas.getContext("2d"),this.texture=new Bi(this.canvas),this.texture.colorSpace=bt,this.mesh=new xt(new ei(t,n),new Dt({map:this.texture,transparent:!0,side:Ot,depthWrite:!1})),this.mesh.rotation.x=s?-Math.PI/2:-.35,e.add(this.mesh),this.last=""}text(e,t=bd){let n=JSON.stringify([e,t]);if(n===this.last)return;this.last=n;let{ctx:s,canvas:{width:r,height:a}}=this;s.clearRect(0,0,r,a),this.backing&&(s.fillStyle="#fff0d5",s.beginPath(),s.moveTo(4,7),s.lineTo(r*.53,3),s.lineTo(r-4,8),s.lineTo(r-7,a-5),s.lineTo(7,a-3),s.closePath(),s.fill(),s.strokeStyle="#927454",s.lineWidth=2,s.stroke()),s.strokeStyle="#a49b87",s.lineWidth=2,s.beginPath(),s.moveTo(8,a-5),s.lineTo(r*.53,a-3),s.lineTo(r-8,a-6),s.stroke(),s.textAlign="center",s.textBaseline="middle",s.fillStyle=t,e.forEach((l,c)=>{s.font=`${c===0?"bold ":""}${Math.floor(a/e.length*.61)}px 'Patrick Hand', cursive`,s.fillText(l,r/2,(c+.5)*a/e.length,r-24)}),this.texture.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}},Zo=class{constructor(e,t){this.host=t,this.time=0,this.age=-1,this.labelClock=0,this.labels=new Map,this.offers=[],this.renderer=new Oo({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),this.renderer.xr.setFramebufferScaleFactor(.9),this.renderer.xr.setFoveation(.7),this.renderer.outputColorSpace=bt,this.scene=new tr,this.scene.background=new Ne("#f5f1e8"),this.camera=new Wt(43,1,.01,30),this.camera.position.set(.45,2.45,3.3),this.controls=new Wo(this.camera,e),this.controls.target.set(0,.1,.3),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.485,this.controls.minDistance=.4,this.controls.maxDistance=8,this.controls.mouseButtons={RIGHT:wn.ROTATE,MIDDLE:wn.PAN},this.controls.touches={TWO:Hn.DOLLY_ROTATE},this.scene.add(new fr("#fffaf0","#8c8f82",1.9));let n=new mr("#fff8ed",1.2);n.position.set(-2,4,2),this.scene.add(n),this.root=new cn,this.scene.add(this.root),this.table={position:{x:0,y:0,z:0},yaw:0,scale:1},this.army=new Yi(this.root,{capacity:6e3}),this.shop=new Yi(this.root,{capacity:1200}),this.held=new Yi(this.root,{capacity:600}),this.details=new Yi(this.root,{capacity:100}),this.book=Ur(vd(),"#514a42",.002),this.paper=new Yo,this.root.add(this.paper),this.root.add(this.book),this.landscape=null,this.chapter=new ks(this.root,.92,.063),this.chapter.mesh.position.set(0,.003,-.65),this.zone(-.66,.395,.44,.51,"#438e72"),this.zone(-1.06,.13,.27,1.02,"#a98440"),this.status=new ks(this.root,1.38,.22,{flat:!1,backing:!0}),this.status.mesh.position.set(.02,.2,-.58),this.hint=new ks(this.root,1.85,.105),this.hint.mesh.position.set(0,.004,-.17),this.hint.text(["Lift a difficulty seal from the tray. Drop it onto the page."]),this.shadow=new Oi(Xo().shadow,new Dt({color:"#382f2b",transparent:!0,opacity:.42,depthWrite:!1}),170),this.shadow.frustumCulled=!1,this.root.add(this.shadow),this.shadowMatrix=new Xe,this.shadowQuaternion=new wt().setFromEuler(new sn(-Math.PI/2,0,0)),this.mist=this.makeMist(),this.root.add(this.mist),this.reticle=new xt(new lr(.09,.115,32).rotateX(-Math.PI/2),new Dt({color:"#74c4a5",side:Ot})),this.reticle.visible=!1,this.reticle.matrixAutoUpdate=!1,this.scene.add(this.reticle),this.refreshArt(0),this.resize(),this.syncTable()}zone(e,t,n,s,r){let a=[];for(let u=0;u<12;u++){let o=e-n/2+u*n/12;a.push([[o,.003,t+s/2-.035],[o+.018,.003,t+s/2-.006]])}this.root.add(Ur(a,r,9e-4));let l=[[e-n/2,.004,t-s/2],[e+n/2,.004,t-s/2],[e+n/2,.004,t+s/2],[e-n/2,.004,t+s/2],[e-n/2,.004,t-s/2]].map(u=>new C(...u)),c=new mi(new _t().setFromPoints(l),new hr({color:r,dashSize:.035,gapSize:.018}));c.computeLineDistances(),this.root.add(c)}makeMist(){let e=Ur(Sd(),"#91897c",55e-5);return e.material.transparent=!0,e.material.opacity=.33,e.material.depthWrite=!1,e}refreshArt(e){e!==this.age&&(this.age=e,this.paper.setAge(e),this.landscape&&(this.landscape.removeFromParent(),this.landscape.geometry.dispose(),this.landscape.material.dispose()),this.landscape=Ur(Md(e),"#635b51",.00165),this.root.add(this.landscape),this.chapter.text([xd[e].title]))}resize(){let e=this.renderer.domElement,t=e.clientWidth,n=e.clientHeight;!t||!n||this.renderer.xr.isPresenting||(this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=Math.min(95,Ds.radToDeg(2*Math.atan(Math.tan(Ds.degToRad(43/2))*Math.max(1,1/this.camera.aspect)))),this.camera.updateProjectionMatrix())}syncTable(){let e=this.table;this.root.position.set(e.position.x,e.position.y,e.position.z),this.root.rotation.y=e.yaw,this.root.scale.setScalar(e.scale),this.root.updateMatrixWorld(!0)}immersive(e){this.scene.background=e?null:new Ne("#f5f1e8"),this.controls.enabled=!e,e||this.resize()}message(e){this.hint.text([e])}refreshShop(e){this.offers=this.host.offers(e);let t=new Set(this.offers.map(n=>n.id));for(let[n,s]of this.labels)t.has(n)||(s.dispose(),this.labels.delete(n));this.shop.begin();for(let n of this.offers){Bc(this.shop,n,e?.player.age||0,{x:n.x,z:n.z});let s=this.labels.get(n.id);s||(s=new ks(this.root,n.kind==="seal"?.39:.245,.072),this.labels.set(n.id,s)),s.mesh.position.set(n.x,.006,n.z+.113);let r=this.host.reason(n,e),a=n.price===1/0?"MAX":n.price?`${n.price} ${n.currency||"gold"}`:n.action==="speed"?`${this.host.speed}\xD7`:n.action==="quality"?this.host.quality:n.command?.type==="special"&&e?.player.specialTimer>0?`${Math.ceil(e.player.specialTimer)}s`:"";s.text([n.label,a||(n.action?"Lift & drop":"Ready")],r?"#81766a":bd)}this.shop.end(),this.details.begin();for(let n of kc)this.details.model(n.x,n.y,n.z),this.details.part("ring",[0,0,0],[.075,.075,.075],"#8b7051",[Math.PI/2,0,0]);this.details.end()}update(e,t,n){this.time+=n,this.labelClock-=n,this.refreshArt(e?.player.age||0),this.syncTable(),this.labelClock<=0&&(this.labelClock=.25,this.refreshShop(e),this.status.text(e?[e.running?`${rt[e.player.age].name}  \xB7  ${Math.floor(e.player.gold)} gold  \xB7  ${Math.floor(e.player.xp)} XP`:e.winner===0?"A draw. Both pages fell together.":e.winner===1?"Victory! The page is yours.":"Defeat. A new page awaits.",`${Math.ceil(e.player.hp)} / ${Math.ceil(e.player.maxHp)} HP   \u2014   Enemy ${Math.ceil(e.enemy.hp)} HP   \xB7   ${e.paused?"PAUSED":`${this.host.speed}\xD7`}`]:["INK BATTLE \xB7 THE SKETCHBOOK","Choose a seal. Lift a world."])),this.army.begin();let s=0;if(e){for(let r of[1,-1]){let a=r===1?e.player:e.enemy,l=-r*1.06;md(this.army,a.age,l,r,a.drawProgress),a.turrets.forEach((c,u)=>{c!==null&&(this.army.model(l,.04,-.28+u*.13,.83*Math.max(.02,a.turretProgress[u]),r),qo(this.army,a.age,c,Ai[r]))})}for(let r of e.units){let a=(r.x/1280-.5)*dn.width,l=dn.lane+(r.id%5-2)*.024,c=Math.max(.02,r.drawProgress)*Math.min(1.8,r.size/50),u=this.host.quality==="comfort";Oc(this.army,r.age,r.uType,{x:a,z:l,scale:c,team:r.team,time:u?0:this.time+r.id,walking:!u&&r.moving,attacking:!u&&r.isAttacking}),u||(this.army.model(a,.23*c,l,1),this.army.line([-.035,0,0],[.035,0,0],.0028,"#aa8f7e"),this.army.line([-.035,0,.001],[-.035+.07*Math.max(0,r.hp/r.maxHp),0,.001],.003,Ai[r.team])),this.shadowMatrix.compose(new C(a,.005,l),this.shadowQuaternion,new C(.045*c,.025*c,1)),this.shadow.setMatrixAt(s++,this.shadowMatrix)}for(let r of e.projectiles)!Number.isFinite(r.x)||!Number.isFinite(r.y)||(this.army.model((r.x/1280-.5)*dn.width,Math.max(.035,(600-r.y)/1280*dn.width),dn.lane),gd(this.army,r.type,r.team,r.team===1?e.player.age:e.enemy.age));for(let r of e.specials){let a=(r.x/1280-.5)*dn.width;this.army.model(a,.012,dn.lane),_d(this.army,r.age,this.time,r.team,this.host.quality!=="comfort")}}this.army.end(),this.shadow.count=s,this.shadow.instanceMatrix.needsUpdate=!0,this.shadow.visible=this.host.quality!=="comfort",this.held.begin();for(let r of t){let a=r.position,l=r.offer.kind==="unit";Bc(this.held,r.offer,r.age||0,{x:a.x-(l?.018:0),y:a.y-(l?.226:.06),z:a.z,held:!0,time:this.time})}this.held.end(),this.mist.visible=this.host.quality==="mist",this.mist.position.z=Math.sin(this.time*.18)*.012,this.renderer.xr.isPresenting||this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}stats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,instances:Object.values(this.army.counts).reduce((e,t)=>e+t,0),overflow:this.army.overflow+this.held.overflow+this.shop.overflow,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures}}};var K_=(i,e,t)=>Math.max(e,Math.min(t,i)),Jo=i=>Math.hypot(i.x,i.y,i.z),zc=(i,e)=>({x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}),Ed=(i,e)=>({x:(i.x+e.x)/2,y:(i.y+e.y)/2,z:(i.z+e.z)/2});function Fr(i,e){let t=Math.cos(e),n=Math.sin(e);return{x:t*i.x+n*i.z,y:i.y,z:-n*i.x+t*i.z}}function Ri(i,e){let t=Fr(zc(i,e.position),-e.yaw);return{x:t.x/e.scale,y:t.y/e.scale,z:t.z/e.scale}}function Vc(i,e){let t=Fr(i,e.yaw);return{x:e.position.x+t.x*e.scale,y:e.position.y+t.y*e.scale,z:e.position.z+t.z*e.scale}}var $o=class{constructor(e){this.table=e,this.grips=new Map,this.origin=null}begin(e,t){this.grips.set(e,{...t}),this.rebase()}end(e){this.grips.delete(e),this.rebase()}clear(){this.grips.clear(),this.origin=null}rebase(){let e=[...this.grips.values()];if(!e.length){this.origin=null;return}let t=e.length>1?Ed(e[0],e[1]):e[0],n=e.length>1?zc(e[1],e[0]):{x:1,y:0,z:0};this.origin={local:Ri(t,this.table),distance:Math.max(.06,Jo(n)),angle:Math.atan2(n.z,n.x),scale:this.table.scale,yaw:this.table.yaw}}move(e,t){if(!this.grips.has(e))return;this.grips.set(e,{...t});let n=[...this.grips.values()],s=this.origin,r=n.length>1?Ed(n[0],n[1]):n[0];if(n.length>1){let l=zc(n[1],n[0]);this.table.scale=K_(s.scale*Jo(l)/s.distance,dn.minScale,dn.maxScale),Math.hypot(l.x,l.z)>.05&&(this.table.yaw=s.yaw-(Math.atan2(l.z,l.x)-s.angle))}let a=Fr(s.local,this.table.yaw);this.table.position={x:r.x-a.x*this.table.scale,y:r.y-a.y*this.table.scale,z:r.z-a.z*this.table.scale}}};function Td(i,e,t=9.81){let n={...i.position};if(i.position.x+=i.velocity.x*e,i.position.z+=i.velocity.z*e,i.position.y+=i.velocity.y*e-t*e*e/2,i.velocity.y-=t*e,i.age+=e,n.y>=0&&i.position.y<=0){let s=n.y/(n.y-i.position.y||1);return{x:n.x+(i.position.x-n.x)*s,y:0,z:n.z+(i.position.z-n.z)*s}}return null}var Ko=class{constructor(e,t,{onCarry:n=()=>{}}={}){this.host=e,this.table=t,this.onCarry=n,this.gesture=new $o(t),this.grabs=new Map,this.flights=new Map}begin(e,t,n,s=0){if(this.grabs.has(e)||this.flights.has(e))return!1;if(t.startsWith("handle-"))return this.gesture.grips.size>=2?!1:(this.onCarry(),this.gesture.begin(e,n),this.grabs.set(e,{handle:!0}),!0);let r=this.host.grab(e,t);return r.ok?(this.grabs.set(e,{token:r.token,world:{...n},position:Ri(n,this.table),history:[{world:{...n},time:s}]}),!0):!1}move(e,t,n=0){let s=this.grabs.get(e);if(s){if(s.handle){this.gesture.move(e,t);return}for(s.world={...t},s.position=Ri(t,this.table),s.history.push({world:{...t},time:n});s.history.length>2&&s.history[0].time<n-.12;)s.history.shift()}}release(e,{desktop:t=!1}={}){let n=this.grabs.get(e);if(!n)return;if(this.grabs.delete(e),n.handle){this.gesture.end(e);return}if(!this.host.holds.has(e))return;let s=Ri(n.world,this.table);if(s.y-=n.token.offer.kind==="unit"?.226:.06,t||s.y<=.025){this.host.drop(e,{...s,y:0});return}let r=n.history[0],a=n.history.at(-1),l=Math.max(.016,a.time-r.time),c={x:(a.world.x-r.world.x)/l,y:(a.world.y-r.world.y)/l,z:(a.world.z-r.world.z)/l},u=Math.min(1,3/(Jo(c)||1)),o=Fr(c,-this.table.yaw);for(let d of["x","y","z"])o[d]*=u/this.table.scale;this.flights.set(e,{token:n.token,position:s,velocity:o,age:0})}cancel(e){this.grabs.delete(e),this.flights.delete(e),this.gesture.end(e),this.host.cancel(e)}cancelAll(){for(let e of new Set([...this.grabs.keys(),...this.flights.keys()]))this.cancel(e)}update(e){for(let[t,n]of this.grabs)!n.handle&&!this.host.holds.has(t)&&this.grabs.delete(t);for(let[t,n]of this.flights){if(!this.host.holds.has(t)){this.flights.delete(t);continue}let s=Td(n,Math.min(e,.1),9.81/this.table.scale);s?(this.flights.delete(t),this.host.drop(t,s)):(n.age>3||n.position.y<-1)&&this.cancel(t)}}visuals(){let e=[];for(let t of this.grabs.values())t.handle||e.push({offer:t.token.offer,age:t.token.age,position:Ri(t.world,this.table)});for(let t of this.flights.values())e.push({offer:t.token.offer,age:t.token.age,position:{...t.position,y:t.position.y+(t.token.offer.kind==="unit"?.226:.06)}});return e}};var Zi=i=>({x:i.x,y:i.y,z:i.z}),j_=["thumb","index-finger","middle-finger","ring-finger","pinky-finger"].map(i=>i==="thumb"?["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"]:[`${i}-metacarpal`,`${i}-phalanx-proximal`,`${i}-phalanx-intermediate`,`${i}-phalanx-distal`,`${i}-tip`]),jo=class{constructor(e,t,{onCarry:n=()=>{},onPlace:s=()=>!1}={}){this.view=e,this.host=t,this.interaction=new Ko(t,e.table,{onCarry:n}),this.onPlace=s,this.raycaster=new gr,this.pointer=new Ce,this.pointers=new Map,this.sources=new Map,this.nextId=0,this.canvas=e.renderer.domElement,this.listeners=[];for(let r of["pointerdown","pointermove","pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(r,a=>this.desktop(r,a));this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),this.canvas.addEventListener("keydown",r=>{r.key==="Escape"&&(this.cancelAll(),this.host.pauseForInterruption())}),this.handGroup=new cn,e.scene.add(this.handGroup),this.handVertices=new Ze(new Float32Array(240),3),this.handVertices.setUsage(Ps),this.handLines=new sr(new _t().setAttribute("position",this.handVertices),new pi({color:"#6aa999",transparent:!0,opacity:.75})),this.handGroup.add(this.handLines),this.handLines.frustumCulled=!1}candidates(){return[...kc,...this.view.offers.map(e=>({...e,y:e.kind==="unit"?.15:.07}))]}pick(e,t){let n=Ri(e,this.view.table),s=null,r=1/0;for(let l of this.candidates()){let c=Math.hypot(n.x-l.x,n.y-l.y,n.z-l.z);c<(l.id.startsWith("handle-")?.12:.13)&&c<r&&(s=l,r=c)}if(s)return{target:s.id,world:e};if(!t)return null;let a=1/0;for(let l of this.candidates()){let c=new C().copy(Vc(l,this.view.table)),u=new Tn(c,.105*this.view.table.scale),o=t.intersectSphere(u,new C);if(!o)continue;let d=t.origin.distanceTo(o);d<a&&(a=d,s=l)}return s?{target:s.id,world:Zi(t.at(a,new C)),distance:a}:null}desktopRay(e){let t=this.canvas.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.raycaster.setFromCamera(this.pointer,this.view.camera),this.raycaster.ray}planePoint(e,t){return e.intersectPlane(new Jt(new C(0,1,0),-t),new C)}desktop(e,t){if(this.view.renderer.xr.isPresenting||t.button&&e==="pointerdown")return;let n=`pointer-${t.pointerId}`,s=this.pointers.get(n),r=this.desktopRay(t);if(e==="pointerdown"){let a=this.pick({x:1e5,y:1e5,z:1e5},r);if(!a)return;this.interaction.begin(n,a.target,a.world,t.timeStamp/1e3)&&(this.pointers.set(n,{height:a.target.startsWith("handle-")?a.world.y:Vc({x:0,y:.28,z:0},this.view.table).y}),this.view.controls.enabled=!1,this.canvas.setPointerCapture(t.pointerId),this.canvas.focus(),t.preventDefault())}else if(e==="pointermove")if(s){let a=this.planePoint(r,s.height);a&&this.interaction.move(n,Zi(a),t.timeStamp/1e3)}else{let a=this.pick({x:1e5,y:1e5,z:1e5},r);this.canvas.style.cursor=a?"grab":"default",a&&this.describe(a.target)}else if(s){if(e==="pointerup"){let a=this.planePoint(r,this.view.table.position.y);a&&!this.interaction.grabs.get(n)?.handle&&this.interaction.move(n,Zi(a),t.timeStamp/1e3),this.interaction.release(n,{desktop:!0})}else this.interaction.cancel(n);this.pointers.delete(n),this.view.controls.enabled=!this.pointers.size,this.canvas.hasPointerCapture(t.pointerId)&&this.canvas.releasePointerCapture(t.pointerId)}}describe(e){if(e.startsWith("handle-"))this.view.message("Carry with one ring. Hold two rings to resize and turn.");else{let t=this.host.offer(e);t&&this.view.message(`${t.label} \xB7 ${t.detail}`)}}bind(e){this.unbind(),this.session=e;let t=(n,s)=>{e.addEventListener(n,s),this.listeners.push([n,s])};for(let n of["selectstart","squeezestart","selectend","squeezeend"])t(n,s=>{if(e.visibilityState!=="visible"||s.inputSource.hand)return;let r=this.sources.get(s.inputSource);if(!r?.valid)return;let a=this.view.renderer.xr.getReferenceSpace(),l=s.frame.getPose(s.inputSource.gripSpace||s.inputSource.targetRaySpace,a),c=s.frame.getPose(s.inputSource.targetRaySpace,a);if(!l||!c){this.interaction.cancel(r.id),r.buttons.clear();return}r.position=Zi(l.transform.position),r.ray.origin.copy(c.transform.position),r.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation);let u=n.startsWith("select")?"trigger":"grip";if(n.endsWith("start")){if(this.onPlace(s.frame))return;r.buttons.add(u),r.buttons.size===1&&this.startSource(r)}else if(r.buttons.delete(u),!r.buttons.size){let o=r.distance?Zi(r.ray.at(r.distance,new C)):r.position;this.interaction.move(r.id,o,performance.now()/1e3),this.interaction.release(r.id)}});t("inputsourceschange",n=>{for(let s of n.removed)this.remove(s)})}unbind(){if(this.session)for(let[e,t]of this.listeners)this.session.removeEventListener(e,t);this.listeners=[],this.session=null,this.cancelAll();for(let e of[...this.sources.keys()])this.remove(e)}remove(e){let t=this.sources.get(e);t&&(this.interaction.cancel(t.id),t.line.removeFromParent(),t.line.geometry.dispose(),t.line.material.dispose(),this.sources.delete(e))}startSource(e){let t=this.pick(e.position,e.hand?null:e.ray);t&&(this.describe(t.target),e.distance=t.distance||0,this.interaction.begin(e.id,t.target,t.world,performance.now()/1e3)&&this.feedback(e.id,!0))}feedback(e,t){for(let[n,s]of this.sources)s.id===e&&n.gamepad?.hapticActuators?.[0]?.pulse(t?.25:.1,t?35:80)?.catch(()=>{})}xr(e,t){if(!this.session||this.session.visibilityState!=="visible")return;let n=[],s=performance.now()/1e3;for(let r of this.session.inputSources){let a=this.sources.get(r);if(!a){let h=new mi(new _t().setFromPoints([new C,new C(0,0,-1)]),new pi({color:"#6aa999",transparent:!0,opacity:.5}));this.view.scene.add(h),a={id:`xr-${++this.nextId}`,hand:!!r.hand,buttons:new Set,pinched:!1,armed:!1,valid:!1,ray:new zn,line:h},this.sources.set(r,a)}let l=e.getPose(r.gripSpace||r.targetRaySpace,t),c=e.getPose(r.targetRaySpace,t),u,o=!1;if(r.hand){let h=new Map;for(let[x,g]of r.hand){let p=e.getJointPose(g,t);p&&h.set(x,p.transform.position)}let f=h.get("thumb-tip"),m=h.get("index-finger-tip");if(f&&m){u={x:(f.x+m.x)/2,y:(f.y+m.y)/2,z:(f.z+m.z)/2},o=Math.hypot(f.x-m.x,f.y-m.y,f.z-m.z)<(a.pinched?.04:.025);for(let g of j_)for(let p=1;p<g.length;p++){let E=h.get(g[p-1]),R=h.get(g[p]);E&&R&&n.push(E.x,E.y,E.z,R.x,R.y,R.z)}}}else l&&c&&(u=Zi(l.transform.position));if(a.valid=!!u,!u){this.interaction.cancel(a.id),a.buttons.clear(),a.pinched=!1,a.armed=!1,a.line.visible=!1;continue}a.position=u,c&&(a.ray.origin.copy(c.transform.position),a.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation)),a.line.visible=!a.hand,!a.hand&&c&&(a.line.position.copy(c.transform.position),a.line.quaternion.copy(c.transform.orientation),a.line.scale.z=a.distance||.6);let d=a.distance&&!a.hand?Zi(a.ray.at(a.distance,new C)):u;this.interaction.move(a.id,d,s),a.hand&&!o&&(a.armed=!0),a.hand&&o!==a.pinched&&(a.pinched=o,o?a.armed&&!this.onPlace(e)&&this.startSource(a):this.interaction.release(a.id))}this.handVertices.array.set(n.slice(0,this.handVertices.array.length)),this.handVertices.needsUpdate=!0,this.handLines.geometry.setDrawRange(0,Math.min(n.length,this.handVertices.array.length)/3),this.handLines.visible=n.length>0}cancelAll(){this.interaction.cancelAll();for(let e of this.pointers.keys()){let t=Number(e.slice(8));this.canvas.hasPointerCapture(t)&&this.canvas.releasePointerCapture(t)}this.pointers.clear(),this.view.controls.enabled=!this.view.renderer.xr.isPresenting,this.canvas.style.cursor="default";for(let e of this.sources.values())e.buttons.clear(),e.pinched=!1,e.armed=!1,e.line.visible=!1;this.handLines.visible=!1}};function wd(i){let e="inkBattle.musicMuted.v1",t="global-v2",n="evolvingCanvas",s=["mp3","ogg","wav"],c=[{id:"evolvingCanvas",title:"The Evolving Canvas",file:"evolving_canvas",variants:["evolving_canvas","evolving_canvas_v2","evolving_canvas_v3","evolving_canvas_v4","evolving_canvas_v5","evolving_canvas_v6"],scene:"battle",roles:["ink-battle","active-fight","progression","age","all-purpose","fallback"],ageMin:0,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.68,minPlaySec:16,priority:84,fallback:!0,classicBattle:!0},{id:"pencilDawn",title:"Pencil Dawn",file:"pencil_dawn",variants:["pencil_dawn","pencil_dawn_v2"],scene:"opening",roles:["stone-age","opening","low-tension"],ageMin:0,ageMax:1,tensionMin:0,tensionMax:.38,loop:!0,volume:.58,minPlaySec:28,priority:80},{id:"graphiteSkirmish",title:"Graphite Skirmish",file:"graphite_skirmish",variants:["graphite_skirmish","graphite_skirmish_v2","graphite_skirmish_v3","graphite_skirmish_v4","graphite_skirmish_v5","graphite_skirmish_v6","graphite_skirmish_v7","graphite_skirmish_v8"],scene:"battle",roles:["early-game","mid-game","pressure"],ageMin:0,ageMax:2,tensionMin:.22,tensionMax:.72,loop:!0,volume:.62,minPlaySec:32,priority:82},{id:"inklineAdvance",title:"Inkline Advance",file:"inkline_advance",variants:["inkline_advance","inkline_advance_v2","inkline_advance_v3","inkline_advance_v4","inkline_advance_v5","inkline_advance_v6"],scene:"pressure",roles:["early-game","lane-pressure","fast-units"],ageMin:0,ageMax:2,tensionMin:.52,tensionMax:1,loop:!0,volume:.64,minPlaySec:30,priority:86},{id:"castleMarch",title:"Castle March",file:"castle_march",variants:["castle_march","castle_march_v2"],scene:"battle",roles:["castle-age","iron-age","steady-battle"],ageMin:1,ageMax:2,tensionMin:.16,tensionMax:.68,loop:!0,volume:.62,minPlaySec:34,priority:78},{id:"renaissanceRush",title:"Renaissance Rush",file:"renaissance_rush",variants:["renaissance_rush","renaissance_rush_v2"],scene:"battle",roles:["renaissance","momentum","snare-march"],ageMin:2,ageMax:3,tensionMin:.28,tensionMax:.82,loop:!0,volume:.65,minPlaySec:34,priority:84},{id:"cannonSmoke",title:"Cannon Smoke",file:"cannon_smoke",variants:["cannon_smoke","cannon_smoke_v2"],scene:"siege",roles:["turrets","specials","base-pressure"],ageMin:2,ageMax:4,tensionMin:.58,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:90},{id:"modernWarfare",title:"Modern Warfare",file:"modern_warfare",variants:["modern_warfare","modern_warfare_v2"],scene:"battle",roles:["modern-age","electric-guitar","orchestral-drop"],ageMin:3,ageMax:3,tensionMin:.26,tensionMax:1,loop:!0,volume:.68,minPlaySec:36,priority:86},{id:"futureArpeggio",title:"Future Arpeggio",file:"future_arpeggio",variants:["future_arpeggio","future_arpeggio_v2"],scene:"future",roles:["future-age","synth","tech-window"],ageMin:4,ageMax:4,tensionMin:.12,tensionMax:.72,loop:!0,volume:.62,minPlaySec:34,priority:82},{id:"neonFront",title:"Neon Front",file:"neon_front",variants:["neon_front","neon_front_v2"],scene:"pressure",roles:["future-age","high-pressure","cyber-drums"],ageMin:4,ageMax:5,tensionMin:.52,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:89},{id:"cosmicClash",title:"Cosmic Clash",file:"cosmic_clash",variants:["cosmic_clash","cosmic_clash_v2"],scene:"cosmic",roles:["cosmic-age","choir","final-battle"],ageMin:5,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.7,minPlaySec:42,priority:92},{id:"lastPageSiege",title:"Last Page Siege",file:"last_page_siege",variants:["last_page_siege","last_page_siege_v2"],scene:"siege",roles:["critical-base-hp","deathball","endgame-pressure"],ageMin:0,ageMax:5,tensionMin:.76,tensionMax:1,loop:!0,volume:.72,minPlaySec:32,priority:105,urgent:!0},{id:"codexGemma",title:"Codex Gemma",file:"codex_gemma",variants:["codex_gemma","codex_gemma_v2"],scene:"menu",roles:["director","pause","memory"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:.45,loop:!0,volume:.48,minPlaySec:20,priority:75},{id:"victoryCanvas",title:"Victory Canvas",file:"victory_canvas",variants:["victory_canvas","victory_canvas_v2"],scene:"victory",roles:["victory","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.58,minPlaySec:20,priority:120,outcome:"victory"},{id:"erasedPages",title:"Erased Pages",file:"erased_pages",variants:["erased_pages","erased_pages_v2"],scene:"defeat",roles:["defeat","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.54,minPlaySec:20,priority:120,outcome:"defeat"}];return{MusicDirector:{tracks:{},activeId:null,pendingId:null,started:!1,muted:!1,suspended:!1,ducked:!1,outcome:null,masterVolume:.72,fadeMs:1600,idleReleaseMs:45e3,decisionTimer:0,lastSwitchAt:-999,transitionToken:0,audioContext:null,masterGainNode:null,mixerUnavailable:!1,elementMixer:!1,recentIds:[],signals:{tension:0,playerAge:0,enemyAge:0,troopPressure:0},init(){this.elementMixer=this.shouldUseElementMixer(),this.mixerUnavailable=this.elementMixer;try{this.muted=localStorage.getItem(e)==="1"}catch{this.muted=!1}for(let o=0;o<c.length;o++){let d=c[o],h=new Audio;h.preload=d.preload||"none",h.loop=d.loop!==!1;let f={config:d,audio:h,variantSources:this.buildVariantSources(d),variantBag:[],failedVariants:new Set,activeVariantIndex:-1,lastVariantIndex:-1,sources:[],sourceIndex:0,failed:!1,blocked:!1,fadeToken:0,playToken:0,releaseTimer:0,fadeTimer:0,fadeFrame:0,fadeStartedAt:0,fadeDurationMs:0,fadeStartVolume:0,fadeTargetVolume:0,currentVolume:0,mediaNode:null,gainNode:null,webAudioFailed:!1};h.addEventListener("error",()=>{this.pendingId!==d.id&&(this.markVariantFailed(f,f.activeVariantIndex),!f.failed&&this.activeId===d.id?this.play(d.id,{fadeMs:500,force:!0,reason:"variant_error",newVariant:!0}):f.failed&&this.activeId===d.id&&this.playFallback({fadeMs:800,reason:"active_error"},d.id),this.updateButton())}),this.tracks[d.id]=f}this.updateButton()},buildSourceCandidates(o){return s.map(d=>`assets/audio/${o}.${d}`)},buildVariantSources(o){let d=[],h=f=>{!Array.isArray(f)||!f.length||d.push(f.slice())};if(Array.isArray(o.variants)&&o.variants.length)for(let f=0;f<o.variants.length;f++){let m=o.variants[f];if(typeof m=="string"&&m){h(this.buildSourceCandidates(m));continue}if(Array.isArray(m)&&m.length){h(m);continue}if(m&&typeof m=="object"){if(Array.isArray(m.sources)&&m.sources.length){h(m.sources);continue}typeof m.file=="string"&&m.file&&h(this.buildSourceCandidates(m.file))}}else if(Array.isArray(o.files)&&o.files.length)for(let f=0;f<o.files.length;f++)typeof o.files[f]=="string"&&o.files[f]&&h(this.buildSourceCandidates(o.files[f]));else Array.isArray(o.sources)&&o.sources.length&&h(o.sources);if(!d.length){let f=o.file||o.id;h(this.buildSourceCandidates(f))}return d},refillVariantBag(o){if(!o)return;let d=[];for(let h=0;h<o.variantSources.length;h++)o.failedVariants.has(h)||d.push(h);for(let h=d.length-1;h>0;h--){let f=Math.floor(Math.random()*(h+1)),m=d[h];d[h]=d[f],d[f]=m}if(d.length>1&&o.lastVariantIndex>=0&&d[0]===o.lastVariantIndex){let h=1+Math.floor(Math.random()*(d.length-1)),f=d[0];d[0]=d[h],d[h]=f}o.variantBag=d},markVariantFailed(o,d){!o||d===void 0||d===null||d<0||(o.failedVariants.add(d),o.variantBag&&o.variantBag.length&&(o.variantBag=o.variantBag.filter(h=>h!==d)),o.failed=o.failedVariants.size>=o.variantSources.length)},chooseVariant(o,d={}){return!o||!o.variantSources.length?!1:d.keepCurrent&&o.activeVariantIndex>=0&&!o.failedVariants.has(o.activeVariantIndex)?(o.sources=o.variantSources[o.activeVariantIndex],o.sourceIndex=Math.max(0,Math.min(o.sourceIndex||0,o.sources.length-1)),o.failed=!1,o.sources.length>0):((!o.variantBag||!o.variantBag.length)&&this.refillVariantBag(o),!o.variantBag||!o.variantBag.length?(o.failed=!0,!1):(o.activeVariantIndex=o.variantBag.shift(),o.lastVariantIndex=o.activeVariantIndex,o.sources=o.variantSources[o.activeVariantIndex],o.sourceIndex=0,o.failed=!1,this.cancelRelease(o),this.cancelFade(o),this.setOutputVolume(o,0),o.audio.pause(),o.audio.removeAttribute("src"),o.audio.load(),o.sources.length>0))},start(o="game_start"){this.started=!0,this.suspended=!1,this.ducked=!1,this.outcome=null,this.pendingId=null,this.decisionTimer=0,this.recentIds=[],this.setSignals(this.readSignals()),this.resumeMixer(),this.fadeOutAll(0,!0),this.play(n,{fadeMs:900,force:!0,reason:o})},update(o){if(!this.started||this.outcome||this.muted||this.suspended||!i.gameState||!i.gameState.running||i.gameState.paused||(this.decisionTimer-=o,this.decisionTimer>0))return;this.decisionTimer=2.25;let d=this.readSignals();this.setSignals(d);let h=this.chooseTrack(d,{reason:"flow"});h&&h!==this.activeId?this.play(h,{reason:"flow"}):this.refreshActiveVolume()},setSignals(o){this.signals=Object.assign({},this.signals,o||{})},setScene(o,d="scene"){let h=this.chooseScene(o);return h?this.play(h,{fadeMs:850,force:!0,reason:d}):!1},setOutcome(o){this.outcome=o?"victory":"defeat",this.ducked=!1,this.play(o?"victoryCanvas":"erasedPages",{fadeMs:1400,force:!0,reason:this.outcome})},play(o,d={}){let h=this.tracks[o];if(!h||h.failed)return this.playFallback(d,o);if(this.pendingId===o)return!0;let f=d.fadeMs===void 0?this.fadeMs:d.fadeMs;if(!d.newVariant&&this.activeId===o&&!h.audio.paused)return this.refreshActiveVolume(),this.updateButton(),!0;if(!d.force&&!this.canSwitchTo(h))return!1;if(this.muted||this.suspended)return this.activeId=o,this.pendingId=null,this.transitionToken++,this.fadeOutAll(0,!0),this.updateButton(),!1;let m=++this.transitionToken,x=this.pendingId&&this.pendingId!==o?this.tracks[this.pendingId]:null;this.pendingId=null,x&&x!==h&&x.config.id!==this.activeId&&(this.cancelEntryStart(x),this.fadeOut(x,Math.min(300,f||300),!0)),this.resumeMixer();let g=this.activeId&&this.activeId!==o?this.tracks[this.activeId]:null;g&&!g.audio.paused&&this.fadeTo(g,this.targetVolume(g),Math.min(500,f||500));let p=d.newVariant===void 0?this.activeId!==o:!!d.newVariant;return this.pendingId=o,this.startEntry(h,{newVariant:p}).then(E=>{if(this.transitionToken!==m||this.pendingId!==o){h.config.id!==this.activeId&&this.fadeOut(h,Math.min(250,f||250),!0);return}if(!E){this.pendingId===o&&(this.pendingId=null),this.playFallback(d,o);return}this.pendingId=null,this.activeId=o,this.lastSwitchAt=i.globalTime,this.rememberTrack(o),this.cancelRelease(h),this.fadeTo(h,this.targetVolume(h),f),g&&this.fadeOut(g,f,!0),this.updateButton()}),this.updateButton(),!0},toggleMute(){this.muted=!this.muted;try{localStorage.setItem(e,this.muted?"1":"0")}catch{}this.muted?(this.transitionToken++,this.pendingId=null,this.fadeOutAll(350,!0)):this.started&&this.activeId?(this.resumeMixer(),this.play(this.activeId,{fadeMs:650,force:!0,reason:"unmute"})):this.started&&(this.resumeMixer(),this.play(this.chooseTrack(this.readSignals(),{force:!0,reason:"unmute"})||n,{fadeMs:650,force:!0,reason:"unmute"})),this.updateButton()},setDucked(o){if(this.ducked=!!o,this.ducked&&this.started&&!this.suspended&&!this.muted){if(this.setScene("menu","pause"))return}else!this.ducked&&this.started&&!this.outcome&&(this.decisionTimer=0,this.update(0));this.refreshActiveVolume()},suspendForPage(){!this.started||this.suspended||(this.suspended=!0,this.transitionToken++,this.pendingId=null,this.fadeOutAll(0,!0))},resumeForPage(){this.suspended&&(this.suspended=!1,this.started&&this.activeId&&!this.muted&&(this.resumeMixer(),this.play(this.activeId,{fadeMs:700,force:!0,reason:"page_visible"})))},startEntry(o,d={}){return new Promise(h=>{if(!o||o.failed||this.muted||this.suspended){h(!1);return}let f=++o.playToken;if(this.cancelRelease(o),this.resumeMixer(),!this.chooseVariant(o,{keepCurrent:!d.newVariant})){o.failed=!0,h(!1);return}if(!this.ensureSource(o)&&(this.markVariantFailed(o,o.activeVariantIndex),!this.chooseVariant(o,{keepCurrent:!1})||!this.ensureSource(o))){o.failed=!0,h(!1);return}let m=o.audio,x=!1,g=!1,p=b=>{if(!x){if(x=!0,m.removeEventListener("error",R),o.playToken!==f){h(!1);return}h(b)}},E=()=>{if(!(x||g)){if(g=!0,m.removeEventListener("error",R),o.playToken!==f){p(!1);return}this.advanceSource(o)?(x=!0,this.startEntry(o,{newVariant:!1}).then(h)):(o.failed=!0,p(!1))}},R=()=>E();m.addEventListener("error",R),m.loop=o.config.loop!==!1,this.prepareOutput(o),this.setOutputVolume(o,0);let M=null;try{M=m.play()}catch{E();return}M&&typeof M.then=="function"?M.then(()=>{o.failed=!1,o.blocked=!1,p(!0)}).catch(b=>{b&&b.name==="NotAllowedError"?(o.blocked=!0,p(!1)):E()}):setTimeout(()=>p(!m.paused||m.readyState>=2),120),setTimeout(()=>{!x&&m.readyState>=2&&!m.error&&p(!0)},2400)})},ensureSource(o){return!o||!o.sources.length?!1:(this.cancelRelease(o),o.audio.getAttribute("src")||(o.sourceIndex=Math.max(0,Math.min(o.sourceIndex||0,o.sources.length-1)),o.audio.src=o.sources[o.sourceIndex],o.audio.load()),!0)},advanceSource(o){return o?(o.sourceIndex=(o.sourceIndex||0)+1,this.cancelRelease(o),this.cancelFade(o),this.setOutputVolume(o,0),o.audio.pause(),o.audio.removeAttribute("src"),o.audio.load(),o.sourceIndex<o.sources.length?(o.audio.src=o.sources[o.sourceIndex],o.audio.load(),!0):(this.markVariantFailed(o,o.activeVariantIndex),this.chooseVariant(o,{keepCurrent:!1})?this.ensureSource(o)?!0:(this.markVariantFailed(o,o.activeVariantIndex),this.advanceSource(o)):!1)):!1},playFallback(o={},d=""){let h=this.activeId?this.tracks[this.activeId]:null;if(!o.force&&h&&h.config.id!==d&&!h.failed&&!h.audio.paused)return this.refreshActiveVolume(),!1;let f=this.tracks[n]&&!this.tracks[n].failed?n:"";if(!f)for(let m=0;m<c.length;m++){let x=c[m].id;if(x!==d&&this.tracks[x]&&!this.tracks[x].failed){f=x;break}}return!f||f===d?!1:this.play(f,Object.assign({},o,{force:!0,reason:"fallback"}))},canSwitchTo(o){if(!o||!this.activeId||this.activeId===o.config.id||o.config.urgent||o.config.outcome)return!0;let d=this.tracks[this.activeId],h=d&&d.config&&d.config.minPlaySec||24;return i.globalTime-this.lastSwitchAt>=h},chooseTrack(o,d={}){if(this.outcome)return this.outcome==="victory"?"victoryCanvas":"erasedPages";let h="",f=-1/0;for(let m=0;m<c.length;m++){let x=c[m],g=this.tracks[x.id];if(!g||g.failed||g.blocked||x.outcome||x.scene==="menu")continue;let p=this.scoreTrack(x,o);x.scene==="opening"&&o.elapsed<38&&(p+=26),x.scene==="opening"&&o.elapsed>=55&&(p-=40),x.scene==="opening"&&o.activeFight&&(p-=34),x.urgent&&o.tension>.74&&(p+=35),this.recentIds.includes(x.id)&&(p-=34-Math.min(18,this.recentIds.indexOf(x.id)*6)),this.activeId===x.id&&(p+=10),d.force&&x.id===n&&(p+=4),p>f&&(f=p,h=x.id)}return h||n},chooseScene(o){let d="",h=-1/0;for(let f=0;f<c.length;f++){let m=c[f],x=this.tracks[m.id];if(!x||x.failed||x.blocked||m.scene!==o)continue;let g=(m.priority||0)-(this.recentIds.includes(m.id)?20:0);g>h&&(h=g,d=m.id)}return d||n},scoreTrack(o,d){let h=d.maxAge||0,f=d.tension||0,m=o.ageMin===void 0?0:o.ageMin,x=o.ageMax===void 0?rt.length-1:o.ageMax,g=o.tensionMin===void 0?0:o.tensionMin,p=o.tensionMax===void 0?1:o.tensionMax;if(h<m-.01||h>x+.01)return-1/0;let E=(m+x)/2,R=(g+p)/2,M=o.priority||0;if(M-=Math.abs(h-E)*8,M-=Math.max(0,g-f,f-p)*95,M-=Math.abs(f-R)*18,d.specialActive&&(o.roles||[]).some(b=>b==="specials"||b==="base-pressure")&&(M+=10),d.baseDanger>.58&&(o.scene==="siege"||o.urgent)&&(M+=18),d.troopPressure>.58&&(o.scene==="battle"||o.scene==="pressure")&&(M+=9),o.classicBattle)if(d.activeFight){let b=h>=3?4:30;M+=b+this.clamp((d.clash||0)*10+(d.baseDanger||0)*8,0,14)}else M-=24;return d.activeFight&&(o.id==="graphiteSkirmish"||o.id==="inklineAdvance")&&(M-=16),M},readSignals(){if(!i.gameState||!i.gameState.player||!i.gameState.enemy)return this.signals||{};let o=i.gameState.player,d=i.gameState.enemy,h=o.maxHp?Math.max(0,o.hp/o.maxHp):1,f=d.maxHp?Math.max(0,d.hp/d.maxHp):1,m=0,x=0,g=0,p=mt,E=Ut-mt,R=0,M=0;if(i.gameState.units&&i.gameState.units.pool)for(let U=0;U<i.gameState.units.pool.length;U++){let F=i.gameState.units.pool[U];F.active&&(m++,F.team===1?(x++,p=Math.max(p,F.x||mt),M+=this.clamp((Ut-mt-(F.x||0))/280,0,1)<1?1-this.clamp((Ut-mt-(F.x||0))/280,0,1):0):(g++,E=Math.min(E,F.x||Ut-mt),R+=this.clamp(((F.x||Ut)-mt)/280,0,1)<1?1-this.clamp(((F.x||Ut)-mt)/280,0,1):0))}let b=Math.max(0,E-p),S=this.clamp(1-b/560,0,1),A=this.clamp(Math.max(R,M)/3,0,1),y=1-Math.min(h,f),T=this.clamp(m/16+Math.abs(x-g)/18,0,1),I=this.clamp(m*.035+S*.24+A*.36+y*.32+(i.gameState.specialActive?.18:0)+(i.gameState.screenShake||0)*.18,0,1);return{elapsed:i.globalTime,playerAge:o.age||0,enemyAge:d.age||0,maxAge:Math.max(o.age||0,d.age||0),activeUnits:m,playerUnits:x,enemyUnits:g,troopPressure:T,playerHpRatio:h,enemyHpRatio:f,baseDanger:A,clash:S,activeFight:m>=2&&(S>.08||A>.03||T>.12),tension:I,specialActive:!!i.gameState.specialActive,library:t}},rememberTrack(o){o&&(this.recentIds=[o].concat(this.recentIds.filter(d=>d!==o)).slice(0,5))},refreshActiveVolume(){let o=this.activeId?this.tracks[this.activeId]:null;o&&!this.muted&&!this.suspended&&!o.audio.paused&&this.fadeTo(o,this.targetVolume(o),500)},fadeOut(o,d,h){o&&this.fadeTo(o,0,d,()=>{h&&(o.audio.pause(),this.scheduleRelease(o))})},fadeOutAll(o,d,h=""){for(let f in this.tracks){if(f===h)continue;let m=this.tracks[f];m&&((m.config.id!==this.activeId||this.muted||this.suspended)&&this.cancelEntryStart(m),(!m.audio.paused||this.currentOutputVolume(m)>.001)&&this.fadeOut(m,o,d))}},fadeTo(o,d,h,f){if(!o)return;let m=this.currentOutputVolume(o),x=Math.max(0,Math.min(1,d)),g=Math.max(0,h||0);this.cancelFade(o);let p=++o.fadeToken;if(o.fadeStartVolume=m,o.fadeTargetVolume=x,o.fadeStartedAt=performance.now(),o.fadeDurationMs=g,!g||Math.abs(m-x)<=.001){this.setOutputVolume(o,x),f&&f();return}if(this.prepareOutput(o)){let R=this.audioContext,M=o.gainNode.gain,b=R.currentTime;try{M.cancelScheduledValues(b),M.setValueAtTime(m,b),M.setValueCurveAtTime(this.buildEqualPowerCurve(m,x),b,Math.max(.016,g/1e3)),o.audio.volume=1,o.fadeTimer=setTimeout(()=>{o.fadeToken===p&&(this.setOutputVolume(o,x),f&&f())},g+60);return}catch{}}this.writeOutputVolume(o,m,!0);let E=R=>{if(o.fadeToken!==p)return;let M=Math.min(1,(R-o.fadeStartedAt)/g);this.writeOutputVolume(o,this.curveVolume(m,x,M),!1),M<1?o.fadeFrame=requestAnimationFrame(E):(this.setOutputVolume(o,x),f&&f())};o.fadeFrame=requestAnimationFrame(E)},cancelEntryStart(o){o&&o.playToken++},cancelFade(o){o&&(o.fadeToken++,o.fadeTimer&&clearTimeout(o.fadeTimer),o.fadeFrame&&cancelAnimationFrame(o.fadeFrame),o.fadeTimer=0,o.fadeFrame=0,o.fadeDurationMs=0)},scheduleRelease(o){o&&(this.cancelRelease(o),!(!this.muted&&!this.suspended&&(this.activeId===o.config.id||this.pendingId===o.config.id))&&(o.releaseTimer=setTimeout(()=>this.releaseEntry(o),this.idleReleaseMs)))},cancelRelease(o){!o||!o.releaseTimer||(clearTimeout(o.releaseTimer),o.releaseTimer=0)},releaseEntry(o){o&&(o.releaseTimer=0,!(!this.muted&&!this.suspended&&(this.activeId===o.config.id||this.pendingId===o.config.id))&&o.audio.paused&&(this.cancelFade(o),this.setOutputVolume(o,0),o.audio.removeAttribute("src"),o.audio.load()))},shouldUseElementMixer(){let o=navigator.userAgent||"";return!!window.LocalGemmaAndroid||/; wv\)/i.test(o)},getAudioContext(){if(this.audioContext||this.mixerUnavailable)return this.audioContext;let o=window.AudioContext||window.webkitAudioContext;if(!o)return this.mixerUnavailable=!0,null;try{this.audioContext=new o,this.masterGainNode=this.audioContext.createGain(),this.masterGainNode.gain.value=1,this.masterGainNode.connect(this.audioContext.destination)}catch{this.mixerUnavailable=!0,this.audioContext=null,this.masterGainNode=null}return this.audioContext},resumeMixer(){let o=this.getAudioContext();if(!(!o||o.state!=="suspended"))try{let d=o.resume();d&&typeof d.catch=="function"&&d.catch(()=>{})}catch{}},prepareOutput(o){if(!o)return!1;if(o.gainNode)return o.audio.volume=1,!0;if(o.webAudioFailed)return!1;let d=this.getAudioContext();if(!d||!this.masterGainNode)return!1;try{return o.mediaNode=d.createMediaElementSource(o.audio),o.gainNode=d.createGain(),o.gainNode.gain.value=o.currentVolume||0,o.mediaNode.connect(o.gainNode),o.gainNode.connect(this.masterGainNode),o.audio.volume=1,!0}catch{return o.webAudioFailed=!0,o.mediaNode=null,o.gainNode=null,o.audio.volume=o.currentVolume||0,!1}},setOutputVolume(o,d){o&&(this.cancelFade(o),o.fadeStartVolume=d,o.fadeTargetVolume=d,this.writeOutputVolume(o,d,!0))},writeOutputVolume(o,d,h){if(!o)return;let f=this.clamp(d,0,1);if(o.currentVolume=f,o.gainNode&&this.audioContext)try{let m=o.gainNode.gain,x=this.audioContext.currentTime;h&&m.cancelScheduledValues(x),m.setValueAtTime(f,x),o.audio.volume=1;return}catch{}o.audio.volume=f},currentOutputVolume(o){if(!o)return 0;if(o.fadeDurationMs>0){let d=this.clamp((performance.now()-o.fadeStartedAt)/o.fadeDurationMs,0,1);return this.curveVolume(o.fadeStartVolume,o.fadeTargetVolume,d)}return typeof o.currentVolume=="number"?o.currentVolume:o.audio.volume||0},curveVolume(o,d,h){let f=this.clamp(h,0,1);return d>=o?o+(d-o)*Math.sin(f*Math.PI/2):d+(o-d)*Math.cos(f*Math.PI/2)},buildEqualPowerCurve(o,d){let h=new Float32Array(96);for(let f=0;f<h.length;f++)h[f]=this.curveVolume(o,d,f/(h.length-1));return h},targetVolume(o){let d=this.masterVolume*(o.config.volume||1);return this.ducked&&(d*=.45),Math.max(0,Math.min(1,d))},clamp(o,d,h){return Math.max(d,Math.min(h,o))},updateButton(){let o=document.getElementById("btn-music");if(!o)return;let d=this.activeId&&this.tracks[this.activeId]?this.tracks[this.activeId].config.title:"Music";o.classList.toggle("music-muted",this.muted),o.innerHTML=this.muted?"&#128263;":"&#128266;",o.title=this.muted?"Music off":`Music on: ${d}`,o.setAttribute("aria-label",this.muted?"Turn music on":"Turn music off")}}}}var Hc="ink-battle-tabletop-v1",Qo=document.querySelector("#tabletop"),Q_=document.querySelector("#status"),xn=document.querySelector("#enter-mr"),Ji=document.querySelector("#welcome"),Le,Dn,kt,Or,Br,el,$i=!1,il=!1,sl=!1,tl=null,Ad=0,nl=!1,Gc=0,zs=[],Rd="",kr=[],ii={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0};function Cd(){let i=[...kr].sort((e,t)=>e-t);return{...ii,recentSamples:i.length,frameIntervalMedianMs:i[Math.floor((i.length-1)*.5)]??null,frameIntervalP95Ms:i[Math.floor((i.length-1)*.95)]??null}}var Wc={gameState:null,globalTime:0},en=wd(Wc).MusicDirector,Id=null;function Ld(i){Wc.globalTime=(i?.tick||0)/60,Wc.gameState=i?{...i,units:{pool:i.units},specialActive:i.specials.length>0}:null}var it=new Ho({onEvent:i=>{if(i.type==="message"&&qt(i.text),i.type==="start"&&(Ld(it.observe()),en.start(),Ji.classList.add("compact"),qt("Lift troops into the green rally area. Cannons belong at your base on the left.")),i.type==="drop"&&i.result.ok&&(Le.labelClock=0,zr()),i.type==="drop"&&Dn?.feedback(i.token.owner,i.result.ok),i.type==="quality"&&qt(`Appearance: ${i.quality}. Lift the feather to change it.`),i.type==="music"&&(en.toggleMute(),qt(en.muted?"Music off.":"Music on.")),i.type==="menu"&&(Dn?.cancelAll(),en.suspendForPage(),Ji.classList.remove("compact"),qt("Choose a difficulty seal for a new battle."),zr()),i.type==="finish"){if(i.winner===0?en.suspendForPage():en.setOutcome(i.winner===1),qt(i.winner===0?"A draw. Drop another seal for a new battle.":i.winner===1?"Victory! Drop another seal to begin again.":"Defeat. Drop another seal for a new battle."),i.winner===1)try{let e=JSON.parse(localStorage.getItem("aow_sketch_progress")||'{"beaten":[]}');e.beaten=[...new Set([...e.beaten||[],it.observe().difficulty])],localStorage.setItem("aow_sketch_progress",JSON.stringify(e))}catch{}zr()}i.type==="exit"&&(kt?kt.end().catch(()=>{}):Ji.classList.remove("compact"))}});function qt(i){Le?.message(i),i!==Rd&&(Q_.textContent=i,Rd=i)}function zr(){try{if(!it.session){localStorage.removeItem(Hc);return}let i=JSON.stringify({checkpoint:it.session.checkpoint(),speed:it.speed,quality:it.quality});i.length<2e6&&localStorage.setItem(Hc,i)}catch{}}function Yn(){Dn?.cancelAll(),it.pauseForInterruption(),en.suspendForPage(),tl=null,zr(),it.session?.running&&qt("Paused. Lift the hourglass and drop it onto the page to resume.")}function rl(){Gc++,Br?.delete(),Br=null,el=null}function Dd(){kt||(Le.table.position={x:0,y:0,z:0},Le.table.yaw=0,Le.table.scale=1,Le.syncTable(),Le.camera.position.set(.45,2.45,3.3),Le.controls.target.set(0,.1,.3),Le.controls.update())}async function ex(){if(!kt){xn.disabled=!0,en.resumeMixer();try{let i=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor"],optionalFeatures:["hand-tracking","hit-test","anchors"]});kt=i,il=!1,$i=!0,sl=!1,Yn(),kr=[],ii={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0},i.addEventListener("end",()=>{Yn(),Dn.unbind(),Or?.cancel(),Or=null,rl(),kt=null,Le.reticle.visible=!1,Le.immersive(!1),Dd(),xn.disabled=!1,Ji.hidden=!1,qt("Back in preview. Your battle is saved and paused.")},{once:!0}),i.addEventListener("visibilitychange",()=>{i.visibilityState!=="visible"&&Yn()}),await Le.renderer.xr.setSession(i),Le.immersive(!0),Dn.bind(i),Ji.hidden=!0,Le.renderer.xr.getReferenceSpace().addEventListener("reset",()=>{Yn(),rl(),il=!1,$i=!0});try{let t=await i.requestReferenceSpace("viewer");if(i.requestHitTestSource){let n=await i.requestHitTestSource({space:t});kt===i?Or=n:n.cancel()}}catch{}if(kt!==i)return;i.supportedFrameRates?.includes(72)&&i.updateTargetFrameRate(72).catch(()=>{}),qt("Look at a table, then pinch or press the trigger to place. Rings let you carry and resize.")}catch(i){kt&&await kt.end().catch(()=>{}),kt=null,xn.disabled=!1,qt(`Mixed reality could not start (${i.name||"browser error"}). Preview is still available.`)}}}function tx(i,e){let t=i.getViewerPose(e);if(!t)return nl||(Yn(),nl=!0),!1;if(nl=!1,!il){let s=t.transform.position,r=new C(0,0,-1).applyQuaternion(t.transform.orientation);r.y=0,r.normalize(),Le.table.scale=.55,Le.table.position={x:s.x+r.x*.9,y:Math.max(.35,s.y-.7),z:s.z+r.z*.9},Le.table.yaw=Math.atan2(-r.x,-r.z),il=!0,Le.syncTable()}let n;if($i&&Or){n=i.getHitTestResults(Or).find(r=>{let a=r.getPose(e);return a&&a.transform.matrix[5]>.85});let s=n?.getPose(e);Le.reticle.visible=!!s,s&&Le.reticle.matrix.fromArray(s.transform.matrix)}if(sl){if(sl=!1,$i=!1,Le.reticle.visible=!1,n){let s=n.getPose(e);if(Le.table.position=Pd(s.transform.position),Le.table.position.y+=.028,Le.syncTable(),n.createAnchor){let r=kt,a=Gc;n.createAnchor().then(l=>{if(kt!==r||!r||Gc!==a||Dn.interaction.gesture.grips.size){l.delete();return}rl(),Br=l,el=new Xe().fromArray(s.transform.matrix).invert().multiply(Le.root.matrixWorld)}).catch(()=>{})}}qt(it.session?"Placed. Drop the hourglass onto the page to resume.":"Placed. Lift a difficulty seal and drop it onto the page to begin.")}if(Br&&el){let s=i.getPose(Br.anchorSpace,e);if(s){let r=new Xe().fromArray(s.transform.matrix).multiply(el),a=new C,l=new wt,c=new C;r.decompose(a,l,c),Le.table.position=Pd(a),Le.table.yaw=new sn().setFromQuaternion(l,"YXZ").y}}return!0}var Pd=i=>({x:i.x,y:i.y,z:i.z});async function nx(){matchMedia("(max-width: 650px), (max-height: 450px)").matches&&Ji.classList.add("compact");try{Le=new Zo(Qo,it)}catch(e){console.error("Tabletop initialization failed:",e),qt("3D graphics are unavailable in this browser. You can still play the classic game."),xn.disabled=!0;return}Dn=new jo(Le,it,{onCarry:()=>{$i=!1,Le.reticle.visible=!1,rl()},onPlace:()=>$i?(sl=!0,!0):!1}),en.init(),Qo.addEventListener("pointerdown",()=>en.resumeMixer());try{let e=JSON.parse(localStorage.getItem(Hc)||"null");e?.checkpoint&&(it.session=Xi.restore(e.checkpoint),it.session.running&&it.session.pause(!0),it.speed=[1,2,3].includes(e.speed)?e.speed:1,it.quality=["mist","clear","comfort"].includes(e.quality)?e.quality:"mist",qt(it.session.running?"Saved battle restored. Drop the hourglass onto the page to resume.":"Your last battle ended. Drop a difficulty seal for a new page."))}catch{qt("The saved battle could not be restored. Start with a difficulty seal.")}await document.fonts.ready,xn.addEventListener("click",ex),document.querySelector("#reset-view").addEventListener("click",Dd),document.querySelector("#toggle-help").addEventListener("click",()=>Ji.classList.toggle("compact")),document.querySelector("#save-report").addEventListener("click",()=>{let e=it.observe(),t={version:"2.2.2",date:new Date().toISOString(),browser:navigator.userAgent,quality:it.quality,age:e?.player.age,difficulty:e?.difficulty,render:Le.stats(),xr:Cd()},n=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=n,s.download="ink-battle-quest-report.json",s.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}),window.addEventListener("resize",()=>Le.resize()),window.visualViewport?.addEventListener("resize",()=>Le.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&Yn()}),window.addEventListener("pagehide",Yn),Qo.addEventListener("webglcontextlost",e=>{e.preventDefault(),Yn(),qt("Graphics were interrupted. Reload to restore the paused battle.")});let i=setTimeout(()=>{xn.textContent="Preview ready \xB7 MR not detected yet"},3e3);(async()=>{try{await navigator.xr?.isSessionSupported("immersive-ar")?(xn.disabled=!1,xn.textContent="Enter mixed reality"):(xn.textContent="Open in Quest Browser for MR",xn.disabled=!0)}catch{xn.textContent="MR unavailable \xB7 preview ready",xn.disabled=!0}finally{clearTimeout(i)}})(),Le.update(it.observe(),[],0),Le.render(),Le.renderer.setAnimationLoop((e,t)=>{let n=tl===null?0:Math.max(0,(e-tl)/1e3);if(tl=e,n>0&&n<.5&&(zs.push(n*1e3),zs.length>360&&zs.shift()),t&&kt){let r=Le.renderer.xr.getReferenceSpace();kt.visibilityState==="visible"&&tx(t,r)&&Dn.xr(t,r)}it.update(n),Dn.interaction.update(Math.min(n,.1));let s=it.observe();if(Ld(s),s&&s.paused!==Id&&(Id=s.paused,s.paused||(en.started||en.start(),en.resumeForPage()),en.setDucked(s.paused)),en.update(Math.min(n,.1)),Le.update(s,Dn.interaction.visuals(),Math.min(n,.1)),Le.render(),t&&kt?.visibilityState==="visible"&&!nl){let r=Le.stats();ii.frames++,ii.peakUnits=Math.max(ii.peakUnits,s?.units.length||0),ii.peakDrawCalls=Math.max(ii.peakDrawCalls,r.calls),ii.peakTriangles=Math.max(ii.peakTriangles,r.triangles),n>0&&n<.5&&(kr.push(n*1e3),kr.length>720&&kr.shift())}e-Ad>1e4&&(Ad=e,zr())}),window.InkTabletop=Object.freeze({observe:()=>it.observe(),replay:()=>it.session?.replay(),diagnostics:()=>({...Le.stats(),xr:!!kt,xrMeasurements:Cd(),placing:$i,quality:it.quality,holds:it.holds.size,flights:Dn.interaction.flights.size,table:structuredClone(Le.table),frameP95:zs.length?[...zs].sort((e,t)=>e-t)[Math.floor((zs.length-1)*.95)]:null}),project:e=>{Le.syncTable();let t=new C(e.x,e.y||0,e.z);Le.root.localToWorld(t),t.project(Le.camera);let n=Qo.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}},restore:e=>{Yn(),it.session=Xi.restore(e),it.session.pause(!0),Le.labelClock=0},checkpoint:()=>it.session?.checkpoint()}),document.body.dataset.ready="true","serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").catch(()=>{})}nx().catch(i=>{Yn(),qt(`The tabletop could not load (${i.name}). Reload or open the classic game.`)});})();
