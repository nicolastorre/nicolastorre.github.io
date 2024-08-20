import React, { useEffect } from "react";
import CV from "../../components/CV/CV";
import CV_NicolasTorre_fr_v1 from "../../data/CV_NicolasTorre_fr_v1.json";
import i18n from "../../i18n";

const FrCV: React.FC = () => {
  useEffect(() => {
    i18n.changeLanguage("fr");
  }, []);

  return <CV data={CV_NicolasTorre_fr_v1} />;
};

export default FrCV;
