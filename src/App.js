import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";

const App = () =>{
  const [hamActive, setHamActive] = useState(false);
  return(
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive}/>
      <NavbarResponsive hamActive={hamActive} setHamActive={setHamActive}/>
      <Home />
      <Features />
    </div>
  );
};
export default App;