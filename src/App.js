import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Programs from "./components/Programs/Programs";

const App = () =>{
  const [hamActive, setHamActive] = useState(false);
  return(
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive}/>
      <NavbarResponsive hamActive={hamActive} setHamActive={setHamActive}/>
      <Home />
      <Features />
      <Growth />
      <Questions />
      <Programs programs={programs_user} />
      <Programs programs={programs_shopper} />

    </div>
  );
};
export default App;