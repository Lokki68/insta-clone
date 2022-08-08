import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import Suggestion from "./Suggestion";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle({ locale: "en" }),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((suggestion) => (
        <Suggestion
          username={suggestion.username}
          jobTitle={suggestion.jobTitle}
          key={suggestion.id}
        />
      ))}
    </div>
  );
};

export default Suggestions;
