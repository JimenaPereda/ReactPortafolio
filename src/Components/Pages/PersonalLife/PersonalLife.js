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
               <img className="PerImg" src={perImg} alt="" />
              </Col>,

              <Col className="col2">
               <h1>This is a little recap <br />
                  from my life</h1>
             
                <div className="video">
                   <video src={Video} autoPlay="true" />
                </div>
              </Col>,
            </Row>
      </div>
    );

}

export default PersonalLife;