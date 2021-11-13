import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';


const HomeProducts = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://vast-oasis-50516.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    return (
        <div>  
            <Container sx={{my:10}}>
                <Typography variant="h4" sx={{mb:2}}>
                    Explore Our <span style={{color: 'orange'}}>Exclusive</span> Products
                </Typography>
                <Grid container spacing={2}>
                {
                    products.slice(0,6).map(product=> <Product
                    key={product.id}
                    product={product}
                    ></Product> )
                }
            </Grid>
           </Container>
        </div>
    );
};

export default HomeProducts;