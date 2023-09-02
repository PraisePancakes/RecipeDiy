import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../L_Assets/profile.png";
import Loading from "../../../GL_Components/Loading";

const UserFriendsComponent = ({ user, isLoading, friends }) => {
  const [search, setSearch] = useState("");

  const filteredFriends = friends?.filter((friend) =>
    friend.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <div>
      {" "}
      <section className="user-friends-skeleton flex flex-col gap-5 items-center my-10">
        <div className="user-friends-box flex gap-5 items-center">
          {" "}
          <h1 className="user-friends-header font-thin text-5xl">
            CHEF BUDDIES
          </h1>
          <Link to="/users">
            {" "}
            <button className="user-friends-browse border p-2 rounded-md text-slate-500 hover:text-white hover:bg-slate-900 transition-colors duration-300">
              Browse Users
            </button>
          </Link>
        </div>
        <section className="flex justify-center mb-5">
          <input
            className="xs:w-[20rem] sm:w-[30rem] md:w-[40rem] bg-inherit  px-2 h-[2rem] focus:outline-none font-thin bg-slate-100 border rounded-full"
            placeholder="Search for a friend..."
            onChange={handleChange}
          ></input>
        </section>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="user-friends-ulist text-3xl font-thin">
            {!filteredFriends?.length ? (
              <h2 className="user-no-friends-header text-slate-400">
                No current friends / Invalid search
              </h2>
            ) : (
              <ul className="user-friends-ulist-skeleton flex flex-col items-center justify-center gap-5">
                {filteredFriends?.map((friend) => {
                  return (
                    <Link
                      to={
                        friend?.username === user.username
                          ? "/profile"
                          : `/user/${friend._id}`
                      }
                      key={friend._id}
                      className="user-friends-ulist-items flex items-center justify-center gap-2"
                    >
                      {friend?.profileImgURL !== "" ? (
                        <img
                          src={`http://localhost:3001/User_Mult_Images/${friend?.profileImgURL}`}
                          className=" rounded-full w-[4rem] h-[4rem] object-cover"
                          alt="Profile "
                        />
                      ) : (
                        <img
                          src={ProfilePic}
                          className="rounded-full w-[4rem] h-[4rem] object-cover"
                          alt="Default Profile "
                        />
                      )}
                      <h1 className="w-[5rem]">@{friend?.username}</h1>
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserFriendsComponent;
