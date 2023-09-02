import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../GL_Components/Loading";

import YourPostsListComponent from "./YourPostsListComponent";

const YourPostsComponent = () => {
  const [yourPosts, setYourPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getYourPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3001/getYourPosts", {
          withCredentials: true,
        });
        setYourPosts(response.data.posts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getYourPosts();
  }, [setIsLoading]);
  return (
    <div>
      {" "}
      <section className="mx-10 flex flex-col">
        <h1 className="xs:text-2xl sm:text-4xl md:text-5xl font-thin">
          BROWSE YOUR POSTS
        </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <YourPostsListComponent yourPosts={yourPosts} />
        )}
      </section>
    </div>
  );
};

export default YourPostsComponent;
