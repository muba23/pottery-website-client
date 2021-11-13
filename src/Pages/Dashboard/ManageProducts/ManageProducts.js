import React from 'react';
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { register, handleSubmit } = useForm();
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch("https://vast-oasis-50516.herokuapp.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, [control]);

      const handleDeleteOrder = (id)=>{
        alert('Delete the product?')
        fetch(`https://vast-oasis-50516.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    setControl(!control);
                }
            })
    };

    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="my Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">
                  <Button onClick={()=>handleDeleteOrder(row?._id)} variant="contained" sx={{backgroundColor: '#ff3333', margin: '5px'}}>Delete </Button>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageProducts;