import { useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export function useRefreshAccessToken(
  user,
  setIsAuthenticated,
  isAuthenticated
) {
  const _AT_APPROX_EXPIRY = 840000;

  useEffect(() => {
    console.log("Start" + Date.now());
    if (isAuthenticated) {
      const refreshAccessToken = async () => {
        try {
          await axios.post("https://recipediy.onrender.com/refresh", user._id);
        } catch (error) {
          setIsAuthenticated(false);
          localStorage.removeItem("user");
          console.log("ended" + Date.now());
        }
      };

      const intervalId = setInterval(() => {
        refreshAccessToken();
      }, _AT_APPROX_EXPIRY);

      return () => clearInterval(intervalId);
    } else {
      setIsAuthenticated(false);
    }
  }, [user, setIsAuthenticated, isAuthenticated]);
}
