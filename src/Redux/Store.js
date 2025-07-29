// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productreducer from './data/Productdata';
import linkreducer from './data/Navidata';
import popularproductreducer from './data/Popularproductdata';
import productgrid_reducer from './data/Productgrid';
import Luxrydatareducer from './data/luxry';
import Dashdatareducer from './data/DashData';
import GridCardsReducer from './data/GridCardData'
import cartreducer from './data/AddtoCartData'
import chatbotreducer from './data/chat'
const store = configureStore({
  reducer: {
    product: productreducer,
    link: linkreducer,
    popularproduct: popularproductreducer,
    productgrids: productgrid_reducer,
    Luxrydata: Luxrydatareducer,
    DashData: Dashdatareducer,
    GridCards:GridCardsReducer,
    addtocart:cartreducer,
    chatbot:chatbotreducer
  },
 
});

export default store;
