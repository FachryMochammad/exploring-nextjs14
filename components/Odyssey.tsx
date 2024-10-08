import React from "react";
import ProductCard from "./ui/ProductCard/ProductCard";
import TestimonyCardInactive from "./ui/TestimonyCard/TestimonyCardInactive";
import TestimonyCardActive from "./ui/TestimonyCard/TestimonyCardActive";
import Banner from "./ui/Banner";
import { H2, Title } from "./atom/Typography";

const Odyssey = () => {
  return (
    <div className="bg-white pt-[76px]">
      <div className="my-16">
        <Banner />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <Title className="text-[#3E4650] font-medium">Popular Course</Title>
          <h1 className="text-lg text-[#CC3333] font-medium cursor-pointer">
            See All
          </h1>
        </div>
        <div className="mt-5 flex justify-between">
          {[0, 1, 2].map((_, i) => {
            return <ProductCard key={i} />;
          })}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mt-11">
          <Title className="text-[#3E4650] font-medium">Learning</Title>
          <h1 className="text-lg text-[#CC3333] font-medium cursor-pointer">
            See All
          </h1>
        </div>
        <div className="mt-5 flex justify-between">
          {[0, 1, 2].map((_, i) => {
            return <ProductCard key={i} />;
          })}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mt-11">
          <Title className="text-[#3E4650] font-medium">Testing Tools</Title>
          <h1 className="text-lg text-[#CC3333] font-medium cursor-pointer">
            See All
          </h1>
        </div>
        <div className="mt-5 flex justify-between">
          {[0, 1, 2].map((_, i) => {
            return <ProductCard key={i} />;
          })}
        </div>
      </div>

      <div className="mt-28">
        <H2 className="font-bold text-[#2E3838] text-center">
          What they <span className="text-[#CC3333]">said</span> about our
          programs
        </H2>
        <div className="flex justify-center">
          <div className="w-8 h-2 bg-[#CC3333] mt-6 mb-16"></div>
        </div>
        <div className="flex justify-between">
          <TestimonyCardActive />
          <TestimonyCardInactive />
          <TestimonyCardInactive />
        </div>
      </div>
    </div>
  );
};

export default Odyssey;
