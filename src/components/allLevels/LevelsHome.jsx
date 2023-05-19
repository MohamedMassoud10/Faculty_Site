import React from "react";
import Back from "../back/Back";
import "./levels.css";
import LevelsCard from "../allLevels/LevelsCard";
const LevelsHome = () => {
  return (
    <>
      <Back title="Explore Levels" />
      <LevelsCard />
    </>
  );
};

export default LevelsHome;
