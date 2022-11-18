import React, { useState } from "react";

export default function TextForm(props) {
  
  

  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearText = () => {
    let newText = text.value;
    newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied!','success')
  }
  const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")
  }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(21 30 60)" : "white",
               color: props.mode === "dark" ? "white" : "black"
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button
        disabled={text.length===0}
          className="btn btn-primary  my-2 mx-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
        disabled={text.length===0}
          className="btn btn-primary  my-2 mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
        disabled={text.length===0}
          className="btn btn-primary  my-2 mx-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
}
