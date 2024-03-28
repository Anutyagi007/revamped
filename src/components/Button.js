import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const Button = ({name}) => {
  const [getVideos,setGetVideos]=useState([])
  const navigate=useNavigate();
  useEffect(()=>{
    getVideoByKeyword()
},[])
const getVideoByKeyword= async ()=>{
    const data= await fetch(YOUTUBE_SEARCH_RESULTS_API+name)
    const json= await data.json()
    setGetVideos(json.items)
    console.log(json.items,"searched Videos")
}
const handleClick=()=>{
  navigate("/search?q="+name);

}
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg' onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button