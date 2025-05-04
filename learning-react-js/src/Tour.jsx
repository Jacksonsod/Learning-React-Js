import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Time from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";


function Tour() {
    return (
   
        <Grid item xs={4} lg={4}>
            <Paper elevation={5} >
                <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRvdXJ8ZW58MHx8fHwxNjg3NTY5NzA1&ixlib=rb-4.0.3&q=80&w=400" alt="Tour" style={{ width: "200px", height: "5rem", borderRadius: '4px' }} />
            <Box sx={{marginX: 2, display: 'flex', alignItems: 'center'}}>
            <Typography variant="body1" component="h6">Immerse into Falls</Typography>
            </Box>
            <Box sx={{marginX: 2, display: 'flex', alignItems: 'center', marginBottom: 3}}>
            <Time sx={{width: '10px'}} />
            <Typography variant="body2" component="p" sx={{fontSize: '10px'}}>5 hours</Typography>  
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', marginX: 2, gap: 0.3}}>
            <Rating name="read-only" value={4.5} defaultValue={4.5} precision={0.5} size="small" readOnly marginTop={1} sx={{fontSize: '15px'}}>
            </Rating>
             <Typography variant="h6" component="p" fontSize={10}>4.5</Typography>
             <Typography variant="body2" component="p" sx={{fontSize: '8px'}}> (200 reviews)</Typography>
             </Box>
             <Box sx={{marginX: 2}}>
            <Typography>From C $465</Typography>
            </Box>
            
            </Paper>
            </Grid>
          
  
    );
    }
    export default Tour;