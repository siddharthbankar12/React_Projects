import Alert from "./component/textutils/Alert";
import Navbar from "./component/textutils/Navbar";
import TextForm from "./component/textutils/TextForm";
import About from "./component/textutils/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route
              exact
              path="/TextUtils_ReactProject"
              element={
                <TextForm
                  relAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <TextForm
                  relAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
