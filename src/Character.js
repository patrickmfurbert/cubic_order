import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import d20 from './assets/d20.png';

function Character({ name, description, assets }) {
    return (
            <Grid>
                <Card sx={{ 
                    maxWidth:  300, 
                    minHeight: 330,
                }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="100"
                            src={d20}
                            alt="green iguana"
                            sx={{ objectFit: "contain" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    );
}
export default Character;