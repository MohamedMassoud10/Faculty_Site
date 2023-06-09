import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
export default function QuizPage({
  myinterval,
  interval,
  Interval,
  setIntervall,
}) {
  let [QuestionQunter, setQuestionQunter] = React.useState(0);
  let [Questions, setQuestions] = React.useState(1);
  let answerOne = React.useRef();
  let answerTwo = React.useRef();
  let answerThree = React.useRef();
  let answerFour = React.useRef();
  let NextQ = React.useRef();
  let Exit = React.useRef();
  function ClearInterval() {
    React.useEffect(() => {
      clearInterval(myinterval);
    });
  }
  function handelClick() {
    if (Questions < Data.length) {
      NextQ.current.style.display = "none";
    } else {
      NextQ.current.style.display = "none";
    }
    clearInterval(myinterval);
    interval();
    setIntervall(15);
    if (QuestionQunter <= Data.length) {
      setQuestionQunter(QuestionQunter + 1);
      setQuestions(Questions + 1);
    }
    answerOne.current.className = "answer";
    answerTwo.current.className = "answer";
    answerThree.current.className = "answer";
    answerFour.current.className = "answer";
    ClearInterval();
  }
  function handelClickedAnswer() {
    if (Data[QuestionQunter].right_answer === answerOne.current.innerHTML) {
      answerOne.current.className = "rihgt";
      console.log("score");
    } else {
      answerOne.current.className = "wrong";
    }
    if (Data[QuestionQunter].right_answer === answerTwo.current.innerHTML) {
      console.log("score");
      answerTwo.current.className = "rihgt";
    } else {
      answerTwo.current.className = "wrong";
    }
    if (Data[QuestionQunter].right_answer === answerThree.current.innerHTML) {
      console.log("score");
      answerThree.current.className = "right";
    } else {
      answerThree.current.className = "wrong";
    }
    if (Data[QuestionQunter].right_answer === answerFour.current.innerHTML) {
      answerFour.current.className = "right";
      console.log("score");
    } else {
      answerFour.current.className = "wrong";
    }
    clearInterval(myinterval);
    setIntervall(0);
    if (Questions < Data.length) {
      NextQ.current.style.display = "block";
    } else {
      Exit.current.style.display = "block";
    }
  }

  return (
    <div className="quiz">
      <header>
        <div className="title">Awesome Appliction </div>
        <div className="counter">
          Time Left <span>{Interval}</span>
        </div>
      </header>
      <hr />
      <div className="questions">
        <h1>
          {Questions}.{Data[QuestionQunter].title}
        </h1>
        <div className="answers">
          <div className="answer" onClick={handelClickedAnswer} ref={answerOne}>
            {Data[QuestionQunter].answer[0]}
          </div>
          <div className="answer" onClick={handelClickedAnswer} ref={answerTwo}>
            {Data[QuestionQunter].answer[1]}
          </div>
          <div
            className="answer"
            onClick={handelClickedAnswer}
            ref={answerThree}
          >
            {Data[QuestionQunter].answer[2]}
          </div>
          <div
            className="answer"
            onClick={handelClickedAnswer}
            ref={answerFour}
          >
            {Data[QuestionQunter].answer[3]}
          </div>
        </div>
      </div>
      <footer>
        <div className="question-counter">
          {Questions} of {Data.length} Questions
        </div>
        <button onClick={handelClick} ref={NextQ}>
          Next Que
        </button>
        <Link to="/finally" className="exit" ref={Exit}>
          <button onClick={handelClick}>Exit</button>Exit
        </Link>
      </footer>
    </div>
  );
}
