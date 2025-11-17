import React from "react";
import "./main.css";
import { Routes, Route, Navigate } from "react-router-dom";
// Pages
import Overview from "../../src/pages/Dashboard/Overview.jsx";
import Efficiency from "../../src/pages/Dashboard/Efficiency.jsx";
import Headcount from "../../src/pages/Dashboard/Headcount.jsx";

import AutomationMachine from "../../src/pages/Library/AutomationMachine.jsx";
import CpmOperation from "../../src/pages/Library/CpmOperation.jsx";

import BeeTogetherBonus from "../../src/pages/Document/BeeTogetherBonus.jsx";
import IncentiveScheme from "../../src/pages/Document/IncentiveScheme.jsx";

function Main() {
  return (
    <main id="main" className="main">
      <Routes>
        {/* ⭐ Mặc định vào Overview */}
        <Route
          path="/"
          element={<Navigate to="/dashboard/overview" replace />}
        />
        {/* Dashboard */}
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/efficiency" element={<Efficiency />} />
        <Route path="/dashboard/headcount" element={<Headcount />} />

        {/* Library */}
        <Route
          path="/library/automation-machine"
          element={<AutomationMachine />}
        />
        <Route path="/library/cpm-operation" element={<CpmOperation />} />

        {/* Document */}
        <Route
          path="/document/bee-together-bonus"
          element={<BeeTogetherBonus />}
        />
        <Route
          path="/document/incentive-scheme"
          element={<IncentiveScheme />}
        />
      </Routes>
    </main>
  );
}

export default Main;
