import { MyCVData } from "../../../interface/MyCVData";
import avatar from "../../../assets/images/avatar.png";
import Contacts from "./contacts/contacts";
import PersonalDetails from "./personalDetails/personalDetails";
import Objectives from "./objectives/objectives";
import Skills from "./skills/skills";

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

        <Objectives objectivesData={data.objectives} />

        <PersonalDetails personalDetailsData={data.personalDetails} />

        <Skills skillsData={data.skills} />
      </div>
    </div>
  );
};

export default SideBar;
