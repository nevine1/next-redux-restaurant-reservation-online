import { createSlice } from '@reduxjs/toolkit'

const cartWindowSlice = createSlice({
    name: 'cartWindow', // name
    initialState: { cartWindowIsOpen: false},
    reducers:{
        toggleCartWindow: (state, action) =>{
            state.cartWindowIsOpen = !state.cartWindowIsOpen;
        }
    }
})

export const { toggleCartWindow } = cartWindowSlice.actions; 
export default cartWindowSlice.reducer; 