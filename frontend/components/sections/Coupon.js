import React from "react";

function Coupon() {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="toggle_info">
                    <span>
                        <i className="fas fa-user" />
                        Returning customer?{" "}
                        <a
                            href="#loginform"
                            data-toggle="collapse"
                            className="collapsed"
                            aria-expanded="false"
                        >
                            Click here to login
                        </a>
                    </span>
                </div>
                <div
                    className="panel-collapse collapse login_form"
                    id="loginform"
                >
                    <div className="panel-body">
                        <p>
                            If you have shopped with us before, please enter
                            your details below. If you are a new customer,
                            please proceed to the Billing &amp; Shipping
                            section.
                        </p>
                        <form method="post">
                            <div className="form-group">
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    name="email"
                                    placeholder="Username Or Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="login_footer form-group">
                                <div className="chek-form">
                                    <div className="custome-checkbox">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="checkbox"
                                            id="exampleCheckbox"
                                            defaultValue
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox"
                                        >
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-default btn-block"
                                    name="login"
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="toggle_info">
                    <span>
                        <i className="fas fa-tag" />
                        Have a coupon?{" "}
                        <a
                            href="#coupon"
                            data-toggle="collapse"
                            className="collapsed"
                            aria-expanded="false"
                        >
                            Click here to enter your code
                        </a>
                    </span>
                </div>
                <div
                    className="panel-collapse collapse coupon_form"
                    id="coupon"
                >
                    <div className="panel-body">
                        <p>If you have a coupon code, please apply it below.</p>
                        <div className="coupon field_form input-group">
                            <input
                                type="text"
                                defaultValue
                                className="form-control"
                                placeholder="Enter Coupon Code.."
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-default btn-sm"
                                    type="submit"
                                >
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coupon;
