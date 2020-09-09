import React from "react";
import { Container,  Jumbotron } from 'react-bootstrap';
import './style.css';



function Aboutme(){
   return(
    <div className="jumboCoint">
        <Jumbotron className="jumbo"  >
            <Container>
            <h1 id="aboutTitle" className="display-4">About me</h1>
            <p>
             <br/>
             My name is Jimena but people call me Jimmy, 
             I was born and raised in Mexico City, I grew up surrounded by art and artists
              and between canvas and brushes
             from a very young age I began to develop my creativity in different ways.
            Later I decided to study fashion and interior design, color psychology and some other things ... 
            but I always felt that something was missing, in 2014 I moved to Venice Beach where there were 
            great applications like Google, Snapchat (which was starting) <br/>
            and it was when I realized my fascination 
            for<br/>
             technology and what it was able to do, however,<br/>
              it took me a few more years to decide what I really<br/>
             wanted to do,  I took an intensive  Full Stack <br/>
             Development Bootcamp and it was right there <br/>
             when in each project I went developing <br/>
             I realized the great passion I have to <br/>
             create and decided to focus on UI / UX <br/>
             and front end.
            </p>
            </Container>
        </Jumbotron>
    </div>

   )
}

export default  Aboutme;