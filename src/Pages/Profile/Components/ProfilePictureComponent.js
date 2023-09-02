import React, { useState } from "react";
import axios from "axios";
import ProfilePic from "../../L_Assets/profile.png";

const ProfilePictureComponent = ({ user }) => {
  const [file, setFile] = useState(null);
  const [changePfpModal, setChangePfpModal] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file to upload");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", file);
      await axios.post("http://localhost:3001/uploadProfilePic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile picture uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Error uploading profile picture");
    }
  };
  return (
    <div>
      <div className="flex items-center gap-5">
        <h1 className="font-thin xs:text-lg md:text-3xl lg:text-5xl">
          YOUR PROFILE
        </h1>
        {user?.profileImgURL ? (
          <img
            src={`http://localhost:3001/User_Mult_Images/${user?.profileImgURL}`}
            className="border rounded-full lg:w-[8rem] lg:h-[8rem] xs:w-[4rem] xs:h-[4rem] object-cover"
            alt="Profile"
          ></img>
        ) : (
          <img
            src={ProfilePic}
            className="border rounded-full lg:w-[8rem] lg:h-[8rem] xs:w-[4rem] xs:h-[4rem] object-cover"
            alt="Default Profile"
          ></img>
        )}

        {changePfpModal ? (
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="sm:flex  items-center gap-3"
          >
            <input
              type="file"
              name="image"
              className="text-base w-[12rem]"
              onChange={handleFileChange}
            ></input>
            <div className="flex items-center gap-1">
              <input
                type="submit"
                className="text-base hover:cursor-pointer"
              ></input>
              <button
                onClick={() => setChangePfpModal(false)}
                className="text-3xl "
              >
                &times;
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setChangePfpModal(true)}
            className="text-base border border-slate-300 px-2 hover:text-white hover:bg-slate-800 transition-colors duration-300"
          >
            CHANGE YOUR PROFILE PICTURE
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureComponent;
