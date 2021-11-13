import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://vast-oasis-50516.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    return (
        <div>  
            <Container sx={{my:5}}>
                <Typography variant="h4" sx={{mb:2}}>
                    Our Products
                </Typography>
                <Grid container spacing={2}>
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    ></Product> )
                }
            </Grid>
           </Container>
        </div>
    );
};

export default Products;