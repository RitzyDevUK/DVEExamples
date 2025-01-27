import { StringPropertyInput } from "@amodx/schemas";
import { SchemaEditorInputRegister } from "../../SchemaEditorInputRegister";
import { SEInputBase } from "../../SEInputBase";
import { ReactNode, useEffect, useRef } from "react";
import { SEInputBaseProps } from "../../SEInputElement";
import { useNodeState } from "../../Hooks/useNodeState";
SchemaEditorInputRegister.register(
  StringPropertyInput,
  StringPropertyInput.createPropertyRenderFC<ReactNode, SEInputBaseProps>(
    (props) => {
      const { node } = props;
      const { ref } = useNodeState<HTMLInputElement>(
        node,
        (elm, node) => node.update(String(elm.value)),
        (elm, node) => (elm.value = String(node.get()))
      );
      return (
        <SEInputBase {...props}>
          <input
            ref={ref}
            className={"input string"}
            type="string"
            defaultValue={String(node.get())}
          />
        </SEInputBase>
      );
    }
  )
);
