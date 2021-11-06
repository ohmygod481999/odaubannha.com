import React from "react";
import { getStrapiImage } from "../../utils/medias";
import TimeAgo from "../TimeAgo";
function Video({ videos }) {
  return (
    <div className="section mt-50">
      <div className="container">
        <div className="row ">
          <div className="col-md-12 col-lg-9">
            {videos.map((video) => {
              const { title, url, published_at } = video;
              return (
                <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-lg-5">
                    <div
                      className="fancy_style1 overlay_bg_20"
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "56,25%",
                        height: "200px"
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
                          height: "100%"
                        }}
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="about_box box_shadow1">
                      <div className="heading_s4">
                        <h2>{title}</h2>
                      </div>
                      <p>
                        last update at: {"  "}
                        <TimeAgo timestamp={published_at} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="blog-sidebar color-secondary-a">
              <div className="widget py-50 px-30 bg-white  shadow wow slideInDown animated">
                <h3 className="color-secondary line-bottom pb-15 mb-30">
                  Sắp xếp theo
                </h3>
                <ul className="widget-catogory">
                  <li>
                    <a href="#">Mới nhất</a>
                    <a href="#">Cũ nhất</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
