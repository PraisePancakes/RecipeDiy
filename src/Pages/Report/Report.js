import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillCaretDown } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";

const Report = () => {
  const { postId } = useParams();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportType, setReportType] = useState(null);
  const DEFAULT_FORM = {
    reason: "",
    reportType: "",
  };
  const [form, setForm] = useState(DEFAULT_FORM);

  const handleReportTypeClick = (e) => {
    setIsModalOpen(false);
    setReportType(e);
    setForm((prevForm) => ({
      ...prevForm,
      reportType: e,
    }));
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/report/${postId}`,
        form
      );
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError("");
        setSuccessMessage("");
      }, 4000);
    }
  };

  return (
    <div className="mx-10 my-10 w-full flex flex-col gap-1 items-center justify-center">
      <h1 className="text-5xl font-thin my-5">REPORT THIS POST</h1>
      <h1
        className={`${
          error
            ? "border w-[40rem]  my-2 mx-5 border-red-700 opacity-100 rounded-md p-2 text-white text-xl bg-red-500"
            : "w-0 opacity-0"
        } transition-width duration-500`}
      >
        {error}
      </h1>

      <div
        className={`${
          successMessage
            ? "border w-[40rem]  my-2 mx-5 border-green-700 opacity-100 rounded-md p-2 text-white text-xl bg-green-500"
            : "w-0 opacity-0"
        } transition-width duration-500`}
      >
        {successMessage}
      </div>
      <div>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="relative w-[10.98rem] flex items-center justify-end gap-2 border p-2 bg-slate-800 text-white "
        >
          {reportType !== null ? (
            <h1 className="w-full">{reportType}</h1>
          ) : (
            <h1 className="w-full">SELECT A REPORT TYPE</h1>
          )}
          <AiFillCaretDown />
        </button>
        {isModalOpen && (
          <div className="absolute top-[16rem] h-[10rem] border bg-slate-500 text-white">
            <button
              name="NUDITY"
              onClick={(e) => handleReportTypeClick(e.target.name)}
              className="w-full border-b h-[2.5rem] hover:bg-slate-400 "
            >
              NUDITY
            </button>
            <button
              name="HARRASSMENT"
              onClick={(e) => handleReportTypeClick(e.target.name)}
              className="w-full border-b h-[2.5rem] hover:bg-slate-400 "
            >
              HARRASSMENT
            </button>
            <button
              name="ADVERTISEMENT"
              onClick={(e) => handleReportTypeClick(e.target.name)}
              className="w-full border-b h-[2.5rem] hover:bg-slate-400 "
            >
              ADVERTISEMENT
            </button>
            <button
              name="SCAM/PHISHING"
              onClick={(e) => handleReportTypeClick(e.target.name)}
              className="w-full border-b h-[2.5rem] hover:bg-slate-400 "
            >
              SCAM/PHISHING
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <textarea
          placeholder="state a reason for reporting this post..."
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className=" w-[40rem] h-[20rem] p-3 focus:outline-none bg-slate-50 border"
        ></textarea>
        <button
          onClick={() => handleSubmit()}
          className="border flex justify-center items-center gap-5 w-[40rem] p-2 text-2xl font-thin bg-black text-white hover:bg-slate-800"
        >
          REPORT <MdReportProblem color="yellow" />
        </button>
      </div>
    </div>
  );
};

export default Report;
