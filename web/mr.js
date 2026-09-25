(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},An={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,mc=1,fu=2;var Or=1,pu=2,Gs=3,ki=0,sn=1,He=2,ti=0,Ws=1,gc=2,_c=3,xc=4,mu=5;var ss=100,gu=101,_u=102,xu=103,yu=104,vu=200,Mu=201,Su=202,bu=203,yc=204,vc=205,Tu=206,Eu=207,wu=208,Au=209,Ru=210,Cu=211,Iu=212,Pu=213,Lu=214,Ua=0,Fa=1,Oa=2,Ps=3,Ba=4,ka=5,za=6,Va=7,Mc=0,Du=1,Nu=2,zn=0,Sc=1,bc=2,Tc=3,Ec=4,wc=5,Ac=6,Rc=7;var Cc=300,zi=301,rs=302,fo=303,po=304,Br=306,Ls=1e3,jn=1001,Ha=1002,ke=1003,Uu=1004;var kr=1005;var Pe=1006,mo=1007;var ei=1008;var un=1009,Ic=1010,Pc=1011,Xs=1012,go=1013,Vn=1014,Rn=1015,Hn=1016,_o=1017,xo=1018,qs=1020,Lc=35902,Dc=35899,Nc=1021,Uc=1022,Cn=1023,Kn=1026,Vi=1027,yo=1028,vo=1029,Hi=1030,Mo=1031;var So=1033,zr=33776,Vr=33777,Hr=33778,Gr=33779,bo=35840,To=35841,Eo=35842,wo=35843,Ao=36196,Ro=37492,Co=37496,Io=37488,Po=37489,Wr=37490,Lo=37491,Do=37808,No=37809,Uo=37810,Fo=37811,Oo=37812,Bo=37813,ko=37814,zo=37815,Vo=37816,Ho=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,Yo=36492,Zo=36494,Jo=36495,$o=36283,jo=36284,Xr=36285,Ko=36286;var mr=2300,Ga=2301,Da=2302,oc=2303,lc=2400,cc=2401,hc=2402;var Fu=3200;var Fc=0,Ou=1,pi="",Ce="srgb",gr="srgb-linear",_r="linear",ee="srgb";var Na=7680;var Bu=519,ku=512,zu=513,Vu=514,Qo=515,Hu=516,Gu=517,tl=518,Wu=519,Xu=35044,Ys=35048;var Oc="300 es",Fn=2e3,Ds=2001;function Bf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function kf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){let n=xr("canvas");return n.style.display="block",n}var Fh={},Ns=null;function Bc(...n){let t="THREE."+n.shift();Ns?Ns("log",t,...n):console.log(t,...n)}function Yu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Rt(...n){n=Yu(n);let t="THREE."+n.shift();if(Ns)Ns("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Pt(...n){n=Yu(n);let t="THREE."+n.shift();if(Ns)Ns("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Qi(...n){let t=n.join(" ");t in Fh||(Fh[t]=!0,Rt(...n))}function Zu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ju={[Ua]:Fa,[Oa]:za,[Ba]:Va,[Ps]:ka,[Fa]:Ua,[za]:Oa,[Va]:Ba,[ka]:Ps},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,fr=Math.PI/180,Us=180/Math.PI;function Zs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Vt(n,t,e){return Math.max(t,Math.min(e,n))}function kc(n,t){return(n%t+t)%t}function zf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Vf(n,t,e){return n!==t?(e-n)/(t-n):0}function pr(n,t,e){return(1-e)*n+e*t}function Hf(n,t,e,i){return pr(n,t,1-Math.exp(-e*i))}function Gf(n,t=1){return t-Math.abs(kc(n,t*2)-t)}function Wf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Xf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function qf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Yf(n,t){return n+Math.random()*(t-n)}function Zf(n){return n*(.5-Math.random())}function Jf(n){n!==void 0&&(Oh=n);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $f(n){return n*fr}function jf(n){return n*Us}function Kf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Qf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ep(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+i)/2),l=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*l,c*d,c*u,o*h);break;case"YZY":n.set(c*u,o*l,c*d,o*h);break;case"ZXZ":n.set(c*d,c*u,o*l,o*h);break;case"XZX":n.set(o*l,c*m,c*f,o*h);break;case"YXY":n.set(c*f,o*l,c*m,o*h);break;case"ZYZ":n.set(c*m,c*f,o*l,o*h);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var as={DEG2RAD:fr,RAD2DEG:Us,generateUUID:Zs,clamp:Vt,euclideanModulo:kc,mapLinear:zf,inverseLerp:Vf,lerp:pr,damp:Hf,pingpong:Gf,smoothstep:Wf,smootherstep:Xf,randInt:qf,randFloat:Yf,randFloatSpread:Zf,seededRandom:Jf,degToRad:$f,radToDeg:jf,isPowerOfTwo:Kf,ceilPowerOfTwo:Qf,floorPowerOfTwo:tp,setQuaternionFromProperEuler:ep,normalize:Qe,denormalize:Cs},It=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],h=i[s+1],l=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||c!==u||h!==f||l!==m){let g=c*u+h*f+l*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let T=Math.acos(g),A=Math.sin(T);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A,c=c*p+u*o,h=h*p+f*o,l=l*p+m*o,d=d*p+x*o}else{c=c*p+u*o,h=h*p+f*o,l=l*p+m*o,d=d*p+x*o;let T=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=T,h*=T,l*=T,d*=T}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],h=i[s+2],l=i[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+l*d+c*f-h*u,t[e+1]=c*m+l*u+h*d-o*f,t[e+2]=h*m+l*f+o*u-c*d,t[e+3]=l*m-o*d-c*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(s/2),d=o(r/2),u=c(i/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*l*d+h*f*m,this._y=h*f*d-u*l*m,this._z=h*l*m+u*f*d,this._w=h*l*d-u*f*m;break;case"YXZ":this._x=u*l*d+h*f*m,this._y=h*f*d-u*l*m,this._z=h*l*m-u*f*d,this._w=h*l*d+u*f*m;break;case"ZXY":this._x=u*l*d-h*f*m,this._y=h*f*d+u*l*m,this._z=h*l*m+u*f*d,this._w=h*l*d-u*f*m;break;case"ZYX":this._x=u*l*d-h*f*m,this._y=h*f*d+u*l*m,this._z=h*l*m-u*f*d,this._w=h*l*d+u*f*m;break;case"YZX":this._x=u*l*d+h*f*m,this._y=h*f*d+u*l*m,this._z=h*l*m-u*f*d,this._w=h*l*d-u*f*m;break;case"XZY":this._x=u*l*d-h*f*m,this._y=h*f*d-u*l*m,this._z=h*l*m+u*f*d,this._w=h*l*d+u*f*m;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(l-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-i*h,this._z=r*l+a*h+i*c-s*o,this._w=a*l-i*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,e=Math.sin(e*h)/l,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*i),l=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*h+a*d-o*l,this.y=i+c*l+o*h-r*d,this.z=s+c*d+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return kl.copy(this).projectOnVector(t),this.sub(kl)}reflect(t){return this.sub(kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kl=new C,Bh=new ae,Dt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,h)}set(t,e,i,s,r,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=i,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],l=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],T=s[1],A=s[4],v=s[7],b=s[2],M=s[5],R=s[8];return r[0]=a*x+o*T+c*b,r[3]=a*g+o*A+c*M,r[6]=a*p+o*v+c*R,r[1]=h*x+l*T+d*b,r[4]=h*g+l*A+d*M,r[7]=h*p+l*v+d*R,r[2]=u*x+f*T+m*b,r[5]=u*g+f*A+m*M,r[8]=u*p+f*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-i*r*l+i*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*a-o*h,u=o*c-l*r,f=h*r-a*c,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*h-l*i)*x,t[2]=(o*i-s*a)*x,t[3]=u*x,t[4]=(l*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(i*c-h*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zl=new Dt,kh=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){let n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:t,whitePoint:i,transfer:_r,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),n}var qt=np();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ms,Wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ms===void 0&&(ms=xr("canvas")),ms.width=t.width,ms.height=t.height;let s=ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ms}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ip=0,Fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vl(s[a].image)):r.push(Vl(s[a]))}else r=Vl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var sp=0,Hl=new C,nn=class n extends On{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=jn,s=jn,r=Pe,a=ei,o=Cn,c=un,h=n.DEFAULT_ANISOTROPY,l=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Zs(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Cc;nn.DEFAULT_ANISOTROPY=1;var ve=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(h+1)/2,v=(f+1)/2,b=(p+1)/2,M=(l+u)/4,R=(d+x)/4,y=(m+g)/4;return A>v&&A>b?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=M/i,r=R/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=y/r),this.set(i,s,r,e),this}let T=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-l)*(u-l));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(d-x)/T,this.z=(u-l)/T,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new nn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Xa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},yr=class extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wt=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,h,l,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,h,l,d,u,f,m,x,g)}set(t,e,i,s,r,a,o,c,h,l,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*l,f=a*d,m=o*l,x=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=f+m*h,e[5]=u-x*h,e[9]=-o*c,e[2]=x-u*h,e[6]=m+f*h,e[10]=a*c}else if(t.order==="YXZ"){let u=c*l,f=c*d,m=h*l,x=h*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*l,f=c*d,m=h*l,x=h*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*l,e[9]=x-u*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*l,f=a*d,m=o*l,x=o*d;e[0]=c*l,e[4]=m*h-f,e[8]=u*h+x,e[1]=c*d,e[5]=x*h+u,e[9]=f*h-m,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*h,m=o*c,x=o*h;e[0]=c*l,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*c,f=a*h,m=o*c,x=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+x,e[5]=a*l,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*l,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,ap)}lookAt(t,e,i){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),wi.crossVectors(i,mn),wi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),wi.crossVectors(i,mn)),wi.normalize(),ua.crossVectors(mn,wi),s[0]=wi.x,s[4]=ua.x,s[8]=mn.x,s[1]=wi.y,s[5]=ua.y,s[9]=mn.y,s[2]=wi.z,s[6]=ua.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],l=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],T=i[3],A=i[7],v=i[11],b=i[15],M=s[0],R=s[4],y=s[8],E=s[12],I=s[1],U=s[5],F=s[9],V=s[13],D=s[2],H=s[6],Z=s[10],J=s[14],nt=s[3],X=s[7],Q=s[11],et=s[15];return r[0]=a*M+o*I+c*D+h*nt,r[4]=a*R+o*U+c*H+h*X,r[8]=a*y+o*F+c*Z+h*Q,r[12]=a*E+o*V+c*J+h*et,r[1]=l*M+d*I+u*D+f*nt,r[5]=l*R+d*U+u*H+f*X,r[9]=l*y+d*F+u*Z+f*Q,r[13]=l*E+d*V+u*J+f*et,r[2]=m*M+x*I+g*D+p*nt,r[6]=m*R+x*U+g*H+p*X,r[10]=m*y+x*F+g*Z+p*Q,r[14]=m*E+x*V+g*J+p*et,r[3]=T*M+A*I+v*D+b*nt,r[7]=T*R+A*U+v*H+b*X,r[11]=T*y+A*F+v*Z+b*Q,r[15]=T*E+A*V+v*J+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],T=c*f-h*u,A=o*f-h*d,v=o*u-c*d,b=a*f-h*l,M=a*u-c*l,R=a*d-o*l;return e*(x*T-g*A+p*v)-i*(m*T-g*b+p*M)+s*(m*A-x*b+p*R)-r*(m*v-x*M+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],l=t[10];return e*(a*l-o*h)-i*(r*l-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],T=e*o-i*a,A=e*c-s*a,v=e*h-r*a,b=i*c-s*o,M=i*h-r*o,R=s*h-r*c,y=l*x-d*m,E=l*g-u*m,I=l*p-f*m,U=d*g-u*x,F=d*p-f*x,V=u*p-f*g,D=T*V-A*F+v*U+b*I-M*E+R*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return t[0]=(o*V-c*F+h*U)*H,t[1]=(s*F-i*V-r*U)*H,t[2]=(x*R-g*M+p*b)*H,t[3]=(u*M-d*R-f*b)*H,t[4]=(c*I-a*V-h*E)*H,t[5]=(e*V-s*I+r*E)*H,t[6]=(g*v-m*R-p*A)*H,t[7]=(l*R-u*v+f*A)*H,t[8]=(a*F-o*I+h*y)*H,t[9]=(i*I-e*F-r*y)*H,t[10]=(m*M-x*v+p*T)*H,t[11]=(d*v-l*M-f*T)*H,t[12]=(o*E-a*U-c*y)*H,t[13]=(e*U-i*E+s*y)*H,t[14]=(x*A-m*b-g*T)*H,t[15]=(l*b-d*A+u*T)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+i,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+i,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,d=o+o,u=r*h,f=r*l,m=r*d,x=a*l,g=a*d,p=o*d,T=c*h,A=c*l,v=c*d,b=i.x,M=i.y,R=i.z;return s[0]=(1-(x+p))*b,s[1]=(f+v)*b,s[2]=(m-A)*b,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+p))*M,s[6]=(g+T)*M,s[7]=0,s[8]=(m+A)*R,s[9]=(g-T)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let h=1/a,l=1/o,d=1/c;return Dn.elements[0]*=h,Dn.elements[1]*=h,Dn.elements[2]*=h,Dn.elements[4]*=l,Dn.elements[5]*=l,Dn.elements[6]*=l,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Fn,c=!1){let h=this.elements,l=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===Fn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ds)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Fn,c=!1){let h=this.elements,l=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===Fn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ds)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},gs=new C,Dn=new Wt,rp=new C(0,0,0),ap=new C(1,1,1),wi=new C,ua=new C,mn=new C,Vh=new Wt,Hh=new ae,En=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},op=0,Gh=new C,_s=new ae,oi=new Wt,da=new C,ar=new C,lp=new C,cp=new ae,Wh=new C(1,0,0),Xh=new C(0,1,0),qh=new C(0,0,1),Yh={type:"added"},hp={type:"removed"},xs={type:"childadded",child:null},Gl={type:"childremoved",child:null},Ve=class n extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new En,i=new ae,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Dt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?da.copy(t):da.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ar,da,this.up):oi.lookAt(da,ar,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(oi),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),xs.child=t,this.dispatchEvent(xs),xs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new C(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},up={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(h,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(up)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Wl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Nt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=kc(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Wl(a,r,t+1/3),this.g=Wl(a,r,t),this.b=Wl(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let i=$u[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return qt.workingToColorSpace(Ze.copy(this),t),Math.round(Vt(Ze.r*255,0,255))*65536+Math.round(Vt(Ze.g*255,0,255))*256+Math.round(Vt(Ze.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ce){qt.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(fa);let i=pr(Ai.h,fa.h,e),s=pr(Ai.s,fa.s,e),r=pr(Ai.l,fa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Nt;Nt.NAMES=$u;var vr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new C,li=new C,Xl=new C,ci=new C,ys=new C,vs=new C,Zh=new C,ql=new C,Yl=new C,Zl=new C,Jl=new ve,$l=new ve,jl=new ve,Pi=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),li.subVectors(i,e),Xl.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(li),c=Nn.dot(Xl),h=li.dot(li),l=li.dot(Xl),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*c-o*l)*u,m=(a*l-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Jl.setScalar(0),$l.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jl,r.x),a.addScaledVector($l,r.y),a.addScaledVector(jl,r.z),a}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),li.subVectors(t,e),Nn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,i),vs.subVectors(r,i),ql.subVectors(t,i);let c=ys.dot(ql),h=vs.dot(ql);if(c<=0&&h<=0)return e.copy(i);Yl.subVectors(t,s);let l=ys.dot(Yl),d=vs.dot(Yl);if(l>=0&&d<=l)return e.copy(s);let u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(i).addScaledVector(ys,a);Zl.subVectors(t,r);let f=ys.dot(Zl),m=vs.dot(Zl);if(m>=0&&f<=m)return e.copy(r);let x=f*h-c*m;if(x<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(i).addScaledVector(vs,o);let g=l*m-f*d;if(g<=0&&d-l>=0&&f-m>=0)return Zh.subVectors(r,s),o=(d-l)/(d-l+(f-m)),e.copy(s).addScaledVector(Zh,o);let p=1/(g+x+u);return a=x*p,o=u*p,e.copy(i).addScaledVector(ys,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),ma.subVectors(this.max,or),Ms.subVectors(t.a,or),Ss.subVectors(t.b,or),bs.subVectors(t.c,or),Ri.subVectors(Ss,Ms),Ci.subVectors(bs,Ss),Ji.subVectors(Ms,bs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ji.y,Ji.x,0];return!Kl(e,Ms,Ss,bs,ma)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,Ms,Ss,bs,ma))?!1:(ga.crossVectors(Ri,Ci),e=[ga.x,ga.y,ga.z],Kl(e,Ms,Ss,bs,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new C,new C,new C,new C,new C,new C,new C,new C],Un=new C,pa=new wn,Ms=new C,Ss=new C,bs=new C,Ri=new C,Ci=new C,Ji=new C,or=new C,ma=new C,ga=new C,$i=new C;function Kl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){$i.fromArray(n,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=t.dot($i),h=e.dot($i),l=i.dot($i);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var Re=new C,_a=new It,dp=0,en=class extends On{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xu,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Mr=class extends en{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sr=class extends en{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var $t=class extends en{constructor(t,e,i){super(new Float32Array(t),e,i)}},fp=new wn,lr=new C,Ql=new C,Bn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(Ql)),this.expandByPoint(lr.copy(t.center).sub(Ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pp=0,Tn=new Wt,tc=new Ve,Ts=new C,gn=new wn,cr=new wn,Be=new C,Se=class n extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bf(t)?Sr:Mr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Dt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(gn.min,cr.min),gn.expandByPoint(Be),Be.addVectors(gn.max,cr.max),gn.expandByPoint(Be)):(gn.expandByPoint(cr.min),gn.expandByPoint(cr.max))}gn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Be.fromBufferAttribute(o,h),c&&(Ts.fromBufferAttribute(t,h),Be.add(Ts)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new en(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new C,c[y]=new C;let h=new C,l=new C,d=new C,u=new It,f=new It,m=new It,x=new C,g=new C;function p(y,E,I){h.fromBufferAttribute(i,y),l.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,I),l.sub(h),d.sub(h),f.sub(u),m.sub(u);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(U),o[y].add(x),o[E].add(x),o[I].add(x),c[y].add(g),c[E].add(g),c[I].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let y=0,E=T.length;y<E;++y){let I=T[y],U=I.start,F=I.count;for(let V=U,D=U+F;V<D;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new C,v=new C,b=new C,M=new C;function R(y){b.fromBufferAttribute(s,y),M.copy(b);let E=o[y];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(M,E);let U=v.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,U)}for(let y=0,E=T.length;y<E;++y){let I=T[y],U=I.start,F=I.count;for(let V=U,D=U+F;V<D;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,h=new C,l=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,g),o.add(l),c.add(l),h.add(l),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),i.setXYZ(u+0,l.x,l.y,l.z),i.setXYZ(u+1,l.x,l.y,l.z),i.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*l;for(let p=0;p<l;p++)u[m++]=h[f++]}return new en(u,l,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){let u=h[l],f=t(u,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],d=r[h];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=new C,mp=new C,gp=new Dt,tn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ec.subVectors(i,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||gp.getNormalMatrix(t),s=this.coplanarPoint(ec).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_p=0,Li=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Ws,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=vc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new tn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new It().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ui=new C,nc=new C,xa=new C,ya=new C,kn=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nc.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),ya.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(xa),o=ya.dot(this.direction),c=-ya.dot(xa),h=ya.lengthSq(),l=Math.abs(1-a*a),d,u,f,m;if(l>0)if(d=a*c-o,u=a*o-c,m=r*l,d>=0)if(u>=-m)if(u<=m){let x=1/l;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(nc).addScaledVector(xa,u),f}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);let i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,l=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=i.x-a.x,T=i.y-a.y,A=i.z-a.z,v=Math.abs(c),b=Math.abs(h),M=Math.abs(l),R,y,E,I,U,F,V,D,H,Z,J,nt;if(v>=b&&v>=M?(E=c,F=d,H=m,nt=p,c>=0?(R=h,y=l,I=u,U=f,V=x,D=g,Z=T,J=A):(R=l,y=h,I=f,U=u,V=g,D=x,Z=A,J=T)):b>=M?(E=h,F=u,H=x,nt=T,h>=0?(R=l,y=c,I=f,U=d,V=g,D=m,Z=A,J=p):(R=c,y=l,I=d,U=f,V=m,D=g,Z=p,J=A)):(E=l,F=f,H=g,nt=A,l>=0?(R=c,y=h,I=d,U=u,V=m,D=x,Z=p,J=T):(R=h,y=c,I=u,U=d,V=x,D=m,Z=T,J=p)),E===0)return null;let X=R/E,Q=y/E,et=1/E,At=I-X*F,Tt=U-Q*F,ue=V-X*H,Zt=D-Q*H,Kt=Z-X*nt,q=J-Q*nt,K=Kt*Zt-q*ue,_t=At*q-Tt*Kt,Ut=ue*Tt-Zt*At;if(s){if(K<0||_t<0||Ut<0)return null}else if((K<0||_t<0||Ut<0)&&(K>0||_t>0||Ut>0))return null;let mt=K+_t+Ut;if(mt===0)return null;let zt=et*(K*F+_t*H+Ut*nt);return(mt>0?zt<0:zt>0)?null:this.at(zt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jh=new Wt,ji=new kn,va=new Bn,$h=new C,Ma=new C,Sa=new C,ba=new C,ic=new C,Ta=new C,jh=new C,Ea=new C,be=class extends Ve{constructor(t=new Se,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],d=r[c];l!==0&&(ic.fromBufferAttribute(d,t),a?Ta.addScaledVector(ic,l):Ta.addScaledVector(ic.sub(e),l))}e.add(Ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(va.containsPoint(ji.origin)===!1&&(ji.intersectSphere(va,$h)===null||ji.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],T=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=T,b=A;v<b;v+=3){let M=o.getX(v),R=o.getX(v+1),y=o.getX(v+2);s=wa(this,p,t,i,h,l,d,M,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let T=o.getX(g),A=o.getX(g+1),v=o.getX(g+2);s=wa(this,a,t,i,h,l,d,T,A,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],T=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=T,b=A;v<b;v+=3){let M=v,R=v+1,y=v+2;s=wa(this,p,t,i,h,l,d,M,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let T=g,A=g+1,v=g+2;s=wa(this,a,t,i,h,l,d,T,A,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function xp(n,t,e,i,s,r,a,o){let c;if(t.side===sn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===ki,o),c===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Ea);return h<e.near||h>e.far?null:{distance:h,point:Ea.clone(),object:n}}function wa(n,t,e,i,s,r,a,o,c,h){n.getVertexPosition(o,Ma),n.getVertexPosition(c,Sa),n.getVertexPosition(h,ba);let l=xp(n,t,e,i,Ma,Sa,ba,jh);if(l){let d=new C;Pi.getBarycoord(jh,Ma,Sa,ba,d),s&&(l.uv=Pi.getInterpolatedAttribute(s,o,c,h,d,new It)),r&&(l.uv1=Pi.getInterpolatedAttribute(r,o,c,h,d,new It)),a&&(l.normal=Pi.getInterpolatedAttribute(a,o,c,h,d,new C),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new C,materialIndex:0};Pi.getNormal(Ma,Sa,ba,u.normal),l.face=u,l.barycoord=d}return l}var ts=class extends nn{constructor(t=null,e=1,i=1,s,r,a,o,c,h=ke,l=ke,d,u){super(null,a,o,c,h,l,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class extends en{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new Wt,Kh=new Wt,Aa=[],Qh=new wn,yp=new Wt,hr=new be,ur=new Bn,ns=class extends be{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),Qh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),ur.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Kh.multiplyMatrices(i,Es),hr.matrixWorld=Kh,hr.raycast(t,Aa);for(let a=0,o=Aa.length;a<o;a++){let c=Aa[a];c.instanceId=r,c.object=this,e.push(c)}Aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,yo,Rn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new Bn,vp=new It(.5,.5),Ra=new C,ks=class{constructor(t=new tn,e=new tn,i=new tn,s=new tn,r=new tn,a=new tn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],l=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],T=r[12],A=r[13],v=r[14],b=r[15];if(s[0].setComponents(h-a,f-l,p-m,b-T).normalize(),s[1].setComponents(h+a,f+l,p+m,b+T).normalize(),s[2].setComponents(h+o,f+d,p+x,b+A).normalize(),s[3].setComponents(h-o,f-d,p-x,b-A).normalize(),i)s[4].setComponents(c,u,g,v).normalize(),s[5].setComponents(h-c,f-u,p-g,b-v).normalize();else if(s[4].setComponents(h-c,f-u,p-g,b-v).normalize(),e===Fn)s[5].setComponents(h+c,f+u,p+g,b+v).normalize();else if(e===Ds)s[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=vp.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ra.x=s.normal.x>0?t.max.x:t.min.x,Ra.y=s.normal.y>0?t.max.y:t.min.y,Ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Di=class extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ya=new C,Za=new C,tu=new Wt,dr=new kn,Ca=new Bn,sc=new C,eu=new C,Ni=class extends Ve{constructor(t=new Se,e=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ya.fromBufferAttribute(e,s-1),Za.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ya.distanceTo(Za);t.setAttribute("lineDistance",new $t(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;tu.copy(s).invert(),dr.copy(t.ray).applyMatrix4(tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=h){let p=l.getX(x),T=l.getX(x+1),A=Ia(this,t,dr,c,p,T,x);A&&e.push(A)}if(this.isLineLoop){let x=l.getX(m-1),g=l.getX(f),p=Ia(this,t,dr,c,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=h){let p=Ia(this,t,dr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ia(this,t,dr,c,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ia(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Ya.fromBufferAttribute(o,s),Za.fromBufferAttribute(o,r),e.distanceSqToSegment(Ya,Za,sc,eu)>i)return;sc.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(sc);if(!(h<t.near||h>t.far))return{distance:h,point:eu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var nu=new C,iu=new C,br=class extends Ni{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)nu.fromBufferAttribute(e,s),iu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+nu.distanceTo(iu);t.setAttribute("lineDistance",new $t(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tr=class extends nn{constructor(t=[],e=zi,i,s,r,a,o,c,h,l){super(t,e,i,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},is=class extends nn{constructor(t,e,i,s,r,a,o,c,h){super(t,e,i,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends nn{constructor(t,e,i=Vn,s,r,a,o=ke,c=ke,h,l=Kn,d=1){if(l!==Kn&&l!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,l,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends Ui{constructor(t,e=Vn,i=zi,s,r,a=ke,o=ke,c,h=Kn){let l={width:t,height:t,depth:1},d=[l,l,l,l,l,l];super(t,t,e,i,s,r,a,o,c,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Er=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qn=class n extends Se{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],l=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(d,2));function m(x,g,p,T,A,v,b,M,R,y,E){let I=v/R,U=b/y,F=v/2,V=b/2,D=M/2,H=R+1,Z=y+1,J=0,nt=0,X=new C;for(let Q=0;Q<Z;Q++){let et=Q*U-V;for(let At=0;At<H;At++){let Tt=At*I-F;X[x]=Tt*T,X[g]=et*A,X[p]=D,h.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=M>0?1:-1,l.push(X.x,X.y,X.z),d.push(At/R),d.push(1-Q/y),J+=1}}for(let Q=0;Q<y;Q++)for(let et=0;et<R;et++){let At=u+et+H*Q,Tt=u+et+H*(Q+1),ue=u+(et+1)+H*(Q+1),Zt=u+(et+1)+H*Q;c.push(At,Tt,Zt),c.push(Tt,ue,Zt),nt+=6}o.addGroup(f,nt,E),f+=nt,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zs=class n extends Se{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],d=[],u=[],f=[],m=0,x=[],g=i/2,p=0;T(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(l),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function T(){let v=new C,b=new C,M=0,R=(e-t)/i;for(let y=0;y<=r;y++){let E=[],I=y/r,U=I*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,D=V*c+o,H=Math.sin(D),Z=Math.cos(D);b.x=U*H,b.y=-I*i+g,b.z=U*Z,d.push(b.x,b.y,b.z),v.set(H,R,Z).normalize(),u.push(v.x,v.y,v.z),f.push(V,1-I),E.push(m++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let I=x[E][y],U=x[E+1][y],F=x[E+1][y+1],V=x[E][y+1];(t>0||E!==0)&&(l.push(I,U,V),M+=3),(e>0||E!==r-1)&&(l.push(U,F,V),M+=3)}h.addGroup(p,M,0),p+=M}function A(v){let b=m,M=new It,R=new C,y=0,E=v===!0?t:e,I=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),m++;let U=m;for(let F=0;F<=s;F++){let D=F/s*c+o,H=Math.cos(D),Z=Math.sin(D);R.x=E*Z,R.y=g*I,R.z=E*H,d.push(R.x,R.y,R.z),u.push(0,I,0),M.x=H*.5+.5,M.y=Z*.5*I+.5,f.push(M.x,M.y),m++}for(let F=0;F<s;F++){let V=b+F,D=U+F;v===!0?l.push(D,D+1,V):l.push(D+1,D,V),y+=3}h.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class n extends zs{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fi=class n extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),h=o+1,l=c+1,d=t/o,u=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<l;p++){let T=p*u-a;for(let A=0;A<h;A++){let v=A*d-r;m.push(v,-T,0),x.push(0,0,1),g.push(A/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let A=T+h*p,v=T+h*(p+1),b=T+1+h*(p+1),M=T+1+h*p;f.push(A,v,M),f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ar=class n extends Se{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],h=[],l=[],d=t,u=(e-t)/s,f=new C,m=new It;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,l.push(m.x,m.y)}d+=u}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let T=p+g,A=T,v=T+i+1,b=T+i+2,M=T+1;o.push(A,v,M),o.push(v,b,M)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Rr=class n extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),h=0,l=[],d=new C,u=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let T=[],A=p/i,v=a+A*o,b=t*Math.cos(v),M=Math.sqrt(t*t-b*b),R=0;p===0&&a===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let E=y/e,I=s+E*r;d.x=-M*Math.cos(I),d.y=b,d.z=M*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(E+R,1-A),T.push(h++)}l.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){let A=l[p][T+1],v=l[p][T],b=l[p+1][T],M=l[p+1][T+1];(p!==0||a>0)&&f.push(A,v,M),(p!==i-1||c<Math.PI)&&f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function os(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(su(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function $e(n){let t={};for(let e=0;e<n.length;e++){let i=os(n[e]);for(let s in i)t[s]=i[s]}return t}function su(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var ju={clone:os,merge:$e},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[i].value=new It().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Wt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$a=class extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ja=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Cr=class extends Di{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ws(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function rc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Fi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends Fi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cc:r=t,o=2*e-i;break;case hc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case cc:a=t,c=2*i-e;break;case hc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let h=(i-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-i),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,T=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let b=0;b!==o;++b)r[b]=p*a[l+b]+T*a[h+b]+A*a[c+b]+v*a[d+b];return r}},to=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(i-e)/(s-e),d=1-l;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[c+u]*l;return r}},eo=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},no=class extends Fi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this.inTangents,d=this.outTangents;if(!l||!d){let m=(i-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[h+g]*x+a[c+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[h+m],g=a[c+m],p=f*u+m*2,T=d[p],A=d[p+1],v=t*u+m*2,b=l[v],M=l[v+1],R=Ep(i,e,T,b,s);r[m]=Ku(R,x,A,M,g)}return r}};function Ku(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Tp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ep(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Ku(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Tp(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var xn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),rc(t.settings)&&(i.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new no(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case Ga:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case oc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;rc(this.settings)&&(ru(this.settings.inTangents,t),ru(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&kf(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){Pt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(s)c=!0;else{let d=o*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,h=0;h!==i;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,rc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ru(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ga;var Oi=class extends xn{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=mr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}};io.prototype.ValueTypeName="color";var so=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}};so.prototype.ValueTypeName="number";var ro=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),h=t*o;for(let l=h+o;h!==l;h+=4)ae.slerpFlat(r,0,a,h-o,a,h,c);return r}},Ir=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends xn{constructor(t,e,i){super(t,e,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=mr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}};ao.prototype.ValueTypeName="vector";var oo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){let d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],m=h[d+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qu=new oo,lo=class{constructor(t){this.manager=t!==void 0?t:Qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends Pr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ac=new Wt,au=new C,ou=new C,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;au.setFromMatrixPosition(t.matrixWorld),e.position.copy(au),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ac,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pa=new C,La=new ae,$n=new C,Dr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pa,La,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Pa,La,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new C,lu=new It,cu=new It,Je=class extends Dr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vs=class extends Dr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},uc=class extends co{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new uc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var As=-90,Rs=1,ho=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Je(As,Rs,t,e);r.layers=this.layers,this.add(r);let a=new Je(As,Rs,t,e);a.layers=this.layers,this.add(a);let o=new Je(As,Rs,t,e);o.layers=this.layers,this.add(o);let c=new Je(As,Rs,t,e);c.layers=this.layers,this.add(c);let h=new Je(As,Rs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},uo=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Vc="\\[\\]\\.:\\/",wp=new RegExp("["+Vc+"]","g"),Hc="[^"+Vc+"]",Ap="[^"+Vc.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",Hc),Cp=/(WCOD+)?/.source.replace("WCOD",Ap),Ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Lp=new RegExp("^"+Rp+Cp+Ip+Pp+"$"),Dp=["material","materials","bones","map"],dc=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wp,"")}static parseTrackName(t){let e=Lp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Dp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=dc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);var hu=new Wt,Ur=class{constructor(t,e,i=0,s=1/0){this.ray=new kn(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(t,e=!0,i=[]){return fc(t,this,i,e),i.sort(uu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)fc(t[s],this,i,e);return i.sort(uu),i}};function uu(n,t){return n.distance-t.distance}function fc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)fc(r[a],t,e,!0)}}var Hs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var pc=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var Fr=class extends On{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Gc(n,t,e,i){let s=Np(i);switch(e){case Nc:return n*t;case yo:return n*t/s.components*s.byteLength;case vo:return n*t/s.components*s.byteLength;case Hi:return n*t*2/s.components*s.byteLength;case Mo:return n*t*2/s.components*s.byteLength;case Uc:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case So:return n*t*4/s.components*s.byteLength;case zr:case Vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case To:case wo:return Math.max(n,16)*Math.max(t,8)/4;case bo:case Eo:return Math.max(n,8)*Math.max(t,8)/2;case Ao:case Ro:case Io:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Co:case Wr:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yo:case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $o:case jo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xr:case Ko:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Np(n){switch(n){case un:case Ic:return{byteLength:1,components:1};case Xs:case Pc:case Hn:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case Vn:case go:case Rn:return{byteLength:4,components:1};case Lc:case Dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Md(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Fp(n){let t=new WeakMap;function e(o,c){let h=o.array,l=o.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,h){let l=c.array,d=c.updateRanges;if(n.bindBuffer(h,o),d.length===0)n.bufferSubData(h,0,l);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];n.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$p=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
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
#endif`,U0=`uniform sampler2D dfgLUT;
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:kp,alphamap_pars_fragment:zp,alphatest_fragment:Vp,alphatest_pars_fragment:Hp,aomap_fragment:Gp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Zp,bsdfs:Jp,iridescence_fragment:$p,bumpmap_pars_fragment:jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:a0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:C0,envmap_vertex:y0,fog_vertex:v0,fog_pars_vertex:M0,fog_fragment:S0,fog_pars_fragment:b0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:E0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:I0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:N0,lights_physical_pars_fragment:U0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:B0,lightprobes_pars_fragment:k0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:J0,morphinstance_vertex:$0,morphcolor_vertex:j0,morphnormal_vertex:K0,morphtarget_pars_vertex:Q0,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:vm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:bm,skinning_pars_vertex:Tm,skinning_vertex:Em,skinnormal_vertex:wm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Im,transmission_fragment:Pm,transmission_pars_fragment:Lm,uv_pars_fragment:Dm,uv_pars_vertex:Nm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:km,backgroundCube_frag:zm,cube_vert:Vm,cube_frag:Hm,depth_vert:Gm,depth_frag:Wm,distance_vert:Xm,distance_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:$m,meshbasic_vert:jm,meshbasic_frag:Km,meshlambert_vert:Qm,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},ht={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},ii={basic:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:$e([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:$e([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:$e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:$e([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:$e([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:$e([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:$e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:$e([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:$e([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:$e([ht.lights,ht.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};ii.physical={uniforms:$e([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var el={r:0,b:0,g:0},_g=new Wt,Sd=new Dt;Sd.set(-1,0,0,0,1,0,0,0,1);function xg(n,t,e,i,s,r){let a=new Nt(0),o=s===!0?0:1,c,h,l=null,d=0,u=null;function f(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let v=T.backgroundBlurriness>0;A=t.get(A,v)}return A}function m(T){let A=!1,v=f(T);v===null?g(a,o):v&&v.isColor&&(g(v,1),A=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Br)?(h===void 0&&(h=new be(new Qn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:os(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Sd),h.material.toneMapped=qt.getTransfer(v.colorSpace)!==ee,(l!==v||d!==v.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,l=v,d=v.version,u=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new be(new fi(2,2),new _n({name:"BackgroundMaterial",uniforms:os(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=qt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(l!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,l=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,A){T.getRGB(el,zc(n)),e.buffers.color.setClear(el.r,el.g,el.b,A,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:m,addToRenderList:x,dispose:p}}function yg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(U,F,V,D,H){let Z=!1,J=d(U,D,V,F);r!==J&&(r=J,h(r.object)),Z=f(U,D,V,H),Z&&m(U,D,V,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(U,F,V,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return n.createVertexArray()}function h(U){return n.bindVertexArray(U)}function l(U){return n.deleteVertexArray(U)}function d(U,F,V,D){let H=D.wireframe===!0,Z=i[F.id];Z===void 0&&(Z={},i[F.id]=Z);let J=U.isInstancedMesh===!0?U.id:0,nt=Z[J];nt===void 0&&(nt={},Z[J]=nt);let X=nt[V.id];X===void 0&&(X={},nt[V.id]=X);let Q=X[H];return Q===void 0&&(Q=u(c()),X[H]=Q),Q}function u(U){let F=[],V=[],D=[];for(let H=0;H<e;H++)F[H]=0,V[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,F,V,D){let H=r.attributes,Z=F.attributes,J=0,nt=V.getAttributes();for(let X in nt)if(nt[X].location>=0){let et=H[X],At=Z[X];if(At===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(At=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(At=U.instanceColor)),et===void 0||et.attribute!==At||At&&et.data!==At.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function m(U,F,V,D){let H={},Z=F.attributes,J=0,nt=V.getAttributes();for(let X in nt)if(nt[X].location>=0){let et=Z[X];et===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let At={};At.attribute=et,et&&et.data&&(At.data=et.data),H[X]=At,J++}r.attributes=H,r.attributesNum=J,r.index=D}function x(){let U=r.newAttributes;for(let F=0,V=U.length;F<V;F++)U[F]=0}function g(U){p(U,0)}function p(U,F){let V=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;V[U]=1,D[U]===0&&(n.enableVertexAttribArray(U),D[U]=1),H[U]!==F&&(n.vertexAttribDivisor(U,F),H[U]=F)}function T(){let U=r.newAttributes,F=r.enabledAttributes;for(let V=0,D=F.length;V<D;V++)F[V]!==U[V]&&(n.disableVertexAttribArray(V),F[V]=0)}function A(U,F,V,D,H,Z,J){J===!0?n.vertexAttribIPointer(U,F,V,H,Z):n.vertexAttribPointer(U,F,V,D,H,Z)}function v(U,F,V,D){x();let H=D.attributes,Z=V.getAttributes(),J=F.defaultAttributeValues;for(let nt in Z){let X=Z[nt];if(X.location>=0){let Q=H[nt];if(Q===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let et=Q.normalized,At=Q.itemSize,Tt=t.get(Q);if(Tt===void 0)continue;let ue=Tt.buffer,Zt=Tt.type,Kt=Tt.bytesPerElement,q=Zt===n.INT||Zt===n.UNSIGNED_INT||Q.gpuType===go;if(Q.isInterleavedBufferAttribute){let K=Q.data,_t=K.stride,Ut=Q.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<X.locationSize;mt++)p(X.location+mt,K.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<X.locationSize;mt++)g(X.location+mt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let mt=0;mt<X.locationSize;mt++)A(X.location+mt,At/X.locationSize,Zt,et,_t*Kt,(Ut+At/X.locationSize*mt)*Kt,q)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<X.locationSize;K++)g(X.location+K);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let K=0;K<X.locationSize;K++)A(X.location+K,At/X.locationSize,Zt,et,At*Kt,At/X.locationSize*K*Kt,q)}}else if(J!==void 0){let et=J[nt];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(X.location,et);break;case 3:n.vertexAttrib3fv(X.location,et);break;case 4:n.vertexAttrib4fv(X.location,et);break;default:n.vertexAttrib1fv(X.location,et)}}}}T()}function b(){E();for(let U in i){let F=i[U];for(let V in F){let D=F[V];for(let H in D){let Z=D[H];for(let J in Z)l(Z[J].object),delete Z[J];delete D[H]}}delete i[U]}}function M(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let V in F){let D=F[V];for(let H in D){let Z=D[H];for(let J in Z)l(Z[J].object),delete Z[J];delete D[H]}}delete i[U.id]}function R(U){for(let F in i){let V=i[F];for(let D in V){let H=V[D];if(H[U.id]===void 0)continue;let Z=H[U.id];for(let J in Z)l(Z[J].object),delete Z[J];delete H[U.id]}}}function y(U){for(let F in i){let V=i[F],D=U.isInstancedMesh===!0?U.id:0,H=V[D];if(H!==void 0){for(let Z in H){let J=H[Z];for(let nt in J)l(J[nt].object),delete J[nt];delete H[Z]}delete V[D],Object.keys(V).length===0&&delete i[F]}}}function E(){I(),a=!0,r!==s&&(r=s,h(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function vg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,l){l!==0&&(n.drawArraysInstanced(i,c,h,l),e.update(h,i,l))}function o(c,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,l);let u=0;for(let f=0;f<l;f++)u+=h[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==un&&R!==Rn&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(Rt("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:M}}function Sg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new tn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?l(null):h();else{let T=r?0:i,A=T*4,v=p.clippingState||null;c.value=v,v=l(m,u,A,f);for(let b=0;b!==A;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,v=f;A!==x;++A,v+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var $s=4,bg=6,Tg=20,Eg=256,qr=new Vs,td=new Nt,Wc=null,Xc=0,qc=0,Yc=!1,wg=new C,ls=new C,il=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=wg}=r;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Hn,format:Cn,colorSpace:gr,depthBuffer:!1},s=ed(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ag(r)),this._blurMaterial=Cg(r,t,e),this._ggxMaterial=Rg(r,t,e)}return s}_compileMaterial(t){let e=new be(new Se,t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,i,s,r){let c=new Je(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(td),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Qn,new ze({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,p=!0):(g.color.copy(td),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[A],r.y,r.z)):v===1?(c.up.set(0,0,h[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[A],r.z)):(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[A]));let b=this._cubeSize;Js(s,v*b,A>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===zi||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Js(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,qr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,h=i/(this._lodMeshes.length-1),l=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-l*l),u=h*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-$s?i-m+$s:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,Js(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,qr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,Js(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(o,qr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let l=this._sizeLods[s],d=3*l*(s>this._lodMax-$s?s-this._lodMax+$s:0),u=4*(this._cubeSize-l);Js(e,d,u,3*l,2*l),a.setRenderTarget(e),a.render(c,qr)}};function Ag(n){let t=[],e=[],i=n,s=n-$s+1+bg;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),c=-o,h=1+o,l=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let T=p%3*2/3-1,A=p>2?0:-1,v=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];m.set(v,f*u*p);for(let b=0;b<u;b++){let M=l[b*2]*2-1,R=l[b*2+1]*2-1;p===0?ls.set(1,R,M):p===1?ls.set(-M,1,-R):p===2?ls.set(-M,R,1):p===3?ls.set(-1,R,-M):p===4?ls.set(-M,-1,R):ls.set(M,R,-1),ls.toArray(x,(p*u+b)*f)}}let g=new Se;g.setAttribute("position",new en(m,f)),g.setAttribute("outputDirection",new en(x,f)),e.push(new be(g,null)),i>$s&&i--}return{lodMeshes:e,sizeLods:t}}function ed(n,t,e){let i=new hn(n,t,e);return i.texture.mapping=Br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Rg(n,t,e){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cg(n,t,e){return new _n({name:"SphericalGaussianBlur",defines:{SAMPLES:Tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function nd(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function id(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sl=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ti});r.uniforms.tEquirect.value=e;let a=new be(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=Pe),new ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Ig(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===fo||f===po)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new sl(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===fo||f===po,x=f===zi||f===rs;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new il(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let T=u.image;return m&&T&&T.height>0||x&&T&&c(T)?(i===null&&(i=new il(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function o(u,f){return f===fo?u.mapping=zi:f===po&&(u.mapping=rs),u}function c(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Pg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Qi("WebGLRenderer: "+i+" extension not supported."),s}}}function Lg(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let T=f.array;x=f.version;for(let A=0,v=T.length;A<v;A+=3){let b=T[A+0],M=T[A+1],R=T[A+2];u.push(b,M,M,R,R,b)}}else{let T=m.array;x=m.version;for(let A=0,v=T.length/3-1;A<v;A+=3){let b=A+0,M=A+1,R=A+2;u.push(b,M,M,R,R,b)}}let g=new(m.count>=65535?Sr:Mr)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function l(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Dg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function h(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function l(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function Ng(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ug(n,t,e){let i=new WeakMap,s=new ve;function r(a,o,c){let h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0,u=i.get(o);if(u===void 0||u.count!==d){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),x===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*b*4*d),R=new yr(M,v,b,d);R.type=Rn,R.needsUpdate=!0;let y=A*4;for(let I=0;I<d;I++){let U=g[I],F=p[I],V=T[I],D=v*b*4*I;for(let H=0;H<U.count;H++){let Z=H*y;f===!0&&(s.fromBufferAttribute(U,H),M[D+Z+0]=s.x,M[D+Z+1]=s.y,M[D+Z+2]=s.z,M[D+Z+3]=0),m===!0&&(s.fromBufferAttribute(F,H),M[D+Z+4]=s.x,M[D+Z+5]=s.y,M[D+Z+6]=s.z,M[D+Z+7]=0),x===!0&&(s.fromBufferAttribute(V,H),M[D+Z+8]=s.x,M[D+Z+9]=s.y,M[D+Z+10]=s.z,M[D+Z+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new It(v,b)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Fg(n,t,e,i,s){let r=new WeakMap;function a(h){let l=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==l&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function c(h){let l=h.target;l.removeEventListener("dispose",c),i.releaseStatesOfObject(l),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}var Og={[Sc]:"LINEAR_TONE_MAPPING",[bc]:"REINHARD_TONE_MAPPING",[Tc]:"CINEON_TONE_MAPPING",[Ec]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[wc]:"CUSTOM_TONE_MAPPING"};function Bg(n,t,e,i,s,r){let a=new hn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new Se;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));let l=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new be(h,l),u=new Vs(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,T=[],A=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),c!==null&&c.setSize(v,b);for(let M=0;M<T.length;M++){let R=T[M];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){T=v,A=T.length>0&&T[0].isRenderPass===!0;let b=a.width,M=a.height;T.length>0&&o===null&&(o=new hn(b,M,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(b,M,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let y=T[R];y.setSize&&y.setSize(b,M)}},this.begin=function(v,b){if(x||v.toneMapping===zn&&T.length===0)return!1;if(p=b,b!==null){let M=b.width,R=b.height;(a.width!==M||a.height!==R)&&this.setSize(M,R)}return A===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=zn,!0},this.hasRenderPass=function(){return A},this.end=function(v,b){v.toneMapping=g,x=!0;let M=a,R=o;for(let y=0;y<T.length;y++){let E=T[y];E.enabled!==!1&&(E.render(v,R,M,b),E.needsSwap!==!1&&(M=R,R=R===o?c:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,l.defines={},qt.getTransfer(f)===ee&&(l.defines.SRGB_TRANSFER="");let y=Og[m];y&&(l.defines[y]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),l.dispose()}}var bd=new nn,$c=new Ui(1,1),Td=new yr,Ed=new qa,wd=new Tr,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function Ks(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ol(n,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Gg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),De(e,i)}}function Wg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),De(e,i)}}function Xg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),De(e,i)}}function qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function t_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=e.isReversedDepthBuffer()?tl:Qo,r=$c):r=bd,e.setTexture2D(t||r,s)}function e_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ed,s)}function n_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wd,s)}function i_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Td,s)}function s_(n){switch(n){case 5126:return kg;case 35664:return zg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return jg;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(n,t){n.uniform1fv(this.addr,t)}function a_(n,t){let e=Ks(t,this.size,2);n.uniform2fv(this.addr,e)}function o_(n,t){let e=Ks(t,this.size,3);n.uniform3fv(this.addr,e)}function l_(n,t){let e=Ks(t,this.size,4);n.uniform4fv(this.addr,e)}function c_(n,t){let e=Ks(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function h_(n,t){let e=Ks(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function u_(n,t){let e=Ks(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function d_(n,t){n.uniform1iv(this.addr,t)}function f_(n,t){n.uniform2iv(this.addr,t)}function p_(n,t){n.uniform3iv(this.addr,t)}function m_(n,t){n.uniform4iv(this.addr,t)}function g_(n,t){n.uniform1uiv(this.addr,t)}function __(n,t){n.uniform2uiv(this.addr,t)}function x_(n,t){n.uniform3uiv(this.addr,t)}function y_(n,t){n.uniform4uiv(this.addr,t)}function v_(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=$c:a=bd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function M_(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ed,r[a])}function S_(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wd,r[a])}function b_(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Td,r[a])}function T_(n){switch(n){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}var jc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=s_(e.type)}},Kc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T_(e.type)}},Qc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function cd(n,t){n.seq.push(t),n.map[t.id]=t}function E_(n,t,e){let i=n.name,s=i.length;for(Zc.lastIndex=0;;){let r=Zc.exec(i),a=Zc.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){cd(e,h===void 0?new jc(o,n,t):new Kc(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Qc(o),cd(e,d)),e=d}}}var js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);E_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function hd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var w_=37297,A_=0;function R_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var ud=new Dt;function C_(n){qt._getMatrix(ud,qt.workingColorSpace,n);let t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case _r:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+R_(n.getShaderSource(t),o)}else return r}function I_(n,t){let e=C_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var P_={[Sc]:"Linear",[bc]:"Reinhard",[Tc]:"Cineon",[Ec]:"ACESFilmic",[Ac]:"AgX",[Rc]:"Neutral",[wc]:"Custom"};function L_(n,t){let e=P_[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new C;function D_(){qt.getLuminanceCoefficients(nl);let n=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function U_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function F_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zr(n){return n!==""}function fd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(n){return n.replace(O_,k_)}var B_=new Map;function k_(n,t){let e=kt[t];if(e===void 0){let i=B_.get(t);if(i!==void 0)e=kt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return th(e)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(z_,V_)}function V_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var H_={[Or]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function G_(n){return H_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var W_={[zi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function X_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":W_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var q_={[rs]:"ENVMAP_MODE_REFRACTION"};function Y_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z_={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[Du]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function J_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[n.combine]||"ENVMAP_BLENDING_NONE"}function $_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function j_(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=G_(e),h=X_(e),l=Y_(e),d=J_(e),u=$_(e),f=N_(e),m=U_(r),x=s.createProgram(),g,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(g=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?kt.tonemapping_pars_fragment:"",e.toneMapping!==zn?L_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,I_("linearToOutputTexel",e.outputColorSpace),D_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),a=th(a),a=fd(a,e),a=pd(a,e),o=th(o),o=fd(o,e),o=pd(o,e),a=md(a),o=md(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=T+g+a,v=T+p+o,b=hd(s,s.VERTEX_SHADER,A),M=hd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(M)||"",H=F.trim(),Z=V.trim(),J=D.trim(),nt=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,M);else{let Q=dd(s,b,"vertex"),et=dd(s,M,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Q+`
`+et)}else H!==""?Rt("WebGLProgram: Program Info Log:",H):(Z===""||J==="")&&(X=!1);X&&(U.diagnostics={runnable:nt,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(M),y=new js(s,x),E=F_(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,w_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}var K_=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nh(t),e.set(t,i)),i}},nh=class{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}};function Q_(n){return n===Hi||n===Wr||n===Xr}function tx(n,t,e,i,s,r){let a=new Os,o=new eh,c=new Set,h=[],l=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,E,I,U,F,V){let D=U.fog,H=F.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,nt=t.get(y.envMap||Z,J),X=nt&&nt.mapping===Br?nt.image.height:null,Q=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=et!==void 0?et.length:0,Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let ue,Zt,Kt,q;if(Q){let fe=ii[Q];ue=fe.vertexShader,Zt=fe.fragmentShader}else{ue=y.vertexShader,Zt=y.fragmentShader;let fe=o.getVertexShaderStage(y),Qt=o.getFragmentShaderStage(y);o.update(y,fe,Qt),Kt=fe.id,q=Qt.id}let K=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,zt=!!y.map,Ie=!!y.matcap,Ht=!!nt,jt=!!y.aoMap,de=!!y.lightMap,Xt=!!y.bumpMap&&y.wireframe===!1,ye=!!y.normalMap,Oe=!!y.displacementMap,ln=!!y.emissiveMap,Me=!!y.metalnessMap,we=!!y.roughnessMap,N=y.anisotropy>0,Xe=y.clearcoat>0,re=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,O=y.sheen>0,z=y.transmission>0,W=N&&!!y.anisotropyMap,it=Xe&&!!y.clearcoatMap,st=Xe&&!!y.clearcoatNormalMap,Y=Xe&&!!y.clearcoatRoughnessMap,j=_&&!!y.iridescenceMap,rt=_&&!!y.iridescenceThicknessMap,St=O&&!!y.sheenColorMap,ct=O&&!!y.sheenRoughnessMap,at=!!y.specularMap,bt=!!y.specularColorMap,Ct=!!y.specularIntensityMap,Ft=z&&!!y.transmissionMap,L=z&&!!y.thicknessMap,ot=!!y.gradientMap,$=!!y.alphaMap,lt=y.alphaTest>0,ft=!!y.alphaHash,tt=!!y.extensions,Et=zn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Et=n.toneMapping);let vt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ue,fragmentShader:Zt,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:Ie,envMap:Ht,envMapMode:Ht&&nt.mapping,envMapCubeUVHeight:X,aoMap:jt,lightMap:de,bumpMap:Xt,normalMap:ye,displacementMap:Oe,emissiveMap:ln,normalMapObjectSpace:ye&&y.normalMapType===Ou,normalMapTangentSpace:ye&&y.normalMapType===Fc,packedNormalMap:ye&&y.normalMapType===Fc&&Q_(y.normalMap.format),metalnessMap:Me,roughnessMap:we,anisotropy:N,anisotropyMap:W,clearcoat:Xe,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Y,dispersion:re,retroreflection:w,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:O,sheenColorMap:St,sheenRoughnessMap:ct,specularMap:at,specularColorMap:bt,specularIntensityMap:Ct,transmission:z,transmissionMap:Ft,thicknessMap:L,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ft,combine:y.combine,mapUv:zt&&m(y.map.channel),aoMapUv:jt&&m(y.aoMap.channel),lightMapUv:de&&m(y.lightMap.channel),bumpMapUv:Xt&&m(y.bumpMap.channel),normalMapUv:ye&&m(y.normalMap.channel),displacementMapUv:Oe&&m(y.displacementMap.channel),emissiveMapUv:ln&&m(y.emissiveMap.channel),metalnessMapUv:Me&&m(y.metalnessMap.channel),roughnessMapUv:we&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:it&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ct&&m(y.sheenRoughnessMap.channel),specularMapUv:at&&m(y.specularMap.channel),specularColorMapUv:bt&&m(y.specularColorMap.channel),specularIntensityMapUv:Ct&&m(y.specularIntensityMap.channel),transmissionMapUv:Ft&&m(y.transmissionMap.channel),thicknessMapUv:L&&m(y.thicknessMap.channel),alphaMapUv:$&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ye||N),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(zt||$),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Tt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:ln&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:tt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&y.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(E,y),T(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function T(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let E=f[y.type],I;if(E){let U=ii[E];I=ju.clone(U.uniforms)}else I=y.uniforms;return I}function v(y,E){let I=l.get(E);return I!==void 0?++I.usedTimes:(I=new j_(n,E,y,s),h.push(I),l.set(E,I)),I}function b(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),l.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:b,releaseShaderCache:M,programs:h,dispose:R}}function ex(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function nx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function _d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,g,p){let T=n[t];return T===void 0?(T={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},n[t]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=m,T.materialVariant=a(u),T.groupOrder=x,T.renderOrder=u.renderOrder,T.z=g,T.group=p),t++,T}function c(u,f,m,x,g,p,T){T.reversedDepth===!0&&(g=-g);let A=o(u,f,m,x,g,p);m.transmission>0?i.push(A):m.transparent===!0?s.push(A):e.push(A)}function h(u,f,m,x,g,p){let T=o(u,f,m,x,g,p);m.transmission>0?i.unshift(T):m.transparent===!0?s.unshift(T):e.unshift(T)}function l(u,f){e.length>1&&e.sort(u||nx),i.length>1&&i.sort(f||_d),s.length>1&&s.sort(f||_d)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:h,finish:d,sort:l}}function ix(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new xd,n.set(i,[a])):s>=r.length?(a=new xd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function sx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Nt};break;case"SpotLight":e={position:new C,direction:new C,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function rx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ax=0;function ox(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function lx(n){let t=new sx,e=rx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);let s=new C,r=new Wt,a=new Wt;function o(h){let l=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,T=0,A=0,v=0,b=0,M=0,R=0,y=0,E=0,I=0;h.sort(ox);for(let F=0,V=h.length;F<V;F++){let D=h[F],H=D.color,Z=D.intensity,J=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hi?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)l+=H.r*Z,d+=H.g*Z,u+=H.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],Z);I++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=et,i.sunShadowMap[m]=nt;let At=Q.getViewportCount();for(let Tt=0;Tt<At;Tt++)i.sunShadowMatrix[x+Tt]=Q.getMatrix(Tt),i.sunShadowCascade[x+Tt]=Q._cascadeData[Tt];x+=At,m++}i.sun[f]=X,f++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=D.shadow.matrix,b++}i.directional[g]=X,g++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[T]=X;let Q=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,Q.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[T]=Q.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[T]=et,i.spotShadowMap[T]=nt,R++}T++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[A]=X,A++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=X,p++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[v]=X,v++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=d,i.ambient[2]=u;let U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==T||U.rectAreaLength!==A||U.hemiLength!==v||U.numSunShadows!==m||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==R||U.numSpotMaps!==y||U.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=T,i.rectArea.length=A,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-E,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=T,U.rectAreaLength=A,U.hemiLength=v,U.numSunShadows=m,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=R,U.numSpotMaps=y,U.numLightProbes=I,i.version=ax++)}function c(h,l){let d=0,u=0,f=0,m=0,x=0,g=0,p=l.matrixWorldInverse;for(let T=0,A=h.length;T<A;T++){let v=h[T];if(v.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:i}}function yd(n){let t=new lx(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function h(){t.setup(e)}function l(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function cx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yd(n),t.set(s,[o])):r>=a.length?(o=new yd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,dx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],fx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],vd=new Wt,Yr=new C,Jc=new C;function px(n,t,e){let i=new ks,s=new It,r=new It,a=new ve,o=new ja,c=new Ka,h={},l=e.maxTextureSize,d={[ki]:sn,[sn]:ki,[He]:He},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Se;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new be(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let p=this.type;this.render=function(M,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===pu&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Or);let E=n.getRenderTarget(),I=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==this.type;V&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=M.length;D<H;D++){let Z=M[D],J=Z.shadow;if(J===void 0){Rt("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let nt=J.getFrameExtents();s.multiply(nt),r.copy(J.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/nt.x),s.x=r.x*nt.x,J.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/nt.y),s.y=r.y*nt.y,J.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Gs){if(Z.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new hn(s.x,s.y,{format:Hi,type:Hn,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Ui(s.x,s.y,Rn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=Kn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke}else Z.isPointLight?(J.map=new sl(s.x),J.map.depthTexture=new Ja(s.x,Vn)):(J.map=new hn(s.x,s.y),J.map.depthTexture=new Ui(s.x,s.y,Vn)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=Kn,this.type===Or?(J.map.depthTexture.compareFunction=X?tl:Qo,J.map.depthTexture.minFilter=Pe,J.map.depthTexture.magFilter=Pe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,y);for(let et=0;et<Q;et++){let At=J.getCamera(et);if(Z.isPointLight){let Tt=J.camera,ue=J.matrix,Zt=Z.distance||Tt.far;Zt!==Tt.far&&(Tt.far=Zt,Tt.updateProjectionMatrix()),Yr.setFromMatrixPosition(Z.matrixWorld),Tt.position.copy(Yr),Jc.copy(Tt.position),Jc.add(dx[et]),Tt.up.copy(fx[et]),Tt.lookAt(Jc),Tt.updateMatrixWorld(),ue.makeTranslation(-Yr.x,-Yr.y,-Yr.z),vd.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(vd,Tt.coordinateSystem,Tt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,et),n.clear();else{et===0&&(n.setRenderTarget(J.map),n.clear());let Tt=J.getViewport(et);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),F.viewport(a)}i=J.getFrustum(et),v(R,y,At,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Gs&&T(J,y),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,I,U)};function T(M,R){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new hn(s.x,s.y,{format:Hi,type:Hn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,y,f,x,null)}function A(M,R,y,E){let I=null,U=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)I=U;else if(I=y.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=I.uuid,V=R.uuid,D=h[F];D===void 0&&(D={},h[F]=D);let H=D[V];H===void 0&&(H=I.clone(),D[V]=H,R.addEventListener("dispose",b)),I=H}if(I.visible=R.visible,I.wireframe=R.wireframe,E===Gs?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=n.properties.get(I);F.light=y}return I}function v(M,R,y,E,I){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===Gs)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let V=t.update(M),D=M.material;if(Array.isArray(D)){let H=V.groups;for(let Z=0,J=H.length;Z<J;Z++){let nt=H[Z],X=D[nt.materialIndex];if(X&&X.visible){let Q=A(M,X,E,I);M.onBeforeShadow(n,M,R,y,V,Q,nt),n.renderBufferDirect(y,null,V,Q,M,nt),M.onAfterShadow(n,M,R,y,V,Q,nt)}}}else if(D.visible){let H=A(M,D,E,I);M.onBeforeShadow(n,M,R,y,V,H,null),n.renderBufferDirect(y,null,V,H,M,null),M.onAfterShadow(n,M,R,y,V,H,null)}}let F=M.children;for(let V=0,D=F.length;V<D;V++)v(F[V],R,y,E,I)}function b(M){M.target.removeEventListener("dispose",b);for(let y in h){let E=h[y],I=M.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function mx(n,t){function e(){let L=!1,ot=new ve,$=null,lt=new ve(0,0,0,0);return{setMask:function(ft){$!==ft&&!L&&(n.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){L=ft},setClear:function(ft,tt,Et,vt,fe){fe===!0&&(ft*=vt,tt*=vt,Et*=vt),ot.set(ft,tt,Et,vt),lt.equals(ot)===!1&&(n.clearColor(ft,tt,Et,vt),lt.copy(ot))},reset:function(){L=!1,$=null,lt.set(-1,0,0,0)}}}function i(){let L=!1,ot=!1,$=null,lt=null,ft=null;return{setReversed:function(tt){if(ot!==tt){let Et=t.get("EXT_clip_control");tt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let vt=ft;ft=null,this.setClear(vt)}},getReversed:function(){return ot},setTest:function(tt){tt?K(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(tt){$!==tt&&!L&&(n.depthMask(tt),$=tt)},setFunc:function(tt){if(ot&&(tt=Ju[tt]),lt!==tt){switch(tt){case Ua:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=tt}},setLocked:function(tt){L=tt},setClear:function(tt){ft!==tt&&(ft=tt,ot&&(tt=1-tt),n.clearDepth(tt))},reset:function(){L=!1,$=null,lt=null,ft=null,ot=!1}}}function s(){let L=!1,ot=null,$=null,lt=null,ft=null,tt=null,Et=null,vt=null,fe=null;return{setTest:function(Qt){L||(Qt?K(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(Qt){ot!==Qt&&!L&&(n.stencilMask(Qt),ot=Qt)},setFunc:function(Qt,Ln,Zn){($!==Qt||lt!==Ln||ft!==Zn)&&(n.stencilFunc(Qt,Ln,Zn),$=Qt,lt=Ln,ft=Zn)},setOp:function(Qt,Ln,Zn){(tt!==Qt||Et!==Ln||vt!==Zn)&&(n.stencilOp(Qt,Ln,Zn),tt=Qt,Et=Ln,vt=Zn)},setLocked:function(Qt){L=Qt},setClear:function(Qt){fe!==Qt&&(n.clearStencil(Qt),fe=Qt)},reset:function(){L=!1,ot=null,$=null,lt=null,ft=null,tt=null,Et=null,vt=null,fe=null}}}let r=new e,a=new i,o=new s,c=new WeakMap,h=new WeakMap,l={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,T=null,A=null,v=null,b=null,M=null,R=null,y=new Nt(0,0,0),E=0,I=!1,U=null,F=null,V=null,D=null,H=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,nt=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=nt>=2);let Q=null,et={},At=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),ue=new ve().fromArray(At),Zt=new ve().fromArray(Tt);function Kt(L,ot,$,lt){let ft=new Uint8Array(4),tt=n.createTexture();n.bindTexture(L,tt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<$;Et++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ot+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return tt}let q={};q[n.TEXTURE_2D]=Kt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Kt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Kt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Kt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(Ps),Xt(!1),ye(mc),K(n.CULL_FACE),jt(ti);function K(L){l[L]!==!0&&(n.enable(L),l[L]=!0)}function _t(L){l[L]!==!1&&(n.disable(L),l[L]=!1)}function Ut(L,ot){return u[L]!==ot?(n.bindFramebuffer(L,ot),u[L]=ot,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ot),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(L,ot){let $=m,lt=!1;if(L){$=f.get(ot),$===void 0&&($=[],f.set(ot,$));let ft=L.textures;if($.length!==ft.length||$[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,Et=ft.length;tt<Et;tt++)$[tt]=n.COLOR_ATTACHMENT0+tt;$.length=ft.length,lt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,lt=!0);lt&&n.drawBuffers($)}function zt(L){return x!==L?(n.useProgram(L),x=L,!0):!1}let Ie={[ss]:n.FUNC_ADD,[gu]:n.FUNC_SUBTRACT,[_u]:n.FUNC_REVERSE_SUBTRACT};Ie[xu]=n.MIN,Ie[yu]=n.MAX;let Ht={[vu]:n.ZERO,[Mu]:n.ONE,[Su]:n.SRC_COLOR,[yc]:n.SRC_ALPHA,[Ru]:n.SRC_ALPHA_SATURATE,[wu]:n.DST_COLOR,[Tu]:n.DST_ALPHA,[bu]:n.ONE_MINUS_SRC_COLOR,[vc]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[Eu]:n.ONE_MINUS_DST_ALPHA,[Cu]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Pu]:n.CONSTANT_ALPHA,[Lu]:n.ONE_MINUS_CONSTANT_ALPHA};function jt(L,ot,$,lt,ft,tt,Et,vt,fe,Qt){if(L===ti){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(K(n.BLEND),g=!0),L!==mu){if(L!==p||Qt!==I){if((T!==ss||b!==ss)&&(n.blendEquation(n.FUNC_ADD),T=ss,b=ss),Qt)switch(L){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",L);break}A=null,v=null,M=null,R=null,y.set(0,0,0),E=0,p=L,I=Qt}return}ft=ft||ot,tt=tt||$,Et=Et||lt,(ot!==T||ft!==b)&&(n.blendEquationSeparate(Ie[ot],Ie[ft]),T=ot,b=ft),($!==A||lt!==v||tt!==M||Et!==R)&&(n.blendFuncSeparate(Ht[$],Ht[lt],Ht[tt],Ht[Et]),A=$,v=lt,M=tt,R=Et),(vt.equals(y)===!1||fe!==E)&&(n.blendColor(vt.r,vt.g,vt.b,fe),y.copy(vt),E=fe),p=L,I=!1}function de(L,ot){L.side===He?_t(n.CULL_FACE):K(n.CULL_FACE);let $=L.side===sn;ot&&($=!$),Xt($),L.blending===Ws&&L.transparent===!1?jt(ti):jt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let lt=L.stencilWrite;o.setTest(lt),lt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ln(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){U!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),U=L)}function ye(L){L!==du?(K(n.CULL_FACE),L!==F&&(L===mc?n.cullFace(n.BACK):L===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),F=L}function Oe(L){L!==V&&(J&&n.lineWidth(L),V=L)}function ln(L,ot,$){L?(K(n.POLYGON_OFFSET_FILL),(D!==ot||H!==$)&&(D=ot,H=$,a.getReversed()&&(ot=-ot),n.polygonOffset(ot,$))):_t(n.POLYGON_OFFSET_FILL)}function Me(L){L?K(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function we(L){L===void 0&&(L=n.TEXTURE0+Z-1),Q!==L&&(n.activeTexture(L),Q=L)}function N(L,ot,$){$===void 0&&(Q===null?$=n.TEXTURE0+Z-1:$=Q);let lt=et[$];lt===void 0&&(lt={type:void 0,texture:void 0},et[$]=lt),(lt.type!==L||lt.texture!==ot)&&(Q!==$&&(n.activeTexture($),Q=$),n.bindTexture(L,ot||q[L]),lt.type=L,lt.texture=ot)}function Xe(){let L=et[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function _(){try{n.texSubImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function O(){try{n.texSubImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function it(){try{n.texStorage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function st(){try{n.texStorage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function j(){try{n.texImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function rt(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function St(L,ot){d[L]!==ot&&(n.pixelStorei(L,ot),d[L]=ot)}function ct(L){ue.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function at(L){Zt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Zt.copy(L))}function bt(L,ot){let $=h.get(ot);$===void 0&&($=new WeakMap,h.set(ot,$));let lt=$.get(L);lt===void 0&&(lt=n.getUniformBlockIndex(ot,L.name),$.set(L,lt))}function Ct(L,ot){let lt=h.get(ot).get(L);c.get(ot)!==lt&&(n.uniformBlockBinding(ot,lt,L.__bindingPointIndex),c.set(ot,lt))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},d={},Q=null,et={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,T=null,A=null,v=null,b=null,M=null,R=null,y=new Nt(0,0,0),E=0,I=!1,U=null,F=null,V=null,D=null,H=null,ue.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:_t,bindFramebuffer:Ut,drawBuffers:mt,useProgram:zt,setBlending:jt,setMaterial:de,setFlipSided:Xt,setCullFace:ye,setLineWidth:Oe,setPolygonOffset:ln,setScissorTest:Me,activeTexture:we,bindTexture:N,unbindTexture:Xe,compressedTexImage2D:re,compressedTexImage3D:w,texImage2D:Y,texImage3D:j,pixelStorei:St,getParameter:rt,updateUBOMapping:bt,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:st,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ct,viewport:at,reset:Ft}}function gx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,l=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return m?new OffscreenCanvas(w,_):xr("canvas")}function g(w,_,O){let z=1,W=re(w);if((W.width>O||W.height>O)&&(z=O/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let it=Math.floor(z*W.width),st=Math.floor(z*W.height);u===void 0&&(u=x(it,st));let Y=_?x(it,st):u;return Y.width=it,Y.height=st,Y.getContext("2d").drawImage(w,0,0,it,st),Rt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+it+"x"+st+")."),Y}else return"data"in w&&Rt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function T(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,_,O,z,W,it=!1){if(w!==null){if(n[w]!==void 0)return n[w];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let st;z&&(st=t.get("EXT_texture_norm16"),st||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8),O===n.UNSIGNED_SHORT&&st&&(Y=st.R16_EXT),O===n.SHORT&&st&&(Y=st.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),_===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8),O===n.UNSIGNED_SHORT&&st&&(Y=st.RG16_EXT),O===n.SHORT&&st&&(Y=st.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&st&&(Y=st.RGB16_EXT),O===n.SHORT&&st&&(Y=st.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let j=it?_r:qt.getTransfer(W);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=j===ee?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&st&&(Y=st.RGBA16_EXT),O===n.SHORT&&st&&(Y=st.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function b(w,_){let O;return w?_===null||_===Vn||_===qs?O=n.DEPTH24_STENCIL8:_===Rn?O=n.DEPTH32F_STENCIL8:_===Xs&&(O=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===qs?O=n.DEPTH_COMPONENT24:_===Rn?O=n.DEPTH_COMPONENT32F:_===Xs&&(O=n.DEPTH_COMPONENT16),O}function M(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ke&&w.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&l.delete(_),_.isHTMLTexture&&d.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),U(_)}function E(w){let _=i.get(w);if(_.__webglInit===void 0)return;let O=w.source,z=f.get(O);if(z){let W=z[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(w),Object.keys(z).length===0&&f.delete(O)}i.remove(w)}function I(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let O=w.source,z=f.get(O);delete z[_.__cacheKey],a.memory.textures--}function U(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let W=0;W<_.__webglFramebuffer[z].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[z][W]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=w.textures;for(let z=0,W=O.length;z<W;z++){let it=i.get(O[z]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),a.memory.textures--),i.remove(O[z])}i.remove(w)}let F=0;function V(){F=0}function D(){return F}function H(w){F=w}function Z(){let w=F;return w>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function nt(w,_){let O=i.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let z=w.image;if(z===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function X(w,_){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,_);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function Q(w,_){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function et(w,_){let O=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Ut(O,w,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let At={[Ls]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},Tt={[ke]:n.NEAREST,[Uu]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[ei]:n.LINEAR_MIPMAP_LINEAR},ue={[ku]:n.NEVER,[Wu]:n.ALWAYS,[zu]:n.LESS,[Qo]:n.LEQUAL,[Vu]:n.EQUAL,[tl]:n.GEQUAL,[Hu]:n.GREATER,[Gu]:n.NOTEQUAL};function Zt(w,_){if(_.type===Rn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===mo||_.magFilter===kr||_.magFilter===ei||_.minFilter===Pe||_.minFilter===mo||_.minFilter===kr||_.minFilter===ei)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,At[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,At[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,At[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Tt[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Tt[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==kr&&_.minFilter!==ei||_.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let z=_.source,W=f.get(z);W===void 0&&(W={},f.set(z,W));let it=J(_);if(it!==w.__cacheKey){W[it]===void 0&&(W[it]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),W[it].usedTimes++;let st=W[w.__cacheKey];st!==void 0&&(W[w.__cacheKey].usedTimes--,st.usedTimes===0&&I(_)),w.__cacheKey=it,w.__webglTexture=W[it].texture}return O}function q(w,_,O){return Math.floor(Math.floor(w/O)/_)}function K(w,_,O,z){let it=w.updateRanges;if(it.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,z,_.data);else{it.sort((St,ct)=>St.start-ct.start);let st=0;for(let St=1;St<it.length;St++){let ct=it[st],at=it[St],bt=ct.start+ct.count,Ct=q(at.start,_.width,4),Ft=q(ct.start,_.width,4);at.start<=bt+1&&Ct===Ft&&q(at.start+at.count-1,_.width,4)===Ct?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),rt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let St=0,ct=it.length;St<ct;St++){let at=it[St],bt=Math.floor(at.start/4),Ct=Math.ceil(at.count/4),Ft=bt%_.width,L=Math.floor(bt/_.width),ot=Ct,$=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Ft,L,ot,$,O,z,_.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function _t(w,_,O){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);let W=Kt(w,_),it=_.source;e.bindTexture(z,w.__webglTexture,n.TEXTURE0+O);let st=i.get(it);if(it.version!==st.__version||W===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=qt.getPrimaries(qt.workingColorSpace),lt=_.colorSpace===pi?null:qt.getPrimaries(_.colorSpace),ft=_.colorSpace===pi||$===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let j=g(_.image,!1,s.maxTextureSize);j=Xe(_,j);let rt=r.convert(_.format,_.colorSpace),St=r.convert(_.type),ct=v(_.internalFormat,rt,St,_.normalized,_.colorSpace,_.isVideoTexture);Zt(z,_);let at,bt=_.mipmaps,Ct=_.isVideoTexture!==!0,Ft=st.__version===void 0||W===!0,L=it.dataReady,ot=M(_,j);if(_.isDepthTexture)ct=b(_.format===Vi,_.type),Ft&&(Ct?e.texStorage2D(n.TEXTURE_2D,1,ct,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,ct,j.width,j.height,0,rt,St,null));else if(_.isDataTexture)if(bt.length>0){Ct&&Ft&&e.texStorage2D(n.TEXTURE_2D,ot,ct,bt[0].width,bt[0].height);for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],Ct?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(n.TEXTURE_2D,$,ct,at.width,at.height,0,rt,St,at.data);_.generateMipmaps=!1}else Ct?(Ft&&e.texStorage2D(n.TEXTURE_2D,ot,ct,j.width,j.height),L&&K(_,j,rt,St)):e.texImage2D(n.TEXTURE_2D,0,ct,j.width,j.height,0,rt,St,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ct&&Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ct,bt[0].width,bt[0].height,j.depth);for(let $=0,lt=bt.length;$<lt;$++)if(at=bt[$],_.format!==Cn)if(rt!==null)if(Ct){if(L)if(_.layerUpdates.size>0){let ft=Gc(at.width,at.height,_.format,_.type);for(let tt of _.layerUpdates){let Et=at.data.subarray(tt*ft/at.data.BYTES_PER_ELEMENT,(tt+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,tt,at.width,at.height,1,rt,Et)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,j.depth,rt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,j.depth,0,at.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,j.depth,rt,St,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,j.depth,0,rt,St,at.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ct&&Ft&&e.texStorage2D(n.TEXTURE_2D,ot,ct,bt[0].width,bt[0].height);for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],_.format!==Cn?rt!==null?Ct?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,$,ct,at.width,at.height,0,at.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(n.TEXTURE_2D,$,ct,at.width,at.height,0,rt,St,at.data)}else if(_.isDataArrayTexture)if(Ct){if(Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ct,j.width,j.height,j.depth),L)if(_.layerUpdates.size>0){let $=Gc(j.width,j.height,_.format,_.type);for(let lt of _.layerUpdates){let ft=j.data.subarray(lt*$/j.data.BYTES_PER_ELEMENT,(lt+1)*$/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,j.width,j.height,1,rt,St,ft)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,rt,St,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,j.width,j.height,j.depth,0,rt,St,j.data);else if(_.isData3DTexture)Ct?(Ft&&e.texStorage3D(n.TEXTURE_3D,ot,ct,j.width,j.height,j.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,rt,St,j.data)):e.texImage3D(n.TEXTURE_3D,0,ct,j.width,j.height,j.depth,0,rt,St,j.data);else if(_.isFramebufferTexture){if(Ft)if(Ct)e.texStorage2D(n.TEXTURE_2D,ot,ct,j.width,j.height);else{let $=j.width,lt=j.height;for(let ft=0;ft<ot;ft++)e.texImage2D(n.TEXTURE_2D,ft,ct,$,lt,0,rt,St,null),$>>=1,lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),d.add(_),$.onpaint=lt=>{let ft=lt.changedElements;for(let tt of d)ft.includes(tt.image)&&(tt.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let ft=n.RGBA,tt=n.RGBA,Et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ft,tt,Et,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(bt.length>0){if(Ct&&Ft){let $=re(bt[0]);e.texStorage2D(n.TEXTURE_2D,ot,ct,$.width,$.height)}for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],Ct?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,rt,St,at):e.texImage2D(n.TEXTURE_2D,$,ct,rt,St,at);_.generateMipmaps=!1}else if(Ct){if(Ft){let $=re(j);e.texStorage2D(n.TEXTURE_2D,ot,ct,$.width,$.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,St,j)}else e.texImage2D(n.TEXTURE_2D,0,ct,rt,St,j);p(_)&&T(z),st.__version=it.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ut(w,_,O){if(_.image.length!==6)return;let z=Kt(w,_),W=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let it=i.get(W);if(W.version!==it.__version||z===!0){e.activeTexture(n.TEXTURE0+O);let st=qt.getPrimaries(qt.workingColorSpace),Y=_.colorSpace===pi?null:qt.getPrimaries(_.colorSpace),j=_.colorSpace===pi||st===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let rt=_.isCompressedTexture||_.image[0].isCompressedTexture,St=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!rt&&!St?ct[tt]=g(_.image[tt],!0,s.maxCubemapSize):ct[tt]=St?_.image[tt].image:_.image[tt],ct[tt]=Xe(_,ct[tt]);let at=ct[0],bt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type),Ft=v(_.internalFormat,bt,Ct,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ot=it.__version===void 0||z===!0,$=W.dataReady,lt=M(_,at);Zt(n.TEXTURE_CUBE_MAP,_);let ft;if(rt){L&&ot&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ft,at.width,at.height);for(let tt=0;tt<6;tt++){ft=ct[tt].mipmaps;for(let Et=0;Et<ft.length;Et++){let vt=ft[Et];_.format!==Cn?bt!==null?L?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ft,vt.width,vt.height,0,vt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,vt.width,vt.height,bt,Ct,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ft,vt.width,vt.height,0,bt,Ct,vt.data)}}}else{if(ft=_.mipmaps,L&&ot){ft.length>0&&lt++;let tt=re(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ft,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(St){L?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,bt,Ct,ct[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,ct[tt].width,ct[tt].height,0,bt,Ct,ct[tt].data);for(let Et=0;Et<ft.length;Et++){let fe=ft[Et].image[tt].image;L?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,fe.width,fe.height,bt,Ct,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ft,fe.width,fe.height,0,bt,Ct,fe.data)}}else{L?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt,Ct,ct[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,bt,Ct,ct[tt]);for(let Et=0;Et<ft.length;Et++){let vt=ft[Et];L?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,bt,Ct,vt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ft,bt,Ct,vt.image[tt])}}}p(_)&&T(n.TEXTURE_CUBE_MAP),it.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function mt(w,_,O,z,W,it){let st=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),j=v(O.internalFormat,st,Y,O.normalized,O.colorSpace),rt=i.get(_),St=i.get(O);if(St.__renderTarget=_,!rt.__hasExternalTextures){let ct=Math.max(1,_.width>>it),at=Math.max(1,_.height>>it);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,it,j,ct,at,_.depth,0,st,Y,null):e.texImage2D(W,it,j,ct,at,0,st,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),we(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,W,St.__webglTexture,0,Me(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,W,St.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(w,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let z=_.depthTexture,W=z&&z.isDepthTexture?z.type:null,it=b(_.stencilBuffer,W),st=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(_),it,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(_),it,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,it,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,w)}else{let z=_.textures;for(let W=0;W<z.length;W++){let it=z[W],st=r.convert(it.format,it.colorSpace),Y=r.convert(it.type),j=v(it.internalFormat,st,Y,it.normalized,it.colorSpace);we(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(_),j,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(_),j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(w,_,O){let z=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,_.depthTexture);let rt=r.convert(_.depthTexture.format),St=r.convert(_.depthTexture.type),ct;_.depthTexture.format===Kn?ct=n.DEPTH_COMPONENT24:_.depthTexture.format===Vi&&(ct=n.DEPTH24_STENCIL8);for(let at=0;at<6;at++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,_.width,_.height,0,rt,St,null)}}else nt(_.depthTexture,0);let it=W.__webglTexture,st=Me(_),Y=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,j=_.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Kn)we(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,it,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,it,0);else if(_.depthTexture.format===Vi)we(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,it,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(w){let _=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Ie(_.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Ie(_.__webglFramebuffer[0],w,0):Ie(_.__webglFramebuffer,w,0)}else if(O){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),zt(_.__webglDepthbuffer[z],w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,it)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),zt(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,it)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(w,_,O){let z=i.get(w);_!==void 0&&mt(z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ht(w)}function de(w){let _=w.texture,O=i.get(w),z=i.get(_);w.addEventListener("dispose",y);let W=w.textures,it=w.isWebGLCubeRenderTarget===!0,st=W.length>1;if(st||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,a.memory.textures++),it){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[Y][j]=n.createFramebuffer()}else O.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[Y]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(st)for(let Y=0,j=W.length;Y<j;Y++){let rt=i.get(W[Y]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&we(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let j=W[Y];O.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let rt=r.convert(j.format,j.colorSpace),St=r.convert(j.type),ct=v(j.internalFormat,rt,St,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),at=Me(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,ct,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)mt(O.__webglFramebuffer[Y][j],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else mt(O.__webglFramebuffer[Y],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Y=0,j=W.length;Y<j;Y++){let rt=W[Y],St=i.get(rt),ct=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,St.__webglTexture),Zt(ct,rt),mt(O.__webglFramebuffer,w,rt,n.COLOR_ATTACHMENT0+Y,ct,0),p(rt)&&T(ct)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,z.__webglTexture),Zt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)mt(O.__webglFramebuffer[j],w,_,n.COLOR_ATTACHMENT0,Y,j);else mt(O.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,Y,0);p(_)&&T(Y),e.unbindTexture()}w.depthBuffer&&Ht(w)}function Xt(w){let _=w.textures;for(let O=0,z=_.length;O<z;O++){let W=_[O];if(p(W)){let it=A(w),st=i.get(W).__webglTexture;e.bindTexture(it,st),T(it),e.unbindTexture()}}}let ye=[],Oe=[];function ln(w){if(w.samples>0){if(we(w)===!1){let _=w.textures,O=w.width,z=w.height,W=n.COLOR_BUFFER_BIT,it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=i.get(w),Y=_.length>1;if(Y)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let St=i.get(_[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,St,0)}n.blitFramebuffer(0,0,O,z,0,0,O,z,W,n.NEAREST),c===!0&&(ye.length=0,Oe.length=0,ye.push(n.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ye.push(it),Oe.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let St=i.get(_[rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,St,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Me(w){return Math.min(s.maxSamples,w.samples)}function we(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(w){let _=a.render.frame;l.get(w)!==_&&(l.set(w,_),w.update())}function Xe(w,_){let O=w.colorSpace,z=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==gr&&O!==pi&&(qt.getTransfer(O)===ee?(z!==Cn||W!==un)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",O)),_}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=jt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _x(n,t){function e(i,s=pi){let r,a=qt.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===_o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ic)return n.BYTE;if(i===Pc)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===go)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===Nc)return n.ALPHA;if(i===Uc)return n.RGB;if(i===Cn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===yo)return n.RED;if(i===vo)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===Mo)return n.RG_INTEGER;if(i===So)return n.RGBA_INTEGER;if(i===zr||i===Vr||i===Hr||i===Gr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===To||i===Eo||i===wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ao||i===Ro||i===Co||i===Io||i===Po||i===Wr||i===Lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ao||i===Ro)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Co)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Io)return r.COMPRESSED_R11_EAC;if(i===Po)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wr)return r.COMPRESSED_RG11_EAC;if(i===Lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===ko||i===zo||i===Vo||i===Ho||i===Go||i===Wo||i===Xo||i===qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Do)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===No)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ho)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Go)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===Zo||i===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$o||i===jo||i===Xr||i===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new _n({vertexShader:xx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends On{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new ih,p={},T=e.getContextAttributes(),A=null,v=null,b=[],M=[],R=new It,y=null,E=null,I=new Je;I.viewport=new ve;let U=new Je;U.viewport=new ve;let F=[I,U],V=new uo,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=b[q];return K===void 0&&(K=new Bs,b[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=b[q];return K===void 0&&(K=new Bs,b[q]=K),K.getGripSpace()},this.getHand=function(q){let K=b[q];return K===void 0&&(K=new Bs,b[q]=K),K.getHandSpace()};function Z(q){let K=M.indexOf(q.inputSource);if(K===-1)return;let _t=b[K];_t!==void 0&&(_t.update(q.inputSource,q.frame,h||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<b.length;q++){let K=M[q];K!==null&&(M[q]=null,b[q].disconnect(K))}D=null,H=null,g.reset();for(let q in p)delete p[q];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,v=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ut=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?Vi:Kn,Ut=T.stencil?qs:Vn);let zt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new hn(u.textureWidth,u.textureHeight,{format:Cn,type:un,depthTexture:new Ui(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(q){for(let K=0;K<q.removed.length;K++){let _t=q.removed[K],Ut=M.indexOf(_t);Ut>=0&&(M[Ut]=null,b[Ut].disconnect(_t))}for(let K=0;K<q.added.length;K++){let _t=q.added[K],Ut=M.indexOf(_t);if(Ut===-1){for(let zt=0;zt<b.length;zt++)if(zt>=M.length){M.push(_t),Ut=zt;break}else if(M[zt]===null){M[zt]=_t,Ut=zt;break}if(Ut===-1)break}let mt=b[Ut];mt&&mt.connect(_t)}}let X=new C,Q=new C;function et(q,K,_t){X.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let Ut=X.distanceTo(Q),mt=K.projectionMatrix.elements,zt=_t.projectionMatrix.elements,Ie=mt[14]/(mt[10]-1),Ht=mt[14]/(mt[10]+1),jt=(mt[9]+1)/mt[5],de=(mt[9]-1)/mt[5],Xt=(mt[8]-1)/mt[0],ye=(zt[8]+1)/zt[0],Oe=Ie*Xt,ln=Ie*ye,Me=Ut/(-Xt+ye),we=Me*-Xt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),mt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let N=Ie+Me,Xe=Ht+Me,re=Oe-we,w=ln+(Ut-we),_=jt*Ht/Xe*N,O=de*Ht/Xe*N;q.projectionMatrix.makePerspective(re,w,_,O,N,Xe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function At(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,_t=q.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),V.near=U.near=I.near=K,V.far=U.far=I.far=_t,(D!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,H=V.far),V.layers.mask=q.layers.mask|6,I.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Ut=q.parent,mt=V.cameras;At(V,Ut);for(let zt=0;zt<mt.length;zt++)At(mt[zt],Ut);mt.length===2?et(V,I,U):V.projectionMatrix.copy(I.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),Tt(q,V,Ut)};function Tt(q,K,_t){_t===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Us*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(q){return p[q]};let ue=null;function Zt(q,K){if(l=K.getViewerPose(h||a),m=K,l!==null){let _t=l.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ut=!1;_t.length!==V.cameras.length&&(V.cameras.length=0,Ut=!0);for(let Ht=0;Ht<_t.length;Ht++){let jt=_t[Ht],de=null;if(f!==null)de=f.getViewport(jt);else{let ye=d.getViewSubImage(u,jt);de=ye.viewport,Ht===0&&(t.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(v))}let Xt=F[Ht];Xt===void 0&&(Xt=new Je,Xt.layers.enable(Ht),Xt.viewport=new ve,F[Ht]=Xt),Xt.matrix.fromArray(jt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(jt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),Ht===0&&(V.matrix.copy(Xt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ut===!0&&V.cameras.push(Xt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ht=d.getDepthInformation(_t[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,s.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Ht=0;Ht<_t.length;Ht++){let jt=_t[Ht].camera;if(jt){let de=p[jt];de||(de=new Er,p[jt]=de);let Xt=d.getCameraImage(jt);de.sourceTexture=Xt}}}}for(let _t=0;_t<b.length;_t++){let Ut=M[_t],mt=b[_t];Ut!==null&&mt!==void 0&&mt.update(Ut,K,h||a)}ue&&ue(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}let Kt=new Md;Kt.setAnimationLoop(Zt),this.setAnimationLoop=function(q){ue=q},this.dispose=function(){}}},vx=new Wt,Ad=new Dt;Ad.set(-1,0,0,0,1,0,0,0,1);function Mx(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,zc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),l(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,T,A):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=t.get(p),A=T.envMap,v=T.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ad),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let T=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sx(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let M=b.program;i.uniformBlockBinding(v,M)}function h(v,b){let M=s[v.id];M===void 0&&(g(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",T));let R=b.program;i.updateUBOMapping(v,R);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function l(v){let b=d();v.__bindingPointIndex=b;let M=n.createBuffer(),R=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=s[v.id],M=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let y=0,E=M.length;y<E;y++){let I=M[y];if(Array.isArray(I))for(let U=0,F=I.length;U<F;U++)f(I[U],y,U,R);else f(I,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,b,M,R){if(x(v,b,M,R)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let I=0;for(let U=0;U<E.length;U++){let F=E[U],V=p(F);m(F,v.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function m(v,b,M){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,M)}function x(v,b,M,R){let y=v.value,E=b+"_"+M;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:ArrayBuffer.isView(y)?R[E]=y.slice():R[E]=y.clone(),!0;{let I=R[E];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(v){let b=v.uniforms,M=0,R=16;for(let E=0,I=b.length;E<I;E++){let U=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,V=U.length;F<V;F++){let D=U[F],H=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,J=H.length;Z<J;Z++){let nt=H[Z],X=p(nt),Q=M%R,et=Q%X.boundary,At=Q+et;M+=et,At!==0&&R-At<X.storage&&(M+=R-At),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=X.storage}}}let y=M%R;return y>0&&(M+=R-y),v.__size=M,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",v),b}function T(v){let b=v.target;b.removeEventListener("dispose",T);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:h,dispose:A}}var bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Tx(){return ni===null&&(ni=new ts(bx,16,16,Hi,Hn),ni.name="DFG_LUT",ni.minFilter=Pe,ni.magFilter=Pe,ni.wrapS=jn,ni.wrapT=jn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var rl=class{constructor(t={}){let{canvas:e=qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=f,g=new Set([So,Mo,vo]),p=new Set([un,Vn,Xs,qs,_o,xo]),T=new Uint32Array(4),A=new Int32Array(4),v=new C,b=null,M=null,R=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,V=null,D=null,H=null;this._outputColorSpace=Ce;let Z=0,J=0,nt=null,X=-1,Q=null,et=new ve,At=new ve,Tt=null,ue=new Nt(0),Zt=0,Kt=e.width,q=e.height,K=1,_t=null,Ut=null,mt=new ve(0,0,Kt,q),zt=new ve(0,0,Kt,q),Ie=!1,Ht=new ks,jt=!1,de=!1,Xt=new Wt,ye=new C,Oe=new ve,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function we(){return nt===null?K:1}let N=i;function Xe(S,P){return e.getContext(S,P)}let re,w,_,O,z,W,it,st,Y,j,rt,St,ct,at,bt,Ct,Ft,L,ot,$,lt,ft,tt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),N===null){let P="webgl2";if(N=Xe(P,S),N===null)throw Xe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(S){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Pt("WebGLRenderer: "+S.message),S}function Et(){re=new Pg(N),re.init(),lt=new _x(N,re),w=new Mg(N,re,t,lt),_=new mx(N,re),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),D=N.createFramebuffer(),H=N.createFramebuffer(),O=new Ng(N),z=new ex,W=new gx(N,re,_,z,w,lt,O),it=new Ig(I),st=new Fp(N),ft=new yg(N,st),Y=new Lg(N,st,O,ft),j=new Fg(N,Y,st,ft,O),L=new Ug(N,w,W),bt=new Sg(z),rt=new tx(I,it,re,w,ft,bt),St=new Mx(I,z),ct=new ix,at=new cx(re),Ft=new xg(I,it,_,j,m,c),Ct=new px(I,j,w),tt=new Sx(N,O,w,_),ot=new vg(N,re,O),$=new Dg(N,re,O),O.programs=rt.programs,I.capabilities=w,I.extensions=re,I.properties=z,I.renderLists=ct,I.shadowMap=Ct,I.state=_,I.info=O}x!==un&&(E=new Bg(x,e.width,e.height,o,s,r));let vt=new sh(I,N);this.xr=vt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(Kt,q,!1))},this.getSize=function(S){return S.set(Kt,q)},this.setSize=function(S,P,G=!0){if(vt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=S,q=P,e.width=Math.floor(S*K),e.height=Math.floor(P*K),G===!0&&(e.style.width=S+"px",e.style.height=P+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(Kt*K,q*K).floor()},this.setDrawingBufferSize=function(S,P,G){Kt=S,q=P,K=G,e.width=Math.floor(S*G),e.height=Math.floor(P*G),this.setViewport(0,0,S,P)},this.setEffects=function(S){if(x===un){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let P=0;P<S.length;P++)if(S[P].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(mt)},this.setViewport=function(S,P,G,B){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,P,G,B),_.viewport(et.copy(mt).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(zt)},this.setScissor=function(S,P,G,B){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,P,G,B),_.scissor(At.copy(zt).multiplyScalar(K).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(S){_.setScissorTest(Ie=S)},this.setOpaqueSort=function(S){_t=S},this.setTransparentSort=function(S){Ut=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(S=!0,P=!0,G=!0){let B=0;if(S){let k=!1;if(nt!==null){let dt=nt.texture.format;k=g.has(dt)}if(k){let dt=nt.texture.type,gt=p.has(dt),ut=Ft.getClearColor(),xt=Ft.getClearAlpha(),Mt=ut.r,Bt=ut.g,Gt=ut.b;gt?(T[0]=Mt,T[1]=Bt,T[2]=Gt,T[3]=xt,N.clearBufferuiv(N.COLOR,0,T)):(A[0]=Mt,A[1]=Bt,A[2]=Gt,A[3]=xt,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}P&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Ft.dispose(),ct.dispose(),at.dispose(),z.dispose(),it.dispose(),j.dispose(),ft.dispose(),tt.dispose(),rt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Ah),vt.removeEventListener("sessionend",Rh),Zi.stop()};function fe(S){S.preventDefault(),Bc("WebGLRenderer: Context Lost."),U=!0}function Qt(){Bc("WebGLRenderer: Context Restored."),U=!1;let S=O.autoReset,P=Ct.enabled,G=Ct.autoUpdate,B=Ct.needsUpdate,k=Ct.type;Et(),O.autoReset=S,Ct.enabled=P,Ct.autoUpdate=G,Ct.needsUpdate=B,Ct.type=k}function Ln(S){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Zn(S){let P=S.target;P.removeEventListener("dispose",Zn),Pf(P)}function Pf(S){Lf(S),z.remove(S)}function Lf(S){let P=z.get(S).programs;P!==void 0&&(P.forEach(function(G){rt.releaseProgram(G)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,G,B,k,dt){P===null&&(P=ln);let gt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ut=Uf(S,P,G,B,k);_.setMaterial(B,gt);let xt=G.index,Mt=1;if(B.wireframe===!0){if(xt=Y.getWireframeAttribute(G),xt===void 0)return;Mt=2}let Bt=G.drawRange,Gt=G.attributes.position,yt=Bt.start*Mt,te=(Bt.start+Bt.count)*Mt;dt!==null&&(yt=Math.max(yt,dt.start*Mt),te=Math.min(te,(dt.start+dt.count)*Mt)),xt!==null?(yt=Math.max(yt,0),te=Math.min(te,xt.count)):Gt!=null&&(yt=Math.max(yt,0),te=Math.min(te,Gt.count));let Ae=te-yt;if(Ae<0||Ae===1/0)return;ft.setup(k,B,ut,G,xt);let _e,ce=ot;if(xt!==null&&(_e=st.get(xt),ce=$,ce.setIndex(_e)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*we()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if(k.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),_.setLineWidth(qe*we()),k.isLineSegments?ce.setMode(N.LINES):k.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else k.isPoints?ce.setMode(N.POINTS):k.isSprite&&ce.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let qe=k._multiDrawStarts,pt=k._multiDrawCounts,Ke=k._multiDrawCount,Jt=xt?st.get(xt).bytesPerElement:1,bn=z.get(B).currentProgram.getUniforms();for(let Jn=0;Jn<Ke;Jn++)bn.setValue(N,"_gl_DrawID",Jn),ce.render(qe[Jn]/Jt,pt[Jn])}else if(k.isInstancedMesh)ce.renderInstances(yt,Ae,k.count);else if(G.isInstancedBufferGeometry){let qe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pt=Math.min(G.instanceCount,qe);ce.renderInstances(yt,Ae,pt)}else ce.render(yt,Ae)};function wh(S,P,G,B){F!==null&&S.isNodeMaterial&&F.setObject(B,S),jt===!0&&bt.setState(S,G,!1),S.transparent===!0&&S.side===He&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,ha(S,P,B),S.side=ki,S.needsUpdate=!0,ha(S,P,B),S.side=He):ha(S,P,B)}this.compile=function(S,P,G=null){G===null&&(G=S),F!==null&&F.renderStart(S,P,G),M=at.get(G),M.init(P),y.push(M),G.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),S!==G&&S.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),de=this.localClippingEnabled,jt=bt.init(this.clippingPlanes,de),jt===!0&&bt.setGlobalState(this.clippingPlanes,P),F!==null&&Ct.render(M.state.shadowsArray,G,P);let B=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let dt=k.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){let ut=dt[gt];wh(ut,G,P,k),B.add(ut)}else wh(dt,G,P,k),B.add(dt)}),M=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(S,P,G=null){let B=this.compile(S,P,G);return new Promise(k=>{function dt(){if(B.forEach(function(gt){let xt=z.get(gt).currentProgram;(xt===void 0||xt.isReady())&&B.delete(gt)}),B.size===0){k(S);return}setTimeout(dt,10)}re.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ol=null;function Df(S){Ol&&Ol(S)}function Ah(){Zi.stop()}function Rh(){Zi.start()}let Zi=new Md;Zi.setAnimationLoop(Df),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(S){Ol=S,vt.setAnimationLoop(S),S===null?Zi.stop():Zi.start()},vt.addEventListener("sessionstart",Ah),vt.addEventListener("sessionend",Rh),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(S,P);let G=vt.enabled===!0&&vt.isPresenting===!0,B=E!==null&&(nt===null||G)&&E.begin(I,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(P),P=vt.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,P,nt),M=at.get(S,y.length),M.init(P),M.state.textureUnits=W.getTextureUnits(),y.push(M),Xt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ht.setFromProjectionMatrix(Xt,Fn,P.reversedDepth),de=this.localClippingEnabled,jt=bt.init(this.clippingPlanes,de),b=ct.get(S,R.length),b.init(),R.push(b),vt.enabled===!0&&vt.isPresenting===!0){let gt=I.xr.getDepthSensingMesh();gt!==null&&Bl(gt,P,-1/0,I.sortObjects)}Bl(S,P,0,I.sortObjects),b.finish(),F!==null&&F.updateLights(M.state.lightsArray),I.sortObjects===!0&&b.sort(_t,Ut),Me=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Me&&Ft.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&bt.beginShadows();let k=M.state.shadowsArray;if(Ct.render(k,S,P),jt===!0&&bt.endShadows(),(B&&E.hasRenderPass())===!1){let gt=b.opaque,ut=b.transmissive;if(M.setupLights(),P.isArrayCamera){let xt=P.cameras;if(ut.length>0)for(let Mt=0,Bt=xt.length;Mt<Bt;Mt++){let Gt=xt[Mt];Ih(gt,ut,S,Gt)}Me&&Ft.render(S);for(let Mt=0,Bt=xt.length;Mt<Bt;Mt++){let Gt=xt[Mt];Ch(b,S,Gt,Gt.viewport)}}else ut.length>0&&Ih(gt,ut,S,P),Me&&Ft.render(S),Ch(b,S,P)}nt!==null&&J===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),B&&E.end(I),S.isScene===!0&&S.onAfterRender(I,S,P),ft.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(M=y[y.length-1],W.setTextureUnits(M.state.textureUnits),jt===!0&&bt.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,F!==null&&F.renderEnd()};function Bl(S,P,G,B){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ht)){B&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Xt);let gt=j.update(S),ut=S.material;ut.visible&&b.push(S,gt,ut,G,Oe.z,null,P)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ht))){let gt=j.update(S),ut=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Oe.copy(gt.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(Xt)),Array.isArray(ut)){let xt=gt.groups;for(let Mt=0,Bt=xt.length;Mt<Bt;Mt++){let Gt=xt[Mt],yt=ut[Gt.materialIndex];yt&&yt.visible&&b.push(S,gt,yt,G,Oe.z,Gt,P)}}else ut.visible&&b.push(S,gt,ut,G,Oe.z,null,P)}}let dt=S.children;for(let gt=0,ut=dt.length;gt<ut;gt++)Bl(dt[gt],P,G,B)}function Ch(S,P,G,B){let{opaque:k,transmissive:dt,transparent:gt}=S;M.setupLightsView(G),jt===!0&&bt.setGlobalState(I.clippingPlanes,G),B&&_.viewport(et.copy(B)),k.length>0&&ca(k,P,G),dt.length>0&&ca(dt,P,G),gt.length>0&&ca(gt,P,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ih(S,P,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){let yt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new hn(1,1,{generateMipmaps:!0,type:yt?Hn:un,minFilter:ei,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let dt=M.state.transmissionRenderTarget[B.id],gt=B.viewport||et;dt.setSize(gt.z*I.transmissionResolutionScale,gt.w*I.transmissionResolutionScale);let ut=I.getRenderTarget(),xt=I.getActiveCubeFace(),Mt=I.getActiveMipmapLevel();I.setRenderTarget(dt),I.getClearColor(ue),Zt=I.getClearAlpha(),Zt<1&&I.setClearColor(16777215,.5),I.clear(),Me&&Ft.render(G);let Bt=I.toneMapping;I.toneMapping=zn;let Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),jt===!0&&bt.setGlobalState(I.clippingPlanes,B),ca(S,G,B),W.updateMultisampleRenderTarget(dt),W.updateRenderTargetMipmap(dt),re.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let te=0,Ae=P.length;te<Ae;te++){let _e=P[te],{object:ce,geometry:qe,material:pt,group:Ke}=_e;if(pt.side===He&&ce.layers.test(B.layers)){let Jt=pt.side;pt.side=sn,pt.needsUpdate=!0,Ph(ce,G,B,qe,pt,Ke),pt.side=Jt,pt.needsUpdate=!0,yt=!0}}yt===!0&&(W.updateMultisampleRenderTarget(dt),W.updateRenderTargetMipmap(dt))}I.setRenderTarget(ut,xt,Mt),I.setClearColor(ue,Zt),Gt!==void 0&&(B.viewport=Gt),I.toneMapping=Bt}function ca(S,P,G){let B=P.isScene===!0?P.overrideMaterial:null;for(let k=0,dt=S.length;k<dt;k++){let gt=S[k],{object:ut,geometry:xt,group:Mt}=gt,Bt=gt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),ut.layers.test(G.layers)&&Ph(ut,P,G,xt,Bt,Mt)}}function Ph(S,P,G,B,k,dt){F!==null&&k.isNodeMaterial&&F.setObject(S,k),S.onBeforeRender(I,P,G,B,k,dt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(I,P,G,B,S,dt),k.transparent===!0&&k.side===He&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,S,dt),k.side=ki,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,S,dt),k.side=He):I.renderBufferDirect(G,P,B,k,S,dt),S.onAfterRender(I,P,G,B,k,dt)}function ha(S,P,G){P.isScene!==!0&&(P=ln);let B=z.get(S),k=M.state.lights,dt=M.state.shadowsArray,gt=k.state.version,ut=rt.getParameters(S,k.state,dt,P,G,M.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ut),Mt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=it.get(S.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Mt===void 0&&(S.addEventListener("dispose",Zn),Mt=new Map,B.programs=Mt);let Gt=Mt.get(xt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===gt)return Dh(S,ut),Gt}else ut.uniforms=rt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,G,ut),S.onBeforeCompile(ut,I),Gt=rt.acquireProgram(ut,xt),Mt.set(xt,Gt),B.uniforms=ut.uniforms;let yt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=bt.uniform),Dh(S,ut),B.needsLights=Of(S),B.lightsStateVersion=gt,B.needsLights&&(yt.ambientLightColor.value=k.state.ambient,yt.lightProbe.value=k.state.probe,yt.sunLights.value=k.state.sun,yt.sunLightShadows.value=k.state.sunShadow,yt.directionalLights.value=k.state.directional,yt.directionalLightShadows.value=k.state.directionalShadow,yt.spotLights.value=k.state.spot,yt.spotLightShadows.value=k.state.spotShadow,yt.rectAreaLights.value=k.state.rectArea,yt.ltc_1.value=k.state.rectAreaLTC1,yt.ltc_2.value=k.state.rectAreaLTC2,yt.pointLights.value=k.state.point,yt.pointLightShadows.value=k.state.pointShadow,yt.hemisphereLights.value=k.state.hemi,yt.sunShadowMatrix.value=k.state.sunShadowMatrix,yt.sunShadowCascade.value=k.state.sunShadowCascade,yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,yt.spotLightMatrix.value=k.state.spotLightMatrix,yt.spotLightMap.value=k.state.spotLightMap,yt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function Lh(S){if(S.uniformsList===null){let P=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Dh(S,P){let G=z.get(S);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Nf(S,P){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(P.matrixWorld);for(let G=0,B=S.length;G<B;G++){let k=S[G];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function Uf(S,P,G,B,k){P.isScene!==!0&&(P=ln),W.resetTextureUnits();let dt=P.fog,gt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ut=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:qt.workingColorSpace,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Mt=it.get(B.envMap||gt,xt),Bt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,Ae=!!G.morphAttributes.color,_e=zn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(_e=I.toneMapping);let ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=ce!==void 0?ce.length:0,pt=z.get(B),Ke=M.state.lights;if(jt===!0&&(de===!0||S!==Q)){let pe=S===Q&&B.id===X;bt.setState(B,S,pe)}let Jt=!1;B.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ke.state.version||pt.outputColorSpace!==ut||k.isBatchedMesh&&pt.batching===!1||!k.isBatchedMesh&&pt.batching===!0||k.isBatchedMesh&&pt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&pt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&pt.instancing===!1||!k.isInstancedMesh&&pt.instancing===!0||k.isSkinnedMesh&&pt.skinning===!1||!k.isSkinnedMesh&&pt.skinning===!0||k.isInstancedMesh&&pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&pt.instancingMorph===!1&&k.morphTexture!==null||pt.envMap!==Mt||B.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==bt.numPlanes||pt.numIntersection!==bt.numIntersection)||pt.vertexAlphas!==Bt||pt.vertexTangents!==Gt||pt.morphTargets!==yt||pt.morphNormals!==te||pt.morphColors!==Ae||pt.toneMapping!==_e||pt.morphTargetsCount!==qe||!!pt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,pt.__version=B.version);let bn=pt.currentProgram;Jt===!0&&(bn=ha(B,P,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,bn,pt));let Jn=!1,bi=!1,fs=!1,le=bn.getUniforms(),Ee=pt.uniforms;if(_.useProgram(bn.program)&&(Jn=!0,bi=!0,fs=!0),B.id!==X&&(X=B.id,bi=!0),pt.needsLights){let pe=Nf(M.state.lightProbeGridArray,k);pt.lightProbeGrid!==pe&&(pt.lightProbeGrid=pe,bi=!0)}if(Jn||Q!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),le.setValue(N,"projectionMatrix",S.projectionMatrix),le.setValue(N,"viewMatrix",S.matrixWorldInverse);let Ei=le.map.cameraPosition;Ei!==void 0&&Ei.setValue(N,ye.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&le.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,bi=!0,fs=!0)}if(pt.needsLights&&(Ke.state.sunShadowMap.length>0&&le.setValue(N,"sunShadowMap",Ke.state.sunShadowMap,W),Ke.state.directionalShadowMap.length>0&&le.setValue(N,"directionalShadowMap",Ke.state.directionalShadowMap,W),Ke.state.spotShadowMap.length>0&&le.setValue(N,"spotShadowMap",Ke.state.spotShadowMap,W),Ke.state.pointShadowMap.length>0&&le.setValue(N,"pointShadowMap",Ke.state.pointShadowMap,W)),k.isSkinnedMesh){le.setOptional(N,k,"bindMatrix"),le.setOptional(N,k,"bindMatrixInverse");let pe=k.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),le.setValue(N,"boneTexture",pe.boneTexture,W))}k.isBatchedMesh&&(le.setOptional(N,k,"batchingTexture"),le.setValue(N,"batchingTexture",k._matricesTexture,W),le.setOptional(N,k,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",k._indirectTexture,W),le.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",k._colorsTexture,W));let Ti=G.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&L.update(k,G,bn),(bi||pt.receiveShadow!==k.receiveShadow)&&(pt.receiveShadow=k.receiveShadow,le.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Ee.envMapIntensity.value=P.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Tx()),bi){if(le.setValue(N,"toneMappingExposure",I.toneMappingExposure),pt.needsLights&&Ff(Ee,fs),dt&&B.fog===!0&&St.refreshFogUniforms(Ee,dt),St.refreshMaterialUniforms(Ee,B,K,q,M.state.transmissionRenderTarget[S.id]),pt.needsLights&&pt.lightProbeGrid){let pe=pt.lightProbeGrid;Ee.probesSH.value=pe.texture,Ee.probesMin.value.copy(pe.boundingBox.min),Ee.probesMax.value.copy(pe.boundingBox.max),Ee.probesResolution.value.copy(pe.resolution)}js.upload(N,Lh(pt),Ee,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(js.upload(N,Lh(pt),Ee,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&le.setValue(N,"center",k.center),le.setValue(N,"modelViewMatrix",k.modelViewMatrix),le.setValue(N,"normalMatrix",k.normalMatrix),le.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let pe=B.uniformsGroups;for(let Ei=0,ps=pe.length;Ei<ps;Ei++){let Uh=pe[Ei];tt.update(Uh,bn),tt.bind(Uh,bn)}}return bn}function Ff(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.sunLights.needsUpdate=P,S.sunLightShadows.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Of(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,P,G){let B=z.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(S.texture).__webglTexture=P,z.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,P){let G=z.get(S);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,G=0){nt=S,Z=P,J=G;let B=null,k=!1,dt=!1;if(S){let ut=z.get(S);if(ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(S.viewport),At.copy(S.scissor),Tt=S.scissorTest,_.viewport(et),_.scissor(At),_.setScissorTest(Tt),X=-1;return}else if(ut.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(ut.__hasExternalTextures)W.rebindTextures(S,z.get(S.texture).__webglTexture,z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Bt=S.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&z.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}let xt=S.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let Mt=z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Mt[P])?B=Mt[P][G]:B=Mt[P],k=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?B=z.get(S).__webglMultisampledFramebuffer:Array.isArray(Mt)?B=Mt[G]:B=Mt,et.copy(S.viewport),At.copy(S.scissor),Tt=S.scissorTest}else et.copy(mt).multiplyScalar(K).floor(),At.copy(zt).multiplyScalar(K).floor(),Tt=Ie;if(G!==0&&(B=V),_.bindFramebuffer(N.FRAMEBUFFER,B)&&_.drawBuffers(S,B),_.viewport(et),_.scissor(At),_.setScissorTest(Tt),k){let ut=z.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ut.__webglTexture,G)}else if(dt){let ut=P;for(let xt=0;xt<S.textures.length;xt++){let Mt=z.get(S.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,Mt.__webglTexture,G,ut)}}else if(S!==null&&G!==0){let ut=z.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ut.__webglTexture,G)}X=-1};function Nh(S){let P=z.get(S);return(P.__readFormat!==S.format||P.__readType!==S.type)&&(P.__readFormat=S.format,P.__readType=S.type,P.__formatReadable=w.textureFormatReadable(S.format),P.__typeReadable=w.textureTypeReadable(S.type)),P}this.readRenderTargetPixels=function(S,P,G,B,k,dt,gt,ut=0){if(!(S&&S.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){_.bindFramebuffer(N.FRAMEBUFFER,xt);try{let Mt=S.textures[ut],Bt=Mt.format,Gt=Mt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut);let yt=Nh(Mt);if(yt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-B&&G>=0&&G<=S.height-k&&N.readPixels(P,G,B,k,lt.convert(Bt),lt.convert(Gt),dt)}finally{let Mt=nt!==null?z.get(nt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,P,G,B,k,dt,gt,ut=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(P>=0&&P<=S.width-B&&G>=0&&G<=S.height-k){_.bindFramebuffer(N.FRAMEBUFFER,xt);let Mt=S.textures[ut],Bt=Mt.format,Gt=Mt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut);let yt=Nh(Mt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(P,G,B,k,lt.convert(Bt),lt.convert(Gt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ae=nt!==null?z.get(nt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ae);let _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zu(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(te),N.deleteSync(_e),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,P=null,G=0){let B=Math.pow(2,-G),k=Math.floor(S.image.width*B),dt=Math.floor(S.image.height*B),gt=P!==null?P.x:0,ut=P!==null?P.y:0;W.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,gt,ut,k,dt),_.unbindTexture()},this.copyTextureToTexture=function(S,P,G=null,B=null,k=0,dt=0){let gt,ut,xt,Mt,Bt,Gt,yt,te,Ae,_e=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(G!==null)gt=G.max.x-G.min.x,ut=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,Bt=G.min.y,Gt=G.isBox3?G.min.z:0;else{let Ee=Math.pow(2,-k);gt=Math.floor(_e.width*Ee),ut=Math.floor(_e.height*Ee),S.isDataArrayTexture?xt=_e.depth:S.isData3DTexture?xt=Math.floor(_e.depth*Ee):xt=1,Mt=0,Bt=0,Gt=0}B!==null?(yt=B.x,te=B.y,Ae=B.z):(yt=0,te=0,Ae=0);let ce=lt.convert(P.format),qe=lt.convert(P.type),pt;P.isData3DTexture?(W.setTexture3D(P,0),pt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),pt=N.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),pt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Ke=_.getParameter(N.UNPACK_ROW_LENGTH),Jt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),bn=_.getParameter(N.UNPACK_SKIP_PIXELS),Jn=_.getParameter(N.UNPACK_SKIP_ROWS),bi=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),_.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);let fs=S.isDataArrayTexture||S.isData3DTexture,le=P.isDataArrayTexture||P.isData3DTexture;if(S.isDepthTexture){let Ee=z.get(S),Ti=z.get(P),pe=z.get(Ee.__renderTarget),Ei=z.get(Ti.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,pe.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let ps=0;ps<xt;ps++)fs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(S).__webglTexture,k,Gt+ps),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(P).__webglTexture,dt,Ae+ps)),N.blitFramebuffer(Mt,Bt,gt,ut,yt,te,gt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||z.has(S)){let Ee=z.get(S),Ti=z.get(P);_.bindFramebuffer(N.READ_FRAMEBUFFER,D),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let pe=0;pe<xt;pe++)fs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,k,Gt+pe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ee.__webglTexture,k),le?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ti.__webglTexture,dt,Ae+pe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ti.__webglTexture,dt),k!==0?N.blitFramebuffer(Mt,Bt,gt,ut,yt,te,gt,ut,N.COLOR_BUFFER_BIT,N.NEAREST):le?N.copyTexSubImage3D(pt,dt,yt,te,Ae+pe,Mt,Bt,gt,ut):N.copyTexSubImage2D(pt,dt,yt,te,Mt,Bt,gt,ut);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(pt,dt,yt,te,Ae,gt,ut,xt,ce,qe,_e.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(pt,dt,yt,te,Ae,gt,ut,xt,ce,_e.data):N.texSubImage3D(pt,dt,yt,te,Ae,gt,ut,xt,ce,qe,_e):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,dt,yt,te,gt,ut,ce,qe,_e.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,dt,yt,te,_e.width,_e.height,ce,_e.data):N.texSubImage2D(N.TEXTURE_2D,dt,yt,te,gt,ut,ce,qe,_e);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ke),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,bn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Jn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,bi),dt===0&&P.generateMipmaps&&N.generateMipmap(pt),_.unbindTexture()},this.initRenderTarget=function(S){z.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Z=0,J=0,nt=null,_.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Yt=[{name:"Stone Age",evolveXP:400,baseHp:500,baseStyle:"cave",theme:{bg:"39 35% 90%",fg:"25 15% 20%",accent:"18 60% 55%"},special:{name:"Meteor Shower",cooldown:60,duration:4,type:"meteor"},units:[{name:"Clubman",desc:"Cheap melee screen. Takes half damage from siege shots.",cost:15,hp:30,dmg:8,range:40,speed:50,type:"melee",size:45,attackSpeed:1.2,killXp:5,killGold:10},{name:"Slinger",desc:"Basic ranged support.",cost:25,hp:20,dmg:5,range:250,speed:45,type:"ranged",size:40,attackSpeed:1.5,projType:"arc",projSpeed:400,killXp:8,killGold:15},{name:"Dino Rider",desc:"Heavy pushing power.",cost:100,hp:150,dmg:35,range:50,speed:70,type:"heavy",size:80,attackSpeed:2,killXp:30,killGold:50}],turrets:[{name:"Rock Thrower",desc:"A simple defensive rock flinger.",cost:100,dmg:10,range:350,attackSpeed:1.5,projType:"arc",projSpeed:350},{name:"Egg Slingshot",desc:"Fires volatile dino eggs.",cost:200,dmg:25,range:400,attackSpeed:2,projType:"arc",projSpeed:400},{name:"Fire Beryl",desc:"Spits concentrated fireballs.",cost:400,dmg:50,range:450,attackSpeed:2.5,projType:"arc",projSpeed:450}]},{name:"Castle Age",evolveXP:1400,baseHp:1500,baseStyle:"castle",theme:{bg:"45 25% 85%",fg:"220 20% 25%",accent:"200 60% 45%"},special:{name:"Arrow Volley",cooldown:60,duration:3,type:"arrows"},units:[{name:"Swordsman",desc:"Armored infantry. Takes half damage from siege shots.",cost:50,hp:120,dmg:25,range:45,speed:55,type:"melee",size:50,attackSpeed:1,killXp:15,killGold:25},{name:"Archer",desc:"Sharp-eyed ranged combatant.",cost:75,hp:70,dmg:20,range:300,speed:50,type:"ranged",size:45,attackSpeed:1.2,projType:"arc",projSpeed:500,killXp:20,killGold:35},{name:"Knight",desc:"Mounted terror of the battlefield.",cost:250,hp:400,dmg:55,range:60,speed:80,type:"heavy",size:90,attackSpeed:1.5,killXp:70,killGold:100}],turrets:[{name:"Catapult",desc:"Lobs heavy stones at attackers.",cost:500,dmg:40,range:450,attackSpeed:1.5,projType:"arc",projSpeed:400},{name:"Ballista",desc:"Fires massive piercing bolts.",cost:750,dmg:80,range:500,attackSpeed:2.5,projType:"straight",projSpeed:800},{name:"Hot Oil",desc:"Boiling defense for close range.",cost:1e3,dmg:150,range:300,attackSpeed:3,projType:"arc",projSpeed:300}]},{name:"Renaissance",evolveXP:4500,baseHp:4e3,baseStyle:"fort",theme:{bg:"30 20% 88%",fg:"10 30% 25%",accent:"0 50% 50%"},special:{name:"Cannon Barrage",cooldown:60,duration:4,type:"cannons"},units:[{name:"Halberdier",desc:"Long-reaching infantry. Takes half damage from siege shots.",cost:200,hp:400,dmg:80,range:65,speed:50,type:"melee",size:50,attackSpeed:1.2,killXp:40,killGold:60},{name:"Musketeer",desc:"Deadly black powder marksman.",cost:300,hp:250,dmg:100,range:400,speed:45,type:"ranged",size:45,attackSpeed:2,projType:"straight",projSpeed:1200,killXp:50,killGold:80},{name:"Field Cannon",splashRadius:65,siegeMultiplier:2,desc:"Siege gun: 2x base damage; splashes two nearby troops at 35%.",cost:900,hp:1e3,dmg:250,range:450,speed:30,type:"ranged",size:75,attackSpeed:3,projType:"arc",projSpeed:600,killXp:150,killGold:300}],turrets:[{name:"Swivel Gun",desc:"Fast firing anti-infantry gun.",cost:1500,dmg:100,range:450,attackSpeed:1,projType:"straight",projSpeed:1200},{name:"Heavy Cannon",desc:"Slow firing massive damage.",cost:2500,dmg:250,range:500,attackSpeed:2.5,projType:"arc",projSpeed:700},{name:"Mortar",desc:"Extreme range plunging fire.",cost:4e3,dmg:500,range:600,attackSpeed:4,projType:"arc",projSpeed:500}]},{name:"Modern Age",evolveXP:15e3,baseHp:12e3,baseStyle:"bunker",theme:{bg:"120 10% 85%",fg:"120 20% 20%",accent:"30 70% 50%"},special:{name:"Airstrike",cooldown:60,duration:5,type:"airstrike"},units:[{name:"Infantry",desc:"Trench fighter. Takes half damage from siege shots.",cost:1500,hp:1200,dmg:250,range:50,speed:60,type:"melee",size:50,attackSpeed:.8,killXp:200,killGold:300},{name:"Marine",desc:"Rapid-fire assault troops.",cost:2e3,hp:800,dmg:130,range:400,speed:55,type:"ranged",size:45,attackSpeed:.65,projType:"straight",projSpeed:1800,killXp:250,killGold:400},{name:"Tank",splashRadius:80,siegeMultiplier:2,desc:"Armored siege: 2x base damage; splashes two nearby troops at 35%.",cost:6500,hp:4500,dmg:800,range:350,speed:40,type:"heavy",size:110,attackSpeed:2.5,projType:"straight",projSpeed:1e3,killXp:800,killGold:1200}],turrets:[{name:"Machine Gun",desc:"Shreds lightly armored units.",cost:6e3,dmg:80,range:500,attackSpeed:.15,projType:"straight",projSpeed:2e3},{name:"Rocket Pod",desc:"Fires armor piercing missiles.",cost:9e3,dmg:600,range:550,attackSpeed:2,projType:"straight",projSpeed:800},{name:"Artillery",desc:"Long range explosive barrage.",cost:15e3,dmg:1500,range:700,attackSpeed:3.5,projType:"arc",projSpeed:800}]},{name:"Future Age",evolveXP:5e4,baseHp:4e4,baseStyle:"dome",theme:{bg:"210 30% 25%",fg:"210 60% 85%",accent:"180 80% 60%"},special:{name:"Orbital Laser",cooldown:60,duration:4,type:"laser"},units:[{name:"Energy Blade",desc:"Cyber swordsman. Takes half damage from siege shots.",cost:5e3,hp:5e3,dmg:1e3,range:60,speed:70,type:"melee",size:55,attackSpeed:1,killXp:800,killGold:1e3},{name:"Blaster",desc:"Fires concentrated energy beams.",cost:7e3,hp:3e3,dmg:600,range:420,speed:60,type:"ranged",size:50,attackSpeed:.8,projType:"laser",projSpeed:3e3,killXp:1e3,killGold:1500},{name:"War Mech",splashRadius:90,siegeMultiplier:2,desc:"Siege beams: 2x base damage; splashes two nearby troops at 35%.",cost:2e4,hp:15e3,dmg:3e3,range:400,speed:45,type:"heavy",size:130,attackSpeed:2,projType:"laser",projSpeed:3e3,killXp:3e3,killGold:4e3}],turrets:[{name:"Laser Gatling",desc:"Unending beam of light.",cost:2e4,dmg:300,range:550,attackSpeed:.2,projType:"laser",projSpeed:3e3},{name:"Ion Cannon",desc:"Heavy anti-armor blasts.",cost:4e4,dmg:2500,range:600,attackSpeed:2,projType:"laser",projSpeed:3e3},{name:"Plasma Ray",desc:"Melts organic matter.",cost:8e4,dmg:6e3,range:800,attackSpeed:3,projType:"arc",projSpeed:1200}]},{name:"Cosmic Age",evolveXP:9999999,baseHp:15e4,baseStyle:"portal",theme:{bg:"260 40% 10%",fg:"280 50% 80%",accent:"300 80% 60%"},special:{name:"Void Rift",cooldown:70,duration:5,type:"orbital"},units:[{name:"Hover Drone",desc:"Swift hunter. Takes half damage from siege shots.",cost:15e3,hp:14e3,dmg:2400,range:70,speed:85,type:"melee",size:60,attackSpeed:1,killXp:2e3,killGold:3e3},{name:"Void Ray",desc:"Channels antimatter.",cost:2e4,hp:8e3,dmg:2400,range:500,speed:70,type:"ranged",size:55,attackSpeed:1,projType:"laser",projSpeed:4e3,killXp:3e3,killGold:4500},{name:"Mothership",splashRadius:140,siegeMultiplier:2,desc:"Siege orbs: 2x base damage; splashes two nearby troops at 35%.",cost:65e3,hp:5e4,dmg:8e3,range:550,speed:35,type:"heavy",size:160,attackSpeed:3,projType:"orb",projSpeed:600,killXp:1e4,killGold:15e3}],turrets:[{name:"Plasma Rep.",cost:5e4,dmg:1200,range:600,attackSpeed:.3,projType:"laser",projSpeed:4e3},{name:"Black Hole",cost:1e5,dmg:6e3,range:650,attackSpeed:2.5,projType:"orb",projSpeed:500},{name:"Antimatter",cost:2e5,dmg:2e4,range:900,attackSpeed:4,projType:"laser",projSpeed:5e3}]}];function Rd(n){n&&typeof n=="object"&&(Object.values(n).forEach(Rd),Object.freeze(n))}Rd(Yt);var ll="2.0.0";var ne=.016666666666666666,he=1280;var si=600,ie=180,Cd=80,Wi=[500,1500,3500,8e3,18e3,35e3,75e3,15e4,35e4,75e4],Id=[5,12,35,200,700,1800],dn=Object.freeze({normal:{name:"Normal",color:"hsl(var(--diff-normal))",hpMult:1,dmgMult:1,econMult:1,xpMult:1,baseGold:175,baseHpMult:1,thinkRate:1.8,aiAggression:.35},hard:{name:"Hard",color:"hsl(var(--diff-hard))",hpMult:1.2,dmgMult:1.1,econMult:1.4,xpMult:1.2,baseGold:250,baseHpMult:1.2,thinkRate:1.15,aiAggression:.58},harder:{name:"Harder",color:"hsl(var(--diff-harder))",hpMult:1.5,dmgMult:1.3,econMult:2,xpMult:1.5,baseGold:500,baseHpMult:1.5,thinkRate:.65,aiAggression:.82},impossible:{name:"Impossible",color:"hsl(var(--diff-impossible))",hpMult:2,dmgMult:1.5,econMult:4,xpMult:2.5,baseGold:1500,baseHpMult:2,thinkRate:.28,aiAggression:1}});var cl="tabletop-1.0.0",Ot=Object.freeze({minX:95,maxX:1185,minZ:-270,maxZ:270,worldScale:2.4/he,centerZ:.14,dockX:48,dockZ:Object.freeze([-.185,.46,-.35,.6].map(n=>(n-.14)/(2.4/he))),guideTicks:720,guideCooldown:60,maxNudge:160}),Te=n=>n.battlefield==="tabletop",In=(n,t,e)=>Math.max(t,Math.min(e,n)),Gn=n=>Math.round(n*1e6)/1e6,rn=n=>Math.min(34,n.size*.3),mi=n=>(n-he/2)*Ot.worldScale,vn=n=>Ot.centerZ+n*Ot.worldScale,hl=n=>n/Ot.worldScale+he/2,Jr=n=>(n-Ot.centerZ)/Ot.worldScale,Ge=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z),Ex=n=>n===1?ie:he-ie;function Qs(n){return{kind:"base",team:n,x:n===1?75:1205,z:0,radius:70}}function ri(n,t){return{kind:"turret",team:n,slot:t,x:n===1?Ot.dockX:he-Ot.dockX,z:Ot.dockZ[t],radius:32}}function Ld(n,t,e=1){return Yt[n].baseHp*(.24+t*.08)*e}function gi(n,t){if(!t)return null;if(t.kind==="unit")return n.units.find(i=>i.id===t.id&&i.hp>0)??null;let e=t.team===1?n.player:n.enemy;return t.kind==="base"?e.hp>0?{...Qs(t.team),hp:e.hp}:null:t.kind==="turret"&&e.turrets[t.slot]!==null&&e.turretIds[t.slot]===t.id?{...ri(t.team,t.slot),id:t.id,hp:e.turretHp[t.slot]}:null}function _i(n){return n.kind==="base"?{kind:"base",team:n.team}:n.kind==="turret"?{kind:"turret",team:n.team,slot:n.slot,id:n.id}:{kind:"unit",id:n.id}}function rh(n,t,e,i){let s=i===void 0?[0,-200,200,-100,100]:[i],r=null,a=1/0;for(let o of s){let c={x:Ex(t),z:o};if(n.units.some(u=>Ge(u,c)<rn(u)+rn(e)+5))continue;let h=n.units.filter(u=>u.team===t&&Math.abs(u.z-o)<75).length,l=n.units.filter(u=>u.team!==t&&Math.abs(u.x-c.x)<400&&Math.abs(u.z-o)<90).length,d=h*2-Math.min(2,l)+Math.abs(o)/1e3;d<a&&(a=d,r=o)}return r}function Dd(n,t,e){if(!Te(n))return"wrong-battlefield";if(!Number.isSafeInteger(e.id))return"invalid-unit";let i=n.units.find(s=>s.id===e.id&&s.team===t&&s.hp>0);return!i||i.drawProgress<1?"unavailable-unit":![e.x,e.z].every(Number.isFinite)||e.x<Ot.minX||e.x>Ot.maxX||e.z<Ot.minZ||e.z>Ot.maxZ?"invalid-position":n.tick<i.guideReady?"guide-cooldown":null}function ul(n,t,e,i){let s=t===1?n.enemy:n.player,r=null,a=1/0;if((i.x-640)*t>350)for(let o of[Qs(-t),...s.turrets.flatMap((c,h)=>c===null?[]:[{...ri(-t,h),id:s.turretIds[h]}])]){let c=Ge(i,o);c<a&&(a=c,r=_i(o))}return{z:Gn(In(i.z,Math.max(Ot.minZ+rn(e),e.z-Ot.maxNudge),Math.min(Ot.maxZ-rn(e),e.z+Ot.maxNudge))),target:r,until:n.tick+Ot.guideTicks}}var Pd=[-.02+.078*Math.cos(-1.05)-.075*Math.sin(-1.05),.076+.078*Math.sin(-1.05)+.075*Math.cos(-1.05)],wx=[.047*Math.cos(.16)-.036*Math.sin(.16)-.016,.05+.047*Math.sin(.16)+.036*Math.cos(.16)],Ax=[[Pd,[.022,.132],[.039,.204]],[Pd,[.112,.084],[.055,.12]],[[.074,.092],[.074,.092],[.019,.162]],[[.083,.0852],wx,[.119,.1536]],[[.063,.10792],[.089,.1154],[.1,.123]],[[.064,.1242],[.012,.126],[.025,.137]]];function Nd(n,t,e,i,s){let r=ri(n,t),[a,o]=Ax[e][i],c=a*.83/Ot.worldScale;return{x:r.x+Math.cos(s)*c,z:r.z+Math.sin(s)*c,y:600-(.044+o*.83)/Ot.worldScale}}function me(n,t){return t===1?n.player:n.enemy}function Wn(n,t,e){return(1+me(n,t).upgrades[e]*{dmg:.15,hp:.25,econ:.2}[e])*(t===-1?dn[n.difficulty][`${e}Mult`]:1)}function Ud(n,t){return Id[me(n,t).age]*Wn(n,t,"econ")}function $r(n){let t=n.rng>>>0;return t^=t<<13,t^=t>>>17,t^=t<<5,n.rng=t>>>0,n.rng/4294967296}function Ue(n,t,e={}){n.events.push({tick:n.tick,type:t,...e})}function Fd({seed:n=1,difficulty:t="normal",startAge:e=0,opponent:i=!0,battlefield:s}={}){if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("seed must be a uint32");if(!Object.hasOwn(dn,t))throw new Error("Unknown difficulty");if(!Number.isInteger(e)||e<0||e>=Yt.length)throw new Error("Invalid startAge");if(typeof i!="boolean")throw new Error("opponent must be boolean");if(s!==void 0&&s!=="tabletop")throw new Error("Unknown battlefield");let r=dn[t],a=o=>{let c=Yt[e].baseHp*(o===-1?r.baseHpMult:1);return{hp:c,maxHp:c,age:e,gold:(o===-1?r.baseGold:175)*Yt[e].units[0].cost/15,xp:e?Yt[e-1].evolveXP:0,upgrades:{dmg:0,hp:0,econ:0},turrets:[null,null,null,null],turretProgress:[1,1,1,1],turretTimers:[0,0,0,0],unlockedSlots:1,specialTimer:0,drawProgress:1,deployTimer:0,rng:(n||1)>>>0,...s?{turretHp:[0,0,0,0],turretMaxHp:[0,0,0,0],turretIds:[null,null,null,null],turretAim:Array.from({length:4},()=>({heading:o===1?0:Math.PI,target:null}))}:{}}};return{version:s?cl:ll,...s?{battlefield:s}:{},seed:n,difficulty:t,tick:0,nextId:1,running:!0,paused:!1,winner:null,player:a(1),enemy:a(-1),units:[],projectiles:[],specials:[],events:[],agreements:{noSpecials:!1,noTurrets:!1,meleeOnly:!1},restraintUntil:0,opponent:{enabled:i,nextTick:Math.round(.8*60),order:"balanced",lastAction:"",emotion:"Centered"},metrics:{firstContactTick:null,kills:{1:0,"-1":0},spent:{1:0,"-1":0},damage:{1:0,"-1":0},spawned:{1:0,"-1":0},peakUnits:0,evolutions:[]}}}function Xi(n,t,e){if(t!==1&&t!==-1)return"invalid-team";if(!e||typeof e!="object"||Array.isArray(e))return"invalid-command";if(!n.running)return"match-ended";if(n.paused)return"paused";let i=me(n,t),s=Yt[i.age],r=t===-1?n.agreements:{};if(e.type==="guide")return Dd(n,t,e);if(i.drawProgress<1)return"base-drawing";switch(e.type){case"unit":return!Number.isInteger(e.index)||!s.units[e.index]?"invalid-unit":Object.hasOwn(e,"z")&&(!Te(n)||!Number.isFinite(e.z)||e.z<Ot.minZ+rn(s.units[e.index])||e.z>Ot.maxZ-rn(s.units[e.index]))?"invalid-position":r.meleeOnly&&s.units[e.index].type==="ranged"?"pact":t===-1&&n.tick<n.restraintUntil?"truce":i.deployTimer>0?"deploying":(Te(n)?rh(n,t,s.units[e.index],e.z)===null:n.units.some(a=>a.team===t&&a.range<=s.units[e.index].range&&Math.abs(a.x-(t===1?ie:he-ie))<(a.size+s.units[e.index].size)/2+10))?"deployment-blocked":n.units.filter(a=>a.team===t).length>=Cd?"unit-cap":i.gold<s.units[e.index].cost?"gold":null;case"turret":return!Number.isInteger(e.index)||!s.turrets[e.index]?"invalid-turret":r.noTurrets?"pact":i.turrets.slice(0,i.unlockedSlots).includes(null)?i.gold<s.turrets[e.index].cost?"gold":null:"slots-full";case"sell":return Object.hasOwn(e,"slot")?!Number.isInteger(e.slot)||e.slot<0||e.slot>=i.unlockedSlots?"invalid-slot":i.turrets[e.slot]===null?"no-turret":null:i.turrets.some(a=>a!==null)?null:"no-turret";case"slot":return i.unlockedSlots>=4?"slots-full":i.gold<i.unlockedSlots*500?"gold":null;case"upgrade":return["hp","dmg","econ"].includes(e.stat)?i.upgrades[e.stat]>=Wi.length?"max-upgrade":i.gold<Wi[i.upgrades[e.stat]]?"gold":null:"invalid-upgrade";case"evolve":return i.age>=Yt.length-1?"max-age":i.xp<s.evolveXP?"xp":null;case"special":return r.noSpecials?"pact":t===-1&&n.tick<n.restraintUntil?"truce":i.specialTimer>0?"cooldown":null;default:return"unknown-command"}}function jr(n,t,e){let i=Xi(n,t,e);if(i)return{ok:!1,error:i};let s=me(n,t),r=Yt[s.age],a=o=>{s.gold-=o,n.metrics.spent[t]+=o};switch(e.type){case"unit":{let o=r.units[e.index],c=o.hp*Wn(n,t,"hp");a(o.cost),s.deployTimer=.4;let h={...o,id:n.nextId++,team:t,age:s.age,uType:e.index,x:t===1?ie:he-ie,y:si,hp:c,maxHp:c,attackCooldown:0,drawProgress:0,active:!0,isAttacking:!1,moving:!0,animTimer:0,animOffset:n.nextId*17%100};Te(n)&&Object.assign(h,{z:rh(n,t,o,e.z),heading:t===1?0:Math.PI,target:null,thinkAt:0,guide:null,guideReady:0,intent:"advancing"}),Te(n)&&(h.routeZ=h.z),n.units.push(h),n.metrics.spawned[t]++,Ue(n,"spawn",{team:t,id:h.id,index:e.index,x:h.x,y:h.y,size:h.size});break}case"turret":{let o=s.turrets.findIndex((c,h)=>c===null&&h<s.unlockedSlots);a(r.turrets[e.index].cost),s.turrets[o]=e.index,s.turretProgress[o]=0,s.turretTimers[o]=0,Te(n)&&(s.turretHp[o]=s.turretMaxHp[o]=Ld(s.age,e.index,Wn(n,t,"hp")),s.turretIds[o]=n.nextId++,s.turretAim[o]={heading:t===1?0:Math.PI,target:null});break}case"sell":{let o=Object.hasOwn(e,"slot")?e.slot:s.turrets.findLastIndex(c=>c!==null);s.gold+=r.turrets[s.turrets[o]].cost*.5,s.turrets[o]=null,s.turretTimers[o]=0,Te(n)&&(s.turretHp[o]=s.turretMaxHp[o]=0,s.turretIds[o]=null,s.turretAim[o].target=null);break}case"guide":{let o=n.units.find(c=>c.id===e.id);o.guide=ul(n,t,o,e),o.guideReady=n.tick+Ot.guideCooldown,o.thinkAt=0,Ue(n,"guide",{team:t,id:o.id,z:o.guide.z,target:o.guide.target});break}case"slot":a(s.unlockedSlots*500),s.unlockedSlots++;break;case"upgrade":{a(Wi[s.upgrades[e.stat]]),s.upgrades[e.stat]++,e.stat==="hp"&&Od(n,t);break}case"evolve":if(s.age++,s.drawProgress=0,Od(n,t),s.gold+=s.turrets.reduce((o,c)=>o+(c===null?0:r.turrets[c].cost*.5),0),s.turrets.fill(null),s.turretTimers.fill(0),s.turretProgress.fill(1),Te(n)){s.turretHp.fill(0),s.turretMaxHp.fill(0),s.turretIds.fill(null);for(let o of s.turretAim)o.target=null}n.metrics.evolutions.push({tick:n.tick,team:t,age:s.age}),Ue(n,"evolve",{team:t,age:s.age});break;case"special":{s.specialTimer=r.special.cooldown;let o=n.units.filter(d=>d.team!==t),c=s.age===4?150:300,h=o.map(d=>({x:d.x,...Te(n)?{z:d.z}:{},value:o.filter(u=>(Te(n)?Math.hypot(u.x-d.x,u.z-d.z):Math.abs(u.x-d.x))<c).reduce((u,f)=>u+f.cost,0)})).sort((d,u)=>u.value-d.value||(d.x-u.x)*t)[0],l=h?.x??(t===1?he-300:300);n.specials.push({id:n.nextId++,team:t,age:s.age,x:l,...Te(n)?{z:h?.z??0}:{},remaining:Math.round(r.special.duration*60),nextPulse:0}),Ue(n,"special",{team:t,age:s.age});break}}return Ue(n,"command",{team:t,command:{...e}}),{ok:!0}}function Od(n,t){let e=me(n,t),i=Yt[e.age].baseHp*Wn(n,t,"hp")*(t===-1?dn[n.difficulty].baseHpMult:1);e.hp+=i-e.maxHp,e.maxHp=i}var Qr=n=>n===1?ie:he-ie,Kr=(n,t)=>Math.round(Math.abs(n-t)*1e6)/1e6,Rx=(n,t)=>Math.max(0,(t.x-n.x)*n.team-(n.size+t.size)/2);function Bd(n){let t=[],e=[],i=[];for(let r of[1,-1]){let a=n.units.filter(l=>l.team===r).sort((l,d)=>(d.x-l.x)*r||l.id-d.id),o=n.units.filter(l=>l.team!==r&&l.drawProgress>=.8).sort((l,d)=>(l.x-d.x)*r||l.id-d.id),c=null;for(let l of a){if(l.attackCooldown=Math.max(0,l.attackCooldown-ne),l.animTimer=Math.max(0,l.animTimer-ne),l.drawProgress<1){l.drawProgress=Math.min(1,l.drawProgress+ne*2),c=l;continue}let d=o.find(m=>(m.x-l.x)*r>=-(l.size+m.size)/2),u=!d,f=d?Rx(l,d):Math.max(0,(Qr(-r)-l.x)*r-l.size/2);if(l.isAttacking=f<=l.range+1e-6,l.moving=!l.isAttacking,l.isAttacking){if(l.siegeMultiplier&&!u){let m=Math.min(l.speed*ne*.35,Math.max(0,f-20));m>0&&(e.push([l,l.x+r*m]),l.moving=!0)}if(n.metrics.firstContactTick===null&&(n.metrics.firstContactTick=n.tick),l.attackCooldown<=1e-9){l.attackCooldown=l.attackSpeed,l.animTimer=.3;let m=l.dmg*Wn(n,r,"dmg");l.projType?i.push({x:l.x,y:l.y-l.size*.7,targetX:d?d.x:Qr(-r),targetY:d?d.y-d.size/2:si-40,type:l.projType,speed:l.projSpeed,dmg:m*(u&&l.siegeMultiplier||1),team:r,targetId:d?.id??null,targetIsBase:u,splashRadius:l.splashRadius||0}):(t.push({team:r,targetId:d?.id??null,dmg:m}),Ue(n,"melee",{team:r,x:l.x+r*l.size/2,y:l.y-l.size/2}))}}else{let m=Math.min(l.speed*ne,Math.max(0,f-l.range));c&&c.range<=l.range&&(m=Math.min(m,Math.max(0,(c.x-l.x)*r-(c.size+l.size)/2-10))),e.push([l,Math.max(ie,Math.min(he-ie,l.x+r*m))]),l.moving=m>0}c=l}let h=me(n,r);for(let l=0;l<h.unlockedSlots;l++){if(h.turretTimers[l]=Math.max(0,h.turretTimers[l]-ne),h.turrets[l]===null||h.turretProgress[l]<1||h.turretTimers[l]>1e-9)continue;let d=Yt[h.age].turrets[h.turrets[l]],u=Qr(r)-r*10,f=o.find(m=>Math.abs(m.x-u)<=d.range+1e-6);f&&(i.push({x:u,y:si-150-l*90,targetX:f.x,targetY:f.y-f.size/2,type:d.projType,speed:d.projSpeed,dmg:d.dmg*Wn(n,r,"dmg"),team:r,targetId:f.id,targetIsBase:!1}),h.turretTimers[l]=d.attackSpeed)}}for(let[r,a]of e)r.x=Math.round(a*1e6)/1e6;for(let r of i)kd(n,r);Ix(n,t),Cx(n,t);for(let r of t){let a=r.targetId===null?me(n,-r.team):n.units.find(o=>o.id===r.targetId);a&&(n.metrics.damage[r.team]+=Math.min(Math.max(0,a.hp),r.dmg),a.hp-=r.dmg,Ue(n,"damage",{team:r.team,targetId:r.targetId,amount:r.dmg,x:a.x??Qr(-r.team),y:a.y?a.y-a.size/2:si-100}))}let s=dn[n.difficulty];for(let r of n.units){if(r.hp>0)continue;let a=me(n,-r.team),o=me(n,r.team);a.gold+=r.killGold*(r.team===1?s.econMult:1),a.xp+=r.killXp*(r.team===1?s.xpMult:1),o.xp+=r.killXp*.5*(r.team===-1?s.xpMult:1),n.metrics.kills[-r.team]++,Ue(n,"death",{team:r.team,id:r.id,x:r.x,y:r.y,size:r.size,gold:r.killGold,xp:r.killXp})}n.units=n.units.filter(r=>r.hp>0),n.metrics.peakUnits=Math.max(n.metrics.peakUnits,n.units.length),(n.player.hp<=0||n.enemy.hp<=0)&&(n.player.hp=Math.max(0,n.player.hp),n.enemy.hp=Math.max(0,n.enemy.hp),n.winner=n.player.hp===0&&n.enemy.hp===0?0:n.enemy.hp===0?1:-1,n.running=!1,Ue(n,"end",{winner:n.winner}))}function kd(n,t){let e=t.targetX-t.x,i=t.targetY-t.y,s=t.type==="laser",r=["arc","meteor","arrow","cannonball"].includes(t.type),a=s?ne:Math.max(ne,(r?Math.abs(e):Math.hypot(e,i))/t.speed),o=Math.max(1,Math.ceil(a*60-1e-8));n.projectiles.push({...t,id:n.nextId++,startX:t.x,startY:t.y,flightTicks:o,elapsed:0,vx:e/a,vy:i/a-(r?400*a:0),arc:r,active:!0,isSpecial:!!t.isSpecial,hit:!1,life:s?.25:0,trailX:[],trailY:[],trailCount:0})}function Cx(n,t){for(let e of n.projectiles){if(e.elapsed++,e.hit){e.life-=ne,e.active=e.life>0;continue}e.trailX.unshift(e.x),e.trailY.unshift(e.y),e.trailX.length=Math.min(10,e.trailX.length),e.trailY.length=e.trailX.length,e.trailCount=e.trailX.length;let i=Math.min(1,e.elapsed/e.flightTicks),s=e.flightTicks/60;if(e.x=e.startX+(e.targetX-e.startX)*i,e.y=e.startY+(e.targetY-e.startY)*i-(e.arc?400*s*s*i*(1-i):0),!(i<1)){if(e.isSpecial){for(let r of n.units)r.team!==e.team&&Math.abs(r.x-e.x)<e.radius&&t.push({team:e.team,targetId:r.id,dmg:e.dmg});Ue(n,"impact",{x:e.x,y:e.y,type:e.type})}else if(e.targetIsBase)t.push({team:e.team,targetId:null,dmg:e.dmg});else{let r=n.units.find(a=>a.id===e.targetId);if(r&&Kr(r.x,e.targetX)<=r.size+20){let a=e.splashRadius&&r.uType===0?e.dmg*.5:e.dmg;if(t.push({team:e.team,targetId:r.id,dmg:a}),e.splashRadius){let o=n.units.filter(c=>c.team!==e.team&&c.id!==r.id&&Kr(c.x,r.x)<e.splashRadius).sort((c,h)=>Kr(c.x,r.x)-Kr(h.x,r.x)||c.id-h.id).slice(0,2);for(let c of o)t.push({team:e.team,targetId:c.id,dmg:e.dmg*.35*(c.uType===0?.5:1)});Kr(Qr(-e.team),r.x)<e.splashRadius&&t.push({team:e.team,targetId:null,dmg:e.dmg*.35})}}}e.hit=!0,e.active=e.type==="laser"}}n.projectiles=n.projectiles.filter(e=>e.active)}function Ix(n,t){for(let e of n.specials){let i=Yt[e.age].special,s=me(n,e.team),r=e.x;if(i.type==="laser"||i.type==="orbital"){let a=i.type==="laser"?150:300,o=(i.type==="laser"?800:2500)*ne;for(let c of n.units)c.team!==e.team&&Math.abs(c.x-r)<a&&t.push({team:e.team,targetId:c.id,dmg:o})}else if(e.nextPulse--,e.nextPulse<=0){let a={meteor:[8,150,150,"meteor",800],arrows:[30,40,60,"arrow",1e3],cannons:[6,300,120,"cannonball",1200],airstrike:[8,400,120,"bombDrop",800]},[o,c,h,l,d]=a[i.type];e.nextPulse+=60/o;let u=ie+50+$r(s)*(he-ie-50),f=e.team===1?u:he-u;kd(n,{x:l==="bombDrop"?f:f-e.team*200,y:-50,targetX:f,targetY:si,team:e.team,type:l,speed:d,dmg:c,radius:h,targetId:null,targetIsBase:!1,isSpecial:!0})}e.remaining--}n.specials=n.specials.filter(e=>e.remaining>0)}function ah(n,t=-1,e="adaptive"){let i=me(n,t),s=me(n,-t),r=Yt[i.age],a=n.units.filter(M=>M.team===t),o=n.units.filter(M=>M.team!==t),c=t===1?ie:he-ie,h=o.filter(M=>Math.abs(M.x-c)<500),l=o.filter(M=>Math.abs(M.x-c)<320),d=M=>!Xi(n,t,M),u={type:"evolve"};if(d(u))return u;let f={type:"special"};if(e!=="passive"&&d(f)&&(o.length>=3||l.length>0&&i.hp<i.maxHp*.4))return f;if(e==="passive")return null;let m=[],x=(M,R)=>{d(M)?m.push({command:M,score:R}):M.type==="unit"&&M.index>0&&Xi(n,t,M)==="gold"&&l.length===0&&a.length>=1&&m.push({command:null,score:R})},g=a.filter(M=>M.type!=="ranged").length,p=a.filter(M=>M.type==="ranged").length,T=o.filter(M=>M.type==="ranged").length,A=t===-1?n.opponent.emotion.toLowerCase():"centered",v=/angry|furious|brave|confident|excited|eager/.test(A),b=/afraid|anxious|worried|scared|tense|sad|weary/.test(A);for(let M=0;M<r.units.length;M++){let R=r.units[M],y=2;e==="melee"?y+=M===0?10:-10:e==="ranged"?y+=M===1?10:-10:e==="heavy"?y+=M===2?10:-10:e==="mixed"?y+=M===n.metrics.spawned[t]%3?5:0:(R.type==="ranged"?y+=g>0?3:-.5:y+=g===0?3:0,M===2&&(y+=T>1?2:.5),M===2&&s.turrets.some(E=>E!==null)&&(y+=3),M===2&&o.length>=3&&a.filter(E=>E.uType===2).length<2&&(y+=3),v&&M===2&&(y+=.5),b&&M===0&&(y+=.5),R.type==="ranged"&&p>=Math.max(2,g*2)&&(y-=3),M===0&&g>Math.max(2,p)&&(y-=2),y+=Math.min(1,R.hp*R.dmg/R.attackSpeed/(R.cost*R.cost))),!(e==="heavy"&&M!==2&&h.length<2)&&(e==="melee"&&M!==0||e==="ranged"&&M!==1||x({type:"unit",index:M},y))}if(e==="adaptive"||e==="turtle"||e==="mixed"){if(l.length>=2||e==="turtle"){for(let M=0;M<r.turrets.length;M++)x({type:"turret",index:M},3+h.length*.7+(e==="turtle"?5:0)+M*.1);i.turrets.every((M,R)=>R>=i.unlockedSlots||M!==null)&&x({type:"slot"},e==="turtle"?6:h.length>4?4:0)}if(a.length>=1||i.gold>=r.units[2].cost*2)for(let M of["econ","dmg","hp"]){let R=i.upgrades[M],y=Wi[R];i.gold>=y+r.units[0].cost*.25&&x({type:"upgrade",stat:M},M==="econ"?h.length<2?5:2:5.5)}}return m.sort((M,R)=>R.score-M.score),m[0]?.command??null}function zd(n){if(!n.opponent.enabled||n.tick<n.opponent.nextTick)return;let t=dn[n.difficulty];n.opponent.nextTick=n.tick+Math.max(1,Math.round(t.thinkRate*60));let e=ah(n);e&&jr(n,-1,e).ok?(n.opponent.lastAction=e.type,n.opponent.order=e.type==="turret"?"defend":e.type==="evolve"?"tech":e.type==="special"?"special":"counter"):n.opponent.order="hold"}var Vd=n=>n.radius??rn(n),ta=(n,t)=>Math.max(0,Ge(n,t)-rn(n)-Vd(t)),lh=(n,t)=>Math.atan2(Math.sin(t-n),Math.cos(t-n)),oh=(n,t,e)=>Gn(n+In(lh(n,t),-e*ne,e*ne));function Hd(n,t){let e=me(n,t);return[Qs(t),...e.turrets.flatMap((i,s)=>i===null?[]:[{...ri(t,s),id:e.turretIds[s]}])]}function Px(n,t,e){let i=Qs(e),s=t.x-n.x,r=t.z-n.z,a=In(((i.x-n.x)*s+(i.z-n.z)*r)/(s*s+r*r||1),0,1);return Math.hypot(n.x+s*a-i.x,n.z+r*a-i.z)>i.radius}function Lx(n,t,e){let i=gi(n,t.target),s=e.filter(d=>d.drawProgress>=.8&&ta(t,d)<Math.max(t.uType===2&&!t.guide?450:180,t.range+70)),r=s.filter(d=>ta(t,d)<75),a=r.length?r:s;if(a.length)return a.sort((d,u)=>ta(t,d)-(i?.id===d.id?45:0)-(ta(t,u)-(i?.id===u.id?45:0))||d.id-u.id),t.intent=t.guide?"engaged":"fighting",_i(a[0]);let o=gi(n,t.guide?.target);if(o)return t.intent="following",_i(o);let c=t.guide?.z??t.routeZ,h=Hd(n,-t.team),l=d=>Math.abs(d.z-c)*1.35+(d.kind==="turret"?t.uType===2?-65:5:0)+(i?.kind===d.kind&&i?.slot===d.slot?-20:0);return h.sort((d,u)=>l(d)-l(u)||(d.slot??-1)-(u.slot??-1)),t.intent=t.guide?"following":h[0].kind==="turret"?"flanking":"advancing",_i(h[0])}function Dx(n,t,e){let i=rn(t);n.x=In(n.x,Ot.minX,Ot.maxX),n.z=In(n.z,Ot.minZ+i,Ot.maxZ-i);for(let s of e){let r=n.x-s.x,a=n.z-s.z,o=Math.hypot(r,a),c=s.radius+i;o<c&&(n.x=s.x+(o?r/o:s.team)*c,n.z=s.z+(o?a/o:0)*c)}n.x=Gn(In(n.x,Ot.minX,Ot.maxX)),n.z=Gn(In(n.z,Ot.minZ+i,Ot.maxZ-i))}function Nx(n,t){let e=[1,-1].flatMap(s=>[Qs(s),...Array.from({length:me(n,s).unlockedSlots},(r,a)=>ri(s,a))]),i=t.map(()=>({x:0,z:0}));for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){let a=t[s],o=t[r],c=o.x-a.x,h=o.z-a.z,l=rn(a.u)+rn(o.u)+3;if(Math.abs(c)>=l||Math.abs(h)>=l)continue;let d=Math.hypot(c,h);if(d>=l)continue;let u=Math.min(1.4,(l-d)*.5),f=d?c/d:a.u.team!==o.u.team?a.u.team:0,m=d?h/d:a.u.team===o.u.team?1:0;i[s].x-=f*u,i[s].z-=m*u,i[r].x+=f*u,i[r].z+=m*u}for(let s=0;s<t.length;s++){let r=t[s],a=r.u;r.x+=i[s].x,r.z+=i[s].z,Dx(r,a,e);let o=Ge(r,a),c=a.speed*ne;o>c&&(r.x=a.x+(r.x-a.x)*c/o,r.z=a.z+(r.z-a.z)*c/o),r.x=Gn(r.x),r.z=Gn(r.z),a.moving=Ge(r,a)>.01,a.x=r.x,a.z=r.z}}function Gd(n){let t=[],e=[],i=[],s={1:n.units.filter(r=>r.team===1),"-1":n.units.filter(r=>r.team===-1)};for(let r of n.units){if(r.attackCooldown=Math.max(0,r.attackCooldown-ne),r.animTimer=Math.max(0,r.animTimer-ne),r.guide&&n.tick>=r.guide.until&&(r.routeZ=r.guide.z,r.guide=null,r.thinkAt=0),r.drawProgress<1){r.drawProgress=Math.min(1,r.drawProgress+ne*2);continue}(n.tick>=r.thinkAt||!gi(n,r.target))&&(r.target=Lx(n,r,s[-r.team]),r.thinkAt=n.tick+12);let a=gi(n,r.target);if(!a)continue;let o=ta(r,a),c=r.target.kind!=="unit";r.isAttacking=o<=r.range+1e-6;let h=Math.atan2(a.z-r.z,a.x-r.x),l={u:r,x:r.x,z:r.z};if(r.isAttacking){if(r.heading=oh(r.heading,h,9),r.siegeMultiplier&&!c&&o>35){let d=Ge(r,a)||1;l.x+=(a.x-r.x)/d*r.speed*ne*.3,l.z+=(a.z-r.z)/d*r.speed*ne*.3}if(n.metrics.firstContactTick===null&&(n.metrics.firstContactTick=n.tick),r.attackCooldown<=1e-9&&Math.abs(lh(r.heading,h))<.18){r.attackCooldown=r.attackSpeed,r.animTimer=.3;let d=r.dmg*Wn(n,r.team,"dmg")*(c&&r.siegeMultiplier||1);r.projType?e.push({x:r.x+Math.cos(h)*rn(r),y:r.y-r.size*.7,z:r.z+Math.sin(h)*rn(r),target:a,ref:r.target,type:r.projType,speed:r.projSpeed,dmg:d,team:r.team,sourceRole:r.uType,splashRadius:r.splashRadius||0}):(t.push({team:r.team,ref:r.target,dmg:d}),Ue(n,"melee",{team:r.team,x:r.x,y:r.y-r.size/2,z:r.z}))}}else{let d=r.guide?.z??r.routeZ,u=c&&Math.abs(a.x-r.x)>Math.max(260,r.range+100)?d:a.z,f=c&&Math.abs(u-r.z)>8?Math.sign(a.x-r.x)*Math.min(220,Math.abs(a.x-r.x)):a.x-r.x,m=u-r.z,x=Math.hypot(f,m)||1,g=Math.min(r.speed*ne,Math.max(0,o-r.range));l.x+=f/x*g,l.z+=m/x*g,r.heading=oh(r.heading,Math.atan2(m,f),7)}i.push(l)}for(let r of[1,-1]){let a=me(n,r);for(let o=0;o<a.unlockedSlots;o++){if(a.turretTimers[o]=Math.max(0,a.turretTimers[o]-ne),a.turrets[o]===null)continue;let c=Yt[a.age].turrets[a.turrets[o]],h=ri(r,o),l=a.turretAim[o],d=s[-r].filter(m=>m.drawProgress>=.8&&Ge(h,m)<=c.range+120&&Px(h,m,r));d.sort((m,x)=>Ge(h,m)-(m.id===l.target?.id?35:0)-Ge(h,x)+(x.id===l.target?.id?35:0)||m.id-x.id);let u=d[0];if(l.target=u?_i(u):null,!u||a.turretProgress[o]<1)continue;let f=Math.atan2(u.z-h.z,u.x-h.x);l.heading=oh(l.heading,f,3.8),!(a.turretTimers[o]>1e-9||Math.abs(lh(l.heading,f))>.045)&&(l.heading=f,e.push({...Nd(r,o,a.age,a.turrets[o],f),target:u,ref:l.target,sourceSlot:o,sourceId:a.turretIds[o],type:c.projType,speed:c.projSpeed,dmg:c.dmg*Wn(n,r,"dmg"),team:r}),a.turretTimers[o]=c.attackSpeed)}}Nx(n,i);for(let r of e)Ux(n,r);Ox(n,t),Fx(n,t);for(let r of t)Bx(n,r);kx(n)}function Ux(n,t){let{target:e,ref:i,...s}=t,r=e.kind?si-(e.kind==="base"?65:60):e.y-e.size/2,a=t.type==="laser"?1:Math.max(1,Math.ceil(Ge(t,e)/t.speed*60));n.projectiles.push({...s,id:n.nextId++,target:{...i},targetId:i.id??null,targetIsBase:i.kind==="base",targetX:e.x,targetY:r,targetZ:e.z,startX:t.x,startY:t.y,startZ:t.z,flightTicks:a,elapsed:0,vx:(e.x-t.x)/(a/60),vy:(r-t.y)/(a/60),arc:["arc","meteor","arrow","cannonball"].includes(t.type),active:!0,hit:!1,life:t.type==="laser"?.12:0})}function Fx(n,t){for(let e of n.projectiles){if(e.hit){e.life-=ne,e.active=e.life>0;continue}let i=Math.min(1,++e.elapsed/e.flightTicks),s=e.flightTicks/60;if(e.x=e.startX+(e.targetX-e.startX)*i,e.z=e.startZ+(e.targetZ-e.startZ)*i,e.y=e.startY+(e.targetY-e.startY)*i-(e.arc?Math.min(180,220*s)*i*(1-i):0),i<1)continue;let r=gi(n,e.target);if(r&&Ge(r,{x:e.targetX,z:e.targetZ})<=(r.size||Vd(r))+20){let a=e.splashRadius&&r.uType===0,o=e.sourceRole===1&&r.uType===2?.5:1,c=e.sourceRole===1&&r.uType===0?1.5:1;if(t.push({team:e.team,ref:e.target,dmg:e.dmg*(a?.5:1)*o*c}),e.splashRadius){let h={x:e.targetX,z:e.targetZ},l=n.units.filter(d=>d.team!==e.team&&d.id!==r.id&&Ge(d,h)<e.splashRadius).sort((d,u)=>Ge(d,h)-Ge(u,h)||d.id-u.id).slice(0,2);for(let d of l)t.push({team:e.team,ref:_i(d),dmg:e.dmg*.35*(d.uType===0?.5:1)})}}e.hit=!0,e.active=e.life>0,Ue(n,"impact",{x:e.x,y:e.y,z:e.z,projectileType:e.type})}n.projectiles=n.projectiles.filter(e=>e.active)}function Ox(n,t){for(let e of n.specials){let i=Yt[e.age].special.type,s=i==="laser"||i==="orbital";if(s||--e.nextPulse<=0){let r={meteor:[8,150,150],arrows:[30,40,60],cannons:[6,300,120],airstrike:[8,400,120],laser:[60,13.333333333333334,150],orbital:[60,41.666666666666664,300]},[a,o,c]=r[i];e.nextPulse+=60/a;let h=me(n,e.team),l=s?e.x:e.x+e.team*($r(h)-.5)*420,d=s?e.z:e.z+($r(h)-.5)*260;for(let u of n.units)u.team!==e.team&&Ge(u,{x:l,z:d})<c&&t.push({team:e.team,ref:_i(u),dmg:o});for(let u of Hd(n,-e.team))u.kind==="turret"&&Ge(u,{x:l,z:d})<c&&t.push({team:e.team,ref:_i(u),dmg:o*.5})}e.remaining--}n.specials=n.specials.filter(e=>e.remaining>0)}function Bx(n,t){let e=gi(n,t.ref);if(!e)return;let i=me(n,t.ref.team),s=t.ref.kind==="turret";n.metrics.damage[t.team]+=Math.min(Math.max(0,e.hp),t.dmg),s?i.turretHp[t.ref.slot]-=t.dmg:t.ref.kind==="base"?i.hp-=t.dmg:e.hp-=t.dmg,Ue(n,"damage",{team:t.team,targetId:t.ref.id??null,target:t.ref,amount:t.dmg,x:e.x,y:si-50,z:e.z})}function kx(n){let t=dn[n.difficulty];for(let e of[1,-1]){let i=me(n,e);for(let s=0;s<4;s++)i.turrets[s]!==null&&i.turretHp[s]<=0&&(Ue(n,"cannon-destroyed",{team:e,slot:s,id:i.turretIds[s],...ri(e,s)}),i.turrets[s]=null,i.turretIds[s]=null,i.turretHp[s]=i.turretMaxHp[s]=i.turretTimers[s]=0,i.turretProgress[s]=1,i.turretAim[s].target=null)}for(let e of n.units)if(e.hp<=0){let i=me(n,-e.team),s=me(n,e.team);i.gold+=e.killGold*(e.team===1?t.econMult:1),i.xp+=e.killXp*(e.team===1?t.xpMult:1),s.xp+=e.killXp*.5*(e.team===-1?t.xpMult:1),n.metrics.kills[-e.team]++,Ue(n,"death",{team:e.team,id:e.id,x:e.x,y:e.y,z:e.z,size:e.size,gold:e.killGold,xp:e.killXp})}n.units=n.units.filter(e=>e.hp>0),n.metrics.peakUnits=Math.max(n.metrics.peakUnits,n.units.length),(n.player.hp<=0||n.enemy.hp<=0)&&(n.player.hp=Math.max(0,n.player.hp),n.enemy.hp=Math.max(0,n.enemy.hp),n.winner=n.player.hp===0&&n.enemy.hp===0?0:n.enemy.hp===0?1:-1,n.running=!1,Ue(n,"end",{winner:n.winner}))}function Wd(n){if(!n.running||n.paused)return!1;n.tick++;for(let t of[1,-1]){let e=me(n,t);if(e.gold+=Ud(n,t)*ne,e.age<Yt.length-1){let i=e.age?Yt[e.age-1].evolveXP:0;e.xp+=(Yt[e.age].evolveXP-i)/110*ne*(t===-1?dn[n.difficulty].xpMult:1)}e.specialTimer=Math.max(0,e.specialTimer-ne),e.deployTimer=Math.max(0,e.deployTimer-ne),e.drawProgress=Math.min(1,e.drawProgress+ne*.3);for(let i=0;i<4;i++)e.turretProgress[i]=Math.min(1,e.turretProgress[i]+ne*.5)}return zd(n),Te(n)?Gd(n):Bd(n),!0}function dl(n,t,e,i){if(!Number.isSafeInteger(n)||n<t||n>e)throw new Error(`Invalid ${i}`)}function Xd(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid command");let t={unit:["index","z"],guide:["id","x","z"],turret:["index"],upgrade:["stat"],sell:["slot"],slot:[],evolve:[],special:[]};if(!Object.hasOwn(t,n.type))throw new Error("Unknown command type");if(Object.keys(n).some(e=>e!=="type"&&!t[n.type].includes(e)))throw new Error("Unknown command field");return structuredClone(n)}function fl(n){return Array.isArray(n)?`[${n.map(fl).join(",")}]`:n&&typeof n=="object"?`{${Object.keys(n).sort().map(t=>`${JSON.stringify(t)}:${fl(n[t])}`).join(",")}}`:JSON.stringify(n)}function zx(n){let t=2166136261;for(let e of fl(n))t=Math.imul(t^e.charCodeAt(0),16777619);return(t>>>0).toString(16).padStart(8,"0")}var cs=class n{#t;#i;#s=[];#e=new Map;constructor(t={}){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Invalid options");if(Object.keys(t).some(e=>!["seed","difficulty","startAge","opponent","battlefield"].includes(e)))throw new Error("Unknown option");this.#t=Fd(t),this.#i={seed:this.#t.seed,difficulty:this.#t.difficulty,startAge:this.#t.player.age,opponent:this.#t.opponent.enabled},this.#t.battlefield&&(this.#i.battlefield=this.#t.battlefield)}observe(){let t=structuredClone(this.#t);return t.events=[],t}get tick(){return this.#t.tick}get running(){return this.#t.running}get paused(){return this.#t.paused}get winner(){return this.#t.winner}legal(t,e){return!Xi(this.#t,t,Xd(e))}decide(t=1,e="adaptive"){if(![1,-1].includes(t)||!["adaptive","mixed","melee","ranged","heavy","turtle","passive"].includes(e))throw new Error("Invalid policy");return ah(this.#t,t,e)}command(t,e,i){let s=Xd(e);return this.#r(i,{team:t,command:s},()=>{let r=jr(this.#t,t,s);return r.ok&&this.#n("command",{team:t,command:s}),r})}client(t){if(t!==1&&t!==-1)throw new Error("Invalid team");return Object.freeze({observe:()=>this.observe(),command:(e,i)=>this.command(t,e,i),legal:e=>this.legal(t,e)})}advance(t,{events:e=!0}={}){dl(t,0,36e3,"tick count");let i=e?this.#t.events.splice(0):[];this.#t.events.length=0;for(let s=0;s<t&&Wd(this.#t);s++)e&&i.push(...this.#t.events),this.#t.events.length=0;return{tick:this.tick,events:i,running:this.running}}advanceOnce(t,e){return this.#r(t,{advance:e},()=>this.advance(e))}pause(t){if(typeof t!="boolean")throw new Error("Invalid pause");this.#t.paused=t,this.#n("pause",{paused:t})}agreements(t){if(!t||typeof t!="object"||Array.isArray(t)||Object.keys(t).some(e=>!["noSpecials","noTurrets","meleeOnly"].includes(e)||typeof t[e]!="boolean"))throw new Error("Invalid agreements");Object.assign(this.#t.agreements,t),this.#n("agreements",{value:structuredClone(t)})}truce(t){dl(t,0,300,"truce"),this.#t.restraintUntil=t?Math.max(this.#t.restraintUntil,this.tick+t*60):0,this.#n("truce",{seconds:t})}emotion(t){if(typeof t!="string"||!t.trim()||t.length>80)throw new Error("Invalid emotion");this.#t.opponent.emotion=t.trim(),this.#n("emotion",{word:t.trim()})}#n(t,e){this.#s.push({tick:this.tick,type:t,...e})}#r(t,e,i){if(t===void 0)return i();if(typeof t!="string"||!t||t.length>128)throw new Error("Invalid request id");let s=fl(e),r=this.#e.get(t);if(r){if(r.fingerprint!==s)throw new Error("Request id conflict");return structuredClone(r.result)}if(this.#e.size>=1e4)throw new Error("Request receipt limit reached; start a new session");let a=i();return this.#e.set(t,{fingerprint:s,result:structuredClone(a)}),a}digest(){return zx(this.observe())}replay(){return{version:this.#t.version,options:structuredClone(this.#i),ticks:this.tick,entries:structuredClone(this.#s),digest:this.digest()}}checkpoint(){return{replay:this.replay(),receipts:structuredClone([...this.#e])}}static restore(t){if(!t||!Array.isArray(t.receipts)||t.receipts.length>1e4)throw new Error("Invalid checkpoint");let e=n.fromReplay(t.replay);return e.#e=new Map(structuredClone(t.receipts)),e}static fromReplay(t){if(!t||![ll,cl].includes(t.version)||!Array.isArray(t.entries)||t.entries.length>25e4)throw new Error("Unsupported replay");dl(t.ticks,0,5184e3,"replay duration");let e=new n(t.options);if(e.#t.version!==t.version)throw new Error("Replay battlefield mismatch");let i=s=>{for(dl(s,e.tick,t.ticks,"entry tick");e.tick<s;){let r=e.tick;if(e.advance(Math.min(36e3,s-r),{events:!1}),e.tick===r)throw new Error("Replay advances a paused or ended match")}};for(let s of t.entries)switch(i(s.tick),s.type){case"command":if(!e.command(s.team,s.command).ok)throw new Error("Illegal replay command");break;case"pause":e.pause(s.paused);break;case"agreements":e.agreements(s.value);break;case"truce":e.truce(s.seconds);break;case"emotion":e.emotion(s.word);break;default:throw new Error("Unknown replay entry")}if(i(t.ticks),e.digest()!==t.digest)throw new Error("Replay digest mismatch");return e}};var fn=Object.freeze({width:.16,depth:.13,height:.044}),qd=Ot.dockZ;function pl(n,t=1){if(!Number.isInteger(n)||n<0||n>=qd.length)return null;let e=ri(t,n);return{x:mi(e.x),y:fn.height,z:vn(e.z),slot:n}}function tr(n,t,e){let i=t?.player;if(!i)return null;let s=-1;if(n.kind==="turret")s=i.turrets.slice(0,i.unlockedSlots).indexOf(null);else if(n.kind==="slot")s=i.unlockedSlots;else if(n.kind==="eraser"){let a=Vx(e);if(!a||a.slot>=i.unlockedSlots||i.turrets[a.slot]===null)return null;s=a.slot}let r=pl(s);return r&&{...r,y:n.kind==="slot"?0:fn.height}}function Vx(n){if(!n||!Number.isFinite(n.x)||!Number.isFinite(n.z))return null;let t=null,e=1/0;for(let i=0;i<qd.length;i++){let s=pl(i),r=Math.hypot(n.x-s.x,n.z-s.z);r<e&&(t=s,e=r)}return ch(n,t)?t:null}function ea(n){return["turret","eraser"].includes(n.kind)?fn.height:0}function ch(n,t){return!!t&&Math.abs(n.x-t.x)<=fn.width/2+.01&&Math.abs(n.z-t.z)<=fn.depth/2+.01}var an=Object.freeze({width:2.4,depth:1.35,lane:.45,minScale:.2,maxScale:1.6}),Yd=Object.freeze([["club","sling","dinosaur"],["sword","bow","horse"],["halberd","musket","cannon"],["soldier","rifle","tank"],["blade","blaster","mech"],["drone","ray","mothership"]].map(Object.freeze)),hh=["normal","hard","harder","impossible"];function Zd(n){if(!n||!n.running)return hh.map((i,s)=>({id:`start-${i}`,kind:"seal",label:i[0].toUpperCase()+i.slice(1),detail:"Drop on the page to begin",action:"start",difficulty:i,price:0,x:-.72+s*.48,z:.89}));let t=Yt[n.player.age],e=[];t.units.forEach((i,s)=>e.push({id:`unit-${s}`,kind:"unit",label:i.name,detail:Te(n)?["Light infantry \xB7 surround heavies; resist siege","Ranged \xB7 counters infantry; heavy armor resists shots","Heavy \xB7 resists ranged fire; breaks defenses"][s]:"Drop in the green rally area",price:i.cost,command:{type:"unit",index:s},x:-1.02+s*.34,z:.86})),t.turrets.forEach((i,s)=>e.push({id:`turret-${s}`,kind:"turret",label:i.name,detail:"Place on the highlighted empty dock",price:i.cost,command:{type:"turret",index:s},x:.12+s*.34,z:.86}));for(let[i,s]of["dmg","hp","econ"].entries())e.push({id:`upgrade-${s}`,kind:"potion",label:{dmg:"Sharpened",hp:"Thick Paper",econ:"Fast Ink"}[s],detail:"Toss onto the battlefield",price:Wi[n.player.upgrades[s]]??1/0,command:{type:"upgrade",stat:s},x:-1.04+i*.27,z:1.16});return e.push({id:"evolve",kind:"evolve",label:"Next age",detail:"Pour onto the page",price:t.evolveXP,currency:"XP",command:{type:"evolve"},x:-.21,z:1.16},{id:"special",kind:"special",label:t.special.name,detail:"Toss onto the battlefield",price:0,command:{type:"special"},x:.08,z:1.16},{id:"slot",kind:"slot",label:"Cannon dock",detail:"Build on the highlighted outline \xB7 four docks maximum",price:n.player.unlockedSlots<4?n.player.unlockedSlots*500:1/0,command:{type:"slot"},x:.37,z:1.16},{id:"sell",kind:"eraser",label:"Sell cannon",detail:"Drop on any of your cannons \xB7 50% refund",price:0,command:{type:"sell"},x:.66,z:1.16}),e}var Jd=Object.freeze([{id:"pause",action:"pause",kind:"hourglass",label:"Pause / resume",detail:"Lift and return to the page",x:1.05,z:.83},{id:"speed",action:"speed",kind:"clock",label:"Battle speed",detail:"Lift and return \xB7 1\xD7 / 2\xD7 / 3\xD7",x:1.05,z:1.13},{id:"quality",action:"quality",kind:"feather",label:"Mist & detail",detail:"Lift and return to change",x:-1.05,z:-.66},{id:"new",action:"new",kind:"page",label:"New canvas",detail:"Pause first, then drop on the page",x:-.69,z:-.66},{id:"music",action:"music",kind:"music",label:"Music box",detail:"Lift and return to toggle music",x:.69,z:-.66},{id:"exit",action:"exit",kind:"compass",label:"Leave the table",detail:"Lift and return to leave MR",x:1.05,z:-.66}]);function $d(n,t,e){return!t||!["x","y","z"].every(i=>Number.isFinite(t[i]))?"invalid-position":Math.abs(t.x)>an.width/2||Math.abs(t.z)>an.depth/2||Math.abs(t.y)>.12?"off-table":n.kind==="unit"&&!(t.x>=-.88&&t.x<=-.44&&t.z>=(e&&Te(e)?-.36:.14)&&t.z<=.65)?"rally-area":n.kind==="nudge"&&(t.z<-.37||t.z>.65)?"off-table":["turret","slot","eraser"].includes(n.kind)&&!ch(t,tr(n,e,t))?{turret:"cannon-dock",slot:"dock-outline",eraser:"sell-dock"}[n.kind]:null}var uh=Object.freeze({"guide-cooldown":"Let this troop react before nudging it again.","unavailable-unit":"That troop is no longer available to guide.","wrong-battlefield":"Start a new tabletop battle to use troop guidance.",gold:"More gold is needed. The piece returns to the shop.",xp:"More XP is needed for the next age.",paused:"Drop the hourglass onto the page to resume first.",deploying:"Your last troop is still deploying.","deployment-blocked":"Make room at your rally point.","unit-cap":"Your army is full.","slots-full":"Add a cannon dock or sell a cannon first.","no-turret":"There is no cannon to sell.",cooldown:"The special is still recharging.","base-drawing":"Your new base is still being drawn.","max-upgrade":"This potion is already at its strongest.","max-age":"You have reached the final age.","off-table":"Missed the page. Nothing was spent.","rally-area":"Drop troops in the green rally area.","cannon-dock":"Place the cannon on the highlighted empty dock beside your base.","dock-outline":"Build the dock on the highlighted dashed outline beside your base.","sell-dock":"Drop the eraser on an occupied dock beside your base. The dock stays.","max-docks":"All four cannon docks are built. Place a cannon on an empty dock.","stale-age":"The age changed. Choose a new piece.","pause-first":"Pause before starting a new canvas.","match-ended":"Choose a difficulty to start the next battle.","tracking-lost":"Tracking lost. Held pieces returned safely.","not-started":"Drop a difficulty seal onto the page.","invalid-position":"The drop could not be tracked.","already-holding":"Release the piece in this hand first.","unknown-offer":"That piece is no longer on sale."});var ml=class{constructor({session:t=null,onEvent:e=()=>{}}={}){this.session=t,this.onEvent=e,this.speed=1,this.quality="mist",this.holds=new Map,this.sequence=0,this.accumulator=0,this.drops=[]}observe(){return this.session?.observe()??null}offers(t=this.observe()){return[...Zd(t),...Jd]}offer(t){if(typeof t!="string")return null;if(t.startsWith("troop-")){let e=this.observe(),i=e?.units.find(s=>`troop-${s.id}`===t&&s.team===1);return!i||!Te(e)?null:{id:t,kind:"nudge",label:i.name,detail:"Suggest a route; nearby fighting takes priority",price:0,command:{type:"guide",id:i.id,x:i.x,z:i.z},x:mi(i.x),z:vn(i.z)}}return this.offers().find(e=>e.id===t)}reason(t,e=this.observe()){return t?t.action==="new"&&e?.running&&!e.paused?"pause-first":t.action?null:t.kind==="slot"&&e?.player.unlockedSlots>=4?"max-docks":e?Xi(e,1,t.command):"not-started":"unknown-offer"}say(t,e={}){this.onEvent({type:t,...e})}fail(t){return this.say("message",{text:uh[t]||t,error:t}),{ok:!1,error:t}}start(t="normal",e={}){return hh.includes(t)?(this.cancelAll(),this.session=new cs({...e,difficulty:t,battlefield:"tabletop"}),this.accumulator=0,this.speed=1,this.say("start",{difficulty:t}),{ok:!0}):this.fail("unknown-offer")}grab(t,e){if(this.holds.has(t))return this.fail("already-holding");let i=this.offer(e),s=this.reason(i);if(s)return this.fail(s);let r={id:++this.sequence,owner:t,offer:structuredClone(i),age:this.observe()?.player.age??null};return this.holds.set(t,r),this.say("grab",{token:r}),{ok:!0,token:r}}cancel(t){let e=this.holds.get(t);this.holds.delete(t),e&&this.say("cancel",{token:e})}cancelAll(){for(let t of[...this.holds.keys()])this.cancel(t)}drop(t,e){let i=this.holds.get(t);if(!i)return{ok:!1,error:"not-held"};this.holds.delete(t);let{offer:s}=i,r=this.observe(),a=$d(s,e,r),o;if(a)o=this.fail(a);else if(s.kind!=="nudge"&&i.age!==(r?.player.age??null))o=this.fail("stale-age");else{let c=this.reason(s,r);if(c)o=this.fail(c);else if(s.action)o=this.tool(s);else{let h=s.command;if(s.kind==="eraser"?h={...h,slot:tr(s,r,e).slot}:s.kind==="unit"&&Te(r)?h={...h,z:Gn(In(Jr(e.z),Ot.minZ+34,Ot.maxZ-34))}:s.kind==="nudge"&&(h={...h,x:Gn(In(hl(e.x),Ot.minX,Ot.maxX)),z:Gn(In(Jr(e.z),Ot.minZ,Ot.maxZ))}),o=this.session.command(1,h),o.ok&&s.kind==="nudge"){let l=this.observe().units.find(d=>d.id===h.id);this.say("message",{text:`${l.name}: route suggested. ${l.isAttacking?"Fighting nearby first.":"Walking there."}`})}}}return!o.ok&&!a&&this.say("message",{text:uh[o.error]||o.error,error:o.error}),this.drops.push({offer:s.id,tick:this.session?.tick??0,point:{...e},...o}),this.drops.length>256&&this.drops.shift(),this.say("drop",{token:i,point:e,result:o}),o}tool(t){switch(t.action){case"start":return this.start(t.difficulty);case"pause":if(!this.session?.running)return this.fail("not-started");this.session.pause(!this.session.paused),this.accumulator=0,this.say("message",{text:this.session.paused?"Paused. Drop the hourglass onto the page to resume.":"The battle continues."});break;case"speed":this.speed=this.speed%3+1,this.say("message",{text:`Battle speed: ${this.speed}\xD7`});break;case"quality":this.quality=this.quality==="mist"?"clear":this.quality==="clear"?"comfort":"mist",this.say("quality",{quality:this.quality});break;case"music":this.say("music");break;case"new":this.cancelAll(),this.session=null,this.accumulator=0,this.say("menu");break;case"exit":this.pauseForInterruption(),this.say("exit");break;default:return this.fail("unknown-offer")}return{ok:!0}}pauseForInterruption(){this.cancelAll(),this.accumulator=0,this.session?.running&&!this.session.paused&&this.session.pause(!0)}update(t){if(!Number.isFinite(t)||t<0)throw new Error("Invalid elapsed time");if(t>=5){this.pauseForInterruption();return}if(!this.session?.running||this.session.paused)return;this.accumulator+=t*this.speed*60;let e=Math.floor(this.accumulator);e&&(this.accumulator-=e,this.advance(e))}advance(t){if(!this.session)return;let e=this.session.running,i=this.session.advance(t);for(let[s,r]of this.holds)r.offer.kind==="nudge"&&!this.observe().units.some(a=>a.id===r.offer.command.id)&&this.cancel(s);return i.events.length&&this.say("combat",{events:i.events}),i.events.some(s=>s.type==="cannon-destroyed"&&s.team===1)&&this.say("message",{text:"Your cannon was destroyed. Its dock can hold a replacement."}),e&&!this.session.running&&(this.cancelAll(),this.say("finish",{winner:this.session.winner})),i}};var jd={type:"change"},fh={type:"start"},Qd={type:"end"},gl=new kn,Kd=new tn,Hx=Math.cos(70*as.DEG2RAD),Fe=new C,pn=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6,_l=class extends Fr{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yn.ROTATE,MIDDLE:yn.DOLLY,RIGHT:yn.PAN},this.touches={ONE:An.ROTATE,TWO:An.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ae,this._lastTargetPosition=new C,this._quat=new ae().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new C,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new C,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wx.bind(this),this._onPointerDown=Gx.bind(this),this._onPointerUp=Xx.bind(this),this._onContextMenu=Kx.bind(this),this._onMouseWheel=Zx.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=$x.bind(this),this._onTouchMove=jx.bind(this),this._onMouseDown=qx.bind(this),this._onMouseMove=Yx.bind(this),this._interceptControlDown=Qx.bind(this),this._interceptControlUp=ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jd),this.update(),this.state=oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Fe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<Hx?this.object.lookAt(this.target):(Kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(Kd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Gx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function qx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case yn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case yn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(fh)}function Yx(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Zx(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(fh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qd))}function Jx(n){this.enabled!==!1&&this._handleKeyDown(n)}function $x(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case An.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case An.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case An.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case An.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(fh)}function jx(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function Kx(n){this.enabled!==!1&&n.preventDefault()}function Qx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xi(n,t=.018){let e=[],i=[],s=[],r=[],a=new C,o=new C,c=new C,h=new C(0,1,0);for(let[d,u]of n.entries()){let f=[];for(let m=0;m<u.length;m++){let x=u[m],g=u[Math.max(0,m-1)],p=u[Math.min(u.length-1,m+1)];a.set(p[0]-g[0],p[1]-g[1],p[2]-g[2]).normalize(),o.crossVectors(a,Math.abs(a.y)>.9?new C(1,0,0):h).normalize(),c.crossVectors(a,o).normalize();let T=.76+Math.sin(m*2.3+d*4.1)*.16,A=m===0||m===u.length-1?.55:1;f.push(Array.from({length:3},(v,b)=>{let M=b*Math.PI*2/3,R=x.map((y,E)=>T*A*(o.getComponent(E)*Math.cos(M)+c.getComponent(E)*Math.sin(M)));return{position:x.map((y,E)=>y+t*R[E]),center:x,offset:R}}))}for(let m=1;m<f.length;m++){let x=.75+.22*Math.sin(m*1.7+d)**2;for(let g=0;g<3;g++){let p=(g+1)%3;for(let T of[f[m-1][g],f[m][g],f[m][p],f[m-1][g],f[m][p],f[m-1][p]])e.push(...T.position),s.push(...T.center),r.push(...T.offset),i.push(x,x,x)}}}let l=new Se;return l.setAttribute("position",new $t(e,3)),l.setAttribute("color",new $t(i,3)),l.setAttribute("pencilCenter",new $t(s,3)),l.setAttribute("pencilOffset",new $t(r,3)),l.computeBoundingSphere(),l.userData.pencil=!0,l.userData.paths=n.length,l}var er=(n,t=1,e=0,i=12)=>Array.from({length:i+1},(s,r)=>{let a=r/i*Math.PI*2,o=t*(1+Math.sin(a*3+n)*.014);return n===0?[Math.cos(a)*o,Math.sin(a)*o,e]:n===1?[Math.cos(a)*o,e,Math.sin(a)*o]:[e,Math.cos(a)*o,Math.sin(a)*o]});function xl(){let n=[er(0),er(2)];for(let s=0;s<4;s++){let r=-.65+s*.24,a=Math.sqrt(1-r*r);n.push(Array.from({length:4},(o,c)=>{let h=.2+c*.25;return[Math.cos(h)*a,r+c*.025,Math.sin(h)*a]}))}let t=[];for(let s of[-.5,.5])for(let r of[-.5,.5])t.push([[-.5,s,r],[.5,s+.006,r]]),t.push([[s,-.5,r],[s,.5,r+.006]]),t.push([[s,r,-.5],[s+.006,r,.5]]);for(let s=0;s<3;s++){let r=-.35+s*.25;t.push([[r,-.48,.505],[r+.1,-.12,.505]]),t.push([[.505,-.35+s*.25,-.4],[.505,-.25+s*.25,.15]])}let e=[er(1,1,-.5,10),er(1,1,.5,10)],i=[er(1,1,-.5)];for(let s of[0,Math.PI/2,Math.PI,Math.PI*1.5])e.push([[Math.cos(s),-.5,Math.sin(s)],[Math.cos(s),.5,Math.sin(s)]]),i.push([[Math.cos(s),-.5,Math.sin(s)],[0,.5,0]]);return{stroke:xi([[[0,-.5,0],[.11,-.18,.06],[-.06,.2,-.04],[0,.5,0]]],.75),sphere:xi(n,.06),box:xi(t,.029),rod:xi(e,.055),cone:xi(i,.055),ring:xi([er(0,1,0,12)],.045),shadow:xi(Array.from({length:7},(s,r)=>{let a=-.75+r*.25,o=Math.sqrt(1-a*a);return[[-o,a,0],[0,a+.025,0],[o,a+.08,0]]}),.014)}}var wt=Object.freeze({paper:"#fff0d2",wood:"#c89d65",leaf:"#8fb882",leather:"#bd865c",ink:"#342d2b",graphite:"#514b45",soft:"#756b5c",player:"#2b8d88",enemy:"#b64f42",damage:"#d37768",health:"#70b392",income:"#d7b750",evolution:"#859ac1",special:"#ce8260"}),Mn=Object.freeze({1:wt.player,"-1":wt.enemy});var ph=new Map;function yi(n){if(ph.has(n))return ph.get(n);let t=Yt[n].theme,e=new Nt(`hsl(${t.bg.split(" ").join(",")})`),i=new Nt(`hsl(${t.accent.split(" ").join(",")})`),s=e.clone().lerp(new Nt("#fff6df"),.76),r=e.clone().lerp(i,.42).lerp(s,.2),a={paper:s.getStyle(),accent:i.getStyle(),body:r.getStyle()};return ph.set(n,a),a}function mh(n=71){return()=>(n=Math.imul(1664525,n)+1013904223>>>0,n/4294967296)}var Xn;function gh(){if(Xn)return Xn;let n=128,t=new Uint8Array(n*n*4),e=mh();for(let i=0;i<n;i++)for(let s=0;s<n;s++){let r=Math.sin((s+i*.37)*.9),a=Math.sin(s*.095)*Math.cos(i*.072),o=Math.round(229+a*12+r*5+e()*9),c=(i*n+s)*4;t[c]=t[c+1]=t[c+2]=o,t[c+3]=255}return Xn=new ts(t,n,n),Xn.colorSpace=Ce,Xn.wrapS=Xn.wrapT=Ls,Xn.magFilter=Pe,Xn.minFilter=ei,Xn.generateMipmaps=!0,Xn.needsUpdate=!0,Xn}function tf(){return new ze({map:gh(),vertexColors:!0,side:He,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}function ef(){let n=new Se;n.setAttribute("position",new $t([0,0,0,1,0,0,0,1,0],3)),n.setAttribute("uv",new $t([0,0,1,0,0,1],2)),n.computeVertexNormals();let t={fill_sphere:new Rr(.985,12,5),fill_box:new Qn(.994,.994,.994),fill_rod:new zs(.985,.985,.994,10),fill_cone:new wr(.985,.994,12),fill_triangle:n},e=new C(-.3,.8,.5).normalize(),i=new C;for(let s of Object.values(t)){let r=s.attributes.normal,a=new Float32Array(r.count*3);for(let o=0;o<r.count;o++){i.fromBufferAttribute(r,o);let c=.88+Math.max(0,i.dot(e))*.12;a.set([c,c,c],o*3)}s.setAttribute("color",new en(a,3))}return t}var _h=new Map,nf=n=>(_h.has(n)||_h.set(n,new Nt(n)),_h.get(n)),hs=class{constructor(t,{capacity:e=12e3}={}){this.material=new ze({vertexColors:!0}),this.material.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 pencilCenter;
attribute vec3 pencilOffset;
attribute vec3 pencilRadius;`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>","vec3 transformed = pencilCenter + pencilOffset * pencilRadius;")},this.material.customProgramCacheKey=()=>"spatial-pencil-width-v1",this.fillMaterial=tf(),this.meshes={},this.counts={},this.overflow=0,this.triangles=0;for(let[i,s]of Object.entries({...xl(),...ef()})){let r=i.startsWith("fill_");r||s.setAttribute("pencilRadius",new es(new Float32Array(e*3),3).setUsage(Ys));let a=new ns(s,r?this.fillMaterial:this.material,e);a.name=`pencil-${i}`,a.instanceMatrix.setUsage(Ys),a.frustumCulled=!1,a.count=0,t.add(a),this.meshes[i]=a}this.m=new Wt,this.p=new C,this.s=new C,this.q=new ae,this.euler=new En,this.direction=new C,this.up=new C(0,1,0),this.frames=[],this.depth=0,this.poseTranslation=new Wt,this.modelRotation=new ae,this.context={x:0,y:0,z:0,scale:1,face:1,yaw:0,cos:1,sin:0,paint:wt.paper},this.begin()}begin(){for(let t of Object.keys(this.meshes))this.counts[t]=0;this.overflow=0}model(t,e,i,s=1,r=1,a=0){this.context={x:t,y:e,z:i,scale:s,face:r,yaw:a,cos:Math.cos(a),sin:Math.sin(a),paint:wt.paper},this.modelRotation.setFromAxisAngle(this.up,a),this.depth=0}paint(t){this.context.paint=t}point([t,e,i=0]){let s=this.context;this.depth&&(this.p.set(t,e,i).applyMatrix4(this.frames[this.depth-1].matrix),t=this.p.x,e=this.p.y,i=this.p.z);let r=t*s.scale*s.face,a=i*s.scale;return[s.x+r*s.cos+a*s.sin,s.y+e*s.scale,s.z-r*s.sin+a*s.cos]}pose(t,e,i,s){let r=this.frames[this.depth];r||(r=this.frames[this.depth]={matrix:new Wt,rotation:new ae}),r.rotation.setFromEuler(this.euler.set(...e)),r.matrix.makeRotationFromQuaternion(r.rotation).setPosition(t[0]+i[0],t[1]+i[1],t[2]+i[2]).multiply(this.poseTranslation.makeTranslation(-t[0],-t[1],-t[2])),this.depth&&(r.matrix.premultiply(this.frames[this.depth-1].matrix),r.rotation.premultiply(this.frames[this.depth-1].rotation)),this.depth++;try{s()}finally{this.depth--}}rotation(t){return this.q.setFromEuler(this.euler.set(...t)),this.depth&&this.q.premultiply(this.frames[this.depth-1].rotation),this.q.y*=this.context.face,this.q.z*=this.context.face,this.q.premultiply(this.modelRotation),this.q}write(t,e,i,s,r,a=.0015*this.context.scale){let o=this.meshes[t],c=this.counts[t];if(c>=o.instanceMatrix.count){this.overflow++;return}this.p.set(...e),this.s.set(...i),this.m.compose(this.p,r,this.s),o.setMatrixAt(c,this.m),o.setColorAt(c,nf(s)),o.geometry.attributes.pencilRadius?.setXYZ(c,...i.map(h=>a/Math.max(Math.abs(h),1e-8))),this.counts[t]++}part(t,e,i,s=wt.graphite,r=[0,0,0],a){let o=this.context.scale;this.rotation(r),this.write(t,this.point(e),i.map(c=>c*o),s,this.q),this.meshes[`fill_${t}`]&&this.fill(t,e,i,a||(s===wt.graphite?this.context.paint:s),r)}fill(t,e,i,s,r=[0,0,0]){this.rotation(r),this.write(`fill_${t}`,this.point(e),i.map(a=>a*this.context.scale),s,this.q)}panel(t,e){let i=this.meshes.fill_triangle,s=new C(...this.point(t[0]));for(let r=2;r<t.length;r++){let a=this.counts.fill_triangle;if(a>=i.instanceMatrix.count){this.overflow++;return}let o=new C(...this.point(t[r-1])).sub(s),c=new C(...this.point(t[r])).sub(s),h=new C().crossVectors(o,c);h.lengthSq()!==0&&(h.normalize(),this.m.makeBasis(o,c,h).setPosition(s),i.setMatrixAt(a,this.m),i.setColorAt(a,nf(e)),this.counts.fill_triangle++)}}line(t,e,i=.004,s="#342d2b"){let r=this.point(t),a=this.point(e);this.direction.set(a[0]-r[0],a[1]-r[1],a[2]-r[2]);let o=this.direction.length();if(o<1e-6)return;this.q.setFromUnitVectors(this.up,this.direction.multiplyScalar(1/o));let c=Math.min(i,.006)*.82*this.context.scale;this.write("stroke",r.map((h,l)=>(h+a[l])/2),[c,o,c],s,this.q,c*.75)}path(t,e=.004,i="#342d2b"){for(let s=1;s<t.length;s++)this.line(t[s-1],t[s],e,i)}ellipse(t,e,i="xy",s="#342d2b",r=16){this.path(Array.from({length:r+1},(a,o)=>{let c=o/r*Math.PI*2,h=Math.cos(c)*e[0],l=Math.sin(c)*e[1];return(i==="xz"?[h,0,l]:i==="yz"?[0,h,l]:[h,l,0]).map((u,f)=>u+t[f])}),.003,s)}sphere(t,e,i){this.part("sphere",t,[e,e,e],i)}outlineBall(t,e,i=wt.graphite){this.part("sphere",t,[e,e,e],i,[0,0,0],i===wt.graphite?wt.paper:i)}box(t,e,i=wt.graphite){this.part("box",t,e,i)}end(){this.triangles=0;for(let[t,e]of Object.entries(this.meshes))e.count=this.counts[t],e.instanceMatrix.needsUpdate=!0,e.geometry.attributes.pencilRadius&&(e.geometry.attributes.pencilRadius.needsUpdate=!0),e.instanceColor&&(e.instanceColor.needsUpdate=!0),this.triangles+=e.count*(e.geometry.index?.count??e.geometry.attributes.position.count)/3}dispose(){for(let t of Object.values(this.meshes))t.removeFromParent(),t.geometry.dispose();this.material.dispose(),this.fillMaterial.dispose()}};var vi=Object.freeze({strike:0,recoil:0,prepare:0,flash:0}),yl=n=>{let t=Math.max(0,Math.min(1,n));return t*t*(3-2*t)};function sf(n,t,e=!1,i=1){if(!(n>0)||!(t>0)||i<1)return vi;let s=Math.max(0,t-n),r=Math.min(.42,t*.65),a=Math.min(.22,t*.25);return{strike:1-yl(s/r),recoil:(1-yl(s/Math.min(.23,t*.55)))**2,prepare:e?yl(1-n/a):0,flash:1-yl(s/Math.min(.09,t*.35))}}function rf(n,t=!0){return t?sf(n.attackCooldown,n.attackSpeed,n.isAttacking,n.drawProgress):vi}function af(n,t,e){if(!n.running)return vi;let i=t===1?n.player:n.enemy,s=i.turrets[e];if(s===null)return vi;let r=Yt[i.age].turrets[s],a=(t===1?ie:he-ie)-t*10,o=n.battlefield==="tabletop"?!!i.turretAim[e].target:n.units.some(c=>c.team!==t&&c.drawProgress>=.8&&Math.abs(c.x-a)<=r.range+1e-6);return sf(i.turretTimers[e],r.attackSpeed,o,i.turretProgress[e])}var ey=Object.freeze({dmg:[[[-.7,-.7],[.75,.85]],[[-.7,-.25],[-.2,-.75]],[[.45,.85],[.8,.88],[.75,.5]]],hp:[[[0,-.8],[-.85,.1],[-.7,.65],[-.3,.8],[0,.4],[.3,.8],[.7,.65],[.85,.1],[0,-.8]]],econ:[[[-.8,-.4],[-.3,-.6],[.6,-.4],[.65,.2],[-.25,.05],[-.8,.2],[-.8,-.4]],[[-.8,.2],[-.3,.4],[.6,.2]],[[-.5,.6],[.15,.75],[.65,.6]]],evolve:[[[-.6,-.7],[-.6,-.1],[0,-.1],[0,.5],[.65,.5]],[[.3,.1],[.7,.55],[.3,.95]]],special:[[[.1,.9],[-.5,0],[.1,0],[-.2,-.9],[.65,.2],[.1,.2],[.1,.9]]],music:[[[-.35,-.35],[-.35,.6],[.5,.8],[.5,-.15]],[[-.35,-.35],[-.6,-.5],[-.65,-.25],[-.35,-.2]],[[.5,-.15],[.2,-.35],[.15,-.1],[.5,0]]],compass:[[[0,.95],[.3,0],[0,-.9],[-.3,0],[0,.95]],[[-.8,0],[.8,0]]],pause:[[[-.35,-.6],[-.35,.6]],[[.35,-.6],[.35,.6]]],page:[[[-.65,-.8],[-.65,.8],[.4,.8],[.7,.5],[.7,-.8],[-.65,-.8]],[[.4,.8],[.4,.5],[.7,.5]],[[-.3,0],[.4,0]],[[-.3,-.4],[.4,-.4]]]});function na(n,t,e=0,i=.05,s=.033,r=.022,a="#342d2b"){for(let o of ey[t]||[])n.path(o.map(([c,h])=>[e+c*r,i+h*r,s]),.0035,a)}var ny=wt.ink,of=wt.graphite;function iy(n,t,e,i,s){let{prepare:r,flash:a}=i;if(["sword","halberd","blade"].includes(t))n.line([0,0,0],[.028,.09,0],.005,e),n.line([-.016,.016,0],[.018,.007,0],.004),t==="halberd"&&n.box([.025,.071,0],[.027,.028,.007]),t==="blade"&&n.path([[0,.03,0],[.009,.11,0],[.029,.09,0],[0,.03,0]],.003,e);else if(["rifle","soldier","musket","blaster"].includes(t)){n.box([-.006,0,0],[.035,.012,.012]);let o=t==="musket"?.093:.06;if(n.line([0,0,0],[o,.012,0],.0048,t==="blaster"?e:ny),t==="rifle"&&n.box([-.019,.018,.004],[.029,.009,.008]),t==="blaster"&&n.part("ring",[.047,.011,0],[.013,.013,.013],e,[0,Math.PI/2,0]),s&&a>0&&t!=="soldier"){let c=.012*a;n.path([[o+.007,.012-c,0],[o+.03*a,.012,0],[o+.007,.012+c,0]],.003,t==="blaster"?e:wt.income)}}else if(t==="bow"){let o=[.01,.046,0],c=[.009,-.041,0],h=[-.024*r,.004,0];n.path([o,[.024-r*.005,.004,0],c],.003),n.path([o,h,c],.0017,of),a===0&&n.line(h,[.069,.004,0],.0018)}else t==="sling"?(n.path([[0,0,0],[.033,.02,.003],[.023,.065,.001],[-.01,.028,.001],[0,0,0]],.0023),a===0&&n.outlineBall([.023,.047,.001],.006)):(n.path([[0,0,0],[.006,.061,.002],[.021,.071,.002],[.034,.057,.002],[.01,0,.002]],.004),n.line([.014,.018,.004],[.023,.055,.004],.002))}function lf(n,t,e,i,s,r,a,o,c){let{strike:h,recoil:l,prepare:d}=o,u=r&&!a?Math.sin(s*10)*.026:.002,f=[0,.071,0];for(let p of[-1,1]){let T=p*h*.008,A=[p*u+T,.006,p*.02],v=[-p*u*.5+T,.038,p*.013];n.line(f,v),n.line(v,A),n.line(A,[A[0]+.014,.004,A[2]],.005)}let m=["club","sword","halberd","blade","soldier"].includes(t),x=a?0:m?-h*.13+d*.08:l*.08,g=c&&!a?Math.sin(s*2.4)*.0015:0;n.pose(f,[0,0,x],[0,g,0],()=>{let p=[0,.13,0];n.line(f,p,.0045),n.part("box",[0,.103,0],[.021,.041,.025],of,[0,0,0],i),n.outlineBall([0,.158,0],.025);for(let M of[-.012,.012])n.line([.021,.16,M],[.023,.163,M],.0035);n.line([-.01,.127,-.017],[.017,.119,.024],.009,i);let T=[[-.012,.126,.023],[-.036,.119,.024],[-.028,.108,.025]];n.panel(T,i),n.path(T,.004,i);let A=a?[.018,.226,.02]:m?[.061+h*.026-d*.027,.099+d*.044-h*.012,.02]:t==="sling"?[.061+h*.018-d*.04,.099+d*.05,.02]:[.061-l*.024,.099,.02];n.line(p,[.018+(A[0]-.061)*.6,a?.17:.105,.019]),n.line([.018+(A[0]-.061)*.6,a?.17:.105,.019],A);let v=t==="bow"&&!a?[A[0]-.024*d,.103,.021]:[.016,.079,-.025];n.line(p,[-.024,.097,-.018]),n.line([-.024,.097,-.018],v);let b=a?0:t==="soldier"?d*.2-h*.28:m?d*.7-h*(t==="halberd"?1.15:1.55):t==="sling"?d*1.3-h*1.8:l*.13;if(n.pose([0,0,0],[0,0,b],A,()=>iy(n,t,i,o,c)),t==="sword"){let M=[[-.027,.12,-.034],[.008,.119,-.034],[.009,.08,-.034],[-.009,.063,-.034],[-.029,.082,-.034]];n.panel(M,i),n.path([...M,M[0]],.0038,i),n.line([-.009,.111,-.035],[-.009,.08,-.035],.0025)}t==="musket"&&n.path([[-.026,.179,0],[0,.199,-.027],[.033,.181,.008],[-.026,.179,0]],.003),t==="soldier"&&n.box([-.018,.105,-.014],[.02,.035,.034]),e===1&&n.part("cone",[0,.183,0],[.028,.025,.028]),e===2&&n.part("cone",[0,.185,0],[.031,.025,.024]),e===3&&n.part("sphere",[0,.175,0],[.028,.012,.028]),e===4&&(n.box([0,.11,0],[.023,.033,.029]),n.line([.024,.166,-.017],[.024,.166,.017],.004))})}var cf=wt.ink,sy=wt.graphite;function nr(n,t=0,e=0,i=wt.player,s=!1,r=vi,a=!0){let{strike:o,recoil:c,prepare:h,flash:l}=r;if(n.paint(yi(t).body),n.box([0,.024,0],[.085,.022,.072]),n.part("box",[0,.026,.038],[.066,.014,.005],sy,[0,0,0],i),t<3||s)for(let u of[-.042,.042])n.part("ring",[-.016,.025,u],[.023,.023,.023],cf),n.line([-.039,.025,u],[.007,.025,u],.0025),n.line([-.016,.002,u],[-.016,.048,u],.0025);else for(let u of[-.035,.035])n.path([[-.043,.002,u*1.4],[0,.05,u],[.043,.002,u*1.4]],.003);let d=(u,f,m,x=.12,g=0,p=.01)=>{let T=u+m*.3;u-=c*(t===3&&e===0?.012:.026),x+=c*.08,t<4&&n.line([T,.034,g],[u+m*.3,f+x*m*.3,g],.006),n.fill("rod",[u+m/2,f+x*m/2,g],[p,m*Math.sqrt(1+x*x),p],yi(t).body,[0,0,-Math.PI/2+Math.atan(x)]);for(let A of[-1,1])n.path([[u,f+A*p,g-p],[u+m,f+x*m+A*p,g-p],[u+m,f+x*m+A*p,g+p],[u,f+A*p,g+p]],.0038);if(n.part("ring",[u+m,f+x*m,g],[p*1.25,p*1.25,p*1.25],i,[0,Math.PI/2,0]),a&&l>0){let A=[u+m,f+x*m,g];for(let v of[-1,1])n.line(A,[A[0]+.035*l,A[1]+v*.018*l,g],.0025,wt.paper)}};if(t===0&&e===0||t===1&&e===0)n.pose([-.02,.076,0],[0,0,.7*h-1.05*o],[0,0,0],()=>{n.path([[-.034,.034,0],[-.02,.076,0],[.058,.151,0]],.004),l===0&&n.outlineBall([.058,.151,0],.023),t===1&&n.box([-.052,.056,0],[.032,.044,.036])}),n.path([[-.02,.076,-.034],[-.047,.03,-.034],[.022,.03,-.034],[-.02,.076,-.034]],.003);else if(t===0&&e===1)n.path([[-.02,.026,0],[-.01,.075,0],[0,.131,-.045]],.004),n.line([-.01,.075,0],[0,.131,.045],.004),n.path([[0,.131,-.045],[-.048-.023*h+.07*o,.091+.035*o,0],[0,.131,.045]],.002),l===0&&n.part("sphere",[-.048-.023*h+.07*o,.097+.035*o,0],[.016,.024,.016]);else if(t===0&&e===2){n.part("rod",[0,.073,0],[.034,.065,.034]);for(let u=0;u<3;u++)n.path([[-.024+u*.023,.103,0],[-.009+u*.018+.03*o,.153+u%2*.02+.044*o-.018*h,0],[.014+u*.015,.109,0]],.0035,i)}else if(t===1&&e===1)n.path([[-.035,.047,0],[.025,.081,0],[.105,.084,0]],.004),n.path([[.018,.081,-.066],[.053-.02*h,.081,0],[.018,.081,.066]],.004),n.path([[.018,.081,-.066],[-.022-.034*h+.055*o,.075,0],[.018,.081,.066]],.002),l===0&&n.path([[.088,.084,-.012],[.112,.084,0],[.088,.084,.012]],.003);else if(t===1&&e===2){for(let u of[-.04,.04])n.path([[-.04,.02,u],[-.022,.139,u],[.014,.139,u],[.042,.02,u]],.0035);n.pose([.02,.12,0],[0,0,.14*h-.9*o],[0,0,0],()=>{n.part("sphere",[.02,.103,0],[.045,.032,.034]),n.part("ring",[.02,.125,0],[.043,.043,.043],i,[Math.PI/2,0,0])}),a&&l>0&&n.line([.055,.12,0],[.07,.02,0],.004*l,wt.income)}else if(t===2)d(-.03,.066,e===2?.075:.13,e===2?1.2:.12,0,e===1?.018:.012),e===0&&n.line([-.01,.027,0],[-.01,.064,0],.005),e===1&&n.box([-.02,.044,0],[.071,.025,.051]);else if(t===3)e===1?(n.line([0,.03,0],[-.016*c,.074,0],.006),n.pose([0,.05,0],[0,0,.16*c],[-.016*c,0,0],()=>{n.box([0,.089,0],[.09,.069,.07]);for(let u of[.072,.1])for(let f of[-.018,.018])n.part("ring",[.047,u,f],[.011,.011,.011],a&&l>.5?wt.paper:i,[0,Math.PI/2,0])})):(d(-.025,.072,e===0?.12:.17,e===0?.03:.4,0,e===0?.006:.012),e===0?n.box([-.024,.059,.031],[.039,.036,.019]):n.box([.006,.065,0],[.015,.085,.094]));else if(t===4)if(n.part("sphere",[0,.057,0],[.036,.022,.033]),e===0)for(let u=0;u<3;u++){let f=u*Math.PI*2/3+o*2.1;d(-.005,.091+Math.cos(f)*.02,.094,.1,Math.sin(f)*.02,.005)}else if(e===1){d(-.025,.086,.14,.13,0,.015);for(let u=0;u<3;u++)n.part("ring",[.015+u*.027-.026*c,.094,0],[.025,.025+.007*h-.004*o,.025+.007*h-.004*o],i,[0,Math.PI/2,0])}else{for(let u of[-.036,.036])n.path([[-.02,.05,0],[.015,.11,u],[.1,.123,u*(1+.25*h-.4*o)]],.004,i);n.outlineBall([.078,.115,0],.025+.012*h-.008*o,a&&l>.5?wt.paper:i)}else if(n.part("cone",[0,.065,0],[.027,.07,.027]),e===0)n.part("sphere",[.01,.119,0],[.049,.025,.025]),d(.025,.119,.065,0,0,.009);else if(e===1){let u=.047+.008*h-.015*o,f=.029+.006*h-.01*o;n.part("ring",[.012,.126,0],[u,u,u],i,[o*.8,Math.PI/2,.2]),n.part("ring",[.012,.126,0],[f,f,f],cf,[.5-o*.8,Math.PI/2,0])}else{for(let f of[-.036,.036])n.path([[-.025,.08,f],[0,.148,f],[.036,.113,f],[.07+.012*o,.164,f*(1+.3*h-.5*o)]],.004,i);let u=.026+.009*h-.01*o;n.part("sphere",[.025,.137,0],[u,u*1.2,u],a&&l>.5?wt.paper:i)}n.line([-.041,.023,.039],[.038,.023,.039],.004,i)}var hf=wt.ink,ai=wt.graphite;function ry(n,t,e,i,s,r,a){let{strike:o,prepare:c}=a;n.paint(t?wt.leaf:wt.leather),n.part("sphere",[-.012,.061,0],[.062,.035,.034],ai),n.pose([.024,.077,0],[0,0,-o*(t?.65:.2)+c*.2],[0,0,0],()=>{n.line([.024,.077,0],[.065,.116,0],.017,ai),n.sphere([.073,.125,0],.024,ai),t?n.line([.078,.117,.02],[.097,.12-c*.013,.02],.003):n.path([[.061,.14,0],[.058,.165,-.008],[.071,.143,0]],.003)}),n.line([-.063,.072,0],[-.113,.09,0],.007);for(let h of[-.045,.03])for(let l of[-.025,.025]){let d=s?Math.sin(i*9+h*30+l*30)*.02:Math.sign(h)*o*.012;n.line([h,.064,l],[h+d,.006,l],.005)}if(n.outlineBall([-.005,.163,0],.019),n.line([-.005,.144,0],[-.014,.089,0]),n.part("box",[-.009,.119,0],[.02,.037,.026],ai,[0,0,0],e),n.line([-.014,.099,0],[-.009,.042,.039]),n.line([-.012,.129,.012],r?[.018,.226,.02]:t?[.048,.116,.02]:[.033,.109,.024]),n.line([-.01,.137,-.015],[.002,.13,.016],.008,e),t||n.pose([.033,.109,.024],[0,0,c*.3-o*.9],[0,0,0],()=>n.line([.033,.109,.024],[.117,.2,.024],.003)),t)for(let h=0;h<4;h++){let l=-.06+h*.022;n.path([[l,.083,0],[l+.004,.116,0],[l+.019,.085,0]],.003)}else n.path([[.048,.1,-.014],[.036,.079,-.02],[.053,.122,-.016]],.003),n.line([.073,.123,.026],[.005,.12,.028],.002)}function vl(n,t,e,{x:i=0,y:s=0,z:r=0,scale:a=1,team:o=1,yaw:c=0,time:h=0,walking:l=!1,held:d=!1,motion:u=vi,detailed:f=!0}={}){n.model(i,s,r,a,o,c),n.paint(yi(t).body);let m=Yd[t]?.[e]||"club",x=Mn[o];d&&(u=vi);let{strike:g,recoil:p,prepare:T,flash:A}=u;if(m==="dinosaur"||m==="horse")ry(n,m==="dinosaur",x,h,l,d,u);else if(m==="cannon")nr(n,t,1,x,!0,u,f);else if(m==="tank"){n.box([0,.053,0],[.14,.049,.091],ai),n.pose([0,.07,0],[0,0,p*.08],[-.018*p,0,0],()=>{n.box([0,.091,0],[.072,.036,.065],x),n.line([.018,.096,0],[.15-p*.018,.105,0],.008),f&&A>0&&n.path([[.157,.09,0],[.157+.03*A,.105,0],[.157,.12,0]],.003,wt.income)});for(let v of[-.054,.054]){n.box([0,.026,v],[.16,.034,.024],ai);for(let b of[-.052,-.017,.019,.055])n.part("ring",[b,.026,v*1.2],[.016,.016,.014],ai,[0,0,l?-h*6:0])}}else if(m==="mech"){let v=l?Math.sin(h*8)*.025:0;n.pose([0,.112,0],[0,0,p*.13],[-p*.009,-g*.008,0],()=>{n.box([0,.133,0],[.074,.065,.062],ai),n.outlineBall([.025,.175,0],.023,ai);for(let b of[-1,1])n.line([0,.147,b*.049],[.096-p*.025,.138+T*.009,b*.049],.011,A>.5?wt.paper:x)});for(let b of[-1,1])n.line([0,.112,b*.027],[-v*b,.056,b*.04],.009),n.line([-v*b,.056,b*.04],[v*b,.006,b*.05],.008)}else["drone","ray","mothership"].includes(m)?n.pose([0,.095,0],[0,0,m==="drone"?-g*.38+T*.18:p*.15],[m==="drone"?g*.027:-p*.015,0,0],()=>{let v=m==="mothership"?.077:.041,b=.095+(f?Math.sin(h*2)*.006:0)+T*.009-g*.006;n.part("sphere",[0,b,0],[v,v*.45,v*.75],ai),n.part("ring",[0,b,0],[v*1.3,v*1.3,v*.8],hf,[Math.PI/2,0,.1+T*.3-g*.25]),n.outlineBall([.035,b+.008,0],.013+.01*T,A>.5?wt.paper:x);for(let M of[-1,1])if(m==="drone")for(let R of[-.04,.04])n.line([0,b,0],[R,b,M*.067],.003),n.part("ring",[R,b,M*.067],[.024,.024,.024],hf,[Math.PI/2,0,0]);else m==="ray"?n.pose([0,b,0],[M*(T*.45-g*.55),0,0],[0,0,0],()=>{n.panel([[.04,b,M*.015],[-.015,b+.015,M*.13],[-.064,b,M*.047],[-.04,b,0]],x),n.path([[.04,b,M*.015],[-.015,b+.015,M*.13],[-.064,b,M*.047],[-.04,b,0]],.004,x),n.line([0,b,0],[-.015,b+.015,M*.13],.0025)}):n.path([[-.025,b,M*.06],[-.072,b-.035,M*.094],[-.052,b-.045,M*.116]],.004);if(m==="ray"&&n.path([[-.03,b,0],[-.11,b+.009,0],[-.14,b+.039,0]],.003),m==="drone"){for(let M of[-1,1])n.path([[-.02,b-.009,M*.02],[-.03,b-.038,M*.024],[.025,b-.038,M*.024]],.003);n.line([0,b+.013,0],[.008,b+.039,0],.003)}m==="mothership"&&(n.part("cone",[0,b+.045,0],[.029+T*.015,.054+T*.02-g*.015,.029+T*.015],x),n.line([0,b+.071,0],[0,b+.12,0],.003))}):lf(n,m,t,x,h,l,d,u,f)}function Ml(n,{built:t=!0,occupied:e=!1,highlighted:i=!1,color:s=wt.player}={}){let r=fn.width/2,a=fn.depth/2,o=t?fn.height+.002:.004;if(t&&(n.paint(wt.wood),n.box([0,fn.height/2,0],[fn.width,fn.height,fn.depth]),n.part("box",[0,.026,a+.001],[fn.width*.8,.013,.002],wt.graphite,[0,0,0],s),e||(n.part("ring",[0,o,0],[.028,.028,.028],s,[Math.PI/2,0,0]),n.line([-.015,o,0],[.015,o,0],.002,s))),!t||i){let c=i?wt.income:wt.soft;for(let h of[-1,1])for(let l of[-1,1])n.line([h*r,o,l*a],[h*r*.55,o,l*a],.0024,c),n.line([h*r,o,l*a],[h*r,o,l*a*.5],.0024,c)}}var us=wt.ink,ge=wt.graphite;function uf(n,t,e,i,s=1){let r=Mn[i],a=-.3*(1-s);if(n.model(e,a,.14,1,i),n.paint(yi(t).body),n.box([0,.025,0],[.27,.05,.48],ge),t===0){n.part("sphere",[0,.07,0],[.14,.145,.15],ge),n.part("sphere",[.11,.066,.02],[.013,.068,.05],us);for(let o=0;o<8;o++)n.line([-.1+o*.028,.05,.13],[-.06+o*.02,.18-Math.abs(o-3.5)*.016,-.09],.0018,ge)}else if(t===1){n.box([0,.111,0],[.21,.17,.3],ge);for(let o of[-.12,.12]){n.box([0,.175,o],[.15,.24,.065],ge);for(let c of[-.06,0,.06])n.box([c,.31,o],[.037,.044,.065],ge)}n.box([.109,.089,.01],[.008,.105,.07],us)}else if(t===2){n.box([0,.09,0],[.2,.12,.29],ge);for(let o of[-.14,.14])n.path([[-.11,.04,o],[-.13,.15,o],[-.045,.19,o],[.09,.14,o],[.13,.04,o]],.004),n.path([[-.13,.15,o],[-.13,.15,o+Math.sign(o)*.07],[-.045,.19,o+Math.sign(o)*.1],[.09,.14,o]],.004);n.part("cone",[-.045,.227,0],[.065,.09,.075],ge);for(let o of[-.07,0,.07])n.box([.103,.09,o],[.005,.026,.022])}else if(t===3){n.box([0,.07,0],[.22,.1,.31],ge),n.part("sphere",[0,.12,0],[.15,.04,.18],ge),n.box([.117,.077,0],[.012,.024,.19],us);for(let o of[-.11,0,.11])n.box([.114,.032,o],[.045,.035,.08]);n.line([-.08,.13,-.12],[-.08,.32,-.12],.003),n.line([-.12,.28,-.12],[-.035,.28,-.12],.003)}else{n.part("sphere",[0,.064,0],[.145,.12,.18],ge);for(let o of[-.15,.15])n.part("cone",[0,.175,o],[.047,.3,.047],r),n.sphere([0,.333,o],.022,ge);t===5&&n.part("ring",[.11,.16,0],[.12,.12,.12],ge,[0,Math.PI/2,0]),t===4&&(n.part("ring",[0,.15,0],[.17,.17,.17],r,[Math.PI/2,0,0]),n.path([[-.05,.17,0],[-.11,.23,0],[-.16,.25,0]],.004),n.part("ring",[-.16,.25,0],[.05,.05,.05],us,[0,Math.PI/2,.3]))}n.line([0,.17,-.2],[0,.4,-.2],.004),n.box([.043,.369,-.2],[.083,.045,.004],r)}function xh(n,t,e,i={}){let{x:s=0,y:r=0,z:a=0,scale:o=1,time:c=0,held:h=!1}=i;if(t.kind==="unit")return vl(n,e,t.command.index,{...i,team:1});if(n.model(s,r,a,o),n.paint(wt.wood),t.kind==="turret")return nr(n,e,t.command.index,Mn[1]);let l={dmg:wt.damage,hp:wt.health,econ:wt.income}[t.command?.stat]||(t.kind==="special"?wt.special:wt.evolution);if(["potion","evolve","special"].includes(t.kind)){let d=t.command?.stat||t.kind,f={dmg:[[-.011,.095],[-.011,.073],[-.034,.042],[-.026,.014],[.026,.014],[.034,.042],[.011,.073],[.011,.095]],hp:[[-.013,.093],[-.013,.076],[-.036,.064],[-.039,.035],[-.023,.012],[.022,.012],[.039,.035],[.036,.064],[.013,.076],[.013,.093]],econ:[[-.025,.084],[-.033,.072],[-.033,.015],[.033,.015],[.033,.072],[.025,.084]],evolve:[[-.012,.12],[-.012,.081],[-.036,.023],[-.031,.013],[.031,.013],[.036,.023],[.012,.081],[.012,.12]],special:[[-.017,.098],[-.017,.081],[-.041,.045],[-.026,.009],[0,.003],[.026,.009],[.041,.045],[.017,.081],[.017,.098]]}[d],m=Math.floor(f.length/2);for(let p=0;p<m-(f.length%2?0:1);p++){let[T,A]=f[p],[v,b]=f[p+1],M=b>.07?wt.paper:l;for(let R of[-.0205,.0205])n.panel([[T,A,R],[v,b,R],[-v,b,R],[-T,A,R]],M);for(let R of[-1,1])n.panel([[T*R,A,-.0205],[v*R,b,-.0205],[v*R,b,.0205],[T*R,A,.0205]],M)}let x=f[m-1];n.panel([[x[0],x[1],-.0205],[-x[0],x[1],-.0205],[-x[0],x[1],.0205],[x[0],x[1],.0205]],l);for(let p of[-.021,.021])n.path(f.map(([T,A])=>[T,A,p]),.0037);for(let p of[0,Math.floor(f.length/2),f.length-1])n.line([...f[p],-.021],[...f[p],.021],.003);let g=f[0][1];n.box([0,g+.004,0],[Math.abs(f[0][0])*2.3,.012,.047]);for(let p=0;p<5;p++)n.line([-.025+p*.01,.018,.022],[-.019+p*.01,.04,.022],.0028,l);na(n,d,0,.055,.024,.017,us)}else if(t.kind==="hourglass"){for(let d of[.013,.122])n.box([0,d,0],[.08,.013,.055],ge);n.part("cone",[0,.044,0],[.03,.056,.025],ge,[0,0,0],wt.income),n.part("cone",[0,.088,0],[.03,.056,.025],ge,[Math.PI,0,0]);for(let d of[-.034,.034])n.line([d,.018,0],[d,.115,0],.003)}else if(t.kind==="clock"||t.kind==="compass")if(n.paint(wt.paper),n.part("ring",[0,.063,0],[.046,.046,.015],ge),n.part("sphere",[0,.063,0],[.043,.043,.007],ge),t.kind==="compass")na(n,"compass",0,.063,.015,.031);else{n.line([0,.063,.012],[.018,.083,.012],.0025),n.line([0,.063,.012],[-.025,.049,.012],.0025);for(let d=0;d<12;d++){let u=d*Math.PI/6;n.line([Math.cos(u)*.035,.063+Math.sin(u)*.035,.013],[Math.cos(u)*.04,.063+Math.sin(u)*.04,.013],.0025)}}else if(t.kind==="music")n.box([0,.033,0],[.09,.066,.066],ge),n.part("ring",[0,.04,.035],[.023,.023,.012],us),n.line([.04,.07,0],[.065,.12,0],.003),n.line([.065,.12,0],[.092,.127,0],.003),n.sphere([.092,.12,0],.009,us),na(n,"music",0,.041,.035,.019);else if(t.kind==="feather"){n.line([-.021,.012,0],[.031,.135,0],.002);for(let d=0;d<7;d++)n.line([-.015+d*.006,.025+d*.014,0],[.025+d*.006,.037+d*.014,.003],.004,ge)}else if(t.kind==="slot")Ml(n);else if(t.kind==="eraser"){n.paint(wt.damage),n.box([0,.022,0],[.085,.039,.048],ge);for(let d=0;d<4;d++)n.line([-.04+d*.008,.004,.025],[-.035+d*.008,.039,.025],.002)}else if(t.kind==="seal"){n.paint({normal:wt.health,hard:wt.income,harder:wt.special,impossible:wt.damage}[t.difficulty]),n.part("rod",[0,.018,0],[.058,.022,.058],ge),n.part("ring",[0,.034,0],[.043,.043,.043],ge,[Math.PI/2,0,0]),n.part("cone",[0,.064,0],[.024,.06,.024],ge);let d=["normal","hard","harder","impossible"].indexOf(t.difficulty)+1;for(let u=0;u<d;u++)n.path([[-.018,.004+u*.011,.06],[0,.012+u*.011,.06],[.018,.004+u*.011,.06]],.003)}else{n.paint(wt.paper),n.box([0,.025,0],[.1,.04,.08],ge),na(n,"page",0,.05,.042,.03);for(let d=0;d<3;d++)n.line([-.046,.015+d*.007,.042],[.046,.015+d*.007,.042],.002)}h&&n.part("ring",[0,.15+Math.sin(c*4)*.003,0],[.019,.019,.019],ge,[Math.PI/2,0,0])}function df(n,t,e,i=0){let s=Mn[e];t==="arc"&&i===1?(n.line([-.03*e,0,0],[.025*e,0,0],.0028),n.path([[.012*e,.009,0],[.028*e,0,0],[.012*e,-.009,0]],.0025)):t==="laser"?(n.line([-.03*e,-.003,0],[.03*e,-.003,0],.0028,s),n.line([-.026*e,.003,0],[.035*e,.003,0],.0028,s)):t==="straight"?n.line([-.015*e,0,0],[.014*e,0,0],.003,s):(n.part("sphere",[0,0,0],[.012,.012,.01],s),t==="orb"&&n.part("ring",[0,0,0],[.02,.02,.02],s,[Math.PI/2,0,0]))}function ff(n,t,e,i,s=!0){let r=Mn[i],a=t===4?.28:.5;if(n.part("ring",[0,0,0],[a,a,.025],r,[Math.PI/2,0,0]),!!s)if(t===4){n.part("ring",[0,.55,0],[.09,.09,.09],r,[Math.PI/2,0,0]);for(let o of[-.022,0,.023])n.path([[o*2,.54,0],[o,.28,.009],[o*.3,0,0]],.003,r)}else if(t===5){for(let o of[-1,1])n.path([[o*.07,.025,0],[o*.035,.13,.01],[o*.065,.2,0],[o*.023,.3,-.01],[0,.38,0]],.004,r);n.part("ring",[0,.16,0],[.14,.14,.14],r,[.3,e*.3,0])}else{for(let o=0;o<6;o++){let c=Math.sin(o*4.7)*a,h=Math.cos(o*2.3)*.075,l=.03+((.4-e*.25+o*.061)%.4+.4)%.4;t===1?n.path([[c-.012,l+.06,h],[c,l,h],[c-.008,l+.012,h]],.0028):(n.outlineBall([c,l,h],t===0?.02:.012,r),n.line([c,l+.023,h],[c-.025,l+.08,h],.0025,r))}if(t===3){let o=Math.sin(e*2)*.4;n.path([[o-.13,.45,0],[o+.12,.45,0],[o+.02,.45,-.11],[o-.01,.45,.11],[o+.12,.45,0]],.0035)}}}var ay=(n,t,e)=>Math.max(t,Math.min(e,n)),Sl=n=>Math.hypot(n.x,n.y,n.z),yh=(n,t)=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}),pf=(n,t)=>({x:(n.x+t.x)/2,y:(n.y+t.y)/2,z:(n.z+t.z)/2}),qi=n=>new ae().copy(n.rotation).normalize(),ir=n=>({x:n.x,y:n.y,z:n.z,w:n.w}),ia=n=>new C(n.x,n.y,n.z),oy=n=>({x:n.x,y:n.y,z:n.z});function vh(n,t){return oy(ia(n).applyQuaternion(qi(t).invert()).divideScalar(t.scale))}function Sn(n,t){return vh(yh(n,t.position),t)}function Mh(n,t){let e=ia(n).applyQuaternion(qi(t));return{x:t.position.x+e.x*t.scale,y:t.position.y+e.y*t.scale,z:t.position.z+e.z*t.scale}}var bl=class{constructor(t){this.table=t,this.grips=new Map,this.origin=null}begin(t,e,i=null){this.grips.set(t,{point:{...e},orientation:i&&ir(i)}),this.rebase()}end(t){this.grips.delete(t),this.rebase()}clear(){this.grips.clear(),this.origin=null}rebase(){let t=[...this.grips.values()],e=t.map(r=>r.point);if(!e.length){this.origin=null;return}let i=e.length>1?pf(e[0],e[1]):e[0],s=e.length>1?yh(e[1],e[0]):{x:1,y:0,z:0};this.origin={local:Sn(i,this.table),distance:Math.max(.04,Sl(s)),direction:ia(s).normalize(),scale:this.table.scale,rotation:qi(this.table),orientations:t.map(r=>r.orientation&&new ae().copy(r.orientation).normalize())},this.collapsed=e.length>1&&Sl(s)<.04}move(t,e,i=null){if(!this.grips.has(t))return;this.grips.set(t,{point:{...e},orientation:i&&ir(i)});let s=[...this.grips.values()],r=s.map(l=>l.point),a=r.length>1?pf(r[0],r[1]):r[0],o=this.origin,c=qi(this.table);if(r.length>1){let l=ia(yh(r[1],r[0])),d=l.length();if(d<.04)this.collapsed=!0;else{this.collapsed&&(this.rebase(),o=this.origin);let u=l.normalize();this.table.scale=ay(o.scale*d/o.distance,an.minScale,an.maxScale),c=new ae().setFromUnitVectors(o.direction,u).multiply(o.rotation);let f=s.flatMap((m,x)=>m.orientation&&o.orientations[x]?[new ae().copy(m.orientation).normalize().multiply(o.orientations[x].clone().invert())]:[]);if(f.length){let m=f[0].clone();f.length===2&&m.slerp(f[1],.5);let x=new C(0,1,0).applyQuaternion(c),g=new C(0,1,0).applyQuaternion(o.rotation).applyQuaternion(m);if(x.addScaledVector(u,-x.dot(u)),g.addScaledVector(u,-g.dot(u)),x.lengthSq()>1e-8&&g.lengthSq()>1e-8){x.normalize(),g.normalize();let p=Math.atan2(u.dot(x.clone().cross(g)),x.dot(g));c.premultiply(new ae().setFromAxisAngle(u,p))}}}}else s[0].orientation&&o.orientations[0]&&(c=new ae().copy(s[0].orientation).normalize().multiply(o.orientations[0].clone().invert()).multiply(o.rotation));this.table.rotation=ir(c.normalize());let h=ia(o.local).applyQuaternion(c);this.table.position={x:a.x-h.x*this.table.scale,y:a.y-h.y*this.table.scale,z:a.z-h.z*this.table.scale}}};function mf(n,t,e=9.81,i=0){let s={...n.position};if(n.position.x+=n.velocity.x*t,n.position.z+=n.velocity.z*t,n.position.y+=n.velocity.y*t-e*t*t/2,n.velocity.y-=e*t,n.age+=t,s.y>=i&&n.position.y<=i){let r=(s.y-i)/(s.y-n.position.y||1);return{x:s.x+(n.position.x-s.x)*r,y:i,z:s.z+(n.position.z-s.z)*r}}return null}var gf=Object.freeze([{title:"I \xB7 FIRST MARKS",motif:"fern, volcano, fossil",base:"bone cave"},{title:"II \xB7 BANNERS & BOWS",motif:"oak, hills, masonry",base:"crenellated keep"},{title:"III \xB7 POWDER & SAIL",motif:"cypress, windmill, navigation",base:"star bastion"},{title:"IV \xB7 IRON & STATIC",motif:"birch, wire, radio",base:"sandbag bunker"},{title:"V \xB7 TOMORROW IN PENCIL",motif:"crystal, circuit, observatory",base:"orbital laboratory"},{title:"VI \xB7 MARGINS OF SPACE",motif:"orbit, comet, constellation",base:"celestial gate"}].map(Object.freeze));function _f(){let n=[];return{paths:n,path:(...t)=>n.push(t),ellipse(t,e,i,s,r,a=!1){n.push(Array.from({length:25},(o,c)=>{let h=c/24*Math.PI*2;return[t+s*Math.cos(h),e+(a?r*Math.sin(h):0),i+(a?0:r*Math.sin(h))]}))}}}function xf(){let n=_f();for(let t of[-1,1]){for(let e=0;e<8;e++){let i=-.012-e*.009,s=t*(1.22+e*.002);for(let r of[-.72,1.4])n.path([0,i-.016,r],[t*.13,i+.003,r],[t*.7,i+.012,r+t*.005],[s,i+.008,r]);n.path([s,i+.008,-.72],[s+t*.008,i+.004,.3],[s,i+.008,1.4])}n.path([0,-.108,-.76],[t*1.28,-.087,-.76],[t*1.3,-.091,1.45],[t*.09,-.104,1.45],[0,-.128,1.43]),n.path([t*.035,-.024,-.7],[t*.035,-.018,.35],[t*.035,-.024,1.4]);for(let e=0;e<42;e++){let i=-.69+e*.049;n.path([t*1.235,-.075,i],[t*1.252,-.025,i+.018])}for(let e=0;e<20;e++){let i=t*(.08+e*.057);n.path([i,-.079,1.402],[i+t*.024,-.027,1.405])}}for(let t=0;t<7;t++){let e=-.55+t*.29;n.path([-.035,-.023,e],[0,-.035,e+.035],[.035,-.024,e])}n.path([.075,-.09,1.36],[.09,-.12,1.61],[.12,-.12,1.57],[.15,-.12,1.61],[.135,-.09,1.36]);for(let t=0;t<6;t++)n.path([.096,-.116,1.4+t*.027],[.134,-.116,1.42+t*.027]);return n.path([-1.18,.001,.7],[-.45,.003,.697],[0,-.013,.7],[.6,.003,.702],[1.18,.001,.7]),n.paths}function yf(n,t=!1){let e=_f();for(let r=0;r<3;r++){let a=.37+r*.074;e.path(...Array.from({length:30},(o,c)=>[-.92+c*.064,.001,a+Math.sin(c*1.7+r)*.006]))}for(let r=0;r<20;r++){let a=-.9+r*.093,o=.55+Math.sin(r*4.3)*.026;e.path([a,.001,o],[a+.04,.001,o+.018])}let i=e.paths.length;for(let r of[-1,1]){let a=r*.54;if(n===0){e.path([a-.23,0,.04],[a-.04,0,-.35],[a+.01,0,-.28],[a+.2,0,.08]);for(let o=0;o<8;o++)e.path([a-.06+o*.024,.002,-.12+o*.02],[a-.15+o*.03,.002,.06]);e.path([a,0,.16],[a+.04,.19,.12],[a+.01,.28,.1]);for(let o=0;o<5;o++)for(let c of[-1,1])e.path([a+.035,.055+o*.034,.12],[a+c*(.1-o*.011),.11+o*.034,.11]);e.ellipse(a+.25,.002,.04,.055,.039)}else if(n===1){e.path([a-.24,0,-.08],[a-.07,0,-.27],[a+.09,0,-.3],[a+.28,0,-.05]),e.path([a,0,.13],[a+.008,.2,.13],[a-.034,.28,.14]),e.path([a+.004,.14,.13],[a+.065,.23,.1]);for(let[o,c]of[[-.055,.26],[.03,.31],[.085,.26]])e.ellipse(a+o,c,.12,.073,.055,!0);for(let o=0;o<6;o++)e.path([a-.14+o*.044,.002,-.08],[a-.08+o*.043,.002,-.17])}else if(n===2){e.path([a-.055,0,.12],[a-.034,.23,.12],[a+.034,.23,.12],[a+.055,0,.12]);for(let o=0;o<4;o++){let c=o*Math.PI/2+.3;e.path([a,.2,.15],[a+Math.cos(c)*.16,.2+Math.sin(c)*.16,.15],[a+Math.cos(c+.18)*.16,.2+Math.sin(c+.18)*.16,.15])}for(let o=0;o<5;o++)e.path([a-.2,0,-.1-o*.027],[a+.17,0,-.13-o*.027])}else if(n===3){e.path([a-.075,0,.13],[a,.34,.13],[a+.075,0,.13]);for(let o=0;o<4;o++)e.path([a-.065+o*.012,o*.06,.13],[a+.05-o*.01,.08+o*.06,.13]);e.ellipse(a,.3,.13,.055,.036,!0);for(let o=0;o<6;o++)e.path([a-.2+o*.07,0,-.1],[a-.2+o*.07,.04,-.1]);e.path([a-.2,.024,-.1],[a+.15,.027,-.1])}else if(n===4){for(let o=0;o<3;o++){let c=a+(o-1)*.095,h=.15+o*.055;e.path([c-.045,0,.12],[c-.038,h,.12],[c,h+.06,.08],[c+.041,h,.1],[c+.045,0,.12]),e.path([c,0,.08],[c,h+.06,.08])}for(let o=0;o<4;o++)e.path([a-.2,0,-.06-o*.04],[a-.04,0,-.06-o*.04],[a+.04,0,-.12-o*.04],[a+.2,0,-.12-o*.04])}else{e.ellipse(a,.14,.1,.1,.1,!0),e.ellipse(a,.14,.1,.17,.045);let o=[[a-.23,0,-.2],[a-.09,0,-.31],[a+.14,0,-.19],[a+.2,0,-.04]];e.path(...o);for(let[c,h,l]of o)e.path([c-.022,h,l],[c+.022,h,l]),e.path([c,h,l-.022],[c,h,l+.022])}}return t?[...[-.35,.14,.61].map(r=>Array.from({length:30},(a,o)=>[-.91+o*.063,.001,r+Math.sin(o*1.7)*.006])),...e.paths.slice(i).map(r=>r.map(([a,o,c])=>[a,o*.7,-.525+c*.14]))]:e.paths}function sa(n,t="#635b51",e=.0011){let i=new be(xi(n,e),new ze({color:t,vertexColors:!0}));return i.name="spatial-pencil-drawing",i}function vf(){return Array.from({length:16},(n,t)=>Array.from({length:21},(e,i)=>[-1.06+i*.105,.018+t%3*.009,-.28+t*.052+Math.sin(i*.4+t)*.014]))}function ly(n,t){let e=n.getContext("2d"),i=n.width,s=n.height,r=yi(t),a=mh(130+t);e.globalAlpha=1,e.fillStyle=r.paper,e.fillRect(0,0,i,s);let o=(l,d,u,f,m,x)=>{e.fillStyle=m,e.globalAlpha=x;let g=Array.from({length:28},(A,v)=>{let b=v/28*Math.PI*2,M=.86+a()*.18,R=(l+Math.cos(b)*u*M)*i,y=(d+Math.sin(b)*f*M)*s;return[R,y]});e.beginPath();let p=g[g.length-1],T=g[0];e.moveTo((p[0]+T[0])/2,(p[1]+T[1])/2),g.forEach((A,v)=>{let b=g[(v+1)%g.length];e.quadraticCurveTo(A[0],A[1],(A[0]+b[0])/2,(A[1]+b[1])/2)}),e.closePath(),e.fill()};for(let l=0;l<42;l++){let d=a(),u=a()*.5;o(d,u,.055+a()*.15,.025+a()*.055,l%4===0?r.body:r.accent,.055)}for(let l of[.055,.945])for(let d=0;d<12;d++)o(l,.06+d*.076,.04+a()*.05,.055,r.accent,.07);for(let l of[.174,.405,.627])for(let d=0;d<16;d++)o(.07+d*.056,l,.057,.045,"#ba9660",.04);o(.229,.405,.09,.235,"#319788",.11),o(.067,.401,.045,.225,"#c49737",.16),e.globalAlpha=1;let c=e.createLinearGradient(i*.476,0,i*.524,0);c.addColorStop(0,"#6d4d2b00"),c.addColorStop(.47,"#6d4d2b28"),c.addColorStop(.5,"#6d4d2b54"),c.addColorStop(.56,"#fff9e988"),c.addColorStop(1,"#fff9e900"),e.fillStyle=c,e.fillRect(i*.476,0,i*.048,s);let h=e.getImageData(0,0,i,s);for(let l=0;l<h.data.length;l+=4){let d=(a()-.5)*9;for(let u=0;u<3;u++)h.data[l+u]+=d;h.data[l+3]=255}e.putImageData(h,0,0)}function cy(){let n=new fi(2.44,2.12,24,1);n.rotateX(-Math.PI/2).translate(0,-.004,.34);let t=n.attributes.position;for(let e=0;e<t.count;e++){let i=Math.abs(t.getX(e));t.setY(e,-.004-.024*Math.max(0,1-i/.14)**2)}return n.computeVertexNormals(),n}var Tl=class extends cn{constructor(){super(),this.name="watercolor-paper-book",this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=1024,this.texture=new is(this.canvas),this.texture.colorSpace=Ce,this.page=new be(cy(),new ze({map:this.texture,side:He})),this.page.name="opaque-painted-pages",this.add(this.page);let t=(e,i,s)=>{let r=new be(new Qn(...e),new ze({color:s,map:gh()}));r.position.set(...i),this.add(r)};t([2.57,.03,2.21],[0,-.107,.345],"#73534e"),t([2.46,.07,2.12],[0,-.059,.34],"#e8d8b3"),t([.064,.008,.25],[.113,-.115,1.475],"#c39950")}setAge(t){ly(this.canvas,t),this.texture.needsUpdate=!0}dispose(){this.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),this.texture.dispose(),this.removeFromParent()}};var Sh=[-1,1].flatMap(n=>[-.65,1.34].map(t=>({id:`handle-${n}-${t}`,x:n*1.28,y:.035,z:t}))),Mf="#342d2b",sr=class{constructor(t,e,i,{flat:s=!0,backing:r=!1}={}){this.backing=r,this.canvas=document.createElement("canvas"),this.canvas.width=768,this.canvas.height=Math.round(768*i/e),this.ctx=this.canvas.getContext("2d"),this.texture=new is(this.canvas),this.texture.colorSpace=Ce,this.mesh=new be(new fi(e,i),new ze({map:this.texture,transparent:!0,side:He,depthWrite:!1})),this.mesh.rotation.x=s?-Math.PI/2:-.35,t.add(this.mesh),this.last=""}text(t,e=Mf){let i=JSON.stringify([t,e]);if(i===this.last)return;this.last=i;let{ctx:s,canvas:{width:r,height:a}}=this;s.clearRect(0,0,r,a),this.backing&&(s.fillStyle="#fff0d5",s.beginPath(),s.moveTo(4,7),s.lineTo(r*.53,3),s.lineTo(r-4,8),s.lineTo(r-7,a-5),s.lineTo(7,a-3),s.closePath(),s.fill(),s.strokeStyle="#927454",s.lineWidth=2,s.stroke()),s.strokeStyle="#a49b87",s.lineWidth=2,s.beginPath(),s.moveTo(8,a-5),s.lineTo(r*.53,a-3),s.lineTo(r-8,a-6),s.stroke(),s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,t.forEach((o,c)=>{s.font=`${c===0?"bold ":""}${Math.floor(a/t.length*.61)}px 'Patrick Hand', cursive`,s.fillText(o,r/2,(c+.5)*a/t.length,r-24)}),this.texture.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}},El=class{constructor(t,e){this.host=e,this.time=0,this.age=-1,this.labelClock=0,this.labels=new Map,this.offers=[],this.highlightedDocks=[],this.renderer=new rl({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),this.renderer.xr.setFramebufferScaleFactor(.9),this.renderer.xr.setFoveation(.7),this.renderer.outputColorSpace=Ce,this.scene=new vr,this.scene.background=new Nt("#f5f1e8"),this.camera=new Je(43,1,.01,30),this.camera.position.set(.45,2.45,3.3),this.controls=new _l(this.camera,t),this.autoFrame=!0,this.controls.addEventListener("start",()=>{this.autoFrame=!1}),this.controls.target.set(0,.1,.3),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.485,this.controls.minDistance=.4,this.controls.maxDistance=8,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.mouseButtons={RIGHT:yn.ROTATE,MIDDLE:yn.PAN},this.controls.touches={TWO:An.DOLLY_PAN},this.scene.add(new Lr("#fffaf0","#8c8f82",1.9));let i=new Nr("#fff8ed",1.2);i.position.set(-2,4,2),this.scene.add(i),this.root=new cn,this.scene.add(this.root),this.table={position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:1},this.army=new hs(this.root,{capacity:6e3}),this.shop=new hs(this.root,{capacity:1200}),this.held=new hs(this.root,{capacity:600}),this.details=new hs(this.root,{capacity:100}),this.book=sa(xf(),"#514a42",.002),this.paper=new Tl,this.root.add(this.paper),this.root.add(this.book),this.landscape=null,this.chapter=new sr(this.root,.92,.063),this.chapter.mesh.position.set(0,.003,-.65),this.rallyClassic=this.zone(-.66,.395,.44,.51,"#438e72"),this.rallyWide=this.zone(-.66,.145,.44,1.01,"#438e72"),this.troops=[],this.status=new sr(this.root,1.38,.22,{flat:!1,backing:!0}),this.status.mesh.position.set(.02,.2,-.58),this.hint=new sr(this.root,1.85,.105),this.hint.mesh.position.set(0,.004,-.17),this.hint.text(["Lift a difficulty seal from the tray. Drop it onto the page."]),this.shadow=new ns(xl().shadow,new ze({color:"#382f2b",transparent:!0,opacity:.42,depthWrite:!1}),170),this.shadow.frustumCulled=!1,this.root.add(this.shadow),this.shadowMatrix=new Wt,this.shadowQuaternion=new ae().setFromEuler(new En(-Math.PI/2,0,0)),this.mist=this.makeMist(),this.root.add(this.mist),this.reticle=new be(new Ar(.09,.115,32).rotateX(-Math.PI/2),new ze({color:"#74c4a5",side:He})),this.reticle.visible=!1,this.reticle.matrixAutoUpdate=!1,this.scene.add(this.reticle),this.refreshArt(0),this.resize(),this.syncTable()}zone(t,e,i,s,r){let a=new cn;this.root.add(a);let o=[];for(let l=0;l<12;l++){let d=t-i/2+l*i/12;o.push([[d,.003,e+s/2-.035],[d+.018,.003,e+s/2-.006]])}a.add(sa(o,r,9e-4));let c=[[t-i/2,.004,e-s/2],[t+i/2,.004,e-s/2],[t+i/2,.004,e+s/2],[t-i/2,.004,e+s/2],[t-i/2,.004,e-s/2]].map(l=>new C(...l)),h=new Ni(new Se().setFromPoints(c),new Cr({color:r,dashSize:.035,gapSize:.018}));return h.computeLineDistances(),a.add(h),a}makeMist(){let t=sa(vf(),"#91897c",55e-5);return t.material.transparent=!0,t.material.opacity=.33,t.material.depthWrite=!1,t}refreshArt(t,e=!0){t===this.age&&e===this.tactical||(this.age=t,this.tactical=e,this.rallyClassic.visible=!e,this.rallyWide.visible=e,this.hint.mesh.position.z=e?-.43:-.17,this.paper.setAge(t),this.landscape&&(this.landscape.removeFromParent(),this.landscape.geometry.dispose(),this.landscape.material.dispose()),this.landscape=sa(yf(t,e),"#635b51",.00165),this.root.add(this.landscape),this.chapter.text([gf[t].title]))}resize(){let t=this.renderer.domElement,e=t.clientWidth,i=t.clientHeight;!e||!i||this.renderer.xr.isPresenting||(this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.fov=Math.min(95,as.radToDeg(2*Math.atan(Math.tan(as.degToRad(43/2))*Math.max(1,1/this.camera.aspect)))),this.camera.updateProjectionMatrix(),this.autoFrame&&this.frameBook())}frameBook(){this.autoFrame=!0;let t=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.update(),this.camera.position.set(.45,2.45,3.3),this.controls.target.set(0,.1,.3),this.controls.update();let e=this.controls.target,i=this.camera.position.clone().sub(e).normalize(),s=this.camera.quaternion.clone().invert(),r=Math.tan(as.degToRad(this.camera.fov/2))*.88,a=r*this.camera.aspect,o=0;for(let c of[-1.46,1.46])for(let h of[-.08,.48])for(let l of[-.8,1.45]){let d=new C(c,h,l).sub(e).applyQuaternion(s);o=Math.max(o,d.z+Math.abs(d.x)/a,d.z+Math.abs(d.y)/r)}this.camera.position.copy(e).addScaledVector(i,o),this.controls.update(),this.controls.enableDamping=t}syncTable(){let t=this.table;this.root.position.set(t.position.x,t.position.y,t.position.z),this.root.quaternion.copy(qi(t)),this.root.scale.setScalar(t.scale),this.root.updateMatrixWorld(!0)}immersive(t){this.scene.background=t?null:new Nt("#f5f1e8"),this.controls.enabled=!t,t||this.resize()}message(t){this.hint.text([t])}refreshShop(t){this.offers=this.host.offers(t);let e=new Set(this.offers.map(i=>i.id));for(let[i,s]of this.labels)e.has(i)||(s.dispose(),this.labels.delete(i));this.shop.begin();for(let i of this.offers){xh(this.shop,i,t?.player.age||0,{x:i.x,z:i.z});let s=this.labels.get(i.id);s||(s=new sr(this.root,i.kind==="seal"?.39:.245,.072),this.labels.set(i.id,s)),s.mesh.position.set(i.x,.006,i.z+.113);let r=this.host.reason(i,t),a=i.price===1/0?"MAX":i.price?`${i.price} ${i.currency||"gold"}`:i.action==="speed"?`${this.host.speed}\xD7`:i.action==="quality"?this.host.quality:i.command?.type==="special"&&t?.player.specialTimer>0?`${Math.ceil(t.player.specialTimer)}s`:"";s.text([i.label,a||(i.action?"Lift & drop":"Ready")],r?"#81766a":Mf)}this.shop.end(),this.details.begin();for(let i of Sh)this.details.model(i.x,i.y,i.z),this.details.part("ring",[0,0,0],[.075,.075,.075],"#8b7051",[Math.PI/2,0,0]);this.details.end()}update(t,e,i){let s=(t?.tick||0)/60;this.time+=i,this.labelClock-=i;let r=!!t&&Te(t);this.refreshArt(t?.player.age||0,!t||r),this.troops=[],this.syncTable(),this.labelClock<=0&&(this.labelClock=.25,this.refreshShop(t),this.status.text(t?[t.running?`${Yt[t.player.age].name}  \xB7  ${Math.floor(t.player.gold)} gold  \xB7  ${Math.floor(t.player.xp)} XP`:t.winner===0?"A draw. Both pages fell together.":t.winner===1?"Victory! The page is yours.":"Defeat. A new page awaits.",`${Math.ceil(t.player.hp)} / ${Math.ceil(t.player.maxHp)} HP   \u2014   Enemy ${Math.ceil(t.enemy.hp)} HP   \xB7   ${t.paused?"PAUSED":`${this.host.speed}\xD7`}`]:["INK BATTLE \xB7 THE SKETCHBOOK","Choose a seal. Lift a world."])),this.army.begin();let a=new Set((t?.units||[]).filter(c=>c.team===1&&c.guide).sort((c,h)=>h.guide.until-c.guide.until||h.id-c.id).slice(0,12).map(c=>c.id));if(this.highlightedDocks=[],t)for(let c of e){let h=tr(c.offer,t,c.targetPosition||c.position);h&&!this.highlightedDocks.includes(h.slot)&&this.highlightedDocks.push(h.slot)}let o=0;if(t){for(let c of[1,-1]){let h=c===1?t.player:t.enemy,l=-c*1.06;uf(this.army,h.age,l,c,h.drawProgress),h.turrets.forEach((d,u)=>{let f=pl(u,c),m=c===1&&this.highlightedDocks.includes(u);this.army.model(f.x,0,f.z),Ml(this.army,{built:u<h.unlockedSlots,occupied:d!==null,highlighted:m,color:Mn[c]}),d!==null&&(this.army.model(f.x,f.y,f.z,.83*Math.max(.02,h.turretProgress[u]),c,r?-(h.turretAim[u].heading-(c===1?0:Math.PI)):0),nr(this.army,h.age,d,Mn[c],!1,af(t,c,u),this.host.quality!=="comfort"),r&&h.turretHp[u]<h.turretMaxHp[u]&&(this.army.model(f.x,f.y+.18,f.z),this.army.line([-.04,0,0],[.04,0,0],.003,"#a87867"),this.army.line([-.04,0,.001],[-.04+.08*Math.max(0,h.turretHp[u]/h.turretMaxHp[u]),0,.001],.003,Mn[c])))})}for(let c of t.units){let h=(c.x/1280-.5)*an.width,l=r?vn(c.z):an.lane+(c.id%5-2)*.024,d=Math.max(.02,c.drawProgress)*Math.min(1.8,c.size/50),u=this.host.quality==="comfort";vl(this.army,c.age,c.uType,{x:h,z:l,scale:d,team:c.team,yaw:r?-(c.heading-(c.team===1?0:Math.PI)):0,time:u?0:s+c.id,walking:t.running&&!u&&c.moving,motion:rf(c,t.running),detailed:!u}),r&&c.team===1&&c.drawProgress>=1&&t.running&&!t.paused&&(this.troops.push({id:`troop-${c.id}`,x:h,y:.13*d,z:l,pickRadius:.055*Math.min(1.5,d)}),a.has(c.id)&&this.guideMark(this.army,c,c.guide,!1)),u||(this.army.model(h,.23*d,l,1),this.army.line([-.035,0,0],[.035,0,0],.0028,"#aa8f7e"),this.army.line([-.035,0,.001],[-.035+.07*Math.max(0,c.hp/c.maxHp),0,.001],.003,Mn[c.team])),this.shadowMatrix.compose(new C(h,.005,l),this.shadowQuaternion,new C(.045*d,.025*d,1)),this.shadow.setMatrixAt(o++,this.shadowMatrix)}for(let c of t.running?t.projectiles:[])if(!(!Number.isFinite(c.x)||!Number.isFinite(c.y))){if(r&&c.type==="laser"){this.army.model(0,0,0),this.army.line([mi(c.startX),(600-c.startY)*an.width/1280,vn(c.startZ)],[mi(c.x),Math.max(.025,(600-c.y)*an.width/1280),vn(c.z)],.0028,Mn[c.team]);continue}this.army.model((c.x/1280-.5)*an.width,Math.max(.035,(600-c.y)/1280*an.width),r?vn(c.z):an.lane,1,1,r?-(Math.atan2(c.targetZ-c.startZ,c.targetX-c.startX)-(c.team===1?0:Math.PI)):0),df(this.army,c.type,c.team,c.team===1?t.player.age:t.enemy.age)}for(let c of t.running?t.specials:[]){let h=(c.x/1280-.5)*an.width;this.army.model(h,.012,r?vn(c.z):an.lane),ff(this.army,c.age,s,c.team,this.host.quality!=="comfort")}}this.army.end(),this.shadow.count=o,this.shadow.instanceMatrix.needsUpdate=!0,this.shadow.visible=this.host.quality!=="comfort",this.held.begin();for(let c of e){if(c.offer.kind==="nudge"){let d=t?.units.find(u=>u.id===c.offer.command.id);if(d){let u=c.targetPosition||c.position,f=ul(t,1,d,{x:hl(u.x),z:Jr(u.z)});this.guideMark(this.held,d,f,!0);let m=gi(t,f.target);m&&(this.held.model(mi(m.x),.015,vn(m.z)),this.held.ellipse([0,0,0],[.11,.1],"xz","#b5862a"))}continue}let h=c.position,l=c.offer.kind==="unit";xh(this.held,c.offer,c.age||0,{x:h.x-(l?.018:0),y:h.y-(l?.226:.06),z:h.z,held:!0,time:this.time})}this.held.end(),this.mist.visible=this.host.quality==="mist",this.mist.position.z=Math.sin(this.time*.18)*.012,this.renderer.xr.isPresenting||this.controls.update()}guideMark(t,e,i,s){let r=mi(e.x),a=vn(e.z),o=r+e.team*.12,c=vn(i.z),h=e.intent==="engaged"?"#9c6818":"#246c54";t.model(0,.012,0);for(let l=0;l<4;l++)t.line([r+(o-r)*l/4,0,a+(c-a)*l/4],[r+(o-r)*(l+.55)/4,0,a+(c-a)*(l+.55)/4],.0035,h);t.line([o-.025*e.team,0,c-.02],[o,0,c],.002,h),t.line([o-.025*e.team,0,c+.02],[o,0,c],.002,h),s&&t.ellipse([r,0,a],[.065,.045],"xz",h,12)}render(){this.renderer.render(this.scene,this.camera)}stats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,instances:Object.values(this.army.counts).reduce((t,e)=>t+e,0),overflow:this.army.overflow+this.held.overflow+this.shop.overflow,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,highlightedDocks:[...this.highlightedDocks]}}};var wl=class{constructor(t,e,{onCarry:i=()=>{}}={}){this.host=t,this.table=e,this.onCarry=i,this.gesture=new bl(e),this.grabs=new Map,this.flights=new Map}begin(t,e,i,s=0,r=null){if(this.grabs.has(t)||this.flights.has(t))return!1;if(e.startsWith("handle-"))return this.gesture.grips.size>=2?!1:(this.onCarry(),this.gesture.begin(t,i,r),this.grabs.set(t,{handle:!0}),!0);let a=this.host.grab(t,e);return a.ok?(this.grabs.set(t,{token:a.token,world:{...i},targetWorld:{...i},position:Sn(i,this.table),history:[{world:{...i},time:s}]}),!0):!1}move(t,e,i=0,s=e,r=null){let a=this.grabs.get(t);if(a){if(a.handle){this.gesture.move(t,e,r);return}for(a.world={...e},a.targetWorld={...s},a.position=Sn(e,this.table),a.history.push({world:{...e},time:i});a.history.length>2&&a.history[0].time<i-.12;)a.history.shift()}}release(t,{desktop:e=!1}={}){let i=this.grabs.get(t);if(!i)return;if(this.grabs.delete(t),i.handle){this.gesture.end(t);return}if(!this.host.holds.has(t))return;let s=Sn(i.world,this.table);if(i.token.offer.kind==="nudge"){this.host.drop(t,{...Sn(i.targetWorld,this.table),y:0});return}s.y-=i.token.offer.kind==="unit"?.226:.06;let r=ea(i.token.offer);if(e||s.y<=r+.025){this.host.drop(t,{...s,y:r});return}let a=i.history[0],o=i.history.at(-1),c=Math.max(.016,o.time-a.time),h={x:(o.world.x-a.world.x)/c,y:(o.world.y-a.world.y)/c,z:(o.world.z-a.world.z)/c},l=Math.min(1,3/(Sl(h)||1)),d=vh(h,this.table);for(let u of["x","y","z"])d[u]*=l;this.flights.set(t,{token:i.token,position:s,velocity:d,age:0})}cancel(t){this.grabs.delete(t),this.flights.delete(t),this.gesture.end(t),this.host.cancel(t)}cancelAll(){for(let t of new Set([...this.grabs.keys(),...this.flights.keys()]))this.cancel(t)}update(t){for(let[e,i]of this.grabs)!i.handle&&!this.host.holds.has(e)&&this.grabs.delete(e);for(let[e,i]of this.flights){if(!this.host.holds.has(e)){this.flights.delete(e);continue}let s=mf(i,Math.min(t,.1),9.81/this.table.scale,ea(i.token.offer));s?(this.flights.delete(e),this.host.drop(e,s)):(i.age>3||i.position.y<-1)&&this.cancel(e)}}visuals(){let t=[];for(let e of this.grabs.values())e.handle||t.push({offer:e.token.offer,age:e.token.age,position:Sn(e.world,this.table),targetPosition:Sn(e.targetWorld,this.table)});for(let e of this.flights.values())t.push({offer:e.token.offer,age:e.token.age,position:{...e.position,y:e.position.y+(e.token.offer.kind==="unit"?.226:.06)}});return t}};var Al=class{constructor(){this.reset()}reset(){this.angle=null}update(t){if(t.length!==2)return this.reset(),0;let e=t[1].x-t[0].x,i=t[1].y-t[0].y;if(Math.hypot(e,i)<24)return this.reset(),0;let s=Math.atan2(i,e),r=this.angle;if(this.angle=s,r===null)return 0;let a=s-r;return Math.atan2(Math.sin(a),Math.cos(a))*.35}};var Yi=n=>({x:n.x,y:n.y,z:n.z}),hy=new wn(new C(-1.46,-.15,-.8),new C(1.46,.48,1.56)),uy=["thumb","index-finger","middle-finger","ring-finger","pinky-finger"].map(n=>n==="thumb"?["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"]:[`${n}-metacarpal`,`${n}-phalanx-proximal`,`${n}-phalanx-intermediate`,`${n}-phalanx-distal`,`${n}-tip`]),Rl=class{constructor(t,e,{onCarry:i=()=>{},onPlace:s=()=>!1}={}){this.view=t,this.host=e,this.interaction=new wl(e,t.table,{onCarry:()=>{t.autoFrame=!1,i()}}),this.onPlace=s,this.raycaster=new Ur,this.pointer=new It,this.pointers=new Map,this.touchPointers=new Map,this.twist=new Al,this.touchNavigation=!1,this.sources=new Map,this.nextId=0,this.canvas=t.renderer.domElement,this.listeners=[],this.canvas.addEventListener("pointerdown",r=>{if(t.renderer.xr.isPresenting)return;if(r.pointerType==="touch"){if(this.touchPointers.set(r.pointerId,{x:r.clientX,y:r.clientY}),this.twist.update([...this.touchPointers.values()]),this.touchPointers.size>1){this.touchNavigation=!0;for(let c of this.pointers.keys())this.interaction.cancel(c);this.pointers.clear(),t.controls.enabled=!0,t.controls.touches.ONE=null;return}}else if(r.button!==0)return;let a=this.desktopRay(r),o=!this.pointers.size&&!this.touchNavigation&&!this.pick({x:1e5,y:1e5,z:1e5},a)&&this.outsidePlaySpace(a);r.pointerType==="touch"?t.controls.touches.ONE=o?An.ROTATE:null:t.controls.mouseButtons.LEFT=o?yn.ROTATE:null},!0),this.canvas.addEventListener("pointermove",r=>{r.pointerType==="touch"&&this.touchPointers.has(r.pointerId)&&this.touchPointers.set(r.pointerId,{x:r.clientX,y:r.clientY})},!0);for(let r of["pointerdown","pointermove","pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(r,a=>this.desktop(r,a));this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),this.canvas.addEventListener("keydown",r=>{r.key==="Escape"&&(this.cancelAll(),this.host.pauseForInterruption())}),this.handGroup=new cn,t.scene.add(this.handGroup),this.handVertices=new $t(new Float32Array(240),3),this.handVertices.setUsage(Ys),this.handLines=new br(new Se().setAttribute("position",this.handVertices),new Di({color:"#6aa999",transparent:!0,opacity:.75})),this.handGroup.add(this.handLines),this.handLines.frustumCulled=!1}candidates(){return[...Sh,...this.view.troops||[],...this.view.offers.map(t=>({...t,y:t.kind==="unit"?.15:.07}))]}pick(t,e){let i=Sn(t,this.view.table),s=null,r=1/0;for(let o of this.candidates()){let c=Math.hypot(i.x-o.x,i.y-o.y,i.z-o.z);c<(o.id.startsWith("troop-")?o.pickRadius:o.id.startsWith("handle-")?.12:.13)&&c<r&&(s=o,r=c)}if(s)return{target:s.id,world:t};if(!e)return null;let a=1/0;for(let o of this.candidates()){let c=new C().copy(Mh(o,this.view.table)),h=new Bn(c,(o.pickRadius||.105)*this.view.table.scale),l=e.intersectSphere(h,new C);if(!l)continue;let d=e.origin.distanceTo(l);d<a&&(a=d,s=o)}return s?{target:s.id,world:Yi(e.at(a,new C)),distance:a}:null}desktopRay(t){let e=this.canvas.getBoundingClientRect();return this.pointer.set((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.raycaster.setFromCamera(this.pointer,this.view.camera),this.raycaster.ray}outsidePlaySpace(t){let e=new C().copy(Sn(t.origin,this.view.table)),i=new C().copy(Sn(t.at(1,new C),this.view.table)).sub(e).normalize();return!new kn(e,i).intersectsBox(hy)}planePoint(t,e){return t.intersectPlane(new tn().setFromNormalAndCoplanarPoint(new C(0,1,0).applyQuaternion(qi(this.view.table)),new C().copy(Mh({x:0,y:e,z:0},this.view.table))),new C)}landingPoint(t,e){let i=e?ea(e):0;return this.planePoint(t,i)}turnView(){if(!this.touchNavigation||!this.view.controls.enabled||this.view.renderer.xr.isPresenting)return;let t=this.twist.update([...this.touchPointers.values()]);t&&this.view.controls.rotateLeft(-t)}update(t){this.turnView(),this.interaction.update(t)}desktop(t,e){if(this.view.renderer.xr.isPresenting||e.button&&t==="pointerdown")return;if(e.pointerType==="touch"){let a=this.touchNavigation;if(["pointerup","pointercancel","lostpointercapture"].includes(t)&&(t==="pointerup"&&this.touchPointers.has(e.pointerId)&&(this.touchPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.turnView()),this.touchPointers.delete(e.pointerId),this.twist.reset(),this.twist.update([...this.touchPointers.values()]),this.touchPointers.size||(this.touchNavigation=!1)),a)return}let i=`pointer-${e.pointerId}`,s=this.pointers.get(i),r=this.desktopRay(e);if(t==="pointerdown"){let a=this.pick({x:1e5,y:1e5,z:1e5},r);if(!a)return;this.interaction.begin(i,a.target,a.world,e.timeStamp/1e3)&&(this.pointers.set(i,{touch:e.pointerType==="touch",height:a.target.startsWith("handle-")?Sn(a.world,this.view.table).y:.28}),this.view.controls.enabled=[...this.pointers.values()].every(o=>o.touch),this.canvas.setPointerCapture(e.pointerId),this.canvas.focus(),e.preventDefault())}else if(t==="pointermove")if(s){let a=this.planePoint(r,s.height);if(a){let o=this.interaction.grabs.get(i)?.token?.offer,c=this.landingPoint(r,o);this.interaction.move(i,Yi(a),e.timeStamp/1e3,Yi(c||a))}}else{let a=this.pick({x:1e5,y:1e5,z:1e5},r);this.canvas.style.cursor=a?"grab":"default",a&&this.describe(a.target)}else if(s){if(t==="pointerup"){let a=this.interaction.grabs.get(i)?.token?.offer,o=this.landingPoint(r,a);o&&!this.interaction.grabs.get(i)?.handle&&this.interaction.move(i,Yi(o),e.timeStamp/1e3),this.interaction.release(i,{desktop:!0})}else this.interaction.cancel(i);this.pointers.delete(i),this.view.controls.enabled=[...this.pointers.values()].every(a=>a.touch),this.canvas.hasPointerCapture(e.pointerId)&&this.canvas.releasePointerCapture(e.pointerId)}}describe(t){if(t.startsWith("handle-"))this.view.message("Carry with one ring. Hold two rings to resize and turn.");else{let e=this.host.offer(t);e&&this.view.message(`${e.label} \xB7 ${e.detail}`)}}bind(t){this.unbind(),this.session=t;let e=(i,s)=>{t.addEventListener(i,s),this.listeners.push([i,s])};for(let i of["selectstart","squeezestart","selectend","squeezeend"])e(i,s=>{if(t.visibilityState!=="visible"||s.inputSource.hand)return;let r=this.sources.get(s.inputSource);if(!r?.valid)return;let a=this.view.renderer.xr.getReferenceSpace(),o=s.frame.getPose(s.inputSource.gripSpace||s.inputSource.targetRaySpace,a),c=s.frame.getPose(s.inputSource.targetRaySpace,a);if(!o||!c){this.interaction.cancel(r.id),r.buttons.clear();return}r.position=Yi(o.transform.position),r.orientation=o.transform.orientation,r.ray.origin.copy(c.transform.position),r.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation);let h=i.startsWith("select")?"trigger":"grip";if(i.endsWith("start")){if(this.onPlace(s.frame))return;r.buttons.add(h),r.buttons.size===1&&this.startSource(r)}else if(r.buttons.delete(h),!r.buttons.size){let l=r.distance?Yi(r.ray.at(r.distance,new C)):r.position;this.interaction.move(r.id,l,performance.now()/1e3,l,r.orientation),this.interaction.release(r.id)}});e("inputsourceschange",i=>{for(let s of i.removed)this.remove(s)})}unbind(){if(this.session)for(let[t,e]of this.listeners)this.session.removeEventListener(t,e);this.listeners=[],this.session=null,this.cancelAll();for(let t of[...this.sources.keys()])this.remove(t)}remove(t){let e=this.sources.get(t);e&&(this.interaction.cancel(e.id),e.line.removeFromParent(),e.line.geometry.dispose(),e.line.material.dispose(),this.sources.delete(t))}startSource(t){let e=this.pick(t.position,t.hand?null:t.ray);e&&(this.describe(e.target),t.distance=e.distance||0,this.interaction.begin(t.id,e.target,e.world,performance.now()/1e3,t.orientation)&&this.feedback(t.id,!0))}feedback(t,e){for(let[i,s]of this.sources)s.id===t&&i.gamepad?.hapticActuators?.[0]?.pulse(e?.25:.1,e?35:80)?.catch(()=>{})}xr(t,e){if(!this.session||this.session.visibilityState!=="visible")return;let i=[],s=performance.now()/1e3;for(let r of this.session.inputSources){let a=this.sources.get(r);if(!a){let m=new Ni(new Se().setFromPoints([new C,new C(0,0,-1)]),new Di({color:"#6aa999",transparent:!0,opacity:.5}));this.view.scene.add(m),a={id:`xr-${++this.nextId}`,hand:!!r.hand,buttons:new Set,pinched:!1,armed:!1,valid:!1,ray:new kn,line:m},this.sources.set(r,a)}let o=t.getPose(r.gripSpace||r.targetRaySpace,e),c=t.getPose(r.targetRaySpace,e),h,l=null,d=!1;if(r.hand){let m=new Map;for(let[p,T]of r.hand){let A=t.getJointPose(T,e);A&&(m.set(p,A.transform.position),p==="wrist"&&(l=A.transform.orientation))}let x=m.get("thumb-tip"),g=m.get("index-finger-tip");if(x&&g){h={x:(x.x+g.x)/2,y:(x.y+g.y)/2,z:(x.z+g.z)/2},d=Math.hypot(x.x-g.x,x.y-g.y,x.z-g.z)<(a.pinched?.04:.025);for(let T of uy)for(let A=1;A<T.length;A++){let v=m.get(T[A-1]),b=m.get(T[A]);v&&b&&i.push(v.x,v.y,v.z,b.x,b.y,b.z)}}}else o&&c&&(h=Yi(o.transform.position),l=o.transform.orientation);if(a.valid=!!h,!h){this.interaction.cancel(a.id),a.buttons.clear(),a.pinched=!1,a.armed=!1,a.line.visible=!1;continue}a.position=h,a.orientation=l,c&&(a.ray.origin.copy(c.transform.position),a.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation)),a.line.visible=!a.hand,!a.hand&&c&&(a.line.position.copy(c.transform.position),a.line.quaternion.copy(c.transform.orientation),a.line.scale.z=a.distance||.6);let u=a.distance&&!a.hand?Yi(a.ray.at(a.distance,new C)):h;a.hand&&a.pinched&&!d&&this.interaction.grabs.get(a.id)?.handle||this.interaction.move(a.id,u,s,u,a.orientation),a.hand&&!d&&(a.armed=!0),a.hand&&d!==a.pinched&&(a.pinched=d,d?a.armed&&!this.onPlace(t)&&this.startSource(a):this.interaction.release(a.id))}this.handVertices.array.set(i.slice(0,this.handVertices.array.length)),this.handVertices.needsUpdate=!0,this.handLines.geometry.setDrawRange(0,Math.min(i.length,this.handVertices.array.length)/3),this.handLines.visible=i.length>0}cancelAll(){this.interaction.cancelAll(),this.view.controls.disconnect();for(let t of new Set([...this.touchPointers.keys(),...[...this.pointers.keys()].map(e=>Number(e.slice(8)))]))this.canvas.hasPointerCapture(t)&&this.canvas.releasePointerCapture(t);this.pointers.clear(),this.touchPointers.clear(),this.touchNavigation=!1,this.twist.reset(),this.view.controls.touches.ONE=null,this.view.controls.mouseButtons.LEFT=null,this.view.controls.connect(this.canvas),this.view.controls.enabled=!this.view.renderer.xr.isPresenting,this.canvas.style.cursor="default";for(let t of this.sources.values())t.buttons.clear(),t.pinched=!1,t.armed=!1,t.line.visible=!1;this.handLines.visible=!1}};function Sf(n){let t="inkBattle.musicMuted.v1",e="global-v2",i="evolvingCanvas",s=["mp3","ogg","wav"],c=[{id:"evolvingCanvas",title:"The Evolving Canvas",file:"evolving_canvas",variants:["evolving_canvas","evolving_canvas_v2","evolving_canvas_v3","evolving_canvas_v4","evolving_canvas_v5","evolving_canvas_v6"],scene:"battle",roles:["ink-battle","active-fight","progression","age","all-purpose","fallback"],ageMin:0,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.68,minPlaySec:16,priority:84,fallback:!0,classicBattle:!0},{id:"pencilDawn",title:"Pencil Dawn",file:"pencil_dawn",variants:["pencil_dawn","pencil_dawn_v2"],scene:"opening",roles:["stone-age","opening","low-tension"],ageMin:0,ageMax:1,tensionMin:0,tensionMax:.38,loop:!0,volume:.58,minPlaySec:28,priority:80},{id:"graphiteSkirmish",title:"Graphite Skirmish",file:"graphite_skirmish",variants:["graphite_skirmish","graphite_skirmish_v2","graphite_skirmish_v3","graphite_skirmish_v4","graphite_skirmish_v5","graphite_skirmish_v6","graphite_skirmish_v7","graphite_skirmish_v8"],scene:"battle",roles:["early-game","mid-game","pressure"],ageMin:0,ageMax:2,tensionMin:.22,tensionMax:.72,loop:!0,volume:.62,minPlaySec:32,priority:82},{id:"inklineAdvance",title:"Inkline Advance",file:"inkline_advance",variants:["inkline_advance","inkline_advance_v2","inkline_advance_v3","inkline_advance_v4","inkline_advance_v5","inkline_advance_v6"],scene:"pressure",roles:["early-game","lane-pressure","fast-units"],ageMin:0,ageMax:2,tensionMin:.52,tensionMax:1,loop:!0,volume:.64,minPlaySec:30,priority:86},{id:"castleMarch",title:"Castle March",file:"castle_march",variants:["castle_march","castle_march_v2"],scene:"battle",roles:["castle-age","iron-age","steady-battle"],ageMin:1,ageMax:2,tensionMin:.16,tensionMax:.68,loop:!0,volume:.62,minPlaySec:34,priority:78},{id:"renaissanceRush",title:"Renaissance Rush",file:"renaissance_rush",variants:["renaissance_rush","renaissance_rush_v2"],scene:"battle",roles:["renaissance","momentum","snare-march"],ageMin:2,ageMax:3,tensionMin:.28,tensionMax:.82,loop:!0,volume:.65,minPlaySec:34,priority:84},{id:"cannonSmoke",title:"Cannon Smoke",file:"cannon_smoke",variants:["cannon_smoke","cannon_smoke_v2"],scene:"siege",roles:["turrets","specials","base-pressure"],ageMin:2,ageMax:4,tensionMin:.58,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:90},{id:"modernWarfare",title:"Modern Warfare",file:"modern_warfare",variants:["modern_warfare","modern_warfare_v2"],scene:"battle",roles:["modern-age","electric-guitar","orchestral-drop"],ageMin:3,ageMax:3,tensionMin:.26,tensionMax:1,loop:!0,volume:.68,minPlaySec:36,priority:86},{id:"futureArpeggio",title:"Future Arpeggio",file:"future_arpeggio",variants:["future_arpeggio","future_arpeggio_v2"],scene:"future",roles:["future-age","synth","tech-window"],ageMin:4,ageMax:4,tensionMin:.12,tensionMax:.72,loop:!0,volume:.62,minPlaySec:34,priority:82},{id:"neonFront",title:"Neon Front",file:"neon_front",variants:["neon_front","neon_front_v2"],scene:"pressure",roles:["future-age","high-pressure","cyber-drums"],ageMin:4,ageMax:5,tensionMin:.52,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:89},{id:"cosmicClash",title:"Cosmic Clash",file:"cosmic_clash",variants:["cosmic_clash","cosmic_clash_v2"],scene:"cosmic",roles:["cosmic-age","choir","final-battle"],ageMin:5,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.7,minPlaySec:42,priority:92},{id:"lastPageSiege",title:"Last Page Siege",file:"last_page_siege",variants:["last_page_siege","last_page_siege_v2"],scene:"siege",roles:["critical-base-hp","deathball","endgame-pressure"],ageMin:0,ageMax:5,tensionMin:.76,tensionMax:1,loop:!0,volume:.72,minPlaySec:32,priority:105,urgent:!0},{id:"codexGemma",title:"Codex Gemma",file:"codex_gemma",variants:["codex_gemma","codex_gemma_v2"],scene:"menu",roles:["director","pause","memory"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:.45,loop:!0,volume:.48,minPlaySec:20,priority:75},{id:"victoryCanvas",title:"Victory Canvas",file:"victory_canvas",variants:["victory_canvas","victory_canvas_v2"],scene:"victory",roles:["victory","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.58,minPlaySec:20,priority:120,outcome:"victory"},{id:"erasedPages",title:"Erased Pages",file:"erased_pages",variants:["erased_pages","erased_pages_v2"],scene:"defeat",roles:["defeat","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.54,minPlaySec:20,priority:120,outcome:"defeat"}];return{MusicDirector:{tracks:{},activeId:null,pendingId:null,started:!1,muted:!1,suspended:!1,ducked:!1,outcome:null,masterVolume:.72,fadeMs:1600,idleReleaseMs:45e3,decisionTimer:0,lastSwitchAt:-999,transitionToken:0,audioContext:null,masterGainNode:null,mixerUnavailable:!1,elementMixer:!1,recentIds:[],signals:{tension:0,playerAge:0,enemyAge:0,troopPressure:0},init(){this.elementMixer=this.shouldUseElementMixer(),this.mixerUnavailable=this.elementMixer;try{this.muted=localStorage.getItem(t)==="1"}catch{this.muted=!1}for(let l=0;l<c.length;l++){let d=c[l],u=new Audio;u.preload=d.preload||"none",u.loop=d.loop!==!1;let f={config:d,audio:u,variantSources:this.buildVariantSources(d),variantBag:[],failedVariants:new Set,activeVariantIndex:-1,lastVariantIndex:-1,sources:[],sourceIndex:0,failed:!1,blocked:!1,fadeToken:0,playToken:0,releaseTimer:0,fadeTimer:0,fadeFrame:0,fadeStartedAt:0,fadeDurationMs:0,fadeStartVolume:0,fadeTargetVolume:0,currentVolume:0,mediaNode:null,gainNode:null,webAudioFailed:!1};u.addEventListener("error",()=>{this.pendingId!==d.id&&(this.markVariantFailed(f,f.activeVariantIndex),!f.failed&&this.activeId===d.id?this.play(d.id,{fadeMs:500,force:!0,reason:"variant_error",newVariant:!0}):f.failed&&this.activeId===d.id&&this.playFallback({fadeMs:800,reason:"active_error"},d.id),this.updateButton())}),this.tracks[d.id]=f}this.updateButton()},buildSourceCandidates(l){return s.map(d=>`assets/audio/${l}.${d}`)},buildVariantSources(l){let d=[],u=f=>{!Array.isArray(f)||!f.length||d.push(f.slice())};if(Array.isArray(l.variants)&&l.variants.length)for(let f=0;f<l.variants.length;f++){let m=l.variants[f];if(typeof m=="string"&&m){u(this.buildSourceCandidates(m));continue}if(Array.isArray(m)&&m.length){u(m);continue}if(m&&typeof m=="object"){if(Array.isArray(m.sources)&&m.sources.length){u(m.sources);continue}typeof m.file=="string"&&m.file&&u(this.buildSourceCandidates(m.file))}}else if(Array.isArray(l.files)&&l.files.length)for(let f=0;f<l.files.length;f++)typeof l.files[f]=="string"&&l.files[f]&&u(this.buildSourceCandidates(l.files[f]));else Array.isArray(l.sources)&&l.sources.length&&u(l.sources);if(!d.length){let f=l.file||l.id;u(this.buildSourceCandidates(f))}return d},refillVariantBag(l){if(!l)return;let d=[];for(let u=0;u<l.variantSources.length;u++)l.failedVariants.has(u)||d.push(u);for(let u=d.length-1;u>0;u--){let f=Math.floor(Math.random()*(u+1)),m=d[u];d[u]=d[f],d[f]=m}if(d.length>1&&l.lastVariantIndex>=0&&d[0]===l.lastVariantIndex){let u=1+Math.floor(Math.random()*(d.length-1)),f=d[0];d[0]=d[u],d[u]=f}l.variantBag=d},markVariantFailed(l,d){!l||d===void 0||d===null||d<0||(l.failedVariants.add(d),l.variantBag&&l.variantBag.length&&(l.variantBag=l.variantBag.filter(u=>u!==d)),l.failed=l.failedVariants.size>=l.variantSources.length)},chooseVariant(l,d={}){return!l||!l.variantSources.length?!1:d.keepCurrent&&l.activeVariantIndex>=0&&!l.failedVariants.has(l.activeVariantIndex)?(l.sources=l.variantSources[l.activeVariantIndex],l.sourceIndex=Math.max(0,Math.min(l.sourceIndex||0,l.sources.length-1)),l.failed=!1,l.sources.length>0):((!l.variantBag||!l.variantBag.length)&&this.refillVariantBag(l),!l.variantBag||!l.variantBag.length?(l.failed=!0,!1):(l.activeVariantIndex=l.variantBag.shift(),l.lastVariantIndex=l.activeVariantIndex,l.sources=l.variantSources[l.activeVariantIndex],l.sourceIndex=0,l.failed=!1,this.cancelRelease(l),this.cancelFade(l),this.setOutputVolume(l,0),l.audio.pause(),l.audio.removeAttribute("src"),l.audio.load(),l.sources.length>0))},start(l="game_start"){this.started=!0,this.suspended=!1,this.ducked=!1,this.outcome=null,this.pendingId=null,this.decisionTimer=0,this.recentIds=[],this.setSignals(this.readSignals()),this.resumeMixer(),this.fadeOutAll(0,!0),this.play(i,{fadeMs:900,force:!0,reason:l})},update(l){if(!this.started||this.outcome||this.muted||this.suspended||!n.gameState||!n.gameState.running||n.gameState.paused||(this.decisionTimer-=l,this.decisionTimer>0))return;this.decisionTimer=2.25;let d=this.readSignals();this.setSignals(d);let u=this.chooseTrack(d,{reason:"flow"});u&&u!==this.activeId?this.play(u,{reason:"flow"}):this.refreshActiveVolume()},setSignals(l){this.signals=Object.assign({},this.signals,l||{})},setScene(l,d="scene"){let u=this.chooseScene(l);return u?this.play(u,{fadeMs:850,force:!0,reason:d}):!1},setOutcome(l){this.outcome=l?"victory":"defeat",this.ducked=!1,this.play(l?"victoryCanvas":"erasedPages",{fadeMs:1400,force:!0,reason:this.outcome})},play(l,d={}){let u=this.tracks[l];if(!u||u.failed)return this.playFallback(d,l);if(this.pendingId===l)return!0;let f=d.fadeMs===void 0?this.fadeMs:d.fadeMs;if(!d.newVariant&&this.activeId===l&&!u.audio.paused)return this.refreshActiveVolume(),this.updateButton(),!0;if(!d.force&&!this.canSwitchTo(u))return!1;if(this.muted||this.suspended)return this.activeId=l,this.pendingId=null,this.transitionToken++,this.fadeOutAll(0,!0),this.updateButton(),!1;let m=++this.transitionToken,x=this.pendingId&&this.pendingId!==l?this.tracks[this.pendingId]:null;this.pendingId=null,x&&x!==u&&x.config.id!==this.activeId&&(this.cancelEntryStart(x),this.fadeOut(x,Math.min(300,f||300),!0)),this.resumeMixer();let g=this.activeId&&this.activeId!==l?this.tracks[this.activeId]:null;g&&!g.audio.paused&&this.fadeTo(g,this.targetVolume(g),Math.min(500,f||500));let p=d.newVariant===void 0?this.activeId!==l:!!d.newVariant;return this.pendingId=l,this.startEntry(u,{newVariant:p}).then(T=>{if(this.transitionToken!==m||this.pendingId!==l){u.config.id!==this.activeId&&this.fadeOut(u,Math.min(250,f||250),!0);return}if(!T){this.pendingId===l&&(this.pendingId=null),this.playFallback(d,l);return}this.pendingId=null,this.activeId=l,this.lastSwitchAt=n.globalTime,this.rememberTrack(l),this.cancelRelease(u),this.fadeTo(u,this.targetVolume(u),f),g&&this.fadeOut(g,f,!0),this.updateButton()}),this.updateButton(),!0},toggleMute(){this.muted=!this.muted;try{localStorage.setItem(t,this.muted?"1":"0")}catch{}this.muted?(this.transitionToken++,this.pendingId=null,this.fadeOutAll(350,!0)):this.started&&this.activeId?(this.resumeMixer(),this.play(this.activeId,{fadeMs:650,force:!0,reason:"unmute"})):this.started&&(this.resumeMixer(),this.play(this.chooseTrack(this.readSignals(),{force:!0,reason:"unmute"})||i,{fadeMs:650,force:!0,reason:"unmute"})),this.updateButton()},setDucked(l){if(this.ducked=!!l,this.ducked&&this.started&&!this.suspended&&!this.muted){if(this.setScene("menu","pause"))return}else!this.ducked&&this.started&&!this.outcome&&(this.decisionTimer=0,this.update(0));this.refreshActiveVolume()},suspendForPage(){!this.started||this.suspended||(this.suspended=!0,this.transitionToken++,this.pendingId=null,this.fadeOutAll(0,!0))},resumeForPage(){this.suspended&&(this.suspended=!1,this.started&&this.activeId&&!this.muted&&(this.resumeMixer(),this.play(this.activeId,{fadeMs:700,force:!0,reason:"page_visible"})))},startEntry(l,d={}){return new Promise(u=>{if(!l||l.failed||this.muted||this.suspended){u(!1);return}let f=++l.playToken;if(this.cancelRelease(l),this.resumeMixer(),!this.chooseVariant(l,{keepCurrent:!d.newVariant})){l.failed=!0,u(!1);return}if(!this.ensureSource(l)&&(this.markVariantFailed(l,l.activeVariantIndex),!this.chooseVariant(l,{keepCurrent:!1})||!this.ensureSource(l))){l.failed=!0,u(!1);return}let m=l.audio,x=!1,g=!1,p=b=>{if(!x){if(x=!0,m.removeEventListener("error",A),l.playToken!==f){u(!1);return}u(b)}},T=()=>{if(!(x||g)){if(g=!0,m.removeEventListener("error",A),l.playToken!==f){p(!1);return}this.advanceSource(l)?(x=!0,this.startEntry(l,{newVariant:!1}).then(u)):(l.failed=!0,p(!1))}},A=()=>T();m.addEventListener("error",A),m.loop=l.config.loop!==!1,this.prepareOutput(l),this.setOutputVolume(l,0);let v=null;try{v=m.play()}catch{T();return}v&&typeof v.then=="function"?v.then(()=>{l.failed=!1,l.blocked=!1,p(!0)}).catch(b=>{b&&b.name==="NotAllowedError"?(l.blocked=!0,p(!1)):T()}):setTimeout(()=>p(!m.paused||m.readyState>=2),120),setTimeout(()=>{!x&&m.readyState>=2&&!m.error&&p(!0)},2400)})},ensureSource(l){return!l||!l.sources.length?!1:(this.cancelRelease(l),l.audio.getAttribute("src")||(l.sourceIndex=Math.max(0,Math.min(l.sourceIndex||0,l.sources.length-1)),l.audio.src=l.sources[l.sourceIndex],l.audio.load()),!0)},advanceSource(l){return l?(l.sourceIndex=(l.sourceIndex||0)+1,this.cancelRelease(l),this.cancelFade(l),this.setOutputVolume(l,0),l.audio.pause(),l.audio.removeAttribute("src"),l.audio.load(),l.sourceIndex<l.sources.length?(l.audio.src=l.sources[l.sourceIndex],l.audio.load(),!0):(this.markVariantFailed(l,l.activeVariantIndex),this.chooseVariant(l,{keepCurrent:!1})?this.ensureSource(l)?!0:(this.markVariantFailed(l,l.activeVariantIndex),this.advanceSource(l)):!1)):!1},playFallback(l={},d=""){let u=this.activeId?this.tracks[this.activeId]:null;if(!l.force&&u&&u.config.id!==d&&!u.failed&&!u.audio.paused)return this.refreshActiveVolume(),!1;let f=this.tracks[i]&&!this.tracks[i].failed?i:"";if(!f)for(let m=0;m<c.length;m++){let x=c[m].id;if(x!==d&&this.tracks[x]&&!this.tracks[x].failed){f=x;break}}return!f||f===d?!1:this.play(f,Object.assign({},l,{force:!0,reason:"fallback"}))},canSwitchTo(l){if(!l||!this.activeId||this.activeId===l.config.id||l.config.urgent||l.config.outcome)return!0;let d=this.tracks[this.activeId],u=d&&d.config&&d.config.minPlaySec||24;return n.globalTime-this.lastSwitchAt>=u},chooseTrack(l,d={}){if(this.outcome)return this.outcome==="victory"?"victoryCanvas":"erasedPages";let u="",f=-1/0;for(let m=0;m<c.length;m++){let x=c[m],g=this.tracks[x.id];if(!g||g.failed||g.blocked||x.outcome||x.scene==="menu")continue;let p=this.scoreTrack(x,l);x.scene==="opening"&&l.elapsed<38&&(p+=26),x.scene==="opening"&&l.elapsed>=55&&(p-=40),x.scene==="opening"&&l.activeFight&&(p-=34),x.urgent&&l.tension>.74&&(p+=35),this.recentIds.includes(x.id)&&(p-=34-Math.min(18,this.recentIds.indexOf(x.id)*6)),this.activeId===x.id&&(p+=10),d.force&&x.id===i&&(p+=4),p>f&&(f=p,u=x.id)}return u||i},chooseScene(l){let d="",u=-1/0;for(let f=0;f<c.length;f++){let m=c[f],x=this.tracks[m.id];if(!x||x.failed||x.blocked||m.scene!==l)continue;let g=(m.priority||0)-(this.recentIds.includes(m.id)?20:0);g>u&&(u=g,d=m.id)}return d||i},scoreTrack(l,d){let u=d.maxAge||0,f=d.tension||0,m=l.ageMin===void 0?0:l.ageMin,x=l.ageMax===void 0?Yt.length-1:l.ageMax,g=l.tensionMin===void 0?0:l.tensionMin,p=l.tensionMax===void 0?1:l.tensionMax;if(u<m-.01||u>x+.01)return-1/0;let T=(m+x)/2,A=(g+p)/2,v=l.priority||0;if(v-=Math.abs(u-T)*8,v-=Math.max(0,g-f,f-p)*95,v-=Math.abs(f-A)*18,d.specialActive&&(l.roles||[]).some(b=>b==="specials"||b==="base-pressure")&&(v+=10),d.baseDanger>.58&&(l.scene==="siege"||l.urgent)&&(v+=18),d.troopPressure>.58&&(l.scene==="battle"||l.scene==="pressure")&&(v+=9),l.classicBattle)if(d.activeFight){let b=u>=3?4:30;v+=b+this.clamp((d.clash||0)*10+(d.baseDanger||0)*8,0,14)}else v-=24;return d.activeFight&&(l.id==="graphiteSkirmish"||l.id==="inklineAdvance")&&(v-=16),v},readSignals(){if(!n.gameState||!n.gameState.player||!n.gameState.enemy)return this.signals||{};let l=n.gameState.player,d=n.gameState.enemy,u=l.maxHp?Math.max(0,l.hp/l.maxHp):1,f=d.maxHp?Math.max(0,d.hp/d.maxHp):1,m=0,x=0,g=0,p=ie,T=he-ie,A=0,v=0;if(n.gameState.units&&n.gameState.units.pool)for(let U=0;U<n.gameState.units.pool.length;U++){let F=n.gameState.units.pool[U];F.active&&(m++,F.team===1?(x++,p=Math.max(p,F.x||ie),v+=this.clamp((he-ie-(F.x||0))/280,0,1)<1?1-this.clamp((he-ie-(F.x||0))/280,0,1):0):(g++,T=Math.min(T,F.x||he-ie),A+=this.clamp(((F.x||he)-ie)/280,0,1)<1?1-this.clamp(((F.x||he)-ie)/280,0,1):0))}let b=Math.max(0,T-p),M=this.clamp(1-b/560,0,1),R=this.clamp(Math.max(A,v)/3,0,1),y=1-Math.min(u,f),E=this.clamp(m/16+Math.abs(x-g)/18,0,1),I=this.clamp(m*.035+M*.24+R*.36+y*.32+(n.gameState.specialActive?.18:0)+(n.gameState.screenShake||0)*.18,0,1);return{elapsed:n.globalTime,playerAge:l.age||0,enemyAge:d.age||0,maxAge:Math.max(l.age||0,d.age||0),activeUnits:m,playerUnits:x,enemyUnits:g,troopPressure:E,playerHpRatio:u,enemyHpRatio:f,baseDanger:R,clash:M,activeFight:m>=2&&(M>.08||R>.03||E>.12),tension:I,specialActive:!!n.gameState.specialActive,library:e}},rememberTrack(l){l&&(this.recentIds=[l].concat(this.recentIds.filter(d=>d!==l)).slice(0,5))},refreshActiveVolume(){let l=this.activeId?this.tracks[this.activeId]:null;l&&!this.muted&&!this.suspended&&!l.audio.paused&&this.fadeTo(l,this.targetVolume(l),500)},fadeOut(l,d,u){l&&this.fadeTo(l,0,d,()=>{u&&(l.audio.pause(),this.scheduleRelease(l))})},fadeOutAll(l,d,u=""){for(let f in this.tracks){if(f===u)continue;let m=this.tracks[f];m&&((m.config.id!==this.activeId||this.muted||this.suspended)&&this.cancelEntryStart(m),(!m.audio.paused||this.currentOutputVolume(m)>.001)&&this.fadeOut(m,l,d))}},fadeTo(l,d,u,f){if(!l)return;let m=this.currentOutputVolume(l),x=Math.max(0,Math.min(1,d)),g=Math.max(0,u||0);this.cancelFade(l);let p=++l.fadeToken;if(l.fadeStartVolume=m,l.fadeTargetVolume=x,l.fadeStartedAt=performance.now(),l.fadeDurationMs=g,!g||Math.abs(m-x)<=.001){this.setOutputVolume(l,x),f&&f();return}if(this.prepareOutput(l)){let A=this.audioContext,v=l.gainNode.gain,b=A.currentTime;try{v.cancelScheduledValues(b),v.setValueAtTime(m,b),v.setValueCurveAtTime(this.buildEqualPowerCurve(m,x),b,Math.max(.016,g/1e3)),l.audio.volume=1,l.fadeTimer=setTimeout(()=>{l.fadeToken===p&&(this.setOutputVolume(l,x),f&&f())},g+60);return}catch{}}this.writeOutputVolume(l,m,!0);let T=A=>{if(l.fadeToken!==p)return;let v=Math.min(1,(A-l.fadeStartedAt)/g);this.writeOutputVolume(l,this.curveVolume(m,x,v),!1),v<1?l.fadeFrame=requestAnimationFrame(T):(this.setOutputVolume(l,x),f&&f())};l.fadeFrame=requestAnimationFrame(T)},cancelEntryStart(l){l&&l.playToken++},cancelFade(l){l&&(l.fadeToken++,l.fadeTimer&&clearTimeout(l.fadeTimer),l.fadeFrame&&cancelAnimationFrame(l.fadeFrame),l.fadeTimer=0,l.fadeFrame=0,l.fadeDurationMs=0)},scheduleRelease(l){l&&(this.cancelRelease(l),!(!this.muted&&!this.suspended&&(this.activeId===l.config.id||this.pendingId===l.config.id))&&(l.releaseTimer=setTimeout(()=>this.releaseEntry(l),this.idleReleaseMs)))},cancelRelease(l){!l||!l.releaseTimer||(clearTimeout(l.releaseTimer),l.releaseTimer=0)},releaseEntry(l){l&&(l.releaseTimer=0,!(!this.muted&&!this.suspended&&(this.activeId===l.config.id||this.pendingId===l.config.id))&&l.audio.paused&&(this.cancelFade(l),this.setOutputVolume(l,0),l.audio.removeAttribute("src"),l.audio.load()))},shouldUseElementMixer(){let l=navigator.userAgent||"";return!!window.LocalGemmaAndroid||/; wv\)/i.test(l)},getAudioContext(){if(this.audioContext||this.mixerUnavailable)return this.audioContext;let l=window.AudioContext||window.webkitAudioContext;if(!l)return this.mixerUnavailable=!0,null;try{this.audioContext=new l,this.masterGainNode=this.audioContext.createGain(),this.masterGainNode.gain.value=1,this.masterGainNode.connect(this.audioContext.destination)}catch{this.mixerUnavailable=!0,this.audioContext=null,this.masterGainNode=null}return this.audioContext},resumeMixer(){let l=this.getAudioContext();if(!(!l||l.state!=="suspended"))try{let d=l.resume();d&&typeof d.catch=="function"&&d.catch(()=>{})}catch{}},prepareOutput(l){if(!l)return!1;if(l.gainNode)return l.audio.volume=1,!0;if(l.webAudioFailed)return!1;let d=this.getAudioContext();if(!d||!this.masterGainNode)return!1;try{return l.mediaNode=d.createMediaElementSource(l.audio),l.gainNode=d.createGain(),l.gainNode.gain.value=l.currentVolume||0,l.mediaNode.connect(l.gainNode),l.gainNode.connect(this.masterGainNode),l.audio.volume=1,!0}catch{return l.webAudioFailed=!0,l.mediaNode=null,l.gainNode=null,l.audio.volume=l.currentVolume||0,!1}},setOutputVolume(l,d){l&&(this.cancelFade(l),l.fadeStartVolume=d,l.fadeTargetVolume=d,this.writeOutputVolume(l,d,!0))},writeOutputVolume(l,d,u){if(!l)return;let f=this.clamp(d,0,1);if(l.currentVolume=f,l.gainNode&&this.audioContext)try{let m=l.gainNode.gain,x=this.audioContext.currentTime;u&&m.cancelScheduledValues(x),m.setValueAtTime(f,x),l.audio.volume=1;return}catch{}l.audio.volume=f},currentOutputVolume(l){if(!l)return 0;if(l.fadeDurationMs>0){let d=this.clamp((performance.now()-l.fadeStartedAt)/l.fadeDurationMs,0,1);return this.curveVolume(l.fadeStartVolume,l.fadeTargetVolume,d)}return typeof l.currentVolume=="number"?l.currentVolume:l.audio.volume||0},curveVolume(l,d,u){let f=this.clamp(u,0,1);return d>=l?l+(d-l)*Math.sin(f*Math.PI/2):d+(l-d)*Math.cos(f*Math.PI/2)},buildEqualPowerCurve(l,d){let u=new Float32Array(96);for(let f=0;f<u.length;f++)u[f]=this.curveVolume(l,d,f/(u.length-1));return u},targetVolume(l){let d=this.masterVolume*(l.config.volume||1);return this.ducked&&(d*=.45),Math.max(0,Math.min(1,d))},clamp(l,d,u){return Math.max(d,Math.min(u,l))},updateButton(){let l=document.getElementById("btn-music");if(!l)return;let d=this.activeId&&this.tracks[this.activeId]?this.tracks[this.activeId].config.title:"Music";l.classList.toggle("music-muted",this.muted),l.innerHTML=this.muted?"&#128263;":"&#128266;",l.title=this.muted?"Music off":`Music on: ${d}`,l.setAttribute("aria-label",this.muted?"Turn music on":"Turn music off")}}}}var bh="ink-battle-tabletop-v1",Cl=document.querySelector("#tabletop"),dy=document.querySelector("#status"),Pn=document.querySelector("#enter-mr"),Si=document.querySelector("#welcome"),Il=Object.freeze({scale:.2,surfaceHeight:.75,distance:.6}),bf=()=>.13*Lt.table.scale,Lt,qn,We,ra,aa,Pl,ds=!1,Nl=!1,Ul=!1,Ll=null,Tf=0,Dl=!1,Th=0,rr=[],Ef="",oa=[],Mi={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0};function wf(){let n=[...oa].sort((t,e)=>t-e);return{...Mi,recentSamples:n.length,frameIntervalMedianMs:n[Math.floor((n.length-1)*.5)]??null,frameIntervalP95Ms:n[Math.floor((n.length-1)*.95)]??null}}var Eh={gameState:null,globalTime:0},on=Sf(Eh).MusicDirector,Af=null;function Cf(n){Eh.globalTime=(n?.tick||0)/60,Eh.gameState=n?{...n,units:{pool:n.units},specialActive:n.specials.length>0}:null}var se=new ml({onEvent:n=>{if(n.type==="message"&&je(n.text),n.type==="start"&&(Cf(se.observe()),on.start(),Si.classList.add("compact"),je("Drop across the green rally strip to choose a route. Pinch a deployed troop to guide it.")),n.type==="drop"&&n.result.ok&&(Lt.labelClock=0,la()),n.type==="drop"&&qn?.feedback(n.token.owner,n.result.ok),n.type==="quality"&&je(`Appearance: ${n.quality}. Lift the feather to change it.`),n.type==="music"&&(on.toggleMute(),je(on.muted?"Music off.":"Music on.")),n.type==="menu"&&(qn?.cancelAll(),on.suspendForPage(),Si.classList.remove("compact"),je("Choose a difficulty seal for a new battle."),la()),n.type==="finish"){if(n.winner===0?on.suspendForPage():on.setOutcome(n.winner===1),je(n.winner===0?"A draw. Drop another seal for a new battle.":n.winner===1?"Victory! Drop another seal to begin again.":"Defeat. Drop another seal for a new battle."),n.winner===1)try{let t=JSON.parse(localStorage.getItem("aow_sketch_progress")||'{"beaten":[]}');t.beaten=[...new Set([...t.beaten||[],se.observe().difficulty])],localStorage.setItem("aow_sketch_progress",JSON.stringify(t))}catch{}la()}n.type==="exit"&&(We?We.end().catch(()=>{}):Si.classList.remove("compact"))}});function je(n){Lt?.message(n),n!==Ef&&(dy.textContent=n,Ef=n)}function la(){try{if(!se.session){localStorage.removeItem(bh);return}let n=JSON.stringify({checkpoint:se.session.checkpoint(),speed:se.speed,quality:se.quality});n.length<2e6&&localStorage.setItem(bh,n)}catch{}}function Yn(){qn?.cancelAll(),se.pauseForInterruption(),on.suspendForPage(),Ll=null,la(),se.session?.running&&je("Paused. Lift the hourglass and drop it onto the page to resume.")}function Fl(){Th++,aa?.delete(),aa=null,Pl=null}function If(){We||(Lt.table.position={x:0,y:0,z:0},Lt.table.rotation={x:0,y:0,z:0,w:1},Lt.table.scale=1,Lt.syncTable(),Lt.frameBook())}async function fy(){if(!We){Pn.disabled=!0,on.resumeMixer();try{let n=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor"],optionalFeatures:["hand-tracking","hit-test","anchors"]});We=n,Nl=!1,ds=!0,Ul=!1,Yn(),oa=[],Mi={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0},n.addEventListener("end",()=>{Yn(),qn.unbind(),ra?.cancel(),ra=null,Fl(),We=null,Lt.reticle.visible=!1,Lt.immersive(!1),If(),Pn.disabled=!1,Si.hidden=!1,je("Back at the book. Your battle is saved and paused.")},{once:!0}),n.addEventListener("visibilitychange",()=>{n.visibilityState!=="visible"&&Yn()}),await Lt.renderer.xr.setSession(n),Lt.immersive(!0),qn.bind(n),Si.hidden=!0,Lt.renderer.xr.getReferenceSpace().addEventListener("reset",()=>{Yn(),Fl(),Nl=!1,ds=!0});try{let e=await n.requestReferenceSpace("viewer");if(n.requestHitTestSource){let i=await n.requestHitTestSource({space:e});We===n?ra=i:i.cancel()}}catch{}if(We!==n)return;n.supportedFrameRates?.includes(72)&&n.updateTargetFrameRate(72).catch(()=>{}),je("Look at a table, then pinch or press the trigger to place. Rings let you carry and resize.")}catch(n){We&&await We.end().catch(()=>{}),We=null,Pn.disabled=!1,je(`Mixed reality could not start (${n.name||"browser error"}). You can still play on this screen.`)}}}function py(n,t){let e=n.getViewerPose(t);if(!e)return Dl||(Yn(),Dl=!0),!1;if(Dl=!1,!Nl){let s=e.transform.position,r=new C(0,0,-1).applyQuaternion(e.transform.orientation);r.y=0,r.normalize(),Lt.table.scale=Il.scale,Lt.table.position={x:s.x+r.x*Il.distance,y:Il.surfaceHeight+bf(),z:s.z+r.z*Il.distance},Lt.table.rotation=ir(new ae().setFromAxisAngle(new C(0,1,0),Math.atan2(-r.x,-r.z))),Nl=!0,Lt.syncTable()}let i;if(ds&&ra){i=n.getHitTestResults(ra).find(r=>{let a=r.getPose(t);return a&&a.transform.matrix[5]>.85});let s=i?.getPose(t);Lt.reticle.visible=!!s,s&&Lt.reticle.matrix.fromArray(s.transform.matrix)}if(Ul){if(Ul=!1,ds=!1,Lt.reticle.visible=!1,i){let s=i.getPose(t);if(Lt.table.position=Rf(s.transform.position),Lt.table.position.y+=bf(),Lt.syncTable(),i.createAnchor){let r=We,a=Th;i.createAnchor().then(o=>{if(We!==r||!r||Th!==a||qn.interaction.gesture.grips.size){o.delete();return}Fl(),aa=o,Pl=new Wt().fromArray(s.transform.matrix).invert().multiply(Lt.root.matrixWorld)}).catch(()=>{})}}je(se.session?"Placed. Drop the hourglass onto the page to resume.":"Placed. Lift a difficulty seal and drop it onto the page to begin.")}if(aa&&Pl){let s=n.getPose(aa.anchorSpace,t);if(s){let r=new Wt().fromArray(s.transform.matrix).multiply(Pl),a=new C,o=new ae,c=new C;r.decompose(a,o,c),Lt.table.position=Rf(a),Lt.table.rotation=ir(o)}}return!0}var Rf=n=>({x:n.x,y:n.y,z:n.z});async function my(){matchMedia("(max-width: 650px), (max-height: 450px)").matches&&Si.classList.add("compact");try{Lt=new El(Cl,se)}catch(t){console.error("Tabletop initialization failed:",t),Si.classList.remove("compact"),je("3D graphics are unavailable in this browser. You can still play the classic game."),Pn.disabled=!0;return}qn=new Rl(Lt,se,{onCarry:()=>{ds=!1,Lt.reticle.visible=!1,Fl()},onPlace:()=>ds?(Ul=!0,!0):!1}),on.init(),Cl.addEventListener("pointerdown",()=>on.resumeMixer());try{let t=JSON.parse(localStorage.getItem(bh)||"null");t?.checkpoint&&(se.session=cs.restore(t.checkpoint),se.session.running&&se.session.pause(!0),se.speed=[1,2,3].includes(t.speed)?t.speed:1,se.quality=["mist","clear","comfort"].includes(t.quality)?t.quality:"mist",je(se.session.running?se.observe().battlefield==="tabletop"?"Saved battle restored. Drop the hourglass onto the page to resume.":"Saved battle keeps its original rules. Resume with the hourglass, or use the new page for wider battles and troop guidance.":"Your last battle ended. Drop a difficulty seal for a new page."))}catch{je("The saved battle could not be restored. Start with a difficulty seal.")}await document.fonts.ready,Pn.addEventListener("click",fy),document.querySelector("#reset-view").addEventListener("click",If),document.querySelector("#toggle-help").addEventListener("click",()=>Si.classList.toggle("compact")),document.querySelector("#save-report").addEventListener("click",()=>{let t=se.observe(),e={version:"2.4.0",date:new Date().toISOString(),browser:navigator.userAgent,quality:se.quality,age:t?.player.age,difficulty:t?.difficulty,render:Lt.stats(),xr:wf()},i=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=i,s.download="ink-battle-quest-report.json",s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}),window.addEventListener("resize",()=>Lt.resize()),window.visualViewport?.addEventListener("resize",()=>Lt.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&Yn()}),window.addEventListener("pagehide",Yn),Cl.addEventListener("webglcontextlost",t=>{t.preventDefault(),Yn(),je("Graphics were interrupted. Reload to restore the paused battle.")});let n=setTimeout(()=>{Pn.textContent="Play here \xB7 MR not detected yet"},3e3);(async()=>{try{await navigator.xr?.isSessionSupported("immersive-ar")?(Pn.disabled=!1,Pn.textContent="Enter mixed reality"):(Pn.textContent="Open in Quest Browser for MR",Pn.disabled=!0)}catch{Pn.textContent="MR unavailable \xB7 play on this screen",Pn.disabled=!0}finally{clearTimeout(n)}})(),Lt.update(se.observe(),[],0),Lt.render(),Lt.renderer.setAnimationLoop((t,e)=>{let i=Ll===null?0:Math.max(0,(t-Ll)/1e3);if(Ll=t,i>0&&i<.5&&(rr.push(i*1e3),rr.length>360&&rr.shift()),e&&We){let r=Lt.renderer.xr.getReferenceSpace();We.visibilityState==="visible"&&py(e,r)&&qn.xr(e,r)}se.update(i),qn.update(Math.min(i,.1));let s=se.observe();if(Cf(s),s&&s.paused!==Af&&(Af=s.paused,s.paused||(on.started||on.start(),on.resumeForPage()),on.setDucked(s.paused)),on.update(Math.min(i,.1)),Lt.update(s,qn.interaction.visuals(),Math.min(i,.1)),Lt.render(),e&&We?.visibilityState==="visible"&&!Dl){let r=Lt.stats();Mi.frames++,Mi.peakUnits=Math.max(Mi.peakUnits,s?.units.length||0),Mi.peakDrawCalls=Math.max(Mi.peakDrawCalls,r.calls),Mi.peakTriangles=Math.max(Mi.peakTriangles,r.triangles),i>0&&i<.5&&(oa.push(i*1e3),oa.length>720&&oa.shift())}t-Tf>1e4&&(Tf=t,la())}),window.InkTabletop=Object.freeze({observe:()=>se.observe(),pause:Yn,replay:()=>se.session?.replay(),diagnostics:()=>({...Lt.stats(),xr:!!We,xrMeasurements:wf(),placing:ds,quality:se.quality,holds:se.holds.size,flights:qn.interaction.flights.size,table:structuredClone(Lt.table),camera:{position:Lt.camera.position.toArray(),target:Lt.controls.target.toArray(),distance:Lt.camera.position.distanceTo(Lt.controls.target)},frameP95:rr.length?[...rr].sort((t,e)=>t-e)[Math.floor((rr.length-1)*.95)]:null}),project:t=>{Lt.syncTable();let e=new C(t.x,t.y||0,t.z);Lt.root.localToWorld(e),e.project(Lt.camera);let i=Cl.getBoundingClientRect();return{x:i.left+(e.x+1)/2*i.width,y:i.top+(1-e.y)/2*i.height}},restore:t=>{Yn(),se.session=cs.restore(t),se.session.pause(!0),Lt.labelClock=0},checkpoint:()=>se.session?.checkpoint()}),document.body.dataset.ready="true","serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").catch(()=>{})}my().catch(n=>{Yn(),Si.classList.remove("compact"),je(`The tabletop could not load (${n.name}). Reload or open the classic game.`)});})();
