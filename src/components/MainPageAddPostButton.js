import React from "react";
import style from "../css_modules/mainPageAddPostButton.module.css"

class MainPageAddPostButton extends React.Component{

    render() {
        return (
            <div className="col-1 col-md-2 offset-2 offset-md-6 offset-lg-7  p-0 ">
                <button className={`${style.addPostButton} d-md-block text-center mr-2 border-0`}><span
                    className="d-inline-block float-left my-1">+</span><p className="d-md-inline-block d-none my-1 px-3">Add
                    new</p>
                </button>
            </div>
        );
    }
}
export default MainPageAddPostButton;