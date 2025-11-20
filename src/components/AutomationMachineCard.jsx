import React from "react";
import { useNavigate } from "react-router-dom";
import "./automationCard.css";

function AutomationMachineCard({ machine }) {
  const navigate = useNavigate();

  // Lấy dữ liệu trực tiếp từ API
  const US = machine.stock_US || 0;
  const UQ = machine.stock_UQ || 0;
  const NK = machine.stock_NK || 0;
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

        <div className="stock-grid mt-3">
          <div className="stock-item">
            UQ: <strong>{UQ}</strong>
          </div>
          <div className="stock-item">
            US: <strong>{US}</strong>
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
