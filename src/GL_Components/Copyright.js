import React from "react";
import { AiOutlineTrademarkCircle } from "react-icons/ai";

const Copyright = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="flex mx-10 my-3 gap-1">
          <h1 className="font-thin">
            This website uses the edamam api, every edamam recipe is not
            rightfully ours and is not claimed by{" "}
          </h1>
          <div className="flex items-center font-thin">
            <AiOutlineTrademarkCircle size={10} /> Recipes Diy
          </div>
        </div>
      </section>
    </div>
  );
};

export default Copyright;
