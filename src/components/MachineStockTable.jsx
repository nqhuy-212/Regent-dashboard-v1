import React from "react";

function MachineStockTable({ data }) {
  const sections = [
    { key: "cutting", label: "Cutting" },
    { key: "sewing", label: "Sewing" },
    { key: "finishing", label: "Finishing" },
  ];

  let grandTotal = {
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
            // Lọc theo section
            const machines = data.filter((m) => m.section === sec.key);

            let sectionTotal = {
              UQ: 0,
              US: 0,
              NK: 0,
              Total: 0,
            };

            machines.forEach((m) => {
              sectionTotal.UQ += m.stock_UQ;
              sectionTotal.US += m.stock_US;
              sectionTotal.NK += m.stock_NK;
              sectionTotal.Total += m.stock_UQ + m.stock_US + m.stock_NK;
            });

            // Cộng dồn vào grand total
            grandTotal.UQ += sectionTotal.UQ;
            grandTotal.US += sectionTotal.US;
            grandTotal.NK += sectionTotal.NK;
            grandTotal.Total += sectionTotal.Total;

            return (
              <React.Fragment key={sec.key}>
                {machines.map((m, index) => (
                  <tr key={m.id}>
                    {index === 0 && (
                      <td rowSpan={machines.length + 1}>
                        <b>{sec.label}</b>
                      </td>
                    )}
                    <td>
                      {m.name_vi} / {m.name_en}
                    </td>
                    <td>{m.stock_UQ}</td>
                    <td>{m.stock_US}</td>
                    <td>{m.stock_NK}</td>
                    <td>{m.stock_UQ + m.stock_US + m.stock_NK}</td>
                  </tr>
                ))}

                {/* TOTAL của từng region */}
                <tr
                  className="table-secondary fw-bold"
                  key={`${sec.key}-total`}
                >
                  <td>Total {sec.label}</td>
                  <td>{sectionTotal.UQ}</td>
                  <td>{sectionTotal.US}</td>
                  <td>{sectionTotal.NK}</td>
                  <td>{sectionTotal.Total}</td>
                </tr>
              </React.Fragment>
            );
          })}

          {/* GRAND TOTAL */}
          <tr className="table-warning fw-bold" key="grand-total">
            <td colSpan={2}>GRAND TOTAL</td>
            <td>{grandTotal.UQ}</td>
            <td>{grandTotal.US}</td>
            <td>{grandTotal.NK}</td>
            <td>{grandTotal.Total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MachineStockTable;
