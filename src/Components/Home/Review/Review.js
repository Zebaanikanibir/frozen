import React from 'react';
import './Review.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({review}) => {
    return (

          <div className="col-md-4 text-center mt-2">
                
                <div className="mt-2">
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            </div>
                <img id="rImg" src={`data:image/png;base64, ${review.image.img}`} alt=""/>
                
            
            
            <h3 className="text-white">{review.name}</h3>
            <p><small className="cInfo">{review.description}</small></p>
            
            
            

            </div>




        
    );
};

export default Review;