import { ItemEvents, UseItemEvent } from "Items/Components/index";
import { NCS } from "@amodx/ncs/";
import { Vector3Like } from "@amodx/math";
import { VoxelPlacerComponent } from "@dvegames/vlox/Core/Components/Voxels/Interaction/VoxelPlacer.component";
import {
  PlayerControlsComponent,
  PlayerInventoryComponent,
} from "Player/Components/index";
import { VoxelItemComponent } from "../Item/VoxelItem.component";
import { RendererContext } from "@dvegames/vlox/Core/Contexts/Renderer.context";
import { TaskTool } from "@divinevoxel/vlox/Tools/Tasks/TasksTool";
import { AdvancedBrush } from "@divinevoxel/vlox/Tools/Brush/AdvancedBrushTool";

export const HandToolComponent = NCS.registerComponent({
  type: "hand-tool",
  schema: NCS.schema({
    option1: NCS.property(0),
    option2: NCS.property(false),
  }),
  data: NCS.data<() => void>(),
  init(component) {
    component = component.cloneCursor();
    const { dve } = RendererContext.getRequired(component.node).data;
    const brush = new AdvancedBrush(new TaskTool(dve.threads.constructors));
    const useListener = (event: UseItemEvent) => {
      const inventory = PlayerInventoryComponent.getRequired(event.origin);
      const controls = PlayerControlsComponent.getRequired(event.origin);
      const item = inventory.data.getItem();
      if (event.actionButton == "secondary") {
        const picked = controls.data.pick();
        if (!picked) {
          controls.returnCursor();
          return;
        }
        brush.setXYZ(...picked.pickedPosition).eraseAndAwaitUpdate();

        item.events.dispatch(
          UseItemEvent.Event,
          new UseItemEvent(component.node, item, "primary")
        );

        return true;
      }

      if (!item) {
        inventory.returnCursor();
        return false;
      }

      if (item) {
        const voxelComp = VoxelItemComponent.get(item);
        if (voxelComp) {
          const result = controls.data.pick();
          if (!result) {
            voxelComp.returnCursor();
            return;
          }

          const position = Vector3Like.AddArray(
            result.pickedPosition,
            result.pickedNormal
          );

          brush
            .setData(voxelComp.schema.voxelData)
            .setXYZ(...position)
            .paintAndUpdate();
          item.events.dispatch(
            UseItemEvent.Event,
            new UseItemEvent(component.node, item, event.actionButton)
          );
          controls.returnCursor();
          voxelComp.returnCursor();
        }
      }

      inventory.returnCursor();
    };

    component.node.events.addListener(ItemEvents.Use, useListener);

    component.data = () => {
      component.node.events.removeListener(ItemEvents.Use, useListener);
    };
  },
  dispose(component) {
    component.data();
  },
});
