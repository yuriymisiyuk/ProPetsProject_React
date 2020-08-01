import React from "react";
import style from "../css_modules/mainPageAvatar.module.css";
import {connect} from "react-redux";
import userActions from "../actions/user.actions";
import {alertActions} from "../actions/alert.actions";

function MainPageAvatar(props) {

    function handleImageUpload(file){
        props.changeAvatar(file);
    }

    return (
        <figure className={`${style.figure} position-relative m-0`}>
            <img className={`${style.image} d-block rounded-circle`}
                 src={`${props.user.avatar}`} alt="monster avatar"/>
            <label className={`${style.label} ${props.label ? "" : "d-none"} position-absolute m-0`}>
                <img className="img-fluid" src={require("../images/camera.png")}/>
                <input className="d-none" type="file" name="file" onChange={(e) => handleImageUpload(e.target.files[0])} />
            </label>
        </figure>
    )

}

function mapState(state) {
    const { user } = state;
    return { user };
}

const actionCreators = {
    changeAvatar: userActions.changeAvatar,
};

export default connect(mapState, actionCreators)(MainPageAvatar);

