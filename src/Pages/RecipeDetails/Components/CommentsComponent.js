import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePic from "../../L_Assets/profile.png";
import { Link } from "react-router-dom";

const CommentsComponent = ({ user, postId }) => {
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/getComments/${postId}`
        );
        setPostComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostComments();
  }, [postId]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/addComment/${postId}`, {
        comment,
      });
      const newComment = {
        userDetails: user,
        content: comment,
        createdAt: new Date().toISOString(),
      };
      setPostComments((prevComments) => [...prevComments, newComment]);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-5 xl:w-[80rem] lg:w-[60rem] md:w-[50rem] sm:w-[30rem] xs:w-[20rem]">
        <div>
          {postComments.length === 1 ? (
            <h1 className="text-3xl text-left font-bold text-slate-600">
              {" "}
              {postComments.length} COMMENT
            </h1>
          ) : (
            <h1 className="text-3xl text-left font-bold text-slate-600">
              {" "}
              {postComments.length} COMMENTS
            </h1>
          )}
        </div>

        <form
          onSubmit={handleAddComment}
          className="flex justify-center  border-b border-b-slate-300"
        >
          <input
            id="comment--input"
            className="focus:outline-none  w-full px-2 bg-inherit font-thin"
            placeholder="leave a comment..."
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <button
            type="submit"
            className="border-l px-2 hover:bg-black hover:text-white transition-colors duration-300"
          >
            SUBMIT
          </button>
        </form>
        <ul>
          {postComments.map((comment) => {
            return (
              <div key={comment._id} className="flex gap-2 mb-5">
                <Link
                  to={
                    comment.userId === user._id
                      ? "/profile"
                      : `/user/${comment.userId}`
                  }
                >
                  {" "}
                  {comment.userDetails.profileImgURL ? (
                    <img
                      src={`http://localhost:3001/User_Mult_Images/${comment.userDetails.profileImgURL}`}
                      className="border rounded-full w-[3rem] h-[3rem] object-cover"
                      alt="Profile"
                    ></img>
                  ) : (
                    <img
                      src={ProfilePic}
                      className="border rounded-full w-[3rem] h-[3rem] object-cover"
                      alt="Default Profile"
                    ></img>
                  )}
                </Link>

                <div className="flex flex-col items-start justify-center">
                  <div className="flex gap-2 items-center">
                    <Link
                      to={
                        comment.userId === user._id
                          ? "/profile"
                          : `/user/${comment.userId}`
                      }
                    >
                      @{comment.userDetails.username}
                    </Link>
                    <li className="text-sm text-slate-500">
                      {comment.createdAt.split("T")[0]}
                    </li>
                  </div>

                  <li>{comment.content}</li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CommentsComponent;
