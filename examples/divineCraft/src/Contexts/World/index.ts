import { DivineVoxelEngineWorld } from "@divinevoxel/core/Contexts/World";
import { StartWorld } from "@divinevoxel/foundation/Default/Init/StartWorld";
import { OverworldWorldGen } from "../../Gen/OverworldWorldGen";
import { voxelData } from "../../Data/VoxelData";
import { InitWorldPlayer } from "Player/WorldPlayer";
import { IWG } from "@divinevoxel/foundation/Default/IWG/World/";
import { SafeInterval } from "@divinestar/utils/Intervals/SafeInterval";
import { Vec3Array } from "@divinevoxel/core/Math";
const { DVEW, core } = await StartWorld({
  nexusEnabled: true,
  voxels: voxelData,
});

const worldGen = new OverworldWorldGen();

DivineVoxelEngineWorld.instance.TC.registerTasks("start-world", async () => {
  const numChunks = 5;
  let startX = -16 * numChunks;
  let startZ = -16 * numChunks;
  let endX = 16 * numChunks;
  let endZ = 16 * numChunks;

  /*   const builder = core.getBuilder();

  const tasks = core.getTasksTool();
  tasks.setFocalPoint(["main", 0, 0, 0]);
  for (let x = startX; x < endX; x += 16) {
    for (let z = startZ; z < endZ; z += 16) {
      builder.setXZ(x, z).fillColumn();
      worldGen.generateWorldColumn(x, z);
      worldGen.fillWorldColumn(x, z);
      worldGen.decorateWorldColumn(x, z);
      tasks.propagation.queued.add(["main", x, 0, z]);
      tasks.worldSun.queued.add(["main", x, 0, z]);
    }
  }

  await tasks.worldSun.queued.runAndAwait();
  await tasks.propagation.queued.runAndAwait();

  for (let x = startX; x < endX; x += 16) {
    for (let z = startZ; z < endZ; z += 16) {
      builder.setXZ(x, z).buildColumn();
    }
  }
 */

  const player = await InitWorldPlayer(DVEW);
  const positionWatch: Vec3Array = player.manager.physics.position.getAsArray();
  const generate = IWG.addGenerator({
    id: "level-create",
    renderDistance: 150,
    generateDistance: 200,
    positionWatch,
    saveWorldData: false,
  });

  const generateInterval = new SafeInterval(() => {
    generate.searchUpdate();
    generate.worldGenUpdate(Infinity);
    positionWatch[0] = player.manager.physics.position.x;
    positionWatch[1] = player.manager.physics.position.y;
    positionWatch[2] = player.manager.physics.position.z;
  }, 10).start();

  /* 
  const saveInterval = new SafeInterval(() => {
    generate.saveUpdate();
  }, 10_000).start(); */
});
