import React from "react";
import { DemonStack, DemonInput, DemonLabel } from "./StyledDemonToggle";
import { DemonToggleProps, scales } from "./types";

const DemonToggle: React.FC<DemonToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <DemonStack scale={scale}>
    <DemonInput id={props.id || "demon-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <DemonLabel scale={scale} checked={checked} htmlFor={props.id || "demon-toggle"}>
      <div className="demons">
        <div className="demon" />
        <div className="demon" />
        <div className="demon" />
        <div className="butter" />
      </div>
    </DemonLabel>
  </DemonStack>
);

export default DemonToggle;
