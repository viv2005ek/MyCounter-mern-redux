/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Inc from "./components/Inc.jsx";
import Dec from "./components/Dec.jsx";
import Reset from "./components/Reset.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../store/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Inc />} />
      <Route path="Inc" element={<Inc />} />
      <Route path="Dec" element={<Dec />} />
      <Route path="Reset" element={<Reset />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
