import React from "react";

const Suggestion = ({ username, jobTitle }) => {
  return (
    <div className="flex items-center justify-between mt-3">
      <img
        className="h-10 rounded-full border p-[2px] "
        src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
        alt={username}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <h3 className="font-bold text-gray-400 text-sm truncate w-[180px]">
          {jobTitle}
        </h3>
      </div>
      <button className="text-blue-400 font-semibold">follow</button>
    </div>
  );
};

export default Suggestion;
