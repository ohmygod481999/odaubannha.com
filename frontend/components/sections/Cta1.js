import React from "react";
import { getStrapiImage } from "../../utils/medias";

function Cta1({ title, image, description, subDescription, button }) {
    return (
        <div
            className="section background_bg overlay_bg_50"
            data-img-src={
                image ? getStrapiImage(image) : "assets/images/cta_bg.jpg"
            }
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 col-md-8 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.02s"
                    >
                        <div className="heading_s1 heading_light">
                            <span className="sub_heading font_style1">
                                {subDescription}
                            </span>
                            <h2>{title}</h2>
                        </div>
                        <p className="text-white">{description}</p>
                        <a className="btn btn-white" href={button.url}>
                            {button.title}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta1;
