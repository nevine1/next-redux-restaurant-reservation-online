"use client";
import Cart from '../../components/UI/cart/Cart'
import {Container } from 'react-bootstrap'
import cartWindowSlice from '../../store/slices/cartWindowSlice';
import { useSelector } from 'react-redux';
import { store } from '../../store/store'
const page = () => {
  //const { totalQuantity} = useSelector((state) =>state.cart)
  /* console.log('totalQuantity');
  console.log(totalQuantity); */
  const showCart = useSelector((state) => state.cartWindow.cartWindowIsOpen)

  return (
    <div>
      <Cart/>
    </div>
  )
}

export default page