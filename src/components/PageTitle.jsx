import React from "react";
import "./pageTitle.css";

function PageTitle(props) {
  return (
    <div className="page-title d-flex align-items-center gap-1 mb-4 sticky-top">
      <i className={props.icon}></i>
      <h5>{props.title}</h5>
      <h6>{props.subtitle}</h6>
    </div>
  );
}

export default PageTitle;
