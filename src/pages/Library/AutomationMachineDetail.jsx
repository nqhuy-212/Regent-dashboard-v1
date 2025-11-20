import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/automationMachines.json";
import "./automationMachineDetail.css";

function AutomationMachineDetail() {
  const { id } = useParams();

  const all = [...data.cutting, ...data.sewing, ...data.finishing];
  const machine = all.find((m) => m.id === id);

  if (!machine) return <div>Machine not found</div>;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="mt-5">
        {machine.name_vi} / {machine.name_en}
      </h2>

      {/* <img
        className="border rounded-3"
        src={machine.avatar}
        alt=""
        width="400"
      /> */}

      {/* <h4 className="mt-3">Video </h4> */}

      {/* <h4 className="mt-1">Mô tả / Description</h4> */}
      <div className="desc-grid mt-3">
        <div className="desc-item">
          Capacity (8h): <strong>{machine.capacity}</strong>
        </div>
        <div className="desc-item">
          SAM Manual: <strong>{machine.sam_manual}</strong>
        </div>
        <div className="desc-item">
          SAM Auto: <strong>{machine.sam_auto}</strong>
        </div>
        <div className="desc-item">
          SAM Saving: <strong>{machine.sam_saving}</strong>
        </div>
        <div className="desc-item">
          HC Saving: <strong>{machine.hc_saving}</strong>
        </div>
      </div>

      <video
        className="border rounded-3 col-md-10 col-xl-8 mt-4"
        width="100%"
        controls
      >
        <source src={`/videos/${machine.id}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

export default AutomationMachineDetail;
