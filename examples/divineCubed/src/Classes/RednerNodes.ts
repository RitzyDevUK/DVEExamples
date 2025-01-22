import { DivineVoxelEngineRender } from "@divinevoxel/vlox/Contexts/Render";
import { DVEFBRCore } from "@divinevoxel/vlox-babylon/Defaults/Foundation/DVEFBRCore";
import { UniversalCamera, type Camera } from "@babylonjs/core";
import { Scene } from "@babylonjs/core/scene";
import { Engine } from "@babylonjs/core/Engines/engine";

import { SceneTool } from "@divinevoxel/vlox-babylon/Defaults/Foundation/Tools/SceneTool";

export class RenderNodes {
  scene: Scene;
  camera: UniversalCamera;
  engine: Engine;
  canvas: HTMLCanvasElement;
  sceneTool: SceneTool;
  core: DVEFBRCore;
  DVER: DivineVoxelEngineRender;
}
