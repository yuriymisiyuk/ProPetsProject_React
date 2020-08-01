import React from "react";
import style from "../css_modules/mainPageSearchInputs.module.css";
import MainPageListMapViewButton from "./MainPageListMapViewButton";


class MainPageSearchInputs extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        console.log("Search Inputs this.props.listView" + this.props.listView);
        return (
                <div className={`${style.style_input}  col-12 row  ml-3 p-0 mb-3 small`}>
                    <input type="text" id="first"
                           className="d-block justify-content-center col-11 col-md-3 col-xl-2 mb-2 mr-md-1 mr-xl-3 ml-xl-3"
                           placeholder="Type"
                    />
                    <input type="text" id="second"
                           className="d-block col-11 col-md-3 col-xl-2 mb-2 mr-md-1 mr-xl-3"
                           placeholder="Breed"
                    />
                    <input type="text" id="third"
                           className="d-block col-11 col-md-5 col-xl-3 mb-2 mr-xl-3"
                           placeholder="Additional features"
                    />
                    <input type="text" id="fourth"
                           className="d-block col-11 col-md-4 mb-2 col-xl-2 ml-md-1"
                           placeholder="Location"
                    />
                    <MainPageListMapViewButton listView={this.props.listView} changeListView={this.props.changeListView}/>
                </div>
        );
    }
}

export default MainPageSearchInputs;