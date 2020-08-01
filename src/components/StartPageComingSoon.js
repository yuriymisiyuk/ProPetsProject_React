import React from "react";
import style from '../css_modules/startPageComingSoon.module.css';

class StartPageComingSoon extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className={`${style.comingSoon} container-fluid`}>
                <div className="row align-items-center">
                    <div className="col-xl-5 col-md-6 col-12">
                        <h1 className={`${style.soon} mx-auto`}>Coming soon</h1>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <p className={`${style.planning}`}>We are planing to open a new service, where your cats and dogs can find their
                            love!</p>
                    </div>
                    <div className="col-xl-2 offset-1">
                        <p className={`${style.love} d-xl-flex d-none  align-items-center justify-content-center`}>Love</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default StartPageComingSoon;