import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };

  const handleReverseClick = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText = newText + text.charAt(i);
    }
    setText(newText);
    props.showAlert("Converted to reverse!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear text!", "success");
  };

  const hanldleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={hanldleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper-Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lower-Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Convert to Reverse
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
