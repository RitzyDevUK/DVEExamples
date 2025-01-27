import { SelectPropertyInput } from "@amodx/schemas";
import { SchemaEditorInputRegister } from "../../SchemaEditorInputRegister";
import { SEInputBase } from "../../SEInputBase";
import { ReactNode, useEffect, useRef } from "react";
import { SEInputBaseProps } from "../../SEInputElement";
import { useNodeState } from "../../Hooks/useNodeState";
SchemaEditorInputRegister.register(
  SelectPropertyInput,
  SelectPropertyInput.createPropertyRenderFC<ReactNode, SEInputBaseProps>(
    (props) => {
      const { node } = props;
      const input = node.input!.data;
      const { ref } = useNodeState<HTMLSelectElement>(
        node,
        (elm, node) => node.update(String(elm.value)),
        (elm, node) => (elm.value = String(node.get()))
      );
      return (
        <SEInputBase {...props}>
          <select
            className="input select"
            ref={ref}
            defaultValue={String(node.get())}
          >
            {input.properties.options.map((item) => {
              const value = String(Array.isArray(item) ? item[1] : item);
              return (
                <option key={value} value={value}>
                  {String(Array.isArray(item) ? item[0] : item)}
                </option>
              );
            })}
          </select>
        </SEInputBase>
      );
    }
  )
);
