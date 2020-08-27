import React, { Component } from 'react';
import homeImg from "../Images/mainImg.jpg"
import './style.css';


function Home() {
     
      return ( 

       <div className="homebod">
            <img className="backG" src={homeImg} alt="" />
       </div>
    
      );
   
  };


export default Home;