import React from "react";
import {  Card, Button, CardGroup } from 'react-bootstrap';
import './style.css';
import Code from "./Images/CodeQuizz.jpg";
import Siller from "./Images/Siller.jpg";
import slot from "./Images/slot.jpg";
import survive from "./Images/survive.jpg";
import weather from "./Images/weather.jpg";
import Coming from "./Images/Coming.jpg";



function Portafolio(){
   return(
    <div className="cardContainer">
         <CardGroup>
  <Card>
    <Card.Img variant="top" src={Siller} />
    <Card.Body>
      <Card.Title>Grupo  <br/>Siller</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Take me there!</Button>
    </Card.Footer>
  </Card>
  <div className="divier" />
  <Card>
    <Card.Img variant="top" src={Code} />
    <Card.Body>
      <Card.Title>Code <br/> Quizz </Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Take me there!</Button>
    </Card.Footer>
  </Card>
  <div className="divier" />
  <Card>
    <Card.Img variant="top" src={weather}/>
    <Card.Body>
      <Card.Title>Weather <br/> Dashboard</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Take me there!</Button>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup>
<div className="divier" />
  <Card>
    <Card.Img variant="top" src={survive} />
    <Card.Body>
      <Card.Title>Survive  <br/>the Day</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Take me there!</Button>
    </Card.Footer>
  </Card>
  <div className="divier" />
  <Card>
    <Card.Img variant="top" src={slot} />
    <Card.Body>
      <Card.Title>Slot  <br/> Machine</Card.Title>
    
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Take me there!</Button>
    </Card.Footer>
  </Card>
  <div className="divier" />
  <Card>
    <Card.Img variant="top" src={Coming} />
    <Card.Body>
      <Card.Title>Coming <br/> soon...</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Nowhere to go</Button>
    </Card.Footer>
  </Card>
</CardGroup>

    </div>

   )
}

export default  Portafolio;