import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaTeamspeak } from 'react-icons/fa';
import support from '../../../images/support.png'
import shipping from '../../../images/shipping.png'
import offer from '../../../images/offer.png'
import payment from '../../../images/payment.png'


const Papers = () => {
    //  paper : {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     textAlign: "center",
    //     verticalAlign: "middle",
    //     boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    //     borderRadius: "25px",
    //   };
    return (
        <Container>
            <Box
            sx={{
                marginTop: '-70px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > :not(style)': {
                m: 2,
                p: 1,
                width: 200,
                height: 80,
        },
      }}
    >
        <Paper elevation={3} sx={{backgroundColor: '#ffa280'}}>
             <Box sx={{display: 'flex'}}>
             <Typography
                style={{ width: "70%", margin: "auto"}}
                variant="h6"
                color="textPrimary"
                component="span"
              >
                Quick Shipping
              </Typography>
              <img style={{width: '80px'}} src={shipping} alt="" />
             </Box>
            </Paper>
        <Paper elevation={3} sx={{backgroundColor: '#ffa280'}}>
        <Box sx={{display: 'flex'}}>
             <Typography
                style={{ width: "70%", margin: "auto" }}
                variant="h6"
                color="textPrimary"
                component="span"
              >
                24/7 Support
              </Typography>
              <img style={{width: '80px'}} src={support} alt="" />
             </Box>
            </Paper>
        <Paper elevation={3} sx={{backgroundColor: '#ffa280'}}>
        <Box sx={{display: 'flex'}} >
             <Typography
                style={{ width: "70%", margin: "auto" }}
                variant="h6"
                color="textPrimary"
                component="span"
              >
               Special Offers
              </Typography>
              <img style={{width: '80px'}} src={offer} alt="" />
             </Box>
            </Paper>
        <Paper elevation={3} sx={{backgroundColor: '#ffa280'}}>
        <Box sx={{display: 'flex'}}>
             <Typography
                style={{ width: "70%", margin: "auto" }}
                variant="h6"
                color="textPrimary"
                component="span"
              >
                Secured Payment
              </Typography>
              <img style={{width: '70px'}} src={payment} alt="" />
             </Box>
            </Paper>
    </Box>
        </Container>
    );
};

export default Papers;