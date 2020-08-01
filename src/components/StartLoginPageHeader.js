import React from "react";
import style from '../css_modules/StartLoginPageHeader.module.css';
import {history} from "../helpers/history";

class StartLoginPageHeader extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header className={`container-fluid ${this.props.mobile ?  "d-md-none" : '' } mb-2`}>
                <div className={`${style.startHeader} row align-items-center`}>
                    <div className="col-md-2">
                        <img className="d-block" src={require("../images/Group1.png")}  alt="ProPets"/>
                    </div>
                    <div className="col-md-2 offset-8">
                        <button onClick={() => {history.push("/loginSignIn")}} className="d-md-block d-none">Sign In</button>
                    </div>
                </div>
            </header>
        );
    }

}

export default StartLoginPageHeader;