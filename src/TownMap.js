import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import townMap from './assets/town_map.png';

function TownMap() {
    return (
        <React.Fragment>
            <Paper
                elevation={3}
                sx={{ p: 3, mb: 1 }}>
                <Box
                    component="img"
                    src={townMap}
                    sx={{
                        maxHeight: '85vh',
                        maxWidth: '85vw'
                    }} />
            </Paper>
        </React.Fragment>
    );
}

export default TownMap;