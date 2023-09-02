import React from "react";
import { PiSmileySadFill } from "react-icons/pi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      {" "}
      <div className="text-5xl flex flex-col items-center justify-center mx-10 h-[50rem]">
        <h1 className=" text-red-900">404 PAGE NOT FOUND</h1>
        <div className="flex justify-center items-center">
          <PiSmileySadFill color="orange" size={100} />

          <Link
            to="/home"
            className=" underline flex hover:text-black transition-colors duration-300 justify-center items-center gap-2 text-base px-2 rounded-md text-slate-600"
          >
            return back to home
            <BsArrowReturnLeft />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
