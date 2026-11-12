var id=Object.defineProperty;var sd=(e)=>e;function rd(e,t){this[e]=sd.bind(null,t)}var ns=(e,t)=>{for(var n in t)id(e,n,{get:t[n],enumerable:!0,configurable:!0,set:rd.bind(t,n)})};var yt=(e,t,n)=>()=>{if(e)try{t=e(e=0)}catch(i){n=[i]}if(n)throw n[0];return t};function Zl(e){if(yi)return yi;return yi=(async()=>{let t;if(e&&typeof e!=="string")t=await WebAssembly.compile(e);else{let n=e??(await import("./chimera.wasm?url")).default,i=await fetch(n);if(!i.ok)throw Error(`engine: ${n}: HTTP ${i.status}`);t=await WebAssembly.compile(await i.arrayBuffer())}if(WebAssembly.Module.imports(t).length)throw Error("engine: the wasm module must not have imports");jr=(await WebAssembly.instantiate(t,{})).exports,Kr=t})(),yi.catch(()=>yi=null),yi}function Q_(){if(!Kr)throw Error("engine not loaded (await initChimera())");return Kr}function ad(){if(!jr)throw Error("engine not loaded (await initChimera())");return jr}function ut(e,t={}){let n=ad(),i=od.encode(JSON.stringify({fn:e,...t})),s=n.chimera_alloc(i.length);new Uint8Array(n.memory.buffer,s,i.length).set(i);let r=n.chimera_call(s,i.length);n.chimera_free(s,i.length);let a=ld.decode(new Uint8Array(n.memory.buffer,n.chimera_result_ptr(),n.chimera_result_len())),o=JSON.parse(a);if(r!==0)throw Error(`engine ${e}: ${o.error}`);return o}var Kr=null,jr=null,yi=null,od,ld;var Qr=yt(()=>{od=new TextEncoder,ld=new TextDecoder});function cd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function hd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function cs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ph(){let e=cs("canvas");return e.style.display="block",e}function hs(...e){let t="THREE."+e.shift();if(Fi)Fi("log",t,...e);else console.log(t,...e)}function mh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function De(...e){e=mh(e);let t="THREE."+e.shift();if(Fi)Fi("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function Ue(...e){e=mh(e);let t="THREE."+e.shift();if(Fi)Fi("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function ti(...e){let t=e.join(" ");if(t in Jl)return;Jl[t]=!0,De(...e)}function gh(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Nn{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}function In(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[e&255]+Ct[e>>8&255]+Ct[e>>16&255]+Ct[e>>24&255]+"-"+Ct[t&255]+Ct[t>>8&255]+"-"+Ct[t>>16&15|64]+Ct[t>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function He(e,t,n){return Math.max(t,Math.min(n,e))}function bo(e,t){return(e%t+t)%t}function ud(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function dd(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function ls(e,t,n){return(1-n)*e+n*t}function fd(e,t,n,i){return ls(e,t,1-Math.exp(-n*i))}function pd(e,t=1){return t-Math.abs(bo(e,t*2)-t)}function md(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function gd(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function _d(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xd(e,t){return e+Math.random()*(t-e)}function yd(e){return e*(0.5-Math.random())}function vd(e){if(e!==void 0)Kl=e;let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(e){return e*os}function Md(e){return e*Oi}function Sd(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wd(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Ed(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Ad(e,t,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((t+i)/2),d=a((t+i)/2),u=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":e.set(o*d,l*u,l*h,o*c);break;case"YZY":e.set(l*h,o*d,l*u,o*c);break;case"ZXZ":e.set(l*u,l*h,o*d,o*c);break;case"XZX":e.set(o*d,l*g,l*f,o*c);break;case"YXY":e.set(l*f,o*d,l*g,o*c);break;case"ZYZ":e.set(l*g,l*f,o*d,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Td(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:i,transfer:"linear",toXYZ:Ql,fromXYZ:ec,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:i,transfer:"srgb",toXYZ:Ql,fromXYZ:ec,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}function Ln(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Ui(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}class So{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(vi===void 0)vi=cs("canvas");vi.width=e.width,vi.height=e.height;let i=vi.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ln(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(Ln(t[n]/255)*255);else t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gs{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(na(i[r].image));else s.push(na(i[r]))}else s=na(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function na(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return So.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return De("Texture: Unable to serialize Texture."),{}}class fr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let g of e.hand.values()){let S=t.getJointPose(g,n),m=this._getHandJoint(l,g);if(S!==null)m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius;m.visible=S!==null}let c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=c.position.distanceTo(d.position),h=0.02,f=0.005;if(l.inputState.pinching&&u>h+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=h-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Fd)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}function ra(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class xs{constructor(e,t=1,n=1000){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new xs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){nn.subVectors(i,t),Tn.subVectors(n,t),aa.subVectors(e,t);let r=nn.dot(nn),a=nn.dot(Tn),o=nn.dot(aa),l=Tn.dot(Tn),c=Tn.dot(aa),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,h=(l*o-a*c)*u,f=(r*c-a*o)*u;return s.set(1-h-f,f,h)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,Rn)===null)return!1;return Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,Rn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Rn.x),o.addScaledVector(r,Rn.y),o.addScaledVector(a,Rn.z),o}static getInterpolatedAttribute(e,t,n,i,s,r){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,n),da.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(ha,s.x),r.addScaledVector(ua,s.y),r.addScaledVector(da,s.z),r}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),Tn.subVectors(e,t),nn.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),nn.cross(Tn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;wi.subVectors(i,n),Ei.subVectors(s,n),oa.subVectors(e,n);let o=wi.dot(oa),l=Ei.dot(oa);if(o<=0&&l<=0)return t.copy(n);la.subVectors(e,i);let c=wi.dot(la),d=Ei.dot(la);if(c>=0&&d<=c)return t.copy(i);let u=o*d-c*l;if(u<=0&&o>=0&&c<=0)return r=o/(o-c),t.copy(n).addScaledVector(wi,r);ca.subVectors(e,s);let h=wi.dot(ca),f=Ei.dot(ca);if(f>=0&&h<=f)return t.copy(s);let g=h*l-o*f;if(g<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Ei,a);let S=c*f-h*d;if(S<=0&&d-c>=0&&h-f>=0)return lc.subVectors(s,i),a=(d-c)/(d-c+(h-f)),t.copy(i).addScaledVector(lc,a);let m=1/(S+g+u);return r=g*m,a=u*m,t.copy(n).addScaledVector(wi,r).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jt{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,sn);else sn.fromBufferAttribute(s,r);sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ns.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Ns.copy(n.boundingBox)}Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Us.subVectors(this.max,ss),Ai.subVectors(e.a,ss),Ti.subVectors(e.b,ss),Ri.subVectors(e.c,ss),Vn.subVectors(Ti,Ai),Wn.subVectors(Ri,Ti),Kn.subVectors(Ai,Ri);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-Kn.z,Kn.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,Kn.z,0,-Kn.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-Kn.y,Kn.x,0];if(!fa(t,Ai,Ti,Ri,Us))return!1;if(t=[1,0,0,0,1,0,0,0,1],!fa(t,Ai,Ti,Ri,Us))return!1;return Fs.crossVectors(Vn,Wn),t=[Fs.x,Fs.y,Fs.z],fa(t,Ai,Ti,Ri,Us)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(sn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}function fa(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){jn.fromArray(e,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=n.dot(jn),d=i.dot(jn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}class Un{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Bd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);let t=rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(pa)),this.expandByPoint(rs.copy(e.center).sub(pa));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}class Ao{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=In();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=In();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}class Lt{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=rn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=nt(n,this.array);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=nt(t,this.array);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=nt(t,this.array);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=nt(t,this.array);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=nt(t,this.array);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=rn(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=rn(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=rn(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=rn(t,this.array);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=nt(t,this.array),n=nt(n,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){if(e=e*this.data.stride+this.offset,this.normalized)t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){hs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new Lt(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){hs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}class fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ga.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(ga),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hd.getNormalMatrix(e),i=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}class To{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){_a.copy(e).add(t).multiplyScalar(0.5),Bs.copy(t).sub(e).normalize(),zs.copy(this.origin).sub(_a);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(Bs),a=zs.dot(this.direction),o=-zs.dot(Bs),l=zs.lengthSq(),c=Math.abs(1-r*r),d,u,h,f;if(c>0)if(d=r*o-a,u=r*a-o,f=s*c,d>=0)if(u>=-f)if(u<=f){let g=1/c;d*=g,u*=g,h=d*(d+r*u+2*a)+u*(r*d+u+2*o)+l}else u=s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*o)+l;else u=-s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*o)+l;else if(u<=-f)d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-o),s),h=-d*d+u*(u+2*o)+l;else if(u<=f)d=0,u=Math.min(Math.max(-s,-o),s),h=u*(u+2*o)+l;else d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-o),s),h=-d*d+u*(u+2*o)+l;else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,d);if(i)i.copy(_a).addScaledVector(Bs,u);return h}intersectSphere(e,t){if(e.radius<0)return null;Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;if(l>=0)n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l;else n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l;if(c>=0)s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c;else s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(d>=0)a=(e.min.z-u.z)*d,o=(e.max.z-u.z)*d;else a=(e.max.z-u.z)*d,o=(e.min.z-u.z)*d;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,d=e.x-r.x,u=e.y-r.y,h=e.z-r.z,f=t.x-r.x,g=t.y-r.y,S=t.z-r.z,m=n.x-r.x,p=n.y-r.y,E=n.z-r.z,R=Math.abs(o),v=Math.abs(l),M=Math.abs(c),A,T,y,b,H,L,U,G,C,I,q,V;if(R>=v&&R>=M)if(y=o,L=d,C=f,V=m,o>=0)A=l,T=c,b=u,H=h,U=g,G=S,I=p,q=E;else A=c,T=l,b=h,H=u,U=S,G=g,I=E,q=p;else if(v>=M)if(y=l,L=u,C=g,V=p,l>=0)A=c,T=o,b=h,H=d,U=S,G=f,I=E,q=m;else A=o,T=c,b=d,H=h,U=f,G=S,I=m,q=E;else if(y=c,L=h,C=S,V=E,c>=0)A=o,T=l,b=d,H=u,U=f,G=g,I=m,q=p;else A=l,T=o,b=u,H=d,U=g,G=f,I=p,q=m;if(y===0)return null;let se=A/y,Z=T/y,ne=1/y,ae=b-se*L,Pe=H-Z*L,Ce=U-se*C,We=G-Z*C,ke=I-se*V,P=q-Z*V,B=ke*We-P*Ce,k=ae*P-Pe*ke,K=Ce*Pe-We*ae;if(i){if(B<0||k<0||K<0)return null}else if((B<0||k<0||K<0)&&(B>0||k>0||K>0))return null;let te=B+k+K;if(te===0)return null;let j=ne*(B*L+k*C+K*V);if(te>0?j<0:j>0)return null;return this.at(j/te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}function Vd(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;Xs.copy(o),Xs.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Xs);if(c<n.near||c>n.far)return null;return{distance:c,point:Xs.clone(),object:e}}function qs(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,Hs),e.getVertexPosition(l,Gs),e.getVertexPosition(c,Vs);let d=Vd(e,t,n,i,Hs,Gs,Vs,uc);if(d){let u=new z;if(Jt.getBarycoord(uc,Hs,Gs,Vs,u),s)d.uv=Jt.getInterpolatedAttribute(s,o,l,c,u,new Ze);if(r)d.uv1=Jt.getInterpolatedAttribute(r,o,l,c,u,new Ze);if(a){if(d.normal=Jt.getInterpolatedAttribute(a,o,l,c,u,new z),d.normal.dot(i.direction)>0)d.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new z,materialIndex:0};Jt.getNormal(Hs,Gs,Vs,h.normal),d.face=h,d.barycoord=u}return d}class xr{constructor(e=new fn,t=new fn,n=new fn,i=new fn,s=new fn,r=new fn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],f=s[8],g=s[9],S=s[10],m=s[11],p=s[12],E=s[13],R=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-f,v-p).normalize(),i[1].setComponents(l+r,h+c,m+f,v+p).normalize(),i[2].setComponents(l+a,h+d,m+g,v+E).normalize(),i[3].setComponents(l-a,h-d,m-g,v-E).normalize(),n)i[4].setComponents(o,u,S,R).normalize(),i[5].setComponents(l-o,h-u,m-S,v-R).normalize();else if(i[4].setComponents(l-o,h-u,m-S,v-R).normalize(),t===2000)i[5].setComponents(l+o,h+u,m+S,v+R).normalize();else if(t===2001)i[5].setComponents(o,u,S,R).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);let t=Wd.distanceTo(e.center);return ei.radius=0.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ys.x=i.normal.x>0?e.max.x:e.min.x,Ys.y=i.normal.y>0?e.max.y:e.min.y,Ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(e,t,n){let i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;if(n.has(i)===!0||n.has(s)===!0)return!1;else return n.add(i),n.add(s),!0}function ci(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(fc(s))if(s.isRenderTargetTexture)De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))if(fc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Dt(e){let t={};for(let n=0;n<e.length;n++){let i=ci(e[n]);for(let s in i)t[s]=i[s]}return t}function fc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Po(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Ye.workingColorSpace}function Pi(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function ya(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class hi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}function yh(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function $d(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Zd(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let o=yh(r,t,n,i,s)-e;if(Math.abs(o)<0.0000000001)break;let l=$d(r,t,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class en{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pi(t,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pi(e.times,Array),values:Pi(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(ya(e.settings))n.settings={inTangents:Pi(e.settings.inTangents,Array),outTangents:Pi(e.settings.outTangents,Array)}}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(ya(this.settings))pc(this.settings.inTangents,e),pc(this.settings.outTangents,e)}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Ue("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Ue("KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Ue("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){Ue("KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(hd(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let d=a*n,u=d-n,h=d+n;for(let f=0;f!==n;++f){let g=t[d+f];if(g!==t[u+f]||g!==t[h+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let d=a*n,u=r*n;for(let h=0;h!==n;++h)t[u+h]=t[d+h]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);if(i.createInterpolant=this.createInterpolant,ya(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function pc(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}class Go{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){let d=l.indexOf(c);if(d!==-1)l.splice(d,2);return this},this.getHandler=function(c){for(let d=0,u=l.length;d<u;d+=2){let h=l[d],f=l[d+1];if(h.global)h.lastIndex=0;if(h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}class Vo{constructor(e){if(this.manager=e!==void 0?e:vh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}class bh{constructor(e,t,n){let i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new it(e,t,n);else return new it.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jd,"")}static parseTrackName(e){let t=nf.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(sf.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=it.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}class Ar{constructor(e=new z,t=new z){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_c.subVectors(e,this.start),Js.subVectors(this.end,this.start);let n=Js.dot(Js);if(n===0)return 0;let s=Js.dot(_c)/n;if(t)s=He(s,0,1);return s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=rf,n=af){let s,r,a=this.start,o=e.start,l=this.end,c=e.end;Di.subVectors(l,a),Ni.subVectors(c,o),va.subVectors(a,o);let d=Di.dot(Di),u=Ni.dot(Ni),h=Ni.dot(va);if(d<=0.00000000000000010000000000000001&&u<=0.00000000000000010000000000000001)return t.copy(a),n.copy(o),t.sub(n),t.dot(t);if(d<=0.00000000000000010000000000000001)s=0,r=h/u,r=He(r,0,1);else{let f=Di.dot(va);if(u<=0.00000000000000010000000000000001)r=0,s=He(-f/d,0,1);else{let g=Di.dot(Ni),S=d*u-g*g;if(S!==0)s=He((g*h-f*u)/S,0,1);else s=0;if(r=(g*s+h)/u,r<0)r=0,s=He(-f/d,0,1);else if(r>1)r=1,s=He((g-f)/d,0,1)}}return t.copy(a).addScaledVector(Di,s),n.copy(o).addScaledVector(Ni,r),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Zo(e,t,n,i){let s=of(i);switch(n){case 1021:return e*t;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function of(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var xc="186",yc=0,ba=1,vc=2,us=1,bc=2,Bi=3,zi=0,Ht=1,mn=2,gn=0,ds=1,Ma=2,Sa=3,wa=4,Ks=5,ki=100,Mc=101,Sc=102,wc=103,js=104,Ec=200,Ac=201,Tc=202,Rc=203,Cc=204,Pc=205,Ic=206,Lc=207,Dc=208,Nc=209,Uc=210,Fc=211,Oc=212,Bc=213,zc=214,kc=0,Hc=1,Gc=2,Ea=3,Vc=4,Wc=5,Xc=6,qc=7,Yc=0,$c=1,Zc=2,an=0,Aa=1,Ta=2,Ra=3,Ca=4,Pa=5,Ia=6,La=7,Hi=301,ni=302,Qs=303,er=304,fs=306,Jc=1000,tr=1001,Kc=1002,Yn=1003,jc=1004,ps=1005,Gt=1006,nr=1007,ii=1008,on=1009,Qc=1010,eh=1011,ms=1012,Da=1013,$n=1014,Dn=1015,_n=1016,Na=1017,Ua=1018,Gi=1020,th=35902,nh=35899,ih=1021,sh=1022,xn=1023,si=1026,ri=1027,rh=1028,Fa=1029,ai=1030,Oa=1031,Ba=1033,ir=33776,sr=33777,rr=33778,ar=33779,za=35840,ka=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,or=37490,$a=37491,Za=37808,Ja=37809,Ka=37810,ja=37811,Qa=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,lr=36285,mo=36286,go=0,ah=1,oi="",oh="srgb",_o="srgb-linear",xo="linear",lt="srgb",lh=512,ch=513,hh=514,cr=515,uh=516,dh=517,hr=518,fh=519,ur=35048,yo="300 es",vo=2000,Jl,Fi=null,_h,Ct,Kl=1234567,os,Oi,Mo,Ze,ln,z,ea,jl,Oe,ta,Ql,ec,Ye,vi,Rd=0,Cd=0,ia,It,st,wo,qt,dr,Eo,mt,bi,tn,Pd,Id,Hn,Is,Wt,tc,nc,pn,Ld=0,ic,Mi,An,Ls,is,Dd,Nd,sc,rc,ac,oc,Ud,Si,sa,kt,qn,Fd,xh,Gn,Ds,Ke,Pt,pr,nn,Tn,aa,Rn,wi,Ei,lc,oa,la,ca,ha,ua,da,Cn,sn,Ns,Ai,Ti,Ri,Vn,Wn,Kn,ss,Us,Fs,jn,vt,Os,Od=0,Kt,mr,gr,Ot,Bd,rs,pa,zd=0,Zt,ma,Ci,Xt,as,wt,Qt,Ut,ga,kd,Hd,Gd=0,Vi,Pn,_a,Bs,zs,_r,cc,Qn,ks,hc,Hs,Gs,Vs,xa,Ws,uc,Xs,Yt,Ro,ei,Wd,Ys,yr,li,Co,vr,Wi,ys,br,vs,qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt,Io,Lo,Do,No,Uo,Fo,Oo,ui,Bo,zo,ko,Mr,di,Ho,vh,$s,Zs,dn,Sr,Xn,mc,gc,Ft,wr,Er,Ii=-90,Li=1,Wo,Xo,qo="\\[\\]\\.:\\/",Jd,Yo,Kd,jd,Qd,ef,tf,nf,sf,tx,yn,$o,_c,Js,Di,Ni,va,rf,af;var Jo=yt(()=>{Jl={};_h={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],os=Math.PI/180,Oi=180/Math.PI;Mo={DEG2RAD:os,RAD2DEG:Oi,generateUUID:In,clamp:He,euclideanModulo:bo,mapLinear:ud,inverseLerp:dd,lerp:ls,damp:fd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:xd,randFloatSpread:yd,seededRandom:vd,degToRad:bd,radToDeg:Md,isPowerOfTwo:Sd,ceilPowerOfTwo:wd,floorPowerOfTwo:Ed,setQuaternionFromProperEuler:Ad,normalize:nt,denormalize:rn};Ze=class Ze{static{Ze.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ln=class ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3],u=s[r+0],h=s[r+1],f=s[r+2],g=s[r+3];if(d!==g||o!==u||l!==h||c!==f){let S=o*u+l*h+c*f+d*g;if(S<0)u=-u,h=-h,f=-f,g=-g,S=-S;let m=1-a;if(S<0.9995){let p=Math.acos(S),E=Math.sin(p);m=Math.sin(m*p)/E,a=Math.sin(a*p)/E,o=o*m+u*a,l=l*m+h*a,c=c*m+f*a,d=d*m+g*a}else{o=o*m+u*a,l=l*m+h*a,c=c*m+f*a,d=d*m+g*a;let p=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=p,l*=p,c*=p,d*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],d=s[r],u=s[r+1],h=s[r+2],f=s[r+3];return e[t]=a*f+c*d+o*h-l*u,e[t+1]=o*f+c*u+l*d-a*h,e[t+2]=l*f+c*h+a*u-o*d,e[t+3]=c*f-a*d-o*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),d=a(s/2),u=o(n/2),h=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=u*c*d+l*h*f,this._y=l*h*d-u*c*f,this._z=l*c*f+u*h*d,this._w=l*c*d-u*h*f;break;case"YXZ":this._x=u*c*d+l*h*f,this._y=l*h*d-u*c*f,this._z=l*c*f-u*h*d,this._w=l*c*d+u*h*f;break;case"ZXY":this._x=u*c*d-l*h*f,this._y=l*h*d+u*c*f,this._z=l*c*f+u*h*d,this._w=l*c*d-u*h*f;break;case"ZYX":this._x=u*c*d-l*h*f,this._y=l*h*d+u*c*f,this._z=l*c*f-u*h*d,this._w=l*c*d+u*h*f;break;case"YZX":this._x=u*c*d+l*h*f,this._y=l*h*d+u*c*f,this._z=l*c*f-u*h*d,this._w=l*c*d-u*h*f;break;case"XZY":this._x=u*c*d-l*h*f,this._y=l*h*d-u*c*f,this._z=l*c*f+u*h*d,this._w=l*c*d+u*h*f;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10],u=n+a+d;if(u>0){let h=0.5/Math.sqrt(u+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,a=this.dot(e);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-t;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};z=class z{static{z.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),d=2*(s*n-r*t);return this.x=t+o*l+r*d-a*c,this.y=n+o*c+a*l-s*d,this.z=i+o*d+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ea=new z,jl=new ln;Oe=class Oe{static{Oe.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],d=n[7],u=n[2],h=n[5],f=n[8],g=i[0],S=i[3],m=i[6],p=i[1],E=i[4],R=i[7],v=i[2],M=i[5],A=i[8];return s[0]=r*g+a*p+o*v,s[3]=r*S+a*E+o*M,s[6]=r*m+a*R+o*A,s[1]=l*g+c*p+d*v,s[4]=l*S+c*E+d*M,s[7]=l*m+c*R+d*A,s[2]=u*g+h*p+f*v,s[5]=u*S+h*E+f*M,s[8]=u*m+h*R+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],d=c*r-a*l,u=a*o-c*s,h=l*s-r*o,f=t*d+n*u+i*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=d*g,e[1]=(i*l-c*n)*g,e[2]=(a*n-i*r)*g,e[3]=u*g,e[4]=(c*t-i*o)*g,e[5]=(i*s-a*t)*g,e[6]=h*g,e[7]=(n*o-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ta.makeScale(e,t)),this}rotate(e){return ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ta=new Oe,Ql=new Oe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ec=new Oe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);Ye=Td();ia=new z;It=class It extends Nn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=It.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=In(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=300;It.DEFAULT_ANISOTROPY=1;st=class st{static{st.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],d=o[8],u=o[1],h=o[5],f=o[9],g=o[2],S=o[6],m=o[10];if(Math.abs(c-u)<0.01&&Math.abs(d-g)<0.01&&Math.abs(f-S)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(d+g)<0.1&&Math.abs(f+S)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,R=(h+1)/2,v=(m+1)/2,M=(c+u)/4,A=(d+g)/4,T=(f+S)/4;if(E>R&&E>v)if(E<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(E),i=M/n,s=A/n;else if(R>v)if(R<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(R),n=M/i,s=T/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=A/s,i=T/s;return this.set(n,i,s,t),this}let p=Math.sqrt((S-f)*(S-f)+(d-g)*(d-g)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(S-f)/p,this.y=(d-g)/p,this.z=(u-c)/p,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wo=class wo extends Nn{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new It(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};qt=class qt extends wo{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}};dr=class dr extends It{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};Eo=class Eo extends It{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};mt=class mt{static{mt.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,a,o,l,c,d,u,h,f,g,S){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,d,u,h,f,g,S)}set(e,t,n,i,s,r,a,o,l,c,d,u,h,f,g,S){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=d,m[14]=u,m[3]=h,m[7]=f,m[11]=g,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),r=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=r*c,h=r*d,f=a*c,g=a*d;t[0]=o*c,t[4]=-o*d,t[8]=l,t[1]=h+f*l,t[5]=u-g*l,t[9]=-a*o,t[2]=g-u*l,t[6]=f+h*l,t[10]=r*o}else if(e.order==="YXZ"){let u=o*c,h=o*d,f=l*c,g=l*d;t[0]=u+g*a,t[4]=f*a-h,t[8]=r*l,t[1]=r*d,t[5]=r*c,t[9]=-a,t[2]=h*a-f,t[6]=g+u*a,t[10]=r*o}else if(e.order==="ZXY"){let u=o*c,h=o*d,f=l*c,g=l*d;t[0]=u-g*a,t[4]=-r*d,t[8]=f+h*a,t[1]=h+f*a,t[5]=r*c,t[9]=g-u*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let u=r*c,h=r*d,f=a*c,g=a*d;t[0]=o*c,t[4]=f*l-h,t[8]=u*l+g,t[1]=o*d,t[5]=g*l+u,t[9]=h*l-f,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let u=r*o,h=r*l,f=a*o,g=a*l;t[0]=o*c,t[4]=g-u*d,t[8]=f*d+h,t[1]=d,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=h*d+f,t[10]=u-g*d}else if(e.order==="XZY"){let u=r*o,h=r*l,f=a*o,g=a*l;t[0]=o*c,t[4]=-d,t[8]=l*c,t[1]=u*d+g,t[5]=r*c,t[9]=h*d-f,t[2]=f*d-h,t[6]=a*c,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Id)}lookAt(e,t,n){let i=this.elements;if(Wt.subVectors(e,t),Wt.lengthSq()===0)Wt.z=1;if(Wt.normalize(),Hn.crossVectors(n,Wt),Hn.lengthSq()===0){if(Math.abs(n.z)===1)Wt.x+=0.0001;else Wt.z+=0.0001;Wt.normalize(),Hn.crossVectors(n,Wt)}return Hn.normalize(),Is.crossVectors(Wt,Hn),i[0]=Hn.x,i[4]=Is.x,i[8]=Wt.x,i[1]=Hn.y,i[5]=Is.y,i[9]=Wt.y,i[2]=Hn.z,i[6]=Is.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],d=n[5],u=n[9],h=n[13],f=n[2],g=n[6],S=n[10],m=n[14],p=n[3],E=n[7],R=n[11],v=n[15],M=i[0],A=i[4],T=i[8],y=i[12],b=i[1],H=i[5],L=i[9],U=i[13],G=i[2],C=i[6],I=i[10],q=i[14],V=i[3],se=i[7],Z=i[11],ne=i[15];return s[0]=r*M+a*b+o*G+l*V,s[4]=r*A+a*H+o*C+l*se,s[8]=r*T+a*L+o*I+l*Z,s[12]=r*y+a*U+o*q+l*ne,s[1]=c*M+d*b+u*G+h*V,s[5]=c*A+d*H+u*C+h*se,s[9]=c*T+d*L+u*I+h*Z,s[13]=c*y+d*U+u*q+h*ne,s[2]=f*M+g*b+S*G+m*V,s[6]=f*A+g*H+S*C+m*se,s[10]=f*T+g*L+S*I+m*Z,s[14]=f*y+g*U+S*q+m*ne,s[3]=p*M+E*b+R*G+v*V,s[7]=p*A+E*H+R*C+v*se,s[11]=p*T+E*L+R*I+v*Z,s[15]=p*y+E*U+R*q+v*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],d=e[6],u=e[10],h=e[14],f=e[3],g=e[7],S=e[11],m=e[15],p=o*h-l*u,E=a*h-l*d,R=a*u-o*d,v=r*h-l*c,M=r*u-o*c,A=r*d-a*c;return t*(g*p-S*E+m*R)-n*(f*p-S*v+m*M)+i*(f*E-g*v+m*A)-s*(f*R-g*M+S*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],a=e[9],o=e[2],l=e[6],c=e[10];return t*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],d=e[9],u=e[10],h=e[11],f=e[12],g=e[13],S=e[14],m=e[15],p=t*a-n*r,E=t*o-i*r,R=t*l-s*r,v=n*o-i*a,M=n*l-s*a,A=i*l-s*o,T=c*g-d*f,y=c*S-u*f,b=c*m-h*f,H=d*S-u*g,L=d*m-h*g,U=u*m-h*S,G=p*U-E*L+R*H+v*b-M*y+A*T;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/G;return e[0]=(a*U-o*L+l*H)*C,e[1]=(i*L-n*U-s*H)*C,e[2]=(g*A-S*M+m*v)*C,e[3]=(u*M-d*A-h*v)*C,e[4]=(o*b-r*U-l*y)*C,e[5]=(t*U-i*b+s*y)*C,e[6]=(S*R-f*A-m*E)*C,e[7]=(c*A-u*R+h*E)*C,e[8]=(r*L-a*b+l*T)*C,e[9]=(n*b-t*L-s*T)*C,e[10]=(f*M-g*R+m*p)*C,e[11]=(d*R-c*M-h*p)*C,e[12]=(a*y-r*H-o*T)*C,e[13]=(t*H-n*y+i*T)*C,e[14]=(g*E-f*v-S*p)*C,e[15]=(c*v-d*E+u*p)*C,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,d=a+a,u=s*l,h=s*c,f=s*d,g=r*c,S=r*d,m=a*d,p=o*l,E=o*c,R=o*d,{x:v,y:M,z:A}=n;return i[0]=(1-(g+m))*v,i[1]=(h+R)*v,i[2]=(f-E)*v,i[3]=0,i[4]=(h-R)*M,i[5]=(1-(u+m))*M,i[6]=(S+p)*M,i[7]=0,i[8]=(f+E)*A,i[9]=(S-p)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=bi.set(i[0],i[1],i[2]).length(),a=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;tn.copy(this);let l=1/r,c=1/a,d=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=c,tn.elements[5]*=c,tn.elements[6]*=c,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f,g;if(o)f=s/(r-s),g=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),h=-(n+i)/(n-i),f,g;if(o)f=1/(r-s),g=r/(r-s);else if(a===2000)f=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bi=new z,tn=new mt,Pd=new z(0,0,0),Id=new z(1,1,1),Hn=new z,Is=new z,Wt=new z,tc=new mt,nc=new ln;pn=class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],d=i[2],u=i[6],h=i[10];switch(t){case"XYZ":if(this._y=Math.asin(He(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-He(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-d,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(He(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<0.9999999)this._x=Math.atan2(u,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(He(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-He(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";ic=new z,Mi=new ln,An=new mt,Ls=new z,is=new z,Dd=new z,Nd=new ln,sc=new z(1,0,0),rc=new z(0,1,0),ac=new z(0,0,1),oc={type:"added"},Ud={type:"removed"},Si={type:"childadded",child:null},sa={type:"childremoved",child:null};kt=class kt extends Nn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();let e=new z,t=new pn,n=new ln,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Oe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Ls.copy(e);else Ls.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)An.lookAt(is,Ls,this.up);else An.lookAt(Ls,is,this.up);if(this.quaternion.setFromRotationMatrix(An),i)An.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(An),this.quaternion.premultiply(Mi.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Ue("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Si.child=e,this.dispatchEvent(Si),Si.child=null;else Ue("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ud),sa.child=e,this.dispatchEvent(sa),sa.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld);return e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let d=o[l];s(e.shapes,d)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),d=r(e.shapes),u=r(e.skeletons),h=r(e.animations),f=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(d.length>0)n.shapes=d;if(u.length>0)n.skeletons=u;if(h.length>0)n.animations=h;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new z(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;qn=class qn extends kt{constructor(){super();this.isGroup=!0,this.type="Group"}};Fd={type:"move"};xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};Ke=class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=bo(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ra(r,s,e+0.3333333333333333),this.g=ra(r,s,e),this.b=ra(r,s,e-0.3333333333333333)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=xh[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else De("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Ye.workingToColorSpace(Pt.copy(this),e),Math.round(He(Pt.r*255,0,255))*65536+Math.round(He(Pt.g*255,0,255))*256+Math.round(He(Pt.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Pt.copy(this),t);let{r:n,g:i,b:s}=Pt,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let d=r-a;switch(l=c<=0.5?d/(r+a):d/(2-r-a),r){case n:o=(i-s)/d+(i<s?6:0);break;case i:o=(s-n)/d+2;break;case s:o=(n-i)/d+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e="srgb"){Ye.workingToColorSpace(Pt.copy(this),e);let{r:t,g:n,b:i}=Pt;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Ds);let n=ls(Gn.h,Ds.h,t),i=ls(Gn.s,Ds.s,t),s=ls(Gn.l,Ds.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Pt=new Ke;Ke.NAMES=xh;pr=class pr extends kt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};nn=new z,Tn=new z,aa=new z,Rn=new z,wi=new z,Ei=new z,lc=new z,oa=new z,la=new z,ca=new z,ha=new st,ua=new st,da=new st;Cn=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,Ns=new jt,Ai=new z,Ti=new z,Ri=new z,Vn=new z,Wn=new z,Kn=new z,ss=new z,Us=new z,Fs=new z,jn=new z;vt=new z,Os=new Ze;Kt=class Kt extends Nn{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=rn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=nt(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=rn(t,this.array);return t}setX(e,t){if(this.normalized)t=nt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=rn(t,this.array);return t}setY(e,t){if(this.normalized)t=nt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=rn(t,this.array);return t}setZ(e,t){if(this.normalized)t=nt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=rn(t,this.array);return t}setW(e,t){if(this.normalized)t=nt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=nt(t,this.array),n=nt(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};mr=class mr extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};gr=class gr extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};Ot=class Ot extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}};Bd=new jt,rs=new z,pa=new z;Zt=new mt,ma=new kt,Ci=new z,Xt=new jt,as=new jt,wt=new z;Qt=class Qt extends Nn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((cd(e))?gr:mr)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new jt;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Xt.setFromBufferAttribute(s),this.morphTargetsRelative)wt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(wt);else this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Un;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(as.setFromBufferAttribute(a),this.morphTargetsRelative)wt.addVectors(Xt.min,as.min),Xt.expandByPoint(wt),wt.addVectors(Xt.max,as.max),Xt.expandByPoint(wt);else Xt.expandByPoint(as.min),Xt.expandByPoint(as.max)}Xt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(wt.fromBufferAttribute(a,l),o)Ci.fromBufferAttribute(e,l),wt.add(Ci);i=Math.max(i,n.distanceToSquared(wt))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let T=0;T<n.count;T++)a[T]=new z,o[T]=new z;let l=new z,c=new z,d=new z,u=new Ze,h=new Ze,f=new Ze,g=new z,S=new z;function m(T,y,b){l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),d.fromBufferAttribute(n,b),u.fromBufferAttribute(s,T),h.fromBufferAttribute(s,y),f.fromBufferAttribute(s,b),c.sub(l),d.sub(l),h.sub(u),f.sub(u);let H=1/(h.x*f.y-f.x*h.y);if(!isFinite(H))return;g.copy(c).multiplyScalar(f.y).addScaledVector(d,-h.y).multiplyScalar(H),S.copy(d).multiplyScalar(h.x).addScaledVector(c,-f.x).multiplyScalar(H),a[T].add(g),a[y].add(g),a[b].add(g),o[T].add(S),o[y].add(S),o[b].add(S)}let p=this.groups;if(p.length===0)p=[{start:0,count:e.count}];for(let T=0,y=p.length;T<y;++T){let b=p[T],{start:H,count:L}=b;for(let U=H,G=H+L;U<G;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new z,R=new z,v=new z,M=new z;function A(T){v.fromBufferAttribute(i,T),M.copy(v);let y=a[T];E.copy(y),E.sub(v.multiplyScalar(v.dot(y))).normalize(),R.crossVectors(M,y);let H=R.dot(o[T])<0?-1:1;r.setXYZW(T,E.x,E.y,E.z,H)}for(let T=0,y=p.length;T<y;++T){let b=p[T],{start:H,count:L}=b;for(let U=H,G=H+L;U<G;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let i=new z,s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,d=new z;if(e)for(let u=0,h=e.count;u<h;u+=3){let f=e.getX(u+0),g=e.getX(u+1),S=e.getX(u+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:d}=a,u=new l.constructor(o.length*c),h=0,f=0;for(let g=0,S=o.length;g<S;g++){if(a.isInterleavedBufferAttribute)h=o[g]*a.data.stride+a.offset;else h=o[g]*c;for(let m=0;m<c;m++)u[f++]=l[h++]}return new Kt(u,c,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Qt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,d=l.length;c<d;c++){let u=l[c],h=e(u,n);o.push(h)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let d=0,u=l.length;d<u;d++){let h=l[d];c.push(h.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere=a.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],d=s[l];for(let u=0,h=d.length;u<h;u++)c.push(d[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut=new z;ga=new z,kd=new z,Hd=new Oe;Vi=class Vi extends Nn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=In(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Ke().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=e.iridescenceThicknessRange;if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new fn().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Ze().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale);if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}};Pn=new z,_a=new z,Bs=new z,zs=new z;_r=class _r extends Vi{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};cc=new mt,Qn=new To,ks=new Un,hc=new z,Hs=new z,Gs=new z,Vs=new z,xa=new z,Ws=new z,uc=new z,Xs=new z;Yt=class Yt extends kt{constructor(e=new Qt,t=new _r){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Ws.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],d=s[o];if(c===0)continue;if(xa.fromBufferAttribute(d,e),r)Ws.addScaledVector(xa,c);else Ws.addScaledVector(xa.sub(t),c)}t.add(Ws)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(ks.copy(n.boundingSphere),ks.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),ks.containsPoint(Qn.origin)===!1){if(Qn.intersectSphere(ks,hc)===null)return;if(Qn.origin.distanceToSquared(hc)>(e.far-e.near)**2)return}if(cc.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(cc),n.boundingBox!==null){if(Qn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Qn)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,{groups:u,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let f=0,g=u.length;f<g;f++){let S=u[f],m=r[S.materialIndex],p=Math.max(S.start,h.start),E=Math.min(a.count,Math.min(S.start+S.count,h.start+h.count));for(let R=p,v=E;R<v;R+=3){let M=a.getX(R),A=a.getX(R+1),T=a.getX(R+2);if(i=qs(this,m,e,n,l,c,d,M,A,T),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=S.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let S=f,m=g;S<m;S+=3){let p=a.getX(S),E=a.getX(S+1),R=a.getX(S+2);if(i=qs(this,r,e,n,l,c,d,p,E,R),i)i.faceIndex=Math.floor(S/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,g=u.length;f<g;f++){let S=u[f],m=r[S.materialIndex],p=Math.max(S.start,h.start),E=Math.min(o.count,Math.min(S.start+S.count,h.start+h.count));for(let R=p,v=E;R<v;R+=3){let M=R,A=R+1,T=R+2;if(i=qs(this,m,e,n,l,c,d,M,A,T),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=S.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let S=f,m=g;S<m;S+=3){let p=S,E=S+1,R=S+2;if(i=qs(this,r,e,n,l,c,d,p,E,R),i)i.faceIndex=Math.floor(S/3),t.push(i)}}}};Ro=class Ro extends It{constructor(e=null,t=1,n=1,i,s,r,a,o,l=1003,c=1003,d,u){super(null,r,a,o,l,c,i,s,d,u);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};ei=new Un,Wd=new Ze(0.5,0.5),Ys=new z;yr=class yr extends It{constructor(e=[],t=301,n,i,s,r,a,o,l,c){super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};li=class li extends It{constructor(e,t,n=1014,i,s,r,a=1003,o=1003,l,c=1026,d=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};Co=class Co extends li{constructor(e,t=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,n,i,s,r,a,o,l);this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};vr=class vr extends It{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};Wi=class Wi extends Qt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],d=[],u=0,h=0;f("z","y","x",-1,-1,n,t,e,r,s,0),f("z","y","x",1,-1,n,t,-e,r,s,1),f("x","z","y",1,1,e,n,t,i,r,2),f("x","z","y",1,-1,e,n,-t,i,r,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(d,2));function f(g,S,m,p,E,R,v,M,A,T,y){let b=R/A,H=v/T,L=R/2,U=v/2,G=M/2,C=A+1,I=T+1,q=0,V=0,se=new z;for(let Z=0;Z<I;Z++){let ne=Z*H-U;for(let ae=0;ae<C;ae++){let Pe=ae*b-L;se[g]=Pe*p,se[S]=ne*E,se[m]=G,l.push(se.x,se.y,se.z),se[g]=0,se[S]=0,se[m]=M>0?1:-1,c.push(se.x,se.y,se.z),d.push(ae/A),d.push(1-Z/T),q+=1}}for(let Z=0;Z<T;Z++)for(let ne=0;ne<A;ne++){let ae=u+ne+C*Z,Pe=u+ne+C*(Z+1),Ce=u+(ne+1)+C*(Z+1),We=u+(ne+1)+C*Z;o.push(ae,Pe,We),o.push(Pe,Ce,We),V+=6}a.addGroup(h,V,y),h+=V,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ys=class ys extends Qt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,d=e/a,u=t/o,h=[],f=[],g=[],S=[];for(let m=0;m<c;m++){let p=m*u-r;for(let E=0;E<l;E++){let R=E*d-s;f.push(R,-p,0),g.push(0,0,1),S.push(E/a),S.push(1-m/o)}}for(let m=0;m<o;m++)for(let p=0;p<a;p++){let E=p+l*m,R=p+l*(m+1),v=p+1+l*(m+1),M=p+1+l*m;h.push(E,R,M),h.push(R,v,M)}this.setIndex(h),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}};br=class br extends Qt{constructor(e=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new z,s=new z;if(e.index!==null){let r=e.attributes.position,{index:a,groups:o}=e;if(o.length===0)o=[{start:0,count:a.count,materialIndex:0}];for(let l=0,c=o.length;l<c;++l){let d=o[l],{start:u,count:h}=d;for(let f=u,g=u+h;f<g;f+=3)for(let S=0;S<3;S++){let m=a.getX(f+S),p=a.getX(f+(S+1)%3);if(i.fromBufferAttribute(r,m),s.fromBufferAttribute(r,p),dc(i,s,n)===!0)t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z)}}}else{let r=e.attributes.position;for(let a=0,o=r.count/3;a<o;a++)for(let l=0;l<3;l++){let c=3*a+l,d=3*a+(l+1)%3;if(i.fromBufferAttribute(r,c),s.fromBufferAttribute(r,d),dc(i,s,n)===!0)t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z)}}this.setAttribute("position",new Ot(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};vs={clone:ci,merge:Dt};Vt=class Vt extends Vi{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new st().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}};Io=class Io extends Vt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};Lo=class Lo extends Vi{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Do=class Do extends Vi{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};No=class No extends hi{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,h=this._weightNext,f=(n-t)/(i-t),g=f*f,S=g*f,m=-u*S+2*u*g-u*f,p=(1+u)*S+(-1.5-2*u)*g+(-0.5+u)*f+1,E=(-1-h)*S+(1.5+h)*g+0.5*f,R=h*S-h*g;for(let v=0;v!==a;++v)s[v]=m*r[c+v]+p*r[l+v]+E*r[o+v]+R*r[d+v];return s}};Uo=class Uo extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),d=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*d+r[o+u]*c;return s}};Fo=class Fo extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};Oo=class Oo extends hi{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let f=(n-t)/(i-t),g=1-f;for(let S=0;S!==a;++S)s[S]=r[l+S]*g+r[o+S]*f;return s}let u=a*2,h=e-1;for(let f=0;f!==a;++f){let g=r[l+f],S=r[o+f],m=h*u+f*2,p=d[m],E=d[m+1],R=e*u+f*2,v=c[R],M=c[R+1],A=Zd(n,t,p,v,i);s[f]=yh(A,g,E,M,S)}return s}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=2301;ui=class ui extends en{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=2300;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;Bo=class Bo extends en{constructor(e,t,n,i){super(e,t,n,i)}};Bo.prototype.ValueTypeName="color";zo=class zo extends en{constructor(e,t,n,i){super(e,t,n,i)}};zo.prototype.ValueTypeName="number";ko=class ko extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)ln.slerpFlat(s,0,r,l-a,r,l,o);return s}};Mr=class Mr extends en{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;di=class di extends en{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=2300;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;Ho=class Ho extends en{constructor(e,t,n,i){super(e,t,n,i)}};Ho.prototype.ValueTypeName="vector";vh=new Go;Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";$s=new z,Zs=new ln,dn=new z;Sr=class Sr extends kt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Zs,dn),dn.x===1&&dn.y===1&&dn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose($s,Zs,dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){if(super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($s,Zs,dn),dn.x===1&&dn.y===1&&dn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose($s,Zs,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};Xn=new z,mc=new Ze,gc=new Ze;Ft=class Ft extends Sr{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(os*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(os*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(os*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};wr=class wr extends Sr{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}};Er=class Er extends Qt{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};Wo=class Wo extends kt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ft(Ii,Li,e,t);i.layers=this.layers,this.add(i);let s=new Ft(Ii,Li,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Ii,Li,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Ii,Li,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Ii,Li,e,t);o.layers=this.layers,this.add(o);let l=new Ft(Ii,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;if(e.isWebGLRenderer===!0)S=e.state.buffers.depth.getReversed();else S=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,i),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(n,1,i),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,2,i),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,3,i),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,4,i),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),S&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(d,u,h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}};Xo=class Xo extends Ft{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};Jd=new RegExp("["+qo+"]","g"),Yo="[^"+qo+"]",Kd="[^"+qo.replace("\\.","")+"]",jd=/((?:WC+[\/:])*)/.source.replace("WC",Yo),Qd=/(WCOD+)?/.source.replace("WCOD",Kd),ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yo),tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yo),nf=new RegExp("^"+jd+Qd+ef+tf+"$"),sf=["material","materials","bones","map"];it.Composite=bh;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];tx=new Float32Array(1);yn=class yn extends Ao{constructor(e,t,n=1){super(e,t);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};$o=class $o{static{$o.prototype.isMatrix2=!0}constructor(e,t,n,i){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};_c=new z,Js=new z,Di=new z,Ni=new z,va=new z,rf=new z,af=new z;if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)De("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186"});function Vh(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function lf(e){let t=new WeakMap;function n(o,l){let{array:c,usage:d}=o,u=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=e.HALF_FLOAT;else f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let{array:d,updateRanges:u}=l;if(e.bindBuffer(c,o),u.length===0)e.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],S=u[f];if(S.start<=g.start+g.count+1)g.count=Math.max(g.count,S.start+S.count-g.start);else++h,u[h]=S}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let S=u[f];e.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return t.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=t.get(o);if(l)e.deleteBuffer(l.buffer),t.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let d=t.get(o);if(!d||d.version<o.version)t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Wm(e,t,n,i,s,r){let a=new Ke(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let v=E.backgroundBlurriness>0;R=t.get(R,v)}return R}function g(E){let R=!1,v=f(E);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),R=!0;let M=e.xr.getEnvironmentBlendMode();if(M==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(M==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(e.autoClear||R)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function S(E,R){let v=f(R);if(v&&(v.isCubeTexture||v.mapping===fs)){if(c===void 0)c=new Yt(new Wi(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ci(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Wh);if(c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==lt,d!==v||u!==v.version||h!==e.toneMapping)c.material.needsUpdate=!0,d=v,u=v.version,h=e.toneMapping;c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new Yt(new ys(2,2),new Vt({name:"BackgroundMaterial",uniforms:ci(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),d!==v||u!==v.version||h!==e.toneMapping)l.material.needsUpdate=!0,d=v,u=v.version,h=e.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function m(E,R){E.getRGB(Tr,Po(e)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,R,r)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:S,dispose:p}}function Xm(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(L,U,G,C,I){let q=!1,V=u(L,C,G,U);if(r!==V)r=V,c(r.object);if(q=f(L,C,G,I),q)g(L,C,G,I);if(I!==null)t.update(I,e.ELEMENT_ARRAY_BUFFER);if(q||a){if(a=!1,v(L,U,G,C),I!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer)}}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function d(L){return e.deleteVertexArray(L)}function u(L,U,G,C){let I=C.wireframe===!0,q=i[U.id];if(q===void 0)q={},i[U.id]=q;let V=L.isInstancedMesh===!0?L.id:0,se=q[V];if(se===void 0)se={},q[V]=se;let Z=se[G.id];if(Z===void 0)Z={},se[G.id]=Z;let ne=Z[I];if(ne===void 0)ne=h(l()),Z[I]=ne;return ne}function h(L){let U=[],G=[],C=[];for(let I=0;I<n;I++)U[I]=0,G[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,U,G,C){let I=r.attributes,q=U.attributes,V=0,se=G.getAttributes();for(let Z in se)if(se[Z].location>=0){let ae=I[Z],Pe=q[Z];if(Pe===void 0){if(Z==="instanceMatrix"&&L.instanceMatrix)Pe=L.instanceMatrix;if(Z==="instanceColor"&&L.instanceColor)Pe=L.instanceColor}if(ae===void 0)return!0;if(ae.attribute!==Pe)return!0;if(Pe&&ae.data!==Pe.data)return!0;V++}if(r.attributesNum!==V)return!0;if(r.index!==C)return!0;return!1}function g(L,U,G,C){let I={},q=U.attributes,V=0,se=G.getAttributes();for(let Z in se)if(se[Z].location>=0){let ae=q[Z];if(ae===void 0){if(Z==="instanceMatrix"&&L.instanceMatrix)ae=L.instanceMatrix;if(Z==="instanceColor"&&L.instanceColor)ae=L.instanceColor}let Pe={};if(Pe.attribute=ae,ae&&ae.data)Pe.data=ae.data;I[Z]=Pe,V++}r.attributes=I,r.attributesNum=V,r.index=C}function S(){let L=r.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){let G=r.newAttributes,C=r.enabledAttributes,I=r.attributeDivisors;if(G[L]=1,C[L]===0)e.enableVertexAttribArray(L),C[L]=1;if(I[L]!==U)e.vertexAttribDivisor(L,U),I[L]=U}function E(){let L=r.newAttributes,U=r.enabledAttributes;for(let G=0,C=U.length;G<C;G++)if(U[G]!==L[G])e.disableVertexAttribArray(G),U[G]=0}function R(L,U,G,C,I,q,V){if(V===!0)e.vertexAttribIPointer(L,U,G,I,q);else e.vertexAttribPointer(L,U,G,C,I,q)}function v(L,U,G,C){S();let I=C.attributes,q=G.getAttributes(),V=U.defaultAttributeValues;for(let se in q){let Z=q[se];if(Z.location>=0){let ne=I[se];if(ne===void 0){if(se==="instanceMatrix"&&L.instanceMatrix)ne=L.instanceMatrix;if(se==="instanceColor"&&L.instanceColor)ne=L.instanceColor}if(ne!==void 0){let ae=ne.normalized,Pe=ne.itemSize,Ce=t.get(ne);if(Ce===void 0)continue;let{buffer:We,type:ke,bytesPerElement:P}=Ce,B=ke===e.INT||ke===e.UNSIGNED_INT||ne.gpuType===Da;if(ne.isInterleavedBufferAttribute){let k=ne.data,K=k.stride,te=ne.offset;if(k.isInstancedInterleavedBuffer){for(let j=0;j<Z.locationSize;j++)p(Z.location+j,k.meshPerAttribute);if(L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=k.meshPerAttribute*k.count}else for(let j=0;j<Z.locationSize;j++)m(Z.location+j);e.bindBuffer(e.ARRAY_BUFFER,We);for(let j=0;j<Z.locationSize;j++)R(Z.location+j,Pe/Z.locationSize,ke,ae,K*P,(te+Pe/Z.locationSize*j)*P,B)}else{if(ne.isInstancedBufferAttribute){for(let k=0;k<Z.locationSize;k++)p(Z.location+k,ne.meshPerAttribute);if(L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=ne.meshPerAttribute*ne.count}else for(let k=0;k<Z.locationSize;k++)m(Z.location+k);e.bindBuffer(e.ARRAY_BUFFER,We);for(let k=0;k<Z.locationSize;k++)R(Z.location+k,Pe/Z.locationSize,ke,ae,Pe*P,Pe/Z.locationSize*k*P,B)}}else if(V!==void 0){let ae=V[se];if(ae!==void 0)switch(ae.length){case 2:e.vertexAttrib2fv(Z.location,ae);break;case 3:e.vertexAttrib3fv(Z.location,ae);break;case 4:e.vertexAttrib4fv(Z.location,ae);break;default:e.vertexAttrib1fv(Z.location,ae)}}}}E()}function M(){b();for(let L in i){let U=i[L];for(let G in U){let C=U[G];for(let I in C){let q=C[I];for(let V in q)d(q[V].object),delete q[V];delete C[I]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;let U=i[L.id];for(let G in U){let C=U[G];for(let I in C){let q=C[I];for(let V in q)d(q[V].object),delete q[V];delete C[I]}}delete i[L.id]}function T(L){for(let U in i){let G=i[U];for(let C in G){let I=G[C];if(I[L.id]===void 0)continue;let q=I[L.id];for(let V in q)d(q[V].object),delete q[V];delete I[L.id]}}}function y(L){for(let U in i){let G=i[U],C=L.isInstancedMesh===!0?L.id:0,I=G[C];if(I===void 0)continue;for(let q in I){let V=I[q];for(let se in V)d(V[se].object),delete V[se];delete I[q]}if(delete G[C],Object.keys(G).length===0)delete i[U]}}function b(){if(H(),a=!0,r===s)return;r=s,c(r.object)}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function qm(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){if(d===0)return;e.drawArraysInstanced(i,l,c,d),n.update(c,i,d)}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ym(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){if(T!==xn&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(T){let y=T===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(T!==on&&T!==Dn&&!y&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);if(d!==c)De("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d;let u=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:v,maxSamples:M,samples:A}}function $m(e){let t=this,n=null,i=0,s=!1,r=!1,a=new fn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){n=d(u,h,0)},this.setState=function(u,h,f){let{clippingPlanes:g,clipIntersection:S,clipShadows:m}=u,p=e.get(u);if(!s||g===null||g.length===0||r&&!m)if(r)d(null);else c();else{let E=r?0:i,R=E*4,v=p.clippingState||null;l.value=v,v=d(g,h,R,f);for(let M=0;M!==R;++M)v[M]=n[M];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function d(u,h,f,g){let S=u!==null?u.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let p=f+S*4,E=h.matrixWorldInverse;if(o.getNormalMatrix(E),m===null||m.length<p)m=new Float32Array(p);for(let R=0,v=f;R!==S;++R,v+=4)a.copy(u[R]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=0.1,i=100,s={}){let{size:r=256,position:a=jm}=s;Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o,a),t>0)this._blur(o,0,0,t);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,jo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===Hi||e.mapping===ni)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:_n,format:xn,colorSpace:_o,depthBuffer:!1},i=Sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Sh(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qm(s)),this._blurMaterial=tg(s,e,t),this._ggxMaterial=eg(s,e,t)}return i}_compileMaterial(e){let t=new Yt(new Qt,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,n,i,s){let o=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,{autoClear:u,toneMapping:h}=d;if(d.getClearColor(Mh),d.toneMapping=an,d.autoClear=!1,d.state.buffers.depth.getReversed())d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Yt(new Wi,new _r({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,S=g.material,m=!1,p=e.background;if(p){if(p.isColor)S.color.copy(p),e.background=null,m=!0}else S.color.copy(Mh),m=!0;for(let E=0;E<6;E++){let R=E%3;if(R===0)o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[E],s.y,s.z);else if(R===1)o.up.set(0,0,l[E]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[E],s.z);else o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[E]);let v=this._cubeSize;if(Xi(i,R*v,E>2?v:0,v,v),d.setRenderTarget(i),m)d.render(g,o);d.render(e,o)}d.toneMapping=h,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Hi||e.mapping===ni;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Eh();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=wh();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=e;let o=this._cubeSize;Xi(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(r,bs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-c*c),u=l*1.25,h=d*u,{_lodMax:f}=this,g=this._sizeLods[n],S=3*g*(n>f-qi?n-f+qi:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=f-t,Xi(s,S,m,3*g,2*g),i.setRenderTarget(s),i.render(a,bs),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=f-n,Xi(e,S,m,3*g,2*g),i.setRenderTarget(e),i.render(a,bs)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],d=3*c*(i>this._lodMax-qi?i-this._lodMax+qi:0),u=4*(this._cubeSize-c);Xi(t,d,u,3*c,2*c),r.setRenderTarget(t),r.render(o,bs)}}function Qm(e){let t=[],n=[],i=e,s=e-qi+1+Zm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,g=new Float32Array(f*h*u),S=new Float32Array(f*h*u);for(let p=0;p<u;p++){let E=p%3*2/3-1,R=p>2?0:-1,v=[E,R,0,E+0.6666666666666666,R,0,E+0.6666666666666666,R+1,0,E,R,0,E+0.6666666666666666,R+1,0,E,R+1,0];g.set(v,f*h*p);for(let M=0;M<h;M++){let A=d[M*2]*2-1,T=d[M*2+1]*2-1;if(p===0)fi.set(1,T,A);else if(p===1)fi.set(-A,1,-T);else if(p===2)fi.set(-A,T,1);else if(p===3)fi.set(-1,T,-A);else if(p===4)fi.set(-A,-1,T);else fi.set(A,T,-1);fi.toArray(S,(p*h+M)*f)}}let m=new Qt;if(m.setAttribute("position",new Kt(g,f)),m.setAttribute("outputDirection",new Kt(S,f)),n.push(new Yt(m,null)),i>qi)i--}return{lodMeshes:n,sizeLods:t}}function Sh(e,t,n){let i=new qt(e,t,n);return i.texture.mapping=fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xi(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function eg(e,t,n){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function tg(e,t,n){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function wh(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Eh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Cr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function ng(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){if(h===null||h===void 0)return null;if(f)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Qs||f===er)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new al(g.height);return S.fromEquirectangularTexture(e,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Qs||f===er,S=f===Hi||f===ni;if(g||S){let m=n.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p){if(i===null)i=new il(e);return m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let E=h.image;if(g&&E&&E.height>0||S&&E&&l(E)){if(i===null)i=new il(e);return m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",d),m.texture}else return null}}}return h}function o(h,f){if(f===Qs)h.mapping=Hi;else if(f===er)h.mapping=ni;return h}function l(h){let f=0,g=6;for(let S=0;S<g;S++)if(h[S]!==void 0)f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);if(g!==void 0)t.delete(f),g.dispose()}function d(h){let f=h.target;f.removeEventListener("dispose",d);let g=n.get(f);if(g!==void 0)n.delete(f),g.dispose()}function u(){if(t=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:u}}function ig(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)ti("WebGLRenderer: "+i+" extension not supported.");return s}}}function sg(e,t,n,i){let s={},r=new WeakMap;function a(u){let h=u.target;if(h.index!==null)t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);if(f)t.remove(f),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(u,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(u){let h=u.attributes;for(let f in h)t.update(h[f],e.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,g=u.attributes.position,S=0;if(g===void 0)return;if(f!==null){let E=f.array;S=f.version;for(let R=0,v=E.length;R<v;R+=3){let M=E[R+0],A=E[R+1],T=E[R+2];h.push(M,A,A,T,T,M)}}else{let E=g.array;S=g.version;for(let R=0,v=E.length/3-1;R<v;R+=3){let M=R+0,A=R+1,T=R+2;h.push(M,A,A,T,T,M)}}let m=new(g.count>=65535?gr:mr)(h,1);m.version=S;let p=r.get(u);if(p)t.remove(p);r.set(u,m)}function d(u){let h=r.get(u);if(h){let f=u.index;if(f!==null){if(h.version<f.version)c(u)}}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function rg(e,t,n){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){e.drawElements(i,h,r,u*a),n.update(h,i,1)}function c(u,h,f){if(f===0)return;e.drawElementsInstanced(i,h,r,u*a,f),n.update(h,i,f)}function d(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ag(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function og(e,t,n){let i=new WeakMap,s=new st;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=i.get(o);if(h===void 0||h.count!==u){let b=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",b)};if(h!==void 0)h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],R=0;if(f===!0)R=1;if(g===!0)R=2;if(S===!0)R=3;let v=o.attributes.position.count*R,M=1;if(v>t.maxTextureSize)M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize;let A=new Float32Array(v*M*4*u),T=new dr(A,v,M,u);T.type=Dn,T.needsUpdate=!0;let y=R*4;for(let H=0;H<u;H++){let L=m[H],U=p[H],G=E[H],C=v*M*4*H;for(let I=0;I<L.count;I++){let q=I*y;if(f===!0)s.fromBufferAttribute(L,I),A[C+q+0]=s.x,A[C+q+1]=s.y,A[C+q+2]=s.z,A[C+q+3]=0;if(g===!0)s.fromBufferAttribute(U,I),A[C+q+4]=s.x,A[C+q+5]=s.y,A[C+q+6]=s.z,A[C+q+7]=0;if(S===!0)s.fromBufferAttribute(G,I),A[C+q+8]=s.x,A[C+q+9]=s.y,A[C+q+10]=s.z,A[C+q+11]=G.itemSize===4?s.w:1}}h={count:u,texture:T,size:new Ze(v,M)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function lg(e,t,n,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==d)t.update(h),r.set(h,d);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==d){if(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,e.ARRAY_BUFFER);r.set(c,d)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==d)f.update(),r.set(f,d)}return h}function o(){r=new WeakMap}function l(c){let d=c.target;if(d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null)n.remove(d.instanceColor)}return{update:a,dispose:o}}function hg(e,t,n,i,s,r){let a=new qt(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qt;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let d=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Yt(c,d),h=new wr(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,E=[],R=!1;this.setSize=function(v,M){if(a.setSize(v,M),o!==null)o.setSize(v,M);if(l!==null)l.setSize(v,M);for(let A=0;A<E.length;A++){let T=E[A];if(T.setSize)T.setSize(v,M)}},this.setEffects=function(v){E=v,R=E.length>0&&E[0].isRenderPass===!0;let{width:M,height:A}=a;if(E.length>0&&o===null)o=new qt(M,A,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new qt(M,A,{type:_n,depthBuffer:!1,stencilBuffer:!1});for(let T=0;T<E.length;T++){let y=E[T];if(y.setSize)y.setSize(M,A)}},this.begin=function(v,M){if(S)return!1;if(v.toneMapping===an&&E.length===0)return!1;if(p=M,M!==null){let{width:A,height:T}=M;if(a.width!==A||a.height!==T)this.setSize(A,T)}if(R===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=an,!0},this.hasRenderPass=function(){return R},this.end=function(v,M){v.toneMapping=m,S=!0;let A=a,T=o;for(let y=0;y<E.length;y++){let b=E[y];if(b.enabled===!1)continue;if(b.render(v,T,A,M),b.needsSwap!==!1)A=T,T=T===o?l:o}if(f!==v.outputColorSpace||g!==v.toneMapping){if(f=v.outputColorSpace,g=v.toneMapping,d.defines={},Ye.getTransfer(f)===lt)d.defines.SRGB_TRANSFER="";let y=cg[g];if(y)d.defines[y]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(p),v.render(u,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),d.dispose()}}function Yi(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Ah[s];if(r===void 0)r=new Float32Array(s),Ah[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function Mt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function St(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Pr(e,t){let n=Th[t];if(n===void 0)n=new Int32Array(t),Th[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function ug(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function dg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Mt(n,t))return;e.uniform2fv(this.addr,t),St(n,t)}}function fg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(Mt(n,t))return;e.uniform3fv(this.addr,t),St(n,t)}}function pg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Mt(n,t))return;e.uniform4fv(this.addr,t),St(n,t)}}function mg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Mt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),St(n,t)}else{if(Mt(n,i))return;Ph.set(i),e.uniformMatrix2fv(this.addr,!1,Ph),St(n,i)}}function gg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Mt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),St(n,t)}else{if(Mt(n,i))return;Ch.set(i),e.uniformMatrix3fv(this.addr,!1,Ch),St(n,i)}}function _g(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Mt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),St(n,t)}else{if(Mt(n,i))return;Rh.set(i),e.uniformMatrix4fv(this.addr,!1,Rh),St(n,i)}}function xg(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function yg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Mt(n,t))return;e.uniform2iv(this.addr,t),St(n,t)}}function vg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Mt(n,t))return;e.uniform3iv(this.addr,t),St(n,t)}}function bg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Mt(n,t))return;e.uniform4iv(this.addr,t),St(n,t)}}function Mg(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function Sg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Mt(n,t))return;e.uniform2uiv(this.addr,t),St(n,t)}}function wg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Mt(n,t))return;e.uniform3uiv(this.addr,t),St(n,t)}}function Eg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Mt(n,t))return;e.uniform4uiv(this.addr,t),St(n,t)}}function Ag(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)sl.compareFunction=n.isReversedDepthBuffer()?hr:cr,r=sl;else r=Xh;n.setTexture2D(t||r,s)}function Tg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||Yh,s)}function Rg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(t||$h,s)}function Cg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||qh,s)}function Pg(e){switch(e){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return vg;case 35669:case 35673:return bg;case 5125:return Mg;case 36294:return Sg;case 36295:return wg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Ig(e,t){e.uniform1fv(this.addr,t)}function Lg(e,t){let n=Yi(t,this.size,2);e.uniform2fv(this.addr,n)}function Dg(e,t){let n=Yi(t,this.size,3);e.uniform3fv(this.addr,n)}function Ng(e,t){let n=Yi(t,this.size,4);e.uniform4fv(this.addr,n)}function Ug(e,t){let n=Yi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Fg(e,t){let n=Yi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Og(e,t){let n=Yi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bg(e,t){e.uniform1iv(this.addr,t)}function zg(e,t){e.uniform2iv(this.addr,t)}function kg(e,t){e.uniform3iv(this.addr,t)}function Hg(e,t){e.uniform4iv(this.addr,t)}function Gg(e,t){e.uniform1uiv(this.addr,t)}function Vg(e,t){e.uniform2uiv(this.addr,t)}function Wg(e,t){e.uniform3uiv(this.addr,t)}function Xg(e,t){e.uniform4uiv(this.addr,t)}function qg(e,t,n){let i=this.cache,s=t.length,r=Pr(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);let a;if(this.type===e.SAMPLER_2D_SHADOW)a=sl;else a=Xh;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function Yg(e,t,n){let i=this.cache,s=t.length,r=Pr(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||Yh,r[a])}function $g(e,t,n){let i=this.cache,s=t.length,r=Pr(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTextureCube(t[a]||$h,r[a])}function Zg(e,t,n){let i=this.cache,s=t.length,r=Pr(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||qh,r[a])}function Jg(e){switch(e){case 5126:return Ig;case 35664:return Lg;case 35665:return Dg;case 35666:return Ng;case 35674:return Ug;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Vg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Zg}}class Zh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pg(t.type)}}class Jh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}}class Kh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}function Ih(e,t){e.seq.push(t),e.map[t.id]=t}function Kg(e,t,n){let i=e.name,s=i.length;tl.lastIndex=0;while(!0){let r=tl.exec(i),a=tl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Ih(n,c===void 0?new Zh(o,e,t):new Jh(o,e,t));break}else{let u=n.map[o];if(u===void 0)u=new Kh(o),Ih(n,u);n=u}}}class ws{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Kg(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Lh(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function e0(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function t0(e){Ye._getMatrix(Dh,Ye.workingColorSpace,e);let t=`mat3( ${Dh.elements.map((n)=>n.toFixed(4))} )`;switch(Ye.getTransfer(e)){case xo:return[t,"LinearTransferOETF"];case lt:return[t,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Nh(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+e0(e.getShaderSource(t),o)}else return r}function n0(e,t){let n=t0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function s0(e,t){let n=i0[t];if(n===void 0)return De("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function r0(){Ye.getLuminanceCoefficients(Rr);let e=Rr.x.toFixed(4),t=Rr.y.toFixed(4),n=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function a0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function o0(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function l0(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ss(e){return e!==""}function Uh(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function rl(e){return e.replace(c0,u0)}function u0(e,t){let n=Ve[t];if(n===void 0){let i=h0.get(t);if(i!==void 0)n=Ve[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rl(n)}function Oh(e){return e.replace(d0,f0)}function f0(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}function m0(e){return p0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function _0(e){if(e.envMap===!1)return"ENVMAP_TYPE_CUBE";return g0[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function y0(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return x0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function b0(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return v0[e.combine]||"ENVMAP_BLENDING_NONE"}function M0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function S0(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=m0(n),c=_0(n),d=y0(n),u=b0(n),h=M0(n),f=a0(n),g=o0(r),S=s.createProgram(),m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ss).join(`
`),m.length>0)m+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ss).join(`
`),p.length>0)p+=`
`}else m=[Bh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[Bh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==an?"#define TONE_MAPPING":"",n.toneMapping!==an?Ve.tonemapping_pars_fragment:"",n.toneMapping!==an?s0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,n0("linearToOutputTexel",n.outputColorSpace),r0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`);if(a=rl(a),a=Uh(a,n),a=Fh(a,n),o=rl(o),o=Uh(o,n),o=Fh(o,n),a=Oh(a),o=Oh(o),n.isRawShaderMaterial!==!0)E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let R=E+m+a,v=E+p+o,M=Lh(s,s.VERTEX_SHADER,R),A=Lh(s,s.FRAGMENT_SHADER,v);if(s.attachShader(S,M),s.attachShader(S,A),n.index0AttributeName!==void 0)s.bindAttribLocation(S,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(S,0,"position");s.linkProgram(S);function T(L){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(A)||"",I=U.trim(),q=G.trim(),V=C.trim(),se=!0,Z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(se=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,S,M,A);else{let ne=Nh(s,M,"vertex"),ae=Nh(s,A,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+ne+`
`+ae)}else if(I!=="")De("WebGLProgram: Program Info Log:",I);else if(q===""||V==="")Z=!1;if(Z)L.diagnostics={runnable:se,programLog:I,vertexShader:{log:q,prefix:m},fragmentShader:{log:V,prefix:p}}}s.deleteShader(M),s.deleteShader(A),y=new ws(s,S),b=l0(s,S)}let y;this.getUniforms=function(){if(y===void 0)T(this);return y};let b;this.getAttributes=function(){if(b===void 0)T(this);return b};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(H===!1)H=s.getProgramParameter(S,jg);return H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=A,this}class jh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);if(i.has(t)===!1)i.add(t),t.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new Qh(e),t.set(e,n);return n}}class Qh{constructor(e){this.id=w0++,this.code=e,this.usedTimes=0}}function E0(e){return e===ai||e===or||e===lr}function A0(e,t,n,i,s,r){let a=new fr,o=new jh,l=new Set,c=[],d=new Map,{logarithmicDepthBuffer:u,precision:h}=i,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){if(l.add(y),y===0)return"uv";return`uv${y}`}function S(y,b,H,L,U,G){let C=L.fog,I=U.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,se=t.get(y.envMap||q,V),Z=!!se&&se.mapping===fs?se.image.height:null,ne=f[y.type];if(y.precision!==null){if(h=i.getMaxPrecision(y.precision),h!==y.precision)De("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead.")}let ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Pe=ae!==void 0?ae.length:0,Ce=0;if(I.morphAttributes.position!==void 0)Ce=1;if(I.morphAttributes.normal!==void 0)Ce=2;if(I.morphAttributes.color!==void 0)Ce=3;let We,ke,P,B;if(ne){let ct=Bt[ne];We=ct.vertexShader,ke=ct.fragmentShader}else{We=y.vertexShader,ke=y.fragmentShader;let ct=o.getVertexShaderStage(y),et=o.getFragmentShaderStage(y);o.update(y,ct,et),P=ct.id,B=et.id}let k=e.getRenderTarget(),K=e.state.buffers.depth.getReversed(),te=U.isInstancedMesh===!0,j=U.isBatchedMesh===!0,Ee=!!y.map,de=!!y.matcap,Ne=!!se,Be=!!y.aoMap,Fe=!!y.lightMap,qe=!!y.bumpMap&&y.wireframe===!1,$e=!!y.normalMap,_t=!!y.displacementMap,dt=!!y.emissiveMap,ft=!!y.metalnessMap,D=!!y.roughnessMap,bt=y.anisotropy>0,je=y.clearcoat>0,at=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,N=y.sheen>0,Y=y.transmission>0,re=bt&&!!y.anisotropyMap,ce=je&&!!y.clearcoatMap,fe=je&&!!y.clearcoatNormalMap,Q=je&&!!y.clearcoatRoughnessMap,ie=_&&!!y.iridescenceMap,_e=_&&!!y.iridescenceThicknessMap,we=N&&!!y.sheenColorMap,he=N&&!!y.sheenRoughnessMap,le=!!y.specularMap,Ie=!!y.specularColorMap,Le=!!y.specularIntensityMap,Qe=Y&&!!y.transmissionMap,O=Y&&!!y.thicknessMap,pe=!!y.gradientMap,ee=!!y.alphaMap,me=y.alphaTest>0,be=!!y.alphaHash,oe=!!y.extensions,xe=an;if(y.toneMapped){if(k===null||k.isXRRenderTarget===!0)xe=e.toneMapping}let ze={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:ke,defines:y.defines,customVertexShaderID:P,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:j,batchingColor:j&&U._colorsTexture!==null,instancing:te,instancingColor:te&&U.instanceColor!==null,instancingMorph:te&&U.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:de,envMap:Ne,envMapMode:Ne&&se.mapping,envMapCubeUVHeight:Z,aoMap:Be,lightMap:Fe,bumpMap:qe,normalMap:$e,displacementMap:_t,emissiveMap:dt,normalMapObjectSpace:$e&&y.normalMapType===ah,normalMapTangentSpace:$e&&y.normalMapType===go,packedNormalMap:$e&&y.normalMapType===go&&E0(y.normalMap.format),metalnessMap:ft,roughnessMap:D,anisotropy:bt,anisotropyMap:re,clearcoat:je,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Q,dispersion:at,retroreflection:w,iridescence:_,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:N,sheenColorMap:we,sheenRoughnessMap:he,specularMap:le,specularColorMap:Ie,specularIntensityMap:Le,transmission:Y,transmissionMap:Qe,thicknessMap:O,gradientMap:pe,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:be,combine:y.combine,mapUv:Ee&&g(y.map.channel),aoMapUv:Be&&g(y.aoMap.channel),lightMapUv:Fe&&g(y.lightMap.channel),bumpMapUv:qe&&g(y.bumpMap.channel),normalMapUv:$e&&g(y.normalMap.channel),displacementMapUv:_t&&g(y.displacementMap.channel),emissiveMapUv:dt&&g(y.emissiveMap.channel),metalnessMapUv:ft&&g(y.metalnessMap.channel),roughnessMapUv:D&&g(y.roughnessMap.channel),anisotropyMapUv:re&&g(y.anisotropyMap.channel),clearcoatMapUv:ce&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(y.sheenRoughnessMap.channel),specularMapUv:le&&g(y.specularMap.channel),specularColorMapUv:Ie&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:Qe&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:ee&&g(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($e||bt),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ee||ee),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&$e===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ce,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&H.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:dt&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(y){let b=[];if(y.shaderID)b.push(y.shaderID);else b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID);if(y.defines!==void 0)for(let H in y.defines)b.push(H),b.push(y.defines[H]);if(y.isRawShaderMaterial===!1)p(b,y),E(b,y),b.push(e.outputColorSpace);return b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){if(a.disableAll(),b.instancing)a.enable(0);if(b.instancingColor)a.enable(1);if(b.instancingMorph)a.enable(2);if(b.matcap)a.enable(3);if(b.envMap)a.enable(4);if(b.normalMapObjectSpace)a.enable(5);if(b.normalMapTangentSpace)a.enable(6);if(b.clearcoat)a.enable(7);if(b.iridescence)a.enable(8);if(b.alphaTest)a.enable(9);if(b.vertexColors)a.enable(10);if(b.vertexAlphas)a.enable(11);if(b.vertexUv1s)a.enable(12);if(b.vertexUv2s)a.enable(13);if(b.vertexUv3s)a.enable(14);if(b.vertexTangents)a.enable(15);if(b.anisotropy)a.enable(16);if(b.alphaHash)a.enable(17);if(b.batching)a.enable(18);if(b.dispersion)a.enable(19);if(b.retroreflection)a.enable(24);if(b.batchingColor)a.enable(20);if(b.gradientMap)a.enable(21);if(b.packedNormalMap)a.enable(22);if(b.vertexNormals)a.enable(23);if(y.push(a.mask),a.disableAll(),b.fog)a.enable(0);if(b.useFog)a.enable(1);if(b.flatShading)a.enable(2);if(b.logarithmicDepthBuffer)a.enable(3);if(b.reversedDepthBuffer)a.enable(4);if(b.skinning)a.enable(5);if(b.morphTargets)a.enable(6);if(b.morphNormals)a.enable(7);if(b.morphColors)a.enable(8);if(b.premultipliedAlpha)a.enable(9);if(b.shadowMapEnabled)a.enable(10);if(b.doubleSided)a.enable(11);if(b.flipSided)a.enable(12);if(b.useDepthPacking)a.enable(13);if(b.dithering)a.enable(14);if(b.transmission)a.enable(15);if(b.sheen)a.enable(16);if(b.opaque)a.enable(17);if(b.pointsUvs)a.enable(18);if(b.decodeVideoTexture)a.enable(19);if(b.decodeVideoTextureEmissive)a.enable(20);if(b.alphaToCoverage)a.enable(21);if(b.numLightProbeGrids>0)a.enable(22);if(b.hasPositionAttribute)a.enable(23);y.push(a.mask)}function R(y){let b=f[y.type],H;if(b){let L=Bt[b];H=vs.clone(L.uniforms)}else H=y.uniforms;return H}function v(y,b){let H=d.get(b);if(H!==void 0)++H.usedTimes;else H=new S0(e,b,y,s),c.push(H),d.set(b,H);return H}function M(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:T}}function T0(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);if(o===void 0)o={},e.set(a,o);return o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function R0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function zh(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function kh(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;if(h.isInstancedMesh)f+=2;if(h.isSkinnedMesh)f+=1;return f}function o(h,f,g,S,m,p){let E=e[t];if(E===void 0)E={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},e[t]=E;else E.id=h.id,E.object=h,E.geometry=f,E.material=g,E.materialVariant=a(h),E.groupOrder=S,E.renderOrder=h.renderOrder,E.z=m,E.group=p;return t++,E}function l(h,f,g,S,m,p,E){if(E.reversedDepth===!0)m=-m;let R=o(h,f,g,S,m,p);if(g.transmission>0)i.push(R);else if(g.transparent===!0)s.push(R);else n.push(R)}function c(h,f,g,S,m,p){let E=o(h,f,g,S,m,p);if(g.transmission>0)i.unshift(E);else if(g.transparent===!0)s.unshift(E);else n.unshift(E)}function d(h,f){if(n.length>1)n.sort(h||R0);if(i.length>1)i.sort(f||zh);if(s.length>1)s.sort(f||zh)}function u(){for(let h=t,f=e.length;h<f;h++){let g=e[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function C0(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new kh,e.set(i,[a]);else if(s>=r.length)a=new kh,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function P0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new z,color:new Ke};break;case"SpotLight":n={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function I0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}function D0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function N0(e){let t=new P0,n=I0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new mt,a=new mt;function o(c){let d=0,u=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,E=0,R=0,v=0,M=0,A=0,T=0,y=0,b=0,H=0;c.sort(D0);for(let U=0,G=c.length;U<G;U++){let C=c[U],{color:I,intensity:q,distance:V}=C,se=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===ai)se=C.shadow.map.texture;else se=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)d+=I.r*q,u+=I.g*q,h+=I.b*q;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(C.sh.coefficients[Z],q);H++}else if(C.isSunLight){let Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ne=C.shadow,ae=n.get(C);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[g]=ae,i.sunShadowMap[g]=se;let Pe=ne.getViewportCount();for(let Ce=0;Ce<Pe;Ce++)i.sunShadowMatrix[S+Ce]=ne.getMatrix(Ce),i.sunShadowCascade[S+Ce]=ne._cascadeData[Ce];S+=Pe,g++}i.sun[f]=Z,f++}else if(C.isDirectionalLight){let Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ne=C.shadow,ae=n.get(C);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,i.directionalShadow[m]=ae,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=C.shadow.matrix,M++}i.directional[m]=Z,m++}else if(C.isSpotLight){let Z=t.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(I).multiplyScalar(q),Z.distance=V,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,i.spot[E]=Z;let ne=C.shadow;if(C.map){if(i.spotLightMap[y]=C.map,y++,ne.updateMatrices(C),C.castShadow)b++}if(i.spotLightMatrix[E]=ne.matrix,C.castShadow){let ae=n.get(C);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,i.spotShadow[E]=ae,i.spotShadowMap[E]=se,T++}E++}else if(C.isRectAreaLight){let Z=t.get(C);Z.color.copy(I).multiplyScalar(q),Z.halfWidth.set(C.width*0.5,0,0),Z.halfHeight.set(0,C.height*0.5,0),i.rectArea[R]=Z,R++}else if(C.isPointLight){let Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){let ne=C.shadow,ae=n.get(C);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,i.pointShadow[p]=ae,i.pointShadowMap[p]=se,i.pointShadowMatrix[p]=C.shadow.matrix,A++}i.point[p]=Z,p++}else if(C.isHemisphereLight){let Z=t.get(C);Z.skyColor.copy(C.color).multiplyScalar(q),Z.groundColor.copy(C.groundColor).multiplyScalar(q),i.hemi[v]=Z,v++}}if(R>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2;else i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2;i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;let L=i.hash;if(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==E||L.rectAreaLength!==R||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==A||L.numSpotShadows!==T||L.numSpotMaps!==y||L.numLightProbes!==H)i.sun.length=f,i.directional.length=m,i.spot.length=E,i.rectArea.length=R,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=H,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=E,L.rectAreaLength=R,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=A,L.numSpotShadows=T,L.numSpotMaps=y,L.numLightProbes=H,i.version=L0++}function l(c,d){let u=0,h=0,f=0,g=0,S=0,m=0,p=d.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){let v=c[E];if(v.isSunLight){let M=i.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(v.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=i.rectArea[S];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*0.5,0,0),M.halfHeight.set(0,v.height*0.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Hh(e){let t=new N0(e),n=[],i=[],s=[];function r(h){u.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function d(h){t.setupView(n,h)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function U0(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;if(a===void 0)o=new Hh(e),t.set(s,[o]);else if(r>=a.length)o=new Hh(e),a.push(o);else o=a[r];return o}function i(){t=new WeakMap}return{get:n,dispose:i}}function k0(e,t,n){let i=new xr,s=new Ze,r=new Ze,a=new st,o=new Lo,l=new Do,c={},d=n.maxTextureSize,u={[zi]:Ht,[Ht]:zi,[mn]:mn},h=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:F0,fragmentShader:O0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let S=new Yt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let p=this.type;this.render=function(A,T,y){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===bc)De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us;let b=e.getRenderTarget(),H=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),U=e.state;if(U.setBlending(gn),U.buffers.depth.getReversed()===!0)U.buffers.color.setClear(0,0,0,0);else U.buffers.color.setClear(1,1,1,1);U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;if(G)T.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((I)=>I.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,I=A.length;C<I;C++){let q=A[C],V=q.shadow;if(V===void 0){De("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),s.x>d||s.y>d){if(s.x>d)r.x=Math.floor(d/se.x),s.x=r.x*se.x,V.mapSize.x=r.x;if(s.y>d)r.y=Math.floor(d/se.y),s.y=r.y*se.y,V.mapSize.y=r.y}let Z=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Z,V.map===null||G===!0){if(V.map!==null){if(V.map.depthTexture!==null)V.map.depthTexture.dispose(),V.map.depthTexture=null;V.map.dispose()}if(this.type===Bi){if(q.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new qt(s.x,s.y,{format:ai,type:_n,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new li(s.x,s.y,Dn),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=si,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn}else{if(q.isPointLight)V.map=new al(s.x),V.map.depthTexture=new Co(s.x,$n);else V.map=new qt(s.x,s.y),V.map.depthTexture=new li(s.x,s.y,$n);if(V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=si,this.type===us)V.map.depthTexture.compareFunction=Z?hr:cr,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt;else V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn}V.camera.updateProjectionMatrix()}if(V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y))V.map.setSize(s.x,s.y);let ne=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();if(q.isPointLight!==!0)V.updateMatrices(q,y);for(let ae=0;ae<ne;ae++){let Pe=V.getCamera(ae);if(q.isPointLight){let{camera:Ce,matrix:We}=V,ke=q.distance||Ce.far;if(ke!==Ce.far)Ce.far=ke,Ce.updateProjectionMatrix();Ms.setFromMatrixPosition(q.matrixWorld),Ce.position.copy(Ms),nl.copy(Ce.position),nl.add(B0[ae]),Ce.up.copy(z0[ae]),Ce.lookAt(nl),Ce.updateMatrixWorld(),We.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Gh.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gh,Ce.coordinateSystem,Ce.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,ae),e.clear();else{if(ae===0)e.setRenderTarget(V.map),e.clear();let Ce=V.getViewport(ae);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),U.viewport(a)}i=V.getFrustum(ae),v(T,y,Pe,q,this.type)}if(V.isPointLightShadow!==!0&&this.type===Bi)E(V,y);V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(b,H,L)};function E(A,T){let y=t.update(S);if(h.defines.VSM_SAMPLES!==A.blurSamples)h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new qt(s.x,s.y,{format:ai,type:_n});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(T,null,y,h,S,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(T,null,y,f,S,null)}function R(A,T,y,b){let H=null,L=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)H=L;else if(H=y.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let U=H.uuid,G=T.uuid,C=c[U];if(C===void 0)C={},c[U]=C;let I=C[G];if(I===void 0)I=H.clone(),C[G]=I,T.addEventListener("dispose",M);H=I}if(H.visible=T.visible,H.wireframe=T.wireframe,b===Bi)H.side=T.shadowSide!==null?T.shadowSide:T.side;else H.side=T.shadowSide!==null?T.shadowSide:u[T.side];if(H.alphaMap=T.alphaMap,H.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,H.map=T.map,H.clipShadows=T.clipShadows,H.clippingPlanes=T.clippingPlanes,H.clipIntersection=T.clipIntersection,H.displacementMap=T.displacementMap,H.displacementScale=T.displacementScale,H.displacementBias=T.displacementBias,H.wireframeLinewidth=T.wireframeLinewidth,H.linewidth=T.linewidth,y.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let U=e.properties.get(H);U.light=y}return H}function v(A,T,y,b,H){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&H===Bi)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let G=t.update(A),C=A.material;if(Array.isArray(C)){let I=G.groups;for(let q=0,V=I.length;q<V;q++){let se=I[q],Z=C[se.materialIndex];if(Z&&Z.visible){let ne=R(A,Z,b,H);A.onBeforeShadow(e,A,T,y,G,ne,se),e.renderBufferDirect(y,null,G,ne,A,se),A.onAfterShadow(e,A,T,y,G,ne,se)}}}else if(C.visible){let I=R(A,C,b,H);A.onBeforeShadow(e,A,T,y,G,I,null),e.renderBufferDirect(y,null,G,I,A,null),A.onAfterShadow(e,A,T,y,G,I,null)}}}let U=A.children;for(let G=0,C=U.length;G<C;G++)v(U[G],T,y,b,H)}function M(A){A.target.removeEventListener("dispose",M);for(let y in c){let b=c[y],H=A.target.uuid;if(H in b)b[H].dispose(),delete b[H]}}}function H0(e,t){function n(){let O=!1,pe=new st,ee=null,me=new st(0,0,0,0);return{setMask:function(be){if(ee!==be&&!O)e.colorMask(be,be,be,be),ee=be},setLocked:function(be){O=be},setClear:function(be,oe,xe,ze,ct){if(ct===!0)be*=ze,oe*=ze,xe*=ze;if(pe.set(be,oe,xe,ze),me.equals(pe)===!1)e.clearColor(be,oe,xe,ze),me.copy(pe)},reset:function(){O=!1,ee=null,me.set(-1,0,0,0)}}}function i(){let O=!1,pe=!1,ee=null,me=null,be=null;return{setReversed:function(oe){if(pe!==oe){let xe=t.get("EXT_clip_control");if(oe)xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT);else xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT);pe=oe;let ze=be;be=null,this.setClear(ze)}},getReversed:function(){return pe},setTest:function(oe){if(oe)k(e.DEPTH_TEST);else K(e.DEPTH_TEST)},setMask:function(oe){if(ee!==oe&&!O)e.depthMask(oe),ee=oe},setFunc:function(oe){if(pe)oe=_h[oe];if(me!==oe){switch(oe){case kc:e.depthFunc(e.NEVER);break;case Hc:e.depthFunc(e.ALWAYS);break;case Gc:e.depthFunc(e.LESS);break;case Ea:e.depthFunc(e.LEQUAL);break;case Vc:e.depthFunc(e.EQUAL);break;case Wc:e.depthFunc(e.GEQUAL);break;case Xc:e.depthFunc(e.GREATER);break;case qc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=oe}},setLocked:function(oe){O=oe},setClear:function(oe){if(be!==oe){if(be=oe,pe)oe=1-oe;e.clearDepth(oe)}},reset:function(){O=!1,ee=null,me=null,be=null,pe=!1}}}function s(){let O=!1,pe=null,ee=null,me=null,be=null,oe=null,xe=null,ze=null,ct=null;return{setTest:function(et){if(!O)if(et)k(e.STENCIL_TEST);else K(e.STENCIL_TEST)},setMask:function(et){if(pe!==et&&!O)e.stencilMask(et),pe=et},setFunc:function(et,hn,En){if(ee!==et||me!==hn||be!==En)e.stencilFunc(et,hn,En),ee=et,me=hn,be=En},setOp:function(et,hn,En){if(oe!==et||xe!==hn||ze!==En)e.stencilOp(et,hn,En),oe=et,xe=hn,ze=En},setLocked:function(et){O=et},setClear:function(et){if(ct!==et)e.clearStencil(et),ct=et},reset:function(){O=!1,pe=null,ee=null,me=null,be=null,oe=null,xe=null,ze=null,ct=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,E=null,R=null,v=null,M=null,A=null,T=null,y=new Ke(0,0,0),b=0,H=!1,L=null,U=null,G=null,C=null,I=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,Z=e.getParameter(e.VERSION);if(Z.indexOf("WebGL")!==-1)se=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=se>=1;else if(Z.indexOf("OpenGL ES")!==-1)se=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=se>=2;let ne=null,ae={},Pe=e.getParameter(e.SCISSOR_BOX),Ce=e.getParameter(e.VIEWPORT),We=new st().fromArray(Pe),ke=new st().fromArray(Ce);function P(O,pe,ee,me){let be=new Uint8Array(4),oe=e.createTexture();e.bindTexture(O,oe),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xe=0;xe<ee;xe++)if(O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY)e.texImage3D(pe,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,be);else e.texImage2D(pe+xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,be);return oe}let B={};B[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(e.DEPTH_TEST),a.setFunc(Ea),qe(!1),$e(ba),k(e.CULL_FACE),Be(gn);function k(O){if(d[O]!==!0)e.enable(O),d[O]=!0}function K(O){if(d[O]!==!1)e.disable(O),d[O]=!1}function te(O,pe){if(h[O]!==pe){if(e.bindFramebuffer(O,pe),h[O]=pe,O===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=pe;if(O===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=pe;return!0}return!1}function j(O,pe){let ee=g,me=!1;if(O){if(ee=f.get(pe),ee===void 0)ee=[],f.set(pe,ee);let be=O.textures;if(ee.length!==be.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,xe=be.length;oe<xe;oe++)ee[oe]=e.COLOR_ATTACHMENT0+oe;ee.length=be.length,me=!0}}else if(ee[0]!==e.BACK)ee[0]=e.BACK,me=!0;if(me)e.drawBuffers(ee)}function Ee(O){if(S!==O)return e.useProgram(O),S=O,!0;return!1}let de={[ki]:e.FUNC_ADD,[Mc]:e.FUNC_SUBTRACT,[Sc]:e.FUNC_REVERSE_SUBTRACT};de[wc]=e.MIN,de[js]=e.MAX;let Ne={[Ec]:e.ZERO,[Ac]:e.ONE,[Tc]:e.SRC_COLOR,[Cc]:e.SRC_ALPHA,[Uc]:e.SRC_ALPHA_SATURATE,[Dc]:e.DST_COLOR,[Ic]:e.DST_ALPHA,[Rc]:e.ONE_MINUS_SRC_COLOR,[Pc]:e.ONE_MINUS_SRC_ALPHA,[Nc]:e.ONE_MINUS_DST_COLOR,[Lc]:e.ONE_MINUS_DST_ALPHA,[Fc]:e.CONSTANT_COLOR,[Oc]:e.ONE_MINUS_CONSTANT_COLOR,[Bc]:e.CONSTANT_ALPHA,[zc]:e.ONE_MINUS_CONSTANT_ALPHA};function Be(O,pe,ee,me,be,oe,xe,ze,ct,et){if(O===gn){if(m===!0)K(e.BLEND),m=!1;return}if(m===!1)k(e.BLEND),m=!0;if(O!==Ks){if(O!==p||et!==H){if(E!==ki||M!==ki)e.blendEquation(e.FUNC_ADD),E=ki,M=ki;if(et)switch(O){case ds:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ma:e.blendFunc(e.ONE,e.ONE);break;case Sa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case wa:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ue("WebGLState: Invalid blending: ",O);break}else switch(O){case ds:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ma:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Sa:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wa:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",O);break}R=null,v=null,A=null,T=null,y.set(0,0,0),b=0,p=O,H=et}return}if(be=be||pe,oe=oe||ee,xe=xe||me,pe!==E||be!==M)e.blendEquationSeparate(de[pe],de[be]),E=pe,M=be;if(ee!==R||me!==v||oe!==A||xe!==T)e.blendFuncSeparate(Ne[ee],Ne[me],Ne[oe],Ne[xe]),R=ee,v=me,A=oe,T=xe;if(ze.equals(y)===!1||ct!==b)e.blendColor(ze.r,ze.g,ze.b,ct),y.copy(ze),b=ct;p=O,H=!1}function Fe(O,pe){O.side===mn?K(e.CULL_FACE):k(e.CULL_FACE);let ee=O.side===Ht;if(pe)ee=!ee;qe(ee),O.blending===ds&&O.transparent===!1?Be(gn):Be(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let me=O.stencilWrite;if(o.setTest(me),me)o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?k(e.SAMPLE_ALPHA_TO_COVERAGE):K(e.SAMPLE_ALPHA_TO_COVERAGE)}function qe(O){if(L!==O){if(O)e.frontFace(e.CW);else e.frontFace(e.CCW);L=O}}function $e(O){if(O!==yc){if(k(e.CULL_FACE),O!==U)if(O===ba)e.cullFace(e.BACK);else if(O===vc)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else K(e.CULL_FACE);U=O}function _t(O){if(O!==G){if(V)e.lineWidth(O);G=O}}function dt(O,pe,ee){if(O){if(k(e.POLYGON_OFFSET_FILL),C!==pe||I!==ee){if(C=pe,I=ee,a.getReversed())pe=-pe;e.polygonOffset(pe,ee)}}else K(e.POLYGON_OFFSET_FILL)}function ft(O){if(O)k(e.SCISSOR_TEST);else K(e.SCISSOR_TEST)}function D(O){if(O===void 0)O=e.TEXTURE0+q-1;if(ne!==O)e.activeTexture(O),ne=O}function bt(O,pe,ee){if(ee===void 0)if(ne===null)ee=e.TEXTURE0+q-1;else ee=ne;let me=ae[ee];if(me===void 0)me={type:void 0,texture:void 0},ae[ee]=me;if(me.type!==O||me.texture!==pe){if(ne!==ee)e.activeTexture(ee),ne=ee;e.bindTexture(O,pe||B[O]),me.type=O,me.texture=pe}}function je(){let O=ae[ne];if(O!==void 0&&O.type!==void 0)e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function at(){try{e.compressedTexImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function _(){try{e.texSubImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function N(){try{e.texSubImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function re(){try{e.compressedTexSubImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function ce(){try{e.texStorage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function fe(){try{e.texStorage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function Q(){try{e.texImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function ie(){try{e.texImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function _e(O){if(u[O]!==void 0)return u[O];else return e.getParameter(O)}function we(O,pe){if(u[O]!==pe)e.pixelStorei(O,pe),u[O]=pe}function he(O){if(We.equals(O)===!1)e.scissor(O.x,O.y,O.z,O.w),We.copy(O)}function le(O){if(ke.equals(O)===!1)e.viewport(O.x,O.y,O.z,O.w),ke.copy(O)}function Ie(O,pe){let ee=c.get(pe);if(ee===void 0)ee=new WeakMap,c.set(pe,ee);let me=ee.get(O);if(me===void 0)me=e.getUniformBlockIndex(pe,O.name),ee.set(O,me)}function Le(O,pe){let me=c.get(pe).get(O);if(l.get(pe)!==me)e.uniformBlockBinding(pe,me,O.__bindingPointIndex),l.set(pe,me)}function Qe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},u={},ne=null,ae={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,E=null,R=null,v=null,M=null,A=null,T=null,y=new Ke(0,0,0),b=0,H=!1,L=null,U=null,G=null,C=null,I=null,We.set(0,0,e.canvas.width,e.canvas.height),ke.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:K,bindFramebuffer:te,drawBuffers:j,useProgram:Ee,setBlending:Be,setMaterial:Fe,setFlipSided:qe,setCullFace:$e,setLineWidth:_t,setPolygonOffset:dt,setScissorTest:ft,activeTexture:D,bindTexture:bt,unbindTexture:je,compressedTexImage2D:at,compressedTexImage3D:w,texImage2D:Q,texImage3D:ie,pixelStorei:we,getParameter:_e,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:ce,texStorage3D:fe,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:Y,compressedTexSubImage3D:re,scissor:he,viewport:le,reset:Qe}}function G0(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap,u=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function S(w,_){return g?new OffscreenCanvas(w,_):cs("canvas")}function m(w,_,N){let Y=1,re=at(w);if(re.width>N||re.height>N)Y=N/Math.max(re.width,re.height);if(Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ce=Math.floor(Y*re.width),fe=Math.floor(Y*re.height);if(h===void 0)h=S(ce,fe);let Q=_?S(ce,fe):h;return Q.width=ce,Q.height=fe,Q.getContext("2d").drawImage(w,0,0,ce,fe),De("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ce+"x"+fe+")."),Q}else{if("data"in w)De("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+").");return w}return w}function p(w){return w.generateMipmaps}function E(w){e.generateMipmap(w)}function R(w){if(w.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function v(w,_,N,Y,re,ce=!1){if(w!==null){if(e[w]!==void 0)return e[w];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;if(Y){if(fe=t.get("EXT_texture_norm16"),!fe)De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Q=_;if(_===e.RED){if(N===e.FLOAT)Q=e.R32F;if(N===e.HALF_FLOAT)Q=e.R16F;if(N===e.UNSIGNED_BYTE)Q=e.R8;if(N===e.UNSIGNED_SHORT&&fe)Q=fe.R16_EXT;if(N===e.SHORT&&fe)Q=fe.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(N===e.UNSIGNED_BYTE)Q=e.R8UI;if(N===e.UNSIGNED_SHORT)Q=e.R16UI;if(N===e.UNSIGNED_INT)Q=e.R32UI;if(N===e.BYTE)Q=e.R8I;if(N===e.SHORT)Q=e.R16I;if(N===e.INT)Q=e.R32I}if(_===e.RG){if(N===e.FLOAT)Q=e.RG32F;if(N===e.HALF_FLOAT)Q=e.RG16F;if(N===e.UNSIGNED_BYTE)Q=e.RG8;if(N===e.UNSIGNED_SHORT&&fe)Q=fe.RG16_EXT;if(N===e.SHORT&&fe)Q=fe.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(N===e.UNSIGNED_BYTE)Q=e.RG8UI;if(N===e.UNSIGNED_SHORT)Q=e.RG16UI;if(N===e.UNSIGNED_INT)Q=e.RG32UI;if(N===e.BYTE)Q=e.RG8I;if(N===e.SHORT)Q=e.RG16I;if(N===e.INT)Q=e.RG32I}if(_===e.RGB_INTEGER){if(N===e.UNSIGNED_BYTE)Q=e.RGB8UI;if(N===e.UNSIGNED_SHORT)Q=e.RGB16UI;if(N===e.UNSIGNED_INT)Q=e.RGB32UI;if(N===e.BYTE)Q=e.RGB8I;if(N===e.SHORT)Q=e.RGB16I;if(N===e.INT)Q=e.RGB32I}if(_===e.RGBA_INTEGER){if(N===e.UNSIGNED_BYTE)Q=e.RGBA8UI;if(N===e.UNSIGNED_SHORT)Q=e.RGBA16UI;if(N===e.UNSIGNED_INT)Q=e.RGBA32UI;if(N===e.BYTE)Q=e.RGBA8I;if(N===e.SHORT)Q=e.RGBA16I;if(N===e.INT)Q=e.RGBA32I}if(_===e.RGB){if(N===e.UNSIGNED_SHORT&&fe)Q=fe.RGB16_EXT;if(N===e.SHORT&&fe)Q=fe.RGB16_SNORM_EXT;if(N===e.UNSIGNED_INT_5_9_9_9_REV)Q=e.RGB9_E5;if(N===e.UNSIGNED_INT_10F_11F_11F_REV)Q=e.R11F_G11F_B10F}if(_===e.RGBA){let ie=ce?xo:Ye.getTransfer(re);if(N===e.FLOAT)Q=e.RGBA32F;if(N===e.HALF_FLOAT)Q=e.RGBA16F;if(N===e.UNSIGNED_BYTE)Q=ie===lt?e.SRGB8_ALPHA8:e.RGBA8;if(N===e.UNSIGNED_SHORT&&fe)Q=fe.RGBA16_EXT;if(N===e.SHORT&&fe)Q=fe.RGBA16_SNORM_EXT;if(N===e.UNSIGNED_SHORT_4_4_4_4)Q=e.RGBA4;if(N===e.UNSIGNED_SHORT_5_5_5_1)Q=e.RGB5_A1}if(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)t.get("EXT_color_buffer_float");return Q}function M(w,_){let N;if(w){if(_===null||_===$n||_===Gi)N=e.DEPTH24_STENCIL8;else if(_===Dn)N=e.DEPTH32F_STENCIL8;else if(_===ms)N=e.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===$n||_===Gi)N=e.DEPTH_COMPONENT24;else if(_===Dn)N=e.DEPTH_COMPONENT32F;else if(_===ms)N=e.DEPTH_COMPONENT16;return N}function A(w,_){if(p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yn&&w.minFilter!==Gt)return Math.log2(Math.max(_.width,_.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return _.mipmaps.length;else return 1}function T(w){let _=w.target;if(_.removeEventListener("dispose",T),b(_),_.isVideoTexture)d.delete(_);if(_.isHTMLTexture)u.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),L(_)}function b(w){let _=i.get(w);if(_.__webglInit===void 0)return;let N=w.source,Y=f.get(N);if(Y){let re=Y[_.__cacheKey];if(re.usedTimes--,re.usedTimes===0)H(w);if(Object.keys(Y).length===0)f.delete(N)}i.remove(w)}function H(w){let _=i.get(w);e.deleteTexture(_.__webglTexture);let N=w.source,Y=f.get(N);delete Y[_.__cacheKey],a.memory.textures--}function L(w){let _=i.get(w);if(w.depthTexture)w.depthTexture.dispose(),i.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let re=0;re<_.__webglFramebuffer[Y].length;re++)e.deleteFramebuffer(_.__webglFramebuffer[Y][re]);else e.deleteFramebuffer(_.__webglFramebuffer[Y]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[Y]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)if(_.__webglColorRenderbuffer[Y])e.deleteRenderbuffer(_.__webglColorRenderbuffer[Y])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=w.textures;for(let Y=0,re=N.length;Y<re;Y++){let ce=i.get(N[Y]);if(ce.__webglTexture)e.deleteTexture(ce.__webglTexture),a.memory.textures--;i.remove(N[Y])}i.remove(w)}let U=0;function G(){U=0}function C(){return U}function I(w){U=w}function q(){let w=U;if(w>=s.maxTextures)De("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures);return U+=1,w}function V(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function se(w,_){let N=i.get(w);if(w.isVideoTexture)bt(w);if(w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){let Y=w.image;if(Y===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,w,_);return}}else if(w.isExternalTexture)N.__webglTexture=w.sourceTexture?w.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+_)}function Z(w,_){let N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){K(N,w,_);return}else if(w.isExternalTexture)N.__webglTexture=w.sourceTexture?w.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+_)}function ne(w,_){let N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){K(N,w,_);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+_)}function ae(w,_){let N=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){te(N,w,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+_)}let Pe={[Jc]:e.REPEAT,[tr]:e.CLAMP_TO_EDGE,[Kc]:e.MIRRORED_REPEAT},Ce={[Yn]:e.NEAREST,[jc]:e.NEAREST_MIPMAP_NEAREST,[ps]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[nr]:e.LINEAR_MIPMAP_NEAREST,[ii]:e.LINEAR_MIPMAP_LINEAR},We={[lh]:e.NEVER,[fh]:e.ALWAYS,[ch]:e.LESS,[cr]:e.LEQUAL,[hh]:e.EQUAL,[hr]:e.GEQUAL,[uh]:e.GREATER,[dh]:e.NOTEQUAL};function ke(w,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===nr||_.magFilter===ps||_.magFilter===ii||_.minFilter===Gt||_.minFilter===nr||_.minFilter===ps||_.minFilter===ii))De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(w,e.TEXTURE_WRAP_S,Pe[_.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,Pe[_.wrapT]),w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)e.texParameteri(w,e.TEXTURE_WRAP_R,Pe[_.wrapR]);if(e.texParameteri(w,e.TEXTURE_MAG_FILTER,Ce[_.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Ce[_.minFilter]),_.compareFunction)e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,We[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yn)return;if(_.minFilter!==ps&&_.minFilter!==ii)return;if(_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function P(w,_){let N=!1;if(w.__webglInit===void 0)w.__webglInit=!0,_.addEventListener("dispose",T);let Y=_.source,re=f.get(Y);if(re===void 0)re={},f.set(Y,re);let ce=V(_);if(ce!==w.__cacheKey){if(re[ce]===void 0)re[ce]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,N=!0;re[ce].usedTimes++;let fe=re[w.__cacheKey];if(fe!==void 0){if(re[w.__cacheKey].usedTimes--,fe.usedTimes===0)H(_)}w.__cacheKey=ce,w.__webglTexture=re[ce].texture}return N}function B(w,_,N){return Math.floor(Math.floor(w/N)/_)}function k(w,_,N,Y){let ce=w.updateRanges;if(ce.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,N,Y,_.data);else{ce.sort((we,he)=>we.start-he.start);let fe=0;for(let we=1;we<ce.length;we++){let he=ce[fe],le=ce[we],Ie=he.start+he.count,Le=B(le.start,_.width,4),Qe=B(he.start,_.width,4);if(le.start<=Ie+1&&Le===Qe&&B(le.start+le.count-1,_.width,4)===Le)he.count=Math.max(he.count,le.start+le.count-he.start);else++fe,ce[fe]=le}ce.length=fe+1;let Q=n.getParameter(e.UNPACK_ROW_LENGTH),ie=n.getParameter(e.UNPACK_SKIP_PIXELS),_e=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let we=0,he=ce.length;we<he;we++){let le=ce[we],Ie=Math.floor(le.start/4),Le=Math.ceil(le.count/4),Qe=Ie%_.width,O=Math.floor(Ie/_.width),pe=Le,ee=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Qe,O,pe,1,N,Y,_.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function K(w,_,N){let Y=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)Y=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)Y=e.TEXTURE_3D;let re=P(w,_),ce=_.source;n.bindTexture(Y,w.__webglTexture,e.TEXTURE0+N);let fe=i.get(ce);if(ce.version!==fe.__version||re===!0){if(n.activeTexture(e.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ee=Ye.getPrimaries(Ye.workingColorSpace),me=_.colorSpace===oi?null:Ye.getPrimaries(_.colorSpace),be=_.colorSpace===oi||ee===me?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=m(_.image,!1,s.maxTextureSize);ie=je(_,ie);let _e=r.convert(_.format,_.colorSpace),we=r.convert(_.type),he=v(_.internalFormat,_e,we,_.normalized,_.colorSpace,_.isVideoTexture);ke(Y,_);let le,Ie=_.mipmaps,Le=_.isVideoTexture!==!0,Qe=fe.__version===void 0||re===!0,O=ce.dataReady,pe=A(_,ie);if(_.isDepthTexture){if(he=M(_.format===ri,_.type),Qe)if(Le)n.texStorage2D(e.TEXTURE_2D,1,he,ie.width,ie.height);else n.texImage2D(e.TEXTURE_2D,0,he,ie.width,ie.height,0,_e,we,null)}else if(_.isDataTexture)if(Ie.length>0){if(Le&&Qe)n.texStorage2D(e.TEXTURE_2D,pe,he,Ie[0].width,Ie[0].height);for(let ee=0,me=Ie.length;ee<me;ee++)if(le=Ie[ee],Le){if(O)n.texSubImage2D(e.TEXTURE_2D,ee,0,0,le.width,le.height,_e,we,le.data)}else n.texImage2D(e.TEXTURE_2D,ee,he,le.width,le.height,0,_e,we,le.data);_.generateMipmaps=!1}else if(Le){if(Qe)n.texStorage2D(e.TEXTURE_2D,pe,he,ie.width,ie.height);if(O)k(_,ie,_e,we)}else n.texImage2D(e.TEXTURE_2D,0,he,ie.width,ie.height,0,_e,we,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(Le&&Qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,pe,he,Ie[0].width,Ie[0].height,ie.depth);for(let ee=0,me=Ie.length;ee<me;ee++)if(le=Ie[ee],_.format!==xn)if(_e!==null)if(Le){if(O)if(_.layerUpdates.size>0){let be=Zo(le.width,le.height,_.format,_.type);for(let oe of _.layerUpdates){let xe=le.data.subarray(oe*be/le.data.BYTES_PER_ELEMENT,(oe+1)*be/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,oe,le.width,le.height,1,_e,xe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ie.depth,_e,le.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,he,le.width,le.height,ie.depth,0,le.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Le){if(O)n.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ie.depth,_e,we,le.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,ee,he,le.width,le.height,ie.depth,0,_e,we,le.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(Le&&Qe)n.texStorage2D(e.TEXTURE_2D,pe,he,Ie[0].width,Ie[0].height);for(let ee=0,me=Ie.length;ee<me;ee++)if(le=Ie[ee],_.format!==xn)if(_e!==null)if(Le){if(O)n.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,le.width,le.height,_e,le.data)}else n.compressedTexImage2D(e.TEXTURE_2D,ee,he,le.width,le.height,0,le.data);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Le){if(O)n.texSubImage2D(e.TEXTURE_2D,ee,0,0,le.width,le.height,_e,we,le.data)}else n.texImage2D(e.TEXTURE_2D,ee,he,le.width,le.height,0,_e,we,le.data)}else if(_.isDataArrayTexture)if(Le){if(Qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,pe,he,ie.width,ie.height,ie.depth);if(O)if(_.layerUpdates.size>0){let ee=Zo(ie.width,ie.height,_.format,_.type);for(let me of _.layerUpdates){let be=ie.data.subarray(me*ee/ie.data.BYTES_PER_ELEMENT,(me+1)*ee/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,_e,we,be)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,we,ie.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,he,ie.width,ie.height,ie.depth,0,_e,we,ie.data);else if(_.isData3DTexture)if(Le){if(Qe)n.texStorage3D(e.TEXTURE_3D,pe,he,ie.width,ie.height,ie.depth);if(O)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,we,ie.data)}else n.texImage3D(e.TEXTURE_3D,0,he,ie.width,ie.height,ie.depth,0,_e,we,ie.data);else if(_.isFramebufferTexture){if(Qe)if(Le)n.texStorage2D(e.TEXTURE_2D,pe,he,ie.width,ie.height);else{let ee=ie.width,me=ie.height;for(let be=0;be<pe;be++)n.texImage2D(e.TEXTURE_2D,be,he,ee,me,0,_e,we,null),ee>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let ee=e.canvas;if(!ee.hasAttribute("layoutsubtree"))ee.setAttribute("layoutsubtree","true");if(ie.parentNode!==ee){ee.appendChild(ie),u.add(_),ee.onpaint=(me)=>{let be=me.changedElements;for(let oe of u)if(be.includes(oe.image))oe.needsUpdate=!0},ee.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ie);else{let{RGBA:be,RGBA:oe,UNSIGNED_BYTE:xe}=e;e.texElementImage2D(e.TEXTURE_2D,0,be,oe,xe,ie)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Le&&Qe){let ee=at(Ie[0]);n.texStorage2D(e.TEXTURE_2D,pe,he,ee.width,ee.height)}for(let ee=0,me=Ie.length;ee<me;ee++)if(le=Ie[ee],Le){if(O)n.texSubImage2D(e.TEXTURE_2D,ee,0,0,_e,we,le)}else n.texImage2D(e.TEXTURE_2D,ee,he,_e,we,le);_.generateMipmaps=!1}else if(Le){if(Qe){let ee=at(ie);n.texStorage2D(e.TEXTURE_2D,pe,he,ee.width,ee.height)}if(O)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,we,ie)}else n.texImage2D(e.TEXTURE_2D,0,he,_e,we,ie);if(p(_))E(Y);if(fe.__version=ce.version,_.onUpdate)_.onUpdate(_)}w.__version=_.version}function te(w,_,N){if(_.image.length!==6)return;let Y=P(w,_),re=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+N);let ce=i.get(re);if(re.version!==ce.__version||Y===!0){n.activeTexture(e.TEXTURE0+N);let fe=Ye.getPrimaries(Ye.workingColorSpace),Q=_.colorSpace===oi?null:Ye.getPrimaries(_.colorSpace),ie=_.colorSpace===oi||fe===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let _e=_.isCompressedTexture||_.image[0].isCompressedTexture,we=_.image[0]&&_.image[0].isDataTexture,he=[];for(let oe=0;oe<6;oe++){if(!_e&&!we)he[oe]=m(_.image[oe],!0,s.maxCubemapSize);else he[oe]=we?_.image[oe].image:_.image[oe];he[oe]=je(_,he[oe])}let le=he[0],Ie=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),Qe=v(_.internalFormat,Ie,Le,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,pe=ce.__version===void 0||Y===!0,ee=re.dataReady,me=A(_,le);ke(e.TEXTURE_CUBE_MAP,_);let be;if(_e){if(O&&pe)n.texStorage2D(e.TEXTURE_CUBE_MAP,me,Qe,le.width,le.height);for(let oe=0;oe<6;oe++){be=he[oe].mipmaps;for(let xe=0;xe<be.length;xe++){let ze=be[xe];if(_.format!==xn)if(Ie!==null)if(O){if(ee)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,ze.width,ze.height,Ie,ze.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,Qe,ze.width,ze.height,0,ze.data);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(O){if(ee)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,ze.width,ze.height,Ie,Le,ze.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,Qe,ze.width,ze.height,0,Ie,Le,ze.data)}}}else{if(be=_.mipmaps,O&&pe){if(be.length>0)me++;let oe=at(he[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,me,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(we){if(O){if(ee)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,he[oe].width,he[oe].height,Ie,Le,he[oe].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,he[oe].width,he[oe].height,0,Ie,Le,he[oe].data);for(let xe=0;xe<be.length;xe++){let ct=be[xe].image[oe].image;if(O){if(ee)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,ct.width,ct.height,Ie,Le,ct.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,Qe,ct.width,ct.height,0,Ie,Le,ct.data)}}else{if(O){if(ee)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,Le,he[oe])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Ie,Le,he[oe]);for(let xe=0;xe<be.length;xe++){let ze=be[xe];if(O){if(ee)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,Ie,Le,ze.image[oe])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,Qe,Ie,Le,ze.image[oe])}}}if(p(_))E(e.TEXTURE_CUBE_MAP);if(ce.__version=re.version,_.onUpdate)_.onUpdate(_)}w.__version=_.version}function j(w,_,N,Y,re,ce){let fe=r.convert(N.format,N.colorSpace),Q=r.convert(N.type),ie=v(N.internalFormat,fe,Q,N.normalized,N.colorSpace),_e=i.get(_),we=i.get(N);if(we.__renderTarget=_,!_e.__hasExternalTextures){let he=Math.max(1,_.width>>ce),le=Math.max(1,_.height>>ce);if(re===e.TEXTURE_3D||re===e.TEXTURE_2D_ARRAY)n.texImage3D(re,ce,ie,he,le,_.depth,0,fe,Q,null);else n.texImage2D(re,ce,ie,he,le,0,fe,Q,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,w),D(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,re,we.__webglTexture,0,ft(_));else if(re===e.TEXTURE_2D||re>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,Y,re,we.__webglTexture,ce);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(w,_,N){if(e.bindRenderbuffer(e.RENDERBUFFER,w),_.depthBuffer){let Y=_.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,ce=M(_.stencilBuffer,re),fe=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(D(_))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft(_),ce,_.width,_.height);else if(N)e.renderbufferStorageMultisample(e.RENDERBUFFER,ft(_),ce,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,ce,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,w)}else{let Y=_.textures;for(let re=0;re<Y.length;re++){let ce=Y[re],fe=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),ie=v(ce.internalFormat,fe,Q,ce.normalized,ce.colorSpace);if(D(_))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft(_),ie,_.width,_.height);else if(N)e.renderbufferStorageMultisample(e.RENDERBUFFER,ft(_),ie,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,ie,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(w,_,N){let Y=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=i.get(_.depthTexture);if(re.__renderTarget=_,!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0;if(Y){if(re.__webglInit===void 0)re.__webglInit=!0,_.depthTexture.addEventListener("dispose",T);if(re.__webglTexture===void 0){re.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),ke(e.TEXTURE_CUBE_MAP,_.depthTexture);let _e=r.convert(_.depthTexture.format),we=r.convert(_.depthTexture.type),he;if(_.depthTexture.format===si)he=e.DEPTH_COMPONENT24;else if(_.depthTexture.format===ri)he=e.DEPTH24_STENCIL8;for(let le=0;le<6;le++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,_.width,_.height,0,_e,we,null)}}else se(_.depthTexture,0);let ce=re.__webglTexture,fe=ft(_),Q=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,ie=_.depthTexture.format===ri?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)if(D(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,Q,ce,0,fe);else e.framebufferTexture2D(e.FRAMEBUFFER,ie,Q,ce,0);else if(_.depthTexture.format===ri)if(D(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,Q,ce,0,fe);else e.framebufferTexture2D(e.FRAMEBUFFER,ie,Q,ce,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(w){let _=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(Y){let re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=Y}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)de(_.__webglFramebuffer[Y],w,Y);else{let Y=w.texture.mipmaps;if(Y&&Y.length>0)de(_.__webglFramebuffer[0],w,0);else de(_.__webglFramebuffer,w,0)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=e.createRenderbuffer(),Ee(_.__webglDepthbuffer[Y],w,!1);else{let re=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,ce)}}else{let Y=w.texture.mipmaps;if(Y&&Y.length>0)n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ee(_.__webglDepthbuffer,w,!1);else{let re=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,ce)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Be(w,_,N){let Y=i.get(w);if(_!==void 0)j(Y.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(N!==void 0)Ne(w)}function Fe(w){let _=w.texture,N=i.get(w),Y=i.get(_);w.addEventListener("dispose",y);let re=w.textures,ce=w.isWebGLCubeRenderTarget===!0,fe=re.length>1;if(!fe){if(Y.__webglTexture===void 0)Y.__webglTexture=e.createTexture();Y.__version=_.version,a.memory.textures++}if(ce){N.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[Q]=[];for(let ie=0;ie<_.mipmaps.length;ie++)N.__webglFramebuffer[Q][ie]=e.createFramebuffer()}else N.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)N.__webglFramebuffer[Q]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(fe)for(let Q=0,ie=re.length;Q<ie;Q++){let _e=i.get(re[Q]);if(_e.__webglTexture===void 0)_e.__webglTexture=e.createTexture(),a.memory.textures++}if(w.samples>0&&D(w)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Q=0;Q<re.length;Q++){let ie=re[Q];N.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let _e=r.convert(ie.format,ie.colorSpace),we=r.convert(ie.type),he=v(ie.internalFormat,_e,we,ie.normalized,ie.colorSpace,w.isXRRenderTarget===!0),le=ft(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,le,he,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,N.__webglColorRenderbuffer[Q])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer)N.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(N.__webglDepthRenderbuffer,w,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(e.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)j(N.__webglFramebuffer[Q][ie],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else j(N.__webglFramebuffer[Q],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);if(p(_))E(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(fe){for(let Q=0,ie=re.length;Q<ie;Q++){let _e=re[Q],we=i.get(_e),he=e.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)he=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(he,we.__webglTexture),ke(he,_e),j(N.__webglFramebuffer,w,_e,e.COLOR_ATTACHMENT0+Q,he,0),p(_e))E(he)}n.unbindTexture()}else{let Q=e.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)Q=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(Q,Y.__webglTexture),ke(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)j(N.__webglFramebuffer[ie],w,_,e.COLOR_ATTACHMENT0,Q,ie);else j(N.__webglFramebuffer,w,_,e.COLOR_ATTACHMENT0,Q,0);if(p(_))E(Q);n.unbindTexture()}if(w.depthBuffer)Ne(w)}function qe(w){let _=w.textures;for(let N=0,Y=_.length;N<Y;N++){let re=_[N];if(p(re)){let ce=R(w),fe=i.get(re).__webglTexture;n.bindTexture(ce,fe),E(ce),n.unbindTexture()}}}let $e=[],_t=[];function dt(w){if(w.samples>0){if(D(w)===!1){let{textures:_,width:N,height:Y}=w,re=e.COLOR_BUFFER_BIT,ce=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(w),Q=_.length>1;if(Q)for(let _e=0;_e<_.length;_e++)n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ie=w.texture.mipmaps;if(ie&&ie.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(w.resolveDepthBuffer){if(w.depthBuffer)re|=e.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)re|=e.STENCIL_BUFFER_BIT}if(Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);let we=i.get(_[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,we,0)}if(e.blitFramebuffer(0,0,N,Y,0,0,N,Y,re,e.NEAREST),l===!0){if($e.length=0,_t.length=0,$e.push(e.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1)$e.push(ce),_t.push(ce),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_t);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,$e)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let _e=0;_e<_.length;_e++){n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);let we=i.get(_[_e]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,we,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function ft(w){return Math.min(s.maxSamples,w.samples)}function D(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(w){let _=a.render.frame;if(d.get(w)!==_)d.set(w,_),w.update()}function je(w,_){let{colorSpace:N,format:Y,type:re}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return _;if(N!==_o&&N!==oi)if(Ye.getTransfer(N)===lt){if(Y!==xn||re!==on)De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ue("WebGLTextures: Unsupported texture color space:",N);return _}function at(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)c.width=w.displayWidth,c.height=w.displayHeight;else c.width=w.width,c.height=w.height;return c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=C,this.setTextureUnits=I,this.setTexture2D=se,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=ae,this.rebindTextures=Be,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=j,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function V0(e,t){function n(i,s=oi){let r,a=Ye.getTransfer(s);if(i===on)return e.UNSIGNED_BYTE;if(i===Na)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ua)return e.UNSIGNED_SHORT_5_5_5_1;if(i===th)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===nh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qc)return e.BYTE;if(i===eh)return e.SHORT;if(i===ms)return e.UNSIGNED_SHORT;if(i===Da)return e.INT;if(i===$n)return e.UNSIGNED_INT;if(i===Dn)return e.FLOAT;if(i===_n)return e.HALF_FLOAT;if(i===ih)return e.ALPHA;if(i===sh)return e.RGB;if(i===xn)return e.RGBA;if(i===si)return e.DEPTH_COMPONENT;if(i===ri)return e.DEPTH_STENCIL;if(i===rh)return e.RED;if(i===Fa)return e.RED_INTEGER;if(i===ai)return e.RG;if(i===Oa)return e.RG_INTEGER;if(i===Ba)return e.RGBA_INTEGER;if(i===ir||i===sr||i===rr||i===ar)if(a===lt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===ka||i===Ha||i===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===or||i===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Wa)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qa)return r.COMPRESSED_R11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(i===or)return r.COMPRESSED_RG11_EAC;if(i===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Za||i===Ja||i===Ka||i===ja||i===Qa||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Za)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===to)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===ho||i===uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===co)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===lr||i===mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Gi)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}class eu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vr(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new ys(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}function Y0(e,t){function n(m,p){if(m.matrixAutoUpdate===!0)m.updateMatrix();p.value.copy(m.matrix)}function i(m,p){if(p.color.getRGB(m.fogColor.value,Po(e)),p.isFog)m.fogNear.value=p.near,m.fogFar.value=p.far;else if(p.isFogExp2)m.fogDensity.value=p.density}function s(m,p,E,R,v){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(m,p);else if(p.isMeshLambertMaterial){if(r(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(m,p),u(m,p);else if(p.isMeshPhongMaterial){if(r(m,p),d(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(m,p),h(m,p),p.isMeshPhysicalMaterial)f(m,p,v)}else if(p.isMeshMatcapMaterial)r(m,p),g(m,p);else if(p.isMeshDepthMaterial)r(m,p);else if(p.isMeshDistanceMaterial)r(m,p),S(m,p);else if(p.isMeshNormalMaterial)r(m,p);else if(p.isLineBasicMaterial){if(a(m,p),p.isLineDashedMaterial)o(m,p)}else if(p.isPointsMaterial)l(m,p,E,R);else if(p.isSpriteMaterial)c(m,p);else if(p.isShadowMaterial)m.color.value.copy(p.color),m.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(m,p){if(m.opacity.value=p.opacity,p.color)m.diffuse.value.copy(p.color);if(p.emissive)m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.bumpMap){if(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht)m.bumpScale.value*=-1}if(p.normalMap){if(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht)m.normalScale.value.negate()}if(p.displacementMap)m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias;if(p.emissiveMap)m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform);if(p.specularMap)m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest;let E=t.get(p),{envMap:R,envMapRotation:v}=E;if(R){if(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(nu);m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio}if(p.lightMap)m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform);if(p.aoMap)m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform)}function a(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map)m.map.value=p.map,n(p.map,m.mapTransform)}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,R){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=R*0.5,p.map)m.map.value=p.map,n(p.map,m.uvTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function c(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,0.0001)}function u(m,p){if(p.gradientMap)m.gradientMap.value=p.gradientMap}function h(m,p){if(m.metalness.value=p.metalness,p.metalnessMap)m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=p.roughness,p.roughnessMap)m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform);if(p.envMap)m.envMapIntensity.value=p.envMapIntensity}function f(m,p,E){if(m.ior.value=p.ior,p.sheen>0){if(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform);if(p.sheenRoughnessMap)m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform);if(p.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht)m.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)m.dispersion.value=p.dispersion;if(p.retroreflectivity>0)m.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform);if(p.iridescenceThicknessMap)m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(p.transmission>0){if(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap)m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=p.thickness,p.thicknessMap)m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap)m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform);if(p.specularIntensityMap)m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,p){if(p.matcap)m.matcap.value=p.matcap}function S(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $0(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let A=M.program;i.uniformBlockBinding(v,A)}function c(v,M){let A=s[v.id];if(A===void 0)m(v),A=d(v),s[v.id]=A,v.addEventListener("dispose",E);let T=M.program;i.updateUBOMapping(v,T);let y=t.render.frame;if(r[v.id]!==y)h(v),r[v.id]=y}function d(v){let M=u();v.__bindingPointIndex=M;let A=e.createBuffer(),{__size:T,usage:y}=v;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,T,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,A),A}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=s[v.id],{uniforms:A,__cache:T}=v;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let y=0,b=A.length;y<b;y++){let H=A[y];if(Array.isArray(H))for(let L=0,U=H.length;L<U;L++)f(H[L],y,L,T);else f(H,y,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,M,A,T){if(S(v,M,A,T)===!0){let{__offset:y,value:b}=v;if(Array.isArray(b)){let H=0;for(let L=0;L<b.length;L++){let U=b[L],G=p(U);if(g(U,v.__data,H),typeof U!=="number"&&typeof U!=="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U))H+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else g(b,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,v.__data)}}function g(v,M,A){if(typeof v==="number"||typeof v==="boolean")M[0]=v;else if(v.isMatrix3)M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0;else if(ArrayBuffer.isView(v))M.set(new v.constructor(v.buffer,v.byteOffset,M.length));else v.toArray(M,A)}function S(v,M,A,T){let y=v.value,b=M+"_"+A;if(T[b]===void 0){if(typeof y==="number"||typeof y==="boolean")T[b]=y;else if(ArrayBuffer.isView(y))T[b]=y.slice();else T[b]=y.clone();return!0}else{let H=T[b];if(typeof y==="number"||typeof y==="boolean"){if(H!==y)return T[b]=y,!0}else if(ArrayBuffer.isView(y))return!0;else if(H.equals(y)===!1)return H.copy(y),!0}return!1}function m(v){let M=v.uniforms,A=0,T=16;for(let b=0,H=M.length;b<H;b++){let L=Array.isArray(M[b])?M[b]:[M[b]];for(let U=0,G=L.length;U<G;U++){let C=L[U],I=Array.isArray(C.value)?C.value:[C.value];for(let q=0,V=I.length;q<V;q++){let se=I[q],Z=p(se),ne=A%T,ae=ne%Z.boundary,Pe=ne+ae;if(A+=ae,Pe!==0&&T-Pe<Z.storage)A+=T-Pe;C.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=Z.storage}}}let y=A%T;if(y>0)A+=T-y;return v.__size=A,v.__cache={},this}function p(v){let M={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")M.boundary=4,M.storage=4;else if(v.isVector2)M.boundary=8,M.storage=8;else if(v.isVector3||v.isColor)M.boundary=16,M.storage=12;else if(v.isVector4)M.boundary=16,M.storage=16;else if(v.isMatrix3)M.boundary=48,M.storage=48;else if(v.isMatrix4)M.boundary=64,M.storage=64;else if(v.isTexture)De("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))M.boundary=16,M.storage=v.byteLength;else De("WebGLRenderer: Unsupported uniform value type.",v);return M}function E(v){let M=v.target;M.removeEventListener("dispose",E);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function R(){for(let v in s)e.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}function J0(){if(vn===null)vn=new Ro(Z0,16,16,ai,_n),vn.name="DFG_LUT",vn.minFilter=Gt,vn.magFilter=Gt,vn.wrapS=tr,vn.wrapT=tr,vn.generateMipmaps=!1,vn.needsUpdate=!0;return vn}class ol{constructor(e={}){let{canvas:t=ph(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:h=on}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let g=h,S=new Set([Ba,Oa,Fa]),m=new Set([on,$n,ms,Gi,Na,Ua]),p=new Uint32Array(4),E=new Int32Array(4),R=new z,v=null,M=null,A=[],T=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,H=!1,L=null,U=null,G=null,C=null;this._outputColorSpace=oh;let I=0,q=0,V=null,se=-1,Z=null,ne=new st,ae=new st,Pe=null,Ce=new Ke(0),We=0,{width:ke,height:P}=t,B=1,k=null,K=null,te=new st(0,0,ke,P),j=new st(0,0,ke,P),Ee=!1,de=new xr,Ne=!1,Be=!1,Fe=new mt,qe=new z,$e=new st,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function ft(){return V===null?B:1}let D=n;function bt(x,F){return t.getContext(x,F)}let je,at,w,_,N,Y,re,ce,fe,Q,ie,_e,we,he,le,Ie,Le,Qe,O,pe,ee,me,be;try{let x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${xc}`);if(t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",et,!1),D===null){if(D=bt("webgl2",x),D===null)if(bt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(x){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Ue("WebGLRenderer: "+x.message),x}function oe(){if(je=new ig(D),je.init(),ee=new V0(D,je),at=new Ym(D,je,e,ee),w=new H0(D,je),at.reversedDepthBuffer&&u)w.buffers.depth.setReversed(!0);U=D.createFramebuffer(),G=D.createFramebuffer(),C=D.createFramebuffer(),_=new ag(D),N=new T0,Y=new G0(D,je,w,N,at,ee,_),re=new ng(b),ce=new lf(D),me=new Xm(D,ce),fe=new sg(D,ce,_,me),Q=new lg(D,fe,ce,me,_),Qe=new og(D,at,Y),le=new $m(N),ie=new A0(b,re,je,at,me,le),_e=new Y0(b,N),we=new C0,he=new U0(je),Le=new Wm(b,re,w,Q,f,o),Ie=new k0(b,Q,at),be=new $0(D,_,at,w),O=new qm(D,je,_),pe=new rg(D,je,_),_.programs=ie.programs,b.capabilities=at,b.extensions=je,b.properties=N,b.renderLists=we,b.shadowMap=Ie,b.state=w,b.info=_}if(g!==on)y=new hg(g,t.width,t.height,a,i,s);let xe=new tu(b,D);this.xr=xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=je.get("WEBGL_lose_context");if(x)x.loseContext()},this.forceContextRestore=function(){let x=je.get("WEBGL_lose_context");if(x)x.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(x){if(x===void 0)return;B=x,this.setSize(ke,P,!1)},this.getSize=function(x){return x.set(ke,P)},this.setSize=function(x,F,J=!0){if(xe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ke=x,P=F,t.width=Math.floor(x*B),t.height=Math.floor(F*B),J===!0)t.style.width=x+"px",t.style.height=F+"px";if(y!==null)y.setSize(t.width,t.height);this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(ke*B,P*B).floor()},this.setDrawingBufferSize=function(x,F,J){ke=x,P=F,B=J,t.width=Math.floor(x*J),t.height=Math.floor(F*J),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(g===on){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(te)},this.setViewport=function(x,F,J,W){if(x.isVector4)te.set(x.x,x.y,x.z,x.w);else te.set(x,F,J,W);w.viewport(ne.copy(te).multiplyScalar(B).round())},this.getScissor=function(x){return x.copy(j)},this.setScissor=function(x,F,J,W){if(x.isVector4)j.set(x.x,x.y,x.z,x.w);else j.set(x,F,J,W);w.scissor(ae.copy(j).multiplyScalar(B).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(x){w.setScissorTest(Ee=x)},this.setOpaqueSort=function(x){k=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,J=!0){let W=0;if(x){let X=!1;if(V!==null){let ve=V.texture.format;X=S.has(ve)}if(X){let ve=V.texture.type,Se=m.has(ve),ye=Le.getClearColor(),Ae=Le.getClearAlpha(),{r:Re,g:Ge,b:Xe}=ye;if(Se)p[0]=Re,p[1]=Ge,p[2]=Xe,p[3]=Ae,D.clearBufferuiv(D.COLOR,0,p);else E[0]=Re,E[1]=Ge,E[2]=Xe,E[3]=Ae,D.clearBufferiv(D.COLOR,0,E)}else W|=D.COLOR_BUFFER_BIT}if(F)W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(J)W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(W!==0)D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),L=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Le.dispose(),we.dispose(),he.dispose(),N.dispose(),re.dispose(),Q.dispose(),me.dispose(),be.dispose(),ie.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",kl),xe.removeEventListener("sessionend",Hl),Jn.stop()};function ze(x){x.preventDefault(),hs("WebGLRenderer: Context Lost."),H=!0}function ct(){hs("WebGLRenderer: Context Restored."),H=!1;let x=_.autoReset,F=Ie.enabled,J=Ie.autoUpdate,W=Ie.needsUpdate,X=Ie.type;oe(),_.autoReset=x,Ie.enabled=F,Ie.autoUpdate=J,Ie.needsUpdate=W,Ie.type=X}function et(x){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function hn(x){let F=x.target;F.removeEventListener("dispose",hn),En(F)}function En(x){Ku(x),N.remove(x)}function Ku(x){let F=N.get(x).programs;if(F!==void 0){if(F.forEach(function(J){ie.releaseProgram(J)}),x.isShaderMaterial)ie.releaseShaderCache(x)}}this.renderBufferDirect=function(x,F,J,W,X,ve){if(F===null)F=_t;let Se=X.isMesh&&X.matrixWorld.determinantAffine()<0,ye=ed(x,F,J,W,X);w.setMaterial(W,Se);let Ae=J.index,Re=1;if(W.wireframe===!0){if(Ae=fe.getWireframeAttribute(J),Ae===void 0)return;Re=2}let Ge=J.drawRange,Xe=J.attributes.position,Te=Ge.start*Re,tt=(Ge.start+Ge.count)*Re;if(ve!==null)Te=Math.max(Te,ve.start*Re),tt=Math.min(tt,(ve.start+ve.count)*Re);if(Ae!==null)Te=Math.max(Te,0),tt=Math.min(tt,Ae.count);else if(Xe!==void 0&&Xe!==null)Te=Math.max(Te,0),tt=Math.min(tt,Xe.count);let xt=tt-Te;if(xt<0||xt===1/0)return;me.setup(X,W,ye,J,Ae);let pt,ot=O;if(Ae!==null)pt=ce.get(Ae),ot=pe,ot.setIndex(pt);if(X.isMesh)if(W.wireframe===!0)w.setLineWidth(W.wireframeLinewidth*ft()),ot.setMode(D.LINES);else ot.setMode(D.TRIANGLES);else if(X.isLine){let Rt=W.linewidth;if(Rt===void 0)Rt=1;if(w.setLineWidth(Rt*ft()),X.isLineSegments)ot.setMode(D.LINES);else if(X.isLineLoop)ot.setMode(D.LINE_LOOP);else ot.setMode(D.LINE_STRIP)}else if(X.isPoints)ot.setMode(D.POINTS);else if(X.isSprite)ot.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(!je.get("WEBGL_multi_draw")){let{_multiDrawStarts:Rt,_multiDrawCounts:Me,_multiDrawCount:Nt}=X,Je=Ae?ce.get(Ae).bytesPerElement:1,$t=N.get(W).currentProgram.getUniforms();for(let un=0;un<Nt;un++)$t.setValue(D,"_gl_DrawID",un),ot.render(Rt[un]/Je,Me[un])}else ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ot.renderInstances(Te,xt,X.count);else if(J.isInstancedBufferGeometry){let Rt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Me=Math.min(J.instanceCount,Rt);ot.renderInstances(Te,xt,Me)}else ot.render(Te,xt)};function zl(x,F,J,W){if(L!==null&&x.isNodeMaterial)L.setObject(W,x);if(Ne===!0)le.setState(x,J,!1);if(x.transparent===!0&&x.side===mn&&x.forceSinglePass===!1)x.side=Ht,x.needsUpdate=!0,Ps(x,F,W),x.side=zi,x.needsUpdate=!0,Ps(x,F,W),x.side=mn;else Ps(x,F,W)}this.compile=function(x,F,J=null){if(J===null)J=x;if(L!==null)L.renderStart(x,F,J);if(M=he.get(J),M.init(F),T.push(M),J.traverseVisible(function(X){if(X.isLight&&X.layers.test(F.layers)){if(M.pushLight(X),X.castShadow)M.pushShadow(X)}}),x!==J)x.traverseVisible(function(X){if(X.isLight&&X.layers.test(F.layers)){if(M.pushLight(X),X.castShadow)M.pushShadow(X)}});if(M.setupLights(),L!==null)L.updateLights(M.state.lightsArray);if(Be=this.localClippingEnabled,Ne=le.init(this.clippingPlanes,Be),Ne===!0)le.setGlobalState(this.clippingPlanes,F);if(L!==null)Ie.render(M.state.shadowsArray,J,F);let W=new Set;if(x.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ve=X.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){let ye=ve[Se];zl(ye,J,F,X),W.add(ye)}else zl(ve,J,F,X),W.add(ve)}),M=T.pop(),L!==null)L.renderEnd();return W},this.compileAsync=function(x,F,J=null){let W=this.compile(x,F,J);return new Promise((X)=>{function ve(){if(W.forEach(function(Se){let Ae=N.get(Se).currentProgram;if(Ae===void 0||Ae.isReady())W.delete(Se)}),W.size===0){X(x);return}setTimeout(ve,10)}if(je.get("KHR_parallel_shader_compile")!==null)ve();else setTimeout(ve,10)})};let Zr=null;function ju(x){if(Zr)Zr(x)}function kl(){Jn.stop()}function Hl(){Jn.start()}let Jn=new Vh;if(Jn.setAnimationLoop(ju),typeof self<"u")Jn.setContext(self);this.setAnimationLoop=function(x){Zr=x,xe.setAnimationLoop(x),x===null?Jn.stop():Jn.start()},xe.addEventListener("sessionstart",kl),xe.addEventListener("sessionend",Hl),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(L!==null)L.renderStart(x,F);let J=xe.enabled===!0&&xe.isPresenting===!0,W=y!==null&&(V===null||J)&&y.begin(b,V);if(x.matrixWorldAutoUpdate===!0)x.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(xe.enabled===!0&&xe.isPresenting===!0&&(y===null||y.isCompositing()===!1)){if(xe.cameraAutoUpdate===!0)xe.updateCamera(F);F=xe.getCamera()}if(x.isScene===!0)x.onBeforeRender(b,x,F,V);if(M=he.get(x,T.length),M.init(F),M.state.textureUnits=Y.getTextureUnits(),T.push(M),Fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),de.setFromProjectionMatrix(Fe,vo,F.reversedDepth),Be=this.localClippingEnabled,Ne=le.init(this.clippingPlanes,Be),v=we.get(x,A.length),v.init(),A.push(v),xe.enabled===!0&&xe.isPresenting===!0){let Se=b.xr.getDepthSensingMesh();if(Se!==null)Jr(Se,F,-1/0,b.sortObjects)}if(Jr(x,F,0,b.sortObjects),v.finish(),L!==null)L.updateLights(M.state.lightsArray);if(b.sortObjects===!0)v.sort(k,K);if(dt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,dt)Le.addToRenderList(v,x);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Ne===!0)le.beginShadows();let X=M.state.shadowsArray;if(Ie.render(X,x,F),Ne===!0)le.endShadows();if((W&&y.hasRenderPass())===!1){let Se=v.opaque,ye=v.transmissive;if(M.setupLights(),F.isArrayCamera){let Ae=F.cameras;if(ye.length>0)for(let Re=0,Ge=Ae.length;Re<Ge;Re++){let Xe=Ae[Re];Vl(Se,ye,x,Xe)}if(dt)Le.render(x);for(let Re=0,Ge=Ae.length;Re<Ge;Re++){let Xe=Ae[Re];Gl(v,x,Xe,Xe.viewport)}}else{if(ye.length>0)Vl(Se,ye,x,F);if(dt)Le.render(x);Gl(v,x,F)}}if(V!==null&&q===0)Y.updateMultisampleRenderTarget(V),Y.updateRenderTargetMipmap(V);if(W)y.end(b);if(x.isScene===!0)x.onAfterRender(b,x,F);if(me.resetDefaultState(),se=-1,Z=null,T.pop(),T.length>0){if(M=T[T.length-1],Y.setTextureUnits(M.state.textureUnits),Ne===!0)le.setGlobalState(b.clippingPlanes,M.state.camera)}else M=null;if(A.pop(),A.length>0)v=A[A.length-1];else v=null;if(L!==null)L.renderEnd()};function Jr(x,F,J,W){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)J=x.renderOrder;else if(x.isLOD){if(x.autoUpdate===!0)x.update(F)}else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight){if(M.pushLight(x),x.castShadow)M.pushShadow(x)}else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(de)){if(W)$e.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);let Se=Q.update(x),ye=x.material;if(ye.visible)v.push(x,Se,ye,J,$e.z,null,F)}}else if(x.isMesh||x.isLine||x.isPoints){if(!x.frustumCulled||x.intersectsFrustum(de)){let Se=Q.update(x),ye=x.material;if(W){if(x.boundingSphere!==void 0){if(x.boundingSphere===null)x.computeBoundingSphere();$e.copy(x.boundingSphere.center)}else{if(Se.boundingSphere===null)Se.computeBoundingSphere();$e.copy(Se.boundingSphere.center)}$e.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)}if(Array.isArray(ye)){let Ae=Se.groups;for(let Re=0,Ge=Ae.length;Re<Ge;Re++){let Xe=Ae[Re],Te=ye[Xe.materialIndex];if(Te&&Te.visible)v.push(x,Se,Te,J,$e.z,Xe,F)}}else if(ye.visible)v.push(x,Se,ye,J,$e.z,null,F)}}}let ve=x.children;for(let Se=0,ye=ve.length;Se<ye;Se++)Jr(ve[Se],F,J,W)}function Gl(x,F,J,W){let{opaque:X,transmissive:ve,transparent:Se}=x;if(M.setupLightsView(J),Ne===!0)le.setGlobalState(b.clippingPlanes,J);if(W)w.viewport(ne.copy(W));if(X.length>0)Cs(X,F,J);if(ve.length>0)Cs(ve,F,J);if(Se.length>0)Cs(Se,F,J);w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Vl(x,F,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let Te=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new qt(1,1,{generateMipmaps:!0,type:Te?_n:on,minFilter:ii,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let ve=M.state.transmissionRenderTarget[W.id],Se=W.viewport||ne;ve.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);let ye=b.getRenderTarget(),Ae=b.getActiveCubeFace(),Re=b.getActiveMipmapLevel();if(b.setRenderTarget(ve),b.getClearColor(Ce),We=b.getClearAlpha(),We<1)b.setClearColor(16777215,0.5);if(b.clear(),dt)Le.render(J);let Ge=b.toneMapping;b.toneMapping=an;let Xe=W.viewport;if(W.viewport!==void 0)W.viewport=void 0;if(M.setupLightsView(W),Ne===!0)le.setGlobalState(b.clippingPlanes,W);if(Cs(x,J,W),Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve),je.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let tt=0,xt=F.length;tt<xt;tt++){let pt=F[tt],{object:ot,geometry:Rt,material:Me,group:Nt}=pt;if(Me.side===mn&&ot.layers.test(W.layers)){let Je=Me.side;Me.side=Ht,Me.needsUpdate=!0,Wl(ot,J,W,Rt,Me,Nt),Me.side=Je,Me.needsUpdate=!0,Te=!0}}if(Te===!0)Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve)}if(b.setRenderTarget(ye,Ae,Re),b.setClearColor(Ce,We),Xe!==void 0)W.viewport=Xe;b.toneMapping=Ge}function Cs(x,F,J){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ve=x.length;X<ve;X++){let Se=x[X],{object:ye,geometry:Ae,group:Re}=Se,Ge=Se.material;if(Ge.allowOverride===!0&&W!==null)Ge=W;if(ye.layers.test(J.layers))Wl(ye,F,J,Ae,Ge,Re)}}function Wl(x,F,J,W,X,ve){if(L!==null&&X.isNodeMaterial)L.setObject(x,X);if(x.onBeforeRender(b,F,J,W,X,ve),x.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),X.onBeforeRender(b,F,J,W,x,ve),X.transparent===!0&&X.side===mn&&X.forceSinglePass===!1)X.side=Ht,X.needsUpdate=!0,b.renderBufferDirect(J,F,W,X,x,ve),X.side=zi,X.needsUpdate=!0,b.renderBufferDirect(J,F,W,X,x,ve),X.side=mn;else b.renderBufferDirect(J,F,W,X,x,ve);x.onAfterRender(b,F,J,W,X,ve)}function Ps(x,F,J){if(F.isScene!==!0)F=_t;let W=N.get(x),X=M.state.lights,ve=M.state.shadowsArray,Se=X.state.version,ye=ie.getParameters(x,X.state,ve,F,J,M.state.lightProbeGridArray),Ae=ie.getProgramCacheKey(ye),Re=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let Ge=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;if(W.envMap=re.get(x.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Re===void 0)x.addEventListener("dispose",hn),Re=new Map,W.programs=Re;let Xe=Re.get(Ae);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===Se)return ql(x,ye),Xe}else{if(ye.uniforms=ie.getUniforms(x),L!==null&&x.isNodeMaterial)L.build(x,J,ye);x.onBeforeCompile(ye,b),Xe=ie.acquireProgram(ye,Ae),Re.set(Ae,Xe),W.uniforms=ye.uniforms}let Te=W.uniforms;if(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)Te.clippingPlanes=le.uniform;if(ql(x,ye),W.needsLights=nd(x),W.lightsStateVersion=Se,W.needsLights)Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.sunLights.value=X.state.sun,Te.sunLightShadows.value=X.state.sunShadow,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.sunShadowMatrix.value=X.state.sunShadowMatrix,Te.sunShadowCascade.value=X.state.sunShadowCascade,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix;return W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=Xe,W.uniformsList=null,Xe}function Xl(x){if(x.uniformsList===null){let F=x.currentProgram.getUniforms();x.uniformsList=ws.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function ql(x,F){let J=N.get(x);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Qu(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;R.setFromMatrixPosition(F.matrixWorld);for(let J=0,W=x.length;J<W;J++){let X=x[J];if(X.texture!==null&&X.boundingBox.containsPoint(R))return X}return null}function ed(x,F,J,W,X){if(F.isScene!==!0)F=_t;Y.resetTextureUnits();let ve=F.fog,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,ye=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ye.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Re=re.get(W.envMap||Se,Ae),Ge=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!J.morphAttributes.position,tt=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color,pt=an;if(W.toneMapped){if(V===null||V.isXRRenderTarget===!0)pt=b.toneMapping}let ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Rt=ot!==void 0?ot.length:0,Me=N.get(W),Nt=M.state.lights;if(Ne===!0){if(Be===!0||x!==Z){let ht=x===Z&&W.id===se;le.setState(W,x,ht)}}let Je=!1;if(W.version===Me.__version){if(Me.needsLights&&Me.lightsStateVersion!==Nt.state.version)Je=!0;else if(Me.outputColorSpace!==ye)Je=!0;else if(X.isBatchedMesh&&Me.batching===!1)Je=!0;else if(!X.isBatchedMesh&&Me.batching===!0)Je=!0;else if(X.isBatchedMesh&&Me.batchingColor===!0&&X._colorsTexture===null)Je=!0;else if(X.isBatchedMesh&&Me.batchingColor===!1&&X._colorsTexture!==null)Je=!0;else if(X.isInstancedMesh&&Me.instancing===!1)Je=!0;else if(!X.isInstancedMesh&&Me.instancing===!0)Je=!0;else if(X.isSkinnedMesh&&Me.skinning===!1)Je=!0;else if(!X.isSkinnedMesh&&Me.skinning===!0)Je=!0;else if(X.isInstancedMesh&&Me.instancingColor===!0&&X.instanceColor===null)Je=!0;else if(X.isInstancedMesh&&Me.instancingColor===!1&&X.instanceColor!==null)Je=!0;else if(X.isInstancedMesh&&Me.instancingMorph===!0&&X.morphTexture===null)Je=!0;else if(X.isInstancedMesh&&Me.instancingMorph===!1&&X.morphTexture!==null)Je=!0;else if(Me.envMap!==Re)Je=!0;else if(W.fog===!0&&Me.fog!==ve)Je=!0;else if(Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==le.numPlanes||Me.numIntersection!==le.numIntersection))Je=!0;else if(Me.vertexAlphas!==Ge)Je=!0;else if(Me.vertexTangents!==Xe)Je=!0;else if(Me.morphTargets!==Te)Je=!0;else if(Me.morphNormals!==tt)Je=!0;else if(Me.morphColors!==xt)Je=!0;else if(Me.toneMapping!==pt)Je=!0;else if(Me.morphTargetsCount!==Rt)Je=!0;else if(!!Me.lightProbeGrid!==M.state.lightProbeGridArray.length>0)Je=!0}else Je=!0,Me.__version=W.version;let $t=Me.currentProgram;if(Je===!0){if($t=Ps(W,F,X),L&&W.isNodeMaterial)L.onUpdateProgram(W,$t,Me)}let un=!1,Bn=!1,_i=!1,rt=$t.getUniforms(),gt=Me.uniforms;if(w.useProgram($t.program))un=!0,Bn=!0,_i=!0;if(W.id!==se)se=W.id,Bn=!0;if(Me.needsLights){let ht=Qu(M.state.lightProbeGridArray,X);if(Me.lightProbeGrid!==ht)Me.lightProbeGrid=ht,Bn=!0}if(un||Z!==x){if(w.buffers.depth.getReversed()&&x.reversedDepth!==!0)x._reversedDepth=!0,x.updateProjectionMatrix();rt.setValue(D,"projectionMatrix",x.projectionMatrix),rt.setValue(D,"viewMatrix",x.matrixWorldInverse);let kn=rt.map.cameraPosition;if(kn!==void 0)kn.setValue(D,qe.setFromMatrixPosition(x.matrixWorld));if(at.logarithmicDepthBuffer)rt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2));if(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)rt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0);if(Z!==x)Z=x,Bn=!0,_i=!0}if(Me.needsLights){if(Nt.state.sunShadowMap.length>0)rt.setValue(D,"sunShadowMap",Nt.state.sunShadowMap,Y);if(Nt.state.directionalShadowMap.length>0)rt.setValue(D,"directionalShadowMap",Nt.state.directionalShadowMap,Y);if(Nt.state.spotShadowMap.length>0)rt.setValue(D,"spotShadowMap",Nt.state.spotShadowMap,Y);if(Nt.state.pointShadowMap.length>0)rt.setValue(D,"pointShadowMap",Nt.state.pointShadowMap,Y)}if(X.isSkinnedMesh){rt.setOptional(D,X,"bindMatrix"),rt.setOptional(D,X,"bindMatrixInverse");let ht=X.skeleton;if(ht){if(ht.boneTexture===null)ht.computeBoneTexture();rt.setValue(D,"boneTexture",ht.boneTexture,Y)}}if(X.isBatchedMesh){if(rt.setOptional(D,X,"batchingTexture"),rt.setValue(D,"batchingTexture",X._matricesTexture,Y),rt.setOptional(D,X,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",X._indirectTexture,Y),rt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null)rt.setValue(D,"batchingColorTexture",X._colorsTexture,Y)}let zn=J.morphAttributes;if(zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)Qe.update(X,J,$t);if(Bn||Me.receiveShadow!==X.receiveShadow)Me.receiveShadow=X.receiveShadow,rt.setValue(D,"receiveShadow",X.receiveShadow);if((W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null)gt.envMapIntensity.value=F.environmentIntensity;if(gt.dfgLUT!==void 0)gt.dfgLUT.value=J0();if(Bn){if(rt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Me.needsLights)td(gt,_i);if(ve&&W.fog===!0)_e.refreshFogUniforms(gt,ve);if(_e.refreshMaterialUniforms(gt,W,B,P,M.state.transmissionRenderTarget[x.id]),Me.needsLights&&Me.lightProbeGrid){let ht=Me.lightProbeGrid;gt.probesSH.value=ht.texture,gt.probesMin.value.copy(ht.boundingBox.min),gt.probesMax.value.copy(ht.boundingBox.max),gt.probesResolution.value.copy(ht.resolution)}ws.upload(D,Xl(Me),gt,Y)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0)ws.upload(D,Xl(Me),gt,Y),W.uniformsNeedUpdate=!1;if(W.isSpriteMaterial)rt.setValue(D,"center",X.center);if(rt.setValue(D,"modelViewMatrix",X.modelViewMatrix),rt.setValue(D,"normalMatrix",X.normalMatrix),rt.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let ht=W.uniformsGroups;for(let kn=0,xi=ht.length;kn<xi;kn++){let $l=ht[kn];be.update($l,$t),be.bind($l,$t)}}return $t}function td(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.sunLights.needsUpdate=F,x.sunLightShadows.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function nd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(x,F,J){let W=N.get(x);if(W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1)W.__useRenderToTexture=!1;N.get(x.texture).__webglTexture=F,N.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){let J=N.get(x);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,J=0){V=x,I=F,q=J;let W=null,X=!1,ve=!1;if(x){let ye=N.get(x);if(ye.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(D.FRAMEBUFFER,ye.__webglFramebuffer),ne.copy(x.viewport),ae.copy(x.scissor),Pe=x.scissorTest,w.viewport(ne),w.scissor(ae),w.setScissorTest(Pe),se=-1;return}else if(ye.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(ye.__hasExternalTextures)Y.rebindTextures(x,N.get(x.texture).__webglTexture,N.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ge=x.depthTexture;if(ye.__boundDepthTexture!==Ge){if(Ge!==null&&N.has(Ge)&&(x.width!==Ge.image.width||x.height!==Ge.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}let Ae=x.texture;if(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)ve=!0;let Re=N.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget){if(Array.isArray(Re[F]))W=Re[F][J];else W=Re[F];X=!0}else if(x.samples>0&&Y.useMultisampledRTT(x)===!1)W=N.get(x).__webglMultisampledFramebuffer;else if(Array.isArray(Re))W=Re[J];else W=Re;ne.copy(x.viewport),ae.copy(x.scissor),Pe=x.scissorTest}else ne.copy(te).multiplyScalar(B).floor(),ae.copy(j).multiplyScalar(B).floor(),Pe=Ee;if(J!==0)W=U;if(w.bindFramebuffer(D.FRAMEBUFFER,W))w.drawBuffers(x,W);if(w.viewport(ne),w.scissor(ae),w.setScissorTest(Pe),X){let ye=N.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,J)}else if(ve){let ye=F;for(let Ae=0;Ae<x.textures.length;Ae++){let Re=N.get(x.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,J,ye)}}else if(x!==null&&J!==0){let ye=N.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,J)}se=-1};function Yl(x){let F=N.get(x);if(F.__readFormat!==x.format||F.__readType!==x.type)F.__readFormat=x.format,F.__readType=x.type,F.__formatReadable=at.textureFormatReadable(x.format),F.__typeReadable=at.textureTypeReadable(x.type);return F}if(this.readRenderTargetPixels=function(x,F,J,W,X,ve,Se,ye=0){if(!(x&&x.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=N.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0)Ae=Ae[Se];if(Ae){w.bindFramebuffer(D.FRAMEBUFFER,Ae);try{let Re=x.textures[ye],{format:Ge,type:Xe}=Re;if(x.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+ye);let Te=Yl(Re);if(Te.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=x.width-W&&(J>=0&&J<=x.height-X))D.readPixels(F,J,W,X,ee.convert(Ge),ee.convert(Xe),ve)}finally{let Re=V!==null?N.get(V).__webglFramebuffer:null;w.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,F,J,W,X,ve,Se,ye=0){if(!(x&&x.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=N.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0)Ae=Ae[Se];if(Ae)if(F>=0&&F<=x.width-W&&(J>=0&&J<=x.height-X)){w.bindFramebuffer(D.FRAMEBUFFER,Ae);let Re=x.textures[ye],{format:Ge,type:Xe}=Re;if(x.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+ye);let Te=Yl(Re);if(Te.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.bufferData(D.PIXEL_PACK_BUFFER,ve.byteLength,D.STREAM_READ),D.readPixels(F,J,W,X,ee.convert(Ge),ee.convert(Xe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let xt=V!==null?N.get(V).__webglFramebuffer:null;w.bindFramebuffer(D.FRAMEBUFFER,xt);let pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gh(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ve),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(tt),D.deleteSync(pt),ve}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,J=0){let W=Math.pow(2,-J),X=Math.floor(x.image.width*W),ve=Math.floor(x.image.height*W),Se=F!==null?F.x:0,ye=F!==null?F.y:0;Y.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Se,ye,X,ve),w.unbindTexture()},this.copyTextureToTexture=function(x,F,J=null,W=null,X=0,ve=0){let Se,ye,Ae,Re,Ge,Xe,Te,tt,xt,pt=x.isCompressedTexture?x.mipmaps[ve]:x.image;if(J!==null)Se=J.max.x-J.min.x,ye=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Re=J.min.x,Ge=J.min.y,Xe=J.isBox3?J.min.z:0;else{let gt=Math.pow(2,-X);if(Se=Math.floor(pt.width*gt),ye=Math.floor(pt.height*gt),x.isDataArrayTexture)Ae=pt.depth;else if(x.isData3DTexture)Ae=Math.floor(pt.depth*gt);else Ae=1;Re=0,Ge=0,Xe=0}if(W!==null)Te=W.x,tt=W.y,xt=W.z;else Te=0,tt=0,xt=0;let ot=ee.convert(F.format),Rt=ee.convert(F.type),Me;if(F.isData3DTexture)Y.setTexture3D(F,0),Me=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Y.setTexture2DArray(F,0),Me=D.TEXTURE_2D_ARRAY;else Y.setTexture2D(F,0),Me=D.TEXTURE_2D;w.activeTexture(D.TEXTURE0),w.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Nt=w.getParameter(D.UNPACK_ROW_LENGTH),Je=w.getParameter(D.UNPACK_IMAGE_HEIGHT),$t=w.getParameter(D.UNPACK_SKIP_PIXELS),un=w.getParameter(D.UNPACK_SKIP_ROWS),Bn=w.getParameter(D.UNPACK_SKIP_IMAGES);w.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),w.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),w.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),w.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let _i=x.isDataArrayTexture||x.isData3DTexture,rt=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){let gt=N.get(x),zn=N.get(F),ht=N.get(gt.__renderTarget),kn=N.get(zn.__renderTarget);w.bindFramebuffer(D.READ_FRAMEBUFFER,ht.__webglFramebuffer),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let xi=0;xi<Ae;xi++){if(_i)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(x).__webglTexture,X,Xe+xi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(F).__webglTexture,ve,xt+xi);D.blitFramebuffer(Re,Ge,Se,ye,Te,tt,Se,ye,D.DEPTH_BUFFER_BIT,D.NEAREST)}w.bindFramebuffer(D.READ_FRAMEBUFFER,null),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||x.isRenderTargetTexture||N.has(x)){let gt=N.get(x),zn=N.get(F);w.bindFramebuffer(D.READ_FRAMEBUFFER,G),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,C);for(let ht=0;ht<Ae;ht++){if(_i)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,X,Xe+ht);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,X);if(rt)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zn.__webglTexture,ve,xt+ht);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zn.__webglTexture,ve);if(X!==0)D.blitFramebuffer(Re,Ge,Se,ye,Te,tt,Se,ye,D.COLOR_BUFFER_BIT,D.NEAREST);else if(rt)D.copyTexSubImage3D(Me,ve,Te,tt,xt+ht,Re,Ge,Se,ye);else D.copyTexSubImage2D(Me,ve,Te,tt,Re,Ge,Se,ye)}w.bindFramebuffer(D.READ_FRAMEBUFFER,null),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(rt)if(x.isDataTexture||x.isData3DTexture)D.texSubImage3D(Me,ve,Te,tt,xt,Se,ye,Ae,ot,Rt,pt.data);else if(F.isCompressedArrayTexture)D.compressedTexSubImage3D(Me,ve,Te,tt,xt,Se,ye,Ae,ot,pt.data);else D.texSubImage3D(Me,ve,Te,tt,xt,Se,ye,Ae,ot,Rt,pt);else if(x.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,ve,Te,tt,Se,ye,ot,Rt,pt.data);else if(x.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,ve,Te,tt,pt.width,pt.height,ot,pt.data);else D.texSubImage2D(D.TEXTURE_2D,ve,Te,tt,Se,ye,ot,Rt,pt);if(w.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),w.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),w.pixelStorei(D.UNPACK_SKIP_PIXELS,$t),w.pixelStorei(D.UNPACK_SKIP_ROWS,un),w.pixelStorei(D.UNPACK_SKIP_IMAGES,Bn),ve===0&&F.generateMipmaps)D.generateMipmap(Me);w.unbindTexture()},this.initRenderTarget=function(x){if(N.get(x).__webglFramebuffer===void 0)Y.setupRenderTarget(x)},this.initTexture=function(x){if(x.isCubeTexture)Y.setTextureCube(x,0);else if(x.isData3DTexture)Y.setTexture3D(x,0);else if(x.isDataArrayTexture||x.isCompressedArrayTexture)Y.setTexture2DArray(x,0);else Y.setTexture2D(x,0);w.unbindTexture()},this.resetState=function(){I=0,q=0,V=null,w.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
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
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,Sf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nf=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
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
#endif`,op=`uniform sampler2D dfgLUT;
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
}`,lp=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,xm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Ve,ue,Bt,Tr,Vm,Wh,qi=4,Zm=6,Jm=20,Km=256,bs,Mh,Ko=null,jo=0,Qo=0,el=!1,jm,fi,al,cg,Xh,sl,qh,Yh,$h,Ah,Th,Rh,Ch,Ph,tl,jg=37297,Qg=0,Dh,i0,Rr,c0,h0,d0,p0,g0,x0,v0,w0=0,L0=0,F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`,B0,z0,Gh,Ms,nl,W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
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

}`,tu,q0,nu,Z0,vn=null;var pi=yt(()=>{Jo();Jo();Ve={alphahash_fragment:cf,alphahash_pars_fragment:hf,alphamap_fragment:uf,alphamap_pars_fragment:df,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:_f,batching_vertex:xf,begin_vertex:yf,beginnormal_vertex:vf,bsdfs:bf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Tf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:If,common:Lf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Hf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:tp,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:$f,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:Qf,lights_pars_begin:ep,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:hp,lightprobes_pars_fragment:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:yp,metalnessmap_fragment:vp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Mp,morphcolor_vertex:Sp,morphnormal_vertex:wp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Ap,normal_fragment_begin:Tp,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:$p,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Kp,skinnormal_vertex:jp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:_m,distance_frag:xm,equirect_vert:ym,equirect_frag:vm,linedashed_vert:bm,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:wm,meshlambert_vert:Em,meshlambert_frag:Am,meshmatcap_vert:Tm,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Gm},ue={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Bt={basic:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Dt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Dt([ue.lights,ue.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Bt.physical={uniforms:Dt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};Tr={r:0,b:0,g:0},Vm=new mt,Wh=new Oe;Wh.set(-1,0,0,0,1,0,0,0,1);bs=new wr,Mh=new Ke,jm=new z,fi=new z;al=class al extends qt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:gn});s.uniforms.tEquirect.value=t;let r=new Yt(i,s),a=t.minFilter;if(t.minFilter===ii)t.minFilter=Gt;return new Wo(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}};cg={[Aa]:"LINEAR_TONE_MAPPING",[Ta]:"REINHARD_TONE_MAPPING",[Ra]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[Ia]:"AGX_TONE_MAPPING",[La]:"NEUTRAL_TONE_MAPPING",[Pa]:"CUSTOM_TONE_MAPPING"};Xh=new It,sl=new li(1,1),qh=new dr,Yh=new Eo,$h=new yr,Ah=[],Th=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);tl=/(\w+)(\])?(\[|\.)?/g;Dh=new Oe;i0={[Aa]:"Linear",[Ta]:"Reinhard",[Ra]:"Cineon",[Ca]:"ACESFilmic",[Ia]:"AgX",[La]:"Neutral",[Pa]:"Custom"};Rr=new z;c0=/^[ \t]*#include +<([\w\d./]+)>/gm;h0=new Map;d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;p0={[us]:"SHADOWMAP_TYPE_PCF",[Bi]:"SHADOWMAP_TYPE_VSM"};g0={[Hi]:"ENVMAP_TYPE_CUBE",[ni]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE_UV"};x0={[ni]:"ENVMAP_MODE_REFRACTION"};v0={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[$c]:"ENVMAP_BLENDING_MIX",[Zc]:"ENVMAP_BLENDING_ADD"};B0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],z0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Gh=new mt,Ms=new z,nl=new z;tu=class tu extends Nn{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,d=null,u=null,h=null,f=null,g=typeof XRWebGLBinding<"u",S=new eu,m={},p=t.getContextAttributes(),E=null,R=null,v=[],M=[],A=new Ze,T=null,y=null,b=new Ft;b.viewport=new st;let H=new Ft;H.viewport=new st;let L=[b,H],U=new Xo,G=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let B=v[P];if(B===void 0)B=new _s,v[P]=B;return B.getTargetRaySpace()},this.getControllerGrip=function(P){let B=v[P];if(B===void 0)B=new _s,v[P]=B;return B.getGripSpace()},this.getHand=function(P){let B=v[P];if(B===void 0)B=new _s,v[P]=B;return B.getHandSpace()};function I(P){let B=M.indexOf(P.inputSource);if(B===-1)return;let k=v[B];if(k!==void 0)k.update(P.inputSource,P.frame,l||r),k.dispatchEvent({type:P.type,data:P.inputSource})}function q(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",V);for(let P=0;P<v.length;P++){let B=M[P];if(B===null)continue;M[P]=null,v[P].disconnect(B)}G=null,C=null,S.reset();for(let P in m)delete m[P];if(e.setRenderTarget(E),h=null,u=null,d=null,i=null,R=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),y!==null){let P=y.camera;P.fov=y.fov,P.zoom=y.zoom,P.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){if(s=P,n.isPresenting===!0)De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){if(a=P,n.isPresenting===!0)De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){if(d===null&&g)d=new XRWebGLBinding(i,t);return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",q),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0)await t.makeXRCompatible();if(T=e.getPixelRatio(),e.getSize(A),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let k={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new qt(h.framebufferWidth,h.framebufferHeight,{format:xn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let k=null,K=null,te=null;if(p.depth)te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=p.stencil?ri:si,K=p.stencil?Gi:$n;let j={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(j),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),R=new qt(u.textureWidth,u.textureHeight,{format:xn,type:on,depthTexture:new li(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(P){for(let B=0;B<P.removed.length;B++){let k=P.removed[B],K=M.indexOf(k);if(K>=0)M[K]=null,v[K].disconnect(k)}for(let B=0;B<P.added.length;B++){let k=P.added[B],K=M.indexOf(k);if(K===-1){for(let j=0;j<v.length;j++)if(j>=M.length){M.push(k),K=j;break}else if(M[j]===null){M[j]=k,K=j;break}if(K===-1)break}let te=v[K];if(te)te.connect(k)}}let se=new z,Z=new z;function ne(P,B,k){se.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(k.matrixWorld);let K=se.distanceTo(Z),te=B.projectionMatrix.elements,j=k.projectionMatrix.elements,Ee=te[14]/(te[10]-1),de=te[14]/(te[10]+1),Ne=(te[9]+1)/te[5],Be=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],qe=(j[8]+1)/j[0],$e=Ee*Fe,_t=Ee*qe,dt=K/(-Fe+qe),ft=dt*-Fe;if(B.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(ft),P.translateZ(dt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),te[10]===-1)P.projectionMatrix.copy(B.projectionMatrix),P.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let D=Ee+dt,bt=de+dt,je=$e-ft,at=_t+(K-ft),w=Ne*de/bt*D,_=Be*de/bt*D;P.projectionMatrix.makePerspective(je,at,w,_,D,bt),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function ae(P,B){if(B===null)P.matrixWorld.copy(P.matrix);else P.matrixWorld.multiplyMatrices(B.matrixWorld,P.matrix);P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;let{near:B,far:k}=P;if(S.texture!==null){if(S.depthNear>0)B=S.depthNear;if(S.depthFar>0)k=S.depthFar}if(U.near=H.near=b.near=B,U.far=H.far=b.far=k,G!==U.near||C!==U.far)i.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,C=U.far;U.layers.mask=P.layers.mask|6,b.layers.mask=U.layers.mask&-5,H.layers.mask=U.layers.mask&-3;let K=P.parent,te=U.cameras;ae(U,K);for(let j=0;j<te.length;j++)ae(te[j],K);if(te.length===2)ne(U,b,H);else U.projectionMatrix.copy(b.projectionMatrix);if(y===null&&P.isPerspectiveCamera)y={camera:P,fov:P.fov,zoom:P.zoom};Pe(P,U,K)};function Pe(P,B,k){if(k===null)P.matrix.copy(B.matrixWorld);else P.matrix.copy(k.matrixWorld),P.matrix.invert(),P.matrix.multiply(B.matrixWorld);if(P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(B.projectionMatrix),P.projectionMatrixInverse.copy(B.projectionMatrixInverse),P.isPerspectiveCamera)P.fov=Oi*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1}this.getCamera=function(){return U},this.getFoveation=function(){if(u===null&&h===null)return;return o},this.setFoveation=function(P){if(o=P,u!==null)u.fixedFoveation=P;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=P},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(U)},this.getCameraTexture=function(P){return m[P]};let Ce=null;function We(P,B){if(c=B.getViewerPose(l||r),f=B,c!==null){let k=c.views;if(h!==null)e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R);let K=!1;if(k.length!==U.cameras.length)U.cameras.length=0,K=!0;for(let de=0;de<k.length;de++){let Ne=k[de],Be=null;if(h!==null)Be=h.getViewport(Ne);else{let qe=d.getViewSubImage(u,Ne);if(Be=qe.viewport,de===0)e.setRenderTargetTextures(R,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(R)}let Fe=L[de];if(Fe===void 0)Fe=new Ft,Fe.layers.enable(de),Fe.viewport=new st,L[de]=Fe;if(Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Be.x,Be.y,Be.width,Be.height),de===0)U.matrix.copy(Fe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);if(K===!0)U.cameras.push(Fe)}let te=i.enabledFeatures;if(te&&te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let de=d.getDepthInformation(k[0]);if(de&&de.isValid&&de.texture)S.init(de,i.renderState)}if(te&&te.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let de=0;de<k.length;de++){let Ne=k[de].camera;if(Ne){let Be=m[Ne];if(!Be)Be=new vr,m[Ne]=Be;let Fe=d.getCameraImage(Ne);Be.sourceTexture=Fe}}}}for(let k=0;k<v.length;k++){let K=M[k],te=v[k];if(K!==null&&te!==void 0)te.update(K,B,l||r)}if(Ce)Ce(P,B);if(B.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:B});f=null}let ke=new Vh;ke.setAnimationLoop(We),this.setAnimationLoop=function(P){Ce=P},this.dispose=function(){}}};q0=new mt,nu=new Oe;nu.set(-1,0,0,0,1,0,0,0,1);Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183])});var iu;var su=yt(()=>{iu=import.meta.env?.BASE_URL??"/"});function lu(e){let t=Array.from(e.toLowerCase().normalize("NFC")),n=[];for(let i=0;i<t.length;i++){let s=$i(t[i]),r=$i(t[i+1]??""),a=s+r;if(!Es[s]&&!ru[s])continue;let o=!!t[i+1]&&!ou(t[i+1])&&!Ir(t[i])&&(au[a]||["αυ","ευ","ηυ"].includes(a));if(o&&["αυ","ευ","ηυ"].includes(a))n.push({ipa:Es[s],text:t[i],stress:Ir(t[i+1])?1:0,vowel:!0}),n.push({ipa:"θκξπστφχψ".includes($i(t[i+2]??""))?"f":"v",text:t[++i],stress:0,vowel:!1});else if(o){let l=au[a],c=t[i]+t[++i];if(l==="ŋg"||l==="ŋx")n.push({ipa:"ŋ",text:c[0],stress:0,vowel:!1},{ipa:l.slice(1),text:c.slice(1),stress:0,vowel:!1});else n.push({ipa:l,text:c,stress:Ir(c)?1:0,vowel:Object.values(Es).includes(l)||l==="u"})}else if(Es[s])n.push({ipa:Es[s],text:t[i],stress:Ir(t[i])?1:0,vowel:!0});else{let l=ru[s],c=n.at(-1);if(c&&!c.vowel&&$i(c.text).endsWith(s))c.text+=t[i];else if(l==="ks"||l==="ps")n.push({ipa:l[0],text:t[i],stress:0,vowel:!1},{ipa:"s",text:"",stress:0,vowel:!1});else n.push({ipa:l,text:t[i],stress:0,vowel:!1})}}n.forEach((i,s)=>{let r=n[s+1];if(r?.vowel&&["e","i"].includes(r.ipa))i.ipa={k:"c",g:"ɟ",ɣ:"ʝ",x:"ç"}[i.ipa]??i.ipa;if(i.ipa==="s"&&r&&["v","ð","ɣ","ʝ","z","m","n","ɲ","l","ʎ","ɾ","b","d","g","ɟ"].includes(r.ipa))i.ipa="z"});for(let i=1;i<n.length-1;i++){let s=n[i],r=n[i-1],a=n[i+1];if(s.ipa!=="i"||s.stress||ou(s.text)||r.vowel||!a.vowel||$i(e.toLowerCase())==="αυριο")continue;let o={n:"ɲ",l:"ʎ",k:"c",g:"ɟ",ɣ:"ʝ",x:"ç",c:"c",ɟ:"ɟ",ʝ:"ʝ",ç:"ç"}[r.ipa];if(o)r.ipa=o,r.text+=s.text,n.splice(i--,1);else s.ipa="j",s.vowel=!1}return n}function cl(e){let t=lu(e).map(Zi);if(t.length)t[t.length-1].wordEnd=!0;return t}function cu(e,t=()=>[]){return e.split(/[.!?;\u037e\n]+/u).map((n)=>{let i=n.match(/[\p{Script=Greek}\p{M}]+|[a-zA-Z]+(?:['’][a-zA-Z]+)*/gu)??[];return{segments:i.flatMap((s)=>Ji(s)?cl(s):t(s)),words:i,intonation:"statement",pause:0.3}}).filter((n)=>n.segments.length)}function hu(e,t=()=>[]){let n=[],i=[];for(let s of e.matchAll(/[\p{Script=Greek}\p{M}]+|[a-zA-Z]+(?:['’][a-zA-Z]+)*|[\n,.!?;\u037e]+|[~-]/gu)){let r=s[0];if(/^[\n,.!?;\u037e]/u.test(r)){if(n.length)n[n.length-1].coda.push(...i.map(Zi)),n[n.length-1].phraseEnd=!0;i=[];continue}if(r==="~"||r==="-"){if(n.length)n.push({...n[n.length-1],text:"~",onset:[],coda:[],melisma:!0,phraseEnd:!1});continue}if(!Ji(r)){n.push(...t(r));continue}let a=[...i,...lu(r)],o=a.flatMap((c,d)=>c.vowel?[d]:[]),l=0;if(!o.length){i=a;continue}i=[],o.forEach((c,d)=>{let u=o[d+1],h=a.length;if(u!==void 0){let f=a.slice(c+1,u),g=f.length?1:0;for(let S=2;S<=f.length;S++)if(K0.has(f.slice(-S).map((m)=>m.ipa).join("")))g=S;if(h=u-g,h<a.length&&!a[h].vowel&&$i(a[h].text)==="υ")h++}n.push({text:a.slice(l,h).map((f)=>f.text).join(""),onset:a.slice(l,c).map(Zi),nucleus:Zi(a[c]),coda:a.slice(c+1,h).map(Zi),wordEnd:d===o.length-1,phraseEnd:!1}),l=h})}if(i.length&&n.length)n[n.length-1].coda.push(...i.map(Zi));return n}var Ji=(e)=>/\p{Script=Greek}/u.test(e),Es,ru,au,K0,$i=(e)=>e.normalize("NFD").replace(/\p{M}/gu,""),Ir=(e)=>/[\u0300\u0301\u0342]/u.test(e.normalize("NFD")),ou=(e)=>e.normalize("NFD").includes("̈"),Zi=(e)=>({ipa:e.ipa,...e.stress?{stress:e.stress}:{}});var uu=yt(()=>{Es={α:"a",ε:"e",η:"i",ι:"i",ο:"o",υ:"i",ω:"o"},ru={β:"v",γ:"ɣ",δ:"ð",ζ:"z",θ:"θ",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"ks",π:"p",ρ:"ɾ",σ:"s",ς:"s",τ:"t",φ:"f",χ:"x",ψ:"ps"},au={αι:"e",ει:"i",οι:"i",υι:"i",ου:"u",μπ:"b",ντ:"d",γκ:"g",γγ:"ŋg",γχ:"ŋx",τσ:"ts",τζ:"dz"},K0=new Set(["pɾ","pl","tɾ","dɾ","kɾ","kl","ɣɾ","ɣl","fɾ","fl","vɾ","vl","θɾ","ðɾ","xɾ","xl","sp","st","sk","sf","sθ","sm","sn","sl","stɾ","spɾ","skɾ","skl","sfɾ","zv","zm","zn","zɣ","zð","pj","bj","tj","dj","ðj","θj","fj","vj","sj","zj","ɾj","mj"])});var du;var fu=yt(()=>{du={songbird:{view:{x0:-4,x1:14,y0:-6,y1:8},silhouette:[[-3.2,-1.2],[-1.6,-3.4],[1.6,-4.6],[5.2,-4.4],[7.8,-2.6],[9,-0.4],[9.6,1.8],[10.4,2.4],[12.8,2.6],[10.6,3],[9.8,3.6],[9.2,4.6],[7.6,5.2],[6,4.6],[4.2,2.8],[2,2],[-0.2,1.6],[-3.6,1.4],[-3.4,0.2]],parts:[{shade:0.2,pts:[[8.6,4],[8.95,4.3],[9.2,4],[8.95,3.7]]}],tubes:[{tube:"bronchusL",path:[[3.4,-1.9],[4.4,-1.4]],label:"Left bronchus",inView:!1},{tube:"bronchusR",path:[[3.4,-0.9],[4.4,-1.2]],label:"Right bronchus",inView:!1},{tube:"trachea",path:[[4.4,-1.3],[5.6,-0.4],[6.8,0.8],[7.8,1.9],[8.6,2.5]],label:"Trachea"},{tube:"beak",path:[[9.4,2.75],[10.6,2.75],[12.4,2.7]],label:"Beak"}],tubeScale:1.6,sources:[{key:"left",at:[4.2,-1.6],label:"Left voice"},{key:"right",at:[4.2,-1],label:"Right voice"}]},seal:{view:{x0:-60,x1:60,y0:-30,y1:30},silhouette:[[-58,-2],[-50,-8],[-30,-14],[-5,-16],[20,-14],[38,-10],[48,-6],[55,-3],[58,1],[56,5],[50,8],[42,10],[30,11],[10,13],[-15,13],[-35,10],[-50,6],[-56,3],[-62,8],[-64,4],[-60,0],[-64,-4],[-62,-8]],parts:[{shade:0.15,pts:[[47,4],[48.5,5],[50,4],[48.5,3]]}],tubes:[{tube:"trachea",path:[[8,-4],[20,-3],[30,-2]],label:"Trachea"},{tube:"pharynx",path:[[30,-2],[38,0],[44,1.5]],label:"Pharynx"},{tube:"oral",path:[[44,1.5],[50,0.5],[57,-0.5]],label:"Mouth"}],tubeScale:1.3,sources:[{key:"glottis",at:[30,-2],label:"Larynx"}]},alligator:{view:{x0:-120,x1:120,y0:-40,y1:40},silhouette:[[-118,2],[-90,-4],[-60,-8],[-30,-14],[0,-16],[30,-14],[50,-10],[70,-8],[95,-5],[114,-3],[118,0],[115,3],[98,5],[75,7],[52,9],[40,12],[20,14],[-10,14],[-40,11],[-70,7],[-100,4]],parts:[{shade:0.15,pts:[[54,9],[56,11],[58,9],[56,8]]}],tubes:[{tube:"trachea",path:[[0,-6],[18,-5],[36,-4]],label:"Trachea"},{tube:"pharynx",path:[[36,-4],[46,-2],[54,0]],label:"Pharynx"},{tube:"oral",path:[[54,0],[80,-1],[112,-1]],label:"Mouth"},{tube:"nasal",path:[[54,2],[80,4],[113,2]],label:"Nostrils"}],tubeScale:1.05,sources:[{key:"glottis",at:[36,-4],label:"Larynx"}]},elephant:{view:{x0:-170,x1:170,y0:-170,y1:130},silhouette:[[-160,20],[-150,70],[-110,105],[-40,118],[30,115],[70,100],[95,112],[120,108],[140,85],[148,55],[146,25],[140,5],[132,-20],[128,-60],[122,-110],[118,-150],[108,-152],[112,-100],[110,-50],[104,-20],[96,-5],[80,0],[70,-10],[66,-90],[40,-95],[44,-30],[-90,-30],[-95,-95],[-125,-95],[-122,-10],[-150,-5]],parts:[{shade:0.15,pts:[[118,62],[122,66],[126,62],[122,58]]},{shade:0.62,pts:[[70,100],[40,60],[55,25],[85,40],[95,80]]}],tubes:[{tube:"trachea",path:[[40,20],[70,30],[95,38]],label:"Trachea"},{tube:"pharynx",path:[[95,38],[112,50],[124,58]],label:"Pharynx"},{tube:"oral",path:[[124,58],[130,42],[134,30]],label:"Mouth"},{tube:"trunk",path:[[136,70],[142,40],[136,0],[128,-50],[120,-100],[113,-148]],label:"Trunk"}],tubeScale:3,sources:[{key:"glottis",at:[95,38],label:"Vocal folds"},{key:"lips",at:[136,70],label:"Trunk valve"}]}}});var gu={};ns(gu,{ARTIC_KEYS:()=>ji,ARTIC_SPECS:()=>t_,BASS_NOTE:()=>s_,BEAT_PRESETS:()=>a_,BEAT_SOUNDS:()=>r_,BODY_CHILD:()=>e_,BODY_FEMALE:()=>Q0,BODY_MALE:()=>j0,CREATURES:()=>pu,DEFAULT_SOURCE:()=>n_,DEMO_SONGS:()=>o_,EXHALE_LABEL:()=>i_,EnglishG2P:()=>mu,NEUTRAL:()=>Ki,TractMap:()=>Lr,VOWELS:()=>ul,VOWEL_TARGETS:()=>hl,activation:()=>x_,airwayAreas:()=>ml,airwayFrame:()=>pl,airwayModel:()=>dl,airwayTransfer:()=>gl,beatReady:()=>b_,creatureById:()=>l_,creaturePreview:()=>S_,dropAirwayModel:()=>fl,formatBeat:()=>v_,lyricsToSyllables:()=>h_,parseBeat:()=>y_,planMelisma:()=>g_,planNoteOff:()=>__,planNoteOn:()=>m_,planPhrases:()=>f_,planSong:()=>p_,planUtterance:()=>u_,plannedCounts:()=>d_,restTip:()=>M_,tokenizeIpa:()=>c_});function c_(e){return ut("tokenizeIpa",{text:e})}class mu{loading=null;isLoaded=!1;get loaded(){return this.isLoaded}load(e=iu+"data/cmudict.txt.gz"){if(this.isLoaded)return Promise.resolve();if(this.loading)return this.loading;return this.loading=(async()=>{try{let t=await fetch(e);if(!t.ok)throw Error(`dictionary ${t.status}`);let n=new Uint8Array(await t.arrayBuffer()),i;if(n[0]===31&&n[1]===139){let s=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"));i=await new Response(s).text()}else i=new TextDecoder().decode(n);this.setDictionaryText(i)}catch(t){throw this.loading=null,t}})(),this.loading}setDictionaryText(e){ut("g2pLoad",{text:e}),this.isLoaded=!0}toPhrases(e){if(Ji(e))return cu(e,(t)=>ut("g2pWord",{word:t,reduce:!0}));return ut("g2pPhrases",{text:e})}word(e,t=!0){if(Ji(e))return cl(e);return ut("g2pWord",{word:e,reduce:t})}}function h_(e){if(Ji(e))return hu(e,(t)=>ut("lyricsToSyllables",{text:t}));return ut("lyricsToSyllables",{text:e})}function u_(e,t){return ut("planUtterance",{segments:e,options:t})}function d_(e){return ut("plannedCounts",{ipa:e})}function f_(e,t){return ut("planPhrases",{phrases:e.map((n)=>({segments:n.segments,intonation:n.intonation,pause:n.pause})),options:t})}function p_(e,t){return ut("planSong",{notes:e,options:t})}function m_(e,t,n){return ut("planNoteOn",{syl:e,midi:t,options:n})}function g_(e,t){return ut("planMelisma",{midi:e,options:t})}function __(e,t,n){return ut("planNoteOff",{syl:e,midi:t,body:n})}function x_(e,t){if(t<=e.t0-e.rampIn||t>=e.t1+e.rampOut)return 0;if(t<e.t0)return 0.5-0.5*Math.cos(Math.PI*(t-(e.t0-e.rampIn))/Math.max(0.000001,e.rampIn));if(t>e.t1)return 0.5+0.5*Math.cos(Math.PI*(t-e.t1)/Math.max(0.000001,e.rampOut));return 1}function y_(e){return ut("parseBeat",{text:e})}function v_(e){return ut("formatBeat",{steps:e})}function b_(e){return ut("beatReady",{body:e})}function M_(e,t,n){return ut("restTip",{jaw:e,tbX:t,tbY:n})}class Lr{scale;ph;constructor(e){this.scale=e.scale,this.ph=e.pharynx}P(e,t){let n=this.scale,i=e>0.5?0.5+(e-0.5)*0.86:e,s=t<7?7-(7-t)*this.ph:t;return{x:i*n,y:s*n}}unP(e,t){let n=this.scale,i=e/n,s=t/n;if(i>0.5)i=0.5+(i-0.5)/0.86;if(s<7)s=7-(7-s)/this.ph;return{x:i,y:s}}}function dl(e,t){return ut("model",{body:e,sampleRate:t})}function fl(e){ut("dropModel",{model:e.model})}function pl(e,t){return ut("frame",{model:e.model,artic:t})}function ml(e,t){return ut("apply",{model:e.model,artic:t})}function gl(e,t){return ut("transfer",{model:e.model,artic:t})}function S_(e,t){return ut("creaturePreview",{id:e,params:t??{}})}var zt,Ki,j0,Q0,e_,ji,t_,n_,i_,s_,r_,a_,hl,o_,ul,pu,l_=(e)=>pu.find((t)=>t.id===e);var Dr=yt(()=>{su();Qr();uu();fu();zt=ut("catalog"),Ki=zt.neutral,j0=zt.bodies.male,Q0=zt.bodies.female,e_=zt.bodies.child,ji=zt.articKeys,t_=zt.articSpecs,n_=zt.defaultSource,i_=zt.exhaleLabel,s_=zt.bassNote,r_=zt.beatSounds,a_=zt.beatPresets,hl=zt.vowelTargets,o_=zt.demoSongs,ul=zt.vowels,pu=zt.creatures.map((e)=>({...e,visual:du[e.id]}))});function _u(e,t,n){let i=parseInt(e.slice(1),16),s=parseInt(t.slice(1),16),r=(a)=>Math.round((i>>a&255)*(1-n)+(s>>a&255)*n);return"#"+[16,8,0].map((a)=>r(a).toString(16).padStart(2,"0")).join("")}function xl(e){let t=Math.max(0,Math.min(1,e));for(let n=1;n<Fn.length;n++)if(t<=Fn[n][0])return _u(Fn[n-1][1],Fn[n][1],(t-Fn[n-1][0])/(Fn[n][0]-Fn[n-1][0]));return Fn[Fn.length-1][1]}var ge,iM,_l=(e)=>_u(e,"#ffffff",0.55),Fn,sM,yl=(e)=>{if(!(e>0))return 0;let t=Math.log10(40),n=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(e)-t)/(n-t)))};var Qi=yt(()=>{ge={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},iM=[ge.green,ge.red,ge.pink,ge.white];Fn=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];sM={black:"#000000",console:"#000000",inset:"#000000",line:ge.frame,text:ge.blue,textDim:ge.blueMid,caliper:ge.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"}});function cn(e,t){if(e.length<3)return e.slice();let n=[];for(let i=0;i<e.length-1;i++){let s=e[Math.max(0,i-1)],r=e[i],a=e[i+1],o=e[Math.min(e.length-1,i+2)];for(let l=0;l<t;l++){let c=l/t,d=c*c,u=d*c;n.push({x:0.5*(2*r.x+(-s.x+a.x)*c+(2*s.x-5*r.x+4*a.x-o.x)*d+(-s.x+3*r.x-3*a.x+o.x)*u),y:0.5*(2*r.y+(-s.y+a.y)*c+(2*s.y-5*r.y+4*a.y-o.y)*d+(-s.y+3*r.y-3*a.y+o.y)*u)})}}return n.push(e[e.length-1]),n}var xu=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),Nr=(e,t,n)=>{let i=Math.sin(n),s=Math.cos(n),r=e.x-t.x,a=e.y-t.y;return{x:t.x+r*s-a*i,y:t.y+r*i+a*s}};function Ur(e,t=2){let n=e.length>1&&e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]?e.slice(0,-1):e.slice();for(let i=0;i<t;i++){let s=[];for(let r=0;r<n.length;r++){let a=n[r],o=n[(r+1)%n.length];s.push([a[0]*0.75+o[0]*0.25,a[1]*0.75+o[1]*0.25],[a[0]*0.25+o[0]*0.75,a[1]*0.25+o[1]*0.75])}n=s}return n.length?[...n,n[0]]:n}var lM;var Fr=yt(()=>{Qi();lM=typeof CanvasRenderingContext2D<"u"&&"letterSpacing"in CanvasRenderingContext2D.prototype});var yu,Or,es;var vl=yt(()=>{pi();yu=new jt,Or=new z;es=class es extends Er{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ot(e,3)),this.setAttribute("uv",new Ot(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0)t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(e){let t;if(e instanceof Float32Array)t=e;else if(Array.isArray(e))t=new Float32Array(e);let n=new yn(t,6,1);return this.setAttribute("instanceStart",new Lt(n,3,0)),this.setAttribute("instanceEnd",new Lt(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;if(e instanceof Float32Array)t=e;else if(Array.isArray(e))t=new Float32Array(e);let n=new yn(t,6,1);return this.setAttribute("instanceColorStart",new Lt(n,3,0)),this.setAttribute("instanceColorEnd",new Lt(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new br(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new jt;let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0)this.boundingBox.setFromBufferAttribute(e),yu.setFromBufferAttribute(t),this.boundingBox.union(yu)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Un;if(this.boundingBox===null)this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Or)),Or.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Or));if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}});var Ts;var bl=yt(()=>{pi();ue.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ze},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bt.line={uniforms:vs.merge([ue.common,ue.fog,ue.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};Ts=class Ts extends Vt{constructor(e){super({type:"LineMaterial",uniforms:vs.clone(Bt.line.uniforms),vertexShader:Bt.line.vertexShader,fragmentShader:Bt.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){if(e===!0!==this.worldUnits)this.needsUpdate=!0;if(e===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=e}get dashed(){return"USE_DASH"in this.defines}set dashed(e){if(e===!0!==this.dashed)this.needsUpdate=!0;if(e===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){if(!this.uniforms)return;this.uniforms.opacity.value=e}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){if(!this.defines)return;if(e===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(e===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}});function Su(e,t,n){return Mn.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Mn.multiplyScalar(1/Mn.w),Mn.x=mi/n.width,Mn.y=mi/n.height,Mn.applyMatrix4(e.projectionMatrixInverse),Mn.multiplyScalar(1/Mn.w),Math.abs(Math.max(Mn.x,Mn.y))}function w_(e,t){let{matrixWorld:n,geometry:i}=e,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Tt.start.fromBufferAttribute(s,o),Tt.end.fromBufferAttribute(r,o),Tt.applyMatrix4(n);let c=new z,d=new z;if(Sn.distanceSqToSegment(Tt.start,Tt.end,d,c),d.distanceTo(c)<mi*0.5)t.push({point:d,pointOnLine:c,distance:Sn.origin.distanceTo(d),object:e,face:null,faceIndex:o,uv:null,uv1:null})}}function E_(e,t,n){let i=t.projectionMatrix,r=e.material.resolution,{matrixWorld:a,geometry:o}=e,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,d=Math.min(o.instanceCount,l.count),u=-t.near;Sn.at(1,bn),bn.w=1,bn.applyMatrix4(t.matrixWorldInverse),bn.applyMatrix4(i),bn.multiplyScalar(1/bn.w),bn.x*=r.x/2,bn.y*=r.y/2,bn.z=0,Sl.copy(bn),wl.multiplyMatrices(t.matrixWorldInverse,a);for(let h=0,f=d;h<f;h++){if(Et.fromBufferAttribute(l,h),At.fromBufferAttribute(c,h),Et.w=1,At.w=1,Et.applyMatrix4(wl),At.applyMatrix4(wl),Et.z>u&&At.z>u)continue;if(Et.z>u){let R=Et.z-At.z,v=(Et.z-u)/R;Et.lerp(At,v)}else if(At.z>u){let R=At.z-Et.z,v=(At.z-u)/R;At.lerp(Et,v)}Et.applyMatrix4(i),At.applyMatrix4(i),Et.multiplyScalar(1/Et.w),At.multiplyScalar(1/At.w),Et.x*=r.x/2,Et.y*=r.y/2,At.x*=r.x/2,At.y*=r.y/2,Tt.start.copy(Et),Tt.start.z=0,Tt.end.copy(At),Tt.end.z=0;let S=Tt.closestPointToPointParameter(Sl,!0);Tt.at(S,Mu);let m=Mo.lerp(Et.z,At.z,S),p=m>=-1&&m<=1,E=Sl.distanceTo(Mu)<mi*0.5;if(p&&E){Tt.start.fromBufferAttribute(l,h),Tt.end.fromBufferAttribute(c,h),Tt.start.applyMatrix4(a),Tt.end.applyMatrix4(a);let R=new z,v=new z;Sn.distanceSqToSegment(Tt.start,Tt.end,v,R),n.push({point:v,pointOnLine:R,distance:Sn.origin.distanceTo(v),object:e,face:null,faceIndex:h,uv:null,uv1:null})}}}var Ml,vu,bu,Et,At,bn,Sl,wl,Tt,Mu,Br,zr,Mn,Sn,mi,El;var wu=yt(()=>{pi();vl();bl();Ml=new st,vu=new z,bu=new z,Et=new st,At=new st,bn=new st,Sl=new z,wl=new mt,Tt=new Ar,Mu=new z,Br=new jt,zr=new Un,Mn=new st;El=class El extends Yt{constructor(e=new es,t=new Ts({color:Math.random()*16777215})){super(e,t);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let r=0,a=0,o=t.count;r<o;r++,a+=2)vu.fromBufferAttribute(t,r),bu.fromBufferAttribute(n,r),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+vu.distanceTo(bu);let s=new yn(i,2,1);return e.setAttribute("instanceDistanceStart",new Lt(s,1,0)),e.setAttribute("instanceDistanceEnd",new Lt(s,1,1)),this}raycast(e,t){let n=this.material.worldUnits,i=e.camera;if(i===null&&!n)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0?e.params.Line2.threshold||0:0;Sn=e.ray;let r=this.matrixWorld,a=this.geometry,o=this.material;if(mi=o.linewidth+s,a.boundingSphere===null)a.computeBoundingSphere();zr.copy(a.boundingSphere).applyMatrix4(r);let l;if(n)l=mi*0.5;else{let d=Math.max(i.near,zr.distanceToPoint(Sn.origin));l=Su(i,d,o.resolution)}if(zr.radius+=l,Sn.intersectsSphere(zr)===!1)return;if(a.boundingBox===null)a.computeBoundingBox();Br.copy(a.boundingBox).applyMatrix4(r);let c;if(n)c=mi*0.5;else{let d=Math.max(i.near,Br.distanceToPoint(Sn.origin));c=Su(i,d,o.resolution)}if(Br.expandByScalar(c),Sn.intersectsBox(Br)===!1)return;if(n)w_(this,t);else E_(this,i,t)}onBeforeRender(e){let t=this.material.uniforms;if(t&&t.resolution)e.getViewport(Ml),this.material.uniforms.resolution.value.set(Ml.z,Ml.w)}}});class Tl{a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(e,t,n){if(3*this.n+3>this.a.length){let s=new Float32Array(this.a.length*2);s.set(this.a),this.a=s}let i=3*this.n++;return this.a[i]=e,this.a[i+1]=t,this.a[i+2]=n,this}}class Au{material;mesh;geo=new es;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(e){this.material=e;this.mesh=new El(this.geo,e),this.mesh.frustumCulled=!1,this.grow(2048)}grow(e){let t=new Float32Array(e*6),n=new Float32Array(e*6);t.set(this.pos.subarray(0,this.n*6)),n.set(this.col.subarray(0,this.n*6)),this.pos=t,this.col=n,this.cap=e,this.geo.dispose(),this.geo=new es;let i=this.pb=new yn(t,6,1).setUsage(ur),s=this.cb=new yn(n,6,1).setUsage(ur);this.geo.setAttribute("instanceStart",new Lt(i,3,0)),this.geo.setAttribute("instanceEnd",new Lt(i,3,3)),this.geo.setAttribute("instanceColorStart",new Lt(s,3,0)),this.geo.setAttribute("instanceColorEnd",new Lt(s,3,3)),this.mesh.geometry=this.geo}seg(e,t,n,i,s,r,a,o,l){if(this.n>=this.cap)this.grow(this.cap*2);let c=this.n++*6,d=this.pos,u=this.col;d[c]=e,d[c+1]=t,d[c+2]=n,d[c+3]=i,d[c+4]=s,d[c+5]=r,u[c]=u[c+3]=a,u[c+1]=u[c+4]=o,u[c+2]=u[c+5]=l}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let e of[this.pb,this.cb])e.clearUpdateRanges(),e.addUpdateRange(0,this.n*6),e.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}function Al(e){let t=Eu.get(e);if(!t){let n=parseInt(e.slice(1),16);t=[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],Eu.set(e,t)}return t}class Rl{group=new qn;batches;constructor(){this.batches=kr.map((e)=>{let t=new Ts({linewidth:e,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});t.blending=Ks,t.blendEquation=js,t.fog=!0;let n=new Au(t);return this.group.add(n.mesh),n})}setResolution(e,t){for(let n of this.batches)n.material.resolution.set(e,t)}begin(){for(let e of this.batches)e.n=0}end(){for(let e of this.batches)e.commit()}batch(e){let t=0;for(let n=1;n<kr.length;n++)if(Math.abs(kr[n]-e)<Math.abs(kr[t]-e))t=n;return this.batches[t]}line(e,t,n,i,s={}){if(t<2)return;let r=s.alpha??1;if(this.strokes(e,t,Al(n),r,this.batch(i),s.close??!1),s.hot)this.strokes(e,t,Al(_l(n)),r,this.batch(i*0.42),s.close??!1)}poly(e,t,n,i={}){this.line(e.a,e.n,t,n,i)}seg(e,t,n,i,s,r,a,o,l=1){let[c,d,u]=Al(a);this.batch(o).seg(e,t,n,i,s,r,c*l,d*l,u*l)}strokes(e,t,[n,i,s],r,a,o){n*=r,i*=r,s*=r;for(let l=0;l<t-1;l++){let c=3*l;a.seg(e[c],e[c+1],e[c+2],e[c+3],e[c+4],e[c+5],n,i,s)}if(o){let l=3*(t-1);a.seg(e[l],e[l+1],e[l+2],e[0],e[1],e[2],n,i,s)}}dispose(){for(let e of this.batches)e.dispose()}}var kr,Eu;var Tu=yt(()=>{pi();wu();vl();bl();Qi();kr=[0.6,0.85,1.05,1.3,1.6,2.1];Eu=new Map});function Pl(e,t){let n=e.tract;return-Math.max(-0.2,Math.min(3,t))*n.scale/xu(n.P(-2.5,10.5),n.P(6.95,7.75))}function Il(e,t){let n=e.tract,i=n.P(-2.5,10.5),s=Pl(e,t.jaw);return(r,a)=>Nr(n.P(r,a),i,s)}function Cl(e,t,n,i=0,s=40){let r=Math.cos(-i),a=Math.sin(-i),o=[];for(let l=0;l<=s;l++){let c=l/s*Math.PI*2,d=Math.cos(c)*t,u=Math.sin(c)*n;o.push({x:e.x+d*r-u*a,y:e.y+d*a+u*r})}return o}function A_(e,t,n){let i=Math.min(e.x,t.x),s=Math.max(e.x,t.x),r=Math.min(e.y,t.y),a=Math.max(e.y,t.y),o=Math.min(n,(s-i)/2,(a-r)/2),l=[],c=(d,u,h)=>{for(let f=0;f<=6;f++){let g=h+f/6*(Math.PI/2);l.push({x:d+Math.cos(g)*o,y:u+Math.sin(g)*o})}};return c(s-o,a-o,0),c(i+o,a-o,Math.PI/2),c(i+o,r+o,Math.PI),c(s-o,r+o,3*Math.PI/2),l.push(l[0]),l}function Ll(e){let t=e.tract.scale,n=e.bodyParams.pharynx;return(i,s)=>({x:i*t,y:(s<7?7-(7-s)*n:s)*t})}function Gr(e,t,n){let i=e.tract,s=(b,H)=>i.P(b,H),r=Il(e,n),a=i.scale,o=n.larynx*a,l=Ll(e),c=t.upperLip.slice(7),d=t.lowerLip.slice(7),u=cn([l(2.3,-4.6),l(2.38,-1.5),l(2.52,0.4),l(3,1.7),r(5.3,3),r(7.25,3.35),r(7.95,4.6),r(7.55,5.7)],4),h=cn([c[c.length-1],l(7.05,10.6),l(7.75,10.78),l(8.75,11.05),l(9.25,11.65),l(8.95,12.6),l(8.35,13.9),l(7.7,15),l(7.95,16.1),l(7.9,18.1),l(6.9,20.5)],4),f=cn([l(6.9,20.5),l(3,22.9),l(-2.2,22.7),l(-6.9,19.6),l(-8.7,15.4),l(-8.3,11.9),l(-7.4,8.9),l(-6.8,4.8),l(-6.6,0),l(-6.6,-4.6)],4),g=[];for(let b=0;b<9;b++){let H=-4.4+b*1.75;if(H>10.5)break;let L=Hr(H)-2.25;g.push(A_(s(L,H+1.4),s(L+1.6,H),0.32*a))}let m=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([b,H])=>i.P(b,H)),p=t.jawBone.filter((b)=>b.x>0.8*a),E=t.glottis,R={x:s(1.6,0).x,y:s(0,2.9).y+0.6*o},v=[];for(let b=0;b<4;b++){let H=E.y-(0.9+b*1)*a;if(H<-4.4)break;v.push([{x:E.x+0.8*a,y:H},{x:E.x+1.05*a,y:H-0.05},{x:E.x+1.05*a,y:H-0.5*a},{x:E.x+0.82*a,y:H-0.45*a},{x:E.x+0.8*a,y:H}])}let M=r(6,5.45),A=t.tongueCenter,T=[];for(let b=0;b<=16;b++){let H=Math.PI*(0.18+0.9*b/16),L={x:A.x+Math.cos(H)*t.tongueRadius*1.25,y:A.y+Math.sin(H)*t.tongueRadius*1.25},U={x:A.x,y:(A.y+M.y)/2},G=[];for(let C=0;C<=12;C++){let I=C/12;G.push({x:(1-I)*(1-I)*M.x+2*(1-I)*I*U.x+I*I*L.x,y:(1-I)*(1-I)*M.y+2*(1-I)*I*U.y+I*I*L.y})}T.push(G)}let y={x:Hr(E.y/a)*a,y:E.y};return{f:t,model:e,skinLower:[...u,...d.slice().reverse()],skinUpper:[...c,...h.slice(1),...f.slice(1)],inset:cn([l(1.85,-4.6),l(1.9,-0.8),l(2.3,1.6),r(5.2,3.6),r(6.9,3.9),r(7.4,4.9),r(7.2,5.9),l(6.6,9.9),l(7.6,10.9),l(8.55,11.5),l(8.1,13.4),l(7.25,15.2),l(7.45,18),l(3,22.2),l(-2,22),l(-6.3,19.2),l(-7.9,15.3),l(-7.6,12),l(-6.7,8.7),l(-6.1,4.6),l(-6,-4.6)],3),skull:cn([l(7,16.2),l(7.3,18.5),l(6,20.7),l(3,22.1),l(-2,22),l(-6.3,19.2),l(-7.9,15.3),l(-7.4,12.6),l(-4.6,12.2),l(-2.2,13.3),l(1,13.7),l(4.1,14.1),l(6.2,14.9)],4),brain:cn([l(6.55,16.3),l(6.75,18.4),l(5.5,20.1),l(2.8,21.4),l(-1.9,21.3),l(-5.8,18.8),l(-7.1,15.4),l(-6.7,13.1),l(-4.4,12.8),l(-2.1,13.9),l(1,14.3),l(4,14.7),l(5.9,15.4)],4),sulcus:cn([l(5.4,19.4),l(2.4,20.5),l(-1.4,20.4),l(-4.8,18.4)],4),eye:Cl(l(6.5,15.4),1.1*a,0.95*a),eyeC:l(6.5,15.4),vertebrae:g,cords:[[s(-5.3,-4.6),s(-4.5,-4.6),s(-4.5,11.8),s(-5.1,12.4),s(-5.6,11.6)],[s(-5.1,-4.6),s(-4.7,-4.6),s(-4.72,11.4),s(-5.15,11.6)]],nasal:cn([l(0.3,11.2),l(1.1,10.25),l(2.7,10.75),l(4.6,10.85),l(6.4,10.65),l(7.6,10.85),l(8.45,11.3),l(8,12.2),l(6.7,13.4),l(4.4,13.9),l(1.8,13.6),l(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([b,H,L,U])=>Cl(l(b,H),L*a,U*a,-0.04)),palOral:m,palNasal:m.map((b)=>({x:b.x,y:b.y+0.55*a})),jawLower:p,jawUpper:p.map((b)=>({x:b.x,y:b.y+0.75*a})),hyoid:Cl(R,0.5*a,0.28*a,0.3,28),thyroid:[{x:E.x+0.75*a,y:E.y-1.6*a},{x:E.x+1.75*a,y:E.y-0.6*a},{x:E.x+1.95*a,y:E.y+1.2*a},{x:E.x+1.45*a,y:E.y+1.9*a},{x:E.x+1.15*a,y:E.y+1.1*a},{x:E.x+1.3*a,y:E.y-0.4*a},{x:E.x+0.75*a,y:E.y-1.6*a}],trachea:[[{x:E.x-0.65*a,y:E.y},{x:E.x-0.75*a,y:-4.8}],[{x:E.x+0.75*a,y:E.y},{x:E.x+0.95*a,y:-4.8}]],rings:v,outerWall:t.outer.filter((b)=>b.y>E.y||b.x>0),glottisWall:[y,t.outer.find((b)=>b.y>E.y)??y],fibres:T,folds:[[{x:E.x-0.62*a,y:E.y+0.05},{x:E.x-0.1,y:E.y+0.12*a},{x:E.x-0.62*a,y:E.y+0.32*a},{x:E.x-0.62*a,y:E.y+0.05}],[{x:E.x+0.72*a,y:E.y+0.05},{x:E.x+0.12,y:E.y+0.12*a},{x:E.x+0.72*a,y:E.y+0.32*a},{x:E.x+0.72*a,y:E.y+0.05}]],lowerTeeth:[...t.lowerTeeth,r(6.8,6),r(6.4,6.2),t.lowerTeeth[0]]}}class Vr{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(e,t){if(e>=this.next){let i=Math.random()<0.35;this.toPitch=i?0:(Math.random()*2-1)*0.55,this.toYaw=i?0:(Math.random()*2-1)*0.9,this.next=e+1.2+Math.random()*3.5}let n=1-Math.exp(-t*28);this.pitch+=(this.toPitch-this.pitch)*n,this.yaw+=(this.toYaw-this.yaw)*n}}var Hr=(e)=>-1.2-0.025*e;var Dl=()=>{};var Ru=yt(()=>{Qi();Fr()});class qr{hz;damping;x=0;v=0;constructor(e,t){this.hz=e;this.damping=t}step(e,t){let n=2*Math.PI*this.hz,i=Math.max(1,Math.ceil(t/0.008)),s=t/i;for(let r=0;r<i;r++)this.v+=(n*n*(e-this.x)-2*this.damping*n*this.v)*s,this.x+=this.v*s;return this.x}}function C_(e){let t=e.t.pressureRms,n=e.nPh+e.nOr-3;return n>=e.nPh&&n<t.length?t[n]/980.665:0}class Rs{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new qr(6.5,0.32);nodSpring=new qr(2.4,0.42);tiltSpring=new qr(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(e,t){this.clock+=t;let n=e?.t,i=!!n&&n.voicing>0.45&&n.gate>0.3&&n.f0>30&&n.outRms>0.004,s=e?Wr(1.5,7,C_(e)):0;this.puff=Nl(this.cheeks.step(s,t),-0.35,1.25);let r=0,a=0;if(i){let f=Math.log2(n.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(f-this.ref))>14)this.ref=this.fast=f;if(this.ref=Xr(this.ref,f,5,t),Math.abs(12*(f-this.fast))>2.5)this.fast=f,this.held=0;this.fast=Xr(this.fast,f,0.35,t),this.held+=t,r=12*(f-this.ref),a=12*(f-this.fast)}else this.held=0;let o=(i?Nl(r/6,-0.7,1):0)+0.3*this.content;this.brow=Xr(this.brow,o,i?0.12:0.45,t),this.lookUp=0.32*Math.max(0,this.brow);let l=i?0.92*Wr(0.9,1.9,this.held)*Wr(0.15,0.55,this.brow):0;if(this.hold=Xr(this.hold,l,l>this.hold?0.35:0.08,t),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let c=(this.clock-this.blinkAt)/0.17,d=this.blinkAt>=0&&c<1?Math.sin(Math.PI*c)**0.7:0;this.lid=Math.max(d,this.hold,0.95*this.content);let u=e?.beatStep??-1;if(u>=0&&this.lastStep>=0&&u!==this.lastStep){let f=u<this.lastStep;if(f||Math.floor(u/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=f||Math.floor(u/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=u,this.nod=this.nodSpring.step(0.13*this.brow,t);let h=Wr(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(h+0.05*Nl(a,-1.5,1.5),t)}}var Wr=(e,t,n)=>{let i=Math.max(0,Math.min(1,(n-e)/(t-e)));return i*i*(3-2*i)},Nl=(e,t,n)=>Math.max(t,Math.min(n,e)),Xr=(e,t,n,i)=>e+(t-e)*(1-Math.exp(-i/n));function Ul(e,t,n){let i=e.tract,s=Il(e,n),r={x:(t.upperLip[6].x+t.lowerLip[6].x)/2+0.15,y:(t.upperLip[6].y+t.lowerLip[6].y)/2};return[{id:"tongue",pos:t.tongueCenter,label:"Tongue body"},{id:"tip",pos:t.tip,label:"Tongue tip"},{id:"jaw",pos:s(7.5,4.9),label:"Jaw"},{id:"lips",pos:r,label:"Lips"},{id:"velum",pos:t.velum[Math.floor(t.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:t.glottis.x+1.2*i.scale,y:t.glottis.y},label:"Larynx"}]}var Cu=yt(()=>{Qi();Fr();Dl();Ru()});var zu={};ns(zu,{Anatomy3D:()=>Bu});function On(e,t){if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0]){let[i,s]=e[n-1],[r,a]=e[n];return s+(a-s)*(t-i)/(r-i)}return e[e.length-1][1]}function $r(e,t,n=!1){let i=Math.min(1,Math.abs(t)/e.W),s=Math.pow(1-Math.pow(i,e.pf),1/e.pf);return e.xw+(e.Fs-e.xw)*s+(n?0:e.E*Uu(t/e.wf))}function G_(e,t){let n=t>e.xw,i=n?(t-e.xw)/Math.max(0.000001,e.Fs-e.xw):(e.xw-t)/Math.max(0.000001,e.xw-e.Bk),s=n?e.pf:gi;return e.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,i),s)),1/s)}function V_(e,t,n){n.length=0;let i=12,s=10,r=16;for(let o=0;o<i;o++){let l=Math.PI-o/i*(Math.PI/2);n.push(e.xw-(e.xw-e.Bk)*Math.pow(Math.abs(Math.cos(l)),2/gi),e.W*Math.pow(Math.sin(l),2/gi))}let a=Math.asin(Math.min(1,Math.pow(t/e.W,e.pf/2)));for(let o=0;o<s;o++){let l=Math.PI/2-o/s*(Math.PI/2-a),c=e.W*Math.pow(Math.sin(l),2/e.pf);n.push(e.xw+(e.Fs-e.xw)*Math.pow(Math.cos(l),2/e.pf)+e.E*Uu(c/e.wf),c)}for(let o=0;o<=r;o++){let l=t*(1-o/r);n.push($r(e,l),l)}}class Ol{dy;rows=[];y0;y1;constructor(e,t,n){this.dy=t;let i=1/0,s=-1/0;for(let r of e)i=Math.min(i,r.y),s=Math.max(s,r.y);this.y0=i,this.y1=s;for(let r=i;r<=s;r+=t){let a=-1/0,o=1/0;for(let l=0;l<e.length-1;l++){let c=e[l],d=e[l+1];if(c.y>r===d.y>r)continue;let u=c.x+(d.x-c.x)*(r-c.y)/(d.y-c.y);a=Math.max(a,u),o=Math.min(o,u)}this.rows.push(a>o?n(r,a,o):null)}}at(e){let t=(e-this.y0)/this.dy,n=Math.floor(t);if(n<0||n>=this.rows.length-1)return null;let i=this.rows[n],s=this.rows[n+1];if(!i||!s)return i??s;let r=t-n,a=(o,l)=>o+(l-o)*r;return{F:a(i.F,s.F),Bk:a(i.Bk,s.Bk),Fs:a(i.Fs,s.Fs),W:a(i.W,s.W),xw:a(i.xw,s.xw),E:a(i.E,s.E),wf:a(i.wf,s.wf),pf:a(i.pf,s.pf)}}}class Zn{lines=[];cur=[];p(e,t,n){return this.cur.push(e,t,n),this}end(e=!1){if(e&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(e,t,n,i=24,s=0,r=Math.PI*2){for(let a=0;a<=i;a++){let o=s+(r-s)*a/i,l=Math.cos(o),c=Math.sin(o);this.p(e[0]+t[0]*l+n[0]*c,e[1]+t[1]*l+n[1]*c,e[2]+t[2]*l+n[2]*c)}this.end()}}function Fu(e,t,n,i){let s=n/e,r=i/e,a=r>=7?r:7-(7-r)/t,o=1-wn(7.6,9.1,a),l=On(N_,s),c=wn(l-1.5,l+0.15,a),d=On(U_,a),u=wn(d-0.7,d+0.9,s);return o*c*u}function Ou(e,t,n,i){let s=n/e,r=i/e,a=r>=7?r:7-(7-r)/t,o=((s-5.2)/2.3)**2+((a-8.3)/2.4)**2;return o<1?(1-o)**2:0}function Iu(e,t,n,i){if(t===0||i===0)return[0,0];let s=t*i*e;return[X_*s,Math.sign(n)*W_*s*wn(0.4*e,2.6*e,Math.abs(n))]}function q_(e,t,n){let i=t.length;if(t.every(Boolean))return[n?[...e,e[0],e[1],e[2]]:e];let s=[],r=n?t.indexOf(!1)+1:0,a=[];for(let o=0;o<i;o++){let l=(r+o)%i;if(t[l])a.push(e[3*l],e[3*l+1],e[3*l+2]);else{if(a.length>=6)s.push(a);a=[]}}if(a.length>=6)s.push(a);return s}function Y_(e,t){let n=[0];for(let a=1;a<e.length;a++)n.push(n[a-1]+Math.hypot(e[a].x-e[a-1].x,e[a].y-e[a-1].y));let i=n[n.length-1],s=[],r=0;for(let a=0;a<t;a++){let o=i*a/(t-1);while(r<e.length-2&&n[r+1]<o)r++;let l=(o-n[r])/Math.max(0.000000001,n[r+1]-n[r]);s.push({x:e[r].x+(e[r+1].x-e[r].x)*l,y:e[r].y+(e[r+1].y-e[r].y)*l})}return s}function Yr(e,t,n){let i=n*t[t.length-1],s=0;while(s<e.length-2&&t[s+1]<i)s++;let r=(i-t[s])/Math.max(0.000000001,t[s+1]-t[s]);return{x:e[s].x+(e[s+1].x-e[s].x)*r,y:e[s].y+(e[s+1].y-e[s].y)*r}}function $_(e){let t=e.tract,n=t.scale,i=e.bodyParams.pharynx,s=Ll(e),r=(P)=>s(0,P).y,a=(P)=>P/n>=7?P/n:7-(7-P/n)/i,o=(P,B)=>t.P(P,B),l={...Ki,jaw:0,lipAp:0,labiodental:0},c=e.frame(l),d=Gr(e,c,l),u=[...d.skinLower,...d.skinUpper],h=new Ol(u,0.08*n,(P,B,k)=>{let K=a(P),te=K>=3.4&&K<=16.1?On(I_,K)*n:1/0,j=Math.min(B,te),Ee=2.2+0.4*wn(2.5,3.5,K)*(1-wn(17,18.5,K));return{F:B,Bk:k,Fs:j,W:On(P_,K)*n,xw:k+(j-k)*On(D_,K),E:B-j,wf:On(L_,K)*n,pf:Ee}}),f=o(-2.5,10.5),g=c.upperLip[c.upperLip.length-1].y,S=c.lowerLip[c.lowerLip.length-1].y,m=H_*n,p=(P,B,k,K)=>B>S&&B<g&&Math.abs(k)<m&&P>K.xw,E=[],R=(P,B,k)=>{for(let K of q_(P,B,k)){let te=K.length/3,j=new Float32Array(te),Ee=new Float32Array(te);for(let de=0;de<te;de++)j[de]=Fu(n,i,K[3*de],K[3*de+1]),Ee[de]=Ou(n,i,K[3*de],K[3*de+1]);E.push({a:new Float32Array(K),w:j,c:Ee})}},v=[],M=1.4*n;for(let P=h.y0+0.25*n;P<h.y1-0.2*n;P+=M){let B=h.at(P);if(!B||B.W<0.2*n)continue;V_(B,Math.min(0.6*B.W,3.6*n),v);let k=[],K=[],te=v.length/2;for(let j=0;j<te;j++)k.push(v[2*j],P,v[2*j+1]);for(let j=te-2;j>0;j--)k.push(v[2*j],P,-v[2*j+1]);for(let j=0;j<k.length/3;j++)K.push(!p(k[3*j],P,k[3*j+2],B));R(k,K,!0)}let A=0.3*n;for(let P of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((B)=>B*n)){let B=[],k=[];for(let K=h.y0+0.1*n;K<=h.y1;K+=A){let te=h.at(K);if(!te||Math.abs(P)>0.97*te.W){R(B,k,!1),B=[],k=[];continue}let j=$r(te,P);B.push(j,K,P),k.push(!p(j,K,P,te))}R(B,k,!1)}for(let P of[0.5,0.8].map((B)=>B*Math.PI))for(let B of[1,-1]){let k=[],K=[];for(let te=h.y0+0.1*n;te<=h.y1;te+=A){let j=h.at(te);if(!j||j.W<0.2*n)continue;k.push(j.xw-(j.xw-j.Bk)*Math.pow(Math.abs(Math.cos(P)),2/gi),te,B*j.W*Math.pow(Math.sin(P),2/gi)),K.push(!0)}R(k,K,!1)}let T=[],y=[],b=(P,B,k,K,te,j=!1)=>{let Ee=new Zn;te(Ee),P.push({lines:Ee.lines,color:B,width:k,alpha:K,hot:j})},H=(P,B,k,K)=>{let te=cn(B.map(([j,Ee])=>s(j,Ee)),4);te.forEach((j,Ee)=>{let de=h.at(j.y);P.p(j.x,j.y,K*((de?G_(de,j.x):0)+k(Ee,te.length)))}),P.end()};b(T,ge.blueDim,1.05,0.9,(P)=>{for(let B of[1,-1]){H(P,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(K,te)=>(0.25+1.2*Math.sin(Math.PI*K/(te-1))**1.5)*n,B),H(P,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*n,B),H(P,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*n,B);let k=[];for(let K=0;K<=16;K++)k.push([-3.5+0.6*Math.cos(K/16*Math.PI*2),12+0.85*Math.sin(K/16*Math.PI*2)]);H(P,k,()=>0.12*n,B)}}),b(T,ge.blueMid,1,0.8,(P)=>{for(let B of[1,-1]){for(let K=14.6;K>=11.3;K-=0.15){let te=r(K),j=h.at(te);if(!j)continue;let Ee=B*(0.3+1.05*(14.6-K)/3.3)*n;P.p($r(j,Ee),te,Ee)}P.end();let k=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[K,te,j]of k)P.p(K*n,r(te),B*j*n);P.end()}}),b(T,ge.blueMid,1,0.9,(P)=>{for(let B of[1,-1])P.ellipse([8.05*n,r(10.98),B*0.62*n],[0.42*n,0.04*n,0],[0,0,0.26*n],16)});let L=new Ol(d.brain,0.08*n,(P,B,k)=>({F:B,Bk:k,Fs:B,W:On(F_,a(P))*n,xw:k+(B-k)*0.48,E:0,wf:1,pf:2.3}));b(T,ge.blueMid,0.85,0.32,(P)=>{for(let B=L.y0+0.6*n;B<L.y1-0.15*n;B+=1.5*n){let k=L.at(B);if(!k)continue;for(let K=0;K<=48;K++){let te=K/48*Math.PI*2,j=Math.cos(te),Ee=Math.sin(te),de=j>=0?k.pf:gi,Ne=j>=0?k.xw+(k.Fs-k.xw)*Math.pow(j,2/de):k.xw-(k.xw-k.Bk)*Math.pow(-j,2/de);P.p(Ne,B,Math.sign(Ee)*k.W*Math.pow(Math.abs(Ee),2/de))}P.end()}for(let B of[0.3,0.7].map((k)=>k*Math.PI))for(let k of[1,-1]){for(let K=L.y0;K<=L.y1;K+=0.3*n){let te=L.at(K);if(!te)continue;let j=Math.cos(B),Ee=Math.sin(B),de=j>=0?te.pf:gi,Ne=j>=0?te.xw+(te.Fs-te.xw)*Math.pow(j,2/de):te.xw-(te.xw-te.Bk)*Math.pow(-j,2/de);P.p(Ne,K,k*te.W*Math.pow(Ee,2/de))}P.end()}}),b(T,ge.blueDim,0.9,0.6,(P)=>{for(let B=0;B<9;B++){let k=-4.4+B*1.75;if(k>10.5)break;let K=Hr(k)-2.25,te=o(K,k+0.08),j=o(K,k+1.32),Ee=o(K+0.8,0).x,de=0.8*n,Ne=1.05*n;for(let qe of[te.y,j.y])P.ellipse([Ee,qe,0],[de,0,0],[0,0,Ne],24);for(let qe of[0.25,0.75,1.25,1.75].map(($e)=>$e*Math.PI))P.p(Ee+de*Math.cos(qe),te.y,Ne*Math.sin(qe)).p(Ee+de*Math.cos(qe),j.y,Ne*Math.sin(qe)).end();let Be=(te.y+j.y)/2,Fe=Ee-2.15*n;P.ellipse([Fe,Be,0],[0.72*n,0,0],[0,0,0.88*n],20);for(let qe of[1,-1])P.p(Ee-0.7*n,Be,qe*0.55*n).p(Fe+0.45*n,Be,qe*0.72*n).end(),P.p(Ee-0.5*n,Be,qe*0.95*n).p(Ee-0.9*n,Be-0.1*n,qe*2.3*n).end();P.p(Fe-0.72*n,Be,0).p(Fe-1.8*n,Be-0.55*n,0).end()}}),b(T,ge.blueDim,0.85,0.5,(P)=>{let B=o(-4.9,0).x;for(let k=-4.4;k<=11;k+=1.75)P.ellipse([B,o(0,k).y,0],[0.42*n,0,0],[0,0,0.6*n],16);for(let k of[1,-1])P.p(B,o(0,-4.6).y,k*0.6*n).p(B,o(0,11.4).y,k*0.6*n).end()}),b(T,ge.blueDim,0.9,0.7,(P)=>{for(let B of[1,-1]){for(let k of d.nasal)P.p(k.x,k.y,B*1.2*n);P.end(!0);for(let k of d.turbinates){for(let K of k)P.p(K.x,K.y,B*0.95*n);P.end()}}});let U=(P,B,k)=>{let K=[];for(let te=0;te<=60;te++){let j=k*te/60;K.push({x:P-B*Math.pow(j/k,1.85),y:j})}return{pts:K,cum:Bl(K)}},G=(P,B,k,K,te,j,Ee)=>{let de=U(B,k,K),Ne=de.cum[de.cum.length-1],Be=te.reduce((qe,$e)=>qe+$e[0],0),Fe=0.97*Ne/(Be*n);for(let qe of[1,-1]){let $e=0;for(let[_t,dt,ft]of te){let D=_t*n*Fe,bt=dt*n,je=ft*n,at=($e+D/2)/Ne;$e+=D;let w=Yr(de.pts,de.cum,at),_=Yr(de.pts,de.cum,Math.min(1,at+0.01)),N=Yr(de.pts,de.cum,Math.max(0,at-0.01)),Y=_.x-N.x,re=_.y-N.y,ce=Math.hypot(Y,re)||1;Y/=ce,re/=ce;let fe=re,Q=-Y,ie=j(w.y/K),_e=(we,he,le=0)=>[w.x+Y*we-fe*le,ie+Ee*he,qe*(w.y+re*we-Q*le)];for(let[we,he]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])P.p(..._e(we*D,he*bt));P.end(!0);for(let[we,he]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])P.p(..._e(we*D,0,he*je));P.end(!0)}}},C=o(7.3,0).x,I=4.2*n,q=2.65*n;b(T,ge.blue,1,0.8,(P)=>G(P,C,I,q,z_,(B)=>(7.95+0.3*B*B)*n,1)),b(T,ge.blueMid,1,0.6,(P)=>{for(let B of[0,2,4,5,6,7]){let k=d.palOral[B],K=Math.max(0,(C-k.x)/I),te=(K>=1?q:q*Math.pow(K,0.5405405405405405))-0.45*n,j=(8.95+0.3*Math.min(1,te/q)**2)*n;if(te<0.6*n||k.y<j+0.15*n)continue;for(let Ee=0;Ee<=20;Ee++){let de=te*(Ee/10-1);P.p(k.x,j+(k.y-j)*Math.pow(1-Math.pow(Math.abs(de)/te,2.4),0.7),de)}P.end()}});let V=(P,B,k)=>{let K=o(P,B);return[K.x,K.y,k*n]},se=(P,B,k)=>{let K=B.map(([te,j,Ee])=>V(te,j,k*Ee));for(let te=0;te<K.length-1;te++){let j=K[Math.max(0,te-1)],Ee=K[te],de=K[te+1],Ne=K[Math.min(K.length-1,te+2)];for(let Be=0;Be<4;Be++){let Fe=Be/4,qe=Fe*Fe,$e=qe*Fe,_t=(dt,ft,D,bt)=>0.5*(2*ft+(-dt+D)*Fe+(2*dt-5*ft+4*D-bt)*qe+(-dt+3*ft-3*D+bt)*$e);P.p(_t(j[0],Ee[0],de[0],Ne[0]),_t(j[1],Ee[1],de[1],Ne[1]),_t(j[2],Ee[2],de[2],Ne[2]))}}P.p(...K[K.length-1]),P.end()};b(y,ge.red,1.25,0.9,(P)=>{for(let B of[1,-1]){se(P,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],B),se(P,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],B);let k=V(-2.5,10.5,B*4.95);P.ellipse(k,[0.45*n,0,0],[0,0.12*n,0.85*n],16)}}),b(y,ge.red,1,0.55,(P)=>{for(let B of[1,-1]){se(P,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],B);for(let[k,K,te,j,Ee]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])se(P,[[k,7.15,K],[(k+te)/2,5.9,(K+Ee)/2+0.15],[te,j,Ee]],B)}});let Z=new Zn;se(Z,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let ne=Z.lines[0],ae=o(6.98,0).x,Pe=4*n,Ce=2.5*n;b(y,ge.blue,1,0.8,(P)=>G(P,ae,Pe,Ce,k_,(B)=>(7.75+0.45*Math.pow(B,1.5))*n,-1));let We=s(6.15,15.35),ke=new z(0.3*n,(h.y0+h.y1)/2,0);return{model:e,head:h,condyle:f,lipHalf:m,center:ke,shell:E,fixed:T,jaw:y,chin:ne,eyes:[[We.x,We.y,3.15*n],[We.x,We.y,-3.15*n]],eyeR:1.05*n}}class Bu{scene=new pr;camera=new Ft(24,1,5,2000);beams=new Rl;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new Vr;face=new Rs;eye=new z;turn=new ln;euler=new pn;strobe=0;tmp=new Tl;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new z;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new xs(0,50,100);for(let e=0;e<200;e++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}attachAccessory(e){this.beams.group.add(e)}resetMotion(){this.face=new Rs,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let e of this.particles)e.px=NaN}resize(e,t){if(this.w=e,this.h=t,this.compact=e<560,this.camera.aspect=e/t,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(e,t,0.1*e,0,e,t);this.camera.updateProjectionMatrix(),this.beams.setResolution(e,t);for(let n of this.particles)n.px=NaN}poses(e){let t=this.restFor(e),n=Math.tan(this.camera.fov*Math.PI/360),i=1.1*Math.max(15.2/n,11/(n*Math.max(0.3,this.camera.aspect))),s=t.center.clone(),r=this.facing>0?0.62:Math.PI-0.62,a=0.2;return{target:s,home:s.clone().add(new z(Math.sin(r)*Math.cos(0.2),Math.sin(0.2),Math.cos(r)*Math.cos(0.2)).multiplyScalar(i)),side:s.clone().add(new z(0,0,this.facing*i))}}restFor(e){if(!this.rest||this.rest.model!==e)this.rest=$_(e);return this.rest}project(e,t,n){let i=this.v3.set(e,t,n).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(i.x+1)/2*this.w,(1-i.y)/2*this.h]}pxPerCmAt(e,t,n){let i=this.camera.matrixWorld.elements,[s,r]=this.project(e,t,n),[a,o]=this.project(e+i[0],t+i[1],n+i[2]);return Math.hypot(a-s,o-r)}crown(e){let t=this.restFor(e),n=e.tract.scale,i=t.head.at(t.head.y1-1.2*n),s=i?(i.F+i.Bk)/2:t.center.x,[r,a]=this.project(s,t.head.y1,0);return{x:r,y:a,cmPx:this.pxPerCmAt(s,t.head.y1,0)}}faceView(e,t,n){let i=Ul(e,t,n).find((s)=>s.id==="lips").pos;return{handles:Ul,X:(s)=>this.project(s.x,s.y,0)[0],Y:(s)=>this.project(s.x,s.y,0)[1],pxPerCm:this.pxPerCmAt(i.x,i.y,0)}}update(e,t,n,i,s,r){this.clock+=r;let a=this.restFor(e),o=e.tract.scale,l=this.face;this.headPose(a,o);let c=Pl(e,n.jaw),d=a.condyle,u=this.beams,h=this.camera.position.distanceTo(a.center),f=this.scene.fog;f.near=h-3*o,f.far=h+30*o,u.begin();let g=(G,C=0)=>{let I=new Float32Array(G.length*3);return G.forEach((q,V)=>{I[3*V]=q.x,I[3*V+1]=q.y,I[3*V+2]=C}),I},S=this.v3.copy(this.eye).sub(a.center).normalize(),m=wn(0.25,0.8,Math.abs(S.z)),p=0.22+0.78*m,E=0.45+0.55*m,R=(G,C,I,q={},V=p)=>u.line(g(G),G.length,C,I,{...q,alpha:(q.alpha??1)*V}),v=(G,C,I)=>I===0?[G,C]:Lu(G,C,d,I);this.k=o;for(let G of a.fixed)for(let C of G.lines)u.line(C,C.length/3,G.color,G.width,{alpha:G.alpha,hot:G.hot});for(let G of a.jaw)for(let C of G.lines){let I=this.tmp.reset();for(let q=0;q<C.length;q+=3){let[V,se]=v(C[q],C[q+1],c);I.p(V,se,C[q+2])}u.poly(I,G.color,G.width,{alpha:G.alpha,hot:G.hot})}for(let G of a.shell){let C=this.tmp.reset();for(let I=0;I<G.w.length;I++){let q=G.a[3*I+2],[V,se]=Iu(o,G.c[I],q,l.puff),[Z,ne]=v(G.a[3*I]+V,G.a[3*I+1],c*G.w[I]);C.p(Z,ne,q+se)}u.poly(C,ge.blueDim,0.85,{alpha:0.42})}let M=Gr(e,t,n);R(M.inset,ge.blueDim,0.9,{alpha:0.5}),R(M.skull,ge.blueDim,0.9,{close:!0,alpha:0.6}),R(M.brain,ge.blueMid,1,{close:!0,alpha:0.75}),R(M.sulcus,ge.blueDim,0.9),R(M.nasal,ge.blueMid,1,{close:!0}),R(M.palOral,ge.blueMid,1.1),R(M.palNasal,ge.blueMid,1.1),R(M.skinLower,ge.blue,1.5),R(M.skinUpper,ge.blue,1.5),R(M.outerWall,ge.blue,1.4,{hot:!0}),R(t.inner,ge.blue,1.3,{alpha:0.9}),R(M.glottisWall,ge.blue,1.2,{alpha:0.8}),this.eyes(a,r),this.airway(e,t,i,s,o),this.velum(t,o),this.epiglottis(t,o,E),this.larynx(e,t,n,i,o,r,a.head.y0,p);let A=g(t.tongue),T=(G,C)=>g(Ur(G.map((I)=>[I.x,I.y]),C).map(([I,q])=>({x:I,y:q}))),y=T(t.upperLip,2),b=T(t.lowerLip,2),H=this.lips(a,e,t,n,c),L=a.chin,U=new Float32Array(L.length);for(let G=0;G<L.length;G+=3){let[C,I]=v(L[G],L[G+1],c);U[G]=C,U[G+1]=I}if(i&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let G=[{a:A,color:ge.green},{a:U,color:ge.red},{a:y,color:ge.pink},{a:b,color:ge.pink}];if(H)G.push({a:H,color:ge.pink});this.echoes.push({t:this.clock,lines:G});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(i)Z_.forEach((G,C)=>{let I=this.nearestEcho(this.clock-G);if(!I)return;for(let q of I.lines)u.line(q.a,q.a.length/3,q.color,1,{alpha:(0.1+0.07*C)*E})});if(this.tongue(t,n,o),u.line(U,U.length/3,ge.red,1.5,{hot:!0,alpha:E}),u.line(A,t.tongue.length,ge.green,1.6,{hot:!0,alpha:E}),u.line(y,y.length/3,ge.pink,1.5,{hot:!0,alpha:E}),u.line(b,b.length/3,ge.pink,1.5,{hot:!0,alpha:E}),R(Ur(t.velum.map((G)=>[G.x,G.y]),3).map(([G,C])=>({x:G,y:C})),ge.white,1.25,{alpha:0.92},E),s.particles&&i)this.drawParticles(e,t,i,r);if(i)this.drawTurbulence(e,t,i);if(this.caliper=null,s.calipers)this.drawCaliper(t);u.end()}nearestEcho(e){let t=null,n=0.016;for(let i of this.echoes){let s=Math.abs(i.t-e);if(s<n)n=s,t=i}return t}headPose(e,t){let n=this.beams.group,i=this.v3.set(-2.4*t,e.head.y0+0.42*(e.condyle.y-e.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),n.quaternion.copy(this.turn),n.position.copy(i).sub(i.applyQuaternion(this.turn)),n.updateMatrixWorld(!0),this.eye.copy(this.camera.position),n.worldToLocal(this.eye)}eyes(e,t){let n=this.gaze,i=this.face;n.update(this.clock,t);let s=e.eyeR,r=n.pitch+1.3*i.lookUp,a=[Math.cos(r)*Math.cos(n.yaw),Math.sin(r),Math.cos(r)*Math.sin(n.yaw)],o=(u)=>{let h=Math.abs(u[1])>0.9?[1,0,0]:[0,1,0],f=Nu(Du(h,u));return[f,Du(u,f)]},l=this.eye,c=1-wn(0.4,0.9,i.lid),d=Math.max(0,i.brow);for(let u of e.eyes){let h=Nu([l.x-u[0],l.y-u[1],l.z-u[2]]),[f,g]=o(h),S=new Zn;S.ellipse(u,ts(f,s),ts(g,s),36);let[m,p]=o(a),E=[u[0]+a[0]*s*0.86,u[1]+a[1]*s*0.86,u[2]+a[2]*s*0.86];S.ellipse(E,ts(m,s*0.5),ts(p,s*0.5),24);let R=[u[0]+a[0]*s*0.97,u[1]+a[1]*s*0.97,u[2]+a[2]*s*0.97];S.ellipse(R,ts(m,s*0.2),ts(p,s*0.2),14);let v=Math.sign(u[2]),M=(L,U,G)=>L*(1-U*U)+0.06*U*v*G,A=(L)=>{for(let U=0;U<=16;U++){let G=-1+U/8,C=v*G*0.95,I=M(-0.36,G,-1),q=L?M(0.5+0.2*d,G,1)*(1-i.lid)+(I+0.03)*i.lid:I;S.p(u[0]+1.04*s*Math.cos(q)*Math.cos(C),u[1]+1.04*s*Math.sin(q),u[2]+1.04*s*Math.cos(q)*Math.sin(C))}S.end()};A(!0),A(!1);let T=0.3*i.brow,y=0.28*Math.max(0,-i.brow),b=0.22*i.lid*d;for(let L=0;L<=12;L++){let U=-1+L/6,G=v*(0.15+U*0.62),C=(1-U)/2,I=0.82+0.12*(1-U*U)-0.06*U+T+(b-y)*C;S.p(u[0]+1.32*s*Math.cos(I)*Math.cos(G),u[1]+1.32*s*Math.sin(I),u[2]+1.32*s*Math.cos(I)*Math.sin(G))}S.end();let H=[[ge.blueMid,1,0.35],[ge.blue,1,0.9*c],[ge.blue,1,0.7*c],[ge.blue,1.25,0.95],[ge.blue,1.05,0.75],[ge.blueMid,1.3,0.8]];S.lines.forEach((L,U)=>this.beams.line(L,L.length/3,H[U][0],H[U][1],{alpha:H[U][2]}))}}lips(e,t,n,i,s){let r=t.tract.scale,{condyle:a,head:o}=e,l=this.beams,c=t.bodyParams.pharynx,d=e.lipHalf,u=Math.max(0.3*r,(1.1+(t.bodyParams.lipWidth-1.1)*Pu(i.lipWidth))*r/2),h=n.upperLip.slice(6),f=n.lowerLip.slice(6).map((I)=>Nr(I,a,-s)),g=Bl(h),S=Bl(f),m=h[0],p=f[0],E=(m.y+p.y)/2,R=(I,q)=>{let V=o.at(I);return V?$r(V,q,!0):0},v=m.x-R(m.y,0),M=p.x-R(p.y,0),A=(v+M)/2,T=h[h.length-1].y,y=f[f.length-1].y,b=this.tmp,H=(I,q,V)=>{let se=Math.sqrt(Math.max(0,1-(V/u)**2)),Z=Yr(I?h:f,I?g:S,q),ne=I?m:p,ae=I?T:y,Pe=E+(ne.y-E)*se,Ce=ae-ne.y,We=Pe+(Z.y-ne.y)*(ae-Pe)/(Math.abs(Ce)<0.0001?0.0001:Ce),ke=Math.pow(Math.max(0,1-(V/d)**2),1.5),P=Z.x-R(Z.y,0)+(A-(I?v:M))*(1-se)*(1-q),B=R(We,V)+P*ke,k=I?0.5*(1-se)*(1-q):0.5*(1+se)+0.5*(1-se)*q,K=k+(Fu(r,c,B,We)-k)*wn(u,d,Math.abs(V)),[te,j]=Iu(r,Ou(r,c,B,We),V,this.face.puff),[Ee,de]=K?Lu(B+te,We,a,s*K):[B+te,We];return[Ee,de,V+j]},L=(I,q,V,se,Z)=>{b.reset();for(let ne=0;ne<=Z;ne++){let ae=V+(se-V)*ne/Z;b.p(...H(I,q(ae),ae))}return b},U=[0.66,0.88];for(let I of[!0,!1]){for(let se of U)l.poly(L(I,()=>se,-d,d,24),ge.blueDim,0.85,{alpha:0.42});for(let se of[-0.8,-0.5,0.5,0.8].map((Z)=>Z*d)){b.reset();for(let Z=0;Z<=8;Z++)b.p(...H(I,0.45+0.55*Z/8,se));l.poly(b,ge.blueDim,0.85,{alpha:0.42})}let q=Math.min(d,u+0.3*r),V=(se)=>{let Z=Math.sqrt(Math.max(0,1-(se/q)**2)),ne=I?-0.07*Math.exp(-((se/(0.32*r))**2))+0.05*Math.exp(-(((Math.abs(se)-0.55*r)/(0.3*r))**2)):0;return Math.max(0,(I?0.42:0.45)*Z+ne*Z)};l.poly(L(I,V,-q,q,28),ge.pink,1.3,{alpha:0.95}),l.poly(L(I,(se)=>0.45*V(se),-q,q,28),ge.pink,1,{alpha:0.45})}for(let I of[1,-1])l.poly(L(!0,()=>0,I*u,I*d,6),ge.pink,1,{alpha:0.6});let G=n.upperLip[6].y-n.lowerLip[6].y>0.02*r,C=24;b.reset();for(let I=0;I<=C;I++)b.p(...H(!0,0,-u+2*u*I/C));if(G)for(let I=C-1;I>0;I--)b.p(...H(!1,0,-u+2*u*I/C));return l.poly(b,ge.pink,2.1,{hot:!0,close:G}),G?b.a.slice(0,b.n*3):null}tongue(e,t,n){let i=e.tongue,s=0,r=1/0;i.forEach((h,f)=>{let g=(h.x-e.tip.x)**2+(h.y-e.tip.y)**2;if(g<r)r=g,s=f});let a=22,o=Y_(i.slice(0,s+1),a),l=Pu(t.lateral),c=o.map((h,f)=>{let g=o[Math.max(0,f-1)],S=o[Math.min(a-1,f+1)],m=S.x-g.x,p=S.y-g.y,E=Math.hypot(m,p)||1;m/=E,p/=E;let R=f/(a-1);return{p:h,nx:-p,ny:m,W:On(O_,R)*n,h:(On(B_,R)+0.8*l*wn(0.45,0.8,R))*n}}),d=(h,f)=>{let g=h.h*(1-Math.cos(f));return[h.p.x-h.nx*g,h.p.y-h.ny*g,h.W*Math.sin(f)]},u=this.tmp;for(let h=1;h<a-1;h+=2){u.reset();for(let f=0;f<=12;f++)u.p(...d(c[h],-Math.PI/2+Math.PI*f/12));this.beams.poly(u,ge.green,1,{alpha:0.5})}for(let h of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){u.reset();for(let f of c)u.p(...d(f,h));this.beams.poly(u,ge.green,Math.abs(h)>1?1.25:1,{alpha:Math.abs(h)>1?0.8:0.45})}}airway(e,t,n,i,s){let r=t.grid,a=this.ring;if(a.n=0,r.length<2)return;let o=n?e.nodeS(n.t.phLen,n.t.orLen):null,l=i.pressure&&n&&o&&o.length===n.t.pressureRms.length,c=-1,d=0;for(let g=0;g<r.length&&a.n<a.s.length;g++){let S=r[g],m=S.outer.x-S.inner.x,p=S.outer.y-S.inner.y,E=Math.hypot(m,p);if(E>0.0001)c=m/E,d=p/E;let R=S.d/2,v=a.n++;a.s[v]=S.s,a.cx[v]=S.outer.x-c*R,a.cy[v]=S.outer.y-d*R,a.ux[v]=c,a.uy[v]=d,a.a[v]=R,a.b[v]=S.d>0.01?Math.min(3.5*s,2*S.area/(Math.PI*S.d)):0}let u=this.tmp,h=this.eye;for(let g=0;g<a.n;g+=2){u.reset();for(let v=0;v<=24;v++){let M=v/24*Math.PI*2,A=Math.cos(M)*a.a[g],T=Math.sin(M)*a.b[g];u.p(a.cx[g]+a.ux[g]*A,a.cy[g]+a.uy[g]*A,T)}let S=h.x-a.cx[g],m=h.y-a.cy[g],p=h.z,E=Math.abs(a.uy[g]*S-a.ux[g]*m)/(Math.hypot(S,m,p)||1),R=1-0.65*E*E;if(l){let v=Math.pow(yl(Fl(n.t.pressureRms,o,a.s[g])),0.85);this.beams.poly(u,xl(v),0.85,{alpha:(0.25+0.65*v)*R})}else this.beams.poly(u,ge.blueDim,0.85,{alpha:(i.grid?0.8:0.45)*R})}for(let g of[1,-1]){u.reset();for(let S=0;S<a.n;S++)u.p(a.cx[S],a.cy[S],g*a.b[S]);this.beams.poly(u,ge.blue,1,{alpha:0.55})}let f=t.glottis;for(let g of[0.3,0.65]){let S=f.x+(a.cx[0]-f.x)*g,m=f.y+(a.cy[0]-f.y)*g,p=(0.55+0.25*g)*s;u.reset();for(let E=0;E<=20;E++)u.p(S+p*Math.cos(E/20*Math.PI*2),m,p*Math.sin(E/20*Math.PI*2));this.beams.poly(u,ge.blueDim,0.9,{alpha:0.6})}}airPoint(e,t,n,i){let s=this.ring;if(s.n<2)return null;if(t<=s.s[0]){let u=Math.max(0,t/Math.max(0.01,s.s[0])),h=e.glottis;return[h.x+(s.cx[0]-h.x)*u+n*0.3*this.k,h.y+(s.cy[0]-h.y)*u,i*0.45*this.k]}let r=0,a=s.n-1;if(t>=s.s[a])return null;while(a-r>1){let u=r+a>>1;if(s.s[u]<=t)r=u;else a=u}let o=(t-s.s[r])/Math.max(0.000001,s.s[a]-s.s[r]),l=(u)=>u[r]+(u[a]-u[r])*o,c=l(s.a)*n*0.82,d=l(s.b)*i*0.82;return[l(s.cx)+l(s.ux)*c,l(s.cy)+l(s.uy)*c,d]}drawParticles(e,t,n,i){let s=n.t,r=e.nodeS(s.phLen,s.orLen),a=new Float32Array(s.phAreas.length+s.orAreas.length);a.set(s.phAreas,0),a.set(s.orAreas,s.phAreas.length);let o=t.lipS;for(let l of this.particles){let c=Fl(s.flow,r,l.s),d=Math.max(0.05,Fl(a,r,l.s)),u=c/d,h=Math.sign(u)*2.2*Math.log1p(Math.abs(u)/30);if(l.s+=h*i,l.life-=i*0.25,l.s>o||l.s<0||l.life<=0||Math.abs(u)<3){if(!(Math.abs(u)<3&&l.life>0)){l.s=Math.random()*0.8,l.u=Math.random()*2-1,l.v=Math.random()*2-1,l.life=0.6+Math.random()*0.8,l.px=NaN;continue}}let f=this.airPoint(t,l.s,l.u,l.v);if(!f)continue;if(Number.isFinite(l.px)){let g=Math.min(2,Math.floor(Math.min(1,Math.abs(h)/6)*Math.min(1,l.life)*3));this.beams.seg(l.px,l.py,l.pz,f[0],f[1],f[2],"#ffe2a8",1.05,0.16+0.2*g)}[l.px,l.py,l.pz]=f}}drawTurbulence(e,t,n){let i=n.t;if(!(i.noiseLevel>1)||i.noiseNode<0)return;let s=e.branchS(i.noiseNode,i.phLen,i.orLen);if(s<0)return;let r=Math.min(1,Math.log10(i.noiseLevel)/3.2);if(r<=0.05)return;let a=this.sparkSeed=this.sparkSeed*16807%2147483647,o=()=>(a=a*16807%2147483647)/2147483647;for(let l=0;l<40;l++){let c=this.airPoint(t,s+0.2+o()*1.2,o()*2-1,o()*2-1);if(!c)continue;let d=0.02+o()*0.05;this.beams.seg(c[0]-d,c[1],c[2],c[0]+d,c[1],c[2],"#f4fbff",1.6,0.15+0.7*r*o())}}drawCaliper(e){let t=this.ring,n=-1,i=1/0;for(let a=2;a<e.grid.length-1;a++)if(e.grid[a].area<i)i=e.grid[a].area,n=a;if(n<0||i>=1.2||n>=t.n)return;let s=this.tmp.reset();for(let a=0;a<=24;a++){let o=a/24*Math.PI*2,l=Math.cos(o)*t.a[n],c=Math.sin(o)*t.b[n];s.p(t.cx[n]+t.ux[n]*l,t.cy[n]+t.uy[n]*l,c)}this.beams.poly(s,ge.white,1.3,{hot:!0});let r=e.grid[n];this.caliper={x:r.outer.x,y:r.outer.y,z:0,area:i}}velum(e,t){let n=e.velum,i=Math.floor(n.length/2)-1,s=[];for(let o=0;o<=i;o++){let l=n[o],c=n[n.length-1-o],d=l.x-c.x,u=l.y-c.y,h=Math.hypot(d,u)||1;d/=h,u/=h;let f=o/i;s.push({x:(l.x+c.x)/2,y:(l.y+c.y)/2,nx:d,ny:u,W:(1.95-1.5*Math.pow(f,1.5))*t,droop:0.45*t*f})}let r=(o,l)=>{let c=0.12*t*(1-l*l)-o.droop*l*l;return[o.x+o.nx*c,o.y+o.ny*c,o.W*l]},a=this.tmp;for(let o of[1,3,5,7,9].filter((l)=>l<=i)){a.reset();for(let l=0;l<=12;l++)a.p(...r(s[o],-1+l/6));this.beams.poly(a,ge.white,1,{alpha:0.5})}for(let o of[-1,1]){a.reset();for(let l of s)a.p(...r(l,o));this.beams.poly(a,ge.white,1,{alpha:0.65})}}epiglottis(e,t,n){let[i,s]=e.epiglottis,r=s.x-i.x,a=s.y-i.y,o=Math.hypot(r,a)||1;r/=o,a/=o;let l={x:-a,y:r},c=(h)=>(0.22+0.9*Math.pow(Math.sin(h*Math.PI/2),1.3))*t,d=this.tmp.reset(),u=10;for(let h=0;h<=u;h++){let f=h/u,g=c(f),S=0.28*t*(g/(1.12*t));d.p(i.x+r*o*f+l.x*S,i.y+a*o*f+l.y*S,g)}for(let h=1;h<12;h++){let f=c(1)*(1-2*h/12),g=0.28*t*(Math.abs(f)/(1.12*t))**2;d.p(s.x+l.x*g+r*0.08*t*(1-(f/c(1))**2),s.y+l.y*g+a*0.08*t*(1-(f/c(1))**2),f)}for(let h=u;h>=0;h--){let f=h/u,g=c(f),S=0.28*t*(g/(1.12*t));d.p(i.x+r*o*f+l.x*S,i.y+a*o*f+l.y*S,-g)}this.beams.poly(d,ge.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([i.x,i.y,0,s.x,s.y,0]),2,ge.blue,2.1,{alpha:0.85*n})}larynx(e,t,n,i,s,r,a,o){let l=t.glottis,c=this.beams,d=new Zn,u=(M,A,T)=>[l.x+M*s,l.y+A*s,T*s],h=(M,A=!1)=>{for(let[T,y,b]of M)d.p(...u(T,y,b));d.end(A)};for(let M of[1,-1])h([[1.45,1.75,0],[0.75,2,M*1.2],[-0.5,1.95,M*1.9],[-0.6,-0.6,M*1.85],[0.25,-0.85,M*1.5],[1.05,-0.8,M*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),h([[-0.5,1.95,M*1.9],[-0.7,2.85,M*1.85]]),h([[-0.6,-0.6,M*1.85],[-0.45,-1.25,M*1.7]]);for(let[M,A]of[[-1.75,0.15],[-1.4,1.1]]){for(let T=0;T<=28;T++){let y=T/28*Math.PI*2;d.p(...u(0.1+1*Math.cos(y),M+A*(1-Math.cos(y))/2,1.1*Math.sin(y)))}d.end()}for(let M of d.lines)c.line(M,M.length/3,ge.blueMid,1,{alpha:0.85});let f=new Zn,g=l.y-2.1*s,S=l.x+0.08*s;for(let M=g;M>a;M-=0.5*s)f.ellipse([S,M,0],[0.82*s,0,0],[0,0,0.95*s],20,-0.8*Math.PI,0.8*Math.PI);for(let M of[1,-1])f.p(S,g,M*0.95*s).p(S,a,M*0.95*s).end();for(let M of f.lines)c.line(M,M.length/3,ge.blueDim,0.9,{alpha:0.85});for(let M of[1,-1])c.line(new Float32Array([S+M*0.82*s,l.y,0,S+M*0.82*s,a,0]),2,ge.blueMid,1,{alpha:o});let m=new Zn,p={x:e.tract.P(1.6,0).x,y:e.tract.P(0,2.9).y+0.6*n.larynx*s};for(let M of[-0.16,0.16]){for(let A=0;A<=20;A++){let T=-1+A/10;m.p(p.x+(0.35-0.65*T*T)*s,p.y+M*s,1.15*T*s)}m.end();for(let A of[1,-1])m.p(p.x-0.3*s,p.y+M*s,A*1.15*s).p(p.x-2.8*s,p.y+(0.7+M)*s,A*2.05*s).end()}for(let M of m.lines)c.line(M,M.length/3,ge.blueMid,1,{alpha:0.85});let E=i?.t.glottalArea,R=0;if(E&&E.length){this.strobe=(this.strobe+r/1.8)%1;let M=0.02;for(let A=0;A<E.length;A++)M=Math.max(M,E[A]);if(R=Math.min(0.45*s,E[Math.floor(this.strobe*E.length)%E.length]/(1.3*s)*2.2),!Number.isFinite(R))R=0}let v=new Zn;for(let M of[1,-1])v.p(...u(0.72,0.1,0)).p(...u(-0.55,0.1,M*(0.06+R/s))).end(),v.p(...u(0.72,0,0)).p(...u(-0.6,0,M*0.62)).end(),v.p(...u(0.65,0.45,0)).p(...u(-0.5,0.45,M*0.45)).end(),v.ellipse(u(-0.72,0.15,M*(0.3+R/s)),[0.18*s,0,0],[0,0.12*s,0.12*s],10);v.lines.forEach((M,A)=>c.line(M,M.length/3,A%4===0?ge.white:ge.blueMid,A%4===0?1.3:1,{alpha:A%4===2?0.6:0.9,hot:A%4===0}))}}function Lu(e,t,n,i){let s=e-n.x,r=t-n.y,a=Math.cos(i),o=Math.sin(i);return[n.x+s*a-r*o,n.y+s*o+r*a]}function Fl(e,t,n){let i=0,s=1/0;for(let r=0;r<t.length;r++){let a=Math.abs(t[r]-n);if(a<s)s=a,i=r}return e[i]??0}var wn=(e,t,n)=>{let i=Math.max(0,Math.min(1,(n-e)/(t-e)));return i*i*(3-2*i)},Pu=(e)=>Math.max(0,Math.min(1,e)),P_,I_,L_,D_,N_,U_,F_,O_,B_,z_,k_,H_=3,gi=2.2,Uu=(e)=>Math.abs(e)<1?(1-e*e)**2:0,W_=1.7,X_=0.55,Bl=(e)=>{let t=[0];for(let n=1;n<e.length;n++)t.push(t[n-1]+Math.hypot(e[n].x-e[n-1].x,e[n].y-e[n-1].y));return t},Z_,Du=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Nu=(e)=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},ts=(e,t)=>[e[0]*t,e[1]*t,e[2]*t];var ku=yt(()=>{pi();Dr();Qi();Fr();Tu();Dl();Cu();P_=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],I_=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],L_=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],D_=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],N_=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],U_=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],F_=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],O_=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],B_=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],z_=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],k_=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]];Z_=[0.09,0.06,0.03]});function Gu(e){let t=Hu(e.female),n=Hu(e.child);return[["male",(1-n)*(1-t)],["female",(1-n)*t],["child",n]]}var Hu=(e)=>Number.isFinite(e)?Math.min(1,Math.max(0,e)):0;var Vu=()=>{};var Xu={};ns(Xu,{VoiceModel:()=>Wu});class Wu{body;bodyParams;tract;vowels;nPh;nOr;model;cacheKey="";cacheFrame=null;tfKey="";tf=null;constructor(e,t){this.body=e,this.model=dl(e,t),this.bodyParams=this.model.body,this.tract=new Lr(this.bodyParams),this.nPh=this.model.nPh,this.nOr=this.model.nOr;let n=Gu(e).filter(([,i])=>i>0).map(([i,s])=>({w:s,table:hl[i]??{}}));this.vowels=ul.filter((i)=>n.every((s)=>s.table[i.ipa])).map((i)=>{let s=(a)=>{let o=0,l=0;for(let c of n){let d=a(c.table[i.ipa]);if(d!==void 0)o+=c.w*d,l+=c.w}return l>0?o/l:void 0},r={};for(let a of ji){let o=s((l)=>l.artic[a]);if(o!==void 0)r[a]=o}return{ipa:i.ipa,example:i.example,F1:s((a)=>a.formants[0]),F2:s((a)=>a.formants[1]),artic:r}})}dispose(){fl(this.model)}static articFromArray(e){let t={...Ki};return ji.forEach((n,i)=>t[n]=e[i]),t}frame(e){let t=ji.map((n)=>e[n].toFixed(3)).join(",");if(t!==this.cacheKey||!this.cacheFrame)this.cacheFrame=pl(this.model,e),this.cacheKey=t;return this.cacheFrame}areas(e){return ml(this.model,e)}transfer(e){let t=ji.map((n)=>e[n].toFixed(2)).join(",");if(t===this.tfKey&&this.tf)return this.tf;return this.tf=gl(this.model,e),this.tfKey=t,this.tf}articForFormants(e,t){let n=this.vowels.map((o)=>{let l=Math.log(e/o.F1)*2.2,c=Math.log(t/o.F2),d=Math.hypot(l,c);return{v:o,w:1/Math.pow(d+0.02,3)}});n.sort((o,l)=>l.w-o.w);let i=n.slice(0,4),s=i.reduce((o,l)=>o+l.w,0),r=["tbX","tbY","jaw","lipAp","lipProt","lipWidth","root","larynx","ttCurl"],a={};for(let o of r){let l=0;for(let{v:c,w:d}of i)l+=(c.artic[o]??Ki[o])*d;a[o]=l/s}return a}nodeS(e,t){let n=this.nPh,i=this.nOr,s=new Float64Array(n+i);for(let r=0;r<n;r++)s[r]=(r+0.5)/n*e;for(let r=0;r<i;r++)s[n+r]=e+(r+0.5)/i*t;return s}branchS(e,t,n){let i=this.model.pharynxBranches,s=this.model.oralBranches;if(e>=i.base&&e<i.base+i.n-1)return(e-i.base+1)/i.n*t;if(e>=s.base&&e<s.base+s.n-1)return t+(e-s.base+1)/s.n*n;if(e===this.model.glottisPort)return 0.2;return-1}}var qu=yt(()=>{Dr();Vu()});var $u={};ns($u,{TeleTrack:()=>Yu});class Yu{sampleRate;hop;frames;body;nPh;nOr;nArtic;nScope;len;data;constructor(e){if(e.byteLength<48)throw Error("telemetry file is too short for its header");if(new TextDecoder().decode(new Uint8Array(e,0,4))!=="CHTL")throw Error("not a CHIMERA telemetry file");let n=new DataView(e),i=(a)=>n.getUint32(4+4*a,!0),s=i(0);if(s!==1)throw Error(`telemetry file version ${s}; this app reads 1`);this.sampleRate=i(1),this.hop=i(2),this.frames=i(3),this.len=i(4),this.nArtic=i(5),this.nPh=i(6),this.nOr=i(7),this.nScope=i(8),this.body={female:n.getFloat32(40,!0),child:n.getFloat32(44,!0)};let r=11+this.nArtic+3*(this.nPh+this.nOr)+2*this.nScope;if(this.len!==r||this.frames<1||this.hop<1||this.sampleRate<1)throw Error("telemetry file header is inconsistent");if(e.byteLength!==48+4*this.frames*this.len)throw Error(`telemetry file is ${e.byteLength} bytes; its header says ${48+4*this.frames*this.len}`);this.data=new Float32Array(e,48,this.frames*this.len)}get rate(){return this.sampleRate/this.hop}get duration(){return(this.frames-1)*this.hop/this.sampleRate}indexAt(e){let t=Math.floor(e*this.sampleRate/this.hop+0.000001);return Math.min(this.frames-1,Math.max(0,Number.isFinite(t)?t:0))}message(e,t=-1){let n=e*this.len,i=this.data,s=n+11,r=(S)=>i.subarray(s,s+=S),a=this.nPh+this.nOr,o=r(this.nArtic),l=r(this.nPh),c=r(this.nOr),d=r(a),u=r(a),h=r(this.nScope),f=r(this.nScope),g=(S)=>i[n+S];return{type:"telemetry",t:{phLen:g(0),orLen:g(1),velumPort:g(2),f0:g(3),voicing:g(4),pLung:g(5),outRms:g(6),noiseLevel:g(7),noiseNode:g(8),gate:g(9),clock:g(10),artic:o,phAreas:l,orAreas:c,pressureRms:d,flow:u,glottalArea:h,glottalFlow:f,active:[]},load:0,body:this.body,nPh:this.nPh,nOr:this.nOr,beatStep:t}}}var Zu={};ns(Zu,{headRendererPool:()=>K_});function J_(e){let t=null,n=0;return{acquire(){let i=t??=e();n++;let s=!1;return{renderer:i,release(){if(s)return;if(s=!0,--n===0)i.dispose(),i.forceContextLoss(),t=null}}}}}var K_;var Ju=yt(()=>{pi();K_=J_(()=>new ol({canvas:document.createElement("canvas"),antialias:!0,alpha:!1,powerPreference:"high-performance"}))});Qr();async function nS(e,t,n){await Zl(t);let[{Anatomy3D:i},{VoiceModel:s},{TeleTrack:r},{headRendererPool:a},{NEUTRAL:o}]=await Promise.all([Promise.resolve().then(() => (ku(),zu)),Promise.resolve().then(() => (qu(),Xu)),Promise.resolve().then(() => $u),Promise.resolve().then(() => (Ju(),Zu)),Promise.resolve().then(() => (Dr(),gu))]),l=a.acquire(),c=l.renderer;c.outputColorSpace="srgb-linear",c.setClearColor(0,1);let d=c.domElement;d.style.cssText="width:100%;height:100%;display:block",e.appendChild(d);let u=new i;u.centred=!0;let h=new s(n,48000),f=!1,g=0,S=0,m={pressure:!0,particles:!0,grid:!1,calipers:!1},p=()=>{let E=e.getBoundingClientRect();if(E.width<1||E.height<1||E.width===g&&E.height===S)return;g=E.width,S=E.height,c.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),c.setSize(g,S,!1),u.resize(g,S),f=!1};return{track:(E)=>new r(E),draw(E,R){if(p(),g<1)return;let v=E?s.articFromArray(E.t.artic):o;if(u.face.update(E,R),!f){let M=u.poses(h);u.camera.position.copy(M.target).lerp(M.home,0.93),u.camera.lookAt(M.target),f=!0}u.update(h,h.frame(v),v,E,m,R),c.render(u.scene,u.camera)},setBody(E){h.dispose(),h=new s(E,48000),f=!1,u.resetMotion()},reset(){u.resetMotion()},dispose(){d.remove(),u.dispose(),h.dispose(),l.release()}}}export{nS as createHead};
