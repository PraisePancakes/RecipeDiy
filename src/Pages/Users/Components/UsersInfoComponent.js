import React from "react";
import axios from "axios";
import { GrAddCircle } from "react-icons/gr";
import { CgRemove } from "react-icons/cg";

import { Link } from "react-router-dom";
const UsersInfoComponent = ({ otherUser, user }) => {
  const addFriends = async (friendId) => {
    try {
      await axios.patch(
        `http://localhost:3001/addFriends`,
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

  const removeFriends = async (friendId) => {
    try {
      await axios.patch(
        `http://localhost:3001/removeFriends`,
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
    <div className="flex justify-center items-center gap-1">
      {" "}
      <Link
        to={`/user/${otherUser._id}`}
        key={otherUser._id}
        className="users-uname text-xl"
      >
        {" "}
        @{otherUser.username}
      </Link>
      {user?.friends.includes(otherUser._id) ? (
        <button onClick={() => removeFriends(otherUser._id)}>
          <CgRemove />
        </button>
      ) : (
        <button onClick={() => addFriends(otherUser._id)}>
          <GrAddCircle />
        </button>
      )}
    </div>
  );
};

export default UsersInfoComponent;
