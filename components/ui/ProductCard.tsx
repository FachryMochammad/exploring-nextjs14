import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import StarRatingComp from "./StarRating";
import Cart from "./Cart";

const ProductCard = () => {
  return (
    <div className="border border-[#E5E7EB] rounded-lg p-3 bg-white max-w-[373px] hover:cursor-pointer">
      <img
        src="https://filesdev.klob.id/open/c0bae082-80f8-41c4-8512-2a091559307d/33.jpeg"
        className="aspect-video w-full rounded-lg"
        // width={100}
        // height={100}
        alt="logo"
      />
      <div className="border border-[#A3AEB9] rounded-3xl py-[5px] px-3 w-max mt-3 mb-2">
        <p className="text-[#151519] text-xs">Course</p>
      </div>
      <h1 className="text-xl font-bold text-[#151519]">
        Menunjukan Sikap dan Potensi saat Wawancara Kerja
      </h1>
      <div className="my-1">
        <StarRatingComp />
      </div>
      <div className="flex items-center gap-2">
        <FaCircleUser className="text-[#5F070F]" size={"28px"} />
        <p className="text-[#3E4650]">Novia Ayu</p>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div>
          <p className="text-[#3E4650] text-xl font-bold">Rp 1.359.000</p>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
