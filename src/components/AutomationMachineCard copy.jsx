import React from "react";
import { useNavigate } from "react-router-dom";
import "./automationCard.css";

function AutomationMachineCard({ machine }) {
  const navigate = useNavigate();
  const { US, UQ, NK } = machine.stock;
  const total = US + UQ + NK;

  return (
    <div
      className="machine-card card shadow-sm h-100"
      onClick={() => navigate(`/library/automation-machine/${machine.id}`)}
    >
      <img
        src={machine.avatar}
        className="card-img-top machine-img"
        alt={machine.name_en}
      />

      <div className="card-body">
        <h5 className="card-title">{machine.name_vi}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{machine.name_en}</h6>
        {/* <p className="card-text machine-desc">{machine.description}</p> */}

        <div className="stock-grid mt-3">
          <div className="stock-item">
            US: <strong>{US}</strong>
          </div>
          <div className="stock-item">
            UQ: <strong>{UQ}</strong>
          </div>
          <div className="stock-item">
            NK: <strong>{NK}</strong>
          </div>
          <div className="stock-item total">
            All: <strong>{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomationMachineCard;
