import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Formulaire from "./components/Formulaire";
import Tableau from "./components/Tableau";
function App() {
  return (
    <>
    <Navbar></Navbar>
      <div className="container" id="main">
        <div className="row">
          <div className="col-4">
            <Formulaire />
          </div>
          <div className="col-1"></div>
          <Tableau />
        </div>
      </div>
    </>
  );
}

export default App;
