import { BinaryNumberTypes, BinaryStruct } from "@amodx/binary/";
import { PlayerPhysicsTagIDs } from "./PlayerPhysicsData";
import { PlayerStatsTagIDs } from "./PlayerStatsData";

export function RegisterPlayerData() {
  const playerPhysicsTagManager = new BinaryStruct("player-physics-tags");
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.header,
    type: "header",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.position,
    type: "typed-number-array",
    numberType: BinaryNumberTypes.Float64,
    length: 3,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.pickPosition,
    type: "typed-number-array",
    numberType: BinaryNumberTypes.Float64,
    length: 3,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.pickNormals,
    type: "typed-number-array",
    numberType: BinaryNumberTypes.Int8,
    length: 3,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.rotation,
    type: "typed-number-array",
    numberType: BinaryNumberTypes.Float32,
    length: 3,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.direction,
    type: "typed-number-array",
    numberType: BinaryNumberTypes.Float32,
    length: 3,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.sideDirection,
    type: "typed-number-array",
    numberType: BinaryNumberTypes.Float32,
    length: 3,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.eyeLevel,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint8,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.states.movement,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint8,
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.states.secondaryMovement,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint8,
  });

  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.states.jumping,
    type: "boolean",
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.states.running,
    type: "boolean",
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.states.onGround,
    type: "boolean",
  });
  playerPhysicsTagManager.registerProperty({
    id: PlayerPhysicsTagIDs.states.inWater,
    type: "boolean",
  });
  playerPhysicsTagManager.init({ indexBufferMode: "shared" });

  const playerStatesTagManger = new BinaryStruct("player-states-tags");
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.header,
    type: "header",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.level,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.exp,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.currentMana,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.maxMana,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.currentEnergy,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.maxEnegery,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.speed,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.jumpPower,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });
  playerStatesTagManger.registerProperty({
    id: PlayerStatsTagIDs.intuition,
    type: "typed-number",
    numberType: BinaryNumberTypes.Uint16,
  });

  playerStatesTagManger.init({ indexBufferMode: "shared" });
  return {
    playerPhysicsTagManager,
    playerStatesTagManger,
  };
}
