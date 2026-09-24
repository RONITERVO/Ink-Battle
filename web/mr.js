(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cu=0,fc=1,hu=2;var Ur=1,uu=2,Hs=3,Bn=0,ni=1,He=2,Ki=0,Gs=1,pc=2,mc=3,gc=4,du=5;var is=100,fu=101,pu=102,mu=103,gu=104,_u=200,xu=201,yu=202,vu=203,_c=204,xc=205,Mu=206,Su=207,bu=208,Tu=209,Eu=210,wu=211,Au=212,Ru=213,Cu=214,Da=0,Na=1,Ua=2,Is=3,Fa=4,Oa=5,Ba=6,ka=7,yc=0,Iu=1,Pu=2,ki=0,vc=1,Mc=2,Sc=3,bc=4,Tc=5,Ec=6,wc=7;var Ac=300,kn=301,ns=302,ho=303,uo=304,Fr=306,Ps=1e3,Ji=1001,za=1002,ke=1003,Lu=1004;var Or=1005;var Pe=1006,fo=1007;var Qi=1008;var ui=1009,Rc=1010,Cc=1011,Ws=1012,po=1013,zi=1014,wi=1015,Vi=1016,mo=1017,go=1018,Xs=1020,Ic=35902,Pc=35899,Lc=1021,Dc=1022,Ai=1023,$i=1026,zn=1027,_o=1028,xo=1029,Vn=1030,yo=1031;var vo=1033,Br=33776,kr=33777,zr=33778,Vr=33779,Mo=35840,So=35841,bo=35842,To=35843,Eo=36196,wo=37492,Ao=37496,Ro=37488,Co=37489,Hr=37490,Io=37491,Po=37808,Lo=37809,Do=37810,No=37811,Uo=37812,Fo=37813,Oo=37814,Bo=37815,ko=37816,zo=37817,Vo=37818,Ho=37819,Go=37820,Wo=37821,Xo=36492,qo=36494,Yo=36495,Zo=36283,Jo=36284,Gr=36285,$o=36286;var fr=2300,Va=2301,Pa=2302,rc=2303,ac=2400,oc=2401,lc=2402;var Du=3200;var Nc=0,Nu=1,fn="",Ce="srgb",pr="srgb-linear",mr="linear",ee="srgb";var La=7680;var Uu=519,Fu=512,Ou=513,Bu=514,jo=515,ku=516,zu=517,Ko=518,Vu=519,Hu=35044,qs=35048;var Uc="300 es",Ui=2e3,Ls=2001;function Uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=gr("canvas");return i.style.display="block",i}var Dh={},Ds=null;function Fc(...i){let t="THREE."+i.shift();Ds?Ds("log",t,...i):console.log(t,...i)}function Wu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=Wu(i);let t="THREE."+i.shift();if(Ds)Ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=Wu(i);let t="THREE."+i.shift();if(Ds)Ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function jn(...i){let t=i.join(" ");t in Dh||(Dh[t]=!0,Rt(...i))}function Xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qu={[Da]:Na,[Ua]:Ba,[Fa]:ka,[Is]:Oa,[Na]:Da,[Ba]:Ua,[ka]:Fa,[Oa]:Is},Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=1234567,ur=Math.PI/180,Ns=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Oc(i,t){return(i%t+t)%t}function Of(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bf(i,t,e){return i!==t?(e-i)/(t-i):0}function dr(i,t,e){return(1-e)*i+e*t}function kf(i,t,e,n){return dr(i,t,1-Math.exp(-e*n))}function zf(i,t=1){return t-Math.abs(Oc(i,t*2)-t)}function Vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wf(i,t){return i+Math.random()*(t-i)}function Xf(i){return i*(.5-Math.random())}function qf(i){i!==void 0&&(Nh=i);let t=Nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yf(i){return i*ur}function Zf(i){return i*Ns}function Jf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),l=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*l,c*d,c*u,o*h);break;case"YZY":i.set(c*u,o*l,c*d,o*h);break;case"ZXZ":i.set(c*d,c*u,o*l,o*h);break;case"XZX":i.set(o*l,c*m,c*f,o*h);break;case"YXY":i.set(c*f,o*l,c*m,o*h);break;case"ZYZ":i.set(c*m,c*f,o*l,o*h);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ss={DEG2RAD:ur,RAD2DEG:Ns,generateUUID:Ys,clamp:Vt,euclideanModulo:Oc,mapLinear:Of,inverseLerp:Bf,lerp:dr,damp:kf,pingpong:zf,smoothstep:Vf,smootherstep:Hf,randInt:Gf,randFloat:Wf,randFloatSpread:Xf,seededRandom:qf,degToRad:Yf,radToDeg:Zf,isPowerOfTwo:Jf,ceilPowerOfTwo:$f,floorPowerOfTwo:jf,setQuaternionFromProperEuler:Kf,normalize:Qe,denormalize:Rs},It=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ee=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||c!==u||h!==f||l!==m){let g=c*u+h*f+l*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let T=Math.acos(g),A=Math.sin(T);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A,c=c*p+u*o,h=h*p+f*o,l=l*p+m*o,d=d*p+x*o}else{c=c*p+u*o,h=h*p+f*o,l=l*p+m*o,d=d*p+x*o;let T=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=T,h*=T,l*=T,d*=T}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+l*d+c*f-h*u,t[e+1]=c*m+l*u+h*d-o*f,t[e+2]=h*m+l*f+o*u-c*d,t[e+3]=l*m-o*d-c*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*l*d+h*f*m,this._y=h*f*d-u*l*m,this._z=h*l*m+u*f*d,this._w=h*l*d-u*f*m;break;case"YXZ":this._x=u*l*d+h*f*m,this._y=h*f*d-u*l*m,this._z=h*l*m-u*f*d,this._w=h*l*d+u*f*m;break;case"ZXY":this._x=u*l*d-h*f*m,this._y=h*f*d+u*l*m,this._z=h*l*m+u*f*d,this._w=h*l*d-u*f*m;break;case"ZYX":this._x=u*l*d-h*f*m,this._y=h*f*d+u*l*m,this._z=h*l*m-u*f*d,this._w=h*l*d+u*f*m;break;case"YZX":this._x=u*l*d+h*f*m,this._y=h*f*d+u*l*m,this._z=h*l*m-u*f*d,this._w=h*l*d-u*f*m;break;case"XZY":this._x=u*l*d-h*f*m,this._y=h*f*d-u*l*m,this._z=h*l*m+u*f*d,this._w=h*l*d+u*f*m;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(l-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,e=Math.sin(e*h)/l,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),l=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*l,this.y=n+c*l+o*h-r*d,this.z=s+c*d+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new C,Uh=new Ee,Dt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],T=s[1],A=s[4],S=s[7],b=s[2],v=s[5],R=s[8];return r[0]=a*x+o*T+c*b,r[3]=a*g+o*A+c*v,r[6]=a*p+o*S+c*R,r[1]=h*x+l*T+d*b,r[4]=h*g+l*A+d*v,r[7]=h*p+l*S+d*R,r[2]=u*x+f*T+m*b,r[5]=u*g+f*A+m*v,r[8]=u*p+f*S+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*a-o*h,u=o*c-l*r,f=h*r-a*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*h-l*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(l*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return jn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return jn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return jn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bl=new Dt,Fh=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){let i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fn?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return jn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return jn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:t,whitePoint:n,transfer:mr,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var qt=Qf();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=gr("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tp=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kl(s[a].image)):r.push(kl(s[a]))}else r=kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var ep=0,zl=new C,ii=class i extends Fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ji,s=Ji,r=Pe,a=Qi,o=Ai,c=ui,h=i.DEFAULT_ANISOTROPY,l=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ys(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Ac;ii.DEFAULT_ANISOTROPY=1;var ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(h+1)/2,S=(f+1)/2,b=(p+1)/2,v=(l+u)/4,R=(d+x)/4,y=(m+g)/4;return A>S&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=v/n,r=R/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=v/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=y/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-l)*(u-l));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(d-x)/T,this.z=(u-l)/T,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ii(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_r=class extends ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,h,l,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,l,d,u,f,m,x,g)}set(t,e,n,s,r,a,o,c,h,l,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*l,f=a*d,m=o*l,x=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=f+m*h,e[5]=u-x*h,e[9]=-o*c,e[2]=x-u*h,e[6]=m+f*h,e[10]=a*c}else if(t.order==="YXZ"){let u=c*l,f=c*d,m=h*l,x=h*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*l,f=c*d,m=h*l,x=h*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*l,e[9]=x-u*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*l,f=a*d,m=o*l,x=o*d;e[0]=c*l,e[4]=m*h-f,e[8]=u*h+x,e[1]=c*d,e[5]=x*h+u,e[9]=f*h-m,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*h,m=o*c,x=o*h;e[0]=c*l,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*c,f=a*h,m=o*c,x=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+x,e[5]=a*l,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*l,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,np)}lookAt(t,e,n){let s=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),En.crossVectors(n,mi),En.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),En.crossVectors(n,mi)),En.normalize(),ca.crossVectors(mi,En),s[0]=En.x,s[4]=ca.x,s[8]=mi.x,s[1]=En.y,s[5]=ca.y,s[9]=mi.y,s[2]=En.z,s[6]=ca.z,s[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],T=n[3],A=n[7],S=n[11],b=n[15],v=s[0],R=s[4],y=s[8],E=s[12],I=s[1],U=s[5],F=s[9],V=s[13],D=s[2],H=s[6],Z=s[10],J=s[14],it=s[3],X=s[7],Q=s[11],et=s[15];return r[0]=a*v+o*I+c*D+h*it,r[4]=a*R+o*U+c*H+h*X,r[8]=a*y+o*F+c*Z+h*Q,r[12]=a*E+o*V+c*J+h*et,r[1]=l*v+d*I+u*D+f*it,r[5]=l*R+d*U+u*H+f*X,r[9]=l*y+d*F+u*Z+f*Q,r[13]=l*E+d*V+u*J+f*et,r[2]=m*v+x*I+g*D+p*it,r[6]=m*R+x*U+g*H+p*X,r[10]=m*y+x*F+g*Z+p*Q,r[14]=m*E+x*V+g*J+p*et,r[3]=T*v+A*I+S*D+b*it,r[7]=T*R+A*U+S*H+b*X,r[11]=T*y+A*F+S*Z+b*Q,r[15]=T*E+A*V+S*J+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],T=c*f-h*u,A=o*f-h*d,S=o*u-c*d,b=a*f-h*l,v=a*u-c*l,R=a*d-o*l;return e*(x*T-g*A+p*S)-n*(m*T-g*b+p*v)+s*(m*A-x*b+p*R)-r*(m*S-x*v+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],l=t[10];return e*(a*l-o*h)-n*(r*l-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],T=e*o-n*a,A=e*c-s*a,S=e*h-r*a,b=n*c-s*o,v=n*h-r*o,R=s*h-r*c,y=l*x-d*m,E=l*g-u*m,I=l*p-f*m,U=d*g-u*x,F=d*p-f*x,V=u*p-f*g,D=T*V-A*F+S*U+b*I-v*E+R*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return t[0]=(o*V-c*F+h*U)*H,t[1]=(s*F-n*V-r*U)*H,t[2]=(x*R-g*v+p*b)*H,t[3]=(u*v-d*R-f*b)*H,t[4]=(c*I-a*V-h*E)*H,t[5]=(e*V-s*I+r*E)*H,t[6]=(g*S-m*R-p*A)*H,t[7]=(l*R-u*S+f*A)*H,t[8]=(a*F-o*I+h*y)*H,t[9]=(n*I-e*F-r*y)*H,t[10]=(m*v-x*S+p*T)*H,t[11]=(d*S-l*v-f*T)*H,t[12]=(o*E-a*U-c*y)*H,t[13]=(e*U-n*E+s*y)*H,t[14]=(x*A-m*b-g*T)*H,t[15]=(l*b-d*A+u*T)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,d=o+o,u=r*h,f=r*l,m=r*d,x=a*l,g=a*d,p=o*d,T=c*h,A=c*l,S=c*d,b=n.x,v=n.y,R=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+S)*b,s[2]=(m-A)*b,s[3]=0,s[4]=(f-S)*v,s[5]=(1-(u+p))*v,s[6]=(g+T)*v,s[7]=0,s[8]=(m+A)*R,s[9]=(g-T)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Li.copy(this);let h=1/a,l=1/o,d=1/c;return Li.elements[0]*=h,Li.elements[1]*=h,Li.elements[2]*=h,Li.elements[4]*=l,Li.elements[5]*=l,Li.elements[6]*=l,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,e.setFromRotationMatrix(Li),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ui,c=!1){let h=this.elements,l=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===Ui)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ls)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ui,c=!1){let h=this.elements,l=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===Ui)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ls)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new C,Li=new Wt,ip=new C(0,0,0),np=new C(1,1,1),En=new C,ca=new C,mi=new C,Bh=new Wt,kh=new Ee,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,zh=new C,gs=new Ee,an=new Wt,ha=new C,sr=new C,rp=new C,ap=new Ee,Vh=new C(1,0,0),Hh=new C(0,1,0),Gh=new C(0,0,1),Wh={type:"added"},op={type:"removed"},_s={type:"childadded",child:null},Vl={type:"childremoved",child:null},Ve=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new hi,n=new Ee,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Dt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(sr,ha,this.up):an.lookAt(ha,sr,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(an),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),_s.child=t,this.dispatchEvent(_s),_s.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new C(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(h,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Oc(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hl(a,r,t+1/3),this.g=Hl(a,r,t),this.b=Hl(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return qt.workingToColorSpace(Ze.copy(this),t),Math.round(Vt(Ze.r*255,0,255))*65536+Math.round(Vt(Ze.g*255,0,255))*256+Math.round(Vt(Ze.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ce){qt.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(ua);let n=dr(wn.h,ua.h,e),s=dr(wn.s,ua.s,e),r=dr(wn.l,ua.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Nt;Nt.NAMES=Yu;var xr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Di=new C,on=new C,Gl=new C,ln=new C,xs=new C,ys=new C,Xh=new C,Wl=new C,Xl=new C,ql=new C,Yl=new ye,Zl=new ye,Jl=new ye,In=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Di.subVectors(t,e),s.cross(Di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Di.subVectors(s,e),on.subVectors(n,e),Gl.subVectors(t,e);let a=Di.dot(Di),o=Di.dot(on),c=Di.dot(Gl),h=on.dot(on),l=on.dot(Gl),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*c-o*l)*u,m=(a*l-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(a,ln.y),c.addScaledVector(o,ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yl.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),Yl.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yl,r.x),a.addScaledVector(Zl,r.y),a.addScaledVector(Jl,r.z),a}static isFrontFacing(t,e,n,s){return Di.subVectors(n,e),on.subVectors(t,e),Di.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Di.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xs.subVectors(s,n),ys.subVectors(r,n),Wl.subVectors(t,n);let c=xs.dot(Wl),h=ys.dot(Wl);if(c<=0&&h<=0)return e.copy(n);Xl.subVectors(t,s);let l=xs.dot(Xl),d=ys.dot(Xl);if(l>=0&&d<=l)return e.copy(s);let u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(xs,a);ql.subVectors(t,r);let f=xs.dot(ql),m=ys.dot(ql);if(m>=0&&f<=m)return e.copy(r);let x=f*h-c*m;if(x<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(ys,o);let g=l*m-f*d;if(g<=0&&d-l>=0&&f-m>=0)return Xh.subVectors(r,s),o=(d-l)/(d-l+(f-m)),e.copy(s).addScaledVector(Xh,o);let p=1/(g+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(xs,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ti=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ni):Ni.fromBufferAttribute(r,a),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),fa.subVectors(this.max,rr),vs.subVectors(t.a,rr),Ms.subVectors(t.b,rr),Ss.subVectors(t.c,rr),An.subVectors(Ms,vs),Rn.subVectors(Ss,Ms),Yn.subVectors(vs,Ss);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!$l(e,vs,Ms,Ss,fa)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,vs,Ms,Ss,fa))?!1:(pa.crossVectors(An,Rn),e=[pa.x,pa.y,pa.z],$l(e,vs,Ms,Ss,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cn=[new C,new C,new C,new C,new C,new C,new C,new C],Ni=new C,da=new Ti,vs=new C,Ms=new C,Ss=new C,An=new C,Rn=new C,Yn=new C,rr=new C,fa=new C,pa=new C,Zn=new C;function $l(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=t.dot(Zn),h=e.dot(Zn),l=n.dot(Zn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var Re=new C,ma=new It,cp=0,ei=class extends Fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var yr=class extends ei{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends ei{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends ei{constructor(t,e,n){super(new Float32Array(t),e,n)}},hp=new Ti,ar=new C,jl=new C,Oi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(jl)),this.expandByPoint(ar.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},up=0,bi=new Wt,Kl=new Ve,bs=new C,gi=new Ti,or=new Ti,Be=new C,Me=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uf(t)?vr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,n){return bi.makeTranslation(t,e,n),this.applyMatrix4(bi),this}scale(t,e,n){return bi.makeScale(t,e,n),this.applyMatrix4(bi),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(gi.min,or.min),gi.expandByPoint(Be),Be.addVectors(gi.max,or.max),gi.expandByPoint(Be)):(gi.expandByPoint(or.min),gi.expandByPoint(or.max))}gi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Be.fromBufferAttribute(o,h),c&&(bs.fromBufferAttribute(t,h),Be.add(bs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new C,c[y]=new C;let h=new C,l=new C,d=new C,u=new It,f=new It,m=new It,x=new C,g=new C;function p(y,E,I){h.fromBufferAttribute(n,y),l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,I),l.sub(h),d.sub(h),f.sub(u),m.sub(u);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(U),o[y].add(x),o[E].add(x),o[I].add(x),c[y].add(g),c[E].add(g),c[I].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let y=0,E=T.length;y<E;++y){let I=T[y],U=I.start,F=I.count;for(let V=U,D=U+F;V<D;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new C,S=new C,b=new C,v=new C;function R(y){b.fromBufferAttribute(s,y),v.copy(b);let E=o[y];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(v,E);let U=S.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,U)}for(let y=0,E=T.length;y<E;++y){let I=T[y],U=I.start,F=I.count;for(let V=U,D=U+F;V<D;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ei(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,h=new C,l=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,g),o.add(l),c.add(l),h.add(l),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*l;for(let p=0;p<l;p++)u[m++]=h[f++]}return new ei(u,l,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){let u=h[l],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],d=r[h];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ql=new C,dp=new C,fp=new Dt,ti=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ql.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(Ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pp=0,Pn=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Gs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ti().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hn=new C,tc=new C,ga=new C,_a=new C,Bi=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tc.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),_a.copy(this.origin).sub(tc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ga),o=_a.dot(this.direction),c=-_a.dot(ga),h=_a.lengthSq(),l=Math.abs(1-a*a),d,u,f,m;if(l>0)if(d=a*c-o,u=a*o-c,m=r*l,d>=0)if(u>=-m)if(u<=m){let x=1/l;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tc).addScaledVector(ga,u),f}intersectSphere(t,e){if(t.radius<0)return null;hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,l=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=n.x-a.x,T=n.y-a.y,A=n.z-a.z,S=Math.abs(c),b=Math.abs(h),v=Math.abs(l),R,y,E,I,U,F,V,D,H,Z,J,it;if(S>=b&&S>=v?(E=c,F=d,H=m,it=p,c>=0?(R=h,y=l,I=u,U=f,V=x,D=g,Z=T,J=A):(R=l,y=h,I=f,U=u,V=g,D=x,Z=A,J=T)):b>=v?(E=h,F=u,H=x,it=T,h>=0?(R=l,y=c,I=f,U=d,V=g,D=m,Z=A,J=p):(R=c,y=l,I=d,U=f,V=m,D=g,Z=p,J=A)):(E=l,F=f,H=g,it=A,l>=0?(R=c,y=h,I=d,U=u,V=m,D=x,Z=p,J=T):(R=h,y=c,I=u,U=d,V=x,D=m,Z=T,J=p)),E===0)return null;let X=R/E,Q=y/E,et=1/E,At=I-X*F,Tt=U-Q*F,he=V-X*H,Zt=D-Q*H,Kt=Z-X*it,q=J-Q*it,K=Kt*Zt-q*he,_t=At*q-Tt*Kt,Ut=he*Tt-Zt*At;if(s){if(K<0||_t<0||Ut<0)return null}else if((K<0||_t<0||Ut<0)&&(K>0||_t>0||Ut>0))return null;let mt=K+_t+Ut;if(mt===0)return null;let zt=et*(K*F+_t*H+Ut*it);return(mt>0?zt<0:zt>0)?null:this.at(zt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qh=new Wt,Jn=new Bi,xa=new Oi,Yh=new C,ya=new C,va=new C,Ma=new C,ec=new C,Sa=new C,Zh=new C,ba=new C,Se=class extends Ve{constructor(t=new Me,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Sa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],d=r[c];l!==0&&(ec.fromBufferAttribute(d,t),a?Sa.addScaledVector(ec,l):Sa.addScaledVector(ec.sub(e),l))}e.add(Sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(xa.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(xa,Yh)===null||Jn.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],T=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=T,b=A;S<b;S+=3){let v=o.getX(S),R=o.getX(S+1),y=o.getX(S+2);s=Ta(this,p,t,n,h,l,d,v,R,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let T=o.getX(g),A=o.getX(g+1),S=o.getX(g+2);s=Ta(this,a,t,n,h,l,d,T,A,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],T=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=T,b=A;S<b;S+=3){let v=S,R=S+1,y=S+2;s=Ta(this,p,t,n,h,l,d,v,R,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let T=g,A=g+1,S=g+2;s=Ta(this,a,t,n,h,l,d,T,A,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function mp(i,t,e,n,s,r,a,o){let c;if(t.side===ni?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Bn,o),c===null)return null;ba.copy(o),ba.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ba);return h<e.near||h>e.far?null:{distance:h,point:ba.clone(),object:i}}function Ta(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,ya),i.getVertexPosition(c,va),i.getVertexPosition(h,Ma);let l=mp(i,t,e,n,ya,va,Ma,Zh);if(l){let d=new C;In.getBarycoord(Zh,ya,va,Ma,d),s&&(l.uv=In.getInterpolatedAttribute(s,o,c,h,d,new It)),r&&(l.uv1=In.getInterpolatedAttribute(r,o,c,h,d,new It)),a&&(l.normal=In.getInterpolatedAttribute(a,o,c,h,d,new C),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new C,materialIndex:0};In.getNormal(ya,va,Ma,u.normal),l.face=u,l.barycoord=d}return l}var Kn=class extends ii{constructor(t=null,e=1,n=1,s,r,a,o,c,h=ke,l=ke,d,u){super(null,a,o,c,h,l,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qn=class extends ei{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new Wt,Jh=new Wt,Ea=[],$h=new Ti,gp=new Wt,lr=new Se,cr=new Oi,ts=class extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),$h.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union($h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),cr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Jh.multiplyMatrices(n,Ts),lr.matrixWorld=Jh,lr.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){let c=Ea[a];c.instanceId=r,c.object=this,e.push(c)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kn(new Float32Array(s*this.count),s,this.count,_o,wi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$n=new Oi,_p=new It(.5,.5),wa=new C,Bs=class{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],l=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],T=r[12],A=r[13],S=r[14],b=r[15];if(s[0].setComponents(h-a,f-l,p-m,b-T).normalize(),s[1].setComponents(h+a,f+l,p+m,b+T).normalize(),s[2].setComponents(h+o,f+d,p+x,b+A).normalize(),s[3].setComponents(h-o,f-d,p-x,b-A).normalize(),n)s[4].setComponents(c,u,g,S).normalize(),s[5].setComponents(h-c,f-u,p-g,b-S).normalize();else if(s[4].setComponents(h-c,f-u,p-g,b-S).normalize(),e===Ui)s[5].setComponents(h+c,f+u,p+g,b+S).normalize();else if(e===Ls)s[5].setComponents(c,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=_p.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wa.x=s.normal.x>0?t.max.x:t.min.x,wa.y=s.normal.y>0?t.max.y:t.min.y,wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ln=class extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xa=new C,qa=new C,jh=new Wt,hr=new Bi,Aa=new Oi,ic=new C,Kh=new C,Dn=class extends Ve{constructor(t=new Me,e=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xa.fromBufferAttribute(e,s-1),qa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xa.distanceTo(qa);t.setAttribute("lineDistance",new $t(n,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;jh.copy(s).invert(),hr.copy(t.ray).applyMatrix4(jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=h){let p=l.getX(x),T=l.getX(x+1),A=Ra(this,t,hr,c,p,T,x);A&&e.push(A)}if(this.isLineLoop){let x=l.getX(m-1),g=l.getX(f),p=Ra(this,t,hr,c,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=h){let p=Ra(this,t,hr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ra(this,t,hr,c,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ra(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Xa.fromBufferAttribute(o,s),qa.fromBufferAttribute(o,r),e.distanceSqToSegment(Xa,qa,ic,Kh)>n)return;ic.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(ic);if(!(h<t.near||h>t.far))return{distance:h,point:Kh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Qh=new C,tu=new C,Mr=class extends Dn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qh.fromBufferAttribute(e,s),tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qh.distanceTo(tu);t.setAttribute("lineDistance",new $t(n,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends ii{constructor(t=[],e=kn,n,s,r,a,o,c,h,l){super(t,e,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},es=class extends ii{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nn=class extends ii{constructor(t,e,n=zi,s,r,a,o=ke,c=ke,h,l=$i,d=1){if(l!==$i&&l!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ya=class extends Nn{constructor(t,e=zi,n=kn,s,r,a=ke,o=ke,c,h=$i){let l={width:t,height:t,depth:1},d=[l,l,l,l,l,l];super(t,t,e,n,s,r,a,o,c,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ji=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],l=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(d,2));function m(x,g,p,T,A,S,b,v,R,y,E){let I=S/R,U=b/y,F=S/2,V=b/2,D=v/2,H=R+1,Z=y+1,J=0,it=0,X=new C;for(let Q=0;Q<Z;Q++){let et=Q*U-V;for(let At=0;At<H;At++){let Tt=At*I-F;X[x]=Tt*T,X[g]=et*A,X[p]=D,h.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=v>0?1:-1,l.push(X.x,X.y,X.z),d.push(At/R),d.push(1-Q/y),J+=1}}for(let Q=0;Q<y;Q++)for(let et=0;et<R;et++){let At=u+et+H*Q,Tt=u+et+H*(Q+1),he=u+(et+1)+H*(Q+1),Zt=u+(et+1)+H*Q;c.push(At,Tt,Zt),c.push(Tt,he,Zt),it+=6}o.addGroup(f,it,E),f+=it,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ks=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;T(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(l),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function T(){let S=new C,b=new C,v=0,R=(e-t)/n;for(let y=0;y<=r;y++){let E=[],I=y/r,U=I*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,D=V*c+o,H=Math.sin(D),Z=Math.cos(D);b.x=U*H,b.y=-I*n+g,b.z=U*Z,d.push(b.x,b.y,b.z),S.set(H,R,Z).normalize(),u.push(S.x,S.y,S.z),f.push(V,1-I),E.push(m++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let I=x[E][y],U=x[E+1][y],F=x[E+1][y+1],V=x[E][y+1];(t>0||E!==0)&&(l.push(I,U,V),v+=3),(e>0||E!==r-1)&&(l.push(U,F,V),v+=3)}h.addGroup(p,v,0),p+=v}function A(S){let b=m,v=new It,R=new C,y=0,E=S===!0?t:e,I=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),m++;let U=m;for(let F=0;F<=s;F++){let D=F/s*c+o,H=Math.cos(D),Z=Math.sin(D);R.x=E*Z,R.y=g*I,R.z=E*H,d.push(R.x,R.y,R.z),u.push(0,I,0),v.x=H*.5+.5,v.y=Z*.5*I+.5,f.push(v.x,v.y),m++}for(let F=0;F<s;F++){let V=b+F,D=U+F;S===!0?l.push(D,D+1,V):l.push(D+1,D,V),y+=3}h.addGroup(p,y,S===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class i extends ks{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var dn=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,d=t/o,u=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<l;p++){let T=p*u-a;for(let A=0;A<h;A++){let S=A*d-r;m.push(S,-T,0),x.push(0,0,1),g.push(A/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let A=T+h*p,S=T+h*(p+1),b=T+1+h*(p+1),v=T+1+h*p;f.push(A,S,v),f.push(S,b,v)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Er=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],l=[],d=t,u=(e-t)/s,f=new C,m=new It;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,l.push(m.x,m.y)}d+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let T=p+g,A=T,S=T+n+1,b=T+n+2,v=T+1;o.push(A,S,v),o.push(S,b,v)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var wr=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,l=[],d=new C,u=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let T=[],A=p/n,S=a+A*o,b=t*Math.cos(S),v=Math.sqrt(t*t-b*b),R=0;p===0&&a===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let E=y/e,I=s+E*r;d.x=-v*Math.cos(I),d.y=b,d.z=v*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(E+R,1-A),T.push(h++)}l.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let A=l[p][T+1],S=l[p][T],b=l[p+1][T],v=l[p+1][T+1];(p!==0||a>0)&&f.push(A,S,v),(p!==n-1||c<Math.PI)&&f.push(S,b,v)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(eu(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(eu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Zu={clone:rs,merge:$e},yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Za=class extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ja=class extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$a=class extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Ar=class extends Ln{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Es(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Un=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break i}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends Un{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:r=t,o=2*e-n;break;case lc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oc:a=t,c=2*n-e;break;case lc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,T=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*x+.5*m,S=f*g-f*x;for(let b=0;b!==o;++b)r[b]=p*a[l+b]+T*a[h+b]+A*a[c+b]+S*a[d+b];return r}},Ka=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(n-e)/(s-e),d=1-l;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[c+u]*l;return r}},Qa=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},to=class extends Un{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this.inTangents,d=this.outTangents;if(!l||!d){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[h+g]*x+a[c+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[h+m],g=a[c+m],p=f*u+m*2,T=d[p],A=d[p+1],S=t*u+m*2,b=l[S],v=l[S+1],R=Sp(n,e,T,b,s);r[m]=Ju(R,x,A,v,g)}return r}};function Ju(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Mp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Ju(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Mp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var xi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nc(t.settings)&&(n.settings={inTangents:Es(t.settings.inTangents,Array),outTangents:Es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new to(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break;case rc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nc(this.settings)&&(iu(this.settings.inTangents,t),iu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Ff(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){Pt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function iu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Va;var Fn=class extends xi{constructor(t,e,n){super(t,e,n)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=fr;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="color";var io=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};io.prototype.ValueTypeName="number";var no=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let l=h+o;h!==l;h+=4)Ee.slerpFlat(r,0,a,h-o,a,h,c);return r}},Rr=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends xi{constructor(t,e,n){super(t,e,n)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=fr;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="vector";var ro=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){let d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],m=h[d+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$u=new ro,ao=class{constructor(t){this.manager=t!==void 0?t:$u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ir=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sc=new Wt,nu=new C,su=new C,oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ls||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ca=new C,Ia=new Ee,Zi=new C,Pr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ca,Ia,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Ia,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ca,Ia,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Ia,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cn=new C,ru=new It,au=new It,Je=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,ru,au),e.subVectors(au,ru)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zs=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cc=class extends oo{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new cc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ws=-90,As=1,lo=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(ws,As,t,e);s.layers=this.layers,this.add(s);let r=new Je(ws,As,t,e);r.layers=this.layers,this.add(r);let a=new Je(ws,As,t,e);a.layers=this.layers,this.add(a);let o=new Je(ws,As,t,e);o.layers=this.layers,this.add(o);let c=new Je(ws,As,t,e);c.layers=this.layers,this.add(c);let h=new Je(ws,As,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},co=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kc="\\[\\]\\.:\\/",bp=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",Tp="[^"+kc.replace("\\.","")+"]",Ep=/((?:WC+[\/:])*)/.source.replace("WC",zc),wp=/(WCOD+)?/.source.replace("WCOD",Tp),Ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Rp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Cp=new RegExp("^"+Ep+wp+Ap+Rp+"$"),Ip=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bp,"")}static parseTrackName(t){let e=Cp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ip.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=hc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);var ou=new Wt,Dr=class{constructor(t,e,n=0,s=1/0){this.ray=new Bi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(lu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(lu),n}};function lu(i,t){return i.distance-t.distance}function uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)uc(r[a],t,e,!0)}}var Vs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Nr=class extends Fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Vc(i,t,e,n){let s=Pp(n);switch(e){case Lc:return i*t;case _o:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case Vn:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case Dc:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case To:return Math.max(i,16)*Math.max(t,8)/4;case Mo:case bo:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case wo:case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Hr:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gr:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pp(i){switch(i){case ui:case Rc:return{byteLength:1,components:1};case Ws:case Cc:case Vi:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case zi:case po:case wi:return{byteLength:4,components:1};case Ic:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dp(i){let t=new WeakMap;function e(o,c){let h=o.array,l=o.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){let l=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,l);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`uniform sampler2D dfgLUT;
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
}`,D0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
}`,Hm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,og=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Np,alphahash_pars_fragment:Up,alphamap_fragment:Fp,alphamap_pars_fragment:Op,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:zp,aomap_pars_fragment:Vp,batching_pars_vertex:Hp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Kp,color_fragment:Qp,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:i0,common:n0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:a0,displacementmap_vertex:o0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:w0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:x0,fog_fragment:y0,fog_pars_fragment:v0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:E0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:I0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:N0,lights_fragment_end:U0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:z0,map_fragment:V0,map_pars_fragment:H0,map_particle_fragment:G0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:$0,morphtarget_vertex:j0,normal_fragment_begin:K0,normal_fragment_maps:Q0,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:im,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:am,iridescence_pars_fragment:om,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:_m,shadowmap_vertex:xm,shadowmask_pars_fragment:ym,skinbase_vertex:vm,skinning_pars_vertex:Mm,skinning_vertex:Sm,skinnormal_vertex:bm,specularmap_fragment:Tm,specularmap_pars_fragment:Em,tonemapping_fragment:wm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Im,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Nm,background_frag:Um,backgroundCube_vert:Fm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:km,depth_vert:zm,depth_frag:Vm,distance_vert:Hm,distance_frag:Gm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:Ym,meshbasic_vert:Zm,meshbasic_frag:Jm,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Km,meshmatcap_frag:Qm,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ig,meshphong_frag:ng,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},ht={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},en={basic:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:$e([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:$e([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Nt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:$e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:$e([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:$e([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:$e([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:$e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:$e([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:$e([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:$e([ht.lights,ht.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};en.physical={uniforms:$e([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Qo={r:0,b:0,g:0},pg=new Wt,yd=new Dt;yd.set(-1,0,0,0,1,0,0,0,1);function mg(i,t,e,n,s,r){let a=new Nt(0),o=s===!0?0:1,c,h,l=null,d=0,u=null;function f(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let S=T.backgroundBlurriness>0;A=t.get(A,S)}return A}function m(T){let A=!1,S=f(T);S===null?g(a,o):S&&S.isColor&&(g(S,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(T,A){let S=f(A);S&&(S.isCubeTexture||S.mapping===Fr)?(h===void 0&&(h=new Se(new ji(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:rs(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(yd),h.material.toneMapped=qt.getTransfer(S.colorSpace)!==ee,(l!==S||d!==S.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,l=S,d=S.version,u=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Se(new dn(2,2),new _i({name:"BackgroundMaterial",uniforms:rs(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=qt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(l!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,l=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,A){T.getRGB(Qo,Bc(i)),e.buffers.color.setClear(Qo.r,Qo.g,Qo.b,A,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:m,addToRenderList:x,dispose:p}}function gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,F,V,D,H){let Z=!1,J=d(U,D,V,F);r!==J&&(r=J,h(r.object)),Z=f(U,D,V,H),Z&&m(U,D,V,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(U,F,V,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function h(U){return i.bindVertexArray(U)}function l(U){return i.deleteVertexArray(U)}function d(U,F,V,D){let H=D.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let J=U.isInstancedMesh===!0?U.id:0,it=Z[J];it===void 0&&(it={},Z[J]=it);let X=it[V.id];X===void 0&&(X={},it[V.id]=X);let Q=X[H];return Q===void 0&&(Q=u(c()),X[H]=Q),Q}function u(U){let F=[],V=[],D=[];for(let H=0;H<e;H++)F[H]=0,V[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,F,V,D){let H=r.attributes,Z=F.attributes,J=0,it=V.getAttributes();for(let X in it)if(it[X].location>=0){let et=H[X],At=Z[X];if(At===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(At=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(At=U.instanceColor)),et===void 0||et.attribute!==At||At&&et.data!==At.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function m(U,F,V,D){let H={},Z=F.attributes,J=0,it=V.getAttributes();for(let X in it)if(it[X].location>=0){let et=Z[X];et===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let At={};At.attribute=et,et&&et.data&&(At.data=et.data),H[X]=At,J++}r.attributes=H,r.attributesNum=J,r.index=D}function x(){let U=r.newAttributes;for(let F=0,V=U.length;F<V;F++)U[F]=0}function g(U){p(U,0)}function p(U,F){let V=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;V[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),H[U]!==F&&(i.vertexAttribDivisor(U,F),H[U]=F)}function T(){let U=r.newAttributes,F=r.enabledAttributes;for(let V=0,D=F.length;V<D;V++)F[V]!==U[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(U,F,V,D,H,Z,J){J===!0?i.vertexAttribIPointer(U,F,V,H,Z):i.vertexAttribPointer(U,F,V,D,H,Z)}function S(U,F,V,D){x();let H=D.attributes,Z=V.getAttributes(),J=F.defaultAttributeValues;for(let it in Z){let X=Z[it];if(X.location>=0){let Q=H[it];if(Q===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let et=Q.normalized,At=Q.itemSize,Tt=t.get(Q);if(Tt===void 0)continue;let he=Tt.buffer,Zt=Tt.type,Kt=Tt.bytesPerElement,q=Zt===i.INT||Zt===i.UNSIGNED_INT||Q.gpuType===po;if(Q.isInterleavedBufferAttribute){let K=Q.data,_t=K.stride,Ut=Q.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<X.locationSize;mt++)p(X.location+mt,K.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<X.locationSize;mt++)g(X.location+mt);i.bindBuffer(i.ARRAY_BUFFER,he);for(let mt=0;mt<X.locationSize;mt++)A(X.location+mt,At/X.locationSize,Zt,et,_t*Kt,(Ut+At/X.locationSize*mt)*Kt,q)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<X.locationSize;K++)g(X.location+K);i.bindBuffer(i.ARRAY_BUFFER,he);for(let K=0;K<X.locationSize;K++)A(X.location+K,At/X.locationSize,Zt,et,At*Kt,At/X.locationSize*K*Kt,q)}}else if(J!==void 0){let et=J[it];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}T()}function b(){E();for(let U in n){let F=n[U];for(let V in F){let D=F[V];for(let H in D){let Z=D[H];for(let J in Z)l(Z[J].object),delete Z[J];delete D[H]}}delete n[U]}}function v(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let V in F){let D=F[V];for(let H in D){let Z=D[H];for(let J in Z)l(Z[J].object),delete Z[J];delete D[H]}}delete n[U.id]}function R(U){for(let F in n){let V=n[F];for(let D in V){let H=V[D];if(H[U.id]===void 0)continue;let Z=H[U.id];for(let J in Z)l(Z[J].object),delete Z[J];delete H[U.id]}}}function y(U){for(let F in n){let V=n[F],D=U.isInstancedMesh===!0?U.id:0,H=V[D];if(H!==void 0){for(let Z in H){let J=H[Z];for(let it in J)l(J[it].object),delete J[it];delete H[Z]}delete V[D],Object.keys(V).length===0&&delete n[F]}}}function E(){I(),a=!0,r!==s&&(r=s,h(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function _g(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,l){l!==0&&(i.drawArraysInstanced(n,c,h,l),e.update(h,n,l))}function o(c,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,l);let u=0;for(let f=0;f<l;f++)u+=h[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ai&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ui&&R!==wi&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(Rt("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:S,maxSamples:b,samples:v}}function yg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ti,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?l(null):h();else{let T=r?0:n,A=T*4,S=p.clippingState||null;c.value=S,S=l(m,u,A,f);for(let b=0;b!==A;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,S=f;A!==x;++A,S+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Js=4,vg=6,Mg=20,Sg=256,Wr=new zs,ju=new Nt,Hc=null,Gc=0,Wc=0,Xc=!1,bg=new C,as=new C,el=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=bg}=r;Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hc,Gc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===kn||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Vi,format:Ai,colorSpace:pr,depthBuffer:!1},s=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tg(r)),this._blurMaterial=wg(r,t,e),this._ggxMaterial=Eg(r,t,e)}return s}_compileMaterial(t){let e=new Se(new Me,t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s,r){let c=new Je(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ju),d.toneMapping=ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new ji,new ze({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,p=!0):(g.color.copy(ju),p=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[A],r.y,r.z)):S===1?(c.up.set(0,0,h[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[A],r.z)):(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[A]));let b=this._cubeSize;Zs(s,S*b,A>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===kn||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Wr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),l=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-l*l),u=h*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Js?n-m+Js:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,Zs(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Wr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Zs(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(o,Wr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let l=this._sizeLods[s],d=3*l*(s>this._lodMax-Js?s-this._lodMax+Js:0),u=4*(this._cubeSize-l);Zs(e,d,u,3*l,2*l),a.setRenderTarget(e),a.render(c,Wr)}};function Tg(i){let t=[],e=[],n=i,s=i-Js+1+vg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,l=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let T=p%3*2/3-1,A=p>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];m.set(S,f*u*p);for(let b=0;b<u;b++){let v=l[b*2]*2-1,R=l[b*2+1]*2-1;p===0?as.set(1,R,v):p===1?as.set(-v,1,-R):p===2?as.set(-v,R,1):p===3?as.set(-1,R,-v):p===4?as.set(-v,-1,R):as.set(v,R,-1),as.toArray(x,(p*u+b)*f)}}let g=new Me;g.setAttribute("position",new ei(m,f)),g.setAttribute("outputDirection",new ei(x,f)),e.push(new Se(g,null)),n>Js&&n--}return{lodMeshes:e,sizeLods:t}}function Ku(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Eg(i,t,e){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function wg(i,t,e){return new _i({name:"SphericalGaussianBlur",defines:{SAMPLES:Mg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Qu(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function td(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var il=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ni,blending:Ki});r.uniforms.tEquirect.value=e;let a=new Se(s,r),o=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Pe),new lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Ag(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ho||f===uo)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new il(m.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===ho||f===uo,x=f===kn||f===ns;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new el(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let T=u.image;return m&&T&&T.height>0||x&&T&&c(T)?(n===null&&(n=new el(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function o(u,f){return f===ho?u.mapping=kn:f===uo&&(u.mapping=ns),u}function c(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Rg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&jn("WebGLRenderer: "+n+" extension not supported."),s}}}function Cg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let T=f.array;x=f.version;for(let A=0,S=T.length;A<S;A+=3){let b=T[A+0],v=T[A+1],R=T[A+2];u.push(b,v,v,R,R,b)}}else{let T=m.array;x=m.version;for(let A=0,S=T.length/3-1;A<S;A+=3){let b=A+0,v=A+1,R=A+2;u.push(b,v,v,R,R,b)}}let g=new(m.count>=65535?vr:yr)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function l(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Ig(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function h(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function l(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function Pg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,c){let h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),x===!0&&(A=3);let S=o.attributes.position.count*A,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let v=new Float32Array(S*b*4*d),R=new _r(v,S,b,d);R.type=wi,R.needsUpdate=!0;let y=A*4;for(let I=0;I<d;I++){let U=g[I],F=p[I],V=T[I],D=S*b*4*I;for(let H=0;H<U.count;H++){let Z=H*y;f===!0&&(s.fromBufferAttribute(U,H),v[D+Z+0]=s.x,v[D+Z+1]=s.y,v[D+Z+2]=s.z,v[D+Z+3]=0),m===!0&&(s.fromBufferAttribute(F,H),v[D+Z+4]=s.x,v[D+Z+5]=s.y,v[D+Z+6]=s.z,v[D+Z+7]=0),x===!0&&(s.fromBufferAttribute(V,H),v[D+Z+8]=s.x,v[D+Z+9]=s.y,v[D+Z+10]=s.z,v[D+Z+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new It(S,b)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Dg(i,t,e,n,s){let r=new WeakMap;function a(h){let l=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function c(h){let l=h.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}var Ng={[vc]:"LINEAR_TONE_MAPPING",[Mc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[bc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function Ug(i,t,e,n,s,r){let a=new ci(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new Me;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));let l=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Se(h,l),u=new zs(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,T=[],A=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let v=0;v<T.length;v++){let R=T[v];R.setSize&&R.setSize(S,b)}},this.setEffects=function(S){T=S,A=T.length>0&&T[0].isRenderPass===!0;let b=a.width,v=a.height;T.length>0&&o===null&&(o=new ci(b,v,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),c=new ci(b,v,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let y=T[R];y.setSize&&y.setSize(b,v)}},this.begin=function(S,b){if(x||S.toneMapping===ki&&T.length===0)return!1;if(p=b,b!==null){let v=b.width,R=b.height;(a.width!==v||a.height!==R)&&this.setSize(v,R)}return A===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=ki,!0},this.hasRenderPass=function(){return A},this.end=function(S,b){S.toneMapping=g,x=!0;let v=a,R=o;for(let y=0;y<T.length;y++){let E=T[y];E.enabled!==!1&&(E.render(S,R,v,b),E.needsSwap!==!1&&(v=R,R=R===o?c:o))}if(f!==S.outputColorSpace||m!==S.toneMapping){f=S.outputColorSpace,m=S.toneMapping,l.defines={},qt.getTransfer(f)===ee&&(l.defines.SRGB_TRANSFER="");let y=Ng[m];y&&(l.defines[y]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(p),S.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),l.dispose()}}var vd=new ii,Zc=new Nn(1,1),Md=new _r,Sd=new Wa,bd=new Sr,ed=[],id=[],nd=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rl(i,t){let e=id[t];e===void 0&&(e=new Int32Array(t),id[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),De(e,n)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),De(e,n)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),De(e,n)}}function Gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=e.isReversedDepthBuffer()?Ko:jo,r=Zc):r=vd,e.setTexture2D(t||r,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sd,s)}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bd,s)}function t_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Md,s)}function e_(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return Bg;case 35666:return kg;case 35674:return zg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return Jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(i,t){i.uniform1fv(this.addr,t)}function n_(i,t){let e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function s_(i,t){let e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function r_(i,t){let e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function a_(i,t){let e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function o_(i,t){let e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function l_(i,t){let e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function c_(i,t){i.uniform1iv(this.addr,t)}function h_(i,t){i.uniform2iv(this.addr,t)}function u_(i,t){i.uniform3iv(this.addr,t)}function d_(i,t){i.uniform4iv(this.addr,t)}function f_(i,t){i.uniform1uiv(this.addr,t)}function p_(i,t){i.uniform2uiv(this.addr,t)}function m_(i,t){i.uniform3uiv(this.addr,t)}function g_(i,t){i.uniform4uiv(this.addr,t)}function __(i,t,e){let n=this.cache,s=t.length,r=rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zc:a=vd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function x_(i,t,e){let n=this.cache,s=t.length,r=rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sd,r[a])}function y_(i,t,e){let n=this.cache,s=t.length,r=rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bd,r[a])}function v_(i,t,e){let n=this.cache,s=t.length,r=rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Md,r[a])}function M_(i){switch(i){case 5126:return i_;case 35664:return n_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}var Jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=e_(e.type)}},$c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M_(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},qc=/(\w+)(\])?(\[|\.)?/g;function ad(i,t){i.seq.push(t),i.map[t.id]=t}function S_(i,t,e){let n=i.name,s=n.length;for(qc.lastIndex=0;;){let r=qc.exec(n),a=qc.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){ad(e,h===void 0?new Jc(o,i,t):new $c(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new jc(o),ad(e,d)),e=d}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);S_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var b_=37297,T_=0;function E_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ld=new Dt;function w_(i){qt._getMatrix(ld,qt.workingColorSpace,i);let t=`mat3( ${ld.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+E_(i.getShaderSource(t),o)}else return r}function A_(i,t){let e=w_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var R_={[vc]:"Linear",[Mc]:"Reinhard",[Sc]:"Cineon",[bc]:"ACESFilmic",[Ec]:"AgX",[wc]:"Neutral",[Tc]:"Custom"};function C_(i,t){let e=R_[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tl=new C;function I_(){qt.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),t=tl.y.toFixed(4),e=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function L_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qr(i){return i!==""}function hd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(N_,F_)}var U_=new Map;function F_(i,t){let e=kt[t];if(e===void 0){let n=U_.get(t);if(n!==void 0)e=kt[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kc(e)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(O_,B_)}function B_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var k_={[Ur]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function z_(i){return k_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var V_={[kn]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function H_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":V_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var G_={[ns]:"ENVMAP_MODE_REFRACTION"};function W_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X_={[yc]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Pu]:"ENVMAP_BLENDING_ADD"};function q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X_[i.combine]||"ENVMAP_BLENDING_NONE"}function Y_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Z_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=z_(e),h=H_(e),l=W_(e),d=q_(e),u=Y_(e),f=P_(e),m=L_(r),x=s.createProgram(),g,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(g=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?kt.tonemapping_pars_fragment:"",e.toneMapping!==ki?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),I_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),a=Kc(a),a=hd(a,e),a=ud(a,e),o=Kc(o),o=hd(o,e),o=ud(o,e),a=dd(a),o=dd(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=T+g+a,S=T+p+o,b=od(s,s.VERTEX_SHADER,A),v=od(s,s.FRAGMENT_SHADER,S);s.attachShader(x,b),s.attachShader(x,v),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(v)||"",H=F.trim(),Z=V.trim(),J=D.trim(),it=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,v);else{let Q=cd(s,b,"vertex"),et=cd(s,v,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Q+`
`+et)}else H!==""?Rt("WebGLProgram: Program Info Log:",H):(Z===""||J==="")&&(X=!1);X&&(U.diagnostics={runnable:it,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(v),y=new $s(s,x),E=D_(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,b_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=v,this}var J_=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new th(t),e.set(t,n)),n}},th=class{constructor(t){this.id=J_++,this.code=t,this.usedTimes=0}};function $_(i){return i===Vn||i===Hr||i===Gr}function j_(i,t,e,n,s,r){let a=new Fs,o=new Qc,c=new Set,h=[],l=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,E,I,U,F,V){let D=U.fog,H=F.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||Z,J),X=it&&it.mapping===Fr?it.image.height:null,Q=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=et!==void 0?et.length:0,Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let he,Zt,Kt,q;if(Q){let de=en[Q];he=de.vertexShader,Zt=de.fragmentShader}else{he=y.vertexShader,Zt=y.fragmentShader;let de=o.getVertexShaderStage(y),Qt=o.getFragmentShaderStage(y);o.update(y,de,Qt),Kt=de.id,q=Qt.id}let K=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,zt=!!y.map,Ie=!!y.matcap,Ht=!!it,jt=!!y.aoMap,ue=!!y.lightMap,Xt=!!y.bumpMap&&y.wireframe===!1,xe=!!y.normalMap,Oe=!!y.displacementMap,oi=!!y.emissiveMap,ve=!!y.metalnessMap,we=!!y.roughnessMap,N=y.anisotropy>0,Xe=y.clearcoat>0,re=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,O=y.sheen>0,z=y.transmission>0,W=N&&!!y.anisotropyMap,nt=Xe&&!!y.clearcoatMap,st=Xe&&!!y.clearcoatNormalMap,Y=Xe&&!!y.clearcoatRoughnessMap,j=_&&!!y.iridescenceMap,rt=_&&!!y.iridescenceThicknessMap,St=O&&!!y.sheenColorMap,ct=O&&!!y.sheenRoughnessMap,at=!!y.specularMap,bt=!!y.specularColorMap,Ct=!!y.specularIntensityMap,Ft=z&&!!y.transmissionMap,L=z&&!!y.thicknessMap,ot=!!y.gradientMap,$=!!y.alphaMap,lt=y.alphaTest>0,ft=!!y.alphaHash,tt=!!y.extensions,Et=ki;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Et=i.toneMapping);let vt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:he,fragmentShader:Zt,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:Ie,envMap:Ht,envMapMode:Ht&&it.mapping,envMapCubeUVHeight:X,aoMap:jt,lightMap:ue,bumpMap:Xt,normalMap:xe,displacementMap:Oe,emissiveMap:oi,normalMapObjectSpace:xe&&y.normalMapType===Nu,normalMapTangentSpace:xe&&y.normalMapType===Nc,packedNormalMap:xe&&y.normalMapType===Nc&&$_(y.normalMap.format),metalnessMap:ve,roughnessMap:we,anisotropy:N,anisotropyMap:W,clearcoat:Xe,clearcoatMap:nt,clearcoatNormalMap:st,clearcoatRoughnessMap:Y,dispersion:re,retroreflection:w,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:O,sheenColorMap:St,sheenRoughnessMap:ct,specularMap:at,specularColorMap:bt,specularIntensityMap:Ct,transmission:z,transmissionMap:Ft,thicknessMap:L,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Gs&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ft,combine:y.combine,mapUv:zt&&m(y.map.channel),aoMapUv:jt&&m(y.aoMap.channel),lightMapUv:ue&&m(y.lightMap.channel),bumpMapUv:Xt&&m(y.bumpMap.channel),normalMapUv:xe&&m(y.normalMap.channel),displacementMapUv:Oe&&m(y.displacementMap.channel),emissiveMapUv:oi&&m(y.emissiveMap.channel),metalnessMapUv:ve&&m(y.metalnessMap.channel),roughnessMapUv:we&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:nt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ct&&m(y.sheenRoughnessMap.channel),specularMapUv:at&&m(y.specularMap.channel),specularColorMapUv:bt&&m(y.specularColorMap.channel),specularIntensityMapUv:Ct&&m(y.specularIntensityMap.channel),transmissionMapUv:Ft&&m(y.transmissionMap.channel),thicknessMapUv:L&&m(y.thicknessMap.channel),alphaMapUv:$&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xe||N),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(zt||$),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&xe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Tt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:oi&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===ni,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:tt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&y.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(E,y),T(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function T(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let E=f[y.type],I;if(E){let U=en[E];I=Zu.clone(U.uniforms)}else I=y.uniforms;return I}function S(y,E){let I=l.get(E);return I!==void 0?++I.usedTimes:(I=new Z_(i,E,y,s),h.push(I),l.set(E,I)),I}function b(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),l.delete(y.cacheKey),y.destroy()}}function v(y){o.remove(y)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:S,releaseProgram:b,releaseShaderCache:v,programs:h,dispose:R}}function K_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function pd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function md(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,g,p){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[t]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=m,T.materialVariant=a(u),T.groupOrder=x,T.renderOrder=u.renderOrder,T.z=g,T.group=p),t++,T}function c(u,f,m,x,g,p,T){T.reversedDepth===!0&&(g=-g);let A=o(u,f,m,x,g,p);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function h(u,f,m,x,g,p){let T=o(u,f,m,x,g,p);m.transmission>0?n.unshift(T):m.transparent===!0?s.unshift(T):e.unshift(T)}function l(u,f){e.length>1&&e.sort(u||Q_),n.length>1&&n.sort(f||pd),s.length>1&&s.sort(f||pd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:d,sort:l}}function tx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new md,i.set(n,[a])):s>=r.length?(a=new md,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ex(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Nt};break;case"SpotLight":e={position:new C,direction:new C,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function ix(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var nx=0;function sx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rx(i){let t=new ex,e=ix(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);let s=new C,r=new Wt,a=new Wt;function o(h){let l=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,T=0,A=0,S=0,b=0,v=0,R=0,y=0,E=0,I=0;h.sort(sx);for(let F=0,V=h.length;F<V;F++){let D=h[F],H=D.color,Z=D.intensity,J=D.distance,it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vn?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)l+=H.r*Z,d+=H.g*Z,u+=H.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],Z);I++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=it;let At=Q.getViewportCount();for(let Tt=0;Tt<At;Tt++)n.sunShadowMatrix[x+Tt]=Q.getMatrix(Tt),n.sunShadowCascade[x+Tt]=Q._cascadeData[Tt];x+=At,m++}n.sun[f]=X,f++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=X,g++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[T]=X;let Q=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,Q.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[T]=Q.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[T]=et,n.spotShadowMap[T]=it,R++}T++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=X,A++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=D.shadow.matrix,v++}n.point[p]=X,p++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[S]=X,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==T||U.rectAreaLength!==A||U.hemiLength!==S||U.numSunShadows!==m||U.numDirectionalShadows!==b||U.numPointShadows!==v||U.numSpotShadows!==R||U.numSpotMaps!==y||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=T,n.rectArea.length=A,n.point.length=p,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=T,U.rectAreaLength=A,U.hemiLength=S,U.numSunShadows=m,U.numDirectionalShadows=b,U.numPointShadows=v,U.numSpotShadows=R,U.numSpotMaps=y,U.numLightProbes=I,n.version=nx++)}function c(h,l){let d=0,u=0,f=0,m=0,x=0,g=0,p=l.matrixWorldInverse;for(let T=0,A=h.length;T<A;T++){let S=h[T];if(S.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(S.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function gd(i){let t=new rx(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function h(){t.setup(e)}function l(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ax(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gd(i),t.set(s,[o])):r>=a.length?(o=new gd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`,cx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],hx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],_d=new Wt,Xr=new C,Yc=new C;function ux(i,t,e){let n=new Bs,s=new It,r=new It,a=new ye,o=new Ja,c=new $a,h={},l=e.maxTextureSize,d={[Bn]:ni,[ni]:Bn,[He]:He},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Me;m.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Se(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(v,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===uu&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==this.type;V&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=v.length;D<H;D++){let Z=v[D],J=Z.shadow;if(J===void 0){Rt("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let it=J.getFrameExtents();s.multiply(it),r.copy(J.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/it.x),s.x=r.x*it.x,J.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/it.y),s.y=r.y*it.y,J.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Hs){if(Z.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ci(s.x,s.y,{format:Vn,type:Vi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Nn(s.x,s.y,wi),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=$i,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke}else Z.isPointLight?(J.map=new il(s.x),J.map.depthTexture=new Ya(s.x,zi)):(J.map=new ci(s.x,s.y),J.map.depthTexture=new Nn(s.x,s.y,zi)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=$i,this.type===Ur?(J.map.depthTexture.compareFunction=X?Ko:jo,J.map.depthTexture.minFilter=Pe,J.map.depthTexture.magFilter=Pe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,y);for(let et=0;et<Q;et++){let At=J.getCamera(et);if(Z.isPointLight){let Tt=J.camera,he=J.matrix,Zt=Z.distance||Tt.far;Zt!==Tt.far&&(Tt.far=Zt,Tt.updateProjectionMatrix()),Xr.setFromMatrixPosition(Z.matrixWorld),Tt.position.copy(Xr),Yc.copy(Tt.position),Yc.add(cx[et]),Tt.up.copy(hx[et]),Tt.lookAt(Yc),Tt.updateMatrixWorld(),he.makeTranslation(-Xr.x,-Xr.y,-Xr.z),_d.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(_d,Tt.coordinateSystem,Tt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,et),i.clear();else{et===0&&(i.setRenderTarget(J.map),i.clear());let Tt=J.getViewport(et);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),F.viewport(a)}n=J.getFrustum(et),S(R,y,At,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Hs&&T(J,y),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,I,U)};function T(v,R){let y=t.update(x);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new ci(s.x,s.y,{format:Vn,type:Vi}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),u.uniforms.shadow_pass.value=v.map.depthTexture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(R,null,y,f,x,null)}function A(v,R,y,E){let I=null,U=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0)I=U;else if(I=y.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=I.uuid,V=R.uuid,D=h[F];D===void 0&&(D={},h[F]=D);let H=D[V];H===void 0&&(H=I.clone(),D[V]=H,R.addEventListener("dispose",b)),I=H}if(I.visible=R.visible,I.wireframe=R.wireframe,E===Hs?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=y}return I}function S(v,R,y,E,I){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&I===Hs)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let V=t.update(v),D=v.material;if(Array.isArray(D)){let H=V.groups;for(let Z=0,J=H.length;Z<J;Z++){let it=H[Z],X=D[it.materialIndex];if(X&&X.visible){let Q=A(v,X,E,I);v.onBeforeShadow(i,v,R,y,V,Q,it),i.renderBufferDirect(y,null,V,Q,v,it),v.onAfterShadow(i,v,R,y,V,Q,it)}}}else if(D.visible){let H=A(v,D,E,I);v.onBeforeShadow(i,v,R,y,V,H,null),i.renderBufferDirect(y,null,V,H,v,null),v.onAfterShadow(i,v,R,y,V,H,null)}}let F=v.children;for(let V=0,D=F.length;V<D;V++)S(F[V],R,y,E,I)}function b(v){v.target.removeEventListener("dispose",b);for(let y in h){let E=h[y],I=v.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function dx(i,t){function e(){let L=!1,ot=new ye,$=null,lt=new ye(0,0,0,0);return{setMask:function(ft){$!==ft&&!L&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){L=ft},setClear:function(ft,tt,Et,vt,de){de===!0&&(ft*=vt,tt*=vt,Et*=vt),ot.set(ft,tt,Et,vt),lt.equals(ot)===!1&&(i.clearColor(ft,tt,Et,vt),lt.copy(ot))},reset:function(){L=!1,$=null,lt.set(-1,0,0,0)}}}function n(){let L=!1,ot=!1,$=null,lt=null,ft=null;return{setReversed:function(tt){if(ot!==tt){let Et=t.get("EXT_clip_control");tt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let vt=ft;ft=null,this.setClear(vt)}},getReversed:function(){return ot},setTest:function(tt){tt?K(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(tt){$!==tt&&!L&&(i.depthMask(tt),$=tt)},setFunc:function(tt){if(ot&&(tt=qu[tt]),lt!==tt){switch(tt){case Da:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=tt}},setLocked:function(tt){L=tt},setClear:function(tt){ft!==tt&&(ft=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){L=!1,$=null,lt=null,ft=null,ot=!1}}}function s(){let L=!1,ot=null,$=null,lt=null,ft=null,tt=null,Et=null,vt=null,de=null;return{setTest:function(Qt){L||(Qt?K(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Qt){ot!==Qt&&!L&&(i.stencilMask(Qt),ot=Qt)},setFunc:function(Qt,Pi,qi){($!==Qt||lt!==Pi||ft!==qi)&&(i.stencilFunc(Qt,Pi,qi),$=Qt,lt=Pi,ft=qi)},setOp:function(Qt,Pi,qi){(tt!==Qt||Et!==Pi||vt!==qi)&&(i.stencilOp(Qt,Pi,qi),tt=Qt,Et=Pi,vt=qi)},setLocked:function(Qt){L=Qt},setClear:function(Qt){de!==Qt&&(i.clearStencil(Qt),de=Qt)},reset:function(){L=!1,ot=null,$=null,lt=null,ft=null,tt=null,Et=null,vt=null,de=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,l={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,T=null,A=null,S=null,b=null,v=null,R=null,y=new Nt(0,0,0),E=0,I=!1,U=null,F=null,V=null,D=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,it=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=it>=2);let Q=null,et={},At=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),he=new ye().fromArray(At),Zt=new ye().fromArray(Tt);function Kt(L,ot,$,lt){let ft=new Uint8Array(4),tt=i.createTexture();i.bindTexture(L,tt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<$;Et++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return tt}let q={};q[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Is),Xt(!1),xe(fc),K(i.CULL_FACE),jt(Ki);function K(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function _t(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Ut(L,ot){return u[L]!==ot?(i.bindFramebuffer(L,ot),u[L]=ot,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(L,ot){let $=m,lt=!1;if(L){$=f.get(ot),$===void 0&&($=[],f.set(ot,$));let ft=L.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Et=ft.length;tt<Et;tt++)$[tt]=i.COLOR_ATTACHMENT0+tt;$.length=ft.length,lt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,lt=!0);lt&&i.drawBuffers($)}function zt(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let Ie={[is]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};Ie[mu]=i.MIN,Ie[gu]=i.MAX;let Ht={[_u]:i.ZERO,[xu]:i.ONE,[yu]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(L,ot,$,lt,ft,tt,Et,vt,de,Qt){if(L===Ki){g===!0&&(_t(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),L!==du){if(L!==p||Qt!==I){if((T!==is||b!==is)&&(i.blendEquation(i.FUNC_ADD),T=is,b=is),Qt)switch(L){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",L);break}else switch(L){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",L);break}A=null,S=null,v=null,R=null,y.set(0,0,0),E=0,p=L,I=Qt}return}ft=ft||ot,tt=tt||$,Et=Et||lt,(ot!==T||ft!==b)&&(i.blendEquationSeparate(Ie[ot],Ie[ft]),T=ot,b=ft),($!==A||lt!==S||tt!==v||Et!==R)&&(i.blendFuncSeparate(Ht[$],Ht[lt],Ht[tt],Ht[Et]),A=$,S=lt,v=tt,R=Et),(vt.equals(y)===!1||de!==E)&&(i.blendColor(vt.r,vt.g,vt.b,de),y.copy(vt),E=de),p=L,I=!1}function ue(L,ot){L.side===He?_t(i.CULL_FACE):K(i.CULL_FACE);let $=L.side===ni;ot&&($=!$),Xt($),L.blending===Gs&&L.transparent===!1?jt(Ki):jt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let lt=L.stencilWrite;o.setTest(lt),lt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oi(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function xe(L){L!==cu?(K(i.CULL_FACE),L!==F&&(L===fc?i.cullFace(i.BACK):L===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),F=L}function Oe(L){L!==V&&(J&&i.lineWidth(L),V=L)}function oi(L,ot,$){L?(K(i.POLYGON_OFFSET_FILL),(D!==ot||H!==$)&&(D=ot,H=$,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,$))):_t(i.POLYGON_OFFSET_FILL)}function ve(L){L?K(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function we(L){L===void 0&&(L=i.TEXTURE0+Z-1),Q!==L&&(i.activeTexture(L),Q=L)}function N(L,ot,$){$===void 0&&(Q===null?$=i.TEXTURE0+Z-1:$=Q);let lt=et[$];lt===void 0&&(lt={type:void 0,texture:void 0},et[$]=lt),(lt.type!==L||lt.texture!==ot)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(L,ot||q[L]),lt.type=L,lt.texture=ot)}function Xe(){let L=et[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function _(){try{i.texSubImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function O(){try{i.texSubImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function nt(){try{i.texStorage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function st(){try{i.texStorage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function j(){try{i.texImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function rt(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function St(L,ot){d[L]!==ot&&(i.pixelStorei(L,ot),d[L]=ot)}function ct(L){he.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function at(L){Zt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Zt.copy(L))}function bt(L,ot){let $=h.get(ot);$===void 0&&($=new WeakMap,h.set(ot,$));let lt=$.get(L);lt===void 0&&(lt=i.getUniformBlockIndex(ot,L.name),$.set(L,lt))}function Ct(L,ot){let lt=h.get(ot).get(L);c.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,L.__bindingPointIndex),c.set(ot,lt))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},d={},Q=null,et={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,T=null,A=null,S=null,b=null,v=null,R=null,y=new Nt(0,0,0),E=0,I=!1,U=null,F=null,V=null,D=null,H=null,he.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:_t,bindFramebuffer:Ut,drawBuffers:mt,useProgram:zt,setBlending:jt,setMaterial:ue,setFlipSided:Xt,setCullFace:xe,setLineWidth:Oe,setPolygonOffset:oi,setScissorTest:ve,activeTexture:we,bindTexture:N,unbindTexture:Xe,compressedTexImage2D:re,compressedTexImage3D:w,texImage2D:Y,texImage3D:j,pixelStorei:St,getParameter:rt,updateUBOMapping:bt,uniformBlockBinding:Ct,texStorage2D:nt,texStorage3D:st,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ct,viewport:at,reset:Ft}}function fx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,l=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return m?new OffscreenCanvas(w,_):gr("canvas")}function g(w,_,O){let z=1,W=re(w);if((W.width>O||W.height>O)&&(z=O/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let nt=Math.floor(z*W.width),st=Math.floor(z*W.height);u===void 0&&(u=x(nt,st));let Y=_?x(nt,st):u;return Y.width=nt,Y.height=st,Y.getContext("2d").drawImage(w,0,0,nt,st),Rt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+nt+"x"+st+")."),Y}else return"data"in w&&Rt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function T(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,_,O,z,W,nt=!1){if(w!==null){if(i[w]!==void 0)return i[w];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let st;z&&(st=t.get("EXT_texture_norm16"),st||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&st&&(Y=st.R16_EXT),O===i.SHORT&&st&&(Y=st.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&st&&(Y=st.RG16_EXT),O===i.SHORT&&st&&(Y=st.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&st&&(Y=st.RGB16_EXT),O===i.SHORT&&st&&(Y=st.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let j=nt?mr:qt.getTransfer(W);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=j===ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&st&&(Y=st.RGBA16_EXT),O===i.SHORT&&st&&(Y=st.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function b(w,_){let O;return w?_===null||_===zi||_===Xs?O=i.DEPTH24_STENCIL8:_===wi?O=i.DEPTH32F_STENCIL8:_===Ws&&(O=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===Xs?O=i.DEPTH_COMPONENT24:_===wi?O=i.DEPTH_COMPONENT32F:_===Ws&&(O=i.DEPTH_COMPONENT16),O}function v(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ke&&w.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&l.delete(_),_.isHTMLTexture&&d.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),U(_)}function E(w){let _=n.get(w);if(_.__webglInit===void 0)return;let O=w.source,z=f.get(O);if(z){let W=z[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(w),Object.keys(z).length===0&&f.delete(O)}n.remove(w)}function I(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let O=w.source,z=f.get(O);delete z[_.__cacheKey],a.memory.textures--}function U(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let W=0;W<_.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[z][W]);else i.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)i.deleteFramebuffer(_.__webglFramebuffer[z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=w.textures;for(let z=0,W=O.length;z<W;z++){let nt=n.get(O[z]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(O[z])}n.remove(w)}let F=0;function V(){F=0}function D(){return F}function H(w){F=w}function Z(){let w=F;return w>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function it(w,_){let O=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let z=w.image;if(z===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,_);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function et(w,_){let O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Ut(O,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let At={[Ps]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},Tt={[ke]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},he={[Fu]:i.NEVER,[Vu]:i.ALWAYS,[Ou]:i.LESS,[jo]:i.LEQUAL,[Bu]:i.EQUAL,[Ko]:i.GEQUAL,[ku]:i.GREATER,[zu]:i.NOTEQUAL};function Zt(w,_){if(_.type===wi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===fo||_.magFilter===Or||_.magFilter===Qi||_.minFilter===Pe||_.minFilter===fo||_.minFilter===Or||_.minFilter===Qi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,At[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,At[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,At[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Tt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Tt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==Or&&_.minFilter!==Qi||_.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let z=_.source,W=f.get(z);W===void 0&&(W={},f.set(z,W));let nt=J(_);if(nt!==w.__cacheKey){W[nt]===void 0&&(W[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),W[nt].usedTimes++;let st=W[w.__cacheKey];st!==void 0&&(W[w.__cacheKey].usedTimes--,st.usedTimes===0&&I(_)),w.__cacheKey=nt,w.__webglTexture=W[nt].texture}return O}function q(w,_,O){return Math.floor(Math.floor(w/O)/_)}function K(w,_,O,z){let nt=w.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,z,_.data);else{nt.sort((St,ct)=>St.start-ct.start);let st=0;for(let St=1;St<nt.length;St++){let ct=nt[st],at=nt[St],bt=ct.start+ct.count,Ct=q(at.start,_.width,4),Ft=q(ct.start,_.width,4);at.start<=bt+1&&Ct===Ft&&q(at.start+at.count-1,_.width,4)===Ct?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,nt[st]=at)}nt.length=st+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let St=0,ct=nt.length;St<ct;St++){let at=nt[St],bt=Math.floor(at.start/4),Ct=Math.ceil(at.count/4),Ft=bt%_.width,L=Math.floor(bt/_.width),ot=Ct,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Ft,L,ot,$,O,z,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function _t(w,_,O){let z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=i.TEXTURE_3D);let W=Kt(w,_),nt=_.source;e.bindTexture(z,w.__webglTexture,i.TEXTURE0+O);let st=n.get(nt);if(nt.version!==st.__version||W===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=qt.getPrimaries(qt.workingColorSpace),lt=_.colorSpace===fn?null:qt.getPrimaries(_.colorSpace),ft=_.colorSpace===fn||$===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=g(_.image,!1,s.maxTextureSize);j=Xe(_,j);let rt=r.convert(_.format,_.colorSpace),St=r.convert(_.type),ct=S(_.internalFormat,rt,St,_.normalized,_.colorSpace,_.isVideoTexture);Zt(z,_);let at,bt=_.mipmaps,Ct=_.isVideoTexture!==!0,Ft=st.__version===void 0||W===!0,L=nt.dataReady,ot=v(_,j);if(_.isDepthTexture)ct=b(_.format===zn,_.type),Ft&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ct,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ct,j.width,j.height,0,rt,St,null));else if(_.isDataTexture)if(bt.length>0){Ct&&Ft&&e.texStorage2D(i.TEXTURE_2D,ot,ct,bt[0].width,bt[0].height);for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],Ct?L&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,rt,St,at.data);_.generateMipmaps=!1}else Ct?(Ft&&e.texStorage2D(i.TEXTURE_2D,ot,ct,j.width,j.height),L&&K(_,j,rt,St)):e.texImage2D(i.TEXTURE_2D,0,ct,j.width,j.height,0,rt,St,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ct&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,bt[0].width,bt[0].height,j.depth);for(let $=0,lt=bt.length;$<lt;$++)if(at=bt[$],_.format!==Ai)if(rt!==null)if(Ct){if(L)if(_.layerUpdates.size>0){let ft=Vc(at.width,at.height,_.format,_.type);for(let tt of _.layerUpdates){let Et=at.data.subarray(tt*ft/at.data.BYTES_PER_ELEMENT,(tt+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,tt,at.width,at.height,1,rt,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,j.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,j.depth,0,at.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,j.depth,rt,St,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,j.depth,0,rt,St,at.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ct&&Ft&&e.texStorage2D(i.TEXTURE_2D,ot,ct,bt[0].width,bt[0].height);for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],_.format!==Ai?rt!==null?Ct?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,at.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?L&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,rt,St,at.data)}else if(_.isDataArrayTexture)if(Ct){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,j.width,j.height,j.depth),L)if(_.layerUpdates.size>0){let $=Vc(j.width,j.height,_.format,_.type);for(let lt of _.layerUpdates){let ft=j.data.subarray(lt*$/j.data.BYTES_PER_ELEMENT,(lt+1)*$/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,j.width,j.height,1,rt,St,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,rt,St,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,j.width,j.height,j.depth,0,rt,St,j.data);else if(_.isData3DTexture)Ct?(Ft&&e.texStorage3D(i.TEXTURE_3D,ot,ct,j.width,j.height,j.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,rt,St,j.data)):e.texImage3D(i.TEXTURE_3D,0,ct,j.width,j.height,j.depth,0,rt,St,j.data);else if(_.isFramebufferTexture){if(Ft)if(Ct)e.texStorage2D(i.TEXTURE_2D,ot,ct,j.width,j.height);else{let $=j.width,lt=j.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,$,lt,0,rt,St,null),$>>=1,lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),d.add(_),$.onpaint=lt=>{let ft=lt.changedElements;for(let tt of d)ft.includes(tt.image)&&(tt.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let ft=i.RGBA,tt=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,tt,Et,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(Ct&&Ft){let $=re(bt[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,$.width,$.height)}for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],Ct?L&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,rt,St,at):e.texImage2D(i.TEXTURE_2D,$,ct,rt,St,at);_.generateMipmaps=!1}else if(Ct){if(Ft){let $=re(j);e.texStorage2D(i.TEXTURE_2D,ot,ct,$.width,$.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,St,j)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,St,j);p(_)&&T(z),st.__version=nt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ut(w,_,O){if(_.image.length!==6)return;let z=Kt(w,_),W=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let nt=n.get(W);if(W.version!==nt.__version||z===!0){e.activeTexture(i.TEXTURE0+O);let st=qt.getPrimaries(qt.workingColorSpace),Y=_.colorSpace===fn?null:qt.getPrimaries(_.colorSpace),j=_.colorSpace===fn||st===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let rt=_.isCompressedTexture||_.image[0].isCompressedTexture,St=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!rt&&!St?ct[tt]=g(_.image[tt],!0,s.maxCubemapSize):ct[tt]=St?_.image[tt].image:_.image[tt],ct[tt]=Xe(_,ct[tt]);let at=ct[0],bt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type),Ft=S(_.internalFormat,bt,Ct,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ot=nt.__version===void 0||z===!0,$=W.dataReady,lt=v(_,at);Zt(i.TEXTURE_CUBE_MAP,_);let ft;if(rt){L&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ft,at.width,at.height);for(let tt=0;tt<6;tt++){ft=ct[tt].mipmaps;for(let Et=0;Et<ft.length;Et++){let vt=ft[Et];_.format!==Ai?bt!==null?L?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ft,vt.width,vt.height,0,vt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,vt.width,vt.height,bt,Ct,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ft,vt.width,vt.height,0,bt,Ct,vt.data)}}}else{if(ft=_.mipmaps,L&&ot){ft.length>0&&lt++;let tt=re(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ft,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(St){L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,bt,Ct,ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,ct[tt].width,ct[tt].height,0,bt,Ct,ct[tt].data);for(let Et=0;Et<ft.length;Et++){let de=ft[Et].image[tt].image;L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,de.width,de.height,bt,Ct,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ft,de.width,de.height,0,bt,Ct,de.data)}}else{L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt,Ct,ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,bt,Ct,ct[tt]);for(let Et=0;Et<ft.length;Et++){let vt=ft[Et];L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,bt,Ct,vt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ft,bt,Ct,vt.image[tt])}}}p(_)&&T(i.TEXTURE_CUBE_MAP),nt.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function mt(w,_,O,z,W,nt){let st=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),j=S(O.internalFormat,st,Y,O.normalized,O.colorSpace),rt=n.get(_),St=n.get(O);if(St.__renderTarget=_,!rt.__hasExternalTextures){let ct=Math.max(1,_.width>>nt),at=Math.max(1,_.height>>nt);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,nt,j,ct,at,_.depth,0,st,Y,null):e.texImage2D(W,nt,j,ct,at,0,st,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),we(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,St.__webglTexture,0,ve(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,St.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let z=_.depthTexture,W=z&&z.isDepthTexture?z.type:null,nt=b(_.stencilBuffer,W),st=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(_),nt,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(_),nt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,nt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,w)}else{let z=_.textures;for(let W=0;W<z.length;W++){let nt=z[W],st=r.convert(nt.format,nt.colorSpace),Y=r.convert(nt.type),j=S(nt.internalFormat,st,Y,nt.normalized,nt.colorSpace);we(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(_),j,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(w,_,O){let z=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_.depthTexture);let rt=r.convert(_.depthTexture.format),St=r.convert(_.depthTexture.type),ct;_.depthTexture.format===$i?ct=i.DEPTH_COMPONENT24:_.depthTexture.format===zn&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,_.width,_.height,0,rt,St,null)}}else it(_.depthTexture,0);let nt=W.__webglTexture,st=ve(_),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=_.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===$i)we(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Y,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,j,Y,nt,0);else if(_.depthTexture.format===zn)we(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Y,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,j,Y,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(w){let _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Ie(_.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Ie(_.__webglFramebuffer[0],w,0):Ie(_.__webglFramebuffer,w,0)}else if(O){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=i.createRenderbuffer(),zt(_.__webglDepthbuffer[z],w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,nt)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),zt(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(w,_,O){let z=n.get(w);_!==void 0&&mt(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ht(w)}function ue(w){let _=w.texture,O=n.get(w),z=n.get(_);w.addEventListener("dispose",y);let W=w.textures,nt=w.isWebGLCubeRenderTarget===!0,st=W.length>1;if(st||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=_.version,a.memory.textures++),nt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[Y][j]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(st)for(let Y=0,j=W.length;Y<j;Y++){let rt=n.get(W[Y]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&we(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let j=W[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let rt=r.convert(j.format,j.colorSpace),St=r.convert(j.type),ct=S(j.internalFormat,rt,St,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),at=ve(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)mt(O.__webglFramebuffer[Y][j],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else mt(O.__webglFramebuffer[Y],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Y=0,j=W.length;Y<j;Y++){let rt=W[Y],St=n.get(rt),ct=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,St.__webglTexture),Zt(ct,rt),mt(O.__webglFramebuffer,w,rt,i.COLOR_ATTACHMENT0+Y,ct,0),p(rt)&&T(ct)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,z.__webglTexture),Zt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)mt(O.__webglFramebuffer[j],w,_,i.COLOR_ATTACHMENT0,Y,j);else mt(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&T(Y),e.unbindTexture()}w.depthBuffer&&Ht(w)}function Xt(w){let _=w.textures;for(let O=0,z=_.length;O<z;O++){let W=_[O];if(p(W)){let nt=A(w),st=n.get(W).__webglTexture;e.bindTexture(nt,st),T(nt),e.unbindTexture()}}}let xe=[],Oe=[];function oi(w){if(w.samples>0){if(we(w)===!1){let _=w.textures,O=w.width,z=w.height,W=i.COLOR_BUFFER_BIT,nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(w),Y=_.length>1;if(Y)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let St=n.get(_[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,W,i.NEAREST),c===!0&&(xe.length=0,Oe.length=0,xe.push(i.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(xe.push(nt),Oe.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let St=n.get(_[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ve(w){return Math.min(s.maxSamples,w.samples)}function we(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(w){let _=a.render.frame;l.get(w)!==_&&(l.set(w,_),w.update())}function Xe(w,_){let O=w.colorSpace,z=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==pr&&O!==fn&&(qt.getTransfer(O)===ee?(z!==Ai||W!==ui)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",O)),_}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=it,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=jt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=oi,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function px(i,t){function e(n,s=fn){let r,a=qt.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rc)return i.BYTE;if(n===Cc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===Ai)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===_o)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Vn)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Br||n===kr||n===zr||n===Vr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===bo||n===To)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===Ao||n===Ro||n===Co||n===Hr||n===Io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ro)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Ho||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===qo||n===Yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Jo||n===Gr||n===$o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _i({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends Fi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new eh,p={},T=e.getContextAttributes(),A=null,S=null,b=[],v=[],R=new It,y=null,E=null,I=new Je;I.viewport=new ye;let U=new Je;U.viewport=new ye;let F=[I,U],V=new co,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=b[q];return K===void 0&&(K=new Os,b[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=b[q];return K===void 0&&(K=new Os,b[q]=K),K.getGripSpace()},this.getHand=function(q){let K=b[q];return K===void 0&&(K=new Os,b[q]=K),K.getHandSpace()};function Z(q){let K=v.indexOf(q.inputSource);if(K===-1)return;let _t=b[K];_t!==void 0&&(_t.update(q.inputSource,q.frame,h||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",it);for(let q=0;q<b.length;q++){let K=v[q];K!==null&&(v[q]=null,b[q].disconnect(K))}D=null,H=null,g.reset();for(let q in p)delete p[q];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",it),T.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ut=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?zn:$i,Ut=T.stencil?Xs:zi);let zt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new ci(u.textureWidth,u.textureHeight,{format:Ai,type:ui,depthTexture:new Nn(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ci(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(q){for(let K=0;K<q.removed.length;K++){let _t=q.removed[K],Ut=v.indexOf(_t);Ut>=0&&(v[Ut]=null,b[Ut].disconnect(_t))}for(let K=0;K<q.added.length;K++){let _t=q.added[K],Ut=v.indexOf(_t);if(Ut===-1){for(let zt=0;zt<b.length;zt++)if(zt>=v.length){v.push(_t),Ut=zt;break}else if(v[zt]===null){v[zt]=_t,Ut=zt;break}if(Ut===-1)break}let mt=b[Ut];mt&&mt.connect(_t)}}let X=new C,Q=new C;function et(q,K,_t){X.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let Ut=X.distanceTo(Q),mt=K.projectionMatrix.elements,zt=_t.projectionMatrix.elements,Ie=mt[14]/(mt[10]-1),Ht=mt[14]/(mt[10]+1),jt=(mt[9]+1)/mt[5],ue=(mt[9]-1)/mt[5],Xt=(mt[8]-1)/mt[0],xe=(zt[8]+1)/zt[0],Oe=Ie*Xt,oi=Ie*xe,ve=Ut/(-Xt+xe),we=ve*-Xt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),mt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let N=Ie+ve,Xe=Ht+ve,re=Oe-we,w=oi+(Ut-we),_=jt*Ht/Xe*N,O=ue*Ht/Xe*N;q.projectionMatrix.makePerspective(re,w,_,O,N,Xe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function At(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,_t=q.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),V.near=U.near=I.near=K,V.far=U.far=I.far=_t,(D!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,H=V.far),V.layers.mask=q.layers.mask|6,I.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Ut=q.parent,mt=V.cameras;At(V,Ut);for(let zt=0;zt<mt.length;zt++)At(mt[zt],Ut);mt.length===2?et(V,I,U):V.projectionMatrix.copy(I.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),Tt(q,V,Ut)};function Tt(q,K,_t){_t===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ns*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(q){return p[q]};let he=null;function Zt(q,K){if(l=K.getViewerPose(h||a),m=K,l!==null){let _t=l.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ut=!1;_t.length!==V.cameras.length&&(V.cameras.length=0,Ut=!0);for(let Ht=0;Ht<_t.length;Ht++){let jt=_t[Ht],ue=null;if(f!==null)ue=f.getViewport(jt);else{let xe=d.getViewSubImage(u,jt);ue=xe.viewport,Ht===0&&(t.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(S))}let Xt=F[Ht];Xt===void 0&&(Xt=new Je,Xt.layers.enable(Ht),Xt.viewport=new ye,F[Ht]=Xt),Xt.matrix.fromArray(jt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(jt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ue.x,ue.y,ue.width,ue.height),Ht===0&&(V.matrix.copy(Xt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ut===!0&&V.cameras.push(Xt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ht=d.getDepthInformation(_t[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,s.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ht=0;Ht<_t.length;Ht++){let jt=_t[Ht].camera;if(jt){let ue=p[jt];ue||(ue=new br,p[jt]=ue);let Xt=d.getCameraImage(jt);ue.sourceTexture=Xt}}}}for(let _t=0;_t<b.length;_t++){let Ut=v[_t],mt=b[_t];Ut!==null&&mt!==void 0&&mt.update(Ut,K,h||a)}he&&he(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let Kt=new xd;Kt.setAnimationLoop(Zt),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}},_x=new Wt,Td=new Dt;Td.set(-1,0,0,0,1,0,0,0,1);function xx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Bc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,A,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),l(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,T,A):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ni&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ni&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=t.get(p),A=T.envMap,S=T.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Td),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let T=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let v=b.program;n.uniformBlockBinding(S,v)}function h(S,b){let v=s[S.id];v===void 0&&(g(S),v=l(S),s[S.id]=v,S.addEventListener("dispose",T));let R=b.program;n.updateUBOMapping(S,R);let y=t.render.frame;r[S.id]!==y&&(u(S),r[S.id]=y)}function l(S){let b=d();S.__bindingPointIndex=b;let v=i.createBuffer(),R=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],v=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,E=v.length;y<E;y++){let I=v[y];if(Array.isArray(I))for(let U=0,F=I.length;U<F;U++)f(I[U],y,U,R);else f(I,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,v,R){if(x(S,b,v,R)===!0){let y=S.__offset,E=S.value;if(Array.isArray(E)){let I=0;for(let U=0;U<E.length;U++){let F=E[U],V=p(F);m(F,S.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function m(S,b,v){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,v)}function x(S,b,v,R){let y=S.value,E=b+"_"+v;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:ArrayBuffer.isView(y)?R[E]=y.slice():R[E]=y.clone(),!0;{let I=R[E];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(S){let b=S.uniforms,v=0,R=16;for(let E=0,I=b.length;E<I;E++){let U=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,V=U.length;F<V;F++){let D=U[F],H=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,J=H.length;Z<J;Z++){let it=H[Z],X=p(it),Q=v%R,et=Q%X.boundary,At=Q+et;v+=et,At!==0&&R-At<X.storage&&(v+=R-At),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=X.storage}}}let y=v%R;return y>0&&(v+=R-y),S.__size=v,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",S),b}function T(S){let b=S.target;b.removeEventListener("dispose",T);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:h,dispose:A}}var vx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tn=null;function Mx(){return tn===null&&(tn=new Kn(vx,16,16,Vn,Vi),tn.name="DFG_LUT",tn.minFilter=Pe,tn.magFilter=Pe,tn.wrapS=Ji,tn.wrapT=Ji,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}var nl=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ui}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([vo,yo,xo]),p=new Set([ui,zi,Ws,Xs,mo,go]),T=new Uint32Array(4),A=new Int32Array(4),S=new C,b=null,v=null,R=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,V=null,D=null,H=null;this._outputColorSpace=Ce;let Z=0,J=0,it=null,X=-1,Q=null,et=new ye,At=new ye,Tt=null,he=new Nt(0),Zt=0,Kt=e.width,q=e.height,K=1,_t=null,Ut=null,mt=new ye(0,0,Kt,q),zt=new ye(0,0,Kt,q),Ie=!1,Ht=new Bs,jt=!1,ue=!1,Xt=new Wt,xe=new C,Oe=new ye,oi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function we(){return it===null?K:1}let N=n;function Xe(M,P){return e.getContext(M,P)}let re,w,_,O,z,W,nt,st,Y,j,rt,St,ct,at,bt,Ct,Ft,L,ot,$,lt,ft,tt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",Pi,!1),N===null){let P="webgl2";if(N=Xe(P,M),N===null)throw Xe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(M){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Pi,!1),Pt("WebGLRenderer: "+M.message),M}function Et(){re=new Rg(N),re.init(),lt=new px(N,re),w=new xg(N,re,t,lt),_=new dx(N,re),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),D=N.createFramebuffer(),H=N.createFramebuffer(),O=new Pg(N),z=new K_,W=new fx(N,re,_,z,w,lt,O),nt=new Ag(I),st=new Dp(N),ft=new gg(N,st),Y=new Cg(N,st,O,ft),j=new Dg(N,Y,st,ft,O),L=new Lg(N,w,W),bt=new yg(z),rt=new j_(I,nt,re,w,ft,bt),St=new xx(I,z),ct=new tx,at=new ax(re),Ft=new mg(I,nt,_,j,m,c),Ct=new ux(I,j,w),tt=new yx(N,O,w,_),ot=new _g(N,re,O),$=new Ig(N,re,O),O.programs=rt.programs,I.capabilities=w,I.extensions=re,I.properties=z,I.renderLists=ct,I.shadowMap=Ct,I.state=_,I.info=O}x!==ui&&(E=new Ug(x,e.width,e.height,o,s,r));let vt=new ih(I,N);this.xr=vt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(Kt,q,!1))},this.getSize=function(M){return M.set(Kt,q)},this.setSize=function(M,P,G=!0){if(vt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=M,q=P,e.width=Math.floor(M*K),e.height=Math.floor(P*K),G===!0&&(e.style.width=M+"px",e.style.height=P+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(Kt*K,q*K).floor()},this.setDrawingBufferSize=function(M,P,G){Kt=M,q=P,K=G,e.width=Math.floor(M*G),e.height=Math.floor(P*G),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(x===ui){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,P,G,B){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,P,G,B),_.viewport(et.copy(mt).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(zt)},this.setScissor=function(M,P,G,B){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,P,G,B),_.scissor(At.copy(zt).multiplyScalar(K).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(M){_.setScissorTest(Ie=M)},this.setOpaqueSort=function(M){_t=M},this.setTransparentSort=function(M){Ut=M},this.getClearColor=function(M){return M.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,G=!0){let B=0;if(M){let k=!1;if(it!==null){let dt=it.texture.format;k=g.has(dt)}if(k){let dt=it.texture.type,gt=p.has(dt),ut=Ft.getClearColor(),xt=Ft.getClearAlpha(),Mt=ut.r,Bt=ut.g,Gt=ut.b;gt?(T[0]=Mt,T[1]=Bt,T[2]=Gt,T[3]=xt,N.clearBufferuiv(N.COLOR,0,T)):(A[0]=Mt,A[1]=Bt,A[2]=Gt,A[3]=xt,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}P&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Pi,!1),Ft.dispose(),ct.dispose(),at.dispose(),z.dispose(),nt.dispose(),j.dispose(),ft.dispose(),tt.dispose(),rt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Th),vt.removeEventListener("sessionend",Eh),qn.stop()};function de(M){M.preventDefault(),Fc("WebGLRenderer: Context Lost."),U=!0}function Qt(){Fc("WebGLRenderer: Context Restored."),U=!1;let M=O.autoReset,P=Ct.enabled,G=Ct.autoUpdate,B=Ct.needsUpdate,k=Ct.type;Et(),O.autoReset=M,Ct.enabled=P,Ct.autoUpdate=G,Ct.needsUpdate=B,Ct.type=k}function Pi(M){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qi(M){let P=M.target;P.removeEventListener("dispose",qi),Rf(P)}function Rf(M){Cf(M),z.remove(M)}function Cf(M){let P=z.get(M).programs;P!==void 0&&(P.forEach(function(G){rt.releaseProgram(G)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,G,B,k,dt){P===null&&(P=oi);let gt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ut=Lf(M,P,G,B,k);_.setMaterial(B,gt);let xt=G.index,Mt=1;if(B.wireframe===!0){if(xt=Y.getWireframeAttribute(G),xt===void 0)return;Mt=2}let Bt=G.drawRange,Gt=G.attributes.position,yt=Bt.start*Mt,te=(Bt.start+Bt.count)*Mt;dt!==null&&(yt=Math.max(yt,dt.start*Mt),te=Math.min(te,(dt.start+dt.count)*Mt)),xt!==null?(yt=Math.max(yt,0),te=Math.min(te,xt.count)):Gt!=null&&(yt=Math.max(yt,0),te=Math.min(te,Gt.count));let Ae=te-yt;if(Ae<0||Ae===1/0)return;ft.setup(k,B,ut,G,xt);let ge,le=ot;if(xt!==null&&(ge=st.get(xt),le=$,le.setIndex(ge)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*we()),le.setMode(N.LINES)):le.setMode(N.TRIANGLES);else if(k.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),_.setLineWidth(qe*we()),k.isLineSegments?le.setMode(N.LINES):k.isLineLoop?le.setMode(N.LINE_LOOP):le.setMode(N.LINE_STRIP)}else k.isPoints?le.setMode(N.POINTS):k.isSprite&&le.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(re.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let qe=k._multiDrawStarts,pt=k._multiDrawCounts,Ke=k._multiDrawCount,Jt=xt?st.get(xt).bytesPerElement:1,Si=z.get(B).currentProgram.getUniforms();for(let Yi=0;Yi<Ke;Yi++)Si.setValue(N,"_gl_DrawID",Yi),le.render(qe[Yi]/Jt,pt[Yi])}else if(k.isInstancedMesh)le.renderInstances(yt,Ae,k.count);else if(G.isInstancedBufferGeometry){let qe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pt=Math.min(G.instanceCount,qe);le.renderInstances(yt,Ae,pt)}else le.render(yt,Ae)};function bh(M,P,G,B){F!==null&&M.isNodeMaterial&&F.setObject(B,M),jt===!0&&bt.setState(M,G,!1),M.transparent===!0&&M.side===He&&M.forceSinglePass===!1?(M.side=ni,M.needsUpdate=!0,la(M,P,B),M.side=Bn,M.needsUpdate=!0,la(M,P,B),M.side=He):la(M,P,B)}this.compile=function(M,P,G=null){G===null&&(G=M),F!==null&&F.renderStart(M,P,G),v=at.get(G),v.init(P),y.push(v),G.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),M!==G&&M.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights(),F!==null&&F.updateLights(v.state.lightsArray),ue=this.localClippingEnabled,jt=bt.init(this.clippingPlanes,ue),jt===!0&&bt.setGlobalState(this.clippingPlanes,P),F!==null&&Ct.render(v.state.shadowsArray,G,P);let B=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let dt=k.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){let ut=dt[gt];bh(ut,G,P,k),B.add(ut)}else bh(dt,G,P,k),B.add(dt)}),v=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(M,P,G=null){let B=this.compile(M,P,G);return new Promise(k=>{function dt(){if(B.forEach(function(gt){let xt=z.get(gt).currentProgram;(xt===void 0||xt.isReady())&&B.delete(gt)}),B.size===0){k(M);return}setTimeout(dt,10)}re.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ul=null;function If(M){Ul&&Ul(M)}function Th(){qn.stop()}function Eh(){qn.start()}let qn=new xd;qn.setAnimationLoop(If),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(M){Ul=M,vt.setAnimationLoop(M),M===null?qn.stop():qn.start()},vt.addEventListener("sessionstart",Th),vt.addEventListener("sessionend",Eh),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,P);let G=vt.enabled===!0&&vt.isPresenting===!0,B=E!==null&&(it===null||G)&&E.begin(I,it);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(P),P=vt.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,P,it),v=at.get(M,y.length),v.init(P),v.state.textureUnits=W.getTextureUnits(),y.push(v),Xt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ht.setFromProjectionMatrix(Xt,Ui,P.reversedDepth),ue=this.localClippingEnabled,jt=bt.init(this.clippingPlanes,ue),b=ct.get(M,R.length),b.init(),R.push(b),vt.enabled===!0&&vt.isPresenting===!0){let gt=I.xr.getDepthSensingMesh();gt!==null&&Fl(gt,P,-1/0,I.sortObjects)}Fl(M,P,0,I.sortObjects),b.finish(),F!==null&&F.updateLights(v.state.lightsArray),I.sortObjects===!0&&b.sort(_t,Ut),ve=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,ve&&Ft.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&bt.beginShadows();let k=v.state.shadowsArray;if(Ct.render(k,M,P),jt===!0&&bt.endShadows(),(B&&E.hasRenderPass())===!1){let gt=b.opaque,ut=b.transmissive;if(v.setupLights(),P.isArrayCamera){let xt=P.cameras;if(ut.length>0)for(let Mt=0,Bt=xt.length;Mt<Bt;Mt++){let Gt=xt[Mt];Ah(gt,ut,M,Gt)}ve&&Ft.render(M);for(let Mt=0,Bt=xt.length;Mt<Bt;Mt++){let Gt=xt[Mt];wh(b,M,Gt,Gt.viewport)}}else ut.length>0&&Ah(gt,ut,M,P),ve&&Ft.render(M),wh(b,M,P)}it!==null&&J===0&&(W.updateMultisampleRenderTarget(it),W.updateRenderTargetMipmap(it)),B&&E.end(I),M.isScene===!0&&M.onAfterRender(I,M,P),ft.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(v=y[y.length-1],W.setTextureUnits(v.state.textureUnits),jt===!0&&bt.setGlobalState(I.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,F!==null&&F.renderEnd()};function Fl(M,P,G,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLightProbeGrid)v.pushLightProbeGrid(M);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ht)){B&&Oe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xt);let gt=j.update(M),ut=M.material;ut.visible&&b.push(M,gt,ut,G,Oe.z,null,P)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ht))){let gt=j.update(M),ut=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Oe.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Oe.copy(gt.boundingSphere.center)),Oe.applyMatrix4(M.matrixWorld).applyMatrix4(Xt)),Array.isArray(ut)){let xt=gt.groups;for(let Mt=0,Bt=xt.length;Mt<Bt;Mt++){let Gt=xt[Mt],yt=ut[Gt.materialIndex];yt&&yt.visible&&b.push(M,gt,yt,G,Oe.z,Gt,P)}}else ut.visible&&b.push(M,gt,ut,G,Oe.z,null,P)}}let dt=M.children;for(let gt=0,ut=dt.length;gt<ut;gt++)Fl(dt[gt],P,G,B)}function wh(M,P,G,B){let{opaque:k,transmissive:dt,transparent:gt}=M;v.setupLightsView(G),jt===!0&&bt.setGlobalState(I.clippingPlanes,G),B&&_.viewport(et.copy(B)),k.length>0&&oa(k,P,G),dt.length>0&&oa(dt,P,G),gt.length>0&&oa(gt,P,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ah(M,P,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[B.id]===void 0){let yt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[B.id]=new ci(1,1,{generateMipmaps:!0,type:yt?Vi:ui,minFilter:Qi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let dt=v.state.transmissionRenderTarget[B.id],gt=B.viewport||et;dt.setSize(gt.z*I.transmissionResolutionScale,gt.w*I.transmissionResolutionScale);let ut=I.getRenderTarget(),xt=I.getActiveCubeFace(),Mt=I.getActiveMipmapLevel();I.setRenderTarget(dt),I.getClearColor(he),Zt=I.getClearAlpha(),Zt<1&&I.setClearColor(16777215,.5),I.clear(),ve&&Ft.render(G);let Bt=I.toneMapping;I.toneMapping=ki;let Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),jt===!0&&bt.setGlobalState(I.clippingPlanes,B),oa(M,G,B),W.updateMultisampleRenderTarget(dt),W.updateRenderTargetMipmap(dt),re.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let te=0,Ae=P.length;te<Ae;te++){let ge=P[te],{object:le,geometry:qe,material:pt,group:Ke}=ge;if(pt.side===He&&le.layers.test(B.layers)){let Jt=pt.side;pt.side=ni,pt.needsUpdate=!0,Rh(le,G,B,qe,pt,Ke),pt.side=Jt,pt.needsUpdate=!0,yt=!0}}yt===!0&&(W.updateMultisampleRenderTarget(dt),W.updateRenderTargetMipmap(dt))}I.setRenderTarget(ut,xt,Mt),I.setClearColor(he,Zt),Gt!==void 0&&(B.viewport=Gt),I.toneMapping=Bt}function oa(M,P,G){let B=P.isScene===!0?P.overrideMaterial:null;for(let k=0,dt=M.length;k<dt;k++){let gt=M[k],{object:ut,geometry:xt,group:Mt}=gt,Bt=gt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),ut.layers.test(G.layers)&&Rh(ut,P,G,xt,Bt,Mt)}}function Rh(M,P,G,B,k,dt){F!==null&&k.isNodeMaterial&&F.setObject(M,k),M.onBeforeRender(I,P,G,B,k,dt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(I,P,G,B,M,dt),k.transparent===!0&&k.side===He&&k.forceSinglePass===!1?(k.side=ni,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,M,dt),k.side=Bn,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,M,dt),k.side=He):I.renderBufferDirect(G,P,B,k,M,dt),M.onAfterRender(I,P,G,B,k,dt)}function la(M,P,G){P.isScene!==!0&&(P=oi);let B=z.get(M),k=v.state.lights,dt=v.state.shadowsArray,gt=k.state.version,ut=rt.getParameters(M,k.state,dt,P,G,v.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ut),Mt=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=nt.get(M.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",qi),Mt=new Map,B.programs=Mt);let Gt=Mt.get(xt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===gt)return Ih(M,ut),Gt}else ut.uniforms=rt.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,G,ut),M.onBeforeCompile(ut,I),Gt=rt.acquireProgram(ut,xt),Mt.set(xt,Gt),B.uniforms=ut.uniforms;let yt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=bt.uniform),Ih(M,ut),B.needsLights=Nf(M),B.lightsStateVersion=gt,B.needsLights&&(yt.ambientLightColor.value=k.state.ambient,yt.lightProbe.value=k.state.probe,yt.sunLights.value=k.state.sun,yt.sunLightShadows.value=k.state.sunShadow,yt.directionalLights.value=k.state.directional,yt.directionalLightShadows.value=k.state.directionalShadow,yt.spotLights.value=k.state.spot,yt.spotLightShadows.value=k.state.spotShadow,yt.rectAreaLights.value=k.state.rectArea,yt.ltc_1.value=k.state.rectAreaLTC1,yt.ltc_2.value=k.state.rectAreaLTC2,yt.pointLights.value=k.state.point,yt.pointLightShadows.value=k.state.pointShadow,yt.hemisphereLights.value=k.state.hemi,yt.sunShadowMatrix.value=k.state.sunShadowMatrix,yt.sunShadowCascade.value=k.state.sunShadowCascade,yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,yt.spotLightMatrix.value=k.state.spotLightMatrix,yt.spotLightMap.value=k.state.spotLightMap,yt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=v.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function Ch(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=$s.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Ih(M,P){let G=z.get(M);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Pf(M,P){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(P.matrixWorld);for(let G=0,B=M.length;G<B;G++){let k=M[G];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function Lf(M,P,G,B,k){P.isScene!==!0&&(P=oi),W.resetTextureUnits();let dt=P.fog,gt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ut=it===null?I.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qt.workingColorSpace,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Mt=nt.get(B.envMap||gt,xt),Bt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,Ae=!!G.morphAttributes.color,ge=ki;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ge=I.toneMapping);let le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=le!==void 0?le.length:0,pt=z.get(B),Ke=v.state.lights;if(jt===!0&&(ue===!0||M!==Q)){let fe=M===Q&&B.id===X;bt.setState(B,M,fe)}let Jt=!1;B.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ke.state.version||pt.outputColorSpace!==ut||k.isBatchedMesh&&pt.batching===!1||!k.isBatchedMesh&&pt.batching===!0||k.isBatchedMesh&&pt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&pt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&pt.instancing===!1||!k.isInstancedMesh&&pt.instancing===!0||k.isSkinnedMesh&&pt.skinning===!1||!k.isSkinnedMesh&&pt.skinning===!0||k.isInstancedMesh&&pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&pt.instancingMorph===!1&&k.morphTexture!==null||pt.envMap!==Mt||B.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==bt.numPlanes||pt.numIntersection!==bt.numIntersection)||pt.vertexAlphas!==Bt||pt.vertexTangents!==Gt||pt.morphTargets!==yt||pt.morphNormals!==te||pt.morphColors!==Ae||pt.toneMapping!==ge||pt.morphTargetsCount!==qe||!!pt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,pt.__version=B.version);let Si=pt.currentProgram;Jt===!0&&(Si=la(B,P,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Si,pt));let Yi=!1,Sn=!1,ds=!1,oe=Si.getUniforms(),Te=pt.uniforms;if(_.useProgram(Si.program)&&(Yi=!0,Sn=!0,ds=!0),B.id!==X&&(X=B.id,Sn=!0),pt.needsLights){let fe=Pf(v.state.lightProbeGridArray,k);pt.lightProbeGrid!==fe&&(pt.lightProbeGrid=fe,Sn=!0)}if(Yi||Q!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),oe.setValue(N,"projectionMatrix",M.projectionMatrix),oe.setValue(N,"viewMatrix",M.matrixWorldInverse);let Tn=oe.map.cameraPosition;Tn!==void 0&&Tn.setValue(N,xe.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Sn=!0,ds=!0)}if(pt.needsLights&&(Ke.state.sunShadowMap.length>0&&oe.setValue(N,"sunShadowMap",Ke.state.sunShadowMap,W),Ke.state.directionalShadowMap.length>0&&oe.setValue(N,"directionalShadowMap",Ke.state.directionalShadowMap,W),Ke.state.spotShadowMap.length>0&&oe.setValue(N,"spotShadowMap",Ke.state.spotShadowMap,W),Ke.state.pointShadowMap.length>0&&oe.setValue(N,"pointShadowMap",Ke.state.pointShadowMap,W)),k.isSkinnedMesh){oe.setOptional(N,k,"bindMatrix"),oe.setOptional(N,k,"bindMatrixInverse");let fe=k.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),oe.setValue(N,"boneTexture",fe.boneTexture,W))}k.isBatchedMesh&&(oe.setOptional(N,k,"batchingTexture"),oe.setValue(N,"batchingTexture",k._matricesTexture,W),oe.setOptional(N,k,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",k._indirectTexture,W),oe.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",k._colorsTexture,W));let bn=G.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&L.update(k,G,Si),(Sn||pt.receiveShadow!==k.receiveShadow)&&(pt.receiveShadow=k.receiveShadow,oe.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Te.envMapIntensity.value=P.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=Mx()),Sn){if(oe.setValue(N,"toneMappingExposure",I.toneMappingExposure),pt.needsLights&&Df(Te,ds),dt&&B.fog===!0&&St.refreshFogUniforms(Te,dt),St.refreshMaterialUniforms(Te,B,K,q,v.state.transmissionRenderTarget[M.id]),pt.needsLights&&pt.lightProbeGrid){let fe=pt.lightProbeGrid;Te.probesSH.value=fe.texture,Te.probesMin.value.copy(fe.boundingBox.min),Te.probesMax.value.copy(fe.boundingBox.max),Te.probesResolution.value.copy(fe.resolution)}$s.upload(N,Ch(pt),Te,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($s.upload(N,Ch(pt),Te,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(N,"center",k.center),oe.setValue(N,"modelViewMatrix",k.modelViewMatrix),oe.setValue(N,"normalMatrix",k.normalMatrix),oe.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let fe=B.uniformsGroups;for(let Tn=0,fs=fe.length;Tn<fs;Tn++){let Lh=fe[Tn];tt.update(Lh,Si),tt.bind(Lh,Si)}}return Si}function Df(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Nf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(M,P,G){let B=z.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(M.texture).__webglTexture=P,z.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){let G=z.get(M);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,G=0){it=M,Z=P,J=G;let B=null,k=!1,dt=!1;if(M){let ut=z.get(M);if(ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(M.viewport),At.copy(M.scissor),Tt=M.scissorTest,_.viewport(et),_.scissor(At),_.setScissorTest(Tt),X=-1;return}else if(ut.__webglFramebuffer===void 0)W.setupRenderTarget(M);else if(ut.__hasExternalTextures)W.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Bt=M.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&z.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(M)}}let xt=M.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let Mt=z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Mt[P])?B=Mt[P][G]:B=Mt[P],k=!0):M.samples>0&&W.useMultisampledRTT(M)===!1?B=z.get(M).__webglMultisampledFramebuffer:Array.isArray(Mt)?B=Mt[G]:B=Mt,et.copy(M.viewport),At.copy(M.scissor),Tt=M.scissorTest}else et.copy(mt).multiplyScalar(K).floor(),At.copy(zt).multiplyScalar(K).floor(),Tt=Ie;if(G!==0&&(B=V),_.bindFramebuffer(N.FRAMEBUFFER,B)&&_.drawBuffers(M,B),_.viewport(et),_.scissor(At),_.setScissorTest(Tt),k){let ut=z.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ut.__webglTexture,G)}else if(dt){let ut=P;for(let xt=0;xt<M.textures.length;xt++){let Mt=z.get(M.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,Mt.__webglTexture,G,ut)}}else if(M!==null&&G!==0){let ut=z.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ut.__webglTexture,G)}X=-1};function Ph(M){let P=z.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=w.textureFormatReadable(M.format),P.__typeReadable=w.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,G,B,k,dt,gt,ut=0){if(!(M&&M.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){_.bindFramebuffer(N.FRAMEBUFFER,xt);try{let Mt=M.textures[ut],Bt=Mt.format,Gt=Mt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut);let yt=Ph(Mt);if(yt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&G>=0&&G<=M.height-k&&N.readPixels(P,G,B,k,lt.convert(Bt),lt.convert(Gt),dt)}finally{let Mt=it!==null?z.get(it).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(M,P,G,B,k,dt,gt,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(P>=0&&P<=M.width-B&&G>=0&&G<=M.height-k){_.bindFramebuffer(N.FRAMEBUFFER,xt);let Mt=M.textures[ut],Bt=Mt.format,Gt=Mt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut);let yt=Ph(Mt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(P,G,B,k,lt.convert(Bt),lt.convert(Gt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ae=it!==null?z.get(it).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ae);let ge=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xu(N,ge,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(te),N.deleteSync(ge),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,G=0){let B=Math.pow(2,-G),k=Math.floor(M.image.width*B),dt=Math.floor(M.image.height*B),gt=P!==null?P.x:0,ut=P!==null?P.y:0;W.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,gt,ut,k,dt),_.unbindTexture()},this.copyTextureToTexture=function(M,P,G=null,B=null,k=0,dt=0){let gt,ut,xt,Mt,Bt,Gt,yt,te,Ae,ge=M.isCompressedTexture?M.mipmaps[dt]:M.image;if(G!==null)gt=G.max.x-G.min.x,ut=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,Bt=G.min.y,Gt=G.isBox3?G.min.z:0;else{let Te=Math.pow(2,-k);gt=Math.floor(ge.width*Te),ut=Math.floor(ge.height*Te),M.isDataArrayTexture?xt=ge.depth:M.isData3DTexture?xt=Math.floor(ge.depth*Te):xt=1,Mt=0,Bt=0,Gt=0}B!==null?(yt=B.x,te=B.y,Ae=B.z):(yt=0,te=0,Ae=0);let le=lt.convert(P.format),qe=lt.convert(P.type),pt;P.isData3DTexture?(W.setTexture3D(P,0),pt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),pt=N.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),pt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Ke=_.getParameter(N.UNPACK_ROW_LENGTH),Jt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Si=_.getParameter(N.UNPACK_SKIP_PIXELS),Yi=_.getParameter(N.UNPACK_SKIP_ROWS),Sn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),_.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);let ds=M.isDataArrayTexture||M.isData3DTexture,oe=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){let Te=z.get(M),bn=z.get(P),fe=z.get(Te.__renderTarget),Tn=z.get(bn.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,fe.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let fs=0;fs<xt;fs++)ds&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(M).__webglTexture,k,Gt+fs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(P).__webglTexture,dt,Ae+fs)),N.blitFramebuffer(Mt,Bt,gt,ut,yt,te,gt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||z.has(M)){let Te=z.get(M),bn=z.get(P);_.bindFramebuffer(N.READ_FRAMEBUFFER,D),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let fe=0;fe<xt;fe++)ds?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,k,Gt+fe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Te.__webglTexture,k),oe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bn.__webglTexture,dt,Ae+fe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bn.__webglTexture,dt),k!==0?N.blitFramebuffer(Mt,Bt,gt,ut,yt,te,gt,ut,N.COLOR_BUFFER_BIT,N.NEAREST):oe?N.copyTexSubImage3D(pt,dt,yt,te,Ae+fe,Mt,Bt,gt,ut):N.copyTexSubImage2D(pt,dt,yt,te,Mt,Bt,gt,ut);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(pt,dt,yt,te,Ae,gt,ut,xt,le,qe,ge.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(pt,dt,yt,te,Ae,gt,ut,xt,le,ge.data):N.texSubImage3D(pt,dt,yt,te,Ae,gt,ut,xt,le,qe,ge):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,dt,yt,te,gt,ut,le,qe,ge.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,dt,yt,te,ge.width,ge.height,le,ge.data):N.texSubImage2D(N.TEXTURE_2D,dt,yt,te,gt,ut,le,qe,ge);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ke),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Si),_.pixelStorei(N.UNPACK_SKIP_ROWS,Yi),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Sn),dt===0&&P.generateMipmaps&&N.generateMipmap(pt),_.unbindTexture()},this.initRenderTarget=function(M){z.get(M).__webglFramebuffer===void 0&&W.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?W.setTextureCube(M,0):M.isData3DTexture?W.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?W.setTexture2DArray(M,0):W.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){Z=0,J=0,it=null,_.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Yt=[{name:"Stone Age",evolveXP:400,baseHp:500,baseStyle:"cave",theme:{bg:"39 35% 90%",fg:"25 15% 20%",accent:"18 60% 55%"},special:{name:"Meteor Shower",cooldown:60,duration:4,type:"meteor"},units:[{name:"Clubman",desc:"Cheap melee screen. Takes half damage from siege shots.",cost:15,hp:30,dmg:8,range:40,speed:50,type:"melee",size:45,attackSpeed:1.2,killXp:5,killGold:10},{name:"Slinger",desc:"Basic ranged support.",cost:25,hp:20,dmg:5,range:250,speed:45,type:"ranged",size:40,attackSpeed:1.5,projType:"arc",projSpeed:400,killXp:8,killGold:15},{name:"Dino Rider",desc:"Heavy pushing power.",cost:100,hp:150,dmg:35,range:50,speed:70,type:"heavy",size:80,attackSpeed:2,killXp:30,killGold:50}],turrets:[{name:"Rock Thrower",desc:"A simple defensive rock flinger.",cost:100,dmg:10,range:350,attackSpeed:1.5,projType:"arc",projSpeed:350},{name:"Egg Slingshot",desc:"Fires volatile dino eggs.",cost:200,dmg:25,range:400,attackSpeed:2,projType:"arc",projSpeed:400},{name:"Fire Beryl",desc:"Spits concentrated fireballs.",cost:400,dmg:50,range:450,attackSpeed:2.5,projType:"arc",projSpeed:450}]},{name:"Castle Age",evolveXP:1400,baseHp:1500,baseStyle:"castle",theme:{bg:"45 25% 85%",fg:"220 20% 25%",accent:"200 60% 45%"},special:{name:"Arrow Volley",cooldown:60,duration:3,type:"arrows"},units:[{name:"Swordsman",desc:"Armored infantry. Takes half damage from siege shots.",cost:50,hp:120,dmg:25,range:45,speed:55,type:"melee",size:50,attackSpeed:1,killXp:15,killGold:25},{name:"Archer",desc:"Sharp-eyed ranged combatant.",cost:75,hp:70,dmg:20,range:300,speed:50,type:"ranged",size:45,attackSpeed:1.2,projType:"arc",projSpeed:500,killXp:20,killGold:35},{name:"Knight",desc:"Mounted terror of the battlefield.",cost:250,hp:400,dmg:55,range:60,speed:80,type:"heavy",size:90,attackSpeed:1.5,killXp:70,killGold:100}],turrets:[{name:"Catapult",desc:"Lobs heavy stones at attackers.",cost:500,dmg:40,range:450,attackSpeed:1.5,projType:"arc",projSpeed:400},{name:"Ballista",desc:"Fires massive piercing bolts.",cost:750,dmg:80,range:500,attackSpeed:2.5,projType:"straight",projSpeed:800},{name:"Hot Oil",desc:"Boiling defense for close range.",cost:1e3,dmg:150,range:300,attackSpeed:3,projType:"arc",projSpeed:300}]},{name:"Renaissance",evolveXP:4500,baseHp:4e3,baseStyle:"fort",theme:{bg:"30 20% 88%",fg:"10 30% 25%",accent:"0 50% 50%"},special:{name:"Cannon Barrage",cooldown:60,duration:4,type:"cannons"},units:[{name:"Halberdier",desc:"Long-reaching infantry. Takes half damage from siege shots.",cost:200,hp:400,dmg:80,range:65,speed:50,type:"melee",size:50,attackSpeed:1.2,killXp:40,killGold:60},{name:"Musketeer",desc:"Deadly black powder marksman.",cost:300,hp:250,dmg:100,range:400,speed:45,type:"ranged",size:45,attackSpeed:2,projType:"straight",projSpeed:1200,killXp:50,killGold:80},{name:"Field Cannon",splashRadius:65,siegeMultiplier:2,desc:"Siege gun: 2x base damage; splashes two nearby troops at 35%.",cost:900,hp:1e3,dmg:250,range:450,speed:30,type:"ranged",size:75,attackSpeed:3,projType:"arc",projSpeed:600,killXp:150,killGold:300}],turrets:[{name:"Swivel Gun",desc:"Fast firing anti-infantry gun.",cost:1500,dmg:100,range:450,attackSpeed:1,projType:"straight",projSpeed:1200},{name:"Heavy Cannon",desc:"Slow firing massive damage.",cost:2500,dmg:250,range:500,attackSpeed:2.5,projType:"arc",projSpeed:700},{name:"Mortar",desc:"Extreme range plunging fire.",cost:4e3,dmg:500,range:600,attackSpeed:4,projType:"arc",projSpeed:500}]},{name:"Modern Age",evolveXP:15e3,baseHp:12e3,baseStyle:"bunker",theme:{bg:"120 10% 85%",fg:"120 20% 20%",accent:"30 70% 50%"},special:{name:"Airstrike",cooldown:60,duration:5,type:"airstrike"},units:[{name:"Infantry",desc:"Trench fighter. Takes half damage from siege shots.",cost:1500,hp:1200,dmg:250,range:50,speed:60,type:"melee",size:50,attackSpeed:.8,killXp:200,killGold:300},{name:"Marine",desc:"Rapid-fire assault troops.",cost:2e3,hp:800,dmg:130,range:400,speed:55,type:"ranged",size:45,attackSpeed:.65,projType:"straight",projSpeed:1800,killXp:250,killGold:400},{name:"Tank",splashRadius:80,siegeMultiplier:2,desc:"Armored siege: 2x base damage; splashes two nearby troops at 35%.",cost:6500,hp:4500,dmg:800,range:350,speed:40,type:"heavy",size:110,attackSpeed:2.5,projType:"straight",projSpeed:1e3,killXp:800,killGold:1200}],turrets:[{name:"Machine Gun",desc:"Shreds lightly armored units.",cost:6e3,dmg:80,range:500,attackSpeed:.15,projType:"straight",projSpeed:2e3},{name:"Rocket Pod",desc:"Fires armor piercing missiles.",cost:9e3,dmg:600,range:550,attackSpeed:2,projType:"straight",projSpeed:800},{name:"Artillery",desc:"Long range explosive barrage.",cost:15e3,dmg:1500,range:700,attackSpeed:3.5,projType:"arc",projSpeed:800}]},{name:"Future Age",evolveXP:5e4,baseHp:4e4,baseStyle:"dome",theme:{bg:"210 30% 25%",fg:"210 60% 85%",accent:"180 80% 60%"},special:{name:"Orbital Laser",cooldown:60,duration:4,type:"laser"},units:[{name:"Energy Blade",desc:"Cyber swordsman. Takes half damage from siege shots.",cost:5e3,hp:5e3,dmg:1e3,range:60,speed:70,type:"melee",size:55,attackSpeed:1,killXp:800,killGold:1e3},{name:"Blaster",desc:"Fires concentrated energy beams.",cost:7e3,hp:3e3,dmg:600,range:420,speed:60,type:"ranged",size:50,attackSpeed:.8,projType:"laser",projSpeed:3e3,killXp:1e3,killGold:1500},{name:"War Mech",splashRadius:90,siegeMultiplier:2,desc:"Siege beams: 2x base damage; splashes two nearby troops at 35%.",cost:2e4,hp:15e3,dmg:3e3,range:400,speed:45,type:"heavy",size:130,attackSpeed:2,projType:"laser",projSpeed:3e3,killXp:3e3,killGold:4e3}],turrets:[{name:"Laser Gatling",desc:"Unending beam of light.",cost:2e4,dmg:300,range:550,attackSpeed:.2,projType:"laser",projSpeed:3e3},{name:"Ion Cannon",desc:"Heavy anti-armor blasts.",cost:4e4,dmg:2500,range:600,attackSpeed:2,projType:"laser",projSpeed:3e3},{name:"Plasma Ray",desc:"Melts organic matter.",cost:8e4,dmg:6e3,range:800,attackSpeed:3,projType:"arc",projSpeed:1200}]},{name:"Cosmic Age",evolveXP:9999999,baseHp:15e4,baseStyle:"portal",theme:{bg:"260 40% 10%",fg:"280 50% 80%",accent:"300 80% 60%"},special:{name:"Void Rift",cooldown:70,duration:5,type:"orbital"},units:[{name:"Hover Drone",desc:"Swift hunter. Takes half damage from siege shots.",cost:15e3,hp:14e3,dmg:2400,range:70,speed:85,type:"melee",size:60,attackSpeed:1,killXp:2e3,killGold:3e3},{name:"Void Ray",desc:"Channels antimatter.",cost:2e4,hp:8e3,dmg:2400,range:500,speed:70,type:"ranged",size:55,attackSpeed:1,projType:"laser",projSpeed:4e3,killXp:3e3,killGold:4500},{name:"Mothership",splashRadius:140,siegeMultiplier:2,desc:"Siege orbs: 2x base damage; splashes two nearby troops at 35%.",cost:65e3,hp:5e4,dmg:8e3,range:550,speed:35,type:"heavy",size:160,attackSpeed:3,projType:"orb",projSpeed:600,killXp:1e4,killGold:15e3}],turrets:[{name:"Plasma Rep.",cost:5e4,dmg:1200,range:600,attackSpeed:.3,projType:"laser",projSpeed:4e3},{name:"Black Hole",cost:1e5,dmg:6e3,range:650,attackSpeed:2.5,projType:"orb",projSpeed:500},{name:"Antimatter",cost:2e5,dmg:2e4,range:900,attackSpeed:4,projType:"laser",projSpeed:5e3}]}];function Ed(i){i&&typeof i=="object"&&(Object.values(i).forEach(Ed),Object.freeze(i))}Ed(Yt);var al="2.0.0";var ie=.016666666666666666,ce=1280;var nn=600,ne=180,wd=80,Gn=[500,1500,3500,8e3,18e3,35e3,75e3,15e4,35e4,75e4],Ad=[5,12,35,200,700,1800],di=Object.freeze({normal:{name:"Normal",color:"hsl(var(--diff-normal))",hpMult:1,dmgMult:1,econMult:1,xpMult:1,baseGold:175,baseHpMult:1,thinkRate:1.8,aiAggression:.35},hard:{name:"Hard",color:"hsl(var(--diff-hard))",hpMult:1.2,dmgMult:1.1,econMult:1.4,xpMult:1.2,baseGold:250,baseHpMult:1.2,thinkRate:1.15,aiAggression:.58},harder:{name:"Harder",color:"hsl(var(--diff-harder))",hpMult:1.5,dmgMult:1.3,econMult:2,xpMult:1.5,baseGold:500,baseHpMult:1.5,thinkRate:.65,aiAggression:.82},impossible:{name:"Impossible",color:"hsl(var(--diff-impossible))",hpMult:2,dmgMult:1.5,econMult:4,xpMult:2.5,baseGold:1500,baseHpMult:2,thinkRate:.28,aiAggression:1}});var ol="tabletop-1.0.0",Ot=Object.freeze({minX:95,maxX:1185,minZ:-270,maxZ:270,worldScale:2.4/ce,centerZ:.14,dockX:48,dockZ:Object.freeze([-.185,.46,-.35,.6].map(i=>(i-.14)/(2.4/ce))),guideTicks:720,guideCooldown:60,maxNudge:160}),be=i=>i.battlefield==="tabletop",Ri=(i,t,e)=>Math.max(t,Math.min(e,i)),os=i=>Math.round(i*1e6)/1e6,si=i=>Math.min(34,i.size*.3),pn=i=>(i-ce/2)*Ot.worldScale,vi=i=>Ot.centerZ+i*Ot.worldScale,ll=i=>i/Ot.worldScale+ce/2,Yr=i=>(i-Ot.centerZ)/Ot.worldScale,Ge=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Sx=i=>i===1?ne:ce-ne;function Ks(i){return{kind:"base",team:i,x:i===1?75:1205,z:0,radius:70}}function sn(i,t){return{kind:"turret",team:i,slot:t,x:i===1?Ot.dockX:ce-Ot.dockX,z:Ot.dockZ[t],radius:32}}function Cd(i,t,e=1){return Yt[i].baseHp*(.24+t*.08)*e}function mn(i,t){if(!t)return null;if(t.kind==="unit")return i.units.find(n=>n.id===t.id&&n.hp>0)??null;let e=t.team===1?i.player:i.enemy;return t.kind==="base"?e.hp>0?{...Ks(t.team),hp:e.hp}:null:t.kind==="turret"&&e.turrets[t.slot]!==null&&e.turretIds[t.slot]===t.id?{...sn(t.team,t.slot),id:t.id,hp:e.turretHp[t.slot]}:null}function gn(i){return i.kind==="base"?{kind:"base",team:i.team}:i.kind==="turret"?{kind:"turret",team:i.team,slot:i.slot,id:i.id}:{kind:"unit",id:i.id}}function nh(i,t,e,n){let s=n===void 0?[0,-200,200,-100,100]:[n],r=null,a=1/0;for(let o of s){let c={x:Sx(t),z:o};if(i.units.some(u=>Ge(u,c)<si(u)+si(e)+5))continue;let h=i.units.filter(u=>u.team===t&&Math.abs(u.z-o)<75).length,l=i.units.filter(u=>u.team!==t&&Math.abs(u.x-c.x)<400&&Math.abs(u.z-o)<90).length,d=h*2-Math.min(2,l)+Math.abs(o)/1e3;d<a&&(a=d,r=o)}return r}function Id(i,t,e){if(!be(i))return"wrong-battlefield";if(!Number.isSafeInteger(e.id))return"invalid-unit";let n=i.units.find(s=>s.id===e.id&&s.team===t&&s.hp>0);return!n||n.drawProgress<1?"unavailable-unit":![e.x,e.z].every(Number.isFinite)||e.x<Ot.minX||e.x>Ot.maxX||e.z<Ot.minZ||e.z>Ot.maxZ?"invalid-position":i.tick<n.guideReady?"guide-cooldown":null}function cl(i,t,e,n){let s=t===1?i.enemy:i.player,r=null,a=1/0;if((n.x-640)*t>350)for(let o of[Ks(-t),...s.turrets.flatMap((c,h)=>c===null?[]:[{...sn(-t,h),id:s.turretIds[h]}])]){let c=Ge(n,o);c<a&&(a=c,r=gn(o))}return{z:os(Ri(n.z,Math.max(Ot.minZ+si(e),e.z-Ot.maxNudge),Math.min(Ot.maxZ-si(e),e.z+Ot.maxNudge))),target:r,until:i.tick+Ot.guideTicks}}var Rd=[-.02+.078*Math.cos(-1.05)-.075*Math.sin(-1.05),.076+.078*Math.sin(-1.05)+.075*Math.cos(-1.05)],bx=[.047*Math.cos(.16)-.036*Math.sin(.16)-.016,.05+.047*Math.sin(.16)+.036*Math.cos(.16)],Tx=[[Rd,[.022,.132],[.039,.204]],[Rd,[.112,.084],[.055,.12]],[[.074,.092],[.074,.092],[.019,.162]],[[.083,.0852],bx,[.119,.1536]],[[.063,.10792],[.089,.1154],[.1,.123]],[[.064,.1242],[.012,.126],[.025,.137]]];function Pd(i,t,e,n,s){let r=sn(i,t),[a,o]=Tx[e][n],c=a*.83/Ot.worldScale;return{x:r.x+Math.cos(s)*c,z:r.z+Math.sin(s)*c,y:600-(.044+o*.83)/Ot.worldScale}}function pe(i,t){return t===1?i.player:i.enemy}function Hi(i,t,e){return(1+pe(i,t).upgrades[e]*{dmg:.15,hp:.25,econ:.2}[e])*(t===-1?di[i.difficulty][`${e}Mult`]:1)}function Ld(i,t){return Ad[pe(i,t).age]*Hi(i,t,"econ")}function Zr(i){let t=i.rng>>>0;return t^=t<<13,t^=t>>>17,t^=t<<5,i.rng=t>>>0,i.rng/4294967296}function Ue(i,t,e={}){i.events.push({tick:i.tick,type:t,...e})}function Dd({seed:i=1,difficulty:t="normal",startAge:e=0,opponent:n=!0,battlefield:s}={}){if(!Number.isInteger(i)||i<0||i>4294967295)throw new Error("seed must be a uint32");if(!Object.hasOwn(di,t))throw new Error("Unknown difficulty");if(!Number.isInteger(e)||e<0||e>=Yt.length)throw new Error("Invalid startAge");if(typeof n!="boolean")throw new Error("opponent must be boolean");if(s!==void 0&&s!=="tabletop")throw new Error("Unknown battlefield");let r=di[t],a=o=>{let c=Yt[e].baseHp*(o===-1?r.baseHpMult:1);return{hp:c,maxHp:c,age:e,gold:(o===-1?r.baseGold:175)*Yt[e].units[0].cost/15,xp:e?Yt[e-1].evolveXP:0,upgrades:{dmg:0,hp:0,econ:0},turrets:[null,null,null,null],turretProgress:[1,1,1,1],turretTimers:[0,0,0,0],unlockedSlots:1,specialTimer:0,drawProgress:1,deployTimer:0,rng:(i||1)>>>0,...s?{turretHp:[0,0,0,0],turretMaxHp:[0,0,0,0],turretIds:[null,null,null,null],turretAim:Array.from({length:4},()=>({heading:o===1?0:Math.PI,target:null}))}:{}}};return{version:s?ol:al,...s?{battlefield:s}:{},seed:i,difficulty:t,tick:0,nextId:1,running:!0,paused:!1,winner:null,player:a(1),enemy:a(-1),units:[],projectiles:[],specials:[],events:[],agreements:{noSpecials:!1,noTurrets:!1,meleeOnly:!1},restraintUntil:0,opponent:{enabled:n,nextTick:Math.round(.8*60),order:"balanced",lastAction:"",emotion:"Centered"},metrics:{firstContactTick:null,kills:{1:0,"-1":0},spent:{1:0,"-1":0},damage:{1:0,"-1":0},spawned:{1:0,"-1":0},peakUnits:0,evolutions:[]}}}function Wn(i,t,e){if(t!==1&&t!==-1)return"invalid-team";if(!e||typeof e!="object"||Array.isArray(e))return"invalid-command";if(!i.running)return"match-ended";if(i.paused)return"paused";let n=pe(i,t),s=Yt[n.age],r=t===-1?i.agreements:{};if(e.type==="guide")return Id(i,t,e);if(n.drawProgress<1)return"base-drawing";switch(e.type){case"unit":return!Number.isInteger(e.index)||!s.units[e.index]?"invalid-unit":Object.hasOwn(e,"z")&&(!be(i)||!Number.isFinite(e.z)||e.z<Ot.minZ+si(s.units[e.index])||e.z>Ot.maxZ-si(s.units[e.index]))?"invalid-position":r.meleeOnly&&s.units[e.index].type==="ranged"?"pact":t===-1&&i.tick<i.restraintUntil?"truce":n.deployTimer>0?"deploying":(be(i)?nh(i,t,s.units[e.index],e.z)===null:i.units.some(a=>a.team===t&&a.range<=s.units[e.index].range&&Math.abs(a.x-(t===1?ne:ce-ne))<(a.size+s.units[e.index].size)/2+10))?"deployment-blocked":i.units.filter(a=>a.team===t).length>=wd?"unit-cap":n.gold<s.units[e.index].cost?"gold":null;case"turret":return!Number.isInteger(e.index)||!s.turrets[e.index]?"invalid-turret":r.noTurrets?"pact":n.turrets.slice(0,n.unlockedSlots).includes(null)?n.gold<s.turrets[e.index].cost?"gold":null:"slots-full";case"sell":return Object.hasOwn(e,"slot")?!Number.isInteger(e.slot)||e.slot<0||e.slot>=n.unlockedSlots?"invalid-slot":n.turrets[e.slot]===null?"no-turret":null:n.turrets.some(a=>a!==null)?null:"no-turret";case"slot":return n.unlockedSlots>=4?"slots-full":n.gold<n.unlockedSlots*500?"gold":null;case"upgrade":return["hp","dmg","econ"].includes(e.stat)?n.upgrades[e.stat]>=Gn.length?"max-upgrade":n.gold<Gn[n.upgrades[e.stat]]?"gold":null:"invalid-upgrade";case"evolve":return n.age>=Yt.length-1?"max-age":n.xp<s.evolveXP?"xp":null;case"special":return r.noSpecials?"pact":t===-1&&i.tick<i.restraintUntil?"truce":n.specialTimer>0?"cooldown":null;default:return"unknown-command"}}function Jr(i,t,e){let n=Wn(i,t,e);if(n)return{ok:!1,error:n};let s=pe(i,t),r=Yt[s.age],a=o=>{s.gold-=o,i.metrics.spent[t]+=o};switch(e.type){case"unit":{let o=r.units[e.index],c=o.hp*Hi(i,t,"hp");a(o.cost),s.deployTimer=.4;let h={...o,id:i.nextId++,team:t,age:s.age,uType:e.index,x:t===1?ne:ce-ne,y:nn,hp:c,maxHp:c,attackCooldown:0,drawProgress:0,active:!0,isAttacking:!1,moving:!0,animTimer:0,animOffset:i.nextId*17%100};be(i)&&Object.assign(h,{z:nh(i,t,o,e.z),heading:t===1?0:Math.PI,target:null,thinkAt:0,guide:null,guideReady:0,intent:"advancing"}),be(i)&&(h.routeZ=h.z),i.units.push(h),i.metrics.spawned[t]++,Ue(i,"spawn",{team:t,id:h.id,index:e.index,x:h.x,y:h.y,size:h.size});break}case"turret":{let o=s.turrets.findIndex((c,h)=>c===null&&h<s.unlockedSlots);a(r.turrets[e.index].cost),s.turrets[o]=e.index,s.turretProgress[o]=0,s.turretTimers[o]=0,be(i)&&(s.turretHp[o]=s.turretMaxHp[o]=Cd(s.age,e.index,Hi(i,t,"hp")),s.turretIds[o]=i.nextId++,s.turretAim[o]={heading:t===1?0:Math.PI,target:null});break}case"sell":{let o=Object.hasOwn(e,"slot")?e.slot:s.turrets.findLastIndex(c=>c!==null);s.gold+=r.turrets[s.turrets[o]].cost*.5,s.turrets[o]=null,s.turretTimers[o]=0,be(i)&&(s.turretHp[o]=s.turretMaxHp[o]=0,s.turretIds[o]=null,s.turretAim[o].target=null);break}case"guide":{let o=i.units.find(c=>c.id===e.id);o.guide=cl(i,t,o,e),o.guideReady=i.tick+Ot.guideCooldown,o.thinkAt=0,Ue(i,"guide",{team:t,id:o.id,z:o.guide.z,target:o.guide.target});break}case"slot":a(s.unlockedSlots*500),s.unlockedSlots++;break;case"upgrade":{a(Gn[s.upgrades[e.stat]]),s.upgrades[e.stat]++,e.stat==="hp"&&Nd(i,t);break}case"evolve":if(s.age++,s.drawProgress=0,Nd(i,t),s.gold+=s.turrets.reduce((o,c)=>o+(c===null?0:r.turrets[c].cost*.5),0),s.turrets.fill(null),s.turretTimers.fill(0),s.turretProgress.fill(1),be(i)){s.turretHp.fill(0),s.turretMaxHp.fill(0),s.turretIds.fill(null);for(let o of s.turretAim)o.target=null}i.metrics.evolutions.push({tick:i.tick,team:t,age:s.age}),Ue(i,"evolve",{team:t,age:s.age});break;case"special":{s.specialTimer=r.special.cooldown;let o=i.units.filter(d=>d.team!==t),c=s.age===4?150:300,h=o.map(d=>({x:d.x,...be(i)?{z:d.z}:{},value:o.filter(u=>(be(i)?Math.hypot(u.x-d.x,u.z-d.z):Math.abs(u.x-d.x))<c).reduce((u,f)=>u+f.cost,0)})).sort((d,u)=>u.value-d.value||(d.x-u.x)*t)[0],l=h?.x??(t===1?ce-300:300);i.specials.push({id:i.nextId++,team:t,age:s.age,x:l,...be(i)?{z:h?.z??0}:{},remaining:Math.round(r.special.duration*60),nextPulse:0}),Ue(i,"special",{team:t,age:s.age});break}}return Ue(i,"command",{team:t,command:{...e}}),{ok:!0}}function Nd(i,t){let e=pe(i,t),n=Yt[e.age].baseHp*Hi(i,t,"hp")*(t===-1?di[i.difficulty].baseHpMult:1);e.hp+=n-e.maxHp,e.maxHp=n}var jr=i=>i===1?ne:ce-ne,$r=(i,t)=>Math.round(Math.abs(i-t)*1e6)/1e6,Ex=(i,t)=>Math.max(0,(t.x-i.x)*i.team-(i.size+t.size)/2);function Ud(i){let t=[],e=[],n=[];for(let r of[1,-1]){let a=i.units.filter(l=>l.team===r).sort((l,d)=>(d.x-l.x)*r||l.id-d.id),o=i.units.filter(l=>l.team!==r&&l.drawProgress>=.8).sort((l,d)=>(l.x-d.x)*r||l.id-d.id),c=null;for(let l of a){if(l.attackCooldown=Math.max(0,l.attackCooldown-ie),l.animTimer=Math.max(0,l.animTimer-ie),l.drawProgress<1){l.drawProgress=Math.min(1,l.drawProgress+ie*2),c=l;continue}let d=o.find(m=>(m.x-l.x)*r>=-(l.size+m.size)/2),u=!d,f=d?Ex(l,d):Math.max(0,(jr(-r)-l.x)*r-l.size/2);if(l.isAttacking=f<=l.range+1e-6,l.moving=!l.isAttacking,l.isAttacking){if(l.siegeMultiplier&&!u){let m=Math.min(l.speed*ie*.35,Math.max(0,f-20));m>0&&(e.push([l,l.x+r*m]),l.moving=!0)}if(i.metrics.firstContactTick===null&&(i.metrics.firstContactTick=i.tick),l.attackCooldown<=1e-9){l.attackCooldown=l.attackSpeed,l.animTimer=.3;let m=l.dmg*Hi(i,r,"dmg");l.projType?n.push({x:l.x,y:l.y-l.size*.7,targetX:d?d.x:jr(-r),targetY:d?d.y-d.size/2:nn-40,type:l.projType,speed:l.projSpeed,dmg:m*(u&&l.siegeMultiplier||1),team:r,targetId:d?.id??null,targetIsBase:u,splashRadius:l.splashRadius||0}):(t.push({team:r,targetId:d?.id??null,dmg:m}),Ue(i,"melee",{team:r,x:l.x+r*l.size/2,y:l.y-l.size/2}))}}else{let m=Math.min(l.speed*ie,Math.max(0,f-l.range));c&&c.range<=l.range&&(m=Math.min(m,Math.max(0,(c.x-l.x)*r-(c.size+l.size)/2-10))),e.push([l,Math.max(ne,Math.min(ce-ne,l.x+r*m))]),l.moving=m>0}c=l}let h=pe(i,r);for(let l=0;l<h.unlockedSlots;l++){if(h.turretTimers[l]=Math.max(0,h.turretTimers[l]-ie),h.turrets[l]===null||h.turretProgress[l]<1||h.turretTimers[l]>1e-9)continue;let d=Yt[h.age].turrets[h.turrets[l]],u=jr(r)-r*10,f=o.find(m=>Math.abs(m.x-u)<=d.range+1e-6);f&&(n.push({x:u,y:nn-150-l*90,targetX:f.x,targetY:f.y-f.size/2,type:d.projType,speed:d.projSpeed,dmg:d.dmg*Hi(i,r,"dmg"),team:r,targetId:f.id,targetIsBase:!1}),h.turretTimers[l]=d.attackSpeed)}}for(let[r,a]of e)r.x=Math.round(a*1e6)/1e6;for(let r of n)Fd(i,r);Ax(i,t),wx(i,t);for(let r of t){let a=r.targetId===null?pe(i,-r.team):i.units.find(o=>o.id===r.targetId);a&&(i.metrics.damage[r.team]+=Math.min(Math.max(0,a.hp),r.dmg),a.hp-=r.dmg,Ue(i,"damage",{team:r.team,targetId:r.targetId,amount:r.dmg,x:a.x??jr(-r.team),y:a.y?a.y-a.size/2:nn-100}))}let s=di[i.difficulty];for(let r of i.units){if(r.hp>0)continue;let a=pe(i,-r.team),o=pe(i,r.team);a.gold+=r.killGold*(r.team===1?s.econMult:1),a.xp+=r.killXp*(r.team===1?s.xpMult:1),o.xp+=r.killXp*.5*(r.team===-1?s.xpMult:1),i.metrics.kills[-r.team]++,Ue(i,"death",{team:r.team,id:r.id,x:r.x,y:r.y,size:r.size,gold:r.killGold,xp:r.killXp})}i.units=i.units.filter(r=>r.hp>0),i.metrics.peakUnits=Math.max(i.metrics.peakUnits,i.units.length),(i.player.hp<=0||i.enemy.hp<=0)&&(i.player.hp=Math.max(0,i.player.hp),i.enemy.hp=Math.max(0,i.enemy.hp),i.winner=i.player.hp===0&&i.enemy.hp===0?0:i.enemy.hp===0?1:-1,i.running=!1,Ue(i,"end",{winner:i.winner}))}function Fd(i,t){let e=t.targetX-t.x,n=t.targetY-t.y,s=t.type==="laser",r=["arc","meteor","arrow","cannonball"].includes(t.type),a=s?ie:Math.max(ie,(r?Math.abs(e):Math.hypot(e,n))/t.speed),o=Math.max(1,Math.ceil(a*60-1e-8));i.projectiles.push({...t,id:i.nextId++,startX:t.x,startY:t.y,flightTicks:o,elapsed:0,vx:e/a,vy:n/a-(r?400*a:0),arc:r,active:!0,isSpecial:!!t.isSpecial,hit:!1,life:s?.25:0,trailX:[],trailY:[],trailCount:0})}function wx(i,t){for(let e of i.projectiles){if(e.elapsed++,e.hit){e.life-=ie,e.active=e.life>0;continue}e.trailX.unshift(e.x),e.trailY.unshift(e.y),e.trailX.length=Math.min(10,e.trailX.length),e.trailY.length=e.trailX.length,e.trailCount=e.trailX.length;let n=Math.min(1,e.elapsed/e.flightTicks),s=e.flightTicks/60;if(e.x=e.startX+(e.targetX-e.startX)*n,e.y=e.startY+(e.targetY-e.startY)*n-(e.arc?400*s*s*n*(1-n):0),!(n<1)){if(e.isSpecial){for(let r of i.units)r.team!==e.team&&Math.abs(r.x-e.x)<e.radius&&t.push({team:e.team,targetId:r.id,dmg:e.dmg});Ue(i,"impact",{x:e.x,y:e.y,type:e.type})}else if(e.targetIsBase)t.push({team:e.team,targetId:null,dmg:e.dmg});else{let r=i.units.find(a=>a.id===e.targetId);if(r&&$r(r.x,e.targetX)<=r.size+20){let a=e.splashRadius&&r.uType===0?e.dmg*.5:e.dmg;if(t.push({team:e.team,targetId:r.id,dmg:a}),e.splashRadius){let o=i.units.filter(c=>c.team!==e.team&&c.id!==r.id&&$r(c.x,r.x)<e.splashRadius).sort((c,h)=>$r(c.x,r.x)-$r(h.x,r.x)||c.id-h.id).slice(0,2);for(let c of o)t.push({team:e.team,targetId:c.id,dmg:e.dmg*.35*(c.uType===0?.5:1)});$r(jr(-e.team),r.x)<e.splashRadius&&t.push({team:e.team,targetId:null,dmg:e.dmg*.35})}}}e.hit=!0,e.active=e.type==="laser"}}i.projectiles=i.projectiles.filter(e=>e.active)}function Ax(i,t){for(let e of i.specials){let n=Yt[e.age].special,s=pe(i,e.team),r=e.x;if(n.type==="laser"||n.type==="orbital"){let a=n.type==="laser"?150:300,o=(n.type==="laser"?800:2500)*ie;for(let c of i.units)c.team!==e.team&&Math.abs(c.x-r)<a&&t.push({team:e.team,targetId:c.id,dmg:o})}else if(e.nextPulse--,e.nextPulse<=0){let a={meteor:[8,150,150,"meteor",800],arrows:[30,40,60,"arrow",1e3],cannons:[6,300,120,"cannonball",1200],airstrike:[8,400,120,"bombDrop",800]},[o,c,h,l,d]=a[n.type];e.nextPulse+=60/o;let u=ne+50+Zr(s)*(ce-ne-50),f=e.team===1?u:ce-u;Fd(i,{x:l==="bombDrop"?f:f-e.team*200,y:-50,targetX:f,targetY:nn,team:e.team,type:l,speed:d,dmg:c,radius:h,targetId:null,targetIsBase:!1,isSpecial:!0})}e.remaining--}i.specials=i.specials.filter(e=>e.remaining>0)}function sh(i,t=-1,e="adaptive"){let n=pe(i,t),s=pe(i,-t),r=Yt[n.age],a=i.units.filter(v=>v.team===t),o=i.units.filter(v=>v.team!==t),c=t===1?ne:ce-ne,h=o.filter(v=>Math.abs(v.x-c)<500),l=o.filter(v=>Math.abs(v.x-c)<320),d=v=>!Wn(i,t,v),u={type:"evolve"};if(d(u))return u;let f={type:"special"};if(e!=="passive"&&d(f)&&(o.length>=3||l.length>0&&n.hp<n.maxHp*.4))return f;if(e==="passive")return null;let m=[],x=(v,R)=>{d(v)?m.push({command:v,score:R}):v.type==="unit"&&v.index>0&&Wn(i,t,v)==="gold"&&l.length===0&&a.length>=1&&m.push({command:null,score:R})},g=a.filter(v=>v.type!=="ranged").length,p=a.filter(v=>v.type==="ranged").length,T=o.filter(v=>v.type==="ranged").length,A=t===-1?i.opponent.emotion.toLowerCase():"centered",S=/angry|furious|brave|confident|excited|eager/.test(A),b=/afraid|anxious|worried|scared|tense|sad|weary/.test(A);for(let v=0;v<r.units.length;v++){let R=r.units[v],y=2;e==="melee"?y+=v===0?10:-10:e==="ranged"?y+=v===1?10:-10:e==="heavy"?y+=v===2?10:-10:e==="mixed"?y+=v===i.metrics.spawned[t]%3?5:0:(R.type==="ranged"?y+=g>0?3:-.5:y+=g===0?3:0,v===2&&(y+=T>1?2:.5),v===2&&s.turrets.some(E=>E!==null)&&(y+=3),v===2&&o.length>=3&&a.filter(E=>E.uType===2).length<2&&(y+=3),S&&v===2&&(y+=.5),b&&v===0&&(y+=.5),R.type==="ranged"&&p>=Math.max(2,g*2)&&(y-=3),v===0&&g>Math.max(2,p)&&(y-=2),y+=Math.min(1,R.hp*R.dmg/R.attackSpeed/(R.cost*R.cost))),!(e==="heavy"&&v!==2&&h.length<2)&&(e==="melee"&&v!==0||e==="ranged"&&v!==1||x({type:"unit",index:v},y))}if(e==="adaptive"||e==="turtle"||e==="mixed"){if(l.length>=2||e==="turtle"){for(let v=0;v<r.turrets.length;v++)x({type:"turret",index:v},3+h.length*.7+(e==="turtle"?5:0)+v*.1);n.turrets.every((v,R)=>R>=n.unlockedSlots||v!==null)&&x({type:"slot"},e==="turtle"?6:h.length>4?4:0)}if(a.length>=1||n.gold>=r.units[2].cost*2)for(let v of["econ","dmg","hp"]){let R=n.upgrades[v],y=Gn[R];n.gold>=y+r.units[0].cost*.25&&x({type:"upgrade",stat:v},v==="econ"?h.length<2?5:2:5.5)}}return m.sort((v,R)=>R.score-v.score),m[0]?.command??null}function Od(i){if(!i.opponent.enabled||i.tick<i.opponent.nextTick)return;let t=di[i.difficulty];i.opponent.nextTick=i.tick+Math.max(1,Math.round(t.thinkRate*60));let e=sh(i);e&&Jr(i,-1,e).ok?(i.opponent.lastAction=e.type,i.opponent.order=e.type==="turret"?"defend":e.type==="evolve"?"tech":e.type==="special"?"special":"counter"):i.opponent.order="hold"}var Bd=i=>i.radius??si(i),Kr=(i,t)=>Math.max(0,Ge(i,t)-si(i)-Bd(t)),ah=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),rh=(i,t,e)=>os(i+Ri(ah(i,t),-e*ie,e*ie));function kd(i,t){let e=pe(i,t);return[Ks(t),...e.turrets.flatMap((n,s)=>n===null?[]:[{...sn(t,s),id:e.turretIds[s]}])]}function Rx(i,t,e){let n=Ks(e),s=t.x-i.x,r=t.z-i.z,a=Ri(((n.x-i.x)*s+(n.z-i.z)*r)/(s*s+r*r||1),0,1);return Math.hypot(i.x+s*a-n.x,i.z+r*a-n.z)>n.radius}function Cx(i,t,e){let n=mn(i,t.target),s=e.filter(d=>d.drawProgress>=.8&&Kr(t,d)<Math.max(t.uType===2&&!t.guide?450:180,t.range+70)),r=s.filter(d=>Kr(t,d)<75),a=r.length?r:s;if(a.length)return a.sort((d,u)=>Kr(t,d)-(n?.id===d.id?45:0)-(Kr(t,u)-(n?.id===u.id?45:0))||d.id-u.id),t.intent=t.guide?"engaged":"fighting",gn(a[0]);let o=mn(i,t.guide?.target);if(o)return t.intent="following",gn(o);let c=t.guide?.z??t.routeZ,h=kd(i,-t.team),l=d=>Math.abs(d.z-c)*1.35+(d.kind==="turret"?t.uType===2?-65:5:0)+(n?.kind===d.kind&&n?.slot===d.slot?-20:0);return h.sort((d,u)=>l(d)-l(u)||(d.slot??-1)-(u.slot??-1)),t.intent=t.guide?"following":h[0].kind==="turret"?"flanking":"advancing",gn(h[0])}function Ix(i,t,e){let n=si(t);i.x=Ri(i.x,Ot.minX,Ot.maxX),i.z=Ri(i.z,Ot.minZ+n,Ot.maxZ-n);for(let s of e){let r=i.x-s.x,a=i.z-s.z,o=Math.hypot(r,a),c=s.radius+n;o<c&&(i.x=s.x+(o?r/o:s.team)*c,i.z=s.z+(o?a/o:0)*c)}i.x=os(Ri(i.x,Ot.minX,Ot.maxX)),i.z=os(Ri(i.z,Ot.minZ+n,Ot.maxZ-n))}function Px(i,t){let e=[1,-1].flatMap(s=>[Ks(s),...Array.from({length:pe(i,s).unlockedSlots},(r,a)=>sn(s,a))]),n=t.map(()=>({x:0,z:0}));for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){let a=t[s],o=t[r],c=o.x-a.x,h=o.z-a.z,l=si(a.u)+si(o.u)+3;if(Math.abs(c)>=l||Math.abs(h)>=l)continue;let d=Math.hypot(c,h);if(d>=l)continue;let u=Math.min(1.4,(l-d)*.5),f=d?c/d:a.u.team!==o.u.team?a.u.team:0,m=d?h/d:a.u.team===o.u.team?1:0;n[s].x-=f*u,n[s].z-=m*u,n[r].x+=f*u,n[r].z+=m*u}for(let s=0;s<t.length;s++){let r=t[s],a=r.u;r.x+=n[s].x,r.z+=n[s].z,Ix(r,a,e);let o=Ge(r,a),c=a.speed*ie;o>c&&(r.x=a.x+(r.x-a.x)*c/o,r.z=a.z+(r.z-a.z)*c/o),r.x=os(r.x),r.z=os(r.z),a.moving=Ge(r,a)>.01,a.x=r.x,a.z=r.z}}function zd(i){let t=[],e=[],n=[],s={1:i.units.filter(r=>r.team===1),"-1":i.units.filter(r=>r.team===-1)};for(let r of i.units){if(r.attackCooldown=Math.max(0,r.attackCooldown-ie),r.animTimer=Math.max(0,r.animTimer-ie),r.guide&&i.tick>=r.guide.until&&(r.routeZ=r.guide.z,r.guide=null,r.thinkAt=0),r.drawProgress<1){r.drawProgress=Math.min(1,r.drawProgress+ie*2);continue}(i.tick>=r.thinkAt||!mn(i,r.target))&&(r.target=Cx(i,r,s[-r.team]),r.thinkAt=i.tick+12);let a=mn(i,r.target);if(!a)continue;let o=Kr(r,a),c=r.target.kind!=="unit";r.isAttacking=o<=r.range+1e-6;let h=Math.atan2(a.z-r.z,a.x-r.x),l={u:r,x:r.x,z:r.z};if(r.isAttacking){if(r.heading=rh(r.heading,h,9),r.siegeMultiplier&&!c&&o>35){let d=Ge(r,a)||1;l.x+=(a.x-r.x)/d*r.speed*ie*.3,l.z+=(a.z-r.z)/d*r.speed*ie*.3}if(i.metrics.firstContactTick===null&&(i.metrics.firstContactTick=i.tick),r.attackCooldown<=1e-9&&Math.abs(ah(r.heading,h))<.18){r.attackCooldown=r.attackSpeed,r.animTimer=.3;let d=r.dmg*Hi(i,r.team,"dmg")*(c&&r.siegeMultiplier||1);r.projType?e.push({x:r.x+Math.cos(h)*si(r),y:r.y-r.size*.7,z:r.z+Math.sin(h)*si(r),target:a,ref:r.target,type:r.projType,speed:r.projSpeed,dmg:d,team:r.team,sourceRole:r.uType,splashRadius:r.splashRadius||0}):(t.push({team:r.team,ref:r.target,dmg:d}),Ue(i,"melee",{team:r.team,x:r.x,y:r.y-r.size/2,z:r.z}))}}else{let d=r.guide?.z??r.routeZ,u=c&&Math.abs(a.x-r.x)>Math.max(260,r.range+100)?d:a.z,f=c&&Math.abs(u-r.z)>8?Math.sign(a.x-r.x)*Math.min(220,Math.abs(a.x-r.x)):a.x-r.x,m=u-r.z,x=Math.hypot(f,m)||1,g=Math.min(r.speed*ie,Math.max(0,o-r.range));l.x+=f/x*g,l.z+=m/x*g,r.heading=rh(r.heading,Math.atan2(m,f),7)}n.push(l)}for(let r of[1,-1]){let a=pe(i,r);for(let o=0;o<a.unlockedSlots;o++){if(a.turretTimers[o]=Math.max(0,a.turretTimers[o]-ie),a.turrets[o]===null)continue;let c=Yt[a.age].turrets[a.turrets[o]],h=sn(r,o),l=a.turretAim[o],d=s[-r].filter(m=>m.drawProgress>=.8&&Ge(h,m)<=c.range+120&&Rx(h,m,r));d.sort((m,x)=>Ge(h,m)-(m.id===l.target?.id?35:0)-Ge(h,x)+(x.id===l.target?.id?35:0)||m.id-x.id);let u=d[0];if(l.target=u?gn(u):null,!u||a.turretProgress[o]<1)continue;let f=Math.atan2(u.z-h.z,u.x-h.x);l.heading=rh(l.heading,f,3.8),!(a.turretTimers[o]>1e-9||Math.abs(ah(l.heading,f))>.045)&&(l.heading=f,e.push({...Pd(r,o,a.age,a.turrets[o],f),target:u,ref:l.target,sourceSlot:o,sourceId:a.turretIds[o],type:c.projType,speed:c.projSpeed,dmg:c.dmg*Hi(i,r,"dmg"),team:r}),a.turretTimers[o]=c.attackSpeed)}}Px(i,n);for(let r of e)Lx(i,r);Nx(i,t),Dx(i,t);for(let r of t)Ux(i,r);Fx(i)}function Lx(i,t){let{target:e,ref:n,...s}=t,r=e.kind?nn-(e.kind==="base"?65:60):e.y-e.size/2,a=t.type==="laser"?1:Math.max(1,Math.ceil(Ge(t,e)/t.speed*60));i.projectiles.push({...s,id:i.nextId++,target:{...n},targetId:n.id??null,targetIsBase:n.kind==="base",targetX:e.x,targetY:r,targetZ:e.z,startX:t.x,startY:t.y,startZ:t.z,flightTicks:a,elapsed:0,vx:(e.x-t.x)/(a/60),vy:(r-t.y)/(a/60),arc:["arc","meteor","arrow","cannonball"].includes(t.type),active:!0,hit:!1,life:t.type==="laser"?.12:0})}function Dx(i,t){for(let e of i.projectiles){if(e.hit){e.life-=ie,e.active=e.life>0;continue}let n=Math.min(1,++e.elapsed/e.flightTicks),s=e.flightTicks/60;if(e.x=e.startX+(e.targetX-e.startX)*n,e.z=e.startZ+(e.targetZ-e.startZ)*n,e.y=e.startY+(e.targetY-e.startY)*n-(e.arc?Math.min(180,220*s)*n*(1-n):0),n<1)continue;let r=mn(i,e.target);if(r&&Ge(r,{x:e.targetX,z:e.targetZ})<=(r.size||Bd(r))+20){let a=e.splashRadius&&r.uType===0,o=e.sourceRole===1&&r.uType===2?.5:1,c=e.sourceRole===1&&r.uType===0?1.5:1;if(t.push({team:e.team,ref:e.target,dmg:e.dmg*(a?.5:1)*o*c}),e.splashRadius){let h={x:e.targetX,z:e.targetZ},l=i.units.filter(d=>d.team!==e.team&&d.id!==r.id&&Ge(d,h)<e.splashRadius).sort((d,u)=>Ge(d,h)-Ge(u,h)||d.id-u.id).slice(0,2);for(let d of l)t.push({team:e.team,ref:gn(d),dmg:e.dmg*.35*(d.uType===0?.5:1)})}}e.hit=!0,e.active=e.life>0,Ue(i,"impact",{x:e.x,y:e.y,z:e.z,projectileType:e.type})}i.projectiles=i.projectiles.filter(e=>e.active)}function Nx(i,t){for(let e of i.specials){let n=Yt[e.age].special.type,s=n==="laser"||n==="orbital";if(s||--e.nextPulse<=0){let r={meteor:[8,150,150],arrows:[30,40,60],cannons:[6,300,120],airstrike:[8,400,120],laser:[60,13.333333333333334,150],orbital:[60,41.666666666666664,300]},[a,o,c]=r[n];e.nextPulse+=60/a;let h=pe(i,e.team),l=s?e.x:e.x+e.team*(Zr(h)-.5)*420,d=s?e.z:e.z+(Zr(h)-.5)*260;for(let u of i.units)u.team!==e.team&&Ge(u,{x:l,z:d})<c&&t.push({team:e.team,ref:gn(u),dmg:o});for(let u of kd(i,-e.team))u.kind==="turret"&&Ge(u,{x:l,z:d})<c&&t.push({team:e.team,ref:gn(u),dmg:o*.5})}e.remaining--}i.specials=i.specials.filter(e=>e.remaining>0)}function Ux(i,t){let e=mn(i,t.ref);if(!e)return;let n=pe(i,t.ref.team),s=t.ref.kind==="turret";i.metrics.damage[t.team]+=Math.min(Math.max(0,e.hp),t.dmg),s?n.turretHp[t.ref.slot]-=t.dmg:t.ref.kind==="base"?n.hp-=t.dmg:e.hp-=t.dmg,Ue(i,"damage",{team:t.team,targetId:t.ref.id??null,target:t.ref,amount:t.dmg,x:e.x,y:nn-50,z:e.z})}function Fx(i){let t=di[i.difficulty];for(let e of[1,-1]){let n=pe(i,e);for(let s=0;s<4;s++)n.turrets[s]!==null&&n.turretHp[s]<=0&&(Ue(i,"cannon-destroyed",{team:e,slot:s,id:n.turretIds[s],...sn(e,s)}),n.turrets[s]=null,n.turretIds[s]=null,n.turretHp[s]=n.turretMaxHp[s]=n.turretTimers[s]=0,n.turretProgress[s]=1,n.turretAim[s].target=null)}for(let e of i.units)if(e.hp<=0){let n=pe(i,-e.team),s=pe(i,e.team);n.gold+=e.killGold*(e.team===1?t.econMult:1),n.xp+=e.killXp*(e.team===1?t.xpMult:1),s.xp+=e.killXp*.5*(e.team===-1?t.xpMult:1),i.metrics.kills[-e.team]++,Ue(i,"death",{team:e.team,id:e.id,x:e.x,y:e.y,z:e.z,size:e.size,gold:e.killGold,xp:e.killXp})}i.units=i.units.filter(e=>e.hp>0),i.metrics.peakUnits=Math.max(i.metrics.peakUnits,i.units.length),(i.player.hp<=0||i.enemy.hp<=0)&&(i.player.hp=Math.max(0,i.player.hp),i.enemy.hp=Math.max(0,i.enemy.hp),i.winner=i.player.hp===0&&i.enemy.hp===0?0:i.enemy.hp===0?1:-1,i.running=!1,Ue(i,"end",{winner:i.winner}))}function Vd(i){if(!i.running||i.paused)return!1;i.tick++;for(let t of[1,-1]){let e=pe(i,t);if(e.gold+=Ld(i,t)*ie,e.age<Yt.length-1){let n=e.age?Yt[e.age-1].evolveXP:0;e.xp+=(Yt[e.age].evolveXP-n)/110*ie*(t===-1?di[i.difficulty].xpMult:1)}e.specialTimer=Math.max(0,e.specialTimer-ie),e.deployTimer=Math.max(0,e.deployTimer-ie),e.drawProgress=Math.min(1,e.drawProgress+ie*.3);for(let n=0;n<4;n++)e.turretProgress[n]=Math.min(1,e.turretProgress[n]+ie*.5)}return Od(i),be(i)?zd(i):Ud(i),!0}function hl(i,t,e,n){if(!Number.isSafeInteger(i)||i<t||i>e)throw new Error(`Invalid ${n}`)}function Hd(i){if(!i||typeof i!="object"||Array.isArray(i))throw new Error("Invalid command");let t={unit:["index","z"],guide:["id","x","z"],turret:["index"],upgrade:["stat"],sell:["slot"],slot:[],evolve:[],special:[]};if(!Object.hasOwn(t,i.type))throw new Error("Unknown command type");if(Object.keys(i).some(e=>e!=="type"&&!t[i.type].includes(e)))throw new Error("Unknown command field");return structuredClone(i)}function ul(i){return Array.isArray(i)?`[${i.map(ul).join(",")}]`:i&&typeof i=="object"?`{${Object.keys(i).sort().map(t=>`${JSON.stringify(t)}:${ul(i[t])}`).join(",")}}`:JSON.stringify(i)}function Ox(i){let t=2166136261;for(let e of ul(i))t=Math.imul(t^e.charCodeAt(0),16777619);return(t>>>0).toString(16).padStart(8,"0")}var ls=class i{#t;#n;#s=[];#e=new Map;constructor(t={}){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Invalid options");if(Object.keys(t).some(e=>!["seed","difficulty","startAge","opponent","battlefield"].includes(e)))throw new Error("Unknown option");this.#t=Dd(t),this.#n={seed:this.#t.seed,difficulty:this.#t.difficulty,startAge:this.#t.player.age,opponent:this.#t.opponent.enabled},this.#t.battlefield&&(this.#n.battlefield=this.#t.battlefield)}observe(){let t=structuredClone(this.#t);return t.events=[],t}get tick(){return this.#t.tick}get running(){return this.#t.running}get paused(){return this.#t.paused}get winner(){return this.#t.winner}legal(t,e){return!Wn(this.#t,t,Hd(e))}decide(t=1,e="adaptive"){if(![1,-1].includes(t)||!["adaptive","mixed","melee","ranged","heavy","turtle","passive"].includes(e))throw new Error("Invalid policy");return sh(this.#t,t,e)}command(t,e,n){let s=Hd(e);return this.#r(n,{team:t,command:s},()=>{let r=Jr(this.#t,t,s);return r.ok&&this.#i("command",{team:t,command:s}),r})}client(t){if(t!==1&&t!==-1)throw new Error("Invalid team");return Object.freeze({observe:()=>this.observe(),command:(e,n)=>this.command(t,e,n),legal:e=>this.legal(t,e)})}advance(t,{events:e=!0}={}){hl(t,0,36e3,"tick count");let n=e?this.#t.events.splice(0):[];this.#t.events.length=0;for(let s=0;s<t&&Vd(this.#t);s++)e&&n.push(...this.#t.events),this.#t.events.length=0;return{tick:this.tick,events:n,running:this.running}}advanceOnce(t,e){return this.#r(t,{advance:e},()=>this.advance(e))}pause(t){if(typeof t!="boolean")throw new Error("Invalid pause");this.#t.paused=t,this.#i("pause",{paused:t})}agreements(t){if(!t||typeof t!="object"||Array.isArray(t)||Object.keys(t).some(e=>!["noSpecials","noTurrets","meleeOnly"].includes(e)||typeof t[e]!="boolean"))throw new Error("Invalid agreements");Object.assign(this.#t.agreements,t),this.#i("agreements",{value:structuredClone(t)})}truce(t){hl(t,0,300,"truce"),this.#t.restraintUntil=t?Math.max(this.#t.restraintUntil,this.tick+t*60):0,this.#i("truce",{seconds:t})}emotion(t){if(typeof t!="string"||!t.trim()||t.length>80)throw new Error("Invalid emotion");this.#t.opponent.emotion=t.trim(),this.#i("emotion",{word:t.trim()})}#i(t,e){this.#s.push({tick:this.tick,type:t,...e})}#r(t,e,n){if(t===void 0)return n();if(typeof t!="string"||!t||t.length>128)throw new Error("Invalid request id");let s=ul(e),r=this.#e.get(t);if(r){if(r.fingerprint!==s)throw new Error("Request id conflict");return structuredClone(r.result)}if(this.#e.size>=1e4)throw new Error("Request receipt limit reached; start a new session");let a=n();return this.#e.set(t,{fingerprint:s,result:structuredClone(a)}),a}digest(){return Ox(this.observe())}replay(){return{version:this.#t.version,options:structuredClone(this.#n),ticks:this.tick,entries:structuredClone(this.#s),digest:this.digest()}}checkpoint(){return{replay:this.replay(),receipts:structuredClone([...this.#e])}}static restore(t){if(!t||!Array.isArray(t.receipts)||t.receipts.length>1e4)throw new Error("Invalid checkpoint");let e=i.fromReplay(t.replay);return e.#e=new Map(structuredClone(t.receipts)),e}static fromReplay(t){if(!t||![al,ol].includes(t.version)||!Array.isArray(t.entries)||t.entries.length>25e4)throw new Error("Unsupported replay");hl(t.ticks,0,5184e3,"replay duration");let e=new i(t.options);if(e.#t.version!==t.version)throw new Error("Replay battlefield mismatch");let n=s=>{for(hl(s,e.tick,t.ticks,"entry tick");e.tick<s;){let r=e.tick;if(e.advance(Math.min(36e3,s-r),{events:!1}),e.tick===r)throw new Error("Replay advances a paused or ended match")}};for(let s of t.entries)switch(n(s.tick),s.type){case"command":if(!e.command(s.team,s.command).ok)throw new Error("Illegal replay command");break;case"pause":e.pause(s.paused);break;case"agreements":e.agreements(s.value);break;case"truce":e.truce(s.seconds);break;case"emotion":e.emotion(s.word);break;default:throw new Error("Unknown replay entry")}if(n(t.ticks),e.digest()!==t.digest)throw new Error("Replay digest mismatch");return e}};var fi=Object.freeze({width:.16,depth:.13,height:.044}),Gd=Ot.dockZ;function dl(i,t=1){if(!Number.isInteger(i)||i<0||i>=Gd.length)return null;let e=sn(t,i);return{x:pn(e.x),y:fi.height,z:vi(e.z),slot:i}}function Qs(i,t,e){let n=t?.player;if(!n)return null;let s=-1;if(i.kind==="turret")s=n.turrets.slice(0,n.unlockedSlots).indexOf(null);else if(i.kind==="slot")s=n.unlockedSlots;else if(i.kind==="eraser"){let a=Bx(e);if(!a||a.slot>=n.unlockedSlots||n.turrets[a.slot]===null)return null;s=a.slot}let r=dl(s);return r&&{...r,y:i.kind==="slot"?0:fi.height}}function Bx(i){if(!i||!Number.isFinite(i.x)||!Number.isFinite(i.z))return null;let t=null,e=1/0;for(let n=0;n<Gd.length;n++){let s=dl(n),r=Math.hypot(i.x-s.x,i.z-s.z);r<e&&(t=s,e=r)}return oh(i,t)?t:null}function Qr(i){return["turret","eraser"].includes(i.kind)?fi.height:0}function oh(i,t){return!!t&&Math.abs(i.x-t.x)<=fi.width/2+.01&&Math.abs(i.z-t.z)<=fi.depth/2+.01}var ri=Object.freeze({width:2.4,depth:1.35,lane:.45,minScale:.2,maxScale:1.6}),Wd=Object.freeze([["club","sling","dinosaur"],["sword","bow","horse"],["halberd","musket","cannon"],["soldier","rifle","tank"],["blade","blaster","mech"],["drone","ray","mothership"]].map(Object.freeze)),lh=["normal","hard","harder","impossible"];function Xd(i){if(!i||!i.running)return lh.map((n,s)=>({id:`start-${n}`,kind:"seal",label:n[0].toUpperCase()+n.slice(1),detail:"Drop on the page to begin",action:"start",difficulty:n,price:0,x:-.72+s*.48,z:.89}));let t=Yt[i.player.age],e=[];t.units.forEach((n,s)=>e.push({id:`unit-${s}`,kind:"unit",label:n.name,detail:be(i)?["Light infantry \xB7 surround heavies; resist siege","Ranged \xB7 counters infantry; heavy armor resists shots","Heavy \xB7 resists ranged fire; breaks defenses"][s]:"Drop in the green rally area",price:n.cost,command:{type:"unit",index:s},x:-1.02+s*.34,z:.86})),t.turrets.forEach((n,s)=>e.push({id:`turret-${s}`,kind:"turret",label:n.name,detail:"Place on the highlighted empty dock",price:n.cost,command:{type:"turret",index:s},x:.12+s*.34,z:.86}));for(let[n,s]of["dmg","hp","econ"].entries())e.push({id:`upgrade-${s}`,kind:"potion",label:{dmg:"Sharpened",hp:"Thick Paper",econ:"Fast Ink"}[s],detail:"Toss onto the battlefield",price:Gn[i.player.upgrades[s]]??1/0,command:{type:"upgrade",stat:s},x:-1.04+n*.27,z:1.16});return e.push({id:"evolve",kind:"evolve",label:"Next age",detail:"Pour onto the page",price:t.evolveXP,currency:"XP",command:{type:"evolve"},x:-.21,z:1.16},{id:"special",kind:"special",label:t.special.name,detail:"Toss onto the battlefield",price:0,command:{type:"special"},x:.08,z:1.16},{id:"slot",kind:"slot",label:"Cannon dock",detail:"Build on the highlighted outline \xB7 four docks maximum",price:i.player.unlockedSlots<4?i.player.unlockedSlots*500:1/0,command:{type:"slot"},x:.37,z:1.16},{id:"sell",kind:"eraser",label:"Sell cannon",detail:"Drop on any of your cannons \xB7 50% refund",price:0,command:{type:"sell"},x:.66,z:1.16}),e}var qd=Object.freeze([{id:"pause",action:"pause",kind:"hourglass",label:"Pause / resume",detail:"Lift and return to the page",x:1.05,z:.83},{id:"speed",action:"speed",kind:"clock",label:"Battle speed",detail:"Lift and return \xB7 1\xD7 / 2\xD7 / 3\xD7",x:1.05,z:1.13},{id:"quality",action:"quality",kind:"feather",label:"Mist & detail",detail:"Lift and return to change",x:-1.05,z:-.66},{id:"new",action:"new",kind:"page",label:"New canvas",detail:"Pause first, then drop on the page",x:-.69,z:-.66},{id:"music",action:"music",kind:"music",label:"Music box",detail:"Lift and return to toggle music",x:.69,z:-.66},{id:"exit",action:"exit",kind:"compass",label:"Leave the table",detail:"Lift and return to leave MR",x:1.05,z:-.66}]);function Yd(i,t,e){return!t||!["x","y","z"].every(n=>Number.isFinite(t[n]))?"invalid-position":Math.abs(t.x)>ri.width/2||Math.abs(t.z)>ri.depth/2||Math.abs(t.y)>.12?"off-table":i.kind==="unit"&&!(t.x>=-.88&&t.x<=-.44&&t.z>=(e&&be(e)?-.36:.14)&&t.z<=.65)?"rally-area":i.kind==="nudge"&&(t.z<-.37||t.z>.65)?"off-table":["turret","slot","eraser"].includes(i.kind)&&!oh(t,Qs(i,e,t))?{turret:"cannon-dock",slot:"dock-outline",eraser:"sell-dock"}[i.kind]:null}var ch=Object.freeze({"guide-cooldown":"Let this troop react before nudging it again.","unavailable-unit":"That troop is no longer available to guide.","wrong-battlefield":"Start a new tabletop battle to use troop guidance.",gold:"More gold is needed. The piece returns to the shop.",xp:"More XP is needed for the next age.",paused:"Drop the hourglass onto the page to resume first.",deploying:"Your last troop is still deploying.","deployment-blocked":"Make room at your rally point.","unit-cap":"Your army is full.","slots-full":"Add a cannon dock or sell a cannon first.","no-turret":"There is no cannon to sell.",cooldown:"The special is still recharging.","base-drawing":"Your new base is still being drawn.","max-upgrade":"This potion is already at its strongest.","max-age":"You have reached the final age.","off-table":"Missed the page. Nothing was spent.","rally-area":"Drop troops in the green rally area.","cannon-dock":"Place the cannon on the highlighted empty dock beside your base.","dock-outline":"Build the dock on the highlighted dashed outline beside your base.","sell-dock":"Drop the eraser on an occupied dock beside your base. The dock stays.","max-docks":"All four cannon docks are built. Place a cannon on an empty dock.","stale-age":"The age changed. Choose a new piece.","pause-first":"Pause before starting a new canvas.","match-ended":"Choose a difficulty to start the next battle.","tracking-lost":"Tracking lost. Held pieces returned safely.","not-started":"Drop a difficulty seal onto the page.","invalid-position":"The drop could not be tracked.","already-holding":"Release the piece in this hand first.","unknown-offer":"That piece is no longer on sale."});var fl=class{constructor({session:t=null,onEvent:e=()=>{}}={}){this.session=t,this.onEvent=e,this.speed=1,this.quality="mist",this.holds=new Map,this.sequence=0,this.accumulator=0,this.drops=[]}observe(){return this.session?.observe()??null}offers(t=this.observe()){return[...Xd(t),...qd]}offer(t){if(typeof t!="string")return null;if(t.startsWith("troop-")){let e=this.observe(),n=e?.units.find(s=>`troop-${s.id}`===t&&s.team===1);return!n||!be(e)?null:{id:t,kind:"nudge",label:n.name,detail:"Suggest a route; nearby fighting takes priority",price:0,command:{type:"guide",id:n.id,x:n.x,z:n.z},x:pn(n.x),z:vi(n.z)}}return this.offers().find(e=>e.id===t)}reason(t,e=this.observe()){return t?t.action==="new"&&e?.running&&!e.paused?"pause-first":t.action?null:t.kind==="slot"&&e?.player.unlockedSlots>=4?"max-docks":e?Wn(e,1,t.command):"not-started":"unknown-offer"}say(t,e={}){this.onEvent({type:t,...e})}fail(t){return this.say("message",{text:ch[t]||t,error:t}),{ok:!1,error:t}}start(t="normal",e={}){return lh.includes(t)?(this.cancelAll(),this.session=new ls({...e,difficulty:t,battlefield:"tabletop"}),this.accumulator=0,this.speed=1,this.say("start",{difficulty:t}),{ok:!0}):this.fail("unknown-offer")}grab(t,e){if(this.holds.has(t))return this.fail("already-holding");let n=this.offer(e),s=this.reason(n);if(s)return this.fail(s);let r={id:++this.sequence,owner:t,offer:structuredClone(n),age:this.observe()?.player.age??null};return this.holds.set(t,r),this.say("grab",{token:r}),{ok:!0,token:r}}cancel(t){let e=this.holds.get(t);this.holds.delete(t),e&&this.say("cancel",{token:e})}cancelAll(){for(let t of[...this.holds.keys()])this.cancel(t)}drop(t,e){let n=this.holds.get(t);if(!n)return{ok:!1,error:"not-held"};this.holds.delete(t);let{offer:s}=n,r=this.observe(),a=Yd(s,e,r),o;if(a)o=this.fail(a);else if(s.kind!=="nudge"&&n.age!==(r?.player.age??null))o=this.fail("stale-age");else{let c=this.reason(s,r);if(c)o=this.fail(c);else if(s.action)o=this.tool(s);else{let h=s.command;if(s.kind==="eraser"?h={...h,slot:Qs(s,r,e).slot}:s.kind==="unit"&&be(r)?h={...h,z:Ri(Yr(e.z),Ot.minZ+34,Ot.maxZ-34)}:s.kind==="nudge"&&(h={...h,x:Ri(ll(e.x),Ot.minX,Ot.maxX),z:Ri(Yr(e.z),Ot.minZ,Ot.maxZ)}),o=this.session.command(1,h),o.ok&&s.kind==="nudge"){let l=this.observe().units.find(d=>d.id===h.id);this.say("message",{text:`${l.name}: route suggested. ${l.isAttacking?"Fighting nearby first.":"Walking there."}`})}}}return!o.ok&&!a&&this.say("message",{text:ch[o.error]||o.error,error:o.error}),this.drops.push({offer:s.id,tick:this.session?.tick??0,point:{...e},...o}),this.drops.length>256&&this.drops.shift(),this.say("drop",{token:n,point:e,result:o}),o}tool(t){switch(t.action){case"start":return this.start(t.difficulty);case"pause":if(!this.session?.running)return this.fail("not-started");this.session.pause(!this.session.paused),this.accumulator=0,this.say("message",{text:this.session.paused?"Paused. Drop the hourglass onto the page to resume.":"The battle continues."});break;case"speed":this.speed=this.speed%3+1,this.say("message",{text:`Battle speed: ${this.speed}\xD7`});break;case"quality":this.quality=this.quality==="mist"?"clear":this.quality==="clear"?"comfort":"mist",this.say("quality",{quality:this.quality});break;case"music":this.say("music");break;case"new":this.cancelAll(),this.session=null,this.accumulator=0,this.say("menu");break;case"exit":this.pauseForInterruption(),this.say("exit");break;default:return this.fail("unknown-offer")}return{ok:!0}}pauseForInterruption(){this.cancelAll(),this.accumulator=0,this.session?.running&&!this.session.paused&&this.session.pause(!0)}update(t){if(!Number.isFinite(t)||t<0)throw new Error("Invalid elapsed time");if(t>=5){this.pauseForInterruption();return}if(!this.session?.running||this.session.paused)return;this.accumulator+=t*this.speed*60;let e=Math.floor(this.accumulator);e&&(this.accumulator-=e,this.advance(e))}advance(t){if(!this.session)return;let e=this.session.running,n=this.session.advance(t);for(let[s,r]of this.holds)r.offer.kind==="nudge"&&!this.observe().units.some(a=>a.id===r.offer.command.id)&&this.cancel(s);return n.events.length&&this.say("combat",{events:n.events}),n.events.some(s=>s.type==="cannon-destroyed"&&s.team===1)&&this.say("message",{text:"Your cannon was destroyed. Its dock can hold a replacement."}),e&&!this.session.running&&(this.cancelAll(),this.say("finish",{winner:this.session.winner})),n}};var Zd={type:"change"},uh={type:"start"},$d={type:"end"},pl=new Bi,Jd=new ti,kx=Math.cos(70*ss.DEG2RAD),Fe=new C,pi=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6,ml=class extends Nr{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ee,this._lastTargetPosition=new C,this._quat=new Ee().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vs,this._sphericalDelta=new Vs,this._scale=1,this._panOffset=new C,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new C,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vx.bind(this),this._onPointerDown=zx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=Jx.bind(this),this._onMouseWheel=Xx.bind(this),this._onKeyDown=qx.bind(this),this._onTouchStart=Yx.bind(this),this._onTouchMove=Zx.bind(this),this._onMouseDown=Gx.bind(this),this._onMouseMove=Wx.bind(this),this._interceptControlDown=$x.bind(this),this._interceptControlUp=jx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ae.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zd),this.update(),this.state=ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pi:n>Math.PI&&(n-=pi),s<-Math.PI?s+=pi:s>Math.PI&&(s-=pi),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Fe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<kx?this.object.lookAt(this.target):(Jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(Jd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent(Zd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pi/60*this.autoRotateSpeed*t:pi/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/e.clientHeight),this._rotateUp(pi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/e.clientHeight),this._rotateUp(pi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Vx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($d),this.state=ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(uh)}function Wx(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($d))}function qx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(uh)}function Zx(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function Jx(i){this.enabled!==!1&&i.preventDefault()}function $x(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _n(i,t=.018){let e=[],n=[],s=[],r=[],a=new C,o=new C,c=new C,h=new C(0,1,0);for(let[d,u]of i.entries()){let f=[];for(let m=0;m<u.length;m++){let x=u[m],g=u[Math.max(0,m-1)],p=u[Math.min(u.length-1,m+1)];a.set(p[0]-g[0],p[1]-g[1],p[2]-g[2]).normalize(),o.crossVectors(a,Math.abs(a.y)>.9?new C(1,0,0):h).normalize(),c.crossVectors(a,o).normalize();let T=.76+Math.sin(m*2.3+d*4.1)*.16,A=m===0||m===u.length-1?.55:1;f.push(Array.from({length:3},(S,b)=>{let v=b*Math.PI*2/3,R=x.map((y,E)=>T*A*(o.getComponent(E)*Math.cos(v)+c.getComponent(E)*Math.sin(v)));return{position:x.map((y,E)=>y+t*R[E]),center:x,offset:R}}))}for(let m=1;m<f.length;m++){let x=.75+.22*Math.sin(m*1.7+d)**2;for(let g=0;g<3;g++){let p=(g+1)%3;for(let T of[f[m-1][g],f[m][g],f[m][p],f[m-1][g],f[m][p],f[m-1][p]])e.push(...T.position),s.push(...T.center),r.push(...T.offset),n.push(x,x,x)}}}let l=new Me;return l.setAttribute("position",new $t(e,3)),l.setAttribute("color",new $t(n,3)),l.setAttribute("pencilCenter",new $t(s,3)),l.setAttribute("pencilOffset",new $t(r,3)),l.computeBoundingSphere(),l.userData.pencil=!0,l.userData.paths=i.length,l}var tr=(i,t=1,e=0,n=12)=>Array.from({length:n+1},(s,r)=>{let a=r/n*Math.PI*2,o=t*(1+Math.sin(a*3+i)*.014);return i===0?[Math.cos(a)*o,Math.sin(a)*o,e]:i===1?[Math.cos(a)*o,e,Math.sin(a)*o]:[e,Math.cos(a)*o,Math.sin(a)*o]});function gl(){let i=[tr(0),tr(2)];for(let s=0;s<4;s++){let r=-.65+s*.24,a=Math.sqrt(1-r*r);i.push(Array.from({length:4},(o,c)=>{let h=.2+c*.25;return[Math.cos(h)*a,r+c*.025,Math.sin(h)*a]}))}let t=[];for(let s of[-.5,.5])for(let r of[-.5,.5])t.push([[-.5,s,r],[.5,s+.006,r]]),t.push([[s,-.5,r],[s,.5,r+.006]]),t.push([[s,r,-.5],[s+.006,r,.5]]);for(let s=0;s<3;s++){let r=-.35+s*.25;t.push([[r,-.48,.505],[r+.1,-.12,.505]]),t.push([[.505,-.35+s*.25,-.4],[.505,-.25+s*.25,.15]])}let e=[tr(1,1,-.5,10),tr(1,1,.5,10)],n=[tr(1,1,-.5)];for(let s of[0,Math.PI/2,Math.PI,Math.PI*1.5])e.push([[Math.cos(s),-.5,Math.sin(s)],[Math.cos(s),.5,Math.sin(s)]]),n.push([[Math.cos(s),-.5,Math.sin(s)],[0,.5,0]]);return{stroke:_n([[[0,-.5,0],[.11,-.18,.06],[-.06,.2,-.04],[0,.5,0]]],.75),sphere:_n(i,.06),box:_n(t,.029),rod:_n(e,.055),cone:_n(n,.055),ring:_n([tr(0,1,0,12)],.045),shadow:_n(Array.from({length:7},(s,r)=>{let a=-.75+r*.25,o=Math.sqrt(1-a*a);return[[-o,a,0],[0,a+.025,0],[o,a+.08,0]]}),.014)}}var wt=Object.freeze({paper:"#fff0d2",wood:"#c89d65",leaf:"#8fb882",leather:"#bd865c",ink:"#342d2b",graphite:"#514b45",soft:"#756b5c",player:"#2b8d88",enemy:"#b64f42",damage:"#d37768",health:"#70b392",income:"#d7b750",evolution:"#859ac1",special:"#ce8260"}),Mi=Object.freeze({1:wt.player,"-1":wt.enemy});var dh=new Map;function xn(i){if(dh.has(i))return dh.get(i);let t=Yt[i].theme,e=new Nt(`hsl(${t.bg.split(" ").join(",")})`),n=new Nt(`hsl(${t.accent.split(" ").join(",")})`),s=e.clone().lerp(new Nt("#fff6df"),.76),r=e.clone().lerp(n,.42).lerp(s,.2),a={paper:s.getStyle(),accent:n.getStyle(),body:r.getStyle()};return dh.set(i,a),a}function fh(i=71){return()=>(i=Math.imul(1664525,i)+1013904223>>>0,i/4294967296)}var Gi;function ph(){if(Gi)return Gi;let i=128,t=new Uint8Array(i*i*4),e=fh();for(let n=0;n<i;n++)for(let s=0;s<i;s++){let r=Math.sin((s+n*.37)*.9),a=Math.sin(s*.095)*Math.cos(n*.072),o=Math.round(229+a*12+r*5+e()*9),c=(n*i+s)*4;t[c]=t[c+1]=t[c+2]=o,t[c+3]=255}return Gi=new Kn(t,i,i),Gi.colorSpace=Ce,Gi.wrapS=Gi.wrapT=Ps,Gi.magFilter=Pe,Gi.minFilter=Qi,Gi.generateMipmaps=!0,Gi.needsUpdate=!0,Gi}function jd(){return new ze({map:ph(),vertexColors:!0,side:He,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}function Kd(){let i=new Me;i.setAttribute("position",new $t([0,0,0,1,0,0,0,1,0],3)),i.setAttribute("uv",new $t([0,0,1,0,0,1],2)),i.computeVertexNormals();let t={fill_sphere:new wr(.985,12,5),fill_box:new ji(.994,.994,.994),fill_rod:new ks(.985,.985,.994,10),fill_cone:new Tr(.985,.994,12),fill_triangle:i},e=new C(-.3,.8,.5).normalize(),n=new C;for(let s of Object.values(t)){let r=s.attributes.normal,a=new Float32Array(r.count*3);for(let o=0;o<r.count;o++){n.fromBufferAttribute(r,o);let c=.88+Math.max(0,n.dot(e))*.12;a.set([c,c,c],o*3)}s.setAttribute("color",new ei(a,3))}return t}var mh=new Map,Qd=i=>(mh.has(i)||mh.set(i,new Nt(i)),mh.get(i)),cs=class{constructor(t,{capacity:e=12e3}={}){this.material=new ze({vertexColors:!0}),this.material.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 pencilCenter;
attribute vec3 pencilOffset;
attribute vec3 pencilRadius;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>","vec3 transformed = pencilCenter + pencilOffset * pencilRadius;")},this.material.customProgramCacheKey=()=>"spatial-pencil-width-v1",this.fillMaterial=jd(),this.meshes={},this.counts={},this.overflow=0,this.triangles=0;for(let[n,s]of Object.entries({...gl(),...Kd()})){let r=n.startsWith("fill_");r||s.setAttribute("pencilRadius",new Qn(new Float32Array(e*3),3).setUsage(qs));let a=new ts(s,r?this.fillMaterial:this.material,e);a.name=`pencil-${n}`,a.instanceMatrix.setUsage(qs),a.frustumCulled=!1,a.count=0,t.add(a),this.meshes[n]=a}this.m=new Wt,this.p=new C,this.s=new C,this.q=new Ee,this.euler=new hi,this.direction=new C,this.up=new C(0,1,0),this.frames=[],this.depth=0,this.poseTranslation=new Wt,this.modelRotation=new Ee,this.context={x:0,y:0,z:0,scale:1,face:1,yaw:0,cos:1,sin:0,paint:wt.paper},this.begin()}begin(){for(let t of Object.keys(this.meshes))this.counts[t]=0;this.overflow=0}model(t,e,n,s=1,r=1,a=0){this.context={x:t,y:e,z:n,scale:s,face:r,yaw:a,cos:Math.cos(a),sin:Math.sin(a),paint:wt.paper},this.modelRotation.setFromAxisAngle(this.up,a),this.depth=0}paint(t){this.context.paint=t}point([t,e,n=0]){let s=this.context;this.depth&&(this.p.set(t,e,n).applyMatrix4(this.frames[this.depth-1].matrix),t=this.p.x,e=this.p.y,n=this.p.z);let r=t*s.scale*s.face,a=n*s.scale;return[s.x+r*s.cos+a*s.sin,s.y+e*s.scale,s.z-r*s.sin+a*s.cos]}pose(t,e,n,s){let r=this.frames[this.depth];r||(r=this.frames[this.depth]={matrix:new Wt,rotation:new Ee}),r.rotation.setFromEuler(this.euler.set(...e)),r.matrix.makeRotationFromQuaternion(r.rotation).setPosition(t[0]+n[0],t[1]+n[1],t[2]+n[2]).multiply(this.poseTranslation.makeTranslation(-t[0],-t[1],-t[2])),this.depth&&(r.matrix.premultiply(this.frames[this.depth-1].matrix),r.rotation.premultiply(this.frames[this.depth-1].rotation)),this.depth++;try{s()}finally{this.depth--}}rotation(t){return this.q.setFromEuler(this.euler.set(...t)),this.depth&&this.q.premultiply(this.frames[this.depth-1].rotation),this.q.y*=this.context.face,this.q.z*=this.context.face,this.q.premultiply(this.modelRotation),this.q}write(t,e,n,s,r,a=.0015*this.context.scale){let o=this.meshes[t],c=this.counts[t];if(c>=o.instanceMatrix.count){this.overflow++;return}this.p.set(...e),this.s.set(...n),this.m.compose(this.p,r,this.s),o.setMatrixAt(c,this.m),o.setColorAt(c,Qd(s)),o.geometry.attributes.pencilRadius?.setXYZ(c,...n.map(h=>a/Math.max(Math.abs(h),1e-8))),this.counts[t]++}part(t,e,n,s=wt.graphite,r=[0,0,0],a){let o=this.context.scale;this.rotation(r),this.write(t,this.point(e),n.map(c=>c*o),s,this.q),this.meshes[`fill_${t}`]&&this.fill(t,e,n,a||(s===wt.graphite?this.context.paint:s),r)}fill(t,e,n,s,r=[0,0,0]){this.rotation(r),this.write(`fill_${t}`,this.point(e),n.map(a=>a*this.context.scale),s,this.q)}panel(t,e){let n=this.meshes.fill_triangle,s=new C(...this.point(t[0]));for(let r=2;r<t.length;r++){let a=this.counts.fill_triangle;if(a>=n.instanceMatrix.count){this.overflow++;return}let o=new C(...this.point(t[r-1])).sub(s),c=new C(...this.point(t[r])).sub(s),h=new C().crossVectors(o,c);h.lengthSq()!==0&&(h.normalize(),this.m.makeBasis(o,c,h).setPosition(s),n.setMatrixAt(a,this.m),n.setColorAt(a,Qd(e)),this.counts.fill_triangle++)}}line(t,e,n=.004,s="#342d2b"){let r=this.point(t),a=this.point(e);this.direction.set(a[0]-r[0],a[1]-r[1],a[2]-r[2]);let o=this.direction.length();if(o<1e-6)return;this.q.setFromUnitVectors(this.up,this.direction.multiplyScalar(1/o));let c=Math.min(n,.006)*.82*this.context.scale;this.write("stroke",r.map((h,l)=>(h+a[l])/2),[c,o,c],s,this.q,c*.75)}path(t,e=.004,n="#342d2b"){for(let s=1;s<t.length;s++)this.line(t[s-1],t[s],e,n)}ellipse(t,e,n="xy",s="#342d2b",r=16){this.path(Array.from({length:r+1},(a,o)=>{let c=o/r*Math.PI*2,h=Math.cos(c)*e[0],l=Math.sin(c)*e[1];return(n==="xz"?[h,0,l]:n==="yz"?[0,h,l]:[h,l,0]).map((u,f)=>u+t[f])}),.003,s)}sphere(t,e,n){this.part("sphere",t,[e,e,e],n)}outlineBall(t,e,n=wt.graphite){this.part("sphere",t,[e,e,e],n,[0,0,0],n===wt.graphite?wt.paper:n)}box(t,e,n=wt.graphite){this.part("box",t,e,n)}end(){this.triangles=0;for(let[t,e]of Object.entries(this.meshes))e.count=this.counts[t],e.instanceMatrix.needsUpdate=!0,e.geometry.attributes.pencilRadius&&(e.geometry.attributes.pencilRadius.needsUpdate=!0),e.instanceColor&&(e.instanceColor.needsUpdate=!0),this.triangles+=e.count*(e.geometry.index?.count??e.geometry.attributes.position.count)/3}dispose(){for(let t of Object.values(this.meshes))t.removeFromParent(),t.geometry.dispose();this.material.dispose(),this.fillMaterial.dispose()}};var yn=Object.freeze({strike:0,recoil:0,prepare:0,flash:0}),_l=i=>{let t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)};function tf(i,t,e=!1,n=1){if(!(i>0)||!(t>0)||n<1)return yn;let s=Math.max(0,t-i),r=Math.min(.42,t*.65),a=Math.min(.22,t*.25);return{strike:1-_l(s/r),recoil:(1-_l(s/Math.min(.23,t*.55)))**2,prepare:e?_l(1-i/a):0,flash:1-_l(s/Math.min(.09,t*.35))}}function ef(i,t=!0){return t?tf(i.attackCooldown,i.attackSpeed,i.isAttacking,i.drawProgress):yn}function nf(i,t,e){if(!i.running)return yn;let n=t===1?i.player:i.enemy,s=n.turrets[e];if(s===null)return yn;let r=Yt[n.age].turrets[s],a=(t===1?ne:ce-ne)-t*10,o=i.battlefield==="tabletop"?!!n.turretAim[e].target:i.units.some(c=>c.team!==t&&c.drawProgress>=.8&&Math.abs(c.x-a)<=r.range+1e-6);return tf(n.turretTimers[e],r.attackSpeed,o,n.turretProgress[e])}var Kx=Object.freeze({dmg:[[[-.7,-.7],[.75,.85]],[[-.7,-.25],[-.2,-.75]],[[.45,.85],[.8,.88],[.75,.5]]],hp:[[[0,-.8],[-.85,.1],[-.7,.65],[-.3,.8],[0,.4],[.3,.8],[.7,.65],[.85,.1],[0,-.8]]],econ:[[[-.8,-.4],[-.3,-.6],[.6,-.4],[.65,.2],[-.25,.05],[-.8,.2],[-.8,-.4]],[[-.8,.2],[-.3,.4],[.6,.2]],[[-.5,.6],[.15,.75],[.65,.6]]],evolve:[[[-.6,-.7],[-.6,-.1],[0,-.1],[0,.5],[.65,.5]],[[.3,.1],[.7,.55],[.3,.95]]],special:[[[.1,.9],[-.5,0],[.1,0],[-.2,-.9],[.65,.2],[.1,.2],[.1,.9]]],music:[[[-.35,-.35],[-.35,.6],[.5,.8],[.5,-.15]],[[-.35,-.35],[-.6,-.5],[-.65,-.25],[-.35,-.2]],[[.5,-.15],[.2,-.35],[.15,-.1],[.5,0]]],compass:[[[0,.95],[.3,0],[0,-.9],[-.3,0],[0,.95]],[[-.8,0],[.8,0]]],pause:[[[-.35,-.6],[-.35,.6]],[[.35,-.6],[.35,.6]]],page:[[[-.65,-.8],[-.65,.8],[.4,.8],[.7,.5],[.7,-.8],[-.65,-.8]],[[.4,.8],[.4,.5],[.7,.5]],[[-.3,0],[.4,0]],[[-.3,-.4],[.4,-.4]]]});function ta(i,t,e=0,n=.05,s=.033,r=.022,a="#342d2b"){for(let o of Kx[t]||[])i.path(o.map(([c,h])=>[e+c*r,n+h*r,s]),.0035,a)}var Qx=wt.ink,sf=wt.graphite;function ty(i,t,e,n,s){let{prepare:r,flash:a}=n;if(["sword","halberd","blade"].includes(t))i.line([0,0,0],[.028,.09,0],.005,e),i.line([-.016,.016,0],[.018,.007,0],.004),t==="halberd"&&i.box([.025,.071,0],[.027,.028,.007]),t==="blade"&&i.path([[0,.03,0],[.009,.11,0],[.029,.09,0],[0,.03,0]],.003,e);else if(["rifle","soldier","musket","blaster"].includes(t)){i.box([-.006,0,0],[.035,.012,.012]);let o=t==="musket"?.093:.06;if(i.line([0,0,0],[o,.012,0],.0048,t==="blaster"?e:Qx),t==="rifle"&&i.box([-.019,.018,.004],[.029,.009,.008]),t==="blaster"&&i.part("ring",[.047,.011,0],[.013,.013,.013],e,[0,Math.PI/2,0]),s&&a>0&&t!=="soldier"){let c=.012*a;i.path([[o+.007,.012-c,0],[o+.03*a,.012,0],[o+.007,.012+c,0]],.003,t==="blaster"?e:wt.income)}}else if(t==="bow"){let o=[.01,.046,0],c=[.009,-.041,0],h=[-.024*r,.004,0];i.path([o,[.024-r*.005,.004,0],c],.003),i.path([o,h,c],.0017,sf),a===0&&i.line(h,[.069,.004,0],.0018)}else t==="sling"?(i.path([[0,0,0],[.033,.02,.003],[.023,.065,.001],[-.01,.028,.001],[0,0,0]],.0023),a===0&&i.outlineBall([.023,.047,.001],.006)):(i.path([[0,0,0],[.006,.061,.002],[.021,.071,.002],[.034,.057,.002],[.01,0,.002]],.004),i.line([.014,.018,.004],[.023,.055,.004],.002))}function rf(i,t,e,n,s,r,a,o,c){let{strike:h,recoil:l,prepare:d}=o,u=r&&!a?Math.sin(s*10)*.026:.002,f=[0,.071,0];for(let p of[-1,1]){let T=p*h*.008,A=[p*u+T,.006,p*.02],S=[-p*u*.5+T,.038,p*.013];i.line(f,S),i.line(S,A),i.line(A,[A[0]+.014,.004,A[2]],.005)}let m=["club","sword","halberd","blade","soldier"].includes(t),x=a?0:m?-h*.13+d*.08:l*.08,g=c&&!a?Math.sin(s*2.4)*.0015:0;i.pose(f,[0,0,x],[0,g,0],()=>{let p=[0,.13,0];i.line(f,p,.0045),i.part("box",[0,.103,0],[.021,.041,.025],sf,[0,0,0],n),i.outlineBall([0,.158,0],.025);for(let v of[-.012,.012])i.line([.021,.16,v],[.023,.163,v],.0035);i.line([-.01,.127,-.017],[.017,.119,.024],.009,n);let T=[[-.012,.126,.023],[-.036,.119,.024],[-.028,.108,.025]];i.panel(T,n),i.path(T,.004,n);let A=a?[.018,.226,.02]:m?[.061+h*.026-d*.027,.099+d*.044-h*.012,.02]:t==="sling"?[.061+h*.018-d*.04,.099+d*.05,.02]:[.061-l*.024,.099,.02];i.line(p,[.018+(A[0]-.061)*.6,a?.17:.105,.019]),i.line([.018+(A[0]-.061)*.6,a?.17:.105,.019],A);let S=t==="bow"&&!a?[A[0]-.024*d,.103,.021]:[.016,.079,-.025];i.line(p,[-.024,.097,-.018]),i.line([-.024,.097,-.018],S);let b=a?0:t==="soldier"?d*.2-h*.28:m?d*.7-h*(t==="halberd"?1.15:1.55):t==="sling"?d*1.3-h*1.8:l*.13;if(i.pose([0,0,0],[0,0,b],A,()=>ty(i,t,n,o,c)),t==="sword"){let v=[[-.027,.12,-.034],[.008,.119,-.034],[.009,.08,-.034],[-.009,.063,-.034],[-.029,.082,-.034]];i.panel(v,n),i.path([...v,v[0]],.0038,n),i.line([-.009,.111,-.035],[-.009,.08,-.035],.0025)}t==="musket"&&i.path([[-.026,.179,0],[0,.199,-.027],[.033,.181,.008],[-.026,.179,0]],.003),t==="soldier"&&i.box([-.018,.105,-.014],[.02,.035,.034]),e===1&&i.part("cone",[0,.183,0],[.028,.025,.028]),e===2&&i.part("cone",[0,.185,0],[.031,.025,.024]),e===3&&i.part("sphere",[0,.175,0],[.028,.012,.028]),e===4&&(i.box([0,.11,0],[.023,.033,.029]),i.line([.024,.166,-.017],[.024,.166,.017],.004))})}var af=wt.ink,ey=wt.graphite;function er(i,t=0,e=0,n=wt.player,s=!1,r=yn,a=!0){let{strike:o,recoil:c,prepare:h,flash:l}=r;if(i.paint(xn(t).body),i.box([0,.024,0],[.085,.022,.072]),i.part("box",[0,.026,.038],[.066,.014,.005],ey,[0,0,0],n),t<3||s)for(let u of[-.042,.042])i.part("ring",[-.016,.025,u],[.023,.023,.023],af),i.line([-.039,.025,u],[.007,.025,u],.0025),i.line([-.016,.002,u],[-.016,.048,u],.0025);else for(let u of[-.035,.035])i.path([[-.043,.002,u*1.4],[0,.05,u],[.043,.002,u*1.4]],.003);let d=(u,f,m,x=.12,g=0,p=.01)=>{let T=u+m*.3;u-=c*(t===3&&e===0?.012:.026),x+=c*.08,t<4&&i.line([T,.034,g],[u+m*.3,f+x*m*.3,g],.006),i.fill("rod",[u+m/2,f+x*m/2,g],[p,m*Math.sqrt(1+x*x),p],xn(t).body,[0,0,-Math.PI/2+Math.atan(x)]);for(let A of[-1,1])i.path([[u,f+A*p,g-p],[u+m,f+x*m+A*p,g-p],[u+m,f+x*m+A*p,g+p],[u,f+A*p,g+p]],.0038);if(i.part("ring",[u+m,f+x*m,g],[p*1.25,p*1.25,p*1.25],n,[0,Math.PI/2,0]),a&&l>0){let A=[u+m,f+x*m,g];for(let S of[-1,1])i.line(A,[A[0]+.035*l,A[1]+S*.018*l,g],.0025,wt.paper)}};if(t===0&&e===0||t===1&&e===0)i.pose([-.02,.076,0],[0,0,.7*h-1.05*o],[0,0,0],()=>{i.path([[-.034,.034,0],[-.02,.076,0],[.058,.151,0]],.004),l===0&&i.outlineBall([.058,.151,0],.023),t===1&&i.box([-.052,.056,0],[.032,.044,.036])}),i.path([[-.02,.076,-.034],[-.047,.03,-.034],[.022,.03,-.034],[-.02,.076,-.034]],.003);else if(t===0&&e===1)i.path([[-.02,.026,0],[-.01,.075,0],[0,.131,-.045]],.004),i.line([-.01,.075,0],[0,.131,.045],.004),i.path([[0,.131,-.045],[-.048-.023*h+.07*o,.091+.035*o,0],[0,.131,.045]],.002),l===0&&i.part("sphere",[-.048-.023*h+.07*o,.097+.035*o,0],[.016,.024,.016]);else if(t===0&&e===2){i.part("rod",[0,.073,0],[.034,.065,.034]);for(let u=0;u<3;u++)i.path([[-.024+u*.023,.103,0],[-.009+u*.018+.03*o,.153+u%2*.02+.044*o-.018*h,0],[.014+u*.015,.109,0]],.0035,n)}else if(t===1&&e===1)i.path([[-.035,.047,0],[.025,.081,0],[.105,.084,0]],.004),i.path([[.018,.081,-.066],[.053-.02*h,.081,0],[.018,.081,.066]],.004),i.path([[.018,.081,-.066],[-.022-.034*h+.055*o,.075,0],[.018,.081,.066]],.002),l===0&&i.path([[.088,.084,-.012],[.112,.084,0],[.088,.084,.012]],.003);else if(t===1&&e===2){for(let u of[-.04,.04])i.path([[-.04,.02,u],[-.022,.139,u],[.014,.139,u],[.042,.02,u]],.0035);i.pose([.02,.12,0],[0,0,.14*h-.9*o],[0,0,0],()=>{i.part("sphere",[.02,.103,0],[.045,.032,.034]),i.part("ring",[.02,.125,0],[.043,.043,.043],n,[Math.PI/2,0,0])}),a&&l>0&&i.line([.055,.12,0],[.07,.02,0],.004*l,wt.income)}else if(t===2)d(-.03,.066,e===2?.075:.13,e===2?1.2:.12,0,e===1?.018:.012),e===0&&i.line([-.01,.027,0],[-.01,.064,0],.005),e===1&&i.box([-.02,.044,0],[.071,.025,.051]);else if(t===3)e===1?(i.line([0,.03,0],[-.016*c,.074,0],.006),i.pose([0,.05,0],[0,0,.16*c],[-.016*c,0,0],()=>{i.box([0,.089,0],[.09,.069,.07]);for(let u of[.072,.1])for(let f of[-.018,.018])i.part("ring",[.047,u,f],[.011,.011,.011],a&&l>.5?wt.paper:n,[0,Math.PI/2,0])})):(d(-.025,.072,e===0?.12:.17,e===0?.03:.4,0,e===0?.006:.012),e===0?i.box([-.024,.059,.031],[.039,.036,.019]):i.box([.006,.065,0],[.015,.085,.094]));else if(t===4)if(i.part("sphere",[0,.057,0],[.036,.022,.033]),e===0)for(let u=0;u<3;u++){let f=u*Math.PI*2/3+o*2.1;d(-.005,.091+Math.cos(f)*.02,.094,.1,Math.sin(f)*.02,.005)}else if(e===1){d(-.025,.086,.14,.13,0,.015);for(let u=0;u<3;u++)i.part("ring",[.015+u*.027-.026*c,.094,0],[.025,.025+.007*h-.004*o,.025+.007*h-.004*o],n,[0,Math.PI/2,0])}else{for(let u of[-.036,.036])i.path([[-.02,.05,0],[.015,.11,u],[.1,.123,u*(1+.25*h-.4*o)]],.004,n);i.outlineBall([.078,.115,0],.025+.012*h-.008*o,a&&l>.5?wt.paper:n)}else if(i.part("cone",[0,.065,0],[.027,.07,.027]),e===0)i.part("sphere",[.01,.119,0],[.049,.025,.025]),d(.025,.119,.065,0,0,.009);else if(e===1){let u=.047+.008*h-.015*o,f=.029+.006*h-.01*o;i.part("ring",[.012,.126,0],[u,u,u],n,[o*.8,Math.PI/2,.2]),i.part("ring",[.012,.126,0],[f,f,f],af,[.5-o*.8,Math.PI/2,0])}else{for(let f of[-.036,.036])i.path([[-.025,.08,f],[0,.148,f],[.036,.113,f],[.07+.012*o,.164,f*(1+.3*h-.5*o)]],.004,n);let u=.026+.009*h-.01*o;i.part("sphere",[.025,.137,0],[u,u*1.2,u],a&&l>.5?wt.paper:n)}i.line([-.041,.023,.039],[.038,.023,.039],.004,n)}var of=wt.ink,rn=wt.graphite;function iy(i,t,e,n,s,r,a){let{strike:o,prepare:c}=a;i.paint(t?wt.leaf:wt.leather),i.part("sphere",[-.012,.061,0],[.062,.035,.034],rn),i.pose([.024,.077,0],[0,0,-o*(t?.65:.2)+c*.2],[0,0,0],()=>{i.line([.024,.077,0],[.065,.116,0],.017,rn),i.sphere([.073,.125,0],.024,rn),t?i.line([.078,.117,.02],[.097,.12-c*.013,.02],.003):i.path([[.061,.14,0],[.058,.165,-.008],[.071,.143,0]],.003)}),i.line([-.063,.072,0],[-.113,.09,0],.007);for(let h of[-.045,.03])for(let l of[-.025,.025]){let d=s?Math.sin(n*9+h*30+l*30)*.02:Math.sign(h)*o*.012;i.line([h,.064,l],[h+d,.006,l],.005)}if(i.outlineBall([-.005,.163,0],.019),i.line([-.005,.144,0],[-.014,.089,0]),i.part("box",[-.009,.119,0],[.02,.037,.026],rn,[0,0,0],e),i.line([-.014,.099,0],[-.009,.042,.039]),i.line([-.012,.129,.012],r?[.018,.226,.02]:t?[.048,.116,.02]:[.033,.109,.024]),i.line([-.01,.137,-.015],[.002,.13,.016],.008,e),t||i.pose([.033,.109,.024],[0,0,c*.3-o*.9],[0,0,0],()=>i.line([.033,.109,.024],[.117,.2,.024],.003)),t)for(let h=0;h<4;h++){let l=-.06+h*.022;i.path([[l,.083,0],[l+.004,.116,0],[l+.019,.085,0]],.003)}else i.path([[.048,.1,-.014],[.036,.079,-.02],[.053,.122,-.016]],.003),i.line([.073,.123,.026],[.005,.12,.028],.002)}function xl(i,t,e,{x:n=0,y:s=0,z:r=0,scale:a=1,team:o=1,yaw:c=0,time:h=0,walking:l=!1,held:d=!1,motion:u=yn,detailed:f=!0}={}){i.model(n,s,r,a,o,c),i.paint(xn(t).body);let m=Wd[t]?.[e]||"club",x=Mi[o];d&&(u=yn);let{strike:g,recoil:p,prepare:T,flash:A}=u;if(m==="dinosaur"||m==="horse")iy(i,m==="dinosaur",x,h,l,d,u);else if(m==="cannon")er(i,t,1,x,!0,u,f);else if(m==="tank"){i.box([0,.053,0],[.14,.049,.091],rn),i.pose([0,.07,0],[0,0,p*.08],[-.018*p,0,0],()=>{i.box([0,.091,0],[.072,.036,.065],x),i.line([.018,.096,0],[.15-p*.018,.105,0],.008),f&&A>0&&i.path([[.157,.09,0],[.157+.03*A,.105,0],[.157,.12,0]],.003,wt.income)});for(let S of[-.054,.054]){i.box([0,.026,S],[.16,.034,.024],rn);for(let b of[-.052,-.017,.019,.055])i.part("ring",[b,.026,S*1.2],[.016,.016,.014],rn,[0,0,l?-h*6:0])}}else if(m==="mech"){let S=l?Math.sin(h*8)*.025:0;i.pose([0,.112,0],[0,0,p*.13],[-p*.009,-g*.008,0],()=>{i.box([0,.133,0],[.074,.065,.062],rn),i.outlineBall([.025,.175,0],.023,rn);for(let b of[-1,1])i.line([0,.147,b*.049],[.096-p*.025,.138+T*.009,b*.049],.011,A>.5?wt.paper:x)});for(let b of[-1,1])i.line([0,.112,b*.027],[-S*b,.056,b*.04],.009),i.line([-S*b,.056,b*.04],[S*b,.006,b*.05],.008)}else["drone","ray","mothership"].includes(m)?i.pose([0,.095,0],[0,0,m==="drone"?-g*.38+T*.18:p*.15],[m==="drone"?g*.027:-p*.015,0,0],()=>{let S=m==="mothership"?.077:.041,b=.095+(f?Math.sin(h*2)*.006:0)+T*.009-g*.006;i.part("sphere",[0,b,0],[S,S*.45,S*.75],rn),i.part("ring",[0,b,0],[S*1.3,S*1.3,S*.8],of,[Math.PI/2,0,.1+T*.3-g*.25]),i.outlineBall([.035,b+.008,0],.013+.01*T,A>.5?wt.paper:x);for(let v of[-1,1])if(m==="drone")for(let R of[-.04,.04])i.line([0,b,0],[R,b,v*.067],.003),i.part("ring",[R,b,v*.067],[.024,.024,.024],of,[Math.PI/2,0,0]);else m==="ray"?i.pose([0,b,0],[v*(T*.45-g*.55),0,0],[0,0,0],()=>{i.panel([[.04,b,v*.015],[-.015,b+.015,v*.13],[-.064,b,v*.047],[-.04,b,0]],x),i.path([[.04,b,v*.015],[-.015,b+.015,v*.13],[-.064,b,v*.047],[-.04,b,0]],.004,x),i.line([0,b,0],[-.015,b+.015,v*.13],.0025)}):i.path([[-.025,b,v*.06],[-.072,b-.035,v*.094],[-.052,b-.045,v*.116]],.004);if(m==="ray"&&i.path([[-.03,b,0],[-.11,b+.009,0],[-.14,b+.039,0]],.003),m==="drone"){for(let v of[-1,1])i.path([[-.02,b-.009,v*.02],[-.03,b-.038,v*.024],[.025,b-.038,v*.024]],.003);i.line([0,b+.013,0],[.008,b+.039,0],.003)}m==="mothership"&&(i.part("cone",[0,b+.045,0],[.029+T*.015,.054+T*.02-g*.015,.029+T*.015],x),i.line([0,b+.071,0],[0,b+.12,0],.003))}):rf(i,m,t,x,h,l,d,u,f)}function yl(i,{built:t=!0,occupied:e=!1,highlighted:n=!1,color:s=wt.player}={}){let r=fi.width/2,a=fi.depth/2,o=t?fi.height+.002:.004;if(t&&(i.paint(wt.wood),i.box([0,fi.height/2,0],[fi.width,fi.height,fi.depth]),i.part("box",[0,.026,a+.001],[fi.width*.8,.013,.002],wt.graphite,[0,0,0],s),e||(i.part("ring",[0,o,0],[.028,.028,.028],s,[Math.PI/2,0,0]),i.line([-.015,o,0],[.015,o,0],.002,s))),!t||n){let c=n?wt.income:wt.soft;for(let h of[-1,1])for(let l of[-1,1])i.line([h*r,o,l*a],[h*r*.55,o,l*a],.0024,c),i.line([h*r,o,l*a],[h*r,o,l*a*.5],.0024,c)}}var hs=wt.ink,me=wt.graphite;function lf(i,t,e,n,s=1){let r=Mi[n],a=-.3*(1-s);if(i.model(e,a,.14,1,n),i.paint(xn(t).body),i.box([0,.025,0],[.27,.05,.48],me),t===0){i.part("sphere",[0,.07,0],[.14,.145,.15],me),i.part("sphere",[.11,.066,.02],[.013,.068,.05],hs);for(let o=0;o<8;o++)i.line([-.1+o*.028,.05,.13],[-.06+o*.02,.18-Math.abs(o-3.5)*.016,-.09],.0018,me)}else if(t===1){i.box([0,.111,0],[.21,.17,.3],me);for(let o of[-.12,.12]){i.box([0,.175,o],[.15,.24,.065],me);for(let c of[-.06,0,.06])i.box([c,.31,o],[.037,.044,.065],me)}i.box([.109,.089,.01],[.008,.105,.07],hs)}else if(t===2){i.box([0,.09,0],[.2,.12,.29],me);for(let o of[-.14,.14])i.path([[-.11,.04,o],[-.13,.15,o],[-.045,.19,o],[.09,.14,o],[.13,.04,o]],.004),i.path([[-.13,.15,o],[-.13,.15,o+Math.sign(o)*.07],[-.045,.19,o+Math.sign(o)*.1],[.09,.14,o]],.004);i.part("cone",[-.045,.227,0],[.065,.09,.075],me);for(let o of[-.07,0,.07])i.box([.103,.09,o],[.005,.026,.022])}else if(t===3){i.box([0,.07,0],[.22,.1,.31],me),i.part("sphere",[0,.12,0],[.15,.04,.18],me),i.box([.117,.077,0],[.012,.024,.19],hs);for(let o of[-.11,0,.11])i.box([.114,.032,o],[.045,.035,.08]);i.line([-.08,.13,-.12],[-.08,.32,-.12],.003),i.line([-.12,.28,-.12],[-.035,.28,-.12],.003)}else{i.part("sphere",[0,.064,0],[.145,.12,.18],me);for(let o of[-.15,.15])i.part("cone",[0,.175,o],[.047,.3,.047],r),i.sphere([0,.333,o],.022,me);t===5&&i.part("ring",[.11,.16,0],[.12,.12,.12],me,[0,Math.PI/2,0]),t===4&&(i.part("ring",[0,.15,0],[.17,.17,.17],r,[Math.PI/2,0,0]),i.path([[-.05,.17,0],[-.11,.23,0],[-.16,.25,0]],.004),i.part("ring",[-.16,.25,0],[.05,.05,.05],hs,[0,Math.PI/2,.3]))}i.line([0,.17,-.2],[0,.4,-.2],.004),i.box([.043,.369,-.2],[.083,.045,.004],r)}function gh(i,t,e,n={}){let{x:s=0,y:r=0,z:a=0,scale:o=1,time:c=0,held:h=!1}=n;if(t.kind==="unit")return xl(i,e,t.command.index,{...n,team:1});if(i.model(s,r,a,o),i.paint(wt.wood),t.kind==="turret")return er(i,e,t.command.index,Mi[1]);let l={dmg:wt.damage,hp:wt.health,econ:wt.income}[t.command?.stat]||(t.kind==="special"?wt.special:wt.evolution);if(["potion","evolve","special"].includes(t.kind)){let d=t.command?.stat||t.kind,f={dmg:[[-.011,.095],[-.011,.073],[-.034,.042],[-.026,.014],[.026,.014],[.034,.042],[.011,.073],[.011,.095]],hp:[[-.013,.093],[-.013,.076],[-.036,.064],[-.039,.035],[-.023,.012],[.022,.012],[.039,.035],[.036,.064],[.013,.076],[.013,.093]],econ:[[-.025,.084],[-.033,.072],[-.033,.015],[.033,.015],[.033,.072],[.025,.084]],evolve:[[-.012,.12],[-.012,.081],[-.036,.023],[-.031,.013],[.031,.013],[.036,.023],[.012,.081],[.012,.12]],special:[[-.017,.098],[-.017,.081],[-.041,.045],[-.026,.009],[0,.003],[.026,.009],[.041,.045],[.017,.081],[.017,.098]]}[d],m=Math.floor(f.length/2);for(let p=0;p<m-(f.length%2?0:1);p++){let[T,A]=f[p],[S,b]=f[p+1],v=b>.07?wt.paper:l;for(let R of[-.0205,.0205])i.panel([[T,A,R],[S,b,R],[-S,b,R],[-T,A,R]],v);for(let R of[-1,1])i.panel([[T*R,A,-.0205],[S*R,b,-.0205],[S*R,b,.0205],[T*R,A,.0205]],v)}let x=f[m-1];i.panel([[x[0],x[1],-.0205],[-x[0],x[1],-.0205],[-x[0],x[1],.0205],[x[0],x[1],.0205]],l);for(let p of[-.021,.021])i.path(f.map(([T,A])=>[T,A,p]),.0037);for(let p of[0,Math.floor(f.length/2),f.length-1])i.line([...f[p],-.021],[...f[p],.021],.003);let g=f[0][1];i.box([0,g+.004,0],[Math.abs(f[0][0])*2.3,.012,.047]);for(let p=0;p<5;p++)i.line([-.025+p*.01,.018,.022],[-.019+p*.01,.04,.022],.0028,l);ta(i,d,0,.055,.024,.017,hs)}else if(t.kind==="hourglass"){for(let d of[.013,.122])i.box([0,d,0],[.08,.013,.055],me);i.part("cone",[0,.044,0],[.03,.056,.025],me,[0,0,0],wt.income),i.part("cone",[0,.088,0],[.03,.056,.025],me,[Math.PI,0,0]);for(let d of[-.034,.034])i.line([d,.018,0],[d,.115,0],.003)}else if(t.kind==="clock"||t.kind==="compass")if(i.paint(wt.paper),i.part("ring",[0,.063,0],[.046,.046,.015],me),i.part("sphere",[0,.063,0],[.043,.043,.007],me),t.kind==="compass")ta(i,"compass",0,.063,.015,.031);else{i.line([0,.063,.012],[.018,.083,.012],.0025),i.line([0,.063,.012],[-.025,.049,.012],.0025);for(let d=0;d<12;d++){let u=d*Math.PI/6;i.line([Math.cos(u)*.035,.063+Math.sin(u)*.035,.013],[Math.cos(u)*.04,.063+Math.sin(u)*.04,.013],.0025)}}else if(t.kind==="music")i.box([0,.033,0],[.09,.066,.066],me),i.part("ring",[0,.04,.035],[.023,.023,.012],hs),i.line([.04,.07,0],[.065,.12,0],.003),i.line([.065,.12,0],[.092,.127,0],.003),i.sphere([.092,.12,0],.009,hs),ta(i,"music",0,.041,.035,.019);else if(t.kind==="feather"){i.line([-.021,.012,0],[.031,.135,0],.002);for(let d=0;d<7;d++)i.line([-.015+d*.006,.025+d*.014,0],[.025+d*.006,.037+d*.014,.003],.004,me)}else if(t.kind==="slot")yl(i);else if(t.kind==="eraser"){i.paint(wt.damage),i.box([0,.022,0],[.085,.039,.048],me);for(let d=0;d<4;d++)i.line([-.04+d*.008,.004,.025],[-.035+d*.008,.039,.025],.002)}else if(t.kind==="seal"){i.paint({normal:wt.health,hard:wt.income,harder:wt.special,impossible:wt.damage}[t.difficulty]),i.part("rod",[0,.018,0],[.058,.022,.058],me),i.part("ring",[0,.034,0],[.043,.043,.043],me,[Math.PI/2,0,0]),i.part("cone",[0,.064,0],[.024,.06,.024],me);let d=["normal","hard","harder","impossible"].indexOf(t.difficulty)+1;for(let u=0;u<d;u++)i.path([[-.018,.004+u*.011,.06],[0,.012+u*.011,.06],[.018,.004+u*.011,.06]],.003)}else{i.paint(wt.paper),i.box([0,.025,0],[.1,.04,.08],me),ta(i,"page",0,.05,.042,.03);for(let d=0;d<3;d++)i.line([-.046,.015+d*.007,.042],[.046,.015+d*.007,.042],.002)}h&&i.part("ring",[0,.15+Math.sin(c*4)*.003,0],[.019,.019,.019],me,[Math.PI/2,0,0])}function cf(i,t,e,n=0){let s=Mi[e];t==="arc"&&n===1?(i.line([-.03*e,0,0],[.025*e,0,0],.0028),i.path([[.012*e,.009,0],[.028*e,0,0],[.012*e,-.009,0]],.0025)):t==="laser"?(i.line([-.03*e,-.003,0],[.03*e,-.003,0],.0028,s),i.line([-.026*e,.003,0],[.035*e,.003,0],.0028,s)):t==="straight"?i.line([-.015*e,0,0],[.014*e,0,0],.003,s):(i.part("sphere",[0,0,0],[.012,.012,.01],s),t==="orb"&&i.part("ring",[0,0,0],[.02,.02,.02],s,[Math.PI/2,0,0]))}function hf(i,t,e,n,s=!0){let r=Mi[n],a=t===4?.28:.5;if(i.part("ring",[0,0,0],[a,a,.025],r,[Math.PI/2,0,0]),!!s)if(t===4){i.part("ring",[0,.55,0],[.09,.09,.09],r,[Math.PI/2,0,0]);for(let o of[-.022,0,.023])i.path([[o*2,.54,0],[o,.28,.009],[o*.3,0,0]],.003,r)}else if(t===5){for(let o of[-1,1])i.path([[o*.07,.025,0],[o*.035,.13,.01],[o*.065,.2,0],[o*.023,.3,-.01],[0,.38,0]],.004,r);i.part("ring",[0,.16,0],[.14,.14,.14],r,[.3,e*.3,0])}else{for(let o=0;o<6;o++){let c=Math.sin(o*4.7)*a,h=Math.cos(o*2.3)*.075,l=.03+((.4-e*.25+o*.061)%.4+.4)%.4;t===1?i.path([[c-.012,l+.06,h],[c,l,h],[c-.008,l+.012,h]],.0028):(i.outlineBall([c,l,h],t===0?.02:.012,r),i.line([c,l+.023,h],[c-.025,l+.08,h],.0025,r))}if(t===3){let o=Math.sin(e*2)*.4;i.path([[o-.13,.45,0],[o+.12,.45,0],[o+.02,.45,-.11],[o-.01,.45,.11],[o+.12,.45,0]],.0035)}}}var uf=Object.freeze([{title:"I \xB7 FIRST MARKS",motif:"fern, volcano, fossil",base:"bone cave"},{title:"II \xB7 BANNERS & BOWS",motif:"oak, hills, masonry",base:"crenellated keep"},{title:"III \xB7 POWDER & SAIL",motif:"cypress, windmill, navigation",base:"star bastion"},{title:"IV \xB7 IRON & STATIC",motif:"birch, wire, radio",base:"sandbag bunker"},{title:"V \xB7 TOMORROW IN PENCIL",motif:"crystal, circuit, observatory",base:"orbital laboratory"},{title:"VI \xB7 MARGINS OF SPACE",motif:"orbit, comet, constellation",base:"celestial gate"}].map(Object.freeze));function df(){let i=[];return{paths:i,path:(...t)=>i.push(t),ellipse(t,e,n,s,r,a=!1){i.push(Array.from({length:25},(o,c)=>{let h=c/24*Math.PI*2;return[t+s*Math.cos(h),e+(a?r*Math.sin(h):0),n+(a?0:r*Math.sin(h))]}))}}}function ff(){let i=df();for(let t of[-1,1]){for(let e=0;e<8;e++){let n=-.012-e*.009,s=t*(1.22+e*.002);for(let r of[-.72,1.4])i.path([0,n-.016,r],[t*.13,n+.003,r],[t*.7,n+.012,r+t*.005],[s,n+.008,r]);i.path([s,n+.008,-.72],[s+t*.008,n+.004,.3],[s,n+.008,1.4])}i.path([0,-.108,-.76],[t*1.28,-.087,-.76],[t*1.3,-.091,1.45],[t*.09,-.104,1.45],[0,-.128,1.43]),i.path([t*.035,-.024,-.7],[t*.035,-.018,.35],[t*.035,-.024,1.4]);for(let e=0;e<42;e++){let n=-.69+e*.049;i.path([t*1.235,-.075,n],[t*1.252,-.025,n+.018])}for(let e=0;e<20;e++){let n=t*(.08+e*.057);i.path([n,-.079,1.402],[n+t*.024,-.027,1.405])}}for(let t=0;t<7;t++){let e=-.55+t*.29;i.path([-.035,-.023,e],[0,-.035,e+.035],[.035,-.024,e])}i.path([.075,-.09,1.36],[.09,-.12,1.61],[.12,-.12,1.57],[.15,-.12,1.61],[.135,-.09,1.36]);for(let t=0;t<6;t++)i.path([.096,-.116,1.4+t*.027],[.134,-.116,1.42+t*.027]);return i.path([-1.18,.001,.7],[-.45,.003,.697],[0,-.013,.7],[.6,.003,.702],[1.18,.001,.7]),i.paths}function pf(i,t=!1){let e=df();for(let r=0;r<3;r++){let a=.37+r*.074;e.path(...Array.from({length:30},(o,c)=>[-.92+c*.064,.001,a+Math.sin(c*1.7+r)*.006]))}for(let r=0;r<20;r++){let a=-.9+r*.093,o=.55+Math.sin(r*4.3)*.026;e.path([a,.001,o],[a+.04,.001,o+.018])}let n=e.paths.length;for(let r of[-1,1]){let a=r*.54;if(i===0){e.path([a-.23,0,.04],[a-.04,0,-.35],[a+.01,0,-.28],[a+.2,0,.08]);for(let o=0;o<8;o++)e.path([a-.06+o*.024,.002,-.12+o*.02],[a-.15+o*.03,.002,.06]);e.path([a,0,.16],[a+.04,.19,.12],[a+.01,.28,.1]);for(let o=0;o<5;o++)for(let c of[-1,1])e.path([a+.035,.055+o*.034,.12],[a+c*(.1-o*.011),.11+o*.034,.11]);e.ellipse(a+.25,.002,.04,.055,.039)}else if(i===1){e.path([a-.24,0,-.08],[a-.07,0,-.27],[a+.09,0,-.3],[a+.28,0,-.05]),e.path([a,0,.13],[a+.008,.2,.13],[a-.034,.28,.14]),e.path([a+.004,.14,.13],[a+.065,.23,.1]);for(let[o,c]of[[-.055,.26],[.03,.31],[.085,.26]])e.ellipse(a+o,c,.12,.073,.055,!0);for(let o=0;o<6;o++)e.path([a-.14+o*.044,.002,-.08],[a-.08+o*.043,.002,-.17])}else if(i===2){e.path([a-.055,0,.12],[a-.034,.23,.12],[a+.034,.23,.12],[a+.055,0,.12]);for(let o=0;o<4;o++){let c=o*Math.PI/2+.3;e.path([a,.2,.15],[a+Math.cos(c)*.16,.2+Math.sin(c)*.16,.15],[a+Math.cos(c+.18)*.16,.2+Math.sin(c+.18)*.16,.15])}for(let o=0;o<5;o++)e.path([a-.2,0,-.1-o*.027],[a+.17,0,-.13-o*.027])}else if(i===3){e.path([a-.075,0,.13],[a,.34,.13],[a+.075,0,.13]);for(let o=0;o<4;o++)e.path([a-.065+o*.012,o*.06,.13],[a+.05-o*.01,.08+o*.06,.13]);e.ellipse(a,.3,.13,.055,.036,!0);for(let o=0;o<6;o++)e.path([a-.2+o*.07,0,-.1],[a-.2+o*.07,.04,-.1]);e.path([a-.2,.024,-.1],[a+.15,.027,-.1])}else if(i===4){for(let o=0;o<3;o++){let c=a+(o-1)*.095,h=.15+o*.055;e.path([c-.045,0,.12],[c-.038,h,.12],[c,h+.06,.08],[c+.041,h,.1],[c+.045,0,.12]),e.path([c,0,.08],[c,h+.06,.08])}for(let o=0;o<4;o++)e.path([a-.2,0,-.06-o*.04],[a-.04,0,-.06-o*.04],[a+.04,0,-.12-o*.04],[a+.2,0,-.12-o*.04])}else{e.ellipse(a,.14,.1,.1,.1,!0),e.ellipse(a,.14,.1,.17,.045);let o=[[a-.23,0,-.2],[a-.09,0,-.31],[a+.14,0,-.19],[a+.2,0,-.04]];e.path(...o);for(let[c,h,l]of o)e.path([c-.022,h,l],[c+.022,h,l]),e.path([c,h,l-.022],[c,h,l+.022])}}return t?[...[-.35,.14,.61].map(r=>Array.from({length:30},(a,o)=>[-.91+o*.063,.001,r+Math.sin(o*1.7)*.006])),...e.paths.slice(n).map(r=>r.map(([a,o,c])=>[a,o*.7,-.525+c*.14]))]:e.paths}function ea(i,t="#635b51",e=.0011){let n=new Se(_n(i,e),new ze({color:t,vertexColors:!0}));return n.name="spatial-pencil-drawing",n}function mf(){return Array.from({length:16},(i,t)=>Array.from({length:21},(e,n)=>[-1.06+n*.105,.018+t%3*.009,-.28+t*.052+Math.sin(n*.4+t)*.014]))}function ny(i,t){let e=i.getContext("2d"),n=i.width,s=i.height,r=xn(t),a=fh(130+t);e.globalAlpha=1,e.fillStyle=r.paper,e.fillRect(0,0,n,s);let o=(l,d,u,f,m,x)=>{e.fillStyle=m,e.globalAlpha=x;let g=Array.from({length:28},(A,S)=>{let b=S/28*Math.PI*2,v=.86+a()*.18,R=(l+Math.cos(b)*u*v)*n,y=(d+Math.sin(b)*f*v)*s;return[R,y]});e.beginPath();let p=g[g.length-1],T=g[0];e.moveTo((p[0]+T[0])/2,(p[1]+T[1])/2),g.forEach((A,S)=>{let b=g[(S+1)%g.length];e.quadraticCurveTo(A[0],A[1],(A[0]+b[0])/2,(A[1]+b[1])/2)}),e.closePath(),e.fill()};for(let l=0;l<42;l++){let d=a(),u=a()*.5;o(d,u,.055+a()*.15,.025+a()*.055,l%4===0?r.body:r.accent,.055)}for(let l of[.055,.945])for(let d=0;d<12;d++)o(l,.06+d*.076,.04+a()*.05,.055,r.accent,.07);for(let l of[.174,.405,.627])for(let d=0;d<16;d++)o(.07+d*.056,l,.057,.045,"#ba9660",.04);o(.229,.405,.09,.235,"#319788",.11),o(.067,.401,.045,.225,"#c49737",.16),e.globalAlpha=1;let c=e.createLinearGradient(n*.476,0,n*.524,0);c.addColorStop(0,"#6d4d2b00"),c.addColorStop(.47,"#6d4d2b28"),c.addColorStop(.5,"#6d4d2b54"),c.addColorStop(.56,"#fff9e988"),c.addColorStop(1,"#fff9e900"),e.fillStyle=c,e.fillRect(n*.476,0,n*.048,s);let h=e.getImageData(0,0,n,s);for(let l=0;l<h.data.length;l+=4){let d=(a()-.5)*9;for(let u=0;u<3;u++)h.data[l+u]+=d;h.data[l+3]=255}e.putImageData(h,0,0)}function sy(){let i=new dn(2.44,2.12,24,1);i.rotateX(-Math.PI/2).translate(0,-.004,.34);let t=i.attributes.position;for(let e=0;e<t.count;e++){let n=Math.abs(t.getX(e));t.setY(e,-.004-.024*Math.max(0,1-n/.14)**2)}return i.computeVertexNormals(),i}var vl=class extends li{constructor(){super(),this.name="watercolor-paper-book",this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=1024,this.texture=new es(this.canvas),this.texture.colorSpace=Ce,this.page=new Se(sy(),new ze({map:this.texture,side:He})),this.page.name="opaque-painted-pages",this.add(this.page);let t=(e,n,s)=>{let r=new Se(new ji(...e),new ze({color:s,map:ph()}));r.position.set(...n),this.add(r)};t([2.57,.03,2.21],[0,-.107,.345],"#73534e"),t([2.46,.07,2.12],[0,-.059,.34],"#e8d8b3"),t([.064,.008,.25],[.113,-.115,1.475],"#c39950")}setAge(t){ny(this.canvas,t),this.texture.needsUpdate=!0}dispose(){this.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),this.texture.dispose(),this.removeFromParent()}};var _h=[-1,1].flatMap(i=>[-.65,1.34].map(t=>({id:`handle-${i}-${t}`,x:i*1.28,y:.035,z:t}))),gf="#342d2b",ir=class{constructor(t,e,n,{flat:s=!0,backing:r=!1}={}){this.backing=r,this.canvas=document.createElement("canvas"),this.canvas.width=768,this.canvas.height=Math.round(768*n/e),this.ctx=this.canvas.getContext("2d"),this.texture=new es(this.canvas),this.texture.colorSpace=Ce,this.mesh=new Se(new dn(e,n),new ze({map:this.texture,transparent:!0,side:He,depthWrite:!1})),this.mesh.rotation.x=s?-Math.PI/2:-.35,t.add(this.mesh),this.last=""}text(t,e=gf){let n=JSON.stringify([t,e]);if(n===this.last)return;this.last=n;let{ctx:s,canvas:{width:r,height:a}}=this;s.clearRect(0,0,r,a),this.backing&&(s.fillStyle="#fff0d5",s.beginPath(),s.moveTo(4,7),s.lineTo(r*.53,3),s.lineTo(r-4,8),s.lineTo(r-7,a-5),s.lineTo(7,a-3),s.closePath(),s.fill(),s.strokeStyle="#927454",s.lineWidth=2,s.stroke()),s.strokeStyle="#a49b87",s.lineWidth=2,s.beginPath(),s.moveTo(8,a-5),s.lineTo(r*.53,a-3),s.lineTo(r-8,a-6),s.stroke(),s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,t.forEach((o,c)=>{s.font=`${c===0?"bold ":""}${Math.floor(a/t.length*.61)}px 'Patrick Hand', cursive`,s.fillText(o,r/2,(c+.5)*a/t.length,r-24)}),this.texture.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}},Ml=class{constructor(t,e){this.host=e,this.time=0,this.age=-1,this.labelClock=0,this.labels=new Map,this.offers=[],this.highlightedDocks=[],this.renderer=new nl({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),this.renderer.xr.setFramebufferScaleFactor(.9),this.renderer.xr.setFoveation(.7),this.renderer.outputColorSpace=Ce,this.scene=new xr,this.scene.background=new Nt("#f5f1e8"),this.camera=new Je(43,1,.01,30),this.camera.position.set(.45,2.45,3.3),this.controls=new ml(this.camera,t),this.autoFrame=!0,this.controls.addEventListener("start",()=>{this.autoFrame=!1}),this.controls.target.set(0,.1,.3),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.485,this.controls.minDistance=.4,this.controls.maxDistance=8,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.mouseButtons={RIGHT:yi.ROTATE,MIDDLE:yi.PAN},this.controls.touches={TWO:Ei.DOLLY_PAN},this.scene.add(new Ir("#fffaf0","#8c8f82",1.9));let n=new Lr("#fff8ed",1.2);n.position.set(-2,4,2),this.scene.add(n),this.root=new li,this.scene.add(this.root),this.table={position:{x:0,y:0,z:0},yaw:0,scale:1},this.army=new cs(this.root,{capacity:6e3}),this.shop=new cs(this.root,{capacity:1200}),this.held=new cs(this.root,{capacity:600}),this.details=new cs(this.root,{capacity:100}),this.book=ea(ff(),"#514a42",.002),this.paper=new vl,this.root.add(this.paper),this.root.add(this.book),this.landscape=null,this.chapter=new ir(this.root,.92,.063),this.chapter.mesh.position.set(0,.003,-.65),this.rallyClassic=this.zone(-.66,.395,.44,.51,"#438e72"),this.rallyWide=this.zone(-.66,.145,.44,1.01,"#438e72"),this.troops=[],this.status=new ir(this.root,1.38,.22,{flat:!1,backing:!0}),this.status.mesh.position.set(.02,.2,-.58),this.hint=new ir(this.root,1.85,.105),this.hint.mesh.position.set(0,.004,-.17),this.hint.text(["Lift a difficulty seal from the tray. Drop it onto the page."]),this.shadow=new ts(gl().shadow,new ze({color:"#382f2b",transparent:!0,opacity:.42,depthWrite:!1}),170),this.shadow.frustumCulled=!1,this.root.add(this.shadow),this.shadowMatrix=new Wt,this.shadowQuaternion=new Ee().setFromEuler(new hi(-Math.PI/2,0,0)),this.mist=this.makeMist(),this.root.add(this.mist),this.reticle=new Se(new Er(.09,.115,32).rotateX(-Math.PI/2),new ze({color:"#74c4a5",side:He})),this.reticle.visible=!1,this.reticle.matrixAutoUpdate=!1,this.scene.add(this.reticle),this.refreshArt(0),this.resize(),this.syncTable()}zone(t,e,n,s,r){let a=new li;this.root.add(a);let o=[];for(let l=0;l<12;l++){let d=t-n/2+l*n/12;o.push([[d,.003,e+s/2-.035],[d+.018,.003,e+s/2-.006]])}a.add(ea(o,r,9e-4));let c=[[t-n/2,.004,e-s/2],[t+n/2,.004,e-s/2],[t+n/2,.004,e+s/2],[t-n/2,.004,e+s/2],[t-n/2,.004,e-s/2]].map(l=>new C(...l)),h=new Dn(new Me().setFromPoints(c),new Ar({color:r,dashSize:.035,gapSize:.018}));return h.computeLineDistances(),a.add(h),a}makeMist(){let t=ea(mf(),"#91897c",55e-5);return t.material.transparent=!0,t.material.opacity=.33,t.material.depthWrite=!1,t}refreshArt(t,e=!0){t===this.age&&e===this.tactical||(this.age=t,this.tactical=e,this.rallyClassic.visible=!e,this.rallyWide.visible=e,this.hint.mesh.position.z=e?-.43:-.17,this.paper.setAge(t),this.landscape&&(this.landscape.removeFromParent(),this.landscape.geometry.dispose(),this.landscape.material.dispose()),this.landscape=ea(pf(t,e),"#635b51",.00165),this.root.add(this.landscape),this.chapter.text([uf[t].title]))}resize(){let t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;!e||!n||this.renderer.xr.isPresenting||(this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.fov=Math.min(95,ss.radToDeg(2*Math.atan(Math.tan(ss.degToRad(43/2))*Math.max(1,1/this.camera.aspect)))),this.camera.updateProjectionMatrix(),this.autoFrame&&this.frameBook())}frameBook(){this.autoFrame=!0;let t=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.update(),this.camera.position.set(.45,2.45,3.3),this.controls.target.set(0,.1,.3),this.controls.update();let e=this.controls.target,n=this.camera.position.clone().sub(e).normalize(),s=this.camera.quaternion.clone().invert(),r=Math.tan(ss.degToRad(this.camera.fov/2))*.88,a=r*this.camera.aspect,o=0;for(let c of[-1.46,1.46])for(let h of[-.08,.48])for(let l of[-.8,1.45]){let d=new C(c,h,l).sub(e).applyQuaternion(s);o=Math.max(o,d.z+Math.abs(d.x)/a,d.z+Math.abs(d.y)/r)}this.camera.position.copy(e).addScaledVector(n,o),this.controls.update(),this.controls.enableDamping=t}syncTable(){let t=this.table;this.root.position.set(t.position.x,t.position.y,t.position.z),this.root.rotation.y=t.yaw,this.root.scale.setScalar(t.scale),this.root.updateMatrixWorld(!0)}immersive(t){this.scene.background=t?null:new Nt("#f5f1e8"),this.controls.enabled=!t,t||this.resize()}message(t){this.hint.text([t])}refreshShop(t){this.offers=this.host.offers(t);let e=new Set(this.offers.map(n=>n.id));for(let[n,s]of this.labels)e.has(n)||(s.dispose(),this.labels.delete(n));this.shop.begin();for(let n of this.offers){gh(this.shop,n,t?.player.age||0,{x:n.x,z:n.z});let s=this.labels.get(n.id);s||(s=new ir(this.root,n.kind==="seal"?.39:.245,.072),this.labels.set(n.id,s)),s.mesh.position.set(n.x,.006,n.z+.113);let r=this.host.reason(n,t),a=n.price===1/0?"MAX":n.price?`${n.price} ${n.currency||"gold"}`:n.action==="speed"?`${this.host.speed}\xD7`:n.action==="quality"?this.host.quality:n.command?.type==="special"&&t?.player.specialTimer>0?`${Math.ceil(t.player.specialTimer)}s`:"";s.text([n.label,a||(n.action?"Lift & drop":"Ready")],r?"#81766a":gf)}this.shop.end(),this.details.begin();for(let n of _h)this.details.model(n.x,n.y,n.z),this.details.part("ring",[0,0,0],[.075,.075,.075],"#8b7051",[Math.PI/2,0,0]);this.details.end()}update(t,e,n){let s=(t?.tick||0)/60;this.time+=n,this.labelClock-=n;let r=!!t&&be(t);this.refreshArt(t?.player.age||0,!t||r),this.troops=[],this.syncTable(),this.labelClock<=0&&(this.labelClock=.25,this.refreshShop(t),this.status.text(t?[t.running?`${Yt[t.player.age].name}  \xB7  ${Math.floor(t.player.gold)} gold  \xB7  ${Math.floor(t.player.xp)} XP`:t.winner===0?"A draw. Both pages fell together.":t.winner===1?"Victory! The page is yours.":"Defeat. A new page awaits.",`${Math.ceil(t.player.hp)} / ${Math.ceil(t.player.maxHp)} HP   \u2014   Enemy ${Math.ceil(t.enemy.hp)} HP   \xB7   ${t.paused?"PAUSED":`${this.host.speed}\xD7`}`]:["INK BATTLE \xB7 THE SKETCHBOOK","Choose a seal. Lift a world."])),this.army.begin();let a=new Set((t?.units||[]).filter(c=>c.team===1&&c.guide).sort((c,h)=>h.guide.until-c.guide.until||h.id-c.id).slice(0,12).map(c=>c.id));if(this.highlightedDocks=[],t)for(let c of e){let h=Qs(c.offer,t,c.targetPosition||c.position);h&&!this.highlightedDocks.includes(h.slot)&&this.highlightedDocks.push(h.slot)}let o=0;if(t){for(let c of[1,-1]){let h=c===1?t.player:t.enemy,l=-c*1.06;lf(this.army,h.age,l,c,h.drawProgress),h.turrets.forEach((d,u)=>{let f=dl(u,c),m=c===1&&this.highlightedDocks.includes(u);this.army.model(f.x,0,f.z),yl(this.army,{built:u<h.unlockedSlots,occupied:d!==null,highlighted:m,color:Mi[c]}),d!==null&&(this.army.model(f.x,f.y,f.z,.83*Math.max(.02,h.turretProgress[u]),c,r?-(h.turretAim[u].heading-(c===1?0:Math.PI)):0),er(this.army,h.age,d,Mi[c],!1,nf(t,c,u),this.host.quality!=="comfort"),r&&h.turretHp[u]<h.turretMaxHp[u]&&(this.army.model(f.x,f.y+.18,f.z),this.army.line([-.04,0,0],[.04,0,0],.003,"#a87867"),this.army.line([-.04,0,.001],[-.04+.08*Math.max(0,h.turretHp[u]/h.turretMaxHp[u]),0,.001],.003,Mi[c])))})}for(let c of t.units){let h=(c.x/1280-.5)*ri.width,l=r?vi(c.z):ri.lane+(c.id%5-2)*.024,d=Math.max(.02,c.drawProgress)*Math.min(1.8,c.size/50),u=this.host.quality==="comfort";xl(this.army,c.age,c.uType,{x:h,z:l,scale:d,team:c.team,yaw:r?-(c.heading-(c.team===1?0:Math.PI)):0,time:u?0:s+c.id,walking:t.running&&!u&&c.moving,motion:ef(c,t.running),detailed:!u}),r&&c.team===1&&c.drawProgress>=1&&t.running&&!t.paused&&(this.troops.push({id:`troop-${c.id}`,x:h,y:.13*d,z:l,pickRadius:.055*Math.min(1.5,d)}),a.has(c.id)&&this.guideMark(this.army,c,c.guide,!1)),u||(this.army.model(h,.23*d,l,1),this.army.line([-.035,0,0],[.035,0,0],.0028,"#aa8f7e"),this.army.line([-.035,0,.001],[-.035+.07*Math.max(0,c.hp/c.maxHp),0,.001],.003,Mi[c.team])),this.shadowMatrix.compose(new C(h,.005,l),this.shadowQuaternion,new C(.045*d,.025*d,1)),this.shadow.setMatrixAt(o++,this.shadowMatrix)}for(let c of t.running?t.projectiles:[])if(!(!Number.isFinite(c.x)||!Number.isFinite(c.y))){if(r&&c.type==="laser"){this.army.model(0,0,0),this.army.line([pn(c.startX),(600-c.startY)*ri.width/1280,vi(c.startZ)],[pn(c.x),Math.max(.025,(600-c.y)*ri.width/1280),vi(c.z)],.0028,Mi[c.team]);continue}this.army.model((c.x/1280-.5)*ri.width,Math.max(.035,(600-c.y)/1280*ri.width),r?vi(c.z):ri.lane,1,1,r?-(Math.atan2(c.targetZ-c.startZ,c.targetX-c.startX)-(c.team===1?0:Math.PI)):0),cf(this.army,c.type,c.team,c.team===1?t.player.age:t.enemy.age)}for(let c of t.running?t.specials:[]){let h=(c.x/1280-.5)*ri.width;this.army.model(h,.012,r?vi(c.z):ri.lane),hf(this.army,c.age,s,c.team,this.host.quality!=="comfort")}}this.army.end(),this.shadow.count=o,this.shadow.instanceMatrix.needsUpdate=!0,this.shadow.visible=this.host.quality!=="comfort",this.held.begin();for(let c of e){if(c.offer.kind==="nudge"){let d=t?.units.find(u=>u.id===c.offer.command.id);if(d){let u=c.targetPosition||c.position,f=cl(t,1,d,{x:ll(u.x),z:Yr(u.z)});this.guideMark(this.held,d,f,!0);let m=mn(t,f.target);m&&(this.held.model(pn(m.x),.015,vi(m.z)),this.held.ellipse([0,0,0],[.11,.1],"xz","#b5862a"))}continue}let h=c.position,l=c.offer.kind==="unit";gh(this.held,c.offer,c.age||0,{x:h.x-(l?.018:0),y:h.y-(l?.226:.06),z:h.z,held:!0,time:this.time})}this.held.end(),this.mist.visible=this.host.quality==="mist",this.mist.position.z=Math.sin(this.time*.18)*.012,this.renderer.xr.isPresenting||this.controls.update()}guideMark(t,e,n,s){let r=pn(e.x),a=vi(e.z),o=r+e.team*.12,c=vi(n.z),h=e.intent==="engaged"?"#9c6818":"#246c54";t.model(0,.012,0);for(let l=0;l<4;l++)t.line([r+(o-r)*l/4,0,a+(c-a)*l/4],[r+(o-r)*(l+.55)/4,0,a+(c-a)*(l+.55)/4],.0035,h);t.line([o-.025*e.team,0,c-.02],[o,0,c],.002,h),t.line([o-.025*e.team,0,c+.02],[o,0,c],.002,h),s&&t.ellipse([r,0,a],[.065,.045],"xz",h,12)}render(){this.renderer.render(this.scene,this.camera)}stats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,instances:Object.values(this.army.counts).reduce((t,e)=>t+e,0),overflow:this.army.overflow+this.held.overflow+this.shop.overflow,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,highlightedDocks:[...this.highlightedDocks]}}};var ry=(i,t,e)=>Math.max(t,Math.min(e,i)),Sl=i=>Math.hypot(i.x,i.y,i.z),xh=(i,t)=>({x:i.x-t.x,y:i.y-t.y,z:i.z-t.z}),_f=(i,t)=>({x:(i.x+t.x)/2,y:(i.y+t.y)/2,z:(i.z+t.z)/2});function ia(i,t){let e=Math.cos(t),n=Math.sin(t);return{x:e*i.x+n*i.z,y:i.y,z:-n*i.x+e*i.z}}function Ci(i,t){let e=ia(xh(i,t.position),-t.yaw);return{x:e.x/t.scale,y:e.y/t.scale,z:e.z/t.scale}}function yh(i,t){let e=ia(i,t.yaw);return{x:t.position.x+e.x*t.scale,y:t.position.y+e.y*t.scale,z:t.position.z+e.z*t.scale}}var bl=class{constructor(t){this.table=t,this.grips=new Map,this.origin=null}begin(t,e){this.grips.set(t,{...e}),this.rebase()}end(t){this.grips.delete(t),this.rebase()}clear(){this.grips.clear(),this.origin=null}rebase(){let t=[...this.grips.values()];if(!t.length){this.origin=null;return}let e=t.length>1?_f(t[0],t[1]):t[0],n=t.length>1?xh(t[1],t[0]):{x:1,y:0,z:0};this.origin={local:Ci(e,this.table),distance:Math.max(.06,Sl(n)),angle:Math.atan2(n.z,n.x),scale:this.table.scale,yaw:this.table.yaw}}move(t,e){if(!this.grips.has(t))return;this.grips.set(t,{...e});let n=[...this.grips.values()],s=this.origin,r=n.length>1?_f(n[0],n[1]):n[0];if(n.length>1){let o=xh(n[1],n[0]);this.table.scale=ry(s.scale*Sl(o)/s.distance,ri.minScale,ri.maxScale),Math.hypot(o.x,o.z)>.05&&(this.table.yaw=s.yaw-(Math.atan2(o.z,o.x)-s.angle))}let a=ia(s.local,this.table.yaw);this.table.position={x:r.x-a.x*this.table.scale,y:r.y-a.y*this.table.scale,z:r.z-a.z*this.table.scale}}};function xf(i,t,e=9.81,n=0){let s={...i.position};if(i.position.x+=i.velocity.x*t,i.position.z+=i.velocity.z*t,i.position.y+=i.velocity.y*t-e*t*t/2,i.velocity.y-=e*t,i.age+=t,s.y>=n&&i.position.y<=n){let r=(s.y-n)/(s.y-i.position.y||1);return{x:s.x+(i.position.x-s.x)*r,y:n,z:s.z+(i.position.z-s.z)*r}}return null}var Tl=class{constructor(t,e,{onCarry:n=()=>{}}={}){this.host=t,this.table=e,this.onCarry=n,this.gesture=new bl(e),this.grabs=new Map,this.flights=new Map}begin(t,e,n,s=0){if(this.grabs.has(t)||this.flights.has(t))return!1;if(e.startsWith("handle-"))return this.gesture.grips.size>=2?!1:(this.onCarry(),this.gesture.begin(t,n),this.grabs.set(t,{handle:!0}),!0);let r=this.host.grab(t,e);return r.ok?(this.grabs.set(t,{token:r.token,world:{...n},targetWorld:{...n},position:Ci(n,this.table),history:[{world:{...n},time:s}]}),!0):!1}move(t,e,n=0,s=e){let r=this.grabs.get(t);if(r){if(r.handle){this.gesture.move(t,e);return}for(r.world={...e},r.targetWorld={...s},r.position=Ci(e,this.table),r.history.push({world:{...e},time:n});r.history.length>2&&r.history[0].time<n-.12;)r.history.shift()}}release(t,{desktop:e=!1}={}){let n=this.grabs.get(t);if(!n)return;if(this.grabs.delete(t),n.handle){this.gesture.end(t);return}if(!this.host.holds.has(t))return;let s=Ci(n.world,this.table);if(n.token.offer.kind==="nudge"){this.host.drop(t,{...Ci(n.targetWorld,this.table),y:0});return}s.y-=n.token.offer.kind==="unit"?.226:.06;let r=Qr(n.token.offer);if(e||s.y<=r+.025){this.host.drop(t,{...s,y:r});return}let a=n.history[0],o=n.history.at(-1),c=Math.max(.016,o.time-a.time),h={x:(o.world.x-a.world.x)/c,y:(o.world.y-a.world.y)/c,z:(o.world.z-a.world.z)/c},l=Math.min(1,3/(Sl(h)||1)),d=ia(h,-this.table.yaw);for(let u of["x","y","z"])d[u]*=l/this.table.scale;this.flights.set(t,{token:n.token,position:s,velocity:d,age:0})}cancel(t){this.grabs.delete(t),this.flights.delete(t),this.gesture.end(t),this.host.cancel(t)}cancelAll(){for(let t of new Set([...this.grabs.keys(),...this.flights.keys()]))this.cancel(t)}update(t){for(let[e,n]of this.grabs)!n.handle&&!this.host.holds.has(e)&&this.grabs.delete(e);for(let[e,n]of this.flights){if(!this.host.holds.has(e)){this.flights.delete(e);continue}let s=xf(n,Math.min(t,.1),9.81/this.table.scale,Qr(n.token.offer));s?(this.flights.delete(e),this.host.drop(e,s)):(n.age>3||n.position.y<-1)&&this.cancel(e)}}visuals(){let t=[];for(let e of this.grabs.values())e.handle||t.push({offer:e.token.offer,age:e.token.age,position:Ci(e.world,this.table),targetPosition:Ci(e.targetWorld,this.table)});for(let e of this.flights.values())t.push({offer:e.token.offer,age:e.token.age,position:{...e.position,y:e.position.y+(e.token.offer.kind==="unit"?.226:.06)}});return t}};var El=class{constructor(){this.reset()}reset(){this.angle=null}update(t){if(t.length!==2)return this.reset(),0;let e=t[1].x-t[0].x,n=t[1].y-t[0].y;if(Math.hypot(e,n)<24)return this.reset(),0;let s=Math.atan2(n,e),r=this.angle;if(this.angle=s,r===null)return 0;let a=s-r;return Math.atan2(Math.sin(a),Math.cos(a))*.35}};var Xn=i=>({x:i.x,y:i.y,z:i.z}),ay=new Ti(new C(-1.46,-.15,-.8),new C(1.46,.48,1.56)),oy=["thumb","index-finger","middle-finger","ring-finger","pinky-finger"].map(i=>i==="thumb"?["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"]:[`${i}-metacarpal`,`${i}-phalanx-proximal`,`${i}-phalanx-intermediate`,`${i}-phalanx-distal`,`${i}-tip`]),wl=class{constructor(t,e,{onCarry:n=()=>{},onPlace:s=()=>!1}={}){this.view=t,this.host=e,this.interaction=new Tl(e,t.table,{onCarry:()=>{t.autoFrame=!1,n()}}),this.onPlace=s,this.raycaster=new Dr,this.pointer=new It,this.pointers=new Map,this.touchPointers=new Map,this.twist=new El,this.touchNavigation=!1,this.sources=new Map,this.nextId=0,this.canvas=t.renderer.domElement,this.listeners=[],this.canvas.addEventListener("pointerdown",r=>{if(t.renderer.xr.isPresenting)return;if(r.pointerType==="touch"){if(this.touchPointers.set(r.pointerId,{x:r.clientX,y:r.clientY}),this.twist.update([...this.touchPointers.values()]),this.touchPointers.size>1){this.touchNavigation=!0;for(let c of this.pointers.keys())this.interaction.cancel(c);this.pointers.clear(),t.controls.enabled=!0,t.controls.touches.ONE=null;return}}else if(r.button!==0)return;let a=this.desktopRay(r),o=!this.pointers.size&&!this.touchNavigation&&!this.pick({x:1e5,y:1e5,z:1e5},a)&&this.outsidePlaySpace(a);r.pointerType==="touch"?t.controls.touches.ONE=o?Ei.ROTATE:null:t.controls.mouseButtons.LEFT=o?yi.ROTATE:null},!0),this.canvas.addEventListener("pointermove",r=>{r.pointerType==="touch"&&this.touchPointers.has(r.pointerId)&&this.touchPointers.set(r.pointerId,{x:r.clientX,y:r.clientY})},!0);for(let r of["pointerdown","pointermove","pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(r,a=>this.desktop(r,a));this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),this.canvas.addEventListener("keydown",r=>{r.key==="Escape"&&(this.cancelAll(),this.host.pauseForInterruption())}),this.handGroup=new li,t.scene.add(this.handGroup),this.handVertices=new $t(new Float32Array(240),3),this.handVertices.setUsage(qs),this.handLines=new Mr(new Me().setAttribute("position",this.handVertices),new Ln({color:"#6aa999",transparent:!0,opacity:.75})),this.handGroup.add(this.handLines),this.handLines.frustumCulled=!1}candidates(){return[..._h,...this.view.troops||[],...this.view.offers.map(t=>({...t,y:t.kind==="unit"?.15:.07}))]}pick(t,e){let n=Ci(t,this.view.table),s=null,r=1/0;for(let o of this.candidates()){let c=Math.hypot(n.x-o.x,n.y-o.y,n.z-o.z);c<(o.id.startsWith("troop-")?o.pickRadius:o.id.startsWith("handle-")?.12:.13)&&c<r&&(s=o,r=c)}if(s)return{target:s.id,world:t};if(!e)return null;let a=1/0;for(let o of this.candidates()){let c=new C().copy(yh(o,this.view.table)),h=new Oi(c,(o.pickRadius||.105)*this.view.table.scale),l=e.intersectSphere(h,new C);if(!l)continue;let d=e.origin.distanceTo(l);d<a&&(a=d,s=o)}return s?{target:s.id,world:Xn(e.at(a,new C)),distance:a}:null}desktopRay(t){let e=this.canvas.getBoundingClientRect();return this.pointer.set((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.raycaster.setFromCamera(this.pointer,this.view.camera),this.raycaster.ray}outsidePlaySpace(t){let e=new C().copy(Ci(t.origin,this.view.table)),n=new C().copy(Ci(t.at(1,new C),this.view.table)).sub(e).normalize();return!new Bi(e,n).intersectsBox(ay)}planePoint(t,e){return t.intersectPlane(new ti(new C(0,1,0),-e),new C)}landingPoint(t,e){let n=e?Qr(e):0;return this.planePoint(t,this.view.table.position.y+n*this.view.table.scale)}turnView(){if(!this.touchNavigation||!this.view.controls.enabled||this.view.renderer.xr.isPresenting)return;let t=this.twist.update([...this.touchPointers.values()]);t&&this.view.controls.rotateLeft(-t)}update(t){this.turnView(),this.interaction.update(t)}desktop(t,e){if(this.view.renderer.xr.isPresenting||e.button&&t==="pointerdown")return;if(e.pointerType==="touch"){let a=this.touchNavigation;if(["pointerup","pointercancel","lostpointercapture"].includes(t)&&(t==="pointerup"&&this.touchPointers.has(e.pointerId)&&(this.touchPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.turnView()),this.touchPointers.delete(e.pointerId),this.twist.reset(),this.twist.update([...this.touchPointers.values()]),this.touchPointers.size||(this.touchNavigation=!1)),a)return}let n=`pointer-${e.pointerId}`,s=this.pointers.get(n),r=this.desktopRay(e);if(t==="pointerdown"){let a=this.pick({x:1e5,y:1e5,z:1e5},r);if(!a)return;this.interaction.begin(n,a.target,a.world,e.timeStamp/1e3)&&(this.pointers.set(n,{touch:e.pointerType==="touch",height:a.target.startsWith("handle-")?a.world.y:yh({x:0,y:.28,z:0},this.view.table).y}),this.view.controls.enabled=[...this.pointers.values()].every(o=>o.touch),this.canvas.setPointerCapture(e.pointerId),this.canvas.focus(),e.preventDefault())}else if(t==="pointermove")if(s){let a=this.planePoint(r,s.height);if(a){let o=this.interaction.grabs.get(n)?.token?.offer,c=this.landingPoint(r,o);this.interaction.move(n,Xn(a),e.timeStamp/1e3,Xn(c||a))}}else{let a=this.pick({x:1e5,y:1e5,z:1e5},r);this.canvas.style.cursor=a?"grab":"default",a&&this.describe(a.target)}else if(s){if(t==="pointerup"){let a=this.interaction.grabs.get(n)?.token?.offer,o=this.landingPoint(r,a);o&&!this.interaction.grabs.get(n)?.handle&&this.interaction.move(n,Xn(o),e.timeStamp/1e3),this.interaction.release(n,{desktop:!0})}else this.interaction.cancel(n);this.pointers.delete(n),this.view.controls.enabled=[...this.pointers.values()].every(a=>a.touch),this.canvas.hasPointerCapture(e.pointerId)&&this.canvas.releasePointerCapture(e.pointerId)}}describe(t){if(t.startsWith("handle-"))this.view.message("Carry with one ring. Hold two rings to resize and turn.");else{let e=this.host.offer(t);e&&this.view.message(`${e.label} \xB7 ${e.detail}`)}}bind(t){this.unbind(),this.session=t;let e=(n,s)=>{t.addEventListener(n,s),this.listeners.push([n,s])};for(let n of["selectstart","squeezestart","selectend","squeezeend"])e(n,s=>{if(t.visibilityState!=="visible"||s.inputSource.hand)return;let r=this.sources.get(s.inputSource);if(!r?.valid)return;let a=this.view.renderer.xr.getReferenceSpace(),o=s.frame.getPose(s.inputSource.gripSpace||s.inputSource.targetRaySpace,a),c=s.frame.getPose(s.inputSource.targetRaySpace,a);if(!o||!c){this.interaction.cancel(r.id),r.buttons.clear();return}r.position=Xn(o.transform.position),r.ray.origin.copy(c.transform.position),r.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation);let h=n.startsWith("select")?"trigger":"grip";if(n.endsWith("start")){if(this.onPlace(s.frame))return;r.buttons.add(h),r.buttons.size===1&&this.startSource(r)}else if(r.buttons.delete(h),!r.buttons.size){let l=r.distance?Xn(r.ray.at(r.distance,new C)):r.position;this.interaction.move(r.id,l,performance.now()/1e3),this.interaction.release(r.id)}});e("inputsourceschange",n=>{for(let s of n.removed)this.remove(s)})}unbind(){if(this.session)for(let[t,e]of this.listeners)this.session.removeEventListener(t,e);this.listeners=[],this.session=null,this.cancelAll();for(let t of[...this.sources.keys()])this.remove(t)}remove(t){let e=this.sources.get(t);e&&(this.interaction.cancel(e.id),e.line.removeFromParent(),e.line.geometry.dispose(),e.line.material.dispose(),this.sources.delete(t))}startSource(t){let e=this.pick(t.position,t.hand?null:t.ray);e&&(this.describe(e.target),t.distance=e.distance||0,this.interaction.begin(t.id,e.target,e.world,performance.now()/1e3)&&this.feedback(t.id,!0))}feedback(t,e){for(let[n,s]of this.sources)s.id===t&&n.gamepad?.hapticActuators?.[0]?.pulse(e?.25:.1,e?35:80)?.catch(()=>{})}xr(t,e){if(!this.session||this.session.visibilityState!=="visible")return;let n=[],s=performance.now()/1e3;for(let r of this.session.inputSources){let a=this.sources.get(r);if(!a){let u=new Dn(new Me().setFromPoints([new C,new C(0,0,-1)]),new Ln({color:"#6aa999",transparent:!0,opacity:.5}));this.view.scene.add(u),a={id:`xr-${++this.nextId}`,hand:!!r.hand,buttons:new Set,pinched:!1,armed:!1,valid:!1,ray:new Bi,line:u},this.sources.set(r,a)}let o=t.getPose(r.gripSpace||r.targetRaySpace,e),c=t.getPose(r.targetRaySpace,e),h,l=!1;if(r.hand){let u=new Map;for(let[x,g]of r.hand){let p=t.getJointPose(g,e);p&&u.set(x,p.transform.position)}let f=u.get("thumb-tip"),m=u.get("index-finger-tip");if(f&&m){h={x:(f.x+m.x)/2,y:(f.y+m.y)/2,z:(f.z+m.z)/2},l=Math.hypot(f.x-m.x,f.y-m.y,f.z-m.z)<(a.pinched?.04:.025);for(let g of oy)for(let p=1;p<g.length;p++){let T=u.get(g[p-1]),A=u.get(g[p]);T&&A&&n.push(T.x,T.y,T.z,A.x,A.y,A.z)}}}else o&&c&&(h=Xn(o.transform.position));if(a.valid=!!h,!h){this.interaction.cancel(a.id),a.buttons.clear(),a.pinched=!1,a.armed=!1,a.line.visible=!1;continue}a.position=h,c&&(a.ray.origin.copy(c.transform.position),a.ray.direction.set(0,0,-1).applyQuaternion(c.transform.orientation)),a.line.visible=!a.hand,!a.hand&&c&&(a.line.position.copy(c.transform.position),a.line.quaternion.copy(c.transform.orientation),a.line.scale.z=a.distance||.6);let d=a.distance&&!a.hand?Xn(a.ray.at(a.distance,new C)):h;this.interaction.move(a.id,d,s),a.hand&&!l&&(a.armed=!0),a.hand&&l!==a.pinched&&(a.pinched=l,l?a.armed&&!this.onPlace(t)&&this.startSource(a):this.interaction.release(a.id))}this.handVertices.array.set(n.slice(0,this.handVertices.array.length)),this.handVertices.needsUpdate=!0,this.handLines.geometry.setDrawRange(0,Math.min(n.length,this.handVertices.array.length)/3),this.handLines.visible=n.length>0}cancelAll(){this.interaction.cancelAll(),this.view.controls.disconnect();for(let t of new Set([...this.touchPointers.keys(),...[...this.pointers.keys()].map(e=>Number(e.slice(8)))]))this.canvas.hasPointerCapture(t)&&this.canvas.releasePointerCapture(t);this.pointers.clear(),this.touchPointers.clear(),this.touchNavigation=!1,this.twist.reset(),this.view.controls.touches.ONE=null,this.view.controls.mouseButtons.LEFT=null,this.view.controls.connect(this.canvas),this.view.controls.enabled=!this.view.renderer.xr.isPresenting,this.canvas.style.cursor="default";for(let t of this.sources.values())t.buttons.clear(),t.pinched=!1,t.armed=!1,t.line.visible=!1;this.handLines.visible=!1}};function yf(i){let t="inkBattle.musicMuted.v1",e="global-v2",n="evolvingCanvas",s=["mp3","ogg","wav"],c=[{id:"evolvingCanvas",title:"The Evolving Canvas",file:"evolving_canvas",variants:["evolving_canvas","evolving_canvas_v2","evolving_canvas_v3","evolving_canvas_v4","evolving_canvas_v5","evolving_canvas_v6"],scene:"battle",roles:["ink-battle","active-fight","progression","age","all-purpose","fallback"],ageMin:0,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.68,minPlaySec:16,priority:84,fallback:!0,classicBattle:!0},{id:"pencilDawn",title:"Pencil Dawn",file:"pencil_dawn",variants:["pencil_dawn","pencil_dawn_v2"],scene:"opening",roles:["stone-age","opening","low-tension"],ageMin:0,ageMax:1,tensionMin:0,tensionMax:.38,loop:!0,volume:.58,minPlaySec:28,priority:80},{id:"graphiteSkirmish",title:"Graphite Skirmish",file:"graphite_skirmish",variants:["graphite_skirmish","graphite_skirmish_v2","graphite_skirmish_v3","graphite_skirmish_v4","graphite_skirmish_v5","graphite_skirmish_v6","graphite_skirmish_v7","graphite_skirmish_v8"],scene:"battle",roles:["early-game","mid-game","pressure"],ageMin:0,ageMax:2,tensionMin:.22,tensionMax:.72,loop:!0,volume:.62,minPlaySec:32,priority:82},{id:"inklineAdvance",title:"Inkline Advance",file:"inkline_advance",variants:["inkline_advance","inkline_advance_v2","inkline_advance_v3","inkline_advance_v4","inkline_advance_v5","inkline_advance_v6"],scene:"pressure",roles:["early-game","lane-pressure","fast-units"],ageMin:0,ageMax:2,tensionMin:.52,tensionMax:1,loop:!0,volume:.64,minPlaySec:30,priority:86},{id:"castleMarch",title:"Castle March",file:"castle_march",variants:["castle_march","castle_march_v2"],scene:"battle",roles:["castle-age","iron-age","steady-battle"],ageMin:1,ageMax:2,tensionMin:.16,tensionMax:.68,loop:!0,volume:.62,minPlaySec:34,priority:78},{id:"renaissanceRush",title:"Renaissance Rush",file:"renaissance_rush",variants:["renaissance_rush","renaissance_rush_v2"],scene:"battle",roles:["renaissance","momentum","snare-march"],ageMin:2,ageMax:3,tensionMin:.28,tensionMax:.82,loop:!0,volume:.65,minPlaySec:34,priority:84},{id:"cannonSmoke",title:"Cannon Smoke",file:"cannon_smoke",variants:["cannon_smoke","cannon_smoke_v2"],scene:"siege",roles:["turrets","specials","base-pressure"],ageMin:2,ageMax:4,tensionMin:.58,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:90},{id:"modernWarfare",title:"Modern Warfare",file:"modern_warfare",variants:["modern_warfare","modern_warfare_v2"],scene:"battle",roles:["modern-age","electric-guitar","orchestral-drop"],ageMin:3,ageMax:3,tensionMin:.26,tensionMax:1,loop:!0,volume:.68,minPlaySec:36,priority:86},{id:"futureArpeggio",title:"Future Arpeggio",file:"future_arpeggio",variants:["future_arpeggio","future_arpeggio_v2"],scene:"future",roles:["future-age","synth","tech-window"],ageMin:4,ageMax:4,tensionMin:.12,tensionMax:.72,loop:!0,volume:.62,minPlaySec:34,priority:82},{id:"neonFront",title:"Neon Front",file:"neon_front",variants:["neon_front","neon_front_v2"],scene:"pressure",roles:["future-age","high-pressure","cyber-drums"],ageMin:4,ageMax:5,tensionMin:.52,tensionMax:1,loop:!0,volume:.68,minPlaySec:34,priority:89},{id:"cosmicClash",title:"Cosmic Clash",file:"cosmic_clash",variants:["cosmic_clash","cosmic_clash_v2"],scene:"cosmic",roles:["cosmic-age","choir","final-battle"],ageMin:5,ageMax:5,tensionMin:.18,tensionMax:1,loop:!0,volume:.7,minPlaySec:42,priority:92},{id:"lastPageSiege",title:"Last Page Siege",file:"last_page_siege",variants:["last_page_siege","last_page_siege_v2"],scene:"siege",roles:["critical-base-hp","deathball","endgame-pressure"],ageMin:0,ageMax:5,tensionMin:.76,tensionMax:1,loop:!0,volume:.72,minPlaySec:32,priority:105,urgent:!0},{id:"codexGemma",title:"Codex Gemma",file:"codex_gemma",variants:["codex_gemma","codex_gemma_v2"],scene:"menu",roles:["director","pause","memory"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:.45,loop:!0,volume:.48,minPlaySec:20,priority:75},{id:"victoryCanvas",title:"Victory Canvas",file:"victory_canvas",variants:["victory_canvas","victory_canvas_v2"],scene:"victory",roles:["victory","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.58,minPlaySec:20,priority:120,outcome:"victory"},{id:"erasedPages",title:"Erased Pages",file:"erased_pages",variants:["erased_pages","erased_pages_v2"],scene:"defeat",roles:["defeat","results"],ageMin:0,ageMax:5,tensionMin:0,tensionMax:1,loop:!0,volume:.54,minPlaySec:20,priority:120,outcome:"defeat"}];return{MusicDirector:{tracks:{},activeId:null,pendingId:null,started:!1,muted:!1,suspended:!1,ducked:!1,outcome:null,masterVolume:.72,fadeMs:1600,idleReleaseMs:45e3,decisionTimer:0,lastSwitchAt:-999,transitionToken:0,audioContext:null,masterGainNode:null,mixerUnavailable:!1,elementMixer:!1,recentIds:[],signals:{tension:0,playerAge:0,enemyAge:0,troopPressure:0},init(){this.elementMixer=this.shouldUseElementMixer(),this.mixerUnavailable=this.elementMixer;try{this.muted=localStorage.getItem(t)==="1"}catch{this.muted=!1}for(let l=0;l<c.length;l++){let d=c[l],u=new Audio;u.preload=d.preload||"none",u.loop=d.loop!==!1;let f={config:d,audio:u,variantSources:this.buildVariantSources(d),variantBag:[],failedVariants:new Set,activeVariantIndex:-1,lastVariantIndex:-1,sources:[],sourceIndex:0,failed:!1,blocked:!1,fadeToken:0,playToken:0,releaseTimer:0,fadeTimer:0,fadeFrame:0,fadeStartedAt:0,fadeDurationMs:0,fadeStartVolume:0,fadeTargetVolume:0,currentVolume:0,mediaNode:null,gainNode:null,webAudioFailed:!1};u.addEventListener("error",()=>{this.pendingId!==d.id&&(this.markVariantFailed(f,f.activeVariantIndex),!f.failed&&this.activeId===d.id?this.play(d.id,{fadeMs:500,force:!0,reason:"variant_error",newVariant:!0}):f.failed&&this.activeId===d.id&&this.playFallback({fadeMs:800,reason:"active_error"},d.id),this.updateButton())}),this.tracks[d.id]=f}this.updateButton()},buildSourceCandidates(l){return s.map(d=>`assets/audio/${l}.${d}`)},buildVariantSources(l){let d=[],u=f=>{!Array.isArray(f)||!f.length||d.push(f.slice())};if(Array.isArray(l.variants)&&l.variants.length)for(let f=0;f<l.variants.length;f++){let m=l.variants[f];if(typeof m=="string"&&m){u(this.buildSourceCandidates(m));continue}if(Array.isArray(m)&&m.length){u(m);continue}if(m&&typeof m=="object"){if(Array.isArray(m.sources)&&m.sources.length){u(m.sources);continue}typeof m.file=="string"&&m.file&&u(this.buildSourceCandidates(m.file))}}else if(Array.isArray(l.files)&&l.files.length)for(let f=0;f<l.files.length;f++)typeof l.files[f]=="string"&&l.files[f]&&u(this.buildSourceCandidates(l.files[f]));else Array.isArray(l.sources)&&l.sources.length&&u(l.sources);if(!d.length){let f=l.file||l.id;u(this.buildSourceCandidates(f))}return d},refillVariantBag(l){if(!l)return;let d=[];for(let u=0;u<l.variantSources.length;u++)l.failedVariants.has(u)||d.push(u);for(let u=d.length-1;u>0;u--){let f=Math.floor(Math.random()*(u+1)),m=d[u];d[u]=d[f],d[f]=m}if(d.length>1&&l.lastVariantIndex>=0&&d[0]===l.lastVariantIndex){let u=1+Math.floor(Math.random()*(d.length-1)),f=d[0];d[0]=d[u],d[u]=f}l.variantBag=d},markVariantFailed(l,d){!l||d===void 0||d===null||d<0||(l.failedVariants.add(d),l.variantBag&&l.variantBag.length&&(l.variantBag=l.variantBag.filter(u=>u!==d)),l.failed=l.failedVariants.size>=l.variantSources.length)},chooseVariant(l,d={}){return!l||!l.variantSources.length?!1:d.keepCurrent&&l.activeVariantIndex>=0&&!l.failedVariants.has(l.activeVariantIndex)?(l.sources=l.variantSources[l.activeVariantIndex],l.sourceIndex=Math.max(0,Math.min(l.sourceIndex||0,l.sources.length-1)),l.failed=!1,l.sources.length>0):((!l.variantBag||!l.variantBag.length)&&this.refillVariantBag(l),!l.variantBag||!l.variantBag.length?(l.failed=!0,!1):(l.activeVariantIndex=l.variantBag.shift(),l.lastVariantIndex=l.activeVariantIndex,l.sources=l.variantSources[l.activeVariantIndex],l.sourceIndex=0,l.failed=!1,this.cancelRelease(l),this.cancelFade(l),this.setOutputVolume(l,0),l.audio.pause(),l.audio.removeAttribute("src"),l.audio.load(),l.sources.length>0))},start(l="game_start"){this.started=!0,this.suspended=!1,this.ducked=!1,this.outcome=null,this.pendingId=null,this.decisionTimer=0,this.recentIds=[],this.setSignals(this.readSignals()),this.resumeMixer(),this.fadeOutAll(0,!0),this.play(n,{fadeMs:900,force:!0,reason:l})},update(l){if(!this.started||this.outcome||this.muted||this.suspended||!i.gameState||!i.gameState.running||i.gameState.paused||(this.decisionTimer-=l,this.decisionTimer>0))return;this.decisionTimer=2.25;let d=this.readSignals();this.setSignals(d);let u=this.chooseTrack(d,{reason:"flow"});u&&u!==this.activeId?this.play(u,{reason:"flow"}):this.refreshActiveVolume()},setSignals(l){this.signals=Object.assign({},this.signals,l||{})},setScene(l,d="scene"){let u=this.chooseScene(l);return u?this.play(u,{fadeMs:850,force:!0,reason:d}):!1},setOutcome(l){this.outcome=l?"victory":"defeat",this.ducked=!1,this.play(l?"victoryCanvas":"erasedPages",{fadeMs:1400,force:!0,reason:this.outcome})},play(l,d={}){let u=this.tracks[l];if(!u||u.failed)return this.playFallback(d,l);if(this.pendingId===l)return!0;let f=d.fadeMs===void 0?this.fadeMs:d.fadeMs;if(!d.newVariant&&this.activeId===l&&!u.audio.paused)return this.refreshActiveVolume(),this.updateButton(),!0;if(!d.force&&!this.canSwitchTo(u))return!1;if(this.muted||this.suspended)return this.activeId=l,this.pendingId=null,this.transitionToken++,this.fadeOutAll(0,!0),this.updateButton(),!1;let m=++this.transitionToken,x=this.pendingId&&this.pendingId!==l?this.tracks[this.pendingId]:null;this.pendingId=null,x&&x!==u&&x.config.id!==this.activeId&&(this.cancelEntryStart(x),this.fadeOut(x,Math.min(300,f||300),!0)),this.resumeMixer();let g=this.activeId&&this.activeId!==l?this.tracks[this.activeId]:null;g&&!g.audio.paused&&this.fadeTo(g,this.targetVolume(g),Math.min(500,f||500));let p=d.newVariant===void 0?this.activeId!==l:!!d.newVariant;return this.pendingId=l,this.startEntry(u,{newVariant:p}).then(T=>{if(this.transitionToken!==m||this.pendingId!==l){u.config.id!==this.activeId&&this.fadeOut(u,Math.min(250,f||250),!0);return}if(!T){this.pendingId===l&&(this.pendingId=null),this.playFallback(d,l);return}this.pendingId=null,this.activeId=l,this.lastSwitchAt=i.globalTime,this.rememberTrack(l),this.cancelRelease(u),this.fadeTo(u,this.targetVolume(u),f),g&&this.fadeOut(g,f,!0),this.updateButton()}),this.updateButton(),!0},toggleMute(){this.muted=!this.muted;try{localStorage.setItem(t,this.muted?"1":"0")}catch{}this.muted?(this.transitionToken++,this.pendingId=null,this.fadeOutAll(350,!0)):this.started&&this.activeId?(this.resumeMixer(),this.play(this.activeId,{fadeMs:650,force:!0,reason:"unmute"})):this.started&&(this.resumeMixer(),this.play(this.chooseTrack(this.readSignals(),{force:!0,reason:"unmute"})||n,{fadeMs:650,force:!0,reason:"unmute"})),this.updateButton()},setDucked(l){if(this.ducked=!!l,this.ducked&&this.started&&!this.suspended&&!this.muted){if(this.setScene("menu","pause"))return}else!this.ducked&&this.started&&!this.outcome&&(this.decisionTimer=0,this.update(0));this.refreshActiveVolume()},suspendForPage(){!this.started||this.suspended||(this.suspended=!0,this.transitionToken++,this.pendingId=null,this.fadeOutAll(0,!0))},resumeForPage(){this.suspended&&(this.suspended=!1,this.started&&this.activeId&&!this.muted&&(this.resumeMixer(),this.play(this.activeId,{fadeMs:700,force:!0,reason:"page_visible"})))},startEntry(l,d={}){return new Promise(u=>{if(!l||l.failed||this.muted||this.suspended){u(!1);return}let f=++l.playToken;if(this.cancelRelease(l),this.resumeMixer(),!this.chooseVariant(l,{keepCurrent:!d.newVariant})){l.failed=!0,u(!1);return}if(!this.ensureSource(l)&&(this.markVariantFailed(l,l.activeVariantIndex),!this.chooseVariant(l,{keepCurrent:!1})||!this.ensureSource(l))){l.failed=!0,u(!1);return}let m=l.audio,x=!1,g=!1,p=b=>{if(!x){if(x=!0,m.removeEventListener("error",A),l.playToken!==f){u(!1);return}u(b)}},T=()=>{if(!(x||g)){if(g=!0,m.removeEventListener("error",A),l.playToken!==f){p(!1);return}this.advanceSource(l)?(x=!0,this.startEntry(l,{newVariant:!1}).then(u)):(l.failed=!0,p(!1))}},A=()=>T();m.addEventListener("error",A),m.loop=l.config.loop!==!1,this.prepareOutput(l),this.setOutputVolume(l,0);let S=null;try{S=m.play()}catch{T();return}S&&typeof S.then=="function"?S.then(()=>{l.failed=!1,l.blocked=!1,p(!0)}).catch(b=>{b&&b.name==="NotAllowedError"?(l.blocked=!0,p(!1)):T()}):setTimeout(()=>p(!m.paused||m.readyState>=2),120),setTimeout(()=>{!x&&m.readyState>=2&&!m.error&&p(!0)},2400)})},ensureSource(l){return!l||!l.sources.length?!1:(this.cancelRelease(l),l.audio.getAttribute("src")||(l.sourceIndex=Math.max(0,Math.min(l.sourceIndex||0,l.sources.length-1)),l.audio.src=l.sources[l.sourceIndex],l.audio.load()),!0)},advanceSource(l){return l?(l.sourceIndex=(l.sourceIndex||0)+1,this.cancelRelease(l),this.cancelFade(l),this.setOutputVolume(l,0),l.audio.pause(),l.audio.removeAttribute("src"),l.audio.load(),l.sourceIndex<l.sources.length?(l.audio.src=l.sources[l.sourceIndex],l.audio.load(),!0):(this.markVariantFailed(l,l.activeVariantIndex),this.chooseVariant(l,{keepCurrent:!1})?this.ensureSource(l)?!0:(this.markVariantFailed(l,l.activeVariantIndex),this.advanceSource(l)):!1)):!1},playFallback(l={},d=""){let u=this.activeId?this.tracks[this.activeId]:null;if(!l.force&&u&&u.config.id!==d&&!u.failed&&!u.audio.paused)return this.refreshActiveVolume(),!1;let f=this.tracks[n]&&!this.tracks[n].failed?n:"";if(!f)for(let m=0;m<c.length;m++){let x=c[m].id;if(x!==d&&this.tracks[x]&&!this.tracks[x].failed){f=x;break}}return!f||f===d?!1:this.play(f,Object.assign({},l,{force:!0,reason:"fallback"}))},canSwitchTo(l){if(!l||!this.activeId||this.activeId===l.config.id||l.config.urgent||l.config.outcome)return!0;let d=this.tracks[this.activeId],u=d&&d.config&&d.config.minPlaySec||24;return i.globalTime-this.lastSwitchAt>=u},chooseTrack(l,d={}){if(this.outcome)return this.outcome==="victory"?"victoryCanvas":"erasedPages";let u="",f=-1/0;for(let m=0;m<c.length;m++){let x=c[m],g=this.tracks[x.id];if(!g||g.failed||g.blocked||x.outcome||x.scene==="menu")continue;let p=this.scoreTrack(x,l);x.scene==="opening"&&l.elapsed<38&&(p+=26),x.scene==="opening"&&l.elapsed>=55&&(p-=40),x.scene==="opening"&&l.activeFight&&(p-=34),x.urgent&&l.tension>.74&&(p+=35),this.recentIds.includes(x.id)&&(p-=34-Math.min(18,this.recentIds.indexOf(x.id)*6)),this.activeId===x.id&&(p+=10),d.force&&x.id===n&&(p+=4),p>f&&(f=p,u=x.id)}return u||n},chooseScene(l){let d="",u=-1/0;for(let f=0;f<c.length;f++){let m=c[f],x=this.tracks[m.id];if(!x||x.failed||x.blocked||m.scene!==l)continue;let g=(m.priority||0)-(this.recentIds.includes(m.id)?20:0);g>u&&(u=g,d=m.id)}return d||n},scoreTrack(l,d){let u=d.maxAge||0,f=d.tension||0,m=l.ageMin===void 0?0:l.ageMin,x=l.ageMax===void 0?Yt.length-1:l.ageMax,g=l.tensionMin===void 0?0:l.tensionMin,p=l.tensionMax===void 0?1:l.tensionMax;if(u<m-.01||u>x+.01)return-1/0;let T=(m+x)/2,A=(g+p)/2,S=l.priority||0;if(S-=Math.abs(u-T)*8,S-=Math.max(0,g-f,f-p)*95,S-=Math.abs(f-A)*18,d.specialActive&&(l.roles||[]).some(b=>b==="specials"||b==="base-pressure")&&(S+=10),d.baseDanger>.58&&(l.scene==="siege"||l.urgent)&&(S+=18),d.troopPressure>.58&&(l.scene==="battle"||l.scene==="pressure")&&(S+=9),l.classicBattle)if(d.activeFight){let b=u>=3?4:30;S+=b+this.clamp((d.clash||0)*10+(d.baseDanger||0)*8,0,14)}else S-=24;return d.activeFight&&(l.id==="graphiteSkirmish"||l.id==="inklineAdvance")&&(S-=16),S},readSignals(){if(!i.gameState||!i.gameState.player||!i.gameState.enemy)return this.signals||{};let l=i.gameState.player,d=i.gameState.enemy,u=l.maxHp?Math.max(0,l.hp/l.maxHp):1,f=d.maxHp?Math.max(0,d.hp/d.maxHp):1,m=0,x=0,g=0,p=ne,T=ce-ne,A=0,S=0;if(i.gameState.units&&i.gameState.units.pool)for(let U=0;U<i.gameState.units.pool.length;U++){let F=i.gameState.units.pool[U];F.active&&(m++,F.team===1?(x++,p=Math.max(p,F.x||ne),S+=this.clamp((ce-ne-(F.x||0))/280,0,1)<1?1-this.clamp((ce-ne-(F.x||0))/280,0,1):0):(g++,T=Math.min(T,F.x||ce-ne),A+=this.clamp(((F.x||ce)-ne)/280,0,1)<1?1-this.clamp(((F.x||ce)-ne)/280,0,1):0))}let b=Math.max(0,T-p),v=this.clamp(1-b/560,0,1),R=this.clamp(Math.max(A,S)/3,0,1),y=1-Math.min(u,f),E=this.clamp(m/16+Math.abs(x-g)/18,0,1),I=this.clamp(m*.035+v*.24+R*.36+y*.32+(i.gameState.specialActive?.18:0)+(i.gameState.screenShake||0)*.18,0,1);return{elapsed:i.globalTime,playerAge:l.age||0,enemyAge:d.age||0,maxAge:Math.max(l.age||0,d.age||0),activeUnits:m,playerUnits:x,enemyUnits:g,troopPressure:E,playerHpRatio:u,enemyHpRatio:f,baseDanger:R,clash:v,activeFight:m>=2&&(v>.08||R>.03||E>.12),tension:I,specialActive:!!i.gameState.specialActive,library:e}},rememberTrack(l){l&&(this.recentIds=[l].concat(this.recentIds.filter(d=>d!==l)).slice(0,5))},refreshActiveVolume(){let l=this.activeId?this.tracks[this.activeId]:null;l&&!this.muted&&!this.suspended&&!l.audio.paused&&this.fadeTo(l,this.targetVolume(l),500)},fadeOut(l,d,u){l&&this.fadeTo(l,0,d,()=>{u&&(l.audio.pause(),this.scheduleRelease(l))})},fadeOutAll(l,d,u=""){for(let f in this.tracks){if(f===u)continue;let m=this.tracks[f];m&&((m.config.id!==this.activeId||this.muted||this.suspended)&&this.cancelEntryStart(m),(!m.audio.paused||this.currentOutputVolume(m)>.001)&&this.fadeOut(m,l,d))}},fadeTo(l,d,u,f){if(!l)return;let m=this.currentOutputVolume(l),x=Math.max(0,Math.min(1,d)),g=Math.max(0,u||0);this.cancelFade(l);let p=++l.fadeToken;if(l.fadeStartVolume=m,l.fadeTargetVolume=x,l.fadeStartedAt=performance.now(),l.fadeDurationMs=g,!g||Math.abs(m-x)<=.001){this.setOutputVolume(l,x),f&&f();return}if(this.prepareOutput(l)){let A=this.audioContext,S=l.gainNode.gain,b=A.currentTime;try{S.cancelScheduledValues(b),S.setValueAtTime(m,b),S.setValueCurveAtTime(this.buildEqualPowerCurve(m,x),b,Math.max(.016,g/1e3)),l.audio.volume=1,l.fadeTimer=setTimeout(()=>{l.fadeToken===p&&(this.setOutputVolume(l,x),f&&f())},g+60);return}catch{}}this.writeOutputVolume(l,m,!0);let T=A=>{if(l.fadeToken!==p)return;let S=Math.min(1,(A-l.fadeStartedAt)/g);this.writeOutputVolume(l,this.curveVolume(m,x,S),!1),S<1?l.fadeFrame=requestAnimationFrame(T):(this.setOutputVolume(l,x),f&&f())};l.fadeFrame=requestAnimationFrame(T)},cancelEntryStart(l){l&&l.playToken++},cancelFade(l){l&&(l.fadeToken++,l.fadeTimer&&clearTimeout(l.fadeTimer),l.fadeFrame&&cancelAnimationFrame(l.fadeFrame),l.fadeTimer=0,l.fadeFrame=0,l.fadeDurationMs=0)},scheduleRelease(l){l&&(this.cancelRelease(l),!(!this.muted&&!this.suspended&&(this.activeId===l.config.id||this.pendingId===l.config.id))&&(l.releaseTimer=setTimeout(()=>this.releaseEntry(l),this.idleReleaseMs)))},cancelRelease(l){!l||!l.releaseTimer||(clearTimeout(l.releaseTimer),l.releaseTimer=0)},releaseEntry(l){l&&(l.releaseTimer=0,!(!this.muted&&!this.suspended&&(this.activeId===l.config.id||this.pendingId===l.config.id))&&l.audio.paused&&(this.cancelFade(l),this.setOutputVolume(l,0),l.audio.removeAttribute("src"),l.audio.load()))},shouldUseElementMixer(){let l=navigator.userAgent||"";return!!window.LocalGemmaAndroid||/; wv\)/i.test(l)},getAudioContext(){if(this.audioContext||this.mixerUnavailable)return this.audioContext;let l=window.AudioContext||window.webkitAudioContext;if(!l)return this.mixerUnavailable=!0,null;try{this.audioContext=new l,this.masterGainNode=this.audioContext.createGain(),this.masterGainNode.gain.value=1,this.masterGainNode.connect(this.audioContext.destination)}catch{this.mixerUnavailable=!0,this.audioContext=null,this.masterGainNode=null}return this.audioContext},resumeMixer(){let l=this.getAudioContext();if(!(!l||l.state!=="suspended"))try{let d=l.resume();d&&typeof d.catch=="function"&&d.catch(()=>{})}catch{}},prepareOutput(l){if(!l)return!1;if(l.gainNode)return l.audio.volume=1,!0;if(l.webAudioFailed)return!1;let d=this.getAudioContext();if(!d||!this.masterGainNode)return!1;try{return l.mediaNode=d.createMediaElementSource(l.audio),l.gainNode=d.createGain(),l.gainNode.gain.value=l.currentVolume||0,l.mediaNode.connect(l.gainNode),l.gainNode.connect(this.masterGainNode),l.audio.volume=1,!0}catch{return l.webAudioFailed=!0,l.mediaNode=null,l.gainNode=null,l.audio.volume=l.currentVolume||0,!1}},setOutputVolume(l,d){l&&(this.cancelFade(l),l.fadeStartVolume=d,l.fadeTargetVolume=d,this.writeOutputVolume(l,d,!0))},writeOutputVolume(l,d,u){if(!l)return;let f=this.clamp(d,0,1);if(l.currentVolume=f,l.gainNode&&this.audioContext)try{let m=l.gainNode.gain,x=this.audioContext.currentTime;u&&m.cancelScheduledValues(x),m.setValueAtTime(f,x),l.audio.volume=1;return}catch{}l.audio.volume=f},currentOutputVolume(l){if(!l)return 0;if(l.fadeDurationMs>0){let d=this.clamp((performance.now()-l.fadeStartedAt)/l.fadeDurationMs,0,1);return this.curveVolume(l.fadeStartVolume,l.fadeTargetVolume,d)}return typeof l.currentVolume=="number"?l.currentVolume:l.audio.volume||0},curveVolume(l,d,u){let f=this.clamp(u,0,1);return d>=l?l+(d-l)*Math.sin(f*Math.PI/2):d+(l-d)*Math.cos(f*Math.PI/2)},buildEqualPowerCurve(l,d){let u=new Float32Array(96);for(let f=0;f<u.length;f++)u[f]=this.curveVolume(l,d,f/(u.length-1));return u},targetVolume(l){let d=this.masterVolume*(l.config.volume||1);return this.ducked&&(d*=.45),Math.max(0,Math.min(1,d))},clamp(l,d,u){return Math.max(d,Math.min(u,l))},updateButton(){let l=document.getElementById("btn-music");if(!l)return;let d=this.activeId&&this.tracks[this.activeId]?this.tracks[this.activeId].config.title:"Music";l.classList.toggle("music-muted",this.muted),l.innerHTML=this.muted?"&#128263;":"&#128266;",l.title=this.muted?"Music off":`Music on: ${d}`,l.setAttribute("aria-label",this.muted?"Turn music on":"Turn music off")}}}}var vh="ink-battle-tabletop-v1",Al=document.querySelector("#tabletop"),ly=document.querySelector("#status"),Ii=document.querySelector("#enter-mr"),Mn=document.querySelector("#welcome"),Rl=Object.freeze({scale:.2,surfaceHeight:.75,distance:.6}),vf=()=>.13*Lt.table.scale,Lt,Wi,We,na,sa,Cl,us=!1,Ll=!1,Dl=!1,Il=null,Mf=0,Pl=!1,Mh=0,nr=[],Sf="",ra=[],vn={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0};function bf(){let i=[...ra].sort((t,e)=>t-e);return{...vn,recentSamples:i.length,frameIntervalMedianMs:i[Math.floor((i.length-1)*.5)]??null,frameIntervalP95Ms:i[Math.floor((i.length-1)*.95)]??null}}var Sh={gameState:null,globalTime:0},ai=yf(Sh).MusicDirector,Tf=null;function wf(i){Sh.globalTime=(i?.tick||0)/60,Sh.gameState=i?{...i,units:{pool:i.units},specialActive:i.specials.length>0}:null}var se=new fl({onEvent:i=>{if(i.type==="message"&&je(i.text),i.type==="start"&&(wf(se.observe()),ai.start(),Mn.classList.add("compact"),je("Drop across the green rally strip to choose a route. Pinch a deployed troop to guide it.")),i.type==="drop"&&i.result.ok&&(Lt.labelClock=0,aa()),i.type==="drop"&&Wi?.feedback(i.token.owner,i.result.ok),i.type==="quality"&&je(`Appearance: ${i.quality}. Lift the feather to change it.`),i.type==="music"&&(ai.toggleMute(),je(ai.muted?"Music off.":"Music on.")),i.type==="menu"&&(Wi?.cancelAll(),ai.suspendForPage(),Mn.classList.remove("compact"),je("Choose a difficulty seal for a new battle."),aa()),i.type==="finish"){if(i.winner===0?ai.suspendForPage():ai.setOutcome(i.winner===1),je(i.winner===0?"A draw. Drop another seal for a new battle.":i.winner===1?"Victory! Drop another seal to begin again.":"Defeat. Drop another seal for a new battle."),i.winner===1)try{let t=JSON.parse(localStorage.getItem("aow_sketch_progress")||'{"beaten":[]}');t.beaten=[...new Set([...t.beaten||[],se.observe().difficulty])],localStorage.setItem("aow_sketch_progress",JSON.stringify(t))}catch{}aa()}i.type==="exit"&&(We?We.end().catch(()=>{}):Mn.classList.remove("compact"))}});function je(i){Lt?.message(i),i!==Sf&&(ly.textContent=i,Sf=i)}function aa(){try{if(!se.session){localStorage.removeItem(vh);return}let i=JSON.stringify({checkpoint:se.session.checkpoint(),speed:se.speed,quality:se.quality});i.length<2e6&&localStorage.setItem(vh,i)}catch{}}function Xi(){Wi?.cancelAll(),se.pauseForInterruption(),ai.suspendForPage(),Il=null,aa(),se.session?.running&&je("Paused. Lift the hourglass and drop it onto the page to resume.")}function Nl(){Mh++,sa?.delete(),sa=null,Cl=null}function Af(){We||(Lt.table.position={x:0,y:0,z:0},Lt.table.yaw=0,Lt.table.scale=1,Lt.syncTable(),Lt.frameBook())}async function cy(){if(!We){Ii.disabled=!0,ai.resumeMixer();try{let i=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor"],optionalFeatures:["hand-tracking","hit-test","anchors"]});We=i,Ll=!1,us=!0,Dl=!1,Xi(),ra=[],vn={frames:0,peakUnits:0,peakDrawCalls:0,peakTriangles:0},i.addEventListener("end",()=>{Xi(),Wi.unbind(),na?.cancel(),na=null,Nl(),We=null,Lt.reticle.visible=!1,Lt.immersive(!1),Af(),Ii.disabled=!1,Mn.hidden=!1,je("Back at the book. Your battle is saved and paused.")},{once:!0}),i.addEventListener("visibilitychange",()=>{i.visibilityState!=="visible"&&Xi()}),await Lt.renderer.xr.setSession(i),Lt.immersive(!0),Wi.bind(i),Mn.hidden=!0,Lt.renderer.xr.getReferenceSpace().addEventListener("reset",()=>{Xi(),Nl(),Ll=!1,us=!0});try{let e=await i.requestReferenceSpace("viewer");if(i.requestHitTestSource){let n=await i.requestHitTestSource({space:e});We===i?na=n:n.cancel()}}catch{}if(We!==i)return;i.supportedFrameRates?.includes(72)&&i.updateTargetFrameRate(72).catch(()=>{}),je("Look at a table, then pinch or press the trigger to place. Rings let you carry and resize.")}catch(i){We&&await We.end().catch(()=>{}),We=null,Ii.disabled=!1,je(`Mixed reality could not start (${i.name||"browser error"}). You can still play on this screen.`)}}}function hy(i,t){let e=i.getViewerPose(t);if(!e)return Pl||(Xi(),Pl=!0),!1;if(Pl=!1,!Ll){let s=e.transform.position,r=new C(0,0,-1).applyQuaternion(e.transform.orientation);r.y=0,r.normalize(),Lt.table.scale=Rl.scale,Lt.table.position={x:s.x+r.x*Rl.distance,y:Rl.surfaceHeight+vf(),z:s.z+r.z*Rl.distance},Lt.table.yaw=Math.atan2(-r.x,-r.z),Ll=!0,Lt.syncTable()}let n;if(us&&na){n=i.getHitTestResults(na).find(r=>{let a=r.getPose(t);return a&&a.transform.matrix[5]>.85});let s=n?.getPose(t);Lt.reticle.visible=!!s,s&&Lt.reticle.matrix.fromArray(s.transform.matrix)}if(Dl){if(Dl=!1,us=!1,Lt.reticle.visible=!1,n){let s=n.getPose(t);if(Lt.table.position=Ef(s.transform.position),Lt.table.position.y+=vf(),Lt.syncTable(),n.createAnchor){let r=We,a=Mh;n.createAnchor().then(o=>{if(We!==r||!r||Mh!==a||Wi.interaction.gesture.grips.size){o.delete();return}Nl(),sa=o,Cl=new Wt().fromArray(s.transform.matrix).invert().multiply(Lt.root.matrixWorld)}).catch(()=>{})}}je(se.session?"Placed. Drop the hourglass onto the page to resume.":"Placed. Lift a difficulty seal and drop it onto the page to begin.")}if(sa&&Cl){let s=i.getPose(sa.anchorSpace,t);if(s){let r=new Wt().fromArray(s.transform.matrix).multiply(Cl),a=new C,o=new Ee,c=new C;r.decompose(a,o,c),Lt.table.position=Ef(a),Lt.table.yaw=new hi().setFromQuaternion(o,"YXZ").y}}return!0}var Ef=i=>({x:i.x,y:i.y,z:i.z});async function uy(){matchMedia("(max-width: 650px), (max-height: 450px)").matches&&Mn.classList.add("compact");try{Lt=new Ml(Al,se)}catch(t){console.error("Tabletop initialization failed:",t),Mn.classList.remove("compact"),je("3D graphics are unavailable in this browser. You can still play the classic game."),Ii.disabled=!0;return}Wi=new wl(Lt,se,{onCarry:()=>{us=!1,Lt.reticle.visible=!1,Nl()},onPlace:()=>us?(Dl=!0,!0):!1}),ai.init(),Al.addEventListener("pointerdown",()=>ai.resumeMixer());try{let t=JSON.parse(localStorage.getItem(vh)||"null");t?.checkpoint&&(se.session=ls.restore(t.checkpoint),se.session.running&&se.session.pause(!0),se.speed=[1,2,3].includes(t.speed)?t.speed:1,se.quality=["mist","clear","comfort"].includes(t.quality)?t.quality:"mist",je(se.session.running?se.observe().battlefield==="tabletop"?"Saved battle restored. Drop the hourglass onto the page to resume.":"Saved battle keeps its original rules. Resume with the hourglass, or use the new page for wider battles and troop guidance.":"Your last battle ended. Drop a difficulty seal for a new page."))}catch{je("The saved battle could not be restored. Start with a difficulty seal.")}await document.fonts.ready,Ii.addEventListener("click",cy),document.querySelector("#reset-view").addEventListener("click",Af),document.querySelector("#toggle-help").addEventListener("click",()=>Mn.classList.toggle("compact")),document.querySelector("#save-report").addEventListener("click",()=>{let t=se.observe(),e={version:"2.4.0",date:new Date().toISOString(),browser:navigator.userAgent,quality:se.quality,age:t?.player.age,difficulty:t?.difficulty,render:Lt.stats(),xr:bf()},n=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=n,s.download="ink-battle-quest-report.json",s.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}),window.addEventListener("resize",()=>Lt.resize()),window.visualViewport?.addEventListener("resize",()=>Lt.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&Xi()}),window.addEventListener("pagehide",Xi),Al.addEventListener("webglcontextlost",t=>{t.preventDefault(),Xi(),je("Graphics were interrupted. Reload to restore the paused battle.")});let i=setTimeout(()=>{Ii.textContent="Play here \xB7 MR not detected yet"},3e3);(async()=>{try{await navigator.xr?.isSessionSupported("immersive-ar")?(Ii.disabled=!1,Ii.textContent="Enter mixed reality"):(Ii.textContent="Open in Quest Browser for MR",Ii.disabled=!0)}catch{Ii.textContent="MR unavailable \xB7 play on this screen",Ii.disabled=!0}finally{clearTimeout(i)}})(),Lt.update(se.observe(),[],0),Lt.render(),Lt.renderer.setAnimationLoop((t,e)=>{let n=Il===null?0:Math.max(0,(t-Il)/1e3);if(Il=t,n>0&&n<.5&&(nr.push(n*1e3),nr.length>360&&nr.shift()),e&&We){let r=Lt.renderer.xr.getReferenceSpace();We.visibilityState==="visible"&&hy(e,r)&&Wi.xr(e,r)}se.update(n),Wi.update(Math.min(n,.1));let s=se.observe();if(wf(s),s&&s.paused!==Tf&&(Tf=s.paused,s.paused||(ai.started||ai.start(),ai.resumeForPage()),ai.setDucked(s.paused)),ai.update(Math.min(n,.1)),Lt.update(s,Wi.interaction.visuals(),Math.min(n,.1)),Lt.render(),e&&We?.visibilityState==="visible"&&!Pl){let r=Lt.stats();vn.frames++,vn.peakUnits=Math.max(vn.peakUnits,s?.units.length||0),vn.peakDrawCalls=Math.max(vn.peakDrawCalls,r.calls),vn.peakTriangles=Math.max(vn.peakTriangles,r.triangles),n>0&&n<.5&&(ra.push(n*1e3),ra.length>720&&ra.shift())}t-Mf>1e4&&(Mf=t,aa())}),window.InkTabletop=Object.freeze({observe:()=>se.observe(),pause:Xi,replay:()=>se.session?.replay(),diagnostics:()=>({...Lt.stats(),xr:!!We,xrMeasurements:bf(),placing:us,quality:se.quality,holds:se.holds.size,flights:Wi.interaction.flights.size,table:structuredClone(Lt.table),camera:{position:Lt.camera.position.toArray(),target:Lt.controls.target.toArray(),distance:Lt.camera.position.distanceTo(Lt.controls.target)},frameP95:nr.length?[...nr].sort((t,e)=>t-e)[Math.floor((nr.length-1)*.95)]:null}),project:t=>{Lt.syncTable();let e=new C(t.x,t.y||0,t.z);Lt.root.localToWorld(e),e.project(Lt.camera);let n=Al.getBoundingClientRect();return{x:n.left+(e.x+1)/2*n.width,y:n.top+(1-e.y)/2*n.height}},restore:t=>{Xi(),se.session=ls.restore(t),se.session.pause(!0),Lt.labelClock=0},checkpoint:()=>se.session?.checkpoint()}),document.body.dataset.ready="true","serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").catch(()=>{})}uy().catch(i=>{Xi(),Mn.classList.remove("compact"),je(`The tabletop could not load (${i.name}). Reload or open the classic game.`)});})();
