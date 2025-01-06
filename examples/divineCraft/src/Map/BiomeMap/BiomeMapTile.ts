import { LocationData } from "@divinevoxel/core/Math";
import { BiomeMap } from "./BiomeMap";
import { EntityInstance } from "@divinevoxel/babylon-renderer/Defaults/Foundation/Tools/EntityInstance";
import { WorldRegister } from "@divinevoxel/foundation/Data/World/WorldRegister";
import { ColumnDataTool } from "@divinevoxel/foundation/Default/Tools/Data/WorldData/ColumnDataTool";
import { ColumnState } from "@divinevoxel/foundation/Default/IWG/Constants/ColumnState";
import { SafeInterval } from "@amodx/core/Intervals/SafeInterval";
import { DVEBabylonRenderer } from "@divinevoxel/babylon-renderer/DVEBabylonRenderer";
import { DivineVoxelEngineRender } from "@divinevoxel/core/Contexts/Render";
import {
  Engine,
  Mesh,
  RawTexture,
  StandardMaterial,
  TextureFormat,
} from "@babylonjs/core";
import { GetBiomeImageTasks } from "Gen/WorldGen";
export class BiomeMapTile {
  static Tiles: BiomeMapTile[] = [];
  static columnTool = new ColumnDataTool();

  _instance: Mesh;

  material: StandardMaterial;
  constructor(public worldMap: BiomeMap, public location: LocationData) {
    this._instance = this.worldMap._instanceMesh.clone();
    this.material = new StandardMaterial("", this.worldMap.scene);
    this._instance.material = this.material;
    BiomeMapTile.Tiles.push(this);
    this._instance.position.set(location[1], location[2], location[3]);

    this.update();
  }

  texture: RawTexture;
  async update() {
    const image =
      await DivineVoxelEngineRender.instance.threads.construcotrs.runAsyncTasks<GetBiomeImageTasks>(
        "get-biome-image",
        [
          [this.location[1], 0, this.location[3]],
          [this.location[1] + 1024, 0, this.location[3] + 1024],
        ]
      );

    if (image instanceof Uint8ClampedArray) {
      this.texture = new RawTexture(
        image,
        1024,
        1024,
        Engine.TEXTUREFORMAT_RGBA,
        this.worldMap.scene
      );
      this.texture.updateSamplingMode(Engine.TEXTURE_NEAREST_NEAREST);
      this.material.diffuseTexture = this.texture;
    }
  }
  dispose() {
    BiomeMapTile.Tiles = BiomeMapTile.Tiles.filter((_) => _ != this);
    this._instance.dispose();
  }
}
