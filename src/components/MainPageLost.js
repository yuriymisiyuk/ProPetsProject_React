import React from "react";
import style from "../css_modules/mainPageLost.module.css";
import MainPageLostPostsTape from "./MainPageLostPostsTape";
import MainPageSearchInputs from "./MainPageSearchInputs";
import MainPageMapContainer from "./MainPageMapContainer";

class MainPageLost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listView : true
        }
    }

    changeListView = () => {
        this.setState({
            listView : !this.state.listView
        })
    }

    render() {
        console.log("Im in Main Page Lost");
        console.log("list view" + this.state.listView);
        return (

            <div className={` col-lg-8 col-xl-9 p-0 mx-0 mt-3 row`}>
                    <MainPageSearchInputs listView={this.state.listView} changeListView={this.changeListView}/>

                    <div className="col-12 row m-0 p-0 ">
                        <MainPageLostPostsTape listView={this.state.listView}/>
                        <MainPageMapContainer listView={this.state.listView}/>
                    </div>
                </div>
        );
    }
}

export default MainPageLost;