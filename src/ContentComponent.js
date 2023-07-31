import React from 'react';
import TownMap from './TownMap';



function ContentComponent({ contentComponent }){

    const renderSelectedContentComponent = () => {
        switch(contentComponent) {
            case "TownMap":
                return <TownMap />;
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