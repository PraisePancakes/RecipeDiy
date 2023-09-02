import React from "react";

const StepsComponent = ({ post }) => {
  return (
    <div className="">
      {" "}
      <h2 className="underline decoration-slate-400 text-xl">STEPS</h2>
      <ol className="flex flex-col gap-5 items-center">
        {post?.steps.map((step) => {
          return (
            <li key={post._id} className=" list-decimal text-slate-600 text-lg">
              {step?.toUpperCase() ?? (
                <h1 className="text-red-800 border-1 border-red p-2 text-lg">
                  NULL STEP
                </h1>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StepsComponent;
