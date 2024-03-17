import React from 'react'

const VideoCard = ({info}) => {
    const views=info?.statistics.viewCount;
    const viewCount=(views)=>{
        if(views >= 1000 && views< 1000000){
            let totalviews=Math.floor(views/1000)
            return `${totalviews}K`
        }else if (views>=1000000){
            let totalviews= Math.round(views /1000000);
           return `${totalviews}M`
        }

    }
  return (
    <div className='p-2 m-2 w-72 h-80 hover:scale-105 '>
        <img className='rounded-lg' src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnails" />
        <ul>
            <li className='font-bold py-2'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{viewCount(views)} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;