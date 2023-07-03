/* "use client"
import  { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//const getLocalItems = localStorage.getItem('cartItems', JSON.parse(cartItems))
import CartItem from './CartItem'
import styles from '../../../styles/Styles.module.scss'
const Cart = () => {
    const {cartItems, totalQuantity, totalAmount} = useSelector((state) =>state.cart)
    //const getLocalStorage=  JSON.parse(localStorage.getItem('cartItems'));
    const dispatch = useDispatch();
   
  
  return (
    <div>
        <br/> <br/><br/>
        {
            cartItems.length === 0 ? (
                <div>
                    cart is empty
                </div>
            ):(
                cartItems.map((item) =>(
                    <div>
                        <CartItem {...item}/>
                    </div>
                ))
            )
        }
            
            
           
    </div>
  )
}

export default Cart */