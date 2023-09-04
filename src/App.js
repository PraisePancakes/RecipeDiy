import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "./GL_Components/NavbarComponent";
import { Footer } from "./GL_Components/Footer";
import Subscribe from "./GL_Components/Subscribe";
import Copyright from "./GL_Components/Copyright";

import {
  Create,
  Home,
  Login,
  OurIngredients,
  Profile,
  RecipeDetails,
  Register,
  User,
  Users,
  YourPosts,
  DeleteAccount,
  FindRecipes,
  Report,
  NotFoundPage,
  Saved,
  Privacy,
  AccountManagement,
} from "./Pages/Index";

axios.defaults.withCredentials = true;
function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("loggedIn")
  );

  const location = useLocation();

  const resetScroll = () => {
    window.scrollTo(0, 0);
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("loggedIn");
  };
  useEffect(() => {
    if (isAuthenticated) {
      const getUser = async () => {
        try {
          const response = await axios.get(
            "https://recipediy.onrender.com/getUser"
          );
          setUser(response.data.user);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
        }
      };

      getUser();
    }
  }, [location.pathname, isAuthenticated]);

  useEffect(() => {
    resetScroll();
  }, [location.pathname]);

  return (
    <div className="App">
      <div className="max-w-full">
        <NavbarComponent isAuthenticated={isAuthenticated} logout={logout} />
        <div>
          <Routes className="GLOBAL_CMPT_CONT overflow-hidden mx-10 max-w-full mt-[3rem]">
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
            ></Route>
            <Route
              path="/home"
              element={
                isAuthenticated ? <Home user={user} /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/our"
              element={
                isAuthenticated ? (
                  <OurIngredients user={user} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="/users"
              element={
                isAuthenticated ? <Users user={user} /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                isAuthenticated ? <Profile user={user} /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/create"
              element={isAuthenticated ? <Create /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/recipe/:postId"
              element={
                isAuthenticated ? (
                  <RecipeDetails //click on recipe goes to page
                    user={user}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="/register"
              element={isAuthenticated ? <Navigate to="/home" /> : <Register />}
            ></Route>
            <Route
              path="/user/:otherUserId"
              element={
                isAuthenticated ? <User user={user} /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/yours"
              element={
                isAuthenticated ? (
                  <YourPosts user={user} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="/delete/account"
              element={
                isAuthenticated ? <DeleteAccount /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/find"
              element={
                isAuthenticated ? (
                  <FindRecipes user={user} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="/report/:postId"
              element={
                isAuthenticated ? <Report user={user} /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/saved"
              element={
                isAuthenticated ? <Saved user={user} /> : <Navigate to="/" />
              }
            ></Route>
            <Route path="/link/privacy" element={<Privacy />}></Route>
            <Route
              path="/link/accountManagement"
              element={<AccountManagement />}
            ></Route>
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
        <Subscribe />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
