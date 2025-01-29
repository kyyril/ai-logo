import React from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex items-center mt-32 gap-5 flex-col">
      <h2 className="text-primary text-center text-5xl font-bold">
        {Lookup.HeroHeading}
      </h2>
      <h2 className="text-center text-3xl font-bold">{Lookup.HeroSub}</h2>
      <p className="text-gray-600 text-lg text-center">{Lookup.HeroDesc}</p>

      <div className="flex w-full max-w-2xl items-center justify-center gap-6 mt-10">
        <input
          type="text"
          placeholder="Enter Your Logo Name.."
          className="p-3 rounded-sm w-full shadow-md outline-primary"
        />
        <Button className="w-full p-6">Get Started</Button>
      </div>
    </div>
  );
}

export default Hero;
