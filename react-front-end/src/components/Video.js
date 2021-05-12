import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Video.css";

function Video({ videoURL }) {
  return (
    <div className="video--container">
      <h3>Get help from the coach by clicking on any exercise</h3>
      <div className="video">
        <div></div>
        <ReactPlayer url={videoURL} />
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
      </div>
    </div>
  );
}

export default Video;
