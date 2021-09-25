import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer className="footer">

            
            <div className="footer-box">
            <h2 className="text-white head2">About Us</h2>
             <h6 className="text-white">We will create a unique and visually pleasing logo to reflect your overall brand to be used in all areas of your marketing.</h6>
             <div>
            <FontAwesomeIcon className="text-white icon ml-2" icon={faGooglePlusG} />
            <FontAwesomeIcon className=" text-white icon ml-2" icon={faFacebookF} />
            <FontAwesomeIcon className=" text-white icon ml-2" icon={faInstagram} />
            <FontAwesomeIcon className="text-white icon ml-2" icon={faTwitter} />
            </div>
            </div>
           
            <div className="footer-box">
            <h2 className="text-white head2">Get In Touch</h2>
            <h6 className="text-white head2">MOTO Business Agency Highroad 141, LA City Venice Beach 64713</h6>
            <h6 className="text-white"> <FontAwesomeIcon className="icon " icon={faPhone} /> +49 123475914
            +49 123475915</h6>
            <h6 className="text-white">nibir@gmail@email.com</h6>
            </div>
           
            <div className="footer-box">
            <h2 className="text-white head2">Why Choose Us?</h2>
             <h3 className="text-white">HIGH QUALITY SERVICES</h3>
             <h6 className="text-white">We work with clients big and small across a range of sectors and we utilise all forms of media.</h6>
             <div>
           
            </div>
            </div>
            
        </footer>
    );
};

export default Footer;