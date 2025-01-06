import { DivineVoxelEngineWorld } from "@divinevoxel/core/Contexts/World";
import { StartWorld } from "@divinevoxel/foundation/Default/Init/StartWorld";
import { voxelData } from "../../Data/VoxelData";
import { InitWorldPlayer } from "Player/WorldPlayer";
import { IWG } from "@divinevoxel/foundation/Default/IWG/World/";
import { SafeInterval } from "@amodx/core/Intervals/SafeInterval";
import { Vec3Array } from "@amodx/math";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { DivineVoxelEngineDataLoaderWorld } from "@divinevoxel/foundation/Default/DataLoader/World/DivineVoxelEngineDataLoaderWorld";
import { DefaultDataHandler } from "@divinevoxel/foundation/Default/DataLoader/Broswer/DataHandler";

const { DVEW, core } = await StartWorld({
  nexusEnabled: true,
  voxels: voxelData,
});

const dataHanlder = new DefaultDataHandler();
await dataHanlder.init();
await dataHanlder.openWorldDataBae("main");

const DVEDL = new DivineVoxelEngineDataLoaderWorld({
  dataHanlder,
});
await DVEDL.init();
DivineVoxelEngineWorld.instance.TC.registerTasks(
  "start-world-test",
  async () => {
    const player = await InitWorldPlayer(DVEW);
  }
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
    const player = await InitWorldPlayer(DVEW);
    const velocity = new SafeInterval(() => {
      velocityNormal
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
      positionWatch[2] = player.manager.physics.position.z;
    }, 2_000).start();
  };

  const playerStartCheck = new SafeInterval();
  playerStartCheck.setOnRun(async () => {
    if (
      generate.tasks["world-gen"].get("#dve_iwg_generate")!.waitingFor == 0 &&
      generate.tasks["world-gen"].get("#dve_iwg_load")!.waitingFor == 0
    ) {
      playerStartCheck.stop();
      await playerInit();
    }
  });
  playerStartCheck.start();
});
