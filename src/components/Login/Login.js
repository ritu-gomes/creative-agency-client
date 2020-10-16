import React, { useContext } from 'react';
import './login.css';
import google from '../../images/download.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logos/logo.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user,setUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName,email} = result.user;
            const newUser = {...user};
            newUser.name = displayName;
            newUser.email = email;
            newUser.userExist = true;
            newUser.error = '';
            setUser(newUser);
            fetch('https://mysterious-sands-44671.herokuapp.com/admin?email='+newUser.email)
                .then(res => res.json())
                .then(data => {
                    if(data){
                        history.push("/allorder");
                    }
                    else{
                        history.push("/order")
                    }
                })
            
          }).catch(function(error) {
            var errorMessage = error.message;
            const newUser = {...user};
            newUser.error = errorMessage;
            newUser.name = '';
            newUser.email = '';
            newUser.userExist = false;
            setUser(newUser);
          });
    }
    return (
        <div>
            <Link className="navbar-brand mb-5" to="/home"><img style={{width: "150px"}} src={logo} alt=""/></Link>
            <div className="main-div">
                <div className="mini-div">
                    <h3>Login With</h3>
                    <div onClick={handleLogin} className="button-div">
                        <img src={google} alt="google"/>
                        continue with google
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;