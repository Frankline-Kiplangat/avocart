import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Home from "./components/Home/Home";

const App = () =>{
  const [hamActive, setHamActive] = useState(false);
  return(
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive}/>
      <NavbarResponsive hamActive={hamActive} setHamActive={setHamActive}/>
      <Home />
    </div>
  );
};
export default App;