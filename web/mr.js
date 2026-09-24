(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bh=0,Nl=1,Th=2;var fr=1,Eh=2,vs=3,xn=0,Ut=1,Kt=2,Vi=0,Ss=1,Ul=2,Ol=3,Fl=4,wh=5;var Dn=100,Ah=101,Ch=102,Rh=103,Ih=104,Ph=200,Lh=201,Dh=202,Nh=203,Bl=204,kl=205,Uh=206,Oh=207,Fh=208,Bh=209,kh=210,zh=211,Vh=212,Hh=213,Gh=214,la=0,ca=1,ha=2,ls=3,ua=4,da=5,fa=6,pa=7,zl=0,Wh=1,Xh=2,wi=0,Vl=1,Hl=2,Gl=3,Wl=4,Xl=5,ql=6,Yl=7;var Zl=300,yn=301,Nn=302,za=303,Va=304,pr=306,ma=1e3,Ui=1001,ga=1002,It=1003,qh=1004;var mr=1005;var Dt=1006,Ha=1007;var vn=1008;var ii=1009,Jl=1010,$l=1011,Ms=1012,Ga=1013,Ai=1014,di=1015,Ci=1016,Wa=1017,Xa=1018,bs=1020,Kl=35902,jl=35899,Ql=1021,ec=1022,fi=1023,Oi=1026,Sn=1027,qa=1028,Ya=1029,Mn=1030,Za=1031;var Ja=1033,gr=33776,_r=33777,xr=33778,yr=33779,$a=35840,Ka=35841,ja=35842,Qa=35843,eo=36196,to=37492,io=37496,no=37488,so=37489,vr=37490,ro=37491,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,yo=37820,vo=37821,So=36492,Mo=36494,bo=36495,To=36283,Eo=36284,Sr=36285,wo=36286;var Vs=2300,_a=2301,aa=2302,wl=2303,Al=2400,Cl=2401,Rl=2402;var Yh=3200;var Ao=0,Zh=1,Qi="",Lt="srgb",Hs="srgb-linear",Gs="linear",tt="srgb";var oa=7680;var Jh=519,$h=512,Kh=513,jh=514,Co=515,Qh=516,eu=517,Ro=518,tu=519,iu=35044,Mr=35048;var tc="300 es",vi=2e3,cs=2001;function wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ad(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nu(){let i=Ws("canvas");return i.style.display="block",i}var Yc={},hs=null;function ic(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function su(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=su(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=su(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pn(...i){let e=i.join(" ");e in Yc||(Yc[e]=!0,Ce(...i))}function ru(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var au={[la]:ca,[ha]:fa,[ua]:pa,[ls]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:ls},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=1234567,ks=Math.PI/180,us=180/Math.PI;function Ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function nc(i,e){return(i%e+e)%e}function Cd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rd(i,e,t){return i!==e?(t-i)/(e-i):0}function zs(i,e,t){return(1-t)*i+t*e}function Id(i,e,t,n){return zs(i,e,1-Math.exp(-t*n))}function Pd(i,e=1){return e-Math.abs(nc(i,e*2)-e)}function Ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ud(i,e){return i+Math.random()*(e-i)}function Od(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Zc=i);let e=Zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bd(i){return i*ks}function kd(i){return i*us}function zd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gd(i,e,t,n,s){let r=Math.cos,a=Math.sin,l=r(t/2),c=a(t/2),u=r((e+n)/2),o=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),g=r((n-e)/2),d=a((n-e)/2);switch(s){case"XYX":i.set(l*o,c*f,c*h,l*u);break;case"YZY":i.set(c*h,l*o,c*f,l*u);break;case"ZXZ":i.set(c*f,c*h,l*o,l*u);break;case"XZX":i.set(l*o,c*d,c*g,l*u);break;case"YXY":i.set(c*g,l*o,c*d,l*u);break;case"ZYZ":i.set(c*d,c*g,l*o,l*u);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Es={DEG2RAD:ks,RAD2DEG:us,generateUUID:Ts,clamp:Ve,euclideanModulo:nc,mapLinear:Cd,inverseLerp:Rd,lerp:zs,damp:Id,pingpong:Pd,smoothstep:Ld,smootherstep:Dd,randInt:Nd,randFloat:Ud,randFloatSpread:Od,seededRandom:Fd,degToRad:Bd,radToDeg:kd,isPowerOfTwo:zd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Gd,normalize:qt,denormalize:as},Re=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let c=n[s+0],u=n[s+1],o=n[s+2],f=n[s+3],h=r[a+0],g=r[a+1],d=r[a+2],_=r[a+3];if(f!==_||c!==h||u!==g||o!==d){let m=c*h+u*g+o*d+f*_;m<0&&(h=-h,g=-g,d=-d,_=-_,m=-m);let p=1-l;if(m<.9995){let S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,l=Math.sin(l*S)/b,c=c*p+h*l,u=u*p+g*l,o=o*p+d*l,f=f*p+_*l}else{c=c*p+h*l,u=u*p+g*l,o=o*p+d*l,f=f*p+_*l;let S=1/Math.sqrt(c*c+u*u+o*o+f*f);c*=S,u*=S,o*=S,f*=S}}e[t]=c,e[t+1]=u,e[t+2]=o,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],c=n[s+1],u=n[s+2],o=n[s+3],f=r[a],h=r[a+1],g=r[a+2],d=r[a+3];return e[t]=l*d+o*f+c*g-u*h,e[t+1]=c*d+o*h+u*f-l*g,e[t+2]=u*d+o*g+l*h-c*f,e[t+3]=o*d-l*f-c*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),o=l(s/2),f=l(r/2),h=c(n/2),g=c(s/2),d=c(r/2);switch(a){case"XYZ":this._x=h*o*f+u*g*d,this._y=u*g*f-h*o*d,this._z=u*o*d+h*g*f,this._w=u*o*f-h*g*d;break;case"YXZ":this._x=h*o*f+u*g*d,this._y=u*g*f-h*o*d,this._z=u*o*d-h*g*f,this._w=u*o*f+h*g*d;break;case"ZXY":this._x=h*o*f-u*g*d,this._y=u*g*f+h*o*d,this._z=u*o*d+h*g*f,this._w=u*o*f-h*g*d;break;case"ZYX":this._x=h*o*f-u*g*d,this._y=u*g*f+h*o*d,this._z=u*o*d-h*g*f,this._w=u*o*f+h*g*d;break;case"YZX":this._x=h*o*f+u*g*d,this._y=u*g*f+h*o*d,this._z=u*o*d-h*g*f,this._w=u*o*f-h*g*d;break;case"XZY":this._x=h*o*f-u*g*d,this._y=u*g*f-h*o*d,this._z=u*o*d+h*g*f,this._w=u*o*f+h*g*d;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],u=t[2],o=t[6],f=t[10],h=n+l+f;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(o-c)*g,this._y=(r-u)*g,this._z=(a-s)*g}else if(n>l&&n>f){let g=2*Math.sqrt(1+n-l-f);this._w=(o-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+u)/g}else if(l>f){let g=2*Math.sqrt(1+l-n-f);this._w=(r-u)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+o)/g}else{let g=2*Math.sqrt(1+f-n-l);this._w=(a-s)/g,this._x=(r+u)/g,this._y=(c+o)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,u=t._z,o=t._w;return this._x=n*o+a*l+s*u-r*c,this._y=s*o+a*c+r*l-n*u,this._z=r*o+a*u+n*c-s*l,this._w=a*o-n*l-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let u=Math.acos(l),o=Math.sin(u);c=Math.sin(c*u)/o,t=Math.sin(t*u)/o,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*s-l*n),o=2*(l*t-r*s),f=2*(r*n-a*t);return this.x=t+c*u+a*f-l*o,this.y=n+c*o+l*u-r*f,this.z=s+c*f+r*o-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new I,Jc=new Tt,De=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,u)}set(e,t,n,s,r,a,l,c,u){let o=this.elements;return o[0]=e,o[1]=s,o[2]=l,o[3]=t,o[4]=r,o[5]=c,o[6]=n,o[7]=a,o[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],o=n[4],f=n[7],h=n[2],g=n[5],d=n[8],_=s[0],m=s[3],p=s[6],S=s[1],b=s[4],y=s[7],E=s[2],T=s[5],C=s[8];return r[0]=a*_+l*S+c*E,r[3]=a*m+l*b+c*T,r[6]=a*p+l*y+c*C,r[1]=u*_+o*S+f*E,r[4]=u*m+o*b+f*T,r[7]=u*p+o*y+f*C,r[2]=h*_+g*S+d*E,r[5]=h*m+g*b+d*T,r[8]=h*p+g*y+d*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8];return t*a*o-t*l*u-n*r*o+n*l*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8],f=o*a-l*u,h=l*c-o*r,g=u*r-a*c,d=t*f+n*h+s*g;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=f*_,e[1]=(s*u-o*n)*_,e[2]=(l*n-s*a)*_,e[3]=h*_,e[4]=(o*t-s*c)*_,e[5]=(s*r-l*t)*_,e[6]=g*_,e[7]=(n*c-u*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-s*u,s*c,-s*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return Pn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(e,t)),this}rotate(e){return Pn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return Pn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rl=new De,$c=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wd(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var Xe=Wd();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qn,xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qn===void 0&&(qn=Ws("canvas")),qn.width=e.width,qn.height=e.height;let s=qn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xd=0,ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var qd=0,ol=new I,Zt=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=Dt,a=vn,l=fi,c=ii,u=i.DEFAULT_ANISOTROPY,o=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Ts(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Zl;Zt.DEFAULT_ANISOTROPY=1;var mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],o=c[4],f=c[8],h=c[1],g=c[5],d=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(o-h)<.01&&Math.abs(f-_)<.01&&Math.abs(d-m)<.01){if(Math.abs(o+h)<.1&&Math.abs(f+_)<.1&&Math.abs(d+m)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(u+1)/2,y=(g+1)/2,E=(p+1)/2,T=(o+h)/4,C=(f+_)/4,v=(d+m)/4;return b>y&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-d)*(m-d)+(f-_)*(f-_)+(h-o)*(h-o));return Math.abs(S)<.001&&(S=1),this.x=(m-d)/S,this.y=(f-_)/S,this.z=(h-o)/S,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zt(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var va=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,l,c,u,o,f,h,g,d,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,u,o,f,h,g,d,_,m)}set(e,t,n,s,r,a,l,c,u,o,f,h,g,d,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=o,p[10]=f,p[14]=h,p[3]=g,p[7]=d,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Yn.setFromMatrixColumn(e,0).length(),r=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s),o=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*o,g=a*f,d=l*o,_=l*f;t[0]=c*o,t[4]=-c*f,t[8]=u,t[1]=g+d*u,t[5]=h-_*u,t[9]=-l*c,t[2]=_-h*u,t[6]=d+g*u,t[10]=a*c}else if(e.order==="YXZ"){let h=c*o,g=c*f,d=u*o,_=u*f;t[0]=h+_*l,t[4]=d*l-g,t[8]=a*u,t[1]=a*f,t[5]=a*o,t[9]=-l,t[2]=g*l-d,t[6]=_+h*l,t[10]=a*c}else if(e.order==="ZXY"){let h=c*o,g=c*f,d=u*o,_=u*f;t[0]=h-_*l,t[4]=-a*f,t[8]=d+g*l,t[1]=g+d*l,t[5]=a*o,t[9]=_-h*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let h=a*o,g=a*f,d=l*o,_=l*f;t[0]=c*o,t[4]=d*u-g,t[8]=h*u+_,t[1]=c*f,t[5]=_*u+h,t[9]=g*u-d,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,g=a*u,d=l*c,_=l*u;t[0]=c*o,t[4]=_-h*f,t[8]=d*f+g,t[1]=f,t[5]=a*o,t[9]=-l*o,t[2]=-u*o,t[6]=g*f+d,t[10]=h-_*f}else if(e.order==="XZY"){let h=a*c,g=a*u,d=l*c,_=l*u;t[0]=c*o,t[4]=-f,t[8]=u*o,t[1]=h*f+_,t[5]=a*o,t[9]=g*f-d,t[2]=d*f-g,t[6]=l*o,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,Zd)}lookAt(e,t,n){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),an.crossVectors(n,si),an.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),an.crossVectors(n,si)),an.normalize(),Br.crossVectors(si,an),s[0]=an.x,s[4]=Br.x,s[8]=si.x,s[1]=an.y,s[5]=Br.y,s[9]=si.y,s[2]=an.z,s[6]=Br.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],o=n[1],f=n[5],h=n[9],g=n[13],d=n[2],_=n[6],m=n[10],p=n[14],S=n[3],b=n[7],y=n[11],E=n[15],T=s[0],C=s[4],v=s[8],w=s[12],R=s[1],U=s[5],O=s[9],V=s[13],D=s[2],H=s[6],Z=s[10],J=s[14],ie=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=a*T+l*R+c*D+u*ie,r[4]=a*C+l*U+c*H+u*X,r[8]=a*v+l*O+c*Z+u*Q,r[12]=a*w+l*V+c*J+u*te,r[1]=o*T+f*R+h*D+g*ie,r[5]=o*C+f*U+h*H+g*X,r[9]=o*v+f*O+h*Z+g*Q,r[13]=o*w+f*V+h*J+g*te,r[2]=d*T+_*R+m*D+p*ie,r[6]=d*C+_*U+m*H+p*X,r[10]=d*v+_*O+m*Z+p*Q,r[14]=d*w+_*V+m*J+p*te,r[3]=S*T+b*R+y*D+E*ie,r[7]=S*C+b*U+y*H+E*X,r[11]=S*v+b*O+y*Z+E*Q,r[15]=S*w+b*V+y*J+E*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],u=e[13],o=e[2],f=e[6],h=e[10],g=e[14],d=e[3],_=e[7],m=e[11],p=e[15],S=c*g-u*h,b=l*g-u*f,y=l*h-c*f,E=a*g-u*o,T=a*h-c*o,C=a*f-l*o;return t*(_*S-m*b+p*y)-n*(d*S-m*E+p*T)+s*(d*b-_*E+p*C)-r*(d*y-_*T+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],o=e[10];return t*(a*o-l*u)-n*(r*o-l*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8],f=e[9],h=e[10],g=e[11],d=e[12],_=e[13],m=e[14],p=e[15],S=t*l-n*a,b=t*c-s*a,y=t*u-r*a,E=n*c-s*l,T=n*u-r*l,C=s*u-r*c,v=o*_-f*d,w=o*m-h*d,R=o*p-g*d,U=f*m-h*_,O=f*p-g*_,V=h*p-g*m,D=S*V-b*O+y*U+E*R-T*w+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return e[0]=(l*V-c*O+u*U)*H,e[1]=(s*O-n*V-r*U)*H,e[2]=(_*C-m*T+p*E)*H,e[3]=(h*T-f*C-g*E)*H,e[4]=(c*R-a*V-u*w)*H,e[5]=(t*V-s*R+r*w)*H,e[6]=(m*y-d*C-p*b)*H,e[7]=(o*C-h*y+g*b)*H,e[8]=(a*O-l*R+u*v)*H,e[9]=(n*R-t*O-r*v)*H,e[10]=(d*T-_*y+p*S)*H,e[11]=(f*y-o*T-g*S)*H,e[12]=(l*w-a*U-c*v)*H,e[13]=(t*U-n*w+s*v)*H,e[14]=(_*b-d*E-m*S)*H,e[15]=(o*E-f*b+h*S)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,c=e.z,u=r*a,o=r*l;return this.set(u*a+n,u*l-s*c,u*c+s*l,0,u*l+s*c,o*l+n,o*c-s*a,0,u*c-s*l,o*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,u=r+r,o=a+a,f=l+l,h=r*u,g=r*o,d=r*f,_=a*o,m=a*f,p=l*f,S=c*u,b=c*o,y=c*f,E=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*E,s[1]=(g+y)*E,s[2]=(d-b)*E,s[3]=0,s[4]=(g-y)*T,s[5]=(1-(h+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(d+b)*C,s[9]=(m-S)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Yn.set(s[0],s[1],s[2]).length(),l=Yn.set(s[4],s[5],s[6]).length(),c=Yn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let u=1/a,o=1/l,f=1/c;return _i.elements[0]*=u,_i.elements[1]*=u,_i.elements[2]*=u,_i.elements[4]*=o,_i.elements[5]*=o,_i.elements[6]*=o,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,a,l=vi,c=!1){let u=this.elements,o=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),g=(n+s)/(n-s),d,_;if(c)d=r/(a-r),_=a*r/(a-r);else if(l===vi)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(l===cs)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=o,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=d,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=vi,c=!1){let u=this.elements,o=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),g=-(n+s)/(n-s),d,_;if(c)d=1/(a-r),_=a/(a-r);else if(l===vi)d=-2/(a-r),_=-(a+r)/(a-r);else if(l===cs)d=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=o,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=d,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yn=new I,_i=new qe,Yd=new I(0,0,0),Zd=new I(1,1,1),an=new I,Br=new I,si=new I,jc=new qe,Qc=new Tt,Jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],u=s[5],o=s[9],f=s[2],h=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-o,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-o,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-o,g),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jd=0,eh=new I,Zn=new Tt,Xi=new qe,kr=new I,Ls=new I,$d=new I,Kd=new Tt,th=new I(1,0,0),ih=new I(0,1,0),nh=new I(0,0,1),sh={type:"added"},jd={type:"removed"},Jn={type:"childadded",child:null},ll={type:"childremoved",child:null},Nt=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Jt,n=new Tt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new De}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ls,kr,this.up):Xi.lookAt(kr,Ls,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(Xi),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jd),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,$d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,o=c.length;u<o;u++){let f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),u=a(e.textures),o=a(e.images),f=a(e.shapes),h=a(e.skeletons),g=a(e.animations),d=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),o.length>0&&(n.images=o),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(l){let c=[];for(let u in l){let o=l[u];delete o.metadata,c.push(o)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qd={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let o=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=o.position.distanceTo(f.position),g=.02,d=.005;u.inputState.pinching&&h>g+d?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-d&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},zr={h:0,s:0,l:0};function cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=nc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cl(a,r,e+1/3),this.g=cl(a,r,e),this.b=cl(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Xe.workingToColorSpace(Vt.copy(this),e),Math.round(Ve(Vt.r*255,0,255))*65536+Math.round(Ve(Vt.g*255,0,255))*256+Math.round(Ve(Vt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,u,o=(l+a)/2;if(l===a)c=0,u=0;else{let f=a-l;switch(u=o<=.5?f/(a+l):f/(2-a-l),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=o,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Lt){Xe.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(zr);let n=zs(on.h,zr.h,t),s=zs(on.s,zr.s,t),r=zs(on.l,zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Oe;Oe.NAMES=ou;var qs=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new I,qi=new I,hl=new I,Yi=new I,$n=new I,Kn=new I,rh=new I,ul=new I,dl=new I,fl=new I,pl=new mt,ml=new mt,gl=new mt,un=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xi.subVectors(s,t),qi.subVectors(n,t),hl.subVectors(e,t);let a=xi.dot(xi),l=xi.dot(qi),c=xi.dot(hl),u=qi.dot(qi),o=qi.dot(hl),f=a*u-l*l;if(f===0)return r.set(0,0,0),null;let h=1/f,g=(u*c-l*o)*h,d=(a*o-l*c)*h;return r.set(1-g-d,d,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,a,l,c){return this.getBarycoord(e,t,n,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(l,Yi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(gl,r.z),a}static isFrontFacing(e,t,n,s){return xi.subVectors(n,t),qi.subVectors(e,t),xi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),xi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;$n.subVectors(s,n),Kn.subVectors(r,n),ul.subVectors(e,n);let c=$n.dot(ul),u=Kn.dot(ul);if(c<=0&&u<=0)return t.copy(n);dl.subVectors(e,s);let o=$n.dot(dl),f=Kn.dot(dl);if(o>=0&&f<=o)return t.copy(s);let h=c*f-o*u;if(h<=0&&c>=0&&o<=0)return a=c/(c-o),t.copy(n).addScaledVector($n,a);fl.subVectors(e,r);let g=$n.dot(fl),d=Kn.dot(fl);if(d>=0&&g<=d)return t.copy(r);let _=g*u-c*d;if(_<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(n).addScaledVector(Kn,l);let m=o*d-g*f;if(m<=0&&f-o>=0&&g-d>=0)return rh.subVectors(r,s),l=(f-o)/(f-o+(g-d)),t.copy(s).addScaledVector(rh,l);let p=1/(m+_+h);return a=_*p,l=h*p,t.copy(n).addScaledVector($n,a).addScaledVector(Kn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Hr.subVectors(this.max,Ds),jn.subVectors(e.a,Ds),Qn.subVectors(e.b,Ds),es.subVectors(e.c,Ds),ln.subVectors(Qn,jn),cn.subVectors(es,Qn),An.subVectors(jn,es);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-An.z,An.y,ln.z,0,-ln.x,cn.z,0,-cn.x,An.z,0,-An.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-An.y,An.x,0];return!_l(t,jn,Qn,es,Hr)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,jn,Qn,es,Hr))?!1:(Gr.crossVectors(ln,cn),t=[Gr.x,Gr.y,Gr.z],_l(t,jn,Qn,es,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new I,new I,new I,new I,new I,new I,new I,new I],yi=new I,Vr=new Fi,jn=new I,Qn=new I,es=new I,ln=new I,cn=new I,An=new I,Ds=new I,Hr=new I,Gr=new I,Cn=new I;function _l(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);let l=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=e.dot(Cn),u=t.dot(Cn),o=n.dot(Cn);if(Math.max(-Math.max(c,u,o),Math.min(c,u,o))>l)return!1}return!0}var Mt=new I,Wr=new Re,ef=0,ai=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ef++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=as(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ys=class extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}},tf=new Fi,Ns=new I,xl=new I,bi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);let t=Ns.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(xl)),this.expandByPoint(Ns.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nf=0,ui=new qe,yl=new Nt,ts=new I,ri=new Fi,Us=new Fi,Rt=new I,yt=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Zs:Ys)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Us.setFromBufferAttribute(l),this.morphTargetsRelative?(Rt.addVectors(ri.min,Us.min),ri.expandByPoint(Rt),Rt.addVectors(ri.max,Us.max),ri.expandByPoint(Rt)):(ri.expandByPoint(Us.min),ri.expandByPoint(Us.max))}ri.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let u=0,o=l.count;u<o;u++)Rt.fromBufferAttribute(l,u),c&&(ts.fromBufferAttribute(e,u),Rt.add(ts)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ai(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let v=0;v<n.count;v++)l[v]=new I,c[v]=new I;let u=new I,o=new I,f=new I,h=new Re,g=new Re,d=new Re,_=new I,m=new I;function p(v,w,R){u.fromBufferAttribute(n,v),o.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,v),g.fromBufferAttribute(r,w),d.fromBufferAttribute(r,R),o.sub(u),f.sub(u),g.sub(h),d.sub(h);let U=1/(g.x*d.y-d.x*g.y);isFinite(U)&&(_.copy(o).multiplyScalar(d.y).addScaledVector(f,-g.y).multiplyScalar(U),m.copy(f).multiplyScalar(g.x).addScaledVector(o,-d.x).multiplyScalar(U),l[v].add(_),l[w].add(_),l[R].add(_),c[v].add(m),c[w].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){let R=S[v],U=R.start,O=R.count;for(let V=U,D=U+O;V<D;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new I,y=new I,E=new I,T=new I;function C(v){E.fromBufferAttribute(s,v),T.copy(E);let w=l[v];b.copy(w),b.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(T,w);let U=y.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,U)}for(let v=0,w=S.length;v<w;++v){let R=S[v],U=R.start,O=R.count;for(let V=U,D=U+O;V<D;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,l=new I,c=new I,u=new I,o=new I,f=new I;if(e)for(let h=0,g=e.count;h<g;h+=3){let d=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),o.subVectors(a,r),f.subVectors(s,r),o.cross(f),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),l.add(o),c.add(o),u.add(o),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=t.count;h<g;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),o.subVectors(a,r),f.subVectors(s,r),o.cross(f),n.setXYZ(h+0,o.x,o.y,o.z),n.setXYZ(h+1,o.x,o.y,o.z),n.setXYZ(h+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(l,c){let u=l.array,o=l.itemSize,f=l.normalized,h=new u.constructor(c.length*o),g=0,d=0;for(let _=0,m=c.length;_<m;_++){l.isInterleavedBufferAttribute?g=c[_]*l.data.stride+l.offset:g=c[_]*o;for(let p=0;p<o;p++)h[d++]=u[g++]}return new ai(h,o,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],u=e(c,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let c=[],u=r[l];for(let o=0,f=u.length;o<f;o++){let h=u[o],g=e(h,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],o=[];for(let f=0,h=u.length;f<h;f++){let g=u[f];o.push(g.toJSON(e.data))}o.length>0&&(s[c]=o,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let o=s[u];this.setAttribute(u,o.clone(t))}let r=e.morphAttributes;for(let u in r){let o=[],f=r[u];for(let h=0,g=f.length;h<g;h++)o.push(f[h].clone(t));this.morphAttributes[u]=o}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,o=a.length;u<o;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vl=new I,sf=new I,rf=new De,Yt=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vl.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},af=0,Ki=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Ss,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new I,Sl=new I,Xr=new I,qr=new I,Bi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sl.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),l=qr.dot(this.direction),c=-qr.dot(Xr),u=qr.lengthSq(),o=Math.abs(1-a*a),f,h,g,d;if(o>0)if(f=a*c-l,h=a*l-c,d=r*o,f>=0)if(h>=-d)if(h<=d){let _=1/o;f*=_,h*=_,g=f*(f+a*h+2*l)+h*(a*f+h+2*c)+u}else h=r,f=Math.max(0,-(a*h+l)),g=-f*f+h*(h+2*c)+u;else h=-r,f=Math.max(0,-(a*h+l)),g=-f*f+h*(h+2*c)+u;else h<=-d?(f=Math.max(0,-(-a*r+l)),h=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+h*(h+2*c)+u):h<=d?(f=0,h=Math.min(Math.max(-r,-c),r),g=h*(h+2*c)+u):(f=Math.max(0,-(a*r+l)),h=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+h*(h+2*c)+u);else h=a>0?-r:r,f=Math.max(0,-(a*h+l)),g=-f*f+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sl).addScaledVector(Xr,h),g}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,c,u=1/this.direction.x,o=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),o>=0?(r=(e.min.y-h.y)*o,a=(e.max.y-h.y)*o):(r=(e.max.y-h.y)*o,a=(e.min.y-h.y)*o),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(l=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,c=l.x,u=l.y,o=l.z,f=e.x-a.x,h=e.y-a.y,g=e.z-a.z,d=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,b=n.z-a.z,y=Math.abs(c),E=Math.abs(u),T=Math.abs(o),C,v,w,R,U,O,V,D,H,Z,J,ie;if(y>=E&&y>=T?(w=c,O=f,H=d,ie=p,c>=0?(C=u,v=o,R=h,U=g,V=_,D=m,Z=S,J=b):(C=o,v=u,R=g,U=h,V=m,D=_,Z=b,J=S)):E>=T?(w=u,O=h,H=_,ie=S,u>=0?(C=o,v=c,R=g,U=f,V=m,D=d,Z=b,J=p):(C=c,v=o,R=f,U=g,V=d,D=m,Z=p,J=b)):(w=o,O=g,H=m,ie=b,o>=0?(C=c,v=u,R=f,U=h,V=d,D=_,Z=p,J=S):(C=u,v=c,R=h,U=f,V=_,D=d,Z=S,J=p)),w===0)return null;let X=C/w,Q=v/w,te=1/w,Ae=R-X*O,Ee=U-Q*O,ot=V-X*H,Ze=D-Q*H,Ke=Z-X*ie,q=J-Q*ie,j=Ke*Ze-q*ot,xe=Ae*q-Ee*Ke,Ne=ot*Ee-Ze*Ae;if(s){if(j<0||xe<0||Ne<0)return null}else if((j<0||xe<0||Ne<0)&&(j>0||xe>0||Ne>0))return null;let ge=j+xe+Ne;if(ge===0)return null;let ze=te*(j*O+xe*H+Ne*ie);return(ge>0?ze<0:ze>0)?null:this.at(ze/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ah=new qe,Rn=new Bi,Yr=new bi,oh=new I,Zr=new I,Jr=new I,$r=new I,Ml=new I,Kr=new I,lh=new I,jr=new I,_t=class extends Nt{constructor(e=new yt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Kr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let o=l[c],f=r[c];o!==0&&(Ml.fromBufferAttribute(f,e),a?Kr.addScaledVector(Ml,o):Kr.addScaledVector(Ml.sub(t),o))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(Yr.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Yr,oh)===null||Rn.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(ah.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(ah),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,u=r.attributes.uv,o=r.attributes.uv1,f=r.attributes.normal,h=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(a))for(let d=0,_=h.length;d<_;d++){let m=h[d],p=a[m.materialIndex],S=Math.max(m.start,g.start),b=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let y=S,E=b;y<E;y+=3){let T=l.getX(y),C=l.getX(y+1),v=l.getX(y+2);s=Qr(this,p,e,n,u,o,f,T,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let d=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=d,p=_;m<p;m+=3){let S=l.getX(m),b=l.getX(m+1),y=l.getX(m+2);s=Qr(this,a,e,n,u,o,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let d=0,_=h.length;d<_;d++){let m=h[d],p=a[m.materialIndex],S=Math.max(m.start,g.start),b=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let y=S,E=b;y<E;y+=3){let T=y,C=y+1,v=y+2;s=Qr(this,p,e,n,u,o,f,T,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let d=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=d,p=_;m<p;m+=3){let S=m,b=m+1,y=m+2;s=Qr(this,a,e,n,u,o,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function of(i,e,t,n,s,r,a,l){let c;if(e.side===Ut?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,e.side===xn,l),c===null)return null;jr.copy(l),jr.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(jr);return u<t.near||u>t.far?null:{distance:u,point:jr.clone(),object:i}}function Qr(i,e,t,n,s,r,a,l,c,u){i.getVertexPosition(l,Zr),i.getVertexPosition(c,Jr),i.getVertexPosition(u,$r);let o=of(i,e,t,n,Zr,Jr,$r,lh);if(o){let f=new I;un.getBarycoord(lh,Zr,Jr,$r,f),s&&(o.uv=un.getInterpolatedAttribute(s,l,c,u,f,new Re)),r&&(o.uv1=un.getInterpolatedAttribute(r,l,c,u,f,new Re)),a&&(o.normal=un.getInterpolatedAttribute(a,l,c,u,f,new I),o.normal.dot(n.direction)>0&&o.normal.multiplyScalar(-1));let h={a:l,b:c,c:u,normal:new I,materialIndex:0};un.getNormal(Zr,Jr,$r,h.normal),o.face=h,o.barycoord=f}return o}var Js=class extends Zt{constructor(e=null,t=1,n=1,s,r,a,l,c,u=It,o=It,f,h){super(null,a,l,c,u,o,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends ai{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new qe,ch=new qe,ea=[],hh=new Fi,lf=new qe,Os=new _t,Fs=new bi,Ln=class extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),hh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(hh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Fs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),ch.multiplyMatrices(n,is),Os.matrixWorld=ch,Os.raycast(e,ea);for(let a=0,l=ea.length;a<l;a++){let c=ea[a];c.instanceId=r,c.object=this,t.push(c)}ea.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Js(new Float32Array(s*this.count),s,this.count,qa,di));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},In=new bi,cf=new Re(.5,.5),ta=new I,ms=class{constructor(e=new Yt,t=new Yt,n=new Yt,s=new Yt,r=new Yt,a=new Yt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],u=r[3],o=r[4],f=r[5],h=r[6],g=r[7],d=r[8],_=r[9],m=r[10],p=r[11],S=r[12],b=r[13],y=r[14],E=r[15];if(s[0].setComponents(u-a,g-o,p-d,E-S).normalize(),s[1].setComponents(u+a,g+o,p+d,E+S).normalize(),s[2].setComponents(u+l,g+f,p+_,E+b).normalize(),s[3].setComponents(u-l,g-f,p-_,E-b).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(u-c,g-h,p-m,E-y).normalize();else if(s[4].setComponents(u-c,g-h,p-m,E-y).normalize(),t===vi)s[5].setComponents(u+c,g+h,p+m,E+y).normalize();else if(t===cs)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);let t=cf.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dn=class extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new I,Ma=new I,uh=new qe,Bs=new Bi,ia=new bi,bl=new I,dh=new I,fn=class extends Nt{constructor(e=new yt,t=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(Ma);e.setAttribute("lineDistance",new je(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,e.ray.intersectsSphere(ia)===!1)return;uh.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(uh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,o=n.index,h=n.attributes.position;if(o!==null){let g=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let _=g,m=d-1;_<m;_+=u){let p=o.getX(_),S=o.getX(_+1),b=na(this,e,Bs,c,p,S,_);b&&t.push(b)}if(this.isLineLoop){let _=o.getX(d-1),m=o.getX(g),p=na(this,e,Bs,c,_,m,d-1);p&&t.push(p)}}else{let g=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=g,m=d-1;_<m;_+=u){let p=na(this,e,Bs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=na(this,e,Bs,c,d-1,g,d-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function na(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(Sa.fromBufferAttribute(l,s),Ma.fromBufferAttribute(l,r),t.distanceSqToSegment(Sa,Ma,bl,dh)>n)return;bl.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(bl);if(!(u<e.near||u>e.far))return{distance:u,point:dh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var fh=new I,ph=new I,Ks=class extends fn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fh.fromBufferAttribute(t,s),ph.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fh.distanceTo(ph);e.setAttribute("lineDistance",new je(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var js=class extends Zt{constructor(e=[],t=yn,n,s,r,a,l,c,u,o){super(e,t,n,s,r,a,l,c,u,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gs=class extends Zt{constructor(e,t,n,s,r,a,l,c,u){super(e,t,n,s,r,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pn=class extends Zt{constructor(e,t,n=Ai,s,r,a,l=It,c=It,u,o=Oi,f=1){if(o!==Oi&&o!==Sn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,l,c,o,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends pn{constructor(e,t=Ai,n=yn,s,r,a=It,l=It,c,u=Oi){let o={width:e,height:e,depth:1},f=[o,o,o,o,o,o];super(e,e,t,n,s,r,a,l,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qs=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ti=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],o=[],f=[],h=0,g=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(f,2));function d(_,m,p,S,b,y,E,T,C,v,w){let R=y/C,U=E/v,O=y/2,V=E/2,D=T/2,H=C+1,Z=v+1,J=0,ie=0,X=new I;for(let Q=0;Q<Z;Q++){let te=Q*U-V;for(let Ae=0;Ae<H;Ae++){let Ee=Ae*R-O;X[_]=Ee*S,X[m]=te*b,X[p]=D,u.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,o.push(X.x,X.y,X.z),f.push(Ae/C),f.push(1-Q/v),J+=1}}for(let Q=0;Q<v;Q++)for(let te=0;te<C;te++){let Ae=h+te+H*Q,Ee=h+te+H*(Q+1),ot=h+(te+1)+H*(Q+1),Ze=h+(te+1)+H*Q;c.push(Ae,Ee,Ze),c.push(Ee,ot,Ze),ie+=6}l.addGroup(g,ie,w),g+=ie,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var er=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],c=[],u=new I,o=new Re;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let g=n+f/t*s;u.x=e*Math.cos(g),u.y=e*Math.sin(g),a.push(u.x,u.y,u.z),l.push(0,0,1),o.x=(a[h]/e+1)/2,o.y=(a[h+1]/e+1)/2,c.push(o.x,o.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_s=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let o=[],f=[],h=[],g=[],d=0,_=[],m=n/2,p=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(o),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(g,2));function S(){let y=new I,E=new I,T=0,C=(t-e)/n;for(let v=0;v<=r;v++){let w=[],R=v/r,U=R*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,D=V*c+l,H=Math.sin(D),Z=Math.cos(D);E.x=U*H,E.y=-R*n+m,E.z=U*Z,f.push(E.x,E.y,E.z),y.set(H,C,Z).normalize(),h.push(y.x,y.y,y.z),g.push(V,1-R),w.push(d++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let R=_[w][v],U=_[w+1][v],O=_[w+1][v+1],V=_[w][v+1];(e>0||w!==0)&&(o.push(R,U,V),T+=3),(t>0||w!==r-1)&&(o.push(U,O,V),T+=3)}u.addGroup(p,T,0),p+=T}function b(y){let E=d,T=new Re,C=new I,v=0,w=y===!0?e:t,R=y===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*R,0),h.push(0,R,0),g.push(.5,.5),d++;let U=d;for(let O=0;O<=s;O++){let D=O/s*c+l,H=Math.cos(D),Z=Math.sin(D);C.x=w*Z,C.y=m*R,C.z=w*H,f.push(C.x,C.y,C.z),h.push(0,R,0),T.x=H*.5+.5,T.y=Z*.5*R+.5,g.push(T.x,T.y),d++}for(let O=0;O<s;O++){let V=E+O,D=U+O;y===!0?o.push(D,D+1,V):o.push(D+1,D,V),v+=3}u.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tr=class i extends _s{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ki=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),u=l+1,o=c+1,f=e/l,h=t/c,g=[],d=[],_=[],m=[];for(let p=0;p<o;p++){let S=p*h-a;for(let b=0;b<u;b++){let y=b*f-r;d.push(y,-S,0),_.push(0,0,1),m.push(b/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<l;S++){let b=S+u*p,y=S+u*(p+1),E=S+1+u*(p+1),T=S+1+u*p;g.push(b,y,T),g.push(y,E,T)}this.setIndex(g),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ir=class i extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],c=[],u=[],o=[],f=e,h=(t-e)/s,g=new I,d=new Re;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;g.x=f*Math.cos(p),g.y=f*Math.sin(p),c.push(g.x,g.y,g.z),u.push(0,0,1),d.x=(g.x/t+1)/2,d.y=(g.y/t+1)/2,o.push(d.x,d.y)}f+=h}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let S=p+m,b=S,y=S+n+1,E=S+n+2,T=S+1;l.push(b,y,T),l.push(y,E,T)}}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var nr=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+l,Math.PI),u=0,o=[],f=new I,h=new I,g=[],d=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],b=p/n,y=a+b*l,E=e*Math.cos(y),T=Math.sqrt(e*e-E*E),C=0;p===0&&a===0?C=.5/t:p===n&&c===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let w=v/t,R=s+w*r;f.x=-T*Math.cos(R),f.y=E,f.z=T*Math.sin(R),d.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+C,1-b),S.push(u++)}o.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let b=o[p][S+1],y=o[p][S],E=o[p+1][S],T=o[p+1][S+1];(p!==0||a>0)&&g.push(b,y,T),(p!==n-1||c<Math.PI)&&g.push(y,E,T)}this.setIndex(g),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sr=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],o=[],f=[],h=new I,g=new I,d=new I;for(let _=0;_<=n;_++){let m=a+_/n*l;for(let p=0;p<=s;p++){let S=p/s*r;g.x=(e+t*Math.cos(m))*Math.cos(S),g.y=(e+t*Math.cos(m))*Math.sin(S),g.z=t*Math.sin(m),u.push(g.x,g.y,g.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),d.subVectors(g,h).normalize(),o.push(d.x,d.y,d.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,b=(s+1)*(_-1)+m,y=(s+1)*_+m;c.push(p,S,y),c.push(S,b,y)}this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Un(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mh(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=Un(i[t]);for(let s in n)e[s]=n[s]}return e}function mh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var lu={clone:Un,merge:Gt},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Un(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ta=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ji=class extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ea=class extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var rr=class extends dn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ns(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var mn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends mn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Cl:r=e,l=2*t-n;break;case Rl:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:a=e,c=2*n-t;break;case Rl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,o=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=r*o,this._offsetNext=a*o}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,g=this._weightNext,d=(n-t)/(s-t),_=d*d,m=_*d,p=-h*m+2*h*_-h*d,S=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*d+1,b=(-1-g)*m+(1.5+g)*_+.5*d,y=g*m-g*_;for(let E=0;E!==l;++E)r[E]=p*a[o+E]+S*a[u+E]+b*a[c+E]+y*a[f+E];return r}},Ca=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=(n-t)/(s-t),f=1-o;for(let h=0;h!==l;++h)r[h]=a[u+h]*f+a[c+h]*o;return r}},Ra=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ia=class extends mn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=this.inTangents,f=this.outTangents;if(!o||!f){let d=(n-t)/(s-t),_=1-d;for(let m=0;m!==l;++m)r[m]=a[u+m]*_+a[c+m]*d;return r}let h=l*2,g=e-1;for(let d=0;d!==l;++d){let _=a[u+d],m=a[c+d],p=g*h+d*2,S=f[p],b=f[p+1],y=e*h+d*2,E=o[y],T=o[y+1],C=pf(n,t,S,E,s);r[d]=cu(C,_,b,T,m)}return r}};function cu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ff(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function pf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=cu(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=ff(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var li=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Tl(e.settings)&&(n.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break;case wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return aa;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Tl(this.settings)&&(gh(this.settings.inTangents,e),gh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Ad(s))for(let l=0,c=s.length;l!==c;++l){let u=s[l];if(isNaN(u)){Pe("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===aa,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,u=e[l],o=e[l+1];if(u!==o&&(l!==1||u!==e[0]))if(s)c=!0;else{let f=l*n,h=f-n,g=f+n;for(let d=0;d!==n;++d){let _=t[f+d];if(_!==t[h+d]||_!==t[g+d]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let f=l*n,h=a*n;for(let g=0;g!==n;++g)t[h+g]=t[f+g]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=_a;var gn=class extends li{constructor(e,t,n){super(e,t,n)}};gn.prototype.ValueTypeName="bool";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=Vs;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="color";var La=class extends li{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="number";var Da=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),u=e*l;for(let o=u+l;u!==o;u+=4)Tt.slerpFlat(r,0,a,u-l,a,u,c);return r}},ar=class extends li{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends li{constructor(e,t,n){super(e,t,n)}};_n.prototype.ValueTypeName="string";_n.prototype.ValueBufferType=Array;_n.prototype.DefaultInterpolation=Vs;_n.prototype.InterpolantFactoryMethodLinear=void 0;_n.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends li{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(o){l++,r===!1&&s.onStart!==void 0&&s.onStart(o,a,l),r=!0},this.itemEnd=function(o){a++,s.onProgress!==void 0&&s.onProgress(o,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(o){s.onError!==void 0&&s.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),c?c(o):o},this.setURLModifier=function(o){return c=o,this},this.addHandler=function(o,f){return u.push(o,f),this},this.removeHandler=function(o){let f=u.indexOf(o);return f!==-1&&u.splice(f,2),this},this.getHandler=function(o){for(let f=0,h=u.length;f<h;f+=2){let g=u[f],d=u[f+1];if(g.global&&(g.lastIndex=0),g.test(o))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hu=new Ua,Oa=class{constructor(e){this.manager=e!==void 0?e:hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lr=class extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},El=new qe,_h=new I,xh=new I,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(El,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===cs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sa=new I,ra=new Tt,Ni=new I,cr=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ra,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sa,ra,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hn=new I,yh=new Re,vh=new Re,Ht=class extends cr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,yh,vh),t.subVectors(vh,yh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xs=class extends cr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=o*this.view.offsetY,c=l-o*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Il=class extends Fa{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Il}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=-90,rs=1,Ba=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(ss,rs,e,t);r.layers=this.layers,this.add(r);let a=new Ht(ss,rs,e,t);a.layers=this.layers,this.add(a);let l=new Ht(ss,rs,e,t);l.layers=this.layers,this.add(l);let c=new Ht(ss,rs,e,t);c.layers=this.layers,this.add(c);let u=new Ht(ss,rs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,c]=t;for(let u of t)this.remove(u);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,u,o]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(f,h,g),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},ka=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rc="\\[\\]\\.:\\/",mf=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",gf="[^"+rc.replace("\\.","")+"]",_f=/((?:WC+[\/:])*)/.source.replace("WC",ac),xf=/(WCOD+)?/.source.replace("WCOD",gf),yf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),vf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Sf=new RegExp("^"+_f+xf+yf+vf+"$"),Mf=["material","materials","bones","map"],Pl=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mf,"")}static parseTrackName(e){let t=Sf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===u){u=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Pl;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var Sh=new qe,ur=class{constructor(e,t,n=0,s=1/0){this.ray=new Bi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(e,t=!0,n=[]){return Ll(e,this,n,t),n.sort(Mh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ll(e[s],this,n,t);return n.sort(Mh),n}};function Mh(i,e){return i.distance-e.distance}function Ll(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Ll(r[a],e,t,!0)}}var ys=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var dr=class extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function oc(i,e,t,n){let s=bf(n);switch(t){case Ql:return i*e;case qa:return i*e/s.components*s.byteLength;case Ya:return i*e/s.components*s.byteLength;case Mn:return i*e*2/s.components*s.byteLength;case Za:return i*e*2/s.components*s.byteLength;case ec:return i*e*3/s.components*s.byteLength;case fi:return i*e*4/s.components*s.byteLength;case Ja:return i*e*4/s.components*s.byteLength;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Qa:return Math.max(i,16)*Math.max(e,8)/4;case $a:case ja:return Math.max(i,8)*Math.max(e,8)/2;case eo:case to:case no:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case vr:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case So:case Mo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sr:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bf(i){switch(i){case ii:case Jl:return{byteLength:1,components:1};case Ms:case $l:case Ci:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Ai:case Ga:case di:return{byteLength:4,components:1};case Kl:case jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ef(i){let e=new WeakMap;function t(l,c){let u=l.array,o=l.usage,f=u.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,u,o),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,u){let o=c.array,f=c.updateRanges;if(i.bindBuffer(u,l),f.length===0)i.bufferSubData(u,0,o);else{f.sort((g,d)=>g.start-d.start);let h=0;for(let g=1;g<f.length;g++){let d=f[h],_=f[g];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++h,f[h]=_)}f.length=h+1;for(let g=0,d=f.length;g<d;g++){let _=f[g];i.bufferSubData(u,_.start*o.BYTES_PER_ELEMENT,o,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let o=e.get(l);(!o||o.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:s,remove:r,update:a}}var wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Tp=`uniform sampler2D dfgLUT;
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
}`,Ep=`
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Qm=`#define TOON
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
}`,e0=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:wf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Rf,alphatest_fragment:If,alphatest_pars_fragment:Pf,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Nf,batching_vertex:Uf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Kf,displacementmap_pars_vertex:jf,displacementmap_vertex:Qf,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:ip,colorspace_pars_fragment:np,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:op,envmap_physical_pars_fragment:xp,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:yp,lights_toon_pars_fragment:vp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ep,lights_fragment_maps:wp,lights_fragment_end:Ap,lightprobes_pars_fragment:Cp,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Dp,map_pars_fragment:Np,map_particle_fragment:Up,map_particle_pars_fragment:Op,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Bp,morphinstance_vertex:kp,morphcolor_vertex:zp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Qp,opaque_fragment:em,packing:tm,premultiplied_alpha_fragment:im,project_vertex:nm,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:am,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:_m,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Tm,worldpos_vertex:Em,background_vert:wm,background_frag:Am,backgroundCube_vert:Cm,backgroundCube_frag:Rm,cube_vert:Im,cube_frag:Pm,depth_vert:Lm,depth_frag:Dm,distance_vert:Nm,distance_frag:Um,equirect_vert:Om,equirect_frag:Fm,linedashed_vert:Bm,linedashed_frag:km,meshbasic_vert:zm,meshbasic_frag:Vm,meshlambert_vert:Hm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:$m,meshphysical_frag:Km,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:e0,points_frag:t0,shadow_vert:i0,shadow_frag:n0,sprite_vert:s0,sprite_frag:r0},he={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Gi={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Gi.physical={uniforms:Gt([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Io={r:0,b:0,g:0},a0=new qe,Du=new De;Du.set(-1,0,0,0,1,0,0,0,1);function o0(i,e,t,n,s,r){let a=new Oe(0),l=s===!0?0:1,c,u,o=null,f=0,h=null;function g(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let y=S.backgroundBlurriness>0;b=e.get(b,y)}return b}function d(S){let b=!1,y=g(S);y===null?m(a,l):y&&y.isColor&&(m(y,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===pr)?(u===void 0&&(u=new _t(new Ti(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Un(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Du),u.material.toneMapped=Xe.getTransfer(y.colorSpace)!==tt,(o!==y||f!==y.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,o=y,f=y.version,h=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new ki(2,2),new $t({name:"BackgroundMaterial",uniforms:Un(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(o!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,o=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,b){S.getRGB(Io,sc(i)),t.buffers.color.setClear(Io.r,Io.g,Io.b,b,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:d,addToRenderList:_,dispose:p}}function l0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function l(U,O,V,D,H){let Z=!1,J=f(U,D,V,O);r!==J&&(r=J,u(r.object)),Z=g(U,D,V,H),Z&&d(U,D,V,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(U,O,V,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function u(U){return i.bindVertexArray(U)}function o(U){return i.deleteVertexArray(U)}function f(U,O,V,D){let H=D.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let J=U.isInstancedMesh===!0?U.id:0,ie=Z[J];ie===void 0&&(ie={},Z[J]=ie);let X=ie[V.id];X===void 0&&(X={},ie[V.id]=X);let Q=X[H];return Q===void 0&&(Q=h(c()),X[H]=Q),Q}function h(U){let O=[],V=[],D=[];for(let H=0;H<t;H++)O[H]=0,V[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:D,object:U,attributes:{},index:null}}function g(U,O,V,D){let H=r.attributes,Z=O.attributes,J=0,ie=V.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=H[X],Ae=Z[X];if(Ae===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Ae=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Ae=U.instanceColor)),te===void 0||te.attribute!==Ae||Ae&&te.data!==Ae.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function d(U,O,V,D){let H={},Z=O.attributes,J=0,ie=V.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=Z[X];te===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let Ae={};Ae.attribute=te,te&&te.data&&(Ae.data=te.data),H[X]=Ae,J++}r.attributes=H,r.attributesNum=J,r.index=D}function _(){let U=r.newAttributes;for(let O=0,V=U.length;O<V;O++)U[O]=0}function m(U){p(U,0)}function p(U,O){let V=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;V[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),H[U]!==O&&(i.vertexAttribDivisor(U,O),H[U]=O)}function S(){let U=r.newAttributes,O=r.enabledAttributes;for(let V=0,D=O.length;V<D;V++)O[V]!==U[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function b(U,O,V,D,H,Z,J){J===!0?i.vertexAttribIPointer(U,O,V,H,Z):i.vertexAttribPointer(U,O,V,D,H,Z)}function y(U,O,V,D){_();let H=D.attributes,Z=V.getAttributes(),J=O.defaultAttributeValues;for(let ie in Z){let X=Z[ie];if(X.location>=0){let Q=H[ie];if(Q===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let te=Q.normalized,Ae=Q.itemSize,Ee=e.get(Q);if(Ee===void 0)continue;let ot=Ee.buffer,Ze=Ee.type,Ke=Ee.bytesPerElement,q=Ze===i.INT||Ze===i.UNSIGNED_INT||Q.gpuType===Ga;if(Q.isInterleavedBufferAttribute){let j=Q.data,xe=j.stride,Ne=Q.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,j.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ge=0;ge<X.locationSize;ge++)b(X.location+ge,Ae/X.locationSize,Ze,te,xe*Ke,(Ne+Ae/X.locationSize*ge)*Ke,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let j=0;j<X.locationSize;j++)b(X.location+j,Ae/X.locationSize,Ze,te,Ae*Ke,Ae/X.locationSize*j*Ke,q)}}else if(J!==void 0){let te=J[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}S()}function E(){w();for(let U in n){let O=n[U];for(let V in O){let D=O[V];for(let H in D){let Z=D[H];for(let J in Z)o(Z[J].object),delete Z[J];delete D[H]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let V in O){let D=O[V];for(let H in D){let Z=D[H];for(let J in Z)o(Z[J].object),delete Z[J];delete D[H]}}delete n[U.id]}function C(U){for(let O in n){let V=n[O];for(let D in V){let H=V[D];if(H[U.id]===void 0)continue;let Z=H[U.id];for(let J in Z)o(Z[J].object),delete Z[J];delete H[U.id]}}}function v(U){for(let O in n){let V=n[O],D=U.isInstancedMesh===!0?U.id:0,H=V[D];if(H!==void 0){for(let Z in H){let J=H[Z];for(let ie in J)o(J[ie].object),delete J[ie];delete H[Z]}delete V[D],Object.keys(V).length===0&&delete n[O]}}}function w(){R(),a=!0,r!==s&&(r=s,u(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:w,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function c0(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,o){o!==0&&(i.drawArraysInstanced(n,c,u,o),t.update(u,n,o))}function l(c,u,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,o);let h=0;for(let g=0;g<o;g++)h+=u[g];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function h0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==fi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){let v=C===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ii&&C!==di&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",o=c(u);o!==u&&(Ce("WebGLRenderer:",u,"not supported, using",o,"instead."),u=o);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:T}}function u0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Yt,l=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let g=f.length!==0||h||n!==0||s;return s=h,n=f.length,g},this.beginShadows=function(){r=!0,o(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=o(f,h,0)},this.setState=function(f,h,g){let d=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||d===null||d.length===0||r&&!m)r?o(null):u();else{let S=r?0:n,b=S*4,y=p.clippingState||null;c.value=y,y=o(d,h,b,g);for(let E=0;E!==b;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function o(f,h,g,d){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,d!==!0||m===null){let p=g+_*4,S=h.matrixWorldInverse;l.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=g;b!==_;++b,y+=4)a.copy(f[b]).applyMatrix4(S,l),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var As=4,d0=6,f0=20,p0=256,br=new xs,uu=new Oe,lc=null,cc=0,hc=0,uc=!1,m0=new I,On=new I,Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=m0}=r;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,hc),this._renderer.xr.enabled=uc,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yn||e.mapping===Nn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ci,format:fi,colorSpace:Hs,depthBuffer:!1},s=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=g0(r)),this._blurMaterial=x0(r,e,t),this._ggxMaterial=_0(r,e,t)}return s}_compileMaterial(e){let t=new _t(new yt,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,s,r){let c=new Ht(90,1,t,n),u=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(uu),f.toneMapping=wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Ti,new oi({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(uu),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,u[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+o[b],r.y,r.z)):y===1?(c.up.set(0,0,u[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+o[b],r.z)):(c.up.set(0,u[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+o[b]));let E=this._cubeSize;ws(s,y*E,b>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(_,c),f.render(e,c)}f.toneMapping=g,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yn||e.mapping===Nn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;ws(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,br)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-o*o),h=u*1.25,g=f*h,{_lodMax:d}=this,_=this._sizeLods[n],m=3*_*(n>d-As?n-d+As:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=d-t,ws(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(l,br),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=d-n,ws(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(l,br)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let o=this._sizeLods[s],f=3*o*(s>this._lodMax-As?s-this._lodMax+As:0),h=4*(this._cubeSize-o);ws(t,f,h,3*o,2*o),a.setRenderTarget(t),a.render(c,br)}};function g0(i){let e=[],t=[],n=i,s=i-As+1+d0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),c=-l,u=1+l,o=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,h=6,g=3,d=new Float32Array(g*h*f),_=new Float32Array(g*h*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,b=p>2?0:-1,y=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];d.set(y,g*h*p);for(let E=0;E<h;E++){let T=o[E*2]*2-1,C=o[E*2+1]*2-1;p===0?On.set(1,C,T):p===1?On.set(-T,1,-C):p===2?On.set(-T,C,1):p===3?On.set(-1,C,-T):p===4?On.set(-T,-1,C):On.set(T,C,-1),On.toArray(_,(p*h+E)*g)}}let m=new yt;m.setAttribute("position",new ai(d,g)),m.setAttribute("outputDirection",new ai(_,g)),t.push(new _t(m,null)),n>As&&n--}return{lodMeshes:t,sizeLods:e}}function du(i,e,t){let n=new ti(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _0(i,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function x0(i,e,t){return new $t({name:"SphericalGaussianBlur",defines:{SAMPLES:f0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function fu(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function pu(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Do=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Un(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Vi});r.uniforms.tEquirect.value=t;let a=new _t(s,r),l=t.minFilter;return t.minFilter===vn&&(t.minFilter=Dt),new Ba(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function y0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===za||g===Va)if(e.has(h)){let d=e.get(h).texture;return l(d,h.mapping)}else{let d=h.image;if(d&&d.height>0){let _=new Do(d.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",u),l(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let g=h.mapping,d=g===za||g===Va,_=g===yn||g===Nn;if(d||_){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Lo(i)),m=d?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return d&&S&&S.height>0||_&&S&&c(S)?(n===null&&(n=new Lo(i)),m=d?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",o),m.texture):null}}}return h}function l(h,g){return g===za?h.mapping=yn:g===Va&&(h.mapping=Nn),h}function c(h){let g=0,d=6;for(let _=0;_<d;_++)h[_]!==void 0&&g++;return g===d}function u(h){let g=h.target;g.removeEventListener("dispose",u);let d=e.get(g);d!==void 0&&(e.delete(g),d.dispose())}function o(h){let g=h.target;g.removeEventListener("dispose",o);let d=t.get(g);d!==void 0&&(t.delete(g),d.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function v0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pn("WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete s[h.id];let g=r.get(h);g&&(e.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER)}function u(f){let h=[],g=f.index,d=f.attributes.position,_=0;if(d===void 0)return;if(g!==null){let S=g.array;_=g.version;for(let b=0,y=S.length;b<y;b+=3){let E=S[b+0],T=S[b+1],C=S[b+2];h.push(E,T,T,C,C,E)}}else{let S=d.array;_=d.version;for(let b=0,y=S.length/3-1;b<y;b+=3){let E=b+0,T=b+1,C=b+2;h.push(E,T,T,C,C,E)}}let m=new(d.count>=65535?Zs:Ys)(h,1);m.version=_;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function o(f){let h=r.get(f);if(h){let g=f.index;g!==null&&h.version<g.version&&u(f)}else u(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:o}}function M0(i,e,t){let n;function s(f){n=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function u(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*a,g),t.update(h,n,g))}function o(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let _=0;for(let m=0;m<g;m++)_+=h[m];t.update(_,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=o}function b0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,e,t){let n=new WeakMap,s=new mt;function r(a,l,c){let u=a.morphTargetInfluences,o=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=o!==void 0?o.length:0,h=n.get(l);if(h===void 0||h.count!==f){let w=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let g=l.morphAttributes.position!==void 0,d=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],S=l.morphAttributes.color||[],b=0;g===!0&&(b=1),d===!0&&(b=2),_===!0&&(b=3);let y=l.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*E*4*f),C=new Xs(T,y,E,f);C.type=di,C.needsUpdate=!0;let v=b*4;for(let R=0;R<f;R++){let U=m[R],O=p[R],V=S[R],D=y*E*4*R;for(let H=0;H<U.count;H++){let Z=H*v;g===!0&&(s.fromBufferAttribute(U,H),T[D+Z+0]=s.x,T[D+Z+1]=s.y,T[D+Z+2]=s.z,T[D+Z+3]=0),d===!0&&(s.fromBufferAttribute(O,H),T[D+Z+4]=s.x,T[D+Z+5]=s.y,T[D+Z+6]=s.z,T[D+Z+7]=0),_===!0&&(s.fromBufferAttribute(V,H),T[D+Z+8]=s.x,T[D+Z+9]=s.y,T[D+Z+10]=s.z,T[D+Z+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new Re(y,E)},n.set(l,h),l.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let _=0;_<u.length;_++)g+=u[_];let d=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",d),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function E0(i,e,t,n,s){let r=new WeakMap;function a(u){let o=s.render.frame,f=u.geometry,h=e.get(u,f);if(r.get(h)!==o&&(e.update(h),r.set(h,o)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==o&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,o))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==o&&(g.update(),r.set(g,o))}return h}function l(){r=new WeakMap}function c(u){let o=u.target;o.removeEventListener("dispose",c),n.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:a,dispose:l}}var w0={[Vl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Wl]:"ACES_FILMIC_TONE_MAPPING",[ql]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function A0(i,e,t,n,s,r){let a=new ti(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,u=new yt;u.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new je([0,2,0,0,2,0],2));let o=new Ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _t(u,o),h=new xs(-1,1,1,-1,0,1),g=null,d=null,_=!1,m,p=null,S=[],b=!1;this.setSize=function(y,E){a.setSize(y,E),l!==null&&l.setSize(y,E),c!==null&&c.setSize(y,E);for(let T=0;T<S.length;T++){let C=S[T];C.setSize&&C.setSize(y,E)}},this.setEffects=function(y){S=y,b=S.length>0&&S[0].isRenderPass===!0;let E=a.width,T=a.height;S.length>0&&l===null&&(l=new ti(E,T,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),c=new ti(E,T,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let v=S[C];v.setSize&&v.setSize(E,T)}},this.begin=function(y,E){if(_||y.toneMapping===wi&&S.length===0)return!1;if(p=E,E!==null){let T=E.width,C=E.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return b===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return b},this.end=function(y,E){y.toneMapping=m,_=!0;let T=a,C=l;for(let v=0;v<S.length;v++){let w=S[v];w.enabled!==!1&&(w.render(y,C,T,E),w.needsSwap!==!1&&(T=C,C=C===l?c:l))}if(g!==y.outputColorSpace||d!==y.toneMapping){g=y.outputColorSpace,d=y.toneMapping,o.defines={},Xe.getTransfer(g)===tt&&(o.defines.SRGB_TRANSFER="");let v=w0[d];v&&(o.defines[v]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(f,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),o.dispose()}}var Nu=new Zt,pc=new pn(1,1),Uu=new Xs,Ou=new va,Fu=new js,mu=[],gu=[],_u=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function Rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),wt(t,n)}}function D0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),wt(t,n)}}function N0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),wt(t,n)}}function U0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function k0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function G0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=t.isReversedDepthBuffer()?Ro:Co,r=pc):r=Nu,t.setTexture2D(e||r,s)}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ou,s)}function X0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fu,s)}function q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uu,s)}function Y0(i){switch(i){case 5126:return C0;case 35664:return R0;case 35665:return I0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return O0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return z0;case 36295:return V0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function Z0(i,e){i.uniform1fv(this.addr,e)}function J0(i,e){let t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function $0(i,e){let t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function K0(i,e){let t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function j0(i,e){let t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q0(i,e){let t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eg(i,e){let t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tg(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function ng(i,e){i.uniform3iv(this.addr,e)}function sg(i,e){i.uniform4iv(this.addr,e)}function rg(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function lg(i,e){i.uniform4uiv(this.addr,e)}function cg(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pc:a=Nu;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function hg(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ou,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fu,r[a])}function dg(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uu,r[a])}function fg(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return $0;case 35666:return K0;case 35674:return j0;case 35675:return Q0;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}},gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fg(t.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function pg(i,e,t){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),a=dc.lastIndex,l=r[1],c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===s){vu(t,u===void 0?new mc(l,i,e):new gc(l,i,e));break}else{let f=t.map[l];f===void 0&&(f=new _c(l),vu(t,f)),t=f}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);pg(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Su(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mg=37297,gg=0;function _g(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Mu=new De;function xg(i){Xe._getMatrix(Mu,Xe.workingColorSpace,i);let e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_g(i.getShaderSource(e),l)}else return r}function yg(i,e){let t=xg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vg={[Vl]:"Linear",[Hl]:"Reinhard",[Gl]:"Cineon",[Wl]:"ACESFilmic",[ql]:"AgX",[Yl]:"Neutral",[Xl]:"Custom"};function Sg(i,e){let t=vg[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Po=new I;function Mg(){Xe.getLuminanceCoefficients(Po);let i=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Tg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Er(i){return i!==""}function Tu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(wg,Cg)}var Ag=new Map;function Cg(i,e){let t=ke[e];if(t===void 0){let n=Ag.get(e);if(n!==void 0)t=ke[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xc(t)}var Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(Rg,Ig)}function Ig(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Pg={[fr]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function Lg(i){return Pg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dg={[yn]:"ENVMAP_TYPE_CUBE",[Nn]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function Ng(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ug={[Nn]:"ENVMAP_MODE_REFRACTION"};function Og(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fg={[zl]:"ENVMAP_BLENDING_MULTIPLY",[Wh]:"ENVMAP_BLENDING_MIX",[Xh]:"ENVMAP_BLENDING_ADD"};function Bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fg[i.combine]||"ENVMAP_BLENDING_NONE"}function kg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=Lg(t),u=Ng(t),o=Og(t),f=Bg(t),h=kg(t),g=bg(t),d=Tg(r),_=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+o:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ke.tonemapping_pars_fragment:"",t.toneMapping!==wi?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=xc(a),a=Tu(a,t),a=Eu(a,t),l=xc(l),l=Tu(l,t),l=Eu(l,t),a=wu(a),l=wu(l),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+a,y=S+p+l,E=Su(s,s.VERTEX_SHADER,b),T=Su(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(T)||"",H=O.trim(),Z=V.trim(),J=D.trim(),ie=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,T);else{let Q=bu(s,E,"vertex"),te=bu(s,T,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Q+`
`+te)}else H!==""?Ce("WebGLProgram: Program Info Log:",H):(Z===""||J==="")&&(X=!1);X&&(U.diagnostics={runnable:ie,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(E),s.deleteShader(T),v=new Cs(s,_),w=Eg(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,mg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}var Vg=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vc(e),t.set(e,n)),n}},vc=class{constructor(e){this.id=Vg++,this.code=e,this.usedTimes=0}};function Hg(i){return i===Mn||i===vr||i===Sr}function Gg(i,e,t,n,s,r){let a=new fs,l=new yc,c=new Set,u=[],o=new Map,f=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,U,O,V){let D=U.fog,H=O.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Z,J),X=ie&&ie.mapping===pr?ie.image.height:null,Q=g[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=te!==void 0?te.length:0,Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let ot,Ze,Ke,q;if(Q){let ct=Gi[Q];ot=ct.vertexShader,Ze=ct.fragmentShader}else{ot=v.vertexShader,Ze=v.fragmentShader;let ct=l.getVertexShaderStage(v),Qe=l.getFragmentShaderStage(v);l.update(v,ct,Qe),Ke=ct.id,q=Qe.id}let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,ze=!!v.map,bt=!!v.matcap,He=!!ie,$e=!!v.aoMap,lt=!!v.lightMap,We=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,Ct=!!v.displacementMap,ei=!!v.emissiveMap,gt=!!v.metalnessMap,vt=!!v.roughnessMap,N=v.anisotropy>0,Bt=v.clearcoat>0,it=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,F=v.sheen>0,z=v.transmission>0,W=N&&!!v.anisotropyMap,ne=Bt&&!!v.clearcoatMap,se=Bt&&!!v.clearcoatNormalMap,Y=Bt&&!!v.clearcoatRoughnessMap,K=x&&!!v.iridescenceMap,re=x&&!!v.iridescenceThicknessMap,be=F&&!!v.sheenColorMap,ce=F&&!!v.sheenRoughnessMap,ae=!!v.specularMap,Te=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Fe=z&&!!v.transmissionMap,L=z&&!!v.thicknessMap,oe=!!v.gradientMap,$=!!v.alphaMap,le=v.alphaTest>0,fe=!!v.alphaHash,ee=!!v.extensions,we=wi;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=i.toneMapping);let Se={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ot,fragmentShader:Ze,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:bt,envMap:He,envMapMode:He&&ie.mapping,envMapCubeUVHeight:X,aoMap:$e,lightMap:lt,bumpMap:We,normalMap:pt,displacementMap:Ct,emissiveMap:ei,normalMapObjectSpace:pt&&v.normalMapType===Zh,normalMapTangentSpace:pt&&v.normalMapType===Ao,packedNormalMap:pt&&v.normalMapType===Ao&&Hg(v.normalMap.format),metalnessMap:gt,roughnessMap:vt,anisotropy:N,anisotropyMap:W,clearcoat:Bt,clearcoatMap:ne,clearcoatNormalMap:se,clearcoatRoughnessMap:Y,dispersion:it,retroreflection:A,iridescence:x,iridescenceMap:K,iridescenceThicknessMap:re,sheen:F,sheenColorMap:be,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:Te,specularIntensityMap:Ie,transmission:z,transmissionMap:Fe,thicknessMap:L,gradientMap:oe,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:fe,combine:v.combine,mapUv:ze&&d(v.map.channel),aoMapUv:$e&&d(v.aoMap.channel),lightMapUv:lt&&d(v.lightMap.channel),bumpMapUv:We&&d(v.bumpMap.channel),normalMapUv:pt&&d(v.normalMap.channel),displacementMapUv:Ct&&d(v.displacementMap.channel),emissiveMapUv:ei&&d(v.emissiveMap.channel),metalnessMapUv:gt&&d(v.metalnessMap.channel),roughnessMapUv:vt&&d(v.roughnessMap.channel),anisotropyMapUv:W&&d(v.anisotropyMap.channel),clearcoatMapUv:ne&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(v.sheenRoughnessMap.channel),specularMapUv:ae&&d(v.specularMap.channel),specularColorMapUv:Te&&d(v.specularColorMap.channel),specularIntensityMapUv:Ie&&d(v.specularIntensityMap.channel),transmissionMapUv:Fe&&d(v.transmissionMap.channel),thicknessMapUv:L&&d(v.thicknessMap.channel),alphaMapUv:$&&d(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pt||N),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ze||$),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ee,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===tt,decodeVideoTextureEmissive:ei&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kt,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ee&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let w=g[v.type],R;if(w){let U=Gi[w];R=lu.clone(U.uniforms)}else R=v.uniforms;return R}function y(v,w){let R=o.get(w);return R!==void 0?++R.usedTimes:(R=new zg(i,w,v,s),u.push(R),o.set(w,R)),R}function E(v){if(--v.usedTimes===0){let w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),o.delete(v.cacheKey),v.destroy()}}function T(v){l.remove(v)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function Wg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Cu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function l(h,g,d,_,m,p){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:g,material:d,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[e]=S):(S.id=h.id,S.object=h,S.geometry=g,S.material=d,S.materialVariant=a(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function c(h,g,d,_,m,p,S){S.reversedDepth===!0&&(m=-m);let b=l(h,g,d,_,m,p);d.transmission>0?n.push(b):d.transparent===!0?s.push(b):t.push(b)}function u(h,g,d,_,m,p){let S=l(h,g,d,_,m,p);d.transmission>0?n.unshift(S):d.transparent===!0?s.unshift(S):t.unshift(S)}function o(h,g){t.length>1&&t.sort(h||Xg),n.length>1&&n.sort(g||Cu),s.length>1&&s.sort(g||Cu)}function f(){for(let h=e,g=i.length;h<g;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:f,sort:o}}function qg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ru,i.set(n,[a])):s>=r.length?(a=new Ru,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Oe};break;case"SpotLight":t={position:new I,direction:new I,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jg=0;function $g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kg(i){let e=new Yg,t=Zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new I);let s=new I,r=new qe,a=new qe;function l(u){let o=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,d=0,_=0,m=0,p=0,S=0,b=0,y=0,E=0,T=0,C=0,v=0,w=0,R=0;u.sort($g);for(let O=0,V=u.length;O<V;O++){let D=u[O],H=D.color,Z=D.intensity,J=D.distance,ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Mn?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)o+=H.r*Z,f+=H.g*Z,h+=H.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],Z);R++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[d]=te,n.sunShadowMap[d]=ie;let Ae=Q.getViewportCount();for(let Ee=0;Ee<Ae;Ee++)n.sunShadowMatrix[_+Ee]=Q.getMatrix(Ee),n.sunShadowCascade[_+Ee]=Q._cascadeData[Ee];_+=Ae,d++}n.sun[g]=X,g++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=X,m++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[S]=X;let Q=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,Q.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[S]=Q.matrix,D.castShadow){let te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ie,C++}S++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=X,b++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=D.shadow.matrix,T++}n.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[y]=X,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=o,n.ambient[1]=f,n.ambient[2]=h;let U=n.hash;(U.sunLength!==g||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==S||U.rectAreaLength!==b||U.hemiLength!==y||U.numSunShadows!==d||U.numDirectionalShadows!==E||U.numPointShadows!==T||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==R)&&(n.sun.length=g,n.directional.length=m,n.spot.length=S,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,U.sunLength=g,U.directionalLength=m,U.pointLength=p,U.spotLength=S,U.rectAreaLength=b,U.hemiLength=y,U.numSunShadows=d,U.numDirectionalShadows=E,U.numPointShadows=T,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=R,n.version=Jg++)}function c(u,o){let f=0,h=0,g=0,d=0,_=0,m=0,p=o.matrixWorldInverse;for(let S=0,b=u.length;S<b;S++){let y=u[S];if(y.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(y.isSpotLight){let E=n.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),g++}else if(y.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function Iu(i){let e=new Kg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function l(h){n.push(h)}function c(h){s.push(h)}function u(){e.setup(t)}function o(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:u,setupLightsView:o,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function jg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Iu(i),e.set(s,[l])):r>=a.length?(l=new Iu(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
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
}`,t_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],i_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Pu=new qe,Tr=new I,fc=new I;function n_(i,e,t){let n=new ms,s=new Re,r=new Re,a=new mt,l=new Ea,c=new wa,u={},o=t.maxTextureSize,f={[xn]:Ut,[Ut]:xn,[Kt]:Kt},h=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Qg,fragmentShader:e_}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let d=new yt;d.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new _t(d,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let p=this.type;this.render=function(T,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Eh&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Vi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){let Z=T[D],J=Z.shadow;if(J===void 0){Ce("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ie=J.getFrameExtents();s.multiply(ie),r.copy(J.mapSize),(s.x>o||s.y>o)&&(s.x>o&&(r.x=Math.floor(o/ie.x),s.x=r.x*ie.x,J.mapSize.x=r.x),s.y>o&&(r.y=Math.floor(o/ie.y),s.y=r.y*ie.y,J.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===vs){if(Z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ti(s.x,s.y,{format:Mn,type:Ci,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new pn(s.x,s.y,di),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=Oi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=It,J.map.depthTexture.magFilter=It}else Z.isPointLight?(J.map=new Do(s.x),J.map.depthTexture=new ba(s.x,Ai)):(J.map=new ti(s.x,s.y),J.map.depthTexture=new pn(s.x,s.y,Ai)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=Oi,this.type===fr?(J.map.depthTexture.compareFunction=X?Ro:Co,J.map.depthTexture.minFilter=Dt,J.map.depthTexture.magFilter=Dt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=It,J.map.depthTexture.magFilter=It);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,v);for(let te=0;te<Q;te++){let Ae=J.getCamera(te);if(Z.isPointLight){let Ee=J.camera,ot=J.matrix,Ze=Z.distance||Ee.far;Ze!==Ee.far&&(Ee.far=Ze,Ee.updateProjectionMatrix()),Tr.setFromMatrixPosition(Z.matrixWorld),Ee.position.copy(Tr),fc.copy(Ee.position),fc.add(t_[te]),Ee.up.copy(i_[te]),Ee.lookAt(fc),Ee.updateMatrixWorld(),ot.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Pu.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Pu,Ee.coordinateSystem,Ee.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,te),i.clear();else{te===0&&(i.setRenderTarget(J.map),i.clear());let Ee=J.getViewport(te);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),O.viewport(a)}n=J.getFrustum(te),y(C,v,Ae,Z,this.type)}J.isPointLightShadow!==!0&&this.type===vs&&S(J,v),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,U)};function S(T,C){let v=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new ti(s.x,s.y,{format:Mn,type:Ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,v,g,_,null)}function b(T,C,v,w){let R=null,U=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=v.isPointLight===!0?c:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=R.uuid,V=C.uuid,D=u[O];D===void 0&&(D={},u[O]=D);let H=D[V];H===void 0&&(H=R.clone(),D[V]=H,C.addEventListener("dispose",E)),R=H}if(R.visible=C.visible,R.wireframe=C.wireframe,w===vs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=v}return R}function y(T,C,v,w,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===vs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let V=e.update(T),D=T.material;if(Array.isArray(D)){let H=V.groups;for(let Z=0,J=H.length;Z<J;Z++){let ie=H[Z],X=D[ie.materialIndex];if(X&&X.visible){let Q=b(T,X,w,R);T.onBeforeShadow(i,T,C,v,V,Q,ie),i.renderBufferDirect(v,null,V,Q,T,ie),T.onAfterShadow(i,T,C,v,V,Q,ie)}}}else if(D.visible){let H=b(T,D,w,R);T.onBeforeShadow(i,T,C,v,V,H,null),i.renderBufferDirect(v,null,V,H,T,null),T.onAfterShadow(i,T,C,v,V,H,null)}}let O=T.children;for(let V=0,D=O.length;V<D;V++)y(O[V],C,v,w,R)}function E(T){T.target.removeEventListener("dispose",E);for(let v in u){let w=u[v],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function s_(i,e){function t(){let L=!1,oe=new mt,$=null,le=new mt(0,0,0,0);return{setMask:function(fe){$!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ee,we,Se,ct){ct===!0&&(fe*=Se,ee*=Se,we*=Se),oe.set(fe,ee,we,Se),le.equals(oe)===!1&&(i.clearColor(fe,ee,we,Se),le.copy(oe))},reset:function(){L=!1,$=null,le.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,$=null,le=null,fe=null;return{setReversed:function(ee){if(oe!==ee){let we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;let Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return oe},setTest:function(ee){ee?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ee){$!==ee&&!L&&(i.depthMask(ee),$=ee)},setFunc:function(ee){if(oe&&(ee=au[ee]),le!==ee){switch(ee){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){L=ee},setClear:function(ee){fe!==ee&&(fe=ee,oe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){L=!1,$=null,le=null,fe=null,oe=!1}}}function s(){let L=!1,oe=null,$=null,le=null,fe=null,ee=null,we=null,Se=null,ct=null;return{setTest:function(Qe){L||(Qe?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!L&&(i.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,gi,Li){($!==Qe||le!==gi||fe!==Li)&&(i.stencilFunc(Qe,gi,Li),$=Qe,le=gi,fe=Li)},setOp:function(Qe,gi,Li){(ee!==Qe||we!==gi||Se!==Li)&&(i.stencilOp(Qe,gi,Li),ee=Qe,we=gi,Se=Li)},setLocked:function(Qe){L=Qe},setClear:function(Qe){ct!==Qe&&(i.clearStencil(Qe),ct=Qe)},reset:function(){L=!1,oe=null,$=null,le=null,fe=null,ee=null,we=null,Se=null,ct=null}}}let r=new t,a=new n,l=new s,c=new WeakMap,u=new WeakMap,o={},f={},h={},g=new WeakMap,d=[],_=null,m=!1,p=null,S=null,b=null,y=null,E=null,T=null,C=null,v=new Oe(0,0,0),w=0,R=!1,U=null,O=null,V=null,D=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ie=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=ie>=2);let Q=null,te={},Ae=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ot=new mt().fromArray(Ae),Ze=new mt().fromArray(Ee);function Ke(L,oe,$,le){let fe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<$;we++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ee}let q={};q[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),j(i.DEPTH_TEST),a.setFunc(ls),We(!1),pt(Nl),j(i.CULL_FACE),$e(Vi);function j(L){o[L]!==!0&&(i.enable(L),o[L]=!0)}function xe(L){o[L]!==!1&&(i.disable(L),o[L]=!1)}function Ne(L,oe){return h[L]!==oe?(i.bindFramebuffer(L,oe),h[L]=oe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ge(L,oe){let $=d,le=!1;if(L){$=g.get(oe),$===void 0&&($=[],g.set(oe,$));let fe=L.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,we=fe.length;ee<we;ee++)$[ee]=i.COLOR_ATTACHMENT0+ee;$.length=fe.length,le=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,le=!0);le&&i.drawBuffers($)}function ze(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let bt={[Dn]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[Ch]:i.FUNC_REVERSE_SUBTRACT};bt[Rh]=i.MIN,bt[Ih]=i.MAX;let He={[Ph]:i.ZERO,[Lh]:i.ONE,[Dh]:i.SRC_COLOR,[Bl]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Fh]:i.DST_COLOR,[Uh]:i.DST_ALPHA,[Nh]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(L,oe,$,le,fe,ee,we,Se,ct,Qe){if(L===Vi){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),L!==wh){if(L!==p||Qe!==R){if((S!==Dn||E!==Dn)&&(i.blendEquation(i.FUNC_ADD),S=Dn,E=Dn),Qe)switch(L){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",L);break}else switch(L){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",L);break}b=null,y=null,T=null,C=null,v.set(0,0,0),w=0,p=L,R=Qe}return}fe=fe||oe,ee=ee||$,we=we||le,(oe!==S||fe!==E)&&(i.blendEquationSeparate(bt[oe],bt[fe]),S=oe,E=fe),($!==b||le!==y||ee!==T||we!==C)&&(i.blendFuncSeparate(He[$],He[le],He[ee],He[we]),b=$,y=le,T=ee,C=we),(Se.equals(v)===!1||ct!==w)&&(i.blendColor(Se.r,Se.g,Se.b,ct),v.copy(Se),w=ct),p=L,R=!1}function lt(L,oe){L.side===Kt?xe(i.CULL_FACE):j(i.CULL_FACE);let $=L.side===Ut;oe&&($=!$),We($),L.blending===Ss&&L.transparent===!1?$e(Vi):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;l.setTest(le),le&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ei(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function pt(L){L!==bh?(j(i.CULL_FACE),L!==O&&(L===Nl?i.cullFace(i.BACK):L===Th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),O=L}function Ct(L){L!==V&&(J&&i.lineWidth(L),V=L)}function ei(L,oe,$){L?(j(i.POLYGON_OFFSET_FILL),(D!==oe||H!==$)&&(D=oe,H=$,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,$))):xe(i.POLYGON_OFFSET_FILL)}function gt(L){L?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function vt(L){L===void 0&&(L=i.TEXTURE0+Z-1),Q!==L&&(i.activeTexture(L),Q=L)}function N(L,oe,$){$===void 0&&(Q===null?$=i.TEXTURE0+Z-1:$=Q);let le=te[$];le===void 0&&(le={type:void 0,texture:void 0},te[$]=le),(le.type!==L||le.texture!==oe)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(L,oe||q[L]),le.type=L,le.texture=oe)}function Bt(){let L=te[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ne(){try{i.texStorage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function se(){try{i.texStorage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function K(){try{i.texImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function re(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function be(L,oe){f[L]!==oe&&(i.pixelStorei(L,oe),f[L]=oe)}function ce(L){ot.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function ae(L){Ze.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ze.copy(L))}function Te(L,oe){let $=u.get(oe);$===void 0&&($=new WeakMap,u.set(oe,$));let le=$.get(L);le===void 0&&(le=i.getUniformBlockIndex(oe,L.name),$.set(L,le))}function Ie(L,oe){let le=u.get(oe).get(L);c.get(oe)!==le&&(i.uniformBlockBinding(oe,le,L.__bindingPointIndex),c.set(oe,le))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),o={},f={},Q=null,te={},h={},g=new WeakMap,d=[],_=null,m=!1,p=null,S=null,b=null,y=null,E=null,T=null,C=null,v=new Oe(0,0,0),w=0,R=!1,U=null,O=null,V=null,D=null,H=null,ot.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:j,disable:xe,bindFramebuffer:Ne,drawBuffers:ge,useProgram:ze,setBlending:$e,setMaterial:lt,setFlipSided:We,setCullFace:pt,setLineWidth:Ct,setPolygonOffset:ei,setScissorTest:gt,activeTexture:vt,bindTexture:N,unbindTexture:Bt,compressedTexImage2D:it,compressedTexImage3D:A,texImage2D:Y,texImage3D:K,pixelStorei:be,getParameter:re,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:ne,texStorage3D:se,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ce,viewport:ae,reset:Fe}}function r_(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Re,o=new WeakMap,f=new Set,h,g=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return d?new OffscreenCanvas(A,x):Ws("canvas")}function m(A,x,F){let z=1,W=it(A);if((W.width>F||W.height>F)&&(z=F/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ne=Math.floor(z*W.width),se=Math.floor(z*W.height);h===void 0&&(h=_(ne,se));let Y=x?_(ne,se):h;return Y.width=ne,Y.height=se,Y.getContext("2d").drawImage(A,0,0,ne,se),Ce("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ne+"x"+se+")."),Y}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,F,z,W,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&se&&(Y=se.R16_EXT),F===i.SHORT&&se&&(Y=se.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),x===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&se&&(Y=se.RG16_EXT),F===i.SHORT&&se&&(Y=se.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&se&&(Y=se.RGB16_EXT),F===i.SHORT&&se&&(Y=se.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let K=ne?Gs:Xe.getTransfer(W);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=K===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&se&&(Y=se.RGBA16_EXT),F===i.SHORT&&se&&(Y=se.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(A,x){let F;return A?x===null||x===Ai||x===bs?F=i.DEPTH24_STENCIL8:x===di?F=i.DEPTH32F_STENCIL8:x===Ms&&(F=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===bs?F=i.DEPTH_COMPONENT24:x===di?F=i.DEPTH_COMPONENT32F:x===Ms&&(F=i.DEPTH_COMPONENT16),F}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==Dt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&o.delete(x),x.isHTMLTexture&&f.delete(x)}function v(A){let x=A.target;x.removeEventListener("dispose",v),U(x)}function w(A){let x=n.get(A);if(x.__webglInit===void 0)return;let F=A.source,z=g.get(F);if(z){let W=z[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(A),Object.keys(z).length===0&&g.delete(F)}n.remove(A)}function R(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let F=A.source,z=g.get(F);delete z[x.__cacheKey],a.memory.textures--}function U(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let W=0;W<x.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(x.__webglFramebuffer[z][W]);else i.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)i.deleteFramebuffer(x.__webglFramebuffer[z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=A.textures;for(let z=0,W=F.length;z<W;z++){let ne=n.get(F[z]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(F[z])}n.remove(A)}let O=0;function V(){O=0}function D(){return O}function H(A){O=A}function Z(){let A=O;return A>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ie(A,x){let F=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let z=A.image;if(z===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function X(A,x){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){xe(F,A,x);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Q(A,x){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){xe(F,A,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function te(A,x){let F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Ne(F,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let Ae={[ma]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},Ee={[It]:i.NEAREST,[qh]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[vn]:i.LINEAR_MIPMAP_LINEAR},ot={[$h]:i.NEVER,[tu]:i.ALWAYS,[Kh]:i.LESS,[Co]:i.LEQUAL,[jh]:i.EQUAL,[Ro]:i.GEQUAL,[Qh]:i.GREATER,[eu]:i.NOTEQUAL};function Ze(A,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Dt||x.magFilter===Ha||x.magFilter===mr||x.magFilter===vn||x.minFilter===Dt||x.minFilter===Ha||x.minFilter===mr||x.minFilter===vn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ee[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ee[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==mr&&x.minFilter!==vn||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ke(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let z=x.source,W=g.get(z);W===void 0&&(W={},g.set(z,W));let ne=J(x);if(ne!==A.__cacheKey){W[ne]===void 0&&(W[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[ne].usedTimes++;let se=W[A.__cacheKey];se!==void 0&&(W[A.__cacheKey].usedTimes--,se.usedTimes===0&&R(x)),A.__cacheKey=ne,A.__webglTexture=W[ne].texture}return F}function q(A,x,F){return Math.floor(Math.floor(A/F)/x)}function j(A,x,F,z){let ne=A.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,z,x.data);else{ne.sort((be,ce)=>be.start-ce.start);let se=0;for(let be=1;be<ne.length;be++){let ce=ne[se],ae=ne[be],Te=ce.start+ce.count,Ie=q(ae.start,x.width,4),Fe=q(ce.start,x.width,4);ae.start<=Te+1&&Ie===Fe&&q(ae.start+ae.count-1,x.width,4)===Ie?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ne[se]=ae)}ne.length=se+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let be=0,ce=ne.length;be<ce;be++){let ae=ne[be],Te=Math.floor(ae.start/4),Ie=Math.ceil(ae.count/4),Fe=Te%x.width,L=Math.floor(Te/x.width),oe=Ie,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Fe,L,oe,$,F,z,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function xe(A,x,F){let z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=i.TEXTURE_3D);let W=Ke(A,x),ne=x.source;t.bindTexture(z,A.__webglTexture,i.TEXTURE0+F);let se=n.get(ne);if(ne.version!==se.__version||W===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let $=Xe.getPrimaries(Xe.workingColorSpace),le=x.colorSpace===Qi?null:Xe.getPrimaries(x.colorSpace),fe=x.colorSpace===Qi||$===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,s.maxTextureSize);K=Bt(x,K);let re=r.convert(x.format,x.colorSpace),be=r.convert(x.type),ce=y(x.internalFormat,re,be,x.normalized,x.colorSpace,x.isVideoTexture);Ze(z,x);let ae,Te=x.mipmaps,Ie=x.isVideoTexture!==!0,Fe=se.__version===void 0||W===!0,L=ne.dataReady,oe=T(x,K);if(x.isDepthTexture)ce=E(x.format===Sn,x.type),Fe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,ce,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ce,K.width,K.height,0,re,be,null));else if(x.isDataTexture)if(Te.length>0){Ie&&Fe&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Te[0].width,Te[0].height);for(let $=0,le=Te.length;$<le;$++)ae=Te[$],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,be,ae.data):t.texImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,re,be,ae.data);x.generateMipmaps=!1}else Ie?(Fe&&t.texStorage2D(i.TEXTURE_2D,oe,ce,K.width,K.height),L&&j(x,K,re,be)):t.texImage2D(i.TEXTURE_2D,0,ce,K.width,K.height,0,re,be,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,Te[0].width,Te[0].height,K.depth);for(let $=0,le=Te.length;$<le;$++)if(ae=Te[$],x.format!==fi)if(re!==null)if(Ie){if(L)if(x.layerUpdates.size>0){let fe=oc(ae.width,ae.height,x.format,x.type);for(let ee of x.layerUpdates){let we=ae.data.subarray(ee*fe/ae.data.BYTES_PER_ELEMENT,(ee+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ee,ae.width,ae.height,1,re,we)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,K.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ce,ae.width,ae.height,K.depth,0,ae.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,K.depth,re,be,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ce,ae.width,ae.height,K.depth,0,re,be,ae.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ie&&Fe&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Te[0].width,Te[0].height);for(let $=0,le=Te.length;$<le;$++)ae=Te[$],x.format!==fi?re!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,be,ae.data):t.texImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,re,be,ae.data)}else if(x.isDataArrayTexture)if(Ie){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,K.width,K.height,K.depth),L)if(x.layerUpdates.size>0){let $=oc(K.width,K.height,x.format,x.type);for(let le of x.layerUpdates){let fe=K.data.subarray(le*$/K.data.BYTES_PER_ELEMENT,(le+1)*$/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,K.width,K.height,1,re,be,fe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,re,be,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,K.width,K.height,K.depth,0,re,be,K.data);else if(x.isData3DTexture)Ie?(Fe&&t.texStorage3D(i.TEXTURE_3D,oe,ce,K.width,K.height,K.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,re,be,K.data)):t.texImage3D(i.TEXTURE_3D,0,ce,K.width,K.height,K.depth,0,re,be,K.data);else if(x.isFramebufferTexture){if(Fe)if(Ie)t.texStorage2D(i.TEXTURE_2D,oe,ce,K.width,K.height);else{let $=K.width,le=K.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,ce,$,le,0,re,be,null),$>>=1,le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),f.add(x),$.onpaint=le=>{let fe=le.changedElements;for(let ee of f)fe.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let fe=i.RGBA,ee=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ee,we,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ie&&Fe){let $=it(Te[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,$.width,$.height)}for(let $=0,le=Te.length;$<le;$++)ae=Te[$],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,re,be,ae):t.texImage2D(i.TEXTURE_2D,$,ce,re,be,ae);x.generateMipmaps=!1}else if(Ie){if(Fe){let $=it(K);t.texStorage2D(i.TEXTURE_2D,oe,ce,$.width,$.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,be,K)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,be,K);p(x)&&S(z),se.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ne(A,x,F){if(x.image.length!==6)return;let z=Ke(A,x),W=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let ne=n.get(W);if(W.version!==ne.__version||z===!0){t.activeTexture(i.TEXTURE0+F);let se=Xe.getPrimaries(Xe.workingColorSpace),Y=x.colorSpace===Qi?null:Xe.getPrimaries(x.colorSpace),K=x.colorSpace===Qi||se===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let re=x.isCompressedTexture||x.image[0].isCompressedTexture,be=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!re&&!be?ce[ee]=m(x.image[ee],!0,s.maxCubemapSize):ce[ee]=be?x.image[ee].image:x.image[ee],ce[ee]=Bt(x,ce[ee]);let ae=ce[0],Te=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),Fe=y(x.internalFormat,Te,Ie,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,oe=ne.__version===void 0||z===!0,$=W.dataReady,le=T(x,ae);Ze(i.TEXTURE_CUBE_MAP,x);let fe;if(re){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Fe,ae.width,ae.height);for(let ee=0;ee<6;ee++){fe=ce[ee].mipmaps;for(let we=0;we<fe.length;we++){let Se=fe[we];x.format!==fi?Te!==null?L?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Fe,Se.width,Se.height,0,Se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Se.width,Se.height,Te,Ie,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Fe,Se.width,Se.height,0,Te,Ie,Se.data)}}}else{if(fe=x.mipmaps,L&&oe){fe.length>0&&le++;let ee=it(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Te,Ie,ce[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,ce[ee].width,ce[ee].height,0,Te,Ie,ce[ee].data);for(let we=0;we<fe.length;we++){let ct=fe[we].image[ee].image;L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,ct.width,ct.height,Te,Ie,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Fe,ct.width,ct.height,0,Te,Ie,ct.data)}}else{L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,Ie,ce[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,Te,Ie,ce[ee]);for(let we=0;we<fe.length;we++){let Se=fe[we];L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Te,Ie,Se.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Fe,Te,Ie,Se.image[ee])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),ne.__version=W.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ge(A,x,F,z,W,ne){let se=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),K=y(F.internalFormat,se,Y,F.normalized,F.colorSpace),re=n.get(x),be=n.get(F);if(be.__renderTarget=x,!re.__hasExternalTextures){let ce=Math.max(1,x.width>>ne),ae=Math.max(1,x.height>>ne);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ne,K,ce,ae,x.depth,0,se,Y,null):t.texImage2D(W,ne,K,ce,ae,0,se,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,be.__webglTexture,0,gt(x)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,be.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let z=x.depthTexture,W=z&&z.isDepthTexture?z.type:null,ne=E(x.stencilBuffer,W),se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(x),ne,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,A)}else{let z=x.textures;for(let W=0;W<z.length;W++){let ne=z[W],se=r.convert(ne.format,ne.colorSpace),Y=r.convert(ne.type),K=y(ne.internalFormat,se,Y,ne.normalized,ne.colorSpace);vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(x),K,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(A,x,F){let z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(x.depthTexture);if(W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,x.depthTexture);let re=r.convert(x.depthTexture.format),be=r.convert(x.depthTexture.type),ce;x.depthTexture.format===Oi?ce=i.DEPTH_COMPONENT24:x.depthTexture.format===Sn&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,x.width,x.height,0,re,be,null)}}else ie(x.depthTexture,0);let ne=W.__webglTexture,se=gt(x),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,K=x.depthTexture.format===Sn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Oi)vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,ne,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,ne,0);else if(x.depthTexture.format===Sn)vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,ne,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(A){let x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){let W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)bt(x.__webglFramebuffer[z],A,z);else{let z=A.texture.mipmaps;z&&z.length>0?bt(x.__webglFramebuffer[0],A,0):bt(x.__webglFramebuffer,A,0)}else if(F){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=i.createRenderbuffer(),ze(x.__webglDepthbuffer[z],A,!1);else{let W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ne)}}else{let z=A.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ze(x.__webglDepthbuffer,A,!1);else{let W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(A,x,F){let z=n.get(A);x!==void 0&&ge(z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&He(A)}function lt(A){let x=A.texture,F=n.get(A),z=n.get(x);A.addEventListener("dispose",v);let W=A.textures,ne=A.isWebGLCubeRenderTarget===!0,se=W.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=x.version,a.memory.textures++),ne){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)F.__webglFramebuffer[Y][K]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(se)for(let Y=0,K=W.length;Y<K;Y++){let re=n.get(W[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let K=W[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let re=r.convert(K.format,K.colorSpace),be=r.convert(K.type),ce=y(K.internalFormat,re,be,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),ae=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)ge(F.__webglFramebuffer[Y][K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else ge(F.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Y=0,K=W.length;Y<K;Y++){let re=W[Y],be=n.get(re),ce=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,be.__webglTexture),Ze(ce,re),ge(F.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+Y,ce,0),p(re)&&S(ce)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),Ze(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)ge(F.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,Y,K);else ge(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&S(Y),t.unbindTexture()}A.depthBuffer&&He(A)}function We(A){let x=A.textures;for(let F=0,z=x.length;F<z;F++){let W=x[F];if(p(W)){let ne=b(A),se=n.get(W).__webglTexture;t.bindTexture(ne,se),S(ne),t.unbindTexture()}}}let pt=[],Ct=[];function ei(A){if(A.samples>0){if(vt(A)===!1){let x=A.textures,F=A.width,z=A.height,W=i.COLOR_BUFFER_BIT,ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(A),Y=x.length>1;if(Y)for(let re=0;re<x.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<x.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let be=n.get(x[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,F,z,0,0,F,z,W,i.NEAREST),c===!0&&(pt.length=0,Ct.length=0,pt.push(i.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pt.push(ne),Ct.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<x.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let be=n.get(x[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function gt(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){let x=a.render.frame;o.get(A)!==x&&(o.set(A,x),A.update())}function Bt(A,x){let F=A.colorSpace,z=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Hs&&F!==Qi&&(Xe.getTransfer(F)===tt?(z!==fi||W!==ii)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),x}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=$e,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ei,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a_(i,e){function t(n,s=Qi){let r,a=Xe.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return i.BYTE;if(n===$l)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===ec)return i.RGB;if(n===fi)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Sn)return i.DEPTH_STENCIL;if(n===qa)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===Mn)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===yr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ka||n===ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===io||n===no||n===so||n===vr||n===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===to)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===no)return r.COMPRESSED_R11_EAC;if(n===so)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vr)return r.COMPRESSED_RG11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===yo||n===vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===Mo||n===bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Eo||n===Sr||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`,Sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,u=null,o=null,f=null,h=null,g=null,d=null,_=typeof XRWebGLBinding<"u",m=new Sc,p={},S=t.getContextAttributes(),b=null,y=null,E=[],T=[],C=new Re,v=null,w=null,R=new Ht;R.viewport=new mt;let U=new Ht;U.viewport=new mt;let O=[R,U],V=new ka,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=E[q];return j===void 0&&(j=new ps,E[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=E[q];return j===void 0&&(j=new ps,E[q]=j),j.getGripSpace()},this.getHand=function(q){let j=E[q];return j===void 0&&(j=new ps,E[q]=j),j.getHandSpace()};function Z(q){let j=T.indexOf(q.inputSource);if(j===-1)return;let xe=E[j];xe!==void 0&&(xe.update(q.inputSource,q.frame,u||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<E.length;q++){let j=T[q];j!==null&&(T[q]=null,E[q].disconnect(j))}D=null,H=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(b),g=null,h=null,f=null,s=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ne=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?Sn:Oi,Ne=S.stencil?bs:Ai);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ti(h.textureWidth,h.textureHeight,{format:fi,type:ii,depthTexture:new pn(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new ti(g.framebufferWidth,g.framebufferHeight,{format:fi,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(l),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(q){for(let j=0;j<q.removed.length;j++){let xe=q.removed[j],Ne=T.indexOf(xe);Ne>=0&&(T[Ne]=null,E[Ne].disconnect(xe))}for(let j=0;j<q.added.length;j++){let xe=q.added[j],Ne=T.indexOf(xe);if(Ne===-1){for(let ze=0;ze<E.length;ze++)if(ze>=T.length){T.push(xe),Ne=ze;break}else if(T[ze]===null){T[ze]=xe,Ne=ze;break}if(Ne===-1)break}let ge=E[Ne];ge&&ge.connect(xe)}}let X=new I,Q=new I;function te(q,j,xe){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let Ne=X.distanceTo(Q),ge=j.projectionMatrix.elements,ze=xe.projectionMatrix.elements,bt=ge[14]/(ge[10]-1),He=ge[14]/(ge[10]+1),$e=(ge[9]+1)/ge[5],lt=(ge[9]-1)/ge[5],We=(ge[8]-1)/ge[0],pt=(ze[8]+1)/ze[0],Ct=bt*We,ei=bt*pt,gt=Ne/(-We+pt),vt=gt*-We;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(vt),q.translateZ(gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let N=bt+gt,Bt=He+gt,it=Ct-vt,A=ei+(Ne-vt),x=$e*He/Bt*N,F=lt*He/Bt*N;q.projectionMatrix.makePerspective(it,A,x,F,N,Bt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ae(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,xe=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),V.near=U.near=R.near=j,V.far=U.far=R.far=xe,(D!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,H=V.far),V.layers.mask=q.layers.mask|6,R.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Ne=q.parent,ge=V.cameras;Ae(V,Ne);for(let ze=0;ze<ge.length;ze++)Ae(ge[ze],Ne);ge.length===2?te(V,R,U):V.projectionMatrix.copy(R.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),Ee(q,V,Ne)};function Ee(q,j,xe){xe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=us*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(q){return p[q]};let ot=null;function Ze(q,j){if(o=j.getViewerPose(u||a),d=j,o!==null){let xe=o.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let Ne=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,Ne=!0);for(let He=0;He<xe.length;He++){let $e=xe[He],lt=null;if(g!==null)lt=g.getViewport($e);else{let pt=f.getViewSubImage(h,$e);lt=pt.viewport,He===0&&(e.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(y))}let We=O[He];We===void 0&&(We=new Ht,We.layers.enable(He),We.viewport=new mt,O[He]=We),We.matrix.fromArray($e.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray($e.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),He===0&&(V.matrix.copy(We.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ne===!0&&V.cameras.push(We)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let He=f.getDepthInformation(xe[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let He=0;He<xe.length;He++){let $e=xe[He].camera;if($e){let lt=p[$e];lt||(lt=new Qs,p[$e]=lt);let We=f.getCameraImage($e);lt.sourceTexture=We}}}}for(let xe=0;xe<E.length;xe++){let Ne=T[xe],ge=E[xe];Ne!==null&&ge!==void 0&&ge.update(Ne,j,u||a)}ot&&ot(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),d=null}let Ke=new Lu;Ke.setAnimationLoop(Ze),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}},c_=new qe,Bu=new De;Bu.set(-1,0,0,0,1,0,0,0,1);function h_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&g(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,S,b):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u_(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){let T=E.program;n.uniformBlockBinding(y,T)}function u(y,E){let T=s[y.id];T===void 0&&(m(y),T=o(y),s[y.id]=T,y.addEventListener("dispose",S));let C=E.program;n.updateUBOMapping(y,C);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function o(y){let E=f();y.__bindingPointIndex=E;let T=i.createBuffer(),C=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function f(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],T=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,w=T.length;v<w;v++){let R=T[v];if(Array.isArray(R))for(let U=0,O=R.length;U<O;U++)g(R[U],v,U,C);else g(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,E,T,C){if(_(y,E,T,C)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let U=0;U<w.length;U++){let O=w[U],V=p(O);d(O,y.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function d(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function _(y,E,T,C){let v=y.value,w=E+"_"+T;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{let R=C[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(y){let E=y.uniforms,T=0,C=16;for(let w=0,R=E.length;w<R;w++){let U=Array.isArray(E[w])?E[w]:[E[w]];for(let O=0,V=U.length;O<V;O++){let D=U[O],H=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,J=H.length;Z<J;Z++){let ie=H[Z],X=p(ie),Q=T%C,te=Q%X.boundary,Ae=Q+te;T+=te,Ae!==0&&C-Ae<X.storage&&(T+=C-Ae),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=X.storage}}}let v=T%C;return v>0&&(T+=C-v),y.__size=T,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),E}function S(y){let E=y.target;E.removeEventListener("dispose",S);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:u,dispose:b}}var d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function f_(){return Hi===null&&(Hi=new Js(d_,16,16,Mn,Ci),Hi.name="DFG_LUT",Hi.minFilter=Dt,Hi.magFilter=Dt,Hi.wrapS=Ui,Hi.wrapT=Ui,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var No=class{constructor(e={}){let{canvas:t=nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:g=ii}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let _=g,m=new Set([Ja,Za,Ya]),p=new Set([ii,Ai,Ms,bs,Wa,Xa]),S=new Uint32Array(4),b=new Int32Array(4),y=new I,E=null,T=null,C=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,O=null,V=null,D=null,H=null;this._outputColorSpace=Lt;let Z=0,J=0,ie=null,X=-1,Q=null,te=new mt,Ae=new mt,Ee=null,ot=new Oe(0),Ze=0,Ke=t.width,q=t.height,j=1,xe=null,Ne=null,ge=new mt(0,0,Ke,q),ze=new mt(0,0,Ke,q),bt=!1,He=new ms,$e=!1,lt=!1,We=new qe,pt=new I,Ct=new mt,ei={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function vt(){return ie===null?j:1}let N=n;function Bt(M,P){return t.getContext(M,P)}let it,A,x,F,z,W,ne,se,Y,K,re,be,ce,ae,Te,Ie,Fe,L,oe,$,le,fe,ee;try{let M={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:o,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",gi,!1),N===null){let P="webgl2";if(N=Bt(P,M),N===null)throw Bt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(M){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),Pe("WebGLRenderer: "+M.message),M}function we(){it=new v0(N),it.init(),le=new a_(N,it),A=new h0(N,it,e,le),x=new s_(N,it),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),V=N.createFramebuffer(),D=N.createFramebuffer(),H=N.createFramebuffer(),F=new b0(N),z=new Wg,W=new r_(N,it,x,z,A,le,F),ne=new y0(R),se=new Ef(N),fe=new l0(N,se),Y=new S0(N,se,F,fe),K=new E0(N,Y,se,fe,F),L=new T0(N,A,W),Te=new u0(z),re=new Gg(R,ne,it,A,fe,Te),be=new h_(R,z),ce=new qg,ae=new jg(it),Fe=new o0(R,ne,x,K,d,c),Ie=new n_(R,K,A),ee=new u_(N,F,A,x),oe=new c0(N,it,F),$=new M0(N,it,F),F.programs=re.programs,R.capabilities=A,R.extensions=it,R.properties=z,R.renderLists=ce,R.shadowMap=Ie,R.state=x,R.info=F}_!==ii&&(w=new A0(_,t.width,t.height,l,s,r));let Se=new Mc(R,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(Ke,q,!1))},this.getSize=function(M){return M.set(Ke,q)},this.setSize=function(M,P,G=!0){if(Se.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=M,q=P,t.width=Math.floor(M*j),t.height=Math.floor(P*j),G===!0&&(t.style.width=M+"px",t.style.height=P+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(Ke*j,q*j).floor()},this.setDrawingBufferSize=function(M,P,G){Ke=M,q=P,j=G,t.width=Math.floor(M*G),t.height=Math.floor(P*G),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(_===ii){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,P,G,B){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,P,G,B),x.viewport(te.copy(ge).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,P,G,B){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,P,G,B),x.scissor(Ae.copy(ze).multiplyScalar(j).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(M){x.setScissorTest(bt=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){Ne=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,G=!0){let B=0;if(M){let k=!1;if(ie!==null){let de=ie.texture.format;k=m.has(de)}if(k){let de=ie.texture.type,_e=p.has(de),ue=Fe.getClearColor(),ye=Fe.getClearAlpha(),Me=ue.r,Be=ue.g,Ge=ue.b;_e?(S[0]=Me,S[1]=Be,S[2]=Ge,S[3]=ye,N.clearBufferuiv(N.COLOR,0,S)):(b[0]=Me,b[1]=Be,b[2]=Ge,b[3]=ye,N.clearBufferiv(N.COLOR,0,b))}else B|=N.COLOR_BUFFER_BIT}P&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),Fe.dispose(),ce.dispose(),ae.dispose(),z.dispose(),ne.dispose(),K.dispose(),fe.dispose(),ee.dispose(),re.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Bc),Se.removeEventListener("sessionend",kc),wn.stop()};function ct(M){M.preventDefault(),ic("WebGLRenderer: Context Lost."),U=!0}function Qe(){ic("WebGLRenderer: Context Restored."),U=!1;let M=F.autoReset,P=Ie.enabled,G=Ie.autoUpdate,B=Ie.needsUpdate,k=Ie.type;we(),F.autoReset=M,Ie.enabled=P,Ie.autoUpdate=G,Ie.needsUpdate=B,Ie.type=k}function gi(M){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Li(M){let P=M.target;P.removeEventListener("dispose",Li),yd(P)}function yd(M){vd(M),z.remove(M)}function vd(M){let P=z.get(M).programs;P!==void 0&&(P.forEach(function(G){re.releaseProgram(G)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,G,B,k,de){P===null&&(P=ei);let _e=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=bd(M,P,G,B,k);x.setMaterial(B,_e);let ye=G.index,Me=1;if(B.wireframe===!0){if(ye=Y.getWireframeAttribute(G),ye===void 0)return;Me=2}let Be=G.drawRange,Ge=G.attributes.position,ve=Be.start*Me,et=(Be.start+Be.count)*Me;de!==null&&(ve=Math.max(ve,de.start*Me),et=Math.min(et,(de.start+de.count)*Me)),ye!==null?(ve=Math.max(ve,0),et=Math.min(et,ye.count)):Ge!=null&&(ve=Math.max(ve,0),et=Math.min(et,Ge.count));let St=et-ve;if(St<0||St===1/0)return;fe.setup(k,B,ue,G,ye);let ut,at=oe;if(ye!==null&&(ut=se.get(ye),at=$,at.setIndex(ut)),k.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*vt()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(k.isLine){let kt=B.linewidth;kt===void 0&&(kt=1),x.setLineWidth(kt*vt()),k.isLineSegments?at.setMode(N.LINES):k.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else k.isPoints?at.setMode(N.POINTS):k.isSprite&&at.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(it.get("WEBGL_multi_draw"))at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let kt=k._multiDrawStarts,me=k._multiDrawCounts,Xt=k._multiDrawCount,Je=ye?se.get(ye).bytesPerElement:1,hi=z.get(B).currentProgram.getUniforms();for(let Di=0;Di<Xt;Di++)hi.setValue(N,"_gl_DrawID",Di),at.render(kt[Di]/Je,me[Di])}else if(k.isInstancedMesh)at.renderInstances(ve,St,k.count);else if(G.isInstancedBufferGeometry){let kt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,me=Math.min(G.instanceCount,kt);at.renderInstances(ve,St,me)}else at.render(ve,St)};function Fc(M,P,G,B){O!==null&&M.isNodeMaterial&&O.setObject(B,M),$e===!0&&Te.setState(M,G,!1),M.transparent===!0&&M.side===Kt&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,Fr(M,P,B),M.side=xn,M.needsUpdate=!0,Fr(M,P,B),M.side=Kt):Fr(M,P,B)}this.compile=function(M,P,G=null){G===null&&(G=M),O!==null&&O.renderStart(M,P,G),T=ae.get(G),T.init(P),v.push(T),G.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),M!==G&&M.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),lt=this.localClippingEnabled,$e=Te.init(this.clippingPlanes,lt),$e===!0&&Te.setGlobalState(this.clippingPlanes,P),O!==null&&Ie.render(T.state.shadowsArray,G,P);let B=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){let ue=de[_e];Fc(ue,G,P,k),B.add(ue)}else Fc(de,G,P,k),B.add(de)}),T=v.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(M,P,G=null){let B=this.compile(M,P,G);return new Promise(k=>{function de(){if(B.forEach(function(_e){let ye=z.get(_e).currentProgram;(ye===void 0||ye.isReady())&&B.delete(_e)}),B.size===0){k(M);return}setTimeout(de,10)}it.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let il=null;function Sd(M){il&&il(M)}function Bc(){wn.stop()}function kc(){wn.start()}let wn=new Lu;wn.setAnimationLoop(Sd),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(M){il=M,Se.setAnimationLoop(M),M===null?wn.stop():wn.start()},Se.addEventListener("sessionstart",Bc),Se.addEventListener("sessionend",kc),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(M,P);let G=Se.enabled===!0&&Se.isPresenting===!0,B=w!==null&&(ie===null||G)&&w.begin(R,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(P),P=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,P,ie),T=ae.get(M,v.length),T.init(P),T.state.textureUnits=W.getTextureUnits(),v.push(T),We.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),He.setFromProjectionMatrix(We,vi,P.reversedDepth),lt=this.localClippingEnabled,$e=Te.init(this.clippingPlanes,lt),E=ce.get(M,C.length),E.init(),C.push(E),Se.enabled===!0&&Se.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&nl(_e,P,-1/0,R.sortObjects)}nl(M,P,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(xe,Ne),gt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,gt&&Fe.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Te.beginShadows();let k=T.state.shadowsArray;if(Ie.render(k,M,P),$e===!0&&Te.endShadows(),(B&&w.hasRenderPass())===!1){let _e=E.opaque,ue=E.transmissive;if(T.setupLights(),P.isArrayCamera){let ye=P.cameras;if(ue.length>0)for(let Me=0,Be=ye.length;Me<Be;Me++){let Ge=ye[Me];Vc(_e,ue,M,Ge)}gt&&Fe.render(M);for(let Me=0,Be=ye.length;Me<Be;Me++){let Ge=ye[Me];zc(E,M,Ge,Ge.viewport)}}else ue.length>0&&Vc(_e,ue,M,P),gt&&Fe.render(M),zc(E,M,P)}ie!==null&&J===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),B&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,P),fe.resetDefaultState(),X=-1,Q=null,v.pop(),v.length>0?(T=v[v.length-1],W.setTextureUnits(T.state.textureUnits),$e===!0&&Te.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,O!==null&&O.renderEnd()};function nl(M,P,G,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(He)){B&&Ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(We);let _e=K.update(M),ue=M.material;ue.visible&&E.push(M,_e,ue,G,Ct.z,null,P)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(He))){let _e=K.update(M),ue=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ct.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ct.copy(_e.boundingSphere.center)),Ct.applyMatrix4(M.matrixWorld).applyMatrix4(We)),Array.isArray(ue)){let ye=_e.groups;for(let Me=0,Be=ye.length;Me<Be;Me++){let Ge=ye[Me],ve=ue[Ge.materialIndex];ve&&ve.visible&&E.push(M,_e,ve,G,Ct.z,Ge,P)}}else ue.visible&&E.push(M,_e,ue,G,Ct.z,null,P)}}let de=M.children;for(let _e=0,ue=de.length;_e<ue;_e++)nl(de[_e],P,G,B)}function zc(M,P,G,B){let{opaque:k,transmissive:de,transparent:_e}=M;T.setupLightsView(G),$e===!0&&Te.setGlobalState(R.clippingPlanes,G),B&&x.viewport(te.copy(B)),k.length>0&&Or(k,P,G),de.length>0&&Or(de,P,G),_e.length>0&&Or(_e,P,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Vc(M,P,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let ve=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new ti(1,1,{generateMipmaps:!0,type:ve?Ci:ii,minFilter:vn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let de=T.state.transmissionRenderTarget[B.id],_e=B.viewport||te;de.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),ye=R.getActiveCubeFace(),Me=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(ot),Ze=R.getClearAlpha(),Ze<1&&R.setClearColor(16777215,.5),R.clear(),gt&&Fe.render(G);let Be=R.toneMapping;R.toneMapping=wi;let Ge=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),$e===!0&&Te.setGlobalState(R.clippingPlanes,B),Or(M,G,B),W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de),it.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let et=0,St=P.length;et<St;et++){let ut=P[et],{object:at,geometry:kt,material:me,group:Xt}=ut;if(me.side===Kt&&at.layers.test(B.layers)){let Je=me.side;me.side=Ut,me.needsUpdate=!0,Hc(at,G,B,kt,me,Xt),me.side=Je,me.needsUpdate=!0,ve=!0}}ve===!0&&(W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de))}R.setRenderTarget(ue,ye,Me),R.setClearColor(ot,Ze),Ge!==void 0&&(B.viewport=Ge),R.toneMapping=Be}function Or(M,P,G){let B=P.isScene===!0?P.overrideMaterial:null;for(let k=0,de=M.length;k<de;k++){let _e=M[k],{object:ue,geometry:ye,group:Me}=_e,Be=_e.material;Be.allowOverride===!0&&B!==null&&(Be=B),ue.layers.test(G.layers)&&Hc(ue,P,G,ye,Be,Me)}}function Hc(M,P,G,B,k,de){O!==null&&k.isNodeMaterial&&O.setObject(M,k),M.onBeforeRender(R,P,G,B,k,de),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(R,P,G,B,M,de),k.transparent===!0&&k.side===Kt&&k.forceSinglePass===!1?(k.side=Ut,k.needsUpdate=!0,R.renderBufferDirect(G,P,B,k,M,de),k.side=xn,k.needsUpdate=!0,R.renderBufferDirect(G,P,B,k,M,de),k.side=Kt):R.renderBufferDirect(G,P,B,k,M,de),M.onAfterRender(R,P,G,B,k,de)}function Fr(M,P,G){P.isScene!==!0&&(P=ei);let B=z.get(M),k=T.state.lights,de=T.state.shadowsArray,_e=k.state.version,ue=re.getParameters(M,k.state,de,P,G,T.state.lightProbeGridArray),ye=re.getProgramCacheKey(ue),Me=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Be=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=ne.get(M.envMap||B.environment,Be),B.envMapRotation=B.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",Li),Me=new Map,B.programs=Me);let Ge=Me.get(ye);if(Ge!==void 0){if(B.currentProgram===Ge&&B.lightsStateVersion===_e)return Wc(M,ue),Ge}else ue.uniforms=re.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,G,ue),M.onBeforeCompile(ue,R),Ge=re.acquireProgram(ue,ye),Me.set(ye,Ge),B.uniforms=ue.uniforms;let ve=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ve.clippingPlanes=Te.uniform),Wc(M,ue),B.needsLights=Ed(M),B.lightsStateVersion=_e,B.needsLights&&(ve.ambientLightColor.value=k.state.ambient,ve.lightProbe.value=k.state.probe,ve.sunLights.value=k.state.sun,ve.sunLightShadows.value=k.state.sunShadow,ve.directionalLights.value=k.state.directional,ve.directionalLightShadows.value=k.state.directionalShadow,ve.spotLights.value=k.state.spot,ve.spotLightShadows.value=k.state.spotShadow,ve.rectAreaLights.value=k.state.rectArea,ve.ltc_1.value=k.state.rectAreaLTC1,ve.ltc_2.value=k.state.rectAreaLTC2,ve.pointLights.value=k.state.point,ve.pointLightShadows.value=k.state.pointShadow,ve.hemisphereLights.value=k.state.hemi,ve.sunShadowMatrix.value=k.state.sunShadowMatrix,ve.sunShadowCascade.value=k.state.sunShadowCascade,ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ve.spotLightMatrix.value=k.state.spotLightMatrix,ve.spotLightMap.value=k.state.spotLightMap,ve.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Ge,B.uniformsList=null,Ge}function Gc(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Wc(M,P){let G=z.get(M);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Md(M,P){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let G=0,B=M.length;G<B;G++){let k=M[G];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function bd(M,P,G,B,k){P.isScene!==!0&&(P=ei),W.resetTextureUnits();let de=P.fog,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ue=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Me=ne.get(B.envMap||_e,ye),Be=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ve=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,St=!!G.morphAttributes.color,ut=wi;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ut=R.toneMapping);let at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,kt=at!==void 0?at.length:0,me=z.get(B),Xt=T.state.lights;if($e===!0&&(lt===!0||M!==Q)){let ht=M===Q&&B.id===X;Te.setState(B,M,ht)}let Je=!1;B.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Xt.state.version||me.outputColorSpace!==ue||k.isBatchedMesh&&me.batching===!1||!k.isBatchedMesh&&me.batching===!0||k.isBatchedMesh&&me.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&me.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&me.instancing===!1||!k.isInstancedMesh&&me.instancing===!0||k.isSkinnedMesh&&me.skinning===!1||!k.isSkinnedMesh&&me.skinning===!0||k.isInstancedMesh&&me.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&me.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&me.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&me.instancingMorph===!1&&k.morphTexture!==null||me.envMap!==Me||B.fog===!0&&me.fog!==de||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Te.numPlanes||me.numIntersection!==Te.numIntersection)||me.vertexAlphas!==Be||me.vertexTangents!==Ge||me.morphTargets!==ve||me.morphNormals!==et||me.morphColors!==St||me.toneMapping!==ut||me.morphTargetsCount!==kt||!!me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,me.__version=B.version);let hi=me.currentProgram;Je===!0&&(hi=Fr(B,P,k),O&&B.isNodeMaterial&&O.onUpdateProgram(B,hi,me));let Di=!1,nn=!1,Wn=!1,st=hi.getUniforms(),xt=me.uniforms;if(x.useProgram(hi.program)&&(Di=!0,nn=!0,Wn=!0),B.id!==X&&(X=B.id,nn=!0),me.needsLights){let ht=Md(T.state.lightProbeGridArray,k);me.lightProbeGrid!==ht&&(me.lightProbeGrid=ht,nn=!0)}if(Di||Q!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",M.projectionMatrix),st.setValue(N,"viewMatrix",M.matrixWorldInverse);let rn=st.map.cameraPosition;rn!==void 0&&rn.setValue(N,pt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,nn=!0,Wn=!0)}if(me.needsLights&&(Xt.state.sunShadowMap.length>0&&st.setValue(N,"sunShadowMap",Xt.state.sunShadowMap,W),Xt.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",Xt.state.directionalShadowMap,W),Xt.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",Xt.state.spotShadowMap,W),Xt.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",Xt.state.pointShadowMap,W)),k.isSkinnedMesh){st.setOptional(N,k,"bindMatrix"),st.setOptional(N,k,"bindMatrixInverse");let ht=k.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),st.setValue(N,"boneTexture",ht.boneTexture,W))}k.isBatchedMesh&&(st.setOptional(N,k,"batchingTexture"),st.setValue(N,"batchingTexture",k._matricesTexture,W),st.setOptional(N,k,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",k._indirectTexture,W),st.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",k._colorsTexture,W));let sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&L.update(k,G,hi),(nn||me.receiveShadow!==k.receiveShadow)&&(me.receiveShadow=k.receiveShadow,st.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(xt.envMapIntensity.value=P.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=f_()),nn){if(st.setValue(N,"toneMappingExposure",R.toneMappingExposure),me.needsLights&&Td(xt,Wn),de&&B.fog===!0&&be.refreshFogUniforms(xt,de),be.refreshMaterialUniforms(xt,B,j,q,T.state.transmissionRenderTarget[M.id]),me.needsLights&&me.lightProbeGrid){let ht=me.lightProbeGrid;xt.probesSH.value=ht.texture,xt.probesMin.value.copy(ht.boundingBox.min),xt.probesMax.value.copy(ht.boundingBox.max),xt.probesResolution.value.copy(ht.resolution)}Cs.upload(N,Gc(me),xt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cs.upload(N,Gc(me),xt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(N,"center",k.center),st.setValue(N,"modelViewMatrix",k.modelViewMatrix),st.setValue(N,"normalMatrix",k.normalMatrix),st.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let ht=B.uniformsGroups;for(let rn=0,Xn=ht.length;rn<Xn;rn++){let qc=ht[rn];ee.update(qc,hi),ee.bind(qc,hi)}}return hi}function Td(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Ed(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,P,G){let B=z.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(M.texture).__webglTexture=P,z.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){let G=z.get(M);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,G=0){ie=M,Z=P,J=G;let B=null,k=!1,de=!1;if(M){let ue=z.get(M);if(ue.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(M.viewport),Ae.copy(M.scissor),Ee=M.scissorTest,x.viewport(te),x.scissor(Ae),x.setScissorTest(Ee),X=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(M);else if(ue.__hasExternalTextures)W.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Be=M.depthTexture;if(ue.__boundDepthTexture!==Be){if(Be!==null&&z.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(M)}}let ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let Me=z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Me[P])?B=Me[P][G]:B=Me[P],k=!0):M.samples>0&&W.useMultisampledRTT(M)===!1?B=z.get(M).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[G]:B=Me,te.copy(M.viewport),Ae.copy(M.scissor),Ee=M.scissorTest}else te.copy(ge).multiplyScalar(j).floor(),Ae.copy(ze).multiplyScalar(j).floor(),Ee=bt;if(G!==0&&(B=V),x.bindFramebuffer(N.FRAMEBUFFER,B)&&x.drawBuffers(M,B),x.viewport(te),x.scissor(Ae),x.setScissorTest(Ee),k){let ue=z.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,G)}else if(de){let ue=P;for(let ye=0;ye<M.textures.length;ye++){let Me=z.get(M.textures[ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ye,Me.__webglTexture,G,ue)}}else if(M!==null&&G!==0){let ue=z.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,G)}X=-1};function Xc(M){let P=z.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=A.textureFormatReadable(M.format),P.__typeReadable=A.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,G,B,k,de,_e,ue=0){if(!(M&&M.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){x.bindFramebuffer(N.FRAMEBUFFER,ye);try{let Me=M.textures[ue],Be=Me.format,Ge=Me.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let ve=Xc(Me);if(ve.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&G>=0&&G<=M.height-k&&N.readPixels(P,G,B,k,le.convert(Be),le.convert(Ge),de)}finally{let Me=ie!==null?z.get(ie).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(M,P,G,B,k,de,_e,ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(P>=0&&P<=M.width-B&&G>=0&&G<=M.height-k){x.bindFramebuffer(N.FRAMEBUFFER,ye);let Me=M.textures[ue],Be=Me.format,Ge=Me.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let ve=Xc(Me);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(P,G,B,k,le.convert(Be),le.convert(Ge),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let St=ie!==null?z.get(ie).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,St);let ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ru(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(et),N.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,G=0){let B=Math.pow(2,-G),k=Math.floor(M.image.width*B),de=Math.floor(M.image.height*B),_e=P!==null?P.x:0,ue=P!==null?P.y:0;W.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,_e,ue,k,de),x.unbindTexture()},this.copyTextureToTexture=function(M,P,G=null,B=null,k=0,de=0){let _e,ue,ye,Me,Be,Ge,ve,et,St,ut=M.isCompressedTexture?M.mipmaps[de]:M.image;if(G!==null)_e=G.max.x-G.min.x,ue=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,Be=G.min.y,Ge=G.isBox3?G.min.z:0;else{let xt=Math.pow(2,-k);_e=Math.floor(ut.width*xt),ue=Math.floor(ut.height*xt),M.isDataArrayTexture?ye=ut.depth:M.isData3DTexture?ye=Math.floor(ut.depth*xt):ye=1,Me=0,Be=0,Ge=0}B!==null?(ve=B.x,et=B.y,St=B.z):(ve=0,et=0,St=0);let at=le.convert(P.format),kt=le.convert(P.type),me;P.isData3DTexture?(W.setTexture3D(P,0),me=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),me=N.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),me=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Xt=x.getParameter(N.UNPACK_ROW_LENGTH),Je=x.getParameter(N.UNPACK_IMAGE_HEIGHT),hi=x.getParameter(N.UNPACK_SKIP_PIXELS),Di=x.getParameter(N.UNPACK_SKIP_ROWS),nn=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),x.pixelStorei(N.UNPACK_SKIP_ROWS,Be),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);let Wn=M.isDataArrayTexture||M.isData3DTexture,st=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){let xt=z.get(M),sn=z.get(P),ht=z.get(xt.__renderTarget),rn=z.get(sn.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,ht.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let Xn=0;Xn<ye;Xn++)Wn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(M).__webglTexture,k,Ge+Xn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(P).__webglTexture,de,St+Xn)),N.blitFramebuffer(Me,Be,_e,ue,ve,et,_e,ue,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||z.has(M)){let xt=z.get(M),sn=z.get(P);x.bindFramebuffer(N.READ_FRAMEBUFFER,D),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let ht=0;ht<ye;ht++)Wn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,k,Ge+ht):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,k),st?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,de,St+ht):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,de),k!==0?N.blitFramebuffer(Me,Be,_e,ue,ve,et,_e,ue,N.COLOR_BUFFER_BIT,N.NEAREST):st?N.copyTexSubImage3D(me,de,ve,et,St+ht,Me,Be,_e,ue):N.copyTexSubImage2D(me,de,ve,et,Me,Be,_e,ue);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(me,de,ve,et,St,_e,ue,ye,at,kt,ut.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(me,de,ve,et,St,_e,ue,ye,at,ut.data):N.texSubImage3D(me,de,ve,et,St,_e,ue,ye,at,kt,ut):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,ve,et,_e,ue,at,kt,ut.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,ve,et,ut.width,ut.height,at,ut.data):N.texSubImage2D(N.TEXTURE_2D,de,ve,et,_e,ue,at,kt,ut);x.pixelStorei(N.UNPACK_ROW_LENGTH,Xt),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),x.pixelStorei(N.UNPACK_SKIP_PIXELS,hi),x.pixelStorei(N.UNPACK_SKIP_ROWS,Di),x.pixelStorei(N.UNPACK_SKIP_IMAGES,nn),de===0&&P.generateMipmaps&&N.generateMipmap(me),x.unbindTexture()},this.initRenderTarget=function(M){z.get(M).__webglFramebuffer===void 0&&W.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?W.setTextureCube(M,0):M.isData3DTexture?W.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?W.setTexture2DArray(M,0):W.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){Z=0,J=0,ie=null,x.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var Ye=[{name:"Stone Age",evolveXP:400,baseHp:500,baseStyle:"cave",theme:{bg:"39 35% 90%",fg:"25 15% 20%",accent:"18 60% 55%"},special:{name:"Meteor Shower",cooldown:60,duration:4,type:"meteor"},units:[{name:"Clubman",desc:"Cheap melee screen. Takes half damage from siege shots.",cost:15,hp:30,dmg:8,range:40,speed:50,type:"melee",size:45,attackSpeed:1.2,killXp:5,killGold:10},{name:"Slinger",desc:"Basic ranged support.",cost:25,hp:20,dmg:5,range:250,speed:45,type:"ranged",size:40,attackSpeed:1.5,projType:"arc",projSpeed:400,killXp:8,killGold:15},{name:"Dino Rider",desc:"Heavy pushing power.",cost:100,hp:150,dmg:35,range:50,speed:70,type:"heavy",size:80,attackSpeed:2,killXp:30,killGold:50}],turrets:[{name:"Rock Thrower",desc:"A simple defensive rock flinger.",cost:100,dmg:10,range:350,attackSpeed:1.5,projType:"arc",projSpeed:350},{name:"Egg Slingshot",desc:"Fires volatile dino eggs.",cost:200,dmg:25,range:400,attackSpeed:2,projType:"arc",projSpeed:400},{name:"Fire Beryl",desc:"Spits concentrated fireballs.",cost:400,dmg:50,range:450,attackSpeed:2.5,projType:"arc",projSpeed:450}]},{name:"Castle Age",evolveXP:1400,baseHp:1500,baseStyle:"castle",theme:{bg:"45 25% 85%",fg:"220 20% 25%",accent:"200 60% 45%"},special:{name:"Arrow Volley",cooldown:60,duration:3,type:"arrows"},units:[{name:"Swordsman",desc:"Armored infantry. Takes half damage from siege shots.",cost:50,hp:120,dmg:25,range:45,speed:55,type:"melee",size:50,attackSpeed:1,killXp:15,killGold:25},{name:"Archer",desc:"Sharp-eyed ranged combatant.",cost:75,hp:70,dmg:20,range:300,speed:50,type:"ranged",size:45,attackSpeed:1.2,projType:"arc",projSpeed:500,killXp:20,killGold:35},{name:"Knight",desc:"Mounted terror of the battlefield.",cost:250,hp:400,dmg:55,range:60,speed:80,type:"heavy",size:90,attackSpeed:1.5,killXp:70,killGold:100}],turrets:[{name:"Catapult",desc:"Lobs heavy stones at attackers.",cost:500,dmg:40,range:450,attackSpeed:1.5,projType:"arc",projSpeed:400},{name:"Ballista",desc:"Fires massive piercing bolts.",cost:750,dmg:80,range:500,attackSpeed:2.5,projType:"straight",projSpeed:800},{name:"Hot Oil",desc:"Boiling defense for close range.",cost:1e3,dmg:150,range:300,attackSpeed:3,projType:"arc",projSpeed:300}]},{name:"Renaissance",evolveXP:4500,baseHp:4e3,baseStyle:"fort",theme:{bg:"30 20% 88%",fg:"10 30% 25%",accent:"0 50% 50%"},special:{name:"Cannon Barrage",cooldown:60,duration:4,type:"cannons"},units:[{name:"Halberdier",desc:"Long-reaching infantry. Takes half damage from siege shots.",cost:200,hp:400,dmg:80,range:65,speed:50,type:"melee",size:50,attackSpeed:1.2,killXp:40,killGold:60},{name:"Musketeer",desc:"Deadly black powder marksman.",cost:300,hp:250,dmg:100,range:400,speed:45,type:"ranged",size:45,attackSpeed:2,projType:"straight",projSpeed:1200,killXp:50,killGold:80},{name:"Field Cannon",splashRadius:65,siegeMultiplier:2,desc:"Siege gun: 2x base damage; splashes two nearby troops at 35%.",cost:900,hp:1e3,dmg:250,range:450,speed:30,type:"ranged",size:75,attackSpeed:3,projType:"arc",projSpeed:600,killXp:150,killGold:300}],turrets:[{name:"Swivel Gun",desc:"Fast firing anti-infantry gun.",cost:1500,dmg:100,range:450,attackSpeed:1,projType:"straight",projSpeed:1200},{name:"Heavy Cannon",desc:"Slow firing massive damage.",cost:2500,dmg:250,range:500,attackSpeed:2.5,projType:"arc",projSpeed:700},{name:"Mortar",desc:"Extreme range plunging fire.",cost:4e3,dmg:500,range:600,attackSpeed:4,projType:"arc",projSpeed:500}]},{name:"Modern Age",evolveXP:15e3,baseHp:12e3,baseStyle:"bunker",theme:{bg:"120 10% 85%",fg:"120 20% 20%",accent:"30 70% 50%"},special:{name:"Airstrike",cooldown:60,duration:5,type:"airstrike"},units:[{name:"Infantry",desc:"Trench fighter. Takes half damage from siege shots.",cost:1500,hp:1200,dmg:250,range:50,speed:60,type:"melee",size:50,attackSpeed:.8,killXp:200,killGold:300},{name:"Marine",desc:"Rapid-fire assault troops.",cost:2e3,hp:800,dmg:130,range:400,speed:55,type:"ranged",size:45,attackSpeed:.65,projType:"straight",projSpeed:1800,killXp:250,killGold:400},{name:"Tank",splashRadius:80,siegeMultiplier:2,desc:"Armored siege: 2x base damage; splashes two nearby troops at 35%.",cost:6500,hp:4500,dmg:800,range:350,speed:40,type:"heavy",size:110,attackSpeed:2.5,projType:"straight",projSpeed:1e3,killXp:800,killGold:1200}],turrets:[{name:"Machine Gun",desc:"Shreds lightly armored units.",cost:6e3,dmg:80,range:500,attackSpeed:.15,projType:"straight",projSpeed:2e3},{name:"Rocket Pod",desc:"Fires armor piercing missiles.",cost:9e3,dmg:600,range:550,attackSpeed:2,projType:"straight",projSpeed:800},{name:"Artillery",desc:"Long range explosive barrage.",cost:15e3,dmg:1500,range:700,attackSpeed:3.5,projType:"arc",projSpeed:800}]},{name:"Future Age",evolveXP:5e4,baseHp:4e4,baseStyle:"dome",theme:{bg:"210 30% 25%",fg:"210 60% 85%",accent:"180 80% 60%"},special:{name:"Orbital Laser",cooldown:60,duration:4,type:"laser"},units:[{name:"Energy Blade",desc:"Cyber swordsman. Takes half damage from siege shots.",cost:5e3,hp:5e3,dmg:1e3,range:60,speed:70,type:"melee",size:55,attackSpeed:1,killXp:800,killGold:1e3},{name:"Blaster",desc:"Fires concentrated energy beams.",cost:7e3,hp:3e3,dmg:600,range:420,speed:60,type:"ranged",size:50,attackSpeed:.8,projType:"laser",projSpeed:3e3,killXp:1e3,killGold:1500},{name:"War Mech",splashRadius:90,siegeMultiplier:2,desc:"Siege beams: 2x base damage; splashes two nearby troops at 35%.",cost:2e4,hp:15e3,dmg:3e3,range:400,speed:45,type:"heavy",size:130,attackSpeed:2,projType:"laser",projSpeed:3e3,killXp:3e3,killGold:4e3}],turrets:[{name:"Laser Gatling",desc:"Unending beam of light.",cost:2e4,dmg:300,range:550,attackSpeed:.2,projType:"laser",projSpeed:3e3},{name:"Ion Cannon",desc:"Heavy anti-armor blasts.",cost:4e4,dmg:2500,range:600,attackSpeed:2,projType:"laser",projSpeed:3e3},{name:"Plasma Ray",desc:"Melts organic matter.",cost:8e4,dmg:6e3,range:800,attackSpeed:3,projType:"arc",projSpeed:1200}]},{name:"Cosmic Age",evolveXP:9999999,baseHp:15e4,baseStyle:"portal",theme:{bg:"260 40% 10%",fg:"280 50% 80%",accent:"300 80% 60%"},special:{name:"Void Rift",cooldown:70,duration:5,type:"orbital"},units:[{name:"Hover Drone",desc:"Swift hunter. Takes half damage from siege shots.",cost:15e3,hp:14e3,dmg:2400,range:70,speed:85,type:"melee",size:60,attackSpeed:1,killXp:2e3,killGold:3e3},{name:"Void Ray",desc:"Channels antimatter.",cost:2e4,hp:8e3,dmg:2400,range:500,speed:70,type:"ranged",size:55,attackSpeed:1,projType:"laser",projSpeed:4e3,killXp:3e3,killGold:4500},{name:"Mothership",splashRadius:140,siegeMultiplier:2,desc:"Siege orbs: 2x base damage; splashes two nearby troops at 35%.",cost:65e3,hp:5e4,dmg:8e3,range:550,speed:35,type:"heavy",size:160,attackSpeed:3,projType:"orb",projSpeed:600,killXp:1e4,killGold:15e3}],turrets:[{name:"Plasma Rep.",cost:5e4,dmg:1200,range:600,attackSpeed:.3,projType:"laser",projSpeed:4e3},{name:"Black Hole",cost:1e5,dmg:6e3,range:650,attackSpeed:2.5,projType:"orb",projSpeed:500},{name:"Antimatter",cost:2e5,dmg:2e4,range:900,attackSpeed:4,projType:"laser",projSpeed:5e3}]}];function ku(i){i&&typeof i=="object"&&(Object.values(i).forEach(ku),Object.freeze(i))}ku(Ye);var wr="2.0.0";var Pt=.016666666666666666,Le=1280,en=720,ft=600,pe=180,zu=80,bn=[500,1500,3500,8e3,18e3,35e3,75e3,15e4,35e4,75e4],Vu=[5,12,35,200,700,1800],pi=Object.freeze({normal:{name:"Normal",color:"hsl(var(--diff-normal))",hpMult:1,dmgMult:1,econMult:1,xpMult:1,baseGold:175,baseHpMult:1,thinkRate:1.8,aiAggression:.35},hard:{name:"Hard",color:"hsl(var(--diff-hard))",hpMult:1.2,dmgMult:1.1,econMult:1.4,xpMult:1.2,baseGold:250,baseHpMult:1.2,thinkRate:1.15,aiAggression:.58},harder:{name:"Harder",color:"hsl(var(--diff-harder))",hpMult:1.5,dmgMult:1.3,econMult:2,xpMult:1.5,baseGold:500,baseHpMult:1.5,thinkRate:.65,aiAggression:.82},impossible:{name:"Impossible",color:"hsl(var(--diff-impossible))",hpMult:2,dmgMult:1.5,econMult:4,xpMult:2.5,baseGold:1500,baseHpMult:2,thinkRate:.28,aiAggression:1}});function Ot(i,e){return e===1?i.player:i.enemy}function Fn(i,e,t){return(1+Ot(i,e).upgrades[t]*{dmg:.15,hp:.25,econ:.2}[t])*(e===-1?pi[i.difficulty][`${t}Mult`]:1)}function Hu(i,e){return Vu[Ot(i,e).age]*Fn(i,e,"econ")}function Gu(i){let e=i.rng>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,i.rng=e>>>0,i.rng/4294967296}function Ii(i,e,t={}){i.events.push({tick:i.tick,type:e,...t})}function Wu({seed:i=1,difficulty:e="normal",startAge:t=0,opponent:n=!0}={}){if(!Number.isInteger(i)||i<0||i>4294967295)throw new Error("seed must be a uint32");if(!Object.hasOwn(pi,e))throw new Error("Unknown difficulty");if(!Number.isInteger(t)||t<0||t>=Ye.length)throw new Error("Invalid startAge");if(typeof n!="boolean")throw new Error("opponent must be boolean");let s=pi[e],r=a=>{let l=Ye[t].baseHp*(a===-1?s.baseHpMult:1);return{hp:l,maxHp:l,age:t,gold:(a===-1?s.baseGold:175)*Ye[t].units[0].cost/15,xp:t?Ye[t-1].evolveXP:0,upgrades:{dmg:0,hp:0,econ:0},turrets:[null,null,null,null],turretProgress:[1,1,1,1],turretTimers:[0,0,0,0],unlockedSlots:1,specialTimer:0,drawProgress:1,deployTimer:0,rng:(i||1)>>>0}};return{version:wr,seed:i,difficulty:e,tick:0,nextId:1,running:!0,paused:!1,winner:null,player:r(1),enemy:r(-1),units:[],projectiles:[],specials:[],events:[],agreements:{noSpecials:!1,noTurrets:!1,meleeOnly:!1},restraintUntil:0,opponent:{enabled:n,nextTick:Math.round(.8*60),order:"balanced",lastAction:"",emotion:"Centered"},metrics:{firstContactTick:null,kills:{1:0,"-1":0},spent:{1:0,"-1":0},damage:{1:0,"-1":0},spawned:{1:0,"-1":0},peakUnits:0,evolutions:[]}}}function Tn(i,e,t){if(e!==1&&e!==-1)return"invalid-team";if(!t||typeof t!="object"||Array.isArray(t))return"invalid-command";if(!i.running)return"match-ended";if(i.paused)return"paused";let n=Ot(i,e),s=Ye[n.age],r=e===-1?i.agreements:{};if(n.drawProgress<1)return"base-drawing";switch(t.type){case"unit":return!Number.isInteger(t.index)||!s.units[t.index]?"invalid-unit":r.meleeOnly&&s.units[t.index].type==="ranged"?"pact":e===-1&&i.tick<i.restraintUntil?"truce":n.deployTimer>0?"deploying":i.units.some(a=>a.team===e&&a.range<=s.units[t.index].range&&Math.abs(a.x-(e===1?pe:Le-pe))<(a.size+s.units[t.index].size)/2+10)?"deployment-blocked":i.units.filter(a=>a.team===e).length>=zu?"unit-cap":n.gold<s.units[t.index].cost?"gold":null;case"turret":return!Number.isInteger(t.index)||!s.turrets[t.index]?"invalid-turret":r.noTurrets?"pact":n.turrets.slice(0,n.unlockedSlots).includes(null)?n.gold<s.turrets[t.index].cost?"gold":null:"slots-full";case"sell":return n.turrets.some(a=>a!==null)?null:"no-turret";case"slot":return n.unlockedSlots>=4?"slots-full":n.gold<n.unlockedSlots*500?"gold":null;case"upgrade":return["hp","dmg","econ"].includes(t.stat)?n.upgrades[t.stat]>=bn.length?"max-upgrade":n.gold<bn[n.upgrades[t.stat]]?"gold":null:"invalid-upgrade";case"evolve":return n.age>=Ye.length-1?"max-age":n.xp<s.evolveXP?"xp":null;case"special":return r.noSpecials?"pact":e===-1&&i.tick<i.restraintUntil?"truce":n.specialTimer>0?"cooldown":null;default:return"unknown-command"}}function Ar(i,e,t){let n=Tn(i,e,t);if(n)return{ok:!1,error:n};let s=Ot(i,e),r=Ye[s.age],a=l=>{s.gold-=l,i.metrics.spent[e]+=l};switch(t.type){case"unit":{let l=r.units[t.index],c=l.hp*Fn(i,e,"hp");a(l.cost),s.deployTimer=.4;let u={...l,id:i.nextId++,team:e,age:s.age,uType:t.index,x:e===1?pe:Le-pe,y:ft,hp:c,maxHp:c,attackCooldown:0,drawProgress:0,active:!0,isAttacking:!1,moving:!0,animTimer:0,animOffset:i.nextId*17%100};i.units.push(u),i.metrics.spawned[e]++,Ii(i,"spawn",{team:e,id:u.id,index:t.index,x:u.x,y:u.y,size:u.size});break}case"turret":{let l=s.turrets.findIndex((c,u)=>c===null&&u<s.unlockedSlots);a(r.turrets[t.index].cost),s.turrets[l]=t.index,s.turretProgress[l]=0,s.turretTimers[l]=0;break}case"sell":{let l=s.turrets.findLastIndex(c=>c!==null);s.gold+=r.turrets[s.turrets[l]].cost*.5,s.turrets[l]=null,s.turretTimers[l]=0;break}case"slot":a(s.unlockedSlots*500),s.unlockedSlots++;break;case"upgrade":{a(bn[s.upgrades[t.stat]]),s.upgrades[t.stat]++,t.stat==="hp"&&Xu(i,e);break}case"evolve":s.age++,s.drawProgress=0,Xu(i,e),s.gold+=s.turrets.reduce((l,c)=>l+(c===null?0:r.turrets[c].cost*.5),0),s.turrets.fill(null),s.turretTimers.fill(0),s.turretProgress.fill(1),i.metrics.evolutions.push({tick:i.tick,team:e,age:s.age}),Ii(i,"evolve",{team:e,age:s.age});break;case"special":{s.specialTimer=r.special.cooldown;let l=i.units.filter(f=>f.team!==e),c=s.age===4?150:300,o=l.map(f=>({x:f.x,value:l.filter(h=>Math.abs(h.x-f.x)<c).reduce((h,g)=>h+g.cost,0)})).sort((f,h)=>h.value-f.value||(f.x-h.x)*e)[0]?.x??(e===1?Le-300:300);i.specials.push({id:i.nextId++,team:e,age:s.age,x:o,remaining:Math.round(r.special.duration*60),nextPulse:0}),Ii(i,"special",{team:e,age:s.age});break}}return Ii(i,"command",{team:e,command:{...t}}),{ok:!0}}function Xu(i,e){let t=Ot(i,e),n=Ye[t.age].baseHp*Fn(i,e,"hp")*(e===-1?pi[i.difficulty].baseHpMult:1);t.hp+=n-t.maxHp,t.maxHp=n}var Rr=i=>i===1?pe:Le-pe,Cr=(i,e)=>Math.round(Math.abs(i-e)*1e6)/1e6,p_=(i,e)=>Math.max(0,(e.x-i.x)*i.team-(i.size+e.size)/2);function qu(i){let e=[],t=[],n=[];for(let r of[1,-1]){let a=i.units.filter(o=>o.team===r).sort((o,f)=>(f.x-o.x)*r||o.id-f.id),l=i.units.filter(o=>o.team!==r&&o.drawProgress>=.8).sort((o,f)=>(o.x-f.x)*r||o.id-f.id),c=null;for(let o of a){if(o.attackCooldown=Math.max(0,o.attackCooldown-Pt),o.animTimer=Math.max(0,o.animTimer-Pt),o.drawProgress<1){o.drawProgress=Math.min(1,o.drawProgress+Pt*2),c=o;continue}let f=l.find(d=>(d.x-o.x)*r>=-(o.size+d.size)/2),h=!f,g=f?p_(o,f):Math.max(0,(Rr(-r)-o.x)*r-o.size/2);if(o.isAttacking=g<=o.range+1e-6,o.moving=!o.isAttacking,o.isAttacking){if(o.siegeMultiplier&&!h){let d=Math.min(o.speed*Pt*.35,Math.max(0,g-20));d>0&&(t.push([o,o.x+r*d]),o.moving=!0)}if(i.metrics.firstContactTick===null&&(i.metrics.firstContactTick=i.tick),o.attackCooldown<=1e-9){o.attackCooldown=o.attackSpeed,o.animTimer=.3;let d=o.dmg*Fn(i,r,"dmg");o.projType?n.push({x:o.x,y:o.y-o.size*.7,targetX:f?f.x:Rr(-r),targetY:f?f.y-f.size/2:ft-40,type:o.projType,speed:o.projSpeed,dmg:d*(h&&o.siegeMultiplier||1),team:r,targetId:f?.id??null,targetIsBase:h,splashRadius:o.splashRadius||0}):(e.push({team:r,targetId:f?.id??null,dmg:d}),Ii(i,"melee",{team:r,x:o.x+r*o.size/2,y:o.y-o.size/2}))}}else{let d=Math.min(o.speed*Pt,Math.max(0,g-o.range));c&&c.range<=o.range&&(d=Math.min(d,Math.max(0,(c.x-o.x)*r-(c.size+o.size)/2-10))),t.push([o,Math.max(pe,Math.min(Le-pe,o.x+r*d))]),o.moving=d>0}c=o}let u=Ot(i,r);for(let o=0;o<u.unlockedSlots;o++){if(u.turretTimers[o]=Math.max(0,u.turretTimers[o]-Pt),u.turrets[o]===null||u.turretProgress[o]<1||u.turretTimers[o]>1e-9)continue;let f=Ye[u.age].turrets[u.turrets[o]],h=Rr(r)-r*10,g=l.find(d=>Math.abs(d.x-h)<=f.range+1e-6);g&&(n.push({x:h,y:ft-150-o*90,targetX:g.x,targetY:g.y-g.size/2,type:f.projType,speed:f.projSpeed,dmg:f.dmg*Fn(i,r,"dmg"),team:r,targetId:g.id,targetIsBase:!1}),u.turretTimers[o]=f.attackSpeed)}}for(let[r,a]of t)r.x=Math.round(a*1e6)/1e6;for(let r of n)Yu(i,r);g_(i,e),m_(i,e);for(let r of e){let a=r.targetId===null?Ot(i,-r.team):i.units.find(l=>l.id===r.targetId);a&&(i.metrics.damage[r.team]+=Math.min(Math.max(0,a.hp),r.dmg),a.hp-=r.dmg,Ii(i,"damage",{team:r.team,targetId:r.targetId,amount:r.dmg,x:a.x??Rr(-r.team),y:a.y?a.y-a.size/2:ft-100}))}let s=pi[i.difficulty];for(let r of i.units){if(r.hp>0)continue;let a=Ot(i,-r.team),l=Ot(i,r.team);a.gold+=r.killGold*(r.team===1?s.econMult:1),a.xp+=r.killXp*(r.team===1?s.xpMult:1),l.xp+=r.killXp*.5*(r.team===-1?s.xpMult:1),i.metrics.kills[-r.team]++,Ii(i,"death",{team:r.team,id:r.id,x:r.x,y:r.y,size:r.size,gold:r.killGold,xp:r.killXp})}i.units=i.units.filter(r=>r.hp>0),i.metrics.peakUnits=Math.max(i.metrics.peakUnits,i.units.length),(i.player.hp<=0||i.enemy.hp<=0)&&(i.player.hp=Math.max(0,i.player.hp),i.enemy.hp=Math.max(0,i.enemy.hp),i.winner=i.player.hp===0&&i.enemy.hp===0?0:i.enemy.hp===0?1:-1,i.running=!1,Ii(i,"end",{winner:i.winner}))}function Yu(i,e){let t=e.targetX-e.x,n=e.targetY-e.y,s=e.type==="laser",r=["arc","meteor","arrow","cannonball"].includes(e.type),a=s?Pt:Math.max(Pt,(r?Math.abs(t):Math.hypot(t,n))/e.speed),l=Math.max(1,Math.ceil(a*60-1e-8));i.projectiles.push({...e,id:i.nextId++,startX:e.x,startY:e.y,flightTicks:l,elapsed:0,vx:t/a,vy:n/a-(r?400*a:0),arc:r,active:!0,isSpecial:!!e.isSpecial,hit:!1,life:s?.25:0,trailX:[],trailY:[],trailCount:0})}function m_(i,e){for(let t of i.projectiles){if(t.elapsed++,t.hit){t.life-=Pt,t.active=t.life>0;continue}t.trailX.unshift(t.x),t.trailY.unshift(t.y),t.trailX.length=Math.min(10,t.trailX.length),t.trailY.length=t.trailX.length,t.trailCount=t.trailX.length;let n=Math.min(1,t.elapsed/t.flightTicks),s=t.flightTicks/60;if(t.x=t.startX+(t.targetX-t.startX)*n,t.y=t.startY+(t.targetY-t.startY)*n-(t.arc?400*s*s*n*(1-n):0),!(n<1)){if(t.isSpecial){for(let r of i.units)r.team!==t.team&&Math.abs(r.x-t.x)<t.radius&&e.push({team:t.team,targetId:r.id,dmg:t.dmg});Ii(i,"impact",{x:t.x,y:t.y,type:t.type})}else if(t.targetIsBase)e.push({team:t.team,targetId:null,dmg:t.dmg});else{let r=i.units.find(a=>a.id===t.targetId);if(r&&Cr(r.x,t.targetX)<=r.size+20){let a=t.splashRadius&&r.uType===0?t.dmg*.5:t.dmg;if(e.push({team:t.team,targetId:r.id,dmg:a}),t.splashRadius){let l=i.units.filter(c=>c.team!==t.team&&c.id!==r.id&&Cr(c.x,r.x)<t.splashRadius).sort((c,u)=>Cr(c.x,r.x)-Cr(u.x,r.x)||c.id-u.id).slice(0,2);for(let c of l)e.push({team:t.team,targetId:c.id,dmg:t.dmg*.35*(c.uType===0?.5:1)});Cr(Rr(-t.team),r.x)<t.splashRadius&&e.push({team:t.team,targetId:null,dmg:t.dmg*.35})}}}t.hit=!0,t.active=t.type==="laser"}}i.projectiles=i.projectiles.filter(t=>t.active)}function g_(i,e){for(let t of i.specials){let n=Ye[t.age].special,s=Ot(i,t.team),r=t.x;if(n.type==="laser"||n.type==="orbital"){let a=n.type==="laser"?150:300,l=(n.type==="laser"?800:2500)*Pt;for(let c of i.units)c.team!==t.team&&Math.abs(c.x-r)<a&&e.push({team:t.team,targetId:c.id,dmg:l})}else if(t.nextPulse--,t.nextPulse<=0){let a={meteor:[8,150,150,"meteor",800],arrows:[30,40,60,"arrow",1e3],cannons:[6,300,120,"cannonball",1200],airstrike:[8,400,120,"bombDrop",800]},[l,c,u,o,f]=a[n.type];t.nextPulse+=60/l;let h=pe+50+Gu(s)*(Le-pe-50),g=t.team===1?h:Le-h;Yu(i,{x:o==="bombDrop"?g:g-t.team*200,y:-50,targetX:g,targetY:ft,team:t.team,type:o,speed:f,dmg:c,radius:u,targetId:null,targetIsBase:!1,isSpecial:!0})}t.remaining--}i.specials=i.specials.filter(t=>t.remaining>0)}function bc(i,e=-1,t="adaptive"){let n=Ot(i,e),s=Ot(i,-e),r=Ye[n.age],a=i.units.filter(T=>T.team===e),l=i.units.filter(T=>T.team!==e),c=e===1?pe:Le-pe,u=l.filter(T=>Math.abs(T.x-c)<500),o=l.filter(T=>Math.abs(T.x-c)<320),f=T=>!Tn(i,e,T),h={type:"evolve"};if(f(h))return h;let g={type:"special"};if(t!=="passive"&&f(g)&&(l.length>=3||o.length>0&&n.hp<n.maxHp*.4))return g;if(t==="passive")return null;let d=[],_=(T,C)=>{f(T)?d.push({command:T,score:C}):T.type==="unit"&&T.index>0&&Tn(i,e,T)==="gold"&&o.length===0&&a.length>=1&&d.push({command:null,score:C})},m=a.filter(T=>T.type!=="ranged").length,p=a.filter(T=>T.type==="ranged").length,S=l.filter(T=>T.type==="ranged").length,b=e===-1?i.opponent.emotion.toLowerCase():"centered",y=/angry|furious|brave|confident|excited|eager/.test(b),E=/afraid|anxious|worried|scared|tense|sad|weary/.test(b);for(let T=0;T<r.units.length;T++){let C=r.units[T],v=2;t==="melee"?v+=T===0?10:-10:t==="ranged"?v+=T===1?10:-10:t==="heavy"?v+=T===2?10:-10:t==="mixed"?v+=T===i.metrics.spawned[e]%3?5:0:(C.type==="ranged"?v+=m>0?3:-.5:v+=m===0?3:0,T===2&&(v+=S>1?2:.5),T===2&&s.turrets.some(w=>w!==null)&&(v+=3),T===2&&l.length>=3&&a.filter(w=>w.uType===2).length<2&&(v+=3),y&&T===2&&(v+=.5),E&&T===0&&(v+=.5),C.type==="ranged"&&p>=Math.max(2,m*2)&&(v-=3),T===0&&m>Math.max(2,p)&&(v-=2),v+=Math.min(1,C.hp*C.dmg/C.attackSpeed/(C.cost*C.cost))),!(t==="heavy"&&T!==2&&u.length<2)&&(t==="melee"&&T!==0||t==="ranged"&&T!==1||_({type:"unit",index:T},v))}if(t==="adaptive"||t==="turtle"||t==="mixed"){if(o.length>=2||t==="turtle"){for(let T=0;T<r.turrets.length;T++)_({type:"turret",index:T},3+u.length*.7+(t==="turtle"?5:0)+T*.1);n.turrets.every((T,C)=>C>=n.unlockedSlots||T!==null)&&_({type:"slot"},t==="turtle"?6:u.length>4?4:0)}if(a.length>=1||n.gold>=r.units[2].cost*2)for(let T of["econ","dmg","hp"]){let C=n.upgrades[T],v=bn[C];n.gold>=v+r.units[0].cost*.25&&_({type:"upgrade",stat:T},T==="econ"?u.length<2?5:2:5.5)}}return d.sort((T,C)=>C.score-T.score),d[0]?.command??null}function Zu(i){if(!i.opponent.enabled||i.tick<i.opponent.nextTick)return;let e=pi[i.difficulty];i.opponent.nextTick=i.tick+Math.max(1,Math.round(e.thinkRate*60));let t=bc(i);t&&Ar(i,-1,t).ok?(i.opponent.lastAction=t.type,i.opponent.order=t.type==="turret"?"defend":t.type==="evolve"?"tech":t.type==="special"?"special":"counter"):i.opponent.order="hold"}function Ju(i){if(!i.running||i.paused)return!1;i.tick++;for(let e of[1,-1]){let t=Ot(i,e);if(t.gold+=Hu(i,e)*Pt,t.age<Ye.length-1){let n=t.age?Ye[t.age-1].evolveXP:0;t.xp+=(Ye[t.age].evolveXP-n)/110*Pt*(e===-1?pi[i.difficulty].xpMult:1)}t.specialTimer=Math.max(0,t.specialTimer-Pt),t.deployTimer=Math.max(0,t.deployTimer-Pt),t.drawProgress=Math.min(1,t.drawProgress+Pt*.3);for(let n=0;n<4;n++)t.turretProgress[n]=Math.min(1,t.turretProgress[n]+Pt*.5)}return Zu(i),qu(i),!0}function Bo(i,e,t,n){if(!Number.isSafeInteger(i)||i<e||i>t)throw new Error(`Invalid ${n}`)}function $u(i){if(!i||typeof i!="object"||Array.isArray(i))throw new Error("Invalid command");let e={unit:["index"],turret:["index"],upgrade:["stat"],sell:[],slot:[],evolve:[],special:[]};if(!Object.hasOwn(e,i.type))throw new Error("Unknown command type");if(Object.keys(i).some(t=>t!=="type"&&!e[i.type].includes(t)))throw new Error("Unknown command field");return structuredClone(i)}function ko(i){return Array.isArray(i)?`[${i.map(ko).join(",")}]`:i&&typeof i=="object"?`{${Object.keys(i).sort().map(e=>`${JSON.stringify(e)}:${ko(i[e])}`).join(",")}}`:JSON.stringify(i)}function __(i){let e=2166136261;for(let t of ko(i))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0).toString(16).padStart(8,"0")}var Bn=class i{#e;#n;#s=[];#t=new Map;constructor(e={}){if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Invalid options");if(Object.keys(e).some(t=>!["seed","difficulty","startAge","opponent"].includes(t)))throw new Error("Unknown option");this.#e=Wu(e),this.#n={seed:this.#e.seed,difficulty:this.#e.difficulty,startAge:this.#e.player.age,opponent:this.#e.opponent.enabled}}observe(){let e=structuredClone(this.#e);return e.events=[],e}get tick(){return this.#e.tick}get running(){return this.#e.running}get paused(){return this.#e.paused}get winner(){return this.#e.winner}legal(e,t){return!Tn(this.#e,e,$u(t))}decide(e=1,t="adaptive"){if(![1,-1].includes(e)||!["adaptive","mixed","melee","ranged","heavy","turtle","passive"].includes(t))throw new Error("Invalid policy");return bc(this.#e,e,t)}command(e,t,n){let s=$u(t);return this.#r(n,{team:e,command:s},()=>{let r=Ar(this.#e,e,s);return r.ok&&this.#i("command",{team:e,command:s}),r})}client(e){if(e!==1&&e!==-1)throw new Error("Invalid team");return Object.freeze({observe:()=>this.observe(),command:(t,n)=>this.command(e,t,n),legal:t=>this.legal(e,t)})}advance(e,{events:t=!0}={}){Bo(e,0,36e3,"tick count");let n=t?this.#e.events.splice(0):[];this.#e.events.length=0;for(let s=0;s<e&&Ju(this.#e);s++)t&&n.push(...this.#e.events),this.#e.events.length=0;return{tick:this.tick,events:n,running:this.running}}advanceOnce(e,t){return this.#r(e,{advance:t},()=>this.advance(t))}pause(e){if(typeof e!="boolean")throw new Error("Invalid pause");this.#e.paused=e,this.#i("pause",{paused:e})}agreements(e){if(!e||typeof e!="object"||Array.isArray(e)||Object.keys(e).some(t=>!["noSpecials","noTurrets","meleeOnly"].includes(t)||typeof e[t]!="boolean"))throw new Error("Invalid agreements");Object.assign(this.#e.agreements,e),this.#i("agreements",{value:structuredClone(e)})}truce(e){Bo(e,0,300,"truce"),this.#e.restraintUntil=e?Math.max(this.#e.restraintUntil,this.tick+e*60):0,this.#i("truce",{seconds:e})}emotion(e){if(typeof e!="string"||!e.trim()||e.length>80)throw new Error("Invalid emotion");this.#e.opponent.emotion=e.trim(),this.#i("emotion",{word:e.trim()})}#i(e,t){this.#s.push({tick:this.tick,type:e,...t})}#r(e,t,n){if(e===void 0)return n();if(typeof e!="string"||!e||e.length>128)throw new Error("Invalid request id");let s=ko(t),r=this.#t.get(e);if(r){if(r.fingerprint!==s)throw new Error("Request id conflict");return structuredClone(r.result)}if(this.#t.size>=1e4)throw new Error("Request receipt limit reached; start a new session");let a=n();return this.#t.set(e,{fingerprint:s,result:structuredClone(a)}),a}digest(){return __(this.observe())}replay(){return{version:wr,options:structuredClone(this.#n),ticks:this.tick,entries:structuredClone(this.#s),digest:this.digest()}}checkpoint(){return{replay:this.replay(),receipts:structuredClone([...this.#t])}}static restore(e){if(!e||!Array.isArray(e.receipts)||e.receipts.length>1e4)throw new Error("Invalid checkpoint");let t=i.fromReplay(e.replay);return t.#t=new Map(structuredClone(e.receipts)),t}static fromReplay(e){if(!e||e.version!==wr||!Array.isArray(e.entries)||e.entries.length>25e4)throw new Error("Unsupported replay");Bo(e.ticks,0,5184e3,"replay duration");let t=new i(e.options),n=s=>{for(Bo(s,t.tick,e.ticks,"entry tick");t.tick<s;){let r=t.tick;if(t.advance(Math.min(36e3,s-r),{events:!1}),t.tick===r)throw new Error("Replay advances a paused or ended match")}};for(let s of e.entries)switch(n(s.tick),s.type){case"command":if(!t.command(s.team,s.command).ok)throw new Error("Illegal replay command");break;case"pause":t.pause(s.paused);break;case"agreements":t.agreements(s.value);break;case"truce":t.truce(s.seconds);break;case"emotion":t.emotion(s.word);break;default:throw new Error("Unknown replay entry")}if(n(e.ticks),t.digest()!==e.digest)throw new Error("Replay digest mismatch");return t}};var jt=Object.freeze({width:2.4,depth:1.35,lane:.45,minScale:.2,maxScale:1.6}),Ku=Object.freeze([["club","sling","dinosaur"],["sword","bow","horse"],["halberd","musket","cannon"],["soldier","rifle","tank"],["blade","blaster","mech"],["drone","ray","mothership"]].map(Object.freeze)),Tc=["normal","hard","harder","impossible"];function ju(i){if(!i||!i.running)return Tc.map((n,s)=>({id:`start-${n}`,kind:"seal",label:n[0].toUpperCase()+n.slice(1),detail:"Drop on the page to begin",action:"start",difficulty:n,price:0,x:-.72+s*.48,z:.89}));let e=Ye[i.player.age],t=[];e.units.forEach((n,s)=>t.push({id:`unit-${s}`,kind:"unit",label:n.name,detail:"Drop in the green rally area",price:n.cost,command:{type:"unit",index:s},x:-1.02+s*.34,z:.86})),e.turrets.forEach((n,s)=>t.push({id:`turret-${s}`,kind:"turret",label:n.name,detail:"Drop at your base",price:n.cost,command:{type:"turret",index:s},x:.12+s*.34,z:.86}));for(let[n,s]of["dmg","hp","econ"].entries())t.push({id:`upgrade-${s}`,kind:"potion",label:{dmg:"Sharpened",hp:"Thick Paper",econ:"Fast Ink"}[s],detail:"Toss onto the battlefield",price:bn[i.player.upgrades[s]]??1/0,command:{type:"upgrade",stat:s},x:-1.04+n*.27,z:1.16});return t.push({id:"evolve",kind:"evolve",label:"Next age",detail:"Pour onto the page",price:e.evolveXP,currency:"XP",command:{type:"evolve"},x:-.21,z:1.16},{id:"special",kind:"special",label:e.special.name,detail:"Toss onto the battlefield",price:0,command:{type:"special"},x:.08,z:1.16},{id:"slot",kind:"slot",label:"Cannon dock",detail:"Drop at your base",price:i.player.unlockedSlots*500,command:{type:"slot"},x:.37,z:1.16},{id:"sell",kind:"eraser",label:"Sell last cannon",detail:"Drop at your base \xB7 50% refund",price:0,command:{type:"sell"},x:.66,z:1.16}),t}var Qu=Object.freeze([{id:"pause",action:"pause",kind:"hourglass",label:"Pause / resume",detail:"Lift and return to the page",x:1.05,z:.83},{id:"speed",action:"speed",kind:"clock",label:"Battle speed",detail:"Lift and return \xB7 1\xD7 / 2\xD7 / 3\xD7",x:1.05,z:1.13},{id:"quality",action:"quality",kind:"feather",label:"Mist & detail",detail:"Lift and return to change",x:-1.05,z:-.48},{id:"new",action:"new",kind:"page",label:"New canvas",detail:"Pause first, then drop on the page",x:-.69,z:-.48},{id:"music",action:"music",kind:"music",label:"Music box",detail:"Lift and return to toggle music",x:.69,z:-.48},{id:"exit",action:"exit",kind:"compass",label:"Leave the table",detail:"Lift and return to leave MR",x:1.05,z:-.48}]);function ed(i,e){return!e||!["x","y","z"].every(t=>Number.isFinite(e[t]))?"invalid-position":Math.abs(e.x)>jt.width/2||Math.abs(e.z)>jt.depth/2||Math.abs(e.y)>.12?"off-table":i.kind==="unit"&&!(e.x>=-.88&&e.x<=-.44&&e.z>=.14&&e.z<=.65)?"rally-area":["turret","slot","eraser"].includes(i.kind)&&!(e.x<-.86&&e.z>=-.38&&e.z<=.64)?"your-base":null}var Ec=Object.freeze({gold:"More gold is needed. The piece returns to the shop.",xp:"More XP is needed for the next age.",paused:"Drop the hourglass onto the page to resume first.",deploying:"Your last troop is still deploying.","deployment-blocked":"Make room at your rally point.","unit-cap":"Your army is full.","slots-full":"Add a cannon dock or sell a cannon first.","no-turret":"There is no cannon to sell.",cooldown:"The special is still recharging.","base-drawing":"Your new base is still being drawn.","max-upgrade":"This potion is already at its strongest.","max-age":"You have reached the final age.","off-table":"Missed the page. Nothing was spent.","rally-area":"Drop troops in the green rally area.","your-base":"Place this at your own base on the left.","stale-age":"The age changed. Choose a new piece.","pause-first":"Pause before starting a new canvas.","match-ended":"Choose a difficulty to start the next battle.","tracking-lost":"Tracking lost. Held pieces returned safely.","not-started":"Drop a difficulty seal onto the page.","invalid-position":"The drop could not be tracked.","already-holding":"Release the piece in this hand first.","unknown-offer":"That piece is no longer on sale."});var zo=class{constructor({session:e=null,onEvent:t=()=>{}}={}){this.session=e,this.onEvent=t,this.speed=1,this.quality="mist",this.holds=new Map,this.sequence=0,this.accumulator=0,this.drops=[]}observe(){return this.session?.observe()??null}offers(e=this.observe()){return[...ju(e),...Qu]}offer(e){return this.offers().find(t=>t.id===e)}reason(e,t=this.observe()){return e?e.action==="new"&&t?.running&&!t.paused?"pause-first":e.action?null:t?Tn(t,1,e.command):"not-started":"unknown-offer"}say(e,t={}){this.onEvent({type:e,...t})}fail(e){return this.say("message",{text:Ec[e]||e,error:e}),{ok:!1,error:e}}start(e="normal",t={}){return Tc.includes(e)?(this.cancelAll(),this.session=new Bn({...t,difficulty:e}),this.accumulator=0,this.speed=1,this.say("start",{difficulty:e}),{ok:!0}):this.fail("unknown-offer")}grab(e,t){if(this.holds.has(e))return this.fail("already-holding");let n=this.offer(t),s=this.reason(n);if(s)return this.fail(s);let r={id:++this.sequence,owner:e,offer:structuredClone(n),age:this.observe()?.player.age??null};return this.holds.set(e,r),this.say("grab",{token:r}),{ok:!0,token:r}}cancel(e){let t=this.holds.get(e);this.holds.delete(e),t&&this.say("cancel",{token:t})}cancelAll(){for(let e of[...this.holds.keys()])this.cancel(e)}drop(e,t){let n=this.holds.get(e);if(!n)return{ok:!1,error:"not-held"};this.holds.delete(e);let{offer:s}=n,r=ed(s,t),a;if(r)a=this.fail(r);else if(n.age!==(this.observe()?.player.age??null))a=this.fail("stale-age");else{let l=this.reason(s);l?a=this.fail(l):s.action?a=this.tool(s):a=this.session.command(1,s.command)}return!a.ok&&!r&&this.say("message",{text:Ec[a.error]||a.error,error:a.error}),this.drops.push({offer:s.id,tick:this.session?.tick??0,point:{...t},...a}),this.drops.length>256&&this.drops.shift(),this.say("drop",{token:n,point:t,result:a}),a}tool(e){switch(e.action){case"start":return this.start(e.difficulty);case"pause":if(!this.session?.running)return this.fail("not-started");this.session.pause(!this.session.paused),this.accumulator=0,this.say("message",{text:this.session.paused?"Paused. Drop the hourglass onto the page to resume.":"The battle continues."});break;case"speed":this.speed=this.speed%3+1,this.say("message",{text:`Battle speed: ${this.speed}\xD7`});break;case"quality":this.quality=this.quality==="mist"?"clear":this.quality==="clear"?"comfort":"mist",this.say("quality",{quality:this.quality});break;case"music":this.say("music");break;case"new":this.cancelAll(),this.session=null,this.accumulator=0,this.say("menu");break;case"exit":this.pauseForInterruption(),this.say("exit");break;default:return this.fail("unknown-offer")}return{ok:!0}}pauseForInterruption(){this.cancelAll(),this.accumulator=0,this.session?.running&&!this.session.paused&&this.session.pause(!0)}update(e){if(!Number.isFinite(e)||e<0)throw new Error("Invalid elapsed time");if(e>=5){this.pauseForInterruption();return}if(!this.session?.running||this.session.paused)return;this.accumulator+=e*this.speed*60;let t=Math.floor(this.accumulator);t&&(this.accumulator-=t,this.advance(t))}advance(e){if(!this.session)return;let t=this.session.running,n=this.session.advance(e);return n.events.length&&this.say("combat",{events:n.events}),t&&!this.session.running&&(this.cancelAll(),this.say("finish",{winner:this.session.winner})),n}};var td={type:"change"},Ac={type:"start"},nd={type:"end"},Vo=new Bi,id=new Yt,x_=Math.cos(70*Es.DEG2RAD),At=new I,ni=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wc=1e-6,Ho=class extends dr{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Tt,this._lastTargetPosition=new I,this._quat=new Tt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new I,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new I,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v_.bind(this),this._onPointerDown=y_.bind(this),this._onPointerUp=S_.bind(this),this._onContextMenu=C_.bind(this),this._onMouseWheel=T_.bind(this),this._onKeyDown=E_.bind(this),this._onTouchStart=w_.bind(this),this._onTouchMove=A_.bind(this),this._onMouseDown=M_.bind(this),this._onMouseMove=b_.bind(this),this._interceptControlDown=R_.bind(this),this._interceptControlUp=I_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=nt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(td),this.update(),this.state=nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ni:n>Math.PI&&(n-=ni),s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let l=At.length();a=this._clampDistance(l*this._scale);let c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let u=new I(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),a=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Vo.origin.copy(this.object.position),Vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vo.direction))<x_?this.object.lookAt(this.target):(id.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vo.intersectPlane(id,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wc||this._lastTargetPosition.distanceToSquared(this.target)>wc?(this.dispatchEvent(td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function y_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function v_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function S_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nd),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function M_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ac)}function b_(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function T_(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nd))}function E_(i){this.enabled!==!1&&this._handleKeyDown(i)}function w_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ac)}function A_(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function C_(i){this.enabled!==!1&&i.preventDefault()}function R_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function I_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cc=new Map,P_=i=>(Cc.has(i)||Cc.set(i,new Oe(i)),Cc.get(i)),kn=class{constructor(e,{capacity:t=12e3,unlit:n=!1}={}){this.material=n?new oi:new ji({roughness:.92,metalness:.02});let s={sphere:new nr(1,10,8),rod:new _s(1,1,1,6),box:new Ti(1,1,1),cone:new tr(1,1,8),ring:new sr(1,.1,4,12)};this.outlineMaterial=new oi({color:"#342d2b",side:Ut}),s.sphereOutline=s.sphere.clone(),s.boxOutline=s.box.clone(),this.meshes={},this.counts={},this.overflow=0,this.triangles=0;for(let[r,a]of Object.entries(s)){let l=new Ln(a,r.endsWith("Outline")?this.outlineMaterial:this.material,t);l.name=`ink-${r}`,l.instanceMatrix.setUsage(Mr),l.frustumCulled=!1,l.count=0,e.add(l),this.meshes[r]=l}this.m=new qe,this.p=new I,this.s=new I,this.q=new Tt,this.euler=new Jt,this.direction=new I,this.up=new I(0,1,0),this.context={x:0,y:0,z:0,scale:1,face:1},this.begin()}begin(){for(let e of Object.keys(this.meshes))this.counts[e]=0;this.overflow=0}model(e,t,n,s=1,r=1){this.context={x:e,y:t,z:n,scale:s,face:r}}point([e,t,n=0]){let s=this.context;return[s.x+e*s.scale*s.face,s.y+t*s.scale,s.z+n*s.scale]}write(e,t,n,s,r){let a=this.meshes[e],l=this.counts[e];if(l>=a.instanceMatrix.count){this.overflow++;return}this.p.set(...t),this.s.set(...n),this.m.compose(this.p,r,this.s),a.setMatrixAt(l,this.m),a.setColorAt(l,P_(s)),this.counts[e]++}part(e,t,n,s,r=[0,0,0]){let a=this.context.scale;this.q.setFromEuler(this.euler.set(...r)),this.write(e,this.point(t),n.map(l=>l*a),s,this.q)}line(e,t,n=.004,s="#342d2b"){let r=this.point(e),a=this.point(t);this.direction.set(a[0]-r[0],a[1]-r[1],a[2]-r[2]);let l=this.direction.length();l<1e-6||(this.q.setFromUnitVectors(this.up,this.direction.multiplyScalar(1/l)),this.write("rod",r.map((c,u)=>(c+a[u])/2),[n*this.context.scale,l,n*this.context.scale],s,this.q))}sphere(e,t,n){this.part("sphere",e,[t,t,t],n)}outlineBall(e,t,n="#fff5dc"){this.part("sphereOutline",e,[t+.0015,t+.0015,t+.0015],"#ffffff"),this.sphere(e,t,n)}box(e,t,n="#e8d6ac"){this.part("boxOutline",e,t.map(s=>s+.0025),"#ffffff"),this.part("box",e,t,n)}end(){this.triangles=0;for(let[e,t]of Object.entries(this.meshes))t.count=this.counts[e],t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),this.triangles+=t.count*(t.geometry.index?.count||t.geometry.attributes.position.count)/3}dispose(){for(let e of Object.values(this.meshes))e.removeFromParent(),e.geometry.dispose();this.material.dispose(),this.outlineMaterial.dispose()}};var ci="#342d2b",Is="#fff3d8",zn={1:"#2b8d88","-1":"#b64f42"},L_=["#bb793b","#63758c","#916142","#647f5d","#55b7c8","#ac75c5"];function D_(i,e,t,n,s,r,a,l){let c=r&&!l?Math.sin(s*10)*.026:.002,u=a?Math.sin(s*18)*.045:0,o=[0,.071,0],f=[0,.13,0];i.line(o,f,.0045),i.outlineBall([0,.158,0],.025),i.sphere([.021,.16,-.012],.0028,ci),i.sphere([.021,.16,.012],.0028,ci);for(let g of[-1,1]){let d=[g*c,.006,g*.02],_=[-g*c*.5,.038,g*.013];i.line(o,_),i.line(_,d),i.line(d,[d[0]+.014,.004,d[2]],.005)}let h=l?[.018,.226,.02]:[.061+u,.099+u*.3,.02];i.line(f,[.02,l?.17:.1,.019]),i.line([.02,l?.17:.1,.019],h),i.line(f,[-.024,.097,-.018]),i.line([-.024,.097,-.018],[.016,.079,-.025]),i.line([-.01,.127,-.017],[.017,.119,.024],.009,n),["sword","halberd","blade"].includes(e)?(i.line(h,[h[0]+.028,h[1]+.09,h[2]],.005,e==="blade"?"#53dfe2":"#a3a7a5"),i.line([h[0]-.016,h[1]+.016,h[2]],[h[0]+.018,h[1]+.007,h[2]],.004),e==="halberd"&&i.box([h[0]+.025,h[1]+.071,h[2]],[.027,.028,.007],"#a3a7a5")):["rifle","soldier","musket","blaster"].includes(e)?(i.box([h[0]-.006,h[1],h[2]],[.035,.012,.012],L_[t]),i.line(h,[h[0]+.06,h[1]+.012,h[2]],.0048,e==="blaster"?"#65cbd8":ci)):e==="bow"?(i.line([.071,.145,.021],[.085,.103,.021],.003),i.line([.085,.103,.021],[.07,.058,.021],.003),i.line([.071,.145,.021],[.07,.058,.021],.0014,"#8a7a64")):e==="sling"?(i.line(h,[h[0]+.023,h[1]+.047,.021],.0018),i.outlineBall([h[0]+.023,h[1]+.047,.021],.006)):(i.line(h,[h[0]+.025,h[1]+.051,.022],.008,"#866342"),i.outlineBall([h[0]+.023,h[1]+.048,.022],.012,"#a38a6b")),t===1&&i.part("cone",[0,.183,0],[.028,.025,.028],"#84919c"),t===2&&i.part("cone",[0,.185,0],[.031,.025,.024],"#514c47"),t===3&&i.part("sphere",[0,.175,0],[.028,.012,.028],"#667755"),t===4&&(i.box([0,.11,0],[.023,.033,.029],"#a7c8cd"),i.line([.024,.166,-.017],[.024,.166,.017],.004,"#43c4d8"))}function N_(i,e,t,n,s,r){i.part("sphere",[-.012,.061,0],[.062,.035,.034],e?"#a8ad80":"#c6a379"),i.line([.024,.077,0],[.065,.116,0],.017,e?"#a8ad80":"#c6a379"),i.outlineBall([.073,.125,0],.024,e?"#a8ad80":"#c6a379"),i.line([-.063,.072,0],[-.113,.09,0],.007);for(let a of[-.045,.03])for(let l of[-.025,.025]){let c=s?Math.sin(n*9+a*30+l*30)*.02:0;i.line([a,.064,l],[a+c,.006,l],.005)}i.outlineBall([-.005,.163,0],.019),i.line([-.005,.144,0],[-.014,.089,0]),i.line([-.014,.099,0],[-.009,.042,.039]),i.line([-.012,.129,.012],r?[.018,.226,.02]:[.048,.116,.02]),i.line([-.01,.137,-.015],[.002,.13,.016],.008,t),e||i.line([.033,.109,.024],[.117,.2,.024],.0025)}function Go(i,e=0,t=0,n="#64768a",s=!1){let r=e>=4?"#567a8d":"#8e7454";i.box([0,.031,0],[.085,.032,.065],r);for(let l of[-.028,.029])for(let c of[-.038,.038])i.part("ring",[l,.026,c],[.022,.022,.022],ci),i.line([l,.026,c],[l,.026,-c],.003);let a=[.1+t*.013,.079+t*.019,0];i.line([-.034,.065,0],a,.014+t*.002,n),i.line([a[0]-.006,a[1]-.001,0],a,.018+t*.002,ci),e>=4&&i.outlineBall([.034,.071,0],.023,"#71d2de"),e===0&&(i.line([-.033,.055,0],[-.06,.115,0],.004),i.outlineBall([-.06,.118,0],.025,"#bdb49d")),e===1&&(i.line([-.054,.09,-.046],[.01,.09,0],.004),i.line([-.054,.09,.046],[.01,.09,0],.004)),s&&i.line([-.01,.058,-.025],[.014,.077,-.026],.006,zn[1])}function Rc(i,e,t,{x:n=0,y:s=0,z:r=0,scale:a=1,team:l=1,time:c=0,walking:u=!1,attacking:o=!1,held:f=!1}={}){i.model(n,s,r,a,l);let h=Ku[e]?.[t]||"club",g=zn[l];if(h==="dinosaur"||h==="horse")N_(i,h==="dinosaur",g,c,u,f);else if(h==="cannon")Go(i,e,1,g,!0);else if(h==="tank"){i.box([0,.053,0],[.14,.049,.091],"#778465"),i.box([0,.091,0],[.072,.036,.065],g);for(let d of[-.054,.054]){i.box([0,.026,d],[.16,.034,.024],"#484747");for(let _ of[-.052,-.017,.019,.055])i.part("ring",[_,.026,d*1.2],[.016,.016,.014],"#bcb29b")}i.line([.018,.096,0],[.15,.105,0],.008)}else if(h==="mech"){let d=u?Math.sin(c*8)*.025:0;i.box([0,.133,0],[.074,.065,.062],"#bdd3d0"),i.outlineBall([.025,.175,0],.023,"#77c8d7");for(let _ of[-1,1])i.line([0,.112,_*.027],[-d*_,.056,_*.04],.009),i.line([-d*_,.056,_*.04],[d*_,.006,_*.05],.008),i.line([0,.147,_*.049],[.096,.138,_*.049],.011,g)}else if(["drone","ray","mothership"].includes(h)){let d=h==="mothership"?.077:.041,_=.095+Math.sin(c*2)*.006;i.part("sphere",[0,_,0],[d,d*.45,d*.75],Is),i.part("ring",[0,_,0],[d*1.3,d*1.3,d*.8],ci,[Math.PI/2,0,.1]),i.outlineBall([.035,_+.008,0],.013,g);for(let m of[-1,1])i.line([0,_,m*d*.7],[-.015,_+.03,m*d*1.7],.004,"#ac75c5");h==="mothership"&&(i.part("cone",[0,_+.045,0],[.029,.054,.029],g),i.line([0,_+.071,0],[0,_+.12,0],.003))}else D_(i,h,e,g,c,u,o,f)}function sd(i,e,t,n,s=1){let r=zn[n],a=-.3*(1-s);if(i.model(t,a,.14,1,n),i.box([0,.025,0],[.27,.05,.48],"#d5c09a"),e===0){i.part("sphere",[0,.07,0],[.14,.145,.15],"#dbcba7"),i.part("sphere",[.11,.066,.02],[.013,.068,.05],ci);for(let l=0;l<8;l++)i.line([-.1+l*.028,.05,.13],[-.06+l*.02,.18-Math.abs(l-3.5)*.016,-.09],.0018,"#6c6455")}else if(e===1||e===2){i.box([0,.111,0],[.21,.17,.3],Is);for(let l of[-.12,.12]){i.box([0,.175,l],[.15,.24,.065],"#e1d5ba");for(let c of[-.06,0,.06])i.box([c,.31,l],[.037,.044,.065],Is)}i.box([.109,.089,.01],[.008,.105,.07],ci)}else if(e===3)i.box([0,.07,0],[.22,.1,.31],"#9caa8b"),i.part("sphere",[0,.12,0],[.15,.04,.18],"#687660"),i.box([.117,.077,0],[.012,.024,.19],ci);else{i.part("sphere",[0,.064,0],[.145,.12,.18],e===4?"#acd0cd":"#bb9ace");for(let l of[-.15,.15])i.part("cone",[0,.175,l],[.047,.3,.047],r),i.sphere([0,.333,l],.022,"#e6c48a");e===5&&i.part("ring",[.11,.16,0],[.12,.12,.12],"#bc74d0",[0,Math.PI/2,0])}i.line([0,.17,-.2],[0,.4,-.2],.004),i.box([.043,.369,-.2],[.083,.045,.004],r)}function Ic(i,e,t,n={}){let{x:s=0,y:r=0,z:a=0,scale:l=1,time:c=0,held:u=!1}=n;if(e.kind==="unit")return Rc(i,t,e.command.index,{...n,team:1});if(i.model(s,r,a,l),e.kind==="turret")return Go(i,t,e.command.index,zn[1]);let o={dmg:"#d37768",hp:"#70b392",econ:"#d7b750"}[e.command?.stat]||(e.kind==="special"?"#ce8260":"#859ac1");if(["potion","evolve","special"].includes(e.kind))i.part("sphere",[0,.046,0],[.035,.043,.027],"#efe7cb"),i.part("sphere",[0,.041,.002],[.03,.032,.024],o),i.part("rod",[0,.088,0],[.013,.035,.013],"#e8dcb6"),i.box([0,.108,0],[.027,.011,.025],"#926c4a"),i.part("ring",[0,.039,.027],[.012,.012,.012],ci);else if(e.kind==="hourglass"){for(let f of[.013,.122])i.box([0,f,0],[.08,.013,.055],"#b88f5b");i.part("cone",[0,.044,0],[.03,.056,.025],"#debc67"),i.part("cone",[0,.088,0],[.03,.056,.025],"#e5d9be",[Math.PI,0,0]);for(let f of[-.034,.034])i.line([f,.018,0],[f,.115,0],.003)}else if(e.kind==="clock"||e.kind==="compass")i.part("ring",[0,.063,0],[.046,.046,.015],"#a68b5c"),i.part("sphere",[0,.063,0],[.043,.043,.007],Is),i.line([0,.063,.012],[.018,.083,.012],.0025),i.line([0,.063,.012],[-.025,.049,.012],.0025);else if(e.kind==="music")i.box([0,.033,0],[.09,.066,.066],"#bc966a"),i.part("ring",[0,.04,.035],[.023,.023,.012],ci),i.line([.04,.07,0],[.065,.12,0],.003),i.line([.065,.12,0],[.092,.127,0],.003),i.sphere([.092,.12,0],.009,ci);else if(e.kind==="feather"){i.line([-.021,.012,0],[.031,.135,0],.002);for(let f=0;f<7;f++)i.line([-.015+f*.006,.025+f*.014,0],[.025+f*.006,.037+f*.014,.003],.004,"#c9c6b7")}else e.kind==="slot"?(i.box([0,.018,0],[.115,.035,.075],"#c9b38b"),i.part("ring",[0,.038,0],[.03,.03,.03],ci,[Math.PI/2,0,0])):e.kind==="eraser"?i.box([0,.022,0],[.085,.039,.048],"#c88d89"):e.kind==="seal"?(i.part("rod",[0,.018,0],[.058,.022,.058],["#6b8375","#618dab","#bc8851","#b85a55"][["normal","hard","harder","impossible"].indexOf(e.difficulty)]),i.part("ring",[0,.034,0],[.043,.043,.043],Is,[Math.PI/2,0,0]),i.part("cone",[0,.064,0],[.024,.06,.024],"#e6d5ac")):i.box([0,.025,0],[.1,.04,.08],Is);u&&i.part("ring",[0,.15+Math.sin(c*4)*.003,0],[.019,.019,.019],"#b3975a",[Math.PI/2,0,0])}var rd={pencil:"hsl(25, 15%, 25%)",pencilLight:"hsl(25, 10%, 55%)",accent:"hsl(18, 60%, 55%)",destructive:"hsl(0, 65%, 50%)",gold:"#b8860b",blue:"hsl(200, 45%, 55%)",green:"hsl(120, 40%, 40%)",fire:"hsl(15, 80%, 60%)",darkVoid:"hsl(260, 40%, 20%)"};function ad(i){return{WatercolorEngine:{canvases:[],generateAll(){return new Promise(t=>{let n=0,s=document.getElementById("loading-bar"),r=()=>{n<Ye.length?(this.canvases.push(this.renderWash(n)),s&&(s.style.width=`${(n+1)/Ye.length*100}%`),n++,requestAnimationFrame(r)):t()};r()})},renderWash(t){let n=document.createElement("canvas");n.width=Le,n.height=en;let s=n.getContext("2d");s.globalCompositeOperation="source-over";let r=Ye[t].theme,a=`hsl(${r.bg})`,l=`hsl(${r.accent})`;for(let c=0;c<45;c++){let u=Math.random()>.3,o=u?Math.random()>.5?Math.random()*400:Le-Math.random()*400:Math.random()*Le,f=u?Math.random()>.5?Math.random()*300:en-Math.random()*300:Math.random()*en,h=100+Math.random()*250;this.drawWatercolorBlob(s,o,f,h,a,.08),Math.random()<.25&&this.drawWatercolorBlob(s,o,f,h*.6,l,.04)}for(let c=0;c<15;c++)this.drawWatercolorBlob(s,Math.random()*Le,ft-100+Math.random()*200,200+Math.random()*400,a,.04);return n},drawWatercolorBlob(t,n,s,r,a,l){t.save(),t.fillStyle=a,t.globalAlpha=l,t.beginPath();let c=14;for(let u=0;u<=c;u++){let o=u/c*Math.PI*2,f=r+(Math.random()-.5)*r*.4,h=n+Math.cos(o)*f,g=s+Math.sin(o)*f;u===0?t.moveTo(h,g):t.bezierCurveTo(n+Math.cos(o-.2)*f,s+Math.sin(o-.2)*f,h,g,h,g)}t.fill(),t.lineWidth=1.5+Math.random()*2,t.strokeStyle=a,t.globalAlpha=l*1.5,t.stroke(),t.restore()}}}}function od(i){function e(d,_,m){let p=Math.floor(i.globalTime*8)%3,S=d*12.9898+_*78.233+p*13.131,b=Math.sin(S)*43758.5453;return(b-Math.floor(b)-.5)*m}function t(d,_=2){i.ctx.strokeStyle=d,i.ctx.fillStyle=d,i.ctx.lineWidth=_,i.ctx.lineCap="round",i.ctx.lineJoin="round"}function n(d,_){if(d>=1){i.ctx.setLineDash([]);return}let m=_;i.ctx.setLineDash([m,m]),i.ctx.lineDashOffset=m*(1-d)}function s(d,_,m,p,S=2,b=3,y=1){i.ctx.beginPath();let E=Math.sqrt((m-d)**2+(p-_)**2);for(let T=0;T<S;T++){let C=d+e(d,_+T,b),v=_+e(d+T,_,b),w=m+e(m,p+T,b),R=p+e(m+T,p,b);i.ctx.moveTo(C,v);let U=(d+m)/2+e((d+m)/2,(_+p)/2+T,b*2),O=(_+p)/2+e((d+m)/2+T,(_+p)/2,b*2);i.ctx.quadraticCurveTo(U,O,w,R)}n(y,E),i.ctx.stroke(),i.ctx.setLineDash([])}function r(d,_,m,p=2,S=3,b=1){i.ctx.beginPath();let y=2*Math.PI*m;for(let E=0;E<p;E++){let T=d+e(d,_+E,S),C=_+e(d+E,_,S),v=m+e(m,E,S);i.ctx.arc(T,C,v,0,Math.PI*2)}n(b,y*p),i.ctx.stroke(),i.ctx.setLineDash([])}function a(d,_,m,p,S,b=5,y=1){if(y<=0)return;i.ctx.strokeStyle=S,i.ctx.lineWidth=1,i.ctx.beginPath();let E=Math.floor(m/b),T=Math.max(1,Math.floor(E*y));for(let C=0;C<=T;C++){let v=d+C*b,w=e(v,_,5),R=e(v,_+p,5);i.ctx.moveTo(v+w,_+Math.abs(w)),i.ctx.lineTo(v+R,_+p-Math.abs(R))}i.ctx.stroke()}function l(){if(i.ctx.clearRect(0,0,Le,en),i.ctx.save(),i.gameState.screenShake>0){let d=i.gameState.screenShake*15;i.ctx.translate(Math.sin(i.globalTime*50)*d,Math.cos(i.globalTime*43)*d)}if(c(i.gameState.worldProgress),i.gameState.worldProgress>=1){o(1,i.gameState.player),o(-1,i.gameState.enemy);for(let d=0;d<i.gameState.units.pool.length;d++)i.gameState.units.pool[d].active&&h(i.gameState.units.pool[d]);for(let d=0;d<i.gameState.projectiles.pool.length;d++)i.gameState.projectiles.pool[d].active&&g(i.gameState.projectiles.pool[d]);for(let d=0;d<i.gameState.visualFx.pool.length;d++)i.gameState.visualFx.pool[d].active&&u(i.gameState.visualFx.pool[d]);for(let d=0;d<i.gameState.particles.pool.length;d++){let _=i.gameState.particles.pool[d];_.active&&(t(_.color,2),i.ctx.globalAlpha=Math.max(0,_.life),_.pType==="splatter"?(i.ctx.beginPath(),i.ctx.moveTo(_.x,_.y),i.ctx.lineTo(_.x-_.vx*.05,_.y-_.vy*.05),i.ctx.arc(_.x,_.y,_.size/2,0,Math.PI*2),i.ctx.fill()):_.pType==="ghost"?(t(i.COLORS.pencilLight,2),r(_.x,_.y,15,1,2),s(_.x-5,_.y-2,_.x-2,_.y-2,1,0),s(_.x+5,_.y-2,_.x+2,_.y-2,1,0),s(_.x-10,_.y+15,_.x+10,_.y+15,1,5)):_.pType==="slash"?(t(i.COLORS.pencil,3),i.ctx.beginPath(),i.ctx.arc(_.x,_.y,30,-Math.PI/4,Math.PI/4),i.ctx.stroke()):_.pType==="graphite"?(t(i.COLORS.pencil,3),i.ctx.beginPath(),i.ctx.arc(_.x,_.y,2,0,Math.PI*2),i.ctx.fill()):_.pType==="spark"||_.pType==="dust"?r(_.x,_.y,_.size/2,1,1):a(_.x,_.y,_.size,_.size,_.color,3))}i.ctx.globalAlpha=1;for(let d=0;d<i.gameState.floatingTexts.pool.length;d++){let _=i.gameState.floatingTexts.pool[d];if(!_.active)continue;let m=Math.max(0,Math.min(1,_.life/(_.maxLife||1))),p=1-m;i.ctx.globalAlpha=m,i.ctx.fillStyle=_.color,i.ctx.font=`bold ${(_.size||30)+p*(_.grow===void 0?15:_.grow)}px 'Caveat', cursive`,i.ctx.textAlign="center",_.stroke&&(i.ctx.lineWidth=5,i.ctx.strokeStyle="rgba(255, 250, 235, 0.82)",i.ctx.strokeText(_.text,_.x,_.y)),i.ctx.fillText(_.text,_.x,_.y)}i.ctx.globalAlpha=1}i.ctx.restore()}function c(d){i.ctx.save(),i.ctx.globalCompositeOperation="multiply",i.gameState.ageTransition>0&&(i.ctx.globalAlpha=i.gameState.ageTransition,i.ctx.drawImage(i.WatercolorEngine.canvases[i.gameState.player.age-1],0,0),i.ctx.globalAlpha=1-i.gameState.ageTransition),i.ctx.drawImage(i.WatercolorEngine.canvases[i.gameState.player.age],0,0),i.ctx.restore(),t(i.COLORS.pencilLight,1),i.ctx.save(),i.ctx.globalAlpha=.2+.1*Math.sin(i.globalTime);let _=i.gameState.player.age;if(_===0){r(Le/2,200,50,1,5,d);for(let m=0;m<3;m++)r(Le/2,200,30+m*10,1,3,d)}else if(_===1)for(let m=200;m<Le-200;m+=150)s(m,ft,m,ft-300,1,1,d),s(m,ft-300,m+150,ft-300,1,1,d),i.ctx.beginPath(),i.ctx.arc(m+75,ft-150,75,Math.PI,0),i.ctx.stroke();else if(_===2)r(Le/2,300,200,2,1,d),s(Le/2-200,300,Le/2+200,300,1,1,d),s(Le/2,100,Le/2,500,1,1,d),i.ctx.strokeRect(Le/2-140,160,280,280);else if(_===3)for(let m=0;m<4;m++){i.ctx.beginPath();for(let p=0;p<=Le;p+=100){let S=300+Math.sin(p/200)*100+m*50+Math.cos(p/150+m)*30;i.ctx.lineTo(p,S)}i.ctx.stroke()}else if(_===4)for(let m=100;m<Le;m+=150)for(let p=100;p<ft;p+=130)r(m,p,40,1,1,d),s(m,p,m+75,p+65,1,1,d);else if(_===5)for(let m=0;m<15;m++){let p=(Math.sin(m*12.2)*Le+Le)%Le,S=(Math.cos(m*3.1)*400+400)%400;r(p,S,20+m*2,1,2,d),s(p,S,Le/2,200,1,1,d)}i.ctx.restore(),r(Le*.8,150,60,2,5,d),i.ctx.beginPath();for(let m=0;m<=Le;m+=80){let p=ft-200-Math.sin(m/300+i.globalTime*.1)*100+e(m,0,5);i.ctx.lineTo(m,p)}n(d,Le*2),i.ctx.stroke(),i.ctx.setLineDash([]);for(let m=0;m<4;m++){let p=(i.globalTime*5+m*300)%(Le+200)-100,S=100+m*40;r(p,S,30,1,5,d),r(p+40,S-10,45,1,5,d),r(p+80,S,25,1,5,d)}t(i.COLORS.pencil,2),s(0,ft,Le,ft,2,5,d),i.ctx.beginPath();for(let m=0;m<Le;m+=60){let p=e(m,ft,5);i.ctx.moveTo(m,ft+p),i.ctx.lineTo(m+30,ft-50-Math.abs(p*5)),i.ctx.lineTo(m+60,ft+p)}n(d,Le*2),i.ctx.stroke(),i.ctx.setLineDash([])}function u(d){d.type==="plane"&&(i.ctx.save(),i.ctx.translate(d.x,d.y),d.team===-1&&i.ctx.scale(-1,1),t(i.COLORS.pencil,3),s(-40,0,50,0,2,2),r(50,0,10,2,2),s(10,0,-20,-30,2,2),s(10,0,-20,30,2,2),s(-40,0,-50,-15,2,2),a(-30,-5,60,10,i.COLORS.pencil,3),i.ctx.restore())}function o(d,_){let m=d===1?0:Le-pe,p=ft,S=_.drawProgress;switch(i.ctx.save(),i.ctx.translate(m,p),d===-1&&(i.ctx.translate(pe,0),i.ctx.scale(-1,1)),t(i.COLORS.pencil,3),Ye[_.age].baseStyle){case"cave":s(10,0,pe,0,2,5,S),i.ctx.beginPath(),i.ctx.moveTo(10,0),i.ctx.quadraticCurveTo(pe/2,-300,pe,0),n(S,pe*2),i.ctx.stroke(),i.ctx.setLineDash([]),a(30,-150,pe-60,150,i.COLORS.pencil,8,S);break;case"castle":s(20,0,20,-200,2,3,S),s(pe-20,0,pe-20,-200,2,3,S),s(20,-200,pe-20,-200,2,3,S);for(let b=20;b<pe-30;b+=30)s(b,-200,b,-230,2,2,S),s(b,-230,b+15,-230,2,2,S),s(b+15,-230,b+15,-200,2,2,S);a(pe/2-30,-100,60,100,i.COLORS.pencil,6,S);break;case"fort":s(10,0,30,-250,2,2,S),s(pe-10,0,pe-30,-250,2,2,S),s(30,-250,pe-30,-250,2,2,S);for(let b=-200;b<0;b+=40)s(15,b,pe-15,b,1,2,S);break;case"bunker":s(10,0,10,-150,2,2,S),s(10,-150,pe/2,-200,2,2,S),s(pe/2,-200,pe-10,-150,2,2,S),s(pe-10,-150,pe-10,0,2,2,S);for(let b=0;b<3;b++)r(pe+20,-15-b*20,15,2,2,S);a(20,-120,pe-40,20,i.COLORS.pencil,4,S);break;case"dome":i.ctx.beginPath(),i.ctx.arc(pe/2,0,pe/2-10,Math.PI,0),n(S,pe*2),i.ctx.stroke(),i.ctx.setLineDash([]),t(i.COLORS.blue,2),i.ctx.beginPath(),i.ctx.arc(pe/2,0,pe/2-25,Math.PI,0),n(S,pe*2),i.ctx.stroke(),i.ctx.setLineDash([]),s(pe/2,0,pe/2,-pe/2+25,2,2,S),t(i.COLORS.pencil,3);break;case"portal":t(i.COLORS.accent,2);for(let b=0;b<4;b++){let y=pe/2-10-b*10;r(pe/2,-pe/2,y,2,4+b*2,S)}s(0,0,pe,0,2,3,S),s(pe/2-20,0,pe/2,-pe/2,2,2,S),s(pe/2+20,0,pe/2,-pe/2,2,2,S),t(i.COLORS.pencil,3);break}for(let b=0;b<_.unlockedSlots;b++){let y=-150-b*90,E=pe-60,T=_.turretProgress[b];_.age!==5&&(s(E,y,E+50,y,2,3,T),s(E+10,y,E+10,y+90,2,3,T),s(E+40,y,E+40,y+90,2,3,T),s(E+10,y+90,E+40,y,1,2,T)),_.turrets[b]!==null&&f(E+25,y,_.age,Ye[_.age].turrets[_.turrets[b]].name,T)}i.ctx.restore()}function f(d,_,m,p,S){i.ctx.save(),i.ctx.translate(d,_),t(i.COLORS.pencil,2),m===0?(s(-15,0,15,0,2,3,S),s(0,0,0,-30,2,3,S),p.includes("Rock")?r(0,-35,10,2,3,S):p.includes("Egg")?(s(-10,-40,10,-40,2,3,S),s(0,-30,0,-40,2,3,S)):a(-10,-40,20,20,i.COLORS.accent,4,S)):m===1?(s(-20,0,20,0,2,3,S),s(-10,0,-20,-20,2,3,S),p.includes("Catapult")?(s(-20,-20,20,-30,2,3,S),r(20,-30,8,2,3,S)):p.includes("Ballista")?(s(-25,-15,25,-25,2,3,S),s(10,-40,10,-10,2,3,S)):(s(-15,-30,15,-30,3,2,S),a(-10,-25,20,25,i.COLORS.pencil,4,S))):m===2?(r(0,-10,10,2,3,S),s(0,-10,25,-20,3,2,S),p.includes("Heavy")&&s(0,-10,35,-25,4,2,S),p.includes("Mortar")&&s(-10,0,15,-35,5,2,S)):m===3?(s(-15,0,15,0,2,3,S),s(0,0,0,-20,2,3,S),p.includes("Machine")?s(-10,-20,30,-20,2,1,S):p.includes("Rocket")?(s(0,-20,25,-30,4,1,S),a(5,-35,20,10,i.COLORS.pencil,3,S)):s(-5,-15,40,-40,4,1,S)):m===4?(t(i.COLORS.blue,2),s(-10,0,10,0,2,3,S),s(0,0,0,-20,2,3,S),p.includes("Gatling")?(s(0,-20,30,-20,2,3,S),s(0,-15,30,-15,2,3,S)):p.includes("Ion")?(r(0,-20,15,2,3,S),s(15,-20,40,-20,3,1,S)):(s(-10,-30,30,-40,5,1,S),a(0,-45,20,20,i.COLORS.blue,4,S))):m===5&&(t(i.COLORS.accent,2),r(0,-20,15,2,5,S),p.includes("Plasma")?s(0,-20,40,-20,4,2,S):p.includes("Black")?a(-15,-35,30,30,i.COLORS.pencil,3,S):(s(-15,-20,45,-20,6,1,S),r(45,-20,5,2,2,S))),i.ctx.restore()}function h(d){i.ctx.save(),i.ctx.translate(d.x,d.y),d.team===-1&&i.ctx.scale(-1,1);let _=d.moving?Math.abs(Math.sin(i.globalTime*10+d.animOffset))*5:0,m=0,p=0,S=0;d.isAttacking?(m=Math.sin(d.animTimer*Math.PI*3)*15,p=Math.sin(d.animTimer*Math.PI*3)*Math.PI/3):d.moving&&(p=Math.sin(i.globalTime*10+d.animOffset)*Math.PI/4,S=Math.sin(i.globalTime*10+d.animOffset)*Math.PI/4),i.ctx.translate(m,-_),t(i.COLORS.pencil,2);let b=d.size,y=d.drawProgress;d.age===0?d.type==="heavy"?(r(0,-b/2,b/3,2,3,y),s(b/3,-b/2,b/1.5,-b*.8,2,4,y),r(b/1.5,-b*.8,15,2,3,y),s(-b/3,-b/2,-b/1.5,-b/3,2,4,y),s(0,-b*.8,0,-b*1.2,2,3,y),r(0,-b*1.3,8,2,3,y),s(0,-b,15,-b*.9,2,3,y)):(r(0,-b+10,12,2,3,y),s(0,-b+22,0,-20,2,3,y),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(-S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-b/1.5),i.ctx.rotate(p),s(0,0,20,10,2,3,y),d.type==="melee"?s(20,10,30,-10,4,3,y):r(25,15,5,2,3,y),i.ctx.restore()):d.age===1?d.type==="heavy"?(s(-20,-b/2,20,-b/2,2,8,y),s(20,-b/2,30,-b*.8,2,4,y),s(0,-b/2,0,-b,2,3,y),s(-10,-b,10,-b,2,3,y),r(0,-b-10,10,2,3,y),i.ctx.save(),i.ctx.translate(0,-b/1.2),i.ctx.rotate(p),s(0,0,40,0,2,2,y),i.ctx.restore()):(r(0,-b+10,10,2,3,y),s(-10,-b+10,10,-b+10,2,3,y),s(0,-b+20,0,-20,2,3,y),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(-S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-b/1.5),i.ctx.rotate(p),s(0,0,15,10,2,3,y),d.type==="melee"?(s(15,10,25,-15,2,1,y),s(5,-5,5,20,3,2,y)):(s(15,10,15,-20,2,3,y),s(15,-20,25,10,2,3,y)),i.ctx.restore()):d.age===2?d.type==="heavy"?(r(0,-15,15,2,3,y),s(-20,-15,20,-15,2,2,y),i.ctx.save(),i.ctx.translate(0,-15),i.ctx.rotate(p*.2),s(-10,-10,40,-15,4,2,y),i.ctx.restore()):(r(0,-b+10,10,2,3,y),s(-15,-b,15,-b,2,3,y),s(0,-b+20,0,-20,2,3,y),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(-S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-b/1.5),i.ctx.rotate(p),s(0,0,15,5,2,3,y),d.type==="melee"?s(15,5,30,-25,2,2,y):s(10,5,35,0,2,1,y),i.ctx.restore()):d.age===3?d.type==="heavy"?(s(-40,-10,40,-10,3,2,y),s(-30,0,30,0,3,2,y),a(-35,-25,70,15,i.COLORS.pencilLight,5,y),i.ctx.save(),i.ctx.translate(0,-25),i.ctx.rotate(p*.1),s(0,-5,50,-5,3,1,y),i.ctx.restore()):(r(0,-b+10,10,2,3,y),s(-12,-b+5,12,-b+5,2,2,y),s(0,-b+20,0,-20,2,3,y),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(-S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-b/1.5),i.ctx.rotate(p),s(0,0,15,5,2,3,y),d.type==="melee"?s(15,5,25,-5,2,1,y):s(10,5,30,5,3,1,y),i.ctx.restore()):d.age===4?(t(i.COLORS.blue,2),d.type==="heavy"?(r(0,-b/2,b/2.5,2,4,y),a(-b/3,-b*.8,b/1.5,b/1.5,i.COLORS.blue,8,y),i.ctx.save(),i.ctx.translate(0,-b/2),i.ctx.rotate(p),s(0,0,60,0,4,1,y),i.ctx.restore()):(r(0,-b+10,10,2,3,y),s(-5,-b+10,10,-b+10,2,3,y),s(0,-b+20,0,-20,2,3,y),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-20),i.ctx.rotate(-S),s(0,0,0,20,2,3,y),i.ctx.restore(),i.ctx.save(),i.ctx.translate(0,-b/1.5),i.ctx.rotate(p),s(0,0,15,5,2,3,y),d.type==="melee"?(t(i.COLORS.accent,2),s(15,5,35,-15,3,1,y)):s(10,5,30,5,3,1,y),i.ctx.restore())):d.age===5&&(t(i.COLORS.accent,2),d.type==="heavy"?(s(-b/2,-b/2,b/2,-b/2,3,2,y),s(-b/3,-b/2,0,-b,3,2,y),s(b/3,-b/2,0,-b,3,2,y),a(-b/4,-b*.8,b/2,b/2,i.COLORS.accent,5,y),r(0,-b/2,20,2,5,y)):d.type==="melee"?(s(-20,-b/2,20,-b/2,3,2,y),r(0,-b/2,10,2,2,y),s(0,-b/2,15,-b/2+10,3,2,y)):(s(-15,-b/2,15,-b/2,2,3,y),s(0,-b/2,30,-b/2,4,1,y),a(-10,-b/2-10,20,20,i.COLORS.accent,3,y))),d.drawProgress>=1&&(t(i.COLORS.pencil,1),s(-15,-b-20,15,-b-20,1,1),t(i.COLORS.green,2),d.hp>0&&s(-15,-b-20,-15+30*(d.hp/d.maxHp),-b-20,2,1)),i.ctx.restore()}function g(d){if(i.ctx.save(),d.isSpecial&&(d.type==="laser"||d.type==="orbital")){let m=d.life>.5?1:d.life*2;if(i.ctx.globalAlpha=m,d.type==="laser"){t(d.team===1?i.COLORS.blue:i.COLORS.accent,3);let p=Math.min(150,(5-d.life)*50);a(d.x-p/2,0,p,en,d.team===1?i.COLORS.blue:i.COLORS.accent,15),s(d.x-p/2,0,d.x-p/2,en,3,10),s(d.x+p/2,0,d.x+p/2,en,3,10)}else{t(i.COLORS.darkVoid,4),r(d.x,d.y-400,150,4,30),a(d.x-150,d.y-550,300,300,i.COLORS.darkVoid,15),t(i.COLORS.accent,2);for(let p=0;p<5;p++)r(d.x,d.y-400,50+p*20+Math.sin(i.globalTime*5)*10,1,10);for(let p=0;p<10;p++)s(d.x+(Math.random()-.5)*400,ft,d.x,d.y-400,1,5)}i.ctx.globalAlpha=1,i.ctx.restore();return}if(d.trailCount>1){t(i.COLORS.pencilLight,1),i.ctx.beginPath(),i.ctx.moveTo(d.trailX[0],d.trailY[0]);for(let m=1;m<d.trailCount;m++)i.ctx.lineTo(d.trailX[m],d.trailY[m]);i.ctx.stroke()}i.ctx.translate(d.x,d.y);let _=Math.atan2(d.vy,d.vx);i.ctx.rotate(_),t(i.COLORS.pencil,2),d.type==="meteor"?(t(i.COLORS.fire,3),r(0,0,15,3,5),a(-30,-10,30,20,i.COLORS.fire,4),s(0,5,-50,20,2,5),s(0,-5,-50,-20,2,5)):d.type==="arrow"?(s(-15,0,10,0,1,1),s(5,-5,10,0,1,1),s(5,5,10,0,1,1)):d.type==="cannonball"?(r(0,0,10,3,2),a(-10,-10,20,20,i.COLORS.pencil,3)):d.type==="bombDrop"?(i.ctx.rotate(-_+Math.PI/2),r(0,10,8,2,2),s(0,10,0,-15,2,2),s(-10,-15,10,-15,2,2)):d.type==="arc"?d.speed>450?(s(-15,0,10,0,1,1),s(-15,-5,-15,5,1,1)):r(0,0,d.dmg>100?8:4,2,2):d.type==="straight"?s(-10,0,10,0,2,1):d.type==="laser"?(t(d.team===1?i.COLORS.blue:i.COLORS.accent,3),i.ctx.rotate(-_),s(0,0,d.targetX-d.x,d.targetY-d.y,1,3)):d.type==="orb"&&(t(i.COLORS.accent,2),r(0,0,15+Math.sin(d.life*20)*5,3,5)),i.ctx.restore()}return{draw:l,drawBackground:c}}var Pc=[-1,1].flatMap(i=>[-.65,1.34].map(e=>({id:`handle-${i}-${e}`,x:i*1.28,y:.035,z:e}))),ld="#342d2b",Ir=class{constructor(e,t,n,{flat:s=!0}={}){this.canvas=document.createElement("canvas"),this.canvas.width=768,this.canvas.height=Math.round(768*n/t),this.ctx=this.canvas.getContext("2d"),this.texture=new gs(this.canvas),this.texture.colorSpace=Lt,this.mesh=new _t(new ki(t,n),new oi({map:this.texture,transparent:!0,side:Kt,depthWrite:!1})),this.mesh.rotation.x=s?-Math.PI/2:-.35,e.add(this.mesh),this.last=""}text(e,t=ld){let n=JSON.stringify([e,t]);if(n===this.last)return;this.last=n;let{ctx:s,canvas:{width:r,height:a}}=this;s.clearRect(0,0,r,a),s.fillStyle="#fff5df",s.fillRect(0,0,r,a),s.strokeStyle="#a49b87",s.lineWidth=2,s.strokeRect(2,2,r-4,a-4),s.textAlign="center",s.textBaseline="middle",s.fillStyle=t,e.forEach((l,c)=>{s.font=`${c===0?"bold ":""}${Math.floor(a/e.length*.61)}px 'Patrick Hand', cursive`,s.fillText(l,r/2,(c+.5)*a/e.length,r-24)}),this.texture.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}},Wo=class{constructor(e,t){this.host=t,this.time=0,this.age=-1,this.labelClock=0,this.labels=new Map,this.offers=[],this.renderer=new No({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),this.renderer.xr.setFramebufferScaleFactor(.9),this.renderer.xr.setFoveation(.7),this.renderer.outputColorSpace=Lt,this.scene=new qs,this.scene.background=new Oe("#ded7c8"),this.camera=new Ht(43,1,.01,30),this.camera.position.set(.45,2.45,3.3),this.controls=new Ho(this.camera,e),this.controls.target.set(0,.1,.3),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.485,this.controls.minDistance=.4,this.controls.maxDistance=8,this.controls.mouseButtons={RIGHT:Ei.ROTATE,MIDDLE:Ei.PAN},this.controls.touches={TWO:zi.DOLLY_ROTATE},this.scene.add(new lr("#fffaf0","#8c8f82",1.9));let n=new hr("#fff8ed",1.2);n.position.set(-2,4,2),this.scene.add(n),this.root=new Si,this.scene.add(this.root),this.table={position:{x:0,y:0,z:0},yaw:0,scale:1},this.army=new kn(this.root,{capacity:6e3}),this.shop=new kn(this.root,{capacity:1200}),this.held=new kn(this.root,{capacity:600}),this.details=new kn(this.root,{capacity:100});let s=document.createElement("canvas");s.width=1280,s.height=720,this.paperRuntime={ctx:s.getContext("2d"),COLORS:{...rd},gameState:{player:{age:0},ageTransition:0},globalTime:0},Object.assign(this.paperRuntime,ad(this.paperRuntime)),this.paperPainter=od(this.paperRuntime),this.paperTexture=new gs(s),this.paperTexture.colorSpace=Lt,this.paperTexture.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.page=new _t(new ki(jt.width,jt.depth),new ji({map:this.paperTexture,roughness:1,side:Kt})),this.page.rotation.x=-Math.PI/2,this.root.add(this.page);let r=new _t(new Ti(2.4,.027,.65),new ji({color:"#dbcaab",roughness:1}));r.position.set(0,-.019,1.025),this.root.add(r);let a=new _t(new Ti(2.42,.025,1.37),new ji({color:"#665345",roughness:1}));a.position.y=-.02,this.root.add(a),this.zone(-.66,.395,.44,.51,"#438e72"),this.zone(-1.06,.13,.27,1.02,"#a98440"),this.status=new Ir(this.root,1.38,.22,{flat:!1}),this.status.mesh.position.set(.02,.2,-.58),this.hint=new Ir(this.root,1.85,.105),this.hint.mesh.position.set(0,.004,-.17),this.hint.text(["Lift a difficulty seal from the tray. Drop it onto the page."]),this.shadow=new Ln(new er(1,12),new oi({color:"#382f2b",transparent:!0,opacity:.16,depthWrite:!1}),170),this.shadow.frustumCulled=!1,this.root.add(this.shadow),this.shadowMatrix=new qe,this.shadowQuaternion=new Tt().setFromEuler(new Jt(-Math.PI/2,0,0)),this.mist=this.makeMist(),this.root.add(this.mist),this.reticle=new _t(new ir(.09,.115,32).rotateX(-Math.PI/2),new oi({color:"#74c4a5",side:Kt})),this.reticle.visible=!1,this.reticle.matrixAutoUpdate=!1,this.scene.add(this.reticle),this.refreshArt(0),this.resize(),this.syncTable()}zone(e,t,n,s,r){let a=new _t(new ki(n,s),new oi({color:r,transparent:!0,opacity:.12,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(e,.002,t),this.root.add(a);let l=[[e-n/2,.004,t-s/2],[e+n/2,.004,t-s/2],[e+n/2,.004,t+s/2],[e-n/2,.004,t+s/2],[e-n/2,.004,t-s/2]].map(u=>new I(...u)),c=new fn(new yt().setFromPoints(l),new rr({color:r,dashSize:.035,gapSize:.018}));c.computeLineDistances(),this.root.add(c)}makeMist(){return new _t(new ki(2.33,1.26).rotateX(-Math.PI/2).translate(0,.035,0),new $t({transparent:!0,depthWrite:!1,side:Kt,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv; uniform float time; void main(){vec2 p=vUv;float edge=smoothstep(0.0,0.18,p.x)*smoothstep(0.0,0.18,1.0-p.x)*smoothstep(0.0,0.16,p.y)*smoothstep(0.0,0.16,1.0-p.y);float n=0.55+0.22*sin(p.x*24.0+sin(p.y*14.0+time*0.17))+0.18*sin(p.y*37.0-p.x*11.0+time*0.12);gl_FragColor=vec4(0.91,0.93,0.88,edge*n*0.24);}"}))}refreshArt(e){if(e===this.age)return;this.age=e;let t=this.paperRuntime;t.gameState.player.age=e,t.WatercolorEngine.canvases[e]||(t.WatercolorEngine.canvases[e]=t.WatercolorEngine.renderWash(e)),t.ctx.fillStyle="#f4eddc",t.ctx.fillRect(0,0,1280,720),t.COLORS.pencil=`hsl(${Ye[e].theme.fg})`,t.COLORS.pencilLight=`hsl(${Ye[e].theme.fg} / .5)`,this.paperPainter.drawBackground(1),this.paperTexture.needsUpdate=!0}resize(){let e=this.renderer.domElement,t=e.clientWidth,n=e.clientHeight;!t||!n||this.renderer.xr.isPresenting||(this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=Math.min(95,Es.radToDeg(2*Math.atan(Math.tan(Es.degToRad(43/2))*Math.max(1,1/this.camera.aspect)))),this.camera.updateProjectionMatrix())}syncTable(){let e=this.table;this.root.position.set(e.position.x,e.position.y,e.position.z),this.root.rotation.y=e.yaw,this.root.scale.setScalar(e.scale),this.root.updateMatrixWorld(!0)}immersive(e){this.scene.background=e?null:new Oe("#ded7c8"),this.controls.enabled=!e,e||this.resize()}message(e){this.hint.text([e])}refreshShop(e){this.offers=this.host.offers(e);let t=new Set(this.offers.map(n=>n.id));for(let[n,s]of this.labels)t.has(n)||(s.dispose(),this.labels.delete(n));this.shop.begin();for(let n of this.offers){Ic(this.shop,n,e?.player.age||0,{x:n.x,z:n.z});let s=this.labels.get(n.id);s||(s=new Ir(this.root,n.kind==="seal"?.39:.245,.072),this.labels.set(n.id,s)),s.mesh.position.set(n.x,.006,n.z+.113);let r=this.host.reason(n,e),a=n.price===1/0?"MAX":n.price?`${n.price} ${n.currency||"gold"}`:n.action==="speed"?`${this.host.speed}\xD7`:n.action==="quality"?this.host.quality:n.command?.type==="special"&&e?.player.specialTimer>0?`${Math.ceil(e.player.specialTimer)}s`:"";s.text([n.label,a||(n.action?"Lift & drop":"Ready")],r?"#81766a":ld)}this.shop.end(),this.details.begin();for(let n of Pc)this.details.model(n.x,n.y,n.z),this.details.part("ring",[0,0,0],[.075,.075,.075],"#8b7051",[Math.PI/2,0,0]);this.details.end()}update(e,t,n){this.time+=n,this.labelClock-=n,this.refreshArt(e?.player.age||0),this.syncTable(),this.labelClock<=0&&(this.labelClock=.25,this.refreshShop(e),this.status.text(e?[e.running?`${Ye[e.player.age].name}  \xB7  ${Math.floor(e.player.gold)} gold  \xB7  ${Math.floor(e.player.xp)} XP`:e.winner===0?"A draw. Both pages fell together.":e.winner===1?"Victory! The page is yours.":"Defeat. A new page awaits.",`${Math.ceil(e.player.hp)} / ${Math.ceil(e.player.maxHp)} HP   \u2014   Enemy ${Math.ceil(e.enemy.hp)} HP   \xB7   ${e.paused?"PAUSED":`${this.host.speed}\xD7`}`]:["INK BATTLE \xB7 TABLETOP","Choose a seal. Lift a world."])),this.army.begin();let s=0;if(e){for(let r of[1,-1]){let a=r===1?e.player:e.enemy,l=-r*1.06;sd(this.army,a.age,l,r,a.drawProgress),a.turrets.forEach((c,u)=>{c!==null&&(this.army.model(l,.04,-.28+u*.13,.83*Math.max(.02,a.turretProgress[u]),r),Go(this.army,a.age,c,zn[r]))})}for(let r of e.units){let a=(r.x/1280-.5)*jt.width,l=jt.lane+(r.id%5-2)*.024,c=Math.max(.02,r.drawProgress)*Math.min(1.8,r.size/50),u=this.host.quality==="comfort";Rc(this.army,r.age,r.uType,{x:a,z:l,scale:c,team:r.team,time:u?0:this.time+r.id,walking:!u&&r.moving,attacking:!u&&r.isAttacking}),u||(this.army.model(a,.23*c,l,1),this.army.line([-.035,0,0],[.035,0,0],.0028,"#aa8f7e"),this.army.line([-.035,0,.001],[-.035+.07*Math.max(0,r.hp/r.maxHp),0,.001],.003,zn[r.team])),this.shadowMatrix.compose(new I(a,.005,l),this.shadowQuaternion,new I(.045*c,.025*c,1)),this.shadow.setMatrixAt(s++,this.shadowMatrix)}for(let r of e.projectiles)!Number.isFinite(r.x)||!Number.isFinite(r.y)||(this.army.model((r.x/1280-.5)*jt.width,Math.max(.035,(600-r.y)/1280*jt.width),jt.lane),this.army.sphere([0,0,0],.009,r.team===1?"#378a99":"#ce795b"));for(let r of e.specials){let a=(r.x/1280-.5)*jt.width,l=r.team===1?"#68aead":"#bd7565";this.army.model(a,.012,jt.lane);let c=r.age===4?.28:.5;if(this.army.part("ring",[0,0,0],[c,c,.025],l,[Math.PI/2,0,0]),this.host.quality!=="comfort")for(let u=0;u<8;u++){let o=Math.sin(u*4.7)*c,f=Math.cos(u*2.3)*.06,h=.025+(this.time*.3+u*.07)%.28;this.army.line([o,h,f],[o-.025,h+.04,f],.003,l)}}}this.army.end(),this.shadow.count=s,this.shadow.instanceMatrix.needsUpdate=!0,this.shadow.visible=this.host.quality!=="comfort",this.held.begin();for(let r of t){let a=r.position,l=r.offer.kind==="unit";Ic(this.held,r.offer,r.age||0,{x:a.x-(l?.018:0),y:a.y-(l?.226:.06),z:a.z,held:!0,time:this.time})}this.held.end(),this.mist.visible=this.host.quality==="mist",this.mist.material.uniforms.time.value=this.time,this.renderer.xr.isPresenting||this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}stats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,instances:Object.values(this.army.counts).reduce((e,t)=>e+t,0),overflow:this.army.overflow+this.held.overflow+this.shop.overflow,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures}}};var U_=(i,e,t)=>Math.max(e,Math.min(t,i)),Xo=i=>Math.hypot(i.x,i.y,i.z),Lc=(i,e)=>({x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}),cd=(i,e)=>({x:(i.x+e.x)/2,y:(i.y+e.y)/2,z:(i.z+e.z)/2});function Pr(i,e){let t=Math.cos(e),n=Math.sin(e);return{x:t*i.x+n*i.z,y:i.y,z:-n*i.x+t*i.z}}function En(i,e){let t=Pr(Lc(i,e.position),-e.yaw);return{x:t.x/e.scale,y:t.y/e.scale,z:t.z/e.scale}}function Dc(i,e){let t=Pr(i,e.yaw);return{x:e.position.x+t.x*e.scale,y:e.position.y+t.y*e.scale,z:e.position.z+t.z*e.scale}}var qo=class{constructor(e){this.table=e,this.grips=new Map,this.origin=null}begin(e,t){this.grips.set(e,{...t}),this.rebase()}end(e){this.grips.delete(e),this.rebase()}clear(){this.grips.clear(),this.origin=null}rebase(){let e=[...this.grips.values()];if(!e.length){this.origin=null;return}let t=e.length>1?cd(e[0],e[1]):e[0],n=e.length>1?Lc(e[1],e[0]):{x:1,y:0,z:0};this.origin={local:En(t,this.table),distance:Math.max(.06,Xo(n)),angle:Math.atan2(n.z,n.x),scale:this.table.scale,yaw:this.table.yaw}}move(e,t){if(!this.grips.has(e))return;this.grips.set(e,{...t});let n=[...this.grips.values()],s=this.origin,r=n.length>1?cd(n[0],n[1]):n[0];if(n.length>1){let l=Lc(n[1],n[0]);this.table.scale=U_(s.scale*Xo(l)/s.distance,jt.minScale,jt.maxScale),Math.hypot(l.x,l.z)>.05&&(this.table.yaw=s.yaw-(Math.atan2(l.z,l.x)-s.angle))}let a=Pr(s.local,this.table.yaw);this.table.position={x:r.x-a.x*this.table.scale,y:r.y-a.y*this.table.scale,z:r.z-a.z*this.table.scale}}};function hd(i,e,t=9.81){let n={...i.position};if(i.position.x+=i.velocity.x*e,i.position.z+=i.velocity.z*e,i.position.y+=i.velocity.y*e-t*e*e/2,i.velocity.y-=t*e,i.age+=e,n.y>=0&&i.position.y<=0){let s=n.y/(n.y-i.position.y||1);return{x:n.x+(i.position.x-n.x)*s,y:0,z:n.z+(i.position.z-n.z)*s}}return null}var Yo=class{constructor(e,t,{onCarry:n=()=>{}}={}){this.host=e,this.table=t,this.onCarry=n,this.gesture=new qo(t),this.grabs=new Map,this.flights=new Map}begin(e,t,n,s=0){if(this.grabs.has(e)||this.flights.has(e))return!1;if(t.startsWith("handle-"))return this.gesture.grips.size>=2?!1:(this.onCarry(),this.gesture.begin(e,n),this.grabs.set(e,{handle:!0}),!0);let r=this.host.grab(e,t);return r.ok?(this.grabs.set(e,{token:r.token,world:{...n},position:En(n,this.table),history:[{world:{...n},time:s}]}),!0):!1}move(e,t,n=0){let s=this.grabs.get(e);if(s){if(s.handle){this.gesture.move(e,t);return}for(s.world={...t},s.position=En(t,this.table),s.history.push({world:{...t},time:n});s.history.length>2&&s.history[0].time<n-.12;)s.history.shift()}}release(e,{desktop:t=!1}={}){let n=this.grabs.get(e);if(!n)return;if(this.grabs.delete(e),n.handle){this.gesture.end(e);return}if(!this.host.holds.has(e))return;let s=En(n.world,this.table);if(s.y-=n.token.offer.kind==="unit"?.226:.06,t||s.y<=.025){this.host.drop(e,{...s,y:0});return}let r=n.history[0],a=n.history.at(-1),l=Math.max(.016,a.time-r.time),c={x:(a.world.x-r.world.x)/l,y:(a.world.y-r.world.y)/l,z:(a.world.z-r.world.z)/l},u=Math.min(1,3/(Xo(c)||1)),o=Pr(c,-this.table.yaw);for(let f of["x","y","z"])o[f]*=u/this.table.scale;this.flights.set(e,{token:n.token,position:s,velocity:o,age:0})}cancel(e){this.grabs.delete(e),this.flights.delete(e),this.gesture.end(e),this.host.cancel(e)}cancelAll(){for(let e of new Set([...this.grabs.keys(),...this.flights.keys()]))this.cancel(e)}update(e){for(let[t,n]of this.grabs)!n.handle&&!this.host.holds.has(t)&&this.grabs.delete(t);for(let[t,n]of this.flights){if(!this.host.holds.has(t)){this.flights.delete(t);continue}let s=hd(n,Math.min(e,.1),9.81/this.table.scale);s?(this.flights.delete(t),this.host.drop(t,s)):(n.age>3||n.position.y<-1)&&this.cancel(t)}}visuals(){let e=[];for(let t of this.grabs.values())t.handle||e.push({offer:t.token.offer,age:t.token.age,position:En(t.world,this.table)});for(let t of this.flights.values())e.push({offer:t.token.offer,age:t.token.age,position:{...t.position,y:t.position.y+(t.token.offer.kind==="unit"?.226:.06)}});return e}};var Vn=i=>({x:i.x,y:i.y,z:i.z}),O_=["thumb","index-finger","middle-finger","ring-finger","pinky-finger"].map(i=>i==="thumb"?["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"]:[`${i}-metacarpal`,`${i}-phalanx-proximal`,`${i}-phalanx-intermediate`,`${i}-phalanx-distal`,`${i}-tip`]),Zo=class{constructor(e,t,{onCarry:n=()=>{},onPlace:s=()=>!1}={}){this.view=e,this.host=t,this.interaction=new Yo(t,e.table,{onCarry:n}),this.onPlace=s,this.raycaster=new ur,this.pointer=new Re,this.pointers=new Map,this.sources=new Map,this.nextId=0,this.canvas=e.renderer.domElement,this.listeners=[];for(let r of["pointerdown","pointermove","pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(r,a=>this.desktop(r,a));this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),this.canvas.addEventListener("keydown",r=>{r.key==="Escape"&&(this.cancelAll(),this.host.pauseForInterruption())}),this.handGroup=new Si,e.scene.add(this.handGroup),this.handVertices=new je(new Float32Array(240),3),this.handVertices.setUsage(Mr),this.handLines=new Ks(new yt().setAttribute("position",this.handVertices),new dn({color:"#6aa999",transparent:!0,opacity:.75})),this.handGroup.add(this.handLines),this.handLines.frustumCulled=!1}candidates(){return[...Pc,...this.view.offers.map(e=>({...e,y:e.kind==="unit"?.15:.07}))]}pick(e,t){let n=En(e,this.view.table),s=null,r=1/0;for(let l of this.candidates()){let c=Math.hypot(n.x-l.x,n.y-l.y,n.z-l.z);c<(l.id.startsWith("handle-")?.12:.13)&&c<r&&(s=l,r=c)}if(s)return{target:s.id,world:e};if(!t)return null;let a=1/0;for(let l of this.candidates()){let c=new I().copy(Dc(l,this.view.table)),u=new bi(c,.105*this.view.table.scale),o=t.intersectSphere(u,new I);if(!o)continue;let f=t.origin.distanceTo(o);f<a&&(a=f,s=l)}return s?{target:s.id,world:Vn(t.at(a,new I)),distance:a}:null}desktopRay(e){let t=this.canvas.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.raycaster.setFromCamera(this.pointer,this.view.camera),this.raycaster.ray}planePoint(e,t){return e.intersectPlane(new Yt(new I(0,1,0),-t),new I)}desktop(e,t){if(this.view.renderer.xr.isPresenting||t.button&&e==="pointerdown")return;let n=`pointer-${t.pointerId}`,s=this.pointers.get(n),r=this.desktopRay(t);if(e==="pointerdown"){let a=this.pick({x:1e5,y:1e5,z:1e5},r);if(!a)return;this.interaction.begin(n,a.target,a.world,t.timeStamp/1e3)&&(this.pointers.set(n,{height:a.target.startsWith("handle-")?a.world.y:Dc({x:0,y:.28,z:0},this.view.table).y}),this.view.controls.enabled=!1,this.canvas.setPointerCapture(t.pointerId),this.canvas.focus(),t.preventDefault())}else if(e==="pointermove")if(s){let a=this.planePoint(r,s.height);a&&this.interaction.move(n,Vn(a),t.timeStamp/1e3)}else{let a=this.pick({x:1e5,y:1e5,z:1e5},r);this.canvas.style.cursor=a?"grab":"default",a&&this.describe(a.target)}else if(s){if(e==="pointerup"){let a=this.planePoint(r,this.view.table.position.y);a&&!this.interaction.grabs.get(n)?.handle&&this.interaction.move(n,Vn(a),t.timeStamp/1e3),this.interaction.release(n,{desktop:!0})}else this.interaction.cancel(n);this.pointers.delete(n),this.view.controls.enabled=!this.pointers.size,this.canvas.hasPointerCapture(t.pointerId)&&this.canvas.releasePointerCapture(t.pointerId)}}describe(e){if(e.startsWith("handle-"))this.view.message("Carry with one ring. Hold two rings to resize and turn.");else{let t=this.host.offer(e);t&&this.view.message(`${t.label} \xB7 ${t.detail}`)}}bind(e){this.unbind(),this.session=e;let t=(n,s)=>{e.addEventListener(n,s),this.listeners.push([n,s])};for(let n of["selectstart","squeezestart","selectend","squeezeend"])t(n,s=>{if(e.visibilityState!=="visible"||s.inputSource.hand)return;let r=this.sources.get(s.inputSource);if(!r?.valid)return;let a=this.view.renderer.xr.getReferenceSpace(),l=s.frame.getPose(s.inputSource.gripSpace||s.inputSource.targetRaySpace,a),c=s.frame.getPose(s.inputSource.targetRaySpace,a);if(!l||!c){this.interaction.cancel(r.id),r.buttons.clear();return}r.position=Vn(l.transform.position),r.ray.origin.copy(c.transform.position),r.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation);let u=n.startsWith("select")?"trigger":"grip";if(n.endsWith("start")){if(this.onPlace(s.frame))return;r.buttons.add(u),r.buttons.size===1&&this.startSource(r)}else if(r.buttons.delete(u),!r.buttons.size){let o=r.distance?Vn(r.ray.at(r.distance,new I)):r.position;this.interaction.move(r.id,o,performance.now()/1e3),this.interaction.release(r.id)}});t("inputsourceschange",n=>{for(let s of n.removed)this.remove(s)})}unbind(){if(this.session)for(let[e,t]of this.listeners)this.session.removeEventListener(e,t);this.listeners=[],this.session=null,this.cancelAll();for(let e of[...this.sources.keys()])this.remove(e)}remove(e){let t=this.sources.get(e);t&&(this.interaction.cancel(t.id),t.line.removeFromParent(),t.line.geometry.dispose(),t.line.material.dispose(),this.sources.delete(e))}startSource(e){let t=this.pick(e.position,e.hand?null:e.ray);t&&(this.describe(t.target),e.distance=t.distance||0,this.interaction.begin(e.id,t.target,t.world,performance.now()/1e3)&&this.feedback(e.id,!0))}feedback(e,t){for(let[n,s]of this.sources)s.id===e&&n.gamepad?.hapticActuators?.[0]?.pulse(t?.25:.1,t?35:80)?.catch(()=>{})}xr(e,t){if(!this.session||this.session.visibilityState!=="visible")return;let n=[],s=performance.now()/1e3;for(let r of this.session.inputSources){let a=this.sources.get(r);if(!a){let h=new fn(new yt().setFromPoints([new I,new I(0,0,-1)]),new dn({color:"#6aa999",transparent:!0,opacity:.5}));this.view.scene.add(h),a={id:`xr-${++this.nextId}`,hand:!!r.hand,buttons:new Set,pinched:!1,armed:!1,valid:!1,ray:new Bi,line:h},this.sources.set(r,a)}let l=e.getPose(r.gripSpace||r.targetRaySpace,t),c=e.getPose(r.targetRaySpace,t),u,o=!1;if(r.hand){let h=new Map;for(let[_,m]of r.hand){let p=e.getJointPose(m,t);p&&h.set(_,p.transform.position)}let g=h.get("thumb-tip"),d=h.get("index-finger-tip");if(g&&d){u={x:(g.x+d.x)/2,y:(g.y+d.y)/2,z:(g.z+d.z)/2},o=Math.hypot(g.x-d.x,g.y-d.y,g.z-d.z)<(a.pinched?.04:.025);for(let m of O_)for(let p=1;p<m.length;p++){let S=h.get(m[p-1]),b=h.get(m[p]);S&&b&&n.push(S.x,S.y,S.z,b.x,b.y,b.z)}}}else l&&c&&(u=Vn(l.transform.position));if(a.valid=!!u,!u){this.interaction.cancel(a.id),a.buttons.clear(),a.pinched=!1,a.armed=!1,a.line.visible=!1;continue}a.position=u,c&&(a.ray.origin.copy(c.transform.position),a.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation)),a.line.visible=!a.hand,!a.hand&&c&&(a.line.position.copy(c.transform.position),a.line.quaternion.copy(c.transform.orientation),a.line.scale.z=a.distance||.6);let f=a.distance&&!a.hand?Vn(a.ray.at(a.distance,new I)):u;this.interaction.move(a.id,f,s),a.hand&&!o&&(a.armed=!0),a.hand&&o!==a.pinched&&(a.pinched=o,o?a.armed&&!this.onPlace(e)&&this.startSource(a):this.interaction.release(a.id))}this.handVertices.array.set(n.slice(0,this.handVertices.array.length)),this.handVertices.needsUpdate=!0,this.handLines.geometry.setDrawRange(0,Math.min(n.length,this.handVertices.array.length)/3),this.handLines.visible=n.length>0}cancelAll(){this.interaction.cancelAll();for(let e of this.pointers.keys()){let t=Number(e.slice(8));this.canvas.hasPointerCapture(t)&&this.canvas.releasePointerCapture(t)}this.pointers.clear(),this.view.controls.enabled=!this.view.renderer.xr.isPresenting,this.canvas.style.cursor="default";for(let e of this.sources.values())e.buttons.clear(),e.pinched=!1,e.armed=!1,e.line.visible=!1;this.handLines.visible=!1}};function ud(i){let e="inkBattle.musicMuted.v1",t="global-v2",n="evolvingCanvas",s=["mp3","ogg","wav"],c=[{id:"evolvingCanvas",title:"The Evolving Canvas",file:"evolving_canvas",variants:["evolving_canvas","evolving_canvas_v2","evolving_canvas_v3","evolving_canvas_v4","evolving_canvas_v5","evolving_canvas_v6"],scene:"battle",roles:["ink-battle","active-fight","progression","age","all-purpose","fallback"],ageMin:0,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.68,minPlaySec:16,priority:84,fallback:!0,classicBattle:!0},{id:"pencilDawn",title:"Pencil Dawn",file:"pencil_dawn",variants:["pencil_dawn","pencil_dawn_v2"],scene:"opening",roles:["stone-age","opening","low-tension"],ageMin:0,ageMax:1,tensionMin:0,tensionMax:.38,loop:!0,volume:.58,minPlaySec:28,priority:80},{id:"graphiteSkirmish",title:"Graphite Skirmish",file:"graphite_skirmish",variants:["graphite_skirmish","graphite_skirmish_v2","graphite_skirmish_v3","graphite_skirmish_v4","graphite_skirmish_v5","graphite_skirmish_v6","graphite_skirmish_v7","graphite_skirmish_v8"],scene:"battle",roles:["early-game","mid-game","pressure"],ageMin:0,ageMax:2,tensionMin:.22,tensionMax:.72,loop:!0,volume:.62,minPlaySec:32,priority:82},{id:"inklineAdvance",title:"Inkline Advance",file:"inkline_advance",variants:["inkline_advance","inkline_advance_v2","inkline_advance_v3","inkline_advance_v4","inkline_advance_v5","inkline_advance_v6"],scene:"pressure",roles:["early-game","lane-pressure","fast-units"],ageMin:0,ageMax:2,tensionMin:.52,tensionMax:1,loop:!0,volume:.64,minPlaySec:30,priority:86},{id:"castleMarch",title:"Castle March",file:"castle_march",variants:["castle_march","castle_march_v2"],scene:"battle",roles:["castle-age","iron-age","steady-battle"],ageMin:1,ageMax:2,tensionMin:.16,tensionMax:.68,loop:!0,volume:.62,minPlaySec:34,priority:78},{id:"renaissanceRush",title:"Renaissance Rush",file:"renaissance_rush",variants:["renaissance_rush","renaissance_rush_v2"],scene:"battle",roles:["renaissance","momentum","snare-march"],ageMin:2,ageMax:3,tensionMin:.28,tensionMax:.82,loop:!0,volume:.65,minPlaySec:34,priority:84},{id:"cannonSmoke",title:"Cannon Smoke",file:"cannon_smoke",variants:["cannon_smoke","cannon_smoke_v2"],scene:"siege",roles:["turrets","specials","base-pressure"],ageMin:2,ageMax:4,tensionMin:.58,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:90},{id:"modernWarfare",title:"Modern Warfare",file:"modern_warfare",variants:["modern_warfare","modern_warfare_v2"],scene:"battle",roles:["modern-age","electric-guitar","orchestral-drop"],ageMin:3,ageMax:3,tensionMin:.26,tensionMax:1,loop:!0,volume:.68,minPlaySec:36,priority:86},{id:"futureArpeggio",title:"Future Arpeggio",file:"future_arpeggio",variants:["future_arpeggio","future_arpeggio_v2"],scene:"future",roles:["future-age","synth","tech-window"],ageMin:4,ageMax:4,tensionMin:.12,tensionMax:.72,loop:!0,volume:.62,minPlaySec:34,priority:82},{id:"neonFront",title:"Neon Front",file:"neon_front",variants:["neon_front","neon_front_v2"],scene:"pressure",roles:["future-age","high-pressure","cyber-drums"],ageMin:4,ageMax:5,tensionMin:.52,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:89},{id:"cosmicClash",title:"Cosmic Clash",file:"cosmic_clash",variants:["cosmic_clash","cosmic_clash_v2"],scene:"cosmic",roles:["cosmic-age","choir","final-battle"],ageMin:5,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.7,minPlaySec:42,priority:92},{id:"lastPageSiege",title:"Last Page Siege",file:"last_page_siege",variants:["last_page_siege","last_page_siege_v2"],scene:"siege",roles:["critical-base-hp","deathball","endgame-pressure"],ageMin:0,ageMax:5,tensionMin:.76,tensionMax:1,loop:!0,volume:.72,minPlaySec:32,priority:105,urgent:!0},{id:"codexGemma",title:"Codex Gemma",file:"codex_gemma",variants:["codex_gemma","codex_gemma_v2"],scene:"menu",roles:["director","pause","memory"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:.45,loop:!0,volume:.48,minPlaySec:20,priority:75},{id:"victoryCanvas",title:"Victory Canvas",file:"victory_canvas",variants:["victory_canvas","victory_canvas_v2"],scene:"victory",roles:["victory","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.58,minPlaySec:20,priority:120,outcome:"victory"},{id:"erasedPages",title:"Erased Pages",file:"erased_pages",variants:["erased_pages","erased_pages_v2"],scene:"defeat",roles:["defeat","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.54,minPlaySec:20,priority:120,outcome:"defeat"}];return{MusicDirector:{tracks:{},activeId:null,pendingId:null,started:!1,muted:!1,suspended:!1,ducked:!1,outcome:null,masterVolume:.72,fadeMs:1600,idleReleaseMs:45e3,decisionTimer:0,lastSwitchAt:-999,transitionToken:0,audioContext:null,masterGainNode:null,mixerUnavailable:!1,elementMixer:!1,recentIds:[],signals:{tension:0,playerAge:0,enemyAge:0,troopPressure:0},init(){this.elementMixer=this.shouldUseElementMixer(),this.mixerUnavailable=this.elementMixer;try{this.muted=localStorage.getItem(e)==="1"}catch{this.muted=!1}for(let o=0;o<c.length;o++){let f=c[o],h=new Audio;h.preload=f.preload||"none",h.loop=f.loop!==!1;let g={config:f,audio:h,variantSources:this.buildVariantSources(f),variantBag:[],failedVariants:new Set,activeVariantIndex:-1,lastVariantIndex:-1,sources:[],sourceIndex:0,failed:!1,blocked:!1,fadeToken:0,playToken:0,releaseTimer:0,fadeTimer:0,fadeFrame:0,fadeStartedAt:0,fadeDurationMs:0,fadeStartVolume:0,fadeTargetVolume:0,currentVolume:0,mediaNode:null,gainNode:null,webAudioFailed:!1};h.addEventListener("error",()=>{this.pendingId!==f.id&&(this.markVariantFailed(g,g.activeVariantIndex),!g.failed&&this.activeId===f.id?this.play(f.id,{fadeMs:500,force:!0,reason:"variant_error",newVariant:!0}):g.failed&&this.activeId===f.id&&this.playFallback({fadeMs:800,reason:"active_error"},f.id),this.updateButton())}),this.tracks[f.id]=g}this.updateButton()},buildSourceCandidates(o){return s.map(f=>`assets/audio/${o}.${f}`)},buildVariantSources(o){let f=[],h=g=>{!Array.isArray(g)||!g.length||f.push(g.slice())};if(Array.isArray(o.variants)&&o.variants.length)for(let g=0;g<o.variants.length;g++){let d=o.variants[g];if(typeof d=="string"&&d){h(this.buildSourceCandidates(d));continue}if(Array.isArray(d)&&d.length){h(d);continue}if(d&&typeof d=="object"){if(Array.isArray(d.sources)&&d.sources.length){h(d.sources);continue}typeof d.file=="string"&&d.file&&h(this.buildSourceCandidates(d.file))}}else if(Array.isArray(o.files)&&o.files.length)for(let g=0;g<o.files.length;g++)typeof o.files[g]=="string"&&o.files[g]&&h(this.buildSourceCandidates(o.files[g]));else Array.isArray(o.sources)&&o.sources.length&&h(o.sources);if(!f.length){let g=o.file||o.id;h(this.buildSourceCandidates(g))}return f},refillVariantBag(o){if(!o)return;let f=[];for(let h=0;h<o.variantSources.length;h++)o.failedVariants.has(h)||f.push(h);for(let h=f.length-1;h>0;h--){let g=Math.floor(Math.random()*(h+1)),d=f[h];f[h]=f[g],f[g]=d}if(f.length>1&&o.lastVariantIndex>=0&&f[0]===o.lastVariantIndex){let h=1+Math.floor(Math.random()*(f.length-1)),g=f[0];f[0]=f[h],f[h]=g}o.variantBag=f},markVariantFailed(o,f){!o||f===void 0||f===null||f<0||(o.failedVariants.add(f),o.variantBag&&o.variantBag.length&&(o.variantBag=o.variantBag.filter(h=>h!==f)),o.failed=o.failedVariants.size>=o.variantSources.length)},chooseVariant(o,f={}){return!o||!o.variantSources.length?!1:f.keepCurrent&&o.activeVariantIndex>=0&&!o.failedVariants.has(o.activeVariantIndex)?(o.sources=o.variantSources[o.activeVariantIndex],o.sourceIndex=Math.max(0,Math.min(o.sourceIndex||0,o.sources.length-1)),o.failed=!1,o.sources.length>0):((!o.variantBag||!o.variantBag.length)&&this.refillVariantBag(o),!o.variantBag||!o.variantBag.length?(o.failed=!0,!1):(o.activeVariantIndex=o.variantBag.shift(),o.lastVariantIndex=o.activeVariantIndex,o.sources=o.variantSources[o.activeVariantIndex],o.sourceIndex=0,o.failed=!1,this.cancelRelease(o),this.cancelFade(o),this.setOutputVolume(o,0),o.audio.pause(),o.audio.removeAttribute("src"),o.audio.load(),o.sources.length>0))},start(o="game_start"){this.started=!0,this.suspended=!1,this.ducked=!1,this.outcome=null,this.pendingId=null,this.decisionTimer=0,this.recentIds=[],this.setSignals(this.readSignals()),this.resumeMixer(),this.fadeOutAll(0,!0),this.play(n,{fadeMs:900,force:!0,reason:o})},update(o){if(!this.started||this.outcome||this.muted||this.suspended||!i.gameState||!i.gameState.running||i.gameState.paused||(this.decisionTimer-=o,this.decisionTimer>0))return;this.decisionTimer=2.25;let f=this.readSignals();this.setSignals(f);let h=this.chooseTrack(f,{reason:"flow"});h&&h!==this.activeId?this.play(h,{reason:"flow"}):this.refreshActiveVolume()},setSignals(o){this.signals=Object.assign({},this.signals,o||{})},setScene(o,f="scene"){let h=this.chooseScene(o);return h?this.play(h,{fadeMs:850,force:!0,reason:f}):!1},setOutcome(o){this.outcome=o?"victory":"defeat",this.ducked=!1,this.play(o?"victoryCanvas":"erasedPages",{fadeMs:1400,force:!0,reason:this.outcome})},play(o,f={}){let h=this.tracks[o];if(!h||h.failed)return this.playFallback(f,o);if(this.pendingId===o)return!0;let g=f.fadeMs===void 0?this.fadeMs:f.fadeMs;if(!f.newVariant&&this.activeId===o&&!h.audio.paused)return this.refreshActiveVolume(),this.updateButton(),!0;if(!f.force&&!this.canSwitchTo(h))return!1;if(this.muted||this.suspended)return this.activeId=o,this.pendingId=null,this.transitionToken++,this.fadeOutAll(0,!0),this.updateButton(),!1;let d=++this.transitionToken,_=this.pendingId&&this.pendingId!==o?this.tracks[this.pendingId]:null;this.pendingId=null,_&&_!==h&&_.config.id!==this.activeId&&(this.cancelEntryStart(_),this.fadeOut(_,Math.min(300,g||300),!0)),this.resumeMixer();let m=this.activeId&&this.activeId!==o?this.tracks[this.activeId]:null;m&&!m.audio.paused&&this.fadeTo(m,this.targetVolume(m),Math.min(500,g||500));let p=f.newVariant===void 0?this.activeId!==o:!!f.newVariant;return this.pendingId=o,this.startEntry(h,{newVariant:p}).then(S=>{if(this.transitionToken!==d||this.pendingId!==o){h.config.id!==this.activeId&&this.fadeOut(h,Math.min(250,g||250),!0);return}if(!S){this.pendingId===o&&(this.pendingId=null),this.playFallback(f,o);return}this.pendingId=null,this.activeId=o,this.lastSwitchAt=i.globalTime,this.rememberTrack(o),this.cancelRelease(h),this.fadeTo(h,this.targetVolume(h),g),m&&this.fadeOut(m,g,!0),this.updateButton()}),this.updateButton(),!0},toggleMute(){this.muted=!this.muted;try{localStorage.setItem(e,this.muted?"1":"0")}catch{}this.muted?(this.transitionToken++,this.pendingId=null,this.fadeOutAll(350,!0)):this.started&&this.activeId?(this.resumeMixer(),this.play(this.activeId,{fadeMs:650,force:!0,reason:"unmute"})):this.started&&(this.resumeMixer(),this.play(this.chooseTrack(this.readSignals(),{force:!0,reason:"unmute"})||n,{fadeMs:650,force:!0,reason:"unmute"})),this.updateButton()},setDucked(o){if(this.ducked=!!o,this.ducked&&this.started&&!this.suspended&&!this.muted){if(this.setScene("menu","pause"))return}else!this.ducked&&this.started&&!this.outcome&&(this.decisionTimer=0,this.update(0));this.refreshActiveVolume()},suspendForPage(){!this.started||this.suspended||(this.suspended=!0,this.transitionToken++,this.pendingId=null,this.fadeOutAll(0,!0))},resumeForPage(){this.suspended&&(this.suspended=!1,this.started&&this.activeId&&!this.muted&&(this.resumeMixer(),this.play(this.activeId,{fadeMs:700,force:!0,reason:"page_visible"})))},startEntry(o,f={}){return new Promise(h=>{if(!o||o.failed||this.muted||this.suspended){h(!1);return}let g=++o.playToken;if(this.cancelRelease(o),this.resumeMixer(),!this.chooseVariant(o,{keepCurrent:!f.newVariant})){o.failed=!0,h(!1);return}if(!this.ensureSource(o)&&(this.markVariantFailed(o,o.activeVariantIndex),!this.chooseVariant(o,{keepCurrent:!1})||!this.ensureSource(o))){o.failed=!0,h(!1);return}let d=o.audio,_=!1,m=!1,p=E=>{if(!_){if(_=!0,d.removeEventListener("error",b),o.playToken!==g){h(!1);return}h(E)}},S=()=>{if(!(_||m)){if(m=!0,d.removeEventListener("error",b),o.playToken!==g){p(!1);return}this.advanceSource(o)?(_=!0,this.startEntry(o,{newVariant:!1}).then(h)):(o.failed=!0,p(!1))}},b=()=>S();d.addEventListener("error",b),d.loop=o.config.loop!==!1,this.prepareOutput(o),this.setOutputVolume(o,0);let y=null;try{y=d.play()}catch{S();return}y&&typeof y.then=="function"?y.then(()=>{o.failed=!1,o.blocked=!1,p(!0)}).catch(E=>{E&&E.name==="NotAllowedError"?(o.blocked=!0,p(!1)):S()}):setTimeout(()=>p(!d.paused||d.readyState>=2),120),setTimeout(()=>{!_&&d.readyState>=2&&!d.error&&p(!0)},2400)})},ensureSource(o){return!o||!o.sources.length?!1:(this.cancelRelease(o),o.audio.getAttribute("src")||(o.sourceIndex=Math.max(0,Math.min(o.sourceIndex||0,o.sources.length-1)),o.audio.src=o.sources[o.sourceIndex],o.audio.load()),!0)},advanceSource(o){return o?(o.sourceIndex=(o.sourceIndex||0)+1,this.cancelRelease(o),this.cancelFade(o),this.setOutputVolume(o,0),o.audio.pause(),o.audio.removeAttribute("src"),o.audio.load(),o.sourceIndex<o.sources.length?(o.audio.src=o.sources[o.sourceIndex],o.audio.load(),!0):(this.markVariantFailed(o,o.activeVariantIndex),this.chooseVariant(o,{keepCurrent:!1})?this.ensureSource(o)?!0:(this.markVariantFailed(o,o.activeVariantIndex),this.advanceSource(o)):!1)):!1},playFallback(o={},f=""){let h=this.activeId?this.tracks[this.activeId]:null;if(!o.force&&h&&h.config.id!==f&&!h.failed&&!h.audio.paused)return this.refreshActiveVolume(),!1;let g=this.tracks[n]&&!this.tracks[n].failed?n:"";if(!g)for(let d=0;d<c.length;d++){let _=c[d].id;if(_!==f&&this.tracks[_]&&!this.tracks[_].failed){g=_;break}}return!g||g===f?!1:this.play(g,Object.assign({},o,{force:!0,reason:"fallback"}))},canSwitchTo(o){if(!o||!this.activeId||this.activeId===o.config.id||o.config.urgent||o.config.outcome)return!0;let f=this.tracks[this.activeId],h=f&&f.config&&f.config.minPlaySec||24;return i.globalTime-this.lastSwitchAt>=h},chooseTrack(o,f={}){if(this.outcome)return this.outcome==="victory"?"victoryCanvas":"erasedPages";let h="",g=-1/0;for(let d=0;d<c.length;d++){let _=c[d],m=this.tracks[_.id];if(!m||m.failed||m.blocked||_.outcome||_.scene==="menu")continue;let p=this.scoreTrack(_,o);_.scene==="opening"&&o.elapsed<38&&(p+=26),_.scene==="opening"&&o.elapsed>=55&&(p-=40),_.scene==="opening"&&o.activeFight&&(p-=34),_.urgent&&o.tension>.74&&(p+=35),this.recentIds.includes(_.id)&&(p-=34-Math.min(18,this.recentIds.indexOf(_.id)*6)),this.activeId===_.id&&(p+=10),f.force&&_.id===n&&(p+=4),p>g&&(g=p,h=_.id)}return h||n},chooseScene(o){let f="",h=-1/0;for(let g=0;g<c.length;g++){let d=c[g],_=this.tracks[d.id];if(!_||_.failed||_.blocked||d.scene!==o)continue;let m=(d.priority||0)-(this.recentIds.includes(d.id)?20:0);m>h&&(h=m,f=d.id)}return f||n},scoreTrack(o,f){let h=f.maxAge||0,g=f.tension||0,d=o.ageMin===void 0?0:o.ageMin,_=o.ageMax===void 0?Ye.length-1:o.ageMax,m=o.tensionMin===void 0?0:o.tensionMin,p=o.tensionMax===void 0?1:o.tensionMax;if(h<d-.01||h>_+.01)return-1/0;let S=(d+_)/2,b=(m+p)/2,y=o.priority||0;if(y-=Math.abs(h-S)*8,y-=Math.max(0,m-g,g-p)*95,y-=Math.abs(g-b)*18,f.specialActive&&(o.roles||[]).some(E=>E==="specials"||E==="base-pressure")&&(y+=10),f.baseDanger>.58&&(o.scene==="siege"||o.urgent)&&(y+=18),f.troopPressure>.58&&(o.scene==="battle"||o.scene==="pressure")&&(y+=9),o.classicBattle)if(f.activeFight){let E=h>=3?4:30;y+=E+this.clamp((f.clash||0)*10+(f.baseDanger||0)*8,0,14)}else y-=24;return f.activeFight&&(o.id==="graphiteSkirmish"||o.id==="inklineAdvance")&&(y-=16),y},readSignals(){if(!i.gameState||!i.gameState.player||!i.gameState.enemy)return this.signals||{};let o=i.gameState.player,f=i.gameState.enemy,h=o.maxHp?Math.max(0,o.hp/o.maxHp):1,g=f.maxHp?Math.max(0,f.hp/f.maxHp):1,d=0,_=0,m=0,p=pe,S=Le-pe,b=0,y=0;if(i.gameState.units&&i.gameState.units.pool)for(let U=0;U<i.gameState.units.pool.length;U++){let O=i.gameState.units.pool[U];O.active&&(d++,O.team===1?(_++,p=Math.max(p,O.x||pe),y+=this.clamp((Le-pe-(O.x||0))/280,0,1)<1?1-this.clamp((Le-pe-(O.x||0))/280,0,1):0):(m++,S=Math.min(S,O.x||Le-pe),b+=this.clamp(((O.x||Le)-pe)/280,0,1)<1?1-this.clamp(((O.x||Le)-pe)/280,0,1):0))}let E=Math.max(0,S-p),T=this.clamp(1-E/560,0,1),C=this.clamp(Math.max(b,y)/3,0,1),v=1-Math.min(h,g),w=this.clamp(d/16+Math.abs(_-m)/18,0,1),R=this.clamp(d*.035+T*.24+C*.36+v*.32+(i.gameState.specialActive?.18:0)+(i.gameState.screenShake||0)*.18,0,1);return{elapsed:i.globalTime,playerAge:o.age||0,enemyAge:f.age||0,maxAge:Math.max(o.age||0,f.age||0),activeUnits:d,playerUnits:_,enemyUnits:m,troopPressure:w,playerHpRatio:h,enemyHpRatio:g,baseDanger:C,clash:T,activeFight:d>=2&&(T>.08||C>.03||w>.12),tension:R,specialActive:!!i.gameState.specialActive,library:t}},rememberTrack(o){o&&(this.recentIds=[o].concat(this.recentIds.filter(f=>f!==o)).slice(0,5))},refreshActiveVolume(){let o=this.activeId?this.tracks[this.activeId]:null;o&&!this.muted&&!this.suspended&&!o.audio.paused&&this.fadeTo(o,this.targetVolume(o),500)},fadeOut(o,f,h){o&&this.fadeTo(o,0,f,()=>{h&&(o.audio.pause(),this.scheduleRelease(o))})},fadeOutAll(o,f,h=""){for(let g in this.tracks){if(g===h)continue;let d=this.tracks[g];d&&((d.config.id!==this.activeId||this.muted||this.suspended)&&this.cancelEntryStart(d),(!d.audio.paused||this.currentOutputVolume(d)>.001)&&this.fadeOut(d,o,f))}},fadeTo(o,f,h,g){if(!o)return;let d=this.currentOutputVolume(o),_=Math.max(0,Math.min(1,f)),m=Math.max(0,h||0);this.cancelFade(o);let p=++o.fadeToken;if(o.fadeStartVolume=d,o.fadeTargetVolume=_,o.fadeStartedAt=performance.now(),o.fadeDurationMs=m,!m||Math.abs(d-_)<=.001){this.setOutputVolume(o,_),g&&g();return}if(this.prepareOutput(o)){let b=this.audioContext,y=o.gainNode.gain,E=b.currentTime;try{y.cancelScheduledValues(E),y.setValueAtTime(d,E),y.setValueCurveAtTime(this.buildEqualPowerCurve(d,_),E,Math.max(.016,m/1e3)),o.audio.volume=1,o.fadeTimer=setTimeout(()=>{o.fadeToken===p&&(this.setOutputVolume(o,_),g&&g())},m+60);return}catch{}}this.writeOutputVolume(o,d,!0);let S=b=>{if(o.fadeToken!==p)return;let y=Math.min(1,(b-o.fadeStartedAt)/m);this.writeOutputVolume(o,this.curveVolume(d,_,y),!1),y<1?o.fadeFrame=requestAnimationFrame(S):(this.setOutputVolume(o,_),g&&g())};o.fadeFrame=requestAnimationFrame(S)},cancelEntryStart(o){o&&o.playToken++},cancelFade(o){o&&(o.fadeToken++,o.fadeTimer&&clearTimeout(o.fadeTimer),o.fadeFrame&&cancelAnimationFrame(o.fadeFrame),o.fadeTimer=0,o.fadeFrame=0,o.fadeDurationMs=0)},scheduleRelease(o){o&&(this.cancelRelease(o),!(!this.muted&&!this.suspended&&(this.activeId===o.config.id||this.pendingId===o.config.id))&&(o.releaseTimer=setTimeout(()=>this.releaseEntry(o),this.idleReleaseMs)))},cancelRelease(o){!o||!o.releaseTimer||(clearTimeout(o.releaseTimer),o.releaseTimer=0)},releaseEntry(o){o&&(o.releaseTimer=0,!(!this.muted&&!this.suspended&&(this.activeId===o.config.id||this.pendingId===o.config.id))&&o.audio.paused&&(this.cancelFade(o),this.setOutputVolume(o,0),o.audio.removeAttribute("src"),o.audio.load()))},shouldUseElementMixer(){let o=navigator.userAgent||"";return!!window.LocalGemmaAndroid||/; wv\)/i.test(o)},getAudioContext(){if(this.audioContext||this.mixerUnavailable)return this.audioContext;let o=window.AudioContext||window.webkitAudioContext;if(!o)return this.mixerUnavailable=!0,null;try{this.audioContext=new o,this.masterGainNode=this.audioContext.createGain(),this.masterGainNode.gain.value=1,this.masterGainNode.connect(this.audioContext.destination)}catch{this.mixerUnavailable=!0,this.audioContext=null,this.masterGainNode=null}return this.audioContext},resumeMixer(){let o=this.getAudioContext();if(!(!o||o.state!=="suspended"))try{let f=o.resume();f&&typeof f.catch=="function"&&f.catch(()=>{})}catch{}},prepareOutput(o){if(!o)return!1;if(o.gainNode)return o.audio.volume=1,!0;if(o.webAudioFailed)return!1;let f=this.getAudioContext();if(!f||!this.masterGainNode)return!1;try{return o.mediaNode=f.createMediaElementSource(o.audio),o.gainNode=f.createGain(),o.gainNode.gain.value=o.currentVolume||0,o.mediaNode.connect(o.gainNode),o.gainNode.connect(this.masterGainNode),o.audio.volume=1,!0}catch{return o.webAudioFailed=!0,o.mediaNode=null,o.gainNode=null,o.audio.volume=o.currentVolume||0,!1}},setOutputVolume(o,f){o&&(this.cancelFade(o),o.fadeStartVolume=f,o.fadeTargetVolume=f,this.writeOutputVolume(o,f,!0))},writeOutputVolume(o,f,h){if(!o)return;let g=this.clamp(f,0,1);if(o.currentVolume=g,o.gainNode&&this.audioContext)try{let d=o.gainNode.gain,_=this.audioContext.currentTime;h&&d.cancelScheduledValues(_),d.setValueAtTime(g,_),o.audio.volume=1;return}catch{}o.audio.volume=g},currentOutputVolume(o){if(!o)return 0;if(o.fadeDurationMs>0){let f=this.clamp((performance.now()-o.fadeStartedAt)/o.fadeDurationMs,0,1);return this.curveVolume(o.fadeStartVolume,o.fadeTargetVolume,f)}return typeof o.currentVolume=="number"?o.currentVolume:o.audio.volume||0},curveVolume(o,f,h){let g=this.clamp(h,0,1);return f>=o?o+(f-o)*Math.sin(g*Math.PI/2):f+(o-f)*Math.cos(g*Math.PI/2)},buildEqualPowerCurve(o,f){let h=new Float32Array(96);for(let g=0;g<h.length;g++)h[g]=this.curveVolume(o,f,g/(h.length-1));return h},targetVolume(o){let f=this.masterVolume*(o.config.volume||1);return this.ducked&&(f*=.45),Math.max(0,Math.min(1,f))},clamp(o,f,h){return Math.max(f,Math.min(h,o))},updateButton(){let o=document.getElementById("btn-music");if(!o)return;let f=this.activeId&&this.tracks[this.activeId]?this.tracks[this.activeId].config.title:"Music";o.classList.toggle("music-muted",this.muted),o.innerHTML=this.muted?"&#128263;":"&#128266;",o.title=this.muted?"Music off":`Music on: ${f}`,o.setAttribute("aria-label",this.muted?"Turn music on":"Turn music off")}}}}var Nc="ink-battle-tabletop-v1",Jo=document.querySelector("#tabletop"),F_=document.querySelector("#status"),mi=document.querySelector("#enter-mr"),Hn=document.querySelector("#welcome"),Ue,Pi,Ft,Lr,Dr,$o,Gn=!1,Qo=!1,el=!1,Ko=null,dd=0,jo=!1,Uc=0,Ps=[],fd="",Nr=[],tn={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0};function pd(){let i=[...Nr].sort((e,t)=>e-t);return{...tn,recentSamples:i.length,frameIntervalMedianMs:i[Math.floor((i.length-1)*.5)]??null,frameIntervalP95Ms:i[Math.floor((i.length-1)*.95)]??null}}var Oc={gameState:null,globalTime:0},Qt=ud(Oc).MusicDirector,md=null;function _d(i){Oc.globalTime=(i?.tick||0)/60,Oc.gameState=i?{...i,units:{pool:i.units},specialActive:i.specials.length>0}:null}var rt=new zo({onEvent:i=>{if(i.type==="message"&&Wt(i.text),i.type==="start"&&(_d(rt.observe()),Qt.start(),Hn.classList.add("compact"),Wt("Lift troops into the green rally area. Cannons belong at your base on the left.")),i.type==="drop"&&i.result.ok&&(Ue.labelClock=0,Ur()),i.type==="drop"&&Pi?.feedback(i.token.owner,i.result.ok),i.type==="quality"&&Wt(`Appearance: ${i.quality}. Lift the feather to change it.`),i.type==="music"&&(Qt.toggleMute(),Wt(Qt.muted?"Music off.":"Music on.")),i.type==="menu"&&(Pi?.cancelAll(),Qt.suspendForPage(),Hn.classList.remove("compact"),Wt("Choose a difficulty seal for a new battle."),Ur()),i.type==="finish"){if(i.winner===0?Qt.suspendForPage():Qt.setOutcome(i.winner===1),Wt(i.winner===0?"A draw. Drop another seal for a new battle.":i.winner===1?"Victory! Drop another seal to begin again.":"Defeat. Drop another seal for a new battle."),i.winner===1)try{let e=JSON.parse(localStorage.getItem("aow_sketch_progress")||'{"beaten":[]}');e.beaten=[...new Set([...e.beaten||[],rt.observe().difficulty])],localStorage.setItem("aow_sketch_progress",JSON.stringify(e))}catch{}Ur()}i.type==="exit"&&(Ft?Ft.end().catch(()=>{}):Hn.classList.remove("compact"))}});function Wt(i){Ue?.message(i),i!==fd&&(F_.textContent=i,fd=i)}function Ur(){try{if(!rt.session){localStorage.removeItem(Nc);return}let i=JSON.stringify({checkpoint:rt.session.checkpoint(),speed:rt.speed,quality:rt.quality});i.length<2e6&&localStorage.setItem(Nc,i)}catch{}}function Wi(){Pi?.cancelAll(),rt.pauseForInterruption(),Qt.suspendForPage(),Ko=null,Ur(),rt.session?.running&&Wt("Paused. Lift the hourglass and drop it onto the page to resume.")}function tl(){Uc++,Dr?.delete(),Dr=null,$o=null}function xd(){Ft||(Ue.table.position={x:0,y:0,z:0},Ue.table.yaw=0,Ue.table.scale=1,Ue.syncTable(),Ue.camera.position.set(.45,2.45,3.3),Ue.controls.target.set(0,.1,.3),Ue.controls.update())}async function B_(){if(!Ft){mi.disabled=!0,Qt.resumeMixer();try{let i=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor"],optionalFeatures:["hand-tracking","hit-test","anchors"]});Ft=i,Qo=!1,Gn=!0,el=!1,Wi(),Nr=[],tn={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0},i.addEventListener("end",()=>{Wi(),Pi.unbind(),Lr?.cancel(),Lr=null,tl(),Ft=null,Ue.reticle.visible=!1,Ue.immersive(!1),xd(),mi.disabled=!1,Hn.hidden=!1,Wt("Back in preview. Your battle is saved and paused.")},{once:!0}),i.addEventListener("visibilitychange",()=>{i.visibilityState!=="visible"&&Wi()}),await Ue.renderer.xr.setSession(i),Ue.immersive(!0),Pi.bind(i),Hn.hidden=!0,Ue.renderer.xr.getReferenceSpace().addEventListener("reset",()=>{Wi(),tl(),Qo=!1,Gn=!0});try{let t=await i.requestReferenceSpace("viewer");if(i.requestHitTestSource){let n=await i.requestHitTestSource({space:t});Ft===i?Lr=n:n.cancel()}}catch{}if(Ft!==i)return;i.supportedFrameRates?.includes(72)&&i.updateTargetFrameRate(72).catch(()=>{}),Wt("Look at a table, then pinch or press the trigger to place. Rings let you carry and resize.")}catch(i){Ft&&await Ft.end().catch(()=>{}),Ft=null,mi.disabled=!1,Wt(`Mixed reality could not start (${i.name||"browser error"}). Preview is still available.`)}}}function k_(i,e){let t=i.getViewerPose(e);if(!t)return jo||(Wi(),jo=!0),!1;if(jo=!1,!Qo){let s=t.transform.position,r=new I(0,0,-1).applyQuaternion(t.transform.orientation);r.y=0,r.normalize(),Ue.table.scale=.55,Ue.table.position={x:s.x+r.x*.9,y:Math.max(.35,s.y-.7),z:s.z+r.z*.9},Ue.table.yaw=Math.atan2(-r.x,-r.z),Qo=!0,Ue.syncTable()}let n;if(Gn&&Lr){n=i.getHitTestResults(Lr).find(r=>{let a=r.getPose(e);return a&&a.transform.matrix[5]>.85});let s=n?.getPose(e);Ue.reticle.visible=!!s,s&&Ue.reticle.matrix.fromArray(s.transform.matrix)}if(el){if(el=!1,Gn=!1,Ue.reticle.visible=!1,n){let s=n.getPose(e);if(Ue.table.position=gd(s.transform.position),Ue.table.position.y+=.028,Ue.syncTable(),n.createAnchor){let r=Ft,a=Uc;n.createAnchor().then(l=>{if(Ft!==r||!r||Uc!==a||Pi.interaction.gesture.grips.size){l.delete();return}tl(),Dr=l,$o=new qe().fromArray(s.transform.matrix).invert().multiply(Ue.root.matrixWorld)}).catch(()=>{})}}Wt(rt.session?"Placed. Drop the hourglass onto the page to resume.":"Placed. Lift a difficulty seal and drop it onto the page to begin.")}if(Dr&&$o){let s=i.getPose(Dr.anchorSpace,e);if(s){let r=new qe().fromArray(s.transform.matrix).multiply($o),a=new I,l=new Tt,c=new I;r.decompose(a,l,c),Ue.table.position=gd(a),Ue.table.yaw=new Jt().setFromQuaternion(l,"YXZ").y}}return!0}var gd=i=>({x:i.x,y:i.y,z:i.z});async function z_(){matchMedia("(max-width: 650px), (max-height: 450px)").matches&&Hn.classList.add("compact");try{Ue=new Wo(Jo,rt)}catch(e){console.error("Tabletop initialization failed:",e),Wt("3D graphics are unavailable in this browser. You can still play the classic game."),mi.disabled=!0;return}Pi=new Zo(Ue,rt,{onCarry:()=>{Gn=!1,Ue.reticle.visible=!1,tl()},onPlace:()=>Gn?(el=!0,!0):!1}),Qt.init(),Jo.addEventListener("pointerdown",()=>Qt.resumeMixer());try{let e=JSON.parse(localStorage.getItem(Nc)||"null");e?.checkpoint&&(rt.session=Bn.restore(e.checkpoint),rt.session.running&&rt.session.pause(!0),rt.speed=[1,2,3].includes(e.speed)?e.speed:1,rt.quality=["mist","clear","comfort"].includes(e.quality)?e.quality:"mist",Wt(rt.session.running?"Saved battle restored. Drop the hourglass onto the page to resume.":"Your last battle ended. Drop a difficulty seal for a new page."))}catch{Wt("The saved battle could not be restored. Start with a difficulty seal.")}await document.fonts.ready,mi.addEventListener("click",B_),document.querySelector("#reset-view").addEventListener("click",xd),document.querySelector("#toggle-help").addEventListener("click",()=>Hn.classList.toggle("compact")),document.querySelector("#save-report").addEventListener("click",()=>{let e=rt.observe(),t={version:"2.2.0",date:new Date().toISOString(),browser:navigator.userAgent,quality:rt.quality,age:e?.player.age,difficulty:e?.difficulty,render:Ue.stats(),xr:pd()},n=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=n,s.download="ink-battle-quest-report.json",s.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}),window.addEventListener("resize",()=>Ue.resize()),window.visualViewport?.addEventListener("resize",()=>Ue.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&Wi()}),window.addEventListener("pagehide",Wi),Jo.addEventListener("webglcontextlost",e=>{e.preventDefault(),Wi(),Wt("Graphics were interrupted. Reload to restore the paused battle.")});let i=setTimeout(()=>{mi.textContent="Preview ready \xB7 MR not detected yet"},3e3);(async()=>{try{await navigator.xr?.isSessionSupported("immersive-ar")?(mi.disabled=!1,mi.textContent="Enter mixed reality"):(mi.textContent="Open in Quest Browser for MR",mi.disabled=!0)}catch{mi.textContent="MR unavailable \xB7 preview ready",mi.disabled=!0}finally{clearTimeout(i)}})(),Ue.renderer.setAnimationLoop((e,t)=>{let n=Ko===null?0:Math.max(0,(e-Ko)/1e3);if(Ko=e,n>0&&n<.5&&(Ps.push(n*1e3),Ps.length>360&&Ps.shift()),t&&Ft){let r=Ue.renderer.xr.getReferenceSpace();Ft.visibilityState==="visible"&&k_(t,r)&&Pi.xr(t,r)}rt.update(n),Pi.interaction.update(Math.min(n,.1));let s=rt.observe();if(_d(s),s&&s.paused!==md&&(md=s.paused,s.paused||(Qt.started||Qt.start(),Qt.resumeForPage()),Qt.setDucked(s.paused)),Qt.update(Math.min(n,.1)),Ue.update(s,Pi.interaction.visuals(),Math.min(n,.1)),Ue.render(),t&&Ft?.visibilityState==="visible"&&!jo){let r=Ue.stats();tn.frames++,tn.peakUnits=Math.max(tn.peakUnits,s?.units.length||0),tn.peakDrawCalls=Math.max(tn.peakDrawCalls,r.calls),tn.peakTriangles=Math.max(tn.peakTriangles,r.triangles),n>0&&n<.5&&(Nr.push(n*1e3),Nr.length>720&&Nr.shift())}e-dd>1e4&&(dd=e,Ur())}),window.InkTabletop=Object.freeze({observe:()=>rt.observe(),replay:()=>rt.session?.replay(),diagnostics:()=>({...Ue.stats(),xr:!!Ft,xrMeasurements:pd(),placing:Gn,quality:rt.quality,holds:rt.holds.size,flights:Pi.interaction.flights.size,table:structuredClone(Ue.table),frameP95:Ps.length?[...Ps].sort((e,t)=>e-t)[Math.floor((Ps.length-1)*.95)]:null}),project:e=>{Ue.syncTable();let t=new I(e.x,e.y||0,e.z);Ue.root.localToWorld(t),t.project(Ue.camera);let n=Jo.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}},restore:e=>{Wi(),rt.session=Bn.restore(e),rt.session.pause(!0),Ue.labelClock=0},checkpoint:()=>rt.session?.checkpoint()}),document.body.dataset.ready="true","serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").catch(()=>{})}z_().catch(i=>{Wi(),Wt(`The tabletop could not load (${i.name}). Reload or open the classic game.`)});})();
