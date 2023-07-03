import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import { Container, Col, Row } from 'react-bootstrap';
import Img1 from '../assests/png/1.png'
import Img2 from '../assests/png/2.png'
import Img3 from '../assests/png/3.png'
const Banner = () => {
  return (
    <>
        <div className={styles.banner}>
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className={styles.bannerTxt}>
                  <h1>Trak's Gyro & Burger</h1>
                  <h2>100% Fresh Angus</h2>
                  <button className="button is-danger">Order Now</button>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className={styles.bannerImgs}>
                  <Image src={Img1}  alt="image 1" className={styles.img1} />
                  <Image src={Img3}  alt="image 2" className={styles.img3} />
                  <Image src={Img2}  alt="image 3" className={styles.img2} />
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  )
}

export default Banner