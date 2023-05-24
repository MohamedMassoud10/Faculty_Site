import React from "react";
import { Link } from "react-router-dom";
export default function Start({ interval, setIntervall }) {
  function handelClick() {
    interval();
    setIntervall(15);
  }
  return (
    <div className="start">
      <a>
        <button onClick={handelClick}>Start</button>
      </a>
    </div>
  );
}
