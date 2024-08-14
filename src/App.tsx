import React from "react";
import "./App.css";
import CVData from "./data/myCV.json";
import CV from "./components/CV/CV";

function App() {
  return (
    <div className="App">
      <CV data={CVData} />
    </div>
  );
}

export default App;
