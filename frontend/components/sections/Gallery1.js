import React from "react";
import { getStrapiImage } from "../../utils/medias";

function Gallery1({ journey }) {
    const { title, subDescription, images } = journey;
    return (
        <div className="section small_pt pb_70">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-md-6 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.2s"
                    >
                        <div className="heading_s1 text-center">
                            <h2>{title}</h2>
                        </div>
                        <p className="text-center leads">{subDescription}</p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-12 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.3s"
                    >
                        <ul className="grid_container grid_col3 gutter_medium image_gallery gallery_hover_style1">
                            <li className="grid-sizer" />
                            {images.map((image, i) => (
                                <li key={i} className="grid_item">
                                    <div className="image_gallery_item">
                                        <a href={getStrapiImage(image)}>
                                            <div className="gallery_img">
                                                <div style={{
                                                    height: 200,
                                                    backgroundImage: `url(${getStrapiImage(image)})`,
                                                    backgroundPosition: "center",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover"
                                                }}>

                                                </div>
                                                {/* <img
                                                    src={getStrapiImage(image)}
                                                    alt="image"
                                                /> */}
                                            </div>
                                            <div className="gallary_hover_box">
                                                <i className="ti-zoom-in" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery1;
