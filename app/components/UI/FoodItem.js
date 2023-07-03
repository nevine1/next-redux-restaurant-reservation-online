import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Styles.module.scss'
import { BsCartPlusFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice'
const FoodItem = ({id, title, price, category, image01}) => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart);
  const handleClick = () =>{
    dispatch(addToCart({
      id, title, image01, price
    }))
  }
  return (
    <div className={styles.FoodItem}>
      <Image src={image01} alt={title} height={250} width={250} className={styles.img}/>
      <p className={styles.price}>${price}</p>
      {/* <span className={styles.add}><BsCartPlusFill/></span> */}
      <div className={styles.itemAddTo}>
        <p>{title.slice(0, 15)}</p>
        <button className={`styles.itemBtn button is-danger is-small`}
          onClick={handleClick}
        >Add To Cart</button>
      </div>
      
    </div>
  )
}

export default FoodItem