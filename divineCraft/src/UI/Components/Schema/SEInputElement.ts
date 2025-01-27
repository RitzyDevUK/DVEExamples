import { Observable } from "@amodx/core/Observers";
import { Signal } from "@amodx/elm";
import {
  PropertyRenderFC,
  PropertyRenderFCDefaultProps,
} from "@amodx/schemas/Property.types";
import { PropertyInputBase } from "@amodx/schemas/Inputs/PropertyInput";
import { SchemaNode } from "@amodx/schemas/Schemas/SchemaNode";
import React, { ReactNode } from "react";

export class SchemaEditorObservers {
  validate = new Observable<void>();
  loadIn = new Observable<void>();
  activeUpdate = new Observable<void>();
}

export class SchemaEditorNodeObservers {
  validate = new Observable<void>();
  loadIn = new Observable<void>();
  activeUpdate = new Observable<void>();
}

export type SEInputBaseProps = {
  schema: SchemaEditorObservers;
  observers: SchemaEditorNodeObservers;
};

export type SEProps<
  Value = any,
  Input extends PropertyInputBase = any,
> = PropertyRenderFCDefaultProps<Value, Input> & SEInputBaseProps;

export type SEInputElement<
  Value = any,
  Input extends PropertyInputBase = any,
> = PropertyRenderFC<ReactNode, Value, Input, SEInputBaseProps>;
