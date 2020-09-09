import React from "react";
import './style.css';
import { Container, Navbar, Nav, } from 'react-bootstrap';



function NavBar(){
   return(
    <div>
   <Container className="Nav">
     <Navbar className="menubar">
     <Nav className="mr-auto">
      <Nav.Link className="round-button" href="/">Home</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/Aboutme">About me</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/Portafolio">Portafolio</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/PersonalLife">Personal Life</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/Contact">Contact</Nav.Link>
      <div className="divider" ></div>
    </Nav>
     </Navbar>
  </Container>
    </div>

   )
}

export default NavBar;