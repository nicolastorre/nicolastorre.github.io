import { useTranslation } from "react-i18next";
import { CVData } from "../../../../interface/CVData";

type PersonalDetailsProps = {
  personalDetailsData: CVData["personalDetails"];
};

const PersonalDetails = ({ personalDetailsData }: PersonalDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h3 className="text-black font-bold underline text-center mb-2">
        {t("PERSONAL_DETAILS")}
      </h3>
      {Object.keys(personalDetailsData).map((key: string) => (
        <div className="flex flex-row justify-between mb-2">
          <p className="text text-sm capitalize font-bold mr-2">{key}:</p>
          <p className="text text-xs text-right">
            {personalDetailsData[key as keyof CVData["personalDetails"]]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;
