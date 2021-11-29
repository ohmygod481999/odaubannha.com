import React from "react";
import { getStrapiImage } from "../utils/medias";

function Hiring({ hiringData }) {
  const { subtitle, title, description, faq, image, hiringChild } = hiringData;
  const iconClassName = [
    "flaticon-house-2",
    "flaticon-rental",
    "flaticon-interior-design",
    "flaticon-hotel",
    "flaticon-house",
    "flaticon-rental"
  ];
  return (
    <section className="bg-gray">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-12 col-lg-6 mt-50 py-80 px-60"
            style={{
              background: `url(${getStrapiImage(image)}) center center /cover`,
              height: "fit-content"
            }}
          >
            <div className="row">
              {hiringChild.map((child, index) => {
                return (
                  <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInUp mb-20">
                    <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex">
                      <span className="float-left mr-20">
                        <i className={iconClassName[index]} />
                      </span>
                      <h4 className="color-hover-white color-gray-a align-self-center">
                        <a href={child.url ? child.url : "#"}>{child.title}</a>
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-12 col-lg-6 bg-white py-80 px-60 wow animated slideInUp">
            <div className="side-title mb-30">
              <span className="small-title color-primary position-relative line-primary">
                {subtitle}
              </span>
              <h2 className="title mb-20 color-secondary">{title}</h2>
              <p>{description}</p>
            </div>
            <div id="accordion" className="accordion-style-one">
              {faq.map((card, index) => {
                return (
                  <div className="card border-0">
                    <div
                      className="st-top d-inline-block position-relative card-header px-0 border-0 rounded-0 bg-transparent"
                      id="headingone"
                    >
                      <h5 className="mb-0">
                        <button
                          className="d-block border-0 bg-transparent p-0 text-left collapsed"
                          data-toggle="collapse"
                          data-target={`#collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                        >
                          {card.title}
                        </button>
                      </h5>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className="collapse "
                      aria-labelledby="headingone"
                      data-parent="#accordion"
                    >
                      <div className="card-body mb-15">{card.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hiring;
