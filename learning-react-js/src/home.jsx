import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Navbar  from './compnents/Navbar';
import Footer from './compnents/Footer';

function Home(){
         
         return(
            <>
            <Navbar />
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '400px',
                padding: '20px',
                gap: '20px',
            }}>
               <Typography variant="h6" align="center" sx={{fontWeight: 'bold'}}>Login Page</Typography> 
               <TextField label="Email or Username" variant="outlined" fullWidth required/>
               <TextField label="Password" variant="outlined" fullWidth required/>
               <Button variant="contained" color="primary" size="large">Login</Button>
            </Box>
            </div>
            <Footer />
            </>
         );
         
}
export default Home;