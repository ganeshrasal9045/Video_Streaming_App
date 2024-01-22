
const VideoCard = ({info}) => {
    // console.log(info);

    const {snippet, statistics} = info;
    const{channelTitle, title, thumbnails} = snippet;
    return(
        <div className="p-2 m-2 shadow-lg w-64 h-80 rounded-lg">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails"/>
            <ul>
                <li className="font-semibold py-1">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
};

// HOC component
export const AdVideoCard = ({info}) => {
    return(
        <div>
            <label className="absolute bg-red-700 text-white m-4 p-1 rounded-md">Ad</label>
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard;