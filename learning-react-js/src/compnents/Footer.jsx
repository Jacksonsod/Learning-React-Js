import React from "react";
import { Typography } from "@mui/material";

function Footer(){
    return(
        <div style={{backgroundColor: '#000', color: 'white', padding: '10px', textAlign: 'center'}}>
            <Typography variant="body2">© 2025 Innation Tech Inc. All rights reserved.</Typography>
            <Typography variant="body2">Privacy Policy | Terms of Service</Typography>
            <Typography variant="body2">Follow us on: Facebook | Twitter | LinkedIn</Typography>    
        
        </div>
    );
}
export default Footer;