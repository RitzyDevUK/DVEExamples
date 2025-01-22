import { WorldGenBrush } from "@divinevoxel/vlox/Tasks/WorldGeneration/WorldGenBrush";
import { NooiseLayers } from "./NoiseLayers";
import { DataTool } from "@divinevoxel/vlox/Tools/Data/DataTool";

export class GenNodes {
  chunkDepth = 16;
  chunkWidth = 16;
  minHeight = 60;
  worldHeight = 256;
  noiseHeight = 120;
  waterHeight = 60;
  noise: NooiseLayers;
  brush: WorldGenBrush;
  dataTool: DataTool;

  init(data:{
    noise: NooiseLayers;
    brush: WorldGenBrush;
    dataTool: DataTool;
  }) {
    this.noise = data.noise;
    this.brush = data.brush;
    this.dataTool = data.dataTool;

  }
}
