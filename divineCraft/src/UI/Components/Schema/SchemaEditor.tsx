import {
  SchemaEditorNodeObservers,
  SchemaEditorObservers,
} from "./SEInputElement";
import { ObjectSchemaInstance } from "@amodx/schemas";
import { SchemaEditorInputRegister } from "./SchemaEditorInputRegister";
import { SchemaNode } from "@amodx/schemas/Schemas/SchemaNode";
import "./Inputs/index";
import "./SchemaEditor.css";
import { ReactNode } from "react";
import { SchemaCursor } from "@amodx/ncs/Schema/Schema.types";
import convertSchema from "@dvegames/vlox-tools/UI/Functions/convertSchema";
export function SchemaEditor(props: {
  schemaInstance?: ObjectSchemaInstance;
  schema?: SchemaCursor<any>;
}) {
  const observers = new SchemaEditorObservers();

  let activeProeprtyIndex = 0;
  let maxPropertyIndex = 0;
  const elements: ReactNode[] = [];

  const nodeObservers = new Map<SchemaNode, SchemaEditorNodeObservers>();
  let nodes: SchemaNode[] = [];

  let schemaInstance = props.schemaInstance;
  if (props.schema) {
    schemaInstance = convertSchema(props.schema);
  }

  if (!schemaInstance)
    throw new Error(`Schema editor must have schema or schemaInstance set.`);

  let index = 0;
  schemaInstance.getSchema().traverse((node) => {
    if (
      (typeof node.property.editable !== "undefined" &&
        !node.property.editable) ||
      !node.input
    )
      return;
    const nodeObserve = new SchemaEditorNodeObservers();
    const ElmComponent = SchemaEditorInputRegister.get(node.input.data.type);
    index++;
    elements.push(
      <ElmComponent
        key={node.property.id}
        node={node}
        schema={observers}
        observers={nodeObserve}
      />
    );
    nodes.push(node);
    nodeObservers.set(node, nodeObserve);
  });

  maxPropertyIndex = nodes.length - 1;
  return <form className="schema-editor">{elements}</form>;
}
