import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text="sjkabfjasbdjkas" //Wrong way to set text
  // setText("skjdvjhsbac")// Right way to set text
  const handleUpClick = () => {
    console.log("UpperCase Was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Successfully Cleared the Text", "success");
  };
  // const handleCopy = () =>{
  //     var text = document.getElementById("myBox")
  //     text.select();
  //     navigator.clipboard.writeText(text.value);
  // }
  //This function is from youtube and is used to speak whatever is typed in the textarea and u can also stop it
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
    props.showAlert("Speaking.....", "success");
  };
  //

  const handleOnChange = (event) => {
    console.log("UpperCase Was clicked");
    setText(event.target.value);
  };
  const handleLoClick = () => {
    console.log("LowerCase Was Clicked");
    let newLoText = text.toLowerCase();
    setText(newLoText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully Removed the Extra Spaces", "success");
  };
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3 ">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          CONVERT TO UPPER CASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          CONVERT TO LOWER CASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          CLEAR TEXT
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          REMOVE EXTRA SPACES
        </button>
        <button
        disabled={text.length===0}
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-1 my-1"
          id="toggle"
        >
          Speak
        </button>
        <button
disabled={text.length===0}
          type="submit"
          onClick={handleCopy}
          className="btn btn-primary mx-1 my-1"
          id="toggle"
        >
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <p>
            {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
            {text.length} characters
          </p>
          {/* {text.split(" ").length} words and {text.length} characters */}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter something in the textbox to preview"}
        </p>
      </div>
    </>
  );
}
