import PageTitle from "../../components/PageTitle";
import React, { useState, useEffect } from "react";
import AutomationSection from "../../components/AutomationSection";
import MachineStockTable from "../../components/MachineStockTable";

function AutomationMachine() {
  const [machines, setMachines] = useState([]);
  const [search, setSearch] = useState("");
  const [filterSection, setFilterSection] = useState("All");
  const [showTable, setShowTable] = useState(true);

  // Fetch from API
  useEffect(() => {
    fetch("http://192.168.156.55:99/automation-machine")
      .then((res) => res.json())
      .then((json) => setMachines(json.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  // Filter by search
  const filterMachines = (list) =>
    list.filter((m) => {
      const s = search.toLowerCase();
      return (
        m.name_vi.toLowerCase().includes(s) ||
        m.name_en.toLowerCase().includes(s)
      );
    });

  // Group by section
  const cutting = machines.filter((m) => m.section === "cutting");
  const sewing = machines.filter((m) => m.section === "sewing");
  const finishing = machines.filter((m) => m.section === "finishing");

  return (
    <>
      <PageTitle
        icon="bi bi-menu-button-wide"
        title="Library /"
        subtitle="Automation machine"
      />

      {/* Show table */}
      {showTable && <MachineStockTable data={machines} />}

      {/* Search + Filter + Toggle */}
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
        <AutomationSection title="Cutting" machines={filterMachines(cutting)} />
      )}

      {(filterSection === "All" || filterSection === "sewing") && (
        <AutomationSection title="Sewing" machines={filterMachines(sewing)} />
      )}

      {(filterSection === "All" || filterSection === "finishing") && (
        <AutomationSection
          title="Finishing"
          machines={filterMachines(finishing)}
        />
      )}
    </>
  );
}

export default AutomationMachine;
