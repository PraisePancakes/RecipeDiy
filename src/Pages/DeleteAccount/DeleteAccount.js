import React, { useState } from "react";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const DeleteAccount = () => {
  const DEFAULT_FORM = { username: "", password: "" };
  const [form, setForm] = useState(DEFAULT_FORM);
  const [pwVis, setPwVis] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "https://recipediy.onrender.com/deleteAccount",
        { data: form }
      );
      console.log(response);
      setForm(DEFAULT_FORM);
      window.location.reload();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  console.log(form);
  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-10 my-10">
      {" "}
      <h1 className="font-thin text-5xl">VERIFY YOUR ACCOUNT</h1>
      {error && (
        <h1 className="border w-[20rem] border-red-400 text-center p-2 mb-2 text-xl text-red-900">
          {error}
        </h1>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[20rem] ">
        <input
          className="p-4 rounded-md focus:outline-none font-thin border"
          placeholder="USERNAME"
          name="username"
          value={form.username}
          minLength={3}
          maxLength={15}
          onChange={handleChange}
          required
        ></input>
        <input
          className="p-4 rounded-md focus:outline-none font-thin border"
          type={`${!pwVis ? "password" : ""}`}
          name="password"
          placeholder="PASSWORD"
          value={form.password}
          minLength={3}
          maxLength={15}
          onChange={handleChange}
          required
        ></input>
        <button type="button" onClick={() => setPwVis(!pwVis)}>
          {!pwVis ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <button
          type="submit"
          className="rounded-md bg-black text-white p-2 text-2xl font-thin "
        >
          DELETE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default DeleteAccount;
