import React, { Component } from 'react';
import footerImg from './Images/footer.png';
import './style.css';


class Footer extends Component {
  render() {
    return (
     <div classNmae="Footer1">
          <img  src={footerImg} alt="" />
     </div>
    );
  }
}

export default Footer;