import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import ProductCard from "./ui/ProductCard";
import TestimonyCardInactive from "./ui/TestimonyCard/TestimonyCardInactive";
import TestimonyCardActive from "./ui/TestimonyCard/TestimonyCardActive";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts Into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Fachry Mochammad, a Next.js Developer based in
            Indonesia
          </p>

          <a href="#">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <div className="bg-white p-5 mt-5">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl text-[#3E4650] font-medium">
                  Popular Course
                </h1>
                <h1 className="text-lg text-[#A32929] font-medium cursor-pointer">
                  See All
                </h1>
              </div>
              <div className="mt-5 flex gap-3">
                {[0, 1, 2].map((_, i) => {
                  return <ProductCard key={i} />;
                })}
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-4xl font-bold text-[#2E3838] mb-5 text-center">
                What they <span className="text-[#CC3333]">said</span> about our
                programs
              </h2>
              <div className="flex gap-3">
                <TestimonyCardActive />
                <TestimonyCardInactive />
                <TestimonyCardInactive />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
