import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CartItem from './CartItem'
import { AiFillCloseCircle } from 'react-icons/ai'
import styles from '../../../styles/Cart.module.scss'
import Link from 'next/link'
import { store } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCartWindow } from '../../../store/slices/cartWindowSlice'

const Carts = () => {
    const dispatch = useDispatch();
    const { cartItems, totalAmount } = useSelector((state) =>state.cart)

    const toggleCart = () =>{
        dispatch(toggleCartWindow())
      
    }
  return (
    <div className={styles.cartContainer}>
        <div className={styles.cart}>
            <div className={styles.cartClose} >
                <span onClick={toggleCart}><AiFillCloseCircle /></span>
            </div>
            <div className={styles.cartList}>
               {
                cartItems.length === 0 ? <h2>No Items Added To Cart</h2> :
                cartItems.map((item) =>(
                    <div key={item.id}>
                        <CartItem {...item} />
                    </div>
                ))
               }
                <br/>
            </div>
            <div className={styles.cartBottom}>
                <h6>SubTotal Amount: <span>${ totalAmount }</span></h6>
                <button  className={`button `}>CheckOut</button>
            </div>
        </div>
    </div>
  )
}

export default Carts