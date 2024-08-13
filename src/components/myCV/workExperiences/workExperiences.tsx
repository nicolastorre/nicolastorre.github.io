import { MyCVData } from "../../../interface/MyCVData";

type WorkExperiencesProps = {
  workExperiencesData: MyCVData["workExperiences"];
};

const WorkExperiences = ({ workExperiencesData }: WorkExperiencesProps) => {
  return (
    <div className="p-4 m-2">
      <h3 className="text">Work experiences</h3>
      {workExperiencesData.map((workExperienceData) => {
        return <p>{JSON.stringify(workExperienceData)}</p>;
      })}
    </div>
  );
};

export default WorkExperiences;
