import React from 'react';
import '../../Home/SingleService/service.css';

const YourServices = (props) => {
    const {service,icon,detail,process,_id} = props.info;
    return (
        <div className="col-md-6 p-3">
            <div style={{background: "white"}} className="single-service p-3">
                <img className="img" src={icon} alt=""/>
                <h6>{service}</h6>
                <p>{detail}</p>
                <button className="btn btn-primary">{process}</button>
            </div>
        </div>
    );
};

export default YourServices;