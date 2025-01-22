import { useEffect, useMemo, useRef, useState } from "react";
import InitDVErenderer from "@divinevoxel/vlox-babylon/Init/Classic/InitDVEBRClassic";
import { StartRenderer } from "@divinevoxel/vlox/Init/StartRenderer";
import {
  CreateSphere,
  Engine,
  Scene,
  UniversalCamera,
  Vector3,
} from "@babylonjs/core";

import { textureData } from "Data/TextureData";
import { SceneTool } from "@divinevoxel/vlox-babylon/Tools/SceneTool";
import { RenderNodes } from "Classes";
import { VoxelSelect } from "Components/VoxelSelect/VoxelSelect";
import { WorldMapComponent } from "Map/WorldMapComponent";
import { voxelData } from "Data/VoxelData";

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
export function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [nodes, setNodes] = useState<RenderNodes | null>(null);

  const noWorldGen = useMemo(() => {
    const urlObj = new URL(window.location.href);
    const params = new URLSearchParams(urlObj.search);
    return params.has("no-world-gen");
  }, [window.location.href]);

  useEffect(() => {
    (async () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;

      let antialias = false;
      const engine = new Engine(canvas, antialias);
      engine.doNotHandleContextLost = true;
      engine.enableOfflineSupport = false;

      const nodes = new RenderNodes();
      engine.setSize(window.innerWidth, window.innerHeight);
      let dirty = false;
      window.addEventListener("resize", function () {
        engine.resize();
        dirty = true;
      });

      canvasRef.current.addEventListener("click", () => {
        canvas.requestPointerLock();
      });
      const scene = new Scene(engine);

      const camera = new UniversalCamera("", new Vector3(0, 0, 0));

      camera.position.y = 70;

      camera.setTarget(Vector3.Zero());

      camera.maxZ = 1000;
      camera.fov = 1.8;
      camera.attachControl(canvas, true);

      scene.activeCamera = camera;
      scene.collisionsEnabled = false;

      engine.runRenderLoop(() => {
        scene.render();
      });

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

      await DVER.threads.world.waitTillTasksExist("start-world");
      if (noWorldGen) {
        DVER.threads.world.runTasks("start-world-test", []);
      } else {
        console.warn("start world gen");
        DVER.threads.world.runTasks("start-world", []);
      }

      nodes.camera = camera;
      nodes.scene = scene;
      nodes.canvas = canvas;
      nodes.engine = engine;

      nodes.sceneTool = sceneTool;
      (window as any).nodes = nodes;
      setNodes(nodes);
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {nodes && <WorldMapComponent nodes={nodes} />}
      <VoxelSelect />
      <canvas
        style={{
          width: "100%",
          height: "100%",
          touchAction: "none",
        }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
