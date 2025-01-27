import {  SEProps } from "./SEInputElement";
import { ReactNode } from "react";

export function SEInputBase({
  children,
  node,
}: SEProps & { children: ReactNode }) {
  return (
    <>
      <div className={`form-group`}>
        <label className="label">{node.property.name}</label>
        {children}
      </div>
    </>
  );
}
