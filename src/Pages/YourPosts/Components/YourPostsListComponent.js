import React from "react";
import { Link } from "react-router-dom";

const YourPostsListComponent = ({ yourPosts }) => {
  return (
    <div className="text-3xl flex justify-center">
      <ol>
        {yourPosts.map((post) => {
          return (
            <Link
              className="flex flex-col items-center gap-2 my-5 border xs:w-[20rem] sm:w-[30rem] md:w-[40rem] rounded-md justify-center"
              to={`/recipe/${post._id}`}
            >
              {post.title.toUpperCase()}
              <h1
                className={`${
                  post?.difficulty === "EASY" ? (
                    "bg-green-300 h-full text-base"
                  ) : post?.difficulty === "INTERMEDIATE" ? (
                    "bg-yellow-400  h-full text-base"
                  ) : post?.difficulty === "HARD" ? (
                    "bg-red-400  h-full text-base"
                  ) : post?.difficulty === "MICHELIN" ? (
                    "bg-slate-800 text-red-600  h-full text-base"
                  ) : (
                    <></>
                  )
                } w-[10rem] rounded font-bold`}
              >
                {post?.difficulty}
              </h1>
              <img
                src={`https://recipediy.onrender.com/Post_Mult_Images/${post.postImageURL}`}
                className="w-[30rem] h-[30rem] rounded-md object-cover"
                alt="post"
              ></img>
              <div className="flex gap-5 justify-start text-base">
                <h1>{post.likes.length} likes</h1>
                <h1>{post.comments.length} comments</h1>
              </div>
            </Link>
          );
        })}
      </ol>
    </div>
  );
};

export default YourPostsListComponent;
