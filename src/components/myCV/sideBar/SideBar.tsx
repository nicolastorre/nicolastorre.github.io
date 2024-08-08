import { MyCVData } from "../../../interface/MyCVData";
import avatar from "../../../assets/images/avatar.png";

type SideBarProps = {
  data: MyCVData;
};

const SideBar = ({ data }: SideBarProps) => {
  return (
    <div className="h-[297mm] w-1/3 bg-stone-400">
      <div className="flex flex-col justify-center items-center">
        <div className="p-4 m-2">
          <img src={avatar} width="256" height="256" alt="avatar" />
        </div>
        <div className="bg-blue-700 p-4 m-2">
          <h1 className="text-white text-3xl font-bold text-center">
            {data.firstname} {data.name}
          </h1>
        </div>
        <div className="p-4 m-2">
          <h2 className="text-blue-700 text-xl font-bold text-center">
            {data.jobTitle}
          </h2>
        </div>
        {data?.contacts ? (
          <div className="p-4 m-2 flex flex-col justify-center items-center">
            {data.contacts.map((contact) => (
              <a href={contact.href}>{contact.text}</a>
            ))}
          </div>
        ) : null}
        <div className="p-4 m-2">
          <h3 className="text-black font-bold text-center">Objectives</h3>
          <p>{data.objectives}</p>
        </div>
        <div className="p-4 m-2">
          <h3 className="text-black font-bold text-center">Personal details</h3>
          <p>age: {data.personalDetails.age}</p>
        </div>
        {data?.skills ? (
          <div className="p-4 m-2">
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
