import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/* Left */}

      <div className="flex items-center justify-between max-w-6xl">
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
        Right side
      </div>
      {/* Middle */}

      {/* Right */}
    </div>
  );
};

export default Header;
