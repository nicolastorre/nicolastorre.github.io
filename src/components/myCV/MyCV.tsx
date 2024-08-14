import Sheet from "../sheet/Sheet";
import Main from "./main/main";
import SideBar from "./sideBar/SideBar";
import { MyCVData } from "../../interface/MyCVData";

type MyCVProps = {
  data: MyCVData;
};

const MyCV = ({ data }: MyCVProps) => {
  return (
    <Sheet>
      <div className="h-full flex flex-row">
        <SideBar data={data} />
        <Main data={data} />
      </div>
    </Sheet>
  );
};

export default MyCV;
