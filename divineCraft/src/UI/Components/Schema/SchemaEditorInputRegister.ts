import {
    PropertyInputBase,
    RegisteredInput,
  } from "@amodx/schemas/Inputs/";
  import { SEInputElement } from "./SEInputElement";
import { ReactNode } from "react";
  export class SchemaEditorInputRegister {
    private static _components = new Map<string, SEInputElement>();
  
    static get(id: string) {
      const component = this._components.get(id);
      if (!component)
        throw new Error(`SEInputElement with id [${id}] does not exist`);
      return component;
    }
    static register(
      input: RegisteredInput,
      component: (props:any)=>ReactNode
    ) {
      this._components.set(input.id, component);
    }
  }
  