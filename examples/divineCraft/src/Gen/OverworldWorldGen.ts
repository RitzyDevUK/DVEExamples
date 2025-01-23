import { PerlinNoise3d } from "@amodx/rng/perlin/index";
import { BrushTool } from "@divinevoxel/vlox/Tools/Brush/Brush";

import { WorldGenBrush } from "@divinevoxel/vlox/Tasks/WorldGeneration/WorldGenBrush";
const worldPerlin = new PerlinNoise3d();
worldPerlin.noiseSeed(8908908090);
const detailPerlin = new PerlinNoise3d();
detailPerlin.noiseSeed(23904829482038429);
const biomePerlin = new PerlinNoise3d();
biomePerlin.noiseSeed(203948239);

const voxels = {
  stone: "dc_stone",
  cobbleStone: "dc_cobble_stone",
  grassBlock: "dc_grass_block",
  oakLog: "dc_oak_log",
  oakLeaves: "dc_oak_leaves",
  water: "dc_water",
  glowStone: "dc_glow_stone",
  sand: "dc_sand",
  dirt: "dc_dirt",
};
enum Biomes {
  Ocean,
  Beach,
  Grassland,
  Forest,
  Desert,
}

const brush = new BrushTool();

export class OverworldWorldGen {
  chunkDepth = 16;
  chunkWidth = 16;
  worldHeight = 120;
  waterHeight = 60;

  getBiome(x: number, z: number): Biomes {
    const [xOffSet, yOffset, zOffSet] = [1000, 100, 10000];
    const scale = 120;
    let value = biomePerlin.get(
      (x + xOffSet) / scale,
      0,
      (z + zOffSet) / scale
    );
    if (value > 0.8) return Biomes.Desert;
    if (value > 0.6) return Biomes.Ocean;
    if (value <= 0.6 && value >= 0.55) return Biomes.Beach;
    if (value <= 0.55 && value >= 0.35) return Biomes.Grassland;
    if (value <= 0.35 && value >= 0.15) return Biomes.Forest;
    return Biomes.Grassland;
  }

  inNoiseRange(x: number, y: number, z: number) {
    const [xOffSet, yOffset, zOffSet] = [1000, 0, 10000];

    let detail = detailPerlin.get(
      (x - xOffSet) / 120,
      y / 240,
      (z - zOffSet) / 120
    );
    return !(detail > 0.7 && detail < 0.9);
  }
  carveCave(x: number, y: number, z: number): boolean {
    const terrainScale = 50;
    const caveScale = 20;

    const terrainNoise = worldPerlin.get(
      x / terrainScale,
      y / terrainScale,
      z / terrainScale
    );

    const caveNoise = detailPerlin.get(
      x / caveScale,
      y / caveScale,
      z / caveScale
    );

    const minCaveThreshold = 0.4;
    const maxCaveThreshold = 0.6;
    const minGradient = 0.2;
    const maxGradient = 0.8;

    const caveThreshold =
      minCaveThreshold + (maxCaveThreshold - minCaveThreshold) * terrainNoise;

    const gradient = minGradient + (maxGradient - minGradient) * terrainNoise;

    const scale = 0.5;
    const modifiedCaveThreshold = caveThreshold - scale * caveNoise;
    const modifiedGradient = gradient + scale * caveNoise;

    const shouldCarveCave =
      caveNoise < modifiedCaveThreshold &&
      y < modifiedGradient * this.worldHeight;

    return shouldCarveCave;
  }

  noiseHeight(x: number, z: number) {
    const [xOffSet, zOffSet] = [1000, 10000];
    const scale = 240;
    let height =
      worldPerlin.get((x + xOffSet) / scale, 0, (z + zOffSet) / scale) *
      this.worldHeight;
    return height;
  }
  generateTree(x: number, y: number, z: number) {
    brush.setId("dc_oak_log").setXYZ(x, y, z).paint();
    for (let dy = y + 1; dy <= y + 6; dy++) {
      brush.setId("dc_oak_log").setXYZ(x, dy, z).paint();
    }
    this.addLeaves(x, y + 6, z);
    this.addLeaves(x, y + 5, z);
    brush
      .setId("dc_oak_leaves")
      .setXYZ(x, y + 7, z)
      .paint();
  }

  addLeaves(x: number, y: number, z: number) {
    const offsets = [-1, 0, 1];
    offsets.forEach((dx) => {
      offsets.forEach((dz) => {
        if (dx !== 0 || dz !== 0) {
          brush
            .setId("dc_oak_leaves")
            .setXYZ(x + dx, y, z + dz)
            .paint();
        }
      });
    });
  }

