
import Image from 'next/image';
import styles from '../../styles/Styles.module.scss'
import { BsCartPlusFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice'
import Link from 'next/link'

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
      <Image src={image01} alt={title} height={120} width={120} className={styles.img}/>
      <p className={styles.price}>${price}</p>
      <div className={styles.itemAddTo}>
        <Link href={`/pages/menus/${id}`} className={styles.titleFoodItem}>{title.slice(0,6)}</Link>
        <button 
          className={`${styles.itemBtn} button is-danger is-light  is-small has-text-dark`}
            onClick={handleClick}
          >Add To Cart</button>
      </div>  
    </div>
  )
}

export default FoodItem