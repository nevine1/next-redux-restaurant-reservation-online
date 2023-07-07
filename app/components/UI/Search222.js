"use client"
import {useState, useEffect} from 'react'
import { TextField, Select, MenuItem } from '@mui/material';
import { Col, Row, Container } from 'react-bootstrap';
import styles from '../../styles/Styles.module.scss';
import { productData } from '../products';
import FoodItem from './FoodItem';
import { BiSearch } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Search = () => {
    const [products, setProducts] = useState(productData)
  
    const [searchItem, setSearchItem ] = useState('');
    const [sort, setSort] = useState('');
    const [filteredData, setFilteredData ] = useState([])

    //pagination 
    const [itemOffset, setItemOffset] = useState(0); //itemOffset means the first index page
    const [currentData, setCurrentData ] =  useState([ ])
    //const endOffset = itemOffset + itemsPerPage;
    
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    useEffect(() =>{
        
       
    }, [])

  return (
    <div className={styles.searchAllMenu}>
        <Container>
            <Row className={`d-flex justify-content-between ${styles.mainSearchContainer}`}>
                <Col lg="6" md="6" sm="6">
                    <div className={styles.menuSearch}>
                        <TextField id="outlined-basic" label="I am looking for ...." variant="outlined"
                            placeholder='I am looking for .... '
                            name="searchItem"
                            type="text"
                            value={searchItem}
                            size="small"
                            onChange={(e) =>setSearchItem(e.target.value)}
                        />
                        <span className={styles.searchIcon}><BiSearch/></span>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="6">
                    <div className={styles.menuOptions}>
                        {/* <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="Ascending A-Z "
                            label="Age"
                            onChange={(e) =>setSort(e.target.value)}
                            size="small"
                                >
                            <MenuItem value={10}>Default</MenuItem>
                            <MenuItem value={10}>Ascending A-Z</MenuItem>
                            <MenuItem value={20}>Descending Z-A</MenuItem>
                            <MenuItem value={30}>High Price</MenuItem>
                            <MenuItem value={30}>Low Price</MenuItem>
                        </Select> */}
                    </div>
                </Col>
            </Row>
            <div className={styles.products}>
                <Row>
                    { 
                        filteredData.length === 0 ? (
                            <h2 className={styles.searchHeading}>This item is not existing, Try again please.</h2>
                        ):(
                            filteredData.map((product) =>(
                                <Col md={3} lg={3} sm={6} key={product.id}>
                                    <FoodItem {...product}/>
                                </Col> 
                            ))
                        )
                    }
                </Row>
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" />
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </Container>
    </div>
  )
}

export default Search