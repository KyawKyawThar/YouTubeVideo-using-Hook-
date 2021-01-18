import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videosb,onVideoSelectedc }) => {
  const renderList = videosb.map((videok) => {
    return <VideoItems key={videok.id.videoId} onVideoSelectede={onVideoSelectedc } videoa={videok}/>;
  });
  return <div className="ui relaxed divided list">
  {renderList}
  </div>;
};
export default VideoList;
