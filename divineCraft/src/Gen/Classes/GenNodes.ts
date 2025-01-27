import { WorldGenBrush } from "@divinevoxel/vlox/Tasks/WorldGeneration/WorldGenBrush";
import { NooiseLayers } from "./NoiseLayers";
import { SubstanceDataTool } from "@divinevoxel/vlox/Tools/Data/SubstanceDataTool";

export class GenNodes {
  chunkDepth = 16;
  chunkWidth = 16;
  minHeight = 60;
  worldHeight = 256;
  noiseHeight = 120;
  waterHeight = 60;
  noise: NooiseLayers;
  brush: WorldGenBrush;
  substanceTool: SubstanceDataTool;

  init(data:{
    noise: NooiseLayers;
    brush: WorldGenBrush;
    substanceTool: SubstanceDataTool;

  }) {
    this.noise = data.noise;
    this.brush = data.brush;
    this.substanceTool = data.substanceTool;

  }
}
