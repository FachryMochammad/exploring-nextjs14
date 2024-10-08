import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { BodySmall, H1, TitleSmall } from "../atom/Typography";

const Banner = () => {
  return (
    <div className="w-[1152px] h-[432px] flex">
      <div className="bg-gradient-to-l from-[#B80F1A] to-[#5F070F] p-14 max-w-[50%] rounded-s-lg">
        <H1 className="font-bold">Set Your Own Development Journey</H1>
        <TitleSmall className="mt-3">
          Self-development is a never-ending process to become a better you.
          Machine-powered and human-managed, Odyssey partners with you to enable
          leadership development journey anytime, anywhere.
        </TitleSmall>
        <div className="border max-w-max py-2 px-4 rounded-lg border-white mt-3 flex items-center gap-2 hover:cursor-pointer">
          <BodySmall className="font-bold">Start Learning</BodySmall>
          <FaChevronDown size={"14px"} />
        </div>
      </div>
      <div className="text-black max-w-[50%]">
        <img
          src="https://filesdev.klob.id/open/c0bae082-80f8-41c4-8512-2a091559307d/33.jpeg"
          className="rounded-e-lg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Banner;
