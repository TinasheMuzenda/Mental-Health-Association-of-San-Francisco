import { useState } from "react";
import "./App.css";
import Logo from "../public/logo.svg";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Page/>
    </div>
  );
};

export default App;
