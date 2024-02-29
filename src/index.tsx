import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Header />
    <Navbar />
    <App />
  </Router>
);
