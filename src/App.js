import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/heading/Header";
import Home from "./components/home/Home";
import LevelsHome from "./components/allLevels/LevelsHome";
import ToDoList from "./components/todolist/ToDoList";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/levelsHome" element={<LevelsHome />}></Route>
        <Route exact path="/todolist" element={<ToDoList />}></Route>
      </Routes>
    </>
  );
}

export default App;
