import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function Root() {
  return (
    <div>
      <div id="nav">
        <Navbar />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
