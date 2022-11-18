import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Navbar.js";
import TextForm from "./TextForm.js";
import Alert from "./Alert.js";
import About from "./About.js";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


export default function App(props) {
  const [mode, setMode] = useState(`light`); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(6 24 38)";
      showAlert("Dark mode enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <BrowserRouter>
    <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
    <Routes>
    <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/" element={<div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text To analyze below" mode={mode} />
      </div>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

