import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const OrderedProducts = ({product}) => {
    const {_id, name, price, description, image} = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="270"
                        width="100%"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {description}
                        </Typography>
                    </CardContent>
                        <NavLink to={`/purchase/${_id}`} style={{textDecoration: 'none'}}>
                            <Button 
                            style={{margin: 'auto',marginBottom: '10px', backgroundColor: '#1a0700'}} variant="contained">
                                Buy Now
                            </Button>
                        </NavLink>
                </Card>
        </Grid>
    );
};

export default OrderedProducts;