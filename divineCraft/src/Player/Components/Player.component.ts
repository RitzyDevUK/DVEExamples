import { NCS, NodeCursor } from "@amodx/ncs/";

export const PlayerComponent = NCS.registerComponent({
  type: "player",
  schema: NCS.schema({
    id: NCS.property(""),
    name: NCS.property(""),
  }),
  data: NCS.data<{
    node: NodeCursor;
  }>(),
  init(component) {
    component.data = {
      node: component.node.cloneCursor(),
    };
  },
});
