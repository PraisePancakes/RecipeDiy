import React from "react";
import { Link } from "react-router-dom";

const ProfileDeleteAccount = () => {
  return (
    <div>
      {" "}
      <Link to="/delete/account" className="text-base text-red-900 border px-2">
        DELETE YOUR ACCOUNT
      </Link>
    </div>
  );
};

export default ProfileDeleteAccount;
