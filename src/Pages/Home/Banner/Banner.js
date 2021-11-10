import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bannerBackground from '../../../images/backgroundBanner.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const background = {
    background: `url(${bannerBackground})`,
    backgroundColor: '#a6a6a6',
    backgroundBlendMode: 'lighten',
    marginTop: '-30px',
    width: '100%',
    height: 600,
}

const Banner = () => {
    return (
        <Box style={background} sx={{ flexGrow: 1 }}>
             <Box style={{margin: 'auto', paddingTop: '200px'}}>
                            <Typography sx={{m:2}} variant="h2" component="div">
                            Pottery made with love
                            </Typography>
                            <Typography sx={{m:2}} variant="body1">
                            Our addition of decoration has evolved throughout pottery history.
                            <br />
                            A Provocative and Divergent Contemporary Conceptual Approach towards pottery industry.
                            </Typography>
                        
                            <Button sx={{m:1, p: 2, backgroundColor: '#1a1a1a'}}variant="contained"><Link style={{textDecoration: 'none' , color: 'white'}} to="/login">Explore More</Link></Button>
                           </Box>
    </Box>
        
    );
};

export default Banner;