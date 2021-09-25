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
                </div>
            </div>
        </section>
    );
       

};

export default Dashboard;