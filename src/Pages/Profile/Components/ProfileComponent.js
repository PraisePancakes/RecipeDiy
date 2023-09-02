import React from "react";

import ProfilePictureComponent from "./ProfilePictureComponent";
import ProfileInfoComponent from "./ProfileInfoComponent";
import UserFriendsComponent from "./UserFriendsComponent";

const ProfileComponent = ({ user }) => {
  return (
    <div>
      {" "}
      <section className="flex flex-col items-start text-3xl font-thin  gap-5">
        <ProfilePictureComponent user={user} />
        <ProfileInfoComponent user={user} />
      </section>
      <section className="flex flex-col gap-5 items-center my-10">
        <UserFriendsComponent user={user} />
      </section>
    </div>
  );
};

export default ProfileComponent;
