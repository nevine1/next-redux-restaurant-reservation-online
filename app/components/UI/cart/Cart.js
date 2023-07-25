import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import styles from '../../../styles/Styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineAddCircleOutline } from 'react-icons/md'
const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
   
  return (
    <>
      <div className={styles.totalCartItems}>
        <div className={styles.cartItemsBanner}>
          <h2 className={styles.cartHeading}>CartItems </h2>

        </div>
        {/* {
          cartItems.length === 0 ? 
            <h4 className={`text-align-center alert alert-danger ${styles.cartItemsHeading}`}>
               Cart is empty
            </h4> : 
           <Row>
            cartItems.map((item) =>(
              
                <Col lg="3">
                  <Image src={item.image01} height={100} width={100} alt={item.title} />
                </Col>
                <Col>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>{item.desc}</p>
                  <div className="d-flex">
                    <p>Add</p>
                    <p>{item.quantity}</p>
                    <p>add</p>
                    <button className={`button is-primary is-light`}>Delete</button>
                  </div>
                </Col>
              
            ))
            </Row>
        } */}
      </div>

    </>
  )
}

export default Cart