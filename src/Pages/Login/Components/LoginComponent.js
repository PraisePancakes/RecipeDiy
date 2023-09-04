import React, { useState } from "react";
import axios from "axios";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginComponent = () => {
  const DEFAULT_FORM = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(DEFAULT_FORM);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://recipediy.onrender.com/login",
        form
      );
      console.log(response);
      localStorage.setItem("loggedIn", true);

      setForm(DEFAULT_FORM);
      setError("");

      window.location.reload();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const [pwVis, setPwVis] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
  return (
    <div>
      {error && (
        <h1 className="border border-red-400 text-center p-2 mb-2 text-xl text-red-900">
          {error}
        </h1>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[20rem]">
        <input
          className="p-4 rounded-md focus:outline-none font-thin"
          placeholder="USERNAME"
          name="username"
          value={form.username}
          minLength={3}
          maxLength={15}
          onChange={handleChange}
          required
        ></input>
        <input
          className="p-4 rounded-md focus:outline-none font-thin"
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
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
