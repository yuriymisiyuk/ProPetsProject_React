import React from "react";
import MainPageLeftSideBar from "./MainPageLeftSideBar";
import MainPageHeader2 from "./MainPageHeader2";
import style from "../css_modules/mainPageCentralContainer.module.css";
import {Route, Switch} from "react-router-dom";
import MainPageHome from "./MainPageHome";
import MainPageLost from "./MainPageLost";
import MainPageRightSideBar from "./MainPageRightSideBar";
import MainPageHeaderLostFoundButtons from "./MainPageHeaderLostFoundButtons";
import Footer from "./Footer";
import MainPageManageProfile from "./MainPageManageProfile";

class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            menuOpen : false,
            openButtons: false
        };

    }

    changeLostFoundButtonsState = () => {
        this.setState({
            openButtons: !this.state.openButtons
        })
    }

    changeMenuState = () => {
        this.setState({
            menuOpen : !this.state.menuOpen
        })
    };



    render() {
        console.log("Main Page:");
        console.log(this.state.openButtons);
        return (
            <div className={`${style.marginTop} container-fluid p-0 vh-100`}>
                <div className="row m-0 h-100">
                    <MainPageHeader2
                        menuOpen={this.state.menuOpen}
                        changeMenuState={this.changeMenuState}
                        openButtons= {this.state.openButtons}
                        changeLostFoundButtonsState={this.changeLostFoundButtonsState}
                    />
                    <MainPageLeftSideBar menuOpen={this.state.menuOpen}/>
                    {
                       this.state.openButtons && <MainPageHeaderLostFoundButtons/>
                    }

                    {/*<MainPageSwitch page={this.state.page}/>*/}
                    <Switch>
                        {console.log("MainPageCentralContainer Switch")}
                        <Route exact path="/" component={MainPageHome}/>
                        <Route exact path="/lost" component={MainPageLost}/>
                        <Route exact path={["/edit", "/activities"]} component={MainPageManageProfile}/>
                    </Switch>
                    <MainPageRightSideBar/>
                    <Footer logMainPage={true}/>
                </div>
            </div>
        );
    }

}

export default MainPage;