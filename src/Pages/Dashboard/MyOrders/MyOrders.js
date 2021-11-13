import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(()=>{
        const url = `https://vast-oasis-50516.herokuapp.com/myOrders?email=${user.email}`
        fetch(url)
            .then(res=>res.json())
            .then(data=> setMyOrders(data))
    },[control]);

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
            <h2>My Orders : {myOrders.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="my Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">{row.productPrice}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                  <Button onClick={()=>handleDeleteOrder(row?._id)} variant="contained" >Delete </Button>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;