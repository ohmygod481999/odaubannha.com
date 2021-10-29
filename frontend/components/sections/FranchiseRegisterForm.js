import React from "react";
import { getStrapiImage } from "../../utils/medias";

function FranchiseRegisterForm({ title, items = [], image }) {
    return (
        <div className="section pb-0" id="form-nhuong-quyen">
            <div className="container">
                <div className="row align-content-end flex-row-reverse">
                    <div
                        className="col-lg-12 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.02s"
                    >
                        <div className="book_table">
                            <div className="heading_s1 mb-md-0">
                                <span className="sub_heading font_style1">
                                    Franchise register
                                </span>
                                <h2>Đăng ký nhượng quyền</h2>
                            </div>
                            <div className="small_divider clearfix" />
                            <div className="field_form form_style1">
                                <form method="post" name="enq">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <div className="input_group">
                                                <input
                                                    required="required"
                                                    placeholder="Tên"
                                                    className="form-control"
                                                    name="name"
                                                    type="text"
                                                />
                                                <div className="input_icon">
                                                    <i className="fa fa-user" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="input_group">
                                                <input
                                                    required="required"
                                                    placeholder="Địa chỉ email"
                                                    className="form-control"
                                                    name="email"
                                                    type="email"
                                                />
                                                <div className="input_icon">
                                                    <i className="fa fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="input_group">
                                                <input
                                                    required="required"
                                                    placeholder="Số điện thoại"
                                                    className="form-control"
                                                    name="phone"
                                                    type="tel"
                                                />
                                                <div className="input_icon">
                                                    <i className="fa fa-mobile-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="input_group">
                                                <input
                                                    placeholder="Địa chỉ"
                                                    className="form-control"
                                                    data-theme="red"
                                                    name="date"
                                                />
                                                <div className="input_icon">
                                                    <i className="far fa-clock" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                title="Submit Your Message!"
                                                className="btn btn-default"
                                                name="submit"
                                                value="Submit"
                                            >
                                                Đăng ký ngay
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="large_divider clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FranchiseRegisterForm;
