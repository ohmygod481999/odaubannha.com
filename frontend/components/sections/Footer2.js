import React from "react";
import { getStrapiMedia } from "../../utils/medias";
import { config } from "../../config";

function Footer2() {
    return (
        <footer
            className="footer_dark background_bg overlay_bg_80"
            data-img-src="http://localhost:1337/uploads/126200626_226305335498356_4735297030193910434_n_400f027bb9.jpg"
        >
            <div className="footer_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <div className="widget">
                                <div className="footer_logo">
                                    <a href="/">
                                        <img
                                            src={getStrapiMedia(config.logoUrl)}
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <p>
                                    If you are going to use a passage of Lorem
                                    Ipsum you need to be sure there isnt
                                    anything embarrassing hidden in the middle
                                    of text
                                </p>
                            </div>
                            <div className="widget">
                                <ul className="social_icons social_white social_style1 rounded_social">
                                    <li>
                                        <a href="#">
                                            <i className="ion-social-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ion-social-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ion-social-googleplus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ion-social-youtube-outline" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ion-social-instagram-outline" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bottom_footer border-top-tran">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="mb-0 text-center">
                                        © 2021 All Rights Reserved by{" "}
                                        <span className="text_default">
                                            Longvb
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer2;
