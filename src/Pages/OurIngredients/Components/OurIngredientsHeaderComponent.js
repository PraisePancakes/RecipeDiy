import React from "react";
import { Link } from "react-router-dom";

const OurIngredientsHeaderComponent = ({ user }) => {
  return (
    <div>
      {" "}
      <h1 className="xs:text-2xl sm:text-4xl md:text-5xl font-thin mb-[3rem]">
        HEY <span className=" font-bold">{user?.username.toUpperCase()}</span>{" "}
        CHECK OUT OUR{" "}
        <Link
          to="https://www.edamam.com/results/recipes/?search=salad"
          target="_blank"
        >
          <span className=" text-slate-500 underline decoration-dashed">
            EDAMAM
          </span>
        </Link>{" "}
        RECIPES
      </h1>
    </div>
  );
};

export default OurIngredientsHeaderComponent;
