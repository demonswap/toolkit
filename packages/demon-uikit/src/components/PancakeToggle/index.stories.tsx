import React, { useState } from "react";
import DemonToggle from "./DemonToggle";

export default {
  title: "Components/DemonToggle",
  component: DemonToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <DemonToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <DemonToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <DemonToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
