import React from "react";
import { getStrapiImage } from "../../utils/medias";
import TimeAgo from "../TimeAgo";
function Video({ videos }) {
    return (
        <div className="section mt-50" style={{ marginBottom: "150px" }}>
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">
                        {videos.map((video) => {
                            const {
                                title,
                                url,
                                published_at,
                                date,
                                description,
                            } = video;
                            return (
                                <div
                                    className="row"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <div className="col-lg-5">
                                        <div
                                            className="fancy_style1 overlay_bg_20"
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                paddingBottom: "56,25%",
                                                height: "300px",
                                            }}
                                        >
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={url}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                                style={{
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="side-title mb-30">
                                            <span className="small-title color-primary position-relative line-primary">
                                                {date}
                                            </span>
                                            <h2 className="title mb-20 color-secondary">
                                                {title}
                                            </h2>
                                            <p>{description}</p>
                                        </div>

                                        {/* <div className="about_box box_shadow1">
                      <div className="heading_s4">
                        <h3 className="color-secondary">{title}</h3>
                      </div>
                      <p>
                        <i style={{
                          fontSize: "15px"
                        }}>{date}</i>
                      </p>
                      <p className="color-secondary">{description}</p>
                    </div> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
