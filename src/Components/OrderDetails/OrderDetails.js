import React from 'react';
import './OrderDetails.css';
const OrderDetails = ({order}) => {
    return (
        <div className="col-md-6 ">
            <div className="">
                
            <p className="text-center mt-5 bService">{order.service}</p>
            <p className="text-center mt-5"><small id="bInfo">{order.info}</small></p>
            </div>
        </div>
    );
};

export default OrderDetails;