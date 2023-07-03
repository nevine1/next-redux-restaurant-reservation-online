"use client"
import { useState , useEffect} from 'react'
import styles from '../styles/Styles.module.scss'
import Image from 'next/image';
import img1 from './assests/img1/burger2.jpg'
import img2 from './assests/img1/pizza.jpg'
import img3 from './assests/img1/burger3.jpg'
import img4 from './assests/img1/cake.jpg'
import img5 from './assests/img1/rest1.jpg'
import Category from './UI/Category'
import Banner from './header/Banner'
import Banner2 from './UI/Banner2'
import FoodItem from './UI/FoodItem'
import HomeSlider from './UI/HomeSlider'
import { productData } from './products'
import { Container, Row, Col } from 'react-bootstrap'
import { GiConsoleController } from 'react-icons/gi';
import Menus from './UI/Menus'
//import { fetchFoods } from '../store/slices/foodsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice'
const allCategories = ['All', ...new Set(productData.map((product) =>product.category))];

const HomePage = () => {
   
    const {cartItems, totalQuantity} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const [allProducts, setAllProducts] = useState(productData);
    
    const [categories, setCategories ] = useState(allCategories);

    const [selectedCategory , setSelectedCategory] = useState('All');
    const [filteredFood, setFilteredFood ] = useState([]);
    //filter food when category = burger
    useEffect(() =>{
        setFilteredFood(allProducts.filter(product => product.category === selectedCategory))

        if(selectedCategory === 'All'){
            setFilteredFood(productData)
          }
    }, [selectedCategory, allProducts]) 
    // get all the product foods when the app starts only so we use empty dependencies
  

  return (
    <>
        <div className={styles.mainBanner}></div>
        <div className={styles.intro}>
            <Row>
                <Col md={6} lg={6} sm={12}>
                <h3>About Us</h3>
                <p>Welcome to Trak Restaurant, your ultimate destination for a culinary adventure.
                     Indulge in a tantalizing array of dishes, ranging from mouthwatering burgers and authentic pizzas to delectable desserts and flavorful Asian cuisine. With a focus on fast and delicious food, our menu caters to all tastes, ensuring a memorable dining experience for every guest. Join us at Trak Restaurant and embark on a gastronomic
                     journey that will satisfy your cravings and leave you craving for more.
                </p>
                </Col>
                <Col md={6} lg={6} sm={12}>
                    <div className={styles.imgContainer}>
                        <Image src={img5} 
                            alt={'image 1 alt'} 
                            className={styles.img}
                            />
                    </div>
                </Col>
            </Row>
            
        </div>
        {/* <Menus/> */}
        <div className={styles.imgCollections}>
            <Row>
                <Col lg={3} md={3} sm={6} className={styles.imgCollecContainer}>
                    <Image src={img2} alt="image 1" className={styles.imgs}/>    
                </Col>
                <Col lg={3} md={3} sm={6} className={styles.imgCollecContainer}>
                    <Image src={img3} alt="image 1" className={styles.imgs}/>    
                </Col>
                <Col lg={3} md={3} sm={6} className={styles.imgCollecContainer}>
                    <Image src={img4} alt="image 1" className={styles.imgs}/>    
                </Col>
                <Col lg={3} md={3} sm={6} className={styles.imgCollecContainer}>
                    <Image src={img1} alt="image 1" className={styles.imgs}/>    
                </Col>
            </Row>
        </div>

        <div className={styles.menu}>
           <h1>Menus</h1>

            <div className={styles.menuBtns}>
            {
                categories.map((cat, index) =>(
                    <button  className={`${styles.catBtn}  ${selectedCategory === cat? styles.catActive : ''} `}
                        key={index}
                        value={cat}
                        onClick={(e)=>setSelectedCategory(e.target.value)}
                         >{cat}</button>
                ))
            }
             </div>

            
        </div>
        <div className={styles.products}>
            <Container>
                <Row>
                    {
                    filteredFood.map((product) =>(
                    <Col md={3} lg={3} sm={6} key={product.id}>
                        <FoodItem {...product}/>
                    </Col> 
                        ))
                    }
                </Row>
            </Container>
        </div>
        <HomeSlider/>
    
    </>
  )
}

export default HomePage