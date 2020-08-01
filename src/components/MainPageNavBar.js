import React from "react";
import style from "../css_modules/mainPageNavBar.module.css";
import {NavLink} from "react-router-dom";
import MainPageLeftSideBarProfile from "./MainPageLeftSideBarProfile";

class MainPageNavBar extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-11 p-0  mt-5 ">
                    <NavLink
                        exact
                        activeClassName={`${style.navbar__link__active}`}
                        className={`d-block pl-5 ${style.navbar__link}`}
                        to="/"
                >
                    <img className="d-inline-block img-fluid mr-3" width="17" height="17"
                         src={require("../images/Menu/home3.png")}/>
                    Home
                </NavLink>
                <NavLink
                    activeClassName={`${style.navbar__link__active}`}
                    className={`d-block pl-5 ${style.navbar__link}`}
                    to="/lost"
                >
                    <img className="d-inline-block img-fluid mr-3" src={require("../images/Footer_Badges/lost_badge.png")}/>
                    Lost
                </NavLink>
                <NavLink
                    activeClassName={`${style.navbar__link__active}`}
                    className={`d-block pl-5 ${style.navbar__link}`}
                    to="/found"
                >
                    <img className="d-inline-block img-fluid mr-3" src={require("../images/Footer_Badges/found_badge.png")}/>
                    Found
                </NavLink>
                <NavLink
                    activeClassName={`${style.navbar__link__active}`}
                    className={`d-block pl-5 ${style.navbar__link}`}
                    to="/services"
                >
                    <img className="d-inline-block img-fluid mr-3" width="17" height="17"
                         src={require("../images/Menu/services-icon-white-png.png")}/>
                    Services
                </NavLink>
                <NavLink
                    activeClassName={`${style.navbar__link__active}`}
                    className={`d-block pl-5 mb-4 ${style.navbar__link}`}
                    to="/favorites"
                >
                    <img className="d-inline-block img-fluid mr-3" width="17" height="17"
                         src={require("../images/Menu/White_Simple_Favorites_22350.png")}/>
                    Favorites
                </NavLink>
                <MainPageLeftSideBarProfile/>
            </nav>
            </div>
        </div>
        );
    }
};

export default MainPageNavBar;