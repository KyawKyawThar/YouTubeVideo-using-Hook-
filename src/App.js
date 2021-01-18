import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetails';
import useVideos from './customHook/useVideos';

const App = () => {
  const [videoSelected, setVideoSelect] = useState(null);
  const [videos, search] = useVideos('lambo');

  useEffect(() => {
    setVideoSelect(videos[0]);
  }, [videos]);

  const onVideoSelected = (videok) => {
    setVideoSelect(videok);
  };
  return (
    <div className='ui container' style={{ paddingTop: '30px' }}>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail videoy={videoSelected} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelectedc={onVideoSelected} videosb={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
