import React from "react";

function VideoPlayer({ src, width = 1024, height = 700, autoplay = true }) {
  return (
    <video
      width={width}
      height={height}
      controls={!autoplay} // Controls will show only if autoplay is false
      autoPlay={autoplay} // Note: Changed "autoplay" to "autoPlay" to follow React's naming convention
      muted
      loop
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
