import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const FeedBack = () => {
    const [feedback,setFeedback] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sands-44671.herokuapp.com/feedback')
        .then(res => res.json())
        .then(data => {
            setFeedback(data);
        })
    },[])
    return (
        <section className="feedback py-5 container">
            <h2 className="mb-5 text-center">Clients <span style={{color: "#7AB259"}}>Feedback</span></h2>
            <div className="row d-flex align-items-center">
                {
                    feedback.map(feed => <SingleFeedback feed={feed} key={feed._id}></SingleFeedback>)
                }
            </div>
        </section>
    );
};

export default FeedBack;