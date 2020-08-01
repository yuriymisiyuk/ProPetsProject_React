// Editable.js
import React, {useEffect, useState} from "react";

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
let Editable = ({
                      childRef,
                      text,
                      type,
                      placeholder,
                      children,
                      ...props
                  }) => {
    // Manage the state whether to show the label or the input box. By default, label will be shown.
// Exercise: It can be made dynamic by accepting initial state as props outside the component
    const [isEditing, setEditing] = useState(false);

// Event handler while pressing any key while editing
    const handleKeyDown = (event, type) => {
        // Handle when key is pressed
    };

    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
        }
    }, [isEditing, childRef]);
    /*
    - It will display a label is `isEditing` is false
    - It will display the children (input or textarea) if `isEditing` is true
    - when input `onBlur`, we will set the default non edit mode
    Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
    */
    return (
        <section {...props} className="d-flex align-items-center">
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                >
                    {children}
                </div>
            ) : (
                <div
                    onClick={() => setEditing(true)}
                >
                    <span className="mr-2">
                        {text || placeholder || "Editable content"}
                    </span>
                    <img src={require("../images/Edit_Icon_16x16.png")}/>
                </div>
            )}
        </section>
    );
};

export default Editable;