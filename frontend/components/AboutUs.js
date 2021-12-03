import React from "react";
import { getStrapiImage } from "../utils/medias";

function AboutUs({ aboutUsData }) {
  const { section1, section2 } = aboutUsData;
  return (
    <div style={{ width: "100vw" }}>
      <section className="p-0 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="row">
                <div
                  className="experience position-relative wow slideInUp animated"
                  style={{ marginTop: 90 }}
                >
                  <img
                    src={getStrapiImage(section1.image)}
                    alt="Image not found!"
                  />
                  <div className="years text-center color-secondary">
                    <h2>
                      <span className="display-1 d-table mx-auto color-secondary">
                        {section1.year}
                      </span>{" "}
                      {section1.subtitle}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="row">
                <div className="best-help py-80 bg-primary px-30 color-white wow slideInDown animated">
                  <h2 className="color-secondary mb-30">{section1.title}</h2>
                  <p className="mt-15 mb-15">{section1.description}</p>
                  <div style={{ width: 250, height: "auto" }}>
                    <img
                      src={getStrapiImage(section1.imageSign)}
                      alt="Images not found!"
                    />
                    <span>{section1.signName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
      // style={{
      //   background:
      //     "url(images/background/bg-map.png) center center /cover fixed #f9f9f9"
      // }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow slideInDown animated">
              <div className="main-title w-75 mx-auto d-table text-center mb-30">
                <span className="small-title color-primary position-relative line-2-primary">
                  {section2.subtitle}
                </span>
                <h2 className="title mb-20 color-secondary">
                  {section2.title}
                </h2>
                <span className="sub-title">{section2.description}</span>
              </div>
            </div>
            {section2.ChildContent.map((item) => {
              return (
                <div className="col-md-6 col-lg-4 wow slideInUp animated">
                  <div className="service-item bg-white px-30 py-40 mt-30">
                    <div className="service-info hover-secondery-primary">
                      {/* <span className="flat-large icon-primary">
                        <i className="flaticon-house" />
                      </span> */}
                      <a className="my-20 d-table" href="service-details.html">
                        <h4>{item.title}</h4>
                      </a>
                      <p>{item.description}</p>
                      <hr className="border-top-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
