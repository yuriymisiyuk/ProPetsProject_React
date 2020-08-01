import React, {useEffect, useState} from 'react'
import style from "../css_modules/mainPageHeader.module.css";
import MainPageHeaderLeftSideBarButton from "./MainPageHeaderLeftSideBarButton";
import MainPageListMapViewButton from "./MainPageListMapViewButton";
import MainPageHeaderLostFoundButtons from "./MainPageHeaderLostFoundButtons";
import MainPageHeaderArrowButton from "./MainPageHeaderArrowButton";
import MainPageAddPostButton from "./MainPageAddPostButton";
import {history} from "../helpers/history";
import {Route, Switch, useHistory} from 'react-router-dom'
import MainPageHeaderLostFoundArrayButtons from "./MainPageHeaderLostFoundArrowButtons";


const MainPageHeader2 = (props) => {
    console.log("MainPageHeader2"+ props.changeLostFoundButtonsState);

    return (
        <header className="container-fluid fixed-top">
            <div className="row align-items-center h-100">
                <MainPageHeaderLeftSideBarButton changeMenuState={props.changeMenuState} menuOpen={props.menuOpen}/>
                <figure className="col-6 col-md-3 offset-lg-3  m-0 pr-0">
                    <img className={`${style.imgFilter} img-fluid`} src={require("../images/Group1.png")} alt="ProPets"/>
                </figure>
                <Switch>
                    <Route exact path="/" component={MainPageAddPostButton}/>
                    <Route path={["/lost", "/found"]} component={() => <MainPageHeaderLostFoundArrayButtons openButtons= {props.openButtons}
                                                                                                            changeLostFoundButtonsState={props.changeLostFoundButtonsState}/>}/>
                </Switch>
            </div>
        </header>
    );


}

export default MainPageHeader2;