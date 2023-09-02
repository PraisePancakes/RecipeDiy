import React, { useState } from "react";
import DifficultyComponent from "./DifficultyComponent";
import IngredientsComponent from "./IngredientsComponent";
import StepsComponent from "./StepsComponent";
import axios from "axios";
import Loading from "../../../GL_Components/Loading";

const FormComponent = () => {
  const DEFAULT_FORM = {
    title: "",
    ingredients: [],
    steps: [],
    difficulty: "",
  };
  const [form, setForm] = useState(DEFAULT_FORM);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // File is selected, you can set it in the form state
      setFile(file);
      console.log(file.name);
    } else {
      // No file selected, you might want to handle this case
      console.log("No file selected");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.difficulty) {
      setErrorMessage("Please select a difficulty level.");
      return;
    }

    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const response = await axios.post(
        "https://recipediy.onrender.com/addPost",
        formData
      );
      setForm(DEFAULT_FORM);
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

      setErrorMessage("");
      setFile(null);
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
      setSuccessMessage("");
    }
  };
  console.log(form);
  return (
    <div>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {errorMessage ? (
            <div
              className={`${
                errorMessage
                  ? "border md:w-[40rem] w-[25rem] border-red-700 opacity-100 rounded-md p-2 text-white text-lg bg-red-500"
                  : "w-0 opacity-0"
              } transition-opacity duration-500`}
            >
              {errorMessage}
            </div>
          ) : (
            <div
              className={`${
                successMessage
                  ? "border md:w-[40rem] w-[25rem] border-green-700 opacity-100 rounded-md p-2 text-white text-lg bg-green-500"
                  : "w-0 opacity-0"
              } transition-width duration-500`}
            >
              {successMessage}
            </div>
          )}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 mt-2 "
      >
        <div className="flex justify-center">
          {" "}
          <input
            className="p-2 focus:outline-none font-thin border-2 border-r-0 xs:w-[15rem] sm:w-[30rem]"
            placeholder="ENTER A TITLE FOR YOUR RECIPE"
            name="title"
            value={form.title}
            minLength={3}
            maxLength={50}
            onChange={handleChange}
          ></input>
          <DifficultyComponent form={form} setForm={setForm} />
        </div>
        <input
          type="file"
          name="postImageURL"
          className="px-4 py-3 rounded-md focus:outline-none font-thin border-2 xs:w-[20rem] sm:w-[35rem] h-[15rem]"
          onChange={handleImageChange}
        ></input>
        <IngredientsComponent form={form} setForm={setForm} />
        <StepsComponent form={form} setForm={setForm} />
        <button
          type="submit"
          className="font-bold text-white border rounded-md bg-slate-800 hover:bg-green-800 transition-colors duration-500 p-2 text-xl"
        >
          PUBLISH YOUR RECIPE
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
