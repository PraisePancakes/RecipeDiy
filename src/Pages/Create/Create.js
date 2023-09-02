import React from "react";
import FormComponent from "./Components/FormComponent";

const Create = () => {
  return (
    <div className="mx-10 my-10 sm:mx-0 flex flex-col items-center gap-5">
      <h1 className="font-thin text-5xl">SHARE A RECIPE</h1>
      <FormComponent />
    </div>
  );
};

export default Create;
