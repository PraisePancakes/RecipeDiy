import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfilePic from "../L_Assets/profile.png";
import { AiFillCaretDown } from "react-icons/ai";
import Loading from "../../GL_Components/Loading";

const FindRecipes = ({ user }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeFilterButton, setActiveFilterButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/getAllPosts", {
          withCredentials: true,
        });
        setAllPosts(response.data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPosts();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleFilterClick = (filterType) => {
    if (activeFilter === filterType) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterType);
    }
  };

  const handleFilterButtonClick = (filterType) => {
    setActiveFilterButton(filterType);
    setActiveFilter(null);
  };

  const sortByMostLikes = () => {
    const sortedPosts = [...filteredPosts].sort(
      (a, b) => b.likes.length - a.likes.length
    );
    return sortedPosts;
  };

  const sortByLeastLikes = () => {
    const sortedPosts = [...filteredPosts].sort(
      (a, b) => a.likes.length - b.likes.length
    );

    return sortedPosts;
  };

  const sortByEasy = () => {
    const sortedPosts = allPosts.filter((post) => post.difficulty === "EASY");

    return sortedPosts;
  };

  const sortByIntermediate = () => {
    const sortedPosts = allPosts.filter(
      (post) => post.difficulty === "INTERMEDIATE"
    );

    return sortedPosts;
  };

  const sortByHard = () => {
    const sortedPosts = allPosts.filter((post) => post.difficulty === "HARD");

    return sortedPosts;
  };

  const sortByMichelin = () => {
    const sortedPosts = allPosts.filter(
      (post) => post.difficulty === "MICHELIN"
    );

    return sortedPosts;
  };

  const sortByMostComments = () => {
    const sortedPosts = [...filteredPosts].sort(
      (a, b) => b.comments.length - a.comments.length
    );
    return sortedPosts;
  };

  const sortByLeastComments = () => {
    const sortedPosts = [...filteredPosts].sort(
      (a, b) => a.comments.length - b.comments.length
    );
    return sortedPosts;
  };

  const sortByMostRecent = () => {
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });

    return sortedPosts;
  };

  const sortByOldest = () => {
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA - dateB;
    });

    return sortedPosts;
  };

  const handleClearFilter = () => {
    setActiveFilter(null);
    setActiveFilterButton(null);
    setSearch("");
  };

  const sortedAndFilteredPosts =
    activeFilterButton === "most likes"
      ? sortByMostLikes()
      : activeFilterButton === "least likes"
      ? sortByLeastLikes()
      : activeFilterButton === "easy"
      ? sortByEasy()
      : activeFilterButton === "intermediate"
      ? sortByIntermediate()
      : activeFilterButton === "hard"
      ? sortByHard()
      : activeFilterButton === "michelin"
      ? sortByMichelin()
      : activeFilterButton === "most comments"
      ? sortByMostComments()
      : activeFilterButton === "least comments"
      ? sortByLeastComments()
      : activeFilterButton === "most recent"
      ? sortByMostRecent()
      : activeFilterButton === "oldest"
      ? sortByOldest()
      : filteredPosts;

  return (
    <div className="mx-5 my-10 ">
      {" "}
      <section className="flex justify-center">
        <input
          className="w-[45rem] bg-inherit  px-2 h-[2rem] focus:outline-none font-thin bg-slate-100 border rounded-full"
          placeholder="Search for any recipe..."
          onChange={handleChange}
        ></input>
      </section>
      <section className="flex justify-center xs:gap-3 sm:gap-5 md:gap-10 my-2">
        <div className="relative">
          {" "}
          <button
            onClick={() => handleFilterClick("difficulty")}
            className={`flex items-center ${
              activeFilter === "difficulty" ? "text-blue-500" : ""
            }`}
          >
            DIFFICULTY <AiFillCaretDown />
          </button>
          {activeFilter === "difficulty" ? (
            <div className="absolute border rounded-md w-[10rem] h-[10.2rem] bg-slate-100 flex flex-col opacity-100 transition-opacity duration-500 ">
              <button
                onClick={() => handleFilterButtonClick("easy")}
                className="border-b  p-2 bg-green-300 hover:bg-green-400"
              >
                EASY
              </button>
              <button
                onClick={() => handleFilterButtonClick("intermediate")}
                className=" p-2 bg-yellow-300 hover:bg-yellow-400"
              >
                INTERMEDIATE
              </button>
              <button
                onClick={() => handleFilterButtonClick("hard")}
                className=" p-2 bg-red-400 hover:bg-red-500 "
              >
                HARD
              </button>
              <button
                onClick={() => handleFilterButtonClick("michelin")}
                className=" p-2 bg-slate-800 text-red-600 hover:bg-slate-900 hover:text-red-600"
              >
                MICHELIN
              </button>
            </div>
          ) : (
            <div className="opacity-0 pointer-events-none"></div>
          )}
        </div>
        <div className="relative">
          {" "}
          <button
            onClick={() => handleFilterClick("likes")}
            className={`flex items-center ${
              activeFilter === "likes" ? "text-blue-500" : ""
            }`}
          >
            LIKES <AiFillCaretDown />
          </button>
          {activeFilter === "likes" ? (
            <div className="absolute border rounded-md w-[10rem] h-[5.2rem] bg-slate-100 flex flex-col opacity-100 transition-opacity duration-500 ">
              <button
                onClick={() => handleFilterButtonClick("most likes")}
                className="border-b p-2 hover:bg-slate-200"
              >
                MOST LIKES
              </button>
              <button
                onClick={() => handleFilterButtonClick("least likes")}
                className=" p-2 hover:bg-slate-200"
              >
                LEAST LIKES
              </button>
            </div>
          ) : (
            <div className="opacity-0 pointer-events-none"></div>
          )}
        </div>

        <div className="relative">
          {" "}
          <button
            onClick={() => handleFilterClick("comments")}
            className={`flex items-center ${
              activeFilter === "comments" ? "text-blue-500" : ""
            }`}
          >
            COMMENTS <AiFillCaretDown />
          </button>
          {activeFilter === "comments" ? (
            <div className="absolute border rounded-md w-[10rem] h-[5.2rem] bg-slate-100 flex flex-col opacity-100 transition-opacity duration-500 ">
              <button
                onClick={() => handleFilterButtonClick("most comments")}
                className="border-b  p-2 hover:bg-slate-200"
              >
                MOST COMMENTS
              </button>
              <button
                onClick={() => handleFilterButtonClick("least comments")}
                className=" p-2 hover:bg-slate-200"
              >
                LEAST COMMENTS
              </button>
            </div>
          ) : (
            <div className="opacity-0 pointer-events-none"></div>
          )}
        </div>
        <div className="relative">
          {" "}
          <button
            onClick={() => handleFilterClick("date")}
            className={`flex items-center ${
              activeFilter === "date" ? "text-blue-500" : ""
            }`}
          >
            DATE <AiFillCaretDown />
          </button>
          {activeFilter === "date" ? (
            <div className="absolute border rounded-md w-[10rem] h-[5.2rem] bg-slate-100 flex flex-col opacity-100 transition-opacity duration-500 ">
              <button
                onClick={() => handleFilterButtonClick("most recent")}
                className="border-b  p-2 hover:bg-slate-200"
              >
                MOST RECENT POSTS
              </button>
              <button
                onClick={() => handleFilterButtonClick("oldest")}
                className=" p-2 hover:bg-slate-200"
              >
                OLDEST POSTS
              </button>
            </div>
          ) : (
            <div className="opacity-0 pointer-events-none"></div>
          )}
        </div>
        <button onClick={() => handleClearFilter()}>CLEAR FILTERS</button>
      </section>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="flex justify-center">
              {sortedAndFilteredPosts?.length !== 0 ? (
                <div className="grid xl:grid-cols-2  grid-col-1 gap-10 mt-5">
                  {sortedAndFilteredPosts.map((post) => (
                    <div
                      className="border rounded-md p-5 xs:w-[20rem] sm:w-[25rem] md:w-[30rem]"
                      key={post._id}
                    >
                      <Link
                        className="flex text-3xl gap-2 items-center justify-center border-b p-2"
                        to={
                          post.author?._id === user?._id
                            ? `/profile`
                            : `/user/${post.author._id}`
                        }
                      >
                        {post.author?.profileImgURL ? (
                          <img
                            src={`http://localhost:3001/User_Mult_Images/${post.author?.profileImgURL}`}
                            className="border rounded-full w-[6rem] h-[6rem] object-cover"
                            alt="Profile"
                          />
                        ) : (
                          <img
                            src={ProfilePic}
                            className="border rounded-full w-[6rem] h-[6rem] object-cover"
                            alt="Default Profile"
                          />
                        )}
                        <h1 className="text-lg">@{post.author?.username}</h1>
                        <h1 className="text-base text-slate-500">
                          {post.createdAt.split("T")[0]}
                        </h1>
                      </Link>

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
                          {post?.difficulty}{" "}
                        </h1>
                        <img
                          src={`http://localhost:3001/Post_Mult_Images/${post?.postImageURL}`}
                          className="w-[20rem] h-[20rem] rounded-md object-cover"
                          alt="Post"
                        />
                      </Link>
                      <div className="flex gap-5 justify-center ml-5">
                        <h1>{post?.likes.length} likes</h1>
                        <h1>{post?.comments.length} comments</h1>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h1 className="text-slate-400 mt-5">
                  NO POSTS FOUND WITH THAT SEARCH
                </h1>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default FindRecipes;
