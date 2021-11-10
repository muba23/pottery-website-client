import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookF , FaTwitter, FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, backgroundColor: '#e6e6e6', p:3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Subscribe for more updates 
                        </Typography>
                        <TextField id="outlined-basic" label="Enter your email address" variant="outlined" sx={{width: '45%' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                            Follow us
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <h3><FaFacebookF/></h3>
                            <h3><FaTwitter/></h3>
                            <h3><FaInstagramSquare/></h3>
                        </div>
                    </Grid>    
                </Grid>
                <Grid>
                   <Typography sx={{textAlign: 'center', color: '#333333'}}>
                           &copy; 2021 CreativeClay. All rights reserved.
                   </Typography>
                </Grid>
            </Box>
        </div>
    );
};

export default Footer;