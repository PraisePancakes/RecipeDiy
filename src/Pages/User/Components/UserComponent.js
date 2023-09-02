import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserFriendsComponent from "./UserFriendsComponent";
import UserInfoComponent from "./UserInfoComponent";

const UserComponent = ({ user }) => {
  const { otherUserId } = useParams();
  const [friends, setFriends] = useState();
  const [otherUser, setOtherUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getOtherUser = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:3001/getOtherUser/${otherUserId}` // Use URL parameter
        );
        setOtherUser(response.data.otherUser);
        setFriends(response.data.friends);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getOtherUser();
  }, [otherUserId, setIsLoading]);
  return (
    <div>
      {" "}
      <UserInfoComponent otherUser={otherUser} />
      <UserFriendsComponent
        user={user}
        friends={friends}
        isLoading={isLoading}
      />
    </div>
  );
};

export default UserComponent;
