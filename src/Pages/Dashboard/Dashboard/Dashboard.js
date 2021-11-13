import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import useAuth from '../../../hooks/useAuth'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import AddProducts from '../AddProducts/AddProducts';
import MyOrders from '../MyOrders/MyOrders';
import ManageProducts from '../ManageProducts/ManageProducts'
import Pay from '../Pay/Pay'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';


const drawerWidth = 200;

function Dashboard(props) {
  const [control, setControl] = useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundImage: 'linear-gradient(orange,coral)', height: '100%'}}>
      <Toolbar />
      <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Divider/>

      <Button><NavLink to={`${url}`} style={{color:'white', textDecoration: 'none'}}>Dashboard</NavLink></Button>
      <br />
      {!admin && 
        <Box>
            <Button><NavLink to="/pay" onClick={()=> setControl('pay')} style={{color:'white', textDecoration: 'none'}}>Pay</NavLink></Button>
            <br />

            <Button><NavLink to={`${url}/myOrders`} style={{color:'white', textDecoration: 'none'}}>My Orders</NavLink></Button>
            <br />

            <Button><NavLink to={`${url}/review`} style={{color:'white', textDecoration: 'none'}}>Review</NavLink></Button>
            <br />
        </Box>}

      {admin && 
        <Box>
            <Button><NavLink to={`${url}/manageOrders`} style={{color:'white', textDecoration: 'none'}}>Manage All Order</NavLink></Button>
            <br />

            <Button><NavLink to={`${url}/makeAdmin`} style={{color:'white', textDecoration: 'none'}}>Make Admin</NavLink></Button>
            <br />

            <Button><NavLink to={`${url}/addProducts`} style={{color:'white', textDecoration: 'none'}}>Add Product</NavLink></Button>
            <br />

            <Button><NavLink to={`${url}/products`} style={{color:'white', textDecoration: 'none'}}>Manage Products</NavLink></Button>
            <br />
        </Box>}

      <Button><NavLink to="/" style={{color:'white', textDecoration: 'none'}}>Log out</NavLink></Button>
      <br />

          
      <List>
        {[].map((text, index) => (
          <ListItem button key={text}>
            
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/products`}>
            <ManageProducts></ManageProducts>
          </Route>
          {/* <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route> */}
          <AdminRoute path={`${path}/addProducts`}>
              <AddProducts></AddProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
          </AdminRoute>
      </Switch>

      {control === 'pay' && <Pay></Pay>}
        
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
