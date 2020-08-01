import React from "react";
import style from "../css_modules/navLinkChangingOpacity.module.css";
import {NavLink} from "react-router-dom";

class NavLinkChangingOpacity extends React.Component{

    constructor(props) {
        super(props);

    }


    render() {
        return (
                <NavLink
                    exact
                    activeClassName={`${style.navbar__link__active}`}
                    className={`d-inline-block col-6 ${style.navbar__link}`}
                    to={this.props.path}
                >
                    {this.props.text}
                </NavLink>
        );
    }
};

export default NavLinkChangingOpacity;