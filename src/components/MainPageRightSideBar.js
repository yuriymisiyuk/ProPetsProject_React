import React from "react";
import style from "../css_modules/MainPageRightSideBar.module.css";

class MainPageRightSideBar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={`${style.background} d-none d-lg-block col-lg-1 col-xl-3 p-0`}>

            </div>
        );
    }

}

export default MainPageRightSideBar;