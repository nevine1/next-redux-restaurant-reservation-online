"use client";
import Image from 'next/image'
//import styles from './page.module.css'
import Header from './components/header/Banner'
import CalendarImp from './components/CalendarImp';
import { Container, Row, Col } from 'react-bootstrap'
import Category from './components/UI/Category'
import styles from './styles/Styles.module.scss'
import HomePage from './components/HomePage'
import Cart from './components/UI/cart/Carts'
import { useSelector } from 'react-redux'
export default function Home() {
  const showCart = useSelector((state) => state.cartWindow.cartWindowIsOpen)

  return (
    <div className={styles.home}>
      <HomePage/>
      {
        showCart && <Cart/>
      }
    </div>
  )
}
