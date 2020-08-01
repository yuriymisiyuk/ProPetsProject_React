import React from "react";
import StartPageMain from "./StartPageMain";
import StartPageDescription from "./StartPageDescription";
import StartPageDescriptionList from "./StartPageDescriptionList";
import StartPageComingSoon from "./StartPageComingSoon";
import Footer from "./Footer";
import StartLoginPageHeader from "./StartLoginPageHeader";

class StartPage extends React.Component{

    render() {
        return (
            <div className='m-0'>
                <StartLoginPageHeader/>
                <StartPageMain/>
                <StartPageDescription/>
                <StartPageDescriptionList/>
                <StartPageComingSoon/>
                <Footer/>
            </div>
        );
    }
}

export default StartPage;