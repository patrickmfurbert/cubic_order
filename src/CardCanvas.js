import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Character  from './Character';

function CardCanvas({ npcs }) {
    return (
        <React.Fragment>
            <Grid
                container spacing={5}
                sx={{
                    maxHeight: '90vh',
                    maxWidth: '85vw',
                    mx: 'auto'
                }}
            >
                {npcs.map(npc => 
                    (<Character
                        key={npc.name}
                        name={npc.name}
                        description={npc.description}
                        assets={npc.assets}
                    />)
                )}

            </Grid>
        </React.Fragment>
    );
}

export default CardCanvas;