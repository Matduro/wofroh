import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Video.css";

function Video({ videoURL }) {
  return (
    <div className="video">
      <p>Get help from the coach by clicking on any exercise</p>
      <h1> Coach: </h1>
      <ReactPlayer url={videoURL} />
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
    </div>
  );
}

export default Video;
