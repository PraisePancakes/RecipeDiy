import React from "react";

const IngredientsComponent = ({ post }) => {
  return (
    <div className="my-5">
      {" "}
      <h2 className="underline decoration-slate-400 text-xl">INGREDIENTS</h2>
      <ol className="flex flex-col gap-5 items-center">
        {post?.ingredients.map((ingredient) => {
          return (
            <li key={post._id} className="list-disc text-slate-600 text-lg">
              {ingredient?.toUpperCase() ?? (
                <h1 className="text-red-800 border-1 border-red p-2 text-lg">
                  NULL INGREDIENT
                </h1>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default IngredientsComponent;
