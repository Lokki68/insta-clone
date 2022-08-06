import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* Left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src={
            "https://logos-marques.com/wp-content/uploads/2020/09/Instagram-Logo-500x281.png"
          }
          alt="Instagram"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src={
            "https://logos-marques.com/wp-content/uploads/2020/09/Instagram-logo-2016-650x433.jpg"
          }
          alt="Instagram"
          layout="fill"
          className="object-contain"
        />
      </div>
      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>
      {/* Right */}
      <h1>Right side</h1>
    </div>
  );
};

export default Header;
