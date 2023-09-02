import React from "react";

import UserComponent from "./Components/UserComponent";

const User = ({ user }) => {
  return (
    <div className="USER_CMPT_CONT mx-10 my-10 h-[50rem]">
      {" "}
      <UserComponent user={user} />
    </div>
  );
};

export default User;
