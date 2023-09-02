import React, { useEffect, useState } from "react";
import ProfilePic from "../../L_Assets/profile.png";
import { TbChefHat } from "react-icons/tb";
import axios from "axios";

const UserInfoComponent = ({ otherUser }) => {
  const [postCount, setPostCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOtherUserPostCount = async () => {
      try {
        const response = await axios.get(
          `https://recipediy.onrender.com/getOtherUserPostCount/${otherUser?._id}`
        );

        setPostCount(response.data.postCount);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    };
    getOtherUserPostCount();
  }, [otherUser]);
  return (
    <div>
      <section className="user-page-skeleton flex flex-col items-start text-3xl font-thin  gap-5">
        {error && <h1>{error}</h1>}
        <div className="user-id-flex-items flex items-center gap-5">
          <h1 className="user-header font-thin text-5xl">
            @{otherUser?.username}
          </h1>
          {otherUser?.profileImgURL !== "" ? (
            <img
              src={`https://recipediy.onrender.com/User_Mult_Images/${otherUser?.profileImgURL}`}
              className="user-pfp border rounded-full w-[8rem] h-[8rem] object-cover"
              alt="Profile"
            ></img>
          ) : (
            <img
              src={ProfilePic}
              className="user-def-pfp border rounded-full w-[8rem] h-[8rem] object-cover"
              alt="Default Profile"
            ></img>
          )}
        </div>

        <h2 className="user-acc-created-header">
          <span className="user-acc-created-header-span font-bold">
            A star was born :
          </span>{" "}
          {otherUser?.createdAt}
        </h2>
        <div className="flex items-center gap-2">
          {" "}
          <span className="font-bold">Community Badges :</span>{" "}
          <TbChefHat
            id={
              postCount <= 5
                ? "base-status-profile"
                : postCount <= 10
                ? "first-tier-status-profile"
                : postCount <= 30
                ? "second-tier-status-profile"
                : postCount <= 70
                ? "third-tier-status-profile"
                : "legendary-tier-status-profile"
            }
            className="w-[2rem] h-[2rem] p-2  rounded-full"
          />
          {otherUser?.isAdmin ? (
            <h1
              id="admin-status-profile"
              className="text-base px-2 rounded-md tracking-wider font-bold border border-yellow-600"
            >
              ADMIN
            </h1>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};

export default UserInfoComponent;
