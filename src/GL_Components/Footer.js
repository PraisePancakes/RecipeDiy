import React from "react";
import { Link } from "react-router-dom";
import edamam from "../GL_Assets/Edamam-01.webp";

export const Footer = () => {
  return (
    <div className="border-t-2 bg-slate-800">
      <section className="px-5 py-8 md:py-12 lg:py-16 xl:py-20 justify-center  flex flex-col md:flex-row gap-2 mx-10 max-w-full">
        <div className="flex flex-col md:items-start w-full md:w-1/4 text-white">
          <h1 className="text-3xl font-bold mb-4">SITE LINKS</h1>
          <Link to="/home" className="underline underline-offset-2">
            Home
          </Link>
          <Link to="/find" className="underline underline-offset-2">
            Find Recipes
          </Link>
          <Link to="/create" className="underline underline-offset-2">
            Create
          </Link>
          <Link to="/our" className="underline underline-offset-2">
            Edamam Recipes
          </Link>
          <Link to="/saved" className="underline underline-offset-2">
            Saved Posts
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/4 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-4">CONTACT</h1>
          <h2>email : recipediymail@yahoo.com </h2>
          <h2>P# : (904) 314-1478 </h2>
        </div>
        <div className="flex flex-col w-full md:w-1/4 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-4">FAQS</h1>
          <Link to="/link/privacy">privacy policy</Link>
          <Link to="/link/accountManagement">account management</Link>
        </div>
        <div className="flex flex-col w-full md:w-1/4 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-4">HQ LOCATION</h1>
          <h2>Jacksonville, FL</h2>
          <h2>Duval County, 32246</h2>
        </div>
      </section>
      <div className="px-5 py-8 md:py-12 lg:py-16 xl:py-20 flex flex-col md:flex-row items-center justify-start gap-5 mx-auto max-w-6xl">
        <div className="text-white mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl">POWERED BY</h1>
        </div>
        <img
          src={edamam}
          alt="Edamam Logo"
          className="w-24 h-auto rounded-md"
        />
      </div>
    </div>
  );
};
