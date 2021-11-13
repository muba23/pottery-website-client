import { Button, Container } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addProducts',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(result=>console.log(result));
        console.log(data);
    };
    return (
        <Container>
            <h1 className="mt-5 text-center text-info">Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray',margin: '5px'}}
                {...register("name")} 
                placeholder="Product name"
            />
            <br />
            <input 
            style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray',margin: '5px'}}
                {...register("price")} 
                type="number"
                placeholder="Product Price"
            />
            <br />
            <input
            style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray', margin: '5px'}}
                {...register("description")}
                placeholder="Description"
            />
            <br />
            <input
            style={{width: '50%', height: '30px', borderRadius: '5px', border: '1px solid gray',margin: '5px'}}
                {...register("image", { required: true })}
                placeholder="Image Link"
                />
            
            {/* <input type="number" {...register("age")} />
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select> */}
            <Button sx={{width: '50%', backgroundColor: 'black'}} type="submit" variant="contained">Submit</Button>
       </form>
        </Container>
    );
};

export default AddProducts;