import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link'
import Img1 from '../assests/images/product_2.3.jpg'
import Img2 from '../assests/images/product_2.3.jpg'
import Img3 from '../assests/images/product_2.3.jpg'
import Img4 from '../assests/images/product_2.3.jpg'
const Menus = () => {
  return (
    <>
        <h1>Menus </h1>
        <Row>
            <Col lg={3} md={3} sm={6}>
                <Link href='/'>
                    <Image src={Img1}  alt="Image 1" />
                </Link>
            </Col>
            <Col lg={3} md={3} sm={6}>
                <Link href='/'>
                    <Image src={Img2}  alt="Image 1" />
                </Link>
            </Col>
            <Col lg={3} md={3} sm={6}>
                <Link href='/'>
                    <Image src={Img3}  alt="Image 1" />
                </Link>
            </Col>
            <Col lg={3} md={3} sm={6}>
                <Link href='/'>
                    <Image src={Img4}  alt="Image 1" />
                </Link>
            </Col>
            
        </Row>

    </>
  )
}

export default Menus