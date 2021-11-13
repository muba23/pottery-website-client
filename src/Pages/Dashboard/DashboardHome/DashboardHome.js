import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    return (
        <div>
            <MyOrders></MyOrders>
          <Button><NavLink to="/products" style={{color:'blue', textDecoration: 'none'}}> Want to add more products? </NavLink></Button>
        </div>
    );
};

export default DashboardHome;