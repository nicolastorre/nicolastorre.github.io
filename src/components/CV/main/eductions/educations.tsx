import { CVData } from "../../../../interface/CVData";
import Education from "./education/education";

type EducationsProps = {
  educationsData: CVData["educations"];
};

const Educations = ({ educationsData }: EducationsProps) => {
  return (
    <div className="p-4 m-2">
      <h3 className="text font-bold">Educations</h3>
      {educationsData.map((educationData) => {
        return <Education educationData={educationData} />;
      })}
    </div>
  );
};

export default Educations;
