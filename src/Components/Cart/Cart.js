import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Cart.css';
const Cart = () => {
    const { id } = useParams();
    console.log(id)
    const [cart, setCart] = useState({})
    const [cartData, setCartData] = useState(null)
    useEffect(() => {

        fetch(`http://localhost:5011/cart/${id}`)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [])


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleCart = (booking) => {

       setCartData(cart)
       alert('Please Pay')
    }


const handlePaymentSuccess = paymentId =>{

    console.log('Add Cart', cart)

    const newCart = { ...loggedInUser, service:cart.name, info:cart.info, cost:cart.cost, paymentId, orderTime: new Date().toDateString('dd/MM/yyyy') }

    console.log(loggedInUser)
    fetch('http://localhost:5011/addCart', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },
        body: JSON.stringify(newCart)
    })
        .then(res => res.json())
        .then(data => {

            if (data) {

                alert('Order confirmed')
            }
        })

    
}

    return (
        <section>
            <div className="container-fluid row containerStyle">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-5 mt-5 booking">
                    <div style={{ width: '30rem' }}>
                        <h5>{loggedInUser.email}</h5>
                        <h5>{loggedInUser.name}</h5>
                        <h6>You will be charged for ${cart.cost}</h6>
                        <h6>{cart.name}</h6>
                        <button id="bBtn"  onClick={()=>handleCart(cart)}>Booking</button>
                    </div>
                </div>
                <div className="col-md-3 mt-5 booking ml-5">
                    <h2>Pay for me</h2>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default Cart;