import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_CHAT_MESSAGES } from "./constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_CHAT_MESSAGES,1);
            state.messages.push(action.payload);
        }
    }
})
export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;