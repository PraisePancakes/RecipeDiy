import { useState, useEffect } from "react";
import axios from "axios";
import { useRefreshAccessToken } from "./useRefreshAccessToken"; // Import the custom hook

axios.defaults.withCredentials = true;

export function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user")
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://recipediy.onrender.com/getUser"
        );
        console.log("Start " + Date.now());
        setUser(response.data?.user);

        console.log(response);
      } catch (error) {
        alert("Unauthorized Token, must login again");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
      }
    };
    if (isAuthenticated) {
      getUser();
    }
  }, [isAuthenticated]);

  useRefreshAccessToken(user, setIsAuthenticated, isAuthenticated);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    window.location.reload();
  };

  return { isAuthenticated, user, handleLogout };
}
