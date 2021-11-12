import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import OrderedProducts from '../../OrderedProducts/OrderedProducts';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res=>res.json())
            .then(data=>setMyOrders(data))
    },[]);
    return (
        <div>
            <Container sx={{my:5}}>
                <Typography variant="h4" sx={{mb:2}}>
                    My Orders
                </Typography>
                <Grid container spacing={2}>
                {
                    myOrders.map(product=><OrderedProducts
                        key={product.id}
                        product={product}
                        ></OrderedProducts>)
                }
            </Grid>
           </Container>
        </div>
    );
};

export default MyOrders;