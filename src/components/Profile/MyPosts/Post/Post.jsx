import React from "react";
import classname from "./Post.module.css";

const Post = (props) => {
  //console.log(props.message);
  return (
    <div>
      <div className={classname.item}>
        <img src="https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg" />
        {props.message}
        <div>
          <span>{props.likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
