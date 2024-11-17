import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  let [mode, setMode]=useState("Light");
  let [alert,setAlert] = useState(null);
  let [color,setColor] = useState("");
  
  let showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  let toggleMode = () => {
    if(mode==='Dark'){
    setMode('Light');
    setColor("rgb(246 244 244);");
    document.body.style.backgroundColor="#fff";
    showAlert("Light mode is enabled", "success");
    }
    else{
      setMode('Dark');
      setColor("black");
      document.body.style.backgroundColor="rgb(20, 49, 116)";
    showAlert("Dark mode is enabled","dark");
    }
  }

  let toggleRed =() =>{
    if(mode==='Red'){
      setMode('Light');
      setColor("#530500;");
      document.body.style.backgroundColor="#fff";
      showAlert("Light mode is enabled", "success");
      }
      else{
        setMode('Red');
        setColor("#530500");
        document.body.style.backgroundColor="#fc2b20";
      showAlert("Red mode is enabled","danger");
      }
  }
  let toggleGreen =() =>{
    if(mode==='Green'){
      setMode('Light');
      setColor("rgb(246 244 244);");
      document.body.style.backgroundColor="#fff";
      showAlert("Light mode is enabled", "success");
      }
      else{
        setMode('Green');
        setColor("#093d09");
        document.body.style.backgroundColor="green";
      showAlert("Green mode is enabled","success");
      }
  }
  return (
    <>
      <Navbar title="TextUtils" item1="Home" item2="About" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed}  toggleGreen={toggleGreen} color={color}/>
      <Alert alert={alert}/>
        <Form  heading="Enter the text here" mode={mode} alert={alert} showAlert={showAlert} color={color}/>
        {/* <About/> */}
    
    </>
  );
}

export default App;
