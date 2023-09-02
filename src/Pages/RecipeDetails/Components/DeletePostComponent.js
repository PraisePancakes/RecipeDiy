import React from "react";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeletePostComponent = ({ postId }) => {
  const handlePostDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/deletePost/${postId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <button
        onClick={() => handlePostDelete()}
        className="text-red-800 flex items-center gap-2"
      >
        <RiDeleteBin6Line />
        DELETE POST
      </button>
    </div>
  );
};

export default DeletePostComponent;
