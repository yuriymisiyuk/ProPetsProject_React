import React from "react";
import LoginPageSignIn from "./LoginPageSignIn";
import LoginPageSignUp from "./LoginPageSignUp";
import style from "../css_modules/loginPageWindow.module.css";
import Footer from "./Footer";
import StartLoginPageHeader from "./StartLoginPageHeader";
import {Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import HorizontalNavBarWithTwoLinks from "./HorizontalNavBarWithTwoLinks";

class LoginPageWindow extends React.Component{
    constructor(props) {
        super(props);
        this.linkProps = [{text: "Sign In", path: "/loginSignIn"},
            {text: "Sign Up", path: "/loginSignUp"}]
    }


    render() {
        return (
            <div className={`${style.loginPageWindow} row`}>
                <StartLoginPageHeader mobile={true}/>
                <div className="d-inline-block d-none d-md-block mt-3 ml-4 ">
                    <img src={require("../images/Group1.png")} alt="proPets"/>
                </div>
                <p className={`${style.welcome} col-12`}>Welcome! Please sign in / sign up to continue</p>
                <div className="container-fluid">
                    <HorizontalNavBarWithTwoLinks linkProps={this.linkProps}/>
                </div>
                <Switch>
                    <Route path="/loginSignIn" component={LoginPageSignIn}/>
                    <Route path="/loginSignUp" component={LoginPageSignUp}/>
                </Switch>
                <Footer logMainPage={true}/>
            </div>
        );
    }
}

export default LoginPageWindow;