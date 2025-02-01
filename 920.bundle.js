"use strict";(self.webpackChunkdivinecraft=self.webpackChunkdivinecraft||[]).push([[920],{62985:(e,t,s)=>{s.d(t,{D:()=>o});const r=new Set;class n{observersMap=new Map;observers=[];constructor(){}listener(e){return e}subscribe(e,t){if("function"==typeof e&&void 0===t)this.observersMap.set(e,e),this.observers.push(e);else{if(void 0===t)throw new Error("Invalid arguments for subscribe method");this.observersMap.has(e)&&this.unsubscribe(e),this.observersMap.set(e,t),this.observers.push(t)}}unsubscribe(e){const t=this.observersMap.get(e);if(!t)return!1;for(let s=0;s<this.observers.length;s++)if(this.observers[s]==t)return this.observers.splice(s,1),this.observersMap.delete(e),!0;return!1}subscribeOnce(e){this.observers.push(e),r.add(e)}unsubscribeOnce(e){for(let t=0;t<this.observers.length;t++)if(this.observers[t]==e)return this.observers.splice(t,1),r.delete(e),!0;return!1}notify(e){for(let t=this.observers.length-1;t>=0;t--)if(this.observers[t](e,this),r.has(this)&&(this.observers.splice(t,1),r.delete(this)),this._broken)return void(this._broken=!1)}async notifyAsync(e){for(let t=this.observers.length-1;t>=0;t--)if(await this.observers[t](e,this),r.has(this)&&(this.observers.splice(t,1),r.delete(this)),this._broken)return void(this._broken=!1)}clear(){this.observers.length=0,this.observersMap.clear()}_broken=!1;break(){this._broken=!0}}class o{stopOnError;_active=!1;_run=()=>{};interval=1;currentTimeout;canRun=!0;constructor(e,t,s=!0){this.stopOnError=s,e&&this.setOnRun(e),void 0!==t&&this.setInterval(t)}observers={start:new n,stop:new n,error:new n};setOnRun(e){return this._run=e,this}setInterval(e){return this.interval=e,this}_asyncRun(){return new Promise(((e,t)=>{if(!this.canRun)return e(!1);this.canRun=!1;const s=this._run();if(s instanceof Promise)return s.then((()=>e(!0))).catch((s=>{if(this.stopOnError)return this.stop(),t(s),console.error(s),void this.observers.error.notify(s);this.observers.error.notify(s),e(!1)})).finally((()=>this.canRun=!0));this.canRun=!0,e(!0)}))}runInterval(){this._active&&this._asyncRun().then((()=>{this.currentTimeout=setTimeout((()=>{this._active&&this.runInterval()}),this.interval)}))}start(){return this._active||(this._active=!0,this.runInterval()),this.observers.start.notify(),this}stop(){return this._active=!1,void 0!==this.currentTimeout&&clearTimeout(this.currentTimeout),this.currentTimeout=void 0,this.observers.stop.notify(),this}}},59469:(e,t,s)=>{s.d(t,{j:()=>n});var r=s(36078);class n{center;radius;static Create(e=r.x.Create(),t=1){return new n(e,t)}static IsPointInsideCircle(e,t){const s=e.x-t.center.x,r=e.y-t.center.y;return s*s+r*r<=t.radius*t.radius}static IsSquareInsideCircle(e,t){const s=e.sideLength/2,r={x:e.center.x-s,y:e.center.y-s},n={x:e.center.x+s,y:e.center.y-s},o={x:e.center.x-s,y:e.center.y+s},i={x:e.center.x+s,y:e.center.y+s};return this.IsPointInsideCircle(r,t)&&this.IsPointInsideCircle(n,t)&&this.IsPointInsideCircle(o,t)&&this.IsPointInsideCircle(i,t)}static IsSquareInsideOrTouchingCircle(e,t){const s=e.sideLength/2,r={x:e.center.x-s,y:e.center.y-s},n={x:e.center.x+s,y:e.center.y-s},o={x:e.center.x-s,y:e.center.y+s},i={x:e.center.x+s,y:e.center.y+s};return this.IsPointInsideCircle(r,t)||this.IsPointInsideCircle(n,t)||this.IsPointInsideCircle(o,t)||this.IsPointInsideCircle(i,t)}constructor(e=r.x.Create(),t=1){this.center=e,this.radius=t}}},6138:(e,t,s)=>{s.d(t,{j:()=>o.j,M:()=>n});var r=s(36078);class n{center;sideLength;static Create(e=r.x.Create(),t=1){return new n(e,t)}constructor(e=r.x.Create(),t=1){this.center=e,this.sideLength=t}}var o=s(59469)},99638:(e,t,s)=>{s.d(t,{Az:()=>r.Az,M6:()=>n.M,jl:()=>n.j});var r=s(38869),n=s(6138);s(29458)},97123:(e,t,s)=>{s.d(t,{j:()=>i});var r=s(88224),n=s(81863),o=s(54966);class i{name;index;threadPoolName;static readySet=new Set;get isRemoteReady(){return i.readySet.has(this)}get isPortSet(){return Boolean(this.port)}port=null;_pool=null;constructor(e,t,s="worker",r=null){this.name=e,this.index=t,this.threadPoolName=s,this._pool=r}setPort(e){if(this.port=e,"browser"==r.Q.environment){const t=e;t.onmessage=e=>{if(o.E.isInternal(e.data))return o.E.runInternal(e.data,this,e)},t.onmessageerror=e=>{console.error(`Error occured in from thread ${this.name}`),console.log(e.data),console.log(e)}}if("node"==r.Q.environment){const t=e;t.on("message",(e=>{if(o.E.isInternal(e))return o.E.runInternal(e,this,e)})),t.on("error",(e=>{console.error(`Error occured in from thread ${this.name}`),console.log(e)}))}this.sendMessage([o.E.INTERNAL_CODE,n.g.setReady,[this.name,this.index]])}sendMessage(e,t){if(!this.port)throw new Error(`Cannot send message to thread [${this.name}] port is not set`);this.port.postMessage(e,"browser"==r.Q.environment&&t?t:void 0)}connectToThread(e){const t=new MessageChannel;e.sendMessage([o.E.INTERNAL_CODE,n.g.connectPort,[this.name,this.threadPoolName,t.port1]],[t.port1]),this.sendMessage([o.E.INTERNAL_CODE,n.g.connectPort,[e.name,e.threadPoolName,t.port2]],[t.port2])}waitTillTaskExist(e,t=50){let s=!1;return new Promise((r=>{const n=e=>{if(s)return clearTimeout(i);e?(s=!0,r(!0),clearTimeout(i)):setTimeout(o,t)},o=()=>{this.taskExist(e,n)};let i=setTimeout(o,t)}))}taskExist(e,t){const s=o.E.getPromiseId();o.z.checkTasks[2][0]=e,o.z.checkTasks[2][1]=s,this.sendMessage(o.z.checkTasks),o.E.addPromiseTakss("tasks-check",s,(e=>{t(e)}))}runTask(e,t,s,r){const n=r?o.E.getPromiseId():-1;r&&o.E.addPromiseTakss(e,n,r),o.z.runTask[2][0]=e,o.z.runTask[2][1]=n,o.z.runTask[2][2]=t,this.sendMessage(o.z.runTask,s),o.z.runTask[2][2]=null}runTaskAsync(e,t,s){return new Promise((r=>{this.runTask(e,t,s,(e=>{r(e)}))}))}waitTillReady(){return new Promise(((e,t)=>{const s=setInterval((()=>{this.isPortSet&&(clearInterval(s),e(!0))}),1)}))}destroy(){i.readySet.delete(this),this.port&&"terminate"in this.port&&this.port.terminate()}}},50413:(e,t,s)=>{s.d(t,{p:()=>o});var r=s(97123),n=s(88224);class o{name;_totalThreads=0;_currentThread=0;__threads=[];constructor(e){this.name=e}getThreads(){return this.__threads}connectToThread(e){for(const t of this.__threads)t.connectToThread(e)}destroyAll(){for(const e of this.__threads)e.destroy()}isReady(){let e=!0;for(const t of this.__threads)t.isPortSet||(e=!1);return e}waitTillAllAreReady(){return new Promise(((e,t)=>{const s=setInterval((()=>{this.isReady()&&(clearInterval(s),e(!0))}),1)}))}addPort(e){const t=`${this.name}-${this._totalThreads}`,s=new r.j(t,this._totalThreads,this.name,this);n.Q.addThread(s),s.setPort(e),this.__threads.push(s),this._totalThreads++}runTaskForAll(e,t,s){for(let r=0;r<this.__threads.length;r++)this.__threads[r].runTask(e,t,s)}runTask(e,t,s,r,n,o){return"number"!=typeof n?(this._currentThread==o&&this.__handleCount(),this.__threads[this._currentThread].runTask(e,t,s,r),this.__handleCount()):(this.__threads[n].runTask(e,t,s,r),n)}runTaskAsync(e,t,s,r,n){return new Promise((o=>{this.runTask(e,t,s,o,r,n)}))}__handleCount(){let e=this._currentThread;return this._currentThread++,this._currentThread>=this._totalThreads&&(this._currentThread=0),e}}},34402:(e,t,s)=>{s.d(t,{Z:()=>f});var r=s(46498),n=s(71657),o=s(25701),i=s(82683);class a extends i.Q{constructors=o.QK.createThreadPool("constructor");parent=o.QK.parent;nexus=o.QK.createThread("nexus");constructor(){super(),this.addThread(this.constructors),this.addThread(this.parent)}}class d{static environment="browser";static instance;TC=o.QK;settings=n.i;threads=new a;constructor(){if(d.instance)return d.instance;d.instance=this}}var c=s(33329),l=s(95027),u=s(77733),h=s(96715),g=s(23917),_=s(65881),p=s(83841);async function f(e={}){const t=new d;d.environment=g.O.isNode()?"node":"browser",o.QK.threadName="world";let s="render";"node"==d.environment&&(s="server"),await o.QK.init("world",self,s);let n=!1;(0,r.A)({onSync(e){if(e.threads.nexus&&t.threads.addThread(t.threads.nexus),e.modelData){const t=e.modelData;for(const e of t.models)p.r.registerModel(e.id,e.schema);for(const e of t.voxels)p.r.registerVoxel(e.id,e.modelId,e.modSchema);_.B.load(t.tagState)}n=!0}}),await new Promise((e=>{const t=()=>{if(n)return e(!0);setTimeout(t,10)};t()}));const i=[t.threads.parent,...t.threads.constructors.getThreads()];return t.threads.nexus.isPortSet&&i.push(t.threads.nexus),function({threads:e,worldStorage:t}){c._.sectors.setSecotrPool(!0);const s=new Map;c._._hooks.sectors.onNew=(t,s)=>{for(const r of e)r.runTask(h.U.SyncSector,[t,s])},c._._hooks.sectors.onRemove=t=>{for(const s of e)s.runTask(h.U.UnSyncSector,t)},c._._hooks.dimension.onNew=t=>{for(const s of e)s.runTask(h.U.SyncDimension,t)},o.QK.registerTask("add-sector",(async r=>{const n=c._.sectors.get(r[0],r[1],r[2],r[3]);if(n)for(const t of e)t.runTask(h.U.SyncSector,[r,n]);else if(n||t||c._.sectors.new(r[0],r[1],r[2],r[3]),t){const e=l.k.sector.getPosition(r[1],r[2],r[3]),n=[r[0],e.x,e.y,e.z],o=n.toString();if(s.has(o))return;s.set(o,!0);const i=await t.loadSector(n);return s.delete(o),void(i||c._.sectors.new(n[0],n[1],n[2],n[3]))}})),o.QK.registerTask("world-alloc",(async e=>{await u.E.addLock(e)})),o.QK.registerTask("world-dealloc",(async e=>{await u.E.removeLock(e)})),o.QK.registerTask("unload-sector",(t=>{if(u.E.isLocked(t))return[!1];c._.sectors.remove(t[0],t[1],t[2],t[3]);for(const s of e)s.runTask(h.U.UnSyncSector,t);return[!1]})),o.QK.registerTask("load-sector",(([t,s])=>{c._.sectors.add(t[0],t[1],t[2],t[3],s);for(const r of e)r.runTask(h.U.SyncSector,[t,s]);return[!0]})),o.QK.registerTask("clear-all",(()=>{c._.clearAll()}))}({threads:i,worldStorage:e.worldStorage}),t}},89083:(e,t,s)=>{s.d(t,{M:()=>Q});var r=s(18674),n=s(99638),o=s(59469),i=s(95027);class a{position;_dimension="main";_building=!0;_positonChanged=!1;_waitingForCull=!1;_cullTime=0;_culling=!0;_cachedPosition=n.Az.Create();_sectorPosition=n.Az.Create();_genCircle=new o.j({x:0,y:0},0);_renderCircle=new o.j({x:0,y:0},0);_maxCircle=new o.j({x:0,y:0},10);constructor(e){this._dimension=e.dimension,this.position=e.position,this._building=void 0===e.building||e.building,this._culling=void 0===e.culling||e.culling,this._renderCircle.radius=e.renderRadius,this._genCircle.radius=e.generationRadius,this._maxCircle.radius=e.maxRadius}update(){this._positonChanged=!1,i.k.section.getPosition(this.position.x,this.position.y,this.position.z,this._sectorPosition),n.Az.Equals(this._sectorPosition,this._cachedPosition)||(this._positonChanged=!0,n.Az.Copy(this._cachedPosition,this._sectorPosition)),this._renderCircle.center.x=this._sectorPosition.x,this._renderCircle.center.y=this._sectorPosition.z,this._genCircle.center.x=this._sectorPosition.x,this._genCircle.center.y=this._sectorPosition.z,this._maxCircle.center.x=this._sectorPosition.x,this._maxCircle.center.y=this._sectorPosition.z}}var d,c=s(33329);!function(e){e.lastSaveTimestamp="dve_last_save_timestamp",e.lastAnalyzerUpdateTimestamp="dve_last_analyzer_update_timestamp",e.hasRichData="dve_has_rich_data",e.hasEntityData="dve_has_entity_data",e.isStored="dve_is_stored",e.isWorldGenDone="dve_is_world_gen_done",e.isWorldDecorDone="dve_is_world_decor_done",e.isWorldSunDone="dve_is_world_sun_done",e.isWorldPropagationDone="dve_is_world_propagation_done",e.isDirty="dve_is_dirty",e.persistent="dve_persistent"}(d||(d={}));const l=[],u=[[0,0],[1,0],[0,1],[1,1],[-1,0],[0,-1],[-1,-1],[1,-1],[-1,1]];for(let e=-1;e<2;e++)for(const t of u)l.push([t[0],e,t[1]]);var h=s(47464);const g=n.Az.Create();function _(e,t,s){t.resset();const[r,n,o]=e.position;h.hz.StateStruct.setData(e.sectorState);for(let e=0;e<u.length;e++){const a=i.k.sector.getPosition(r+u[e][0]*i.k.sector.bounds.x,n,o+u[e][1]*i.k.sector.bounds.z,g);s.vistedMap.has(a.x,n,a.z)||s.queue.push(a.x,n,a.z);const l=c._.sectors.get(s.id,a.x,n,a.z);if(!l){t.genAlldone=!1,t.nWorldGenAllDone=!1,t.nPropagtionAllDone=!1,t.nSunAllDone=!1,t.nDecorAllDone=!1,t.allLoaded=!1;break}h.hz.StateStruct.setData(l.sectorState),h.hz.StateStruct.getProperty(d.isWorldGenDone)||(t.nWorldGenAllDone=!1),h.hz.StateStruct.getProperty(d.isWorldDecorDone)||(t.nDecorAllDone=!1),h.hz.StateStruct.getProperty(d.isWorldSunDone)||(t.nSunAllDone=!1),h.hz.StateStruct.getProperty(d.isWorldPropagationDone)||(t.nPropagtionAllDone=!1)}return t}class p{isLoaded=!0;isGenerated=!0;genAlldone=!0;allLoaded=!0;nWorldGenAllDone=!0;nDecorAllDone=!0;nSunAllDone=!0;nPropagtionAllDone=!0;resset(){this.isLoaded=!0,this.isGenerated=!0,this.genAlldone=!0,this.allLoaded=!0,this.nWorldGenAllDone=!0,this.nDecorAllDone=!0,this.nSunAllDone=!0,this.nPropagtionAllDone=!0}}var f=s(77733);class m{static taskTool;static worldStorage=null;static parent}const w=n.Az.Create();class k{_map=new Set;get size(){return this._map.size}_getKey(e,t,s){return i.k.hash.hashVec3(i.k.sector.getPosition(e,t,s,w))}has(e,t,s){return this._map.has(this._getKey(e,t,s))}add(e,t,s){this._map.add(this._getKey(e,t,s))}remove(e,t,s){this._map.delete(this._getKey(e,t,s))}clear(){this._map.clear()}}class T{queue=[];vistedMap=new k;waitingFor=0;clear(){this.waitingFor=0,this.queue.length=0,this.vistedMap.clear()}}class v{position;time=0;constructor(e){this.position=e}}class S{nodes=[];addedMap=new k;removeIndex(e){const t=this.nodes.splice(e,1)[0];this.addedMap.remove(...t.position)}inMap(e){return this.addedMap.has(...e.position)}addSector(e){this.addedMap.add(...e.position),this.nodes.push(new v([...e.position]))}}class y{id;tasks=new Map;queue=[];vistedMap=new k;rendered=new k;inProgress=new k;unRenderQueue=new S;unLoadQueue=new S;constructor(e){this.id=e}addTask(e){this.tasks.set(e,new T)}getTask(e){const t=this.tasks.get(e);if(!t)throw new Error(`Task with id [${e}] not registered in dimension segment ${this.id}`);return t}clearAllTasks(){for(const[e,t]of this.tasks)t.clear()}logTasks(){const e=[];for(const[t,s]of this.tasks)e.push(`${t} | ${s.waitingFor}`);return e.join("\n")}}class x{static _dimensions=new Map;static addDimension(e){const t=new y(e);b.addToDimension(t),this._dimensions.set(e,t)}static getDimension(e){const t=this._dimensions.get(e);if(!t)throw new Error(`Dimension with id [${e}] is not registered`);return t}}class P{data;constructor(e){this.data=e}add(e,t,s,r){const n=x.getDimension(e),o=n.getTask(this.data.id);o.vistedMap.has(t,s,r)||this.data.propagationBlocking&&n.inProgress.has(t,s,r)||(o.queue.push(t,s,r),o.vistedMap.add(t,s,r))}remove(e,t,s,r){const n=x.getDimension(e);n.getTask(this.data.id).vistedMap.remove(t,s,r),this.data.propagationBlocking&&n.inProgress.remove(t,s,r)}cancelAll(e=null){if(e)x.getDimension(e).getTask(this.data.id).clear();else for(const[e,t]of x._dimensions)t.clearAllTasks()}runTask(e=1e3){for(const[t,s]of x._dimensions){const t=s.getTask(this.data.id);if(t.waitingFor<0&&(t.waitingFor=0),!(t.waitingFor>=e))for(;t.waitingFor<e&&t.queue.length;){const e=t.queue.shift(),r=t.queue.shift(),n=t.queue.shift();t.waitingFor++,this.data.propagationBlocking&&s.inProgress.add(e,0,n),this.data.run([s.id,e,r,n],(()=>{t.vistedMap.remove(e,r,n),this.data.propagationBlocking&&s.inProgress.remove(e,0,n),t.waitingFor--}),s)}}}}class b{static tasks=[];static addTasks(e){const t=new P(e);return this.tasks.push(t),t}static addToDimension(e){for(const t of this.tasks)e.addTask(t.data.id)}}class z{static worldLoadTasks=b.addTasks({id:"load",propagationBlocking:!0,async run(e,t){const[s,r,n,o]=e;return c._.sectors.get(e[0],r,n,o)?t():m.worldStorage?(await m.worldStorage.loadSector([s,r,n,o])||c._.sectors.new(e[0],r,n,o),void t()):(c._.sectors.new(e[0],r,n,o),t())}});static worldGenTasks=b.addTasks({id:"generate",propagationBlocking:!0,async run(e,t){const s=c._.sectors.get(e[0],e[1],e[2],e[3]);if(!s)throw new Error(`Sector at ${e.toString()} does not exist when attempting generation.`);if(h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.getProperty(d.isWorldGenDone))return t();m.taskTool.generate.run([e,[]],null,(()=>{h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.setProperty(d.isWorldGenDone,1),t()}))}});static worldDecorateTasks=b.addTasks({id:"decorate",propagationBlocking:!0,async run(e,t){const s=c._.sectors.get(e[0],e[1],e[2],e[3]);if(!s)throw new Error(`Sector at ${e.toString()} does not exist when attempting decoration.`);if(h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.getProperty(d.isWorldDecorDone))return t();m.taskTool.decorate.run([e,[]],null,(()=>{h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.setProperty(d.isWorldDecorDone,1),t()}))}});static worldSunTasks=b.addTasks({id:"wolrd_sun",propagationBlocking:!0,async run(e,t){const s=c._.sectors.get(e[0],e[1],e[2],e[3]);if(!s)throw new Error(`Sector at ${e.toString()} does not exist when attempting world sun.`);if(h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.getProperty(d.isWorldSunDone))return t();m.taskTool.worldSun.run(e,null,(()=>{h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.setProperty(d.isWorldSunDone,1),t()}))}});static worldPropagationTasks=b.addTasks({id:"propagation",propagationBlocking:!0,async run(e,t){const s=c._.sectors.get(e[0],e[1],e[2],e[3]);if(!s)throw new Error(`Sector at ${e.toString()} does not exist when attempting propagation.`);if(h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.getProperty(d.isWorldPropagationDone))return t();m.taskTool.propagation.run(e,null,(()=>{h.hz.StateStruct.setBuffer(s.buffer),h.hz.StateStruct.setProperty(d.isWorldPropagationDone,1),t()}))}});static saveTasks=b.addTasks({id:"save",async run(e,t){if(!m.worldStorage)return t();await m.worldStorage.saveSector(e),t()}});static saveAndUnloadTasks=b.addTasks({id:"save_and_unload",async run(e,t){if(!m.worldStorage)return t();await m.worldStorage.unloadSector(e),t()}});static buildTasks=b.addTasks({id:"build_tasks",async run(e,t,s){s.rendered.add(e[1],e[2],e[3]),m.taskTool.build.sector.run(e,null,t)}})}const D=new p,C=new n.M6,A=new p,I=new n.M6,M=new n.M6;async function E(){const e=m.worldStorage;if(!e)return;const t=[];for(const[s]of x._dimensions){const r=c._.dimensions.get(s);for(const[n,o]of r.sectors)t.push(e.saveSector([s,...o.position]))}await Promise.all(t)}async function R(e){return new Promise((t=>{const s=Q.createGenerator({...e.genData,building:!1,culling:!1});x._dimensions.has(s._dimension)||x.addDimension(s._dimension);const r=x.getDimension(e.dimension||"main");let n=!1;s._building=!1,Q.addGenerator(s);let o=null;const i=()=>{n||(Q.update(),o=setTimeout(i,0))};i();const a=setInterval((()=>{let e=!0;for(const[t,s]of r.tasks)if(s.waitingFor>0||s.queue.length>0){e=!1;break}e&&(n=!0,clearInterval(a),clearTimeout(o),Q.removeGenerator(s),(async()=>{m.worldStorage&&await E(),t(!0)})())}),100)}))}let L=!1;class Q{static _cullGenerators=[];static _generators=[];static addDimension(e){x.addDimension(e)}static Procedures={InitalLoad:R,SaveAllSectors:E};static init(e){L=!0,m.parent=e.parent,m.taskTool=new r.w(e.threads),e.worldStorage&&(m.worldStorage=e.worldStorage),console.warn("load the thing",m.worldStorage,e.worldStorage)}static createGenerator(e){return new a({dimension:e.dimension?e.dimension:"main",position:e.position?e.position:n.Az.Create(),renderRadius:e.renderRadius?e.renderRadius:150,generationRadius:e.generationRadius?e.generationRadius:250,maxRadius:e.maxRadius?e.maxRadius:300,building:e.building?e.building:void 0})}static addGenerator(e){this._generators.push(e)}static removeGenerator(e){for(let t=0;t<this._generators.length;t++)if(this._generators[t]==e)return this._generators.splice(t,1),!0;return!1}static update(){if(!L)throw new Error("IWG must be initalized.");this._cullGenerators.length&&(this._cullGenerators.length=0);for(const e of this._generators)e.update(),e._culling&&e._positonChanged&&(e._waitingForCull?performance.now()-e._cullTime>4e3&&(e._waitingForCull=!1,this._cullGenerators.push(e)):(e._waitingForCull=!0,e._cullTime=performance.now()));!function(e){for(const t of e){if(!t._building)continue;const e=x._dimensions.get(t._dimension);if(!e)throw new Error(`No segment for dimensions ${t._dimension} found.`);const s=e.queue,r=e.vistedMap,o=t._sectorPosition;for(s.push(o.x,o.y,o.z),t._renderCircle.center.x=o.x,t._renderCircle.center.y=o.z;s.length;){const o=s.shift(),a=s.shift(),d=s.shift();if(r.has(o,a,d))continue;if(r.add(o,a,d),I.sideLength=i.k.sector.bounds.x,I.center.x=o+i.k.sector.bounds.x/2,I.center.y=d+i.k.sector.bounds.z/2,!n.jl.IsSquareInsideOrTouchingCircle(I,t._renderCircle))continue;const l=c._.sectors.get(t._dimension,o,a,d);if(!l)continue;const u=_(l,A,e);if(u.nWorldGenAllDone&&u.nSunAllDone&&u.nPropagtionAllDone){if(e.rendered.has(o,a,d))continue;z.buildTasks.add(t._dimension,o,a,d)}}}for(const[,e]of x._dimensions)e.vistedMap.clear()}(this._generators),z.buildTasks.runTask(),function(e){for(const t of e){const e=x._dimensions.get(t._dimension);if(!e)throw new Error(`No segment for dimensions ${t._dimension} found.`);const s=e.queue,r=e.vistedMap,o=t._sectorPosition;for(s.push(o.x,o.y,o.z),t._genCircle.center.x=o.x,t._genCircle.center.y=o.z;s.length;){const o=s.shift(),a=s.shift(),l=s.shift();if(f.E.isLocked([t._dimension,o,a,l])||e.inProgress.has(o,a,l)||r.has(o,a,l))continue;if(r.add(o,a,l),C.sideLength=i.k.sector.bounds.x,C.center.x=o+i.k.sector.bounds.x/2,C.center.y=l+i.k.sector.bounds.z/2,!n.jl.IsSquareInsideOrTouchingCircle(C,t._genCircle))continue;const u=c._.sectors.get(t._dimension,o,a,l);if(!u){z.worldLoadTasks.add(t._dimension,o,a,l);continue}const g=_(u,D,e);h.hz.StateStruct.setBuffer(u.buffer),!g.allLoaded||h.hz.StateStruct.getProperty(d.isWorldGenDone)?!g.nWorldGenAllDone||h.hz.StateStruct.getProperty(d.isWorldDecorDone)?!g.nDecorAllDone||h.hz.StateStruct.getProperty(d.isWorldPropagationDone)?!g.nPropagtionAllDone||h.hz.StateStruct.getProperty(d.isWorldSunDone)||z.worldSunTasks.add(t._dimension,o,a,l):z.worldPropagationTasks.add(t._dimension,o,a,l):z.worldDecorateTasks.add(t._dimension,o,a,l):z.worldGenTasks.add(t._dimension,o,a,l)}}for(const[e,t]of x._dimensions)t.vistedMap.clear()}(this._generators),z.worldLoadTasks.runTask(),z.worldGenTasks.runTask(),z.worldDecorateTasks.runTask(),z.worldSunTasks.runTask(),z.worldPropagationTasks.runTask(),z.saveTasks.runTask(),z.saveAndUnloadTasks.runTask(),function(e,t){const s=performance.now();for(const[,r]of x._dimensions){for(let t=r.unRenderQueue.nodes.length-1;t>-1;t--){const o=r.unRenderQueue.nodes[t],[a,d,c]=o.position;M.center.x=o.position[0]+i.k.sector.bounds.x/2,M.center.y=o.position[2]+i.k.sector.bounds.z/2;let l=!1;for(const t of e)t._dimension==r.id&&n.jl.IsSquareInsideOrTouchingCircle(M,t._renderCircle)&&(l=!0);l?r.unRenderQueue.removeIndex(t):s-o.time>5e3&&(r.rendered.remove(a,d,c),r.inProgress.add(a,d,c),m.parent.runTaskAsync("remove-sector",[r.id,a,d,c]).then((()=>{r.inProgress.remove(a,d,c)})),r.unRenderQueue.removeIndex(t))}for(let t=r.unLoadQueue.nodes.length-1;t>-1;t--){const o=r.unLoadQueue.nodes[t],[a,d,l]=o.position;M.center.x=o.position[0]+i.k.sector.bounds.x/2,M.center.y=o.position[2]+i.k.sector.bounds.z/2;let u=!1;for(const t of e)t._dimension==r.id&&n.jl.IsSquareInsideOrTouchingCircle(M,t._maxCircle)&&(u=!0);u?r.unLoadQueue.removeIndex(t):s-o.time>5e3&&(r.unLoadQueue.removeIndex(t),m.worldStorage?(r.inProgress.add(a,d,l),m.worldStorage.unloadSector([r.id,a,d,l]).finally((()=>{r.inProgress.remove(a,d,l)}))):c._.sectors.remove(r.id,a,d,l))}if(!t.length)continue;const o=c._.dimensions.get(r.id);for(const[,e]of o.sectors){const[s,o,a]=e.position;M.sideLength=i.k.sector.bounds.x,M.center.x=s+i.k.sector.bounds.x/2,M.center.y=a+i.k.sector.bounds.z/2;let d=!1,c=!1;if(!f.E.isLocked([r.id,s,o,a])&&!r.inProgress.has(s,o,a)){for(const e of t)e._dimension==r.id&&(n.jl.IsSquareInsideOrTouchingCircle(M,e._renderCircle)&&(d=!0),n.jl.IsSquareInsideOrTouchingCircle(M,e._maxCircle)&&(c=!0));d&&c||(d||r.unRenderQueue.inMap(e)||r.unRenderQueue.addSector(e),c||r.unLoadQueue.inMap(e)||r.unLoadQueue.addSector(e))}}}}(this._generators,this._cullGenerators)}}Q.addDimension("main")},18674:(e,t,s)=>{s.d(t,{w:()=>c});var r=s(25701),n=s(56964);class o{_task;_queue=[];constructor(e){this._task=e}add(e){this._queue.push(e)}clear(){this._queue.length=0}run(){return new Promise((e=>{let t=0;const s=()=>{t--,t<=0&&e(!0)};for(;this._queue.length;){const e=this._queue.shift();t++,this._task.run(e,null,s)}}))}}class i{id;_count=0;_threads;constructor(e,t){this.id=e,t instanceof r.jV?this._threads=[t]:this._threads=[...t.getThreads()]}run(e,t,s){this._threads[this._count].runTask(this.id,e,t,s),this._count++,this._count>=this._threads.length&&(this._count=0)}runAsync(e,t){return new Promise((s=>{this.run(e,t,s)}))}createQueue(){return new o(this)}}class a{tool;update;paint;erease;constructor(e){this.tool=e,this.update=new i(n.z.VoxelUpdate,e.threads),this.paint=new i(n.z.VoxelPaint,e.threads),this.erease=new i(n.z.VoxelErease,e.threads)}}class d{tool;section;sector;constructor(e){this.tool=e,this.section=new i(n.z.BuildSection,e.threads),this.sector=new i(n.z.BuildSector,e.threads)}}class c{threads;voxel;build;explosion;anaylzer;propagation;generate;decorate;worldSun;constructor(e){this.threads=e,this.voxel=new a(this),this.build=new d(this),this.explosion=new i(n.z.Explosion,e),this.propagation=new i(n.z.Propagation,e),this.generate=new i(n.z.Generate,e),this.decorate=new i(n.z.Decorate,e),this.worldSun=new i(n.z.WorldSun,e)}}},77733:(e,t,s)=>{s.d(t,{E:()=>o});var r=s(33329),n=s(95027);class o{static locks=new Map;static _loadMap=new Map;static worldStorage=null;static addLock(e){return new Promise((async t=>{this.locks.set(e.toString(),e);const[s,[o,i,a],[d,c,l]]=e,{x:u,y:h,z:g}=n.k.sector.getPosition(o,i,a),{x:_,y:p,z:f}=n.k.sector.getPosition(d,c,l),m=async()=>{let t=!0;for(let o=h;o<p+n.k.sector.bounds.y;o+=n.k.sector.bounds.y)for(let i=u;i<=_;i+=n.k.sector.bounds.x)for(let a=g;a<=f;a+=n.k.sector.bounds.z){const d=n.k.sector.getPosition(i,o,a),c=[e[0],d.x,d.y,d.z];if(c[0]=s,r._.sectors.get(c[0],c[1],c[2],c[3]))continue;t=!1;const l=c.toString();if(this._loadMap.has(l))continue;this._loadMap.set(l,!0);let u=!1;if(this.worldStorage?u=await this.worldStorage.loadSector(c):r._.sectors.get(c[0],c[1],c[2],c[3])&&(u=!0),this._loadMap.delete(l),r._.sectors.get(c[0],c[1],c[2],c[3]))return;u||r._.sectors.new(c[0],c[1],c[2],c[3])}return t};if(await m())return t(!0);const w=async()=>{await m()?t(!0):setTimeout(w,10)};w()}))}static removeLock(e){this.locks.delete(e.toString())}static isLocked([e,t,s,r]){let n=!1;for(const[o,[i,[a,d,c],[l,u,h]]]of this.locks)if(i==e&&!(t>=a&&s>=d&&r>=c&&t<=l&&s<=u&&r<=h)){n=!0;break}return n}}},90628:(e,t,s)=>{s.d(t,{W:()=>o});var r=s(3620),n=s(99638);const o=r.$m.registerComponent({type:"transform",schema:r.$m.schema({position:r.$m.property(n.Az.Create(),{type:"vector-3",binary:"f32"}),rotation:r.$m.property(n.Az.Create(),{type:"vector-3",binary:"f32"}),scale:r.$m.property(n.Az.Create(1,1,1),{type:"vector-3",binary:"f32"})},[{id:"shared-array",type:"typed-array",sharedMemory:!0,arrayType:"f32"},{id:"array",type:"typed-array",arrayType:"f32"}])})},97122:(e,t,s)=>{s.d(t,{A:()=>a});var r=s(83051),n=s(18674),o=s(67768);class i extends o.l{tasks;_location=["main",0,0,0];constructor(e){super(),this.tasks=e}mode="async";_mapLocation(){this._location[0]=this.dimension,this._location[1]=this.x,this._location[2]=this.y,this._location[3]=this.z}setMode(e){return this.mode=e,this}paintAndAwaitUpdate(){return new Promise((e=>{this.paintAndUpdate((()=>{e(!0)}))}))}eraseAndAwaitUpdate(){const e=this;return new Promise((t=>{e.eraseAndUpdate((()=>{t(!0)}))}))}paintAndUpdate(e){this._mapLocation(),this.tasks.voxel.paint.run([this._location,this.getRaw()],null,(()=>{e&&e()}))}eraseAndUpdate(e){this._mapLocation(),this.tasks.voxel.erease.run(this._location,null,(()=>{e&&e()}))}update(e){this._mapLocation(),this.tasks.voxel.update.run([this._location,this.getRaw()],null,(()=>{e&&e()}))}updateAndAwait(){return new Promise((e=>{this.update((()=>{e(!0)}))}))}explode(e=6,t){this._mapLocation(),this.tasks.explosion.run([this._location,e],null,(()=>{t&&t()}))}explodeAwaitUpdate(e=6){return new Promise((t=>{this.explode(e,(()=>{t(!0)}))}))}}function a(e){const t=new n.w(e.threads.constructors),s=new i(t);e.TC.registerTask(r.m.RunBuildQueue,(async([e,s])=>{for(const r of s)t.build.section.run([e,...r])})),e.TC.registerTask(r.m.PlaceVoxel,(async([e,[t,r,n],o])=>{s.start(e,t,r,n),s.setData(o),await s.setXYZ(t,r,n).paintAndAwaitUpdate(),s.stop()})),e.TC.registerTask(r.m.RemoveVoxel,(async([e,[t,r,n]])=>{s.start(e,t,r,n),await s.setXYZ(t,r,n).eraseAndAwaitUpdate(),s.stop()})),e.TC.registerTask("build-queue",(async([e,s])=>{for(const r of s)t.build.section.run([e,...r])}))}}}]);