import React from 'react';
import './css/footer.css';

const Footer = () => (
  <>
    <hr className="hr section-hr" />
    <footer className="footer">
      <div className="content-wrapper footer__wrapper">
        
        <div className="footer__contacts">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://www.instagram.com/alan_yian/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <i className="gg-instagram"></i>
                <span>Instagram</span>  
              </a>
            </li>
            <li className="footer__item">
              <a href="https://www.linkedin.com/in/yian-ge/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <i style={{ fontSize: '18px' }} className="fa">&#xf08c;</i>
                <span>LinkedIn</span> 
              </a>     
            </li>
          </ul>
        </div>
        
        <div className="footer__about">
          <span className="about__content">© 2024,</span>
          <a href="index.html"><span>Bloom & Grace</span></a>
        </div>

      </div>
    </footer>
  </>
);

export default Footer;
