import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const[liveMessage,setLiveMessage]=useState("")
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addMessage({
        name: "Anubhav",
        message: liveMessage,
    }))
    setLiveMessage("");
  }
  return (
    <>
      <div className="ml-2 h-[500px] w-full p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => {
            return <ChatMessage name={c.name} message={c.message} />;
          })}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black rounded-lg" onSubmit={handleSubmit}>
          <input className="w-72" type="text" placeholder="Type here ...." value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
          <button className="rounded-lg h-8 px-2 mx-2 bg-black text-white">chat</button>
      </form>
    </>
  );
};

export default LiveChat;
