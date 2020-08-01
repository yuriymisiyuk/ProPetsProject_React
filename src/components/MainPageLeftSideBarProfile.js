import React from "react";
import style from "../css_modules/mainPageLeftSideBarProfile.module.css";
import style2 from "../css_modules/mainPageNavBar.module.css";
import {connect} from "react-redux";
import userActions from "../actions/user.actions";
import {NavLink} from "react-router-dom";
import MainPageAvatar from "./MainPageAvatar";

class MainPageLeftSideBarProfile extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        let {user} = this.props;
        return (
            <NavLink
                activeClassName={`${style2.navbar__link__active}`}
                className={`d-block  border-top py-1 mt-2 ${style2.navbar__link}`}
                to="/edit"
            >
                <div className="row align-items-center w-100">
                    <div className="offset-3 col-3 col-lg-2 p-0 mb-0">
                        <MainPageAvatar/>
                    </div>
                    <p className="col-6 small mb-0 ">{user.name}</p>
                </div>
            </NavLink>


            // <NavLink>
            //     {/*<hr className={`${style.profile} d-block col-9`}/>*/}
            //     <img className="col-6 col-lg-4 p-0 rounded-circle" height="60px"  src={`${user.avatar}`} alt="monster avatar"/>
            //     <p className="col-6 col-lg-8 text-white">{user.name}</p>
            //     {/*<hr className="col-9"/>*/}
            // </NavLink>
        // <button onClick={() => this.props.logout()} className="offset-3 mt-3 bg-transparent border-0 text-white">Log out</button>


        );
    }
}

function mapState(state) {
    const { user } = state;
    return { user };
}

const actionCreators = {
    logout : userActions.logout
}

export default connect(mapState, actionCreators)(MainPageLeftSideBarProfile);