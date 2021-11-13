import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginPot from '../../../images/login-pot.png'
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [data, setData] = useState({});

    const {user, registerUser, isLoading, authError} = useAuth();
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
        registerUser( data.email, data.password);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={2} sx={{mt:3}}>
                <Grid item xs={12} md={6} sx={{mt:2}}>
                <Typography variant="h6" gutterBottom component="div">
                    Registration
                </Typography>
                { !isLoading && <form onSubmit={loginSubmit}>
                    
                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" type="email" label="Your Email Address" name="email" onChange={onChange} variant="standard" />

                   <TextField sx={{width: '75%', margin: 2}} id="standard-basic" name="password" onChange={onChange} type="password" label="Password" variant="standard" />

                   <TextField sx={{width: '75%', margin: 2}}id="standard-basic" name="password2" onChange={onChange} type="password" label="Re-type Password" variant="standard" />

                   <Button sx={{width: '75%', marginTop: 5, backgroundColor: '#ee8863'}} type="submit" variant="contained">Create Account</Button>

                    <br/>

                   <NavLink style={{textDecoration: 'none'}} to="/login"><Button sx={{mt: 1}} variant="text">Already Registered? </Button></NavLink>
                </form>}
                {isLoading && <CircularProgress/>}
                {
                    user?.email && <Alert severity="success">Your Account Created Successfully!!</Alert>
                }
                {
                    authError && <Alert severity="error">{authError}</Alert>
                }
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:3}}>
                    <img src={loginPot} alt="" />
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Register;