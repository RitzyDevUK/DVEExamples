import { StartContrusctor } from "@divinevoxel/foundation/Default/Init/StartConstructor";
import { DVEDefaultBuilder } from "@divinevoxel/foundation/Default/Builder/Builder";
import { WorldGen } from "Gen/WorldGen";
import { DivineVoxelEngineDataLoaderConstructor } from "@divinevoxel/foundation/Default/DataLoader/Constructor/DivineVoxelEngineDataLoaderConstructor";
const defaults = DVEDefaultBuilder.defaults;
const gen = new WorldGen();

const DVEDL = new DivineVoxelEngineDataLoaderConstructor({
});
await DVEDL.init();
console.log("DVE Data Loader Loaded");

gen.init();
await StartContrusctor({
  builder: {
    constructors: [
      defaults.box.simple("dc_grass_block", {
        top: ["#dve_solid", "dc_grass_block"],
        bottom: ["#dve_solid", "dc_grass_block", "bottom"],
        north: ["#dve_solid", "dc_grass_block", "side"],
        south: ["#dve_solid", "dc_grass_block", "side"],
        east: ["#dve_solid", "dc_grass_block", "side"],
        west: ["#dve_solid", "dc_grass_block", "side"],
      }),
      defaults.box.simple("dc_cobble_stone", ["#dve_solid", "dc_cobble_stone"]),
      defaults.box.simple("dc_dirt", ["#dve_solid", "dc_dirt"]),
      defaults.box.simple("dc_glow_stone", ["#dve_glow", "dc_glow_stone"]),
      defaults.box.simple("dc_sea_lantern", ["#dve_glow", "dc_sea_lantern"]),
      defaults.box.simple("dc_redstone_lamp", ["#dve_glow", "dc_redstone_lamp"]),
      defaults.liquid.simple("dc_water", [
        ["#dve_liquid", "dc_water"],
        ["#dve_liquid", "dc_water"],
      ]),

      defaults.box.simple("dc_oak_leaves", ["#dve_flora", "dc_oak_leaves"]),
      defaults.box.simple("dc_oak_log", ["#dve_solid", "dc_oak_log"]),
      defaults.box.simple("dc_oak_planks", ["#dve_solid", "dc_oak_planks"]),

      defaults.box.simple("dc_spruce_leaves", [
        "#dve_flora",
        "dc_spruce_leaves",
      ]),
      defaults.box.simple("dc_spruce_log", ["#dve_solid", "dc_spruce_log"]),

      defaults.box.simple("dc_spruce_planks", [
        "#dve_solid",
        "dc_spruce_planks",
      ]),

      defaults.box.simple("dc_dark_oak_leaves", [
        "#dve_flora",
        "dc_dark_oak_leaves",
      ]),
      defaults.box.simple("dc_dark_oak_log", ["#dve_solid", "dc_dark_oak_log"]),
      defaults.box.simple("dc_dark_oak_planks", [
        "#dve_solid",
        "dc_dark_oak_planks",
      ]),

      defaults.box.simple("dc_acacia_leaves", [
        "#dve_flora",
        "dc_acacia_leaves",
      ]),
      defaults.box.simple("dc_acacia_log", ["#dve_solid", "dc_acacia_log"]),
      defaults.box.simple("dc_acacia_planks", [
        "#dve_solid",
        "dc_acacia_planks",
      ]),

      defaults.box.simple("dc_birch_leaves", ["#dve_flora", "dc_birch_leaves"]),
      defaults.box.simple("dc_birch_log", ["#dve_solid", "dc_birch_log"]),
      defaults.box.simple("dc_birch_planks", ["#dve_solid", "dc_birch_planks"]),

      defaults.box.simple("dc_dark_prismarine", [
        "#dve_solid",
        "dc_dark_prismarine",
      ]),

      defaults.box.simple("dc_prismarine", ["#dve_solid", "dc_prismarine"]),
      defaults.box.simple("dc_prismarine_bricks", [
        "#dve_solid",
        "dc_prismarine_bricks",
      ]),
      defaults.box.simple("dc_bedrock", ["#dve_solid", "dc_bedrock"]),
      defaults.box.simple("dc_obsidan", ["#dve_solid", "dc_obsidan"]),
      defaults.box.simple("dc_sand", ["#dve_solid", "dc_sand"]),
      defaults.box.simple("dc_stone", ["#dve_solid", "dc_stone"]),

      defaults.box.simple("dc_cobble_stone", ["#dve_solid", "dc_cobble_stone"]),
      defaults.box.simple("dc_mossy_cobble_stone", [
        "#dve_solid",
        "dc_mossy_cobble_stone",
      ]),

      defaults.box.simple("dc_andesite", ["#dve_solid", "dc_andesite"]),
      defaults.box.simple("dc_smooth_andesite", [
        "#dve_solid",
        "dc_smooth_andesite",
      ]),

      defaults.box.simple("dc_granite", ["#dve_solid", "dc_granite"]),
      defaults.box.simple("dc_smooth_granite", [
        "#dve_solid",
        "dc_smooth_granite",
      ]),

      defaults.box.simple("dc_gravel", ["#dve_solid", "dc_gravel"]),
      defaults.box.simple("dc_clay", ["#dve_solid", "dc_clay"]),
      defaults.box.simple("dc_podzol", ["#dve_solid", "dc_podzol"]),

      defaults.box.simple("dc_glass", ["#dve_solid", "dc_glass"]),

      defaults.box.simple("dc_snow", ["#dve_solid", "dc_snow"]),
      defaults.box.simple("dc_ice", ["#dve_solid", "dc_ice"]),

      defaults.box.simple("dc_gold_ore", ["#dve_solid", "dc_gold_ore"]),
      defaults.box.simple("dc_emerald_ore", ["#dve_solid", "dc_emerald_ore"]),
      defaults.box.simple("dc_iron_ore", ["#dve_solid", "dc_iron_ore"]),
      defaults.box.simple("dc_lapis_ore", ["#dve_solid", "dc_lapis_ore"]),
      defaults.box.simple("dc_redstone_ore", ["#dve_solid", "dc_redstone_ore"]),
      defaults.box.simple("dc_coal_block", ["#dve_solid", "dc_coal_block"]),
      defaults.box.simple("dc_diamond_block", [
        "#dve_solid",
        "dc_diamond_block",
      ]),
      defaults.box.simple("dc_gold_block", ["#dve_solid", "dc_gold_block"]),
      defaults.box.simple("dc_iron_block", ["#dve_solid", "dc_iron_block"]),
      defaults.box.simple("dc_redstone_block", [
        "#dve_solid",
        "dc_redstone_block",
      ]),

      defaults.box.simple("dc_cactus", {
        top: ["#dve_solid", "dc_cactus"],
        bottom: ["#dve_solid", "dc_cactus", "bottom"],
        north: ["#dve_solid", "dc_cactus", "side"],
        south: ["#dve_solid", "dc_cactus", "side"],
        east: ["#dve_solid", "dc_cactus", "side"],
        west: ["#dve_solid", "dc_cactus", "side"],
      }),

      defaults.box.simple("dc_mushroom_stem_block", [
        "#dve_solid",
        "dc_mushroom_stem_block",
      ]),
      defaults.box.simple("dc_red_mushroom_block", [
        "#dve_solid",
        "dc_red_mushroom_block",
      ]),
      defaults.box.simple("dc_brown_mushroom_block", [
        "#dve_solid",
        "dc_brown_mushroom_block",
      ]),

      defaults.box.simple("dc_mycelium", {
        top: ["#dve_solid", "dc_mycelium"],
        bottom: ["#dve_solid", "dc_mycelium", "bottom"],
        north: ["#dve_solid", "dc_mycelium", "side"],
        south: ["#dve_solid", "dc_mycelium", "side"],
        east: ["#dve_solid", "dc_mycelium", "side"],
        west: ["#dve_solid", "dc_mycelium", "side"],
      }),

      defaults.crossedPanel.simple("dc_blue_orchid_flower", [
        "#dve_flora",
        "dc_blue_orchid_flower",
      ]),

      defaults.crossedPanel.simple("dc_dandelion_flower", [
        "#dve_flora",
        "dc_dandelion_flower",
      ]),

      defaults.crossedPanel.simple("dc_oxeye_daisy_flower", [
        "#dve_flora",
        "dc_oxeye_daisy_flower",
      ]),

      defaults.crossedPanel.simple("dc_tulip_flower", [
        "#dve_flora",
        "dc_tulip_flower",
      ]),

      defaults.crossedPanel.simple("dc_waterlily_flower", [
        "#dve_flora",
        "dc_waterlily_flower",
      ]),

      defaults.crossedPanel.simple("dc_fern", ["#dve_flora", "dc_fern"]),
      defaults.crossedPanel.simple("dc_reeds", ["#dve_flora", "dc_reeds"]),
      defaults.crossedPanel.simple("dc_vine", ["#dve_flora", "dc_vine"]),
      defaults.crossedPanel.simple("dc_grass", ["#dve_flora", "dc_grass"]),
      defaults.crossedPanel.simple("dc_sea_grass", [
        "#dve_flora",
        "dc_sea_grass",
      ]),

      defaults.crossedPanel.simple("dc_tall_fern", [
        "#dve_flora",
        "dc_tall_fern",
        "top",
      ]),
      defaults.crossedPanel.simple("dc_tall_grass", [
        "#dve_flora",
        "dc_tall_grass",
        "top",
      ]),
      defaults.crossedPanel.simple("dc_tall_rose", [
        "#dve_flora",
        "dc_tall_rose",
        "top",
      ]),
      defaults.crossedPanel.simple("dc_paeonia_flower", [
        "#dve_flora",
        "dc_paeonia_flower",
        "top",
      ]),
      defaults.crossedPanel.simple("dc_syringa_flower", [
        "#dve_flora",
        "dc_syringa_flower",
        "top",
      ]),
      defaults.crossedPanel.simple("dc_kelp", ["#dve_flora", "dc_kelp"]),

      defaults.crossedPanel.simple("dc_brain_coral", [
        "#dve_flora",
        "dc_brain_coral",
      ]),
      defaults.box.simple("dc_brain_coral_block", [
        "#dve_solid",
        "dc_brain_coral_block",
      ]),
      defaults.crossedPanel.simple("dc_bubble_coral", [
        "#dve_flora",
        "dc_bubble_coral",
      ]),
      defaults.box.simple("dc_bubble_coral_block", [
        "#dve_solid",
        "dc_bubble_coral_block",
      ]),

      defaults.box.simple("dc_dead_brain_coral_block", [
        "#dve_solid",
        "dc_dead_brain_coral_block",
      ]),
      defaults.box.simple("dc_dead_bubble_coral_block", [
        "#dve_solid",
        "dc_dead_bubble_coral_block",
      ]),

      defaults.crossedPanel.simple("dc_dead_fire_coral", [
        "#dve_flora",
        "dc_dead_fire_coral",
      ]),
      defaults.box.simple("dc_dead_fire_coral_block", [
        "#dve_solid",
        "dc_dead_fire_coral_block",
      ]),

      defaults.crossedPanel.simple("dc_dead_horn_coral", [
        "#dve_flora",
        "dc_dead_horn_coral",
      ]),
      defaults.box.simple("dc_dead_horn_coral_block", [
        "#dve_solid",
        "dc_dead_horn_coral_block",
      ]),

      defaults.crossedPanel.simple("dc_dead_tube_coral", [
        "#dve_flora",
        "dc_dead_tube_coral",
      ]),
      defaults.box.simple("dc_dead_tube_coral_block", [
        "#dve_solid",
        "dc_dead_tube_coral_block",
      ]),

      defaults.crossedPanel.simple("dc_dead_brain_coral", [
        "#dve_flora",
        "dc_dead_brain_coral",
      ]),
      defaults.box.simple("dc_dead_bubble_coral", [
        "#dve_solid",
        "dc_dead_bubble_coral",
      ]),

      defaults.crossedPanel.simple("dc_fire_coral", [
        "#dve_flora",
        "dc_fire_coral",
      ]),
      defaults.box.simple("dc_fire_coral_block", [
        "#dve_solid",
        "dc_fire_coral_block",
      ]),

      defaults.crossedPanel.simple("dc_horn_coral", [
        "#dve_flora",
        "dc_horn_coral",
      ]),
      defaults.box.simple("dc_horn_coral_block", [
        "#dve_solid",
        "dc_horn_coral_block",
      ]),

      defaults.crossedPanel.simple("dc_tube_coral", [
        "#dve_flora",
        "dc_tube_coral",
      ]),
      defaults.box.simple("dc_tube_coral_block", [
        "#dve_solid",
        "dc_tube_coral_block",
      ]),
    ],
  },
});
