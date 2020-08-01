import React from "react";
import style from '../css_modules/startPageMain.module.css';
import {history} from "../helpers/history";

class StartPageMain extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonLostText : 'I lost my pet!',
            buttonFoundText : 'I found a pet!'
        };
    }

    render() {
        return (
            <main className="container-fluid d-flex p-0">
                <div className="m-0 p-0 row align-items-end">
                    <div className="col-12 row align-self-start">
                        <p className={`${style.main_title} flex-wrap  col-12 col-md-6 my-0`}>
                            Welcome to your <span>pawfessional</span> community
                        </p>
                    </div>
                    <div className="col-12 p-0 m-0 row">
                        <div className="col-8 p-0 m-0 row">
                            <button onMouseEnter={() => {this.setState({buttonLostText : 'Click to find!'})}}
                                    onMouseLeave={() => {this.setState({buttonLostText : 'I lost my pet!'})}}
                                    className={`${style.lost} d-block col-12`}
                                    onClick={() => {history.push("/loginSignIn")}}
                            >
                                {this.state.buttonLostText}
                                <img src={require('../images/Group11.png')} className="d-inline-block m-0" />
                            </button>
                            <button onMouseEnter={() => {this.setState({buttonFoundText : 'What to do?'})}}
                                    onMouseLeave={() => {this.setState({buttonFoundText : 'I found a pet!'})}}
                                    className={`${style.found} d-block col-10`}
                                    onClick={() => {history.push("/loginSignIn")}}
                            >
                                {this.state.buttonFoundText}
                            </button>
                        </div>
                        <p className={`${style.join} col-12 mt-3`}>I’m okay, just want to <a href=''><b>join</b></a> the pawsome community!</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default StartPageMain;