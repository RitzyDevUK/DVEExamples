import { RangePropertyInput } from "@amodx/schemas";
import { SchemaEditorInputRegister } from "../../SchemaEditorInputRegister";
import { SEInputBase } from "../../SEInputBase";
import { ReactNode } from "react";
import { SEInputBaseProps } from "../../SEInputElement";
import { useNodeState } from "../../Hooks/useNodeState";
SchemaEditorInputRegister.register(
  RangePropertyInput,
  RangePropertyInput.createPropertyRenderFC<ReactNode, SEInputBaseProps>(
    (props) => {
      const { node } = props;
      const input = node.input!.data.properties;
      const { ref } = useNodeState<HTMLInputElement>(
        node,
        (elm, node) => node.update(parseFloat(elm.value)),
        (elm, node) => (elm.value = String(node.get()))
      );
      return (
        <SEInputBase {...props}>
          <input
            className={"input range"}
            type={"range"}
            ref={ref}
            min={String(input.min)}
            max={String(input.max)}
            step={String(input.step)}
            defaultValue={String(node.get())}
          />
        </SEInputBase>
      );
    }
  )
);
