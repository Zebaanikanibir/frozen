import React from 'react';
import './OrderDetails.css';
const BookedDetails = ({order}) => {
    return (
        <div className="col-md-6 ">
            <div className="booked">
            <p className="text-center mt-5 bService">{order.service}</p>
            <p className="text-center mt-5"><small id="bInfo">{order.info}</small></p>
            </div>
        </div>
    );
};

export default BookedDetails;