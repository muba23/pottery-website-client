import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../images/logo.png'


const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
  };
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
          <img style={{width: '140px', float: 'left'}} src={logo} alt="" />
          </Typography>

          <Button
          sx={{color:'black'}}
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >Home</Button>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem><Button sx={{color:'black'}}>About Us</Button></MenuItem>
        <MenuItem><Button sx={{color:'black'}}>Catalog</Button></MenuItem>
        <MenuItem><Button sx={{color:'black'}}>Contact Us</Button></MenuItem>
      </Menu>
          <Button sx={{color:'black'}}>Products</Button>
          <Button sx={{color:'black'}}>Catalog</Button>
          <Button sx={{color:'black'}}>Shape</Button>
          
          <Button color="inherit" style={{color: 'black'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;