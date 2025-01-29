"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

function LogoPalette({ onHandleInputChange }: any) {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-5">
        {Colors.map((palette, index) => (
          <div
            key={index}
            className={`flex ${
              selectedOption == palette.name &&
              "border-2 border-primary rounded-sm p-1 "
            }`}
          >
            {palette?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                onClick={() => {
                  setSelectedOption(palette.name);
                  onHandleInputChange(palette.name);
                }}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoPalette;
