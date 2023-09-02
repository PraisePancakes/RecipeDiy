import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiTwotoneEdit } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

const AccountManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(new Array(8).fill(false));

  const handleModalSelection = (id) => {
    const newModalState = [...isModalOpen];
    newModalState[id] = !newModalState[id];
    setIsModalOpen(newModalState);
  };
  console.log(isModalOpen);
  return (
    <div className="lg:mx-[20rem] md:mx-[10rem] sm:mx-[1rem] my-10 ">
      <h1 className="text-5xl font-thin">ACCOUNT MANAGEMENT</h1>
      <div className=" flex flex-col h-[40rem] overflow-y-auto mt-5">
        <button
          id="0"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          1. How Can I Delete My Account?
          {isModalOpen[0] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className=" z-[-1]" />
          )}
        </button>
        {isModalOpen[0] === true ? (
          <div className=" opacity-100 transition-height duration-300 border px-10 py-5 text-lg text-start indent-5">
            You can delete your account by going to your profile and deleting
            your account from there! To keep the deletion secure to the user, we
            ask that everyone who wants to delete their account to verify their
            username and password first. That way if someone was to access your
            computer while you are away from your keyboard they cannot be able
            to delete your account.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="1"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          2. How Can I Change My Password?
          {isModalOpen[1] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className=" z-[-1]" />
          )}
        </button>

        {isModalOpen[1] === true ? (
          <div className=" opacity-100 transition-height duration-300 border  px-10  py-5 text-lg text-start indent-5">
            {" "}
            Unfortunately, in the current state of our production website, we
            have yet to add the feature to change a forgotten or unwanted
            password, our team is working hard to add this feature in as quick
            as possible so that we can make this website as enjoyable of an
            experience as possible for you. We are incredibily sorry for the
            inconvenience.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="2"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          3. Can I Change My Profile Picture?
          {isModalOpen[2] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>
        {isModalOpen[2] === true ? (
          <div className=" opacity-100 transition-height duration-300 border  px-10  py-5 text-lg text-start indent-5">
            Yes, you can change your profile picture via your profile page, just
            click the{" "}
            <span className="font-thin border px-2 text-sm">
              CHANGE YOUR PROFILE PICTURE
            </span>{" "}
            button next to your profile picture and add a png or jpeg file then
            submit to view your changes.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="3"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          4. Can I Change My Username?
          {isModalOpen[3] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>
        {isModalOpen[3] === true ? (
          <div className=" opacity-100 transition-height duration-300 border  px-10  py-5 text-lg text-start indent-5">
            Yes, you can also change your username via your profile page, just
            click the
            <span className="inline-flex items-center mx-1">
              <AiTwotoneEdit />
            </span>
            button next to your current name and enter a new one, after that is
            complete you can hit the
            <span className="inline-flex items-center text-base border rounded-full p-[.15rem] border-green-800 mx-1">
              <FcCheckmark />
            </span>
            button to apply your edited name.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
      </div>
    </div>
  );
};

export default AccountManagement;
