import React from "react";
import SlideComponent from "./SlideComponent";
import PostsComponent from "./PostsComponent";

export const HeroComponent = ({ user }) => {
  return (
    <div className="flex flex-col items-center  ">
      <SlideComponent />
      <PostsComponent user={user} />
    </div>
  );
};
