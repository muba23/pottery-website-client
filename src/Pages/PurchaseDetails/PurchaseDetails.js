import { Button } from '@mui/material';
import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';


const PurchaseDetails = () => {
  const {productId} = useParams();
  const {user} = useAuth();
  const[product, setProduct] = useState({});
  const initialInfo = {email: user.email, address: '', phone: '', name: ''};
  const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

  const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...purchaseInfo};
      newInfo[field] = value;
      setPurchaseInfo(newInfo);
  }

  useEffect(()=>{
      fetch(`https://vast-oasis-50516.herokuapp.com/singleProduct/${productId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
  }, []);

  console.log(product);
  const { register, handleSubmit} = useForm();
  

  const handlePurchaseSubmit = e =>{
      const purchase ={
        ...purchaseInfo,
        productName: product.name,
        productPrice: product.price
      }
    
      fetch('https://vast-oasis-50516.herokuapp.com/placeOrder', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(purchase)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{mt: 4}}>
            <div>
              <img style={{width: '50%'}} src={product?.image} alt="" />
              <br />
              <small>{productId}</small>
              <h3>Product name: <span>{product?.name}</span></h3>
              <h4>Price: {product?.price}</h4>
              <h4>{product?.description}</h4>
            </div>

          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className="mt-5 text-center text-info">Please Fill Up The Purchase Form</h3>
            <TextField
                sx={{width: '70%', m:1}}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user?.email}
                size="small"
           />
           <br />
            <TextField
                sx={{width: '70%', m:1}}
                id="outlined-size-small"
                name="productName"
                value={product?.name}
                size="small"
           />
           <br />
            <TextField
                sx={{width: '70%', m:1}}
                id="outlined-size-small"
                name="productPrice"
                value={product?.price}
                size="small"
           />
           <br />
            <TextField
                sx={{width: '70%', m:1}}
                placeholder="Your Name"
                name="name"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                size="small"
           />
            <TextField
                sx={{width: '70%', m:1}}
                placeholder="Your Address"
                id="outlined-size-small"
                name="address"
                onBlur={handleOnBlur}
                size="small"
           />
            <TextField
                sx={{width: '70%', m:1}}
                placeholder="Your Phone No"
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                size="small"
           />
           <Button sx={{width: '70%', backgroundColor: 'black', mb: 5}} onClick={handlePurchaseSubmit} type="submit" variant="contained">Place Order</Button>
            <br />
            <Button><NavLink style={{textDecoration: 'none', color: 'blue'}} to="/dashboard">GO TO DASHBOARD</NavLink></Button>
            
          </Grid>
        </Grid>
      </Box>
       
    );
};

export default PurchaseDetails;