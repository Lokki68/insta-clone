import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "lokki",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oqKdt668v2xfxVct01uxlOVl8CPHIqHJ-EDplCa3oA&s",
      img: "https://images.unsplash.com/photo-1659933263268-365993789d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "otherProfile",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oqKdt668v2xfxVct01uxlOVl8CPHIqHJ-EDplCa3oA&s",
      img: "https://images.unsplash.com/photo-1659935275716-69e12c6499e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      caption: "Nice WaterFall",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
