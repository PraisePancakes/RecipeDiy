import React from "react";
import OurIngredientsListComponent from "./OurIngredientsListComponent";
import OurIngredientsHeaderComponent from "./OurIngredientsHeaderComponent";

const OurIngredientsComponent = ({ user }) => {
  //map foreach -> recipes.recipe.label

  return (
    <div>
      {" "}
      <div>
        <OurIngredientsHeaderComponent user={user} />
        <OurIngredientsListComponent />
      </div>
    </div>
  );
};

export default OurIngredientsComponent;
