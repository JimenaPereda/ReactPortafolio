import React from 'react';
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Aboutme from "./Components/Pages/Aboutme/Aboutme"
import Portafolio from "./Components/Pages/Portafolio/Portafolio";
import PersonalLife from "./Components/Pages/PersonalLife/PersonalLife";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css';


function App() {

  return(
    <Router>
    <div> 
          <div className="header">
             <NavBar /> 
           </div>
     <Route exact path ="/" component = {Home} />
     <Route exact path ="/Aboutme" component = {Aboutme} />
     <Route exact path ="/Portafolio" component = {Portafolio} />
     <Route exact path ="/PersonalLife" component = {PersonalLife} />
      <Route exact path ="/Contact" component = {Contact} />
         <div  className="Footer1">
           <Footer /> 
       </div>
    </div>
     </Router>
    );
}

export default App;

