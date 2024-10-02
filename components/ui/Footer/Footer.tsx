import React from "react";
import LogoOdyssey from "./LogoOdyssey";
import {
  FaEarthAsia,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E5E7EB] w-full h-[378px] mt-[64px] flex justify-center mx-auto">
      <div className="w-full max-w-[1152px] py-11">
        <div className="flex gap-16">
          <div className="w-[25%]">
            <LogoOdyssey />
            <div className="flex gap-4 mt-10">
              <div className="bg-[#25252C] p-2 rounded-full">
                <FaEarthAsia />
              </div>
              <div className="bg-[#25252C] p-2 rounded-full">
                <FaLinkedinIn />
              </div>
              <div className="bg-[#25252C] p-2 rounded-full">
                <FaInstagram />
              </div>
              <div className="bg-[#25252C] p-2 rounded-full">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[25%]">
            <h1 className="text-lg text-[#0B0B0D] font-bold">Odyssey</h1>
            <p className="text-sm text-[#0B0B0D]">Home</p>
            <p className="text-sm text-[#0B0B0D]">About Us</p>
            <p className="text-sm text-[#0B0B0D]">Get in Touch</p>
            <p className="text-sm text-[#0B0B0D]">Terms and Conditions</p>
            <p className="text-sm text-[#0B0B0D]">Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-3 w-[25%]">
            <h1 className="text-lg text-[#0B0B0D] font-bold">Jakarta</h1>
            <p className="text-sm text-[#0B0B0D]">
              Kantor Taman E3.3 Unit B3-3A Kawasan Mega Kuningan, Jakarta 12950
              - Indonesia
            </p>
            <p className="text-sm text-[#0B0B0D]">
              Alamanda Tower 23rd Floor - Unit C & D Cilandak Barat, Jakarta
              12430 - Indonesia
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[25%]">
            <h1 className="text-lg text-[#0B0B0D] font-bold">Surabaya</h1>
            <p className="text-sm text-[#0B0B0D]">
              Pakuwon Center 17th Floor Unit 5A-B Jl. Embong Malang 1,3,5,
              Surabaya 60261 - Indonesia
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 text-[#0B0B0D] text-xs">
          <p>Copyright 2020 © Daya Dimensi Indonesia</p>
          <span className="mx-3">•</span>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
