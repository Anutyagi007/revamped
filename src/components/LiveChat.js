import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("API polling")
        },2000)
        return()=>{
            clearInterval(interval);
        }
    },[])
  return (
    <div className='ml-2 h-[500px] w-full p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Anubhav" message="My Demo of Youtube Clone"/>
        <ChatMessage name="Anubhav" message="My Demo of Youtube Clone"/>
        <ChatMessage name="Anubhav" message="My Demo of Youtube Clone"/>
        <ChatMessage name="Anubhav" message="My Demo of Youtube Clone"/>
        <ChatMessage name="Anubhav" message="My Demo of Youtube Clone"/>
    </div>
  )
}

export default LiveChat