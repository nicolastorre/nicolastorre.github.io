import { useTranslation } from "react-i18next";
import { CVData } from "../../../../interface/CVData";
import Education from "./education/education";

type EducationsProps = {
  educationsData: CVData["educations"];
};

const Educations = ({ educationsData }: EducationsProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 m-2">
      <h3 className="text font-bold underline">{t("EDUCATIONS")}</h3>
      {educationsData.map((educationData) => {
        return <Education educationData={educationData} />;
      })}
    </div>
  );
};

export default Educations;
