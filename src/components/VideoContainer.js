import React, { useEffect , useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async() => {
    try {

      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      // console.log(json.items);
      setVideos(json.items)

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='flex flex-wrap m-2'>
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {
        videos.map((video) =>
        <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>
        )
      }
      
    </div>
  )
}

export default VideoContainer
