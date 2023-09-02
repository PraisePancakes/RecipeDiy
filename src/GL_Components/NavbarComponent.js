import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../GL_Assets/Logo.png";
import { CgLogIn } from "react-icons/cg";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { useLocation } from "react-router-dom";
import MQueryReactNavComponent from "./MQueryReactNavComponent";

const NavbarComponent = ({ isAuthenticated, handleLogout }) => {
  const navLinks = [
    {
      title: "Your Recipes",
      id: 1,
      path: "/yours",
    },

    {
      title: "Find Recipes",
      id: 2,
      path: "/find",
    },
    {
      title: "Create +",
      id: 3,
      path: "/create",
    },
    {
      title: "Edamam Recipes",
      id: 4,
      path: "/our",
    },
    {
      title: "Saved Posts",
      id: 5,
      path: "/saved",
    },
  ];
  const [, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos !== 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <section
      className={`w-full h-[80px] sticky z-[10] ${
        visible ? "top-0 text-black" : " top-0 bg-slate-900 text-white"
      }  flex justify-between items-center gap-2  font-thin transition-colors duration-100`}
    >
      <Link to="/" className="flex items-center ml-10 font-semibold">
        <h1 className="text-2xl">RECIPES DIY</h1>
        <img src={Logo} alt="Chef logo" className="w-[5rem]"></img>
      </Link>
      {location.pathname === "/" || location.pathname === "/register" ? (
        <></>
      ) : (
        <>
          <nav className="flex items-center h-full gap-10 mx-10">
            {isAuthenticated && (
              <ul className="xl:flex hidden w-5rem text-base ">
                {navLinks.map((nav) => {
                  return (
                    <Link key={nav.id} to={nav.path}>
                      <li className="hover:bg-black flex items-center hover:text-white h-[80px] px-5 transition-colors duration-300">
                        {nav.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </nav>
          {!isAuthenticated ? (
            <section className="hidden gap-2 xl:flex mr-10 items-center">
              <Link
                to="/"
                className="flex gap-2 items-center px-2 border-[1px] rounded-sm hover:text-white hover:bg-black transition-colors duration-300 "
              >
                <CgLogIn />
                LOG IN
              </Link>
              <Link
                to="/register"
                className="hover:font-semibold transition-all duration-100 "
              >
                REGISTER
              </Link>
            </section>
          ) : (
            <section className="hidden gap-8 xl:flex mr-10">
              <Link
                to="/profile"
                className="flex flex-col items-center border p-[10px] rounded-full hover:bg-black hover:text-white transition-colors duration-500 "
              >
                <SiCodechef alt="Chef outline" size={30} />
                View Profile
              </Link>{" "}
              <button onClick={() => handleLogout()}>LOG OUT</button>
            </section>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden block mr-5 z-[1] ${
              isMenuOpen ? "text-white" : ""
            }`}
          >
            {isMenuOpen ? (
              <AiOutlineMenuUnfold size={40} />
            ) : (
              <AiOutlineMenuFold size={40} />
            )}
          </button>

          <section
            className={`${
              isMenuOpen
                ? "bg-slate-900 xl:hidden transition-all duration-300 w-full h-[200px] fixed top-0"
                : "h-0 fixed top-0 duration-300 transition-all"
            }  `}
          >
            {isAuthenticated ? (
              <MQueryReactNavComponent
                handleLogout={handleLogout}
                navLinks={navLinks}
                isMenuOpen={isMenuOpen}
              />
            ) : (
              <div>
                {isMenuOpen ? (
                  <div className="flex text-white justify-start mx-10 my-5 gap-2 ">
                    <Link
                      to="/"
                      className="flex gap-2 items-center px-2 border-[1px] rounded-sm hover:text-white hover:bg-black transition-colors duration-300 "
                    >
                      <CgLogIn />
                      LOG IN
                    </Link>
                    <Link
                      to="/register"
                      className="hover:font-semibold transition-all duration-100 "
                    >
                      REGISTER
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </section>
        </>
      )}
    </section>
  );
};

export default NavbarComponent;
