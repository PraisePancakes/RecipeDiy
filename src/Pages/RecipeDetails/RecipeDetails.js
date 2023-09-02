import React from "react";
import RecipeDetailsComponent from "./Components/RecipeDetailsComponent";

const RecipeDetails = ({ user }) => {
  return (
    <div className="  my-10">
      {" "}
      <RecipeDetailsComponent user={user} />
    </div>
  );
};

export default RecipeDetails;
