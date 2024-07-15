import { configureStore } from "@reduxjs/toolkit";
import { allToursReducer } from './AllToursSlice/allToursSlice';

const store = configureStore({
    reducer:{
        allTours: allToursReducer
    }
})

export default store;