import React from "react";

function Testimonia1() {
    return (
        <div
            className="section parallax_bg overlay_bg_70"
            data-parallax-bg-image="/assets/images/testimonial_bg.jpg"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-lg-6 col-md-8 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.02s"
                    >
                        <div className="heading_s1 heading_light text-center">
                            <span className="sub_heading font_style1">
                                Testimonial
                            </span>
                            <h2>Our Client Say!</h2>
                        </div>
                        <p className="text-center leads text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div
                        className="col-12 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.03s"
                    >
                        <div
                            className="testimonial_slider testimonial_style1 carousel_slider owl-carousel owl-theme nav_style1 dot_white"
                            data-margin={30}
                            data-loop="true"
                            data-autoplay="true"
                            data-responsive='{"0":{"items": "1"}, "767":{"items": "2"}, "1199":{"items": "2"}}'
                        >
                            <div className="testimonial_box">
                                <div className="author_info">
                                    <div className="author_img">
                                        <img
                                            src="/assets/images/user1.jpg"
                                            alt="user"
                                        />
                                    </div>
                                    <div className="author_name">
                                        <h5>Richard Clark</h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                                <div className="testimonial_desc">
                                    <p>
                                        Sed perspiciatis unde omnis iste natus
                                        error voluptatem laudantium, quaeillo
                                        inventore sed veritatis architecto
                                        beatae vitae dicta explicabo eiusmod
                                        tempor labore which pain can some
                                        pleasure.
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial_box">
                                <div className="author_info">
                                    <div className="author_img">
                                        <img
                                            src="/assets/images/user2.jpg"
                                            alt="user"
                                        />
                                    </div>
                                    <div className="author_name">
                                        <h5>Daisy Lana</h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                                <div className="testimonial_desc">
                                    <p>
                                        Sed perspiciatis unde omnis iste natus
                                        error voluptatem laudantium, quaeillo
                                        inventore sed veritatis architecto
                                        beatae vitae dicta explicabo eiusmod
                                        tempor labore which pain can some
                                        pleasure.
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial_box">
                                <div className="author_info">
                                    <div className="author_img">
                                        <img
                                            src="/assets/images/user3.jpg"
                                            alt="user"
                                        />
                                    </div>
                                    <div className="author_name">
                                        <h5>Alden Smith</h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                                <div className="testimonial_desc">
                                    <p>
                                        Sed perspiciatis unde omnis iste natus
                                        error voluptatem laudantium, quaeillo
                                        inventore sed veritatis architecto
                                        beatae vitae dicta explicabo eiusmod
                                        tempor labore which pain can some
                                        pleasure.
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial_box">
                                <div className="author_info">
                                    <div className="author_img">
                                        <img
                                            src="/assets/images/user4.jpg"
                                            alt="user"
                                        />
                                    </div>
                                    <div className="author_name">
                                        <h5>John Becker</h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                                <div className="testimonial_desc">
                                    <p>
                                        Sed perspiciatis unde omnis iste natus
                                        error voluptatem laudantium, quaeillo
                                        inventore sed veritatis architecto
                                        beatae vitae dicta explicabo eiusmod
                                        tempor labore which pain can some
                                        pleasure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonia1;
