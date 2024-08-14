import { MyCVData } from "../../../interface/MyCVData";
import Educations from "./eductions/educations";
import WorkExperiences from "./workExperiences/workExperiences";

type MainProps = {
  data: MyCVData;
};

const Main = ({ data }: MainProps) => {
  return (
    <div className="h-full w-2/3 bg-white">
      <WorkExperiences workExperiencesData={data.workExperiences} />
      <Educations educationsData={data.educations} />
    </div>
  );
};

export default Main;
