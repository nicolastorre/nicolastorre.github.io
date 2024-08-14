import Sheet from "../sheet/Sheet";
import Main from "./main/main";
import SideBar from "./sideBar/SideBar";
import myCVData from "../../data/myCV.json";

const MyCV = () => {
  return (
    <Sheet>
      <div className="h-full flex flex-row">
        <SideBar data={myCVData} />
        <Main data={myCVData} />
      </div>
    </Sheet>
  );
};

export default MyCV;
