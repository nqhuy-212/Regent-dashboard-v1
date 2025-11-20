import React from "react";

function MachineStockTable({ data }) {
  const sections = [
    { key: "cutting", label: "Cutting" },
    { key: "sewing", label: "Sewing" },
    { key: "finishing", label: "Finishing" },
  ];

  // Tính tổng toàn bảng
  const grandTotal = {
    UQ: 0,
    US: 0,
    NK: 0,
    Total: 0,
  };

  return (
    <div className="mb-5 col-12 col-lg-8 col-xl-6">
      <h2 className="mb-3">Tổng số lượng máy / Total machines</h2>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-primary">
          <tr>
            <th>Khu vực / Area</th>
            <th>Loại máy / Machine Name</th>
            <th>UQ</th>
            <th>US</th>
            <th>NK</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {sections.map((sec) => {
            const machines = data[sec.key] || [];

            // Tính tổng theo section
            let sectionTotal = {
              UQ: 0,
              US: 0,
              NK: 0,
              Total: 0,
            };

            machines.forEach((m) => {
              sectionTotal.UQ += m.stock.UQ;
              sectionTotal.US += m.stock.US;
              sectionTotal.NK += m.stock.NK;
              sectionTotal.Total += m.stock.UQ + m.stock.US + m.stock.NK;
            });

            // Update grand total
            grandTotal.UQ += sectionTotal.UQ;
            grandTotal.US += sectionTotal.US;
            grandTotal.NK += sectionTotal.NK;
            grandTotal.Total += sectionTotal.Total;

            return (
              <>
                {/* Dòng dữ liệu từng máy */}
                {machines.map((m, index) => (
                  <tr key={m.id}>
                    {index === 0 && (
                      <td rowSpan={machines.length + 1}>
                        <b>{sec.label}</b>
                      </td>
                    )}
                    <td>
                      {m.name_vi} / {m.name_en}{" "}
                    </td>
                    <td>{m.stock.UQ}</td>
                    <td>{m.stock.US}</td>
                    <td>{m.stock.NK}</td>
                    <td>{m.stock.UQ + m.stock.US + m.stock.NK}</td>
                  </tr>
                ))}

                {/* Dòng Total theo section */}
                <tr className="table-secondary fw-bold">
                  {/* <td>Total {sec.label}</td>
                  <td>{sectionTotal.UQ}</td>
                  <td>{sectionTotal.US}</td>
                  <td>{sectionTotal.NK}</td>
                  <td>{sectionTotal.Total}</td> */}
                </tr>
              </>
            );
          })}

          {/* Tổng toàn bảng */}
          {/* <tr className="table-warning fw-bold">
            <td colSpan={2}>GRAND TOTAL</td>
            <td>{grandTotal.UQ}</td>
            <td>{grandTotal.US}</td>
            <td>{grandTotal.NK}</td>
            <td>{grandTotal.Total}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default MachineStockTable;
