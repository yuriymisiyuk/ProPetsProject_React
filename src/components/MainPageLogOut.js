import React from "react";
import {connect} from "react-redux";
import userActions from "../actions/user.actions";

class MainPageLogOut extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 m-0 p-0 border-bottom row justify-content-center ">
                        <button onClick={() => this.props.logout()}
                                className="d-block bg-transparent border-0 text-white"
                        >Log out
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}



const actionCreators = {
    logout : userActions.logout
}

export default connect(null, actionCreators)(MainPageLogOut);