import { MyCVData } from "../../../../interface/MyCVData";

type ObjectivesProps = {
  objectivesData: MyCVData["objectives"];
};

const Objectives = ({ objectivesData }: ObjectivesProps) => {
  return (
    <div className="p-4">
      <h3 className="text-black font-bold text-center">Objectives</h3>
      <p className="text-black text-sm text-justify">{objectivesData}</p>
    </div>
  );
};

export default Objectives;
