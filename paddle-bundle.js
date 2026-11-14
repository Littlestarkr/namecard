(()=>{var d_=Object.defineProperty;var Dt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var p_=(e,t)=>{for(var r in t)d_(e,r,{get:t[r],enumerable:!0})};var ie="https://huggingface.co/snowfluke/ppu-paddle-ocr-models/resolve/main",Te="https://huggingface.co/snowfluke/ppu-paddle-ocr-models/resolve/main",pn=`${ie}/correction/UVDoc_grid.onnx`,c_="https://github.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models/raw/main";function Ou(e){let t=globalThis.process?.env?.PPU_PADDLE_OCR_MODEL_MIRROR;return!t||t==="0"||t==="false"||!e.startsWith(ie)?null:c_+e.slice(ie.length)}var h_={detection:`${ie}/detection/ort/PP-OCRv6_small_det.ort`,recognition:`${ie}/recognition/ort/PP-OCRv6_small_rec.ort`,charactersDictionary:`${Te}/recognition/ppocrv6_dict.txt`},f_={detection:`${ie}/detection/ort/PP-OCRv6_medium_det.ort`,recognition:`${ie}/recognition/ort/PP-OCRv6_medium_rec.ort`,charactersDictionary:`${Te}/recognition/ppocrv6_dict.txt`},zu={detection:`${ie}/detection/ort/PP-OCRv6_tiny_det.ort`,recognition:`${ie}/recognition/ort/PP-OCRv6_tiny_rec.ort`,charactersDictionary:`${Te}/recognition/ppocrv6_tiny_dict.txt`},m_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.ort`,recognition:`${ie}/recognition/multi/en/v5/en_PP-OCRv5_mobile_rec_infer.ort`,charactersDictionary:`${Te}/recognition/multi/en/v5/ppocrv5_en_dict.txt`},g_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.ort`,recognition:`${ie}/recognition/multi/en/v5/en_PP-OCRv5_mobile_rec_infer_int8.ort`,charactersDictionary:`${Te}/recognition/multi/en/v5/ppocrv5_en_dict.txt`},y_={detection:`${ie}/detection/PP-OCRv5_server_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv5_server_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv5_dict.txt`},__={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv5_dict.txt`},w_={detection:`${ie}/detection/PP-OCRv5_server_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv5_server_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv5_dict.txt`},b_={detection:`${ie}/detection/PP-OCRv4_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/en/v4/en_PP-OCRv4_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/en/v4/en_dict.txt`},$_={detection:`${ie}/detection/PP-OCRv4_mobile_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv4_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv4_dict.txt`},v_={detection:`${ie}/detection/PP-OCRv4_server_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv4_server_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv4_dict.txt`},x_={detection:`${ie}/detection/PP-OCRv4_server_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv4_server_rec_doc_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv4_doc_dict.txt`},S_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/PP-OCRv3_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/ppocrv3_dict.txt`},E_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/japan/v3/japan_PP-OCRv3_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/japan/v3/japan_dict.txt`},T_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/arabic/v5/arabic_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/arabic/v5/ppocrv5_arabic_dict.txt`},I_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/cyrillic/v5/cyrillic_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/cyrillic/v5/ppocrv5_cyrillic_dict.txt`},C_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/devanagari/v5/devanagari_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/devanagari/v5/ppocrv5_devanagari_dict.txt`},k_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/el/v5/el_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/el/v5/ppocrv5_el_dict.txt`},O_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/eslav/v5/eslav_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/eslav/v5/ppocrv5_eslav_dict.txt`},cn={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/korean/v5/korean_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/korean/v5/ppocrv5_korean_dict.txt`},z_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/latin/v5/latin_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/latin/v5/ppocrv5_latin_dict.txt`},A_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/ta/v5/ta_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/ta/v5/ppocrv5_ta_dict.txt`},R_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/te/v5/te_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/te/v5/ppocrv5_te_dict.txt`},M_={detection:`${ie}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${ie}/recognition/multi/th/v5/th_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Te}/recognition/multi/th/v5/ppocrv5_th_dict.txt`},Au=zu,vt=Au;var or={};p_(or,{InferenceSession:()=>Ba,LoraAdapter:()=>Na,TRACE:()=>Dr,TRACE_EVENT_BEGIN:()=>Tt,TRACE_EVENT_END:()=>It,TRACE_FUNC_BEGIN:()=>Fe,TRACE_FUNC_END:()=>We,Tensor:()=>it,default:()=>ib,env:()=>pe,registerBackend:()=>Ft});var rt={};var za=Object.defineProperty,D_=Object.getOwnPropertyDescriptor,B_=Object.getOwnPropertyNames,N_=Object.prototype.hasOwnProperty,P_=(e=>typeof Dt<"u"?Dt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof Dt<"u"?Dt:t)[r]}):e)(function(e){if(typeof Dt<"u")return Dt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},sr=(e,t)=>{for(var r in t)za(e,r,{get:t[r],enumerable:!0})},L_=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of B_(t))!N_.call(e,n)&&n!==r&&za(e,n,{get:()=>t[n],enumerable:!(i=D_(t,n))||i.enumerable});return e},Mr=e=>L_(za({},"__esModule",{value:!0}),e),tr,pt,hn,Ft,fn,yc,_c,Aa=L(()=>{"use strict";tr=new Map,pt=[],hn=new WeakMap,Ft=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=tr.get(e);if(i===void 0)tr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=pt.indexOf(e);n!==-1&&pt.splice(n,1);for(let a=0;a<pt.length;a++)if(tr.get(pt[a]).priority<=r){pt.splice(a,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},fn=async e=>{let t=tr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{if(!r){let i=t.backend,n=hn.get(i);t.initPromise=n?n.then(async()=>i.init(e),async()=>i.init(e)):i.init(e),hn.set(i,t.initPromise)}return await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},yc=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?pt:r,n,a=[],s=new Set;for(let u of i){let d=await fn(u);typeof d=="string"?a.push({name:u,err:d}):(n||(n=d),n===d&&s.add(u))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[n,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]},_c=async()=>{let e=[];for(let r of pt){if(typeof tr.get(r).backend.createLoraAdapterHandler!="function")continue;let i=await fn(r);if(typeof i!="string")return i;e.push({name:r,err:i})}let t=e.length===0?"":` ERR: ${e.map(r=>`[${r.name}] ${r.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${t}`)}}),U_=L(()=>{"use strict";Aa()}),wc,W_=L(()=>{"use strict";wc="1.31.1"}),mn,Re,bc=L(()=>{"use strict";W_(),mn="warning",Re={wasm:{},webgl:{},webgpu:{},versions:{common:wc},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mn=e}},get logLevel(){return mn}},Object.defineProperty(Re,"logLevel",{enumerable:!0})}),pe,V_=L(()=>{"use strict";bc(),pe=Re}),Dr,gn,Fe,We,Tt,It,Ra=L(()=>{"use strict";bc(),Dr=(e,t)=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||console.timeStamp(`${e}::ORT::${t}`)},gn=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Dr("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},Fe=e=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||gn("BEGIN",e)},We=e=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||gn("END",e)},Tt=e=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||console.time(`ORT::${e}`)},It=e=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||console.timeEnd(`ORT::${e}`)}}),Ma,$c=L(()=>{"use strict";Aa(),Ra(),Ma=class vc{constructor(t,r){this.backend=t,this.handler=r}static async create(t){if(Fe(),typeof t!="string"&&!(t instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let r=await _c(),i=await r.createLoraAdapterHandler(t);return We(),new vc(r,i)}async release(){return this.handler.dispose()}}}),xc,Sc,q_=L(()=>{"use strict";xc=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*n,h=0,f=p,m=p*2,y=-1;s==="RGBA"?(h=0,f=p,m=p*2,y=p*3):s==="RGB"?(h=0,f=p,m=p*2):s==="RBG"&&(h=0,m=p,f=p*2);for(let $=0;$<a;$++)for(let S=0;S<n;S++){let b=(e.data[h++]-d[0])*u[0],w=(e.data[f++]-d[1])*u[1],E=(e.data[m++]-d[2])*u[2],T=y===-1?255:(e.data[y++]-d[3])*u[3];i.fillStyle="rgba("+b+","+w+","+E+","+T+")",i.fillRect(S,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Sc=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let h=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,y=1,$=2,S=3,b=0,w=h,E=h*2,T=-1;o==="RGBA"?(b=0,w=h,E=h*2,T=h*3):o==="RGB"?(b=0,w=h,E=h*2):o==="RBG"&&(b=0,E=h,w=h*2),i=r.createImageData(n,a);for(let I=0;I<a*n;m+=f,y+=f,$+=f,S+=f,I++)i.data[m]=(e.data[b++]-p[0])*d[0],i.data[y]=(e.data[w++]-p[1])*d[1],i.data[$]=(e.data[E++]-p[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-p[3])*d[3]}else throw new Error("Can not access image data");return i}}),ni,Ec,Tc,Ic,Cc,kc,G_=L(()=>{"use strict";Da(),ni=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,f=0,m=1,y=2,$=3,S=0,b=d,w=d*2,E=-1;o==="RGB"&&(h=3,f=0,m=1,y=2,$=-1),u==="RGBA"?E=d*3:u==="RBG"?(S=0,w=d,b=d*2):u==="BGR"&&(w=0,b=d,S=d*2);for(let T=0;T<d;T++,f+=h,y+=h,m+=h,$+=h)p[S++]=(e[f]+s[0])/a[0],p[b++]=(e[m]+s[1])/a[1],p[w++]=(e[y]+s[2])/a[2],E!==-1&&$!==-1&&(p[E++]=(e[$]+s[3])/a[3]);return u==="RGBA"?new qe("float32",p,[1,4,r,i]):new qe("float32",p,[1,3,r,i])},Ec=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let h=d(p);if(h!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;h.drawImage(e,0,0),s=h.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(i){let p,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,h=t.resizedWidth):(p=e.height,h=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=h,t!==void 0){let f=u();f.width=h,f.height=p;let m=d(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,h,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let h=d(p);if(h!=null){let f=e.height,m=e.width;return h.drawImage(e,0,0,m,f),s=h.getImageData(0,0,m,f).data,o.height=f,o.width=m,ni(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,h)=>{let f=u(),m=d(f);if(!e||!m)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,m.drawImage(y,0,0,f.width,f.height);let $=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(ni($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ni(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Tc=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new qe({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},Ic=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new qe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Cc=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new qe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},kc=(e,t,r)=>new qe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Vt,Or,yn,Oc,F_=L(()=>{"use strict";Vt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Or=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),yn=!1,Oc=()=>{if(!yn){yn=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Vt.set("int64",BigInt64Array),Or.set(BigInt64Array,"int64")),t&&(Vt.set("uint64",BigUint64Array),Or.set(BigUint64Array,"uint64")),i?(Vt.set("float16",r),Or.set(r,"float16")):Vt.set("float16",Uint16Array)}}}),zc,Ac,H_=L(()=>{"use strict";Da(),zc=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ac=(e,t)=>{switch(e.location){case"cpu":return new qe(e.type,e.data,t);case"cpu-pinned":return new qe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new qe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new qe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new qe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),qe,Da=L(()=>{"use strict";q_(),G_(),F_(),H_(),qe=class{constructor(e,t,r){Oc();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Vt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Vt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=Or.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=zc(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Ec(e,t)}static fromTexture(e,t){return Tc(e,t)}static fromGpuBuffer(e,t){return Ic(e,t)}static fromMLTensor(e,t){return Cc(e,t)}static fromPinnedBuffer(e,t,r){return kc(e,t,r)}toDataURL(e){return xc(this,e)}toImageData(e){return Sc(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ac(this,e)}}}),it,Rc=L(()=>{"use strict";Da(),it=qe}),Mc,j_=L(()=>{"use strict";Aa(),$c(),Rc(),Ra(),Mc=class Dc{constructor(t,r){this.handler=t,this.backend=r}async run(t,r,i){Fe(),Tt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof it||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof it)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);n[p]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(h.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof it)&&(p=!0,s=!1,n[f]=m)}if(p){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)n[p]=null;let o;if(a.activeLoraAdapters!==void 0){if(!Array.isArray(a.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");o=a.activeLoraAdapters.map(p=>{if(!(p instanceof Ma))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(p.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return p.handler})}let u=await this.handler.run(t,n,a,o),d={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let h=u[p];h instanceof it?d[p]=h:d[p]=new it(h.type,h.data,h.dims)}return It("InferenceSession.run"),We(),d}async release(){return this.handler.dispose()}static async create(t,r,i,n){Fe(),Tt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,h=0,f=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-h,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||h+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,h,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await yc(s),d=await o.createInferenceSessionHandler(a,u);return It("InferenceSession.create"),We(),new Dc(d,o)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ba,K_=L(()=>{"use strict";j_(),Ba=Mc}),Na,Z_=L(()=>{"use strict";$c(),Na=Ma}),Y_=L(()=>{"use strict"}),X_=L(()=>{"use strict"}),Q_=L(()=>{"use strict"}),J_=L(()=>{"use strict"}),Bc={};sr(Bc,{InferenceSession:()=>Ba,LoraAdapter:()=>Na,TRACE:()=>Dr,TRACE_EVENT_BEGIN:()=>Tt,TRACE_EVENT_END:()=>It,TRACE_FUNC_BEGIN:()=>Fe,TRACE_FUNC_END:()=>We,Tensor:()=>it,env:()=>pe,registerBackend:()=>Ft});var He=L(()=>{"use strict";U_(),V_(),K_(),Z_(),Rc(),Y_(),X_(),Ra(),Q_(),J_()}),Pa=L(()=>{"use strict"}),Nc={};sr(Nc,{default:()=>Pc});var _n,wn,Pc,ew=L(()=>{"use strict";Km(),Zt(),La(),_n="ort-wasm-proxy-worker",wn=globalThis.self?.name===_n,wn&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Ua(r.wasm).then(()=>{is(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;ns(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=Ti(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;as(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":ss(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:o}=r;os(i,n,a,s,new Array(s.length).fill(null),o).then(u=>{u.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},ls([...a,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":us(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Pc=wn?null:e=>new Worker(e??Ve,{type:"module",name:_n})}),Lc={};sr(Lc,{default:()=>Uc});async function Ru(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(t.jd||(t.jd=new Map)).set(l,c)},t.unmountExternalData=()=>{delete t.jd,delete t.ke,delete t.je,delete t.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=l=>async(...c)=>{try{if(t.hd)throw Error("Session already started");let _=t.hd={Vd:c[0],errors:[]},g=await l(...c);if(t.hd!==_)throw Error("Session mismatch");t.pd?.flush();let x=_.errors;if(0<x.length){let C=await Promise.all(x);if(C=C.filter(A=>A),0<C.length)throw Error(C.join(`
`))}return g}finally{t.hd=null}};t.jsepInit=(l,c)=>{if(l==="webgpu"){[t.pd,t.Ld,t.Pd,t.rd,t.Od,t.ic,t.Qd,t.Sd,t.Md,t.Nd,t.Rd]=c;let _=t.pd;t.jsepRegisterBuffer=(g,x,C,A)=>_.registerBuffer(g,x,C,A),t.jsepGetBuffer=g=>_.getBuffer(g),t.jsepCreateDownloader=(g,x,C)=>_.createDownloader(g,x,C),t.jsepOnCreateSession=g=>{_.onCreateSession(g)},t.jsepOnReleaseSession=g=>{_.onReleaseSession(g)},t.jsepOnRunStart=g=>_.onRunStart(g),t.Td=(g,x)=>{_.upload(g,x)}}else if(l==="webnn"){let _=c[0];[t.ce,t.Cd,t.webnnEnsureTensor,t.Dd,t.webnnDownloadTensor,t.be,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.Cd,t.webnnUploadTensor=t.Dd,t.webnnRegisterMLContext=t.be,t.webnnOnRunStart=g=>_.onRunStart(g),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=g=>{_.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,x)=>_.createMLTensorDownloader(g,x),t.webnnRegisterMLTensor=(g,x,C,A)=>_.registerMLTensor(g,x,C,A),t.webnnCreateMLContext=g=>_.createMLContext(g),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let s=()=>{let l=c=>(..._)=>{let g=at;return _=c(..._),at!=g?new Promise((x,C)=>{Xi={resolve:x,reject:C}}):_};(c=>{for(let _ of c)t[_]=l(t[_])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var o,u,d=(l,c)=>{throw c},p=rt.url,h="";if(r||i){try{h=new URL(".",p).href}catch{}i&&(u=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async l=>{if(O(l))return new Promise((_,g)=>{var x=new XMLHttpRequest;x.open("GET",l,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?_(x.response):g(x.status)},x.onerror=g,x.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var f,m,y,$,S,b,w=console.log.bind(console),E=console.error.bind(console),T=w,I=E,k=!1,O=l=>l.startsWith("file://");function v(){_t.buffer!=H.buffer&&j()}if(n){let l=function(c){try{var _=c.data,g=_.bd;if(g==="load"){let x=[];self.onmessage=C=>x.push(C),b=()=>{postMessage({bd:"loaded"});for(let C of x)l(C);self.onmessage=l};for(let C of _.Hd)t[C]&&!t[C].proxy||(t[C]=(...A)=>{postMessage({bd:"callHandler",Fd:C,args:A})},C=="print"&&(T=t[C]),C=="printErr"&&(I=t[C]));_t=_.Zd,j(),m=_.$d,ke(),ii()}else if(g==="run"){(function(x){var C=(v(),V)[x+52>>>2>>>0];x=(v(),V)[x+56>>>2>>>0],Po(C,C-x),ue(C)})(_.ad),rn(_.ad,0,0,1,0,0),Ns(),Ki(_.ad),W||(Ao(),W=!0);try{Qg(_.Xd,_.nd)}catch(x){if(x!="unwind")throw x}}else _.target!=="setimmediate"&&(g==="checkMailbox"?W&&Yr():g&&(I(`worker: received unknown command ${g}`),I(_)))}catch(x){throw Ro(),x}};var M=l,W=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}var H,F,U,q,z,V,P,se,ee,re,N,K=!1;function j(){var l=_t.buffer;t.HEAP8=H=new Int8Array(l),U=new Int16Array(l),t.HEAPU8=F=new Uint8Array(l),q=new Uint16Array(l),t.HEAP32=z=new Int32Array(l),t.HEAPU32=V=new Uint32Array(l),P=new Float32Array(l),se=new Float64Array(l),ee=new BigInt64Array(l),re=new BigUint64Array(l)}function Z(){K=!0,n?b():dt.vb()}function _e(l){throw I(l="Aborted("+l+")"),k=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),S?.(l),l}function De(){return{a:{na:xy,jb:vy,g:Jg,G:e0,f:t0,o:r0,h:i0,$:n0,b:a0,S:s0,Ja:qs,n:o0,aa:js,_a:Ks,Fa:Zs,Ha:Ys,$a:Xs,Ya:Qs,Ra:Js,Xa:eo,la:to,Ga:ro,Da:io,Za:no,Ea:ao,eb:u0,ga:d0,ya:p0,wa:h0,fa:m0,N:g0,I:y0,xa:_0,_:E0,za:T0,Ua:I0,Ba:k0,Ka:O0,ua:z0,ha:A0,Ta:Ki,bb:R0,Q:N0,r:V0,c:Hi,kb:q0,y:G0,M:F0,D:H0,m:j0,s:fo,lb:K0,J:Z0,R:Y0,j:X0,u:Q0,q:J0,k:ey,Oa:ty,Pa:ry,Qa:iy,Ma:_o,Na:wo,va:bo,gb:ay,db:uy,v:ly,ba:dy,ia:py,cb:sy,V:cy,ab:hy,Ca:fy,F:ny,U:my,ma:ti,Aa:yy,ib:gy,hb:_y,Va:So,Wa:Eo,Ia:Wi,T:To,La:Io,ka:Co,Sa:ko,ja:Oo,nb:o_,oa:r_,ob:s_,pa:t_,H:Gy,e:Iy,t:Ey,w:Sy,B:Py,pb:Qy,Z:Xy,x:zy,qa:Jy,X:i_,ca:Yy,qb:Zy,ea:ky,O:Ly,sb:Hy,ra:Ky,tb:Fy,L:Vy,Y:e_,d:Ty,A:Oy,l:Cy,mb:u_,p:Ry,z:My,C:Ay,E:Dy,K:Uy,sa:qy,P:n_,da:Wy,W:a_,ub:Ny,ta:By,rb:jy,i:by,a:_t,fb:gt}}}async function ke(){function l(g,x){var C=dt=g.exports;g={};for(let[A,D]of Object.entries(C))typeof D=="function"?(C=M0(D),g[A]=C):g[A]=D;return dt=g,dt=(function(){var A=dt,D=Y=>oe=>Y(oe)>>>0,G=Y=>()=>Y()>>>0;return(A=Object.assign({},A)).wb=D(A.wb),A.ec=G(A.ec),A.gc=D(A.gc),A.uc=D(A.uc),A.vc=G(A.vc),A.zc=D(A.zc),A})(),Ds.push(dt.hc),zo=(g=dt).wb,Ao=g.xb,t._OrtInit=g.yb,t._OrtGetLastError=g.zb,t._OrtCreateSessionOptions=g.Ab,t._OrtAppendExecutionProvider=g.Bb,t._OrtGetEpDevices=g.Cb,t._OrtEpDevice_EpName=g.Db,t._OrtAppendExecutionProviderV2=g.Eb,t._OrtAddFreeDimensionOverride=g.Fb,t._OrtAddSessionConfigEntry=g.Gb,t._OrtReleaseSessionOptions=g.Hb,t._OrtCreateSession=g.Ib,t._OrtReleaseSession=g.Jb,t._OrtGetInputOutputCount=g.Kb,t._OrtGetInputOutputMetadata=g.Lb,t._OrtFree=g.Mb,t._OrtCreateTensor=g.Nb,t._OrtGetTensorData=g.Ob,t._OrtReleaseTensor=g.Pb,t._OrtCreateLoraAdapter=g.Qb,t._OrtReleaseLoraAdapter=g.Rb,t._OrtCreateRunOptions=g.Sb,t._OrtAddRunConfigEntry=g.Tb,t._OrtRunOptionsAddActiveLoraAdapter=g.Ub,t._OrtReleaseRunOptions=g.Vb,t._OrtCreateBinding=g.Wb,t._OrtBindInput=g.Xb,t._OrtBindOutput=g.Yb,t._OrtClearBoundOutputs=g.Zb,t._OrtReleaseBinding=g._b,t._OrtRunWithBinding=g.$b,t._OrtRun=g.ac,t._OrtEndProfiling=g.bc,t._JsepOutput=g.cc,t._JsepGetNodeName=g.dc,ri=g.ec,st=t._free=g.fc,yr=t._malloc=g.gc,rn=g.jc,Ro=g.kc,Mo=g.lc,Do=g.mc,nn=g.nc,Bo=g.oc,No=g.pc,de=g.qc,_r=g.rc,Po=g.sc,ue=g.tc,an=g.uc,le=g.vc,Lo=g.wc,sn=g.xc,Uo=g.yc,Wo=g.zc,Vo=g.Ac,on=g.Bc,qo=g.Cc,Go=g.Dc,Fo=g.Ec,Ho=g.Fc,jo=g.Gc,Ko=g.Hc,Zo=g.Ic,Yo=g.Jc,Xo=g.Kc,Qo=g.Lc,Jo=g.Mc,eu=g.Nc,tu=g.Oc,ru=g.Pc,iu=g.Qc,nu=g.Rc,au=g.Sc,su=g.Tc,ou=g.Uc,uu=g.Vc,lu=g.Wc,du=g.Xc,pu=g.Yc,cu=g._c,hu=g.$c,fu=g.kd,mu=g.ld,gu=g.qd,yu=g.vd,_u=g.wd,wu=g.xd,bu=g.yd,$u=g.zd,vu=g.Ad,xu=g.Bd,Su=g.Gd,Eu=g.Jd,Tu=g.fe,Iu=g.ge,Cu=g.he,ku=g.ie,m=x,dt}var c,_=De();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(_,(x,C)=>{g(l(x,C))})}):n?l(new WebAssembly.Instance(m,De()),m):(N??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",rt.url).href,c=await(async function(g){var x=N;if(!f&&!O(x))try{var C=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,g)}catch(A){I(`wasm streaming compile failed: ${A}`),I("falling back to ArrayBuffer instantiation")}return(async function(A,D){try{var G=await(async function(Y){if(!f)try{var oe=await o(Y);return new Uint8Array(oe)}catch{}if(Y==N&&f)Y=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";Y=u(Y)}return Y})(A);return await WebAssembly.instantiate(G,D)}catch(Y){I(`failed to asynchronously prepare wasm: ${Y}`),_e(Y)}})(x,g)})(_),l(c.instance,c.module))}class $e{name="ExitStatus";constructor(c){this.message=`Program terminated with exit(${c})`,this.status=c}}var Ee=l=>{l.terminate(),l.onmessage=()=>{}},Le=[],xe=0,be=null,Be=l=>{yt.length==0&&(Ls(),Ps(yt[0]));var c=yt.pop();if(!c)return 6;mr.push(c),At[l.ad]=c,c.ad=l.ad;var _={bd:"run",Xd:l.Wd,nd:l.nd,ad:l.ad};return c.postMessage(_,l.ud),0},Ue=0,we=(l,c,..._)=>{var g,x=16*_.length,C=le(),A=an(x),D=A>>>3;for(g of _)typeof g=="bigint"?((v(),ee)[D++>>>0]=1n,(v(),ee)[D++>>>0]=g):((v(),ee)[D++>>>0]=0n,(v(),se)[D++>>>0]=g);return l=Mo(l,0,x,A,c),ue(C),l};function gt(l){if(n)return we(0,1,l);if(y=l,!(0<Ue)){for(var c of mr)Ee(c);for(c of yt)Ee(c);yt=[],mr=[],At={},k=!0}d(0,new $e(l))}function Ms(l){if(n)return we(1,0,l);Wi(l)}var Wi=l=>{if(y=l,n)throw Ms(l),"unwind";gt(l)},yt=[],mr=[],Ds=[],At={},Bs=l=>{var c=l.ad;delete At[c],yt.push(l),mr.splice(mr.indexOf(l),1),l.ad=0,Do(c)};function Ns(){Ds.forEach(l=>l())}var Ps=l=>new Promise(c=>{l.onmessage=x=>{var C=x.data;if(x=C.bd,C.md&&C.md!=ri()){var A=At[C.md];A?A.postMessage(C,C.ud):I(`Internal error! Worker sent a message "${x}" to target pthread ${C.md}, but that thread no longer exists!`)}else x==="checkMailbox"?Yr():x==="spawnThread"?Be(C):x==="cleanupThread"?Zr(()=>{Bs(At[C.Yd])}):x==="loaded"?(l.loaded=!0,c(l)):C.target==="setimmediate"?l.postMessage(C):x==="uncaughtException"?l.onerror(C.error):x==="callHandler"?t[C.Fd](...C.args):x&&I(`worker sent an unknown command ${x}`)},l.onerror=x=>{throw I(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var _,g=[];for(_ of[])t.propertyIsEnumerable(_)&&g.push(_);l.postMessage({bd:"load",Hd:g,Zd:_t,$d:m})});function Ls(){var l=new Worker((()=>{let c=URL;return rt.url>"file:"&&rt.url<"file;"?new c("ort.bundle.min.mjs",rt.url):new URL(rt.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});yt.push(l)}var _t,Qg=(l,c)=>{Ue=0,l=on(l,c),0<Ue?y=l:nn(l)},Hr=[],jr=0;function Jg(l){var c=new Vi(l>>>=0);return(v(),H)[c.cd+12>>>0]==0&&(Us(c,!0),jr--),Ws(c,!1),Hr.push(c),Wo(l)}var Jt=0,e0=()=>{de(0,0);var l=Hr.pop();Lo(l.od),Jt=0};function Us(l,c){c=c?1:0,(v(),H)[l.cd+12>>>0]=c}function Ws(l,c){c=c?1:0,(v(),H)[l.cd+13>>>0]=c}class Vi{constructor(c){this.od=c,this.cd=c-24}}var qi=l=>{var c=Jt;if(!c)return _r(0),0;var _=new Vi(c);(v(),V)[_.cd+16>>>2>>>0]=c;var g=(v(),V)[_.cd+4>>>2>>>0];if(!g)return _r(0),c;for(var x of l){if(x===0||x===g)break;if(Uo(x,g,_.cd+16))return _r(x),c}return _r(g),c};function t0(){return qi([])}function r0(l){return qi([l>>>0])}function i0(l,c,_,g){return qi([l>>>0,c>>>0,_>>>0,g>>>0])}var n0=()=>{var l=Hr.pop();l||_e("no exception to throw");var c=l.od;throw(v(),H)[l.cd+13>>>0]==0&&(Hr.push(l),Ws(l,!0),Us(l,!1),jr++),sn(c),Jt=c};function a0(l,c,_){var g=new Vi(l>>>=0);throw c>>>=0,_>>>=0,(v(),V)[g.cd+16>>>2>>>0]=0,(v(),V)[g.cd+4>>>2>>>0]=c,(v(),V)[g.cd+8>>>2>>>0]=_,sn(l),jr++,Jt=l}var s0=()=>jr;function Vs(l,c,_,g){return n?we(2,1,l,c,_,g):qs(l,c,_,g)}function qs(l,c,_,g){if(l>>>=0,c>>>=0,_>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return n&&x.length===0?Vs(l,c,_,g):(l={Wd:_,ad:l,nd:g,ud:x},n?(l.bd="spawnThread",postMessage(l,x),0):Be(l))}function o0(l){throw Jt||=l>>>0,Jt}var Gs=globalThis.TextDecoder&&new TextDecoder,Fs=(l,c,_,g)=>{if(_=c+_,g)return _;for(;l[c]&&!(c>=_);)++c;return c},Hs=(l,c=0,_,g)=>{if(16<(_=Fs(l,c>>>=0,_,g))-c&&l.buffer&&Gs)return Gs.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,_):l.slice(c,_));for(g="";c<_;){var x=l[c++];if(128&x){var C=63&l[c++];if((224&x)==192)g+=String.fromCharCode((31&x)<<6|C);else{var A=63&l[c++];65536>(x=(240&x)==224?(15&x)<<12|C<<6|A:(7&x)<<18|C<<12|A<<6|63&l[c++])?g+=String.fromCharCode(x):(x-=65536,g+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else g+=String.fromCharCode(x)}return g},Oe=(l,c,_)=>(l>>>=0)?Hs((v(),F),l,c,_):"";function js(l,c,_){return n?we(3,1,l,c,_):0}function Ks(l,c){if(n)return we(4,1,l,c)}function Zs(l,c){if(n)return we(5,1,l,c)}function Ys(l,c,_){if(n)return we(6,1,l,c,_)}function Xs(l,c,_){return n?we(7,1,l,c,_):0}function Qs(l,c){if(n)return we(8,1,l,c)}function Js(l,c,_){if(n)return we(9,1,l,c,_)}function eo(l,c,_,g){if(n)return we(10,1,l,c,_,g)}function to(l,c,_,g){if(n)return we(11,1,l,c,_,g)}function ro(l,c,_,g){if(n)return we(12,1,l,c,_,g)}function io(l){if(n)return we(13,1,l)}function no(l,c){if(n)return we(14,1,l,c)}function ao(l,c,_){if(n)return we(15,1,l,c,_)}var u0=()=>_e(""),nt=l=>{l>>>=0;for(var c="";;){var _=(v(),F)[l++>>>0];if(!_)return c;c+=String.fromCharCode(_)}},Gi={},Fi={},l0={},er=class extends Error{constructor(l){super(l),this.name="BindingError"}};function lt(l,c,_={}){return(function(g,x,C={}){var A=x.name;if(!g)throw new er(`type "${A}" must have a positive integer typeid pointer`);if(Fi.hasOwnProperty(g)){if(C.Id)return;throw new er(`Cannot register type '${A}' twice`)}Fi[g]=x,delete l0[g],Gi.hasOwnProperty(g)&&(x=Gi[g],delete Gi[g],x.forEach(D=>D()))})(l,c,_)}var so=(l,c,_)=>{switch(c){case 1:return _?g=>(v(),H)[g>>>0]:g=>(v(),F)[g>>>0];case 2:return _?g=>(v(),U)[g>>>1>>>0]:g=>(v(),q)[g>>>1>>>0];case 4:return _?g=>(v(),z)[g>>>2>>>0]:g=>(v(),V)[g>>>2>>>0];case 8:return _?g=>(v(),ee)[g>>>3>>>0]:g=>(v(),re)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function d0(l,c,_,g,x){l>>>=0,_>>>=0,c=nt(c>>>0);let C=A=>A;if(g=g===0n){let A=8*_;C=D=>BigInt.asUintN(A,D),x=C(x)}lt(l,{name:c,Zc:C,ed:(A,D)=>(typeof D=="number"&&(D=BigInt(D)),D),dd:so(c,_,!g),gd:null})}function p0(l,c,_,g){lt(l>>>=0,{name:c=nt(c>>>0),Zc:function(x){return!!x},ed:function(x,C){return C?_:g},dd:function(x){return this.Zc((v(),F)[x>>>0])},gd:null})}var oo=[],Rt=[0,1,,1,null,1,!0,1,!1,1];function Hi(l){9<(l>>>=0)&&--Rt[l+1]===0&&(Rt[l]=void 0,oo.push(l))}var je=l=>{if(!l)throw new er(`Cannot use deleted val. handle = ${l}`);return Rt[l]},Ze=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=oo.pop()||Rt.length;return Rt[c]=l,Rt[c+1]=1,c}};function ji(l){return this.Zc((v(),V)[l>>>2>>>0])}var c0={name:"emscripten::val",Zc:l=>{var c=je(l);return Hi(l),c},ed:(l,c)=>Ze(c),dd:ji,gd:null};function h0(l){return lt(l>>>0,c0)}var f0=(l,c)=>{switch(c){case 4:return function(_){return this.Zc((v(),P)[_>>>2>>>0])};case 8:return function(_){return this.Zc((v(),se)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function m0(l,c,_){_>>>=0,lt(l>>>=0,{name:c=nt(c>>>0),Zc:g=>g,ed:(g,x)=>x,dd:f0(c,_),gd:null})}function g0(l,c,_,g,x){l>>>=0,_>>>=0,c=nt(c>>>0);let C=D=>D;if(g===0){var A=32-8*_;C=D=>D<<A>>>A,x=C(x)}lt(l,{name:c,Zc:C,ed:(D,G)=>G,dd:so(c,_,g!==0),gd:null})}function y0(l,c,_){function g(C){var A=(v(),V)[C>>>2>>>0];return C=(v(),V)[C+4>>>2>>>0],new x((v(),H).buffer,C,A)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];lt(l>>>=0,{name:_=nt(_>>>0),Zc:g,dd:g},{Id:!0})}var wt=(l,c,_)=>{var g=(v(),F);if(c>>>=0,0<_){var x=c;_=c+_-1;for(var C=0;C<l.length;++C){var A=l.codePointAt(C);if(127>=A){if(c>=_)break;g[c++>>>0]=A}else if(2047>=A){if(c+1>=_)break;g[c++>>>0]=192|A>>6,g[c++>>>0]=128|63&A}else if(65535>=A){if(c+2>=_)break;g[c++>>>0]=224|A>>12,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A}else{if(c+3>=_)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A,C++}}g[c>>>0]=0,l=c-x}else l=0;return l},Kr=l=>{for(var c=0,_=0;_<l.length;++_){var g=l.charCodeAt(_);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++_):c+=3}return c};function _0(l,c){lt(l>>>=0,{name:c=nt(c>>>0),Zc(_){var g=(v(),V)[_>>>2>>>0];return g=Oe(_+4,g,!0),st(_),g},ed(_,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var x=typeof g=="string";if(!(x||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new er("Cannot pass non-string to std::string");var C=x?Kr(g):g.length,A=yr(4+C+1),D=A+4;return(v(),V)[A>>>2>>>0]=C,x?wt(g,D,C+1):(v(),F).set(g,D>>>0),_!==null&&_.push(st,A),A},dd:ji,gd(_){st(_)}})}var uo=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,w0=(l,c,_)=>{if(l>>>=1,16<(c=Fs((v(),q),l,c/2,_))-l&&uo)return uo.decode((v(),q).slice(l,c));for(_="";l<c;++l){var g=(v(),q)[l>>>0];_+=String.fromCharCode(g)}return _},b0=(l,c,_)=>{if(_??=2147483647,2>_)return 0;var g=c;_=(_-=2)<2*l.length?_/2:l.length;for(var x=0;x<_;++x){var C=l.charCodeAt(x);(v(),U)[c>>>1>>>0]=C,c+=2}return(v(),U)[c>>>1>>>0]=0,c-g},$0=l=>2*l.length,v0=(l,c,_)=>{var g="";l>>>=2;for(var x=0;!(x>=c/4);x++){var C=(v(),V)[l+x>>>0];if(!C&&!_)break;g+=String.fromCodePoint(C)}return g},x0=(l,c,_)=>{if(c>>>=0,_??=2147483647,4>_)return 0;var g=c;_=g+_-4;for(var x=0;x<l.length;++x){var C=l.codePointAt(x);if(65535<C&&x++,(v(),z)[c>>>2>>>0]=C,(c+=4)+4>_)break}return(v(),z)[c>>>2>>>0]=0,c-g},S0=l=>{for(var c=0,_=0;_<l.length;++_)65535<l.codePointAt(_)&&_++,c+=4;return c};function E0(l,c,_){if(l>>>=0,c>>>=0,_=nt(_>>>=0),c===2)var g=w0,x=b0,C=$0;else g=v0,x=x0,C=S0;lt(l,{name:_,Zc:A=>{var D=(v(),V)[A>>>2>>>0];return D=g(A+4,D*c,!0),st(A),D},ed:(A,D)=>{if(typeof D!="string")throw new er(`Cannot pass non-string to C++ string type ${_}`);var G=C(D),Y=yr(4+G+c);return(v(),V)[Y>>>2>>>0]=G/c,x(D,Y+4,G+c),A!==null&&A.push(st,Y),Y},dd:ji,gd(A){st(A)}})}function T0(l,c){lt(l>>>=0,{Kd:!0,name:c=nt(c>>>0),Zc:()=>{},ed:()=>{}})}function I0(l){rn(l>>>0,!i,1,!r,131072,!1),Ns()}var Zr=l=>{if(!k)try{if(l(),!(0<Ue))try{n?ri()&&nn(y):Wi(y)}catch(c){c instanceof $e||c=="unwind"||d(0,c)}}catch(c){c instanceof $e||c=="unwind"||d(0,c)}},C0=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ki(l){l>>>=0,C0||(Atomics.waitAsync((v(),z),l>>>2,l).value.then(Yr),l+=128,Atomics.store((v(),z),l>>>2,1))}var Yr=()=>Zr(()=>{var l=ri();l&&(Ki(l),No())});function k0(l,c){(l>>>=0)==c>>>0?setTimeout(Yr):n?postMessage({md:l,bd:"checkMailbox"}):(l=At[l])&&l.postMessage({bd:"checkMailbox"})}var Zi=[];function O0(l,c,_,g,x){for(c>>>=0,x>>>=0,Zi.length=0,_=x>>>3,g=x+g>>>3;_<g;){var C;C=(v(),ee)[_++>>>0]?(v(),ee)[_++>>>0]:(v(),se)[_++>>>0],Zi.push(C)}return(c?un[c]:$y[l])(...Zi)}var z0=()=>{Ue=0};function A0(l){l>>>=0,n?postMessage({bd:"cleanupThread",Yd:l}):Bs(At[l])}function R0(l){}var Xr=l=>{try{l()}catch(c){_e(c)}};function M0(l){var c=(..._)=>{Qr.push(l);try{return l(..._)}finally{k||(Qr.pop(),at&&bt===1&&Qr.length===0&&(bt=0,Ue+=1,Xr(Iu),typeof Fibers<"u"&&Fibers.ne()))}};return co.set(l,c),c}var bt=0,at=null,lo=0,Qr=[],Yi=new Map,po=new Map,co=new Map,D0=0,Xi=null,B0=[],ho=l=>(function(c){if(!k){if(bt===0){var _=!1,g=!1;c((x=0)=>{if(!k&&(lo=x,_=!0,g)){bt=2,Xr(()=>Cu(at)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),x=!1;try{var C=(function(){var G=(v(),z)[at+8>>>2>>>0];return G=po.get(G),G=co.get(G),--Ue,G()})()}catch(G){C=G,x=!0}var A=!1;if(!at){var D=Xi;D&&(Xi=null,(x?D.reject:D.resolve)(C),A=!0)}if(x&&!A)throw C}}),g=!0,_||(bt=1,at=(function(){var x=yr(65548),C=x+12;if((v(),V)[x>>>2>>>0]=C,(v(),V)[x+4>>>2>>>0]=C+65536,C=Qr[0],!Yi.has(C)){var A=D0++;Yi.set(C,A),po.set(A,C)}return C=Yi.get(C),(v(),z)[x+8>>>2>>>0]=C,x})(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),Xr(()=>Tu(at)))}else bt===2?(bt=0,Xr(ku),st(at),at=null,B0.forEach(Zr)):_e(`invalid state: ${bt}`);return lo}})(c=>{l().then(c)});function N0(l){return l>>>=0,ho(async()=>{var c=await je(l);return Ze(c)})}var Qi=[],P0=l=>{var c=Qi.length;return Qi.push(l),c},L0=(l,c)=>{for(var _=Array(l),g=0;g<l;++g){var x=g,C=(v(),V)[c+4*g>>>2>>>0],A=Fi[C];if(A===void 0)throw l=`parameter ${g}`,C=zo(C),c=nt(C),st(C),new er(`${l} has unknown type ${c}`);_[x]=A}return _},U0=(l,c,_)=>{var g=[];return l=l(g,_),g.length&&((v(),V)[c>>>2>>>0]=Ze(g)),l},W0={},Jr=l=>{var c=W0[l];return c===void 0?nt(l):c};function V0(l,c,_){var[g,...x]=L0(l,c>>>0);c=g.ed.bind(g);var C=x.map(G=>G.dd.bind(G));l--;var A={toValue:je};switch(l=C.map((G,Y)=>{var oe=`argFromPtr${Y}`;return A[oe]=G,`${oe}(args${Y?"+"+8*Y:""})`}),_){case 0:var D="toValue(handle)";break;case 2:D="new (toValue(handle))";break;case 3:D="";break;case 1:A.getStringOrSymbol=Jr,D="toValue(handle)[getStringOrSymbol(methodName)]"}return D+=`(${l})`,g.Kd||(A.toReturnWire=c,A.emval_returnValue=U0,D=`return emval_returnValue(toReturnWire, destructorsRef, ${D})`),D=`return function (handle, methodName, destructorsRef, args) {
  ${D}
  }`,_=new Function(Object.keys(A),D)(...Object.values(A)),D=`methodCaller<(${x.map(G=>G.name)}) => ${g.name}>`,P0(Object.defineProperty(_,"name",{value:D}))}function q0(l,c){return c>>>=0,(l=je(l>>>0))==je(c)}function G0(l){return(l>>>=0)?(l=Jr(l),Ze(globalThis[l])):Ze(globalThis)}function F0(l){return l=Jr(l>>>0),Ze(t[l])}function H0(l,c){return c>>>=0,l=je(l>>>0),c=je(c),Ze(l[c])}function j0(l){9<(l>>>=0)&&(Rt[l+1]+=1)}function fo(l,c,_,g,x){return Qi[l>>>0](c>>>0,_>>>0,g>>>0,x>>>0)}function K0(l,c,_,g,x){return fo(l>>>0,c>>>0,_>>>0,g>>>0,x>>>0)}function Z0(){return Ze([])}function Y0(l){l=je(l>>>0);for(var c=Array(l.length),_=0;_<l.length;_++)c[_]=l[_];return Ze(c)}function X0(l){return Ze(Jr(l>>>0))}function Q0(){return Ze({})}function J0(l){for(var c=je(l>>>=0);c.length;){var _=c.pop();c.pop()(_)}Hi(l)}function ey(l,c,_){c>>>=0,_>>>=0,l=je(l>>>0),c=je(c),_=je(_),l[c]=_}function ty(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(v(),z)[c>>>2>>>0]=l.getUTCSeconds(),(v(),z)[c+4>>>2>>>0]=l.getUTCMinutes(),(v(),z)[c+8>>>2>>>0]=l.getUTCHours(),(v(),z)[c+12>>>2>>>0]=l.getUTCDate(),(v(),z)[c+16>>>2>>>0]=l.getUTCMonth(),(v(),z)[c+20>>>2>>>0]=l.getUTCFullYear()-1900,(v(),z)[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),z)[c+28>>>2>>>0]=l}var mo=l=>l%4==0&&(l%100!=0||l%400==0),go=[0,31,60,91,121,152,182,213,244,274,305,335],yo=[0,31,59,90,120,151,181,212,243,273,304,334];function ry(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(v(),z)[c>>>2>>>0]=l.getSeconds(),(v(),z)[c+4>>>2>>>0]=l.getMinutes(),(v(),z)[c+8>>>2>>>0]=l.getHours(),(v(),z)[c+12>>>2>>>0]=l.getDate(),(v(),z)[c+16>>>2>>>0]=l.getMonth(),(v(),z)[c+20>>>2>>>0]=l.getFullYear()-1900,(v(),z)[c+24>>>2>>>0]=l.getDay();var _=(mo(l.getFullYear())?go:yo)[l.getMonth()]+l.getDate()-1|0;(v(),z)[c+28>>>2>>>0]=_,(v(),z)[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),_=new Date(l.getFullYear(),6,1).getTimezoneOffset();var g=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(_!=g&&l.getTimezoneOffset()==Math.min(g,_)),(v(),z)[c+32>>>2>>>0]=l}function iy(l){l>>>=0;var c=new Date((v(),z)[l+20>>>2>>>0]+1900,(v(),z)[l+16>>>2>>>0],(v(),z)[l+12>>>2>>>0],(v(),z)[l+8>>>2>>>0],(v(),z)[l+4>>>2>>>0],(v(),z)[l>>>2>>>0],0),_=(v(),z)[l+32>>>2>>>0],g=c.getTimezoneOffset(),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),C=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(C,x);return 0>_?(v(),z)[l+32>>>2>>>0]=+(x!=C&&A==g):0<_!=(A==g)&&(x=Math.max(C,x),c.setTime(c.getTime()+6e4*((0<_?A:x)-g))),(v(),z)[l+24>>>2>>>0]=c.getDay(),_=(mo(c.getFullYear())?go:yo)[c.getMonth()]+c.getDate()-1|0,(v(),z)[l+28>>>2>>>0]=_,(v(),z)[l>>>2>>>0]=c.getSeconds(),(v(),z)[l+4>>>2>>>0]=c.getMinutes(),(v(),z)[l+8>>>2>>>0]=c.getHours(),(v(),z)[l+12>>>2>>>0]=c.getDate(),(v(),z)[l+16>>>2>>>0]=c.getMonth(),(v(),z)[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function _o(l,c,_,g,x,C,A){return n?we(16,1,l,c,_,g,x,C,A):-52}function wo(l,c,_,g,x,C){if(n)return we(17,1,l,c,_,g,x,C)}var gr={},ny=()=>performance.timeOrigin+performance.now();function bo(l,c){if(n)return we(18,1,l,c);if(gr[l]&&(clearTimeout(gr[l].id),delete gr[l]),!c)return 0;var _=setTimeout(()=>{delete gr[l],Zr(()=>Bo(l,performance.timeOrigin+performance.now()))},c);return gr[l]={id:_,me:c},0}function ay(l,c,_,g){l>>>=0,c>>>=0,_>>>=0,g>>>=0;var x=new Date().getFullYear(),C=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var A=Math.max(C,x);(v(),V)[l>>>2>>>0]=60*A,(v(),z)[c>>>2>>>0]=+(C!=x),l=(c=D=>{var G=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(G/60)).padStart(2,"0")}${String(G%60).padStart(2,"0")}`})(C),c=c(x),x<C?(wt(l,_,17),wt(c,g,17)):(wt(l,g,17),wt(c,_,17))}var sy=()=>Date.now(),oy=1;function uy(l,c,_){if(_>>>=0,!(0<=l&&3>=l))return 28;if(l===0)l=Date.now();else{if(!oy)return 52;l=performance.timeOrigin+performance.now()}return l=Math.round(1e6*l),(v(),ee)[_>>>3>>>0]=BigInt(l),0}var Ji=[],$o=(l,c)=>{Ji.length=0;for(var _;_=(v(),F)[l++>>>0];){var g=_!=105;c+=(g&=_!=112)&&c%8?4:0,Ji.push(_==112?(v(),V)[c>>>2>>>0]:_==106?(v(),ee)[c>>>3>>>0]:_==105?(v(),z)[c>>>2>>>0]:(v(),se)[c>>>3>>>0]),c+=g?8:4}return Ji};function ly(l,c,_){return l>>>=0,c=$o(c>>>0,_>>>0),un[l](...c)}function dy(l,c,_){return l>>>=0,c=$o(c>>>0,_>>>0),un[l](...c)}var py=()=>{};function cy(l,c){return I(Oe(l>>>0,c>>>0))}var hy=()=>{throw Ue+=1,"unwind"};function fy(){return 4294901760}var my=()=>navigator.hardwareConcurrency,Mt={},ei=l=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+c[1]:0},vo=l=>{for(var c of l)(l=ei(c))&&(Mt[l]=c)};function gy(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),vo(l),Mt.sd=ei(l[3]),Mt.Ud=l,Mt.sd}function ti(l){if(!(l=Mt[l>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(l))l=c[1];else{if(!(c=/^(.+?)@/.exec(l)))return 0;l=c[1]}st(ti.td??0),c=Kr(l)+1;var _=yr(c);return _&&wt(l,_,c),ti.td=_,ti.td}function yy(l){l>>>=0;var c=(v(),F).length;if(l<=c||4294901760<l)return!1;for(var _=1;4>=_;_*=2){var g=c*(1+.2/_);g=Math.min(g,l+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(l,g)/65536))-_t.buffer.byteLength+65535)/65536|0;try{_t.grow(g),j();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function _y(l,c,_){if(l>>>=0,c>>>=0,Mt.sd==l)var g=Mt.Ud;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),vo(g);for(var x=3;g[x]&&ei(g[x])!=l;)++x;for(l=0;l<_&&g[l+x];++l)(v(),z)[c+4*l>>>2>>>0]=ei(g[l+x]);return l}var en,tn={},xo=()=>{if(!en){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in tn)tn[l]===void 0?delete c[l]:c[l]=tn[l];var _=[];for(l in c)_.push(`${l}=${c[l]}`);en=_}return en};function So(l,c){if(n)return we(19,1,l,c);l>>>=0,c>>>=0;var _,g=0,x=0;for(_ of xo()){var C=c+g;(v(),V)[l+x>>>2>>>0]=C,g+=wt(_,C,1/0)+1,x+=4}return 0}function Eo(l,c){if(n)return we(20,1,l,c);l>>>=0,c>>>=0;var _=xo();for(var g of((v(),V)[l>>>2>>>0]=_.length,l=0,_))l+=Kr(g)+1;return(v(),V)[c>>>2>>>0]=l,0}function To(l){return n?we(21,1,l):52}function Io(l,c,_,g,x){return n?we(22,1,l,c,_,g,x):52}function Co(l,c,_,g){return n?we(23,1,l,c,_,g):52}function ko(l,c,_,g){return n?we(24,1,l,c,_,g):70}var wy=[null,[],[]];function Oo(l,c,_,g){if(n)return we(25,1,l,c,_,g);c>>>=0,_>>>=0,g>>>=0;for(var x=0,C=0;C<_;C++){var A=(v(),V)[c>>>2>>>0],D=(v(),V)[c+4>>>2>>>0];c+=8;for(var G=0;G<D;G++){var Y=l,oe=(v(),F)[A+G>>>0],he=wy[Y];oe===0||oe===10?((Y===1?T:I)(Hs(he)),he.length=0):he.push(oe)}x+=D}return(v(),V)[g>>>2>>>0]=x,0}function by(l){return l>>>0}n||(function(){for(var l=t.numThreads-1;l--;)Ls();Le.push(async()=>{var c=(async function(){if(!n)return Promise.all(yt.map(Ps))})();xe++,await c,--xe==0&&be&&(c=be,be=null,c())})})(),n||(_t=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),j()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>le(),t.stackRestore=l=>ue(l),t.stackAlloc=l=>an(l),t.setValue=function(l,c,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(v(),H)[l>>>0]=c;break;case"i16":(v(),U)[l>>>1>>>0]=c;break;case"i32":(v(),z)[l>>>2>>>0]=c;break;case"i64":(v(),ee)[l>>>3>>>0]=BigInt(c);break;case"float":(v(),P)[l>>>2>>>0]=c;break;case"double":(v(),se)[l>>>3>>>0]=c;break;case"*":(v(),V)[l>>>2>>>0]=c;break;default:_e(`invalid type for setValue: ${_}`)}},t.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(v(),H)[l>>>0];case"i16":return(v(),U)[l>>>1>>>0];case"i32":return(v(),z)[l>>>2>>>0];case"i64":return(v(),ee)[l>>>3>>>0];case"float":return(v(),P)[l>>>2>>>0];case"double":return(v(),se)[l>>>3>>>0];case"*":return(v(),V)[l>>>2>>>0];default:_e(`invalid type for getValue: ${c}`)}},t.UTF8ToString=Oe,t.stringToUTF8=wt,t.lengthBytesUTF8=Kr;var zo,Ao,ri,st,yr,rn,Ro,Mo,Do,nn,Bo,No,de,_r,Po,ue,an,le,Lo,sn,Uo,Wo,Vo,on,qo,Go,Fo,Ho,jo,Ko,Zo,Yo,Xo,Qo,Jo,eu,tu,ru,iu,nu,au,su,ou,uu,lu,du,pu,cu,hu,fu,mu,gu,yu,_u,wu,bu,$u,vu,xu,Su,Eu,Tu,Iu,Cu,ku,dt,$y=[gt,Ms,Vs,js,Ks,Zs,Ys,Xs,Qs,Js,eo,to,ro,io,no,ao,_o,wo,bo,So,Eo,To,Io,Co,ko,Oo],un={1124124:(l,c,_,g,x)=>{if(t===void 0||!t.jd)return 1;if((l=Oe(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.jd.get(l)))return 2;if(c=Number(c>>>0),_=Number(_>>>0),g=Number(g>>>0),c+_>l.byteLength)return 3;try{let C=l.subarray(c,c+_);switch(x){case 0:(v(),F).set(C,g>>>0);break;case 1:t.ae?t.ae(g,C):t.Td(g,C);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(l,c,_)=>{t.Dd(l,(v(),F).subarray(c>>>0,c+_>>>0))},1125084:()=>t.ce(),1125126:l=>{t.Cd(l)},1125163:()=>{t.Md()},1125194:()=>{t.Nd()},1125223:()=>{t.Rd()},1125248:l=>t.Ld(l),1125281:l=>t.Pd(l),1125313:(l,c,_)=>{t.rd(Number(l),Number(c),Number(_),!0)},1125376:(l,c,_)=>{t.rd(Number(l),Number(c),Number(_))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:l=>{t.ic("Abs",l,void 0)},1125541:l=>{t.ic("Neg",l,void 0)},1125592:l=>{t.ic("Floor",l,void 0)},1125645:l=>{t.ic("Ceil",l,void 0)},1125697:l=>{t.ic("Reciprocal",l,void 0)},1125755:l=>{t.ic("Sqrt",l,void 0)},1125807:l=>{t.ic("Exp",l,void 0)},1125858:l=>{t.ic("Erf",l,void 0)},1125909:l=>{t.ic("Sigmoid",l,void 0)},1125964:(l,c,_)=>{t.ic("HardSigmoid",l,{alpha:c,beta:_})},1126043:l=>{t.ic("HardSwish",l,void 0)},1126100:l=>{t.ic("Log",l,void 0)},1126151:l=>{t.ic("Sin",l,void 0)},1126202:l=>{t.ic("Cos",l,void 0)},1126253:l=>{t.ic("Tan",l,void 0)},1126304:l=>{t.ic("Asin",l,void 0)},1126356:l=>{t.ic("Acos",l,void 0)},1126408:l=>{t.ic("Atan",l,void 0)},1126460:l=>{t.ic("Sinh",l,void 0)},1126512:l=>{t.ic("Cosh",l,void 0)},1126564:l=>{t.ic("Asinh",l,void 0)},1126617:l=>{t.ic("Acosh",l,void 0)},1126670:l=>{t.ic("Atanh",l,void 0)},1126723:l=>{t.ic("Tanh",l,void 0)},1126775:l=>{t.ic("Not",l,void 0)},1126826:(l,c,_)=>{t.ic("Clip",l,{min:c,max:_})},1126895:l=>{t.ic("Clip",l,void 0)},1126947:(l,c)=>{t.ic("Elu",l,{alpha:c})},1127005:l=>{t.ic("Gelu",l,void 0)},1127057:l=>{t.ic("Relu",l,void 0)},1127109:(l,c)=>{t.ic("LeakyRelu",l,{alpha:c})},1127173:(l,c)=>{t.ic("ThresholdedRelu",l,{alpha:c})},1127243:(l,c)=>{t.ic("Cast",l,{to:c})},1127301:l=>{t.ic("Add",l,void 0)},1127352:l=>{t.ic("Sub",l,void 0)},1127403:l=>{t.ic("Mul",l,void 0)},1127454:l=>{t.ic("Div",l,void 0)},1127505:l=>{t.ic("Pow",l,void 0)},1127556:l=>{t.ic("Equal",l,void 0)},1127609:l=>{t.ic("Greater",l,void 0)},1127664:l=>{t.ic("GreaterOrEqual",l,void 0)},1127726:l=>{t.ic("Less",l,void 0)},1127778:l=>{t.ic("LessOrEqual",l,void 0)},1127837:(l,c,_,g,x)=>{t.ic("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1128012:(l,c,_,g,x)=>{t.ic("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1128186:(l,c,_,g,x)=>{t.ic("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1128360:(l,c,_,g,x)=>{t.ic("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1128535:(l,c,_,g,x)=>{t.ic("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1128709:(l,c,_,g,x)=>{t.ic("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1128882:(l,c,_,g,x)=>{t.ic("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129055:(l,c,_,g,x)=>{t.ic("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129232:(l,c,_,g,x)=>{t.ic("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129412:(l,c,_,g,x)=>{t.ic("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129592:l=>{t.ic("Where",l,void 0)},1129645:(l,c,_)=>{t.ic("Transpose",l,{perm:c?Array.from((v(),z).subarray(Number(c)>>>0,Number(_)>>>0)):[]})},1129769:(l,c,_,g)=>{t.ic("DepthToSpace",l,{blocksize:c,mode:Oe(_),format:g?"NHWC":"NCHW"})},1129902:(l,c,_,g)=>{t.ic("DepthToSpace",l,{blocksize:c,mode:Oe(_),format:g?"NHWC":"NCHW"})},1130035:(l,c,_,g)=>{t.ic("DFT",l,{axis:c,inverse:_,onesided:g})},1130127:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se,$t)=>{t.ic("ConvTranspose",l,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[_],group:g,kernelShape:[x],pads:[C,A],strides:[D],wIsConst:()=>!!(v(),H)[Y>>>0],outputPadding:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number(he)>>>0)):[],outputShape:ve?Array.from((v(),z).subarray(Number(ve)>>>0,Number(Se)>>>0)):[],activation:Oe($t)})},1130560:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se)=>{t.ic("ConvTranspose",l,{format:D?"NHWC":"NCHW",autoPad:c,dilations:Array.from((v(),z).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:g,kernelShape:Array.from((v(),z).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(v(),H)[G>>>0],outputPadding:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],outputShape:he?Array.from((v(),z).subarray(Number(he)>>>0,Number(ve)>>>0)):[],activation:Oe(Se)})},1131221:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se,$t)=>{t.ic("ConvTranspose",l,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[_],group:g,kernelShape:[x],pads:[C,A],strides:[D],wIsConst:()=>!!(v(),H)[Y>>>0],outputPadding:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number(he)>>>0)):[],outputShape:ve?Array.from((v(),z).subarray(Number(ve)>>>0,Number(Se)>>>0)):[],activation:Oe($t)})},1131654:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se)=>{t.ic("ConvTranspose",l,{format:D?"NHWC":"NCHW",autoPad:c,dilations:Array.from((v(),z).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:g,kernelShape:Array.from((v(),z).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(v(),H)[G>>>0],outputPadding:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],outputShape:he?Array.from((v(),z).subarray(Number(he)>>>0,Number(ve)>>>0)):[],activation:Oe(Se)})},1132315:(l,c)=>{t.ic("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1132406:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se)=>{t.ic("AveragePool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:x,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),z).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],strides:he?Array.from((v(),z).subarray(Number(he)>>>0,Number(ve)>>>0)):[]})},1132885:(l,c)=>{t.ic("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1132976:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se)=>{t.ic("AveragePool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:x,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),z).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],strides:he?Array.from((v(),z).subarray(Number(he)>>>0,Number(ve)>>>0)):[]})},1133455:(l,c)=>{t.ic("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1133542:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se)=>{t.ic("MaxPool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:x,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),z).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],strides:he?Array.from((v(),z).subarray(Number(he)>>>0,Number(ve)>>>0)):[]})},1134017:(l,c)=>{t.ic("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1134104:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se)=>{t.ic("MaxPool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:x,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),z).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],strides:he?Array.from((v(),z).subarray(Number(he)>>>0,Number(ve)>>>0)):[]})},1134579:(l,c,_,g,x)=>{t.ic("Gemm",l,{alpha:c,beta:_,transA:g,transB:x})},1134683:l=>{t.ic("MatMul",l,void 0)},1134737:(l,c,_,g)=>{t.ic("ArgMax",l,{keepDims:!!c,selectLastIndex:!!_,axis:g})},1134845:(l,c,_,g)=>{t.ic("ArgMin",l,{keepDims:!!c,selectLastIndex:!!_,axis:g})},1134953:(l,c)=>{t.ic("Softmax",l,{axis:c})},1135016:(l,c)=>{t.ic("Concat",l,{axis:c})},1135076:(l,c,_,g,x)=>{t.ic("Split",l,{axis:c,numOutputs:_,splitSizes:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1135232:l=>{t.ic("Expand",l,void 0)},1135286:(l,c)=>{t.ic("Gather",l,{axis:Number(c)})},1135357:(l,c)=>{t.ic("GatherElements",l,{axis:Number(c)})},1135436:(l,c)=>{t.ic("GatherND",l,{batch_dims:Number(c)})},1135515:(l,c,_,g,x,C,A,D,G,Y,oe)=>{t.ic("Resize",l,{antialias:c,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Oe(x),cubicCoeffA:C,excludeOutside:A,extrapolationValue:D,keepAspectRatioPolicy:Oe(G),mode:Oe(Y),nearestMode:Oe(oe)})},1135877:(l,c,_,g,x,C,A)=>{t.ic("Slice",l,{starts:c?Array.from((v(),z).subarray(Number(c)>>>0,Number(_)>>>0)):[],ends:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[],axes:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(A)>>>0)):[]})},1136141:l=>{t.ic("Tile",l,void 0)},1136193:(l,c,_)=>{t.ic("InstanceNormalization",l,{epsilon:c,format:_?"NHWC":"NCHW"})},1136307:(l,c,_)=>{t.ic("InstanceNormalization",l,{epsilon:c,format:_?"NHWC":"NCHW"})},1136421:l=>{t.ic("Range",l,void 0)},1136474:(l,c)=>{t.ic("Einsum",l,{equation:Oe(c)})},1136555:(l,c,_,g,x)=>{t.ic("Pad",l,{mode:c,value:_,pads:g?Array.from((v(),z).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1136698:(l,c,_,g,x,C)=>{t.ic("BatchNormalization",l,{epsilon:c,momentum:_,spatial:!!x,trainingMode:!!g,format:C?"NHWC":"NCHW"})},1136867:(l,c,_,g,x,C)=>{t.ic("BatchNormalization",l,{epsilon:c,momentum:_,spatial:!!x,trainingMode:!!g,format:C?"NHWC":"NCHW"})},1137036:(l,c,_)=>{t.ic("CumSum",l,{exclusive:Number(c),reverse:Number(_)})},1137133:(l,c,_)=>{t.ic("DequantizeLinear",l,{axis:c,blockSize:_})},1137223:(l,c,_,g,x)=>{t.ic("GridSample",l,{align_corners:c,mode:Oe(_),padding_mode:Oe(g),format:x?"NHWC":"NCHW"})},1137393:(l,c,_,g,x)=>{t.ic("GridSample",l,{align_corners:c,mode:Oe(_),padding_mode:Oe(g),format:x?"NHWC":"NCHW"})},1137563:(l,c)=>{t.ic("ScatterND",l,{reduction:Oe(c)})},1137648:(l,c,_,g,x,C,A,D,G)=>{t.ic("Attention",l,{numHeads:c,isUnidirectional:_,maskFilterValue:g,scale:x,doRotary:C,qkvHiddenSizes:A?Array.from((v(),z).subarray(Number(D)>>>0,Number(D)+A>>>0)):[],pastPresentShareBuffer:!!G})},1137920:l=>{t.ic("BiasAdd",l,void 0)},1137975:l=>{t.ic("BiasSplitGelu",l,void 0)},1138036:l=>{t.ic("FastGelu",l,void 0)},1138092:(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se,$t,ln)=>{t.ic("Conv",l,{format:he?"NHWC":"NCHW",auto_pad:c,dilations:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(g)>>>0)):[],group:x,kernel_shape:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(A)>>>0)):[],pads:D?Array.from((v(),z).subarray(Number(D)>>>0,Number(G)>>>0)):[],strides:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],w_is_const:()=>!!(v(),H)[Number(ve)>>>0],activation:Oe(Se),activation_params:$t?Array.from((v(),P).subarray(Number($t)>>>0,Number(ln)>>>0)):[]})},1138676:l=>{t.ic("Gelu",l,void 0)},1138728:(l,c,_,g,x,C,A,D,G)=>{t.ic("GroupQueryAttention",l,{numHeads:c,kvNumHeads:_,scale:g,softcap:x,doRotary:C,rotaryInterleaved:A,smoothSoftmax:D,localWindowSize:G})},1138945:(l,c,_,g)=>{t.ic("LayerNormalization",l,{axis:c,epsilon:_,simplified:!!g})},1139056:(l,c,_,g)=>{t.ic("LayerNormalization",l,{axis:c,epsilon:_,simplified:!!g})},1139167:(l,c,_,g,x,C)=>{t.ic("MatMulNBits",l,{k:c,n:_,accuracyLevel:g,bits:x,blockSize:C})},1139294:(l,c,_,g,x,C)=>{t.ic("MultiHeadAttention",l,{numHeads:c,isUnidirectional:_,maskFilterValue:g,scale:x,doRotary:C})},1139453:(l,c)=>{t.ic("QuickGelu",l,{alpha:c})},1139517:(l,c,_,g,x)=>{t.ic("RotaryEmbedding",l,{interleaved:!!c,numHeads:_,rotaryEmbeddingDim:g,scale:x})},1139656:(l,c,_)=>{t.ic("SkipLayerNormalization",l,{epsilon:c,simplified:!!_})},1139758:(l,c,_)=>{t.ic("SkipLayerNormalization",l,{epsilon:c,simplified:!!_})},1139860:(l,c,_,g)=>{t.ic("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:_,blockSize:g})},1139981:l=>{t.Qd(l)},1140015:(l,c)=>t.Sd(Number(l),Number(c),t.hd.Vd,t.hd.errors)};function vy(l,c,_){return ho(async()=>{await t.Od(Number(l),Number(c),Number(_))})}function xy(){return typeof wasmOffsetConverter<"u"}function Sy(l,c,_,g){var x=le();try{return Xo(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function Ey(l,c,_){var g=le();try{return Zo(l,c,_)}catch(x){if(ue(g),x!==x+0)throw x;de(1,0)}}function Ty(l){var c=le();try{jo(l)}catch(_){if(ue(c),_!==_+0)throw _;de(1,0)}}function Iy(l,c){var _=le();try{return on(l,c)}catch(g){if(ue(_),g!==g+0)throw g;de(1,0)}}function Cy(l,c,_){var g=le();try{Vo(l,c,_)}catch(x){if(ue(g),x!==x+0)throw x;de(1,0)}}function ky(l,c,_,g){var x=le();try{return ru(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function Oy(l,c){var _=le();try{Qo(l,c)}catch(g){if(ue(_),g!==g+0)throw g;de(1,0)}}function zy(l,c,_,g,x,C,A){var D=le();try{return Yo(l,c,_,g,x,C,A)}catch(G){if(ue(D),G!==G+0)throw G;de(1,0)}}function Ay(l,c,_,g,x,C){var A=le();try{qo(l,c,_,g,x,C)}catch(D){if(ue(A),D!==D+0)throw D;de(1,0)}}function Ry(l,c,_,g){var x=le();try{Fo(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function My(l,c,_,g,x){var C=le();try{Ko(l,c,_,g,x)}catch(A){if(ue(C),A!==A+0)throw A;de(1,0)}}function Dy(l,c,_,g,x,C,A){var D=le();try{eu(l,c,_,g,x,C,A)}catch(G){if(ue(D),G!==G+0)throw G;de(1,0)}}function By(l,c,_,g,x,C,A){var D=le();try{tu(l,c,_,g,x,C,A)}catch(G){if(ue(D),G!==G+0)throw G;de(1,0)}}function Ny(l,c,_,g,x,C,A,D){var G=le();try{su(l,c,_,g,x,C,A,D)}catch(Y){if(ue(G),Y!==Y+0)throw Y;de(1,0)}}function Py(l,c,_,g,x){var C=le();try{return Jo(l,c,_,g,x)}catch(A){if(ue(C),A!==A+0)throw A;de(1,0)}}function Ly(l,c,_){var g=le();try{return Ho(l,c,_)}catch(x){if(ue(g),x!==x+0)throw x;de(1,0)}}function Uy(l,c,_,g,x,C,A,D){var G=le();try{ou(l,c,_,g,x,C,A,D)}catch(Y){if(ue(G),Y!==Y+0)throw Y;de(1,0)}}function Wy(l,c,_,g,x,C,A,D,G,Y,oe,he){var ve=le();try{iu(l,c,_,g,x,C,A,D,G,Y,oe,he)}catch(Se){if(ue(ve),Se!==Se+0)throw Se;de(1,0)}}function Vy(l,c,_){var g=le();try{return uu(l,c,_)}catch(x){if(ue(g),x!==x+0)throw x;return de(1,0),0n}}function qy(l,c,_,g,x,C,A,D,G){var Y=le();try{Go(l,c,_,g,x,C,A,D,G)}catch(oe){if(ue(Y),oe!==oe+0)throw oe;de(1,0)}}function Gy(l){var c=le();try{return lu(l)}catch(_){if(ue(c),_!==_+0)throw _;de(1,0)}}function Fy(l,c){var _=le();try{return Su(l,c)}catch(g){if(ue(_),g!==g+0)throw g;return de(1,0),0n}}function Hy(l,c,_,g){var x=le();try{return du(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function jy(l,c,_,g,x,C,A){var D=le();try{Eu(l,c,_,g,x,C,A)}catch(G){if(ue(D),G!==G+0)throw G;de(1,0)}}function Ky(l){var c=le();try{return pu(l)}catch(_){if(ue(c),_!==_+0)throw _;return de(1,0),0n}}function Zy(l,c,_,g,x){var C=le();try{return yu(l,c,_,g,x)}catch(A){if(ue(C),A!==A+0)throw A;de(1,0)}}function Yy(l,c,_,g,x,C){var A=le();try{return _u(l,c,_,g,x,C)}catch(D){if(ue(A),D!==D+0)throw D;de(1,0)}}function Xy(l,c,_,g,x,C){var A=le();try{return nu(l,c,_,g,x,C)}catch(D){if(ue(A),D!==D+0)throw D;de(1,0)}}function Qy(l,c,_,g,x,C){var A=le();try{return wu(l,c,_,g,x,C)}catch(D){if(ue(A),D!==D+0)throw D;de(1,0)}}function Jy(l,c,_,g,x,C,A,D){var G=le();try{return au(l,c,_,g,x,C,A,D)}catch(Y){if(ue(G),Y!==Y+0)throw Y;de(1,0)}}function e_(l,c,_,g,x){var C=le();try{return bu(l,c,_,g,x)}catch(A){if(ue(C),A!==A+0)throw A;return de(1,0),0n}}function t_(l,c,_,g){var x=le();try{return $u(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function r_(l,c,_,g){var x=le();try{return vu(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function i_(l,c,_,g,x,C,A,D,G,Y,oe,he){var ve=le();try{return xu(l,c,_,g,x,C,A,D,G,Y,oe,he)}catch(Se){if(ue(ve),Se!==Se+0)throw Se;de(1,0)}}function n_(l,c,_,g,x,C,A,D,G,Y,oe){var he=le();try{mu(l,c,_,g,x,C,A,D,G,Y,oe)}catch(ve){if(ue(he),ve!==ve+0)throw ve;de(1,0)}}function a_(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se,$t,ln){var l_=le();try{gu(l,c,_,g,x,C,A,D,G,Y,oe,he,ve,Se,$t,ln)}catch(dn){if(ue(l_),dn!==dn+0)throw dn;de(1,0)}}function s_(l,c,_){var g=le();try{return cu(l,c,_)}catch(x){if(ue(g),x!==x+0)throw x;de(1,0)}}function o_(l,c,_){var g=le();try{return hu(l,c,_)}catch(x){if(ue(g),x!==x+0)throw x;de(1,0)}}function u_(l,c,_,g){var x=le();try{fu(l,c,_,g)}catch(C){if(ue(x),C!==C+0)throw C;de(1,0)}}function ii(){if(0<xe)be=ii;else if(n)$?.(t),Z();else{for(var l=Le;0<l.length;)l.shift()(t);0<xe?be=ii:(t.calledRun=!0,k||(Z(),$?.(t)))}}return n||(dt=await ke(),ii()),t.PTR_SIZE=4,K?t:new Promise((l,c)=>{$=l,S=c})}var Uc,Mu,tw=L(()=>{"use strict";Uc=Ru,Mu=globalThis.self?.name?.startsWith("em-pthread"),Mu&&Ru()}),bn,ga,Du,Ve,Wc,ai,Bu,Nu,$n,Pu,vn,Vc,xn,qc,La=L(()=>{"use strict";Pa(),bn=typeof location>"u"?void 0:location.origin,ga=rt.url>"file:"&&rt.url<"file;",Du=()=>{if(ga){let e=URL;return new URL(new e("ort.bundle.min.mjs",rt.url).href,bn).href}return rt.url},Ve=Du(),Wc=()=>{if(Ve&&!Ve.startsWith("blob:"))return Ve.substring(0,Ve.lastIndexOf("/")+1)},ai=(e,t)=>{try{let r=t??Ve;return(r?new URL(e,r):new URL(e)).origin===bn}catch{return!1}},Bu=(e,t)=>{let r=t??Ve;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Nu=(e,t)=>`${t??"./"}${e}`,$n=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Pu=async e=>(await import(e)).default,vn=(ew(),Mr(Nc)).default,Vc=async()=>{if(!Ve)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ai(Ve))return[void 0,vn()];let e=await $n(Ve);return[e,vn(e)]},xn=(tw(),Mr(Lc)).default,qc=async(e,t,r,i)=>{let n=xn&&!(e||t);if(n)if(Ve)n=ai(Ve)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,xn];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Bu(a,t),o=r&&s&&!ai(s,t),u=o?await $n(s):s??Nu(a,t);return[o?u:void 0,await Pu(u)]}}}),Sn,si,wr,En,Lu,Uu,Wu,Ua,ge,Zt=L(()=>{"use strict";La(),si=!1,wr=!1,En=!1,Lu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Uu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Wu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ua=async e=>{if(si)return Promise.resolve();if(wr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(En)throw new Error("previous call to 'initializeWebAssembly()' failed.");wr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Wu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Uu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Lu();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,o=s?.href??s,u=n?.wasm,d=u?.href??u,p=e.wasmBinary,[h,f]=await qc(o,a,r>1,!!p||!!d),m=!1,y=[];if(t>0&&y.push(new Promise($=>{setTimeout(()=>{m=!0,$()},t)})),y.push(new Promise(($,S)=>{let b={numThreads:r};if(p)b.wasmBinary=p,b.locateFile=w=>w;else if(d||a)b.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)b.locateFile=w=>new URL(w,o).href;else if(h){let w=Wc();w&&(b.locateFile=E=>w+E)}f(b).then(w=>{wr=!1,si=!0,Sn=w,$(),h&&URL.revokeObjectURL(h)},w=>{wr=!1,En=!0,S(w)})})),await Promise.race(y),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ge=()=>{if(si&&Sn)return Sn;throw new Error("WebAssembly is not initialized yet.")}}),tt,bi,me,Wa=L(()=>{"use strict";Zt(),tt=(e,t)=>{let r=ge(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},bi=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")bi(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},me=e=>{let t=ge(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Gc,rw=L(()=>{"use strict";Zt(),Wa(),Gc=(e,t)=>{let r=ge(),i=0,n=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let s=0;e?.tag!==void 0&&(s=tt(e.tag,n)),i=r._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),i===0&&me("Can't create run options."),e?.extra!==void 0&&bi(e.extra,"",new WeakSet,(o,u)=>{let d=tt(o,n),p=tt(u,n);r._OrtAddRunConfigEntry(i,d,p)!==0&&me(`Can't set a run config entry: ${o} - ${u}.`)});for(let o of t)r._OrtRunOptionsAddActiveLoraAdapter(i,o)!==0&&me("Can't add an active LoRA adapter.");return[i,n]}catch(s){throw i!==0&&r._OrtReleaseRunOptions(i),n.forEach(o=>r._free(o)),s}}}),Vu,qu,Gu,Bt,Fu,Fc,iw=L(()=>{"use strict";Zt(),Wa(),Vu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},qu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Gu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Bt=(e,t,r,i)=>{let n=tt(t,i),a=tt(r,i);ge()._OrtAddSessionConfigEntry(e,n,a)!==0&&me(`Can't set a session config entry: ${t} - ${r}.`)},Fu=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[],o;switch(a){case"webnn":if(a="WEBNN",Bt(e,"session.disable_quant_qdq","1",r),Bt(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let f=n?.deviceType;f&&Bt(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Bt(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let u=s.length,d=0,p=0;if(u>0){d=ge()._malloc(u*ge().PTR_SIZE),r.push(d),p=ge()._malloc(u*ge().PTR_SIZE),r.push(p);for(let f=0;f<u;f++)ge().setValue(d+f*ge().PTR_SIZE,s[f][0],"*"),ge().setValue(p+f*ge().PTR_SIZE,s[f][1],"*")}let h;if(o!==void 0){let f=ge()._malloc(ge().PTR_SIZE);r.push(f),ge().setValue(f,o[0],"*"),h=await ge()._OrtAppendExecutionProviderV2(e,f,1,d,p,u)}else{let f=tt(a,r);h=await ge()._OrtAppendExecutionProvider(e,f,d,p,u)}h!==0&&me(`Can't append execution provider: ${a}.`)}},Fc=async e=>{let t=ge(),r=0,i=[],n=e||{};Gu(n);try{let a=Vu(n.graphOptimizationLevel??"all"),s=qu(n.executionMode??"sequential"),o=typeof n.logId=="string"?tt(n.logId,i):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof n.optimizedModelFilePath=="string"?tt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,u,d,p),r===0&&me("Can't create session options."),n.executionProviders&&await Fu(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Bt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,f]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=tt(h,i);t._OrtAddFreeDimensionOverride(r,m,f)!==0&&me(`Can't set a free dimension override: ${h} - ${f}.`)}return n.extra!==void 0&&bi(n.extra,"",new WeakSet,(h,f)=>{Bt(r,h,f,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&me("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),qt,ft,Gt,Ii,$i,Va,qa,ya,te=L(()=>{"use strict";qt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ft=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Gt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},Ii=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},$i=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Va=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ya=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ci,Ga=L(()=>{"use strict";Pa(),Ci=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await n.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Hu,ju,Ku,Zu,Fa,Yu,ce,mt=L(()=>{"use strict";te(),Hu=["V","I","W","E","F"],ju=(e,t)=>{console.log(`[${Hu[e]},${new Date().toISOString()}]${t}`)},Fa=(e,t)=>{Ku=e,Zu=t},Yu=(e,t)=>{let r=$i(e),i=$i(Ku);r>=i&&ju(r,typeof t=="function"?t():t)},ce=(...e)=>{Zu&&Yu(...e)}}),Xu,nr,R,vi,Hc,jc,Kc,ne=L(()=>{"use strict";Xu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},nr=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Xu.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let u=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class _i{static size(t){return _i.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return _i.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return _i.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},vi=class Et{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Et.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],n[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o,u=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Et.computeShapeHelper(t,r,d,i,n,a,s,o,u),d}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Et.computeShapeHelper(!1,t,u,i,n,a,s,o),u}static computeShapeHelper(t,r,i,n,a,s,o,u,d=0){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(Et.adjustPadAndReturnShape(r[p+2],n[p],a[p],s[p],o,p,p+r.length-2,u,d))}static computeOutputSize(t,r,i,n,a){let s=Math.floor(t/r)+1;return a===1&&(s=Math.ceil(t/r)+1,(s-1)*r>=i+n&&(s-=1)),s}static adjustPadAndReturnShape(t,r,i,n,a,s,o,u,d=0){let p=i*(n-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Et.computeOutputSize(t-p,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=(Math.floor((t+r-1)/r)-1)*r+n-t;return a[s]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[o]=h-a[s],Et.computeOutputSize(t+a[s]+a[o]-p,r,t,a[s],d)}default:throw new Error("Unsupported AutoPad type")}else return Et.computeOutputSize(t+a[s]+a[o]-p,r,t,a[s],d)}},Hc=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!nr.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},jc=-34028234663852886e22,Kc=34028234663852886e22}),Ha,Zc=L(()=>{"use strict";te(),Ha=(e,t)=>new(Ii(t))(e)}),Tn,Qu,In,Ju,Cn,el,kn,On,zn,tl,Yc,nw=L(()=>{"use strict";te(),mt(),Tn=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Qu=(e,t)=>{if(t==="int32")return e;let r=Tn.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(Ii(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},In=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ju=1,Cn=()=>Ju++,el=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),kn=(e,t)=>{let r=Tn.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},On=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return kn(this.dataType,this.tensorShape)}destroy(){ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=In(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},zn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=el.get(t),!s||!a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==kn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Qu(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?In(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},tl=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Cn();return this.tensorTrackersById.set(e,new zn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Cn(),s=new On({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new zn(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new On({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Yc=(...e)=>new tl(...e)}),br,rl,Xc,aw=L(()=>{"use strict";te(),Zt(),Zc(),nw(),mt(),br=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),rl=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},Xc=class{constructor(e){this.tensorManager=Yc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Fa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>rl(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=br.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=br.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ha(r,t)}}registerMLTensor(e,t,r,i){let n=br.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=br.get(qt(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),ja=L(()=>{"use strict"}),An,oi,ui,il,nl,Rn,_a,al,Qc,sw=L(()=>{"use strict";mt(),ja(),An=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),oi=[],ui=e=>Math.ceil(Number(e)/16)*16,il=e=>{for(let t=0;t<oi.length;t++){let r=oi[t];if(e<=r)return r}return Math.ceil(e/16)*16},nl=1,Rn=()=>nl++,_a=async(e,t,r,i)=>{let n=ui(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},al=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of An)oi.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=ui(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);if(a===n&&i%4===0)this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,r,i,n);else{let o=new Uint8Array(a);o.set(t),this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,o,0,a)}ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=ui(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Rn();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=il(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Rn(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await _a(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=An.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Qc=(...e)=>new al(...e)}),sl,ye,Ce=L(()=>{"use strict";sl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ye=e=>new sl(e)}),ar,li,Ae,ze,J,Ie,wa,ir,Ct,Q,$r,B,X,Jc,Ka,ol,eh,ae=L(()=>{"use strict";te(),ne(),ar=64,li=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ae=(e,t=1)=>{let r=li(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=li(e,t);return typeof r=="string"?r:r[1]},J=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},Ie=e=>e%4===0?4:e%2===0?2:1,wa=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ir=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Ct=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,$r=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=li(t,n),p=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],f={indices:u,value:p,storage:h,tensor:t},m=N=>typeof N=="string"?N:`${N}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=a?"uniforms.":"",S=`${$}${e}_shape`,b=`${$}${e}_strides`,w="";for(let N=0;N<s-1;N++)w+=`
    let dim${N} = current / ${Q(b,N,s)};
    let rest${N} = current % ${Q(b,N,s)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;w+=`indices[${s-1}] = current;`;let E=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${w}
    return indices;
  }`,T=N=>(y.offsetToIndices=!0,s<2?N:`o2i_${e}(${N})`),I=[];if(s>=2)for(let N=s-1;N>=0;N--)I.push(`${Q(b,N,s)} * (indices[${N}])`);let k=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${I.join("+")};
  }`,O=N=>(y.indicesToOffset=!0,s<2?N:`i2o_${e}(${N})`),v=(...N)=>s===0?"0u":`${f.indices}(${N.map(m).join(",")})`,M=(N,K)=>s<2?`${N}`:`${Q(N,K,s)}`,W=(N,K,j)=>s<2?`${N}=${j};`:`${Q(N,K,s)}=${j};`,H={},F=(N,K)=>{y.broadcastedIndicesToOffset=!0;let j=`${K.name}broadcastedIndicesTo${e}Offset`;if(j in H)return`${j}(${N})`;let Z=[];for(let _e=s-1;_e>=0;_e--){let De=K.indicesGet("outputIndices",_e+K.rank-s);Z.push(`${M(b,_e)} * (${De} % ${M(S,_e)})`)}return H[j]=`fn ${j}(outputIndices: ${K.type.indices}) -> u32 {
             return ${Z.length>0?Z.join("+"):"0u"};
           }`,`${j}(${N})`},U=(N,K)=>(()=>{if(f.storage===f.value)return`${e}[${N}]=${K};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${K}), select(0u, 0xFFFFFFFFu, ${K} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${K}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${K}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),q=N=>(()=>{if(f.storage===f.value)return`${e}[${N}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${N}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${N}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),z=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${q(`i2o_${e}(indices)`)};
  }`,V=s<2?"":(()=>{let N=o.map(j=>`d${j}: u32`).join(", "),K=o.map(j=>`d${j}`).join(", ");return`
  fn get_${e}(${N}) -> ${p} {
    return get_${e}ByIndices(${v(K)});
  }`})(),P=(...N)=>{if(N.length!==s)throw new Error(`indices length must be ${s}`);let K=N.map(m).join(",");return s===0?q("0u"):s===1?q(K[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${K})`)},se=N=>s<2?q(N):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${N})`),ee=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${U(`i2o_${e}(indices)`,"value")}
  }`,re=s<2?"":(()=>{let N=o.map(j=>`d${j}: u32`).join(", "),K=o.map(j=>`d${j}`).join(", ");return`
  fn set_${e}(${N}, value: ${p}) {
    set_${e}ByIndices(${v(K)}, value);
  }`})();return{impl:()=>{let N=[],K=!1;return y.offsetToIndices&&(N.push(E),K=!0),y.indicesToOffset&&(N.push(k),K=!0),y.broadcastedIndicesToOffset&&(Object.values(H).forEach(j=>N.push(j)),K=!0),y.set&&(N.push(re),K=!0),y.setByIndices&&(N.push(ee),K=!0),y.get&&(N.push(V),K=!0),y.getByIndices&&(N.push(z),K=!0),!a&&K&&N.unshift(`const ${S} = ${f.indices}(${r.join(",")});`,`const ${b} = ${f.indices}(${R.computeStrides(r).join(",")});`),N.join(`
`)},type:f,offsetToIndices:T,indicesToOffset:O,broadcastedIndicesToOffset:F,indices:v,indicesGet:M,indicesSet:W,set:(...N)=>{if(N.length!==s+1)throw new Error(`indices length must be ${s}`);let K=N[s];if(typeof K!="string")throw new Error("value must be string");let j=N.slice(0,s).map(m).join(",");return s===0?U("0u",K):s===1?U(j[0],K):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${j}, ${K})`)},setByOffset:U,setByIndices:(N,K)=>s<2?U(N,K):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${K});`),get:P,getByOffset:q,getByIndices:se,usage:i,name:e,strides:b,shape:S,rank:s}},B=(e,t,r,i=1)=>$r(e,t,r,"input",i),X=(e,t,r,i=1)=>$r(e,t,r,"output",i),Jc=(e,t,r)=>$r(e,t,r,"atomicOutput",1),Ka=(e,t,r,i=1)=>$r(e,t,r,"internal",i),ol=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ar){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},eh=(e,t)=>new ol(e,t)}),ul,Mn,ll,dl,pl,cl,Ge,th,rh,kt=L(()=>{"use strict";te(),ne(),Ce(),ae(),ul=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Mn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ll=(e,t)=>R.sortBasedOnPerm(e,Mn(e.length,t)),dl=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},pl=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},cl=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ge=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Mn(i,t),a=ll(e.dims,n),s=e.dims,o=a,u=i<2||cl(n,e.dims),d;if(u)return d=y=>{let $=B("input",r,s,4),S=X("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables($,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:p,newPerm:h}=pl(e.dims,n),f=R.areEqual(h,[2,3,1]),m=R.areEqual(h,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let y=16;return d=$=>{let S=B("a",r,s.length),b=X("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${y+1}>, ${y}>;
  ${$.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:$},...J(s,o)]}},getShaderSource:d}}return d=y=>{let $=B("a",r,s.length),S=X("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,S)}

  ${dl(n,i,$,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...J(s,o)]}},getShaderSource:d}},th=(e,t)=>{ul(e.inputs,t.perm),e.compute(Ge(e.inputs[0],t.perm))},rh=e=>ye({perm:e.perm})}),hl,fl,ml,gl,yl,_l,wl,bl,$l,vl,Ye,ih,nh,ah,sh,oh,uh,lh,dh,ph,ch,ow=L(()=>{"use strict";te(),ne(),ae(),Za(),kt(),hl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},fl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ml={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},gl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},yl=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},_l=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},wl=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},bl=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$l=(e,t)=>{let r=[];if(!bl(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},vl=(e,t,r,i,n,a,s)=>{let o=r[0].dims,u=R.size(a),d=R.size(s),p=B("_A",r[0].dataType,o),h=X("output",n,a),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,y=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(p,h)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ml[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${hl[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${fl[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${gl[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ye=(e,t,r,i)=>{let n=e.inputs.length===1?r:ba(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,y)=>y));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=$l(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Ge(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=yl(o.length,u.dims.length));let[p,h]=_l(u.dims,o),f=p;n.keepDims&&(f=wl(p,s)),e.compute(vl(t,n.cacheKey,[u],i,e.inputs[0].dataType,f,h),{inputs:[u]})},ih=(e,t)=>{Ye(e,"ReduceMeanShared",t,"mean")},nh=(e,t)=>{Ye(e,"ReduceL1Shared",t,"l1")},ah=(e,t)=>{Ye(e,"ReduceL2Shared",t,"l2")},sh=(e,t)=>{Ye(e,"ReduceLogSumExpShared",t,"logSumExp")},oh=(e,t)=>{Ye(e,"ReduceMaxShared",t,"max")},uh=(e,t)=>{Ye(e,"ReduceMinShared",t,"min")},lh=(e,t)=>{Ye(e,"ReduceProdShared",t,"prod")},dh=(e,t)=>{Ye(e,"ReduceSumShared",t,"sum")},ph=(e,t)=>{Ye(e,"ReduceSumSquareShared",t,"sumSquare")},ch=(e,t)=>{Ye(e,"ReduceLogSumShared",t,"logSum")}}),Xe,xl,xi,ba,Qe,Sl,El,Tl,Il,Cl,kl,Ol,zl,Al,Rl,Je,hh,fh,mh,gh,yh,_h,wh,bh,$h,vh,Za=L(()=>{"use strict";te(),ne(),Ce(),ae(),ow(),Xe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},xl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],xi=(e,t,r,i,n,a,s=!1,o=!1)=>{let u=[],d=r[0].dims,p=d.length,h=R.normalizeAxes(n,p),f=!o&&h.length===0;d.forEach(($,S)=>{f||h.indexOf(S)>=0?s&&u.push(1):u.push($)});let m=u.length,y=R.size(u);return{name:e,shaderCache:t,getShaderSource:$=>{let S=[],b=B("_A",r[0].dataType,p),w=X("output",a,m),E=i(b,w,h),T=E[2];for(let I=0,k=0;I<p;I++)f||h.indexOf(I)>=0?(s&&k++,T=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${E[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${b.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(S.push(`${b.indicesSet("input_indices",I,w.indicesGet("output_indices",k))};`),k++);return`

        ${$.registerUniform("output_size","u32").declareVariables(b,w)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${T}
          ${E[3]}
          ${E.length===4?w.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...J(d,u)]})}},ba=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ye({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Qe=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:ba(n,r);e.compute(xi(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?xl:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Sl=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},El=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Tl=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Il=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Cl=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},kl=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},Ol=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},zl=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Al=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Rl=(e,t)=>{Xe(e.inputs),Qe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Je=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},hh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):ih(e,t)},fh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):nh(e,t)},mh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):ah(e,t)},gh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):sh(e,t)},yh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):oh(e,t)},_h=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ol(e,t):uh(e,t)},wh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zl(e,t):lh(e,t)},bh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Al(e,t):dh(e,t)},$h=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rl(e,t):ph(e,t)},vh=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sl(e,t):ch(e,t)}}),Dn,xh,Sh,$a,uw=L(()=>{"use strict";te(),Ce(),Za(),Dn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},xh=(e,t)=>{Dn(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(xi("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Sh=(e,t)=>{Dn(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(xi("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},$a=e=>ye(e)}),Ml,di,Dl,Bl,Nl,Br,Pl,Eh,Ya=L(()=>{"use strict";te(),ne(),ja(),ae(),Ml=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],p=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,f=h,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let y=d;if(h!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let S=y+$,b=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:b,inputHiddenSize:p,hiddenSize:h,vHiddenSize:m,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},di=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Dl=(e,t,r,i,n,a,s,o)=>{let u=Ie(s?1:a),d=64,p=a/u;p<d&&(d=32);let h=Math.ceil(a/u/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:p},{type:12,data:h}],m=Ae(e.dataType,u),y=ze(1,u),$=["type"];s&&$.push("type"),o&&$.push("type");let S=b=>{let w=X("x",e.dataType,e.dims,u),E=[w],T=s?B("seq_lens",s.dataType,s.dims):void 0;T&&E.push(T);let I=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;I&&E.push(I);let k=ze(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${b.registerUniforms(O).declareVariables(...E)}
  ${b.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${di(T,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:$},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:f})}},Bl=(e,t,r,i,n,a,s,o,u)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],h=e>1&&i,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=h?[a.batchSize,f,d,a.headSize]:void 0,y=a.nReps?a.nReps:1,$=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=Ie(a.headSize),b=a.headSize/S,w=12,E={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},T=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:y}],I=h&&i&&R.size(i.dims)>0,k=["type","type"];I&&k.push("type"),n&&k.push("type"),o&&k.push("type"),u&&k.push("type");let O=[{dims:p,dataType:t.dataType,gpuDataType:0}];h&&O.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=M=>{let W=B("q",t.dataType,t.dims,S),H=B("key",r.dataType,r.dims,S),F=[W,H];if(I){let ee=B("past_key",i.dataType,i.dims,S);F.push(ee)}n&&F.push(B("attention_bias",n.dataType,n.dims));let U=o?B("seq_lens",o.dataType,o.dims):void 0;U&&F.push(U);let q=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;q&&F.push(q);let z=X("output",t.dataType,p),V=[z];h&&V.push(X("present_key",t.dataType,m,S));let P=ze(1,S),se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${W.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${W.type.storage}, ${w*w}>;
  ${M.registerUniforms(se).declareVariables(...F,...V)}
  ${M.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${di(U,q,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${P}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${P}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${z.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:O,dispatchGroup:E,programUniforms:T}),getShaderSource:v}},Nl=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let u=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,h=e>1&&i,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,m=h?[n.batchSize,f,u,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,p],$=12,S={x:Math.ceil(n.vHeadSize/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},b=[{type:12,data:n.sequenceLength},{type:12,data:u},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=h&&i&&R.size(i.dims)>0,E=["type","type"];w&&E.push("type"),s&&E.push("type"),o&&E.push("type");let T=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:m,dataType:t.dataType,gpuDataType:0});let I=k=>{let O=B("probs",t.dataType,t.dims),v=B("v",r.dataType,r.dims),M=[O,v];w&&M.push(B("past_value",i.dataType,i.dims));let W=s?B("seq_lens",s.dataType,s.dims):void 0;s&&M.push(W);let H=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;o&&M.push(H);let F=[X("output",t.dataType,y)];h&&F.push(X("present_value",t.dataType,m));let U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${O.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${O.type.value}, ${$*$}>;
  ${k.registerUniforms(U).declareVariables(...M,...F)}
  ${k.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${di(W,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:b}),getShaderSource:I}},Br=(e,t,r,i,n,a,s,o,u,d,p=void 0,h=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,y=f>1?o:void 0,$=f>1?d.pastSequenceLength:0,S=$+d.kvSequenceLength,b=u&&R.size(u.dims)>0?u:void 0,w=[t,r];m&&R.size(m.dims)>0&&w.push(m),b&&w.push(b),p&&w.push(p),h&&w.push(h);let E=e.compute(Bl(f,t,r,m,b,d,$,p,h),{inputs:w,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Dl(E,d.batchSize,d.numHeads,$,d.sequenceLength,S,p,h),{inputs:p&&h?[E,p,h]:[E],outputs:[]});let T=[E,i];y&&R.size(y.dims)>0&&T.push(y),p&&T.push(p),h&&T.push(h),e.compute(Nl(f,E,i,y,d,$,p,h),{inputs:T,outputs:f>1?[0,2]:[0]})},Pl=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=h=>{let f=X("output_q",u[0].dataType,r),m=X("output_k",u[0].dataType,r),y=X("output_v",u[0].dataType,r),$=B("input",u[0].dataType,u[0].dims),S=B("weight",u[1].dataType,u[1].dims),b=B("bias",u[2].dataType,u[2].dims),w=$.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${h.registerUniforms(E).declareVariables($,S,b,f,m,y)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},Eh=(e,t)=>{let r=Ml(e.inputs,t),[i,n,a]=Pl(e,r);return Br(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Ll,Ul,Wl,Th,lw=L(()=>{"use strict";He(),te(),ne(),Ce(),ae(),Ll=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,u)=>{if(o!==i[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ul=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?Ie(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,u=R.size(a)/s,d=i,p=d?a.length:a,h=B("x",e[0].dataType,e[0].dims,s),f=B("scale",e[1].dataType,e[1].dims,o),m=B("bias",e[2].dataType,e[2].dims,o),y=B("inputMean",e[3].dataType,e[3].dims,o),$=B("inputVar",e[4].dataType,e[4].dims,o),S=X("y",e[0].dataType,p,s),b=()=>{let E="";if(i)E=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")E=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let T=1;T<f.rank;T++)E+=`cIndices[${T}] = outputIndices[${T}];`;E+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return E},w=E=>`
  const epsilon = ${r};
  ${E.registerUniform("outputSize","u32").declareVariables(h,f,m,y,$,S)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...J(a)]:[{type:12,data:u}]})}},Wl=e=>ye(e),Th=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Wl({...t,outputCount:i});if(pe.webgpu.validateInputContent&&Ll(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ul(r,n))}}),Vl,ql,Ih,dw=L(()=>{"use strict";ne(),ae(),Vl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ql=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=B("input",n,t,4),s=B("bias",n,[r],4),o=B("residual",n,t,4),u=X("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Ih=e=>{Vl(e.inputs),e.compute(ql(e.inputs))}}),Gl,fe,Ch,kh,Oh,zh,Ah,Rh,Mh,Dh,Bh,Fl,Nh,Ph,Lh,Uh,zr,Wh,wi,Vh,qh,Gh,Fh,Hh,jh,Kh,Zh,Yh,Xh,Qh,Jh,ef,tf,rf,nf,af,Bn,sf,va,xa,of,uf,lf,Hl,jl,df,Xa=L(()=>{"use strict";te(),ne(),Ce(),ae(),Gl=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),u="";typeof n=="string"?u=`${n}(a)`:u=n("a");let d=B("inputData",r,[o],4),p=X("outputData",i,[o],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},fe=(e,t,r,i,n,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Gl(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:u})}},Ch=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},kh=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},Oh=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},zh=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},Ah=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},Rh=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},Mh=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},Dh=e=>ye(e),Bh=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Fl=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ye({min:t,max:r})},Nh=(e,t)=>{let r=t||Fl(e.inputs),i=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ph=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},Lh=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},Uh=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},zr=e=>ye(e),Wh=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},wi=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vh=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,wi(t)))},qh=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},Gh=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},Fh=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,wi(t)))},Hh=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},jh=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},Kh=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},Zh=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Yh=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Xh=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qh=e=>ye(e),Jh=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},ef=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},tf=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},rf=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},nf=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},af=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},Bn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,sf=e=>{e.compute(fe(e.inputs[0],"Tanh",Bn))},va=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Bn("v")};
}
`,xa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,of=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",xa,va(t),void 0,e.inputs[0].dataType))},uf=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},lf=e=>{e.compute(fe(e.inputs[0],"Log","log"))},Hl=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,jl=e=>`quick_gelu_impl(${e})`,df=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",jl,Hl(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Kl,Zl,pf,pw=L(()=>{"use strict";ne(),ae(),Xa(),Kl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Zl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),n=X("output",e[0].dataType,t,4),a=R.size(t)/4,s=Ae(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${wi(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},pf=e=>{Kl(e.inputs),e.compute(Zl(e.inputs))}}),Yl,Xl,et,cf,hf,ff,mf,gf,yf,_f,wf,bf,$f,cw=L(()=>{"use strict";te(),ne(),ae(),Yl=(e,t,r,i,n,a,s,o,u,d,p,h)=>{let f,m;typeof o=="string"?f=m=(w,E)=>`${o}((${w}),(${E}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let y=X("outputData",p,i.length,4),$=B("aData",u,t.length,4),S=B("bData",d,r.length,4),b;if(n)if(a){let w=R.size(t)===1,E=R.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;w||E?b=y.setByOffset("global_idx",m(w?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),E?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):b=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",m(s||T?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=y.setByOffset("global_idx",m($.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(E,T,I="")=>{let k=`aData[indexA${T}][componentA${T}]`,O=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${y.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${$.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${E}[${T}] = ${I}(${f(k,O)});
          `};p===9?b=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:b=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,S,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},Xl=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),d=!R.areEqual(o,u),p=o,h=R.size(o),f=!1,m=!1,y=[d];if(d){let $=nr.calcShape(o,u,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");p=$.slice(),h=R.size(p);let S=R.size(o)===1,b=R.size(u)===1,w=o.length>0&&o[o.length-1]%4===0,E=u.length>0&&u[u.length-1]%4===0;y.push(S),y.push(b),y.push(w),y.push(E);let T=1;for(let I=1;I<p.length;I++){let k=o[o.length-I],O=u[u.length-I];if(k===O)T*=k;else break}T%4===0?(m=!0,f=!0):(S||b||w||E)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>Yl($,o,u,p,f,d,m,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(p)/4)},...J(o,u,p)]})}},et=(e,t,r,i,n,a)=>{e.compute(Xl(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},cf=e=>{et(e,"Add",(t,r)=>`${t}+${r}`)},hf=e=>{et(e,"Div",(t,r)=>`${t}/${r}`)},ff=e=>{et(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},mf=e=>{et(e,"Mul",(t,r)=>`${t}*${r}`)},gf=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;et(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},yf=e=>{et(e,"Sub",(t,r)=>`${t}-${r}`)},_f=e=>{et(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},wf=e=>{et(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},bf=e=>{et(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},$f=e=>{et(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Ql,Jl,vf,xf,hw=L(()=>{"use strict";te(),ne(),Ce(),ae(),Ql=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Jl=(e,t,r,i,n=0)=>{let a=e.reduce((b,w)=>b+R.size(w.dims),0),s=new Array(e.length),o=new Array(e.length),u=new Array(e.length),d=0,p=n,h=[],f=[],m=[{type:12,data:a}];for(let b=0;b<e.length;++b)s[b]=d,o[b]=p,d+=R.size(e[b].dims),p+=e[b].dims[t],f.push(e[b].dims.length),u[b]=B(`input${b}`,i,f[b]),h.push("rank"),m.push({type:12,data:s[b]}),m.push({type:12,data:o[b]});for(let b=0;b<e.length;++b)m.push(...J(e[b].dims));m.push(...J(r));let y=X("output",i,r.length),$=u.map((b,w)=>{let E=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${w}`};
        var outputIndices = ${b.offsetToIndices("inputOffset")};
        ${y.indicesGet("outputIndices",t)} += uniforms.outputAxisOffset${w};
        ${y.setByIndices("outputIndices",b.getByOffset("inputOffset"))}`;return e.length===1?E:w===0?`if (inputIndex == 0u) {${E}}`:w===e.length-1?`else {${E}}`:`else if (inputIndex == ${w}u) {${E}}`}).join(`
`),S=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)b.registerUniform(`inputOffset${w}`,"u32"),b.registerUniform(`outputAxisOffset${w}`,"u32");return b.declareVariables(...u,y)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${u.slice(1).map((w,E)=>`if (global_idx < uniforms.inputOffset${E+1}) {
      return ${E}u;
    }`).join(`
`)}
    return ${e.length-1}u;
  }

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${$}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:m}),getShaderSource:S}},vf=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);Ql(r,n);let a=i.slice();a[n]=r.reduce((d,p)=>d+(p.dims.length>n?p.dims[n]:0),0);let s=r.filter(d=>R.size(d.dims)>0);if(s.length===0){e.output(0,a);return}let o=e.deviceLimits.maxStorageBuffersPerShaderStage-1,u=0;for(let d=0;d<s.length;d+=o){let p=s.slice(d,d+o);e.compute(Jl(p,n,a,r[0].dataType,u),{inputs:p,outputs:[0]}),u+=p.reduce((h,f)=>h+f.dims[n],0)}},xf=e=>ye({axis:e.axis})}),Ht,jt,Kt,Qa,Yt=L(()=>{"use strict";te(),ne(),Ht=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},jt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Kt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Qa=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[jc,Kc];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Me,Sf,Ja=L(()=>{"use strict";Me=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Sf=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ef,fw=L(()=>{"use strict";Ef=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Rr,es,ts=L(()=>{"use strict";te(),ne(),ae(),Yt(),Rr=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${Q(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Q(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},es=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],p=s[s.length-1],h=Ie(d),f=Ie(p),m=Ie(u),y=R.size(r)/h/m,$=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),b=[R.size(S),u,d],w=[{type:12,data:y},{type:12,data:u},{type:12,data:d},{type:12,data:p}];jt(t,w),w.push(...J(S,s,o)),$&&w.push(...J(e[2].dims)),w.push(...J(b));let E=T=>{let I=Ka("batch_dims",e[0].dataType,S.length),k=B("a",e[0].dataType,s.length,f),O=B("b",e[1].dataType,o.length,h),v=X("output",e[0].dataType,b.length,h),M=Ae(v.type.tensor),W=Ht(t,v.type.value,M),H=[k,O],F="";if($){let z=n?h:1;H.push(B("bias",e[2].dataType,e[2].dims.length,z)),F=`${n?`value += bias[col / ${z}];`:`value += ${v.type.value}(bias[row + i]);`}`}let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Kt(t,U);let q=()=>{let z=`var a_data: ${k.type.value};`;for(let V=0;V<f;V++)z+=`
              let b_data${V} = b[(b_offset + (k + ${V}) * uniforms.N + col) / ${h}];`;for(let V=0;V<m;V++){z+=`a_data = a[(a_offset + (row + ${V}) * uniforms.K + k) / ${f}];`;for(let P=0;P<f;P++)z+=`
            values[${V}] = fma(${O.type.value}(a_data${f===1?"":`[${P}]`}), b_data${P}, values[${V}]);
`}return z};return`
  ${T.registerUniforms(U).registerInternalVariables(I).declareVariables(...H,v)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${Rr("a_indices",k,k.rank-2,I.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${Rr("b_indices",O,O.rank-2,I.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${q()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${F}
      ${W}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${f};${m};${n}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:E}}}),ed,td,Sa,Nn,rd,Ea,id,Si,rs=L(()=>{"use strict";te(),ne(),ae(),Yt(),ts(),Ja(),ed=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,td=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Sa=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=n?u:a,h=n?a:u,f=p/t[0],m=a/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${p/f}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ed(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${td(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Nn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,rd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ea=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],h=n?d:a,f=n?a:d;if(!(f%t[1]===0&&h%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],y=h/t[0],$=a/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Nn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Nn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${rd(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},id=(e,t,r,i,n=!1)=>{let[a,s,o,u]=i,d=Ae(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Me(e,d)} {
      var value = ${Me(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Rr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Me(e,d)} {
      var value = ${Me(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Rr("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Me(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Me(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Si=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),h=R.size(p),f=s[s.length-2],m=s[s.length-1],y=o[o.length-1],$=m%4===0&&y%4===0,S=f<=8?[4,1,1]:[4,4,1],b=[8,8,1],w=[Math.ceil(y/b[0]/S[0]),Math.ceil(f/b[1]/S[1]),Math.ceil(h/b[2]/S[2])],E=$?4:1,T=[...u,f,m/E],I=T.length,k=[...d,m,y/E],O=k.length,v=[h,f,y/E],M=[{type:6,data:f},{type:6,data:y},{type:6,data:m}];jt(t,M),M.push(...J(p,T,k));let W=["rank","rank"],H=e.length>2;H&&(M.push(...J(e[2].dims)),W.push("rank")),M.push(...J(v));let F=U=>{let q=p.length,z=Ka("batchDims",e[0].dataType,q,1),V=Ae(e[0].dataType),P=B("a",e[0].dataType,I,E),se=B("b",e[1].dataType,O,E),ee=X("result",e[0].dataType,v.length,E),re=[P,se];if(H){let _e=n?E:1;re.push(B("bias",e[2].dataType,e[2].dims.length,_e))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Kt(t,N);let K=Ae(ee.type.tensor),j=Ht(t,ee.type.value,K),Z=id(E,H,j,[z,P,se,ee],n);return`
  ${U.registerUniforms(N).registerInternalVariables(z).declareVariables(...re,ee)}
  ${Z}
  ${$?Sa(S,b,V,z):Ea(S,b,V,z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${$};${n}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:M}),getShaderSource:F}}}),nd,Tf,mw=L(()=>{"use strict";te(),mt(),ae(),Yt(),Ja(),fw(),rs(),nd=(e,t,r,i,n=!1,a,s=4,o=4,u=4,d="f32")=>{let p=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},h=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",b=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${Me(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${$}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,E=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Me(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Me(s,d)}(0.0);`,T=e?i&&r?h(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(o)}
    }
    return ${Me(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(o)}
    }
    return ${Me(o,d)}(0.0);`,I=Me(u,d),k=Me(e?s:o,d),O=Me(e?o:s,d),v=Ht(a,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?E:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?T:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Sf(n)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Tf=(e,t,r,i,n,a,s,o,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],h=r[0],f=d?r[2]:r[3],m=d?r[1]:r[2],y=d?r[3]:r[1],$=d&&(p%4===0||p%3===0)&&y%4===0,S=d?y:f*m,b=d?f*m:y,w=[8,8,1],E=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/w[0]/E[0]),Math.ceil(b/w[1]/E[1]),Math.ceil(h/w[2]/E[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=$?d&&p%4!==0?3:4:1,k=w[1]*E[1],O=w[0]*E[0],v=Math.max(w[0]*I,w[1]),M=i%k===0,W=n%O===0,H=a%v===0,F=$?[I,4,4]:[1,1,1],U=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];jt(t,U),U.push(...J(e[0].dims,e[1].dims));let q=["rank","rank"];s&&(U.push(...J(e[2].dims)),q.push("rank")),U.push(...J(r));let z=V=>{let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Kt(t,P);let se=$?4:1,ee=Ae(e[0].dataType),re=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${ee}>`:ee}) {
        result[flatIndex] = ${$?`vec4<${ee}>`:ee}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${ee}>`:ee}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,N=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),K=B("w",e[1].dataType,e[1].dims.length,se),j=[N,K],Z=X("result",e[0].dataType,r.length,se);if(s){let _e=B("bias",e[2].dataType,e[2].dims.length,se);j.push(_e),re+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${ee}>`:ee} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${Ef("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(P).declareVariables(...j,Z)}
        ${re}
        ${nd(d,M,W,H,s,t,F[0],F[1],F[2],ee)}
        ${$?Sa(E,w,ee,void 0,!d,v):Ea(E,w,ee,void 0,!d,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${$};${M};${W};${H};${k};${O};${v}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:U}),getShaderSource:z}}}),ad,Pn,vr,sd,Ln,od,If,Cf,gw=L(()=>{"use strict";te(),mt(),ne(),ae(),Yt(),Ja(),ad=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Pn=e=>typeof e=="number"?[e,e,e]:e,vr=(e,t)=>t<=1?e:e+(e-1)*(t-1),sd=(e,t,r,i=1)=>{let n=vr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Ln=(e,t,r,i,n)=>{n==null&&(n=sd(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},od=(e,t,r,i,n,a,s,o,u,d)=>{let p,h,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Ln([t,r,i,1],[o,u,d],1,[n,a,s],e);h=y[0],f=y[1],m=y[2]}else if(Array.isArray(e)){if(!e.every(($,S,b)=>$===b[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Ln([t,r,i,1],[o,u,d],1,[n,a,s],e[0]);h=y[0],f=y[1],m=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),f=Math.ceil(r/a),m=Math.ceil(i/s);let y=(h-1)*n+o-t,$=(f-1)*a+u-r,S=(m-1)*s+d-i,b=Math.floor(y/2),w=y-b,E=Math.floor($/2),T=$-E,I=Math.floor(S/2),k=S-I;p={top:E,bottom:T,left:I,right:k,front:b,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:h,outHeight:f,outWidth:m}},If=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,u,d,p,h;if(s==="channelsLast")[o,u,d,p,h]=e;else if(s==="channelsFirst")[o,h,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,y,$]=t,[S,b,w]=Pn(r),[E,T,I]=Pn(i),k=vr(m,E),O=vr(y,T),v=vr($,I),{padInfo:M,outDepth:W,outHeight:H,outWidth:F}=od(n,u,d,p,S,b,w,k,O,v),U=a?f*h:f,q=[0,0,0,0,0];return s==="channelsFirst"?q=[o,U,W,H,F]:s==="channelsLast"&&(q=[o,W,H,F,U]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:h,outDepth:W,outHeight:H,outWidth:F,outChannels:U,padInfo:M,strideDepth:S,strideHeight:b,strideWidth:w,filterDepth:m,filterHeight:y,filterWidth:$,effectiveFilterDepth:k,effectiveFilterHeight:O,effectiveFilterWidth:v,dilationDepth:E,dilationHeight:T,dilationWidth:I,inShape:e,outShape:q,filterShape:t}},Cf=(e,t,r,i,n,a)=>{let s=a==="channelsLast",o=s?e[0].dims[3]:e[0].dims[1],u=!1,d=[64,1,1],p={x:r.map((w,E)=>E)},h=[Math.ceil(ad(p.x.map(w=>r[w]))/d[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${h}`);let f=u?s&&o%4!==0?3:4:1,m=R.size(r),y=[{type:12,data:m},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];jt(t,y),y.push(...J(e[0].dims,e[1].dims));let $=["rank","rank"],S=e.length===3;S&&(y.push(...J(e[2].dims)),$.push("rank")),y.push(...J(r));let b=w=>{let E=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Kt(t,E);let T=u?4:1,I=Ae(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,f===3?1:f),O=B("W",e[1].dataType,e[1].dims.length,T),v=[k,O],M=X("result",e[0].dataType,r.length,T),W="";if(S){let U=B("bias",e[2].dataType,e[2].dims.length,T);v.push(U),W+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${u?`vec4<${I}>`:I} {
          return bias[${s?Q("coords",4,5):Q("coords",1,5)}${u?"/ 4":""}];
        }`}let H=Me(f,I),F=Ht(t,H,I);return`
            ${W}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${I} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${I} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
          ${w.registerUniforms(E).declareVariables(...v,M)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${Q("coords",0,k.rank)};
              let d2 = ${s?Q("coords",k.rank-1,k.rank):Q("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?Q("coords",1,k.rank):Q("coords",2,k.rank)},
              ${s?Q("coords",2,k.rank):Q("coords",3,k.rank)},
              ${s?Q("coords",3,k.rank):Q("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Q("uniforms.x_shape",1,k.rank):Q("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?Q("uniforms.x_shape",2,k.rank):Q("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?Q("uniforms.x_shape",3,k.rank):Q("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?Q("uniforms.x_shape",4,k.rank):Q("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${I}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<${I}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${I}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${I}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<${I}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${I}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${I}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<${I}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${I}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${I}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${F}
              result[global_idx] = ${I}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${S}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:h[0],y:h[1],z:h[2]},programUniforms:y}),getShaderSource:b}}}),kf,Of,yw=L(()=>{"use strict";te(),ne(),ae(),Yt(),kf=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],p=d/t.group,h=u&&p>=4?Ie(d):1,f=R.size(r)/h,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];jt(t,m),m.push(...J(s,[o[0],o[1],o[2],o[3]/h]));let y=n?["rank","rank","rank"]:["rank","rank"];m.push(...J([r[0],r[1],r[2],r[3]/h]));let $=S=>{let b=X("output",e[0].dataType,r.length,h),w=Ae(b.type.tensor),E=Ht(t,b.type.value,w),T=B("x",e[0].dataType,s.length),I=B("w",e[1].dataType,o.length,h),k=[T,I];n&&k.push(B("b",e[2].dataType,e[2].dims,h));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Kt(t,O);let v=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(O).declareVariables(...k,b)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${v}
    ${a}
    ${E}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:$}},Of=(e,t,r,i)=>{let n=e.length>2,a=Ie(r[3]),s=Ie(r[2]),o=R.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],h=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];jt(t,h),h.push(...J(u,d,p));let f=(s-1)*t.strides[1]+d[1],m=y=>{let $=X("output",e[0].dataType,p.length,a),S=Ae($.type.tensor),b=Ht(t,$.type.value,S),w=B("x",e[0].dataType,u.length,a),E=B("w",e[1].dataType,d.length,a),T=[w,E];n&&T.push(B("b",e[2].dataType,e[2].dims,a));let I=n?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Kt(t,k),`
  ${y.registerUniforms(k).declareVariables(...T,$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${f}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${E.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${b}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}),getShaderSource:m}}}),ud,pi,ld,ci,Ta,Un,dd,pd,Ia,_w=L(()=>{"use strict";ne(),mw(),gw(),rs(),yw(),Yt(),ts(),kt(),ud=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(r[m]-1)),h=o.map((f,m)=>f+i[m]+i[m+u]).map((f,m)=>Math.floor((f-p[m]+n[m])/n[m]));return h.splice(0,0,s),h.splice(a?3:1,0,d),h},pi=[2,3,1,0],ld=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ci=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();vi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Ta=e=>{let t=Qa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Un=(e,t,r,i)=>{let n=r.format==="NHWC",a=ud(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let k=[t[0]];if(n){let O=e.kernelCustomData.wT??e.compute(Ge(t[1],pi),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),k.push(O)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Of(k,r,a,i),{inputs:k}):e.compute(kf(k,r,a,i),{inputs:k});return}let s=t.length===3,o=t[0].dims[n?1:2],u=t[0].dims[n?2:3],d=t[0].dims[n?3:1],p=t[1].dims[2],h=t[1].dims[3],f=a[n?1:2],m=a[n?2:3],y=a[n?3:1],$=n&&p===o&&h===u&&r.pads[0]===0&&r.pads[1]===0;if($||p===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let k=a[0],O,v,M,W=[];if(n){let U=e.kernelCustomData.wT??e.compute(Ge(t[1],pi),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),$){let q=o*u*d;O=t[0].reshape([1,k,q]),v=U.reshape([1,q,y]),M=[1,k,y]}else O=t[0].reshape([k,o*u,d]),v=U.reshape([1,d,y]),M=[k,f*m,y];W.push(O),W.push(v)}else O=t[0].reshape([k,d,o*u]),v=t[1].reshape([1,y,d]),M=[k,y,f*m],W.push(v),W.push(O);s&&W.push(t[2]);let H=M[2],F=W[0].dims[W[0].dims.length-1];H<8&&F<8?e.compute(es(W,r,a,M,n,i),{inputs:W}):e.compute(Si(W,r,a,M,n,i),{inputs:W});return}let S=!0,b=e.kernelCustomData.wT??e.compute(Ge(t[1],pi),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let w=[t[0],b];s&&w.push(t[2]);let E=n?f*m:y,T=n?y:f*m,I=p*h*d;e.compute(Tf(w,r,a,E,T,I,s,S,i),{inputs:w})},dd=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=ci({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);Un(e,i,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},pd=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=ci(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=If(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Cf(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Ia=(e,t)=>{if(ld(e.inputs,t),e.inputs[0].dims.length===3)dd(e,t);else if(e.inputs[0].dims.length===5)pd(e,e.inputs,t);else{let r=ci(t,e.inputs);Un(e,e.inputs,r)}}}),zf,ww=L(()=>{"use strict";te(),mt(),ne(),ae(),zf=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],p=a?Ie(u):1,h=a&&d===1&&u>=4,f=h?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,y=a?Ie(d):1,$=a?d===1?p:y:1,S=R.size(n)/y,b=[Math.ceil(S/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let w=["rank","rank"],E=[t.strides[0],t.strides[1]],T=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],I=[t.dilations[0],t.dilations[1]],k=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],O=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:S},{type:12,data:E},{type:12,data:T},{type:12,data:I},{type:12,data:k},{type:6,data:O},{type:12,data:f},{type:12,data:u},{type:12,data:d},...J(e[0].dims,e[1].dims)];i&&(v.push(...J(e[2].dims)),w.push("rank")),v.push(...J(n));let M=W=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:O.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Ae(e[0].dataType),U=a?1:2,q=a?2:3,z=a?3:1,V=B("W",e[1].dataType,e[1].dims.length,$),P=B("Dy",e[0].dataType,e[0].dims.length,p),se=[P,V];i&&se.push(B("bias",e[2].dataType,[n[z]].length,y));let ee=X("result",e[0].dataType,n.length,y),re=()=>{let j="";if(h)p===4?j+=`
        let xValue = ${P.getByOffset("x_offset")};
        let wValue = ${V.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?j+=`
          dotProd = dotProd + dot(vec4<${F}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}), vec4<${F}>(${V.getByOffset("w_offset")}, ${V.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(j+=`
          dotProd = dotProd + dot(vec4<${F}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}, ${P.getByOffset("x_offset + 2u")}, ${P.getByOffset("x_offset + 3u")}), vec4<${F}>(${V.getByOffset("w_offset")}, ${V.getByOffset("w_offset + 1u")}, ${V.getByOffset("w_offset + 2u")}, ${V.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(j+=`
                  let xValue = ${a?P.getByOffset(`${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):P.get("batch","inputChannel","idyR","idyC")};
        `,p===1)j+=`
          let w_offset = ${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${V.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Z=0;Z<p;Z++)j+=`
            let wValue${Z} = ${V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Z}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${Z}] * wValue${Z};`;return j},N=()=>{if(m===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let j="";if(p===1){j+="dotProd = dotProd";for(let Z=0;Z<m;Z++)j+=`
            + ${P.getByOffset(`x_offset + ${Z}`)} * ${V.getByOffset(`w_offset + ${Z}`)}`;j+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);j+=`
          let xValue = ${P.getByOffset("x_offset")};
          let wValue = ${V.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return j},K=`
            let outputIndices = ${ee.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${ee.indicesGet("outputIndices",0)};
            let d1 = ${ee.indicesGet("outputIndices",z)};
            let r = ${ee.indicesGet("outputIndices",U)};
            let c = ${ee.indicesGet("outputIndices",q)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ee.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${U}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${q}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${V.indicesToOffset(`${V.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:p}) {
                  ${re()}
                  inputChannel = inputChannel + ${h?4:p};
                }
                ${N()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${ee.setByOffset("global_idx","value")};
          `;return`
    ${W.registerUniforms(H).declareVariables(...se,ee)}
      ${W.mainStart()}
      ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${K}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${$}${y}${h}${m}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:M}}}),cd,hd,fd,Wn,Af,md,Vn,gd,Rf,bw=L(()=>{"use strict";ww(),Yt(),kt(),cd=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,hd=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},fd=(e,t,r,i,n,a,s,o,u,d)=>{let p=e.length-2,h=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*n;for(let y=0,$=e.length-p-(o?1:0);y<p;++y,++$){let S=e[$],b=h?S*s[y]:d[y],w=cd(S,s[y],a[y],t[$],r[y],b);hd(w,i,a,y,y+p),h&&d.push(s[y]*(S-1)+u[y]+(t[$]-1)*r[y]+1-a[y]-a[y+p])}d.splice(0,0,f),d.splice(o?3:1,0,m)},Wn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,f)=>h*f,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;u=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}fd(o,r,u,e.autoPad,e.group,n,d,i,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:u,strides:d}),p},Af=e=>{let t=Qa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:p,outputShape:h,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},md=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Vn=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Ge(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(zf(a,r,i),{inputs:a})},gd=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let u=t.outputPadding;u=[0].concat(u);let d=Wn({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:u},i);Vn(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Rf=(e,t)=>{if(md(e.inputs,t),e.inputs[0].dims.length===3)gd(e,t);else{let r=Wn(t,e.inputs);Vn(e,e.inputs,r)}}}),yd,Mf,Df,$w=L(()=>{"use strict";te(),ne(),Ce(),ae(),yd=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=B("input",e,a),o=X("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(u,a),p=h=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=Q("uniforms.input_shape","uniforms.axis",a),y=i.reverse?f+(i.exclusive?" + 1":""):"0",$=i.reverse?m:f+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...J(t,t)]}),getShaderSource:p}},Mf=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(yd(i,r,n,t),{inputs:[0]})},Df=e=>{let t=e.exclusive===1,r=e.reverse===1;return ye({exclusive:t,reverse:r})}}),_d,wd,bd,Bf,Nf,vw=L(()=>{"use strict";te(),ne(),Ce(),ae(),_d=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},wd=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},bd=(e,t)=>{let r,i,n,a,s,o,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([r,i,n,a]=e.dims,s=p?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),f=h.dims.length,m=e.dataType,y=B("a",m,f),$=X("output",m,f),S=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(y,$)}

  ${wd(o,f,y,$)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let w=u?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],E=R.size(w),T=h.dims,I=R.sortBasedOnPerm(T,o);return{outputs:[{dims:w,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...J(T,I)]}},getShaderSource:S}},Bf=(e,t)=>{_d(e.inputs),e.compute(bd(e.inputs[0],t))},Nf=e=>ye({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ct,xr,hi,qn,xt,$d,vd,xd,Gn,Fn,Hn,Sd,Ed,jn,Td,Pf,Lf,xw=L(()=>{"use strict";te(),ne(),Ce(),ae(),ct=256,xr=512,hi=2*Math.PI,qn=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},xt=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},$d=(e,t,r,i,n)=>{let a=r/e,s=xr-i,o=d=>`smem[${s}u + base + ${d*t}u]`,u=`  for (var t = local_idx; t < ${a}u; t += ${ct}u) {
`;u+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,u+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let p=`${i}u + t + ${d*a}u`;if(d===0)u+=`    leg[0] = smem[${p}];
`;else{let h=n*hi*d/(e*t);u+=`    { let a = ${xt(h)} * angleUnit; leg[${d}] = cmul(smem[${p}], vec2<f32>(cos(a), sin(a))); }
`}}if(u+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)u+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(e===4){let d=n<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";u+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,u+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,u+=`    let oddRot = ${d};
`,u+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,u+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let d=0;d<e;d++){let p=["leg[0]"];for(let h=1;h<e;h++){let f=n*hi*(h*d)/e,m=xt(Math.cos(f)),y=xt(Math.sin(f));p.push(`vec2<f32>(leg[${h}].x*${m} - leg[${h}].y*${y}, leg[${h}].x*${y} + leg[${h}].y*${m})`)}u+=`    ${o(d)} = ${p.join(" + ")};
`}return`${u}  }
  workgroupBarrier();
`},vd=(e,t,r)=>{let i="",n=1,a=0;for(let s of e)i+=$d(s,n,t,a,r),n*=s,a=xr-a;return{code:i,resultOffset:a}},xd=(e,t,r,i,n)=>{let a=e.dims,s=a.length,o=a[s-1],u=a[t],d=r&&i?(u-1)*2:u;n!==void 0&&(d=n);let p=r&&i?1:2,h=i&&!r?Math.floor(d/2)+1:d,f=a.slice();f[t]=h,f[s-1]=p;let m=1;for(let $=t+1;$<s-1;$++)m*=a[$];let y=R.size(a)/o/u;return{dataType:e.dataType,outputDims:f,length:d,signalLength:u,inner:m,batch:y,inputComponents:o,outputComponents:p,outputLength:h,inverse:r,onesided:i}},Gn=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Fn=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Hn=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Sd=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,o=ze(t),u=a?1:-1,d=a?1/r:1,p=qn(r),h=f=>{let m=B("x",t,[1]),y=X("y",t,[1]),$=I=>{let k=`inBase + (${I}) * uniforms.inner * ${i}u`,O=`f32(${m.getByOffset(k)})`,v=i===2?`f32(${m.getByOffset(`${k} + 1u`)})`:"0.0";return`vec2<f32>(${O}, ${v})`},S;if(a&&s){let I=Math.floor(r/2)+1,k=r%2===0?`select(provided, provided - 1u, provided == ${I}u)`:"provided";S=`
    let provided = min(uniforms.signalLength, ${I}u);
    for (var i = local_idx; i < ${r}u; i += ${ct}u) {
      if (i < provided) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${k}; k += ${ct}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else S=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${ct}u) {
      if (i < loadCount) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:b,resultOffset:w}=vd(p,r,u),E=d===1?`smem[${w}u + i]`:`smem[${w}u + i] * ${xt(d)}`,T=n===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Hn(f,m,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*xr}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${f.mainStart(ct)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    ${S}
${b}    for (var i = local_idx; i < uniforms.outputLength; i += ${ct}u) {
      let v = ${E};
      let off = outBase + i * uniforms.inner * ${n}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${T}
    }
  }`};return{name:"DFT",shaderCache:{hint:Gn(e,"fft"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Fn(e),dispatchGroup:{x:e.batch}})}},Ed=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,o=ze(t),u=a?1:-1,d=a?1/r:1,p=h=>{let f=B("x",t,[1]),m=X("y",t,[1]),y=E=>{let T=`inBase + (${E}) * uniforms.inner * ${i}u`,I=`f32(${f.getByOffset(T)})`,k=i===2?`f32(${f.getByOffset(`${T} + 1u`)})`:"0.0";return`vec2<f32>(${I}, ${k})`},$=a&&s?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,S=`
      let angle = ${xt(u*hi)} * f32(knMod) / ${xt(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,b=n===2?m.setByOffset("off + 1u",`${o}(v.y)`):"",w=d===1?"acc":`acc * ${xt(d)}`;return`
  ${Hn(h,f,m)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$}
  ${h.mainStart(ct)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${ct}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${S}
      }
      let v = ${w};
      let off = outBase + k * uniforms.inner * ${n}u;
      ${m.setByOffset("off",`${o}(v.x)`)}
      ${b}
    }
  }`};return{name:"DFT",shaderCache:{hint:Gn(e,"direct"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Fn(e),dispatchGroup:{x:e.batch}})}},jn=e=>{if(!e||e.dataType===0)return;if(R.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Td=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Pf=(e,t)=>{Td(e.inputs);let r=e.inputs[0],i=r.dims.length,n=t.inverse!==0,a=t.onesided!==0,s=jn(e.inputs[1]);if(s!==void 0&&s<=0)throw new Error("dft_length must be greater than zero.");let o=R.normalizeAxis(jn(e.inputs[2])??t.axis,i);if(o===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(n&&a&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let u=xd(r,o,n,a,s);if(u.length<=0)throw new Error(`Invalid DFT length: ${u.length}`);let d=u.length<=xr&&qn(u.length)!==void 0?Sd(u):Ed(u);e.compute(d,{inputs:[0]})},Lf=e=>ye({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),fi,Sr,Kn,Id,Cd,kd,Od,Zn,zd,Uf,Wf,Sw=L(()=>{"use strict";te(),ne(),Ce(),ae(),fi="[a-zA-Z]|\\.\\.\\.",Sr="("+fi+")+",Kn="^"+Sr+"$",Id="("+Sr+",)*"+Sr,Cd="^"+Id+"$",kd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Od=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Cd)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(Kn)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,s,a);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(Sr)))throw new Error("Invalid RHS");i.match(RegExp(fi,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Kn))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(fi,"g")),d=new kd(i);return u?.forEach((p,h)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=n-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let y=String.fromCharCode(48+m);d.addSymbol(y,h+m),this.addSymbol(y,r[o++],i)}}else d.addSymbol(p,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],i)}),d}},Zn=e=>e+"_max",zd=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,p)=>B(`input${p}`,t,d)),a=R.size(i),s=X("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let p=[],h="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",y=[],$=[],S=[],b=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,I)=>{if(r.rhs.symbolToIndices.has(I)){let k=r.rhs.symbolToIndices.get(I)?.[0];k!==void 0&&r.lhs.forEach((O,v)=>{if(T.inputIndices.includes(v)){let M=O.symbolToIndices.get(I);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(W=>{p.push(`${n[v].indicesSet(`input${v}Indices`,W,s.indicesGet("outputIndices",k))}`)})}})}else r.lhs.forEach((k,O)=>{if(T.inputIndices.includes(O)){let v=k.symbolToIndices.get(I);if(v===void 0)throw new Error("Invalid symbol error");v.forEach(M=>{y.push(`${n[O].indicesSet(`input${O}Indices`,M,`${I}`)}`)}),b.push(`prod *= ${n[O].getByIndices(`input${O}Indices`)};`)}}),$.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Zn(I)}; ${I}++) {`),S.push("}")});let E=w?[...p,`let sum = ${n.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...p,f,...$,...y,h,...b,m,...S];return`
            ${d.registerUniforms(o.map(T=>({name:`${Zn(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((T,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(h=>r.symbolToInfo.has(h)).map(h=>({type:12,data:r.symbolToInfo.get(h)?.dimValue||0}));d.push({type:12,data:a});let p=e.map((h,f)=>[...J(h)]).reduce((h,f)=>h.concat(f),d);return p.push(...J(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},Uf=(e,t)=>{let r=new Od(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(zd(n,e.inputs[0].dataType,r,i))},Wf=e=>{let t=e.equation.replace(/\s+/g,"");return ye({equation:t})}}),Ad,Yn,Rd,Md,Vf,Ew=L(()=>{"use strict";te(),ne(),ae(),Ad=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Yn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Rd=(e,t)=>e.length>t.length?Yn(e,t):Yn(t,e),Md=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Rd(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(R.size(i)/o),d=h=>{let f=B("input",n,t.length,s),m=X("output",n,i.length,o),y;if(n===9){let $=(S,b,w="")=>`
          let outputIndices${b} = ${m.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${f.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${S}[${b}] = ${w}(${f.getByOffset(`index${b}`)}[component${b}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},p=[{type:12,data:u},...J(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Vf=e=>{Ad(e.inputs),e.compute(Md(e.inputs),{inputs:[0]})}}),Dd,qf,Tw=L(()=>{"use strict";te(),ne(),ae(),Xa(),Dd=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=B("x",t,[1],4),u=B("bias",t,[1],4),d=X("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=n?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,d)}

    ${va(ze(t))}

    ${s.mainStart(ar)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",xa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/ar/4)}})}},qf=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?of(e):e.compute(Dd(e.inputs))}}),Bd,Nd,Gf,Ff,Iw=L(()=>{"use strict";te(),ne(),Ce(),ae(),Bd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Nd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],u=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/u),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...J(e[0].dims,e[1].dims,s)],h=f=>{let m=B("data",e[0].dataType,e[0].dims.length,u),y=B("inputIndices",e[1].dataType,e[1].dims.length),$=X("output",e[0].dataType,s.length,u),S=w=>{let E=i.length,T=`var indicesIndices${w}  = ${y.type.indices}(0);`;for(let I=0;I<E;I++)T+=`${E>1?`indicesIndices${w}[${I}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${I}]`:`outputIndices${w}`};`;T+=`
          var idx${w} = ${y.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${m.type.indices};
        `;for(let I=0,k=0;I<n;I++)I===a?(T+=`${n>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = u32(idx${w});`,k+=E):(T+=`${n>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${k}]`:`outputIndices${w}`};`,k++);return T},b;if(e[0].dataType===9){let w=(E,T,I="")=>`
          let outputIndices${T} = ${$.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${m.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${E}[${T}] = ${I}(${m.getByOffset(`index${T}`)}[component${T}]);
        `;b=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else b=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${m.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,y,$)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:h}},Gf=e=>ye({axis:e.axis}),Ff=(e,t)=>{let r=e.inputs;Bd(r),e.compute(Nd(e.inputs,t))}}),Pd,Hf,jf,Cw=L(()=>{"use strict";te(),ne(),ae(),Pd=(e,t,r,i,n,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];d.push(...J(t.dims,p));let h=f=>{let m=B("indices_data",t.dataType,t.dims.length),y=X("input_slice_offsets_data",12,1,1),$=[m,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(S).declareVariables(...$)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Hf=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),u=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),p=R.sizeFromDimension(i,t.batchDims),h=o/d,f=new Array(s),m=u;for(let T=0;T<s;++T)f[s-1-T]=m,m*=i[t.batchDims+s-1-T];let y=Pd(e,r[1],f,t.batchDims,i,o,h,p,s),$=t.batchDims+s;if($>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice($)),b=R.size(S),w=[{type:12,data:b},{type:12,data:u},...J(r[0].dims,y.dims,S)],E=T=>{let I=B("data",r[0].dataType,r[0].dims.length),k=B("slice_offsets",12,y.dims.length),O=X("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,k,O)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:w}),getShaderSource:E},{inputs:[r[0],y]})},jf=e=>({batchDims:e.batch_dims,cacheKey:""})}),Ld,Ud,Kf,Zf,kw=L(()=>{"use strict";te(),ne(),Ce(),ae(),Ld=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,u)=>u===r?Math.ceil(o/i)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ud=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let u=R.size(o),d=e[2].dataType,p=e[0].dataType===22,h=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...J(...e.map((m,y)=>m.dims),o)],f=m=>{let y=B("data",e[0].dataType,e[0].dims.length),$=B("inputIndices",e[1].dataType,e[1].dims.length),S=B("scales",e[2].dataType,e[2].dims.length),b=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=X("output",d,o.length),E=[y,$,S];b&&E.push(b);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(T).declareVariables(...E,w)}
        ${m.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${b?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${b.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${b.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,y)=>y!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:f}},Kf=(e,t)=>{let r=e.inputs;Ld(r,t),e.compute(Ud(e.inputs,t))},Zf=e=>ye({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Wd,Vd,Yf,Xf,Ow=L(()=>{"use strict";te(),ne(),Ce(),ae(),Wd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Vd=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),u=r[o],d=a.slice(0),p=R.size(d),h=B("input",i,n),f=B("indicesInput",s,a.length),m=X("output",i,d.length),y=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return y.push(...J(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:y}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,m)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Yf=e=>ye({axis:e.axis}),Xf=(e,t)=>{let r=e.inputs;Wd(r),e.compute(Vd(e.inputs,t))}}),qd,Gd,Qf,Jf,zw=L(()=>{"use strict";te(),ne(),ae(),qd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Gd=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Hc.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),p=Math.ceil(n/u),h=!0,f=R.size(o),m=[{type:12,data:h?d:f},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(m.push(...J(e[2].dims)),y.push("rank")),m.push(...J(o));let $=b=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=t.alpha===1?"":"value *= uniforms.alpha;",T=B("a",e[0].dataType,e[0].dims),I=B("b",e[1].dataType,e[1].dims),k=T.type.value,O=null,v=[T,I];e.length===3&&(O=B("c",e[2].dataType,e[2].dims.length),v.push(O));let M=X("output",e[0].dataType,o.length);v.push(M);let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(W).declareVariables(...v)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${E}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${k}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=b=>{let w=B("a",e[0].dataType,e[0].dims),E=B("b",e[1].dataType,e[1].dims),T=null,I=[w,E];e.length===3&&(T=B("c",e[2].dataType,e[2].dims.length),I.push(T));let k=X("output",e[0].dataType,o.length);I.push(k);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let W=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(O).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${k.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${W}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${k.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:m}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:$}},Qf=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Jf=(e,t)=>{qd(e.inputs),e.compute(Gd(e.inputs,t))}}),ot,ht,Nt,Pt,Fd,Hd,jd,Kd,Zd,Yd,Xd,Qd,em,tm,Aw=L(()=>{"use strict";te(),ne(),Ce(),ae(),[ot,ht,Nt,Pt]=[0,1,2,3],Fd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Hd=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,jd=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Kd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Zd=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Yd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ot}] = batch;
     indices[${ht}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Nt}] = u32(r);
            indices[${Pt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Nt}] = u32(clamp(r, 0, H - 1));
          indices[${Pt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Nt}] = gs_reflect(r, border[1], border[3]);
          indices[${Pt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Xd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ot}], indices[${ht}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ot}], indices[${ht}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ot}], indices[${ht}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ot}], indices[${ht}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ot}], indices[${ht}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ot}], indices[${ht}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Qd=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=B("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ot,ht,Nt,Pt]=[0,3,1,2]);let s=X("output",e[0].dataType,a.length),o=r.type.value,u=R.size(a),d=[{type:12,data:u},...J(e[0].dims,i,a)],p=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Hd}
  ${jd(o)}
  ${Kd(t)}
  ${Zd(t)}
  ${Yd(r,o,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Nt}]);
      let W_in = i32(uniforms.x_shape[${Pt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ot}], indices[${Nt}], indices[${Pt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Xd(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let f=R.size(a);return{outputs:[{dims:a,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:p}},em=(e,t)=>{Fd(e.inputs),e.compute(Qd(e.inputs,t))},tm=e=>ye({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ne,Jd,rm,Xn,ep,Ar,im,nm=L(()=>{"use strict";te(),ne(),Ce(),ja(),Ya(),ae(),kt(),Ne=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Jd=(e,t)=>{let r=e[0],i=Ne(e,1),n=Ne(e,2),a=Ne(e,3),s=Ne(e,4),o=Ne(e,5),u=Ne(e,6),d=Ne(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],h=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=h,y=0,$=0,S=Math.floor(f/t.numHeads);if(u&&d&&R.size(u.dims)&&R.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=u.dims[2],$=u.dims[2]}else if(u&&R.size(u.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,m=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,m=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=y+m,E=0;if(s&&R.size(s.dims)>0){E=8;let O=s.dims;throw O.length===1?O[0]===p?E=1:O[0]===3*p+2&&(E=3):O.length===2&&O[0]===p&&O[1]===w&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=f;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(m!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(m!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],T=!0}}let k=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==h||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:f,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:k,passPastInKv:T,qkvFormat:b}},rm=e=>ye({...e}),Xn=ye({perm:[0,2,1,3]}),ep=(e,t,r,i,n,a,s)=>{let o=[i,n,a],u=R.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=h=>{let f=X("qkv_with_bias",t.dataType,o),m=B("qkv",t.dataType,o),y=B("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms($).declareVariables(m,y,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Ar=(e,t,r,i,n,a,s,o)=>{let u=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=ep(e,a,s,t,i,r*n,o),u=u.reshape([t,i,r,n]),r===1||i===1?u:e.compute(Ge(u,Xn.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,i,r,n])),r===1||i===1?u:e.compute(Ge(u,Xn.perm),{inputs:[u],outputs:[-1]})[0]},im=(e,t)=>{let r=Jd(e.inputs,t),i=e.inputs[0],n=Ne(e.inputs,1),a=Ne(e.inputs,2),s=Ne(e.inputs,3),o=Ne(e.inputs,4),u=Ne(e.inputs,5),d=Ne(e.inputs,6),p=Ne(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let h=n&&a&&n.dims.length===4&&a.dims.length===4,f=Ar(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return Br(e,f,n,a,o,void 0,d,p,u,r);if(!n||!a)throw new Error("key and value must be provided");let m=Ar(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=Ar(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Br(e,f,m,y,o,void 0,d,p,u,r)}}),tp,rp,ip,np,Ca,am,sm,om=L(()=>{"use strict";te(),ne(),Ce(),ae(),tp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},rp=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),ye({numOutputs:i,axis:t.axis,splitSizes:r})},ip=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,np=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ca=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=B("input",n,r.length),u=new Array(t.numOutputs),d=[],p=[],h=0,f=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],u[y]=h;let $=r.slice();$[a]=t.splitSizes[y],p.push($),s[y]=X(`output${y}`,n,$.length),d.push({dims:p[y],dataType:e[0].dataType})}f.push({type:12,data:u},...J(r,...p));let m=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${ip(u.length)}
  ${np(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},am=(e,t)=>{tp(e.inputs);let r=e.inputs.length===1?t:rp(e.inputs,t);e.compute(Ca(e.inputs,r),{inputs:[0]})},sm=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ye({axis:t,numOutputs:i,splitSizes:r})}}),ap,Ei,um,lm=L(()=>{"use strict";te(),ne(),Ce(),ae(),ap=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],p=n.dims[0],h=R.sizeFromDimension(r.dims,1)/d,f=o===0?n.dims[1]*2:h/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},Ei=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,p=e[2].dims[1],h=n===0?p*2:d/i,f=new Array(s,u,d/h,h-p),m=R.computeStrides(f),y=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,h,u*h,1]}):[],...J(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=S=>{let b=B("input",e[0].dataType,e[0].dims.length),w=B("position_ids",e[1].dataType,e[1].dims.length),E=B("cos_cache",e[2].dataType,e[2].dims.length),T=B("sin_cache",e[3].dataType,e[3].dims.length),I=X("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${S.declareVariables(b,w,E,T,I)}

        ${S.mainStart(ar)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",X("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${b.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ye({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(f)/ar)},programUniforms:y})}},um=(e,t)=>{ap(e.inputs,t),e.compute(Ei(e.inputs,t))}}),sp,op,Qn,up,dm,Rw=L(()=>{"use strict";Ce(),te(),Ya(),nm(),om(),kt(),lm(),ae(),sp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,f=0,m=!i||i.dims.length===0,y=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=y*t.numHeads);let $=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if($&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if($&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if($||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let w=0,E=!1,T=t.kvNumHeads?y*t.kvNumHeads:p;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],E=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=I.dims.reduce((O,v)=>O*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let O=0;O<I.dims.length;O++)if(I.dims[O]!==1&&I.dims[O]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${O}] = ${I.dims[O]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:y,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:b}},op=ye({perm:[0,2,1,3]}),Qn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Ge(i,op.perm),{inputs:[i],outputs:[-1]})[0]),i},up=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let h=B("seq_lens",r.dataType,r.dims),f=B("total_seq_lens",i.dataType,i.dims),m=X("pos_ids",n,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(h,f,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},dm=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=sp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=ye({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[f,m,y]=!n&&!a?e.compute(Ca([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],$,S;if(t.doRotary){let T=e.compute(up(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],I=e.inputs[7],k=e.inputs[8],O=ye({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),v=[f,T,I,k],M=[-1];$=e.compute(Ei(v,O),{inputs:v,outputs:M})[0],v.splice(0,1,m);let W=ye({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(Ei(v,W),{inputs:v,outputs:M})[0]}let b=Ar(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:f,void 0,0),w=Qn(e,t.doRotary?S:m,r),E=Qn(e,y,r);Br(e,b,w,E,void 0,void 0,s,o,void 0,r,u,d)}}),Jn,lp,dp,pm,Mw=L(()=>{"use strict";te(),ne(),kt(),ae(),Jn=(e,t,r,i,n,a,s,o)=>{let u=Ie(a),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,h=n*s,f=64;h===1&&(f=256);let m=[n,s,a/u],y=[n,s,2],$=["rank","type","type"],S=[];S.push(...J(m,y));let b=w=>{let E=B("x",t.dataType,3,u),T=B("scale",r.dataType,r.dims),I=B("bias",i.dataType,i.dims),k=X("output",1,3,2),O=[E,T,I,k];return`
  var<workgroup> workgroup_shared : array<${p}, ${f}>;
  const workgroup_size = ${f}u;
  ${w.declareVariables(...O)}
  ${w.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${E.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ct("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Ct("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:b},{inputs:[t,r,i],outputs:[-1]})[0]},lp=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],u=R.sizeFromDimension(i,a),d=Ie(u),p=R.size(n)/d,h=Jn(e,t[0],t[1],t[2],s,u,o,r.epsilon),f=[s,o,u/d],m=[s,o],y=["type","none"],$=S=>{let b=B("x",t[0].dataType,f.length,d),w=B("scale_shift",1,m.length,2),E=X("output",t[0].dataType,f.length,d),T=[b,w,E];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...J(f,m,f)]}),getShaderSource:$},{inputs:[t[0],h]})},dp=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,u=Ie(s),d=R.size(n)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],h=["type","type"],f=!1,m=[0,i.length-1];for(let b=0;b<i.length-2;b++)f=f||i[b+1]!==1,m.push(b+1);f=f&&i[i.length-1]!==1;let y=f?e.compute(Ge(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(b,w)=>i[m[w]])),$=Jn(e,y,t[1],t[2],a,o,s,r.epsilon),S=b=>{let w=Ae(t[0].dataType),E=u===1?"vec2f":`mat${u}x2f`,T=O=>{let v=O===0?"x":"y",M=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${M}(scale.${v}))`;case 2:return`vec2<${w}>(${M}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${w}>(${M}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=B("input",t[0].dataType,t[0].dims,u),k=X("output",t[0].dataType,n,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:S},{inputs:[t[0],$]})},pm=(e,t)=>{t.format==="NHWC"?dp(e,e.inputs,t):lp(e,e.inputs,t)}}),pp,cp,cm,Dw=L(()=>{"use strict";te(),ne(),ae(),pp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},cp=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,u=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,u),p=R.sizeFromDimension(n,u),h=R.size(a.dims),f=s?R.size(s.dims):0;if(h!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${f}`);let m=[];for(let I=0;I<n.length;++I)I<u?m.push(n[I]):m.push(1);let y=Ie(p),$=["type","type"],S=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/y)},{type:1,data:t.epsilon}];s&&$.push("type");let b=r>1,w=r>2,E=I=>{let k=Ae(e[0].dataType),O=[B("x",e[0].dataType,e[0].dims,y),B("scale",a.dataType,a.dims,y)];s&&O.push(B("bias",s.dataType,s.dims,y)),O.push(X("output",e[0].dataType,o,y)),b&&O.push(X("mean_data_output",1,m)),w&&O.push(X("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(v).declareVariables(...O)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${wa("f32",y)};
    var mean_square_vector = ${wa("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ir(k,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ct("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ct("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ir(k,y,"x[j + offset]")};
      let f32scale = ${ir(k,y,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${ir(k,y,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:o,dataType:e[0].dataType}];return b&&T.push({dims:m,dataType:1}),w&&T.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:$},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:E}},cm=(e,t)=>{pp(e.inputs),e.compute(cp(e.inputs,t,e.outputCount))}}),hp,hm,Bw=L(()=>{"use strict";ne(),ts(),rs(),hp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},hm=e=>{hp(e.inputs);let t=nr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(es(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),u=e.inputs[1].reshape([1,i,r]),d=[1,a,r],p=[o,u];e.compute(Si(p,{activation:""},t,d),{inputs:p})}else e.compute(Si(e.inputs,{activation:""},t))}}}),fp,mp,gp,fm,mm,Nw=L(()=>{"use strict";te(),ne(),Ce(),ae(),fp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(u)!==d)throw new Error("zeroPoints input size error.")}},mp=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=R.size(o),d=e[1].dims[2]/4,p=e[0].dataType,h=Ie(t.k),f=Ie(d),m=Ie(s),y=o.concat([n,s]),$=n>1&&s/m%2===0?2:1,S=R.size(y)/m/$,b=64,w=[],E=[u,n,a/h],T=R.convertShape(e[1].dims).slice();T.splice(-1,1,d/f),w.push(...J(E)),w.push(...J(T)),w.push(...J(e[2].dims)),e.length===4&&w.push(...J(R.convertShape(e[3].dims)));let I=[u,n,s/m];w.push(...J(I));let k=O=>{let v=E.length,M=B("a",e[0].dataType,v,h),W=B("b",12,T.length,f),H=B("scales",e[2].dataType,e[2].dims.length),F=[M,W,H],U=e.length===4?B("zero_points",12,e[3].dims.length):void 0;U&&F.push(U);let q=I.length,z=X("output",e[0].dataType,q,m),V=Ae(e[0].dataType),P=(()=>{switch(h){case 1:return`array<${V}, 8>`;case 2:return`mat4x2<${V}>`;case 4:return`mat2x4<${V}>`;default:throw new Error(`${h}-component is not supported.`)}})(),se=Math.floor(32/t.bits),ee=Math.floor(se/8),re=()=>{let j="";for(let Z=0;Z<ee;Z++){let _e=Z*t.bits*4,De=_e+t.bits;j+=`
          // reuse a data (pass ${Z})
            var input_offset${Z>0?Z:""} = ${Z===0?M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${Z>0?Z:""}: ${P};
            for (var j${Z>0?Z:""}: u32 = 0; j${Z>0?Z:""} < ${8/h}; j${Z>0?Z:""}++) {
              a_data${Z>0?Z:""}[j${Z>0?Z:""}] = ${M.getByOffset(`input_offset${Z>0?Z:""}`)};
              input_offset${Z>0?Z:""}++;
            }
          `;for(let ke=0;ke<m*$;ke++)j+=`
            b_value = ${f===1?`b${ke}_data`:`b${ke}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${Z*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${_e}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${De}u) & b_mask);`}
            b_quantized_values = ${P}(${Array.from({length:4},($e,Ee)=>`${V}(b_value_lower[${Ee}]), ${V}(b_value_upper[${Ee}])`).join(", ")});
            b_dequantized_values = ${h===1?`${P}(${Array.from({length:8},($e,Ee)=>`(b_quantized_values[${Ee}] - ${U?`zero_point${ke}`:"zero_point"}) * scale${ke}`).join(", ")});`:`(b_quantized_values - ${P}(${Array(8).fill(`${U?`zero_point${ke}`:"zero_point"}`).join(",")})) * scale${ke};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(ke/m)}]${m>1?`[${ke%m}]`:""} += ${Array.from({length:8/h},($e,Ee)=>`${h===1?`a_data${Z>0?Z:""}[${Ee}] * b_dequantized_values[${Ee}]`:`dot(a_data${Z>0?Z:""}[${Ee}], b_dequantized_values[${Ee}])`}`).join(" + ")};
          `}return j},N=()=>{let j=`
            var col_index = col * ${m};
            ${U?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${V}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let Z=0;Z<m*$;Z++)j+=`
            let scale${Z} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${U?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Z} = ${V}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return j},K=()=>{let j=`col_index = col * ${m};`;for(let Z=0;Z<m*$;Z++)j+=`
            let b${Z}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${P};
            var b_dequantized_values: ${P};`,j};return`
        var<workgroup> workgroup_shared: array<${z.type.value}, ${$*b}>;
        ${O.declareVariables(...F,z)}
        ${O.mainStart([b,1,1])}
          let output_indices = ${z.offsetToIndices(`(global_idx / ${b}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${N()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${K()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${re()}
                word_offset += ${se/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${z.type.value} = ${z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${z.setByIndices(`${z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${f};${m};${$};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:p}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:k}},gp=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=R.size(o),d=e[1].dims[2]/4,p=e[0].dataType,h=Ie(t.k),f=Ie(d),m=o.concat([n,s]),y=128,$=s%8===0?8:s%4===0?4:1,S=y/$,b=Math.floor(32/t.bits),w=S*f*b,E=w/h,T=w/t.blockSize,I=R.size(m)/$,k=[],O=[u,n,a/h],v=R.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),k.push(...J(O)),k.push(...J(v)),k.push(...J(e[2].dims)),e.length===4&&k.push(...J(R.convertShape(e[3].dims)));let M=[u,n,s];k.push(...J(M));let W=H=>{let F=O.length,U=B("a",e[0].dataType,F,h),q=B("b",12,v.length,f),z=B("scales",e[2].dataType,e[2].dims.length),V=[U,q,z],P=e.length===4?B("zero_points",12,e[3].dims.length):void 0;P&&V.push(P);let se=M.length,ee=X("output",e[0].dataType,se),re=Ae(e[0].dataType),N=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${re}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${re}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${re}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${re}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${U.type.value}, ${E}>;
        var<workgroup> inter_results: array<array<${ee.type.value}, ${S}>, ${$}>;
        ${H.declareVariables(...V,ee)}
        ${H.mainStart([S,$,1])}
          let output_indices = ${ee.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${E};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${E}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${U.getByIndices(`${U.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${U.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${P?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${P.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${re}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${re}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${z.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${q.getByIndices(`${q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let K=Math.floor(b/8),j="";for(let Z=0;Z<K;Z++){let _e=Z*t.bits*4,De=_e+t.bits;j+=`
              ${N()}
              {${t.bits===2?`
                let half_word = b_value >> ${Z*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${_e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${De}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${re}>(${Array.from({length:4},(ke,$e)=>`${re}(b_value_lower[${$e}]), ${re}(b_value_upper[${$e}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${re}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ke,$e)=>`${`dot(a_data${$e}, b_dequantized_values[${$e}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return j})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${ee.type.value} = ${ee.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ee.setByIndices(`${ee.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${f};${S};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:I},programUniforms:k}),getShaderSource:W}},fm=(e,t)=>{fp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(gp(e.inputs,t)):e.compute(mp(e.inputs,t))},mm=e=>ye(e)}),yp,_p,wp,bp,$p,vp,xp,Sp,gm,Pw=L(()=>{"use strict";te(),ne(),ae(),yp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},_p=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Q("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},wp=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},bp=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k = i32(${Q("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},$p=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${Q("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k -= i32(${Q("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},vp=(e,t,r)=>{switch(r.mode){case 0:return _p(e,t,r.pads.length);case 1:return wp(e,t,r.pads.length);case 2:return bp(e,t,r.pads.length);case 3:return $p(e,t,r.pads.length);default:throw new Error("Invalid mode")}},xp=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...J(e[0].dims,r));let o=["rank"],u=d=>{let p=X("output",e[0].dataType,r.length),h=B("x",e[0].dataType,i.length),f=h.type.value,m=vp(p,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(h,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:u}},Sp=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+n]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},gm=(e,t)=>{yp(e.inputs);let r=Sp(e.inputs,t);e.compute(xp(e.inputs,r),{inputs:[0]})}}),Er,ea,ta,ra,ia,Ep,Tp,na,aa,ym,_m,sa,wm,bm,oa,$m,vm,xm,Sm,Lw=L(()=>{"use strict";He(),te(),ne(),ae(),Er=e=>{if(pe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ea=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();vi.adjustPoolAttributes(r,n,s,o,u,d);let p=vi.computePoolOutputShape(r,n,o,u,s,d,t.autoPad,t.ceilMode),h=Object.assign({},t);a?Object.assign(h,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[h,i?f:p]},ta=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],h=!!(d+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];f=!!($+S),a.push({type:12,data:m},{type:12,data:y},{type:12,data:$},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,h,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[a,s,!!u,!1,!1]}},ra=(e,t,r,i,n,a,s,o,u,d,p,h)=>{let f=n.format==="NHWC",m=t.type.value,y=X("output",t.type.tensor,i);if(n.kernelShape.length<=2){let $="",S="",b="",w=r-(f?2:1);if(p?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let E=r-(f?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,b=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${S}
              ${$}
              ${b}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=n.kernelShape.length,S=n.pads.length,b="";return d?b=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Q("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Q("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Q("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${Q("uniforms.pads","j - 2u",S)};
                  ${b}
              }
              ${s}

              output[global_idx] = value;
            }`}},ia=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ep=e=>`${ia(e)};${e.countIncludePad}`,Tp=e=>`${ia(e)};${e.storageOrder};${e.dilations}`,na=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),aa=(e,t,r,i)=>{let[n,a]=ea(t,i,r),s=B("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,h,f,m,y]=ta(a,n);p.push(...J(t.dims,a));let $=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${f};${m};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:p}),getShaderSource:S=>ra(S,s,t.dims.length,a.length,n,u,d,0,h,f,m,y)}},ym=e=>{let t=e.count_include_pad!==0,r=na(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Ep(i)}},_m=(e,t)=>{Er(e.inputs),e.compute(aa("AveragePool",e.inputs[0],!1,t))},sa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},wm=e=>{let t=e.format;return{format:t,...sa,cacheKey:t}},bm=(e,t)=>{Er(e.inputs),e.compute(aa("GlobalAveragePool",e.inputs[0],!0,t))},oa=(e,t,r,i)=>{let[n,a]=ea(t,i,r),s=`
      value = max(x_val, value);
    `,o="",u=B("x",t.dataType,t.dims.length),d=["rank"],[p,h,f,m,y]=ta(a,n);return p.push(...J(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${f};${m};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:p}),getShaderSource:$=>ra($,u,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,h,f,m,y)}},$m=(e,t)=>{Er(e.inputs),e.compute(oa("MaxPool",e.inputs[0],!1,t))},vm=e=>{let t=e.storage_order,r=e.dilations,i=na(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Tp(n)}},xm=e=>{let t=e.format;return{format:t,...sa,cacheKey:t}},Sm=(e,t)=>{Er(e.inputs),e.compute(oa("GlobalMaxPool",e.inputs[0],!0,t))}}),Ip,Cp,Em,Tm,Uw=L(()=>{"use strict";te(),ne(),Ce(),ae(),Ip=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Cp=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),u=i===3||i===2,d=u?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,h=e.length>2?e[2]:void 0,f=h?u?[Math.ceil(R.size(h.dims)/4)]:h.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,y=m===!1&&p.length===1,$=Ie(o),S=m&&(!u||$===4),b=S?$:1,w=S&&!u?$:1,E=B("input",u?12:i,d.length,w),T=B("scale",s,p.length),I=h?B("zero_point",u?12:i,f.length):void 0,k=X("output",s,a.length,b),O=[E,T];I&&O.push(I);let v=[d,p];h&&v.push(f);let M=[{type:12,data:o/b},{type:12,data:r},{type:12,data:t.blockSize},...J(...v,a)],W=H=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(F).declareVariables(...O,k)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${T.getByOffset("0")}`:y?`
            let scale_index = ${k.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?m?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:y?u?`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?n?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${k.setByOffset("global_idx",`${k.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/b/64),y:1,z:1},programUniforms:M})}},Em=(e,t)=>{Ip(e.inputs,t),e.compute(Cp(e.inputs,t))},Tm=e=>ye({axis:e.axis,blockSize:e.blockSize})}),kp,Op,Im,Ww=L(()=>{"use strict";He(),te(),ae(),kp=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},Op=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...J(a)],u=d=>{let p=X("output",i,a.length),h=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(f).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Im=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),pe.webgpu.validateInputContent&&kp(t,r,i),e.compute(Op(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),zp,Ap,Cm,km,Vw=L(()=>{"use strict";te(),ne(),Ce(),ae(),zp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ap=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],u=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...J(e[1].dims,e[2].dims,n)],p=h=>{let f=B("indices",e[1].dataType,e[1].dims.length),m=B("updates",e[2].dataType,e[2].dims.length,a),y=t.reduction!=="none"&&t.reduction!==""?Jc("output",e[0].dataType,n.length):X("output",e[0].dataType,n.length,a);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${zp(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},Cm=e=>ye({reduction:e.reduction}),km=(e,t)=>{e.compute(Ap(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Rp,Mp,Dp,ua,Bp,Np,Pp,Lp,Up,Wp,Vp,qp,la,Gp,Fp,Hp,jp,Kp,Om,zm,qw=L(()=>{"use strict";te(),ne(),Ce(),ae(),Rp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Mp=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Dp=(e,t,r,i,n,a)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Rp(i,t),t.axes.length>0&&Mp(i,t.axes,d).forEach((p,h)=>i[h]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>n.push(Number(p))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ua=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Bp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ua("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ua("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Np=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Pp=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Lp=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Up=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Wp=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Q("uniforms.scales","i",i)};
        var roi_low = ${Q("uniforms.roi","i",n)};
        var roi_hi = ${Q("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Vp=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Q("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q("uniforms.roi","i",a)};
          var roi_hi = ${Q("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,qp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Q("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,la=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Gp=(e,t,r,i,n)=>{let[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${la(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Fp=(e,t,r,i,n,a,s,o,u,d)=>{let p=r.length===2,h=!0,[f,m]=p?[0,1]:h?[2,3]:[1,2],y=e.type.value,$=S=>{let b=S===f?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[S]},
        ${i[S]}, ${r[S]}, ${a[S]}, ${a[S]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[S]} - 1))) {
          return ${u};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${y} = originalIdx + ${y}(i);
          if (${b} < 0 || ${b} >= ${r[S]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${b} = max(0, min(${b}, ${r[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${b})`)};
          data[i + 1] = ${S===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(f)};
    ${$(m)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Hp=(e,t,r,i,n)=>{let[a,s,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${la(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},jp=(e,t,r,i,n,a)=>{let s=e.dims,o=Pp(a,t.axes,s.length),u=Lp(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,E)=>w===0?1:u[E]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=Up(s,d,t)));let p=X("output",e.dataType,u.length),h=B("input",e.dataType,s.length),f=R.size(u),m=s.length===u.length&&s.every((w,E)=>w===u[E]),y=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,S=h.type.value,b=w=>`
      ${m?"":`
      ${Bp(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${qp(h,s)};
              ${Np(t.nearestMode,r,S)};
              ${Vp(h,p,s,u,d.length,o.length,y)};
              `;case"linear":return`
              ${Wp(p,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Gp(h,p,s,y,$)}`;if(s.length===3||s.length===5)return`${Hp(h,p,s,y,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Fp(h,p,s,u,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(h,p)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...J(s,u)]})}},Kp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Om=(e,t)=>{let r=[],i=[],n=[],a=Kp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Dp(e.inputs,t,a,r,i,n),e.compute(jp(e.inputs[0],t,a,r,i,n),{inputs:[0]})},zm=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ye({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Zp,Yp,Am,Gw=L(()=>{"use strict";te(),ne(),ae(),Zp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Yp=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,u=s,d=a.slice(-1)[0],p=i?a.slice(0,-1).concat(1):[],h=!n&&e.length>3,f=e.length>4,m=i&&r>1,y=i&&r>2,$=r>3,S=64,b=Ie(d),w=[{type:12,data:u},{type:12,data:b},{type:12,data:d},{type:1,data:t.epsilon}],E=I=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[B("x",e[0].dataType,e[0].dims,b),B("skip",e[1].dataType,e[1].dims,b),B("gamma",e[2].dataType,e[2].dims,b)];h&&O.push(B("beta",e[3].dataType,e[3].dims,b)),f&&O.push(B("bias",e[4].dataType,e[4].dims,b)),O.push(X("output",e[0].dataType,o,b)),m&&O.push(X("mean_output",1,p)),y&&O.push(X("inv_std_output",1,p)),$&&O.push(X("input_skip_bias_sum",e[0].dataType,o,b));let v=Ae(e[0].dataType),M=Ae(1,b);return`

      ${I.registerUniforms(k).declareVariables(...O)}
      var<workgroup> sum_shared : array<${M}, ${S}>;
      var<workgroup> sum_squared_shared : array<${M}, ${S}>;

      ${I.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ir(v,b,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ct("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ct("square_sum",b)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:o,dataType:e[0].dataType}];return r>1&&T.push({dims:p,dataType:1}),r>2&&T.push({dims:p,dataType:1}),r>3&&T.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${m};${y};${$}`,inputDependencies:e.map((I,k)=>"type")},getShaderSource:E,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:w})}},Am=(e,t)=>{Zp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Yp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Xp,Tr,Qp,da,Jp,ec,Rm,Mm,Fw=L(()=>{"use strict";te(),ne(),Ce(),ae(),Xp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Tr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Qp=(e,t)=>{if(e.length>1){let r=Tr(e,1),i=Tr(e,2),n=Tr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),ye({starts:r,ends:i,axes:n})}else return t},da=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Jp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
            let steps_i = ${Q("uniforms.steps","i",r.length)};
            let signs_i = ${Q("uniforms.signs","i",r.length)};
            let starts_i = ${Q("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,ec=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=Tr(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((b,w)=>da(b,w,r,n,a)),o=t.ends.map((b,w)=>da(b,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let b=0;b<r.length;++b)n.includes(b)||(s.splice(b,0,0),o.splice(b,0,r[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,w,E)=>{if(b<0){let T=(o[w]-s[w])/b,I=s[w],k=I+T*a[w];s[w]=k,o[w]=I,E[w]=-b}});let d=r.slice(0);n.forEach((b,w)=>{d[b]=Math.ceil((o[b]-s[b])/a[b])});let p={dims:d,dataType:e[0].dataType},h=X("output",e[0].dataType,d.length),f=B("input",e[0].dataType,e[0].dims.length),m=R.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],$=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...J(e[0].dims,d)],S=b=>`
      ${b.registerUniforms(y).declareVariables(f,h)}
        ${Jp(f,h,r)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:$})}},Rm=(e,t)=>{Xp(e.inputs,t);let r=Qp(e.inputs,t);e.compute(ec(e.inputs,r),{inputs:[0]})},Mm=e=>{let t=e.starts,r=e.ends,i=e.axes;return ye({starts:t,ends:r,axes:i})}}),tc,rc,Dm,Bm,Hw=L(()=>{"use strict";te(),ne(),Ce(),kt(),ae(),tc=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},rc=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,u,d=[];o?(d=Array.from({length:a},(O,v)=>v),d[s]=a-1,d[a-1]=s,u=e.compute(Ge(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,h=p[a-1],f=n/h,m=Ie(h),y=h/m,$=64;f===1&&($=256);let S=(O,v)=>v===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:v===2?`max(${O}.x, ${O}.y)`:v===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,b=B("x",u.dataType,u.dims,m),w=X("result",u.dataType,u.dims,m),E=b.type.value,T=Ae(u.dataType)==="f32"?`var threadMax = ${E}(-3.4028234663852886e+38f);`:`var threadMax = ${E}(-65504.0h);`,I=O=>`
      var<workgroup> rowMaxShared : ${E};
      var<workgroup> rowSumShared : ${E};
      var<workgroup> threadShared : array<${E}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${E} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${E}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables(b,w)}
      ${O.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${E}(${S("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${E}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${E}(${Ct("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${E}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:I},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Ge(k,d),{inputs:[k]})},Dm=(e,t)=>{tc(e.inputs),rc(e,t)},Bm=e=>ye({axis:e.axis})}),pa,ic,nc,ac,Nm,jw=L(()=>{"use strict";te(),ne(),ae(),pa=e=>Array.from(e.getBigInt64Array(),Number),ic=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(pa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},nc=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},ac=(e,t)=>{let r=e[0].dims,i=t??pa(e[1]),n=nc(r,i),a=R.size(n),s=e[0].dataType,o=B("input",s,r.length),u=X("output",s,n.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...J(e[0].dims,n)]}),getShaderSource:d}},Nm=e=>{ic(e.inputs),e.compute(ac(e.inputs),{inputs:[0]})}}),sc,oc,Pm,Kw=L(()=>{"use strict";te(),ne(),ae(),sc=(e,t,r,i,n)=>{let a=X("output_data",n,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),o=B("b_data",t[2].dataType,t[2].dims.length,4),u=B("c_data",t[0].dataType,t[0].dims.length,4),d,p=(h,f,m)=>`select(${f}, ${h}, ${m})`;if(!i)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let h=(f,m,y="")=>{let $=`a_data[index_a${m}][component_a${m}]`,S=`b_data[index_b${m}][component_b${m}]`,b=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${a.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${f}[${m}] = ${y}(${p($,S,b)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},oc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=nr.calcShape(nr.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>sc(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...J(i,t,r,s)]})}},Pm=e=>{e.compute(oc(e.inputs))}}),Lm,Zw=L(()=>{"use strict";uw(),Ya(),lw(),dw(),pw(),cw(),hw(),_w(),bw(),$w(),vw(),xw(),Sw(),Ew(),Tw(),Iw(),Cw(),kw(),Ow(),zw(),Aw(),Rw(),Mw(),Dw(),Bw(),Nw(),nm(),Pw(),Lw(),Uw(),Ww(),Vw(),Za(),qw(),lm(),Gw(),Fw(),Hw(),om(),jw(),kt(),Xa(),Kw(),Lm=new Map([["Abs",[Ch]],["Acos",[kh]],["Acosh",[Oh]],["Add",[cf]],["ArgMax",[Sh,$a]],["ArgMin",[xh,$a]],["Asin",[zh]],["Asinh",[Ah]],["Atan",[Rh]],["Atanh",[Mh]],["Attention",[Eh]],["AveragePool",[_m,ym]],["BatchNormalization",[Th]],["BiasAdd",[Ih]],["BiasSplitGelu",[pf]],["Cast",[Bh,Dh]],["Ceil",[Ph]],["Clip",[Nh]],["Concat",[vf,xf]],["Conv",[Ia,Ta]],["ConvTranspose",[Rf,Af]],["Cos",[Lh]],["Cosh",[Uh]],["CumSum",[Mf,Df]],["DepthToSpace",[Bf,Nf]],["DequantizeLinear",[Em,Tm]],["DFT",[Pf,Lf]],["Div",[hf]],["Einsum",[Uf,Wf]],["Elu",[Wh,zr]],["Equal",[ff]],["Erf",[Vh]],["Exp",[qh]],["Expand",[Vf]],["FastGelu",[qf]],["Floor",[Gh]],["FusedConv",[Ia,Ta]],["Gather",[Ff,Gf]],["GatherElements",[Xf,Yf]],["GatherBlockQuantized",[Kf,Zf]],["GatherND",[Hf,jf]],["Gelu",[Fh]],["Gemm",[Jf,Qf]],["GlobalAveragePool",[bm,wm]],["GlobalMaxPool",[Sm,xm]],["Greater",[_f]],["GreaterOrEqual",[bf]],["GridSample",[em,tm]],["GroupQueryAttention",[dm]],["HardSigmoid",[Jh,Qh]],["HardSwish",[ef]],["InstanceNormalization",[pm]],["LayerNormalization",[cm]],["LeakyRelu",[Hh,zr]],["Less",[wf]],["LessOrEqual",[$f]],["Log",[lf]],["MatMul",[hm]],["MatMulNBits",[fm,mm]],["MaxPool",[$m,vm]],["Mul",[mf]],["MultiHeadAttention",[im,rm]],["Neg",[Kh]],["Not",[jh]],["Pad",[gm]],["Pow",[gf]],["QuickGelu",[df,zr]],["Range",[Im]],["Reciprocal",[Zh]],["ReduceMin",[_h]],["ReduceMean",[hh]],["ReduceMax",[yh]],["ReduceSum",[bh]],["ReduceProd",[wh]],["ReduceL1",[fh]],["ReduceL2",[mh]],["ReduceLogSum",[vh]],["ReduceLogSumExp",[gh]],["ReduceSumSquare",[$h]],["Relu",[Yh]],["Resize",[Om,zm]],["RotaryEmbedding",[um]],["ScatterND",[km,Cm]],["Sigmoid",[Xh]],["Sin",[tf]],["Sinh",[rf]],["Slice",[Rm,Mm]],["SkipLayerNormalization",[Am]],["Split",[am,sm]],["Sqrt",[nf]],["Softmax",[Dm,Bm]],["Sub",[yf]],["Tan",[af]],["Tanh",[sf]],["ThresholdedRelu",[uf,zr]],["Tile",[Nm]],["Transpose",[th,rh]],["Where",[Pm]]])}),Um,Yw=L(()=>{"use strict";He(),mt(),ae(),Um=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){Fe(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),We(e.programInfo.name)}dispose(){}build(e,t){Fe(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=eh(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return We(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Wm={};sr(Wm,{WebGpuBackend:()=>Vm});var uc,lc,dc,Vm,Xw=L(()=>{"use strict";He(),te(),mt(),Zc(),sw(),Zw(),Yw(),uc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},lc=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${uc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},dc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Vm=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=o=>t.features.has(o)&&r.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new dc(s),this.gpuDataManager=Qc(this),this.programManager=new Um(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Fa(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Fe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),o=s.kernelType,u=s.kernelName,d=n.programName,p=n.inputTensorViews,h=n.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),$=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(S=>({dims:S.dims,dataType:ft(S.dataType)})),outputsMetadata:h.map(S=>({dims:S.dims,dataType:ft(S.dataType)})),kernelId:a,kernelType:o,kernelName:u,programName:d,startTime:y,endTime:$});else{let S="";p.forEach((w,E)=>{S+=`input[${E}]: [${w.dims}] | ${ft(w.dataType)}, `});let b="";h.forEach((w,E)=>{b+=`output[${E}]: [${w.dims}] | ${ft(w.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${u}|${d}" ${S}${b}start time: ${y} ns, execution time: ${$-y} ns`)}Dr("GPU",`${d}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),We()}run(e,t,r,i,n,a){Fe(e.name);let s=[];for(let w=0;w<t.length;++w){let E=t[w].data;if(E===0)continue;let T=this.gpuDataManager.get(E);if(!T)throw new Error(`no GPU data for input: ${E}`);s.push(T)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((w,E)=>E):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let h=[],f=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(p[w])||p[w]<-3||p[w]>=a)throw new Error(`Invalid output index: ${p[w]}`);if(p[w]===-3)continue;let E=p[w]===-1,T=p[w]===-2,I=E||T?n(o[w].dataType,o[w].dims):i(p[w],o[w].dataType,o[w].dims);if(h.push(I),I.data===0)continue;let k=this.gpuDataManager.get(I.data);if(!k)throw new Error(`no GPU data for output: ${I.data}`);if(E&&this.temporaryData.push(k),T){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(k)}f.push(k)}if(s.length!==t.length||f.length!==h.length){if(f.length===0)return We(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let w=0,E=[];d.forEach(O=>{let v=typeof O.data=="number"?[O.data]:O.data;if(v.length===0)return;let M=O.type===10?2:4,W,H;O.type===10?(H=v.length>4?16:v.length>2?8:v.length*M,W=v.length>4?16:M*v.length):(H=v.length<=2?v.length*M:16,W=16),w=Math.ceil(w/H)*H,E.push(w);let F=O.type===10?8:4;w+=v.length>4?Math.ceil(v.length/F)*W:v.length*M});let T=16;w=Math.ceil(w/T)*T;let I=new ArrayBuffer(w);d.forEach((O,v)=>{let M=E[v],W=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(I,M,W.length).set(W);else if(O.type===12)new Uint32Array(I,M,W.length).set(W);else if(O.type===10)new Uint16Array(I,M,W.length).set(W);else if(O.type===1)new Float32Array(I,M,W.length).set(W);else throw new Error(`Unsupported uniform type: ${ft(O.type)}`)});let k=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,I,0,w),this.gpuDataManager.release(k.id),m={offset:0,size:w,buffer:k.buffer}}let y=this.programManager.normalizeDispatchGroupSize(u),$=y[1]===1&&y[2]===1,S=lc(e,t,$),b=this.programManager.getArtifact(S);if(b||(b=this.programManager.build(e,y),this.programManager.setArtifact(S,b),ce("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&b.uniformVariablesInfo){if(d.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${d.length} in program "${b.programInfo.name}".`);for(let w=0;w<d.length;w++){let E=d[w],T=E.type,I=typeof E.data=="number"?1:E.data.length,[k,O]=b.uniformVariablesInfo[w];if(T!==k||I!==O)throw new Error(`Uniform variable ${w} mismatch: expect type ${k} with size ${O}, got type ${T} with size ${I} in program "${b.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(b,s,f,y,m),We(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Lm.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await _a(this,e,t);return Ha(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),qm={};sr(qm,{init:()=>Gm});var mi,pc,Gm,Qw=L(()=>{"use strict";te(),mt(),ne(),aw(),mi=class Fm{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Fm(this.module,this.dataType,this.data,t)}},pc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceLimits=t.device.limits;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(i*n++,a)),p=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,a)),f=[];for(let m=0;m<h;m++)f.push(Number(e.getValue(i*n++,a)));o.push(new mi(e,d,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,o,u)=>new mi(this.module,o,this.output(s,u),u),a=(s,o)=>{let u=Gt(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);let d=u>0?this.backend.gpuDataManager.create(u).id:0;return new mi(this.module,s,d,o)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Gm=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Xw(),Mr(Wm)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,p=!1)=>{if(p)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),h)}},async(o,u,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,p)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let h=new pc(t,s,Number(u));return s.computeKernel(Number(o),h,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Xc(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,p)=>a.ensureTensor(s,o,u,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),cc,is,ns,St,hc,ca,Ti,as,ss,Ir,fc,Lt,Hm,jm,ha,os,us,ls,Km=L(()=>{"use strict";He(),rw(),iw(),te(),Zt(),Wa(),Ga(),cc=(e,t)=>{ge()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},is=async e=>{cc(e.wasm.numThreads,$i(e.logLevel))},ns=async(e,t)=>{ge().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Qw(),Mr(qm)).init;t==="webgpu"&&await i("webgpu",ge(),e,r),t==="webnn"&&await i("webnn",ge(),e)}},St=new Map,hc=e=>{let t=ge(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&me("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},ca=(e,t)=>{let r=ge(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&me("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let u=r.HEAP32[n/4];if(u===0)return[o,0];let d=r.HEAPU32[n/4+1],p=[];for(let h=0;h<d;h++){let f=Number(r.getValue(n+8+h*a,"*"));p.push(f!==0?r.UTF8ToString(f):Number(r.getValue(n+8+(h+d)*a,"*")))}return[o,u,p]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Ti=e=>{let t=ge(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},as=async(e,t)=>{let r,i,n=ge();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Ti(e);let a=0,s=0,o=0,u=[],d=[],p=[];try{if([s,u]=await Fc(t),t?.externalData&&n.mountExternalData){let T=[];for(let I of t.externalData){let k=typeof I=="string"?I:I.path,O=typeof I=="string"?I:I.data;T.push(Ci(O).then(v=>{n.mountExternalData(k,v)}))}await Promise.all(T)}for(let T of t?.executionProviders??[])if((typeof T=="string"?T:T.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof T!="string"){let I=T,k=I?.context,O=I?.gpuDevice,v=I?.deviceType,M=I?.powerPreference;k?n.currentContext=k:O?n.currentContext=await n.webnnCreateMLContext(O):n.currentContext=await n.webnnCreateMLContext({deviceType:v,powerPreference:M})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&me("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[h,f]=hc(a),m=!!t?.enableGraphCapture,y=[],$=[],S=[],b=[],w=[];for(let T=0;T<h;T++){let[I,k,O]=ca(a,T);I===0&&me("Can't get an input name."),d.push(I);let v=n.UTF8ToString(I);y.push(v),S.push(k===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:ft(k),shape:O})}for(let T=0;T<f;T++){let[I,k,O]=ca(a,T+h);I===0&&me("Can't get an output name."),p.push(I);let v=n.UTF8ToString(I);$.push(v),b.push(k===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:ft(k),shape:O});{if(m&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let M=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[v]??"cpu",W=n.webnnIsGraphOutput;if(M==="cpu"&&W&&W(a,v)){w.push("ml-tensor-cpu-output");continue}if(M!=="cpu"&&M!=="cpu-pinned"&&M!=="gpu-buffer"&&M!=="ml-tensor")throw new Error(`Not supported preferred output location: ${M}.`);if(m&&M!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${M}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(M)}}let E=null;return w.some(T=>T==="gpu-buffer"||T==="ml-tensor"||T==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&me("Can't create IO binding."),E={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(T=>T==="ml-tensor-cpu-output"?"ml-tensor":T).map(T=>ya(T))}),St.set(a,[a,d,p,E,m,!1]),[a,y,$,S,b]}catch(h){throw d.forEach(f=>n._OrtFree(f)),p.forEach(f=>n._OrtFree(f)),o!==0&&n._OrtReleaseBinding(o)!==0&&me("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&me("Can't release session."),h}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&me("Can't release session options."),u.forEach(h=>n._free(h)),n.unmountExternalData?.()}},ss=e=>{let t=ge(),r=St.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&me("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(u=>t._OrtFree(u)),a.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&me("Can't release session."),St.delete(e)},Ir=new Map,fc=1,Lt=new Map,Hm=e=>{let t=ge(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);try{t.HEAPU8.set(e,r);let i=t._OrtCreateLoraAdapter(r,e.byteLength);i===0&&me("Can't create a LoRA adapter.");let n=fc++;return Ir.set(n,i),n}finally{t._free(r)}},jm=e=>{let t=ge(),r=Ir.get(e);if(r===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);if(Lt.has(e))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);t._OrtReleaseLoraAdapter(r)!==0&&me("Can't release LoRA adapter."),Ir.delete(e)},ha=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=ge(),u=o.PTR_SIZE,d=e[0],p=e[1],h=e[3],f=h,m,y;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let b=e[2].gpuBuffer;y=Gt(qt(d),p);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=w(i,a,b,y)}}else if(h==="ml-tensor"){let b=e[2].mlTensor;y=Gt(qt(d),p);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=w(i,b,qt(d),p)}else{let b=e[2];if(Array.isArray(b)){y=u*b.length,m=o._malloc(y),r.push(m);for(let w=0;w<b.length;w++){if(typeof b[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(m+w*u,tt(b[w],r),"*")}}else{let w=o.webnnIsGraphInput,E=o.webnnIsGraphOutput;if(d!=="string"&&w&&E){let T=o.UTF8ToString(n);if(w(i,T)||E(i,T)){let I=qt(d);y=Gt(I,p),f="ml-tensor";let k=o.webnnCreateTemporaryTensor,O=o.webnnUploadTensor;if(!k||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(i,I,p);O(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),m=v}else y=b.byteLength,m=o._malloc(y),r.push(m),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,y),m)}else y=b.byteLength,m=o._malloc(y),r.push(m),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,y),m)}}let $=o.stackSave(),S=o.stackAlloc(4*p.length);try{p.forEach((w,E)=>o.setValue(S+E*u,w,u===4?"i32":"i64"));let b=o._OrtCreateTensor(qt(d),m,y,S,p.length,ya(f));b===0&&me(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(b)}finally{o.stackRestore($)}},os=async(e,t,r,i,n,a,s=[])=>{let o=ge(),u=o.PTR_SIZE,d=St.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],h=d[1],f=d[2],m=d[3],y=d[4],$=d[5],S=[];if(s.length>0){if(m)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let q of s){let z=Ir.get(q);if(z===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${q}`);S.push(z)}}let b=t.length,w=i.length,E=0,T=[],I=[],k=[],O=[],v=[],M=o.stackSave(),W=o.stackAlloc(b*u),H=o.stackAlloc(b*u),F=o.stackAlloc(w*u),U=o.stackAlloc(w*u);try{for(let P of s)Lt.set(P,(Lt.get(P)??0)+1);[E,T]=Gc(a,S),Tt("wasm prepareInputOutputTensor");for(let P=0;P<b;P++)await ha(r[P],I,O,e,h[t[P]],t[P],y);for(let P=0;P<w;P++)await ha(n[P],k,O,e,f[i[P]],b+i[P],y);It("wasm prepareInputOutputTensor");for(let P=0;P<b;P++)o.setValue(W+P*u,I[P],"*"),o.setValue(H+P*u,h[t[P]],"*");for(let P=0;P<w;P++)o.setValue(F+P*u,k[P],"*"),o.setValue(U+P*u,f[i[P]],"*");if(m&&!$){let{handle:P,outputPreferredLocations:se,outputPreferredLocationsEncoded:ee}=m;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);Tt("wasm bindInputsOutputs");for(let re=0;re<b;re++){let N=t[re];await o._OrtBindInput(P,h[N],I[re])!==0&&me(`Can't bind input[${re}] for session=${e}.`)}for(let re=0;re<w;re++){let N=i[re];n[re]?.[3]?(v.push(k[re]),o._OrtBindOutput(P,f[N],k[re],0)!==0&&me(`Can't bind pre-allocated output[${re}] for session=${e}.`)):o._OrtBindOutput(P,f[N],0,ee[N])!==0&&me(`Can't bind output[${re}] to ${se[re]} for session=${e}.`)}It("wasm bindInputsOutputs"),St.set(e,[p,h,f,m,y,!0])}o.jsepOnRunStart?.(p),o.webnnOnRunStart?.(p);let q;m?q=await o._OrtRunWithBinding(p,m.handle,w,F,E):q=await o._OrtRun(p,H,W,b,U,w,F,E),q!==0&&me("failed to call OrtRun().");let z=[],V=[];Tt("wasm ProcessOutputTensor");for(let P=0;P<w;P++){let se=Number(o.getValue(F+P*u,"*"));if(se===k[P]||v.includes(k[P])){z.push(n[P]),se!==k[P]&&o._OrtReleaseTensor(se)!==0&&me("Can't release tensor.");continue}let ee=o.stackSave(),re=o.stackAlloc(4*u),N=!1,K,j=0;try{o._OrtGetTensorData(se,re,re+u,re+2*u,re+3*u)!==0&&me(`Can't access output tensor data on index ${P}.`);let Z=u===4?"i32":"i64",_e=Number(o.getValue(re,Z));j=o.getValue(re+u,"*");let De=o.getValue(re+u*2,"*"),ke=Number(o.getValue(re+u*3,Z)),$e=[];for(let xe=0;xe<ke;xe++)$e.push(Number(o.getValue(De+xe*u,Z)));o._OrtFree(De)!==0&&me("Can't free memory for tensor dims.");let Ee=$e.reduce((xe,be)=>xe*be,1);K=ft(_e);let Le=m?.outputPreferredLocations[i[P]];if(K==="string"){if(Le==="gpu-buffer"||Le==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let be=0;be<Ee;be++){let Be=o.getValue(j+be*u,"*"),Ue=o.getValue(j+(be+1)*u,"*"),we=be===Ee-1?void 0:Ue-Be;xe.push(o.UTF8ToString(Be,we))}z.push([K,$e,xe,"cpu"])}else if(Le==="gpu-buffer"&&Ee>0){let xe=o.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let be=xe(j),Be=Gt(_e,Ee);if(Be===void 0||!Va(K))throw new Error(`Unsupported data type: ${K}`);N=!0,z.push([K,$e,{gpuBuffer:be,download:o.jsepCreateDownloader(be,Be,K),dispose:()=>{o._OrtReleaseTensor(se)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(Le==="ml-tensor"&&Ee>0){let xe=o.webnnEnsureTensor,be=o.webnnIsGraphInputOutputTypeSupported;if(!xe||!be)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Gt(_e,Ee)===void 0||!qa(K))throw new Error(`Unsupported data type: ${K}`);if(!be(e,K,!1))throw new Error(`preferredLocation "ml-tensor" for ${K} output is not supported by current WebNN Context.`);let Be=await xe(e,j,_e,$e,!1);N=!0,z.push([K,$e,{mlTensor:Be,download:o.webnnCreateMLTensorDownloader(j,K),dispose:()=>{o.webnnReleaseTensorId(j),o._OrtReleaseTensor(se)}},"ml-tensor"])}else if(Le==="ml-tensor-cpu-output"&&Ee>0){let xe=o.webnnCreateMLTensorDownloader(j,K)(),be=z.length;N=!0,V.push((async()=>{let Be=[be,await xe];return o.webnnReleaseTensorId(j),o._OrtReleaseTensor(se),Be})()),z.push([K,$e,[],"cpu"])}else{let xe=Ii(K),be=new xe(Ee);new Uint8Array(be.buffer,be.byteOffset,be.byteLength).set(o.HEAPU8.subarray(j,j+be.byteLength)),z.push([K,$e,be,"cpu"])}}finally{o.stackRestore(ee),K==="string"&&j&&o._free(j),N||o._OrtReleaseTensor(se)}}m&&!y&&(o._OrtClearBoundOutputs(m.handle)!==0&&me("Can't clear bound outputs."),St.set(e,[p,h,f,m,y,!1]));for(let[P,se]of await Promise.all(V))z[P][2]=se;return It("wasm ProcessOutputTensor"),z}finally{o.webnnOnRunEnd?.(p),o.stackRestore(M),I.forEach(q=>o._OrtReleaseTensor(q)),k.forEach(q=>o._OrtReleaseTensor(q)),O.forEach(q=>o._free(q)),E!==0&&o._OrtReleaseRunOptions(E),T.forEach(q=>o._free(q));for(let q of s){let z=Lt.get(q)-1;z===0?Lt.delete(q):Lt.set(q,z)}}},us=e=>{let t=ge(),r=St.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&me("Can't get an profile file name."),t._OrtFree(n)},ls=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ut,Ke,rr,Cr,kr,gi,fa,yi,Ut,Wt,mc,Zm,Ym,Xm,Qm,Jm,eg,tg,rg,ig,ds=L(()=>{"use strict";He(),Km(),Zt(),La(),Ga(),ut=()=>!!pe.wasm.proxy&&typeof document<"u",rr=!1,Cr=!1,kr=!1,yi=new Map,Ut=(e,t)=>{let r=yi.get(e);r?r.push(t):yi.set(e,[t])},Wt=()=>{if(rr||!Cr||kr||!Ke)throw new Error("worker not ready")},mc=e=>{switch(e.data.type){case"init-wasm":rr=!1,e.data.err?(kr=!0,fa[1](e.data.err)):(Cr=!0,fa[0]()),gi&&(URL.revokeObjectURL(gi),gi=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=yi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Zm=async()=>{if(!Cr){if(rr)throw new Error("multiple calls to 'initWasm()' detected.");if(kr)throw new Error("previous call to 'initWasm()' failed.");if(rr=!0,ut())return new Promise((e,t)=>{Ke?.terminate(),Vc().then(([r,i])=>{try{Ke=i,Ke.onerror=a=>t(a),Ke.onmessage=mc,fa=[e,t];let n={type:"init-wasm",in:pe};!n.in.wasm.wasmPaths&&(r||ga)&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",rt.url).href}),Ke.postMessage(n),gi=r}catch(n){t(n)}},t)});try{await Ua(pe.wasm),await is(pe),Cr=!0}catch(e){throw kr=!0,e}finally{rr=!1}}},Ym=async e=>{if(ut())return Wt(),new Promise((t,r)=>{Ut("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:pe}};Ke.postMessage(i)});await ns(pe,e)},Xm=async e=>ut()?(Wt(),new Promise((t,r)=>{Ut("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ke.postMessage(i,[e.buffer])})):Ti(e),Qm=async(e,t)=>{if(ut()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Wt(),new Promise((r,i)=>{Ut("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ke.postMessage(n,a)})}else return as(e,t)},Jm=async e=>{if(ut())return Wt(),new Promise((t,r)=>{Ut("release",[t,r]);let i={type:"release",in:e};Ke.postMessage(i)});ss(e)},eg=async e=>{if(ut())throw new Error("LoRA adapter is not supported for proxy.");let t=typeof e=="string"?await Ci(e):e;return Hm(t)},tg=async e=>{if(ut())throw new Error("LoRA adapter is not supported for proxy.");jm(e)},rg=async(e,t,r,i,n,a,s)=>{if(ut()){if(s.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return Wt(),new Promise((o,u)=>{Ut("run",[o,u]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:a}};Ke.postMessage(p,ls(d))})}else return os(e,t,r,i,n,a,s)},ig=async e=>{if(ut())return Wt(),new Promise((t,r)=>{Ut("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ke.postMessage(i)});us(e)}}),ps,ng=L(()=>{"use strict";He(),ds(),ps=class{async loadAdapter(e){Fe(),this.adapterId=await eg(e),We()}async dispose(){return tg(this.adapterId)}}}),ma,gc,ag,Jw=L(()=>{"use strict";He(),ng(),ds(),te(),Pa(),Ga(),ma=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},gc=e=>{switch(e[3]){case"cpu":return new it(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Va(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return it.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!qa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return it.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},ag=class{async fetchModelAndCopyToWasmMemory(e){return Xm(await Ci(e))}async loadModel(e,t){Fe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Qm(r,t),We()}async dispose(){return Jm(this.sessionId)}async run(e,t,r,i=[]){Fe();let n=i.map(m=>{if(!(m instanceof ps))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return m.adapterId}),a=[],s=[];Object.entries(e).forEach(m=>{let y=m[0],$=m[1],S=this.inputNames.indexOf(y);if(S===-1)throw new Error(`invalid input '${y}'`);a.push($),s.push(S)});let o=[],u=[];Object.entries(t).forEach(m=>{let y=m[0],$=m[1],S=this.outputNames.indexOf(y);if(S===-1)throw new Error(`invalid output '${y}'`);o.push($),u.push(S)});let d=a.map((m,y)=>ma(m,()=>`input "${this.inputNames[s[y]]}"`)),p=o.map((m,y)=>m?ma(m,()=>`output "${this.outputNames[u[y]]}"`):null),h=await rg(this.sessionId,s,d,u,p,r,n),f={};for(let m=0;m<h.length;m++)f[this.outputNames[u[m]]]=o[m]??gc(h[m]);return We(),f}startProfiling(){}endProfiling(){ig(this.sessionId)}}}),sg,eb=L(()=>{"use strict";sg=e=>{if(e?.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),og={};sr(og,{OnnxruntimeWebAssemblyBackend:()=>Oa,initializeFlags:()=>ka,wasmBackend:()=>ug});var ka,Oa,ug,tb=L(()=>{"use strict";He(),ng(),ds(),Jw(),eb(),ka=()=>{(typeof pe.wasm.initTimeout!="number"||pe.wasm.initTimeout<0)&&(pe.wasm.initTimeout=0);let e=pe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),pe.wasm.simd=!1),typeof pe.wasm.proxy!="boolean"&&(pe.wasm.proxy=!1),typeof pe.wasm.trace!="boolean"&&(pe.wasm.trace=!1),typeof pe.wasm.numThreads!="number"||!Number.isInteger(pe.wasm.numThreads)||pe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)pe.wasm.numThreads=1;else{let t=typeof navigator>"u"?P_("node:os").cpus().length:navigator.hardwareConcurrency;pe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Oa=class{async init(e){ka(),await Zm(),await Ym(e)}async createInferenceSessionHandler(e,t){sg(t);let r=new ag;return await r.loadModel(e,t),r}async createLoraAdapterHandler(e){let t=new ps;return await t.loadAdapter(e),t}},ug=new Oa});He();He();He();var rb="1.31.1",ib=Bc;{let e=(tb(),Mr(og)).wasmBackend;Ft("webgpu",e,5),Ft("webnn",e,5),Ft("cpu",e,10),Ft("wasm",e,10)}Object.defineProperty(pe.versions,"web",{value:rb,enumerable:!0});var Ot={verbose:!1,debug:!1,debugFolder:"out"},ki={mean:[.485,.456,.406],stdDeviation:[.229,.224,.225],maxSideLength:"auto",minimumAreaThreshold:20,paddingVertical:.4,paddingHorizontal:.6},Nr={imageHeight:48,strategy:"per-line",crossLineWidthFactor:1,minimumConfidence:.5,charactersDictionary:[],maxCropSourceSideLength:2e3,mainThreadYieldMs:0,recBatchSize:6,rotateVerticalCrops:!0,spaceRecovery:!1},lg=10,nb={executionProviders:["cpu"],graphOptimizationLevel:"all",enableCpuMemArena:!0,enableMemPattern:!0,executionMode:"sequential",interOpNumThreads:0,intraOpNumThreads:0},Oi="opencv",dg={engine:Oi},pg={enabled:!1},Pr={model:{},detection:ki,recognition:Nr,debugging:Ot,session:nb,processing:dg,unwarping:pg};function zi(e,...t){if(!t.length)return e;let r=t.shift();if(cs(r)){for(let i in r)if(Object.prototype.hasOwnProperty.call(r,i)){if(i==="__proto__"||i==="constructor"||i==="prototype")continue;let n=r[i],a=e[i];cs(n)?((!a||!cs(a))&&(e[i]={}),zi(e[i],n)):n!==void 0&&(e[i]=n)}}return zi(e,...t)}var cg=6e4;function ab(e,t){if(!e)return null;let r=e.trim();if(r==="")return null;let i=Number(r);if(Number.isFinite(i))return i<=0?0:Math.min(i*1e3,cg);let n=Date.parse(r);return Number.isNaN(n)?null:Math.min(Math.max(n-t,0),cg)}function sb(e){let t=500*2**e;return t+Math.random()*t}async function hs(e,t={}){let{timeoutMs:r=3e5,retries:i=2,fallbackUrl:n=Ou(e)}=t,a;for(let o=0;o<=i;o++){let u=null;try{let d=await fetch(e,{signal:AbortSignal.timeout(r),referrerPolicy:"no-referrer"});if(!d.ok)throw u=ab(d.headers.get("retry-after"),Date.now()),new Error(`HTTP ${d.status} ${d.statusText}`);return await d.arrayBuffer()}catch(d){a=d,o<i&&await new Promise(p=>setTimeout(p,u??sb(o)))}}let s=new Error(`Failed to fetch ${e} after ${i+1} attempt(s): ${String(a)}`);if(!n)throw s;console.warn(`[ppu-paddle-ocr] ${s.message}
  retrying on ${n}`);try{return await hs(n,{timeoutMs:r,retries:i,fallbackUrl:null})}catch(o){throw new Error(`${s.message}; mirror also failed: ${String(o)}`,{cause:s})}}function Lr(e){return(typeof e=="string"?e:new TextDecoder("utf-8").decode(e)).split(/\r?\n/)}function cs(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!ArrayBuffer.isView(e)}function hg(e,t){return e!=="auto"?e:Math.min(1920,Math.max(960,Math.round(t*.75/32)*32))}function ur(e,t,r){let i=e,n=t,a=1;return Math.max(n,i)>r&&(a=r/(n>i?n:i),i=Math.round(i*a),n=Math.round(n*a)),{width:i,height:n,ratio:a}}function ob(e,t,r,i,n){let a=Math.round(e.height*i),s=Math.round(e.height*n),o=e.x-s,u=e.y-a;o=Math.max(0,o),u=Math.max(0,u);let d=Math.min(t,e.x+e.width+s),p=Math.min(r,e.y+e.height+a),h=d-o,f=p-u;return{x:o,y:u,width:h,height:f}}function ub(e,t,r,i){let n=e.x/t,a=e.y/t,s=e.width/t,o=e.height/t,u=Math.max(0,Math.round(n)),d=Math.max(0,Math.round(a)),p=Math.min(r-u,Math.round(s)),h=Math.min(i-d,Math.round(o));return{x:u,y:d,width:p,height:h}}function fg(e,t,r,i,n,a,s,o,u){let d=[];return e.iterate(p=>{try{let h=e.getRect(p);if(h.width*h.height<=s)return;let f=ob(h,t,r,o,u),m=ub(f,i,n,a);m.width>5&&m.height>5&&d.push(m)}finally{p.delete()}}),d}function mg(e,t,r){let i=[];for(let n of e){let{bbox:a}=n,s={x:Math.max(0,a.x0),y:Math.max(0,a.y0),width:a.x1-a.x0,height:a.y1-a.y0};s.x+s.width>t&&(s.width=t-s.x),s.y+s.height>r&&(s.height=r-s.y),s.width>5&&s.height>5&&i.push(s)}return i}var lb=3;function gg(e,t,r,i,n){let o=e.getContext("2d").getImageData(0,0,t,r).data,u=r*t,d=new Float32Array(lb*u),p=i[0]??.485,h=i[1]??.456,f=i[2]??.406,m=n[0]??.229,y=n[1]??.224,$=n[2]??.225,S=1/(255*m),b=1/(255*y),w=1/(255*$),E=p/m,T=h/y,I=f/$,k=u,O=u*2;for(let v=0,M=0;v<u;v++,M+=4){let W=o[M],H=o[M+1],F=o[M+2];d[v]=W*S-E,d[k+v]=H*b-T,d[O+v]=F*w-I}return d}function fs(e,t,r,i){let n=i(t,r),a=n.getContext("2d"),s=a.createImageData(t,r),o=s.data,u=t*r;for(let d=0;d<u;d++){let p=e[d]||0,h=Math.round(p*255),f=d*4;o[f]=h,o[f+1]=h,o[f+2]=h,o[f+3]=255}return a.putImageData(s,0,0),n}var lr=class{options;debugging;session;platform;engine;lastDetectionCanvas=null;constructor(t,r,i={},n={},a="opencv"){this.platform=t,this.session=r,this.options={...ki,...i},this.debugging={...Ot,...n},a==="opencv"&&!this.platform.imageProcessor?this.engine="canvas-native":this.engine=a}log(t){this.debugging.verbose&&console.log(`[DetectionService] ${t}`)}async run(t){this.log("Starting text detection process");try{let r;this.platform.isCanvas(t)?r=t:this.engine==="opencv"&&this.platform.imageProcessor?r=await this.platform.imageProcessor.prepareCanvas(t):r=await this.platform.canvas.prepareCanvas(t);let i=await this.preprocessDetection(r),n=await this.runInference(i.tensor,i.width,i.height);if(!n)return console.error("Text detection failed (output tensor is null)"),[];let a=this.postprocessDetection(n,i);if(this.debugging.debug&&this.debugging.debugFolder&&this.lastDetectionCanvas)try{await this.debugDetectionCanvas(this.lastDetectionCanvas,i.width,i.height),await this.debugDetectedBoxes(r,a)}catch(s){this.log(`Debug dump failed: ${s instanceof Error?s.message:String(s)}`)}return this.log(`Detected ${a.length} text boxes in image`),a}catch(r){return console.error("Error during text detection:",r instanceof Error?r.message:String(r)),[]}}async preprocessDetection(t){let{width:r,height:i}=t,n=hg(this.options.maxSideLength??"auto",Math.max(r,i)),{width:a,height:s,ratio:o}=ur(r,i,n),u=Math.ceil(a/32)*32,d=Math.ceil(s/32)*32,p=this.platform.createCanvas(u,d);p.getContext("2d").drawImage(t,0,0,r,i,0,0,a,s);let f=this.options.mean??[.485,.456,.406],m=this.options.stdDeviation??[.229,.224,.225],y=gg(p,u,d,f,m);return this.log(`Detection preprocessed: original(${r}x${i}), model_input(${u}x${d}), resize_ratio: ${o.toFixed(4)}, engine: ${this.engine}`),{tensor:y,width:u,height:d,resizeRatio:o,originalWidth:r,originalHeight:i}}async runInference(t,r,i){let n;try{this.log("Running detection inference..."),n=new this.platform.ort.Tensor("float32",t,[1,3,i,r]);let a={x:n},o=(await this.session.run(a))[this.session.outputNames[0]||"sigmoid_0.tmp_0"];return this.log("Detection inference complete!"),o?o.data:(console.error(`Output tensor ${this.session.outputNames[0]} not found in detection results`),null)}catch(a){throw console.error("Error during model inference:",a instanceof Error?a.message:String(a)),a}finally{n?.dispose()}}postprocessDetection(t,r,i=this.options.minimumAreaThreshold??50,n=this.options.paddingVertical||.4,a=this.options.paddingHorizontal||.6){this.log("Post-processing detection results...");let{width:s,height:o,resizeRatio:u,originalWidth:d,originalHeight:p}=r;if(this.engine==="opencv"&&this.platform.imageProcessor)return this.lastDetectionCanvas=this.debugging.debug&&this.debugging.debugFolder?fs(t,s,o,this.platform.createCanvas.bind(this.platform)):null,this.postprocessWithOpenCV(t,s,o,u,d,p,i,n,a);let h=fs(t,s,o,this.platform.createCanvas.bind(this.platform));return this.lastDetectionCanvas=h,this.postprocessWithCanvasNative(h,u,d,p,i,n,a)}postprocessWithOpenCV(t,r,i,n,a,s,o,u,d){let p=this.platform.imageProcessor,h=new p.cv.Mat(i,r,p.cv.CV_8UC1),f=h.data,m=r*i;for(let $=0;$<m;$++){let S=t[$]||0;f[$]=Math.round(Math.min(Math.max(S,0),1)*255)}let y=new p.ImageProcessor(h);try{let $=new p.Contours(y.toMat(),{mode:p.cv.RETR_LIST,method:p.cv.CHAIN_APPROX_SIMPLE});try{let S=fg($,r,i,n,a,s,o,u,d);return this.log(`Found ${S.length} potential text boxes (opencv)`),S}finally{$.destroy()}}finally{y.destroy()}}postprocessWithCanvasNative(t,r,i,n,a,s,o){let d=this.platform.canvas.createProcessor(t).grayscale().threshold({thresh:0}).findRegions({foreground:"light",minArea:a,thresh:0,padding:{vertical:s,horizontal:o},scale:1/r}),p=mg(d,i,n);return this.log(`Found ${p.length} potential text boxes (canvas-native)`),p}async debugDetectionCanvas(t,r,i){let n=this.debugging.debugFolder??"";await this.platform.saveDebugImage(t,"detection-debug",n),this.log(`Probability map visualized and saved to: ${n}`)}async debugDetectedBoxes(t,r){let i=this.platform.isCanvas(t)?t:await this.platform.canvas.prepareCanvas(t),n=this.platform.createCanvas(i.width,i.height),a=n.getContext("2d");a.drawImage(i,0,0);for(let o of r){let{x:u,y:d,width:p,height:h}=o;this.platform.canvas.getToolkit().drawLine({ctx:a,x:u,y:d,width:p,height:h})}let s=this.debugging.debugFolder??"";await this.platform.saveDebugImage(n,"boxes-debug",s),this.log(`Boxes visualized and saved to: ${s}`)}};function yg(e){return e.reason instanceof Error?e.reason:new DOMException("The batch operation was aborted.","AbortError")}function db(e){if(Symbol.asyncIterator in e)return e[Symbol.asyncIterator]();let t=e[Symbol.iterator]();return{next:()=>Promise.resolve(t.next()),return:r=>Promise.resolve(t.return?.(r)??{done:!0,value:void 0})}}async function ms(e,t,r,i){let{settle:n,signal:a}=t,s=Math.max(1,Math.floor(t.concurrency));if(a?.aborted)throw yg(a);let o=0,u=0,d=!1,p=!1,h,f=Array.isArray(e)?e:null,m=f?null:db(e),y=Promise.resolve(),$=async()=>{let w=y,E;y=new Promise(T=>{E=T}),await w;try{return await m.next()}finally{E()}},S=()=>{d=!0};a?.addEventListener("abort",S,{once:!0});let b=async()=>{for(;!d;){let w,E;if(f){if(o>=f.length)return;E=o++,w=f[E]}else{let T=await $();if(T.done||d)return;E=o++,w=T.value}try{let T=await r(w,E);if(d)return;i({index:E,status:"fulfilled",value:T})}catch(T){if(n)i({index:E,status:"rejected",reason:T});else{d=!0,p=!0,h=T;return}}finally{u++,t.onProgress?.(u,t.total)}}};try{await Promise.all(Array.from({length:s},()=>b()))}finally{a?.removeEventListener("abort",S),await m?.return?.()}if(a?.aborted)throw yg(a);if(p)throw h}function _g(){let e=[],t=null,r=!1,i=null,n=()=>{let a=t;t=null,a?.()};return{push(a){e.push(a),n()},close(){r=!0,n()},fail(a){i={error:a},r=!0,n()},async*drain(){for(;;){for(;e.length>0;)yield e.shift();if(i)throw i.error;if(r)return;await new Promise(a=>{t=a})}}}}var pb=4;function gs(e,t){return typeof e=="number"&&e>0?Math.floor(e):(t??[]).some(i=>{let n=(typeof i=="string"?i:i.name).toLowerCase();return n!=="cpu"&&n!=="wasm"})?1:pb}async function wg(e,t,r,i){let n=e.canvas.getToolkit(),a=[];for(let[s,o]of r.entries()){let u=n.crop({bbox:{x0:o.x,y0:o.y,x1:o.x+o.width,y1:o.y+o.height},canvas:t});if(i.saveCropsTo&&e.saveImage){let d=`crop_${String(s).padStart(3,"0")}.png`;await e.saveImage(u,[i.saveCropsTo,d].join(e.pathSeparator))}i.crop&&a.push(await cb(u))}return a}async function cb(e){let t=e;if(typeof t.toBuffer=="function"){let r=t.toBuffer("image/png");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}if(typeof t.convertToBlob=="function")return(await t.convertToBlob({type:"image/png"})).arrayBuffer();if(typeof t.toBlob=="function"){let r=t.toBlob.bind(t);return(await new Promise((n,a)=>r(s=>s?n(s):a(new Error("Canvas toBlob() returned null")),"image/png"))).arrayBuffer()}throw new Error("Canvas cannot be encoded to a PNG buffer on this platform")}async function bg(e,t){let r=typeof t=="string"?await e.loadResource(t,t):t,i=Lr(new TextDecoder("utf-8").decode(r));if(i.length===0)throw new Error("Custom character dictionary is empty or could not be loaded.");return i}function vg(e){if(e.length===0)return{text:"",results:[],confidence:0};let t=e.map(i=>i.text).join(" "),r=e.reduce((i,n)=>i+n.confidence,0)/e.length;return{text:t,results:e,confidence:r}}function xg(e){if(e.length===0)return{text:"",lines:[],confidence:0};let t=[],r=[],i=e[0];if(!i)return{text:"",lines:[],confidence:0};let n=i.box.y,a=i.box.height;for(let d of e){let{box:p}=d;Math.abs(p.y-n)<a/2?(r.push(d),a=(a*(r.length-1)+p.height)/r.length):(r.sort((h,f)=>h.box.x-f.box.x),t.push(r),r=[d],n=p.y,a=p.height)}r.length>0&&(r.sort((d,p)=>d.box.x-p.box.x),t.push(r));let s=t.map(d=>d.map(p=>p.text).join(" ")).join(`
`),o=t.reduce((d,p)=>d+p.reduce((h,f)=>h+f.confidence,0),0),u=t.reduce((d,p)=>d+p.length,0);return{text:s,lines:t,confidence:u>0?o/u:0}}function ys(e){if(e.length===0)return[];let t=[...e].sort((o,u)=>o.box.y-u.box.y||o.box.x-u.box.x),r=[],i=t[0];if(!i)return[];let n=[i],a=i.box.height,s=i.box.height;for(let o=1;o<t.length;o++){let u=t[o],d=t[o-1];if(!u||!d)continue;let p=Math.abs(u.box.y-d.box.y),h=s*.5;p<=h?(n.push(u),a+=u.box.height,s=a/n.length):(n.sort((f,m)=>f.box.x-m.box.x),r.push(n),n=[u],a=u.box.height,s=u.box.height)}return n.length>0&&(n.sort((o,u)=>o.box.x-u.box.x),r.push(n)),r}var hb=4,$g=16384;function _s(e,t,r,i){let n=Math.min(...t.map(w=>w.box.x)),a=Math.min(...t.map(w=>w.box.y)),s=Math.max(...t.map(w=>w.box.x+w.box.width)),o=Math.max(...t.map(w=>w.box.y+w.box.height)),u={x:n,y:a,width:s-n,height:o-a},d=o-a,p=Math.max(1,Math.round(d*.4)),h=t.map(({box:w})=>Math.max(1,Math.round(w.width*Math.min(d/w.height,hb)))),f=h.reduce((w,E)=>w+E,0)+p*(t.length-1);if(f>$g){let w=$g/f;h=h.map(E=>Math.max(1,Math.round(E*w))),p=Math.max(1,Math.floor(p*w))}let m=h.reduce((w,E)=>w+E,0)+p*(t.length-1),y=r(m,d),$=y.getContext("2d");$.fillStyle="white",$.fillRect(0,0,m,d);let S=0,b=[];for(let w=0;w<t.length;w++){let E=t[w],T=h[w];if(!E||T===void 0)continue;let{box:I}=E,k=i.getToolkit().crop({bbox:{x0:I.x,y0:I.y,x1:I.x+I.width,y1:I.y+I.height},canvas:e});$.drawImage(k,0,0,I.width,I.height,S,0,T,d);let O=w<t.length-1?p:0;b.push(T+O),S+=T+O}return{mergedCanvas:y,mergedBox:u,cropWidths:b}}function ws(e,t,r){let i=[...e];if(t.length!==i.length||r.length===0)return mb(e,r);let n=r.reduce((u,d)=>u+d,0),a=r.map(()=>""),s=0,o=(r[0]??0)/n;for(let u=0;u<i.length;u++){let d=t[u]??0;for(;d>=o&&s<r.length-1;)s++,o+=(r[s]??0)/n;a[s]+=i[u]??""}return a}var fb=4;function mb(e,t){if(t.length===1)return[e];let r=t.reduce((o,u)=>o+u,0),i=[...e],n=i.length>0?r/i.length:0,a=[],s=0;for(let o=0;o<t.length;o++){if(o===t.length-1){a.push(i.slice(s).join(""));break}let u=Math.min(s+Math.round((t[o]??0)/n),i.length),d=u,p=!1;for(let h=0;h<=fb&&!p;h++)for(let f of[u-h,u+h]){let m=i[f];if(f>s&&f<i.length&&m!==void 0&&/\s/.test(m)){d=f,p=!0;break}}a.push(i.slice(s,d).join("")),s=p?d+1:d}return a}function Sg(e,t,r,i){let n=[...e].sort((o,u)=>t(u)-t(o)),a=[],s=[];for(let o of n){let u=!1;for(let d=0;d<a.length;d++){let p=a[d],h=s[d];if(p===void 0||h===void 0)continue;let f=i*p.length;if(h+f+t(o)<=r){p.push(o),s[d]=h+t(o),u=!0;break}}u||(a.push([o]),s.push(t(o)))}return a}var Ur=class{cache=new Map;maxSize;constructor(t=10){this.maxSize=t}get(t){let r=this.cache.get(t);if(r!==void 0)return this.cache.delete(t),this.cache.set(t,r),r}set(t,r){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){let i=this.cache.keys().next().value;i!==void 0&&this.cache.delete(i)}this.cache.set(t,r)}clear(){this.cache.clear()}static generateKey(t){let r=new Uint8Array(t);if(r.length===0)return"0_0";let i=Math.min(r.length,gb),n=r.length-1,a=0;for(let s=0;s<i;s++){let o=i===1?0:Math.round(s*n/(i-1));a=(a<<5)-a+(r[o]??0),a=a&a}return`${a}_${r.length}`}},gb=4096,Eg=new WeakMap,yb=1;function Wr(e){if(!e)return"none";let t=Eg.get(e);return t===void 0&&(t=yb++,Eg.set(e,t)),String(t)}var bs=new Ur;function $s(e){return!!(e?.noCache||e?.dictionary||e?.strategy!==void 0||e?.minimumConfidence!==void 0||e?.spaceRecovery!==void 0||e?.rotateVerticalCrops!==void 0||e?.recBatchSize!==void 0)}var _b="Invalid image string format. Must be an HTTP URL, an absolute path, ArrayBuffer, or Canvas";async function Tg(e,t){if(!t.startsWith("http")&&!t.startsWith("/"))throw new Error(_b);return e.loadResource(t,t)}async function Ig(e,t){if(typeof t=="string")return Tg(e,t);if(t instanceof ArrayBuffer)return t;if(typeof t.toBuffer=="function"){let o=t.toBuffer("image/png");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let r=t,a=r.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,r.width,r.height).data;return a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)}async function vs(e,t){return typeof t=="string"?e.canvas.prepareCanvas(await Tg(e,t)):t instanceof ArrayBuffer?e.canvas.prepareCanvas(t):t}var wb=.2,Cg=.02;function Og(e,t){let[r,i,n,a]=t;if(t.length!==4||r!==1||i!==2||n===void 0||a===void 0||n<2||a<2)throw new Error(`Unwarping model returned shape [${t.join(", ")}], expected [1, 2, rows, columns]. The model must output the deformation grid, not a corrected image.`);let s=n*a,o=new Float32Array(s),u=new Float32Array(s);for(let d=0;d<s;d++)o[d]=(e[d]+1)/2,u[d]=(e[s+d]+1)/2;return{columns:a,rows:n,x:o,y:u}}function xs(e,t,r){let{columns:i,rows:n,x:a,y:s}=e,o=t*(i-1),u=r*(n-1),d=Math.min(i-2,Math.max(0,Math.floor(o))),p=Math.min(n-2,Math.max(0,Math.floor(u))),h=o-d,f=u-p,m=p*i+d,y=m+i,$=S=>(S[m]*(1-h)+S[m+1]*h)*(1-f)+(S[y]*(1-h)+S[y+1]*h)*f;return{x:$(a),y:$(s)}}function Ss(e,t){let{columns:r,rows:i,x:n,y:a}=e,s=t.width-1,o=t.height-1,u=new Float64Array(i);for(let p=0;p<i;p++){let h=0;for(let f=1;f<r;f++){let m=p*r+f;h+=Math.hypot((n[m]-n[m-1])*s,(a[m]-a[m-1])*o)}u[p]=h}let d=new Float64Array(r);for(let p=0;p<r;p++){let h=0;for(let f=1;f<i;f++){let m=f*r+p;h+=Math.hypot((n[m]-n[m-r])*s,(a[m]-a[m-r])*o)}d[p]=h}return{width:Math.max(1,Math.round(kg(u))+1),height:Math.max(1,Math.round(kg(d))+1)}}function Es(e){return bb(e)?"folded":$b(e)>wb?"out-of-frame":null}function Ts(e,t){let{columns:r,rows:i,x:n,y:a}=e,s=t.width-1,o=t.height-1,u=0,d=0;for(let p=0;p<i;p++)for(let h=0;h<r;h++){let f=p*r+h;if(h>0){let m=Math.atan2((a[f]-a[f-1])*o,(n[f]-n[f-1])*s);u+=m*m,d++}if(p>0){let m=Math.atan2((n[f]-n[f-r])*s,(a[f]-a[f-r])*o);u+=m*m,d++}}return Math.sqrt(u/d)*180/Math.PI}function zg(e,t){let r=t.x.length,i=new Float32Array(r),n=new Float32Array(r);for(let a=0;a<r;a++){let s=xs(e,t.x[a],t.y[a]);i[a]=s.x,n[a]=s.y}return{columns:t.columns,rows:t.rows,x:i,y:n}}function bb(e){let{columns:t,rows:r,x:i,y:n}=e,a=(s,o,u)=>(i[o]-i[s])*(n[u]-n[s])-(n[o]-n[s])*(i[u]-i[s]);for(let s=0;s<r-1;s++)for(let o=0;o<t-1;o++){let u=s*t+o,d=u+1,p=u+t,h=p+1;if(a(u,d,p)<=0||a(h,p,d)<=0)return!0}return!1}function $b(e){let{x:t,y:r}=e,i=-Cg,n=1+Cg,a=0;for(let s=0;s<t.length;s++)(t[s]<i||t[s]>n||r[s]<i||r[s]>n)&&a++;return a/t.length}function kg(e){let t=Float64Array.from(e).sort(),r=t.length>>1;return t.length%2===1?t[r]:(t[r-1]+t[r])/2}var Xt=488,Qt=712,vb=3;function Is(e,t,r){let i=Xt*Qt,n=new Float32Array(vb*i),a=Xt>1?(t-1)/(Xt-1):0,s=Qt>1?(r-1)/(Qt-1):0,o=t-1,u=r-1,d=i,p=i*2,h=1/255;for(let f=0,m=0;f<Qt;f++){let y=f*s,$=Math.min(u,Math.floor(y)),S=Math.min(u,$+1),b=y-$,w=$*t*4,E=S*t*4;for(let T=0;T<Xt;T++,m++){let I=T*a,k=Math.min(o,Math.floor(I)),O=Math.min(o,k+1),v=I-k,M=(1-v)*(1-b)*h,W=v*(1-b)*h,H=(1-v)*b*h,F=v*b*h,U=w+k*4,q=w+O*4,z=E+k*4,V=E+O*4;n[m]=e[U+2]*M+e[q+2]*W+e[z+2]*H+e[V+2]*F,n[d+m]=e[U+1]*M+e[q+1]*W+e[z+1]*H+e[V+1]*F,n[p+m]=e[U]*M+e[q]*W+e[z]*H+e[V]*F}}return n}function Ag(e,t,r){let i=t.width-1,n=t.height-1,a=[],s=[],o=[];for(let d=0;d<r.x.length;d++){let p=Math.round(r.x[d]*i),h=Math.round(r.y[d]*n);if(p<0||h<0||p>i||h>n)continue;let f=(h*t.width+p)*4;a.push(e[f]),s.push(e[f+1]),o.push(e[f+2])}if(a.length===0)return[255,255,255];let u=d=>d.sort((p,h)=>p-h)[d.length>>1];return[u(a),u(s),u(o)]}function Cs(e,t,r,i,n){let{columns:a,rows:s,x:o,y:u}=r,{width:d,height:p}=t,{width:h,height:f}=i,m=new Uint8ClampedArray(h*f*4),y=new Uint32Array(m.buffer);m[0]=n[0],m[1]=n[1],m[2]=n[2],m[3]=255;let $=y[0],S=d-1,b=p-1,w=d*4,E=new Float64Array(a),T=new Float64Array(a),I=new Int32Array(a),k=h>1?(a-1)/(h-1):0;for(let v=1;v<a;v++)I[v]=v===a-1||k===0?h:Math.min(h,Math.ceil(v/k-1e-9));let O=f>1?(s-1)/(f-1):0;for(let v=0;v<f;v++){let M=v*O,W=Math.min(s-2,Math.floor(M)),H=M-W,F=W*a,U=F+a;for(let z=0;z<a;z++)E[z]=(o[F+z]*(1-H)+o[U+z]*H)*S,T[z]=(u[F+z]*(1-H)+u[U+z]*H)*b;let q=v*h;for(let z=0;z<a-1;z++){let V=I[z],P=I[z+1];if(V>=P)continue;let se=(E[z+1]-E[z])*k,ee=(T[z+1]-T[z])*k,re=V*k-z,N=E[z]+(E[z+1]-E[z])*re,K=T[z]+(T[z+1]-T[z])*re;for(let j=V;j<P;j++,N+=se,K+=ee){if(N<0||K<0||N>S||K>b){y[q+j]=$;continue}let Z=N|0,_e=K|0,De=N-Z,ke=K-_e,$e=_e*w+Z*4,Ee=Z<S?$e+4:$e,Le=_e<b?$e+w:$e,xe=Z<S?Le+4:Le,be=(1-De)*(1-ke),Be=De*(1-ke),Ue=(1-De)*ke,we=De*ke,gt=(q+j)*4;m[gt]=e[$e]*be+e[Ee]*Be+e[Le]*Ue+e[xe]*we,m[gt+1]=e[$e+1]*be+e[Ee+1]*Be+e[Le+1]*Ue+e[xe+1]*we,m[gt+2]=e[$e+2]*be+e[Ee+2]*Be+e[Le+2]*Ue+e[xe+2]*we,m[gt+3]=255}}}return m}var Os=class{grid;page;source;constructor(t,r,i){this.grid=t,this.page=r,this.source=i}pointToSource(t,r){let i=this.page.width>1?t/(this.page.width-1):0,n=this.page.height>1?r/(this.page.height-1):0,a=xs(this.grid,i,n);return{x:a.x*(this.source.width-1),y:a.y*(this.source.height-1)}}itemsToSource(t){return t.map(r=>({...r,box:this.boxToSource(r.box)}))}boxToSource(t){let r=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(let[u,d]of Eb){let p=this.pointToSource(t.x+t.width*u,t.y+t.height*d);p.x<r&&(r=p.x),p.x>n&&(n=p.x),p.y<i&&(i=p.y),p.y>a&&(a=p.y)}let s=Math.max(0,Math.floor(r+Ai)),o=Math.max(0,Math.floor(i+Ai));return{x:s,y:o,width:Math.max(0,Math.min(this.source.width,Math.ceil(n-Ai))-s),height:Math.max(0,Math.min(this.source.height,Math.ceil(a-Ai))-o)}}},Ri=class{platform;session;debugging;constructor(t,r,i={}){this.platform=t,this.session=r,this.debugging={...Ot,...i}}log(t){this.debugging.verbose&&console.log(`[UnwarpingService] ${t}`)}async run(t,r){let i={width:t.width,height:t.height},n=this.buildWorkCanvas(t,r),a={width:n.width,height:n.height},s=n.getContext("2d").getImageData(0,0,n.width,n.height).data,o=await this.predictGrid(Is(s,a.width,a.height)),u=Es(o);if(u)return this.skipped(t,u);let d=Ts(o,a);if(d<xb)return this.skipped(t,"flat");let p=Ag(s,a,o),h=Cs(s,a,o,ks,p),f=await this.predictGrid(Is(h,ks.width,ks.height)),m=Ts(f,Ss(o,a));if(this.log(`Distortion ${d.toFixed(2)} deg, ${m.toFixed(2)} deg after one step`),m>Sb*d)return this.skipped(t,"no-gain");let y=zg(o,f),$=Es(y)===null?y:o,S=Ss($,a),b=Cs(s,a,$,S,p),w=this.platform.createCanvas(S.width,S.height),E=w.getContext("2d"),T=E.createImageData(S.width,S.height);if(T.data.set(b),E.putImageData(T,0,0),this.log(`Unwarped ${i.width}x${i.height} photo to ${S.width}x${S.height} page`),this.debugging.debug&&this.debugging.debugFolder)try{await this.platform.saveDebugImage(w,"unwarped-debug",this.debugging.debugFolder)}catch(I){this.log(`Debug dump failed: ${I instanceof Error?I.message:String(I)}`)}return{status:"unwarped",canvas:w,mapping:new Os($,S,i)}}skipped(t,r){return this.log(`Skipped: ${r}`),{status:"skipped",reason:r,canvas:t}}buildWorkCanvas(t,r){if(r===void 0)return t;let{width:i,height:n,ratio:a}=ur(t.width,t.height,r);if(a===1)return t;let s=this.platform.createCanvas(i,n);return s.getContext("2d").drawImage(t,0,0,t.width,t.height,0,0,i,n),s}async predictGrid(t){let r=this.session.inputNames[0],i=this.session.outputNames[0];if(r===void 0||i===void 0)throw new Error("Unwarping model declares no input or no output.");let n=new this.platform.ort.Tensor("float32",t,[1,3,Qt,Xt]);try{let s=(await this.session.run({[r]:n}))[i];if(!s||!(s.data instanceof Float32Array))throw new Error(`Unwarping model output "${i}" is missing or not float32.`);let o=Og(s.data,s.dims);return s.dispose(),o}finally{n.dispose()}}},xb=1,Sb=.95,Ai=.001,ks={width:Xt,height:Qt},Eb=[[0,0],[.5,0],[1,0],[1,.5],[1,1],[.5,1],[0,1],[0,.5]];var Mi=class{options=Pr;detectionSession=null;recognitionSession=null;detector=null;recognitor=null;unwarpingSession=null;unwarper=null;platform;constructor(t,r){this.platform=t,this.options=zi({},Pr,r),this.options.session=this.options.session||Pr.session}log(t){this.options.debugging?.verbose&&console.log(`[PaddleOcrService:Base] ${t}`)}isInitialized(){return this.detectionSession!==null&&this.recognitionSession!==null&&(!this.options.unwarping?.enabled||this.unwarpingSession!==null)}async destroy(){await this.detectionSession?.release(),await this.recognitionSession?.release(),await this.unwarpingSession?.release(),this.detectionSession=null,this.recognitionSession=null,this.unwarpingSession=null,this.detector=null,this.recognitor=null,this.unwarper=null}async initializeUnwarping(t,r){if(!this.options.unwarping?.enabled)return;let i=await t(this.options.model?.unwarping,pn);this.unwarpingSession=await r(new Uint8Array(i)),this.unwarper=new Ri(this.platform,this.unwarpingSession,this.options.debugging),this.log(`Unwarping ONNX model loaded successfully
	input: ${this.unwarpingSession.inputNames}
	output: ${this.unwarpingSession.outputNames}`)}async unwarp(t){return this.requireUnwarper().run(await vs(this.platform,t))}requireUnwarper(){if(!this.unwarper)throw new Error("Unwarping is not available on this service. Construct it with `unwarping: { enabled: true }` and call initialize().");return this.unwarper}async runUnwarping(t,r){return this.wantsUnwarping(r)?this.requireUnwarper().run(t,this.options.recognition?.maxCropSourceSideLength):null}wantsUnwarping(t){return t??this.options.unwarping?.enabled??!1}cacheKeyFor(t,r){return[Ur.generateKey(t),Wr(this.detectionSession),Wr(this.recognitionSession),Wr(this.options.recognition?.charactersDictionary),r?Wr(this.unwarpingSession):"plain"].join("|")}async recognize(t,r){(!this.detector||!this.recognitor)&&await this.initSessions();try{let i=await Ig(this.platform,t),n=this.cacheKeyFor(i,this.wantsUnwarping(r?.unwarp));if(!$s(r)){let b=bs.get(n);if(b)return this.log("Using cached OCR result"),r?.flatten?{text:b.text,results:b.lines.flat(),confidence:b.confidence}:b}let a=typeof t=="string"||t instanceof ArrayBuffer?await this.platform.canvas.prepareCanvas(i):t,s=await this.runUnwarping(a,r?.unwarp),o=s?s.canvas:a,u=await this.detector.run(o);if(u.length===0)return r?.flatten?{text:"",results:[],confidence:0}:{text:"",lines:[],confidence:0};let d=r?.dictionary?await bg(this.platform,r.dictionary):this.options.recognition?.charactersDictionary,p=r?.strategy??this.options.recognition?.strategy??"per-line",h=await this.recognitor.run(o,u,d,p,r),f=s?.status==="unwarped"?s.mapping:null,m=xg(h),y=b=>f?f.itemsToSource(b):b,$={...m,lines:m.lines.map(y)};if($s(r)||bs.set(n,$),!r?.flatten)return $;let S=vg(h);return{...S,results:y(S.results)}}catch(i){if(this.options.debugging?.verbose){let n=i instanceof Error?i:new Error(String(i));console.error("recognize: error",n.message,n.stack)}throw i}}async detect(t,r){this.detector||await this.initSessions();let{crop:i,saveCropsTo:n,unwarp:a,...s}=r??{},o=Object.keys(s).length>0?new lr(this.platform,this.detectionSession,{...this.options.detection,...s},this.options.debugging,this.options.processing?.engine??Oi):this.detector,u=await vs(this.platform,t),d=await this.runUnwarping(u,a),p=d?d.canvas:u,h=d?.status==="unwarped"?d.mapping:null,f=(await o.run(p)).filter($=>$.width>0&&$.height>0),m=h?f.map($=>h.boxToSource($)):f;if(!i&&!n)return{boxes:m};let y=await wg(this.platform,p,f,{crop:i,saveCropsTo:n});return i?{boxes:m,crops:y}:{boxes:m}}async batchRecognize(t,r){let i=r?.settle??!1,n=[];return await ms(t,{concurrency:gs(r?.concurrency,this.options.session?.executionProviders),settle:i,signal:r?.signal,onProgress:r?.onProgress,total:Array.isArray(t)?t.length:void 0},a=>this.recognize(a,r),a=>{n[a.index]=a}),i?n:n.map(a=>a.status==="fulfilled"?a.value:void 0)}async*batchRecognizeStream(t,r){let i=_g(),n=(async()=>{try{await ms(t,{concurrency:gs(r?.concurrency,this.options.session?.executionProviders),settle:r?.settle??!1,signal:r?.signal,onProgress:r?.onProgress,total:Array.isArray(t)?t.length:void 0},a=>this.recognize(a,r),a=>i.push(a)),i.close()}catch(a){i.fail(a)}})();yield*i.drain(),await n}};var Rg=new Set(["cpu","wasm"]);function Tb(e){return typeof e=="string"?e:e.name}async function Mg(e,t,r,i,n){let{onSessionFallback:a,...s}=r??{};try{return await e.InferenceSession.create(t,s)}catch(o){let d=(s.executionProviders??[]).map(Tb);if(d.every(S=>Rg.has(S))||d.length===0)throw o;let f=d.find(S=>Rg.has(S))??(d.includes("wasm")?"wasm":"cpu"),m=o instanceof Error?o.message:String(o);i(`executionProviders=${JSON.stringify(d)} failed (${m}); falling back to ["${f}"].`);let y={...s,executionProviders:[f]};n?.({...y,onSessionFallback:a});let $=await e.InferenceSession.create(t,y);return a?.(o),$}}var zs=null;function As(e){zs=e}function Pe(){if(!zs)throw new Error('No canvas platform registered. Import "ppu-ocv" (Node), "ppu-ocv/web" (browser), "ppu-ocv/canvas" (Node canvas-only), "ppu-ocv/canvas-web" (browser canvas-only), or "ppu-ocv/canvas-mobile" (React Native / Skia) to auto-register.');return zs}function Dg(e){return typeof e=="object"&&e!==null&&typeof e.getContext=="function"&&typeof e.width=="number"&&typeof e.height=="number"}var Di={createCanvas(e,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(e,t);if(typeof document<"u"){let r=document.createElement("canvas");return r.width=e,r.height=t,r}throw new Error("No canvas implementation available in this environment.")},async loadImage(e){let t;if(e instanceof ArrayBuffer)t=new Blob([e]);else if(typeof e=="string")t=await(await fetch(e)).blob();else throw new Error("loadImage: unsupported source type");let r=await createImageBitmap(t),i=Di.createCanvas(r.width,r.height);return i.getContext("2d").drawImage(r,0,0),r.close(),i},isCanvas(e){return typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}};var dr=class e{static _baseInstance=null;step=0;constructor(){}static getInstance(){return e._baseInstance||(e._baseInstance=new e),e._baseInstance}crop(t){let{bbox:r,canvas:i}=t,n=Pe().createCanvas(r.x1-r.x0,r.y1-r.y0);return n.getContext("2d").drawImage(i,r.x0,r.y0,r.x1-r.x0,r.y1-r.y0,0,0,n.width,n.height),n}isDirty(t){let{canvas:r,threshold:i=127.5,majorColorThreshold:n=.97}=t,a=0,s=0,o=this.crop({bbox:{x0:r.width*.1,y0:r.height*.1,x1:r.width*.9,y1:r.height*.9},canvas:r}),d=o.getContext("2d").getImageData(0,0,o.width,o.height).data;for(let h=0;h<d.length;h+=4){let f=d[h],m=d[h+1],y=d[h+2];f>=i&&m>=i&&y>=i?a++:s++}return Math.max(a,s)/(s+a)<n}drawLine(t){let{ctx:r,x:i,y:n,width:a,height:s,lineWidth:o=2,color:u="blue"}=t;r.beginPath(),r.strokeStyle=u,r.lineWidth=o,r.strokeRect(i,n,a,s),r.closePath()}drawContour(t){let{ctx:r,contour:i,strokeStyle:n="red",lineWidth:a=2}=t,s=i.data32S;if(!(s.length<4)){r.strokeStyle=n,r.lineWidth=a,r.beginPath(),r.moveTo(s[0]??0,s[1]??0);for(let o=2;o<s.length;o+=2)r.lineTo(s[o]??0,s[o+1]??0);r.closePath(),r.stroke()}}};async function Bg(e){return Dg(e)?e:Pe().loadImage(e)}async function Ng(e){if(e instanceof ArrayBuffer)return e;if(typeof e.toBuffer=="function"){let a=e.toBuffer("image/png"),s=new ArrayBuffer(a.byteLength);return new Uint8Array(s).set(new Uint8Array(a)),s}let t=e.toBlob;if(typeof t=="function")return(await new Promise((s,o)=>{t.call(e,u=>u?s(u):o(new Error("toBlob returned null")),"image/png")})).arrayBuffer();if(typeof e.convertToBlob=="function")return(await e.convertToBlob({type:"image/png"})).arrayBuffer();if(typeof e.toDataURL=="function"){let s=e.toDataURL("image/png").replace(/^data:image\/png;base64,/,""),o=atob(s),u=new ArrayBuffer(o.length),d=new Uint8Array(u);for(let p=0;p<o.length;p++)d[p]=o.charCodeAt(p);return u}let i=e.getContext("2d").getImageData(0,0,e.width,e.height),n=new ArrayBuffer(i.data.byteLength);return new Uint8Array(n).set(new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.byteLength)),n}function Pg(e,t,r,i={}){let{foreground:n="light",thresh:a=127,minArea:s=1,maxArea:o=1/0,padding:u,scale:d=1}=i,p=new Uint8Array(t*r),h=[],f=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],m=y=>{let $=e[y]??0;return n==="light"?$>a:$<=a};for(let y=0;y<r;y++)for(let $=0;$<t;$++){let S=y*t+$;if(p[S]||(p[S]=1,!m(S*4)))continue;let b=[S],w=$,E=$,T=y,I=y,k=0;for(;b.length>0;){let O=b.pop();if(O===void 0)break;k++;let v=O%t,M=(O-v)/t;v<w?w=v:v>E&&(E=v),M<T?T=M:M>I&&(I=M);for(let[W,H]of f){let F=v+W,U=M+H;if(F<0||F>=t||U<0||U>=r)continue;let q=U*t+F;p[q]||(p[q]=1,m(q*4)&&b.push(q))}}if(k>=s&&k<=o){let O=w,v=T,M=E+1,W=I+1;if(u){let H=W-v,F=Math.round(H*(u.vertical??0)),U=Math.round(H*(u.horizontal??0));O=Math.max(0,O-U),v=Math.max(0,v-F),M=Math.min(t,M+U),W=Math.min(r,W+F)}d!==1&&(O=Math.max(0,Math.round(O*d)),v=Math.max(0,Math.round(v*d)),M=Math.round(M*d),W=Math.round(W*d)),h.push({bbox:{x0:O,y0:v,x1:M,y1:W},area:k})}}return h}var pr=class{_canvas;constructor(t){this._canvas=t}get width(){return this._canvas.width}get height(){return this._canvas.height}resize(t){let{width:r,height:i}=t,n=Pe().createCanvas(r,i);return n.getContext("2d").drawImage(this._canvas,0,0,r,i),this._canvas=n,this}grayscale(){let{width:t,height:r}=this._canvas,i=this._canvas.getContext("2d").getImageData(0,0,t,r),n=i.data;for(let s=0;s<n.length;s+=4){let o=Math.round(.299*(n[s]??0)+.587*(n[s+1]??0)+.114*(n[s+2]??0));n[s]=o,n[s+1]=o,n[s+2]=o}let a=Pe().createCanvas(t,r);return a.getContext("2d").putImageData(i,0,0),this._canvas=a,this}convert(t={}){let{alpha:r=1,beta:i=0}=t;if(r===1&&i===0)return this;let{width:n,height:a}=this._canvas,s=this._canvas.getContext("2d").getImageData(0,0,n,a),o=s.data;for(let d=0;d<o.length;d+=4)o[d]=Math.round((o[d]??0)*r+i),o[d+1]=Math.round((o[d+1]??0)*r+i),o[d+2]=Math.round((o[d+2]??0)*r+i);let u=Pe().createCanvas(n,a);return u.getContext("2d").putImageData(s,0,0),this._canvas=u,this}invert(){let{width:t,height:r}=this._canvas,i=this._canvas.getContext("2d").getImageData(0,0,t,r),n=i.data;for(let s=0;s<n.length;s+=4)n[s]=255-(n[s]??0),n[s+1]=255-(n[s+1]??0),n[s+2]=255-(n[s+2]??0);let a=Pe().createCanvas(t,r);return a.getContext("2d").putImageData(i,0,0),this._canvas=a,this}threshold(t={}){let{thresh:r=127,maxValue:i=255}=t,{width:n,height:a}=this._canvas,s=this._canvas.getContext("2d").getImageData(0,0,n,a),o=s.data;for(let d=0;d<o.length;d+=4){let h=(o[d]===o[d+1]&&o[d+1]===o[d+2]?o[d]??0:Math.round(.299*(o[d]??0)+.587*(o[d+1]??0)+.114*(o[d+2]??0)))>r?i:0;o[d]=h,o[d+1]=h,o[d+2]=h}let u=Pe().createCanvas(n,a);return u.getContext("2d").putImageData(s,0,0),this._canvas=u,this}border(t={}){let{size:r=10,color:i="white"}=t,{width:n,height:a}=this._canvas,s=Pe().createCanvas(n+r*2,a+r*2),o=s.getContext("2d");return o.fillStyle=i,o.fillRect(0,0,s.width,s.height),o.drawImage(this._canvas,r,r),this._canvas=s,this}rotate(t){let{angle:r,cx:i=this._canvas.width/2,cy:n=this._canvas.height/2}=t;if(r===0)return this;let{width:a,height:s}=this._canvas,o=Pe().createCanvas(a,s),u=o.getContext("2d");return u.save(),u.translate(i,n),u.rotate(-r*Math.PI/180),u.drawImage(this._canvas,-i,-n),u.restore(),this._canvas=o,this}findRegions(t={}){let{width:r,height:i}=this._canvas,n=this._canvas.getContext("2d").getImageData(0,0,r,i).data;return Pg(n,r,i,t)}toCanvas(){return this._canvas}static async prepareCanvas(t){return Bg(t)}static async prepareBuffer(t){return Ng(t)}};As(Di);var zt=class{pathSeparator="/";ort=or;createCanvas(t,r){let i=Pe().createCanvas(t,r);return i.getContext.bind(i)("2d",{willReadFrequently:!0}),i}isCanvas(t){return!!t&&typeof t.getContext=="function"}async loadResource(t,r){if(t instanceof ArrayBuffer)return t;let i=typeof t=="string"?t:r,n=await fetch(i,{referrerPolicy:"no-referrer"});if(!n.ok)throw new Error(`Failed to fetch resource from ${i}`);return n.arrayBuffer()}async saveDebugImage(t,r,i){return Promise.resolve()}canvas={prepareCanvas:t=>pr.prepareCanvas(t),createProcessor:t=>new pr(t),getToolkit:()=>dr.getInstance()}};function Ib(){return`https://cdn.jsdelivr.net/npm/onnxruntime-web@${pe.versions.web??pe.versions.common}/dist/`}function Bi(){return typeof globalThis.WorkerGlobalScope=="function"}function Cb(){!(typeof window<"u"||Bi())||pe.wasm.wasmPaths||(pe.wasm.wasmPaths=Ib())}Cb();async function Lg(){if(typeof navigator>"u")return!1;let e=navigator;if(!e.gpu||typeof e.gpu.requestAdapter!="function")return!1;try{let t=await e.gpu.requestAdapter();return t!=null}catch{return!1}}async function Rs(){return await Lg()?["webgpu","wasm"]:["wasm"]}var cr=class extends lr{constructor(t,r={},i={}){super(new zt,t,r,i,"canvas-native")}};var kb=0,Ob="<unk>",Vr=8,zb=1.5,Ab=2.5;function Ug(e){return/\p{L}/u.test(e)?0:/\p{N}/u.test(e)?1:2}function Rb(e,t){if(e.length<4)return;let r=[];for(let s=1;s<t.length;s++)r.push((t[s]??0)-(t[s-1]??0));let i=[...r].sort((s,o)=>s-o),n=i[Math.floor(i.length/2)]??0;if(n<=0)return;let a=i.find(s=>s>0)??0;if(!(a<=0))for(let s=e.length-1;s>=1;s--){let o=t[s-1]??0,u=t[s]??0,d=Ug(e[s]??"")===Ug(e[s-1]??"")?Ab:zb;u-o>n+d*a&&e[s]!==" "&&e[s-1]!==" "&&e[s]!==e[s-1]&&(e.splice(s,0," "),t.splice(s,0,(o+u)/2))}}var Mb=65248,Db=/[\u2E80-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]/;function Bb(e,t){for(let r=e.length-1;r>=1;r--)e[r]===" "&&e[r-1]===" "&&(e.splice(r,1),t.splice(r,1));if(!Db.test(e.join("")))for(let r=0;r<e.length;r++){let i=e[r]?.codePointAt(0)??0;i>=65281&&i<=65374?e[r]=String.fromCodePoint(i-Mb):i===12288&&(e[r]=" ")}}function Wg(e,t,r,i,n=!1){let a=i.length,s=a-1,o=[],u=-1,d=0,p=0,h=[];for(let m=0;m<t;m++){let y=m*r,$=e[y],S=0;for(let b=1;b<r;b++){let w=e[y+b];w>$&&($=w,S=b)}if(S===kb||S===u){u=S;continue}if(S>=0&&S<a){n&&S!==s&&(e[y+s]??0)>.001&&o[o.length-1]!==" "&&(o.push(" "),h.push((m+.5)/t));let b=i[S]??"";S===s?b!==Ob&&(o.push(" "),d+=$,p++,h.push((m+.5)/t)):(o.push(b),d+=$,p++,h.push((m+.5)/t))}u=S}Rb(o,h),Bb(o,h);let f=p>0?d/p:0;return{text:o.join(""),confidence:f,positions:h}}function Nb(e){let t=e.length;for(;t>0&&e[t-1]==="";)t--;return e.slice(0,t)}function Vg(e,t){if(e.length===t)return e;let r=Nb(e);if(r.length===t)return r;let i=["",...r[0]===""?r.slice(1):r];return i.length===t-1&&i.push(""),i}function qg(e,t,r,i=!1,n=!1){let a=e.data,s=e.dims,o=s[1],u=s[2]??r;if(!t)return{text:"",confidence:0,positions:[]};let d=Vg(t,u);return d.length!==u&&i&&console.warn(`Warning: Model output classes (${u}) does not match dictionary length (${t.length}).
 Consider using our model & dictionary catalogue at https://github.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models.`),Wg(a,o,u,d,n)}function Gg(e,t,r,i,n=!1){let a=Vg(i,r);return Wg(e,t,r,a,n)}async function Ni(e,t,r,i){let n=e.width,a=e.height;if(a===0||n===0)throw new Error(`Crop dimensions are zero: ${n}x${a}`);let s=n/a,o=Math.max(Vr,Math.round(t*s));if(r){let p=new r.ImageProcessor(e);try{p.resize({width:o,height:t});let h=p.toMat();return h.isContinuous()&&(h.channels()===4||h.channels()===1)?{imageTensor:Lb(h,o,t),tensorWidth:o,tensorHeight:t}:{imageTensor:Fg(p.toCanvas(),o,t),tensorWidth:o,tensorHeight:t}}finally{p.destroy()}}let u=i(e).resize({width:o,height:t});return{imageTensor:Pb(u,o,t),tensorWidth:o,tensorHeight:t}}function Pb(e,t,r){let i=e.toCanvas();return Fg(i,t,r)}function Fg(e,t,r){let a=e.getContext("2d").getImageData(0,0,t,r).data,s=r*t,o=new Float32Array(3*s),u=1/127.5;for(let d=0,p=0;d<s;d++,p+=4)o[d]=(a[p]??0)*u-1;return o.copyWithin(s,0,s),o.copyWithin(s*2,0,s),o}function Lb(e,t,r){let i=e.channels(),n=e.data,a=r*t,s=new Float32Array(3*a),o=1/127.5;for(let u=0,d=0;u<a;u++,d+=i)s[u]=n[d]*o-1;return s.copyWithin(a,0,a),s.copyWithin(a*2,0,a),s}async function qr(e,t,r){let i=t.options.imageHeight??48,n=Math.max(1,t.options.recBatchSize??6),a=r??t.options.charactersDictionary??[],s=t.options.spaceRecovery??!1,o=t.engine==="opencv"?t.platform.imageProcessor:void 0,u=await Promise.all(e.map(h=>Ni(h,i,o,t.platform.canvas.createProcessor.bind(t.platform.canvas)))),d=u.map((h,f)=>f).sort((h,f)=>{let m=u[h]?.tensorWidth??0,y=u[f]?.tensorWidth??0;return m-y}),p=Array.from({length:e.length});for(let h=0;h<d.length;h+=n){let f=d.slice(h,h+n),m=Math.max(...f.map(b=>u[b]?.tensorWidth??1)),y=i*m,$=new Float32Array(f.length*3*y);f.forEach((b,w)=>{let E=u[b];if(!E)return;let T=w*3*y;for(let I=0;I<3;I++)for(let k=0;k<i;k++){let O=(I*i+k)*E.tensorWidth,v=T+(I*i+k)*m;$.set(E.imageTensor.subarray(O,O+E.tensorWidth),v);let M=E.imageTensor[O+E.tensorWidth-1]??0;$.fill(M,v+E.tensorWidth,v+m)}});let S;try{S=new t.platform.ort.Tensor("float32",$,[f.length,3,i,m]);let b=await t.runInference(S),[,w,E]=b.dims,T=b.data,I=(w??0)*(E??0);f.forEach((k,O)=>{let v=(u[k]?.tensorWidth??m)/m,M=Math.max(1,Math.min(w??0,Math.ceil((w??0)*v)));p[k]=Gg(T.subarray(O*I,O*I+M*(E??0)),M,E??0,a,s)})}finally{S?.dispose()}}return p}function Hg(e){let r=e.inputMetadata?.[0]?.shape?.[0];return typeof r!="number"||r<0}function Li(e,t){if(!(t.options.rotateVerticalCrops??!0)||e.height/e.width<1.5)return e;let r=t.platform.createCanvas(e.height,e.width),i=r.getContext("2d");return i.translate(0,e.width),i.rotate(-Math.PI/2),i.drawImage(e,0,0),r}function Gr(e,t,r){return r.getToolkit().crop({bbox:{x0:t.x,y0:t.y,x1:t.x+t.width,y1:t.y+t.height},canvas:e})}async function Ub(e,t,r){let i=t.options.imageHeight??48,n=t.engine==="opencv"?t.platform.imageProcessor:void 0,{imageTensor:a,tensorWidth:s,tensorHeight:o}=await Ni(e,i,n,t.platform.canvas.createProcessor.bind(t.platform.canvas)),u;try{u=new t.platform.ort.Tensor("float32",a,[1,3,o,s]);let d=await t.runInference(u),p=r??t.options.charactersDictionary??[];return qg(d,p,s,t.debugging.verbose)}finally{u?.dispose()}}function Pi(e){return[...e].sort((t,r)=>Math.abs(t.box.y-r.box.y)<(t.box.height+r.box.height)/4?t.box.x-r.box.x:t.box.y-r.box.y)}async function jg(e,t,r,i,n){let a=r.debugging.debugFolder?`${r.debugging.debugFolder}${r.platform.pathSeparator}crops`:"";if(r.debugging.debug&&a){let o=r.platform.canvas.getToolkit();"clearOutput"in o&&typeof o.clearOutput=="function"&&o.clearOutput(a)}if(!r.debugging.debug){let o=t.map(({box:p})=>Li(Gr(e,p,r.platform.canvas),r)),u=await qr(o,r,n),d=t.map(({box:p},h)=>({text:u[h]?.text??"",box:p,confidence:u[h]?.confidence??0}));return Pi(d)}let s=[];for(let{box:o,index:u}of t){let d=await i(e,o,u,t.length,a,n);d!==null&&s.push(d)}return Pi(s)}async function Kg(e,t,r,i){let n=ys(t),a=[],s=[];for(let d of n){let p=d[0];if(p)if(d.length===1)s.push(Li(Gr(e,p.box,r.platform.canvas),r)),a.push({lineBoxes:d,cropWidths:null});else{let{mergedCanvas:h,cropWidths:f}=_s(e,d,r.platform.createCanvas.bind(r.platform),r.platform.canvas);s.push(h),a.push({lineBoxes:d,cropWidths:f})}}let o=await qr(s,r,i),u=[];return a.forEach((d,p)=>{let h=o[p];if(h)if(d.cropWidths===null){let f=d.lineBoxes[0];f&&u.push({text:h.text,box:f.box,confidence:h.confidence})}else{let f=ws(h.text,h.positions,d.cropWidths);for(let m=0;m<d.lineBoxes.length;m++){let y=d.lineBoxes[m];y&&u.push({text:(f[m]??"").trim(),box:y.box,confidence:h.confidence})}}}),Pi(u)}async function Zg(e,t,r,i){let n=ys(t),a=r.options.imageHeight??48,s=20,o=[];for(let y of n)if(y.length===1){let $=y[0];if(!$)continue;let S=Gr(e,$.box,r.platform.canvas);o.push({canvas:S,boxes:y,cropWidths:[S.width]})}else{let{mergedCanvas:$,cropWidths:S}=_s(e,y,r.platform.createCanvas.bind(r.platform),r.platform.canvas);o.push({canvas:$,boxes:y,cropWidths:S})}let u=o.map(({canvas:y,boxes:$,cropWidths:S},b)=>{let w=y.width/y.height,E=Math.max(Vr,Math.round(a*w));return{canvas:y,boxes:$,cropWidths:S,resizedWidth:E,originalHeight:y.height,index:b}}),d=Math.max(...u.map(y=>y.resizedWidth)),p=r.options.crossLineWidthFactor??1.5,h=Math.round(d*p),f=Sg(u,y=>y.resizedWidth,h,s),m=[];for(let y of f){let $=[...y].sort((U,q)=>U.index-q.index),S=Math.max(...$.map(U=>U.originalHeight)),b=$.map(U=>{if(U.originalHeight>=S)return U.resizedWidth;let q=S/U.originalHeight;return Math.max(Vr,Math.round(U.resizedWidth*q))}),E=b.reduce((U,q)=>U+q,0)+s*($.length-1),T=r.platform.createCanvas(E,a),I=T.getContext("2d");I.fillStyle="white",I.fillRect(0,0,E,a);let k=0;for(let U=0;U<$.length;U++){let q=$[U],z=b[U];q===void 0||z===void 0||(I.drawImage(q.canvas,0,0,q.canvas.width,q.canvas.height,k,0,z,a),k+=z,U<$.length-1&&(k+=s))}let{text:O,confidence:v,positions:M}=await Ub(T,r,i),W=[],H=[];for(let U=0;U<$.length;U++){let q=$[U],z=b[U];if(!q||z===void 0)continue;let V=z/q.canvas.width;for(let P=0;P<q.boxes.length;P++){let se=q.boxes[P];if(!se)continue;let ee=(q.cropWidths[P]??0)*V;P===q.boxes.length-1&&U<$.length-1&&(ee+=s),W.push(ee),H.push(se)}}let F=ws(O,M,W);for(let U=0;U<H.length;U++){let q=H[U];q&&m.push({text:(F[U]??"").trim(),box:q.box,confidence:v})}}return Pi(m)}var Ui=class{options;debugging;session;platform;engine;constructor(t,r,i={},n={},a="opencv"){this.platform=t,this.session=r,this.options={...Nr,...i},this.debugging={...Ot,...n},a==="opencv"&&!this.platform.imageProcessor?this.engine="canvas-native":this.engine=a}log(t){this.debugging.verbose&&console.log(`[RecognitionService] ${t}`)}async run(t,r,i,n="per-line",a){this.log("Starting text recognition process");try{let s;this.platform.isCanvas(t)?s=t:this.engine==="opencv"&&this.platform.imageProcessor?s=await this.platform.imageProcessor.prepareCanvas(t):s=await this.platform.canvas.prepareCanvas(t);let o=this.filterValidBoxes(r);if(o.length===0)return[];let{canvas:u,ratio:d}=this.buildCropCanvas(s),p=d===1?o:o.map(y=>({...y,box:Xg(y.box,d)})),h=this.buildContext(a),f;switch(n){case"cross-line":f=await Zg(u,p,h,i);break;case"per-line":f=await Kg(u,p,h,i);break;default:f=await jg(u,p,h,(y,$,S,b,w,E)=>this.processBox(y,$,S,b,w,h,E),i)}d!==1&&(f=f.map(y=>({...y,box:Xg(y.box,1/d)})));let m=a?.minimumConfidence??this.options.minimumConfidence??Nr.minimumConfidence??Yg;return m>Yg?f.filter(y=>{let $=/[\p{L}\p{N}]/u.test(y.text)?m:Math.min(Wb,m+qb);return y.confidence>=$}):f}catch(s){return console.error("Error during text recognition:",s instanceof Error?s.message:String(s)),[]}}buildContext(t){let r={...this.options,...t?.spaceRecovery!==void 0?{spaceRecovery:t.spaceRecovery}:{},...t?.rotateVerticalCrops!==void 0?{rotateVerticalCrops:t.rotateVerticalCrops}:{},...t?.recBatchSize!==void 0?{recBatchSize:t.recBatchSize}:{}};return{platform:this.platform,options:Hg(this.session)?r:{...r,recBatchSize:Vb},debugging:this.debugging,engine:this.engine,runInference:i=>this.runInference(i)}}filterValidBoxes(t){return t.map((r,i)=>({box:r,index:i})).filter(({box:r,index:i})=>this.isValidBox(r,i))}buildCropCanvas(t){let{width:r,height:i}=t,n=this.options.maxCropSourceSideLength??2e3,{width:a,height:s,ratio:o}=ur(r,i,n);if(o===1)return{canvas:t,ratio:1};let u=this.platform.createCanvas(a,s);return u.getContext("2d").drawImage(t,0,0,r,i,0,0,a,s),{canvas:u,ratio:o}}async processBox(t,r,i,n,a,s,o){let u=Date.now();try{let d=Li(Gr(t,r,this.platform.canvas),s),[p]=await qr([d],s,o),h=p?.text??"",f=p?.confidence??0;if(this.debugging.debug&&a){await this.platform.saveDebugImage(d,`crop_${String(i).padStart(3,"0")}.png`,a);let m=Date.now()-u;this.log(`Box ${i+1}/${n}: [x:${r.x}, y:${r.y}, w:${r.width}, h:${r.height}]
	 -> "${h}" (processed in ${m}ms)
`)}return{text:h,box:r,confidence:f}}catch(d){let p=d instanceof Error?d:new Error(String(d));return console.error(`Error processing box ${i+1}: ${p.message}`,p.stack),null}}isValidBox(t,r){return t.width<=0||t.height<=0?(console.warn(`Skipping invalid box ${r+1}: w=${t.width}, h=${t.height}`),!1):!0}async runInference(t){let r=this.options.mainThreadYieldMs??0;r>0&&await new Promise(o=>setTimeout(o,r));let i={x:t},n=await this.session.run(i),a=Object.keys(n)[0],s=a?n[a]:void 0;if(!s)throw new Error(`Recognition output tensor '${a}' not found. Available keys: ${Object.keys(n)}`);return s}},Yg=0,Wb=1,Vb=1,qb=.3;function Xg(e,t){return{x:Math.round(e.x*t),y:Math.round(e.y*t),width:Math.max(1,Math.round(e.width*t)),height:Math.max(1,Math.round(e.height*t))}}function Gb(e,t=typeof window<"u"&&!Bi()){return t?{mainThreadYieldMs:lg,...e}:e}var hr=class extends Ui{constructor(t,r={},i={}){super(new zt,t,Gb(r),i,"canvas-native")}};var Fb={graphOptimizationLevel:"all"},fr=class extends Mi{constructor(t){super(new zt,t),(this.options.session===void 0||Object.keys(this.options.session).length===0)&&(this.options.session=Fb)}async initSessions(){throw new Error("Initialization is handled proactively in PaddleOcrService. Call initialize() instead.")}async _loadResource(t,r){if(t instanceof ArrayBuffer)return this.log("Loading resource from ArrayBuffer"),t;let i=typeof t=="string"?t:r;return this.log(`Fetching resource from URL: ${i}`),hs(i)}async _resolveSessionExecutionProviders(){let t=this.options.session??{};if(t.executionProviders&&t.executionProviders.length>0){this.log(`Using user-provided executionProviders: ${JSON.stringify(t.executionProviders)}`);return}let r=await Rs();this.options.session={...t,executionProviders:r},this.log(`Resolved executionProviders: ${JSON.stringify(r)}`)}async _createSession(t){return Mg(or,t,this.options.session,r=>console.warn(`[PaddleOcrService] ${r}`),r=>this.options.session=r)}async initialize(){try{this.log("Initializing PaddleOcrService (Web)..."),await this._resolveSessionExecutionProviders();let[t,r,i]=await Promise.all([this._loadResource(this.options.model?.detection,vt.detection),this._loadResource(this.options.model?.recognition,vt.recognition),this._loadResource(this.options.model?.charactersDictionary,vt.charactersDictionary)]),[n,a]=await Promise.all([this._createSession(new Uint8Array(t)),this._createSession(new Uint8Array(r)),this.initializeUnwarping((o,u)=>this._loadResource(o,u),o=>this._createSession(o))]);this.detectionSession=n,this.recognitionSession=a,this.options.model&&(this.options.model.detection=t),this.options.model&&(this.options.model.recognition=r),this.log(`Detection ONNX model loaded successfully
	input: ${n.inputNames}
	output: ${n.outputNames}`),this.log(`Recognition ONNX model loaded successfully
	input: ${a.inputNames}
	output: ${a.outputNames}`);let s=Lr(i);if(s.length===0)throw new Error("Character dictionary is empty or could not be loaded.");this.options.model&&(this.options.model.charactersDictionary=i),this.options.recognition&&(this.options.recognition.charactersDictionary=s),this.log(`Character dictionary loaded with ${s.length} entries.`),this.detector=new cr(n,this.options.detection,this.options.debugging),this.recognitor=new hr(a,this.options.recognition,this.options.debugging),this.options.model&&(this.options.model.detection=void 0),this.options.model&&(this.options.model.recognition=void 0)}catch(t){throw console.error("Failed to initialize PaddleOcrService Web:",t),t}}async changeDetectionModel(t){this.log("Changing detection model...");let r=await this._loadResource(t,vt.detection);await this.detectionSession?.release(),this.detectionSession=await this._createSession(new Uint8Array(r)),this.detector=new cr(this.detectionSession,this.options.detection,this.options.debugging),this.options.model&&(this.options.model.detection=r),this.log("Detection model changed successfully.")}async changeRecognitionModel(t){this.log("Changing recognition model...");let r=await this._loadResource(t,vt.recognition);await this.recognitionSession?.release(),this.recognitionSession=await this._createSession(new Uint8Array(r)),this.recognitor=new hr(this.recognitionSession,this.options.recognition,this.options.debugging),this.options.model&&(this.options.model.recognition=r),this.log("Recognition model changed successfully.")}async changeTextDictionary(t){this.log("Changing text dictionary...");let r=await this._loadResource(t,vt.charactersDictionary),i=Lr(r);if(i.length===0)throw new Error("Character dictionary is empty or could not be loaded.");this.options.model&&(this.options.model.charactersDictionary=r),this.options.recognition&&(this.options.recognition.charactersDictionary=i),this.log(`Character dictionary changed successfully with ${i.length} entries.`)}async recognize(t,r){return super.recognize(t,r)}};var Fr=null;window.PaddleKR={async init(e){return Fr||(pe.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@"+(pe.versions.web||pe.versions.common)+"/dist/",e("PaddleOCR \uBAA8\uB378 \uB0B4\uB824\uBC1B\uB294 \uC911(\uCD5C\uCD08 1\uD68C \uC57D 20MB)\u2026"),Fr=new fr({model:cn,processing:{engine:"canvas-native"}}),await Fr.initialize(),Fr)},async run(e,t){return await(await this.init(t)).recognize(e,{flatten:!0})}};})();
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.31.1
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
