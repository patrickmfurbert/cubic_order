import Box from '@mui/material/Box';
import React from 'react';
import LeftMenu from './LeftMenu';
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
        <React.Fragment sx={{ display: 'flex' }}>
            <Box>
                <LeftMenu />
            </Box>
        </React.Fragment>
        </ThemeProvider>

    );
}

export default Content;