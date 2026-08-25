import React, { useState } from "react";

export default function TextForm(props) {
    const handleUppercaseClick = () => {
        console.log("Uppercase button was clicked");
        let updatedText = text.toUpperCase();
        setText(updatedText);
    }

    const handleOnChange = (event) => {
        console.log("On text change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        </div>
    );
}
