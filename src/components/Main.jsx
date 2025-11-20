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

import CopReport from "../pages/PowerBI/COPreport.jsx";
import OffStdTime from "../pages/PowerBI/OffStdTime.jsx";
import Needle from "../pages/PowerBI/Needle.jsx";
import BeeTogether from "../pages/PowerBI/BeeTogether.jsx";
import DailyIndividualEff from "../pages/PowerBI/DailyIndividualEff.jsx";
import OeeTvShow from "../pages/PowerBI/OeeTvShow.jsx";
import AutomationMachineDetail from "../pages/Library/AutomationMachineDetail.jsx";

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

        {/* Power BI */}
        <Route path="/powerbi/cop-report" element={<CopReport />} />
        <Route path="/powerbi/bee-together" element={<BeeTogether />} />
        <Route
          path="/powerbi/daily-individual-eff"
          element={<DailyIndividualEff />}
        />
        <Route path="/powerbi/oee-tv" element={<OeeTvShow />} />
        <Route path="/powerbi/needle" element={<Needle />} />
        <Route path="/powerbi/off-std" element={<OffStdTime />} />

        {/* Library */}
        <Route
          path="/library/automation-machine"
          element={<AutomationMachine />}
        />
        <Route
          path="/library/automation-machine/:id"
          element={<AutomationMachineDetail />}
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
