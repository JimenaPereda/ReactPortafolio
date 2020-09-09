import React, {Component} from "react";
import './style.css';
class Contact extends Component {
  state = {
    isEnvelopeOpen: false
  }
  openEnvelope = () => {
    this.setState(prevState => ({
      isEnvelopeOpen :  !prevState.isEnvelopeOpen
    }));   
  }
  render(){
    return (
      <>
        <div className = "frame">
        <button onClick={this.openEnvelope} id = "button_open_envelope">
          Email me
        </button>
        <div className = {this.state.isEnvelopeOpen ? "message pull": "message"}>
            <form method="post" action="contact.php">
              <input type="text" name="name" id="name" placeholder=" Name* " required />
              <input type="email" name="email" id="email" placeholder=" Email* " required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"/>
              <input type="text" name="phone" id="phone" placeholder=" Phone (optional)" autofocus /> 
              <textarea name="message" id="messarea" placeholder=" Message* " required></textarea>
              <input type="text" name="address" id="address" style={{display:"none"}}/>
              <input type="submit" value="Send" id="send"/>
            </form>
        </div>
            <div className = "bottom"></div>			
            <div className = "left"></div>
            <div className = "right"></div>
            <div className = {this.state.isEnvelopeOpen ? "top open" : "top"}></div>
        </div>
      </>
   )
  }
};
export default Contact;














