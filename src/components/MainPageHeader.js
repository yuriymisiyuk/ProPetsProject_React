import React, {useEffect, useState} from 'react'
import style from "../css_modules/mainPageHeader.module.css";
import MainPageHeaderLeftSideBarButton from "./MainPageHeaderLeftSideBarButton";
import MainPageListMapViewButton from "./MainPageListMapViewButton";
import MainPageHeaderLostFoundButtons from "./MainPageHeaderLostFoundButtons";
import MainPageHeaderArrowButton from "./MainPageHeaderArrowButton";
import MainPageAddPostButton from "./MainPageAddPostButton";
import {history} from "../helpers/history";
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'
import MainPageHeaderLostFoundArrowButtons from "./MainPageHeaderLostFoundArrowButtons";


class MainPageHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page : ""
        }
        history.listen((location,state) =>{
            console.log("history: " + location.pathname);
        })
    }



    render() {
            return (
                <header className="container-fluid fixed-top">
                    <div className="row align-items-center h-100">
                        <MainPageHeaderLeftSideBarButton changeMenuState={this.props.changeMenuState} menuOpen={this.props.menuOpen}/>
                        <figure className="col-6 col-md-3 offset-lg-3  m-0 pr-0">
                            <img className={`${style.imgFilter} img-fluid`} src={require("../images/Group1.png")} alt="ProPets"/>
                        </figure>

                        <Router history={history}>
                            <Switch>
                                <Route exact path="/" component={MainPageAddPostButton}/>
                                <Route path={["/lost", "/found"]} component={MainPageHeaderLostFoundArrowButtons}/>

                            </Switch>
                        </Router>
                        {/*{page === "/" && <MainPageAddPostButton/>}*/}
                        {/*{(page === "/lost" ||  page === "/found") &&*/}
                        {/*<>*/}
                        {/*    <MainPageHeaderLostFoundButtons/>*/}
                        {/*    <MainPageHeaderArrowButton/>*/}
                        {/*</>}*/}
                    </div>
                </header>
            );

        }



}

export default MainPageHeader;