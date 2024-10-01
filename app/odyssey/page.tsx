import React from "react";
import Odyssey from "@/components/Odyssey";

const OdysseyPage = () => {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[1152px] w-full">
        <Odyssey />
      </div>
    </main>
  );
};

export default OdysseyPage;
