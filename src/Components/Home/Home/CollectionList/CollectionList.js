import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { Button } from 'react-bootstrap'
import './CollectionList.css';
const CollectionList = () => {


    const deleteBooking = (id) => {



        console.log(id)

        fetch(`https://still-hollows-61892.herokuapp.com/delete/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('successfully deleted')
                }

            })


    }


    const [collectionList, setCollectionList] = useState([])
    console.log('List', collectionList)
    useEffect(() => {
        fetch('http://localhost:5011/collection')
            .then(res => res.json())
            .then(data => setCollectionList(data))

    }, [])
    return (



        <section>
            

            <div className="row container-fluid containerStyle">
           
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                <h1 className="review-head">Collection List</h1>
                    <div>
                        <table className="table">
                            <thead >
                                <tr >
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Payment ID</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    collectionList.map((list, index) =>

                                        <tr >

                                            <td >{list.name}</td>
                                            <td >{list.email}</td>
                                            <td >{list.service}</td>
                                            <td >{list.paymentId}</td>
                                            <td ><Button onClick={() => deleteBooking(list._id)} >
                                                <svg style={{width:'30px', color:'red'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </Button></td>
                                        </tr>



                                    )
                                }


                            </tbody>


                        </table>

                    </div>
                </div>
            </div>
        </section>



    );
};

export default CollectionList;