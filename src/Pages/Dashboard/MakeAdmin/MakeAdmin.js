import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    console.log(data);
                    setAdminSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <small style={{}}>*Only an admin can make another admin</small>
            <form style={{marginTop: '30px'}} onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width: '50%'}} 
            id="filled-basic" 
            label="Enter email" 
            type="email" 
            onBlur={handleOnBlur}
            variant="filled" />
            <br />
            <Button sx={{mt: 3}}variant="contained" type="submit">Make Admin</Button>
            </form>
            {adminSuccess && <Alert severity="success">Making Admin Successful</Alert>}
        </div>
    );
};

export default MakeAdmin;