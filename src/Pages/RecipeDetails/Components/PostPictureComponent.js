import React from "react";

const PostPictureComponent = ({ post }) => {
  if (!post) {
    return;
  }
  return (
    <div className="w-full flex justify-center">
      {" "}
      <img
        src={`http://localhost:3001/Post_Mult_Images/${post.postImageURL}`}
        className=" w-[40rem] h-[40rem] object-cover"
        alt="Recipe"
      ></img>
    </div>
  );
};

export default PostPictureComponent;
