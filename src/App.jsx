import { useState } from "react";
import "./App.css";
import Logo from "../public/logo.svg";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Last from "./components/Last";

const App = () => {
  return (
    <div>
      <Navbar />
      <Page />
      <Last />
    </div>
  );
};

export default App;
