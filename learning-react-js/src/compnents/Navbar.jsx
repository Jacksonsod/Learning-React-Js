import * as React from 'react';
import { Typography, Link, CssBaseline, AppBar, Box, Toolbar,Footer } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Navbar() {
  return (
   <>
   <CssBaseline />
   <AppBar>
    <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
    <Box sx={{display: 'flex',gap :1, cursor: 'pointer' }}>
      <LoginIcon />
      <Typography>Login page</Typography>
    </Box>
    <Box sx={{display: 'flex',gap: 2, cursor: 'pointer'}}>
    <HomeIcon />
    <Link to="/" sx={{color: 'white'}} >Home</Link>
    <InfoIcon />
    <Link sx={{color: 'white'}} to="/aboutus">About Us</Link>
    <PhonePausedIcon />
    <Link sx={{color: 'white'}}>Contact Us</Link>
    <PersonAddAltIcon />
    <Link sx={{color: 'white'}}>Register</Link>
    </Box>
    </Toolbar>
   </AppBar>

   </>
  );
}

export default Navbar;