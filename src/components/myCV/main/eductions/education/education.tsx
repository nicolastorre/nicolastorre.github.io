import { Education as EducationInterface } from "../../../../../interface/MyCVData";

type EducationProps = {
  educationData: EducationInterface;
};

const WorkExperience = ({ educationData }: EducationProps) => {
  return (
    <div className="py-2">
      <div className="flex flex-row justify-between">
        <div className="w-[70%]">
          <p className="text text-sm mb-2">
            {educationData.title} - {educationData.place}
          </p>
        </div>
        <div>
          <p className="text text-xs mb-2">{educationData.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
