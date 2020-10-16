import React from 'react';

const Footer = () => {
    return (
        <footer style={{background: "#FBD062"}} id="contact" className="footer py-5">
            <div className="row d-flex align-items-start justify-content-around m-auto container">
                <div className="col-md-6">
                    <h2 className="mb-3">Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6">
                    <form>
                        <input className="form-control mb-3 p-3" type="email" name="email" placeholder="your email"/>
                        <input className="form-control mb-3 p-3" type="text" name="name" placeholder="your name/company name"/>
                        <textarea className="form-control mb-3 p-3" name="messege" rows="10" placeholder="your message"></textarea>
                        <input className="btn btn-dark px-5" type="submit" value="send"/>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;