import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:32.085300, lng:34.781769}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;