import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import LeftMenuItem from './LeftMenuItem';
import d20 from './assets/d20.png';

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
    {
        name: 'DnD Beyond',
        link: null,
        subItems: [
            {
                name: 'Cubic Order Character Sheets',
                link: null,
                subItems: null,
            },
            {
                name: 'Ru\'s Dragon Ladies Character Sheets',
                link: null,
                subItems: null,
            },
            {
                name: 'The Crimson Pumpernickle Character Sheets',
                link: null,
                subItems: null,
            },
            {
                name: 'Montegue Character Sheets',
                link: null,
                subItems: null,
            }, {
                name: 'Capulet Character Sheets',
                link: null,
                subItems: null,
            },
        ]
    }

]

function LeftMenu() {
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
                <Toolbar>
                    <Box 
                        component="img"
                        sx={{
                            maxHeight: { xs: 100, md: 100 },
                            maxWidth: { xs: 100, md: 100 },
                            mx: 'auto',
                            my: 4
                          }}
                        src={d20} 
                    />
                </Toolbar>
                <List>

                    {
                        items.map(item => (
                            <LeftMenuItem
                                key={item.name}
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