  generateWorldColumn(brush: WorldGenBrush, chunkX: number, chunkZ: number) {
    for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
      for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
        const height = this.noiseHeight(x, z);
        for (let y = 0; y < this.worldHeight; y++) {
          if (y == 0 || y < height) {
            brush.setId(voxels.stone).setXYZ(x, y, z).paint();
            continue;
          }
        }
      }
    }
  }
  carveWorldColumn(brush: WorldGenBrush, chunkX: number, chunkZ: number) {
    const dataTool = brush.dataCursor;
    for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
      for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
        for (let y = 0; y < this.worldHeight; y++) {
          if (y == 0) {
            continue;
          }
          const voxel = dataTool.getVoxel(x, y, z);

          if (voxel && !voxel.isRenderable()) continue;
          if (this.carveCave(x, y, z)) {
            if (voxel?.getStringId() == voxels.water) continue;
            brush.setXYZ(x, y, z).erase();
          }
        }
      }
    }
  }
  fillWorldColumn(brush: WorldGenBrush, chunkX: number, chunkZ: number) {
    const dataTool = brush.dataCursor;
    for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
      for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
        const biomes = this.getBiome(x, z);
        for (let y = this.waterHeight + 1; y > 0; y--) {
          const voxel = dataTool.getVoxel(x, y, z);

          if (voxel && voxel.isRenderable()) {
            let i = y;
            while (i <= this.waterHeight) {
              if (y < this.waterHeight && biomes == Biomes.Ocean) {
                brush.setId(voxels.water).setXYZ(x, y, z).paint();
              }
              if (y < this.waterHeight && biomes == Biomes.Beach) {
                brush.setId(voxels.sand).setXYZ(x, y, z).paint();
              }
              i++;
            }
            break;
          } else {
            if (y < this.waterHeight && biomes == Biomes.Ocean) {
              brush.setId(voxels.water).setXYZ(x, y, z).paint();
            }
            if (y < this.waterHeight && biomes == Biomes.Beach) {
              brush.setId(voxels.sand).setXYZ(x, y, z).paint();
            }
          }
        }
      }
    }
  }
  addTopLayersToColumn(brush: WorldGenBrush, chunkX: number, chunkZ: number) {
    const dataTool = brush.dataCursor;
    for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
      for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
        const biomes = this.getBiome(x, z);
        for (let y = 1; y < this.worldHeight; y++) {
          const topAir = dataTool.getVoxel(x, y + 1, z)?.isAir() || true;
          const voxelId = dataTool.getVoxel(x, y, z)?.getStringId();

          if (
            biomes == Biomes.Grassland ||
            biomes == Biomes.Ocean ||
            biomes == Biomes.Beach ||
            biomes == Biomes.Forest
          ) {
            if (topAir && voxelId == voxels.stone) {
              brush.setId(voxels.grassBlock).setXYZ(x, y, z).paint();
              let i = 5;
              while (i--) {
                brush
                  .setId(voxels.dirt)
                  .setXYZ(x, y - 1 - i, z)
                  .paint();
              }
            }
          }
          if (biomes == Biomes.Desert) {
            if (topAir && voxelId == voxels.stone) {
              brush.setId(voxels.sand).setXYZ(x, y, z).paint();
              let i = 5;
              while (i--) {
                brush
                  .setId(voxels.sand)
                  .setXYZ(x, y - 1 - i, z)
                  .paint();
              }
            }
          }
        }
      }
    }
  }
  decorateWorldColumn(brush: WorldGenBrush, chunkX: number, chunkZ: number) {
    const dataTool = brush.dataCursor;
    for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
      for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
        const biomes = this.getBiome(x, z);
        for (let y = 1; y < this.worldHeight; y++) {
          const topAir = dataTool.getVoxel(x, y + 1, z)?.isAir() || false;
          const voxelId = dataTool.getVoxel(x, y, z)?.getStringId();

          if (
            biomes == Biomes.Grassland ||
            biomes == Biomes.Ocean ||
            biomes == Biomes.Beach ||
            biomes == Biomes.Forest
          ) {
            if (topAir && voxelId == voxels.grassBlock) {
              if (Math.random() > (biomes == Biomes.Forest ? 0.9 : 0.99)) {
                this.generateTree(x, y + 1, z);
              }
            }
          }
          if (biomes == Biomes.Desert) {
            if (topAir && voxelId == voxels.grassBlock) {
              if (Math.random() > 0.999) {
                this.generateTree(x, y + 1, z);
              }
            }
          }
        }
      }
    }
  }
}
