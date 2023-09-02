import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function RegisterComponent() {
  const DEFAULT_FORM = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [form, setForm] = useState(DEFAULT_FORM);
  const [error, setError] = useState("");
  const [pwVis, setPwVis] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://recipediy.onrender.com/register", form);
      setForm(DEFAULT_FORM);
      navigate("/");
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
          value={form.username}
          name="username"
          required
          minLength={3}
          maxLength={15}
          onChange={handleChange}
        ></input>

        <input
          className="p-4 rounded-md focus:outline-none font-thin"
          type={`${!pwVis ? "password" : ""}`}
          placeholder="PASSWORD"
          value={form.password}
          name="password"
          required
          minLength={3}
          maxLength={15}
          onChange={handleChange}
        ></input>
        <button type="button" onClick={() => setPwVis(!pwVis)}>
          {!pwVis ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <button
          type="submit"
          className="rounded-md bg-black text-white p-2 text-2xl font-thin "
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
