import React from 'react'
import styles from '../../styles/Styles.module.scss'
import { Container, Col, Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { GiSushis, GiFullPizza, GiMeat, GiFrenchFries } from 'react-icons/gi'
import { FaHamburger , FaBurgerSoda} from 'react-icons/fa'
import { Castoro_Titling } from 'next/font/google'
const Category = () => {

  const categoryData = [
    { 
      name: 'Pizza', 
      icon: <GiFullPizza/>, 
    }, 
    { 
      name: 'Fast Foods', 
      icon: <GiFrenchFries/>
    },
    { 
      name: 'Assian Foods', 
      icon: <GiSushis/>
    },
    { 
      name: 'Row Meat', 
      icon: <GiMeat/>
    }
  ]
  return (
    <Container className={styles.categories}>
      <Row>
        {
          categoryData.map((cat, index) =>(
            <Col md={3} lg={3} sm={6} key={index}>
                <div className={styles.cat}>
                  <p className={styles.catIcon}>{cat.icon}</p>
                  <h4 className={styles.catHeading}>{cat.name}</h4>
                </div>
             </Col>
          ))
        }
      </Row>
  </Container>
  )
}

export default Category

