import React from 'react';
import './Collection.css';
import { useHistory} from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Collection = ({ collection }) => {
   

    const history = useHistory()

    const handleCart = (id) => {

    history.push(`/cart/${id}`)

    }
    return (
           
                
             <div className="collection-box">
                
             
            
            
            <img id="serviceImg" src={`data:image/png;base64, ${collection.image.img}`} alt="" />
            <h6>{collection.name}</h6>
                <button className="addCart" onClick={()=>handleCart(collection._id)}>Add To Cart</button>
           
            

            </div>
           



               
        // <div className="col-md-4 text-center">
        //     <h4>{service.name}</h4>
        //     <img id="serviceImg" src={`data:image/png;base64, ${service.image.img}`} alt="" />
        //     <p><small>{service.info}</small></p>
        //     <button onClick={()=>handleBooking(service._id)}>Book</button>
        // </div>
    );
};

export default Collection;