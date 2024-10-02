import React from "react";
import Odyssey from "@/components/Odyssey";
import Footer from "@/components/ui/Footer/Footer";

const OdysseyPage = () => {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-[1152px] w-full">
        <Odyssey />
      </div>
      <Footer />
    </main>
  );
};

export default OdysseyPage;
