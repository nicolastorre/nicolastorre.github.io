import { MyCVData } from "../../../interface/MyCVData";
import WorkExperiences from "./workExperiences/workExperiences";

type MainProps = {
  data: MyCVData;
};

const Main = ({ data }: MainProps) => {
  return (
    <div className="h-[297mm] w-2/3 bg-white">
      <WorkExperiences workExperiencesData={data.workExperiences} />
      <div className="p-4 m-2">
        <h3 className="text">Education</h3>
      </div>
    </div>
  );
};

export default Main;
