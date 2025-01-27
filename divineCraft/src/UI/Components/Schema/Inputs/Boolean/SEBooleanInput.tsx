import { BooleanPropertyInput } from "@amodx/schemas";
import { SchemaEditorInputRegister } from "../../SchemaEditorInputRegister";
import { SEInputBase } from "../../SEInputBase";
import { ReactNode } from "react";
import { SEInputBaseProps } from "../../SEInputElement";
import { useNodeState } from "../../Hooks/useNodeState";
SchemaEditorInputRegister.register(
  BooleanPropertyInput,
  BooleanPropertyInput.createPropertyRenderFC<ReactNode, SEInputBaseProps>(
    (props) => {
      const { node } = props;
      const input = node.input!;
      const { ref } = useNodeState<HTMLInputElement>(
        node,
        (elm, node) => node.update(Boolean(elm.checked)),
        (elm, node) => (elm.checked = Boolean(node.get()))
      );
      const variation = input.data.properties.variation || "checkbox";
      return (
        <SEInputBase {...props}>
          {variation == "checkbox" && (
            <input
              className={"input checkbox"}
              type={"checkbox"}
              ref={ref}
              defaultChecked={Boolean(node.get())}
            />
          )}
        </SEInputBase>
      );
    }
  )
);
