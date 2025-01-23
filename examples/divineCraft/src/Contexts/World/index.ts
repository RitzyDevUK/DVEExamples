import { DivineVoxelEngineWorld } from "@divinevoxel/vlox/Contexts/World";
import { StartWorld } from "@divinevoxel/vlox/Init/StartWorld";
import { IWG } from "@divinevoxel/vlox/Tasks/IWG/World/";
import { SafeInterval } from "@amodx/core/Intervals/SafeInterval";
import { Vec3Array } from "@amodx/math";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CreateNodeData, NCS, NodeCursor } from "@amodx/ncs";
import { TransformComponent } from "@dvegames/vlox/Core/Components/Base/Transform.component";

console.warn("START WORLD");
const DVEW = await StartWorld();
const graph = NCS.createGraph();
let player: NodeCursor | null = null;
/* console.log("done loading world start loading data loading");
const dataHanlder = new DefaultDataHandler();
await dataHanlder.init();
await dataHanlder.openWorldDataBae("main");
console.log("done making database");
const DVEDL = new DivineVoxelEngineDataLoaderWorld({
  dataHanlder,
});
await DVEDL.init(); */
console.log("data loader all done");
DivineVoxelEngineWorld.instance.TC.registerTasks<CreateNodeData>(
  "create-player",
  async (data) => {
    console.warn("Create player",data);
    player = graph.addNode(data).cloneCursor();
  }
);
DivineVoxelEngineWorld.instance.TC.registerTasks(
  "start-world-test",
  async () => {}
);
DivineVoxelEngineWorld.instance.TC.registerTasks("start-world", async () => {
  console.log("Start-world")
  if (!player) throw new Error(`Player not created yet`);
  const transform = TransformComponent.getRequired(player);
  const positionWatch: Vec3Array = [0, 0, 0];
  const velocityWatch: Vec3Array = [0, 0, 0];
  positionWatch[0] = transform.schema.position.x;
  positionWatch[1] = transform.schema.position.y;
  positionWatch[2] = transform.schema.position.z;
  console.log("Start inital load");
  await IWG.initalLoad("main", positionWatch, {
    renderDistance: 150,
    generateDistance: 250,
    saveWorldData: false,
  });
  console.log("end inital load");

  console.log("Start main generate");

  const generate = IWG.addGenerator({
    id: "level-create",
    renderDistance: 150,
    generateDistance: 250,
    generateLeadDistance: 200,
    maxDistance: 300,
    positionWatch,
    velocityWatch,
    velocityScale: 150,
    saveWorldData: false,
  });

  const generateInterval = new SafeInterval(() => {
    generate.renderTaskUpdate();
    generate.renderUpdate();
  }, 10).start();

  /*   const loginterval = new SafeInterval(() => {
    console.log(generate._logTask s());
  }, 2_000).start();
 */

  const genInterval = new SafeInterval(() => {
    //   generate.generateUpdate();
    generate.generateUpdate();
    generate.worldGenUpdate(500);
  }, 250).start();
  const saveInterval = new SafeInterval(() => {
    generate.saveUpdate(100);
  }, 30_000).start();

  const updateInterval = new SafeInterval(() => {
    positionWatch[0] = transform.schema.position.x;
    positionWatch[1] = transform.schema.position.y;
    positionWatch[2] = transform.schema.position.z;
  }, 2_000).start();

  const playerStartCheck = new SafeInterval();
  playerStartCheck.setOnRun(() => {
    if (
      generate.tasks["world-gen"].get("dve_iwg_generate")!.waitingFor == 0 &&
      generate.tasks["world-gen"].get("dve_iwg_load")!.waitingFor == 0
    ) {
      playerStartCheck.stop();
      updateInterval.start();
    }
  });
  playerStartCheck.start();
});
