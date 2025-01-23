import { NCS } from "@amodx/ncs/";
import { PlayerComponent } from "./Player/Components/Player.component";

class Data {
  player: (typeof PlayerComponent)["default"];
  constructor(public component: (typeof GameComponent)["default"]) {}
}

export const GameComponent = NCS.registerComponent<Data>({
  type: "game",
  init: (component) => (component.data = new Data(component.cloneCursor())),
});
