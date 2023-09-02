import React from "react";
import UsersComponent from "./Components/UsersComponent";

const Users = ({ user }) => {
  return (
    <div className="USERS_CMPT_CONT flex flex-col justify-center items-center gap-5 my-10">
      <h1 className="page-header text-5xl font-thin">FELLOW CHEFS</h1>{" "}
      <UsersComponent user={user} />
    </div>
  );
};

export default Users;
