import PageTitle from "../../components/PageTitle";
import React, { useState } from "react";
import data from "../../data/automationMachines.json";
import AutomationSection from "../../components/AutomationSection";
import MachineStockTable from "../../components/MachineStockTable";

function AutomationMachine() {
  const [search, setSearch] = useState("");
  const [filterSection, setFilterSection] = useState("All");
  const [showTable, setShowTable] = useState(true); // NEW

  // Lọc theo tên máy
  const filterMachines = (machines) => {
    return machines.filter((m) => {
      const nameMatch =
        m.name_vi.toLowerCase().includes(search.toLowerCase()) ||
        m.name_en.toLowerCase().includes(search.toLowerCase());

      return nameMatch;
    });
  };

  return (
    <>
      <PageTitle
        icon="bi bi-menu-button-wide"
        title="Library /"
        subtitle="Automation machine"
      />

      {/* Toggle Table */}
      {showTable && <MachineStockTable data={data} />}

      {/* Search + Filter + Toggle Button */}
      <div className="d-flex gap-3 mb-4 col-12 col-md-8 ">
        <input
          type="text"
          className="form-control"
          placeholder="Search machine ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          value={filterSection}
          onChange={(e) => setFilterSection(e.target.value)}
        >
          <option value="All">All</option>
          <option value="cutting">Cutting</option>
          <option value="sewing">Sewing</option>
          <option value="finishing">Finishing</option>
        </select>

        {/* Nút Show/Hide */}
        <button
          className="btn btn-primary"
          style={{ minWidth: "200px" }}
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? "Hide table" : "Show table"}
        </button>
      </div>

      {/* Sections */}
      {(filterSection === "All" || filterSection === "cutting") && (
        <AutomationSection
          title="Cutting"
          machines={filterMachines(data.cutting)}
        />
      )}

      {(filterSection === "All" || filterSection === "sewing") && (
        <AutomationSection
          title="Sewing"
          machines={filterMachines(data.sewing)}
        />
      )}

      {(filterSection === "All" || filterSection === "finishing") && (
        <AutomationSection
          title="Finishing"
          machines={filterMachines(data.finishing)}
        />
      )}
    </>
  );
}

export default AutomationMachine;
