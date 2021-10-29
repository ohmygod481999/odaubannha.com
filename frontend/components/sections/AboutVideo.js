import React from "react";
import { getStrapiImage } from "../../utils/medias";

function AboutVideo({ aboutwithvideo }) {
    const {
        subDescription,
        title,
        description,
        image,
        youtubeurl,
    } = aboutwithvideo;
    return (
        <div className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about_box box_shadow1">
                            <div className="heading_s1">
                                <span className="sub_heading font_style1">
                                    {subDescription}
                                </span>
                                <h2>{title}</h2>
                            </div>
                            <p>{description}</p>
                            <a className="btn btn-dark rounded-0" href="#">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="fancy_style1 overlay_bg_20">
                            <img
                                // src="https://i.ytimg.com/vi/NtemknidSRU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8PT5oUYyv2UZ_ymb9qRfHXlTebA"
                                src={getStrapiImage(image)}
                                alt="about_img5"
                            />
                            <a
                                href={youtubeurl}
                                className="btn btn-ripple ripple_center video_popup animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.6s"
                            >
                                <span className="ripple">
                                    <i className="ion-play" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;
