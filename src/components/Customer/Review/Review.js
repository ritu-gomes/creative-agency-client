import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const Review = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit= (data) => {
        fetch('https://mysterious-sands-44671.herokuapp.com/yourfeedback',{
            method: "POST",
            headers:{
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        history.push("/");
    }
    return (
        <div style={{height: "100vh"}} className="row">
            <div className="col-md-2 p-3">
                <Sidebar></Sidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10 p-5">
                <h3>Order</h3>
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                    <input className="form-control mb-5 py-3" type="text" placeholder="your name" name="name" ref={register({ required: true })}/>
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control mb-5 py-3" type="text" placeholder="company, Designaation" name="profession" ref={register({ required: true })}/>
                    {errors.profession && <span>This field is required</span>}
                    <input className="form-control mb-5 py-3" type="text" placeholder="feedback" name="feedback" ref={register({ required: true })}/>
                    {errors.feedback && <span>This field is required</span>}
                    <input className="form-control btn btn-dark" type="submit" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default Review;