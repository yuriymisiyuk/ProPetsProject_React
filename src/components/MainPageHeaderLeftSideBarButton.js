import React from "react";
import style from "../css_modules/MainPageHeaderLeftSideBarButton.module.css";

class MainPageHeaderLeftSideBarButton extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.menuOpen);
        return (
            <div className="containerButton col-2 col-md-1 d-lg-none" onClick={this.props.changeMenuState}>
                <div className={`${style.bar1} ${this.props.menuOpen ? style.changeBar1 : ""}`}/>
                <div className={`${style.bar2} ${this.props.menuOpen ? style.changeBar2 : ""}`}/>
                <div className={`${style.bar3} ${this.props.menuOpen ? style.changeBar3 : ""}`}/>
            </div>
        );
    }

}

export default MainPageHeaderLeftSideBarButton;