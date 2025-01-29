import React from "react";
import Header from "./_components/Header";

function Provider({ children }: { children: any }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
