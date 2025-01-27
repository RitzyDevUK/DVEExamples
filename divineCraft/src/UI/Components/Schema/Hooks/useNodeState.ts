import { SchemaNode } from "@amodx/schemas/Schemas/SchemaNode";
import { useEffect, useRef } from "react";

export const useNodeState = <Element extends HTMLElement>(
  node: SchemaNode,
  onInput: (elm: Element, node: SchemaNode) => void,
  onNodeChange: (elm: Element, node: SchemaNode) => void
) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener("change", () => onInput(ref.current!, node));
    node.observers.updatedOrLoadedIn.subscribe(ref, () =>
      onNodeChange(ref.current!, node)
    );
    return () => {
      node.observers.updatedOrLoadedIn.unsubscribe(ref);
    };
  }, []);

  return {
    ref,
  };
};
