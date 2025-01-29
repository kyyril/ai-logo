import React from "react";

function HeadingDescription({ title, description }: any) {
  return (
    <div>
      <h2 className="font-bold text-3xl text-primary ">{title}</h2>
      <h2 className="mt-2 text-lg text-gray-600 ">{description}</h2>
    </div>
  );
}

export default HeadingDescription;
