import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview'

const HomeReviews = () => {
    const [reviews, setReviews]= useState([]);

    useEffect(()=>{
        fetch('https://vast-oasis-50516.herokuapp.com/reviews')
            .then(res=>res.json())
            .then(data=>setReviews(data))
    },[]);
    return (
        <div>
            <Container sx={{my:5}}>
                <Typography variant="h5" sx={{mb:2, color:'gray'}}>
                Customers Review
                </Typography>
                <Grid container spacing={2}>
                {
                    reviews.map(review=> <SingleReview
                    key={review.id}
                    review={review}
                    ></SingleReview> )
                }
            </Grid>
           </Container>
        </div>
    );
};

export default HomeReviews;