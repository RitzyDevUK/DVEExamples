import { Vector3Like } from "@amodx/math";
import { LocationData } from "@divinevoxel/vlox/Math";
import { WorldSpaces } from "@divinevoxel/vlox/World/WorldSpaces";
import { GenMapTile } from "./GenMapTile";
import { GenMap } from "./GenMap";
import { Column } from "@divinevoxel/vlox/World/Column";

export type WorldMapTilesRegisterColumn = {
  location: LocationData;
  tile: GenMapTile;
};

export type WorldMapTileRegisterDimensions = {
  columns: Map<string, GenMapTile>;
};

export class GenMapTilesRegister {
  _dimensions = new Map<string, WorldMapTileRegisterDimensions>();

  constructor(public worldMap: GenMap) {
    this._dimensions.set("main", {
      columns: new Map(),
    });
  }

  clearAll() {
    for (const [dkey, dim] of this._dimensions) {
      this.dimensions.remove(dkey);
    }
    this._dimensions.set("main", {
      columns: new Map(),
    });
  }

  dimensions = {
    add: (id: string) => {
      const dimesnion = new Map();
      this._dimensions.set(id, {
        columns: new Map(),
      });
      return dimesnion;
    },
    get: (id: string) => {
      return this._dimensions.get(id);
    },
    remove: (id: string) => {
      const dimension = this._dimensions.get(id);
      if (!dimension) return false;
      dimension.columns.forEach((column) => {
        column.dispose();
      });
      this._dimensions.delete(id);
      return true;
    },
  };

  column = {
    add: (location: LocationData,column:Column) => {
      const dimension = this.dimensions.get(location[0])!;
      const columnLocation: LocationData = [
        location[0],
        ...Vector3Like.ToArray(
          WorldSpaces.column.getPositionXYZ(
            location[1],
            location[2],
            location[3]
          )
        ),
      ] as LocationData;

      const tile = new GenMapTile(this.worldMap, column,columnLocation);
      dimension.columns.set(
        WorldSpaces.column.getKeyXYZ(location[1], location[2], location[3]),
        tile
      );
      return tile;
    },
    remove: (location: LocationData) => {
      const dimension = this.dimensions.get(location[0])!;

      const columnKey = WorldSpaces.column.getKeyXYZ(
        location[1],
        location[2],
        location[3]
      );

      const column = dimension.columns.get(columnKey);
      if (!column) return false;
      column.dispose();
      dimension.columns.delete(columnKey);
      if (dimension.columns.size == 0) {
        //  dimension.remove(location);
      }
      return column;
    },
    get: (location: LocationData) => {
      const dimension = this.dimensions.get(location[0])!;

      if (!dimension) return false;
      return dimension.columns.get(
        WorldSpaces.column.getKeyXYZ(location[1], location[2], location[3])
      );
    },
  };
}
