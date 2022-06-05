import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Tecse All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/hcopixel/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/andre.alvaradocampos.56" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook />
        </a>
      </p>
    </div>
  )
}

export default Footer