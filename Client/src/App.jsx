/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { increment, decrement, reset } from "../store/counterSlice";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initial } from "../store/counterSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //initialize the state of counter
    console.log("fetching data from app.jsx");
    fetch("http://localhost:3000/count")
      .then((res) => res.json())
      .then((data) => {
        dispatch(initial(data));
      });
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
