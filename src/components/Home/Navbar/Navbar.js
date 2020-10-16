import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const [user,setUser] = useContext(userContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <Link className="navbar-brand" to="/"> <img style={{width: "150px"}} src={logo} alt=""/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto d-flex align-items-center">
                        <a className="nav-link ml-2" href="#home">Home</a>
                        <a className="nav-link ml-2" href="#work">Our Portfolio</a>
                        <a className="nav-link ml-2" href="#service">Our Team</a>
                        <a className="nav-link ml-2" href="#contact">Contact Us</a>
                        <Link className="ml-2" to="/login">
                            <button className="btn btn-dark nav-link text-light">Admin Login</button>
                        </Link>
                        {user.userExist&&
                            <button onClick={() => setUser({})} className="btn btn-dark nav-link text-light ml-2">Log-Out</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;