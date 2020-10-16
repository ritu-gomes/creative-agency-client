import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        fetch("https://mysterious-sands-44671.herokuapp.com/admin",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        history.push("/allorder");
    }
    return (
        <div style={{height: "100vh"}} className="row">
            <div className="col-md-2 p-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10 p-5">
                <h3>admin</h3>
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                    <input className="form-control mb-5 py-3" type="email" placeholder="email" name="email" ref={register({ required: true })}/>
                    {errors.email && <span>This field is required</span>}
                    <input className="form-control btn btn-dark" type="submit" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;