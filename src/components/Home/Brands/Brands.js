import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netfix from '../../../images/logos/netflix.png';
import air from '../../../images/logos/airbnb.png';

const Brands = () => {
    return (
        <section className="brands d-flex flex-wrap justify-content-around align-items-center container py-5">
            <img style={{width: "140px"}} src={slack} alt="slack"/>
            <img style={{width: "130px"}} src={google} alt="google"/>
            <img style={{width: "100px"}} src={uber} alt="uber"/>
            <img style={{width: "120px"}} src={netfix} alt="netflix"/>
            <img style={{width: "160px"}} src={air} alt="airbnb"/>
        </section>
    );
};

export default Brands;