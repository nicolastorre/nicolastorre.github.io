import { useTranslation } from "react-i18next";
import { CVData } from "../../../../interface/CVData";

type SkillsProps = {
  skillsData: CVData["skills"];
};

const Skills = ({ skillsData }: SkillsProps) => {
  const { t } = useTranslation();

  return (
    <>
      {skillsData ? (
        <div className="p-4">
          <h3 className="text-black font-bold text-center mb-2">
            {t("SKILLS")}
          </h3>
          <div className="flex flex-wrap gap-2  ">
            {skillsData?.map((skill) => (
              <p className="inline-block bg-blue-700 rounded text text-xs text-white text-center font-bold p-2 mb-2">
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
