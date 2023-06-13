import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>Vova Chelidze</a>
      
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'> <FaFacebookF /> </a>
        <a href='https://facebook.com'> <FiInstagram /> </a>
        <a href='https://facebook.com'> <IoLogoTwitter/> </a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Volodymyr Chelidze. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
