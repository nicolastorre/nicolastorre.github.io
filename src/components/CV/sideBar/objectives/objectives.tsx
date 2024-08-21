import { useTranslation } from "react-i18next";
import { CVData } from "../../../../interface/CVData";

type ObjectivesProps = {
  objectivesData: CVData["objectives"];
};

const Objectives = ({ objectivesData }: ObjectivesProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h3 className="text-black font-bold underline text-center mb-2">
        {t("OBJECTIVES")}
      </h3>
      <p className="text-black text-sm text-justify">{objectivesData}</p>
    </div>
  );
};

export default Objectives;
