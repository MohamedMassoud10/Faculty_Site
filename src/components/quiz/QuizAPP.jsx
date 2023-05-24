import React from "react";
import Start from "./Start";
import Finally from "./Finally";
import "./quiz.css";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./QuizPage";
const QuizAPP = () => {
  let [Interval, setIntervall] = React.useState(15);
  let myinterval;
  function interval() {
    myinterval = setInterval(() => {
      setIntervall((I) => (I > 0 ? I - 1 : clearInterval(myinterval)));
    }, 1000);
  }
  return (
    <>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Start interval={interval} setIntervall={setIntervall} />}
          />
          <Route
            path="/finally"
            element={
              <Finally interval={interval} setIntervall={setIntervall} />
            }
          />
          <Route
            path="/quizpage"
            element={
              <QuizPage
                myinterval={myinterval}
                interval={interval}
                Interval={Interval}
                setIntervall={setIntervall}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default QuizAPP;
