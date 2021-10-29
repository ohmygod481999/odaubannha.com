import React from "react";

function Contact({ contact = {} }) {
    const { zalo, mobile, email } = contact;
    return (
        <div className="section pb_70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact_wrap contact_style1">
                            <div className="contact_icon">
                                <i className="ti-location-pin" />
                            </div>
                            <div className="contact_text">
                                <span>Zalo</span>
                                <p>{zalo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact_wrap contact_style1">
                            <div className="contact_icon">
                                <i className="ti-mobile" />
                            </div>
                            <div className="contact_text">
                                <span>Số điện thoại</span>
                                <p>{mobile}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact_wrap contact_style1">
                            <div className="contact_icon">
                                <i className="ti-email" />
                            </div>
                            <div className="contact_text">
                                <span>Email Address</span>
                                <a href="mailto:info@sitename.com">{email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
