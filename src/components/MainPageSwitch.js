import React from "react";
import MainPageHome from "./MainPageHome";
import MainPageLost from "./MainPageLost";

class MainPageSwitch extends React.Component{

    switchPage = () => {
        switch (this.props.page) {
            case  "/home" :
                return <MainPageHome/>
            case "/lost" :
                return <MainPageLost/>
            default :
                return <MainPageHome/>
        }
    }

    render() {
        return this.switchPage();

    }


}

export default MainPageSwitch;