import { DivineVoxelEngineWorld } from "@divinevoxel/vlox/Contexts/World";
import { StartWorld } from "@divinevoxel/vlox/Init/StartWorld";
import { voxelData } from "../../Data/VoxelData";
import { IWG } from "@divinevoxel/vlox/Tasks/IWG/World/";
import { SafeInterval } from "@amodx/core/Intervals/SafeInterval";
import { Vec3Array } from "@amodx/math";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { DivineVoxelEngineDataLoaderWorld } from "@divinevoxel/vlox/Tasks/DataLoader/World/DivineVoxelEngineDataLoaderWorld";
import { DefaultDataHandler } from "@divinevoxel/vlox/Tasks/DataLoader/Broswer/DataHandler";

console.warn("START WORLD");
const DVEW = await StartWorld();
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
DivineVoxelEngineWorld.instance.TC.registerTasks(
  "start-world-test",
  async () => {}
);
DivineVoxelEngineWorld.instance.TC.registerTasks("start-world", async () => {
  const numChunks = 5;
  let startX = -16 * numChunks;
  let startZ = -16 * numChunks;
  let endX = 16 * numChunks;
  let endZ = 16 * numChunks;

  const positionWatch: Vec3Array = [0, 0, 0];
  const velocityWatch: Vec3Array = [0, 0, 0];
  console.log("Start inital load");
  await IWG.initalLoad("main", [0, 0, 0], {
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
    saveWorldData: true,
    velocityWatch,
    velocityScale: 150,
  });
  generate.data.saveWorldData = false;
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

  const velocityNormal = new Vector3();

  const playerInit = async () => {
    //  const player = await InitWorldPlayer(DVEW);
    const velocity = new SafeInterval(() => {
      /*    velocityNormal
        .set(
          player.manager.physics.direction.x,
          0,
          player.manager.physics.direction.z
        )
        .normalize();
      velocityWatch[0] = velocityNormal.x;
      velocityWatch[1] = 0;
      velocityWatch[2] = velocityNormal.z;
      positionWatch[0] = player.manager.physics.position.x;
      positionWatch[1] = player.manager.physics.position.y;
      positionWatch[2] = player.manager.physics.position.z; */
    }, 2_000).start();
  };

  const playerStartCheck = new SafeInterval();
  playerStartCheck.setOnRun(async () => {
    if (
      generate.tasks["world-gen"].get("dve_iwg_generate")!.waitingFor == 0 &&
      generate.tasks["world-gen"].get("dve_iwg_load")!.waitingFor == 0
    ) {
      playerStartCheck.stop();
      await playerInit();
    }
  });
  playerStartCheck.start();
});
