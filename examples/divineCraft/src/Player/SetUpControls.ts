import { Controls } from "@amodx/controls";
import { KeyDownEvent } from "@amodx/controls/Events/Register/";
import { DivineVoxelEngineRender } from "@divinevoxel/core/Contexts/Render";
import { RenderPlayer } from "./Core/Render/RenderPlayer";
import { PlaceVoxelTask, PlayerTasks, RemoveVoxelTask } from "./Player.types";
import { PlayerState } from "./PlayerState";
export async function SetUpControls(
  DVER: DivineVoxelEngineRender,
  player: RenderPlayer
) {
  const PlayerManager = player.manager;
  PlayerManager.physics.nowIs.still();

  /*



    {
      id: "#ecd_menu",
      name: "Menus",
    },
  */
  Controls.registerControls([
    /*
   [[Movement]]
    */
    {
      id: "#ecd_movement",
      name: "Movement",
      controls: [
        {
          id: "#ecd_move_forward",
          groupId: "#ecd_movement",
          name: "Move Forward",
          input: {
            keyboard: {
              key: "w",
              mode: "down",
            },
          },
          action: (event) => {
            if (!player.active) return;
            PlayerManager.physics.nowIs.walkingForward(true);
            (event as KeyDownEvent).observers.onRelease.subscribeOnce(() => {
              PlayerManager.physics.nowIs.walkingForward(false);
            });
          },
        },
        {
          id: "#ecd_move_backward",
          groupId: "#ecd_movement",
          name: "Move Backward",
          input: {
            keyboard: {
              key: "s",
              mode: "down",
            },
          },
          action: (event) => {
            if (!player.active) return;
            PlayerManager.physics.nowIs.walkingBackward();
            (event as KeyDownEvent).observers.onRelease.subscribeOnce(() => {
              PlayerManager.physics.nowIs.walkingBackward(false);
            });
          },
        },
        {
          id: "#ecd_move_left",
          groupId: "#ecd_movement",
          name: "Move Left",
          input: {
            keyboard: {
              key: "a",
              mode: "down",
            },
          },
          action: (event) => {
            if (!player.active) return;
            PlayerManager.physics.nowIs.walkingLeft();
            (event as KeyDownEvent).observers.onRelease.subscribeOnce(() => {
              PlayerManager.physics.nowIs.walkingLeft(false);
            });
          },
        },
        {
          id: "#ecd_move_right",
          groupId: "#ecd_movement",
          name: "Move Right",
          input: {
            keyboard: {
              key: "d",
              mode: "down",
            },
          },
          action: (event) => {
            if (!player.active) return;
            PlayerManager.physics.nowIs.walkingRight();
            (event as KeyDownEvent).observers.onRelease.subscribeOnce(() => {
              PlayerManager.physics.nowIs.walkingRight(false);
            });
          },
        },
      ],
    },

    /*
   [[Actions]]
    */

    {
      id: "#ecd_action",
      name: "Actions",
      controls: [
        {
          id: "#ecd_place_voxel",
          groupId: "#ecd_action",
          name: "Place Voxel",
          input: {
            mouse: { button: "primary", mode: "down" },
          },
          action: () => {
            console.log("PLACE VOXEL");
            if (!player.active) return;
            player.picker.setPickNormals();
            player.nodes.core.threads.world.runTasks(PlayerTasks.Place, [
              player.manager.physics.pick.getPlacePosition(),
              PlayerState.selectedVoxel,
            ]);
          },
        },
        {
          id: "#ecd_remove_voxel",
          groupId: "#ecd_action",
          name: "Remove Voxel",
          input: {
            mouse: { button: "secondary", mode: "down" },
          },
          action: () => {
            if (!player.active) return;
            player.picker.setPickNormals();
            DVER.threads.world.runTasks<RemoveVoxelTask>(PlayerTasks.Remove, [
              player.manager.physics.pick.position.getAsArray(),
            ]);
          },
        },
        {
          id: "#ecd_action_jump",
          groupId: "#ecd_action",
          name: "Jump",
          input: {
            keyboard: {
              key: " ",
              mode: "down",
            },
          },
          action: (event) => {
            if (!player.active) return;
            PlayerManager.physics.nowIs.jumping();
            (event as KeyDownEvent).observers.onRelease.subscribeOnce(() => {
              PlayerManager.physics.nowIs.jumping(false);
            });
          },
        },
        {
          id: "#ecd_action_run",
          groupId: "#ecd_action",
          name: "Run",
          input: {
            keyboard: {
              key: "Shift",
              mode: "down",
            },
          },
          action: (event) => {
            if (!player.active) return;
            PlayerManager.physics.nowIs.running();
            (event as KeyDownEvent).observers.onRelease.subscribeOnce(() => {
              PlayerManager.physics.nowIs.running(false);
            });
          },
        },
      ],
    },
  ]).init();

  window.addEventListener("wheel", (event: WheelEvent) => {
    if (event.deltaY < 0) {
      PlayerState.getNextVoxel("left");
    } else if (event.deltaY > 0) {
      PlayerState.getNextVoxel("right");
    }
  });
}
