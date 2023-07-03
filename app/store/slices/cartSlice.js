import { createSlice } from '@reduxjs/toolkit'


/* const loadCartState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return [];
    }
  };
  
  const saveCartState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (error) {
      // Handle error if needed
    }
  }; */


const initialState = {
    cartItems: [ ], 
    totalQuantity: 0,
    totalAmount: 0,
    }

const cartSlice = createSlice({
    name: 'cart', //
    initialState,
    reducers:{
      addToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.id === newItem.id
        );
        state.totalQuantity++;
  
        if (!existingItem) {
          // ===== note: if you use just redux you should not mute state array instead of clone the state array, but if you use redux toolkit that will not a problem because redux toolkit clone the array behind the scene
  
          state.cartItems.push({
            id: newItem.id,
            title: newItem.title,
            image01: newItem.image01,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) + Number(newItem.price);
        }
  
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + (item.price * item.quantity),
  
          0
        );
       console.log(state.totalAmount)
      },

            removeItem:(state, action) =>{
              const id = action.payload;
              const existingItem = state.cartItems.find((item) => item.id === id);
              state.totalQuantity--;

              if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
              } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                  Number(existingItem.totalPrice) - Number(existingItem.price);
              }

              state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
              );
              console.log(state.totalAmount)
            }, 

            deleteItem:(state, action) =>{
              const id = action.payload;
              const existingItem = state.cartItems.find((item) => item.id === id);

              if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
              }

              state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
              ); 
              console.log(state.totalAmount)
            }

        }
    })


export const { addToCart, removeItem , deleteItem } = cartSlice.actions;
export default cartSlice.reducer; 