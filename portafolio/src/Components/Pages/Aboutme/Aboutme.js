import React from "react";
import { Container,  Jumbotron } from 'react-bootstrap';
import './style.css';



function Aboutme(){
   return(
    <div className="jumboCoint">
        <Jumbotron>
            <Container>
            <h1 id="aboutTitle" className="display-4">About me</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal
            This is a modified jumbotron that occupies the entire horizontal
             This is a modified 
            jumbotron that occupies the entire horizontaljumbotron that occupies
             the entire horizontal
            This is a modif
            space of its parent.
            </p>
            </Container>
        </Jumbotron>
    </div>

   )
}

export default  Aboutme;