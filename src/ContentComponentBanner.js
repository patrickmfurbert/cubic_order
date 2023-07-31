import Box from '@mui/material/Box';
import React from 'react';
import Banner from './assets/banner.png';


function ContentComponentBanner(){

    return(
        <React.Fragment>
            <Box
                component="img"
                src={Banner} 
                sx={{
                    height: 130,
                    width: '90%',
                    mt: 4,
                    mx: 'auto'
                }}/>
        </React.Fragment>
    );
}

export default ContentComponentBanner;