import React from 'react';
import TownMap from './TownMap';
import RusDragonLadies from './RusDragonLadies';



function ContentComponent({ contentComponent }){

    const renderSelectedContentComponent = () => {
        switch(contentComponent) {
            case "TownMap":
                return <TownMap />;
            case "Rus Dragon Ladies":
                return <RusDragonLadies />;
            default:
                return null;
        }
    }

    return(
        <React.Fragment>
            {renderSelectedContentComponent()}
        </React.Fragment>
    );
}

export default ContentComponent;