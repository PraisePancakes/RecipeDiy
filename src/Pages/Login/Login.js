import React from "react";
import LoginComponent from "./Components/LoginComponent";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="LOGIN-CMPT-CONT flex flex-col items-center my-10 mx-10">
      {" "}
      <section className="login-page-skeleton border-[2px] pb-[5rem] p-5 border-slate-500 rounded-md">
        <h1 className="login-header text-4xl font-thin mb-5">
          LOG IN TO YOUR ACCOUNT
        </h1>
        <LoginComponent />{" "}
        <h2 className="login-!acc-txt mt-5">
          Dont have an account?{" "}
          <Link to="/register">
            <span className="login-!acc-link text-slate-500 underline underline-offset-2">
              Click here
            </span>
          </Link>
        </h2>
      </section>
    </div>
  );
};

export default Login;
