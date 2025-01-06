import { Distance3D} from "@amodx/math";
import { BrushTool } from "@divinevoxel/foundation/Default/Tools/Brush/Brush";

export function GenerateSphere(
  brush: BrushTool,
  voxel: string,
  sx: number,
  sy: number,
  sz: number,
  radius: number,
  skipFactor = -1,
  noDestroy = true
) {
  let rx = sx - radius;
  let ry = sy - radius;
  let rz = sz - radius;

  brush.setId(voxel);
  const dataTool = brush._dt;
  for (let ix = rx; ix <= sx + radius; ix++) {
    for (let iz = rz; iz <= sz + radius; iz++) {
      for (let iy = ry; iy <= sy + radius; iy++) {
        if (skipFactor > -1 && Math.random() < skipFactor) continue;
        if (noDestroy && dataTool.loadInAt(ix, iy, iz)) {
          if (dataTool.isAir() && dataTool.getLevelState() == 1) continue;
          if (dataTool.isRenderable()) continue;
        }
        if (Distance3D(ix, iy, iz, sx, sy, sz) <= radius) {
          brush.setXYZ(ix, iy, iz).paint();
        }
      }
    }
  }
}