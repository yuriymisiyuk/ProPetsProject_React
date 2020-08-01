import React from "react";
import MainPageEditProfile from "./MainPageEditProfile";
import style from "../css_modules/mainPageManageProfile.module.css";
import MainPageUserActivities from "./MainPageUserActivities";
import HorizontalNavBarWithTwoLinks from "./HorizontalNavBarWithTwoLinks";
import {Route, Switch} from "react-router-dom";

class MainPageManageProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.linkProps = [{text: "My profile", path: "/edit"},
                          {text: "Activities", path: "/activities"}]
    }

    changeState = () => {
        this.setState({active: !this.state.active})
    };

    render() {
        return (
            <div className="container-fluid col-lg-8 col-xl-6 p-0 mx-0 mt-3 h-100">
                <div className="row mx-1 mx-md-2">
                    <p className={`${style.color} col-12`}><b>Your profile.</b> Change, edit and manage your data.</p>
                    <div className="container-fluid">
                        <HorizontalNavBarWithTwoLinks linkProps={this.linkProps}/>
                    </div>
                    <Switch>
                        <Route path="/edit" component={MainPageEditProfile}/>
                        <Route path="/activities" component={MainPageUserActivities}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainPageManageProfile;