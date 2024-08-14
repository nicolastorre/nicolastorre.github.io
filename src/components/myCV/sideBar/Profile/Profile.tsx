import { MyCVData } from "../../../../interface/MyCVData";
import avatar from "../../../assets/images/avatar.png";

type ProfileProps = {
  profileData: MyCVData["profile"];
};

const Profile = ({ profileData }: ProfileProps) => {
  return (
    <div>
      <div className="p-4">
        <img src={avatar} width="128" height="128" alt="avatar" />
      </div>
      <div className="bg-blue-700 p-2 rounded">
        <h1 className="text-white font-bold text-center">
          {profileData.firstname} {profileData.name}
        </h1>
      </div>

      <div className="p-4">
        <h2 className="text-blue-700 font-bold text-center">
          {profileData.jobTitle}
        </h2>
      </div>
    </div>
  );
};

export default Profile;
