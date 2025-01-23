import InitDVErenderer from "@divinevoxel/vlox-babylon/Init/Classic/InitDVEBRClassic";
import { StartRenderer } from "@divinevoxel/vlox/Init/StartRenderer";
import { CreateSphere, Engine, Scene } from "@babylonjs/core";

import { textureData } from "Data/TextureData";
import { SceneTool } from "@divinevoxel/vlox-babylon/Tools/SceneTool";

import { voxelData } from "Data/VoxelData";
import { NCS } from "@amodx/ncs";
import CreatePlayer from "./Player/CreatePlayer";
import { BabylonContext } from "@dvegames/vlox/Babylon/Contexts/Babylon.context";
import { GameComponent } from "Game.component";
import { PlayerComponent } from "Player/Components/Player.component";
const worldWorker = new Worker(new URL("./Contexts/World/", import.meta.url), {
  type: "module",
});

const nexusWorker = new Worker(new URL("./Contexts/Nexus", import.meta.url), {
  type: "module",
});

const constructorWorkers: Worker[] = [];
for (let i = 0; i < navigator.hardwareConcurrency - 3; i++) {
  constructorWorkers.push(
    new Worker(new URL("./Contexts/Constructor/", import.meta.url), {
      type: "module",
    })
  );
}
export default async function (canvas: HTMLCanvasElement) {
  let antialias = false;
  const engine = new Engine(canvas, antialias);
  engine.doNotHandleContextLost = true;
  engine.enableOfflineSupport = false;

  engine.setSize(window.innerWidth, window.innerHeight);
  window.addEventListener("resize", () => {
    engine.resize();
  });

  canvas.addEventListener("click", () => {
    canvas.requestPointerLock();
  });
  const scene = new Scene(engine);

  scene.collisionsEnabled = false;

  const renderer = await InitDVErenderer({
    textureTypes: [],
    substances: [],
    scene: scene,
    textureData,
  });

  const DVER = await StartRenderer({
    voxels: voxelData,
    renderer,
    worldWorker,
    nexusWorker,
    constructorWorkers,
  });
  const skybox = CreateSphere("skyBox", { diameter: 400.0 }, scene);
  skybox.infiniteDistance = true;
  const skyboxMat = renderer.materials.get("dve_skybox");
  if (skyboxMat) {
    skybox.material = skyboxMat._material;
    skybox.material!.backFaceCulling = false;
  }
  const sceneTool = new SceneTool();
  sceneTool.fog.setDensity(0.00001);
  sceneTool.fog.setColor(1, 1, 1);
  sceneTool.options.doSun(true);
  sceneTool.options.doAO(true);
  sceneTool.options.doRGB(true);
  sceneTool.levels.setSun(0.8);
  sceneTool.levels.setBase(0.01);

  await DVER.threads.world.waitTillTasksExist("create-player");

  const graph = NCS.createGraph();
  BabylonContext.set(graph.root, null, null, {
    scene,
    engine,
  });

  const game = GameComponent.set(graph.root);

  const player = await CreatePlayer(DVER, graph);

  game.data.player = PlayerComponent.getRequired(player);
  engine.runRenderLoop(() => {
    scene.render();
    graph.update();
  });

  const urlObj = new URL(window.location.href);
  const params = new URLSearchParams(urlObj.search);
  await DVER.threads.world.waitTillTasksExist("start-world");

  if (params.has("no-world-gen")) {
    DVER.threads.world.runTasks("start-world-test", []);
  } else {
    console.warn("start world gen");
    DVER.threads.world.runTasks("start-world", []);
  }

  return graph;
}
