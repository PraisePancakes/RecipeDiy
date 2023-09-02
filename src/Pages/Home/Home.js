import React from "react";
import { HeroComponent } from "./Components/HeroComponent";

import GroupHomeHeader from "./Assets/Group1.png";

const Home = ({ user }) => {
  const username = user?.username.toUpperCase();
  return (
    <div className="mx-1 my-10 ">
      <>
        <span className="text-xl sm:text-2xl font-thin">
          WELCOME {username}, TO YOUR KITCHEN!
        </span>
        <div className="flex flex-col justify-center items-center mt-10">
          <img
            src={GroupHomeHeader}
            alt="Every Home Needs A Chef"
            className="w-[40rem] block "
          ></img>

          <HeroComponent user={user} />
        </div>
      </>
    </div>
  );
};

export default Home;
