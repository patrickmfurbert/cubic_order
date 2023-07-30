import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LeftMenuItemComponent({ name, link, subItems, isOpen, setIsOpen }) {
    
    const isExpandable = subItems && subItems.length > 0;

    const handleExpandContractClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <ListItem key={name} disablePadding>
                {isExpandable ?
                    (<ListItemButton
                        data-key={name}
                        href={link}
                        onClick={handleExpandContractClick}
                    >

                        {/* <ListItemIcon>

                        </ListItemIcon> */}

                        <ListItemText primary={name} />

                        {!isOpen && <ExpandMoreIcon />}
                        {isOpen && <ExpandLessIcon />}

                    </ListItemButton>) :
                    (
                        <ListItemButton
                            data-key={name}
                            href={link}
                            onClick={handleExpandContractClick}
                        >
                            {/* <ListItemIcon>

                            </ListItemIcon> */}

                            <ListItemText primary={name} />
                        </ListItemButton>
                    )
                }
            </ListItem>
        </React.Fragment>
    );
}

export default LeftMenuItemComponent;