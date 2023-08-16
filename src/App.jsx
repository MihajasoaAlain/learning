
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Formulaire from "./components/Formulaire";
import Tableau from "./components/Tableau";
import React from "react";
import { DataProvider } from "./context/DataContext";
function App() {
    
  return (
    <DataProvider>
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
    </DataProvider>
  );
}

export default App;
