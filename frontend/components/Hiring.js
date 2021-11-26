import React from "react";

function Hiring({ hiringData }) {
  const { subtitle, title, description, faq } = hiringData;
  return (
    <section className="bg-gray">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-12 col-lg-6 mt-50 py-80 px-60"
            style={{
              background: "url(images/background/9.png) center center /cover",
              height: "fit-content"
            }}
          >
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInUp">
                <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex">
                  <span className="float-left mr-20">
                    <i className="flaticon-house-2" />
                  </span>
                  <h4 className="color-hover-white color-gray-a align-self-center">
                    <a href="#">Apartment</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInRight">
                <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-lg-30">
                  <span className="float-left mr-20">
                    <i className="flaticon-rental" />
                  </span>
                  <h4 className="color-hover-white color-gray-a align-self-center">
                    <a href="#">Building</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInDown">
                <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                  <span className="float-left mr-20">
                    <i className="flaticon-interior-design" />
                  </span>
                  <h4 className="color-hover-white color-gray-a align-self-center">
                    <a href="#">Condominium</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInLeft">
                <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                  <span className="float-left mr-20">
                    <i className="flaticon-hotel" />
                  </span>
                  <h4 className="color-hover-white color-gray-a align-self-center">
                    <a href="#">House</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInUp">
                <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                  <span className="float-left mr-20">
                    <i className="flaticon-house" />
                  </span>
                  <h4 className="color-hover-white color-gray-a align-self-center">
                    <a href="#">Office</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInDown">
                <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                  <span className="float-left mr-20">
                    <i className="flaticon-rental" />
                  </span>
                  <h4 className="color-hover-white color-gray-a align-self-center">
                    <a href="#">Shop</a>
                  </h4>
                </div>
              </div>
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
              {faq.map((card) => {
                return (
                  <div className="card border-0">
                    <div
                      className="st-top d-inline-block position-relative card-header px-0 border-0 rounded-0 bg-transparent"
                      id="headingone"
                    >
                      <h5 className="mb-0">
                        <button
                          className="d-block border-0 bg-transparent p-0 text-left"
                          data-toggle="collapse"
                          data-target="#collapseone"
                          aria-expanded="true"
                          aria-controls="collapseone"
                        >
                          {card.title}
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseone"
                      className="collapse show"
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
