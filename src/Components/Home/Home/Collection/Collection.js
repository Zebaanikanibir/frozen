import React from 'react';
import './Collection.css';
import { useHistory} from 'react-router-dom';


const Collection = ({ collection }) => {
   

    const history = useHistory()

    const handleCart = (id) => {

    history.push(`/cart/${id}`)

    }
    return (
           
                
             <div className="collection-box">
                
             
            
            
            <img id="serviceImg" src={`data:image/png;base64, ${collection.image.img}`} alt="" />
            <div className="coll-line">
            <h6 className="text-white">{collection.name}</h6>
                <button className="addCart" onClick={()=>handleCart(collection._id)}>Add To Cart</button>
            </div>
           
            

            </div>
           



     
    );
};

export default Collection;