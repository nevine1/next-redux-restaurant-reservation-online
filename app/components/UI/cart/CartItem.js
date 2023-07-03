import React from 'react'
import {ListGroupItem } from 'react-bootstrap'
import Image from 'next/image'
import Image1 from '../../assests/images/banner.jpg'
import styles from '../../../styles/Cart.module.scss'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addToCart, removeItem, deleteItem  } from '../../../store/slices/cartSlice';
import { useDispatch } from 'react-redux'
const CartItem = ({id, title, image01, price, quantity, totalPrice}) => {
    
  const dispatch = useDispatch();
  const increaseItem = () =>{
    dispatch(addToCart({id, title, image01, price, quantity, totalPrice}))
  }
  const decrementItem = () =>{
    dispatch(removeItem(id))
  }

  const deleteItemById = () =>{
    dispatch(deleteItem(id))
  }
  return (
    <Row  className={styles.cartItem}>
        <Col xs={3} md={3} lg={3}>
          <Image src={image01} width="60" height="60" alt='home page url' 
                className={styles.cartImg}
            />
        </Col>
        <Col xs={3} md={3} lg={3}>
          <div className={styles.cartItemInfo}>
            <h6 className={styles.cartTitle}> {title}</h6>
            <p className={styles.cartTitle}>Price: ${price}</p>
          </div>
        </Col>
        <Col xs={3} md={3} lg={3}>
          <div className={styles.cartAmountHelper}>
            <span><IoIosArrowDown className={styles.cartIcon} onClick={decrementItem} /> </span>
            <span>{quantity}</span>
            <span><IoIosArrowUp onClick={increaseItem} className={styles.cartIcon} /></span>
          </div>
        </Col>
        <Col className={styles.deleteItem} xs={3} md={3} lg={3}>
          <RiDeleteBin6Line onClick={deleteItemById} />
        </Col>
      </Row>
  )
}

export default CartItem
