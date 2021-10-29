import React from "react";
import { getStrapiImage } from "../../utils/medias";

function FranchiseCommitment({ commitment }) {
    const { title, description, subDescription, image, button } = commitment;
    return (
        <div
            className="section background_bg"
            data-img-src={
                image ? getStrapiImage(image) : "/assets/images/cta_bg.jpg"
            }
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-xl-6 col-lg-7 col-md-9 animation text-center"
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

export default FranchiseCommitment;
