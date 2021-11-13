import { Button, Container } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset} = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        fetch('https://vast-oasis-50516.herokuapp.com/addReviews',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(result=>console.log(result));
    };
    return (
        <Container>
            <h2 className="mt-5 text-center text-info">Give Your valueable review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input 
            style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray',margin: '5px'}}
                {...register("email")} 
                defaultValue={user.email}
            />
            <br />

            <input 
            style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray',margin: '5px'}}
                {...register("name")} 
                placeholder="Product name"
            />
            <br />
            
            <textarea
            style={{width: '50%', height: '80px', borderRadius: '5px', border: '1px solid gray', margin: '5px'}}
                {...register("comment")}
                placeholder="Put Your Comment"
            />
            <br />

            <select style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray',margin: '5px'}} placeholder="Please rate us" {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            <br />
            
            <Button sx={{width: '50%', backgroundColor: 'black'}} type="submit" variant="contained">Submit</Button>
       </form>
        </Container>
    );
};

export default Review;