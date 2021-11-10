import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import pottery from '../../../images/pottery.png'
import pot from '../../../images/pottery-1.png'
import loginPot from '../../../images/login-pot.png'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({});
    const onChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...data};
        newData[field] = value;
        setData(newData);
    }
    const loginSubmit = e =>{
        alert('Hello')
        e.preventDefault();
    }
    return (
            <Container>
                <Grid container spacing={2} sx={{mt:3}}>
                <Grid item xs={12} md={6} sx={{mt:2}}>
                <Typography variant="h6" gutterBottom component="div">
                    Login
                </Typography>
                <form onSubmit={loginSubmit}>
                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" type="email" label="Email Address" name="email" onChange={onChange} variant="standard" />

                   <TextField sx={{width: '75%'}} id="standard-basic" name="password" onChange={onChange} type="password" label="Password" variant="standard" />

                   <Button sx={{width: '75%', marginTop: 5, backgroundColor: 'black'}} type="submit" variant="contained">Login</Button>

                    <br/>

                   <NavLink style={{textDecoration: 'none'}} to="/register"><Button variant="text">New to CreativeClay?</Button></NavLink>
                </form>
                
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:3}}>
                    <img style={{height: '110%'}} src={loginPot} alt="" />
                </Grid>
            </Grid>
            </Container>
        
    );
};

export default Login;