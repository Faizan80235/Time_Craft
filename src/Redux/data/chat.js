import { createSlice } from "@reduxjs/toolkit";
const chatbot=createSlice({
    name:'chatboat',
    initialState:{
        messages:[]
    },
    reducers:{
  addmessage:(state,action)=>{
     state.messages.push({user:'sender',text:action.payload})
    },
    addmessagebot:(state,action)=>{
     state.messages.push({user:'bot',text:action.payload})

    }
    }
  
})
export const {addmessage,addmessagebot}=chatbot.actions;
export default chatbot.reducer