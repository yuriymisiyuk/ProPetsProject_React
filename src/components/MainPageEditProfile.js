import React, {createRef} from "react";
import userActions from "../actions/user.actions";
import style from "../css_modules/mainPageEditProfile.module.css";
import {connect} from "react-redux";
import {Spinner} from "react-bootstrap";
import Editable from "./Editable";
import MainPageAvatar from "./MainPageAvatar";
import {alertActions} from "../actions/alert.actions";
import {history} from "../helpers/history";

class MainPageEditProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            phone: this.props.user.phone,
            submitted: false
        };
        this.inputRef = createRef();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit= (event) =>{
        event.preventDefault();
        this.setState({ submitted: true });
        const { name, phone } = this.state;
        const avatar = this.props.user.avatar;
        if (name && phone) {
            this.props.editUser({name, phone, avatar});
        }
    }



    componentWillUnmount() {
        this.props.clearAlerts();
    }

    render() {
        const { request, alert, user } = this.props;
        const { name, email, phone, submitted } = this.state;
        return (
            <div className={` container-fluid m-0 p-0`}>
                <div className={`${style.border} row mx-0`}>
                    <div className="offset-1 col-1 mt-2 p-0">
                        <MainPageAvatar label={true} handleImageUpload={this.handleImageUpload}/>
                    </div>
                    <div className={`${style.color} ${style.font} col-9 d-flex align-items-center`}>
                        <Editable
                            text={name} placeholder="Change a name" childRef={this.inputRef}
                        >
                            <input ref={this.inputRef} type="text" name="name" placeholder="Change a name" value={name}
                                   onChange={this.handleChange}
                            />
                        </Editable>
                    </div>
                    <form id="logForm" className="col-12 col-md-8 pr-1 mt-3 mb-5 row" onSubmit={this.handleSubmit}>
                        <label className="col-3 m-0 text-right" htmlFor="phone" >Phone:</label>
                        <input className="col-9 small text-black-50 p-0" type="text" id="phone" name="phone" value={phone} onChange={this.handleChange}/><br/>
                        {submitted && !phone &&
                        <p className="col-12 text-danger small p-0 m-0 text-center ">Phone is required</p>
                        }
                    </form>
                </div>

                    <div className="col-12 offset-md-6 col-md-6 mt-4 p-0 row justify-content-around align-items-center">
                        <button onClick={() => {history.push("/")}} className={`${style.cancel} d-block offset-2 col-10 offset-md-0 col-md-4 pb-1`}>Cancel</button>
                        <button className={`${style.save} d-block offset-2 col-10 offset-md-0 col-md-5 my-3 my-md-0 pb-1 px-0`}
                                form="logForm"
                                type="submit">{
                            request ? <Spinner animation="border" size="sm"/> : <img className="float-left mt-1" src={require("../images/Footer_Badges/found_badge.png")}/>
                        }

                            Save changes
                        </button>
                    </div>
                {
                    alert.message && <p className={`pl-3 mt-3 text-center ${alert.type == "alert-success" ? "text-info" : "text-danger"}`} >{alert.message}</p>
                }
                </div>
        );
    }
}

function mapState(state) {
    const {user, request, alert } = state;
    return { request, alert, user };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    changeAvatar: userActions.changeAvatar,
    editUser: userActions.editUser,
    clearAlerts: alertActions.clear
};
export default connect(mapState, actionCreators)(MainPageEditProfile);