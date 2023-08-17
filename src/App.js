// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import Alert from "./componenets/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
 

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
      document.title='TextUtils-DarkMode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title='TextUtils-LightMode'

    }
  };
  
  // const toggleColor = () =.{
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "black";
  //     showAlert("Dark Mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // }
  return (
    <>
    {/* <Router> */}
    <Navbar
        title="Parshva's TextUtils"
        aboutParshva="About Parshva"
        mode={mode}
        toggleMode={toggleMode}
   
      />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
