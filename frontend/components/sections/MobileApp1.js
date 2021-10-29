import React from "react";

function MobileApp1() {
    return (
        <div className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div
                        className="col-md-7 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.02s"
                    >
                        <div className="heading_s1">
                            <span className="sub_heading font_style1">
                                Put in Your Pocket
                            </span>
                            <h2>Download Our Mobile App</h2>
                        </div>
                        <p>
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isnt anything
                            embarrassing hidden in the middle of text.All the
                            Lorem Ipsum generators on the Internet tend to
                            repeat predefined chunks as necessary
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. consequuntur quibusdam enim expedita sed
                            nesciunt incidunt accusamus adipisci officia libero
                            laboriosam!
                        </p>
                        <a className="btn btn_primary btn-radius" href="#">
                            <i className="ion-social-apple" />
                            App Store
                        </a>
                        <a className="btn btn-default btn-radius" href="#">
                            <i className="ion-social-android" />
                            Play Store
                        </a>
                    </div>
                    <div
                        className="col-md-5 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.03s"
                    >
                        <div className="mobile_app text-center">
                            <img
                                src="/assets/images/mobile_app.png"
                                alt="mobile_app"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileApp1;
