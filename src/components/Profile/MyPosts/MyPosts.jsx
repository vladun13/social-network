import React from "react";
import classname from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" likes="15" />
      <Post message="It's test post" likes="20" />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
