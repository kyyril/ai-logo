"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDisigns from "@/app/_data/LogoDesigns";

function LogoDesign({ onHandleInputChange, formState }: any) {
  const [selectedOption, setSelectedOption] = useState(
    formState?.design?.title
  );
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-5">
        {LogoDisigns.map((design, index) => (
          <div
            key={index}
            className={`p-1 hover:shadow-lg ${
              selectedOption == design.title &&
              "border-2 border-primary rounded-sm p-2"
            }`}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <img
              src={design.image}
              alt={design.title}
              width={200}
              height={100}
              className="w-full rounded-sm object-cover"
            />
            <p className="text-center text-sm font-semibold">{design.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesign;
