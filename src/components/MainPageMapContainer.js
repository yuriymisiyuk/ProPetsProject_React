import React from "react";
import WrappedMap from "./WrappedMap";
// import style from "../css_modules/";

class MainPageMapContainer extends React.Component{
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div className={`${this.props.listView ? "d-none" : "col-12"} d-xl-block col-xl-5 vh-100`}>
                <WrappedMap
                    googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB1Fmp6VgifIQ4pk1PjktM7q2AR2VbEYMM"}
                    loadingElement = {<div style={{height: "100%"}}/>}
                    containerElement = {<div style={{height: "100%"}}/>}
                    mapElement = {<div style={{height: "100%"}}/>}
                />
            </div>
        );
    }
}

export default MainPageMapContainer;