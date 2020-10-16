import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { idContext, userContext } from '../../../App';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Order = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [user,setUser] = useContext(userContext);
    const [serviceId,setServiceId] = useContext(idContext);
    const [serviceInfo,setServiceInfo] = useState({});
    useEffect(() => {
        fetch('https://mysterious-sands-44671.herokuapp.com/yourService/'+serviceId)
        .then(res => res.json())
        .then(data => {
            setServiceInfo(data);
        })
    },[]);
    const onSubmit = (data) => {
        const info = {...data,icon:serviceInfo.icon,detail:serviceInfo.detail,process: "pending"};
        fetch('https://mysterious-sands-44671.herokuapp.com/selectedservice',{
            method: "POST",
            headers:{
                'content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        history.push("/servicelist");
        
    }
    return (
        <div style={{height: "100vh"}} className="row">
            <div className="col-md-2 p-3">
                <Sidebar></Sidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10 p-5">
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                    <input className="form-control mb-5 py-3" type="text" defaultValue={user.name} name="name" ref={register({ required: true })}/>
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control mb-5 py-3" type="email" defaultValue={user.email} name="email" ref={register({ required: true })}/>
                    {errors.email && <span>This field is required</span>}
                    <input className="form-control mb-5 py-3" type="text" defaultValue={serviceInfo.title} name="service" ref={register({ required: true })}/>
                    {errors.service && <span>This field is required</span>}
                    <input className="form-control btn btn-dark" type="submit" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default Order;