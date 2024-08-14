import { CVData } from "../../../interface/CVData";
import Contacts from "./contacts/contacts";
import PersonalDetails from "./personalDetails/personalDetails";
import Objectives from "./objectives/objectives";
import Skills from "./skills/skills";
import Profile from "./Profile/Profile";

type SideBarProps = {
  data: CVData;
};

const SideBar = ({ data }: SideBarProps) => {
  return (
    <div className="h-full w-1/3 bg-stone-400">
      <div className="flex flex-col justify-center items-center">
        <Profile profileData={data.profile} />

        <Contacts contactsData={data.contacts} />

        <Objectives objectivesData={data.objectives} />

        <PersonalDetails personalDetailsData={data.personalDetails} />

        <Skills skillsData={data.skills} />
      </div>
    </div>
  );
};

export default SideBar;
