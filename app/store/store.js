'use client';

import { configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import foodsReducer from './slices/foodsSlice'
import cartWindowReducer from './slices/cartWindowSlice';


export const store = configureStore({
    reducer: {
        foods: foodsReducer,
        cart: cartReducer, 
        cartWindow: cartWindowReducer,
    }
})