import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../sidebar/Sidebar';
import YourServices from '../YourServices/YourServices';

const Dashboard = () => {
    const [yourService,setYourService] = useState([]);
    const [user,setUser] = useContext(userContext);
    useEffect(() => {
        fetch('https://mysterious-sands-44671.herokuapp.com/yourServices?email='+user.email)
        .then(res => res.json())
        .then(data => {
            setYourService(data);
        })
    })
    return (
        <div style={{height: "100vh"}} className="row">
            <div className="col-md-2 p-3">
                <Sidebar></Sidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10">
                <h3>Order</h3>
                <div className="row p-3">
                        {
                            yourService.map(ser => <YourServices info={ser} key={ser._id}></YourServices>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;