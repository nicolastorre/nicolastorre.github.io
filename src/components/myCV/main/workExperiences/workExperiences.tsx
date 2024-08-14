import { MyCVData } from "../../../../interface/MyCVData";
import WorkExperience from "./workExperience/workExperiences";

type WorkExperiencesProps = {
  workExperiencesData: MyCVData["workExperiences"];
};

const WorkExperiences = ({ workExperiencesData }: WorkExperiencesProps) => {
  return (
    <div className="p-4 m-2">
      <h3 className="text font-bold">Work experiences</h3>
      {workExperiencesData.map((workExperienceData) => {
        return <WorkExperience workExperienceData={workExperienceData} />;
      })}
    </div>
  );
};

export default WorkExperiences;
