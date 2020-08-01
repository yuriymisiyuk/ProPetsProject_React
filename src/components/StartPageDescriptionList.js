import React from "react";
import style from "../css_modules/startPageDescriptionList.module.css";

class StartPageDescriptionList extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section  className={`${style.descriptionList} container-fluid`}>
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <img src={require('../images/8347.png')} alt="dog_cat_parrot" className="img-fluid mt-3"/>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <h4 className="mt-5 pl-4">Here is collected everything that your pet needs:</h4>
                        <ul>
                            <li>professional veterinarian tips;</li>
                            <li>useful information about education and care;</li>
                            <li>fostering home search;</li>
                            <li>information about pet-sitting and walking service;</li>
                            <li>and of course, great communication with new friends in your social network!</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default StartPageDescriptionList;