import React from "react";
import ProfileComponent from "./Components/ProfileComponent";

const Profile = ({ user }) => {
  return (
    <div className="mx-10 my-10">
      <ProfileComponent user={user} />
    </div>
  );
};

export default Profile;
