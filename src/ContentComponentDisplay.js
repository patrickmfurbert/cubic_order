import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import TownMap from './assets/town_map.png';


function ContentComponentDisplay(){

    return(
        <React.Fragment>
            <Paper
                elevation={3}
                sx={{ p: 3, mb: 1 }}>
                <Box
                    component="img"
                    src={TownMap} 
                    sx={{
                        maxHeight: '80vh' ,
                        maxWidth: '80vw'
                    }}/>
            </Paper>
        </React.Fragment>
    );
}

export default ContentComponentDisplay;