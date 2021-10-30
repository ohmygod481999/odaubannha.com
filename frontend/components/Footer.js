import React from "react";
import { getStrapiMedia, getStrapiImage } from "../utils/medias";
import { config } from "../config";
import Image from "next/image";
import { color } from "../utils/color";

function Footer({ generalInfo }) {
    const textColor = "black";
    return (
        <div>
            <footer
                className="footer-2 bg-secondary py-80 border-bottom-1-dark"
                style={{ marginTop: "80px" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-4 wow animated slideInUp">
                            <div
                                className="newletter-2 py-80 px-30 bg-primary md-mt-0 color-white"
                                style={{ marginTop: "-160px" }}
                            >
                                <h3 className="color-white mb-20">
                                    Đăng ký ngay nhận ngay máy rửa bát!
                                </h3>
                                <p>
                                    Montes elit pharetra vestibulum maecenas
                                    mollis lectus dis montes. Proin parture Hac
                                    magnis vestibulum commodo per euismod quam
                                    donec Netus.
                                </p>
                                <form className="news-letter bg-gray mt-30">
                                    <div className="form-group position-relative">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <button className="bg-gray color-secondary">
                                            <i className="fa fa-paper-plane" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-xl-3 wow animated slideInDown">
                            <div className="footer-logo mt-lg-30">
                                <a href="index.html">
                                    {generalInfo.logo && (
                                        <img
                                            className="nav-logo"
                                            src={getStrapiImage(generalInfo.logo)}
                                            alt="Image not found!"
                                        />
                                    )}
                                </a>
                                <div className="text-area mt-30 color-white">
                                    <p>
                                        Blandit pellente urna morbi. Dictumst
                                        duis eros facilisi libero ornare
                                        telluser ad proin phasellus class
                                        commodoral montes litora.
                                    </p>
                                </div>
                                <ul className="social-media-2 border-white large color-white-a mt-20">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-behance" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 wow animated slideInUp"></div>
                        <div className="col-sm-6 col-md-8 col-lg-5 col-xl-3 wow animated slideInDown">
                            <div className="footer-widget color-white mt-lg-30">
                                <h3 className="color-white line-bottom pb-15 mb-20">
                                    Quick Contact
                                </h3>
                                <div className="widget-content">
                                    <span>
                                        {generalInfo.address}
                                    </span>
                                    <span className="d-block mt-20">
                                        If you have any questions or need help,
                                        feel free to contact with our support
                                        team.
                                    </span>
                                    <strong className="feel-free icon-primary mt-20 d-block">
                                        <span className="mr-15">
                                            <i className="fa fa-phone" />
                                        </span>{" "}
                                        {generalInfo.phone}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright bg-secondary color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-6">
                            <div className="py-15">
                                Ở đâu bán nhà @ 2021. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
