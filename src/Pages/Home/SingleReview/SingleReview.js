import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Grid } from '@mui/material';

const SingleReview = ({review}) => {
    const [value, setValue] = React.useState();
    const {_id,name, email, comment, rating } = review;
    return (
        <Grid item xs={12} sm={6} md={4}>
                <Card sx={{  border: 'none'}}>
                    <CardContent>
                    <Typography gutterBottom sx={{color: "gray"}} variant="caption" component="div">
                        Review about {name}
                        </Typography>
                        <Typography variant="body2" sx={{color: "blue"}}>
                        {comment}
                        </Typography>
                        <Typography gutterBottom sx={{color: "gray"}} variant="caption" component="div">
                        Review by {email}
                        </Typography>
                    </CardContent>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                        <Rating 
                        name="read-only" 
                        value={rating} readOnly 
                         >
                            {rating}
                         </Rating>
                        
                    </Box>
                </Card>
        </Grid>
    );
};

export default SingleReview;