import React, { useState, useEffect, useCallback } from "react";
import CreateRecipes from "../Assets/Spices-Pepper.jpg";
import CookBook from "../Assets/CookBook.jpg";
import Connected from "../Assets/connected.png";

const SlideComponent = () => {
  const slides = [
    {
      id: 1,
      img: CreateRecipes,
      title: "Create and view your recipes",
      ptag: " You can create and save your own recipes in a digital cookbook, making cooking convenient and enjoyable for both beginners and experienced chefs. Our user-friendly platform lets you experiment with flavors, adjust ingredient quantities, and add your personal touch to each dish.",
    },
    {
      id: 2,
      img: CookBook,
      title: "View recipes from other chefs",
      ptag: "Connect with fellow chefs, explore culinary inspiration, and join a passionate cooking community. Our platform goes beyond recipe management; you can discover recipes from other talented cooks and explore diverse cookbooks, each with unique flavors and expertise.",
    },
    {
      id: 3,
      img: Connected,
      title: " Engage with other chefs!",
      ptag: "Connect, learn, and share with a global community of food enthusiasts. Exchange ideas, discover new recipes, and build connections with cooks who share your love for great food. ",
    },
  ];
  const [slide, setSlide] = useState(0);
  const SLIDE_NEXT_TIME = 8000;
  const incrementSlide = useCallback(() => {
    setSlide(slide + 1);
    if (slide === 2) {
      setSlide(0);
    }
  }, [slide]);

  const decrementSlide = () => {
    setSlide(slide - 1);
    if (slide === 0) {
      setSlide(2);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      incrementSlide();
    }, SLIDE_NEXT_TIME);
    return () => clearInterval(intervalId);
  }, [incrementSlide]);

  return (
    <div className="flex flex-col items-center gap-5">
      <section className="flex justify-center  items-center gap-5 mx-5 mt-10 w-full">
        <button onClick={() => decrementSlide()}>{"<"}</button>
        <div className="max-w-[75rem] border h-[25rem] flex">
          <img
            className={`object-cover h-full w-1/2 `}
            src={slides[slide].img}
            alt="Cutting board"
          ></img>
          <div className="flex flex-col items-center h-full w-1/2">
            <h1 className="text-2xl font-thin underline mx-2 decoration-slate-400">
              {slides[slide].title}
            </h1>

            <p className="text-start  indent-2 mx-5 mt-2 sm:text-base text-sm font-semibold text-slate-700">
              {slides[slide].ptag}
            </p>
          </div>
        </div>
        <button onClick={() => incrementSlide()}>{">"}</button>
      </section>
      <div className="flex gap-5">
        <button
          className={`${
            slide === 0
              ? "border w-3 h-3 border-black rounded-full bg-black"
              : "border w-3 h-3 border-black rounded-full hover:bg-black transition-colors duration-300"
          } `}
          onClick={() => setSlide(0)}
        ></button>
        <button
          className={`${
            slide === 1
              ? "border w-3 h-3 border-black rounded-full bg-black"
              : "border w-3 h-3 border-black rounded-full hover:bg-black transition-colors duration-300"
          } `}
          onClick={() => setSlide(1)}
        ></button>
        <button
          className={`${
            slide === 2
              ? "border w-3 h-3 border-black rounded-full bg-black"
              : "border w-3 h-3 border-black rounded-full hover:bg-black transition-colors duration-300"
          } `}
          onClick={() => setSlide(2)}
        ></button>
      </div>
    </div>
  );
};

export default SlideComponent;
