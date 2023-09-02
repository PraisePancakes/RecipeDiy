import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const IngredientsComponent = ({ form, setForm }) => {
  const [addIngredient, setAddIngredient] = useState(false);

  const handleAddIngredient = () => {
    const inputElement = document.getElementById("ingredient-input");
    const ingredient = inputElement.value.trim();
    if (ingredient) {
      setForm((prevForm) => ({
        ...prevForm,
        ingredients: [...prevForm.ingredients, ingredient],
      }));
      inputElement.value = "";
    }
  };
  const handleRemoveIngredient = (index) => {
    form.ingredients.splice(index, 1);
    setForm((prevForm) => ({
      ...prevForm,
      ingredients: [...prevForm.ingredients],
    }));
  };
  console.log(form);
  return (
    <div>
      {" "}
      <div className="flex flex-col items-start px-4 py-3 rounded-md focus:outline-none font-thin border-2 xs:w-[20rem] sm:w-[35rem] h-[15rem]">
        {form.ingredients.length === 0 ? (
          <span className="text-slate-600">No ingredients currently</span>
        ) : (
          <ul>
            {form.ingredients.map((ingredient, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <li className=" list-decimal">{ingredient}</li>
                  <button onClick={() => handleRemoveIngredient(index)}>
                    <IoIosRemoveCircle color="#990b22" />
                  </button>
                </div>
              );
            })}
          </ul>
        )}

        <div>
          <button
            type="button"
            onClick={() => {
              setAddIngredient(true);
            }}
            className={`${
              addIngredient
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } transition-opacity duration-300`}
          >
            + add ingredient
          </button>
          <div
            className={`${
              addIngredient ? "w-full flex gap-3" : "w-0"
            } transition-width duration-300`}
          >
            <input
              id="ingredient-input"
              className={`${
                addIngredient
                  ? "w-[20rem]  px-2 rounded-md focus:outline-none font-thin border-2"
                  : "w-0"
              } `}
            ></input>
            <div className={`${addIngredient ? "flex gap-2" : "hidden"} `}>
              {" "}
              <button type="button" onClick={() => handleAddIngredient()}>
                <IoIosAddCircleOutline color="green" />
              </button>
              <button type="button" onClick={() => setAddIngredient(false)}>
                <MdCancel color="#990b22" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsComponent;
