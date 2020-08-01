import React from "react";
import style from "../css_modules/MainPageHeaderLostFoundButtons.module.css";


class MainPageHeaderLostFoundButtons extends React.Component{


    render() {
        return (
            <div className={` ${this.props.style === "header" ? 
                            "d-none d-md-block col-md-6 col-lg-5 col-xl-4 offset-1 offset-md-2 offset-lg-4 offset-xl-5  p-0" :
                            "d-flex d-md-none mt-4 w-100 justify-content-around"}`}>

                <button className={`${style.button} d-inline-block pt-1 pb-2 bg-warning`}><img className="d-inline-block" src={require("../images/Footer_Badges/lost_badge.png")}/>
                    <span className="d-inline-block px-3 ">I lost my pet</span>
                </button>

                <button className={`${style.button} d-inline-block pt-1 pb-2 ml-md-3`}><img className="d-inline-block" src={require("../images/Footer_Badges/found_badge.png")}/>
                    <span className="d-inline-block px-3 ">I found a pet</span>
                </button>
            </div>
        );
    }
}

export default MainPageHeaderLostFoundButtons;