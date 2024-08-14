import { CVData } from "../../../../interface/CVData";
import avatar from "../../../../assets/images/avatar.png";

type ProfileProps = {
  profileData: CVData["profile"];
};

const Profile = ({ profileData }: ProfileProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-4">
        <img
          src={avatar}
          width="128"
          height="128"
          alt="avatar"
          className="rounded-xl"
        />
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
