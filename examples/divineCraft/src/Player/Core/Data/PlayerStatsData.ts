import { RemoteBinaryStruct, RemoteBinaryStructData } from "@amodx/binary";

export const PlayerStatsTags = new RemoteBinaryStruct("player-stats-tags");

export const PlayerStatsTagIDs = {
  header: "#header",
  level: "#level",
  exp: "#exp",
  maxMana: "#max_mana",
  currentMana: "#current_mana",
  maxEnegery: "#max_energy",
  currentEnergy: "#current_energy",
  speed: "#speed",
  jumpPower: "#jump_power",
  intuition: "#intuition",
};

export class PlayerStatsData {
  tags = new RemoteBinaryStruct("player-stairs-data");
  constructor(sab: SharedArrayBuffer, initData: RemoteBinaryStructData) {
    this.tags.init(initData);
    this.tags.setBuffer(sab);
  }

  get level() {
    return this.tags.getProperty(PlayerStatsTagIDs.level);
  }
  set level(level: number) {
    this.tags.setProperty(PlayerStatsTagIDs.level, level);
  }

  get exp() {
    return this.tags.getProperty(PlayerStatsTagIDs.exp);
  }
  set exp(exp: number) {
    this.tags.setProperty(PlayerStatsTagIDs.exp, exp);
  }

  get maxMana() {
    return this.tags.getProperty(PlayerStatsTagIDs.maxMana);
  }
  set maxMana(maxMana: number) {
    this.tags.setProperty(PlayerStatsTagIDs.maxMana, maxMana);
  }

  get currentMana() {
    return this.tags.getProperty(PlayerStatsTagIDs.currentMana);
  }
  set currentMana(currentMana: number) {
    this.tags.setProperty(PlayerStatsTagIDs.currentMana, currentMana);
  }

  get maxEnegery() {
    return this.tags.getProperty(PlayerStatsTagIDs.maxEnegery);
  }
  set maxEnegery(maxEnegery: number) {
    this.tags.setProperty(PlayerStatsTagIDs.maxEnegery, maxEnegery);
  }

  get currentEnergy() {
    return this.tags.getProperty(PlayerStatsTagIDs.currentEnergy);
  }
  set currentEnergy(currentEnergy: number) {
    this.tags.setProperty(PlayerStatsTagIDs.currentEnergy, currentEnergy);
  }

  get speed() {
    return this.tags.getProperty(PlayerStatsTagIDs.speed);
  }
  set speed(speed: number) {
    this.tags.setProperty(PlayerStatsTagIDs.speed, speed);
  }

  get jumpPower() {
    return this.tags.getProperty(PlayerStatsTagIDs.jumpPower);
  }
  set jumpPower(jumpPower: number) {
    this.tags.setProperty(PlayerStatsTagIDs.jumpPower, jumpPower);
  }

  get intuition() {
    return this.tags.getProperty(PlayerStatsTagIDs.intuition);
  }
  set intuition(intuition: number) {
    this.tags.setProperty(PlayerStatsTagIDs.intuition, intuition);
  }
}
