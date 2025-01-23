import { StartContrusctor } from "@divinevoxel/vlox/Init/StartConstructor";
import RegisterCoreTasksConstructor from "@dvegames/vlox/Core/Tasks/Constructor/RegisterTasksConstructor";
import RegisterArchiverTasks from "@dvegames/vlox/Archive/Tasks/Constructor/RegisterTasksConstructor";
import { WorldGen } from "Gen/WorldGen";
import { DivineVoxelEngineDataLoaderConstructor } from "@divinevoxel/vlox/Tasks/DataLoader/Constructor/DivineVoxelEngineDataLoaderConstructor";

const gen = new WorldGen();
gen.init();
//const DVEDL = new DivineVoxelEngineDataLoaderConstructor({});
await StartContrusctor();

RegisterArchiverTasks();
RegisterCoreTasksConstructor();
