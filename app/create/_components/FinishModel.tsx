"use client";
import React, { useEffect } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Data } from "@/lib/Data.interface";

function FinishModel({ formState }: any) {
  useEffect(() => {
    if (formState?.title && typeof window !== "undefined") {
      localStorage.setItem("formState", JSON.stringify(formState));
    }
  }, [formState]);
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoFinalModelTitle}
        description={Lookup.LogoFinalModelDesc}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-5 border"
          >
            <Image
              src={pricing.icon}
              alt={pricing.title}
              width={60}
              height={60}
            />
            <h2 className="font-medium text-2xl">{pricing.title}</h2>

            <div>
              {pricing.features.map((feature, index) => (
                <div>
                  <h2 key={index} className="text-lg mt-3">
                    {feature}
                  </h2>
                </div>
              ))}
              <Button className="mt-5">{pricing.button}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinishModel;
