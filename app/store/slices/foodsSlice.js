
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { productData } from '../../components/products'

export const  fetchFoods = createAsyncThunk('foodsSlice/fetchFoods', async() =>{
    const res = await fetch('');
    const data = await res.json();
    return data; 
});
const foodsSlice = createSlice({
    name: 'foods', //
    initialState: [], //
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.fulfilled, (state, action )=>{
            return action.payload
        })
    },
})

export const {} = foodsSlice.actions; //
export default foodsSlice.reducer ;