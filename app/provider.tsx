import React from "react";
import Header from "./_components/Header";

function Provider({ children }: { children: any }) {
  return (
    <div>
      <Header />
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4">{children}</div>
    </div>
  );
}

export default Provider;
