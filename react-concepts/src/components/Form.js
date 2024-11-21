import React from "react";
import { useState } from "react";

export default function Form(props) {
  let [text, setText] = useState("");

  let handleChange = (event) => {
    setText(event.target.value);
  };
  let handleUpperCaseConversion = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  let handleLowerCaseConversion = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  let handleRemoveSpaces = () => {
    let newText = text.split(" ").join("");
    setText(newText);
    props.showAlert("Spaces Removed", "success");
  };
  let handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed", "success");
  };
  let clearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  let copyText = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard", "success");
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "Light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "Dark" ? "#d1d1d1" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUpperCaseConversion}
          style={{
            backgroundColor: props.mode !== "Light" ? props.color : "",
            borderColor: props.mode !== "Light" ? props.color : "",
          }}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLowerCaseConversion}
          style={{
            backgroundColor: props.mode !== "Light" ? props.color : "",
            borderColor: props.mode !== "Light" ? props.color : "",
          }}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveSpaces}
          style={{
            backgroundColor: props.mode !== "Light" ? props.color : "",
            borderColor: props.mode !== "Light" ? props.color : "",
          }}
        >
          Remove Spaces
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleReverseText}
          style={{
            backgroundColor: props.mode !== "Light" ? props.color : "",
            borderColor: props.mode !== "Light" ? props.color : "",
          }}
        >
          Reverse Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={clearText}
          style={{
            backgroundColor: props.mode !== "Light" ? props.color : "",
            borderColor: props.mode !== "Light" ? props.color : "",
          }}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={copyText}
          style={{
            backgroundColor: props.mode !== "Light" ? props.color : "",
            borderColor: props.mode !== "Light" ? props.color : "",
          }}
        >
          Copy Text
        </button>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words {text.length} characters.
          </p>
          <p>{0.008 * text.split(" ").length} minutes read.</p>
          <h2>Preview</h2>
          <p>
            {text.length <= 0 ? "Enter the text above to see preview" : text}
          </p>
        </div>
      </div>
    </>
  );
}
