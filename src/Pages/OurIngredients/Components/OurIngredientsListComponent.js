import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import axios from "axios";
import Loading from "../../../GL_Components/Loading";

const OurIngredientsListComponent = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [cuisineType, setCuisineType] = useState("American");
  const [mealType, setMealType] = useState("Breakfast");
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=any&app_id=8949d0c5&app_key=3ce54ccb70ba9de8af5d947cca9ecd0b&mealType=${mealType}&cuisineType=${cuisineType}&field=shareAs&field=label&field=image`
        );
        setRecipes(response.data.hits);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [cuisineType, mealType]);
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleFilterClick = (filterType) => {
    if (activeFilter === filterType) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterType);
    }
  };

  const handleCuisineClick = (type) => {
    setCuisineType(type);
    setActiveFilter(null);
  };

  const handleMealClick = (type) => {
    setMealType(type);
    setActiveFilter(null);
  };

  const handleClearFilter = () => {
    setActiveFilter(null);
    setCuisineType("American");
    setMealType("Breakfast");
    setSearch("");
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {errorMessage && (
            <div
              className={`${
                errorMessage
                  ? "border w-[40rem] border-red-700 opacity-100 rounded-md p-2 text-white text-lg bg-red-500"
                  : "w-0 opacity-0"
              } transition-opacity duration-500`}
            >
              {errorMessage}
            </div>
          )}
          <section className="flex justify-center my-5">
            <input
              className="xs:w-[20rem] sm:w-[30rem] md:w-[40rem] bg-inherit  px-2 h-[2rem] focus:outline-none font-thin bg-slate-100 border rounded-full"
              placeholder="Search for any of our Edamam recipes..."
              onChange={handleChange}
            ></input>
          </section>
          <section className="flex justify-center xs:gap-3 sm:gap-5 md:gap-10 my-2">
            <div className="relative">
              {" "}
              <button
                onClick={() => handleFilterClick("cuisineType")}
                className={`flex items-center ${
                  activeFilter === "cuisineType" ? "text-blue-500" : ""
                }`}
              >
                {cuisineType.toUpperCase()} <AiFillCaretDown />
              </button>
              {activeFilter === "cuisineType" ? (
                <div className="absolute border rounded-md w-[10rem] h-[25.3rem] bg-slate-100 flex flex-col opacity-100 transition-opacity duration-500 z-[1]">
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className="border-b  p-2 hover:bg-slate-200"
                  >
                    AMERICAN
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className="border-b  p-2 hover:bg-slate-200"
                  >
                    ASIAN
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    BRITISH
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    CHINESE
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    ITALIAN
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    MIDDLE EASTERN
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    MEXICAN
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    NORDIC
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    KOSHER
                  </button>
                  <button
                    onClick={(e) => handleCuisineClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    JAPANESE
                  </button>
                </div>
              ) : (
                <div className="opacity-0 pointer-events-none"></div>
              )}
            </div>
            <div className="relative">
              {" "}
              <button
                onClick={() => handleFilterClick("mealType")}
                className={`flex items-center ${
                  activeFilter === "mealType" ? "text-blue-500" : ""
                }`}
              >
                {mealType.toUpperCase()} <AiFillCaretDown />
              </button>
              {activeFilter === "mealType" ? (
                <div className="absolute border rounded-md w-[10rem] h-[10.2rem] bg-slate-100 flex flex-col opacity-100 transition-opacity duration-500 z-[1] ">
                  <button
                    onClick={(e) => handleMealClick(e.target.innerText)}
                    className="border-b  p-2 hover:bg-slate-200"
                  >
                    LUNCH
                  </button>
                  <button
                    onClick={(e) => handleMealClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    DINNER
                  </button>
                  <button
                    onClick={(e) => handleMealClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    SNACK
                  </button>
                  <button
                    onClick={(e) => handleMealClick(e.target.innerText)}
                    className=" p-2 hover:bg-slate-200"
                  >
                    TEA TIME
                  </button>
                </div>
              ) : (
                <div className="opacity-0 pointer-events-none"></div>
              )}
            </div>
            <button onClick={() => handleClearFilter()}>CLEAR FILTERS</button>
          </section>
          {filteredRecipes.length !== 0 ? (
            <ul className="grid lg:grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {filteredRecipes.map((recipe) => {
                return (
                  <Link
                    to={`${recipe.recipe.shareAs}`}
                    target="_blank"
                    className="flex flex-col justify-center  items-center max-w-full"
                    key={recipe.recipe.label}
                  >
                    <li id={recipe.recipe.label} className="text-lg font-thin">
                      {recipe.recipe.label}
                    </li>
                    <img
                      className=" hover:contrast-75 transition-all duration-300 "
                      src={recipe.recipe.image}
                      alt={`${recipe.recipe.label}`}
                    ></img>
                  </Link>
                );
              })}
            </ul>
          ) : (
            <h1 className="text-slate-400 ">NO RECIPES MATCH THAT SEARCH</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default OurIngredientsListComponent;
