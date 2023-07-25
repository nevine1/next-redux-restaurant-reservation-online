"use client"
import { useState, useEffect } from 'react'
import { productData } from '../../../components/products';
import { useParams } from 'next/navigation';
import { Container, Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../../../styles/Styles.module.scss'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/slices/cartSlice';
import FoodItem from '../../../components/UI/FoodItem'
//import { useRouter } from 'next/dist/client/router';
import { useRouter } from 'next/router'
const page = () => {

  const dispatch = useDispatch();
  const params = useParams();

  const id= params.id;

  const product = productData.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const {  title, category, price, image01, image02, image03} = product // to add the product to cart
  // other code for the page 
  const [previewImg, setPreviewImg ] = useState(product.image03)
  const [tab, setTab ] = useState('desc');
  const addingCart = () =>{
    dispatch(addToCart({id, title, category, price, image01}));
  }
  const relatedProducts = productData.filter((product) =>product.category === category);
  useEffect(() =>{
    setPreviewImg(product.image03)
  }, [product])

 /*  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [product]) */
 
  return (
    <div className={styles.productDetails}>
      <div className={styles.productBanner}>
        <h1 className={`d-flex justify-content-center align-content-center mt-5 ${styles.detailsHeading}`}>{product.title}</h1>
      </div>
     <Container>
      <Row className="m-5">
        <Col md="2" lg="2" >
          <div className={styles.productImgs}>
            <div className={styles.productImg}  onClick={() =>setPreviewImg(product.image01)}>
              <Image src={product.image01}
                height="100" width="100" 
                alt={product.title} 
                className={styles.imgOne}
                
              />
            </div>
            <div className={styles.productImg}  onClick={() =>setPreviewImg(product.image02)}>
              <Image src={product.image02}
                height="100" width="100" 
                alt={product.title} 
                className={styles.imgOne}
              />
            </div>
            <div className={styles.productImg}  onClick={() =>setPreviewImg(product.image03)}>
              <Image src={product.image03}
                height="100" width="100" 
                alt={product.title} 
                className={styles.imgOne}
              />
            </div>
          </div>
        </Col>
        <Col md="5" lg="5">
          <div className={styles.mainImg}>
              <Image src={previewImg}
                height="350" width="350" 
                alt={product.title} 
                className={styles.imgOne}
              />
          </div>
        </Col>
        <Col md="5" lg="5">
          <div className={styles.productContent}>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={addingCart} type="button" className="button is-danger">Add to Cart</button>
          </div>
        </Col>
        <Col lg="12">
          <div className={`d-flex align-items-center gap-4 ${styles.tabs}`}>
            <h4 className={`${styles.tabsTitle}  ${tab === 'desc'? styles.active : ''} `} onClick={() => setTab('desc')}> Description </h4>
            <h4 className={`${styles.tabsTitle}  ${tab === 'rev'? styles.active : ''} `} onClick={() => setTab('rev')}> Reviews </h4>
          </div>
          <div className={styles.tabsText}>
            {
              tab === 'desc' ? 
              <p className={`${tab === "desc" ? styles.textActive : ' '}`}>{product.desc} </p> : 
              <p className={`${tab === "rev" ? styles.textActive : ' '}`}>there is no reviews now </p>
            }
            
          </div>
        </Col>
      </Row>
      <hr/>
      <Row className={`${styles.products} d-flex  text-align-center align-items-center`}>
        <h3 className={styles.detailsHeading2}>Product you may like</h3>
            { 
              relatedProducts.map((product) =>(
              <Col lg="3" md="3" sm="6" key={product.id}>
                <FoodItem {...product} />
              </Col> 
              ))
                        
            }
        </Row>
      <Link href="/pages/menus" className="button is-info is-small">Back to Main Menu</Link>
     </Container>
      
    </div>
  );
};

export default page;
