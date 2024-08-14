import { MyCVData } from "../../../../interface/MyCVData";

type SkillsProps = {
  skillsData: MyCVData["skills"];
};

const Skills = ({ skillsData }: SkillsProps) => {
  return (
    <>
      {skillsData ? (
        <div className="p-4">
          <h3 className="text-black font-bold text-center">Skills</h3>
          {skillsData?.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Skills;
