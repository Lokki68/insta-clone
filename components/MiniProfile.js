import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-4">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oqKdt668v2xfxVct01uxlOVl8CPHIqHJ-EDplCa3oA&s"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">lokki</h2>
        <h3 className="text-gray-400 text-sm">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
};

export default MiniProfile;
