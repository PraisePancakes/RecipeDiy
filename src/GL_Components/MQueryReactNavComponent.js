import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";

function MQueryReactNavComponent({ handleLogout, navLinks, isMenuOpen }) {
  return (
    <section>
      {isMenuOpen ? (
        <nav className="flex gap-10">
          <ul className="flex flex-col gap-3 ml-5 items-start mt-5 text-white">
            {navLinks.map((nav) => {
              return (
                <Link to={nav.path} key={nav.id}>
                  <li>{nav.title}</li>
                </Link>
              );
            })}
          </ul>
          <section className="hidden gap-5 sm:flex sm:flex-col justify-end items-center text-white">
            <Link to="/home">
              <AiOutlineHome size={30} />
            </Link>
            <Link
              to="/profile"
              className="flex flex-col items-center border p-[10px] rounded-full hover:bg-black hover:text-white transition-colors duration-500 "
            >
              <SiCodechef alt="Chef outline" size={30} />
              View Profile
            </Link>{" "}
            <button onClick={() => handleLogout()}>LOG OUT</button>
          </section>
        </nav>
      ) : (
        <></>
      )}
    </section>
  );
}

export default MQueryReactNavComponent;
