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
import { useForm } from "react-hook-form";

const ManageOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState('');

    const handleStatus = (e) =>{
        setStatus(e.target.value);
    }

    useEffect(()=>{
        const url = 'https://vast-oasis-50516.herokuapp.com/manageOrders'
        fetch(url)
            .then(res=>res.json())
            .then(data=> setOrders(data))
    },[control]);

    const handleUpdate = id =>{
        alert('Status updated');
        fetch(`https://vast-oasis-50516.herokuapp.com/updateStatus/${id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status})
        })
        .then(res=>res.json())
        .then(data=>setStatus(data))
    }

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
            <h2>Total Orders : {orders.length}</h2>
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
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">{row.productPrice}</TableCell>
              <TableCell align="right"><select {...register("status")} onChange={handleStatus}>
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                </select></TableCell>
              <TableCell align="right">
                  <Button variant="contained" onClick={()=>handleUpdate(row?._id)} sx={{backgroundColor: 'green', margin: '5px'}}>Update </Button>
                  <Button onClick={()=>handleDeleteOrder(row?._id)} variant="contained" sx={{backgroundColor: 'red', margin: '5px'}} >Delete </Button>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrders;