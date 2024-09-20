import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const TestimonyCard = () => {
  return (
    <div className="border rounded-2xl p-6 bg-gradient-to-b from-[#D81C2A] to-[#400E12] max-w-[763px] hover:cursor-pointer">
      <svg
        width="52"
        height="38"
        viewBox="0 0 52 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 4V26C22.9967 29.1816 21.7313 32.2319 19.4816 34.4816C17.2319 36.7313 14.1816 37.9967 11 38C10.4696 38 9.96086 37.7893 9.58579 37.4142C9.21071 37.0391 9 36.5304 9 36C9 35.4696 9.21071 34.9609 9.58579 34.5858C9.96086 34.2107 10.4696 34 11 34C13.1217 34 15.1566 33.1571 16.6569 31.6569C18.1571 30.1566 19 28.1217 19 26V24H4C2.93913 24 1.92172 23.5786 1.17157 22.8284C0.421427 22.0783 0 21.0609 0 20V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H19C20.0609 0 21.0783 0.421427 21.8284 1.17157C22.5786 1.92172 23 2.93913 23 4ZM48 0H33C31.9391 0 30.9217 0.421427 30.1716 1.17157C29.4214 1.92172 29 2.93913 29 4V20C29 21.0609 29.4214 22.0783 30.1716 22.8284C30.9217 23.5786 31.9391 24 33 24H48V26C48 28.1217 47.1571 30.1566 45.6569 31.6569C44.1566 33.1571 42.1217 34 40 34C39.4696 34 38.9609 34.2107 38.5858 34.5858C38.2107 34.9609 38 35.4696 38 36C38 36.5304 38.2107 37.0391 38.5858 37.4142C38.9609 37.7893 39.4696 38 40 38C43.1816 37.9967 46.2319 36.7313 48.4816 34.4816C50.7313 32.2319 51.9967 29.1816 52 26V4C52 2.93913 51.5786 1.92172 50.8284 1.17157C50.0783 0.421427 49.0609 0 48 0Z"
          fill="#7A1F1F"
        />
      </svg>

      <p className="mt-7">
        “It was an amazing experience using Odyssey to help our mass
        recruitment. It was able to handle more than 20.000 people in a day!
        Definitely a game changer, we would like to be a long-time partner.”
      </p>

      <div className="flex items-center gap-6 mt-10">
        <FaCircleUser size={"96px"} />
        <div>
          <h1 className="text-2xl font-bold">Ernando Wardono</h1>
          <p className="text-sm font-medium mt-1">PT. Pertamina Persero</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
