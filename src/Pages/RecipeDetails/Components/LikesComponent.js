import React, { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import axios from "axios";

const LikesComponent = ({ user, postId }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    const getLikes = async () => {
      try {
        const response = await axios.get(
          `https://recipediy.onrender.com/getLikes/${postId}`
        );
        setLiked(response.data.some((e) => e.user === user?._id));
        setLikeCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    getLikes();
  }, [liked, postId, user?._id]);
  const handleLikePost = async () => {
    try {
      await axios.patch(`https://recipediy.onrender.com/likePost/${postId}`);
      setLiked(!liked);
    } catch (error) {
      console.log(error);
      setLiked(false);
    }
  };
  return (
    <div>
      {" "}
      <div className="flex justify-center gap-2 items-center">
        <button>
          {liked ? (
            <BsHeartFill
              className="text-red-500 hover:text-red-900 duration-300 transition-colors"
              onClick={() => handleLikePost()}
            />
          ) : (
            <BsHeart
              className="text-black hover:text-red-900 duration-300 transition-colors"
              onClick={() => handleLikePost()}
            />
          )}
        </button>
        <div>{likeCount}</div>
      </div>
    </div>
  );
};

export default LikesComponent;
