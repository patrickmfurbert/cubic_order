import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import LeftMenuItem from './LeftMenuItem';

const drawerWidth = 250;
const items = [
    {
        name: 'Civitas Peccati',
        link: null,
        subItems: [
            {
                name: 'The Crafty Finds',
                link: null,
                subItems: null
            },
            {
                name: 'Frankenstein\'s Alchemy Lab',
                link: null,
                subItems: null
            },
            {
                name: 'Arsenal',
                link: null,
                subItems: null
            },
            {
                name: 'Quill and Knowledge',
                link: null,
                subItems: null
            },
            {
                name: 'The Secret Speakeasy',
                link: null,
                subItems: null
            },
            {
                name: 'Of Rice & Men',
                link: null,
                subItems: null
            },
            {
                name: 'The Clandestine Alleyway',
                link: null,
                subItems: null
            },
        ]
    },
    {
        name: 'Factions',
        link: null,
        subItems: [
            {
                name: 'Ru\'s Dragon Ladies',
                link: null,
                subItems: null
            },
            {
                name: 'House Montegue',
                link: null,
                subItems: null
            },
            {
                name: 'House Capulet',
                link: null,
                subItems: null
            },
            {
                name: 'The Scarlet Pumpernickle',
                link: null,
                subItems: null
            },
        ]
    },

]

function LeftMenu(){
    return (
        <React.Fragment>
            {/* Left Drawer */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar></Toolbar>
                <List>
                    
                    {
                        items.map(item => (
                            <LeftMenuItem 
                                menuItem={item}
                                />
                        ))
                    }
                   
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default LeftMenu;