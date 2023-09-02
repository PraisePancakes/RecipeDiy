import React, { useState, useEffect } from "react";
import { BsFire } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfilePic from "../../L_Assets/profile.png";
import { CiMenuKebab, CiBookmarkRemove } from "react-icons/ci";
import { BsBookmarkPlus, BsFlag } from "react-icons/bs";
import Loading from "../../../GL_Components/Loading";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const PostsComponent = ({ user }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const hotPosts = allPosts.filter((post) => post.likes.length > 0);
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = hotPosts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const getAllPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://recipediy.onrender.com/getAllPosts",
          {
            withCredentials: true,
          }
        );
        setAllPosts(response.data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPosts();
  }, []);

  const savePost = async (postId) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `https://recipediy.onrender.com/savePost/${postId}`
      );
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError("");
        setSuccessMessage("");
        setIsLoading(false);
        window.location.reload();
      }, 2000);

      setIsModalOpen(false);
    }
  };
  return (
    <div>
      {" "}
      {error ? (
        <div
          className={`${
            error
              ? "fixed top-[5.1rem] left-0 border w-full border-red-700 opacity-100 rounded-md p-2 text-white text-lg bg-red-500 z-[1]"
              : "w-0 opacity-0"
          } transition-opacity duration-500`}
        >
          {error}
        </div>
      ) : (
        <div
          className={`${
            successMessage
              ? "fixed top-[5.1rem] left-0 border w-full border-green-700 opacity-100 rounded-md p-2 text-white text-lg bg-green-500 z-[1]"
              : "w-0 opacity-0"
          } transition-width duration-500`}
        >
          {successMessage}
        </div>
      )}
      <section>
        <div className="flex items-center justify-center gap-2 text-3xl mt-8 font-thin">
          HOT RECIPES <BsFire color="#e0322f" />
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {error && <div>{error}</div>}
            {currentPosts?.length !== 0 ? (
              <ol className="mt-5 flex flex-col gap-5">
                {currentPosts.map((post) => {
                  return (
                    <div
                      className="flex flex-col gap-1 border rounded-md p-5"
                      key={post._id}
                    >
                      <Link
                        className="flex text-3xl gap-2 items-center border-b p-2"
                        to={
                          post.author?._id === user?._id
                            ? `/profile`
                            : `/user/${post.author._id}`
                        }
                      >
                        {post.author?.profileImgURL ? (
                          <img
                            src={`http://localhost:3001/User_Mult_Images/${post.author?.profileImgURL}`}
                            className="border rounded-full w-[3rem] h-[3rem] object-cover"
                            alt="Profile"
                          ></img>
                        ) : (
                          <img
                            src={ProfilePic}
                            className="border rounded-full w-[8rem] h-[8rem] object-cover"
                            alt="Default Profile"
                          ></img>
                        )}
                        <h1 className="text-lg">@{post.author?.username}</h1>
                        <h1 className="text-base text-slate-500">
                          {post.createdAt.split("T")[0]}
                        </h1>
                      </Link>
                      <div className="relative w-full flex gap-5 justify-end items-center  my-2">
                        <button onClick={() => setIsModalOpen(!isModalOpen)}>
                          {" "}
                          <CiMenuKebab />
                        </button>
                        {isModalOpen ? (
                          <div className=" absolute top-5 h-[6rem] w-[10rem] rounded-md mt-1 mr-1  border border-slate-600 bg-slate-100">
                            {" "}
                            <ul className="flex flex-col items-center justify-start  py-2">
                              {" "}
                              {user.savedPosts.includes(post._id) ? (
                                <button
                                  onClick={() => savePost(post._id)}
                                  className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                                >
                                  {" "}
                                  <CiBookmarkRemove size={20} />
                                  <h1>Unsave post</h1>
                                </button>
                              ) : (
                                <button
                                  onClick={() => savePost(post._id)}
                                  className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                                >
                                  {" "}
                                  <BsBookmarkPlus />
                                  <h1>Save post</h1>
                                </button>
                              )}
                              <Link
                                to={`/report/${post._id}`}
                                className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                              >
                                {" "}
                                <BsFlag />
                                <h1>Report</h1>
                              </Link>
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <Link
                        className="flex flex-col gap-2 items-center justify-center"
                        to={`/recipe/${post?._id}`}
                      >
                        <h1 className="text-2xl">
                          {post?.title.toUpperCase()}
                        </h1>

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
                          {post?.difficulty}
                        </h1>
                        <img
                          src={`http://localhost:3001/Post_Mult_Images/${post?.postImageURL}`}
                          className="w-[30rem] h-[30rem] rounded-md object-cover"
                          alt="post"
                        ></img>
                      </Link>
                      <div className="flex gap-5 justify-start ml-5">
                        <h1>{post?.likes.length} likes</h1>
                        <h1>{post?.comments.length} comments</h1>
                      </div>
                    </div>
                  );
                })}

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
                      indexOfLastPost >= hotPosts.length
                        ? "text-slate-400"
                        : "text-slate-800 "
                    }`}
                    disabled={indexOfLastPost >= hotPosts.length}
                  >
                    <AiFillCaretRight size={25} />
                  </button>
                </div>
              </ol>
            ) : (
              <h1 className="text-slate-400 mt-5">NOTHING HOT CURRENTLY</h1>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default PostsComponent;
