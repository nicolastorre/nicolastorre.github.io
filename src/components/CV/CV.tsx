import Sheet from "../sheet/Sheet";
import Main from "./main/main";
import SideBar from "./sideBar/SideBar";
import { CVData } from "../../interface/CVData";

type CVProps = {
  data: CVData;
};

const CV = ({ data }: CVProps) => {
  return (
    <Sheet>
      <div className="h-full flex flex-row">
        <SideBar data={data} />
        <Main data={data} />
      </div>
    </Sheet>
  );
};

export default CV;
