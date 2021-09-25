import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import ConfirmCart from './../ConfirmCart/ConfirmCart';

const Dashboard = () => {
    return (
        
             <section>
            <div className="container-fluid  row containerStyle">
             <div className="col-md-2">
             <Sidebar></Sidebar>
             </div>
                <div className="col-md-10">
                  <h1 className="review-head">Welcome to the Dashboard</h1>

                  <p>Admin maintain the site</p>
                  <h3 className="review-head">Admin</h3>
                  <h6>1.zaniknanibir@gmail.com</h6>
                  <h6>2.work.axactstudios@gmail.com</h6>
                </div>
            </div>
        </section>
    );
       

};

export default Dashboard;