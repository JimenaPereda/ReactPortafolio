import React from 'react';
import { Row,Col,  } from 'react-bootstrap';
import perImg from "./Images/personalimg.png";
import Video from "./Video/web Video.mp4";
import './style.css';



function PersonalLife(){
    return(
      <div>
           <Row>
              <Col className="col1">
               <img src={perImg} alt="" />
              </Col>,

              <Col className="col2">
               <h1>This is a little recap frommy life</h1>
              </Col>,


              <div className="video">
               <video src={Video} autoPlay="true" />
              </div>

           </Row>
      </div>
    );

}

export default PersonalLife;