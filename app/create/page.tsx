"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import HeadingDescription from "./_components/HeadingDescription";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPalette from "./_components/LogoPalette";
import LogoIdea from "./_components/LogoIdea";
import { Data } from "@/lib/Data.interface";
import LogoDesign from "./_components/LogoDesign";
import FinishModel from "./_components/FinishModel";

function createPage() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<Data>();

  const onHandleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formState);
  };

  return (
    <div className="mt-24 p-10 border rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v: any) => onHandleChange("title", v)}
          formState={formState}
        />
      ) : step == 2 ? (
        <LogoDesc
          onHandleInputChange={(v: any) => onHandleChange("desc", v)}
          formState={formState}
        />
      ) : step == 3 ? (
        <LogoPalette
          onHandleInputChange={(v: any) => onHandleChange("palette", v)}
          formState={formState}
        />
      ) : step == 4 ? (
        <LogoDesign
          onHandleInputChange={(v: any) => onHandleChange("design", v)}
          formState={formState}
        />
      ) : step == 5 ? (
        <LogoIdea
          onHandleInputChange={(v: any) => onHandleChange("idea", v)}
          formState={formState}
        />
      ) : step == 6 ? (
        <FinishModel
          onHandleInputChange={(v: any) => onHandleChange("finish", v)}
          formState={formState}
        />
      ) : null}

      <div className="flex justify-between items-center mt-2">
        {step != 1 && (
          <Button variant={"outline"} onClick={() => setStep(step - 1)}>
            <ArrowLeftIcon />
            Previos
          </Button>
        )}

        <Button onClick={() => setStep(step + 1)}>
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
export default createPage;
