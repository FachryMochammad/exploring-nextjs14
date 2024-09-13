import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import StarRatingComp from "./StarRating";
import Cart from "./Cart";

const ProductCard = () => {
  return (
    <div className="border border-[#E5E7EB] rounded-lg p-3 bg-white max-w-[373px] hover:cursor-pointer">
      <img
        src="https://s3.ap-southeast-1.amazonaws.com/private.odyssey.co.id/ceUJNXadUrBXZmCngPFdGXSt?response-content-disposition=inline%3B%20filename%3D%22PIJAR%20-%20Cover%20Menunjukan%20Sikap%20dan%20Potensi%20Saat%20Wawancara.png%22%3B%20filename%2A%3DUTF-8%27%27PIJAR%2520-%2520Cover%2520Menunjukan%2520Sikap%2520dan%2520Potensi%2520Saat%2520Wawancara.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUHIVXTYISBVTHM4Z%2F20240913%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240913T082428Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=766e719193f3091f7fcafdb0444af58d72619e46ca7040713b62b4bce9934478"
        className="aspect-video w-full rounded-lg"
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
