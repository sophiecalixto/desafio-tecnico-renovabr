import React from "react";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
