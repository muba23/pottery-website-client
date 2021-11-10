import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginPot from '../../../images/login-pot.png'

const Register = () => {
    const [data, setData] = useState({});
    const onChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...data};
        newData[field] = value;
        setData(newData);
    }
    const loginSubmit = e =>{
        if(data.password !== data.password2){
            alert("Password didn't match");
            return;
        }
        
        e.preventDefault();
    }
    return (
        <Container>
                <Grid container spacing={2} sx={{mt:3}}>
                <Grid item xs={12} md={6} sx={{mt:2}}>
                <Typography variant="h6" gutterBottom component="div">
                    Registration
                </Typography>
                <form onSubmit={loginSubmit}>
                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" type="name" label="Your Name" name="name" onChange={onChange} variant="standard" />

                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" type="email" label="Your Email Address" name="email" onChange={onChange} variant="standard" />

                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" type="phone" label="Your Phone Number" name="phone" onChange={onChange} variant="standard" />

                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" name="password" onChange={onChange} type="password" label="Password" variant="standard" />

                   <TextField sx={{width: '75%', margin: 2}}id="standard-basic" name="password2" onChange={onChange} type="password" label="Re-type Password" variant="standard" />

                   <Button sx={{width: '75%', marginTop: 5, backgroundColor: '#ee8863'}} type="submit" variant="contained">Create Account</Button>

                    <br/>

                   <NavLink style={{textDecoration: 'none'}} to="/login"><Button sx={{mt: 1}} variant="text">Already Registered? </Button></NavLink>
                </form>
                
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:3}}>
                    <img src={loginPot} alt="" />
                </Grid>
            </Grid>
            </Container>
    );
};

export default Register;