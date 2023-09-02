import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const StepsComponent = ({ form, setForm }) => {
  const [addStep, setAddStep] = useState(false);
  const handleAddStep = () => {
    const inputElement = document.getElementById("step-input");
    const step = inputElement.value.trim();
    if (step) {
      setForm((prevForm) => ({
        ...prevForm,
        steps: [...prevForm.steps, step],
      }));
      inputElement.value = "";
    }
  };

  const handleRemoveStep = (index) => {
    form.steps.splice(index, 1);
    setForm((prevForm) => ({
      ...prevForm,
      steps: [...prevForm.steps],
    }));
  };

  return (
    <div className="flex flex-col items-start px-4 py-3 rounded-md focus:outline-none font-thin border-2 xs:w-[20rem] sm:w-[35rem] h-[15rem]">
      {form.steps.length === 0 ? (
        <span className="text-slate-600">No steps currently</span>
      ) : (
        <ul>
          {form.steps.map((step, index) => {
            return (
              <div key={index} className="flex gap-2">
                <li className=" list-decimal">{step}</li>
                <button type="button" onClick={() => handleRemoveStep(index)}>
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
            setAddStep(true);
          }}
          className={`${
            addStep
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          } transition-opacity duration-300`}
        >
          + add step
        </button>
        <div
          className={`${
            addStep ? "w-full flex gap-3" : "w-0"
          } transition-width duration-300`}
        >
          <input
            id="step-input"
            className={`${
              addStep
                ? "w-[20rem] px-2 rounded-md focus:outline-none font-thin border-2"
                : "w-0"
            } transition-width duration-300`}
          ></input>
          <div className={`${addStep ? "flex gap-2" : "hidden"} `}>
            {" "}
            <button
              className="w-"
              type="button"
              onClick={() => handleAddStep()}
            >
              <IoIosAddCircleOutline color="green" />
            </button>
            <button type="button" onClick={() => setAddStep(false)}>
              <MdCancel color="#990b22" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
