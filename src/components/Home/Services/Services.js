import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleService/SingleServices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sands-44671.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);
    console.log(services);
    return (
        <section id="service" className="service container text-center py-5">
            <h2 className="mb-5">Provide awsome <span style={{ color: "#7AB259" }}>services</span></h2>
            <div className="row d-flex align-items-center">
                {
                    services.map(srv => <SingleServices key={srv._id} serviceInfo={srv}></SingleServices>)
                }
            </div>
        </section>
    );
};

export default Services;