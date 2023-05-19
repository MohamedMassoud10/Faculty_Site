import React from "react";
import "./levels.css";
import levelsCard from "../../dummydata";
const LevelsCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2 levels">
          {levelsCard.map((val) => (
            <div className="items">
              <div className="content flex levels">
                <div className="left">
                  <div className="img">
                    <h1>{val.id}</h1>
                  </div>
                </div>
                <div className="text">
                  <h1>{val.levelName}</h1>
                </div>
              </div>
              <button className="outline-btn">JOIN NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LevelsCard;
