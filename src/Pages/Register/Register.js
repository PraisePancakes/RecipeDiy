import React from "react";
import RegisterComponent from "./RegisterComponent";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="REGISTER_CMPT_CONT flex flex-col items-center my-10 mx-10">
      <section className="register-page-skeleton border-[2px] pb-[5rem] p-5 border-slate-500 rounded-md">
        <h1 className="register-header text-4xl font-thin mb-5">
          REGISTER YOUR ACCOUNT
        </h1>
        <RegisterComponent />{" "}
        <h2 className="register-!!acc-txt mt-5">
          Already have an account?{" "}
          <Link to="/">
            <span className="register-!!acc-link text-slate-500 underline underline-offset-2">
              Click here
            </span>
          </Link>
        </h2>
      </section>
    </div>
  );
};

export default Register;
