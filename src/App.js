import logo from "./logo.svg";
import "./index.css";
import "./App.css";
import _ from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/reducer/counterSlice";
import { Route, Routes, Swicth, BrowserRouter } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counterSlice);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
