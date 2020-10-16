import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderTable from '../OrderTable/OrderTable';

const AllOrder = () => {
    const [allOrder,setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sands-44671.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => {
            setAllOrder(data)
        })
    },[])
    return (
        <div style={{ height: "100vh" }} className="row">
            <div className="col-12 col-md-2 p-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{ background: "#E5E5E5" }} className="col-12 col-md-10 p-3">
                <h3>admin</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Detail</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map(ord => <OrderTable orderInfo={ord} key={ord._id}></OrderTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;