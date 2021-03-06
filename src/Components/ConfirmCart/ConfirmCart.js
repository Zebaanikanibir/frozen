import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { Spinner } from 'react-bootstrap';

const ConfirmCart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [confirmCart, setConfirmCart] = useState([])
    console.log('confirmed', confirmCart)
    useEffect(() => {
        fetch('https://still-hollows-61892.herokuapp.com/cart?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setConfirmCart(data))

    }, [])
    return (
        <section className="row container-fluid">

            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 row">
            {
                confirmCart.length === 0 &&
                (
                    <div className="spinner">
                        <Spinner animation="border" variant="warning" />
                    </div>
                )
            }

                {confirmCart.length ?



                    confirmCart.map(order => <OrderDetails order={order}></OrderDetails>)

                    :
                    <div className="p-5">
                        <h4>No booking</h4>
                    </div>
                }
            </div>

        </section>
    );
};

export default ConfirmCart;