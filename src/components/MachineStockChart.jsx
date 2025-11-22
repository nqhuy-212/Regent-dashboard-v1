import React from "react";
import Plot from "react-plotly.js";

function MachineStockChart({ machines }) {
  if (!machines || machines.length === 0) return null;

  const names = machines.map((m) => m.name_vi);
  const UQ = machines.map((m) => m.stock_UQ);
  const US = machines.map((m) => m.stock_US);
  const NK = machines.map((m) => m.stock_NK);

  return (
    <Plot
      data={[
        { x: names, y: UQ, type: "bar", name: "UQ" },
        { x: names, y: US, type: "bar", name: "US" },
        { x: names, y: NK, type: "bar", name: "NK" },
      ]}
      layout={{
        title: "Số lượng máy theo UQ / US / NK",
        barmode: "group",
        xaxis: { title: "Tên máy" },
        yaxis: { title: "Số lượng" },
        height: 500,
      }}
      style={{ width: "100%" }}
    />
  );
}

export default MachineStockChart;
