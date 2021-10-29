import React from "react";
import { getStrapiMedia } from "../../utils/medias";
import { color } from "../../utils/color";

function About2({
    title,
    image_url1,
    image_url2,
    image_url3,
    subDescription,
    description,
    btnText,
    btnLink,
}) {
    return (
        <div className="section" style={{
            backgroundColor: color.lightGreen
        }}>
            <div className="container">
                <div className="row align-items-center">
                    <div
                        className="col-lg-6 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.02s"
                    >
                        <div className="about_section pl-lg-3">
                            <div className="heading_s1">
                                <span className="sub_heading font_style1">
                                    {subDescription}
                                </span>
                                <h2>{title}</h2>
                            </div>
                            <p>{description}</p>
                            <a className="btn btn_primary" href={btnLink}>
                                {btnText}
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.03s"
                    >
                        <div className="about_double_img">
                            <div className="first_img">
                                <img
                                    src={getStrapiMedia(image_url1)}
                                    alt="about_img2"
                                />
                            </div>
                            <div className="second_img">
                                <img
                                    src={getStrapiMedia(image_url2)}
                                    alt="about_img3"
                                />
                            </div>
                            <div className="third_img">
                                <img
                                    src={getStrapiMedia(image_url3)}
                                    alt="about_img4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;
