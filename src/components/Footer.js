import React from "react";
import style from "../css_modules/footer.module.css";

class Footer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer className={`container-fluid col-12 ${this.props.logMainPage ? "d-md-none" : ""}`}>
                <div className={`${style.main_footer} row align-items-center`}>
                    <div className="col-md-6 row">
                        <div className="col-md-12 col-lg-6 d-flex align-items-center">
                            <img className="img-fluid mt-3" src={require("../images/Group87@2x.png")}/>
                        </div>
                        <div className="col-md-12 col-lg-6 row">
                            <ul className="col-12 row">
                                <li className="col-3"><img className="img-fluid" src={require("../images/facebook.svg")}/></li>
                                <li className="col-3"><img className="img-fluid" src={require("../images/instagram.svg")}/></li>
                            </ul>
                            <p className="ml-3">1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
                        </div>
                    </div>

                    <div className="col-md-6 row">
                        <div className="col-md-6">
                            <ul className={`${style.listActivities} p-0`}>
                                <li><img className="mr-3" src={require("../images/Footer_Badges/lost_badge.png")}/>Lost</li>
                                <li><img className="mr-3" src={require("../images/Footer_Badges/found_badge.png")}/>Found</li>
                                <li><img className="mr-3" src={require("../images/Footer_Badges/vetHelp_badge.png")}/>VetHelp</li>
                            </ul>
                        </div>
                        <div className={`${style.listActivities} col-md-6`}>
                            <ul className="p-0">
                                <li><img className="mr-3" src={require("../images/Footer_Badges/hotels_badge.png")}/>Hotels</li>
                                <li><img className="mr-3" src={require("../images/Footer_Badges/walking_badge.png")}/>Walking</li>
                                <li><img className="mr-3" src={require("../images/Footer_Badges/fostering_badge.png")}/>Fostering</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;