import React from "react";
import "./iframe.css";

function Iframe(props) {
  return (
    <iframe src={props.src} frameborder="0" allowfullscreen="true"></iframe>
  );
}

export default Iframe;
