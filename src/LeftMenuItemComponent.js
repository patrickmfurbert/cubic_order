import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LeftMenuItemComponent({ name, link, subItems, isOpen, setIsOpen, setContentComponent }) {
    
    const isExpandable = subItems && subItems.length > 0;

    const handleExpandContractClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSetContentComponent = (name) => {
        setContentComponent(name);
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
                        <ListItemText primary={name} />

                        {!isOpen && <ExpandMoreIcon />}
                        {isOpen && <ExpandLessIcon />}

                    </ListItemButton>) :
                    (
                        <ListItemButton
                            data-key={name}
                            href={link}
                            onClick={() => handleSetContentComponent(name)}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    )
                }
            </ListItem>
        </React.Fragment>
    );
}

export default LeftMenuItemComponent;