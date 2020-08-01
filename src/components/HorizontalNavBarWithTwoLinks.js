import React from "react";
import NavLinkChangingOpacity from "./NavLinkChangingOpacity";

class HorizontalNavBarWithTwoLinks extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="row text-center">
                {this.props.linkProps.map((item, index) => <NavLinkChangingOpacity
                    key={index}
                    text={item.text}
                    path={item.path}
                />)}
            </nav>

        );
    }
};

export default HorizontalNavBarWithTwoLinks;