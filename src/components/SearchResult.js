import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { useSearchParams,Link } from 'react-router-dom'
import SearchedVideoCard from './SearchedVideoCard';

const SearchResult =  () => {
    const [queryParams]=useSearchParams();
    const [searchedVideos,setSearchedVideos]=useState([])
    console.log(queryParams.get("q"))
    const getSearchResults= async()=>{
        const data=await fetch(YOUTUBE_SEARCH_RESULTS_API+ queryParams.get("q"))
        const json=await data.json();
        console.log(json,"api")
        setSearchedVideos(json.items)
    }
    useEffect(()=>{
        getSearchResults();
    },[queryParams.get("q")])

    // if(searchedVideos.length===0){
    //     return <div>Loading</div>
    // }
  return (
    <div>
        <div className="flex flex-wrap justify-between">
			{
                searchedVideos.map((video) => {
                    if (video.id.kind === "youtube#video") {
                        return (
                            <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
                                <SearchedVideoCard info={video} />
                            </Link>
                        );
                    }
                })
            }
		</div>
    </div>
  )
}

export default SearchResult