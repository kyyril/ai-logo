import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";

function LogoDesc({ onHandleInputChange }: any) {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
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

export default LogoDesc;
