import { MyCVData } from "../../../../interface/MyCVData";

type PersonalDetailsProps = {
  personalDetailsData: MyCVData["personalDetails"];
};

const PersonalDetails = ({ personalDetailsData }: PersonalDetailsProps) => {
  return (
    <div className="p-4">
      <h3 className="text-black font-bold text-center mb-2">
        Personal details
      </h3>
      {Object.keys(personalDetailsData).map((key: string) => (
        <div className="flex flex-row justify-between mb-2">
          <p className="text text-sm capitalize font-bold mr-2">{key}:</p>
          <p className="text text-sm">
            {personalDetailsData[key as keyof MyCVData["personalDetails"]]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;
