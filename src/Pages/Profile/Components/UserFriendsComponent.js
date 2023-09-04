import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfilePic from "../../L_Assets/profile.png";
import Loading from "../../../GL_Components/Loading";
import { CgRemove } from "react-icons/cg";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const UserFriendsComponent = ({ user }) => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");
  const friends = users
    ? users.filter((otherUser) => user?.friends.includes(otherUser._id))
    : [];
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const friendsPerPage = 5;

  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

  const filteredFriends = friends.filter((friend) =>
    friend.username.toLowerCase().includes(search.toLowerCase())
  );
  const currentFilteredFriends = filteredFriends.slice(
    indexOfFirstFriend,
    indexOfLastFriend
  );

  useEffect(() => {
    const getAllUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://recipediy.onrender.com/getAllUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getAllUsers();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const removeFriends = async (friendId) => {
    try {
      await axios.patch(
        `https://recipediy.onrender.com/removeFriends`,
        {
          friendId: friendId,
        },
        { withCredentials: true }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[40rem]">
      {" "}
      <div className="flex gap-5 items-center justify-center my-5  ">
        {" "}
        <span className="font-thin xs:text-3xl text-5xl">CHEF BUDDIES</span>
        <Link to="/users">
          {" "}
          <button className="border p-2 rounded-md text-slate-500 hover:text-white hover:bg-slate-900 transition-colors duration-300">
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
        <div className="text-3xl font-thin">
          {currentFriends.length === 0 ? (
            <h1 className="text-slate-400">No current friends</h1>
          ) : (
            <div>
              {search === "" ? (
                <ul className="flex flex-col items-start justify-center gap-5">
                  {currentFriends?.map((friend) => {
                    return (
                      <li
                        key={friend?._id}
                        className="flex items-center justify-center gap-2"
                      >
                        {" "}
                        <Link
                          className="flex items-center justify-center gap-2"
                          to={`/user/${friend._id}`}
                        >
                          {friend?.profileImgURL !== "" ? (
                            <img
                              src={`https://recipediy.onrender.com/User_Mult_Images/${friend?.profileImgURL}`}
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
                          <h1>@{friend?.username} </h1>
                        </Link>
                        <button onClick={() => removeFriends(friend._id)}>
                          <CgRemove size={15} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="flex flex-col items-start justify-center gap-5">
                  {currentFilteredFriends.map((friend) => {
                    return (
                      <li
                        key={friend?._id}
                        className="flex items-center justify-center gap-2"
                      >
                        {" "}
                        <Link
                          className="flex items-center justify-center gap-2"
                          to={`/user/${friend._id}`}
                        >
                          {friend?.profileImgURL !== "" ? (
                            <img
                              src={`https://recipediy.onrender.com/User_Mult_Images/${friend?.profileImgURL}`}
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
                          <li>@{friend?.username} </li>
                        </Link>
                        <button onClick={() => removeFriends(friend._id)}>
                          <CgRemove size={15} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className={`${
                    currentPage === 1 ? "text-slate-400" : "text-slate-800 "
                  }`}
                  disabled={currentPage === 1}
                >
                  <AiFillCaretLeft size={25} />
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className={`${
                    indexOfLastFriend >= friends.length
                      ? "text-slate-400"
                      : "text-slate-800 "
                  }`}
                  disabled={indexOfLastFriend >= friends.length}
                >
                  <AiFillCaretRight size={25} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserFriendsComponent;
