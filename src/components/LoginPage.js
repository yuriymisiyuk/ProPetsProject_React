import React from "react";
import LoginPageWindow from "./LoginPageWindow";
import style from "../css_modules/loginPage.module.css";
import BackdropFilter from "react-backdrop-filter";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={`${style.backgroundImage} container-fluid p-0`}>
                <BackdropFilter className="h-100 container-fluid d-flex align-items-center justify-content-center p-0" filter={"blur(30px)"} >
                        <LoginPageWindow/>
                </BackdropFilter>
            </div>
        );
    }
}

export default LoginPage;