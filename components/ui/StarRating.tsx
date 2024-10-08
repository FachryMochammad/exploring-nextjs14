"use client";
import { useState } from "react";
import React from "react";
const StarRating = require("react-star-rating-component");

const StarRatingComp = () => {
  const [rating, setRating] = useState(4);

  const handleStarClick = (
    nextValue: number,
    prevValue: number,
    name: string | undefined
  ) => {
    setRating(nextValue);
  };

  return (
    <div className="text-xl">
      <StarRating
        name="rating"
        value={rating}
        onStarClick={(
          nextValue: number,
          prevValue: number,
          name: string | undefined
        ) => handleStarClick(nextValue, prevValue, name)}
        starCount={5}
        starColor={"#ffb400"}
        emptyStarColor={"#F2F2F2"}
      />
    </div>
  );
};

export default StarRatingComp;
