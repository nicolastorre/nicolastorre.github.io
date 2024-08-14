import React from "react";
import "./App.css";
import MyCV from "./components/myCV/MyCV";
import myCVData from "./data/myCV.json";

function App() {
  return (
    <div className="App">
      <MyCV data={myCVData} />
    </div>
  );
}

export default App;
