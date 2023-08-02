import React from 'react';
import CardCanvas from './CardCanvas';

const npcs = [
    {
        name: 'Ru',
        description: 'Governor of Civitas Peccati, CEO and President of Rus Dragon Ladies',
        assets: null,
    },
    {
        name: 'Wednesday Westwood',
        description: 'Wednesday Westwood is a mysterious and enigmatic figure, known throughout the mystical realms as a powerful necromancer. Her reputation precedes her, as she is rumored to possess unparalleled abilities in the art of necromancy, the practice of communicating with and manipulating the spirits of the dead.',
        assets: null,
    },
]

function RusDragonLadies() {

    return (
        <React.Fragment>
            <CardCanvas npcs={npcs}/>
        </React.Fragment>
    );
}

export default RusDragonLadies