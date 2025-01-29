"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import HeadingDescription from "./_components/HeadingDescription";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPalette from "./_components/LogoPalette";
import LogoDisign from "./_components/LogoDisign";
import LogoIdea from "./_components/LogoIdea";

function createPage() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState();

  const onHandleChange = (field: string, value: any) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formState);
  };

  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v: any) => onHandleChange("title", v)}
        />
      ) : step == 2 ? (
        <LogoDesc onHandleInputChange={(v: any) => onHandleChange("desc", v)} />
      ) : step == 3 ? (
        <LogoPalette
          onHandleInputChange={(v: any) => onHandleChange("palette", v)}
        />
      ) : step == 4 ? (
        <LogoDisign
          onHandleInputChange={(v: any) => onHandleChange("disign", v)}
        />
      ) : step == 5 ? (
        <LogoIdea onHandleInputChange={(v: any) => onHandleChange("idea", v)} />
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
