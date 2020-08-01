import React from "react";
// import style from "../css_modules/";

class MainPageLostPostsTape extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
    }


    render() {
        return (
            <div className={`${this.props.listView ? "col-12" : "d-none"} col-xl-7 bg-info vh-100`}>
                {/*<Button*/}
                {/*    onClick={() => this.setState({open : !this.state.open})}*/}

                {/*>*/}
                {/*    click*/}
                {/*</Button>*/}
                {/*<Collapse in={this.state.open}>*/}
                {/*    <div >*/}
                {/*        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus*/}
                {/*        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer*/}
                {/*        labore wes anderson cred nesciunt sapiente ea proident.*/}
                {/*    </div>*/}
                {/*</Collapse>*/}
            </div>
        );
    }
}

export default MainPageLostPostsTape;