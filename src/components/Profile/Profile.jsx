import React from "react";
import classname from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classname.content}>
      <div>
        <img src="https://imgproxy.natucate.com/ACgMtsK8JOxGdHR-0hJ_DIIBeD_-Fz3rHUwD4QBzakw/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvZGUzNTYyODktY2E5OC00YmVmLWE1M2UtMDgzNDBkMjk1ZjUwLzc1MTc5NjE5NS0xNTU5NjU5MzgwL21hbGVkaXZlbi1sYWVuZGVyaW5mb3JtYXRpb25lbi1zdHJhbmQtcGFub3JhbWEtbmF0dWNhdGUuanBn" />
      </div>
      <div>Ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
