import React from "react";
import style from "../css_modules/loginPageSignUp.module.css";
import userActions from "../actions/user.actions";
import {connect} from "react-redux";
import {Spinner} from "react-bootstrap";
import {alertActions} from "../actions/alert.actions";
import {history} from "../helpers/history";

class LoginPageSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                password2: ''
            },
            submitted: false,
            textDangerPass1: false,
            textDangerPass2: false
        };
    }

    validation = (str) => {
        let regExp = /(?=.*([\d!#\$%&\?@]))(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return  regExp.test(str);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit= (event) =>{
        event.preventDefault();

        this.setState({ submitted: true,
                            textDangerPass1: false,
                            textDangerPass2: false});
        const { name, email, password, password2 } = this.state.user;
        if (!(password && this.validation(password))){
                this.setState({textDangerPass1: true});
        }
        else if (password !== password2){
                this.setState({textDangerPass2: true});
        }
        else if (name && email && password && password2) {
            this.props.register({name,
                                email,
                                password});
        }
    }


    render() {
        const { request, alert  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="container-fluid m-0">
                <div className="row mt-4">
                    <form id="regForm" className="col-12 col-md-6 pr-1" onSubmit={this.handleSubmit}>
                        <label className="d-inline-block col-3 m-0" htmlFor="name">Name:</label>
                        <input className="d-inline-block col-9" type="text" name="name" value={user.name} onChange={this.handleChange}/><br/>
                        {submitted && !user.name &&
                        <p className="col-12 text-danger small p-0 m-0 text-center">Name is required</p>
                        }
                        <label className="d-inline-block col-3 m-0" htmlFor="email">Email:</label>
                        <input className="d-inline-block col-9" type="text" name="email" value={user.email} onChange={this.handleChange}/><br/>
                        {submitted && !user.email &&
                        <p className="col-12 text-danger small p-0 m-0 text-center">Email is required</p>
                        }
                        <label className="d-inline-block col-3 m-0 p-0" htmlFor="password">Password:</label>
                        <input className="d-inline-block col-9" type="text" name="password" value={user.password} onChange={this.handleChange}/><br/>
                        {submitted && !user.password &&
                        <p className="col-12 text-danger small p-0 m-0 text-center">Password is required</p>
                        }
                        <label className="d-inline-block col-3 m-0 p-0" htmlFor="password2">Password:</label>
                        <input className="d-inline-block col-9" type="text" name="password2" value={user.password2} onChange={this.handleChange}/><br/>
                        {submitted && !user.password2 &&
                        <p className="col-12 text-danger small p-0 m-0 text-center">Password is required</p>
                        }
                        {
                         alert.message && <p className="col-12 text-danger small pl-3 mt-3 text-center">{alert.message}</p>
                        }
                    </form>
                    <div className={`${style.passValidation} col-12 col-md-6 m-0 row small`}>
                        <p className={`col-12 pt-3 ${this.state.textDangerPass1 ? "text-danger" : ""}`}>Password must have at least 8 characters with at least one Capital
                            letter, at least
                            one lower case letter and at least one number or special character.</p>
                        <p className={`col-12 ${this.state.textDangerPass2 ? "text-danger" : ""}`}>Please re-enter your password</p>
                    </div>
                </div>
                <hr className={`${style.line} col-md-11 d-block d-none w-auto mt-4`}/>
                <div className="row p-0 ">
                    <p className={`${style.submitInfo} col-12 col-md-6 small`}>By clicking “Submit”, you agree to us processing your
                        information in
                        accordance with these terms.</p>
                    <div className="col-12 col-md-6 m-0 p-0 row justify-content-around align-items-center">
                        <button className={`${style.cancel} d-block col-10  col-md-4`}
                                onClick={()=>{history.push("/start")}}>Cancel</button>
                        <button className={`${style.submit} d-block col-10  col-md-4 my-3 my-md-0`}
                                form="regForm"
                                type="submit">
                            {
                                request ? <Spinner animation="border" size="sm"/> : <img className="float-left" src={require("../images/Footer_Badges/found_badge.png")}/>
                            }
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { request, alert } = state;
    return { request,alert };
}

const actionCreators = {
    register: userActions.register,
    clearAlerts: alertActions.clear
}

export default connect(mapState, actionCreators)(LoginPageSignUp);
