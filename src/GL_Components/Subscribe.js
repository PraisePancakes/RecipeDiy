import React from "react";

const Subscribe = () => {
  return (
    <div>
      {" "}
      <section className="border-y-2 bg-slate-600 text-white">
        <div className="flex flex-col mx-10 my-[5rem] ">
          <h1 className="font-thin text-xl">LETS STAY CONNECTED</h1>
          <h2>Subscribe for weekly updates and new recipes</h2>
          <form>
            <input
              className="p-2 focus:outline-none font-thin mt-2 text-black w-[20rem] "
              placeholder="Enter an email"
            ></input>
            <button type="submit" className="bg-slate-900 p-2">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
