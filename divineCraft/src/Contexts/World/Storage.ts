import { LocationData } from "@divinevoxel/vlox/Math";
import { WorldStorageInterface } from "@divinevoxel/vlox/World/Storage/WorldStorage.interface";
import { IndexDB, DataBase, ObjectStore } from "@amodx/indexdb";
import { ThreadPool } from "@amodx/threads";
import { WorldSpaces } from "@divinevoxel/vlox/World/WorldSpaces";
import { WorldRegister } from "@divinevoxel/vlox/World/WorldRegister";

const getKey = (location: LocationData) => {
  const pos = WorldSpaces.column.getPositionXYZ(
    location[1],
    location[2],
    location[3]
  );
  return `${location[0]}-${pos.x}-${pos.y}-${pos.z}`;
};
export class WorldStorage implements WorldStorageInterface {
  _dataBase: DataBase;
  _columns: ObjectStore<any>;
  _threads: ThreadPool;

  async init(databaseName: string, threads: ThreadPool) {
    console.log("init index db");
    await IndexDB.init();
    const dataBase = await IndexDB.createOrGetDataBase({
      databaseName,
      objectStores: [
        {
          name: "columns",
          schema: [],
        },
      ],
    });
    this._threads = threads;
    this._dataBase = dataBase;
    console.log("done with init index db");
    this._columns = await this._dataBase.getObjectStore("columns");
    console.log("got columns", this._columns);
  }

  async saveColumn(location: LocationData): Promise<void> {
    const columnData = await this._threads.runTaskAsync(
      "archive-column-binary",
      location
    );
    this._columns.set(getKey(location), columnData);
  }
  async loadColumn(location: LocationData): Promise<boolean> {
    const columnKey = getKey(location);
    const columnData = await this._columns.get(columnKey);
    if (!columnData) return false;
    await this._threads.runTaskAsync("import-column-binary", [
      location,
      columnData,
    ]);
    return true;
  }
  async unloadColumn(location: LocationData): Promise<void> {
    await this.saveColumn(location);
    WorldRegister.setDimension(location[0]);
    WorldRegister.column.remove(location[1], location[2], location[3]);
  }
}
