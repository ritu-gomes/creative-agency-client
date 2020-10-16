import React from 'react';
import '../SingleService/service.css';

const SingleFeedback = ({feed}) => {
    const {name,img,profession,feedback} = feed;
    return (
        <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="single-service p-4">
                <div className="row d-flex justify-content-start align-items-center mb-3">
                    <div className="col-md-4">
                        <img style={{width: "50px"}} src={img} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h5>{name}</h5>
                        <small>{profession}</small>
                    </div>
                </div>
                <p>{feedback}</p>
            </div>
        </div>
    );
};

export default SingleFeedback;