import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const DifficultyComponent = ({ form, setForm }) => {
  const [openDifficultyMenu, setOpenDifficultyMenu] = useState(false);

  const handleDifficulty = (difficulty) => {
    setForm((prevForm) => ({
      ...prevForm,
      difficulty: difficulty,
    }));
    setOpenDifficultyMenu(false);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center xs:w-[5rem] sm:w-[7rem] sm:text-base xs:text-xs w-[10rem] h-full border bg-slate-200 text-slate-600">
        <button
          type="button"
          onClick={() => setOpenDifficultyMenu(!openDifficultyMenu)}
          className={`${
            form.difficulty === "EASY" ? (
              "bg-green-300 w-full h-full"
            ) : form.difficulty === "INTERMEDIATE" ? (
              "bg-yellow-300 w-full h-full"
            ) : form.difficulty === "HARD" ? (
              "bg-red-400 w-full h-full"
            ) : form.difficulty === "MICHELIN" ? (
              "bg-slate-800 text-red-600 w-full h-full"
            ) : (
              <></>
            )
          } flex items-center justify-center gap-2 `}
        >
          {form.difficulty ? <h1>{form.difficulty}</h1> : "SELECT DIFFICULTY"}
          <AiFillCaretDown />
        </button>

        <div
          className={` ${
            openDifficultyMenu
              ? "absolute h-full border opacity-100 bg-white w-full top-[43px] pointer-events-auto"
              : "w-0 h-0 opacity-0"
          } transition-opacity duration-500`}
        >
          {openDifficultyMenu ? (
            <div className="flex flex-col bg-white">
              <button
                onClick={(e) => {
                  handleDifficulty(e.target.innerText);
                }}
                className="bg-green-300 p-2"
              >
                EASY
              </button>
              <button
                onClick={(e) => {
                  handleDifficulty(e.target.innerText);
                }}
                className="bg-yellow-300 p-2"
              >
                INTERMEDIATE
              </button>
              <button
                onClick={(e) => {
                  handleDifficulty(e.target.innerText);
                }}
                className="bg-red-400 p-2"
              >
                HARD
              </button>
              <button
                onClick={(e) => {
                  handleDifficulty(e.target.innerText);
                }}
                className="bg-slate-800 text-red-600 p-2"
              >
                MICHELIN
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default DifficultyComponent;
