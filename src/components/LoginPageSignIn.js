import React from "react";
import style from "../css_modules/loginPageSignIn.module.css";
import userActions from "../actions/user.actions";
import {connect} from "react-redux";
import {Spinner} from "react-bootstrap";
import {history} from "../helpers/history";
import {alertActions} from "../actions/alert.actions";

class LoginPageSignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit= (event) =>{
        event.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }


    render() {
        const { request, alert } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div className="container-fluid m-0">
                <div className="row my-4">
                    <form id="logForm" className="col-12 col-md-6 pr-1 m-0 row" onSubmit={this.handleSubmit}>
                        <label className="col-3 m-0" htmlFor="email">Email:</label>
                        <input className="col-9" type="text" id="email" name="email" value={email} onChange={this.handleChange}/><br/>
                        {submitted && !email &&
                        <p className="col-12 text-danger small p-0 m-0 text-center">Email is required</p>
                        }
                        <label className="col-3 m-0 p-0" htmlFor="password" >Password:</label>
                        <input className="col-9" type="text" id="password" name="password" value={password} onChange={this.handleChange}/><br/>
                        {submitted && !password &&
                        <p className="col-12 text-danger small p-0 m-0 text-center">Password is required</p>
                        }
                    </form>
                    <a href="#" target="_blank" className={`${style.ref} d-block col-12`}>Forgot Password?</a>
                    {
                       alert.message && <p className="text-danger small pl-3 mt-3 text-center">{alert.message}</p>
                    }
                </div>
                <hr className={`${style.line} col-11 d-block w-auto mt-0`}/>
                <div className="row p-0 ">
                    <p className={`${style.submitInfo} col-12 col-md-6 small`}>By clicking “Submit”, you agree to us processing your
                        information in
                        accordance with these terms.
                    </p>

                    <div className="col-12 col-md-6 m-0 p-0 row justify-content-around align-items-center">
                        <button className={`${style.cancel} d-block col-10  col-md-4`}
                                onClick={()=>{history.push("/start")}}>
                            Cancel
                        </button>
                        <button className={`${style.submit} d-block col-10  col-md-4 my-3 my-md-0`}
                                form="logForm"
                                type="submit">{
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
    login: userActions.login,
    logout: userActions.logout,
    clearAlerts: alertActions.clear
};
export default connect(mapState, actionCreators)(LoginPageSignIn);