import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { idContext } from '../../../App';
import './service.css';

const SingleServices = ({serviceInfo}) => {
    const [serviceId,setServiceId] = useContext(idContext);
    const history = useHistory();
    const {title,icon,detail,_id} = serviceInfo; 
    const handleService = (id) => {
        setServiceId(id);
        history.push("/order");
    }
    return (
            <div className="col-12 col-sm-6 col-md-4 p-2">
                <div onClick={() => handleService(_id)} className="single-service p-3">
                    <img className="img" src={icon} alt=""/>
                    <h5>{title}</h5>
                    <p>{detail}</p>
                </div>
            </div>
    );
};

export default SingleServices;