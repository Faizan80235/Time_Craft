// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productreducer from './data/Productdata';
import linkreducer from './data/Navidata';
import popularproductreducer from './data/Popularproductdata';
import productgrid_reducer from './data/Productgrid';
import Luxrydatareducer from './data/luxry';
import Dashdatareducer from './data/DashData';

import { productApi } from './Api/Api';

const store = configureStore({
  reducer: {
    product: productreducer,
    link: linkreducer,
    popularproduct: popularproductreducer,
    productgrids: productgrid_reducer,
    Luxrydata: Luxrydatareducer,
    DashData: Dashdatareducer,

    // Add RTK Query reducer
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
