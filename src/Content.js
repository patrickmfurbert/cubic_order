import Box from '@mui/material/Box';
import React from 'react';
import LeftMenu from './LeftMenu';
import ContentComponent from './ContentComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Indie Flower',
        'cursive',
      ].join(','),
    },});

function Content() {
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        height: '100vh'  
                    }}>
                <LeftMenu />
                <ContentComponent />
            </Box>
        </React.Fragment>
        </ThemeProvider>

    );
}

export default Content;