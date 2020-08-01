import React, {useState} from "react";
import style from "../css_modules/MainPageListMapViewButton.module.css";

function MainPageListMapViewButton(props){


        return (

                <button onClick={() => props.changeListView()} className={`${style.button} img-fluid d-block d-none col-11 offset-md-3 col-md-4 d-xl-none`}>
                    <img className="float-left"
                     src={require(`../images/Buttons/${props.listView ? "map_icon.png" : "list_icon.png"}`)} alt={""}/>
                    {props.listView ? "Map View" : "List View"}
                </button>
        );


}

export default MainPageListMapViewButton;