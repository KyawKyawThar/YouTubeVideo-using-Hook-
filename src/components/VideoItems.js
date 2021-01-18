import React from "react";
import './VideoItems.css'

const VideoItems = ({videoa,onVideoSelectede}) => {
 return (
   <div onClick={() => onVideoSelectede(videoa)} className="video-item item">
     <img className="ui image" alt={videoa.snippet.title} src={videoa.snippet.thumbnails.medium.url}/>
    
     <div className="content">
<div className="header"> {videoa.snippet.title}</div>
     </div>
   </div>
 );
  
};
export default VideoItems;
