import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const HomeProducts = () => {
    const products=[
        {
            name: 'Modern Vase',
            price: '1000BDT'
        },
        {
            name: 'Modern Vase',
            price: '1000BDT'
        },
        {
            name: 'Modern Vase',
            price: '1000BDT'
        },
        {
            name: 'Modern Vase',
            price: '1000BDT'
        },
        {
            name: 'Modern Vase',
            price: '1000BDT'
        },
        {
            name: 'Modern Vase',
            price: '1000BDT'
        },
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2>Our Products</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <h4>Product</h4>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HomeProducts;