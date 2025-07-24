import { createSlice } from "@reduxjs/toolkit";
const AddCard=createSlice({
    name:'addtocart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            const added=state.find((item)=>item.id===action.payload);
            if(added){
                added.quantity+=1
            }else{
             state.push({...action.payload,quantity:1})
            }
        }
    }
})
export const  {addtocart}=AddCard.actions
export default AddCard.reducer