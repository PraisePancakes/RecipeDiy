import React from "react";
import { Link } from "react-router-dom";
import { TbChefHat } from "react-icons/tb";
import Profile from "../../L_Assets/profile.png";
import Loading from "../../../GL_Components/Loading";

const PostHeaderComponent = ({ user, userInfo, post, postCount }) => {
  if (!user) {
    return;
  }
  return (
    <div>
      {" "}
      <div
        id="recipe-details-container"
        className=" text-6xl px-[10rem] text-white font-thin flex flex-col justify-center h-[30rem] items-center gap-5 mb-[2rem] "
      >
        {" "}
        {post?.title.toUpperCase()}{" "}
        <div className="flex items-center gap-2">
          {" "}
          <span className="text-lg">by</span>{" "}
          <Link
            to={
              userInfo?.username === user?.username
                ? "/profile"
                : `/user/${userInfo?._id}`
            }
          >
            <h2 className="text-lg font-normal  underline">
              {userInfo?.username ?? <Loading />}
            </h2>
          </Link>
          {userInfo?.profileImgURL !== "" ? (
            <img
              src={`http://localhost:3001/User_Mult_Images/${userInfo?.profileImgURL}`}
              className="border rounded-full w-[4rem] h-[4rem] object-cover"
              alt="Profile"
            ></img>
          ) : (
            <img
              src={Profile}
              className="border rounded-full w-[4rem] h-[4rem] object-cover"
              alt="Default Profile"
            ></img>
          )}
        </div>
        <TbChefHat
          id={
            postCount <= 5
              ? "base-status"
              : postCount <= 10
              ? "first-tier-status"
              : postCount <= 30
              ? "second-tier-status"
              : postCount <= 70
              ? "third-tier-status"
              : "legendary-tier-status"
          }
          className="w-[2rem] h-[2rem] p-2  rounded-full"
        />
        <span className="text-lg flex gap-2">
          {" "}
          DIFFICULTY{" "}
          <h1
            className={`${
              post?.difficulty === "EASY" ? (
                "bg-green-300 h-full"
              ) : post?.difficulty === "INTERMEDIATE" ? (
                "bg-yellow-400  h-full"
              ) : post?.difficulty === "HARD" ? (
                "bg-red-400  h-full"
              ) : post?.difficulty === "MICHELIN" ? (
                "bg-slate-800 text-red-600  h-full"
              ) : (
                <></>
              )
            } w-[10rem] rounded font-bold`}
          >
            {post?.difficulty}{" "}
          </h1>
        </span>
      </div>
    </div>
  );
};

export default PostHeaderComponent;
