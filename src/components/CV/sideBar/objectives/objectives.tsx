import { CVData } from "../../../../interface/CVData";

type ObjectivesProps = {
  objectivesData: CVData["objectives"];
};

const Objectives = ({ objectivesData }: ObjectivesProps) => {
  return (
    <div className="p-4">
      <h3 className="text-black font-bold text-center mb-2">Objectives</h3>
      <p className="text-black text-sm text-justify">{objectivesData}</p>
    </div>
  );
};

export default Objectives;
