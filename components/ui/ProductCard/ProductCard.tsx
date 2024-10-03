"use client";
import React, { useState } from "react";
import { FaCircleUser, FaRegHeart, FaHeart } from "react-icons/fa6";
import StarRatingComp from "../StarRating";
import Styles from "./ProductCard.module.css";

const ProductCard = () => {
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <div className="border border-[#E5E7EB] rounded-lg p-3 bg-white max-w-[373.26px] hover:cursor-pointer relative">
      <div className={`${Styles.card}`}>
        <img
          src="https://filesdev.klob.id/open/c0bae082-80f8-41c4-8512-2a091559307d/33.jpeg"
          className="aspect-video w-full rounded-lg"
          // width={100}
          // height={100}
          alt="logo"
        />

        {/* <div className="border border-[#A3AEB9] rounded-3xl py-[5px] px-3 w-max mt-3 mb-2">
        <p className="text-[#151519] text-xs">Course</p>
        </div> */}
        <h1 className="text-xl font-bold text-[#151519] mt-3">
          Menunjukan Sikap dan Potensi saat Wawancara Kerja
        </h1>
        <div className="flex items-center gap-2 my-1">
          <FaCircleUser className="text-[#5F070F]" size={"28px"} />
          <p className="text-[#3E4650]">Novia Ayu</p>
        </div>
        <div className="flex items-center gap-2">
          <StarRatingComp />
          <div>
            <p className="text-[#3E4650] text-sm font-bold mb-1">4.9</p>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div className="flex items-end gap-2">
            <p className="text-[#3E4650] text-xl font-bold">Rp 1.359.000</p>
            <p className="text-[#A3AEB9] line-through">Rp 1.359.000</p>
          </div>
        </div>
      </div>
      <button
        className={`${
          Styles.wishlist
        } border border-transparent rounded-lg max-w-max p-2 drop-shadow-lg hover:text-[#CC3333] ${
          !isWishlist ? "text-[#80868D]" : "text-[#CC3333]"
        }`}
        onClick={() => setIsWishlist(!isWishlist)}
      >
        {!isWishlist ? <FaRegHeart /> : <FaHeart />}
      </button>
    </div>
  );
};

export default ProductCard;
