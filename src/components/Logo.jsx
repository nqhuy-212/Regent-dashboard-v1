import React from "react";
import "./logo.css";
import img from "../assets/img/logo.png";

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          {/* <img src={img} alt="" /> */}
          <span className="d-none d-lg-block">Regent Dashboard</span>
        </a>
        <i
          className="bi bi-list toggle-sidebar-btn"
          onClick={handleToggleSidebar}
        ></i>
      </div>
    </div>
  );
}

export default Logo;
