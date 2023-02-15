import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";


import video from '../videos/Maps101-landing-page-Video.mp4'

export default function App() {
  const videoUrl = useRef(null);
  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          ref={videoUrl}
          controls={false}
          url='../videos/Maps101-landing-page-Video.mp4'
          playsinline
          muted={true}
          playing={true}
          autoPlay
          width="50%"
          height="50%"
          className="react-player"
        />
        syghdfhjgfmjhkhcdgfmjghfj
      </div>
    </div>
  );
}
