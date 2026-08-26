import React, { useState } from "react";

export default function TextForm(props) {
    const handleUppercaseClick = () => {
        console.log("Uppercase button was clicked");
        let updatedText = text.toUpperCase();
        setText(updatedText);
    };

    const handleLowercaseClick = () => {
        console.log("Lowercase button was clicked");
        let updatedText = text.toLowerCase();
        setText(updatedText);
    }

    const handleOnChange = (event) => {
        console.log("On text change");
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter Text Here");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{ backgroundColor: props.mode === 'dark' ? '#1b1b67' : 'light', color: props.mode === 'dark' ? 'black' : 'white' }}
                    ></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
