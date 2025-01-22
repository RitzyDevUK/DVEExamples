import { VoxelData } from "@divinevoxel/vlox";

export const voxelData: VoxelData[] = [
  //dream
  {
    id: "dc_cobble_stone",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_cobble_stone",
          name: "Cobblestone",
          mod: "varation=default",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "varation=default",
            state: "*",
          },
        },
        {
          id: "dc_mossy_cobblestone",
          name: "Mossy Cobblestone",
          mod: "varation=mossy",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "varation=mossy",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modSchema: [
          {
            name: "varation",
            type: "string",
            values: {
              0: "default",
              1: "mossy",
            },
          },
        ],
        modRelationSchema: [],
        inputs: {
          "varation=default": {
            "@texture": ["dve_voxel", "dc_cobble_stone"],
          },
          "varation=mossy": {
            "@texture": ["dve_voxel", "dc_mossy_cobblestone"],
          },
        },
      },
    },
  },
  {
    id: "dc_water",
    properties: {
      dve_substance: "dve_liquid",
      dve_rendered_material: "dve_liquid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "water",
      dve_model_data: {
        id: "dve_liquid",
        inputs: {
          "*": {
            "@flowTexture": ["dve_voxel", "dc_water"],
            "@stillTexture": ["dve_voxel", "dc_water"],
          },
        },
      },
    },
  },
  {
    id: "dc_stone",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_stone",
          name: "Stone",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_stone"] },
        },
      },
    },
  },
  {
    id: "dc_sand",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "sand",
      dve_named_states: [
        {
          id: "dc_sand",
          name: "Sand",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_sand"] },
        },
      },
    },
  },
  {
    id: "dc_grass_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_grass_block",
          name: "Grass Block",
          mod: "snowed=false",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "snowed=false",
            state: "*",
          },
        },
        {
          id: "dc_snowed_grass_block",
          name: "Snowed Grass Block",
          mod: "snowed=false",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "snowed=true",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_oriented_cube",
        modSchema: [
          {
            name: "snowed",
            type: "string",
            values: {
              0: "false",
              1: "true",
            },
          },
        ],
        modRelationSchema: [],
        inputs: {
          "snowed=false": {
            "@upTex": ["dve_voxel", "dc_grass_block", "top"],
            "@downTex": ["dve_voxel", "dc_grass_block", "top"],
            "@northTex": ["dve_voxel", "dc_grass_block"],
            "@southTex": ["dve_voxel", "dc_grass_block"],
            "@eastTex": ["dve_voxel", "dc_grass_block"],
            "@westTex": ["dve_voxel", "dc_grass_block"],
          },
          "snowed=true": {
            "@upTex": ["dve_voxel", "dc_grass_block", "snowed-top"],
            "@downTex": ["dve_voxel", "dc_grass_block", "snowed-top"],
            "@northTex": ["dve_voxel", "dc_grass_block", "snowed"],
            "@southTex": ["dve_voxel", "dc_grass_block", "snowed"],
            "@eastTex": ["dve_voxel", "dc_grass_block", "snowed"],
            "@westTex": ["dve_voxel", "dc_grass_block", "snowed"],
          },
        },
      },
    },
  },
  {
    id: "dc_dirt",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dirt",
      dve_named_states: [
        {
          id: "dc_dirt",
          name: "Dirt",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dirt"] },
        },
      },
    },
  },
  {
    id: "dc_glow_stone",
    properties: {
      dve_substance: "dve_glow",
      dve_rendered_material: "dve_glow",
      dve_is_light_source: true,
      dve_light_value: [15, 15, 15],
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_glow_stone",
          name: "Glow Stone",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_glow_stone"] },
        },
      },
    },
  },
  {
    id: "dc_sea_lantern",
    properties: {
      dve_substance: "dve_glow",
      dve_rendered_material: "dve_glow",
      dve_is_light_source: true,
      dve_light_value: [15, 15, 15],
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_sea_lantern",
          name: "stea Latern",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_sea_lantern"] },
        },
      },
    },
  },
  {
    id: "dc_redstone_lamp",
    properties: {
      dve_substance: "dve_glow",
      dve_rendered_material: "dve_glow",
      dve_is_light_source: true,
      dve_light_value: [15, 15, 15],
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_redstone_lamp",
          name: "Redstone Lamp",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_redstone_lamp"] },
        },
      },
    },
  },
  // Wood and Leaves
  {
    id: "dc_oak_leaves",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "leaves",
      dve_named_states: [
        {
          id: "dc_oak_leaves",
          name: "Oak Leaves",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_oak_leaves"],
            "@transparent": true,
          },
        },
      },
    },
  },
  {
    id: "dc_oak_log",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_oak_log",
          name: "Oak Log",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_oriented_cube",
        modRelationSchema: [],
        inputs: {
          "*": {
            "@upTex": ["dve_voxel", "dc_oak_log", "top"],
            "@downTex": ["dve_voxel", "dc_oak_log", "top"],
            "@northTex": ["dve_voxel", "dc_oak_log"],
            "@southTex": ["dve_voxel", "dc_oak_log"],
            "@eastTex": ["dve_voxel", "dc_oak_log"],
            "@westTex": ["dve_voxel", "dc_oak_log"],
          },
        },
      },
    },
  },
  {
    id: "dc_oak_planks",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_oak_planks",
          name: "Oak Planks",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_oak_planks"] },
        },
      },
    },
  },
  {
    id: "dc_dark_oak_leaves",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_dark_oak_leaves",
          name: "Dark Oak Leaves",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dark_oak_leaves"],
            "@transparent": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dark_oak_log",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_dark_oak_log",
          name: "Dark Oak Log",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_oriented_cube",
        modRelationSchema: [],
        inputs: {
          "*": {
            "@upTex": ["dve_voxel", "dc_dark_oak_log", "top"],
            "@downTex": ["dve_voxel", "dc_dark_oak_log", "top"],
            "@northTex": ["dve_voxel", "dc_dark_oak_log"],
            "@southTex": ["dve_voxel", "dc_dark_oak_log"],
            "@eastTex": ["dve_voxel", "dc_dark_oak_log"],
            "@westTex": ["dve_voxel", "dc_dark_oak_log"],
          },
        },
      },
    },
  },
  {
    id: "dc_dark_oak_planks",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_dark_oak_planks",
          name: "Dark Oak Log Planks",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dark_oak_planks"] },
        },
      },
    },
  },
  {
    id: "dc_acacia_leaves",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_acacia_leaves",
          name: "Acacia Leaves",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_acacia_leaves"],
            "@transparent": true,
          },
        },
      },
    },
  },
  {
    id: "dc_acacia_log",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_acacia_log",
          name: "Acacia Log",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_oriented_cube",
        modRelationSchema: [],
        inputs: {
          "*": {
            "@upTex": ["dve_voxel", "dc_acacia_log", "top"],
            "@downTex": ["dve_voxel", "dc_acacia_log", "top"],
            "@northTex": ["dve_voxel", "dc_acacia_log"],
            "@southTex": ["dve_voxel", "dc_acacia_log"],
            "@eastTex": ["dve_voxel", "dc_acacia_log"],
            "@westTex": ["dve_voxel", "dc_acacia_log"],
          },
        },
      },
    },
  },
  {
    id: "dc_acacia_planks",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_acacia_planks",
          name: "Acacia Planks",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_acacia_planks"] },
        },
      },
    },
  },
  {
    id: "dc_birch_leaves",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_birch_leaves",
          name: "Acacia Birch Leaves",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_birch_leaves"],
            "@transparent": true,
          },
        },
      },
    },
  },
  {
    id: "dc_birch_log",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
    },
  },
  {
    id: "dc_birch_planks",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_birch_log",
          name: "Birch Log",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_oriented_cube",
        modRelationSchema: [],
        inputs: {
          "*": {
            "@upTex": ["dve_voxel", "dc_birch_log", "top"],
            "@downTex": ["dve_voxel", "dc_birch_log", "top"],
            "@northTex": ["dve_voxel", "dc_birch_log"],
            "@southTex": ["dve_voxel", "dc_birch_log"],
            "@eastTex": ["dve_voxel", "dc_birch_log"],
            "@westTex": ["dve_voxel", "dc_birch_log"],
          },
        },
      },
    },
  },
  {
    id: "dc_spruce_log",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_birch_planks",
          name: "Birch Planks",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_birch_planks"] },
        },
      },
    },
  },
  {
    id: "dc_spruce_leaves",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "leaves",
      dve_named_states: [
        {
          id: "dc_spruce_leaves",
          name: "Spruce Leaves",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_spruce_leaves"],
            "@transparent": true,
          },
        },
      },
    },
  },
  {
    id: "dc_spruce_planks",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "wood",
      dve_named_states: [
        {
          id: "dc_spruce_planks",
          name: "Spruce Planks",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_spruce_planks"] },
        },
      },
    },
  },
  {
    id: "dc_snow",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "snow",
      dve_named_states: [
        {
          id: "dc_snow",
          name: "Snow",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_snow"] },
        },
      },
    },
  },
  {
    id: "dc_ice",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ice",
      dve_named_states: [
        {
          id: "dc_ice",
          name: "Ice",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_ice"] },
        },
      },
    },
  },
  {
    id: "dc_andesite",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_andesite",
          name: "Andesite",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_andesite"] },
        },
      },
    },
  },
  {
    id: "dc_smooth_andesite",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_smooth_andesite",
          name: "Smooth Andesite",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_smooth_andesite"] },
        },
      },
    },
  },
  {
    id: "dc_granite",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_granite",
          name: "Granite",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_granite"] },
        },
      },
    },
  },
  {
    id: "dc_smooth_granite",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_smooth_granite",
          name: "Smooth Granite",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_smooth_granite"] },
        },
      },
    },
  },
  {
    id: "dc_gravel",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_gravel",
          name: "Gravel",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_gravel"] },
        },
      },
    },
  },
  {
    id: "dc_clay",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "stone",
      dve_named_states: [
        {
          id: "dc_clay",
          name: "Clay",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_clay"] },
        },
      },
    },
  },
  {
    id: "dc_glass",
    properties: {
      dve_substance: "dve_transparent",
      dve_rendered_material: "dve_transparent",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "glass",
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_glass",
          name: "Glass",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_glass"] },
        },
      },
    },
  },
  {
    id: "dc_podzol",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dirt",
      dve_named_states: [
        {
          id: "dc_podzol",
          name: "Podzol",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_podzol"] },
        },
      },
    },
  },
  // new voxels
  {
    id: "dc_emerald_ore",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ore",
      dve_named_states: [
        {
          id: "dc_emerald_ore",
          name: "Emerald Ore",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_emerald_ore"] },
        },
      },
    },
  },
  {
    id: "dc_gold_ore",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ore",
      dve_named_states: [
        {
          id: "dc_gold_ore",
          name: "Gold Ore",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_gold_ore"] },
        },
      },
    },
  },
  {
    id: "dc_iron_ore",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ore",
      dve_named_states: [
        {
          id: "dc_iron_ore",
          name: "Iron Ore",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_iron_ore"] },
        },
      },
    },
  },
  {
    id: "dc_lapis_ore",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ore",
      dve_named_states: [
        {
          id: "dc_lapis_ore",
          name: "Lapis Ore",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_lapis_ore"] },
        },
      },
    },
  },
  {
    id: "dc_redstone_ore",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ore",
      dve_named_states: [
        {
          id: "dc_redstone_ore",
          name: "Redstone Ore",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_redstone_ore"] },
        },
      },
    },
  },
  {
    id: "dc_redstone_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "ore",
      dve_named_states: [
        {
          id: "dc_redstone_block",
          name: "Redstone Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_redstone_block"] },
        },
      },
    },
  },
  {
    id: "dc_coal_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "coal",
      dve_named_states: [
        {
          id: "dc_coal_block",
          name: "Coal Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_coal_block"] },
        },
      },
    },
  },
  {
    id: "dc_diamond_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "diamond",
      dve_named_states: [
        {
          id: "dc_diamond_block",
          name: "Diamond Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_diamond_block"] },
        },
      },
    },
  },
  {
    id: "dc_gold_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "gold",
      dve_named_states: [
        {
          id: "dc_gold_block",
          name: "Gold Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_gold_block"] },
        },
      },
    },
  },
  {
    id: "dc_iron_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "iron",
      dve_named_states: [
        {
          id: "dc_iron_block",
          name: "Iron Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_iron_block"] },
        },
      },
    },
  },
  {
    id: "dc_mushroom_stem_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "iron",
      dve_named_states: [
        {
          id: "dc_mushroom_stem_block",
          name: "Mushroom Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_mushroom_stem_block"] },
        },
      },
    },
  },
  {
    id: "dc_red_mushroom_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "iron",
      dve_named_states: [
        {
          id: "dc_red_mushroom_block",
          name: "Red Mushroom Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_red_mushroom_block"] },
        },
      },
    },
  },
  {
    id: "dc_brown_mushroom_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "iron",
      dve_named_states: [
        {
          id: "dc_brown_mushroom_block",
          name: "Brown Mushroom Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_brown_mushroom_block"] },
        },
      },
    },
  },
  {
    id: "dc_mycelium",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "mycelium",
      dve_named_states: [
        {
          id: "dc_mycelium",
          name: "Mycelium Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_mycelium"] },
        },
      },
    },
  },
  {
    id: "dc_tall_fern",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_tall_fern",
          name: "Tall Fern",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_tall_fern"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_tall_grass",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_is_transparent: true,
      dve_no_ao: true,
      dve_named_states: [
        {
          id: "dc_tall_grass",
          name: "Tall Grass",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_tall_grass"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_tall_rose",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_tall_rose",
          name: "Tall Rose",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_tall_rose"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_paeonia_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_paeonia_flower",
          name: "Tall Rose",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_paeonia_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_syringa_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_syringa_flower",
          name: "Tall Rose",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_syringa_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_blue_orchid_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_blue_orchid_flower",
          name: "Blue Orchid Flower",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_blue_orchid_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dandelion_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_dandelion_flower",
          name: "Dandelion Flower",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dandelion_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_oxeye_daisy_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_oxeye_daisy_flower",
          name: "Oxeye Daisy Flower",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_oxeye_daisy_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_tulip_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_tulip_flower",
          name: "Tulip Flower",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_tulip_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_waterlily_flower",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_waterlily_flower",
          name: "Waterlily Flower",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_waterlily_flower"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_vine",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_shape_id: "dve_panel",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_vine",
          name: "Vine",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_vine"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_fern",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_fern",
          name: "Fern",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_fern"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_sea_grass",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_no_ao: true,
      dve_is_transparent: true,
      dve_named_states: [
        {
          id: "dc_sea_grass",
          name: "Sea Grass",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_sea_grass"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_reeds",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_reeds",
          name: "Reeds",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_reeds"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_kelp",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_kelp",
          name: "Kelp",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_kelp"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_grass",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_grass",
          name: "Grass",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_grass"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_cactus",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "grass",
      dve_named_states: [
        {
          id: "dc_cactus",
          name: "Cactus",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_cactus"] },
        },
      },
    },
  },
  // Coral and Coral Blocks
  {
    id: "dc_brain_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_brain_coral",
          name: "Brain Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_brain_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_brain_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "coral_block",
      dve_named_states: [
        {
          id: "dc_brain_coral_block",
          name: "Brain Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_brain_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_bubble_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_bubble_coral",
          name: "Bubble Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_bubble_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_bubble_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "coral_block",
      dve_named_states: [
        {
          id: "dc_bubble_coral_block",
          name: "Bubble Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_bubble_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_dead_brain_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dead_coral_block",
      dve_named_states: [
        {
          id: "dc_dead_brain_coral_block",
          name: "Dead Brain Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dead_brain_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_dead_bubble_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dead_coral_block",
      dve_named_states: [
        {
          id: "dc_dead_bubble_coral_block",
          name: "Dead Bubble Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dead_bubble_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_dead_fire_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_dead_fire_coral",
          name: "Dead Fire Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dead_fire_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dead_fire_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dead_coral_block",
      dve_named_states: [
        {
          id: "dc_dead_fire_coral_block",
          name: "Dead Fire Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dead_fire_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_dead_horn_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_dead_horn_coral",
          name: "Dead Horn Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dead_horn_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dead_horn_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dead_coral_block",
      dve_named_states: [
        {
          id: "dc_dead_horn_coral",
          name: "Dead Horn Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dead_horn_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dead_tube_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_dead_tube_coral",
          name: "Dead Tube Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dead_tube_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dead_tube_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "dead_coral_block",
      dve_named_states: [
        {
          id: "dc_dead_tube_coral_block",
          name: "Dead Tube Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dead_tube_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_dead_brain_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_dead_brain_coral",
          name: "Dead Brain Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dead_brain_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_dead_bubble_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_dead_bubble_coral",
          name: "Dead Bubble Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_dead_bubble_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_fire_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_fire_coral",
          name: "Fire Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_fire_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_fire_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "coral_block",
      dve_named_states: [
        {
          id: "dc_fire_coral_block",
          name: "Dead Fire Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_fire_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_horn_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_horn_coral",
          name: "Horn Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_horn_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_horn_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "coral_block",
      dve_named_states: [
        {
          id: "dc_horn_coral_block",
          name: "Dead Horn Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_horn_coral_block"] },
        },
      },
    },
  },
  {
    id: "dc_tube_coral",
    properties: {
      dve_substance: "dve_flora",
      dve_rendered_material: "dve_flora",
      dve_collider_id: "dve_box",
      dve_check_collisions: false,
      dve_voxel_material: "coral",
      dve_named_states: [
        {
          id: "dc_tube_coral",
          name: "Tube Coral",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_crossed_panels",
        inputs: {
          "*": {
            "@texture": ["dve_voxel", "dc_tube_coral"],
            "@doubleSided": true,
          },
        },
      },
    },
  },
  {
    id: "dc_tube_coral_block",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "coral_block",
      dve_named_states: [
        {
          id: "dc_tube_coral_block",
          name: "Dead Tube Coral Block",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_tube_coral_block"] },
        },
      },
    },
  },
  // Prismarine Variants
  {
    id: "dc_dark_prismarine",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "prismarine",
      dve_named_states: [
        {
          id: "dc_dark_prismarine",
          name: "Dark Prismarine",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_dark_prismarine"] },
        },
      },
    },
  },
  {
    id: "dc_prismarine",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "prismarine",
      dve_named_states: [
        {
          id: "dc_prismarine",
          name: "Prismarine",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_prismarine"] },
        },
      },
    },
  },
  {
    id: "dc_prismarine_bricks",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "prismarine",
      dve_named_states: [
        {
          id: "dc_prismarine_bricks",
          name: "Prismarine Bricks",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_prismarine_bricks"] },
        },
      },
    },
  },
  // Basic Blocks
  {
    id: "dc_bedrock",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "bedrock",
      dve_named_states: [
        {
          id: "dc_bedrock",
          name: "Bedrock",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_bedrock"] },
        },
      },
    },
  },
  {
    id: "dc_obsidan",
    properties: {
      dve_substance: "dve_solid",
      dve_rendered_material: "dve_solid",
      dve_collider_id: "dve_box",
      dve_check_collisions: true,
      dve_voxel_material: "obsidian",
      dve_named_states: [
        {
          id: "dc_obsidan",
          name: "Obsidan",
          mod: "*",
          state: "*",
          properties: [],
          display: {
            type: "model",
            mod: "*",
            state: "*",
          },
        },
      ],
      dve_model_data: {
        id: "dve_simple_cube",
        modRelationSchema: [],
        inputs: {
          "*": { "@texture": ["dve_voxel", "dc_obsidan"] },
        },
      },
    },
  },
];
