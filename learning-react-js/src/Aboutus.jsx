import React from "react";
import { Typography } from "@mui/material";
import Navbar from "./compnents/Navbar";

function Aboutus() {
    return (
        <>
        <Navbar />
        <div style={{ padding: "20px" }}>
            
        <Typography variant="h4" gutterBottom>
            About Us
        </Typography>
        <Typography variant="body1" paragraph>
            Welcome to our website! We are dedicated to providing you with the best service possible.
        </Typography>
        <Typography variant="body1" paragraph>
            Our team is committed to excellence and we strive to exceed your expectations.
        </Typography>
        </div>
        </>
    );
}
export default Aboutus;