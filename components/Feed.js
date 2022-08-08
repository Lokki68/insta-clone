import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <main>
      <section>
        <Stories />

        {/* post */}
        <Posts />
      </section>

      <section>
        {/* Mini profile */}

        {/* Suggestion */}
      </section>
    </main>
  );
};

export default Feed;
