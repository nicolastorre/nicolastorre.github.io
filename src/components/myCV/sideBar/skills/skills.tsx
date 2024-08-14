import { MyCVData } from "../../../../interface/MyCVData";

type SkillsProps = {
  skillsData: MyCVData["skills"];
};

const Skills = ({ skillsData }: SkillsProps) => {
  return (
    <>
      {skillsData ? (
        <div className="p-4">
          <h3 className="text-black font-bold text-center mb-2">Skills</h3>
          <div className="flex flex-col">
            {skillsData?.map((skill) => (
              <p className="bg-blue-700 rounded text text-xs text-white text-center font-bold p-2 mb-2">
                {skill}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Skills;
