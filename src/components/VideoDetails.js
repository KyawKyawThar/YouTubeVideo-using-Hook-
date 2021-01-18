import React from 'react';

const VideoDetail = ({videoy}) => {
    if(!videoy) {
         return <div>Loading.....</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${videoy.id.videoId}`;
    return (
 <div>
 <div className="ui embed">
     <iframe src={videoSrc} title="video player"/>
 </div>
    <div  className="ui segment">
    <h4 className="ui header"> {videoy.snippet.title}</h4>
   <p>{videoy.snippet.description}</p>
    </div>
 </div>
    );
}
export default VideoDetail;