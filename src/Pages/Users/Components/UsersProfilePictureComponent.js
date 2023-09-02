import React from "react";
import ProfilePic from "../../L_Assets/profile.png";
import { Link } from "react-router-dom";

const UsersProfilePictureComponent = ({ otherUser }) => {
  return (
    <div>
      {" "}
      <Link to={`/user/${otherUser._id}`} key={otherUser._id}>
        {otherUser.profileImgURL !== "" ? (
          <img
            src={`https://recipediy.onrender.com/User_Mult_Images/${otherUser.profileImgURL}`}
            className="users-pfp border rounded-full w-[3rem] h-[3rem] object-cover"
            alt="Profile"
          ></img>
        ) : (
          <img
            src={ProfilePic}
            className="users-def-pfp border rounded-full w-[3rem] h-[3rem] object-cover"
            alt="Default Profile"
          ></img>
        )}
      </Link>
    </div>
  );
};

export default UsersProfilePictureComponent;
