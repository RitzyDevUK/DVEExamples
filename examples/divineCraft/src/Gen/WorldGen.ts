import { WorldGeneration } from "@divinevoxel/foundation/Default/WorldGeneration/WorldGeneration";

import { WorldGenInterface } from "@divinevoxel/foundation/Interfaces/WorldGen/WorldGen.types";
import { GenerateTasks } from "@divinevoxel/foundation/Types/Tasks.types";
import { OverworldWorldGen } from "./OverworldWorldGen";
import { WorldGenBrush } from "@divinevoxel/foundation/Default/WorldGeneration/WorldGenBrush";

const brush = new WorldGenBrush();
const overWorld = new OverworldWorldGen();
export class WorldGen implements WorldGenInterface {
  init() {
    WorldGeneration.setWorldGen(this);
  }

  async generate([[dimension, x, y, z], data]: GenerateTasks): Promise<any> {
    overWorld.generateWorldColumn(brush, x, z);
    overWorld.fillWorldColumn(brush, x, z);
  }
  async decorate([[dimension, x, y, z], data]: GenerateTasks): Promise<any> {
    overWorld.decorateWorldColumn(brush, x, z);
  }
}
