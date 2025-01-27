import { Biome, BiomeConstructor, BiomeData } from "../../../Classes/Biome";
import { StandardCaves } from "../../Caves/StandardCaves";
import { VoxelData, Voxels } from "../Voxels";
import { Trees } from "../Tree";
import { BeacheBiome } from "./BeacheBiome";
import { Plants } from "../Plants";
import { Caves } from "../Caves";
import { getBiomeRange } from "Gen/Biome.types";
import { RockyBeacheBiome } from "./RockyBeacheBiome";
import { IcyBeacheBiome } from "./IcyBeacheBiome";
const [xOffSet, zOffSet] = [1000, 10000];
const scale = 480;
export class FrozenOceanBiome extends Biome {
  static data: BiomeData = {
    id: "frozen-ocean",
    heightBlendFactor: 1,
    color: [57, 99, 102],
    edgeFactor: [0, [0.1, 0], 0, 0],
    edgeBiomes: [
      [BeacheBiome.data.id, getBiomeRange([0, 1])],
      [RockyBeacheBiome.data.id, getBiomeRange(undefined, undefined, [0.7, 1])],
      [IcyBeacheBiome.data.id, getBiomeRange([-1, -0.5])],
    ],
  };
  caveCarver = new StandardCaves(this.nodes);

  getGenVoxel(x: number, y: number, z: number) {
    return VoxelData[Voxels.Stone];
  }

  getCarved(x: number, y: number, z: number): boolean {
    return Caves.getCarved(x, y, z);
  }
  getBlendtoHeight(x: number, y: number, z: number): number {
    return this.nodes.waterHeight;
  }
  getHeight(x: number, y: number, z: number): number {
    let height =
      this.nodes.minHeight -
      ((1 +
        this.nodes.noise.worldGenNoise(
          (x + xOffSet) / scale,
          0,
          (z + zOffSet) / scale
        )) /
        2) *
        40;
    return height;
  }

  addTopLayer(x: number, y: number, z: number) {
    const brush = this.nodes.brush;
    const dataTool = brush.dataCursor;
    const topVoxel = dataTool.getVoxel(x, y + 1, z);
    const topAir =
      topVoxel?.isAir() ||
      (topVoxel?.isRenderable() &&
        this.nodes.substanceTool
          .setSubstance(dataTool.getVoxel(x, y + 1, z)!.getSubstance())
          .isLiquid()) ||
      false;
    const voxel = dataTool.getVoxel(x, y, z)?.getStringId();
    if (topAir && voxel == Voxels.Stone!) {
      brush.setData(VoxelData[Voxels.Dirt]).setXYZ(x, y, z).paint();
      let i = 5;
      while (i--) {
        brush
          .setData(VoxelData[Voxels.Dirt])
          .setXYZ(x, y - 1 - i, z)
          .paint();
      }
      return true;
    }
    return false;
  }
  fill(x: number, y: number, z: number) {
    const { brush } = this.nodes;

    if (Math.random() > 0.8)
      brush
        .setId(Voxels.Ice)
        .setXYZ(x, this.nodes.waterHeight + 1, z)
        .paint();

    brush.setId(Voxels.Ice).setXYZ(x, this.nodes.waterHeight, z).paint();
    let i = y;
    brush.setId(Voxels.Water).setLevel(7);
    while (i <= this.nodes.waterHeight - 1) {
      if (y < this.nodes.waterHeight - 1) {
        brush.setXYZ(x, i, z).paint();
      }
      i++;
    }
    brush.setLevel(0);
  }
  decorate(x: number, y: number, z: number) {
    const brush = this.nodes.brush;
    const dataTool = brush.dataCursor;
    const topVoxel = dataTool.getVoxel(x, y + 1, z);
    const topAir =
      topVoxel?.isAir() ||
      (topVoxel?.isRenderable() &&
        this.nodes.substanceTool
          .setSubstance(dataTool.getVoxel(x, y + 1, z)!.getSubstance())
          .isLiquid()) ||
      false;
    const voxel = dataTool.getVoxel(x, y, z)?.getStringId();
    if (topAir && (voxel == Voxels.Dirt || voxel == Voxels.Sand)) {
      const value = Math.random();

      if (value > 0.87 && value < 0.89) {
        Plants.generateKelp(this.nodes, x, y + 1, z);
        return;
      }
      if (value > 0.98) {
        Plants.generateWaterPlant(this.nodes, x, y + 1, z);
        return;
      }
    }
  }

  getData(): BiomeData {
    return this.getClass().data;
  }
  getClass(): BiomeConstructor {
    return FrozenOceanBiome;
  }
}
