import React from "react";
import style from "../css_modules/mainPageLeftSideBar.module.css";
import MainPageNavBar from "./MainPageNavBar";
import MainPageLeftSideBarProfile from "./MainPageLeftSideBarProfile";
import MainPageLogOut from "./MainPageLogOut";

class MainPageLeftSideBar extends React.Component{
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className={`${style.leftFixed} ${this.props.menuOpen ? style.opened : style.closed} col-lg-3 p-0 mx-0 row `}>
                <MainPageNavBar/>
                <MainPageLogOut/>
            </div>
        );
    }

}

export default MainPageLeftSideBar;