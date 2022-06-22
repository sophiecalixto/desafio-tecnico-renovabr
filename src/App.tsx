import React from "react";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navbar";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
