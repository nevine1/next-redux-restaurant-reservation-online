"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@mui/material'
import styles from  '../../styles/Styles.module.scss'
import { links } from './NavLinks'
import { Button } from '@mui/material'
import {FaTimes, FaBars } from 'react-icons/fa'
import { BsCartPlusFill } from 'react-icons/bs'
import {useSelector, useDispatch} from 'react-redux'
import { toggleCartWindow } from '../../../app/store/slices/cartWindowSlice'
const Navbar = () => {
  const { totalQuantity, cartItems, totalPrice } = useSelector((state) =>state.cart)
   // to display the cart Window
  const [showLinks, setShowLinks] = useState(false);
  const [click, setClick] = useState(false)
  const dispatch = useDispatch()

  /* useEffect(()=>{
    window.addEventListener('scroll' , () =>{
      if(document.body.scrollTop > 80 || document.body.scroll)
    })
  }, []) */

  const cartWindowHandleClick = () =>{
    dispatch(toggleCartWindow())
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoDiv}>
          <Link href="/" className={styles.logo}>Vena</Link>
        </div>
        <div className={`${styles.leftNav} ${showLinks ? styles.newLinks : ''}`} >
          <Link href="/" className={styles.links} onClick={()=>setShowLinks(false)}>Home</Link>
          <Link href="/pages/about" className={styles.links} onClick={()=>setShowLinks(false)}>About</Link>
          <Link href="/pages/menus" className={styles.links} onClick={()=>setShowLinks(false)}>Menus</Link>
          <Link href="" className={styles.links} onClick={()=>setShowLinks(false)}>
             <BsCartPlusFill onClick={cartWindowHandleClick} /> <span style={{color: 'red'}} >{totalQuantity}</span>
          </Link>
        </div>
        <div className={styles.rightNav}>
          
          {/* <button className={`button is-primary is-small ${styles.newBtn}`}>Login/Register</button> */}
          <div className={styles.hamburger} onClick={()=>setShowLinks(!showLinks)}>
            {
              showLinks ? <FaTimes /> : <FaBars/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar