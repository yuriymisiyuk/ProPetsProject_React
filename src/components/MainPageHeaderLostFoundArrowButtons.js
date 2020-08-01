import React from "react";
import MainPageHeaderLostFoundButtons from "./MainPageHeaderLostFoundButtons";
import MainPageHeaderArrowButton from "./MainPageHeaderArrowButton";

const MainPageHeaderLostFoundArrowButtons = (props) => {
    console.log("MainPageHeaderLostFoundArrayButtons:");
    console.log(props.changeLostFoundButtonsState);
    return (<>
        <MainPageHeaderLostFoundButtons style={"header"}/>
        <MainPageHeaderArrowButton openButtons= {props.openButtons}
                                   changeLostFoundButtonsState={props.changeLostFoundButtonsState}/>
        </>)
}

export default MainPageHeaderLostFoundArrowButtons;