import React from "react";
import AutomationMachineCard from "./AutomationMachineCard";

function AutomationSection({ title, machines }) {
  return (
    <div className="mt-4">
      <h3 className="mb-3 fw-bold">{title}</h3>

      <div className="row">
        {machines.map((m) => (
          <div key={m.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-1">
            <AutomationMachineCard machine={m} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutomationSection;
