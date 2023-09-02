import React, { useEffect, useState } from "react";
import Loading from "../../../GL_Components/Loading";
import { TbChefHat } from "react-icons/tb";
import axios from "axios";
import "../Css/PostCount.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import ProfileDeleteAccount from "./ProfileDeleteAccount";
import "../Css/AdminStatus.css";

const ProfileInfoComponent = ({ user }) => {
  const [postCount, setPostCount] = useState(0);
  const [isEditUsername, setIsEditUsername] = useState(false);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserPostCount = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://recipediy.onrender.com/getUserPostCount"
        );

        setPostCount(response.data.postCount);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUserPostCount();
  }, []);

  const handleUsernameEdit = async () => {
    try {
      const response = await axios.patch(
        "https://recipediy.onrender.com/edit/editUsername",
        { username }
      );
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col items-start gap-2 xs:text-base md:text-2xl">
        {error && (
          <div className="text-lg border-red-900 tracking-wide text-white font-bold border px-2 rounded-md bg-red-500">
            {error}
          </div>
        )}
        <h2 className="flex gap-3 items-center">
          <span className="font-bold">Chef :</span>{" "}
          {isLoading ? <Loading /> : <span>{user?.username}</span>}
          <button
            onClick={() => setIsEditUsername(true)}
            className={`${
              isEditUsername ? "hidden " : " flex items-center gap-1"
            }`}
          >
            <AiTwotoneEdit color="#364357" />
          </button>
          <div className="flex items-center gap-2">
            <input
              className={`${
                isEditUsername
                  ? "w-[15rem] h-7 px-2 border focus:outline-none "
                  : "w-0 h-0"
              } transiton-width duration-500`}
              name="username"
              placeholder="Enter a new username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button
              onClick={() => setIsEditUsername(false)}
              className={`${isEditUsername ? "block" : "hidden"}  `}
            >
              &times;
            </button>
            <button
              onClick={() => handleUsernameEdit()}
              className={`${
                isEditUsername ? "block" : "hidden"
              } text-base border rounded-full p-[.15rem] border-green-800 `}
            >
              <FcCheckmark />
            </button>
          </div>
        </h2>
        <h2 className="flex items-center gap-5">
          <span className="font-bold">Chef ID :</span>{" "}
          {isLoading ? <Loading /> : <span className="">{user?._id}</span>}
        </h2>
        <h2 className="flex gap-5">
          <span className="font-bold">A star was born :</span>{" "}
          {isLoading ? (
            <Loading />
          ) : (
            <span>{user?.createdAt.split("T")[0]}</span>
          )}
        </h2>

        {isLoading ? (
          <Loading />
        ) : (
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
            {user?.isAdmin ? (
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
        )}
        <ProfileDeleteAccount />
      </div>
    </div>
  );
};

export default ProfileInfoComponent;
