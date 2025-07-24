import prod1 from '../../Assest/image/image1.jpg';
import prod2 from '../../Assest/image/image2.jpg';
import prod3 from '../../Assest/image/image3.jpg';
import prod4 from '../../Assest/image/image4.jpg';
import prod5 from '../../Assest/image/image5.jpg';
import prod6 from '../../Assest/image/image8.jpg';
import prod7 from '../../Assest/image/image7.jpg';
import prod8 from '../../Assest/image/image8.jpg'; // Add this import
import prod9 from '../../Assest/image/image9.jpg';
import prod10 from "../../Assest/image/image10.jpg"
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: 'Omega Seamaster', price: '$4,200', image: prod1 },
    { id: 2, name: 'Rolex Submariner', price: '$9,750', image: prod2 },
    { id: 3, name: 'Audemars Piguet Royal Oak', price: '$22,000', image: prod3 },
    { id: 4, name: 'Patek Philippe Nautilus', price: '$31,000', image: prod4 },
    { id: 5, name: 'Appel Smartwatch', price: '$31,000', image: prod5 },
    { id: 6, name: 'Appel ULtra Smartwatch', price: '$71,000', image: prod6 },
    { id: 7, name: 'Samsung Smartwatch', price: '$91,000', image: prod7 },
    { id: 8, name: 'Samsung Super ULtra Smartwatch', price: '$91,000', image: prod8 },
    {id:10,name:'Samsung Galaxy Ultra watch',price:'$90,00',image:prod10}

];


const grid_data = createSlice({
  name: 'grids',
  initialState,
  reducers: {
    updateproductgrids: (state, action) => {
      return action.payload;
    }
  }
});

export const { updateproductgrids } = grid_data.actions;
export default grid_data.reducer;
