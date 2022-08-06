import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/fr";
import Story from "./Story";

const Stories = () => {
  const [storyUser, setStoryUser] = useState([]);

  console.log(storyUser);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "fr" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));

    setStoryUser(storyUsers);
  }, []);

  return (
    <div>
      {storyUser.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
