import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#babad4";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar
        titleText="TextUtils"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container-fluid my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
