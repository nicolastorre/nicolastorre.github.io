import { CVData } from "../../../../interface/CVData";
import WorkExperience from "./workExperience/workExperience";

type WorkExperiencesProps = {
  workExperiencesData: CVData["workExperiences"];
};

const WorkExperiences = ({ workExperiencesData }: WorkExperiencesProps) => {
  return (
    <div className="p-4">
      <h3 className="text font-bold">Work experiences</h3>
      {workExperiencesData.map((workExperienceData) => {
        return <WorkExperience workExperienceData={workExperienceData} />;
      })}
    </div>
  );
};

export default WorkExperiences;
