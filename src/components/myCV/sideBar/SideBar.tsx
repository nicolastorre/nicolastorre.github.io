import { MyCVData } from "../../../interface/MyCVData";
import avatar from "../../../assets/images/avatar.png";
import DynamicIcon from "../../dynamicIcon/DynamicIcon";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import Contacts from "./contacts/contacts";

type SideBarProps = {
  data: MyCVData;
};

const SideBar = ({ data }: SideBarProps) => {
  return (
    <div className="h-full w-1/3 bg-stone-400">
      <div className="flex flex-col justify-center items-center">
        <div className="p-4">
          <img src={avatar} width="128" height="128" alt="avatar" />
        </div>
        <div className="bg-blue-700 p-2 rounded">
          <h1 className="text-white font-bold text-center">
            {data.firstname} {data.name}
          </h1>
        </div>
        <div className="p-4">
          <h2 className="text-blue-700 font-bold text-center">
            {data.jobTitle}
          </h2>
        </div>
        <Contacts contactsData={data.contacts} />
        <div className="p-4">
          <h3 className="text-black font-bold text-center">Objectives</h3>
          <p className="text-black text-sm text-justify">{data.objectives}</p>
        </div>
        <div className="p-4">
          <h3 className="text-black font-bold text-center">Personal details</h3>
          {Object.keys(data.personalDetails).map((key: string) => (
            <p>
              {key}:{" "}
              {data.personalDetails[key as keyof MyCVData["personalDetails"]]}
            </p>
          ))}
        </div>
        {data?.skills ? (
          <div className="p-4">
            <h3 className="text-black font-bold text-center">Skills</h3>
            {data.skills?.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
