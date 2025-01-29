import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";

function LogoPalette({ onHandleInputChange }: any) {
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <input
        type="text"
        placeholder="Enter Your Logo Title.."
        className="p-4 rounded-md mt-5 w-full outline-primary"
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoPalette;
