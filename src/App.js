import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/heading/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
