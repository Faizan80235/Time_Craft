import { createSlice } from "@reduxjs/toolkit";

const initialState={
    logo:"TIME",
    Logoes:"CRAFT",
    Home:"Home",
    About:"About",
    Collection:"Collection",
    luxry:"Luxry"

}
const navigated=createSlice({
    name:'links',
    initialState,
    reducers:{
     updatenavilinks:(state,action)=>{
          return action.payload
     }
    }
})
export const{updatenavilinks}=navigated.actions
export default navigated.reducer