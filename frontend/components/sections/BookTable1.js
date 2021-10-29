import React from "react";

function BookTable1() {
    return (
        <div
            className="section background_bg overlay_bg_70"
            data-img-src="/assets/images/book_table_bg.jpg"
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-12 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.2s"
                    >
                        <div className="book_table">
                            <div className="heading_s1 heading_light mb-md-0">
                                <span className="sub_heading font_style1">
                                    Reservations
                                </span>
                                <h2>Book A Table</h2>
                            </div>
                            <div className="small_divider clearfix" />
                            <div className="field_form form_style2 rounded_input">
                                <form method="post" name="enq">
                                    <div className="row">
                                        <div className="form-group col-lg-4 col-sm-6">
                                            <div className="input_group">
                                                <input
                                                    required="required"
                                                    placeholder="Name"
                                                    className="form-control"
                                                    name="name"
                                                    type="text"
                                                />
                                                <div className="input_icon">
                                                    <i className="fa fa-user" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-4 col-sm-6">
                                            <div className="input_group">
                                                <input
                                                    required="required"
                                                    placeholder="Email Address"
                                                    className="form-control"
                                                    name="email"
                                                    type="email"
                                                />
                                                <div className="input_icon">
                                                    <i className="fa fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-4 col-sm-6">
                                            <div className="input_group">
                                                <input
                                                    placeholder="Time"
                                                    className="form-control timepicker"
                                                    data-theme="red"
                                                    name="date"
                                                    type="text"
                                                />
                                                <div className="input_icon">
                                                    <i className="far fa-clock" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-4 col-sm-6">
                                            <div className="input_group">
                                                <input
                                                    required="required"
                                                    placeholder="Mobile No."
                                                    className="form-control"
                                                    name="phone"
                                                    type="tel"
                                                />
                                                <div className="input_icon">
                                                    <i className="fa fa-mobile-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-4 col-sm-6">
                                            <div className="input_group">
                                                <input
                                                    placeholder="Select Date"
                                                    className="form-control datepicker"
                                                    name="date"
                                                    type="text"
                                                />
                                                <div className="input_icon">
                                                    <i className="far fa-calendar-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-4 col-sm-6">
                                            <div className="custom_select">
                                                <select className="form-control">
                                                    <option value>
                                                        Select Person
                                                    </option>
                                                    <option value={1}>
                                                        1 Person
                                                    </option>
                                                    <option value={2}>
                                                        2 Person
                                                    </option>
                                                    <option value={3}>
                                                        3 Person
                                                    </option>
                                                    <option value={4}>
                                                        4 Person
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                title="Submit Your Message!"
                                                className="btn btn-white btn-radius"
                                                name="submit"
                                                value="Submit"
                                            >
                                                book now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookTable1;
