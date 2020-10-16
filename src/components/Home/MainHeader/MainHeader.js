import React from 'react';
import headerImg from '../../../images/logos/Frame.png';

const MainHeader = () => {
    return (
        <section  style={{height: "100vh"}} className="main-header container">
            <div className="row p-3 d-flex align-items-center">
                <div className="col-sm-12 col-md-5 p-5">
                    <h1>Let's Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur recusandae laboriosam sequi voluptatibus quibusdam quos ex laborum eos ad nisi!</p>
                    <button className="btn btn-dark text-light">Hire Us</button>
                </div>
                <div className="col-sm-12 col-md-7 p-5">
                    <img style={{width: "100%"}} src={headerImg} className="img-fluid" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default MainHeader;