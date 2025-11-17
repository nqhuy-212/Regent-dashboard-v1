import React from "react";
import "./sideBar.css";
import NavSection from "./NavSection";

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <NavSection
          id="dashboard-nav"
          icon="bi bi-bar-chart"
          title="Dashboard"
          items={[
            { title: "Overview", href: "/dashboard/overview" },
            { title: "Efficiency", href: "/dashboard/efficiency" },
            { title: "Headcount", href: "/dashboard/headcount" },
          ]}
        />
        <NavSection
          id="library-nav"
          icon="bi bi-menu-button-wide"
          title="Library"
          items={[
            {
              title: "Automation machine",
              href: "/library/automation-machine",
            },
            { title: "CPM operation", href: "/library/cpm-operation" },
          ]}
        />
        <NavSection
          id="document-nav"
          icon="bi bi-file-pdf"
          title="Document"
          items={[
            {
              title: "Bee together bonus",
              href: "/document/bee-together-bonus",
            },
            { title: "Incentive scheme", href: "/document/incentive-scheme" },
          ]}
        />
      </ul>
    </aside>
  );
}

export default SideBar;
