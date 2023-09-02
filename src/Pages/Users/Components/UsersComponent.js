import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../GL_Components/Loading";
import UsersProfilePictureComponent from "./UsersProfilePictureComponent";
import UsersInfoComponent from "./UsersInfoComponent";

const UsersComponent = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3001/getAllUsers");
        setUsers(response.data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAllUsers();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="flex  justify-center ">
        <input
          className="xs:w-[20rem] sm:w-[30rem] md:w-[40rem] bg-inherit  px-2 h-[2rem] focus:outline-none font-thin bg-slate-100 border rounded-full"
          placeholder="Search for users..."
          onChange={handleChange}
        ></input>
      </section>{" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-[50rem]">
          {error && <div>{error}</div>}
          <h1>
            ~{" "}
            {users?.length === 1 ? (
              <span className="text-sm text-slate-700">
                {users?.length} active user{" "}
              </span>
            ) : (
              <span className="text-sm text-slate-700">
                {users?.length} active users
              </span>
            )}
          </h1>
          {filteredUsers.length !== 0 ? (
            <ul>
              {filteredUsers.map((otherUser) => {
                return (
                  <div className="users-ulist mt-5 flex justify-start items-center gap-3">
                    {" "}
                    <UsersProfilePictureComponent otherUser={otherUser} />
                    <UsersInfoComponent otherUser={otherUser} user={user} />
                  </div>
                );
              })}
            </ul>
          ) : (
            <h1 className="text-slate-400 text-lg">
              NO USERS FOUND WITH THAT NAME
            </h1>
          )}{" "}
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
