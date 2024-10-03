import React from "react";
import LogoOdyssey from "./LogoOdyssey";
import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] w-full flex justify-center mx-auto drop-shadow-lg fixed top-0 z-10">
      <div className="w-full max-w-[1152px] py-5 flex items-center justify-between">
        <div className="flex gap-6">
          <LogoOdyssey />
          <div className="text-[#3E4650] flex items-center gap-2 hover:cursor-pointer">
            <p className="text-sm font-medium">Browse</p>
            <FaChevronDown size={"14px"} />
          </div>
          <div className="flex items-center gap-1.5 border border-[#CBD3DB] bg-[#F5F7FA] px-2 rounded text-[#80868D] w-[390px]">
            <FaMagnifyingGlass />
            <p className="text-sm">What do you want to learn today?</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <AiOutlineShoppingCart className="text-[#3E4650] text-2xl hover:cursor-pointer" />
          <div className="flex gap-2">
            <div className="px-4 py-2 border border-[#CC3333] text-[#CC3333] font-bold rounded-lg hover:cursor-pointer">
              <p className="text-sm">Sign In</p>
            </div>
            <div className="px-4 py-2 bg-[#CC3333] font-bold rounded-lg hover:cursor-pointer">
              <p className="text-sm">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
