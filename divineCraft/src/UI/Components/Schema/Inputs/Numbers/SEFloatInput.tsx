import { FloatPropertyInput } from "@amodx/schemas";
import { SchemaEditorInputRegister } from "../../SchemaEditorInputRegister";
import { SEInputBase } from "../../SEInputBase";
import { ReactNode, useEffect, useRef } from "react";
import { SEInputBaseProps } from "../../SEInputElement";
import { useNodeState } from "../../Hooks/useNodeState";
SchemaEditorInputRegister.register(
  FloatPropertyInput,
  FloatPropertyInput.createPropertyRenderFC<ReactNode, SEInputBaseProps>(
    (props) => {
      const { node } = props;
      const { ref } = useNodeState<HTMLInputElement>(
        node,
        (elm, node) => node.update(parseFloat(elm.value)),
        (elm, node) => (elm.value = String(node.get()))
      );
      return (
        <SEInputBase {...props}>
          <input
            className={"input float"}
            type={"number"}
            ref={ref}
            defaultValue={String(node.get())}
          />
        </SEInputBase>
      );
    }
  )
);
