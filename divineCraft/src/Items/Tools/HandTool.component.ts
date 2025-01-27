import { ItemEvents, UseItemEvent } from "Items/Components/index";
import { NCS } from "@amodx/ncs/";
import { Vector3Like } from "@amodx/math";
import { VoxelPlacerComponent } from "@dvegames/vlox/Core/Components/Voxels/Interaction/VoxelPlacer.component";
import {
  PlayerControlsComponent,
  PlayerInventoryComponent,
} from "Player/Components/index";
import { VoxelItemComponent } from "../Item/VoxelItem.component";
export const HandToolComponent = NCS.registerComponent({
  type: "hand-tool",
  schema: NCS.schema({
    option1: NCS.property(0),
    option2: NCS.property(false),
  }),
  data: NCS.data<() => void>(),
  init(component) {
    component = component.cloneCursor();
    const useListener = (event: UseItemEvent) => {
      console.log("USE THE HAND TOOL");
      const inventory = PlayerInventoryComponent.getRequired(event.origin);
      const item =
        event.actionButton == "primary"
          ? inventory.data.getItem()
          : inventory.data.getOffHandItem();
      if (!item) {
        inventory.returnCursor();
        return false;
      }
      const placer = VoxelPlacerComponent.getRequired(event.origin);

      if (item) {
        const voxelComp = VoxelItemComponent.get(item);
        if (voxelComp) {
          const controls = PlayerControlsComponent.getRequired(event.origin);
          const { pickedPosition, pickedNormal } = controls.data.pick();
          const position = Vector3Like.AddArray(pickedPosition, pickedNormal);

          placer.data.placeSingle(
            position,
            voxelComp.schema.toJSON().voxelData
          );
          item.events.dispatch(
            UseItemEvent.Event,
            new UseItemEvent(component.node, item, event.actionButton)
          );
          controls.returnCursor();
          voxelComp.returnCursor();
        }
      }

      placer.returnCursor();
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
