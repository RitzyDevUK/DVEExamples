import {
  EquipItemEvent,
  ItemEvents,
  UseItemEvent,
} from "Items/Components/index";
import { NCS } from "@amodx/ncs/";
import { VoxelRemoverComponent } from "@dvegames/vlox/Core/Components/Voxels/Interaction/VoxelRemover.component";
import { PlayerControlsComponent } from "Player/Components/PlayerControls.component";
export const HammerToolComponent = NCS.registerComponent({
  type: "hammer-tool",
  schema: NCS.schema({
    option1: NCS.property(0),
    option2: NCS.property(false),
  }),
  data: NCS.data<() => void>(),
  init(component) {
    const useListener = (event: UseItemEvent) => {
      const remover = VoxelRemoverComponent.getRequired(event.origin);
      const controls = PlayerControlsComponent.getRequired(event.origin);
      const { pickedPosition } = controls.data.pick();
      remover.data.removeSingle(pickedPosition);
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
