import { WorkExperience as WorkExperienceInterface } from "../../../../../interface/MyCVData";

type WorkExperienceProps = {
  workExperienceData: WorkExperienceInterface;
};

const WorkExperience = ({ workExperienceData }: WorkExperienceProps) => {
  return (
    <div className="py-2">
      <div className="flex flex-row justify-between">
        <div className="w-[60%]">
          <h4 className="text font-bold">{workExperienceData.position}</h4>
          <p className="text text-sm mb-2">{workExperienceData.company}</p>
        </div>
        <div>
          <p className="text text-xs mb-2">{workExperienceData.duration}</p>
        </div>
      </div>
      <p className="text text-xs text-justify">
        {workExperienceData.responsibilities}
      </p>
    </div>
  );
};

export default WorkExperience;
