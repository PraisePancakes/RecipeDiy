import React from "react";

import OurIngredientsComponent from "./Components/OurIngredientsComponent";

const OurIngredients = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center my-10 mx-10 ">
      <OurIngredientsComponent user={user} />
    </div>
  );
};

export default OurIngredients;
