import React, { useEffect } from "react";
import CV from "../../components/CV/CV";
import CV_NicolasTorre_en_v2 from "../../data/CV_NicolasTorre_en_v2.json";
import i18n from "../../i18n";

const EnPHPCV: React.FC = () => {
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return <CV data={CV_NicolasTorre_en_v2} />;
};

export default EnPHPCV;
