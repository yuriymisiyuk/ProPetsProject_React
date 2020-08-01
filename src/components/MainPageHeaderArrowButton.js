import React from "react";

function MainPageHeaderArrowButton(props){

    console.log("MainPageHeaderArrowButton");
    console.log(props.changeLostFoundButtonsState);
        return (
            <button onClick={() => props.changeLostFoundButtonsState()}
                    className="d-block col-1 offset-1 d-md-none bg-transparent shadow-none border-0">
                    <img className="d-block "
                         style={{height: "20px", width: "20px"}}
                         src={require(`../images/Buttons/${props.openButtons ? "arrow_up.jpg" : "arrow_down.png"}`)}/>
            </button>
        );

}

export default MainPageHeaderArrowButton;