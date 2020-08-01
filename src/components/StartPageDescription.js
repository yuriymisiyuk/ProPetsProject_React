import React from "react";
import style from '../css_modules/startPageDescription.module.css';

class StartPageDescription extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className={`${style.description} container-fluid`}>
                <div className="row justify-content-center align-items-center">
                    <p>Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</p>
                </div>
            </section>
        );
    }
}

export default StartPageDescription;